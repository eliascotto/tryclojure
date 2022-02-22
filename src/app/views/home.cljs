(ns app.views.home
  (:require
   [reagent.core :as r]
   [clojure.string :as string]
   [app.repl :as repl :refer [repl-el]]
   [markdown.core :refer [md->html]]
   [app.session :as session]
   [app.tutorial :refer [tutorial]]))

(def intro-title
  "Got 5 minutes?")

(def intro-content
  "> If you want everything to be familiar, you'll never learn anything new. - Rich Hickey

Let's have some fun! Here on the right you have a **REPL**, a command line
with a _read-eval-print_ loop. Everything you write will be evaluated. 
Try to type some expressions as `(+ 1 2)` or click on code to auto insert. 
   You can type `(help)` for more commands.
   
Type `(start)` when you're ready!")

(defn compute-step
  "Returns a list of `title` and `content`
  based on the current step stored into the session."
  []
  (if (repl/tutorial-active?)
    (let [step-idx (session/get :step)
          step (nth tutorial step-idx)]
      [(:title step) (:content step)])
    [intro-title intro-content]))

(defn- link-target [text state]
  [(string/replace text #"<a " "<a target=\"_blank\" ")
   state])

(def re-doublebrackets #"(\[\[(.+)\]\])")

(defn- session-vars [text state]
  [(let [res (re-find re-doublebrackets text)]
     (if res
       (let [k (keyword (last res))
             v (session/get k)]
         (string/replace text re-doublebrackets v))
       text))
   state])

(defn- parse-md [s]
  (md->html s :custom-transformers [link-target session-vars]))

;; -------------------------
;; Views
;; -------------------------

(defn tutorial-view [[title content]]
  (r/with-let [click-fn (fn [e]
                          (let [target (.-target e)
                                node-name (.-nodeName target)]
                            (when (= node-name "CODE")
                              (->> (.-textContent target)
                                   (reset! repl/repl-input))
                              (repl/focus-input))))]
    [:div {:class ["bg-gray-200"
                   "text-black"
                   "dark:text-white"
                   "dark:bg-gray-800"
                   "shadow-lg"
                   "sm:rounded-l-md"
                   "xs:rounded-t-md"
                   "w-full"
                   "md:p-8"
                   "p-6"
                   "min-h-[200px]"
                   "opacity-95"]
           :on-click click-fn}
     [:h1 {:class ["text-3xl" "mb-4" "font-bold" "tracking-tight"]}
      title]
     [:div {:class ["leading-relaxed" "last:pb-0"]
            :dangerouslySetInnerHTML #js{:__html (parse-md content)}}]]))

(defn view []
  [:div {:class ["flex"
                 "sm:flex-row"
                 "flex-col"
                 "items-center"
                 "justify-center"
                 "xl:-mt-32"
                 "lg:-mt-8"
                 "mt-0"]}
   [:div {:class ["flex-1" "z-0"]}
    [tutorial-view (compute-step)]]
   [:div {:class ["flex-1"
                  "z-10"
                  "sm:w-auto"
                  "w-full"
                  "sm:mt-0"
                  "mt-7"
                  "sm:mb-0"
                  "mb-14"]}
    [repl-el]]])
