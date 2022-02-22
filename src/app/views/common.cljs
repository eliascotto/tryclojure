(ns app.views.common
  (:require
   [clojure.string :as string]
   [app.env :refer [DEBUG]]))

(defn header []
  [:div {:class ["xl:my-10"
                 "lg:my-5"
                 "md:my-5"
                 "my-3"
                 "mx-auto"
                 "w-full"
                 "px-2"
                 "lg:px-0"
                 "flex"
                 "flex-row"
                 "items-center"
                 "justify-between"]}
   [:div {:class ["flex" "flex-row" "items-center"]}
    [:img {:class ["w-12" "mr-1"
                   "lg:w-20" "lg:mr-2"]
           :src "https://clojure.org/images/clojure-logo-120b.png"}]
    [:h1 {:class ["lg:text-5xl"
                  "text-2xl"
                  "font-bold"
                  "font-sans"
                  "text-slate-700"
                  "dark:text-white"
                  "tracking-tighter"]}
     "Try Clojure"]]
   [:div {:class ["flex" "flex-row" "items-center" "justify-around"]}
    [:a {:href "https://github.com/elias94/tryclojure" :target "_blank"}
     [:svg {:class ["text-gray-500"
                    "dark:text-white"
                    "text-opacity-50"
                    "dark:text-opacity-50"
                    "hover:text-opacity-100"]
            :fill "currentColor" :height "24" :width "24"}
      [:path
       {:d "M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
        :clip-rule "evenodd"
        :fill-rule "evenodd"}]]]
    (when DEBUG
      [:a {:class ["mx-2" "text-gray-400" "hover:text-white" "underline-none"]
           :href "#/all"}
       (string/capitalize "all")])]])

(defn footer []
  [:div {:class []}
   [:p {:class ["text-sm" "text-gray-700" "dark:text-gray-500" "text-center"
                "italic" "mb-4"]}
    "Created with Clojurescript by "
    [:a {:href "https://scotto.me" :target "_blank"}
     "Elia Scotto"]
    " ("
    [:a {:href "https://twitter.com/elia_scotto" :target "_blank"}
     "@elia_scotto"]
    ")"
    ", thanks to the amazing Clojure "
    [:a {:href "https://clojure.org/community/resources" :target "_blank"}
     "community"] "."]])
