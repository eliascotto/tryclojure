goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__48262 = arguments.length;
switch (G__48262) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__48278 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__48280 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__48280);

try{var G__48281 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__48281);

return G__48281;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__48278);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__48287 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__48288 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__48288);

try{var G__48289 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__48289);

return G__48289;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__48287);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__48305 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__48306 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__48306);

try{var G__48307 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__48307);

return G__48307;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__48305);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__48316 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__48317 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__48317);

try{var G__48318 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__48318);

return G__48318;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__48316);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__48409 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__48410 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48410);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48409);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48729 = arguments.length;
var i__4865__auto___48730 = (0);
while(true){
if((i__4865__auto___48730 < len__4864__auto___48729)){
args__4870__auto__.push((arguments[i__4865__auto___48730]));

var G__48736 = (i__4865__auto___48730 + (1));
i__4865__auto___48730 = G__48736;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__48420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__48421 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__48422 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__48423 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__48424 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__48425 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__48426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__48427 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__48428 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__48429 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__48430 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__48432 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__48433 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__48434 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48427);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48428);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48429);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__48430);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__48432);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__48433);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48434);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48426);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__48425);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__48424);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__48423);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48422);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48421);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48420);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq48417){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48417));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__48437 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__48438 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48438);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48437);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48755 = arguments.length;
var i__4865__auto___48756 = (0);
while(true){
if((i__4865__auto___48756 < len__4864__auto___48755)){
args__4870__auto__.push((arguments[i__4865__auto___48756]));

var G__48757 = (i__4865__auto___48756 + (1));
i__4865__auto___48756 = G__48757;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__48462 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__48463 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__48464 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__48465 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__48466 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__48467 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__48468 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__48469 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__48470 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__48471 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__48472 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__48473 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48468);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48469);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__48470);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__48471);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__48472);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48473);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48467);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__48466);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__48465);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__48464);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48463);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48462);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq48444){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48444));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48761 = arguments.length;
var i__4865__auto___48762 = (0);
while(true){
if((i__4865__auto___48762 < len__4864__auto___48761)){
args__4870__auto__.push((arguments[i__4865__auto___48762]));

var G__48765 = (i__4865__auto___48762 + (1));
i__4865__auto___48762 = G__48765;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__48485 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__48486 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__48487 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__48488 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__48489 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__48490 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__48491 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__48492 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__48493 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__48494 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__48495 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__48496 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__48497 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__48498 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48492);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48493);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48494);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__48495);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__48496);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__48497);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48498);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48491);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__48490);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__48489);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__48488);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48487);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48486);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48485);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq48478){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48478));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48777 = arguments.length;
var i__4865__auto___48779 = (0);
while(true){
if((i__4865__auto___48779 < len__4864__auto___48777)){
args__4870__auto__.push((arguments[i__4865__auto___48779]));

var G__48780 = (i__4865__auto___48779 + (1));
i__4865__auto___48779 = G__48780;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__48524 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__48525 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__48526 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__48527 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__48528 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__48529 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__48530 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__48531 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__48532 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__48533 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__48534 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__48535 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48530);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48531);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__48532);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__48533);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__48534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48535);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48529);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__48528);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__48527);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__48526);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48525);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48524);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq48516){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48516));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48790 = arguments.length;
var i__4865__auto___48793 = (0);
while(true){
if((i__4865__auto___48793 < len__4864__auto___48790)){
args__4870__auto__.push((arguments[i__4865__auto___48793]));

var G__48794 = (i__4865__auto___48793 + (1));
i__4865__auto___48793 = G__48794;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__48560 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__48561 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__48562 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__48563 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__48564 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__48565 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__48566 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__48567 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__48568 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__48569 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__48570 = null;
var _STAR_print_newline_STAR__temp_val__48571 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48566);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48567);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48568);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__48569);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__48570);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48571);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48565);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__48564);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__48563);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48562);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48561);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48560);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq48550){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48550));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48811 = arguments.length;
var i__4865__auto___48813 = (0);
while(true){
if((i__4865__auto___48813 < len__4864__auto___48811)){
args__4870__auto__.push((arguments[i__4865__auto___48813]));

var G__48816 = (i__4865__auto___48813 + (1));
i__4865__auto___48813 = G__48816;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__48601 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__48602 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__48603 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__48604 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__48605 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__48606 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__48607 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__48608 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__48609 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__48610 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__48611 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__48612 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48607);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48608);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__48609);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__48610);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__48611);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48612);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48606);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__48605);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__48604);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__48603);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48602);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48601);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq48591){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48591));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48833 = arguments.length;
var i__4865__auto___48837 = (0);
while(true){
if((i__4865__auto___48837 < len__4864__auto___48833)){
args__4870__auto__.push((arguments[i__4865__auto___48837]));

var G__48839 = (i__4865__auto___48837 + (1));
i__4865__auto___48837 = G__48839;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__48628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__48629 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__48630 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__48631 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__48632 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__48633 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__48634 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__48635 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__48636 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__48637 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__48638 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__48639 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__48640 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__48641 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48635);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48636);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48637);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__48638);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__48639);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__48640);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48641);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48634);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__48633);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__48632);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__48631);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48630);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48628);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq48622){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48622));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48853 = arguments.length;
var i__4865__auto___48854 = (0);
while(true){
if((i__4865__auto___48854 < len__4864__auto___48853)){
args__4870__auto__.push((arguments[i__4865__auto___48854]));

var G__48856 = (i__4865__auto___48854 + (1));
i__4865__auto___48854 = G__48856;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__48658__auto__","s__48658__auto__",237783174,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__48659__auto__","x__48659__auto__",1917396542,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48658__auto__","s__48658__auto__",237783174,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__48659__auto__","x__48659__auto__",1917396542,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48658__auto__","s__48658__auto__",237783174,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq48661){
var G__48662 = cljs.core.first(seq48661);
var seq48661__$1 = cljs.core.next(seq48661);
var G__48666 = cljs.core.first(seq48661__$1);
var seq48661__$2 = cljs.core.next(seq48661__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48662,G__48666,seq48661__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
