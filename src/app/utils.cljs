(ns app.utils)

(def console-log
  "Log string to browser console."
  (.-log js/console))

(defn get-val
  "Get the value from event target."
  [evt]
  (-> evt .-target .-value))

(defn in?
  "Returns true if `coll` contains `el`."
  [coll el]
  (some #(= el %) coll))
