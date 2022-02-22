(ns app.repl
  (:require
   [clojure.string :as string]
   [reagent.core :as r]
   [app.sci :as sci]
   [app.utils :as utils :refer [get-val in?]]
   [app.env :refer [debug DEBUG]]
   [app.session :as session]
   [app.tutorial :refer [tutorial]]))

;; Collection of map with the REPL command history.
(defonce repl-history
  (r/atom [{:type :special
            :value "Type your Clojure symbolic expressions here"}]))

;; Store the REPL input while typed in the input el
(defonce repl-input (r/atom nil))

;; Store a multiline command as a single string
(defonce repl-multiline (r/atom nil))

(defn write-repl!
  "Append `s` to the REPL history.
  Optional keyword `k` to use as a type."
  ([s]
   (write-repl! s :output))
  ([s k]
   (swap! repl-history concat [{:type k :value s}])))

(defn inc-step!
  "Increment the current tutorial steps."
  []
  (session/inc! :step))

(defn dec-step!
  "Increment the current tutorial steps."
  []
  (session/dec! :step))

(defn tutorial-active? []
  (true? (session/get :tutorial)))

;; -------------------------
;; SCI utils
;; -------------------------

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
  (reset! session/session {}))

(defn set-name
  "Save user name into the session."
  [s]
  (when (string? s)
    (session/set! :user-name s)
    {:user-name s}))

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
                                     'set-step (when DEBUG (fn [v] (session/set! :step v)))
                                     'set-prompt set-prompt
                                     'more (fn [] true)}}})

;; -------------------------
;; REPL element
;; -------------------------

(defn check-tutorial-test
  "Check if the sci output pass the test function.
  If it does, increase the tutorial step."
  [out]
  (when (tutorial-active?)
    (let [step-idx (session/get :step)
          step (nth tutorial step-idx)
          test-fn (:test step)]
      (try (when (test-fn out)
             (println "HUUUUUUU")
             (inc-step!))
           (catch :default _)))))

(defn format-output
  "Return formatted output for REPL print."
  [out]
  (cond
    (nil? out) "nil"
    (string? out) (str "\"" out "\"")
    :else (str out)))

(defn input-command
  "Return the entire command typed into the REPL.
  Update the repl-multiline in case."
  []
  (if (empty? @repl-multiline) @repl-input @repl-multiline))

(defn update-multiline! []
  (when (not-empty @repl-multiline)
    (->> (str @repl-multiline @repl-input)
         (reset! repl-multiline))))

(defn write-input! [in]
  (if (empty? @repl-multiline)
    (write-repl! in :input)
    (write-repl! in :input-multi)))

(defn on-keydown
  "Onkeydown event for the REPL input; Evaluate the string
  using SCI and add the output/error to the REPL. Manage
  the last command using arrow-up and a basic multiline
  in case of EOF error."
  [e]
  (let [in @repl-input]
    ;; Enter
    (when (and (= (.-key e) "Enter") (not-empty in))
      (debug "input: " in)
      (update-multiline!)
      (write-input! in)
      (let [cmd (input-command)]
        (try (let [out (sci/eval-string cmd)
                   out-str (format-output out)]
               (check-tutorial-test out)
               (debug "output: " out)
               (reset! repl-input nil)
               (reset! repl-multiline nil)
               ;; Append to history
               (write-repl! out-str))
             (catch :default e
               (cond (string/includes? (.-message e) "EOF while reading")
                     (do (reset! repl-input nil)
                         (reset! repl-multiline cmd))
                     :else
                     (do (reset! repl-input nil)
                         (reset! repl-multiline nil)
                         ;; Append error to history
                         (write-repl! (.-message e) :error)))))))
    ;; Arrow Up
    (when (= (.-key e) "ArrowUp")
      (let [inputs (filter #(= (:type %) :input) @repl-history)
            last-in (last inputs)]
        (reset! repl-input (:value last-in))))))

(defn prompt
  "Render the prompt element, extracting color and text
  from the session."
  []
  (let [color (session/get :prompt-color)
        text (session/get :prompt-text)]
    [:span {:class [(or color "text-amber-500 dark:text-amber-400")]}
     (or text "=>")]))

(defn history-view
  "Render a list of div containing the command history
  of the REPL."
  []
  [:<>
   (for [[index {:keys [type value]}] (map-indexed vector @repl-history)]
     ^{:key (str "repl-part-" index)}
     [:div {:class ["pl-2" (when (= type :special) "mt-1 mb-2")]}
      ;; Show prompt if item is input
      (condp = type
        :input [prompt]
        :input-multi [:span ">"]
        nil)
      [:span {:class ["px-2"
                      (when (= type :error) "text-red-400")
                      (when (= type :special) "text-gray-500 italic")]}
       value]])])

(defn scroll-bottom
  "Scroll DOM element `el` to the bottom."
  [el _]
  (when el
    ;; Push the callback at the bottom of the call stack
    (js/setTimeout
     #(set! (.-scrollTop el) (.-scrollHeight el))
     0)))

;; External to the component because needs to be used by
;; the focus function
(defonce input-el (r/atom nil))

(defn focus-input []
  (.focus @input-el))

(defn repl-el []
  (r/with-let [container-el (r/atom nil)
               has-focus (r/atom false)
               ;; Include repl-history to track any change to the atom
               ;; and scroll to the bottom when new items are added
               scroll-watch (r/track! #(scroll-bottom
                                        @container-el
                                        @repl-history))]
    [:div {:class ["border"
                   "border-gray-300"
                   "dark:border-0"
                   "rounded-md"
                   "bg-white"
                   "dark:bg-slate-800"
                   "font-mono"
                   "text-sm"
                   "text-black"
                   "dark:text-white"
                   "sm:h-[500px]"
                   "h-[200px]"
                   "xl:max-w-[618px]"
                   "lg:max-w-[518px]"
                   "md:max-w-[350px]"
                   "overflow-auto"
                   "p-3"
                   "-my-8"
                   "shadow-2xl"]
           :ref #(reset! container-el %)
           :on-click focus-input}
     [history-view]
     [:div {:class ["flex" "flex-row" "pl-2"]}
      (if (empty? @repl-multiline)
        [prompt]
        [:span ">"])
      [:input {:class ["flex-1"
                       "px-2"
                       "outline-none"
                       "bg-transparent"]
               :ref #(reset! input-el %)
               :value @repl-input
               :on-focus #(reset! has-focus true)
               :on-blur #(reset! has-focus false)
               :on-key-down on-keydown
               :on-change #(reset! repl-input (get-val %))}]]]
    (finally (r/dispose! scroll-watch))))
