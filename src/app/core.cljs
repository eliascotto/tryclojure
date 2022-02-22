(ns app.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [reitit.frontend.controllers :as rfc]
   [reitit.frontend.easy :as rfe]
   [reitit.core :as reitit]
   [app.env :refer [DEBUG]]
   [app.views.home :as home]
   [app.views.not-found :as not-found]
   [app.views.common :refer [header footer]]
   [app.views.all :as all]))

;; Atom for route matching
;; see: https://github.com/metosin/reitit/blob/master/examples/frontend/src/frontend/core.cljs
(defonce match (r/atom nil))

(defn main []
  [:div
   (if-let [m @match]
     (let [view (-> m :data :view)]
       [:div {:class ["flex"
                      "flex-col"
                      "h-full"
                      "w-full"
                      "bg-white"
                      "dark:bg-slate-900"]}
        [:div {:class ["xl:w-[1080px]"
                       "lg:w-[980px]"
                       "md:w-[700px]"
                       "sm:w-[600px]"
                       "w-full"
                       "mx-auto"
                       "h-full"
                       "flex"
                       "flex-col"
                       "justify-between"]}
         [header]
         [view]
         [footer]]])
     [not-found/view])])

;; -------------------------
;; Router
;; -------------------------

(def router
  (reitit/router
   [["/" {:name :index
          :view home/view}]
    (when DEBUG
      ["/all" {:name :all
               :view all/view}])]))

(defn navigate! [new-match]
  (swap!
   match
   (fn [old-match]
     (when new-match
       (->> (-> (:controllers old-match)
                (rfc/apply-controllers new-match))
            (assoc new-match :controllers))))))

(defn start-router! []
  (rfe/start! router navigate! {:use-fragment true}))

;; -------------------------
;; Initialize app
;; -------------------------

(defn ^:dev/after-load mount []
  (rdom/render
   [main]
   (js/document.getElementById "app")))

(defn init! []
  (start-router!)
  (mount))

(init!)
