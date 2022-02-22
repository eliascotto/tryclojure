goog.provide('app.utils');
/**
 * Log string to browser console.
 */
app.utils.console_log = console.log;
/**
 * Get the value from event target.
 */
app.utils.get_val = (function app$utils$get_val(evt){
return evt.target.value;
});
/**
 * Returns true if `coll` contains `el`.
 */
app.utils.in_QMARK_ = (function app$utils$in_QMARK_(coll,el){
return cljs.core.some((function (p1__67368_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,p1__67368_SHARP_);
}),coll);
});

//# sourceMappingURL=app.utils.js.map
