goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48018 = cljs.core.get_global_hierarchy;
return (fexpr__48018.cljs$core$IFn$_invoke$arity$0 ? fexpr__48018.cljs$core$IFn$_invoke$arity$0() : fexpr__48018.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__48027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__48027.cljs$core$IFn$_invoke$arity$1 ? fexpr__48027.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__48027.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48054 = cljs.core.get_global_hierarchy;
return (fexpr__48054.cljs$core$IFn$_invoke$arity$0 ? fexpr__48054.cljs$core$IFn$_invoke$arity$0() : fexpr__48054.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48063 = cljs.core.get_global_hierarchy;
return (fexpr__48063.cljs$core$IFn$_invoke$arity$0 ? fexpr__48063.cljs$core$IFn$_invoke$arity$0() : fexpr__48063.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__48151 = null;
var G__48151__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__48078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__48078.cljs$core$IFn$_invoke$arity$2 ? fexpr__48078.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__48078.call(null,ref,f));
});
var G__48151__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__48081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__48081.cljs$core$IFn$_invoke$arity$3 ? fexpr__48081.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__48081.call(null,ref,f,a1));
});
var G__48151__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__48082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__48082.cljs$core$IFn$_invoke$arity$4 ? fexpr__48082.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__48082.call(null,ref,f,a1,a2));
});
var G__48151__5 = (function() { 
var G__48153__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__48153 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__48155__i = 0, G__48155__a = new Array(arguments.length -  4);
while (G__48155__i < G__48155__a.length) {G__48155__a[G__48155__i] = arguments[G__48155__i + 4]; ++G__48155__i;}
  args = new cljs.core.IndexedSeq(G__48155__a,0,null);
} 
return G__48153__delegate.call(this,ref,f,a1,a2,args);};
G__48153.cljs$lang$maxFixedArity = 4;
G__48153.cljs$lang$applyTo = (function (arglist__48156){
var ref = cljs.core.first(arglist__48156);
arglist__48156 = cljs.core.next(arglist__48156);
var f = cljs.core.first(arglist__48156);
arglist__48156 = cljs.core.next(arglist__48156);
var a1 = cljs.core.first(arglist__48156);
arglist__48156 = cljs.core.next(arglist__48156);
var a2 = cljs.core.first(arglist__48156);
var args = cljs.core.rest(arglist__48156);
return G__48153__delegate(ref,f,a1,a2,args);
});
G__48153.cljs$core$IFn$_invoke$arity$variadic = G__48153__delegate;
return G__48153;
})()
;
G__48151 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__48151__2.call(this,ref,f);
case 3:
return G__48151__3.call(this,ref,f,a1);
case 4:
return G__48151__4.call(this,ref,f,a1,a2);
default:
var G__48158 = null;
if (arguments.length > 4) {
var G__48159__i = 0, G__48159__a = new Array(arguments.length -  4);
while (G__48159__i < G__48159__a.length) {G__48159__a[G__48159__i] = arguments[G__48159__i + 4]; ++G__48159__i;}
G__48158 = new cljs.core.IndexedSeq(G__48159__a,0,null);
}
return G__48151__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__48158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48151.cljs$lang$maxFixedArity = 4;
G__48151.cljs$lang$applyTo = G__48151__5.cljs$lang$applyTo;
G__48151.cljs$core$IFn$_invoke$arity$2 = G__48151__2;
G__48151.cljs$core$IFn$_invoke$arity$3 = G__48151__3;
G__48151.cljs$core$IFn$_invoke$arity$4 = G__48151__4;
G__48151.cljs$core$IFn$_invoke$arity$variadic = G__48151__5.cljs$core$IFn$_invoke$arity$variadic;
return G__48151;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__48102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__48102.cljs$core$IFn$_invoke$arity$2 ? fexpr__48102.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__48102.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__48164__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__48164 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__48167__i = 0, G__48167__a = new Array(arguments.length -  2);
while (G__48167__i < G__48167__a.length) {G__48167__a[G__48167__i] = arguments[G__48167__i + 2]; ++G__48167__i;}
  args = new cljs.core.IndexedSeq(G__48167__a,0,null);
} 
return G__48164__delegate.call(this,ref,f,args);};
G__48164.cljs$lang$maxFixedArity = 2;
G__48164.cljs$lang$applyTo = (function (arglist__48169){
var ref = cljs.core.first(arglist__48169);
arglist__48169 = cljs.core.next(arglist__48169);
var f = cljs.core.first(arglist__48169);
var args = cljs.core.rest(arglist__48169);
return G__48164__delegate(ref,f,args);
});
G__48164.cljs$core$IFn$_invoke$arity$variadic = G__48164__delegate;
return G__48164;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48171 = arguments.length;
var i__4865__auto___48172 = (0);
while(true){
if((i__4865__auto___48172 < len__4864__auto___48171)){
args__4870__auto__.push((arguments[i__4865__auto___48172]));

var G__48173 = (i__4865__auto___48172 + (1));
i__4865__auto___48172 = G__48173;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq48112){
var G__48113 = cljs.core.first(seq48112);
var seq48112__$1 = cljs.core.next(seq48112);
var G__48114 = cljs.core.first(seq48112__$1);
var seq48112__$2 = cljs.core.next(seq48112__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48113,G__48114,seq48112__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
