(ns app.repl.view
  (:require
   [reagent.core :as r]
   [app.utils :as utils :refer [get-val]]
   [app.session :as session]
   [app.keybind :as keybind]))

(defn- scroll-bottom
  "Scroll DOM element `el` to the bottom."
  [el _]
  (when el
    ;; Push the callback at the bottom of the call stack
    (js/setTimeout
     #(set! (.-scrollTop el) (.-scrollHeight el))
     0)))

(defn prompt-el
  "Render the prompt element, extracting color and text
  from the session."
  []
  (let [color (session/get :prompt-color)
        text (session/get :prompt-text)]
    [:span {:class [(or color "text-amber-500 dark:text-amber-400")]}
     (or text "=>")]))

(defn history-el
  "Render a list of div containing the command history
  of the REPL."
  [repl-history]
  [:<>
   (for [[index {:keys [type value]}] (map-indexed vector @repl-history)]
     ^{:key (str "repl-part-" index)}
     [:div {:class ["pl-2" (when (= type :special) "mt-1 mb-2")]}
      ;; Show prompt if item is input
      (condp = type
        :input [prompt-el]
        :input-multi [:span ">"]
        nil)
      [:span {:class ["px-2"
                      (when (= type :error) "text-red-400")
                      (when (= type :special) "text-gray-500 italic")]}
       value]])])

(defn repl-view [{:keys [repl-multiline
                         repl-input
                         repl-history
                         input-placeholder
                         input-el
                         on-keydown]}]
  (r/with-let [container-el (r/atom nil)
               has-focus (r/atom false)
               ;; Include repl-history to track any change to the atom
               ;; and scroll to the bottom when new items are added
               scroll-watch (r/track! #(scroll-bottom
                                        @container-el
                                        @repl-history))]
    [keybind/with-keybind {:ctrl-c (fn [e]
                                     (reset! repl-input nil)
                                     (reset! repl-multiline nil)
                                     (reset! input-placeholder nil)
                                     (.preventDefault e))}
     [:div {:class ["border border-gray-300 dark:border-0 rounded-md bg-white" 
                    "dark:bg-slate-800 font-mono text-sm text-black dark:text-white" 
                    "sm:h-[500px] h-[200px] xl:max-w-[618px] lg:max-w-[518px]"
                    "md:max-w-[350px] overflow-auto p-3 -my-8 shadow-2xl"]
            :ref #(reset! container-el %)}
      [history-el repl-history]
      [:div {:class ["flex" "flex-row" "pl-2"]}
       (if (empty? @repl-multiline)
         [prompt-el]
         [:span ">"])
       [:input {:class ["flex-1 px-2 outline-none bg-transparent"]
                :type "text"
                :autoComplete "off"
                :autoCorrect "off"
                :autoCapitalize "off"
                :spellCheck "false"
                :placeholder @input-placeholder
                :ref #(reset! input-el %)
                :value @repl-input
                :on-focus #(reset! has-focus true)
                :on-blur #(reset! has-focus false)
                :on-key-down on-keydown
                :on-change #(reset! repl-input (get-val %))}]]]]
    ;; Clean up the tracker when component gets destroyed
    (finally (r/dispose! scroll-watch))))
