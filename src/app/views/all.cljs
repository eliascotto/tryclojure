(ns app.views.all
  (:require
   [markdown.core :refer [md->html]]
   [app.tutorial :refer [tutorial]]))

(defn view []
  [:div {:class ["bg-gray-200"
                 "text-black"
                 "dark:text-white"
                 "dark:bg-gray-800"
                 "shadow-lg"
                 "rounded-l-md"
                 "w-full"
                 "h-min"
                 "p-8"
                 "h-auto"
                 "opacity-95"
                 "transition-all
                  z-10"]}
   (for [step tutorial]
     (let [title (:title step)
           content (:content step)]
       ^{:key (str "step-" title)}
       [:div
        [:h1 {:class ["text-3xl" "mb-4" "font-bold" "tracking-tight"]}
         title]
        [:div {:class ["leading-relaxed"]
               :dangerouslySetInnerHTML #js{:__html (md->html content)}}]
        [:hr {:class ["my-10"]}]]))])
