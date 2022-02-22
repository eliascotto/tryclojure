(ns app.env)

(goog-define DEBUG false)

(defn debug [& args]
  (when DEBUG
    (.log js/console (apply str (into ["DEBUG "] args)))))

