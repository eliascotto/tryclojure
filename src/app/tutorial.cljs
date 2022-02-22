(ns app.tutorial
  (:require
   [clojure.string :as string]
   [sci.impl.vars :refer [SciVar]]))

(def tutorial
  "Collection of map steps."
  [;; Strings
   {:title
    "Hello string!"
    :content
    "> Learn the principle, abide by the principle, and dissolve the principle. - Bruce Lee
     
  Let's start with the basic. Clojure offers the most common data types, like integers,
     booleans and strings. Strings are surrounded by `\"`.
    
  Try creating a string saying *hello* to the *world*, as `\"Hello World\"`"
    :test #(= (string/lower-case %) "hello world")}
   ;; Lists
   {:title "Embrace the lists"
    :content
    "> Lisp is the greatest single programming language ever designed - Alan Kay
    
  Lisp stands for *LISt Processing* and its peculiarity is that code is written in [lists](https://en.wikipedia.org/wiki/S-expression). Clojure is a Lisp dialect so it uses a similar syntax.

  A list is a collection of items as `(1 2 3)`. In Clojure you can
     create lists using `list` or prepending `'`.

  Create a list of elements for example `(list 1 2 3)` or `'(1 2 3)`."
    :test #(list? %)}
   ;; Math
   {:title "Math is (fun)"
    :content
    "In Clojure mathematical operators are like normal functions. 
     As you already know, you have to include them in parentheses `(...)`.
  
  So instead of `4 + 2` you will do `(+ 4 2)`. Try to type a numerical operation with `+-/*`."
    :test #(number? %)}
   ;; Functions
   {:title "Clojure is functional"
    :content
    "> Lisp is functional. And the future is looking very functional to me. - Robert C. Martin
  
  The first argument of a list needs to be a **function**. The *rest*, 
     are the arguments to that function. In the expression `(not true)`,
     *not* is the negation function and *true* is the argument. 
     
  Try to use the function `(my-name)` followed by your name as a \"string\", as `(my-name \"Elia\")`."
    :test #(and (map? %) (contains? % :user-name) (string? (:user-name %)))}
   ;; Keywords
   {:title "Don't forget the keys"
    :content
    "> These days, the problem isn't how to innovate; it's how to get society to adopt the good ideas that already exist. - Douglas Engelbart
     
  Hi there, **[[user-name]]**! Nice to meet you.
    
  In the REPL you are getting back the evaluation of the expression that you typed.
    As you can see, `:user-name` is in a special form; it's called a *keyword*.
    You have to prepend `:` to a word to create one. 
     
  Use the keyword `:next` to continue."
    :test #(= % :next)}
   ;; Exercise - 01
   {:title "A function for everything"
    :content
    "Let's tweak our interface!
     
  You already know how to invoke functions, how to use keywords and strings.
     What if I tell you that you can change the prompt?

  You can call functions with keywords parameters, as `(create-dog :name \"Zeus\" :breed \"Beagle\")`
     
  Use the function `(set-prompt)` and set a color. It accepts optionally `:color` and `:text` as strings. 
     Or click on `(set-prompt :color \"red\")`"
    :test #(contains? % :prompt-color)}
   ;; 
   {:title "Functional practicioner!"
    :content
    "Congratulations, you have called a function and changed the state of the application! 
     And the entire command was… a list!
                                                                                     
  Clojure offers multiple functions to work with lists, as `reverse`. It reverse a collection
     so if you pass a string will use it as a collection of characters.
     
  Type `(reverse \"a-long-string\")` to advance at the next step."
    :test #(= % (reverse "a-long-string"))}
   ;; Vectors
   {:title "We have vectors"
    :content
    "> Lisp is worth learning for the profound enlightenment experience you will have when you finally get it. - Eric Raymond
     
  **Vectors** (aka arrays) contain sequential elements and they have a faster access compared to lists.
     
  To create a vector you need to include the items into squared brackets `[]` without any separator.
     
  Create a vector of elements, like your favorite names for cats `[\"luna\" \"milu\" \"boris\"]`. "
    :test #(vector? %)}
   ;; Variables
   {:title "Def your variables"
    :content
    "> Good programmers don't just write programs. They build a working vocabulary. - Guy Steele
                                                                                     
  **Global** variables are defined using `def`. Their value could be anything.
     
  Create a global variable called `foo` with a value. E.g. `(def foo \"bar\")`"
    :test #(and (instance? SciVar %) (= "foo" (-> (.-meta %) :name str)))}
   ;; Let
   {:title "Let it be local"
    :content
    "> Lisp is so great not because of some magic quality visible only to devotees, but because it is simply the most powerful language available. - Paul Graham
     
  **Local** variables could be defined using `let`. They will be available only
     inside the lexical context of the `let`. In the expression `(let [x 1] x)`
     you can refer to x only inside the `body` part delimited by `()`.
     
  Create numeric variables and multiply them like `(let [a 2 b 3] (* a b))`."
    :test #(number? %)}
   ;; Maps
   {:title "Maps are dictionaries"
    :content
    "> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler
     
  Maps are collections that map *keys* to *values*. They're wrapped into `{}`. 
     You can use everything as a key but Clojure programmers mostly use keywords.
     
  Create a map with a key `:country` and your country as a string. 
     Like `{:country \"Australia\"}`."
    :test #(and (map? %) (contains? % :country) (string? (:country %)))}
   ;; F-list
   {:title "First of list"
    :content
    "Clojure offers some functions to extract content from the list. For example, 
     `first` returns the first element.
     
  Type `(first '(\"alpha\" \"bravo\" \"charlie\"))` to get the first element."
    :test #(and (string? %) (= "alpha" %))}
   ;; Range
   {:title "Range of N"
    :content
    "The Clojure function `range` creates a list of numbers from 0 to `n`. 
     So `(range 5)` will return numbers from 0 to 5.
     
  Create a range from 0 to 99 or click on `(range 100)` :)."
    :test #(= % (range 100))}
   ;; Filter
   {:title "Filter a list"
    :content
    "We can apply functions to a list. For example, using `filter` we can remove
     all the elements that are not respecting our condition.
     
  Try to remove all the *even* numbers from 0 to 50. Psst, `(filter odd? (range 50))`"
    :test #(= % (filter odd? (range 50)))}
   ;; Map
   {:title "Apply functions on lists"
    :content
    "If we want a list of multiples of 11 less than 100, the process to find them
     is to take each number from 1 to 9, multiply it by 10 and add it to the number, as
     `5 * 10 + 5 = 55`. We can do the same thing with Clojure using `map`.

  `map` simply applies a function to every element of a list. 
     
  So use `(map (fn [n] (+ n (* n 10))) (range 1 10))` to do it."
    :test #(= % (map (fn [n] (+ n (* n 10))) (range 1 10)))}
    ;; Inline functions
    {:title "Inline functions"
     :content
     "In the previous step, we wrote an inline function and passed it as argument
      to `map`. I'm referring to `(fn [n] (+ n (* n 10)))`. This technique is useful to create
      functions as *generic utilities* and not write them for a specific use case.
      
  Now create a function that takes `l` and `b` and returns the perimeter of a rectangle:
      
  `(fn [l b] (* (+ l b) 2))`."
     :test #(= (apply % [2 3]) 10)}
   ;; REPL
   {:title "REPL driven development"
    :content
    "> The only way to learn a new programming language is by writing programs in it. - Kernighan and Ritchie
     
  You’re currently solving a list of problems by typing code into the REPL and testing it. 
     That’s exactly what a Clojurist does! It's faster to test your code while typing than compiling and debugging it later!
     
  But Clojure is much more than this. Type `(more)` to go to the last step."
    :test #(true? %)}
    {:title "It's time to learn Clojure!"
     :content
     "> In the beginner’s mind there are many possibilities, but in the expert’s there are few - Zen Mind, Beginner's Mind
      
  Clojure is **not** as difficult as it seems. Parentheses, functions, immutable data structures and the REPL
      will become your friends. Just keep a beginner's mind!
      
  Some good resources to start are [Clojure koans](http://clojurekoans.com/), [4Clojure](https://4clojure.oxal.org/) or [exercism](https://exercism.org/tracks/clojure).

  Ask the community for support, good luck!"
     :test #(true? false)}])
