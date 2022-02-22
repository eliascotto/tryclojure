(ns app.session
  (:refer-clojure :exclude [get set])
  (:require [reagent.core :as r]))

(def initial-db
  {:user-name "Young Clojurian"})

(defonce session
  (r/atom initial-db))

(defn get [k]
  (k @session))

(defn set! [k v]
  (swap! session assoc k v))

(defn has? [k]
  (contains? @session k))

(defn del! [k]
  (swap! session dissoc k))

(defn inc! [k]
  (swap! session update k inc))

(defn dec! [k]
  (swap! session update k dec))

(defn reset-session! []
  (reset! session initial-db))
