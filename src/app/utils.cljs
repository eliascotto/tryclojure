(ns app.utils
  (:require
   [clojure.string :as str]))

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

(def mac-os?
  "Return true if platform is MacOS."
  (and (exists? js/navigator)
       (.test #"Mac" (.-platform js/navigator))))

(defn escape-html
  "Change special characters into HTML character entities. Unsafe."
  [s]
  (-> s
      (str/replace "<"  "&lt;")
      (str/replace ">"  "&gt;")))

(defn count-lines 
  "Count lines of give string `s`."
  [s]
  (-> s
      (str/split #"\r\n|\r|\n")
      count))

(defn get-cursor-position 
  "Returns a map of current cursor positions."
  [input-element]
  {:start (.-selectionStart input-element)
   :end (.-selectionEnd input-element)})


(defn set-cursor-position 
  [input-elem position]
  (when (.-setSelectionRange input-elem)
    (.focus input-elem)
    (.setSelectionRange input-elem position position)))