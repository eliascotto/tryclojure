goog.provide('sci.impl.interpreter');
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(form))){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__61956 = cljs.core.rest(exprs);
var G__61957 = (function (){var G__61941 = ctx;
var G__61942 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__61941,G__61942) : sci.impl.interpreter.eval_form.call(null,G__61941,G__61942));
})();
exprs = G__61956;
ret = G__61957;
continue;
} else {
return ret;
}
break;
}
} else {
var upper_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb], 0));
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx__$1,form,true);
var binding_array_size = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(binding_array_size);
var ret = (((analyzed instanceof sci.impl.types.EvalForm))?(function (){var G__61944 = ctx__$1;
var G__61945 = analyzed.sci$impl$types$IBox$getVal$arity$1(null);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__61944,G__61945) : sci.impl.interpreter.eval_form.call(null,G__61944,G__61945));
})():sci.impl.evaluator.eval(ctx__$1,bindings,analyzed));
return ret;
}
} else {
var upper_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb], 0));
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,form);
var binding_array_size = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(binding_array_size);
var ret = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr)){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__61962 = ret__$1;
ret = G__61962;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_string_STAR_,sci.impl.interpreter.eval_string_STAR_);
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__61952 = arguments.length;
switch (G__61952) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
