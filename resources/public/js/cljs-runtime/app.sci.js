goog.provide('app.sci');
var ret__4913__auto___60541 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
app.sci.time = (function app$sci$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"start__60538__auto__","start__60538__auto__",1486562683,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__60539__auto__","ret__60539__auto__",1258789356,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"start__60538__auto__","start__60538__auto__",1486562683,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(6),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__60539__auto__","ret__60539__auto__",1258789356,null),null,(1),null))], 0))));
});
(app.sci.time.cljs$lang$macro = true);

app.sci.clj_ns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),null);
app.sci.namespaces = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"time","time",-1268547887,null),(function (){var ns__54833__auto__ = app.sci.clj_ns;
var var__54834__auto__ = new cljs.core.Var(function(){return app.sci.time;},new cljs.core.Symbol("app.sci","time","app.sci/time",-439966691,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.sci","app.sci",783257837,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),"app/sci.cljs",28,1,7,true,7,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null)),"Evaluates expr and prints the time it took. Returns the value of expr.",(cljs.core.truth_(app.sci.time)?app.sci.time.cljs$lang$test:null)]));
var val__54835__auto__ = cljs.core.deref(var__54834__auto__);
var m__54836__auto__ = cljs.core.meta(var__54834__auto__);
var ns_name__54837__auto__ = ns__54833__auto__.sci$impl$vars$HasName$getName$arity$1(null);
var name__54838__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__54836__auto__);
var name_sym__54839__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__54837__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__54838__auto__));
var new_m__54840__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__54833__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__54838__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__54836__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__54836__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__54836__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__54838__auto__,val__54835__auto__,new_m__54840__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__54836__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__54838__auto__,val__54835__auto__,new_m__54840__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__54838__auto__,val__54835__auto__,new_m__54840__auto__);

}
}
})(),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),(function (){var ns__54833__auto__ = app.sci.clj_ns;
var var__54834__auto__ = new cljs.core.Var(function(){return cljs.core.system_time;},new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"system-time","system-time",1690633727,null),"cljs/core.cljs",(18),(1),(399),(399),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns highest resolution time offered by host in milliseconds.",(cljs.core.truth_(cljs.core.system_time)?cljs.core.system_time.cljs$lang$test:null)]));
var val__54835__auto__ = cljs.core.deref(var__54834__auto__);
var m__54836__auto__ = cljs.core.meta(var__54834__auto__);
var ns_name__54837__auto__ = ns__54833__auto__.sci$impl$vars$HasName$getName$arity$1(null);
var name__54838__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__54836__auto__);
var name_sym__54839__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__54837__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__54838__auto__));
var new_m__54840__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__54833__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__54838__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__54836__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__54836__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__54836__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__54838__auto__,val__54835__auto__,new_m__54840__auto__);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__54836__auto__))){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__54838__auto__,val__54835__auto__,new_m__54840__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__54838__auto__,val__54835__auto__,new_m__54840__auto__);

}
}
})()], null)], null);
if((typeof app !== 'undefined') && (typeof app.sci !== 'undefined') && (typeof app.sci.init_opts !== 'undefined')){
} else {
app.sci.init_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),window,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),app.sci.namespaces], null);
}
if((typeof app !== 'undefined') && (typeof app.sci !== 'undefined') && (typeof app.sci.context !== 'undefined')){
} else {
app.sci.context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(sci.core.init(app.sci.init_opts));
}
/**
 * Setup a custom `print-fn` for sci.
 */
app.sci.set_print_fn = (function app$sci$set_print_fn(f){
return sci.core.alter_var_root(sci.core.print_fn,cljs.core.constantly(f));
});
/**
 * Extend default sci context merging `opts`.
 */
app.sci.extend_ctx = (function app$sci$extend_ctx(opts){
return cljs.core.reset_BANG_(app.sci.context,sci.core.merge_opts(cljs.core.deref(app.sci.context),opts));
});
/**
 * Evaluate `source` using sci and return the output
 *   or raise throw an exception in case of error.
 */
app.sci.eval_string = (function app$sci$eval_string(source){
try{return sci.core.eval_string_STAR_(cljs.core.deref(app.sci.context),source);
}catch (e60540){var e = e60540;
app.error.error_handler(e,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(app.sci.context));

var sci_error_QMARK_ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)),new cljs.core.Keyword("sci","error","sci/error",-979082803));
throw ((sci_error_QMARK_)?(function (){var or__4253__auto__ = cljs.core.ex_cause(e);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return e;
}
})():e);
}});

//# sourceMappingURL=app.sci.js.map
