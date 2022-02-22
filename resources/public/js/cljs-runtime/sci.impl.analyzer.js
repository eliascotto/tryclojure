goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.recur_target = (function sci$impl$analyzer$recur_target(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.with_recur_target = (function sci$impl$analyzer$with_recur_target(ctx,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),v);
});
sci.impl.analyzer.without_recur_target = (function sci$impl$analyzer$without_recur_target(ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),false);
});
sci.impl.analyzer.recur_target_QMARK_ = (function sci$impl$analyzer$recur_target_QMARK_(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});




sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),op)){
return expr;
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,op,true);
}catch (e60552){var _ = e60552;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)){
return expr;
} else {
var macro_var_QMARK_ = (function (){var and__4251__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__4251__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__4251__auto__;
}
})();
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === (function (){var G__60553 = f;
var G__60553__$1 = (((G__60553 == null))?null:cljs.core.meta(G__60553));
if((G__60553__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__60553__$1);
}
})());
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref(f):f);
if(cljs.core.truth_((function (){var or__4253__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.utils.macro_QMARK_(f__$1);
}
})())){
if(needs_ctx_QMARK_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),ctx__$1,cljs.core.rest(expr));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.rest(expr));
}
} else {
return expr;
}
}

}
}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children_tail = (function sci$impl$analyzer$analyze_children_tail(ctx,children){
var rt = sci.impl.analyzer.recur_target(ctx);
var non_tail_ctx = sci.impl.analyzer.without_recur_target(ctx);
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60556_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__60556_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__60556_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__60558 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__60559 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60558,G__60559) : sci.impl.analyzer.analyze.call(null,G__60558,G__60559));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__60561 = cljs.core.count(children);
switch (G__60561) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
sci.impl.evaluator.eval(ctx__$1,bindings,arg0);

return sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
sci.impl.evaluator.eval(ctx__$1,bindings,arg0);

sci.impl.evaluator.eval(ctx__$1,bindings,arg1);

return sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return (function (ctx__$1,bindings){
return sci.impl.evaluator.eval_do(ctx__$1,bindings,analyzed_children__$1);
});
})(),expr);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__60565 = cljs.core.count(children);
switch (G__60565) {
case (0):
return null;

break;
case (1):
var G__60567 = ctx;
var G__60568 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60567,G__60568) : sci.impl.analyzer.analyze.call(null,G__60567,G__60568));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
}
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
}
}
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
}
}
}
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
}
}
}
}
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
}
}
}
}
}
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
}
}
}
}
}
}
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
}
}
}
}
}
}
}
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
var or__4253__auto____$16 = sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
if(cljs.core.truth_(or__4253__auto____$16)){
return or__4253__auto____$16;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg17);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var or__4253__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
var or__4253__auto____$16 = sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
if(cljs.core.truth_(or__4253__auto____$16)){
return or__4253__auto____$16;
} else {
var or__4253__auto____$17 = sci.impl.evaluator.eval(ctx__$1,bindings,arg17);
if(cljs.core.truth_(or__4253__auto____$17)){
return or__4253__auto____$17;
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,arg18);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return (function (ctx__$1,bindings){
return sci.impl.evaluator.eval_or(ctx__$1,bindings,analyzed_children__$1);
});
})(),expr);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__60609 = cljs.core.count(children);
switch (G__60609) {
case (0):
return null;

break;
case (1):
var G__60610 = ctx;
var G__60611 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60610,G__60611) : sci.impl.analyzer.analyze.call(null,G__60610,G__60611));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
} else {
return and__4251__auto__;
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(and__4251__auto____$11)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(and__4251__auto____$12)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(and__4251__auto____$13)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(and__4251__auto____$14)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
if(cljs.core.truth_(and__4251__auto____$15)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
if(cljs.core.truth_(and__4251__auto____$15)){
var and__4251__auto____$16 = sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
if(cljs.core.truth_(and__4251__auto____$16)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg17);
} else {
return and__4251__auto____$16;
}
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var and__4251__auto__ = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
if(cljs.core.truth_(and__4251__auto____$15)){
var and__4251__auto____$16 = sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
if(cljs.core.truth_(and__4251__auto____$16)){
var and__4251__auto____$17 = sci.impl.evaluator.eval(ctx__$1,bindings,arg17);
if(cljs.core.truth_(and__4251__auto____$17)){
return sci.impl.evaluator.eval(ctx__$1,bindings,arg18);
} else {
return and__4251__auto____$17;
}
} else {
return and__4251__auto____$16;
}
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return (function (ctx__$1,bindings){
return sci.impl.evaluator.eval_and(ctx__$1,bindings,analyzed_children__$1);
});
})(),expr);

}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location("Can only recur from tail position",expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__60650 = cljs.core.count(analyzed_children);
switch (G__60650) {
case (0):
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_,bindings){
return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62196 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
(bindings[(0)] = eval_0_62196);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62197 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62198 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
(bindings[(0)] = eval_0_62197);

(bindings[(1)] = eval_1_62198);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62201 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62202 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62203 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
(bindings[(0)] = eval_0_62201);

(bindings[(1)] = eval_1_62202);

(bindings[(2)] = eval_2_62203);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62205 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62207 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62208 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62209 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
(bindings[(0)] = eval_0_62205);

(bindings[(1)] = eval_1_62207);

(bindings[(2)] = eval_2_62208);

(bindings[(3)] = eval_3_62209);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62218 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62219 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62220 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62221 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62222 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
(bindings[(0)] = eval_0_62218);

(bindings[(1)] = eval_1_62219);

(bindings[(2)] = eval_2_62220);

(bindings[(3)] = eval_3_62221);

(bindings[(4)] = eval_4_62222);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62225 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62226 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62227 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62228 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62229 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62230 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
(bindings[(0)] = eval_0_62225);

(bindings[(1)] = eval_1_62226);

(bindings[(2)] = eval_2_62227);

(bindings[(3)] = eval_3_62228);

(bindings[(4)] = eval_4_62229);

(bindings[(5)] = eval_5_62230);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62233 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62234 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62235 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62236 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62237 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62238 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62239 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
(bindings[(0)] = eval_0_62233);

(bindings[(1)] = eval_1_62234);

(bindings[(2)] = eval_2_62235);

(bindings[(3)] = eval_3_62236);

(bindings[(4)] = eval_4_62237);

(bindings[(5)] = eval_5_62238);

(bindings[(6)] = eval_6_62239);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62255 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62256 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62257 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62258 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62259 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62260 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62261 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62262 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
(bindings[(0)] = eval_0_62255);

(bindings[(1)] = eval_1_62256);

(bindings[(2)] = eval_2_62257);

(bindings[(3)] = eval_3_62258);

(bindings[(4)] = eval_4_62259);

(bindings[(5)] = eval_5_62260);

(bindings[(6)] = eval_6_62261);

(bindings[(7)] = eval_7_62262);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62272 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62273 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62274 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62275 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62276 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62277 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62278 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62279 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62280 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
(bindings[(0)] = eval_0_62272);

(bindings[(1)] = eval_1_62273);

(bindings[(2)] = eval_2_62274);

(bindings[(3)] = eval_3_62275);

(bindings[(4)] = eval_4_62276);

(bindings[(5)] = eval_5_62277);

(bindings[(6)] = eval_6_62278);

(bindings[(7)] = eval_7_62279);

(bindings[(8)] = eval_8_62280);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62283 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62284 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62285 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62286 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62287 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62288 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62289 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62290 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62291 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62292 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
(bindings[(0)] = eval_0_62283);

(bindings[(1)] = eval_1_62284);

(bindings[(2)] = eval_2_62285);

(bindings[(3)] = eval_3_62286);

(bindings[(4)] = eval_4_62287);

(bindings[(5)] = eval_5_62288);

(bindings[(6)] = eval_6_62289);

(bindings[(7)] = eval_7_62290);

(bindings[(8)] = eval_8_62291);

(bindings[(9)] = eval_9_62292);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62296 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62297 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62298 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62299 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62300 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62301 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62302 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62303 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62304 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62305 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62306 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
(bindings[(0)] = eval_0_62296);

(bindings[(1)] = eval_1_62297);

(bindings[(2)] = eval_2_62298);

(bindings[(3)] = eval_3_62299);

(bindings[(4)] = eval_4_62300);

(bindings[(5)] = eval_5_62301);

(bindings[(6)] = eval_6_62302);

(bindings[(7)] = eval_7_62303);

(bindings[(8)] = eval_8_62304);

(bindings[(9)] = eval_9_62305);

(bindings[(10)] = eval_10_62306);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62311 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62312 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62313 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62314 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62315 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62316 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62317 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62318 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62319 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62320 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62321 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62322 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
(bindings[(0)] = eval_0_62311);

(bindings[(1)] = eval_1_62312);

(bindings[(2)] = eval_2_62313);

(bindings[(3)] = eval_3_62314);

(bindings[(4)] = eval_4_62315);

(bindings[(5)] = eval_5_62316);

(bindings[(6)] = eval_6_62317);

(bindings[(7)] = eval_7_62318);

(bindings[(8)] = eval_8_62319);

(bindings[(9)] = eval_9_62320);

(bindings[(10)] = eval_10_62321);

(bindings[(11)] = eval_11_62322);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62330 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62331 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62332 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62333 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62334 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62335 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62336 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62337 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62338 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62339 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62340 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62341 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
var eval_12_62342 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
(bindings[(0)] = eval_0_62330);

(bindings[(1)] = eval_1_62331);

(bindings[(2)] = eval_2_62332);

(bindings[(3)] = eval_3_62333);

(bindings[(4)] = eval_4_62334);

(bindings[(5)] = eval_5_62335);

(bindings[(6)] = eval_6_62336);

(bindings[(7)] = eval_7_62337);

(bindings[(8)] = eval_8_62338);

(bindings[(9)] = eval_9_62339);

(bindings[(10)] = eval_10_62340);

(bindings[(11)] = eval_11_62341);

(bindings[(12)] = eval_12_62342);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62346 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62347 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62348 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62349 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62350 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62351 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62352 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62353 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62354 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62355 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62356 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62357 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
var eval_12_62358 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
var eval_13_62359 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
(bindings[(0)] = eval_0_62346);

(bindings[(1)] = eval_1_62347);

(bindings[(2)] = eval_2_62348);

(bindings[(3)] = eval_3_62349);

(bindings[(4)] = eval_4_62350);

(bindings[(5)] = eval_5_62351);

(bindings[(6)] = eval_6_62352);

(bindings[(7)] = eval_7_62353);

(bindings[(8)] = eval_8_62354);

(bindings[(9)] = eval_9_62355);

(bindings[(10)] = eval_10_62356);

(bindings[(11)] = eval_11_62357);

(bindings[(12)] = eval_12_62358);

(bindings[(13)] = eval_13_62359);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62370 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62371 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62372 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62373 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62374 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62375 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62376 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62377 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62378 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62379 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62380 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62381 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
var eval_12_62382 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
var eval_13_62383 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
var eval_14_62384 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
(bindings[(0)] = eval_0_62370);

(bindings[(1)] = eval_1_62371);

(bindings[(2)] = eval_2_62372);

(bindings[(3)] = eval_3_62373);

(bindings[(4)] = eval_4_62374);

(bindings[(5)] = eval_5_62375);

(bindings[(6)] = eval_6_62376);

(bindings[(7)] = eval_7_62377);

(bindings[(8)] = eval_8_62378);

(bindings[(9)] = eval_9_62379);

(bindings[(10)] = eval_10_62380);

(bindings[(11)] = eval_11_62381);

(bindings[(12)] = eval_12_62382);

(bindings[(13)] = eval_13_62383);

(bindings[(14)] = eval_14_62384);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62391 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62392 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62393 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62394 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62395 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62396 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62397 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62398 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62399 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62400 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62401 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62402 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
var eval_12_62403 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
var eval_13_62404 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
var eval_14_62405 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
var eval_15_62406 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
(bindings[(0)] = eval_0_62391);

(bindings[(1)] = eval_1_62392);

(bindings[(2)] = eval_2_62393);

(bindings[(3)] = eval_3_62394);

(bindings[(4)] = eval_4_62395);

(bindings[(5)] = eval_5_62396);

(bindings[(6)] = eval_6_62397);

(bindings[(7)] = eval_7_62398);

(bindings[(8)] = eval_8_62399);

(bindings[(9)] = eval_9_62400);

(bindings[(10)] = eval_10_62401);

(bindings[(11)] = eval_11_62402);

(bindings[(12)] = eval_12_62403);

(bindings[(13)] = eval_13_62404);

(bindings[(14)] = eval_14_62405);

(bindings[(15)] = eval_15_62406);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62416 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62417 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62418 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62419 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62420 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62421 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62422 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62423 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62424 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62425 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62426 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62427 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
var eval_12_62428 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
var eval_13_62429 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
var eval_14_62430 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
var eval_15_62431 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
var eval_16_62432 = sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
(bindings[(0)] = eval_0_62416);

(bindings[(1)] = eval_1_62417);

(bindings[(2)] = eval_2_62418);

(bindings[(3)] = eval_3_62419);

(bindings[(4)] = eval_4_62420);

(bindings[(5)] = eval_5_62421);

(bindings[(6)] = eval_6_62422);

(bindings[(7)] = eval_7_62423);

(bindings[(8)] = eval_8_62424);

(bindings[(9)] = eval_9_62425);

(bindings[(10)] = eval_10_62426);

(bindings[(11)] = eval_11_62427);

(bindings[(12)] = eval_12_62428);

(bindings[(13)] = eval_13_62429);

(bindings[(14)] = eval_14_62430);

(bindings[(15)] = eval_15_62431);

(bindings[(16)] = eval_16_62432);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62442 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62443 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62444 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62445 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62446 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62447 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62448 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62449 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62450 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62451 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62452 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62453 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
var eval_12_62454 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
var eval_13_62455 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
var eval_14_62456 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
var eval_15_62457 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
var eval_16_62458 = sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
var eval_17_62459 = sci.impl.evaluator.eval(ctx__$1,bindings,arg17);
(bindings[(0)] = eval_0_62442);

(bindings[(1)] = eval_1_62443);

(bindings[(2)] = eval_2_62444);

(bindings[(3)] = eval_3_62445);

(bindings[(4)] = eval_4_62446);

(bindings[(5)] = eval_5_62447);

(bindings[(6)] = eval_6_62448);

(bindings[(7)] = eval_7_62449);

(bindings[(8)] = eval_8_62450);

(bindings[(9)] = eval_9_62451);

(bindings[(10)] = eval_10_62452);

(bindings[(11)] = eval_11_62453);

(bindings[(12)] = eval_12_62454);

(bindings[(13)] = eval_13_62455);

(bindings[(14)] = eval_14_62456);

(bindings[(15)] = eval_15_62457);

(bindings[(16)] = eval_16_62458);

(bindings[(17)] = eval_17_62459);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
var param18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var eval_0_62467 = sci.impl.evaluator.eval(ctx__$1,bindings,arg0);
var eval_1_62468 = sci.impl.evaluator.eval(ctx__$1,bindings,arg1);
var eval_2_62469 = sci.impl.evaluator.eval(ctx__$1,bindings,arg2);
var eval_3_62470 = sci.impl.evaluator.eval(ctx__$1,bindings,arg3);
var eval_4_62471 = sci.impl.evaluator.eval(ctx__$1,bindings,arg4);
var eval_5_62472 = sci.impl.evaluator.eval(ctx__$1,bindings,arg5);
var eval_6_62473 = sci.impl.evaluator.eval(ctx__$1,bindings,arg6);
var eval_7_62474 = sci.impl.evaluator.eval(ctx__$1,bindings,arg7);
var eval_8_62475 = sci.impl.evaluator.eval(ctx__$1,bindings,arg8);
var eval_9_62476 = sci.impl.evaluator.eval(ctx__$1,bindings,arg9);
var eval_10_62477 = sci.impl.evaluator.eval(ctx__$1,bindings,arg10);
var eval_11_62478 = sci.impl.evaluator.eval(ctx__$1,bindings,arg11);
var eval_12_62479 = sci.impl.evaluator.eval(ctx__$1,bindings,arg12);
var eval_13_62480 = sci.impl.evaluator.eval(ctx__$1,bindings,arg13);
var eval_14_62481 = sci.impl.evaluator.eval(ctx__$1,bindings,arg14);
var eval_15_62482 = sci.impl.evaluator.eval(ctx__$1,bindings,arg15);
var eval_16_62483 = sci.impl.evaluator.eval(ctx__$1,bindings,arg16);
var eval_17_62484 = sci.impl.evaluator.eval(ctx__$1,bindings,arg17);
var eval_18_62485 = sci.impl.evaluator.eval(ctx__$1,bindings,arg18);
(bindings[(0)] = eval_0_62467);

(bindings[(1)] = eval_1_62468);

(bindings[(2)] = eval_2_62469);

(bindings[(3)] = eval_3_62470);

(bindings[(4)] = eval_4_62471);

(bindings[(5)] = eval_5_62472);

(bindings[(6)] = eval_6_62473);

(bindings[(7)] = eval_7_62474);

(bindings[(8)] = eval_8_62475);

(bindings[(9)] = eval_9_62476);

(bindings[(10)] = eval_10_62477);

(bindings[(11)] = eval_11_62478);

(bindings[(12)] = eval_12_62479);

(bindings[(13)] = eval_13_62480);

(bindings[(14)] = eval_14_62481);

(bindings[(15)] = eval_15_62482);

(bindings[(16)] = eval_16_62483);

(bindings[(17)] = eval_17_62484);

(bindings[(18)] = eval_18_62485);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),expr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60650)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60688_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__60688_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__60688_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.self_ref_idx = self_ref_idx;
this.iden__GT_invoke_idx = iden__GT_invoke_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k60690,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__60695 = k60690;
var G__60695__$1 = (((G__60695 instanceof cljs.core.Keyword))?G__60695.fqn:null);
switch (G__60695__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "self-ref-idx":
return self__.self_ref_idx;

break;
case "iden->invoke-idx":
return self__.iden__GT_invoke_idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60690,else__4505__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__60697){
var vec__60698 = p__60697;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60698,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60698,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60689){
var self__ = this;
var G__60689__$1 = this;
return (new cljs.core.RecordIter((0),G__60689__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60691,other60692){
var self__ = this;
var this60691__$1 = this;
return (((!((other60692 == null)))) && ((((this60691__$1.constructor === other60692.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60691__$1.params,other60692.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60691__$1.body,other60692.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60691__$1.fixed_arity,other60692.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60691__$1.var_arg_name,other60692.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60691__$1.self_ref_idx,other60692.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60691__$1.iden__GT_invoke_idx,other60692.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60691__$1.__extmap,other60692.__extmap)))))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k60690){
var self__ = this;
var this__4509__auto____$1 = this;
var G__60707 = k60690;
var G__60707__$1 = (((G__60707 instanceof cljs.core.Keyword))?G__60707.fqn:null);
switch (G__60707__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60690);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__60689){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__60709 = cljs.core.keyword_identical_QMARK_;
var expr__60710 = k__4511__auto__;
if(cljs.core.truth_((pred__60709.cljs$core$IFn$_invoke$arity$2 ? pred__60709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__60710) : pred__60709.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__60710)))){
return (new sci.impl.analyzer.FnBody(G__60689,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60709.cljs$core$IFn$_invoke$arity$2 ? pred__60709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__60710) : pred__60709.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__60710)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__60689,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60709.cljs$core$IFn$_invoke$arity$2 ? pred__60709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__60710) : pred__60709.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__60710)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__60689,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60709.cljs$core$IFn$_invoke$arity$2 ? pred__60709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__60710) : pred__60709.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__60710)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__60689,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60709.cljs$core$IFn$_invoke$arity$2 ? pred__60709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__60710) : pred__60709.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__60710)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__60689,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60709.cljs$core$IFn$_invoke$arity$2 ? pred__60709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__60710) : pred__60709.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__60710)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__60689,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__60689),null));
}
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__60689){
var self__ = this;
var this__4501__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__60689,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"self-ref-idx","self-ref-idx",255993715,null),new cljs.core.Symbol(null,"iden->invoke-idx","iden->invoke-idx",-157095499,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__60693){
var extmap__4542__auto__ = (function (){var G__60715 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60693,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__60693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60715);
} else {
return G__60715;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__60693),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__60693),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__60693),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__60693),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__60693),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__60693),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__60719,p__60720,macro_QMARK_,fn_name,fn_id){
var map__60721 = p__60719;
var map__60721__$1 = cljs.core.__destructure_map(map__60721);
var ctx = map__60721__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__60722 = p__60720;
var seq__60723 = cljs.core.seq(vec__60722);
var first__60724 = cljs.core.first(seq__60723);
var seq__60723__$1 = cljs.core.next(seq__60723);
var binding_vector = first__60724;
var body_exprs = seq__60723__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4253__auto__ = conds;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__60726 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__60726__$1 = cljs.core.__destructure_map(map__60726);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__60727 = cljs.core.split_with((function (p1__60717_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__60717_SHARP_);
}),params);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60727,(0),null);
var vec__60730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60727,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60730,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60730,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__60735 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60735,var_arg_name);
} else {
return G__60735;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"params","params",710516235),param_names);
var param_count = cljs.core.count(param_names);
var param_idens = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(param_count,cljs.core.gensym);
var param_bindings = cljs.core.zipmap(param_names,param_idens);
var iden__GT_invoke_idx = cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx);
var ctx__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$3,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.conj,fixed_arity);
var ___$1 = cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4),cljs.core.assoc_in(cljs.core._deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)),cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__60737 = ctx__$4;
var G__60738 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__60739 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__60737,G__60738,G__60739) : sci.impl.analyzer.update_parents.call(null,G__60737,G__60738,G__60739));
})():null);
var body__$1 = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__60740 = sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60740,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__60740;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__60742 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__60743 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60742,G__60743) : sci.impl.analyzer.analyze.call(null,G__60742,G__60743));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__60747,macro_QMARK_){
var vec__60748 = p__60747;
var seq__60749 = cljs.core.seq(vec__60748);
var first__60750 = cljs.core.first(seq__60749);
var seq__60749__$1 = cljs.core.next(seq__60749);
var _fn = first__60750;
var first__60750__$1 = cljs.core.first(seq__60749__$1);
var seq__60749__$2 = cljs.core.next(seq__60749__$1);
var name_QMARK_ = first__60750__$1;
var body = seq__60749__$2;
var fn_expr = vec__60748;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var fn_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parents = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY)(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$1),fn_id);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891),parents);
var ctx__$3 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),fn_id):ctx__$2);
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$3);
var bound_idens = cljs.core.set(cljs.core.vals(bindings));
var ctx__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"outer-idens","outer-idens",1197381241),bound_idens);
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60752,body__$2){
var map__60753 = p__60752;
var map__60753__$1 = cljs.core.__destructure_map(map__60753);
var acc = map__60753__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var orig_body = body__$2;
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$4,body__$2,macro_QMARK_,fn_name,fn_id);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(body__$3);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(body__$3);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4251__auto__ = var_arg_name;
if(cljs.core.truth_(and__4251__auto__)){
return min_varargs;
} else {
return and__4251__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(var_arg_name);
if(and__4251__auto__){
var and__4251__auto____$1 = min_varargs;
if(cljs.core.truth_(and__4251__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__4336__auto__ = fixed_arity;
var y__4337__auto__ = max_fixed;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword(null,"orig","orig",-1678309870),orig_body)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var cb_idens_by_arity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),parents);
var cb_idens = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.vals(cb_idens_by_arity)));
var self_ref_QMARK_ = (cljs.core.truth_(fn_name)?cljs.core.contains_QMARK_(cb_idens,fn_id):null);
var closed_over_idens = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(bound_idens,cljs.core.keys(cb_idens));
var iden__GT_invoke_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(parents),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var closed_over_iden__GT_binding_idx = (cljs.core.truth_(iden__GT_invoke_idx)?cljs.core.zipmap(closed_over_idens,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,closed_over_idens)):null);
var closed_over_cnt = cljs.core.count(closed_over_idens);
var iden__GT_enclosed_idx = cljs.core.zipmap(closed_over_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$1(closed_over_cnt));
var iden__GT_enclosed_idx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_enclosed_idx,fn_id,closed_over_cnt):iden__GT_enclosed_idx);
var enclosed_array_fn = (((function (){var or__4253__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__60757 = closed_over_cnt;
if(cljs.core.truth_(fn_name)){
return (G__60757 + (1));
} else {
return G__60757;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5753__auto__)){
var binding_idx = temp__5753__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__60758 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__60758[(0)] = binding_idx);

(G__60758[(1)] = enclosed_idx);

return G__60758;
} else {
return null;
}
}),closed_over_idens));
return (function (bindings__$1){
var a__4738__auto__ = binding__GT_enclosed;
var l__4739__auto__ = a__4738__auto__.length;
var idx = (0);
var ret = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(enclosed_array_cnt);
while(true){
if((idx < l__4739__auto__)){
var G__62537 = (idx + (1));
var G__62538 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__62537;
ret = G__62538;
continue;
} else {
return ret;
}
break;
}
});
})():cljs.core.constantly(null));
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5753__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5753__auto__)){
var invocation_idx = temp__5753__auto__;
var G__60761 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__60761[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__60761[(1)] = invocation_idx);

return G__60761;
} else {
return null;
}
}),closed_over_idens));
var invoc_size = cljs.core.count(iden__GT_invocation_idx);
var copy_enclosed__GT_invocation = (((enclosed__GT_invocation.length > (0)))?(function (enclosed_array,invoc_array){
var a__4738__auto__ = enclosed__GT_invocation;
var l__4739__auto__ = a__4738__auto__.length;
var idx = (0);
var ret = invoc_array;
while(true){
if((idx < l__4739__auto__)){
var G__62546 = (idx + (1));
var G__62547 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__62546;
ret = G__62547;
continue;
} else {
return ret;
}
break;
}
}):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body__$2,new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058),invoc_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invocation-self-idx","invocation-self-idx",-1258983407),invocation_self_idx,new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729),copy_enclosed__GT_invocation], 0));
}),bodies__$1);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$4,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0)));
var struct = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),bodies__$2,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273),self_ref_QMARK_,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),fn_meta__$1,new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394),enclosed_array_fn], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
var bindings_fn = new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref_QMARK_ = new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273).cljs$core$IFn$_invoke$arity$1(struct);
if(cljs.core.truth_(fn_meta)){
return (function (ctx,bindings){
var fn_meta__$1 = sci.impl.evaluator.handle_meta(ctx,bindings,fn_meta);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
});
} else {
return (function (ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
});
}
});
sci.impl.analyzer.analyze_fn = (function sci$impl$analyzer$analyze_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(ctxfn,struct,fn_expr,null);
});
/**
 * :syms = closed over values
 */
sci.impl.analyzer.update_parents = (function sci$impl$analyzer$update_parents(ctx,closure_bindings,ob){
var parents = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx);
var new_cb = cljs.core._vreset_BANG_(closure_bindings,(function (cb){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762)),(function (iden__GT_invoke_idx){
if(cljs.core.contains_QMARK_(iden__GT_invoke_idx,ob)){
return iden__GT_invoke_idx;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,ob,(cljs.core.count(iden__GT_invoke_idx)));
}
}));
})(cljs.core._deref(closure_bindings)));
var closure_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ob], 0)));
return closure_idx;
});
sci.impl.analyzer.analyze_let_STAR_ = (function sci$impl$analyzer$analyze_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__60768 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60771,p__60772){
var vec__60773 = p__60771;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60773,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60773,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60773,(2),null);
var vec__60776 = p__60772;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60776,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60776,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$2,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$2,binding_value));
var new_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idx = sci.impl.analyzer.update_parents(ctx__$2,cb,new_iden);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var iden__GT_invoke_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,new_iden,idx);
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,new_iden),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60768,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60768,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60768,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$3,bindings){
return sci.impl.evaluator.eval_let(ctx__$3,bindings,new_let_bindings,body,idxs);
}),expr);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__60782){
var vec__60783 = p__60782;
var seq__60784 = cljs.core.seq(vec__60783);
var first__60785 = cljs.core.first(seq__60784);
var seq__60784__$1 = cljs.core.next(seq__60784);
var _let = first__60785;
var first__60785__$1 = cljs.core.first(seq__60784__$1);
var seq__60784__$2 = cljs.core.next(seq__60784__$1);
var let_bindings = first__60785__$1;
var exprs = seq__60784__$2;
var expr = vec__60783;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__60787 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(3),null);
var G__60790_62573 = ctx__$1;
var G__60791_62574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__60790_62573,G__60791_62574) : sci.impl.analyzer.expand_declare.call(null,G__60790_62573,G__60791_62574));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,init) : sci.impl.analyzer.analyze.call(null,ctx__$1,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (function (){var G__60793 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__60794 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60793,G__60794) : sci.impl.analyzer.analyze.call(null,G__60793,G__60794));
})();
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.evaluator.eval_def(ctx__$2,bindings,var_name,init__$1,m__$3);
}),expr);
});
sci.impl.analyzer.analyze_defn = (function sci$impl$analyzer$analyze_defn(ctx,p__60796){
var vec__60797 = p__60796;
var seq__60798 = cljs.core.seq(vec__60797);
var first__60799 = cljs.core.first(seq__60798);
var seq__60798__$1 = cljs.core.next(seq__60798);
var op = first__60799;
var first__60799__$1 = cljs.core.first(seq__60798__$1);
var seq__60798__$2 = cljs.core.next(seq__60798__$1);
var fn_name = first__60799__$1;
var body = seq__60798__$2;
var expr = vec__60797;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__60800_62582 = ctx;
var G__60801_62583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__60800_62582,G__60801_62583) : sci.impl.analyzer.expand_declare.call(null,G__60800_62582,G__60801_62583));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__60803 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60803,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60803,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5753__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var ds = temp__5753__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5753__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__60806 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60806,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60806,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var meta_map__$3 = (function (){var G__60810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__60811 = meta_map__$2;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60810,G__60811) : sci.impl.analyzer.analyze.call(null,G__60810,G__60811));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$3,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$5 = (function (){var G__60812 = meta_map__$4;
var G__60812__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60812,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__60812);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60812__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__60812__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3(ctxfn,f__$1,f__$1);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),expr);
});
sci.impl.analyzer.analyze_loop = (function sci$impl$analyzer$analyze_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__60815 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),cljs.core.gensym);
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ctx__$1 = sci.impl.analyzer.with_recur_target(ctx,true);
var ana = sci.impl.analyzer.return_do(ctx__$1,expr,body);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.evaluator.eval(ctx__$2,bindings,ana);
}),null,null));
}),expr);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__60820 = cljs.core.count(children);
switch (G__60820) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return null;
}
}),null,expr,null);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,else$);
}
}),null,expr,null);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var ctx_wo_rt = sci.impl.analyzer.without_recur_target(ctx);
var case_val = (function (){var G__60827 = ctx_wo_rt;
var G__60828 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60827,G__60828) : sci.impl.analyzer.analyze.call(null,G__60827,G__60828));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__60824 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__60829 = ctx;
var G__60830 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60829,G__60830) : sci.impl.analyzer.analyze.call(null,G__60829,G__60830));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60824,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60824,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__60836 = cases__$1;
var seq__60837 = cljs.core.seq(vec__60836);
var first__60838 = cljs.core.first(seq__60837);
var seq__60837__$1 = cljs.core.next(seq__60837);
var k = first__60838;
var first__60838__$1 = cljs.core.first(seq__60837__$1);
var seq__60837__$2 = cljs.core.next(seq__60837__$1);
var v = first__60838__$1;
var cases__$2 = seq__60837__$2;
if(cljs.core.seq_QMARK_(k)){
var G__62592 = cases__$2;
var G__62593 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__60836,seq__60837,first__60838,seq__60837__$1,k,first__60838__$1,seq__60837__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__60824,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__60836,seq__60837,first__60838,seq__60837__$1,k,first__60838__$1,seq__60837__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__60824,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__62592;
ret_map = G__62593;
continue;
} else {
var G__62595 = cases__$2;
var G__62596 = assoc_new(ret_map,k,v);
cases__$1 = G__62595;
ret_map = G__62596;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}):(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(f,null,expr,null);
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var body = cljs.core.next(expr);
var vec__60842 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__62597 = exprs__$1;
var G__62598 = body_exprs;
var G__62599 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__62600 = finally_expr;
exprs = G__62597;
body_exprs = G__62598;
catch_exprs = G__62599;
finally_expr = G__62600;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__62601 = exprs__$1;
var G__62602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__62603 = catch_exprs;
var G__62604 = finally_expr;
exprs = G__62601;
body_exprs = G__62602;
catch_exprs = G__62603;
finally_expr = G__62604;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60842,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60842,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60842,(2),null);
var body__$1 = (function (){var G__60847 = ctx__$1;
var G__60848 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60847,G__60848) : sci.impl.analyzer.analyze.call(null,G__60847,G__60848));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__60850 = c;
var seq__60851 = cljs.core.seq(vec__60850);
var first__60852 = cljs.core.first(seq__60851);
var seq__60851__$1 = cljs.core.next(seq__60851);
var _ = first__60852;
var first__60852__$1 = cljs.core.first(seq__60851__$1);
var seq__60851__$2 = cljs.core.next(seq__60851__$1);
var ex = first__60852__$1;
var first__60852__$2 = cljs.core.first(seq__60851__$2);
var seq__60851__$3 = cljs.core.next(seq__60851__$2);
var binding = first__60852__$2;
var body__$2 = seq__60851__$3;
var temp__5751__auto__ = (function (){var G__60853 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__60853)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__60853)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__60853)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
var ex_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ex_idx = sci.impl.analyzer.update_parents(ctx__$1,closure_bindings,ex_iden);
var ctx__$2 = cljs.core.assoc_in(cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),ex_iden),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),ex_iden], null),ex_idx);
var analyzed_body = (function (){var G__60855 = ctx__$2;
var G__60856 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60855,G__60856) : sci.impl.analyzer.analyze.call(null,G__60855,G__60856));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805),ex_idx,new cljs.core.Keyword(null,"body","body",-2049205669),analyzed_body], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__60857 = ctx__$1;
var G__60858 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__60857,G__60858) : sci.impl.analyzer.analyze.call(null,G__60857,G__60858));
})():null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1);
}),expr);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__60860){
var vec__60861 = p__60860;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60861,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60861,(1),null);
var expr = vec__60861;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$2,bindings){
throw sci.impl.evaluator.eval(ctx__$2,bindings,ana);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0)));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__60866){
var vec__60867 = p__60866;
var seq__60868 = cljs.core.seq(vec__60867);
var first__60869 = cljs.core.first(seq__60868);
var seq__60868__$1 = cljs.core.next(seq__60868);
var _declare = first__60869;
var names = seq__60868__$1;
var expr = vec__60867;
var cnn_62615 = sci.impl.vars.current_ns_name();
var env_62616 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_62617 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_62616),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_62615], null));
var refers_62618 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_62617);
var the_current_ns_62619__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5751__auto__ = (function (){var and__4251__auto__ = refers_62618;
if(cljs.core.truth_(and__4251__auto__)){
return refers_62618.get(name);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_62615)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_62617,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__60871 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_62615),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__60871.sci$impl$vars$IVar$unbind$arity$1(null);

return G__60871;
})());
} else {
return the_current_ns_62617;
}
}
}),the_current_ns_62617,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_62616,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_62615,the_current_ns_62619__$1);
}));

return null;
});
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__60874){
var vec__60875 = p__60874;
var seq__60876 = cljs.core.seq(vec__60875);
var first__60877 = cljs.core.first(seq__60876);
var seq__60876__$1 = cljs.core.next(seq__60876);
var _dot = first__60877;
var first__60877__$1 = cljs.core.first(seq__60876__$1);
var seq__60876__$2 = cljs.core.next(seq__60876__$1);
var instance_expr = first__60877__$1;
var first__60877__$2 = cljs.core.first(seq__60876__$2);
var seq__60876__$3 = cljs.core.next(seq__60876__$2);
var method_expr = first__60877__$2;
var args = seq__60876__$3;
var expr = vec__60875;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__60879 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__60880 = cljs.core.seq(vec__60879);
var first__60881 = cljs.core.first(seq__60880);
var seq__60880__$1 = cljs.core.next(seq__60880);
var method_expr__$1 = first__60881;
var args__$1 = seq__60880__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5751__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto__)){
var t = temp__5751__auto__;
var clazz = (function (){var or__4253__auto__ = sci.impl.interop.resolve_class(ctx__$1,t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.records.resolve_record_class(ctx__$1,t);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx__$1,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return (function (ctx__$2,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$2,bindings,instance_expr__$2,meth_name,field_access,args__$2,allowed_QMARK_);
});
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$2,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null),expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__60885){
var vec__60886 = p__60885;
var seq__60887 = cljs.core.seq(vec__60886);
var first__60888 = cljs.core.first(seq__60887);
var seq__60887__$1 = cljs.core.next(seq__60887);
var method_name = first__60888;
var first__60888__$1 = cljs.core.first(seq__60887__$1);
var seq__60887__$2 = cljs.core.next(seq__60887__$1);
var obj = first__60888__$1;
var args = seq__60887__$2;
var expr = vec__60886;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__60895){
var vec__60896 = p__60895;
var seq__60897 = cljs.core.seq(vec__60896);
var first__60898 = cljs.core.first(seq__60897);
var seq__60897__$1 = cljs.core.next(seq__60897);
var _new = first__60898;
var first__60898__$1 = cljs.core.first(seq__60897__$1);
var seq__60897__$2 = cljs.core.next(seq__60897__$1);
var class_sym = first__60898__$1;
var args = seq__60897__$2;
var expr = vec__60896;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var temp__5751__auto__ = (function (){var or__4253__auto__ = (function (){var temp__5753__auto__ = (function (){var temp__5753__auto__ = sci.impl.interop.resolve_class_opts(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5753__auto__)){
var opts = temp__5753__auto__;
var or__4253__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var clazz = temp__5753__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,class_sym) : sci.impl.analyzer.analyze.call(null,ctx__$1,class_sym));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var class$ = temp__5751__auto__;
var var_QMARK_ = (class$ instanceof sci.impl.types.EvalVar);
var maybe_var = ((var_QMARK_)?sci.impl.types.getVal(class$):null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
if(cljs.core.truth_(maybe_record_constructor)){
var G__60901 = ctx__$1;
var G__60902 = expr;
var G__60903 = maybe_record_constructor;
var G__60904 = args__$1;
var G__60905 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__60906 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__60901,G__60902,G__60903,G__60904,G__60905,G__60906) : sci.impl.analyzer.return_call.call(null,G__60901,G__60902,G__60903,G__60904,G__60905,G__60906));
} else {
if(var_QMARK_){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60891_SHARP_){
return sci.impl.evaluator.eval(ctx__$2,bindings,p1__60891_SHARP_);
}),args__$1));
}),expr);
} else {
if((class$ instanceof sci.impl.types.EvalFn)){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.evaluator.eval(ctx__$2,bindings,class$),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60892_SHARP_){
return sci.impl.evaluator.eval(ctx__$2,bindings,p1__60892_SHARP_);
}),args__$1));
}),expr);
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60894_SHARP_){
return sci.impl.evaluator.eval(ctx__$2,bindings,p1__60894_SHARP_);
}),args__$1));
}),expr);

}
}
}
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_class(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5751__auto____$1)){
var record = temp__5751__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var G__60909 = ctx__$1;
var G__60910 = expr;
var G__60911 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__60912 = args__$1;
var G__60913 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__60914 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__60909,G__60910,G__60911,G__60912,G__60913,G__60914) : sci.impl.analyzer.return_call.call(null,G__60909,G__60910,G__60911,G__60912,G__60913,G__60914));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__60916){
var vec__60917 = p__60916;
var seq__60918 = cljs.core.seq(vec__60917);
var first__60919 = cljs.core.first(seq__60918);
var seq__60918__$1 = cljs.core.next(seq__60918);
var constructor_sym = first__60919;
var args = seq__60918__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__60922){
var vec__60924 = p__60922;
var seq__60925 = cljs.core.seq(vec__60924);
var first__60926 = cljs.core.first(seq__60925);
var seq__60925__$1 = cljs.core.next(seq__60925);
var _ns = first__60926;
var first__60926__$1 = cljs.core.first(seq__60925__$1);
var seq__60925__$2 = cljs.core.next(seq__60925__$1);
var ns_name = first__60926__$1;
var exprs = seq__60925__$2;
var expr = vec__60924;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__60927 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60927,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60927,(1),null);
var vec__60930 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60930,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60930,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__60941 = cljs.core.first(exprs__$3);
var seq__60942 = cljs.core.seq(vec__60941);
var first__60943 = cljs.core.first(seq__60942);
var seq__60942__$1 = cljs.core.next(seq__60942);
var k = first__60943;
var args = seq__60942__$1;
var expr__$1 = vec__60941;
var G__60944 = k;
var G__60944__$1 = (((G__60944 instanceof cljs.core.Keyword))?G__60944.fqn:null);
switch (G__60944__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__62636 = cljs.core.next(exprs__$3);
var G__62637 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__60945 = k;
var G__60945__$1 = (((G__60945 instanceof cljs.core.Keyword))?G__60945.fqn:null);
switch (G__60945__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__60945,G__60945__$1,G__60944,G__60944__$1,vec__60941,seq__60942,first__60943,seq__60942__$1,k,args,expr__$1,vec__60927,docstring,exprs__$1,vec__60930,attr_map,exprs__$2,attr_map__$1,vec__60924,seq__60925,first__60926,seq__60925__$1,_ns,first__60926__$1,seq__60925__$2,ns_name,exprs,expr){
return (function() { 
var G__62639__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__62639 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__62640__i = 0, G__62640__a = new Array(arguments.length -  1);
while (G__62640__i < G__62640__a.length) {G__62640__a[G__62640__i] = arguments[G__62640__i + 1]; ++G__62640__i;}
  args__$1 = new cljs.core.IndexedSeq(G__62640__a,0,null);
} 
return G__62639__delegate.call(this,ctx__$1,args__$1);};
G__62639.cljs$lang$maxFixedArity = 1;
G__62639.cljs$lang$applyTo = (function (arglist__62641){
var ctx__$1 = cljs.core.first(arglist__62641);
var args__$1 = cljs.core.rest(arglist__62641);
return G__62639__delegate(ctx__$1,args__$1);
});
G__62639.cljs$core$IFn$_invoke$arity$variadic = G__62639__delegate;
return G__62639;
})()
;
;})(exprs__$3,ret,G__60945,G__60945__$1,G__60944,G__60944__$1,vec__60941,seq__60942,first__60943,seq__60942__$1,k,args,expr__$1,vec__60927,docstring,exprs__$1,vec__60930,attr_map,exprs__$2,attr_map__$1,vec__60924,seq__60925,first__60926,seq__60925__$1,_ns,first__60926__$1,seq__60925__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60945__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__62636;
ret = G__62637;
continue;

break;
case "gen-class":
var G__62642 = cljs.core.next(exprs__$3);
var G__62643 = ret;
exprs__$3 = G__62642;
ret = G__62643;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60944__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2(((function (exprs__$3,ret,vec__60927,docstring,exprs__$1,vec__60930,attr_map,exprs__$2,attr_map__$1,vec__60924,seq__60925,first__60926,seq__60925__$1,_ns,first__60926__$1,seq__60925__$2,ns_name,exprs,expr){
return (function (ctx__$1,_bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__60927,docstring,exprs__$1,vec__60930,attr_map,exprs__$2,attr_map__$1,vec__60924,seq__60925,first__60926,seq__60925__$1,_ns,first__60926__$1,seq__60925__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__60948){
var vec__60949 = p__60948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60949,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60949,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__60953){
var vec__60954 = p__60953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60954,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60954,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60954,(2),null);
var expr = vec__60954;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.types.setVal(obj__$1,v__$2);
}),expr);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.info(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(obj__$2),(1));
var obj__$3 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(obj__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var obj__$4 = sci.impl.evaluator.eval(ctx__$1,bindings,obj__$3);
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$4,k,v__$2);
}),expr);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,idx,f,analyzed_children,stack){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__60960 = cljs.core.count(analyzed_children);
switch (G__60960) {
case (0):
return (function (ctx,bindings){
var fexpr__60962 = (bindings[idx]);
return (fexpr__60962.cljs$core$IFn$_invoke$arity$0 ? fexpr__60962.cljs$core$IFn$_invoke$arity$0() : fexpr__60962.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__60964 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__60963 = (bindings[idx]);
return (fexpr__60963.cljs$core$IFn$_invoke$arity$1 ? fexpr__60963.cljs$core$IFn$_invoke$arity$1(G__60964) : fexpr__60963.call(null,G__60964));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__60967 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__60968 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__60966 = (bindings[idx]);
return (fexpr__60966.cljs$core$IFn$_invoke$arity$2 ? fexpr__60966.cljs$core$IFn$_invoke$arity$2(G__60967,G__60968) : fexpr__60966.call(null,G__60967,G__60968));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__60970 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__60971 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__60972 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__60969 = (bindings[idx]);
return (fexpr__60969.cljs$core$IFn$_invoke$arity$3 ? fexpr__60969.cljs$core$IFn$_invoke$arity$3(G__60970,G__60971,G__60972) : fexpr__60969.call(null,G__60970,G__60971,G__60972));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__60975 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__60976 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__60977 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__60978 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__60974 = (bindings[idx]);
return (fexpr__60974.cljs$core$IFn$_invoke$arity$4 ? fexpr__60974.cljs$core$IFn$_invoke$arity$4(G__60975,G__60976,G__60977,G__60978) : fexpr__60974.call(null,G__60975,G__60976,G__60977,G__60978));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__60981 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__60982 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__60983 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__60984 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__60985 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__60980 = (bindings[idx]);
return (fexpr__60980.cljs$core$IFn$_invoke$arity$5 ? fexpr__60980.cljs$core$IFn$_invoke$arity$5(G__60981,G__60982,G__60983,G__60984,G__60985) : fexpr__60980.call(null,G__60981,G__60982,G__60983,G__60984,G__60985));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__60988 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__60989 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__60990 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__60991 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__60992 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__60993 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__60987 = (bindings[idx]);
return (fexpr__60987.cljs$core$IFn$_invoke$arity$6 ? fexpr__60987.cljs$core$IFn$_invoke$arity$6(G__60988,G__60989,G__60990,G__60991,G__60992,G__60993) : fexpr__60987.call(null,G__60988,G__60989,G__60990,G__60991,G__60992,G__60993));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__60996 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__60997 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__60998 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__60999 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61000 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61001 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61002 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__60995 = (bindings[idx]);
return (fexpr__60995.cljs$core$IFn$_invoke$arity$7 ? fexpr__60995.cljs$core$IFn$_invoke$arity$7(G__60996,G__60997,G__60998,G__60999,G__61000,G__61001,G__61002) : fexpr__60995.call(null,G__60996,G__60997,G__60998,G__60999,G__61000,G__61001,G__61002));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__61004 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61005 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61006 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61007 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61008 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61009 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61010 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61011 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__61003 = (bindings[idx]);
return (fexpr__61003.cljs$core$IFn$_invoke$arity$8 ? fexpr__61003.cljs$core$IFn$_invoke$arity$8(G__61004,G__61005,G__61006,G__61007,G__61008,G__61009,G__61010,G__61011) : fexpr__61003.call(null,G__61004,G__61005,G__61006,G__61007,G__61008,G__61009,G__61010,G__61011));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__61015 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61016 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61017 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61018 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61019 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61020 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61021 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61022 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61023 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__61014 = (bindings[idx]);
return (fexpr__61014.cljs$core$IFn$_invoke$arity$9 ? fexpr__61014.cljs$core$IFn$_invoke$arity$9(G__61015,G__61016,G__61017,G__61018,G__61019,G__61020,G__61021,G__61022,G__61023) : fexpr__61014.call(null,G__61015,G__61016,G__61017,G__61018,G__61019,G__61020,G__61021,G__61022,G__61023));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__61026 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61027 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61028 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61029 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61030 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61031 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61032 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61033 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61034 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61035 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__61025 = (bindings[idx]);
return (fexpr__61025.cljs$core$IFn$_invoke$arity$10 ? fexpr__61025.cljs$core$IFn$_invoke$arity$10(G__61026,G__61027,G__61028,G__61029,G__61030,G__61031,G__61032,G__61033,G__61034,G__61035) : fexpr__61025.call(null,G__61026,G__61027,G__61028,G__61029,G__61030,G__61031,G__61032,G__61033,G__61034,G__61035));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__61038 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61039 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61040 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61041 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61042 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61043 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61044 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61045 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61046 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61047 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61048 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__61037 = (bindings[idx]);
return (fexpr__61037.cljs$core$IFn$_invoke$arity$11 ? fexpr__61037.cljs$core$IFn$_invoke$arity$11(G__61038,G__61039,G__61040,G__61041,G__61042,G__61043,G__61044,G__61045,G__61046,G__61047,G__61048) : fexpr__61037.call(null,G__61038,G__61039,G__61040,G__61041,G__61042,G__61043,G__61044,G__61045,G__61046,G__61047,G__61048));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__61052 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61053 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61054 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61055 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61056 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61057 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61058 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61059 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61060 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61061 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61062 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61063 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__61051 = (bindings[idx]);
return (fexpr__61051.cljs$core$IFn$_invoke$arity$12 ? fexpr__61051.cljs$core$IFn$_invoke$arity$12(G__61052,G__61053,G__61054,G__61055,G__61056,G__61057,G__61058,G__61059,G__61060,G__61061,G__61062,G__61063) : fexpr__61051.call(null,G__61052,G__61053,G__61054,G__61055,G__61056,G__61057,G__61058,G__61059,G__61060,G__61061,G__61062,G__61063));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__61066 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61067 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61068 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61069 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61070 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61071 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61072 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61073 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61074 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61075 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61076 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61077 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61078 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__61065 = (bindings[idx]);
return (fexpr__61065.cljs$core$IFn$_invoke$arity$13 ? fexpr__61065.cljs$core$IFn$_invoke$arity$13(G__61066,G__61067,G__61068,G__61069,G__61070,G__61071,G__61072,G__61073,G__61074,G__61075,G__61076,G__61077,G__61078) : fexpr__61065.call(null,G__61066,G__61067,G__61068,G__61069,G__61070,G__61071,G__61072,G__61073,G__61074,G__61075,G__61076,G__61077,G__61078));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__61082 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61083 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61084 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61085 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61086 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61087 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61088 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61089 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61090 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61091 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61092 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61093 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61094 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61095 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__61081 = (bindings[idx]);
return (fexpr__61081.cljs$core$IFn$_invoke$arity$14 ? fexpr__61081.cljs$core$IFn$_invoke$arity$14(G__61082,G__61083,G__61084,G__61085,G__61086,G__61087,G__61088,G__61089,G__61090,G__61091,G__61092,G__61093,G__61094,G__61095) : fexpr__61081.call(null,G__61082,G__61083,G__61084,G__61085,G__61086,G__61087,G__61088,G__61089,G__61090,G__61091,G__61092,G__61093,G__61094,G__61095));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__61099 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61100 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61101 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61102 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61103 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61104 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61105 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61106 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61107 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61108 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61109 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61110 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61111 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61112 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61113 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__61098 = (bindings[idx]);
return (fexpr__61098.cljs$core$IFn$_invoke$arity$15 ? fexpr__61098.cljs$core$IFn$_invoke$arity$15(G__61099,G__61100,G__61101,G__61102,G__61103,G__61104,G__61105,G__61106,G__61107,G__61108,G__61109,G__61110,G__61111,G__61112,G__61113) : fexpr__61098.call(null,G__61099,G__61100,G__61101,G__61102,G__61103,G__61104,G__61105,G__61106,G__61107,G__61108,G__61109,G__61110,G__61111,G__61112,G__61113));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__61116 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61117 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61118 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61119 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61120 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61121 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61122 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61123 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61124 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61125 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61126 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61127 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61128 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61129 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61130 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61131 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__61115 = (bindings[idx]);
return (fexpr__61115.cljs$core$IFn$_invoke$arity$16 ? fexpr__61115.cljs$core$IFn$_invoke$arity$16(G__61116,G__61117,G__61118,G__61119,G__61120,G__61121,G__61122,G__61123,G__61124,G__61125,G__61126,G__61127,G__61128,G__61129,G__61130,G__61131) : fexpr__61115.call(null,G__61116,G__61117,G__61118,G__61119,G__61120,G__61121,G__61122,G__61123,G__61124,G__61125,G__61126,G__61127,G__61128,G__61129,G__61130,G__61131));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__61135 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61136 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61137 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61138 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61139 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61140 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61141 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61142 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61143 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61144 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61145 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61146 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61147 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61148 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61149 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61150 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61151 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__61134 = (bindings[idx]);
return (fexpr__61134.cljs$core$IFn$_invoke$arity$17 ? fexpr__61134.cljs$core$IFn$_invoke$arity$17(G__61135,G__61136,G__61137,G__61138,G__61139,G__61140,G__61141,G__61142,G__61143,G__61144,G__61145,G__61146,G__61147,G__61148,G__61149,G__61150,G__61151) : fexpr__61134.call(null,G__61135,G__61136,G__61137,G__61138,G__61139,G__61140,G__61141,G__61142,G__61143,G__61144,G__61145,G__61146,G__61147,G__61148,G__61149,G__61150,G__61151));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__61155 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61156 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61157 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61158 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61159 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61160 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61161 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61162 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61163 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61164 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61165 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61166 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61167 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61168 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61169 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61170 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61171 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61172 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__61154 = (bindings[idx]);
return (fexpr__61154.cljs$core$IFn$_invoke$arity$18 ? fexpr__61154.cljs$core$IFn$_invoke$arity$18(G__61155,G__61156,G__61157,G__61158,G__61159,G__61160,G__61161,G__61162,G__61163,G__61164,G__61165,G__61166,G__61167,G__61168,G__61169,G__61170,G__61171,G__61172) : fexpr__61154.call(null,G__61155,G__61156,G__61157,G__61158,G__61159,G__61160,G__61161,G__61162,G__61163,G__61164,G__61165,G__61166,G__61167,G__61168,G__61169,G__61170,G__61171,G__61172));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__61176 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61177 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61178 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61179 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61180 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61181 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61182 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61183 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61184 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61185 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61186 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61187 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61188 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61189 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61190 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61191 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61192 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61193 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__61194 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__61175 = (bindings[idx]);
return (fexpr__61175.cljs$core$IFn$_invoke$arity$19 ? fexpr__61175.cljs$core$IFn$_invoke$arity$19(G__61176,G__61177,G__61178,G__61179,G__61180,G__61181,G__61182,G__61183,G__61184,G__61185,G__61186,G__61187,G__61188,G__61189,G__61190,G__61191,G__61192,G__61193,G__61194) : fexpr__61175.call(null,G__61176,G__61177,G__61178,G__61179,G__61180,G__61181,G__61182,G__61183,G__61184,G__61185,G__61186,G__61187,G__61188,G__61189,G__61190,G__61191,G__61192,G__61193,G__61194));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(bindings[idx]),analyzed_children);
});

}
})(),null,expr,stack);
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var G__61198 = cljs.core.count(analyzed_children);
switch (G__61198) {
case (0):
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__61199 = ctx;
var G__61200 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__61199,G__61200) : f.call(null,G__61199,G__61200));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__61202 = ctx;
var G__61203 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61204 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__61202,G__61203,G__61204) : f.call(null,G__61202,G__61203,G__61204));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__61205 = ctx;
var G__61206 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61207 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61208 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__61205,G__61206,G__61207,G__61208) : f.call(null,G__61205,G__61206,G__61207,G__61208));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__61209 = ctx;
var G__61210 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61211 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61212 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61213 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__61209,G__61210,G__61211,G__61212,G__61213) : f.call(null,G__61209,G__61210,G__61211,G__61212,G__61213));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__61214 = ctx;
var G__61215 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61216 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61217 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61218 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61219 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__61214,G__61215,G__61216,G__61217,G__61218,G__61219) : f.call(null,G__61214,G__61215,G__61216,G__61217,G__61218,G__61219));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__61220 = ctx;
var G__61221 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61222 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61223 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61224 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61225 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61226 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__61220,G__61221,G__61222,G__61223,G__61224,G__61225,G__61226) : f.call(null,G__61220,G__61221,G__61222,G__61223,G__61224,G__61225,G__61226));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__61229 = ctx;
var G__61230 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61231 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61232 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61233 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61234 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61235 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61236 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__61229,G__61230,G__61231,G__61232,G__61233,G__61234,G__61235,G__61236) : f.call(null,G__61229,G__61230,G__61231,G__61232,G__61233,G__61234,G__61235,G__61236));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__61237 = ctx;
var G__61238 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61239 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61240 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61241 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61242 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61243 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61244 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61245 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__61237,G__61238,G__61239,G__61240,G__61241,G__61242,G__61243,G__61244,G__61245) : f.call(null,G__61237,G__61238,G__61239,G__61240,G__61241,G__61242,G__61243,G__61244,G__61245));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__61246 = ctx;
var G__61247 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61248 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61249 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61250 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61251 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61252 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61253 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61254 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61255 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__61246,G__61247,G__61248,G__61249,G__61250,G__61251,G__61252,G__61253,G__61254,G__61255) : f.call(null,G__61246,G__61247,G__61248,G__61249,G__61250,G__61251,G__61252,G__61253,G__61254,G__61255));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__61258 = ctx;
var G__61259 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61260 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61261 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61262 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61263 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61264 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61265 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61266 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61267 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61268 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__61258,G__61259,G__61260,G__61261,G__61262,G__61263,G__61264,G__61265,G__61266,G__61267,G__61268) : f.call(null,G__61258,G__61259,G__61260,G__61261,G__61262,G__61263,G__61264,G__61265,G__61266,G__61267,G__61268));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__61275 = ctx;
var G__61276 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61277 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61278 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61279 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61280 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61281 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61282 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61283 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61284 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61285 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61286 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__61275,G__61276,G__61277,G__61278,G__61279,G__61280,G__61281,G__61282,G__61283,G__61284,G__61285,G__61286) : f.call(null,G__61275,G__61276,G__61277,G__61278,G__61279,G__61280,G__61281,G__61282,G__61283,G__61284,G__61285,G__61286));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__61287 = ctx;
var G__61288 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61289 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61290 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61291 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61292 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61293 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61294 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61295 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61296 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61297 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61298 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61299 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__61287,G__61288,G__61289,G__61290,G__61291,G__61292,G__61293,G__61294,G__61295,G__61296,G__61297,G__61298,G__61299) : f.call(null,G__61287,G__61288,G__61289,G__61290,G__61291,G__61292,G__61293,G__61294,G__61295,G__61296,G__61297,G__61298,G__61299));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__61300 = ctx;
var G__61301 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61302 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61303 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61304 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61305 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61306 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61307 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61308 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61309 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61310 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61311 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61312 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61313 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__61300,G__61301,G__61302,G__61303,G__61304,G__61305,G__61306,G__61307,G__61308,G__61309,G__61310,G__61311,G__61312,G__61313) : f.call(null,G__61300,G__61301,G__61302,G__61303,G__61304,G__61305,G__61306,G__61307,G__61308,G__61309,G__61310,G__61311,G__61312,G__61313));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__61317 = ctx;
var G__61318 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61319 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61320 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61321 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61322 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61323 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61324 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61325 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61326 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61327 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61328 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61329 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61330 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61331 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__61317,G__61318,G__61319,G__61320,G__61321,G__61322,G__61323,G__61324,G__61325,G__61326,G__61327,G__61328,G__61329,G__61330,G__61331) : f.call(null,G__61317,G__61318,G__61319,G__61320,G__61321,G__61322,G__61323,G__61324,G__61325,G__61326,G__61327,G__61328,G__61329,G__61330,G__61331));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__61333 = ctx;
var G__61334 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61335 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61336 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61337 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61338 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61339 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61340 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61341 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61342 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61343 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61344 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61345 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61346 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61347 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61348 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__61333,G__61334,G__61335,G__61336,G__61337,G__61338,G__61339,G__61340,G__61341,G__61342,G__61343,G__61344,G__61345,G__61346,G__61347,G__61348) : f.call(null,G__61333,G__61334,G__61335,G__61336,G__61337,G__61338,G__61339,G__61340,G__61341,G__61342,G__61343,G__61344,G__61345,G__61346,G__61347,G__61348));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__61350 = ctx;
var G__61351 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61352 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61353 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61354 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61355 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61356 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61357 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61358 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61359 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61360 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61361 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61362 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61363 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61364 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61365 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61366 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__61350,G__61351,G__61352,G__61353,G__61354,G__61355,G__61356,G__61357,G__61358,G__61359,G__61360,G__61361,G__61362,G__61363,G__61364,G__61365,G__61366) : f.call(null,G__61350,G__61351,G__61352,G__61353,G__61354,G__61355,G__61356,G__61357,G__61358,G__61359,G__61360,G__61361,G__61362,G__61363,G__61364,G__61365,G__61366));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__61368 = ctx;
var G__61369 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61370 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61371 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61372 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61373 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61374 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61375 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61376 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61377 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61378 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61379 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61380 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61381 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61382 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61383 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61384 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61385 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__61368,G__61369,G__61370,G__61371,G__61372,G__61373,G__61374,G__61375,G__61376,G__61377,G__61378,G__61379,G__61380,G__61381,G__61382,G__61383,G__61384,G__61385) : f.call(null,G__61368,G__61369,G__61370,G__61371,G__61372,G__61373,G__61374,G__61375,G__61376,G__61377,G__61378,G__61379,G__61380,G__61381,G__61382,G__61383,G__61384,G__61385));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__61391 = ctx;
var G__61392 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61393 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61394 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61395 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61396 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61397 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61398 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61399 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61400 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61401 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61402 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61403 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61404 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61405 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61406 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61407 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61408 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61409 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__61391,G__61392,G__61393,G__61394,G__61395,G__61396,G__61397,G__61398,G__61399,G__61400,G__61401,G__61402,G__61403,G__61404,G__61405,G__61406,G__61407,G__61408,G__61409) : f.call(null,G__61391,G__61392,G__61393,G__61394,G__61395,G__61396,G__61397,G__61398,G__61399,G__61400,G__61401,G__61402,G__61403,G__61404,G__61405,G__61406,G__61407,G__61408,G__61409));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__61410 = ctx;
var G__61411 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61412 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61413 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61414 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61415 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61416 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61417 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61418 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61419 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61420 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61421 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61422 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61423 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61424 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61425 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61426 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61427 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61428 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__61429 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__61410,G__61411,G__61412,G__61413,G__61414,G__61415,G__61416,G__61417,G__61418,G__61419,G__61420,G__61421,G__61422,G__61423,G__61424,G__61425,G__61426,G__61427,G__61428,G__61429) : f.call(null,G__61410,G__61411,G__61412,G__61413,G__61414,G__61415,G__61416,G__61417,G__61418,G__61419,G__61420,G__61421,G__61422,G__61423,G__61424,G__61425,G__61426,G__61427,G__61428,G__61429));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
});

}
})(),expr);
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__61432 = cljs.core.count(analyzed_children);
switch (G__61432) {
case (0):
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var fexpr__61433 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61433.cljs$core$IFn$_invoke$arity$0 ? fexpr__61433.cljs$core$IFn$_invoke$arity$0() : fexpr__61433.call(null));
});
} else {
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61436 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__61435 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61435.cljs$core$IFn$_invoke$arity$1 ? fexpr__61435.cljs$core$IFn$_invoke$arity$1(G__61436) : fexpr__61435.call(null,G__61436));
});
} else {
return (function (ctx,bindings){
var G__61437 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61437) : f.call(null,G__61437));
});
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61440 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61441 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__61439 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61439.cljs$core$IFn$_invoke$arity$2 ? fexpr__61439.cljs$core$IFn$_invoke$arity$2(G__61440,G__61441) : fexpr__61439.call(null,G__61440,G__61441));
});
} else {
return (function (ctx,bindings){
var G__61442 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61443 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__61442,G__61443) : f.call(null,G__61442,G__61443));
});
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61446 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61447 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61448 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__61445 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61445.cljs$core$IFn$_invoke$arity$3 ? fexpr__61445.cljs$core$IFn$_invoke$arity$3(G__61446,G__61447,G__61448) : fexpr__61445.call(null,G__61446,G__61447,G__61448));
});
} else {
return (function (ctx,bindings){
var G__61449 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61450 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61451 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__61449,G__61450,G__61451) : f.call(null,G__61449,G__61450,G__61451));
});
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61454 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61455 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61456 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61457 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__61453 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61453.cljs$core$IFn$_invoke$arity$4 ? fexpr__61453.cljs$core$IFn$_invoke$arity$4(G__61454,G__61455,G__61456,G__61457) : fexpr__61453.call(null,G__61454,G__61455,G__61456,G__61457));
});
} else {
return (function (ctx,bindings){
var G__61458 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61459 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61460 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61461 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__61458,G__61459,G__61460,G__61461) : f.call(null,G__61458,G__61459,G__61460,G__61461));
});
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61464 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61465 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61466 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61467 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61468 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__61463 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61463.cljs$core$IFn$_invoke$arity$5 ? fexpr__61463.cljs$core$IFn$_invoke$arity$5(G__61464,G__61465,G__61466,G__61467,G__61468) : fexpr__61463.call(null,G__61464,G__61465,G__61466,G__61467,G__61468));
});
} else {
return (function (ctx,bindings){
var G__61469 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61470 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61471 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61472 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61473 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__61469,G__61470,G__61471,G__61472,G__61473) : f.call(null,G__61469,G__61470,G__61471,G__61472,G__61473));
});
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61476 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61477 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61478 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61479 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61480 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61481 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__61475 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61475.cljs$core$IFn$_invoke$arity$6 ? fexpr__61475.cljs$core$IFn$_invoke$arity$6(G__61476,G__61477,G__61478,G__61479,G__61480,G__61481) : fexpr__61475.call(null,G__61476,G__61477,G__61478,G__61479,G__61480,G__61481));
});
} else {
return (function (ctx,bindings){
var G__61483 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61484 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61485 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61486 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61487 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61488 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__61483,G__61484,G__61485,G__61486,G__61487,G__61488) : f.call(null,G__61483,G__61484,G__61485,G__61486,G__61487,G__61488));
});
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61490 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61491 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61492 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61493 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61494 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61495 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61496 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__61489 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61489.cljs$core$IFn$_invoke$arity$7 ? fexpr__61489.cljs$core$IFn$_invoke$arity$7(G__61490,G__61491,G__61492,G__61493,G__61494,G__61495,G__61496) : fexpr__61489.call(null,G__61490,G__61491,G__61492,G__61493,G__61494,G__61495,G__61496));
});
} else {
return (function (ctx,bindings){
var G__61497 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61498 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61499 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61500 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61501 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61502 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61503 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__61497,G__61498,G__61499,G__61500,G__61501,G__61502,G__61503) : f.call(null,G__61497,G__61498,G__61499,G__61500,G__61501,G__61502,G__61503));
});
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61506 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61507 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61508 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61509 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61510 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61511 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61512 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61513 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__61505 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61505.cljs$core$IFn$_invoke$arity$8 ? fexpr__61505.cljs$core$IFn$_invoke$arity$8(G__61506,G__61507,G__61508,G__61509,G__61510,G__61511,G__61512,G__61513) : fexpr__61505.call(null,G__61506,G__61507,G__61508,G__61509,G__61510,G__61511,G__61512,G__61513));
});
} else {
return (function (ctx,bindings){
var G__61515 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61516 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61517 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61518 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61519 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61520 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61521 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61522 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__61515,G__61516,G__61517,G__61518,G__61519,G__61520,G__61521,G__61522) : f.call(null,G__61515,G__61516,G__61517,G__61518,G__61519,G__61520,G__61521,G__61522));
});
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61525 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61526 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61527 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61528 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61529 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61530 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61531 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61532 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61533 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__61524 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61524.cljs$core$IFn$_invoke$arity$9 ? fexpr__61524.cljs$core$IFn$_invoke$arity$9(G__61525,G__61526,G__61527,G__61528,G__61529,G__61530,G__61531,G__61532,G__61533) : fexpr__61524.call(null,G__61525,G__61526,G__61527,G__61528,G__61529,G__61530,G__61531,G__61532,G__61533));
});
} else {
return (function (ctx,bindings){
var G__61535 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61536 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61537 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61538 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61539 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61540 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61541 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61542 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61543 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__61535,G__61536,G__61537,G__61538,G__61539,G__61540,G__61541,G__61542,G__61543) : f.call(null,G__61535,G__61536,G__61537,G__61538,G__61539,G__61540,G__61541,G__61542,G__61543));
});
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61546 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61547 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61548 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61549 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61550 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61551 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61552 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61553 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61554 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61555 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__61545 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61545.cljs$core$IFn$_invoke$arity$10 ? fexpr__61545.cljs$core$IFn$_invoke$arity$10(G__61546,G__61547,G__61548,G__61549,G__61550,G__61551,G__61552,G__61553,G__61554,G__61555) : fexpr__61545.call(null,G__61546,G__61547,G__61548,G__61549,G__61550,G__61551,G__61552,G__61553,G__61554,G__61555));
});
} else {
return (function (ctx,bindings){
var G__61557 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61558 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61559 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61560 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61561 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61562 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61563 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61564 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61565 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61566 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__61557,G__61558,G__61559,G__61560,G__61561,G__61562,G__61563,G__61564,G__61565,G__61566) : f.call(null,G__61557,G__61558,G__61559,G__61560,G__61561,G__61562,G__61563,G__61564,G__61565,G__61566));
});
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61569 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61570 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61571 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61572 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61573 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61574 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61575 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61576 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61577 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61578 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61579 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__61568 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61568.cljs$core$IFn$_invoke$arity$11 ? fexpr__61568.cljs$core$IFn$_invoke$arity$11(G__61569,G__61570,G__61571,G__61572,G__61573,G__61574,G__61575,G__61576,G__61577,G__61578,G__61579) : fexpr__61568.call(null,G__61569,G__61570,G__61571,G__61572,G__61573,G__61574,G__61575,G__61576,G__61577,G__61578,G__61579));
});
} else {
return (function (ctx,bindings){
var G__61581 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61582 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61583 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61584 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61585 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61586 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61587 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61588 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61589 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61590 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61591 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__61581,G__61582,G__61583,G__61584,G__61585,G__61586,G__61587,G__61588,G__61589,G__61590,G__61591) : f.call(null,G__61581,G__61582,G__61583,G__61584,G__61585,G__61586,G__61587,G__61588,G__61589,G__61590,G__61591));
});
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61595 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61596 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61597 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61598 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61599 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61600 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61601 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61602 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61603 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61604 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61605 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61606 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__61594 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61594.cljs$core$IFn$_invoke$arity$12 ? fexpr__61594.cljs$core$IFn$_invoke$arity$12(G__61595,G__61596,G__61597,G__61598,G__61599,G__61600,G__61601,G__61602,G__61603,G__61604,G__61605,G__61606) : fexpr__61594.call(null,G__61595,G__61596,G__61597,G__61598,G__61599,G__61600,G__61601,G__61602,G__61603,G__61604,G__61605,G__61606));
});
} else {
return (function (ctx,bindings){
var G__61608 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61609 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61610 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61611 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61612 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61613 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61614 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61615 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61616 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61617 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61618 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61619 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__61608,G__61609,G__61610,G__61611,G__61612,G__61613,G__61614,G__61615,G__61616,G__61617,G__61618,G__61619) : f.call(null,G__61608,G__61609,G__61610,G__61611,G__61612,G__61613,G__61614,G__61615,G__61616,G__61617,G__61618,G__61619));
});
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61622 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61623 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61624 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61625 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61626 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61627 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61628 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61629 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61630 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61631 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61632 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61633 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61634 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__61621 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61621.cljs$core$IFn$_invoke$arity$13 ? fexpr__61621.cljs$core$IFn$_invoke$arity$13(G__61622,G__61623,G__61624,G__61625,G__61626,G__61627,G__61628,G__61629,G__61630,G__61631,G__61632,G__61633,G__61634) : fexpr__61621.call(null,G__61622,G__61623,G__61624,G__61625,G__61626,G__61627,G__61628,G__61629,G__61630,G__61631,G__61632,G__61633,G__61634));
});
} else {
return (function (ctx,bindings){
var G__61636 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61637 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61638 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61639 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61640 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61641 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61642 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61643 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61644 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61645 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61646 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61647 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61648 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__61636,G__61637,G__61638,G__61639,G__61640,G__61641,G__61642,G__61643,G__61644,G__61645,G__61646,G__61647,G__61648) : f.call(null,G__61636,G__61637,G__61638,G__61639,G__61640,G__61641,G__61642,G__61643,G__61644,G__61645,G__61646,G__61647,G__61648));
});
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61652 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61653 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61654 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61655 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61656 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61657 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61658 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61659 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61660 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61661 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61662 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61663 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61664 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61665 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__61651 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61651.cljs$core$IFn$_invoke$arity$14 ? fexpr__61651.cljs$core$IFn$_invoke$arity$14(G__61652,G__61653,G__61654,G__61655,G__61656,G__61657,G__61658,G__61659,G__61660,G__61661,G__61662,G__61663,G__61664,G__61665) : fexpr__61651.call(null,G__61652,G__61653,G__61654,G__61655,G__61656,G__61657,G__61658,G__61659,G__61660,G__61661,G__61662,G__61663,G__61664,G__61665));
});
} else {
return (function (ctx,bindings){
var G__61666 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61667 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61668 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61669 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61670 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61671 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61672 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61673 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61674 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61675 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61676 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61677 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61678 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61679 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__61666,G__61667,G__61668,G__61669,G__61670,G__61671,G__61672,G__61673,G__61674,G__61675,G__61676,G__61677,G__61678,G__61679) : f.call(null,G__61666,G__61667,G__61668,G__61669,G__61670,G__61671,G__61672,G__61673,G__61674,G__61675,G__61676,G__61677,G__61678,G__61679));
});
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61683 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61684 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61685 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61686 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61687 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61688 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61689 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61690 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61691 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61692 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61693 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61694 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61695 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61696 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61697 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__61682 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61682.cljs$core$IFn$_invoke$arity$15 ? fexpr__61682.cljs$core$IFn$_invoke$arity$15(G__61683,G__61684,G__61685,G__61686,G__61687,G__61688,G__61689,G__61690,G__61691,G__61692,G__61693,G__61694,G__61695,G__61696,G__61697) : fexpr__61682.call(null,G__61683,G__61684,G__61685,G__61686,G__61687,G__61688,G__61689,G__61690,G__61691,G__61692,G__61693,G__61694,G__61695,G__61696,G__61697));
});
} else {
return (function (ctx,bindings){
var G__61699 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61700 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61701 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61702 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61703 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61704 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61705 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61706 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61707 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61708 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61709 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61710 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61711 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61712 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61713 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__61699,G__61700,G__61701,G__61702,G__61703,G__61704,G__61705,G__61706,G__61707,G__61708,G__61709,G__61710,G__61711,G__61712,G__61713) : f.call(null,G__61699,G__61700,G__61701,G__61702,G__61703,G__61704,G__61705,G__61706,G__61707,G__61708,G__61709,G__61710,G__61711,G__61712,G__61713));
});
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61717 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61718 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61719 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61720 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61721 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61722 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61723 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61724 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61725 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61726 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61727 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61728 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61729 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61730 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61731 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61732 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__61716 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61716.cljs$core$IFn$_invoke$arity$16 ? fexpr__61716.cljs$core$IFn$_invoke$arity$16(G__61717,G__61718,G__61719,G__61720,G__61721,G__61722,G__61723,G__61724,G__61725,G__61726,G__61727,G__61728,G__61729,G__61730,G__61731,G__61732) : fexpr__61716.call(null,G__61717,G__61718,G__61719,G__61720,G__61721,G__61722,G__61723,G__61724,G__61725,G__61726,G__61727,G__61728,G__61729,G__61730,G__61731,G__61732));
});
} else {
return (function (ctx,bindings){
var G__61734 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61735 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61736 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61737 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61738 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61739 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61740 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61741 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61742 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61743 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61744 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61745 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61746 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61747 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61748 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61749 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__61734,G__61735,G__61736,G__61737,G__61738,G__61739,G__61740,G__61741,G__61742,G__61743,G__61744,G__61745,G__61746,G__61747,G__61748,G__61749) : f.call(null,G__61734,G__61735,G__61736,G__61737,G__61738,G__61739,G__61740,G__61741,G__61742,G__61743,G__61744,G__61745,G__61746,G__61747,G__61748,G__61749));
});
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61752 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61753 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61754 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61755 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61756 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61757 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61758 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61759 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61760 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61761 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61762 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61763 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61764 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61765 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61766 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61767 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61768 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__61751 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61751.cljs$core$IFn$_invoke$arity$17 ? fexpr__61751.cljs$core$IFn$_invoke$arity$17(G__61752,G__61753,G__61754,G__61755,G__61756,G__61757,G__61758,G__61759,G__61760,G__61761,G__61762,G__61763,G__61764,G__61765,G__61766,G__61767,G__61768) : fexpr__61751.call(null,G__61752,G__61753,G__61754,G__61755,G__61756,G__61757,G__61758,G__61759,G__61760,G__61761,G__61762,G__61763,G__61764,G__61765,G__61766,G__61767,G__61768));
});
} else {
return (function (ctx,bindings){
var G__61770 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61771 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61772 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61773 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61774 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61775 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61776 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61777 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61778 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61779 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61780 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61781 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61782 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61783 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61784 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61785 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61786 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__61770,G__61771,G__61772,G__61773,G__61774,G__61775,G__61776,G__61777,G__61778,G__61779,G__61780,G__61781,G__61782,G__61783,G__61784,G__61785,G__61786) : f.call(null,G__61770,G__61771,G__61772,G__61773,G__61774,G__61775,G__61776,G__61777,G__61778,G__61779,G__61780,G__61781,G__61782,G__61783,G__61784,G__61785,G__61786));
});
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61790 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61791 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61792 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61793 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61794 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61795 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61796 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61797 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61798 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61799 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61800 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61801 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61802 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61803 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61804 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61805 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61806 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61807 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__61789 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61789.cljs$core$IFn$_invoke$arity$18 ? fexpr__61789.cljs$core$IFn$_invoke$arity$18(G__61790,G__61791,G__61792,G__61793,G__61794,G__61795,G__61796,G__61797,G__61798,G__61799,G__61800,G__61801,G__61802,G__61803,G__61804,G__61805,G__61806,G__61807) : fexpr__61789.call(null,G__61790,G__61791,G__61792,G__61793,G__61794,G__61795,G__61796,G__61797,G__61798,G__61799,G__61800,G__61801,G__61802,G__61803,G__61804,G__61805,G__61806,G__61807));
});
} else {
return (function (ctx,bindings){
var G__61809 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61810 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61811 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61812 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61813 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61814 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61815 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61816 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61817 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61818 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61819 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61820 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61821 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61822 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61823 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61824 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61825 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61826 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__61809,G__61810,G__61811,G__61812,G__61813,G__61814,G__61815,G__61816,G__61817,G__61818,G__61819,G__61820,G__61821,G__61822,G__61823,G__61824,G__61825,G__61826) : f.call(null,G__61809,G__61810,G__61811,G__61812,G__61813,G__61814,G__61815,G__61816,G__61817,G__61818,G__61819,G__61820,G__61821,G__61822,G__61823,G__61824,G__61825,G__61826));
});
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__61830 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61831 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61832 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61833 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61834 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61835 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61836 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61837 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61838 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61839 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61840 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61841 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61842 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61843 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61844 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61845 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61846 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61847 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__61848 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__61829 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__61829.cljs$core$IFn$_invoke$arity$19 ? fexpr__61829.cljs$core$IFn$_invoke$arity$19(G__61830,G__61831,G__61832,G__61833,G__61834,G__61835,G__61836,G__61837,G__61838,G__61839,G__61840,G__61841,G__61842,G__61843,G__61844,G__61845,G__61846,G__61847,G__61848) : fexpr__61829.call(null,G__61830,G__61831,G__61832,G__61833,G__61834,G__61835,G__61836,G__61837,G__61838,G__61839,G__61840,G__61841,G__61842,G__61843,G__61844,G__61845,G__61846,G__61847,G__61848));
});
} else {
return (function (ctx,bindings){
var G__61850 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__61851 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__61852 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__61853 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__61854 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__61855 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__61856 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__61857 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__61858 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__61859 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__61860 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__61861 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__61862 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__61863 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__61864 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__61865 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__61866 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__61867 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__61868 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__61850,G__61851,G__61852,G__61853,G__61854,G__61855,G__61856,G__61857,G__61858,G__61859,G__61860,G__61861,G__61862,G__61863,G__61864,G__61865,G__61866,G__61867,G__61868) : f.call(null,G__61850,G__61851,G__61852,G__61853,G__61854,G__61855,G__61856,G__61857,G__61858,G__61859,G__61860,G__61861,G__61862,G__61863,G__61864,G__61865,G__61866,G__61867,G__61868));
});
}

break;
default:
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f)),analyzed_children);
});
} else {
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
});
}

}
})(),null,expr,stack);
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_ctx__$1,_bindings){
return snd;
}),expr);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__61872 = ctx;
var G__61873 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__61872,G__61873) : sci.impl.analyzer.analyze.call(null,G__61872,G__61873));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var ns_sym = sci.impl.evaluator.eval(ctx__$1,bindings,ns_expr);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),expr);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__4251__auto__ = special_sym;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__4251__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__4253__auto__ = special_sym;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__4251__auto__ = f_meta;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = f_meta;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4251__auto__;
}
})())){
var vec__61876 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61876,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61876,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = idx;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),expr);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(eval_QMARK_);
if(and__4251__auto__){
var and__4251__auto____$1 = (f__$1 instanceof cljs.core.Symbol);
if(and__4251__auto____$1){
var or__4253__auto__ = special_sym;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var G__61879 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__61879)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__61879)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__61879)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__61879)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__61879)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__61879)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__61879)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__61879)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__61879)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__61879)){
return sci.impl.analyzer.analyze_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__61879)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__61879)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__61879)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__61879)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__61879)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__61879)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__61879)){
return sci.impl.analyzer.analyze_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__61879)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__61879)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__61879)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__61879)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__61879)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__61879)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__61879)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__61879)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__61879)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__61879)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61879)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__4251__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__4251__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,v__$1,top_level_QMARK_) : sci.impl.analyzer.analyze.call(null,ctx,v__$1,top_level_QMARK_));
})()
));
return expanded;
} else {
var temp__5751__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$2 = temp__5751__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5751__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5751__auto____$1)){
var op = temp__5751__auto____$1;
var G__61889 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__61889)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__61889)){
return sci.impl.analyzer.return_binding_call(ctx,expr,new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)),f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
var self_ref_QMARK_ = new cljs.core.Keyword(null,"self-ref?","self-ref?",412808630).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4251__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1(f__$1) : self_ref_QMARK_.call(null,f__$1));
} else {
return and__4251__auto__;
}
})())){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.vars.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}catch (e61882){if((e61882 instanceof Error)){
var e = e61882;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(null,null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0))));
} else {
throw e61882;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__61892 = ccount;
switch (G__61892) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.evaluator.eval(ctx__$1,bindings,arg));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.evaluator.eval(ctx__$1,bindings,arg0),sci.impl.evaluator.eval(ctx__$1,bindings,arg1));
}),expr);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
var f__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,f__$1);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,the_map);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx,children);
if((cljs.core.count(analyzed_children) <= (16))){
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.array_map,analyzed_children,null,null);
} else {
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.hash_map,analyzed_children,null,null);
}
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (((cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)))));
var analyzed_map = ((constant_map_QMARK_)?expr:((cljs.core.not(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ctx__$1)))?sci.impl.analyzer.return_map(ctx__$1,expr):cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx__$1,ks),sci.impl.analyzer.analyze_children(ctx__$1,vs))
));
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__61894 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__61895 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__61894,G__61895) : sci.impl.analyzer.analyze.call(null,G__61894,G__61895));
})():null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
var ret = (cljs.core.truth_(analyzed_meta__$1)?(((analyzed_map instanceof sci.impl.types.EvalFn))?sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
var coll = sci.impl.evaluator.eval(ctx__$2,bindings,analyzed_map);
var md = sci.impl.evaluator.handle_meta(ctx__$2,bindings,analyzed_meta__$1);
return cljs.core.with_meta(coll,md);
}),expr):cljs.core.with_meta(analyzed_map,analyzed_meta__$1)):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,_f1,f2,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var must_eval = (((!(constant_coll_QMARK_))) || ((!((m === analyzed_meta)))));
var analyzed_coll = (((!(must_eval)))?expr:(cljs.core.truth_(m)?(function (){var ef = sci.impl.analyzer.return_call(ctx__$1,expr,f2,sci.impl.analyzer.analyze_children(ctx__$1,expr),null,null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
var coll = sci.impl.evaluator.eval(ctx__$2,bindings,ef);
var md = sci.impl.evaluator.eval(ctx__$2,bindings,analyzed_meta);
return cljs.core.with_meta(coll,md);
}),expr);
})():sci.impl.analyzer.return_call(ctx__$1,expr,f2,sci.impl.analyzer.analyze_children(ctx__$1,expr),null,null)));
return analyzed_coll;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61902_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__61902_SHARP_);
}),vs__$1)));
}),js_val);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var arr = [];
var seq__61906_62719 = cljs.core.seq(vs);
var chunk__61907_62720 = null;
var count__61908_62721 = (0);
var i__61909_62722 = (0);
while(true){
if((i__61909_62722 < count__61908_62721)){
var x_62723 = chunk__61907_62720.cljs$core$IIndexed$_nth$arity$2(null,i__61909_62722);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_62723));


var G__62724 = seq__61906_62719;
var G__62725 = chunk__61907_62720;
var G__62726 = count__61908_62721;
var G__62727 = (i__61909_62722 + (1));
seq__61906_62719 = G__62724;
chunk__61907_62720 = G__62725;
count__61908_62721 = G__62726;
i__61909_62722 = G__62727;
continue;
} else {
var temp__5753__auto___62728 = cljs.core.seq(seq__61906_62719);
if(temp__5753__auto___62728){
var seq__61906_62729__$1 = temp__5753__auto___62728;
if(cljs.core.chunked_seq_QMARK_(seq__61906_62729__$1)){
var c__4679__auto___62730 = cljs.core.chunk_first(seq__61906_62729__$1);
var G__62731 = cljs.core.chunk_rest(seq__61906_62729__$1);
var G__62732 = c__4679__auto___62730;
var G__62733 = cljs.core.count(c__4679__auto___62730);
var G__62734 = (0);
seq__61906_62719 = G__62731;
chunk__61907_62720 = G__62732;
count__61908_62721 = G__62733;
i__61909_62722 = G__62734;
continue;
} else {
var x_62735 = cljs.core.first(seq__61906_62729__$1);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_62735));


var G__62736 = cljs.core.next(seq__61906_62729__$1);
var G__62737 = null;
var G__62738 = (0);
var G__62739 = (0);
seq__61906_62719 = G__62736;
chunk__61907_62720 = G__62737;
count__61908_62721 = G__62738;
i__61909_62722 = G__62739;
continue;
}
} else {
}
}
break;
}

return arr;
}),js_val);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__61923 = arguments.length;
switch (G__61923) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return expr;
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
