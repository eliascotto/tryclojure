(ns app.repl.core
  (:require
   [clojure.string :as string]
   [reagent.core :as r]
   [app.sci :as sci]
   [app.utils :as utils :refer [in?]]
   [app.env :refer [debug DEBUG]]
   [app.session :as session]
   [app.tutorial :refer [tutorial]]
   [app.repl.view :refer [repl-view]]))

;; Collection of map with the REPL command history.
(defonce repl-history
  (r/atom [{:type :special
            :value "Type your Clojure symbolic expressions here"}]))

;; Store the REPL input while typed in the input el
(defonce repl-input (r/atom nil))

;; Store a multiline command as a single string
(defonce repl-multiline (r/atom nil))

;; External to the component because needs to be used by
;; the focus function
(defonce input-el (r/atom nil))

;; Set a command input placeholder in case of EOF error
(defonce input-placeholder (r/atom nil))

(defn- write-repl!
  "Append `s` to the REPL history.
  Optional keyword `k` to use as a type."
  ([s]
   (write-repl! s :output))
  ([s k]
   (swap! repl-history conj {:type k :value s})))

(defn tutorial-active? []
  (true? (session/get :tutorial)))

;; -------------------------
;; SCI utils
;; -------------------------

(defn inc-step!
  "Increment the current tutorial steps."
  []
  (let [tut-len (count tutorial)
        curr-step (session/get :step)]
    (when (< curr-step (dec tut-len))
      (session/inc! :step))
    nil))

(defn dec-step!
  "Increment the current tutorial steps."
  []
  (session/dec! :step)
  nil)

(defn print-help
  "Print helper to screen."
  []
  (let [help-str ["Helper functions:"
                  ""
                  "start     - Starts the tutorial"
                  "restart   - Restarts the tutorial"
                  "clear     - Clears the entire REPL"
                  "next-step - Jumps to the next step"
                  "prev-step - Jumps to the previous step"
                  ""
                  "Use (doc name) for print the documentation of a function or a var given its name."
                  ""
                  "Press Ctrl-C to clear the REPL input."]]
    (doseq [s help-str]
      (write-repl! s)))
  nil)

(defn start-tutorial
  "Start the tutorial setting the initial step into the session."
  []
  (session/set! :tutorial true) ; activate the tutorial
  (session/set! :step 0)
  "Tutorial started!")

(defn clear-repl
  "Delete all the repl history."
  []
  (reset! repl-history [])
  nil)

(defn restart-tutorial
  "Reset the tutorial session."
  []
  (session/reset-session!))

(defn set-name
  "Save user name into the session."
  [s]
  (when (string? s)
    (session/set! :user-name s)
    {:user-name s}))

(defn set-step
  "Navigate the tutorial to a specific step."
  [step]
  (session/set! :step step))

(defn set-prompt
  "Change the prompt style."
  [& {:keys [color text]}]
  (when (string? text)
    (session/set! :prompt-text text))
  (when (string? color)
    (let [;; Required by tailwind to import classes into styles
          valid-colors ["text-amber-400"
                        "text-yellow-400"
                        "text-red-400"
                        "text-green-400"
                        "text-orange-400"
                        "text-slate-400"
                        "text-gray-400"
                        "text-teal-400"
                        "text-lime-400"
                        "text-blue-400"
                        "text-violet-400"
                        "text-purple-400"
                        "text-pink-400"
                        "text-rose-400"
                        "text-emerald-400"]
          full-color (str "text-" (string/lower-case color) "-400")
          colors ["amber" "yellow" "red" "green" "orange" "slate" "gray" "teal"
                  "lime" "blue" "violet" "purple" "pink" "rose" "emerald"]]
      (if (in? valid-colors full-color)
        (session/set! :prompt-color full-color)
        (str "Invalid color: "
             color
             "! Valid colors are: "
             (string/join " " colors)
             ".")))))

;; Initialize an internal print funcion
(sci/set-print-fn (fn [s] (write-repl! s)))

;; Append the start-tutorial function as 'start
(sci/extend-ctx {:namespaces {'user {'start start-tutorial
                                     'clear clear-repl
                                     'restart restart-tutorial
                                     'my-name set-name
                                     'next-step inc-step!
                                     'prev-step dec-step!
                                     'set-step (when DEBUG set-step)
                                     'set-prompt set-prompt
                                     'more (fn [] true)
                                     'help print-help}}})

;; Add REPL functions like `doc`
(sci/eval-string "(require '[clojure.repl :refer :all])")

;; -------------------------
;; REPL element
;; -------------------------

(defn- check-tutorial-test
  "Check if the sci output pass the test function.
  If it does, increase the tutorial step."
  [out]
  (when (tutorial-active?)
    (let [step-idx (session/get :step)
          step (nth tutorial step-idx)
          test-fn (:test step)]
      (try (when (test-fn out)
             (debug "TEST PASSED")
             (inc-step!))
           (catch :default _)))))

(defn- input-command
  "Return the entire command typed into the REPL.
  Update the repl-multiline in case."
  [in]
  (if (empty? @repl-multiline) in @repl-multiline))

(defn- update-multiline!
  "If `repl-multiline` is not empty, append `repl-input` value
  to it."
  [in]
  (when (not-empty @repl-multiline)
    (->> (str @repl-multiline in)
         (reset! repl-multiline))))

(defn- write-input!
  "Append the current input to the respective atom."
  [in]
  (if (empty? @repl-multiline)
    (write-repl! in :input)
    (write-repl! in :input-multi)))

(defn- reset-input!
  "Reset both the atom and the input value
  to avoid on-change event wrong behaviour."
  []
  (reset! repl-input nil)
  (set! (.-value @input-el) ""))

(defn- handle-keydown
  "Onkeydown event for the REPL input; Evaluate the string
  using SCI and add the output/error to the REPL. Manage
  the last command using arrow-up and a basic multiline
  in case of EOF error."
  [e]
  (let [in @repl-input]
    ;; Enter
    (when (and (= (.-key e) "Enter") (not-empty in))
      (let [in (str in \newline)]
        (debug "input: " (pr-str in))
        (update-multiline! in)
        (write-input! in)
        (let [cmd (input-command in)]
          (try (let [out (sci/eval-string cmd)
                     out-str (binding [*print-length* 20]
                               (pr-str out))]
                 (check-tutorial-test out)
                 (debug "output: " out-str)
                 (reset! repl-multiline nil)
                 (reset! input-placeholder nil)
                 ;; Append to history
                 (write-repl! out-str))
               (catch :default e
                 (debug "error" (ex-data e))
                 (cond (string/includes? (.-message e) "EOF while reading")
                       (let [err-data (ex-data e)
                             delimiter (:edamame/expected-delimiter err-data)
                             col (:column err-data)]
                         (reset! repl-multiline cmd)
                         (reset! input-placeholder (str "Expected delimiter `"
                                                        delimiter
                                                        "` column: "
                                                        col)))
                       :else
                       (do (reset! repl-multiline nil)
                           (reset! input-placeholder nil)
                           ;; Append error to history
                           (write-repl! (.-message e) :error))))))
        (reset-input!)))
    ;; Arrow Up
    (when (= (.-key e) "ArrowUp")
      (let [inputs (filter #(= (:type %) :input) @repl-history)
            last-in (last inputs)]
        (reset! repl-input (:value last-in))))))

(defn focus-input
  "Focus on REPL input element."
  []
  (.focus @input-el))

(defn view []
  [:<>
   [repl-view
    {:input-el input-el
     :input-placeholder input-placeholder
     :on-keydown handle-keydown
     :repl-input repl-input
     :repl-history repl-history
     :repl-multiline repl-multiline}]])
