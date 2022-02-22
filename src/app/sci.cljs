(ns app.sci
  (:refer-clojure :exclude [time])
  (:require
   [app.error :as error]
   [sci.core :as sci]))

(clojure.core/defmacro time
  "Evaluates expr and prints the time it took. Returns the value of expr."
  [expr]
  `(let [start# (cljs.core/system-time)
         ret# ~expr]
     (prn (cljs.core/str "Elapsed time: "
                         (.toFixed (- (system-time) start#) 6)
                         " msecs"))
     ret#))

(def clj-ns (sci/create-ns 'clojure.core nil))

(def namespaces
  {'clojure.core
   {'time (sci/copy-var time clj-ns)
    'system-time (sci/copy-var system-time clj-ns)}})

;; Default sci options
(defonce init-opts {:classes {'js js/window
                              :allow :all}
                    :namespaces namespaces})

;; Sci context inside an atom
(defonce context (atom (sci/init init-opts)))

(defn set-print-fn
  "Setup a custom `print-fn` for sci."
  [f]
  (sci/alter-var-root sci/print-fn (constantly f)))

(defn extend-ctx
  "Extend default sci context merging `opts`."
  [opts]
  (reset! context (sci/merge-opts @context opts)))

(defn eval-string
  "Evaluate `source` using sci and return the output
  or raise throw an exception in case of error."
  [source]
  (try (sci/eval-string* @context source)
       (catch :default e
         (error/error-handler e (:src context))
         (let [sci-error? (isa? (:type (ex-data e)) :sci/error)]
           (throw (if sci-error?
                    (or (ex-cause e) e)
                    e))))))

(sci/eval-form @context '(require '[clojure.repl :refer [find-doc doc apropos dir]]))
