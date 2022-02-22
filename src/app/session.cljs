(ns app.session
  (:refer-clojure :exclude [get set])
  (:require [reagent.core :as r]))

(defonce session
  (r/atom {}))

(defn get [k]
  (k @session))

(defn set! [k v]
  (swap! session assoc k v))

(defn del! [k]
  (swap! session dissoc k))

(defn inc! [k]
  (swap! session update k inc))

(defn dec! [k]
  (swap! session update k dec))
