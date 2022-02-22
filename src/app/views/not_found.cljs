(ns app.views.not-found)

(defn view []
  [:div {:class ["h-full" "w-full"
                 "dark:bg-slate-900"
                 "flex" "flex-col" "items-center" "justify-center"]}
   [:h1 {:class ["lg:text-8xl" "text-5xl" "dark:text-white" "my-6"]}
    "404"]
   [:a {:class []
        :href "#/"}
    "Go home"]])
