(ns app.keybind
  (:require
   [reagent.core :as r]
   [clojure.string :as string]
   [app.utils :as utils]))

(def ^:private key-evt-attrs
  "Map from keywords to event attributes names."
  {:shift "shiftKey"
   :ctrl "ctrlKey"
   :alt "altKey"
   :meta "metaKey"
   :key "key"})

(def ^:private default-keymap
  "Default keymap representing a key binding."
  {:shift false
   :ctrl false
   :alt false
   :meta false
   :key nil})

(defn- convert-keys
  "Return a keymap extracted from a key binding.

  e.g.
  (convert-keys :cmd-p)
  ;; => {:shift false, :ctrl false, :alt false, :meta true, :key \"p\"}"
  [keybind-kw]
  (let [keybind (name keybind-kw)
        parts (.split keybind #"-")
        keymap (assoc default-keymap :key (last parts))]
    (if (> (count parts) 1)
      (loop [metas (drop-last parts)
             km keymap]
        (if (empty? metas)
          km
          (recur (rest metas)
                 (let [k (-> metas first keyword)]
                   (if (utils/in? (keys km) k)
                     (assoc km k true)
                     (if (= k :cmd)
                       (assoc km (if utils/mac-os? :meta :ctrl) true)
                       (throw
                        (js/Error.
                         (str "Invalid meta key for binding: " keybind-kw)))))))))
      keymap)))

(defn- bind-keys
  "Return a new map with all keymaps from m associated 
  with the respective function."
  [m]
  (loop [coll (seq m)
         bindings {}]
    (if (empty? coll)
      bindings
      (let [[k v] (first coll)]
        (recur
         (rest coll)
         (assoc bindings (convert-keys k) v))))))

(defn with-keybind
  "Reagent component that bind all key combinations
  from m into the respective callback functions.
  It automatically remove all the listeners."
  [m _]
  (r/with-let [bindings @(r/atom (bind-keys m))]
    (let [kd-handler (fn [e]
                       (let [evt-map (into {} (for [[key attr] key-evt-attrs]
                                                [key (aget e attr)]))
                             evt-map (->> (:key evt-map)
                                          (string/lower-case)
                                          (assoc evt-map :key))]
                         (when-let [bind-fn (get bindings evt-map)]
                           (bind-fn e))))]
      (r/create-class
       {:display-name "keybinding component"

        :component-did-mount
        #(js/window.addEventListener "keydown" kd-handler false)

        :component-will-unmount
        #(js/window.removeEventListener "keydown" kd-handler)

        :reagent-render (fn [_ children] children)}))))
