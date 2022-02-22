goog.provide('reitit.frontend.easy');
if((typeof reitit !== 'undefined') && (typeof reitit.frontend !== 'undefined') && (typeof reitit.frontend.easy !== 'undefined') && (typeof reitit.frontend.easy.history !== 'undefined')){
} else {
reitit.frontend.easy.history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * This registers event listeners on HTML5 history and hashchange events.
 * 
 *   Automatically removes previous event listeners so it is safe to call this repeatedly, for example when using
 *   Figwheel or similar development workflow.
 * 
 *   Parameters:
 *   - router         The Reitit router.
 *   - on-navigate    Function to be called when route changes. Takes two parameters, ´match´ and ´history´ object.
 * 
 *   Options:
 *   - :use-fragment  (default true) If true, onhashchange and location hash are used to store current route.
 * 
 *   Options (Html5History):
 *   - :ignore-anchor-click?  Function (router, event, anchor element, uri) which will be called to
 *                         check if the anchor click event should be ignored.
 *                         To extend built-in check, you can call `reitit.frontend.history/ignore-anchor-click?`
 *                         function, which will ignore clicks if the href matches route tree.
 */
reitit.frontend.easy.start_BANG_ = (function reitit$frontend$easy$start_BANG_(router,on_navigate,opts){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.history,reitit.frontend.history.stop_BANG_);

return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3(router,(function reitit$frontend$easy$start_BANG__$_rfe_on_navigate(m,this$){
if((cljs.core.deref(reitit.frontend.easy.history) == null)){
cljs.core.reset_BANG_(reitit.frontend.easy.history,this$);
} else {
}

return (on_navigate.cljs$core$IFn$_invoke$arity$2 ? on_navigate.cljs$core$IFn$_invoke$arity$2(m,this$) : on_navigate.call(null,m,this$));
}),opts);
});
/**
 * Generate a URL for a route defined by name, with given path-params and query-params.
 * 
 *   The URL is formatted using Reitit frontend history handler, so using it with
 *   anchor element href will correctly trigger route change event.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 */
reitit.frontend.easy.href = (function reitit$frontend$easy$href(var_args){
var G__56499 = arguments.length;
switch (G__56499) {
case 1:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1 = (function (name){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,null,null);
}));

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2 = (function (name,path_params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,path_params,null);
}));

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3 = (function (name,path_params,query_params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params);
}));

(reitit.frontend.easy.href.cljs$lang$maxFixedArity = 3);

/**
 * Updates the browser location and pushes new entry to the history stack using
 *   URL built from a route defined by name, with given path-params and
 *   query-params.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
 */
reitit.frontend.easy.push_state = (function reitit$frontend$easy$push_state(var_args){
var G__56502 = arguments.length;
switch (G__56502) {
case 1:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1 = (function (name){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,null,null);
}));

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2 = (function (name,path_params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,path_params,null);
}));

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3 = (function (name,path_params,query_params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params);
}));

(reitit.frontend.easy.push_state.cljs$lang$maxFixedArity = 3);

/**
 * Updates the browser location and replaces latest entry in the history stack
 *   using URL built from a route defined by name, with given path-params and
 *   query-params.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
 */
reitit.frontend.easy.replace_state = (function reitit$frontend$easy$replace_state(var_args){
var G__56504 = arguments.length;
switch (G__56504) {
case 1:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1 = (function (name){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,null,null);
}));

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$2 = (function (name,path_params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,path_params,null);
}));

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3 = (function (name,path_params,query_params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params);
}));

(reitit.frontend.easy.replace_state.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reitit.frontend.easy.js.map
