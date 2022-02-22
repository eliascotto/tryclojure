goog.provide('app.env');
/**
 * @define {boolean}
 */
app.env.DEBUG = goog.define("app.env.DEBUG",false);
app.env.debug = (function app$env$debug(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58659 = arguments.length;
var i__4865__auto___58660 = (0);
while(true){
if((i__4865__auto___58660 < len__4864__auto___58659)){
args__4870__auto__.push((arguments[i__4865__auto___58660]));

var G__58661 = (i__4865__auto___58660 + (1));
i__4865__auto___58660 = G__58661;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.env.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.env.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(app.env.DEBUG){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEBUG "], null),args)));
} else {
return null;
}
}));

(app.env.debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.env.debug.cljs$lang$applyTo = (function (seq58658){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58658));
}));


//# sourceMappingURL=app.env.js.map
