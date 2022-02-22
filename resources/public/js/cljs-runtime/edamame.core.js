goog.provide('edamame.core');
/**
 * Parses first EDN value from string.
 * 
 *   Supported parsing options:
 * 
 *   `:deref`: parse forms starting with `@`. If `true`, the resulting
 *   expression will be parsed as `(deref expr)`.
 * 
 *   `:fn`: parse function literals (`#(inc %)`). If `true`, will be parsed as `(fn [%1] (inc %))`.
 * 
 *   `:quote`: parse quoted expression `'foo`. If `true`, will be parsed as `(quote foo)`.
 * 
 *   `:read-eval`: parse read-eval (`=(+ 1 2 3)`). If `true`, the
 *   resulting expression will be parsed as `(read-eval (+ 1 2 3))`.
 * 
 *   `:regex`: parse regex literals (`#"foo"`). If `true`, defaults to
 *   `re-pattern`.
 * 
 *   `:syntax-quote`: parse syntax-quote (`(+ 1 2 3)`). Symbols get
 *   qualified using `:resolve-symbol` which defaults to `identity`:
 *   `(parse-string "`x" {:syntax-quote {:resolve-symbol #(symbol "user" (str %))}})
 *   ;;=> (quote user/x)`.
 * 
 *   `:var`: parse var literals (`#'foo`). If `true`, the resulting
 *   expression will be parsed as `(var foo)`.
 * 
 *   `:all`: when `true`, the above options will be set to `true` unless
 *   explicitly provided.
 * 
 *   Supported options for processing reader conditionals:
 * 
 *   `:read-cond`: - `:allow` to process reader conditionals, or
 *                `:preserve` to keep all branches
 *   `:features`: - persistent set of feature keywords for reader conditionals (e.g. `#{:clj}`).
 * 
 *   `:auto-resolve`: map of alias to namespace symbols for
 *   auto-resolving keywords. Use `:current` as the alias for the current
 *   namespace.
 * 
 *   `:readers`: data readers.
 * 
 *   `:postprocess`: a function that is called with a map containing
 *   `:obj`, the read value, and `:loc`, the location metadata. This can
 *   be used to handle objects that cannot carry metadata differently. If
 *   this option is provided, attaching location metadata is not
 *   automatically added to the object.
 * 
 *   `:location?`: a predicate that is called with the parsed
 *   object. Should return a truthy value to determine if location
 *   information will be added.
 * 
 *   Additional arguments to tools.reader may be passed with
 *   `:tools.reader/opts`, like `:readers` for passing reader tag functions.
 *   
 */
edamame.core.parse_string = (function edamame$core$parse_string(var_args){
var G__51877 = arguments.length;
switch (G__51877) {
case 1:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string(s,null);
}));

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string(s,opts);
}));

(edamame.core.parse_string.cljs$lang$maxFixedArity = 2);

/**
 * Like parse-string but parses all values from string and returns them
 *   in a vector.
 */
edamame.core.parse_string_all = (function edamame$core$parse_string_all(var_args){
var G__51883 = arguments.length;
switch (G__51883) {
case 1:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string_all(s,null);
}));

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string_all(s,opts);
}));

(edamame.core.parse_string_all.cljs$lang$maxFixedArity = 2);

/**
 * Coerces x into indexing pushback-reader to be used with
 *   parse-next. Accepts: string or java.io.Reader.
 */
edamame.core.reader = (function edamame$core$reader(x){
return edamame.impl.parser.reader(x);
});
/**
 * Coerces x into source-logging-reader to be used with
 *   parse-next. Accepts: string or java.io.Reader.
 */
edamame.core.source_reader = (function edamame$core$source_reader(x){
return edamame.impl.parser.source_logging_reader(x);
});
edamame.core.get_line_number = (function edamame$core$get_line_number(reader){
return edamame.impl.parser.get_line_number(reader);
});
edamame.core.get_column_number = (function edamame$core$get_column_number(reader){
return edamame.impl.parser.get_column_number(reader);
});
edamame.core.normalize_opts = (function edamame$core$normalize_opts(opts){
return edamame.impl.parser.normalize_opts(opts);
});
/**
 * Parses next form from reader. Accepts same opts as parse-string, must
 *   be normalized with normalize-opts first.
 */
edamame.core.parse_next = (function edamame$core$parse_next(var_args){
var G__51911 = arguments.length;
switch (G__51911) {
case 1:
return edamame.core.parse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_next.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return edamame.core.parse_next.cljs$core$IFn$_invoke$arity$2(reader,edamame.impl.parser.normalize_opts(cljs.core.PersistentArrayMap.EMPTY));
}));

(edamame.core.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (reader,opts){
var v = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(opts,reader);
if((edamame.impl.parser.eof === v)){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"eof","eof",-489063237));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("edamame.core","eof","edamame.core/eof",1855384188);
}
} else {
return v;
}
}));

(edamame.core.parse_next.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if obj can carry metadata.
 */
edamame.core.iobj_QMARK_ = (function edamame$core$iobj_QMARK_(obj){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
}
});

//# sourceMappingURL=edamame.core.js.map
