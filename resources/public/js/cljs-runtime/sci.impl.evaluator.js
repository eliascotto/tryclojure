goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__50777 = xs;
args__$2 = G__50777;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__50780 = xs;
args__$2 = G__50780;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs,idxs){
var vec__49383 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
var idx = (0);
while(true){
var let_name = cljs.core.first(let_bindings__$1);
if(cljs.core.truth_(let_name)){
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
(bindings__$1[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,idx)] = v);

var G__50782 = ctx__$1;
var G__50783 = bindings__$1;
var G__50784 = rest_let_bindings;
var G__50785 = (idx + (1));
ctx__$1 = G__50782;
bindings__$1 = G__50783;
let_bindings__$1 = G__50784;
idx = G__50785;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$1], null);
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49383,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49383,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,exprs) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,exprs));
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5751__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5751__auto__)){
var mm = temp__5751__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5751__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49428_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__49428_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__49428_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49431_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__49431_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__49431_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__4253__auto__ = m;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1))?(function (){var G__49508 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49508,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__49508;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__49518 = arguments.length;
switch (G__49518) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__49530 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49530,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49530,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__49540 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__49573 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__49574 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__49574);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__49573);
}}catch (e49553){var e = e49553;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"default","default",-1987822328),clazz);
if(or__4253__auto__){
return or__4253__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__4284__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__4285__auto__ = e;
return (x__4285__auto__ instanceof c__4284__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){
(bindings[new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805).cljs$core$IFn$_invoke$arity$1(c)] = e);

var G__49561 = ctx;
var G__49562 = bindings;
var G__49563 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49561,G__49562,G__49563) : sci.impl.evaluator.eval.call(null,G__49561,G__49562,G__49563));
})()
], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__49566 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49566,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49566,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49576_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__49576_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__49576_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__4251__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__4253__auto__ = tag_class;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__4253__auto__ = allowed;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49585_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__49585_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__49585_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__49600 = arguments.length;
switch (G__49600) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__49606 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__49606.cljs$core$IFn$_invoke$arity$3 ? fexpr__49606.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__49606.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50829 = arguments.length;
var i__4865__auto___50831 = (0);
while(true){
if((i__4865__auto___50831 < len__4864__auto___50829)){
args__4870__auto__.push((arguments[i__4865__auto___50831]));

var G__50833 = (i__4865__auto___50831 + (1));
i__4865__auto___50831 = G__50833;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49608_SHARP_){
if(((cljs.core.seq_QMARK_(p1__49608_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__49608_SHARP_))))){
return cljs.core.second(p1__49608_SHARP_);
} else {
return p1__49608_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__49627 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49627,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49627,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5751__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto____$1)){
var rec = temp__5751__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq49617){
var G__49619 = cljs.core.first(seq49617);
var seq49617__$1 = cljs.core.next(seq49617);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49619,seq49617__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__49644 = ctx;
var G__49645 = bindings;
var G__49646 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49644,G__49645,G__49646) : sci.impl.evaluator.eval.call(null,G__49644,G__49645,G__49646));
})();
var temp__5751__auto__ = cljs.core.next(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__50841 = exprs__$3;
exprs__$2 = G__50841;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__49847 = cljs.core.count(args);
switch (G__49847) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg49657 = (function (){var G__49850 = ctx;
var G__49851 = bindings;
var G__49852 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49850,G__49851,G__49852) : sci.impl.evaluator.eval.call(null,G__49850,G__49851,G__49852));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg49657) : f.call(null,arg49657));

break;
case (2):
var arg49658 = (function (){var G__49854 = ctx;
var G__49855 = bindings;
var G__49856 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49854,G__49855,G__49856) : sci.impl.evaluator.eval.call(null,G__49854,G__49855,G__49856));
})();
var args__$1 = cljs.core.rest(args);
var arg49659 = (function (){var G__49857 = ctx;
var G__49858 = bindings;
var G__49859 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49857,G__49858,G__49859) : sci.impl.evaluator.eval.call(null,G__49857,G__49858,G__49859));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg49658,arg49659) : f.call(null,arg49658,arg49659));

break;
case (3):
var arg49660 = (function (){var G__49861 = ctx;
var G__49862 = bindings;
var G__49863 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49861,G__49862,G__49863) : sci.impl.evaluator.eval.call(null,G__49861,G__49862,G__49863));
})();
var args__$1 = cljs.core.rest(args);
var arg49661 = (function (){var G__49864 = ctx;
var G__49865 = bindings;
var G__49866 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49864,G__49865,G__49866) : sci.impl.evaluator.eval.call(null,G__49864,G__49865,G__49866));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49662 = (function (){var G__49868 = ctx;
var G__49869 = bindings;
var G__49870 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49868,G__49869,G__49870) : sci.impl.evaluator.eval.call(null,G__49868,G__49869,G__49870));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg49660,arg49661,arg49662) : f.call(null,arg49660,arg49661,arg49662));

break;
case (4):
var arg49663 = (function (){var G__49872 = ctx;
var G__49873 = bindings;
var G__49874 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49872,G__49873,G__49874) : sci.impl.evaluator.eval.call(null,G__49872,G__49873,G__49874));
})();
var args__$1 = cljs.core.rest(args);
var arg49664 = (function (){var G__49875 = ctx;
var G__49876 = bindings;
var G__49877 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49875,G__49876,G__49877) : sci.impl.evaluator.eval.call(null,G__49875,G__49876,G__49877));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49665 = (function (){var G__49878 = ctx;
var G__49879 = bindings;
var G__49880 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49878,G__49879,G__49880) : sci.impl.evaluator.eval.call(null,G__49878,G__49879,G__49880));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49666 = (function (){var G__49881 = ctx;
var G__49882 = bindings;
var G__49883 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49881,G__49882,G__49883) : sci.impl.evaluator.eval.call(null,G__49881,G__49882,G__49883));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg49663,arg49664,arg49665,arg49666) : f.call(null,arg49663,arg49664,arg49665,arg49666));

break;
case (5):
var arg49667 = (function (){var G__49887 = ctx;
var G__49888 = bindings;
var G__49889 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49887,G__49888,G__49889) : sci.impl.evaluator.eval.call(null,G__49887,G__49888,G__49889));
})();
var args__$1 = cljs.core.rest(args);
var arg49668 = (function (){var G__49890 = ctx;
var G__49891 = bindings;
var G__49892 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49890,G__49891,G__49892) : sci.impl.evaluator.eval.call(null,G__49890,G__49891,G__49892));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49669 = (function (){var G__49894 = ctx;
var G__49895 = bindings;
var G__49896 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49894,G__49895,G__49896) : sci.impl.evaluator.eval.call(null,G__49894,G__49895,G__49896));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49670 = (function (){var G__49897 = ctx;
var G__49898 = bindings;
var G__49899 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49897,G__49898,G__49899) : sci.impl.evaluator.eval.call(null,G__49897,G__49898,G__49899));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49671 = (function (){var G__49900 = ctx;
var G__49901 = bindings;
var G__49902 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49900,G__49901,G__49902) : sci.impl.evaluator.eval.call(null,G__49900,G__49901,G__49902));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg49667,arg49668,arg49669,arg49670,arg49671) : f.call(null,arg49667,arg49668,arg49669,arg49670,arg49671));

break;
case (6):
var arg49672 = (function (){var G__49904 = ctx;
var G__49905 = bindings;
var G__49906 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49904,G__49905,G__49906) : sci.impl.evaluator.eval.call(null,G__49904,G__49905,G__49906));
})();
var args__$1 = cljs.core.rest(args);
var arg49673 = (function (){var G__49910 = ctx;
var G__49911 = bindings;
var G__49912 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49910,G__49911,G__49912) : sci.impl.evaluator.eval.call(null,G__49910,G__49911,G__49912));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49674 = (function (){var G__49914 = ctx;
var G__49915 = bindings;
var G__49916 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49914,G__49915,G__49916) : sci.impl.evaluator.eval.call(null,G__49914,G__49915,G__49916));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49675 = (function (){var G__49917 = ctx;
var G__49918 = bindings;
var G__49919 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49917,G__49918,G__49919) : sci.impl.evaluator.eval.call(null,G__49917,G__49918,G__49919));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49676 = (function (){var G__49920 = ctx;
var G__49921 = bindings;
var G__49922 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49920,G__49921,G__49922) : sci.impl.evaluator.eval.call(null,G__49920,G__49921,G__49922));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49677 = (function (){var G__49924 = ctx;
var G__49925 = bindings;
var G__49926 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49924,G__49925,G__49926) : sci.impl.evaluator.eval.call(null,G__49924,G__49925,G__49926));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg49672,arg49673,arg49674,arg49675,arg49676,arg49677) : f.call(null,arg49672,arg49673,arg49674,arg49675,arg49676,arg49677));

break;
case (7):
var arg49678 = (function (){var G__49929 = ctx;
var G__49930 = bindings;
var G__49931 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49929,G__49930,G__49931) : sci.impl.evaluator.eval.call(null,G__49929,G__49930,G__49931));
})();
var args__$1 = cljs.core.rest(args);
var arg49679 = (function (){var G__49934 = ctx;
var G__49935 = bindings;
var G__49936 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49934,G__49935,G__49936) : sci.impl.evaluator.eval.call(null,G__49934,G__49935,G__49936));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49680 = (function (){var G__49937 = ctx;
var G__49938 = bindings;
var G__49939 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49937,G__49938,G__49939) : sci.impl.evaluator.eval.call(null,G__49937,G__49938,G__49939));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49681 = (function (){var G__49940 = ctx;
var G__49941 = bindings;
var G__49942 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49940,G__49941,G__49942) : sci.impl.evaluator.eval.call(null,G__49940,G__49941,G__49942));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49682 = (function (){var G__49943 = ctx;
var G__49944 = bindings;
var G__49945 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49943,G__49944,G__49945) : sci.impl.evaluator.eval.call(null,G__49943,G__49944,G__49945));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49683 = (function (){var G__49947 = ctx;
var G__49948 = bindings;
var G__49949 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49947,G__49948,G__49949) : sci.impl.evaluator.eval.call(null,G__49947,G__49948,G__49949));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49684 = (function (){var G__49954 = ctx;
var G__49955 = bindings;
var G__49956 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49954,G__49955,G__49956) : sci.impl.evaluator.eval.call(null,G__49954,G__49955,G__49956));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg49678,arg49679,arg49680,arg49681,arg49682,arg49683,arg49684) : f.call(null,arg49678,arg49679,arg49680,arg49681,arg49682,arg49683,arg49684));

break;
case (8):
var arg49685 = (function (){var G__49957 = ctx;
var G__49958 = bindings;
var G__49959 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49957,G__49958,G__49959) : sci.impl.evaluator.eval.call(null,G__49957,G__49958,G__49959));
})();
var args__$1 = cljs.core.rest(args);
var arg49686 = (function (){var G__49966 = ctx;
var G__49967 = bindings;
var G__49968 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49966,G__49967,G__49968) : sci.impl.evaluator.eval.call(null,G__49966,G__49967,G__49968));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49687 = (function (){var G__49971 = ctx;
var G__49972 = bindings;
var G__49973 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49971,G__49972,G__49973) : sci.impl.evaluator.eval.call(null,G__49971,G__49972,G__49973));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49688 = (function (){var G__49977 = ctx;
var G__49978 = bindings;
var G__49979 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49977,G__49978,G__49979) : sci.impl.evaluator.eval.call(null,G__49977,G__49978,G__49979));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49689 = (function (){var G__49981 = ctx;
var G__49982 = bindings;
var G__49983 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49981,G__49982,G__49983) : sci.impl.evaluator.eval.call(null,G__49981,G__49982,G__49983));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49690 = (function (){var G__49984 = ctx;
var G__49985 = bindings;
var G__49986 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49984,G__49985,G__49986) : sci.impl.evaluator.eval.call(null,G__49984,G__49985,G__49986));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49691 = (function (){var G__49994 = ctx;
var G__49995 = bindings;
var G__49996 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__49994,G__49995,G__49996) : sci.impl.evaluator.eval.call(null,G__49994,G__49995,G__49996));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49692 = (function (){var G__50001 = ctx;
var G__50002 = bindings;
var G__50003 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50001,G__50002,G__50003) : sci.impl.evaluator.eval.call(null,G__50001,G__50002,G__50003));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg49685,arg49686,arg49687,arg49688,arg49689,arg49690,arg49691,arg49692) : f.call(null,arg49685,arg49686,arg49687,arg49688,arg49689,arg49690,arg49691,arg49692));

break;
case (9):
var arg49693 = (function (){var G__50008 = ctx;
var G__50009 = bindings;
var G__50010 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50008,G__50009,G__50010) : sci.impl.evaluator.eval.call(null,G__50008,G__50009,G__50010));
})();
var args__$1 = cljs.core.rest(args);
var arg49694 = (function (){var G__50013 = ctx;
var G__50014 = bindings;
var G__50015 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50013,G__50014,G__50015) : sci.impl.evaluator.eval.call(null,G__50013,G__50014,G__50015));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49695 = (function (){var G__50016 = ctx;
var G__50017 = bindings;
var G__50018 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50016,G__50017,G__50018) : sci.impl.evaluator.eval.call(null,G__50016,G__50017,G__50018));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49696 = (function (){var G__50020 = ctx;
var G__50021 = bindings;
var G__50022 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50020,G__50021,G__50022) : sci.impl.evaluator.eval.call(null,G__50020,G__50021,G__50022));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49697 = (function (){var G__50023 = ctx;
var G__50024 = bindings;
var G__50025 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50023,G__50024,G__50025) : sci.impl.evaluator.eval.call(null,G__50023,G__50024,G__50025));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49698 = (function (){var G__50030 = ctx;
var G__50031 = bindings;
var G__50032 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50030,G__50031,G__50032) : sci.impl.evaluator.eval.call(null,G__50030,G__50031,G__50032));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49699 = (function (){var G__50033 = ctx;
var G__50034 = bindings;
var G__50035 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50033,G__50034,G__50035) : sci.impl.evaluator.eval.call(null,G__50033,G__50034,G__50035));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49700 = (function (){var G__50037 = ctx;
var G__50038 = bindings;
var G__50039 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50037,G__50038,G__50039) : sci.impl.evaluator.eval.call(null,G__50037,G__50038,G__50039));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49701 = (function (){var G__50040 = ctx;
var G__50041 = bindings;
var G__50042 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50040,G__50041,G__50042) : sci.impl.evaluator.eval.call(null,G__50040,G__50041,G__50042));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg49693,arg49694,arg49695,arg49696,arg49697,arg49698,arg49699,arg49700,arg49701) : f.call(null,arg49693,arg49694,arg49695,arg49696,arg49697,arg49698,arg49699,arg49700,arg49701));

break;
case (10):
var arg49702 = (function (){var G__50047 = ctx;
var G__50048 = bindings;
var G__50049 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50047,G__50048,G__50049) : sci.impl.evaluator.eval.call(null,G__50047,G__50048,G__50049));
})();
var args__$1 = cljs.core.rest(args);
var arg49703 = (function (){var G__50051 = ctx;
var G__50052 = bindings;
var G__50053 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50051,G__50052,G__50053) : sci.impl.evaluator.eval.call(null,G__50051,G__50052,G__50053));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49704 = (function (){var G__50054 = ctx;
var G__50055 = bindings;
var G__50056 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50054,G__50055,G__50056) : sci.impl.evaluator.eval.call(null,G__50054,G__50055,G__50056));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49705 = (function (){var G__50057 = ctx;
var G__50058 = bindings;
var G__50059 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50057,G__50058,G__50059) : sci.impl.evaluator.eval.call(null,G__50057,G__50058,G__50059));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49706 = (function (){var G__50061 = ctx;
var G__50062 = bindings;
var G__50063 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50061,G__50062,G__50063) : sci.impl.evaluator.eval.call(null,G__50061,G__50062,G__50063));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49707 = (function (){var G__50064 = ctx;
var G__50065 = bindings;
var G__50066 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50064,G__50065,G__50066) : sci.impl.evaluator.eval.call(null,G__50064,G__50065,G__50066));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49708 = (function (){var G__50067 = ctx;
var G__50068 = bindings;
var G__50069 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50067,G__50068,G__50069) : sci.impl.evaluator.eval.call(null,G__50067,G__50068,G__50069));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49709 = (function (){var G__50070 = ctx;
var G__50071 = bindings;
var G__50072 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50070,G__50071,G__50072) : sci.impl.evaluator.eval.call(null,G__50070,G__50071,G__50072));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49710 = (function (){var G__50073 = ctx;
var G__50074 = bindings;
var G__50075 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50073,G__50074,G__50075) : sci.impl.evaluator.eval.call(null,G__50073,G__50074,G__50075));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49711 = (function (){var G__50077 = ctx;
var G__50078 = bindings;
var G__50079 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50077,G__50078,G__50079) : sci.impl.evaluator.eval.call(null,G__50077,G__50078,G__50079));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg49702,arg49703,arg49704,arg49705,arg49706,arg49707,arg49708,arg49709,arg49710,arg49711) : f.call(null,arg49702,arg49703,arg49704,arg49705,arg49706,arg49707,arg49708,arg49709,arg49710,arg49711));

break;
case (11):
var arg49712 = (function (){var G__50080 = ctx;
var G__50081 = bindings;
var G__50082 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50080,G__50081,G__50082) : sci.impl.evaluator.eval.call(null,G__50080,G__50081,G__50082));
})();
var args__$1 = cljs.core.rest(args);
var arg49713 = (function (){var G__50084 = ctx;
var G__50085 = bindings;
var G__50086 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50084,G__50085,G__50086) : sci.impl.evaluator.eval.call(null,G__50084,G__50085,G__50086));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49714 = (function (){var G__50089 = ctx;
var G__50090 = bindings;
var G__50091 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50089,G__50090,G__50091) : sci.impl.evaluator.eval.call(null,G__50089,G__50090,G__50091));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49715 = (function (){var G__50094 = ctx;
var G__50095 = bindings;
var G__50096 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50094,G__50095,G__50096) : sci.impl.evaluator.eval.call(null,G__50094,G__50095,G__50096));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49716 = (function (){var G__50102 = ctx;
var G__50103 = bindings;
var G__50104 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50102,G__50103,G__50104) : sci.impl.evaluator.eval.call(null,G__50102,G__50103,G__50104));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49717 = (function (){var G__50105 = ctx;
var G__50106 = bindings;
var G__50107 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50105,G__50106,G__50107) : sci.impl.evaluator.eval.call(null,G__50105,G__50106,G__50107));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49718 = (function (){var G__50108 = ctx;
var G__50109 = bindings;
var G__50110 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50108,G__50109,G__50110) : sci.impl.evaluator.eval.call(null,G__50108,G__50109,G__50110));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49719 = (function (){var G__50114 = ctx;
var G__50115 = bindings;
var G__50116 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50114,G__50115,G__50116) : sci.impl.evaluator.eval.call(null,G__50114,G__50115,G__50116));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49720 = (function (){var G__50118 = ctx;
var G__50119 = bindings;
var G__50120 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50118,G__50119,G__50120) : sci.impl.evaluator.eval.call(null,G__50118,G__50119,G__50120));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49721 = (function (){var G__50122 = ctx;
var G__50123 = bindings;
var G__50124 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50122,G__50123,G__50124) : sci.impl.evaluator.eval.call(null,G__50122,G__50123,G__50124));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49722 = (function (){var G__50126 = ctx;
var G__50127 = bindings;
var G__50128 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50126,G__50127,G__50128) : sci.impl.evaluator.eval.call(null,G__50126,G__50127,G__50128));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg49712,arg49713,arg49714,arg49715,arg49716,arg49717,arg49718,arg49719,arg49720,arg49721,arg49722) : f.call(null,arg49712,arg49713,arg49714,arg49715,arg49716,arg49717,arg49718,arg49719,arg49720,arg49721,arg49722));

break;
case (12):
var arg49723 = (function (){var G__50131 = ctx;
var G__50132 = bindings;
var G__50133 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50131,G__50132,G__50133) : sci.impl.evaluator.eval.call(null,G__50131,G__50132,G__50133));
})();
var args__$1 = cljs.core.rest(args);
var arg49724 = (function (){var G__50136 = ctx;
var G__50137 = bindings;
var G__50138 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50136,G__50137,G__50138) : sci.impl.evaluator.eval.call(null,G__50136,G__50137,G__50138));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49725 = (function (){var G__50141 = ctx;
var G__50142 = bindings;
var G__50143 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50141,G__50142,G__50143) : sci.impl.evaluator.eval.call(null,G__50141,G__50142,G__50143));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49726 = (function (){var G__50147 = ctx;
var G__50148 = bindings;
var G__50149 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50147,G__50148,G__50149) : sci.impl.evaluator.eval.call(null,G__50147,G__50148,G__50149));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49727 = (function (){var G__50152 = ctx;
var G__50153 = bindings;
var G__50154 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50152,G__50153,G__50154) : sci.impl.evaluator.eval.call(null,G__50152,G__50153,G__50154));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49728 = (function (){var G__50156 = ctx;
var G__50157 = bindings;
var G__50158 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50156,G__50157,G__50158) : sci.impl.evaluator.eval.call(null,G__50156,G__50157,G__50158));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49729 = (function (){var G__50163 = ctx;
var G__50164 = bindings;
var G__50165 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50163,G__50164,G__50165) : sci.impl.evaluator.eval.call(null,G__50163,G__50164,G__50165));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49730 = (function (){var G__50168 = ctx;
var G__50169 = bindings;
var G__50170 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50168,G__50169,G__50170) : sci.impl.evaluator.eval.call(null,G__50168,G__50169,G__50170));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49731 = (function (){var G__50172 = ctx;
var G__50173 = bindings;
var G__50174 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50172,G__50173,G__50174) : sci.impl.evaluator.eval.call(null,G__50172,G__50173,G__50174));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49732 = (function (){var G__50176 = ctx;
var G__50177 = bindings;
var G__50178 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50176,G__50177,G__50178) : sci.impl.evaluator.eval.call(null,G__50176,G__50177,G__50178));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49733 = (function (){var G__50179 = ctx;
var G__50180 = bindings;
var G__50181 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50179,G__50180,G__50181) : sci.impl.evaluator.eval.call(null,G__50179,G__50180,G__50181));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49734 = (function (){var G__50187 = ctx;
var G__50188 = bindings;
var G__50189 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50187,G__50188,G__50189) : sci.impl.evaluator.eval.call(null,G__50187,G__50188,G__50189));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg49723,arg49724,arg49725,arg49726,arg49727,arg49728,arg49729,arg49730,arg49731,arg49732,arg49733,arg49734) : f.call(null,arg49723,arg49724,arg49725,arg49726,arg49727,arg49728,arg49729,arg49730,arg49731,arg49732,arg49733,arg49734));

break;
case (13):
var arg49735 = (function (){var G__50194 = ctx;
var G__50195 = bindings;
var G__50196 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50194,G__50195,G__50196) : sci.impl.evaluator.eval.call(null,G__50194,G__50195,G__50196));
})();
var args__$1 = cljs.core.rest(args);
var arg49736 = (function (){var G__50199 = ctx;
var G__50200 = bindings;
var G__50201 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50199,G__50200,G__50201) : sci.impl.evaluator.eval.call(null,G__50199,G__50200,G__50201));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49737 = (function (){var G__50204 = ctx;
var G__50205 = bindings;
var G__50206 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50204,G__50205,G__50206) : sci.impl.evaluator.eval.call(null,G__50204,G__50205,G__50206));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49738 = (function (){var G__50209 = ctx;
var G__50210 = bindings;
var G__50211 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50209,G__50210,G__50211) : sci.impl.evaluator.eval.call(null,G__50209,G__50210,G__50211));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49739 = (function (){var G__50215 = ctx;
var G__50216 = bindings;
var G__50217 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50215,G__50216,G__50217) : sci.impl.evaluator.eval.call(null,G__50215,G__50216,G__50217));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49740 = (function (){var G__50218 = ctx;
var G__50219 = bindings;
var G__50220 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50218,G__50219,G__50220) : sci.impl.evaluator.eval.call(null,G__50218,G__50219,G__50220));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49741 = (function (){var G__50222 = ctx;
var G__50223 = bindings;
var G__50224 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50222,G__50223,G__50224) : sci.impl.evaluator.eval.call(null,G__50222,G__50223,G__50224));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49742 = (function (){var G__50225 = ctx;
var G__50226 = bindings;
var G__50227 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50225,G__50226,G__50227) : sci.impl.evaluator.eval.call(null,G__50225,G__50226,G__50227));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49743 = (function (){var G__50228 = ctx;
var G__50229 = bindings;
var G__50230 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50228,G__50229,G__50230) : sci.impl.evaluator.eval.call(null,G__50228,G__50229,G__50230));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49744 = (function (){var G__50232 = ctx;
var G__50233 = bindings;
var G__50234 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50232,G__50233,G__50234) : sci.impl.evaluator.eval.call(null,G__50232,G__50233,G__50234));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49745 = (function (){var G__50235 = ctx;
var G__50236 = bindings;
var G__50237 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50235,G__50236,G__50237) : sci.impl.evaluator.eval.call(null,G__50235,G__50236,G__50237));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49746 = (function (){var G__50238 = ctx;
var G__50239 = bindings;
var G__50240 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50238,G__50239,G__50240) : sci.impl.evaluator.eval.call(null,G__50238,G__50239,G__50240));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg49747 = (function (){var G__50247 = ctx;
var G__50248 = bindings;
var G__50249 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50247,G__50248,G__50249) : sci.impl.evaluator.eval.call(null,G__50247,G__50248,G__50249));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg49735,arg49736,arg49737,arg49738,arg49739,arg49740,arg49741,arg49742,arg49743,arg49744,arg49745,arg49746,arg49747) : f.call(null,arg49735,arg49736,arg49737,arg49738,arg49739,arg49740,arg49741,arg49742,arg49743,arg49744,arg49745,arg49746,arg49747));

break;
case (14):
var arg49748 = (function (){var G__50255 = ctx;
var G__50256 = bindings;
var G__50257 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50255,G__50256,G__50257) : sci.impl.evaluator.eval.call(null,G__50255,G__50256,G__50257));
})();
var args__$1 = cljs.core.rest(args);
var arg49749 = (function (){var G__50262 = ctx;
var G__50263 = bindings;
var G__50264 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50262,G__50263,G__50264) : sci.impl.evaluator.eval.call(null,G__50262,G__50263,G__50264));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49750 = (function (){var G__50269 = ctx;
var G__50270 = bindings;
var G__50271 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50269,G__50270,G__50271) : sci.impl.evaluator.eval.call(null,G__50269,G__50270,G__50271));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49751 = (function (){var G__50274 = ctx;
var G__50275 = bindings;
var G__50276 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50274,G__50275,G__50276) : sci.impl.evaluator.eval.call(null,G__50274,G__50275,G__50276));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49752 = (function (){var G__50279 = ctx;
var G__50280 = bindings;
var G__50281 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50279,G__50280,G__50281) : sci.impl.evaluator.eval.call(null,G__50279,G__50280,G__50281));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49753 = (function (){var G__50284 = ctx;
var G__50285 = bindings;
var G__50286 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50284,G__50285,G__50286) : sci.impl.evaluator.eval.call(null,G__50284,G__50285,G__50286));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49754 = (function (){var G__50287 = ctx;
var G__50288 = bindings;
var G__50289 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50287,G__50288,G__50289) : sci.impl.evaluator.eval.call(null,G__50287,G__50288,G__50289));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49755 = (function (){var G__50290 = ctx;
var G__50291 = bindings;
var G__50292 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50290,G__50291,G__50292) : sci.impl.evaluator.eval.call(null,G__50290,G__50291,G__50292));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49756 = (function (){var G__50293 = ctx;
var G__50294 = bindings;
var G__50295 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50293,G__50294,G__50295) : sci.impl.evaluator.eval.call(null,G__50293,G__50294,G__50295));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49757 = (function (){var G__50297 = ctx;
var G__50298 = bindings;
var G__50299 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50297,G__50298,G__50299) : sci.impl.evaluator.eval.call(null,G__50297,G__50298,G__50299));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49758 = (function (){var G__50300 = ctx;
var G__50301 = bindings;
var G__50302 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50300,G__50301,G__50302) : sci.impl.evaluator.eval.call(null,G__50300,G__50301,G__50302));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49759 = (function (){var G__50305 = ctx;
var G__50306 = bindings;
var G__50307 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50305,G__50306,G__50307) : sci.impl.evaluator.eval.call(null,G__50305,G__50306,G__50307));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg49760 = (function (){var G__50311 = ctx;
var G__50312 = bindings;
var G__50313 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50311,G__50312,G__50313) : sci.impl.evaluator.eval.call(null,G__50311,G__50312,G__50313));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg49761 = (function (){var G__50314 = ctx;
var G__50315 = bindings;
var G__50316 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50314,G__50315,G__50316) : sci.impl.evaluator.eval.call(null,G__50314,G__50315,G__50316));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg49748,arg49749,arg49750,arg49751,arg49752,arg49753,arg49754,arg49755,arg49756,arg49757,arg49758,arg49759,arg49760,arg49761) : f.call(null,arg49748,arg49749,arg49750,arg49751,arg49752,arg49753,arg49754,arg49755,arg49756,arg49757,arg49758,arg49759,arg49760,arg49761));

break;
case (15):
var arg49762 = (function (){var G__50319 = ctx;
var G__50320 = bindings;
var G__50321 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50319,G__50320,G__50321) : sci.impl.evaluator.eval.call(null,G__50319,G__50320,G__50321));
})();
var args__$1 = cljs.core.rest(args);
var arg49763 = (function (){var G__50325 = ctx;
var G__50326 = bindings;
var G__50327 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50325,G__50326,G__50327) : sci.impl.evaluator.eval.call(null,G__50325,G__50326,G__50327));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49764 = (function (){var G__50329 = ctx;
var G__50330 = bindings;
var G__50331 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50329,G__50330,G__50331) : sci.impl.evaluator.eval.call(null,G__50329,G__50330,G__50331));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49765 = (function (){var G__50332 = ctx;
var G__50333 = bindings;
var G__50334 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50332,G__50333,G__50334) : sci.impl.evaluator.eval.call(null,G__50332,G__50333,G__50334));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49766 = (function (){var G__50336 = ctx;
var G__50337 = bindings;
var G__50338 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50336,G__50337,G__50338) : sci.impl.evaluator.eval.call(null,G__50336,G__50337,G__50338));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49767 = (function (){var G__50341 = ctx;
var G__50342 = bindings;
var G__50343 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50341,G__50342,G__50343) : sci.impl.evaluator.eval.call(null,G__50341,G__50342,G__50343));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49768 = (function (){var G__50346 = ctx;
var G__50347 = bindings;
var G__50348 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50346,G__50347,G__50348) : sci.impl.evaluator.eval.call(null,G__50346,G__50347,G__50348));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49769 = (function (){var G__50350 = ctx;
var G__50351 = bindings;
var G__50352 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50350,G__50351,G__50352) : sci.impl.evaluator.eval.call(null,G__50350,G__50351,G__50352));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49770 = (function (){var G__50353 = ctx;
var G__50354 = bindings;
var G__50355 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50353,G__50354,G__50355) : sci.impl.evaluator.eval.call(null,G__50353,G__50354,G__50355));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49771 = (function (){var G__50357 = ctx;
var G__50358 = bindings;
var G__50359 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50357,G__50358,G__50359) : sci.impl.evaluator.eval.call(null,G__50357,G__50358,G__50359));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49772 = (function (){var G__50362 = ctx;
var G__50363 = bindings;
var G__50364 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50362,G__50363,G__50364) : sci.impl.evaluator.eval.call(null,G__50362,G__50363,G__50364));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49773 = (function (){var G__50367 = ctx;
var G__50368 = bindings;
var G__50369 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50367,G__50368,G__50369) : sci.impl.evaluator.eval.call(null,G__50367,G__50368,G__50369));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg49774 = (function (){var G__50371 = ctx;
var G__50372 = bindings;
var G__50373 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50371,G__50372,G__50373) : sci.impl.evaluator.eval.call(null,G__50371,G__50372,G__50373));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg49775 = (function (){var G__50375 = ctx;
var G__50376 = bindings;
var G__50377 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50375,G__50376,G__50377) : sci.impl.evaluator.eval.call(null,G__50375,G__50376,G__50377));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg49776 = (function (){var G__50379 = ctx;
var G__50380 = bindings;
var G__50381 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50379,G__50380,G__50381) : sci.impl.evaluator.eval.call(null,G__50379,G__50380,G__50381));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg49762,arg49763,arg49764,arg49765,arg49766,arg49767,arg49768,arg49769,arg49770,arg49771,arg49772,arg49773,arg49774,arg49775,arg49776) : f.call(null,arg49762,arg49763,arg49764,arg49765,arg49766,arg49767,arg49768,arg49769,arg49770,arg49771,arg49772,arg49773,arg49774,arg49775,arg49776));

break;
case (16):
var arg49777 = (function (){var G__50383 = ctx;
var G__50384 = bindings;
var G__50385 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50383,G__50384,G__50385) : sci.impl.evaluator.eval.call(null,G__50383,G__50384,G__50385));
})();
var args__$1 = cljs.core.rest(args);
var arg49778 = (function (){var G__50387 = ctx;
var G__50388 = bindings;
var G__50389 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50387,G__50388,G__50389) : sci.impl.evaluator.eval.call(null,G__50387,G__50388,G__50389));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49779 = (function (){var G__50392 = ctx;
var G__50393 = bindings;
var G__50394 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50392,G__50393,G__50394) : sci.impl.evaluator.eval.call(null,G__50392,G__50393,G__50394));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49780 = (function (){var G__50395 = ctx;
var G__50396 = bindings;
var G__50397 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50395,G__50396,G__50397) : sci.impl.evaluator.eval.call(null,G__50395,G__50396,G__50397));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49781 = (function (){var G__50398 = ctx;
var G__50399 = bindings;
var G__50400 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50398,G__50399,G__50400) : sci.impl.evaluator.eval.call(null,G__50398,G__50399,G__50400));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49782 = (function (){var G__50403 = ctx;
var G__50404 = bindings;
var G__50405 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50403,G__50404,G__50405) : sci.impl.evaluator.eval.call(null,G__50403,G__50404,G__50405));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49783 = (function (){var G__50406 = ctx;
var G__50407 = bindings;
var G__50408 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50406,G__50407,G__50408) : sci.impl.evaluator.eval.call(null,G__50406,G__50407,G__50408));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49784 = (function (){var G__50410 = ctx;
var G__50411 = bindings;
var G__50412 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50410,G__50411,G__50412) : sci.impl.evaluator.eval.call(null,G__50410,G__50411,G__50412));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49785 = (function (){var G__50413 = ctx;
var G__50414 = bindings;
var G__50415 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50413,G__50414,G__50415) : sci.impl.evaluator.eval.call(null,G__50413,G__50414,G__50415));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49786 = (function (){var G__50417 = ctx;
var G__50418 = bindings;
var G__50419 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50417,G__50418,G__50419) : sci.impl.evaluator.eval.call(null,G__50417,G__50418,G__50419));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49787 = (function (){var G__50424 = ctx;
var G__50425 = bindings;
var G__50426 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50424,G__50425,G__50426) : sci.impl.evaluator.eval.call(null,G__50424,G__50425,G__50426));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49788 = (function (){var G__50429 = ctx;
var G__50430 = bindings;
var G__50431 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50429,G__50430,G__50431) : sci.impl.evaluator.eval.call(null,G__50429,G__50430,G__50431));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg49789 = (function (){var G__50432 = ctx;
var G__50433 = bindings;
var G__50434 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50432,G__50433,G__50434) : sci.impl.evaluator.eval.call(null,G__50432,G__50433,G__50434));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg49790 = (function (){var G__50435 = ctx;
var G__50436 = bindings;
var G__50437 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50435,G__50436,G__50437) : sci.impl.evaluator.eval.call(null,G__50435,G__50436,G__50437));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg49791 = (function (){var G__50439 = ctx;
var G__50440 = bindings;
var G__50441 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50439,G__50440,G__50441) : sci.impl.evaluator.eval.call(null,G__50439,G__50440,G__50441));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg49792 = (function (){var G__50443 = ctx;
var G__50444 = bindings;
var G__50445 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50443,G__50444,G__50445) : sci.impl.evaluator.eval.call(null,G__50443,G__50444,G__50445));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg49777,arg49778,arg49779,arg49780,arg49781,arg49782,arg49783,arg49784,arg49785,arg49786,arg49787,arg49788,arg49789,arg49790,arg49791,arg49792) : f.call(null,arg49777,arg49778,arg49779,arg49780,arg49781,arg49782,arg49783,arg49784,arg49785,arg49786,arg49787,arg49788,arg49789,arg49790,arg49791,arg49792));

break;
case (17):
var arg49793 = (function (){var G__50449 = ctx;
var G__50450 = bindings;
var G__50451 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50449,G__50450,G__50451) : sci.impl.evaluator.eval.call(null,G__50449,G__50450,G__50451));
})();
var args__$1 = cljs.core.rest(args);
var arg49794 = (function (){var G__50454 = ctx;
var G__50455 = bindings;
var G__50456 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50454,G__50455,G__50456) : sci.impl.evaluator.eval.call(null,G__50454,G__50455,G__50456));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49795 = (function (){var G__50457 = ctx;
var G__50458 = bindings;
var G__50459 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50457,G__50458,G__50459) : sci.impl.evaluator.eval.call(null,G__50457,G__50458,G__50459));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49796 = (function (){var G__50461 = ctx;
var G__50462 = bindings;
var G__50463 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50461,G__50462,G__50463) : sci.impl.evaluator.eval.call(null,G__50461,G__50462,G__50463));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49797 = (function (){var G__50464 = ctx;
var G__50465 = bindings;
var G__50466 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50464,G__50465,G__50466) : sci.impl.evaluator.eval.call(null,G__50464,G__50465,G__50466));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49798 = (function (){var G__50467 = ctx;
var G__50469 = bindings;
var G__50471 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50467,G__50469,G__50471) : sci.impl.evaluator.eval.call(null,G__50467,G__50469,G__50471));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49799 = (function (){var G__50474 = ctx;
var G__50475 = bindings;
var G__50476 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50474,G__50475,G__50476) : sci.impl.evaluator.eval.call(null,G__50474,G__50475,G__50476));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49800 = (function (){var G__50479 = ctx;
var G__50480 = bindings;
var G__50481 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50479,G__50480,G__50481) : sci.impl.evaluator.eval.call(null,G__50479,G__50480,G__50481));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49801 = (function (){var G__50484 = ctx;
var G__50485 = bindings;
var G__50486 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50484,G__50485,G__50486) : sci.impl.evaluator.eval.call(null,G__50484,G__50485,G__50486));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49802 = (function (){var G__50487 = ctx;
var G__50488 = bindings;
var G__50489 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50487,G__50488,G__50489) : sci.impl.evaluator.eval.call(null,G__50487,G__50488,G__50489));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49803 = (function (){var G__50490 = ctx;
var G__50491 = bindings;
var G__50492 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50490,G__50491,G__50492) : sci.impl.evaluator.eval.call(null,G__50490,G__50491,G__50492));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49804 = (function (){var G__50496 = ctx;
var G__50497 = bindings;
var G__50498 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50496,G__50497,G__50498) : sci.impl.evaluator.eval.call(null,G__50496,G__50497,G__50498));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg49805 = (function (){var G__50501 = ctx;
var G__50502 = bindings;
var G__50503 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50501,G__50502,G__50503) : sci.impl.evaluator.eval.call(null,G__50501,G__50502,G__50503));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg49806 = (function (){var G__50506 = ctx;
var G__50507 = bindings;
var G__50508 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50506,G__50507,G__50508) : sci.impl.evaluator.eval.call(null,G__50506,G__50507,G__50508));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg49807 = (function (){var G__50511 = ctx;
var G__50512 = bindings;
var G__50513 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50511,G__50512,G__50513) : sci.impl.evaluator.eval.call(null,G__50511,G__50512,G__50513));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg49808 = (function (){var G__50517 = ctx;
var G__50518 = bindings;
var G__50519 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50517,G__50518,G__50519) : sci.impl.evaluator.eval.call(null,G__50517,G__50518,G__50519));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg49809 = (function (){var G__50520 = ctx;
var G__50522 = bindings;
var G__50523 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50520,G__50522,G__50523) : sci.impl.evaluator.eval.call(null,G__50520,G__50522,G__50523));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg49793,arg49794,arg49795,arg49796,arg49797,arg49798,arg49799,arg49800,arg49801,arg49802,arg49803,arg49804,arg49805,arg49806,arg49807,arg49808,arg49809) : f.call(null,arg49793,arg49794,arg49795,arg49796,arg49797,arg49798,arg49799,arg49800,arg49801,arg49802,arg49803,arg49804,arg49805,arg49806,arg49807,arg49808,arg49809));

break;
case (18):
var arg49810 = (function (){var G__50526 = ctx;
var G__50527 = bindings;
var G__50528 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50526,G__50527,G__50528) : sci.impl.evaluator.eval.call(null,G__50526,G__50527,G__50528));
})();
var args__$1 = cljs.core.rest(args);
var arg49811 = (function (){var G__50531 = ctx;
var G__50532 = bindings;
var G__50533 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50531,G__50532,G__50533) : sci.impl.evaluator.eval.call(null,G__50531,G__50532,G__50533));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49812 = (function (){var G__50536 = ctx;
var G__50537 = bindings;
var G__50538 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50536,G__50537,G__50538) : sci.impl.evaluator.eval.call(null,G__50536,G__50537,G__50538));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49813 = (function (){var G__50539 = ctx;
var G__50540 = bindings;
var G__50541 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50539,G__50540,G__50541) : sci.impl.evaluator.eval.call(null,G__50539,G__50540,G__50541));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49814 = (function (){var G__50543 = ctx;
var G__50544 = bindings;
var G__50545 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50543,G__50544,G__50545) : sci.impl.evaluator.eval.call(null,G__50543,G__50544,G__50545));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49815 = (function (){var G__50547 = ctx;
var G__50548 = bindings;
var G__50549 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50547,G__50548,G__50549) : sci.impl.evaluator.eval.call(null,G__50547,G__50548,G__50549));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49816 = (function (){var G__50550 = ctx;
var G__50551 = bindings;
var G__50552 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50550,G__50551,G__50552) : sci.impl.evaluator.eval.call(null,G__50550,G__50551,G__50552));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49817 = (function (){var G__50555 = ctx;
var G__50556 = bindings;
var G__50557 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50555,G__50556,G__50557) : sci.impl.evaluator.eval.call(null,G__50555,G__50556,G__50557));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49818 = (function (){var G__50560 = ctx;
var G__50561 = bindings;
var G__50562 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50560,G__50561,G__50562) : sci.impl.evaluator.eval.call(null,G__50560,G__50561,G__50562));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49819 = (function (){var G__50563 = ctx;
var G__50564 = bindings;
var G__50565 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50563,G__50564,G__50565) : sci.impl.evaluator.eval.call(null,G__50563,G__50564,G__50565));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49820 = (function (){var G__50566 = ctx;
var G__50567 = bindings;
var G__50568 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50566,G__50567,G__50568) : sci.impl.evaluator.eval.call(null,G__50566,G__50567,G__50568));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49821 = (function (){var G__50569 = ctx;
var G__50570 = bindings;
var G__50571 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50569,G__50570,G__50571) : sci.impl.evaluator.eval.call(null,G__50569,G__50570,G__50571));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg49822 = (function (){var G__50577 = ctx;
var G__50578 = bindings;
var G__50579 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50577,G__50578,G__50579) : sci.impl.evaluator.eval.call(null,G__50577,G__50578,G__50579));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg49823 = (function (){var G__50581 = ctx;
var G__50582 = bindings;
var G__50583 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50581,G__50582,G__50583) : sci.impl.evaluator.eval.call(null,G__50581,G__50582,G__50583));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg49824 = (function (){var G__50585 = ctx;
var G__50586 = bindings;
var G__50587 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50585,G__50586,G__50587) : sci.impl.evaluator.eval.call(null,G__50585,G__50586,G__50587));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg49825 = (function (){var G__50588 = ctx;
var G__50589 = bindings;
var G__50590 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50588,G__50589,G__50590) : sci.impl.evaluator.eval.call(null,G__50588,G__50589,G__50590));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg49826 = (function (){var G__50591 = ctx;
var G__50592 = bindings;
var G__50593 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50591,G__50592,G__50593) : sci.impl.evaluator.eval.call(null,G__50591,G__50592,G__50593));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg49827 = (function (){var G__50596 = ctx;
var G__50597 = bindings;
var G__50598 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50596,G__50597,G__50598) : sci.impl.evaluator.eval.call(null,G__50596,G__50597,G__50598));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg49810,arg49811,arg49812,arg49813,arg49814,arg49815,arg49816,arg49817,arg49818,arg49819,arg49820,arg49821,arg49822,arg49823,arg49824,arg49825,arg49826,arg49827) : f.call(null,arg49810,arg49811,arg49812,arg49813,arg49814,arg49815,arg49816,arg49817,arg49818,arg49819,arg49820,arg49821,arg49822,arg49823,arg49824,arg49825,arg49826,arg49827));

break;
case (19):
var arg49828 = (function (){var G__50607 = ctx;
var G__50608 = bindings;
var G__50609 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50607,G__50608,G__50609) : sci.impl.evaluator.eval.call(null,G__50607,G__50608,G__50609));
})();
var args__$1 = cljs.core.rest(args);
var arg49829 = (function (){var G__50612 = ctx;
var G__50613 = bindings;
var G__50614 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50612,G__50613,G__50614) : sci.impl.evaluator.eval.call(null,G__50612,G__50613,G__50614));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg49830 = (function (){var G__50619 = ctx;
var G__50620 = bindings;
var G__50621 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50619,G__50620,G__50621) : sci.impl.evaluator.eval.call(null,G__50619,G__50620,G__50621));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg49831 = (function (){var G__50623 = ctx;
var G__50624 = bindings;
var G__50625 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50623,G__50624,G__50625) : sci.impl.evaluator.eval.call(null,G__50623,G__50624,G__50625));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg49832 = (function (){var G__50630 = ctx;
var G__50631 = bindings;
var G__50632 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50630,G__50631,G__50632) : sci.impl.evaluator.eval.call(null,G__50630,G__50631,G__50632));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg49833 = (function (){var G__50645 = ctx;
var G__50646 = bindings;
var G__50647 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50645,G__50646,G__50647) : sci.impl.evaluator.eval.call(null,G__50645,G__50646,G__50647));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg49834 = (function (){var G__50657 = ctx;
var G__50658 = bindings;
var G__50659 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50657,G__50658,G__50659) : sci.impl.evaluator.eval.call(null,G__50657,G__50658,G__50659));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg49835 = (function (){var G__50669 = ctx;
var G__50670 = bindings;
var G__50671 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50669,G__50670,G__50671) : sci.impl.evaluator.eval.call(null,G__50669,G__50670,G__50671));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg49836 = (function (){var G__50674 = ctx;
var G__50675 = bindings;
var G__50676 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50674,G__50675,G__50676) : sci.impl.evaluator.eval.call(null,G__50674,G__50675,G__50676));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg49837 = (function (){var G__50677 = ctx;
var G__50678 = bindings;
var G__50679 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50677,G__50678,G__50679) : sci.impl.evaluator.eval.call(null,G__50677,G__50678,G__50679));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg49838 = (function (){var G__50686 = ctx;
var G__50687 = bindings;
var G__50688 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50686,G__50687,G__50688) : sci.impl.evaluator.eval.call(null,G__50686,G__50687,G__50688));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg49839 = (function (){var G__50689 = ctx;
var G__50690 = bindings;
var G__50691 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50689,G__50690,G__50691) : sci.impl.evaluator.eval.call(null,G__50689,G__50690,G__50691));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg49840 = (function (){var G__50696 = ctx;
var G__50697 = bindings;
var G__50698 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50696,G__50697,G__50698) : sci.impl.evaluator.eval.call(null,G__50696,G__50697,G__50698));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg49841 = (function (){var G__50699 = ctx;
var G__50700 = bindings;
var G__50701 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50699,G__50700,G__50701) : sci.impl.evaluator.eval.call(null,G__50699,G__50700,G__50701));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg49842 = (function (){var G__50708 = ctx;
var G__50709 = bindings;
var G__50710 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50708,G__50709,G__50710) : sci.impl.evaluator.eval.call(null,G__50708,G__50709,G__50710));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg49843 = (function (){var G__50711 = ctx;
var G__50712 = bindings;
var G__50713 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50711,G__50712,G__50713) : sci.impl.evaluator.eval.call(null,G__50711,G__50712,G__50713));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg49844 = (function (){var G__50716 = ctx;
var G__50717 = bindings;
var G__50718 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50716,G__50717,G__50718) : sci.impl.evaluator.eval.call(null,G__50716,G__50717,G__50718));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg49845 = (function (){var G__50721 = ctx;
var G__50722 = bindings;
var G__50723 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50721,G__50722,G__50723) : sci.impl.evaluator.eval.call(null,G__50721,G__50722,G__50723));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg49846 = (function (){var G__50728 = ctx;
var G__50729 = bindings;
var G__50730 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__50728,G__50729,G__50730) : sci.impl.evaluator.eval.call(null,G__50728,G__50729,G__50730));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg49828,arg49829,arg49830,arg49831,arg49832,arg49833,arg49834,arg49835,arg49836,arg49837,arg49838,arg49839,arg49840,arg49841,arg49842,arg49843,arg49844,arg49845,arg49846) : f.call(null,arg49828,arg49829,arg49830,arg49831,arg49832,arg49833,arg49834,arg49835,arg49836,arg49837,arg49838,arg49839,arg49840,arg49841,arg49842,arg49843,arg49844,arg49845,arg49846));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49097_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__49097_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__49097_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e50746){if((e50746 instanceof Error)){
var e = e50746;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e50746;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
