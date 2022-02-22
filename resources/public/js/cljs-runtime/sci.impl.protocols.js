goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49344 = arguments.length;
var i__4865__auto___49345 = (0);
while(true){
if((i__4865__auto___49345 < len__4864__auto___49344)){
args__4870__auto__.push((arguments[i__4865__auto___49345]));

var G__49346 = (i__4865__auto___49345 + (1));
i__4865__auto___49345 = G__49346;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__48341 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48341,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48341,(1),null);
var vec__48344 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48344,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48344,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48404){
var vec__48405 = p__48404;
var seq__48406 = cljs.core.seq(vec__48405);
var first__48407 = cljs.core.first(seq__48406);
var seq__48406__$1 = cljs.core.next(seq__48406);
var method_name = first__48407;
var ___$2 = seq__48406__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__48326__auto__","x__48326__auto__",1290020055,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__48327__auto__","args__48327__auto__",841546512,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__48328__auto__","methods__48328__auto__",-1762450247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__48326__auto__","x__48326__auto__",1290020055,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__48328__auto__","methods__48328__auto__",-1762450247,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__48326__auto__","x__48326__auto__",1290020055,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__48327__auto__","args__48327__auto__",841546512,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__48330__auto__","x__48330__auto__",-2078862797,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__48331__auto__","args__48331__auto__",1020654391,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__48332__auto__","meta__48332__auto__",-1032010639,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__48330__auto__","x__48330__auto__",-2078862797,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__48333__auto__","method__48333__auto__",-135373736,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__48332__auto__","meta__48332__auto__",-1032010639,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__48333__auto__","method__48333__auto__",-135373736,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__48333__auto__","method__48333__auto__",-135373736,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__48330__auto__","x__48330__auto__",-2078862797,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__48331__auto__","args__48331__auto__",1020654391,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__48330__auto__","x__48330__auto__",-2078862797,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq48334){
var G__48335 = cljs.core.first(seq48334);
var seq48334__$1 = cljs.core.next(seq48334);
var G__48336 = cljs.core.first(seq48334__$1);
var seq48334__$2 = cljs.core.next(seq48334__$1);
var G__48337 = cljs.core.first(seq48334__$2);
var seq48334__$3 = cljs.core.next(seq48334__$2);
var G__48338 = cljs.core.first(seq48334__$3);
var seq48334__$4 = cljs.core.next(seq48334__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48335,G__48336,G__48337,G__48338,seq48334__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49371 = arguments.length;
var i__4865__auto___49372 = (0);
while(true){
if((i__4865__auto___49372 < len__4864__auto___49371)){
args__4870__auto__.push((arguments[i__4865__auto___49372]));

var G__49373 = (i__4865__auto___49372 + (1));
i__4865__auto___49372 = G__49373;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__48507 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__48509 = null;
var count__48510 = (0);
var i__48511 = (0);
while(true){
if((i__48511 < count__48510)){
var vec__48741 = chunk__48509.cljs$core$IIndexed$_nth$arity$2(null,i__48511);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48741,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48741,(1),null);
var extend_via_metadata_49379 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_49380 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_49381 = sci.impl.vars.getName(proto_ns_49380);
var pns_str_49382 = (cljs.core.truth_(extend_via_metadata_49379)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_49381):null);
var seq__48745_49386 = cljs.core.seq(mmap);
var chunk__48746_49387 = null;
var count__48747_49388 = (0);
var i__48748_49389 = (0);
while(true){
if((i__48748_49389 < count__48747_49388)){
var vec__48782_49391 = chunk__48746_49387.cljs$core$IIndexed$_nth$arity$2(null,i__48748_49389);
var meth_name_49392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48782_49391,(0),null);
var f_49393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48782_49391,(1),null);
var meth_str_49394 = cljs.core.name(meth_name_49392);
var meth_sym_49395 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_49394);
var env_49396 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_49397 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_49396,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_49381,meth_sym_49395], null));
var multi_method_49398 = cljs.core.deref(multi_method_var_49397);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_49398,atype,(cljs.core.truth_(extend_via_metadata_49379)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_49382,meth_str_49394);
return ((function (seq__48745_49386,chunk__48746_49387,count__48747_49388,i__48748_49389,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49394,meth_sym_49395,env_49396,multi_method_var_49397,multi_method_49398,vec__48782_49391,meth_name_49392,f_49393,extend_via_metadata_49379,proto_ns_49380,pns_49381,pns_str_49382,vec__48741,proto,mmap){
return (function() { 
var G__49402__delegate = function (this$,args){
var temp__5751__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var temp__5751__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5751__auto____$1)){
var meth = temp__5751__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49393,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49393,this$,args);
}
};
var G__49402 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__49404__i = 0, G__49404__a = new Array(arguments.length -  1);
while (G__49404__i < G__49404__a.length) {G__49404__a[G__49404__i] = arguments[G__49404__i + 1]; ++G__49404__i;}
  args = new cljs.core.IndexedSeq(G__49404__a,0,null);
} 
return G__49402__delegate.call(this,this$,args);};
G__49402.cljs$lang$maxFixedArity = 1;
G__49402.cljs$lang$applyTo = (function (arglist__49405){
var this$ = cljs.core.first(arglist__49405);
var args = cljs.core.rest(arglist__49405);
return G__49402__delegate(this$,args);
});
G__49402.cljs$core$IFn$_invoke$arity$variadic = G__49402__delegate;
return G__49402;
})()
;
;})(seq__48745_49386,chunk__48746_49387,count__48747_49388,i__48748_49389,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49394,meth_sym_49395,env_49396,multi_method_var_49397,multi_method_49398,vec__48782_49391,meth_name_49392,f_49393,extend_via_metadata_49379,proto_ns_49380,pns_49381,pns_str_49382,vec__48741,proto,mmap))
})():f_49393));


var G__49406 = seq__48745_49386;
var G__49407 = chunk__48746_49387;
var G__49408 = count__48747_49388;
var G__49409 = (i__48748_49389 + (1));
seq__48745_49386 = G__49406;
chunk__48746_49387 = G__49407;
count__48747_49388 = G__49408;
i__48748_49389 = G__49409;
continue;
} else {
var temp__5753__auto___49410 = cljs.core.seq(seq__48745_49386);
if(temp__5753__auto___49410){
var seq__48745_49411__$1 = temp__5753__auto___49410;
if(cljs.core.chunked_seq_QMARK_(seq__48745_49411__$1)){
var c__4679__auto___49412 = cljs.core.chunk_first(seq__48745_49411__$1);
var G__49413 = cljs.core.chunk_rest(seq__48745_49411__$1);
var G__49414 = c__4679__auto___49412;
var G__49415 = cljs.core.count(c__4679__auto___49412);
var G__49416 = (0);
seq__48745_49386 = G__49413;
chunk__48746_49387 = G__49414;
count__48747_49388 = G__49415;
i__48748_49389 = G__49416;
continue;
} else {
var vec__48804_49417 = cljs.core.first(seq__48745_49411__$1);
var meth_name_49418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48804_49417,(0),null);
var f_49419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48804_49417,(1),null);
var meth_str_49420 = cljs.core.name(meth_name_49418);
var meth_sym_49421 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_49420);
var env_49422 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_49423 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_49422,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_49381,meth_sym_49421], null));
var multi_method_49424 = cljs.core.deref(multi_method_var_49423);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_49424,atype,(cljs.core.truth_(extend_via_metadata_49379)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_49382,meth_str_49420);
return ((function (seq__48745_49386,chunk__48746_49387,count__48747_49388,i__48748_49389,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49420,meth_sym_49421,env_49422,multi_method_var_49423,multi_method_49424,vec__48804_49417,meth_name_49418,f_49419,seq__48745_49411__$1,temp__5753__auto___49410,extend_via_metadata_49379,proto_ns_49380,pns_49381,pns_str_49382,vec__48741,proto,mmap){
return (function() { 
var G__49427__delegate = function (this$,args){
var temp__5751__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var temp__5751__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5751__auto____$1)){
var meth = temp__5751__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49419,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49419,this$,args);
}
};
var G__49427 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__49429__i = 0, G__49429__a = new Array(arguments.length -  1);
while (G__49429__i < G__49429__a.length) {G__49429__a[G__49429__i] = arguments[G__49429__i + 1]; ++G__49429__i;}
  args = new cljs.core.IndexedSeq(G__49429__a,0,null);
} 
return G__49427__delegate.call(this,this$,args);};
G__49427.cljs$lang$maxFixedArity = 1;
G__49427.cljs$lang$applyTo = (function (arglist__49432){
var this$ = cljs.core.first(arglist__49432);
var args = cljs.core.rest(arglist__49432);
return G__49427__delegate(this$,args);
});
G__49427.cljs$core$IFn$_invoke$arity$variadic = G__49427__delegate;
return G__49427;
})()
;
;})(seq__48745_49386,chunk__48746_49387,count__48747_49388,i__48748_49389,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49420,meth_sym_49421,env_49422,multi_method_var_49423,multi_method_49424,vec__48804_49417,meth_name_49418,f_49419,seq__48745_49411__$1,temp__5753__auto___49410,extend_via_metadata_49379,proto_ns_49380,pns_49381,pns_str_49382,vec__48741,proto,mmap))
})():f_49419));


var G__49433 = cljs.core.next(seq__48745_49411__$1);
var G__49434 = null;
var G__49435 = (0);
var G__49436 = (0);
seq__48745_49386 = G__49433;
chunk__48746_49387 = G__49434;
count__48747_49388 = G__49435;
i__48748_49389 = G__49436;
continue;
}
} else {
}
}
break;
}


var G__49437 = seq__48507;
var G__49438 = chunk__48509;
var G__49439 = count__48510;
var G__49440 = (i__48511 + (1));
seq__48507 = G__49437;
chunk__48509 = G__49438;
count__48510 = G__49439;
i__48511 = G__49440;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48507);
if(temp__5753__auto__){
var seq__48507__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48507__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48507__$1);
var G__49443 = cljs.core.chunk_rest(seq__48507__$1);
var G__49444 = c__4679__auto__;
var G__49445 = cljs.core.count(c__4679__auto__);
var G__49446 = (0);
seq__48507 = G__49443;
chunk__48509 = G__49444;
count__48510 = G__49445;
i__48511 = G__49446;
continue;
} else {
var vec__48849 = cljs.core.first(seq__48507__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48849,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48849,(1),null);
var extend_via_metadata_49447 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_49448 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_49449 = sci.impl.vars.getName(proto_ns_49448);
var pns_str_49450 = (cljs.core.truth_(extend_via_metadata_49447)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_49449):null);
var seq__48858_49452 = cljs.core.seq(mmap);
var chunk__48859_49453 = null;
var count__48860_49454 = (0);
var i__48861_49455 = (0);
while(true){
if((i__48861_49455 < count__48860_49454)){
var vec__48989_49456 = chunk__48859_49453.cljs$core$IIndexed$_nth$arity$2(null,i__48861_49455);
var meth_name_49457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48989_49456,(0),null);
var f_49458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48989_49456,(1),null);
var meth_str_49459 = cljs.core.name(meth_name_49457);
var meth_sym_49460 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_49459);
var env_49461 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_49462 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_49461,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_49449,meth_sym_49460], null));
var multi_method_49463 = cljs.core.deref(multi_method_var_49462);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_49463,atype,(cljs.core.truth_(extend_via_metadata_49447)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_49450,meth_str_49459);
return ((function (seq__48858_49452,chunk__48859_49453,count__48860_49454,i__48861_49455,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49459,meth_sym_49460,env_49461,multi_method_var_49462,multi_method_49463,vec__48989_49456,meth_name_49457,f_49458,extend_via_metadata_49447,proto_ns_49448,pns_49449,pns_str_49450,vec__48849,proto,mmap,seq__48507__$1,temp__5753__auto__){
return (function() { 
var G__49467__delegate = function (this$,args){
var temp__5751__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var temp__5751__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5751__auto____$1)){
var meth = temp__5751__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49458,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49458,this$,args);
}
};
var G__49467 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__49470__i = 0, G__49470__a = new Array(arguments.length -  1);
while (G__49470__i < G__49470__a.length) {G__49470__a[G__49470__i] = arguments[G__49470__i + 1]; ++G__49470__i;}
  args = new cljs.core.IndexedSeq(G__49470__a,0,null);
} 
return G__49467__delegate.call(this,this$,args);};
G__49467.cljs$lang$maxFixedArity = 1;
G__49467.cljs$lang$applyTo = (function (arglist__49471){
var this$ = cljs.core.first(arglist__49471);
var args = cljs.core.rest(arglist__49471);
return G__49467__delegate(this$,args);
});
G__49467.cljs$core$IFn$_invoke$arity$variadic = G__49467__delegate;
return G__49467;
})()
;
;})(seq__48858_49452,chunk__48859_49453,count__48860_49454,i__48861_49455,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49459,meth_sym_49460,env_49461,multi_method_var_49462,multi_method_49463,vec__48989_49456,meth_name_49457,f_49458,extend_via_metadata_49447,proto_ns_49448,pns_49449,pns_str_49450,vec__48849,proto,mmap,seq__48507__$1,temp__5753__auto__))
})():f_49458));


var G__49472 = seq__48858_49452;
var G__49473 = chunk__48859_49453;
var G__49474 = count__48860_49454;
var G__49475 = (i__48861_49455 + (1));
seq__48858_49452 = G__49472;
chunk__48859_49453 = G__49473;
count__48860_49454 = G__49474;
i__48861_49455 = G__49475;
continue;
} else {
var temp__5753__auto___49476__$1 = cljs.core.seq(seq__48858_49452);
if(temp__5753__auto___49476__$1){
var seq__48858_49477__$1 = temp__5753__auto___49476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48858_49477__$1)){
var c__4679__auto___49478 = cljs.core.chunk_first(seq__48858_49477__$1);
var G__49479 = cljs.core.chunk_rest(seq__48858_49477__$1);
var G__49480 = c__4679__auto___49478;
var G__49481 = cljs.core.count(c__4679__auto___49478);
var G__49482 = (0);
seq__48858_49452 = G__49479;
chunk__48859_49453 = G__49480;
count__48860_49454 = G__49481;
i__48861_49455 = G__49482;
continue;
} else {
var vec__49022_49483 = cljs.core.first(seq__48858_49477__$1);
var meth_name_49484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022_49483,(0),null);
var f_49485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022_49483,(1),null);
var meth_str_49486 = cljs.core.name(meth_name_49484);
var meth_sym_49487 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_49486);
var env_49488 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_49489 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_49488,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_49449,meth_sym_49487], null));
var multi_method_49490 = cljs.core.deref(multi_method_var_49489);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_49490,atype,(cljs.core.truth_(extend_via_metadata_49447)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_49450,meth_str_49486);
return ((function (seq__48858_49452,chunk__48859_49453,count__48860_49454,i__48861_49455,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49486,meth_sym_49487,env_49488,multi_method_var_49489,multi_method_49490,vec__49022_49483,meth_name_49484,f_49485,seq__48858_49477__$1,temp__5753__auto___49476__$1,extend_via_metadata_49447,proto_ns_49448,pns_49449,pns_str_49450,vec__48849,proto,mmap,seq__48507__$1,temp__5753__auto__){
return (function() { 
var G__49496__delegate = function (this$,args){
var temp__5751__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var temp__5751__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5751__auto____$1)){
var meth = temp__5751__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49485,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49485,this$,args);
}
};
var G__49496 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__49497__i = 0, G__49497__a = new Array(arguments.length -  1);
while (G__49497__i < G__49497__a.length) {G__49497__a[G__49497__i] = arguments[G__49497__i + 1]; ++G__49497__i;}
  args = new cljs.core.IndexedSeq(G__49497__a,0,null);
} 
return G__49496__delegate.call(this,this$,args);};
G__49496.cljs$lang$maxFixedArity = 1;
G__49496.cljs$lang$applyTo = (function (arglist__49499){
var this$ = cljs.core.first(arglist__49499);
var args = cljs.core.rest(arglist__49499);
return G__49496__delegate(this$,args);
});
G__49496.cljs$core$IFn$_invoke$arity$variadic = G__49496__delegate;
return G__49496;
})()
;
;})(seq__48858_49452,chunk__48859_49453,count__48860_49454,i__48861_49455,seq__48507,chunk__48509,count__48510,i__48511,fq,meth_str_49486,meth_sym_49487,env_49488,multi_method_var_49489,multi_method_49490,vec__49022_49483,meth_name_49484,f_49485,seq__48858_49477__$1,temp__5753__auto___49476__$1,extend_via_metadata_49447,proto_ns_49448,pns_49449,pns_str_49450,vec__48849,proto,mmap,seq__48507__$1,temp__5753__auto__))
})():f_49485));


var G__49500 = cljs.core.next(seq__48858_49477__$1);
var G__49501 = null;
var G__49502 = (0);
var G__49503 = (0);
seq__48858_49452 = G__49500;
chunk__48859_49453 = G__49501;
count__48860_49454 = G__49502;
i__48861_49455 = G__49503;
continue;
}
} else {
}
}
break;
}


var G__49504 = cljs.core.next(seq__48507__$1);
var G__49505 = null;
var G__49506 = (0);
var G__49507 = (0);
seq__48507 = G__49504;
chunk__48509 = G__49505;
count__48510 = G__49506;
i__48511 = G__49507;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq48482){
var G__48483 = cljs.core.first(seq48482);
var seq48482__$1 = cljs.core.next(seq48482);
var G__48484 = cljs.core.first(seq48482__$1);
var seq48482__$2 = cljs.core.next(seq48482__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48483,G__48484,seq48482__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__49053){
var vec__49056 = p__49053;
var seq__49057 = cljs.core.seq(vec__49056);
var first__49058 = cljs.core.first(seq__49057);
var seq__49057__$1 = cljs.core.next(seq__49057);
var args = first__49058;
var body = seq__49057__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__49050__auto__","farg__49050__auto__",-2101813568,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__49051__auto__","m__49051__auto__",2141497646,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__49050__auto__","farg__49050__auto__",-2101813568,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__49052__auto__","meth__49052__auto__",-1138908981,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__49051__auto__","m__49051__auto__",2141497646,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__49052__auto__","meth__49052__auto__",-1138908981,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49090){
var vec__49091 = p__49090;
var seq__49092 = cljs.core.seq(vec__49091);
var first__49093 = cljs.core.first(seq__49092);
var seq__49092__$1 = cljs.core.next(seq__49092);
var meth_name = first__49093;
var fn_body = seq__49092__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__49085_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__49085_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49523 = arguments.length;
var i__4865__auto___49525 = (0);
while(true){
if((i__4865__auto___49525 < len__4864__auto___49523)){
args__4870__auto__.push((arguments[i__4865__auto___49525]));

var G__49528 = (i__4865__auto___49525 + (1));
i__4865__auto___49525 = G__49528;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__49104_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__49104_SHARP_)));
}),impls);
var protocol_var = (function (){var G__49308 = ctx;
var G__49309 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__49310 = protocol_name;
var fexpr__49307 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__49307.cljs$core$IFn$_invoke$arity$3 ? fexpr__49307.cljs$core$IFn$_invoke$arity$3(G__49308,G__49309,G__49310) : fexpr__49307.call(null,G__49308,G__49309,G__49310));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49311){
var vec__49312 = p__49311;
var seq__49313 = cljs.core.seq(vec__49312);
var first__49314 = cljs.core.first(seq__49313);
var seq__49313__$1 = cljs.core.next(seq__49313);
var type = first__49314;
var meths = seq__49313__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq49106){
var G__49107 = cljs.core.first(seq49106);
var seq49106__$1 = cljs.core.next(seq49106);
var G__49108 = cljs.core.first(seq49106__$1);
var seq49106__$2 = cljs.core.next(seq49106__$1);
var G__49109 = cljs.core.first(seq49106__$2);
var seq49106__$3 = cljs.core.next(seq49106__$2);
var G__49110 = cljs.core.first(seq49106__$3);
var seq49106__$4 = cljs.core.next(seq49106__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49107,G__49108,G__49109,G__49110,seq49106__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49547 = arguments.length;
var i__4865__auto___49548 = (0);
while(true){
if((i__4865__auto___49548 < len__4864__auto___49547)){
args__4870__auto__.push((arguments[i__4865__auto___49548]));

var G__49549 = (i__4865__auto___49548 + (1));
i__4865__auto___49548 = G__49549;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__49315_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__49315_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49321){
var vec__49322 = p__49321;
var seq__49323 = cljs.core.seq(vec__49322);
var first__49324 = cljs.core.first(seq__49323);
var seq__49323__$1 = cljs.core.next(seq__49323);
var proto = first__49324;
var meths = seq__49323__$1;
var protocol_var = (function (){var G__49326 = ctx;
var G__49327 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__49328 = proto;
var fexpr__49325 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__49325.cljs$core$IFn$_invoke$arity$3 ? fexpr__49325.cljs$core$IFn$_invoke$arity$3(G__49326,G__49327,G__49328) : fexpr__49325.call(null,G__49326,G__49327,G__49328));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq49316){
var G__49317 = cljs.core.first(seq49316);
var seq49316__$1 = cljs.core.next(seq49316);
var G__49318 = cljs.core.first(seq49316__$1);
var seq49316__$2 = cljs.core.next(seq49316__$1);
var G__49319 = cljs.core.first(seq49316__$2);
var seq49316__$3 = cljs.core.next(seq49316__$2);
var G__49320 = cljs.core.first(seq49316__$3);
var seq49316__$4 = cljs.core.next(seq49316__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49317,G__49318,G__49319,G__49320,seq49316__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__49329_SHARP_){
var temp__5753__auto__ = cljs.core.get_method(p1__49329_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
var ms = cljs.core.methods$(p1__49329_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__4253__auto__ = (function (){var and__4251__auto__ = p;
if(cljs.core.truth_(and__4251__auto__)){
var pred__49333 = cljs.core._EQ_;
var expr__49334 = p;
if(cljs.core.truth_((pred__49333.cljs$core$IFn$_invoke$arity$2 ? pred__49333.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__49334) : pred__49333.call(null,cljs.core.IDeref,expr__49334)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__49333.cljs$core$IFn$_invoke$arity$2 ? pred__49333.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__49334) : pred__49333.call(null,cljs.core.ISwap,expr__49334)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__49333.cljs$core$IFn$_invoke$arity$2 ? pred__49333.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__49334) : pred__49333.call(null,cljs.core.IReset,expr__49334)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__49334)].join('')));
}
}
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__4251__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__4251__auto__){
var G__49341 = clazz;
var G__49341__$1 = (((G__49341 == null))?null:cljs.core.meta(G__49341));
if((G__49341__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__49341__$1);
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__49342_SHARP_){
return cljs.core.get_method(p1__49342_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
