goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51888 = (fixed_arity | (0));
switch (G__51888) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__51892){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51892);

while(true){
var ret__50813__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50813__auto__)){
continue;
} else {
return ret__50813__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__51892 = null;
if (arguments.length > 0) {
var G__53063__i = 0, G__53063__a = new Array(arguments.length -  0);
while (G__53063__i < G__53063__a.length) {G__53063__a[G__53063__i] = arguments[G__53063__i + 0]; ++G__53063__i;}
  G__51892 = new cljs.core.IndexedSeq(G__53063__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__51892);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__53064){
var G__51892 = cljs.core.seq(arglist__53064);
return sci$impl$fns$fun_$_arity_0__delegate(G__51892);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__51895 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__51893,G__51894){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51893);

(invoc_array[vararg_idx] = G__51894);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__51893,var_args){
var G__51894 = null;
if (arguments.length > 1) {
var G__53066__i = 0, G__53066__a = new Array(arguments.length -  1);
while (G__53066__i < G__53066__a.length) {G__53066__a[G__53066__i] = arguments[G__53066__i + 1]; ++G__53066__i;}
  G__51894 = new cljs.core.IndexedSeq(G__53066__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__51893,G__51894);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__53067){
var G__51893 = cljs.core.first(arglist__53067);
var G__51894 = cljs.core.rest(arglist__53067);
return sci$impl$fns$fun_$_arity_1__delegate(G__51893,G__51894);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__51899 = cljs.core._nth(params,(0));
var G__51900 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__51896,G__51897,G__51898){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51896);

(invoc_array[(1)] = G__51897);

(invoc_array[vararg_idx] = G__51898);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__51896,G__51897,var_args){
var G__51898 = null;
if (arguments.length > 2) {
var G__53069__i = 0, G__53069__a = new Array(arguments.length -  2);
while (G__53069__i < G__53069__a.length) {G__53069__a[G__53069__i] = arguments[G__53069__i + 2]; ++G__53069__i;}
  G__51898 = new cljs.core.IndexedSeq(G__53069__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__51896,G__51897,G__51898);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__53070){
var G__51896 = cljs.core.first(arglist__53070);
arglist__53070 = cljs.core.next(arglist__53070);
var G__51897 = cljs.core.first(arglist__53070);
var G__51898 = cljs.core.rest(arglist__53070);
return sci$impl$fns$fun_$_arity_2__delegate(G__51896,G__51897,G__51898);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__51907 = cljs.core._nth(params,(0));
var G__51909 = cljs.core._nth(params,(1));
var G__51910 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__51903,G__51904,G__51905,G__51906){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51903);

(invoc_array[(1)] = G__51904);

(invoc_array[(2)] = G__51905);

(invoc_array[vararg_idx] = G__51906);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__51903,G__51904,G__51905,var_args){
var G__51906 = null;
if (arguments.length > 3) {
var G__53071__i = 0, G__53071__a = new Array(arguments.length -  3);
while (G__53071__i < G__53071__a.length) {G__53071__a[G__53071__i] = arguments[G__53071__i + 3]; ++G__53071__i;}
  G__51906 = new cljs.core.IndexedSeq(G__53071__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__51903,G__51904,G__51905,G__51906);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__53072){
var G__51903 = cljs.core.first(arglist__53072);
arglist__53072 = cljs.core.next(arglist__53072);
var G__51904 = cljs.core.first(arglist__53072);
arglist__53072 = cljs.core.next(arglist__53072);
var G__51905 = cljs.core.first(arglist__53072);
var G__51906 = cljs.core.rest(arglist__53072);
return sci$impl$fns$fun_$_arity_3__delegate(G__51903,G__51904,G__51905,G__51906);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__51918 = cljs.core._nth(params,(0));
var G__51919 = cljs.core._nth(params,(1));
var G__51920 = cljs.core._nth(params,(2));
var G__51921 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__51913,G__51914,G__51915,G__51916,G__51917){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51913);

(invoc_array[(1)] = G__51914);

(invoc_array[(2)] = G__51915);

(invoc_array[(3)] = G__51916);

(invoc_array[vararg_idx] = G__51917);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__51913,G__51914,G__51915,G__51916,var_args){
var G__51917 = null;
if (arguments.length > 4) {
var G__53074__i = 0, G__53074__a = new Array(arguments.length -  4);
while (G__53074__i < G__53074__a.length) {G__53074__a[G__53074__i] = arguments[G__53074__i + 4]; ++G__53074__i;}
  G__51917 = new cljs.core.IndexedSeq(G__53074__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__51913,G__51914,G__51915,G__51916,G__51917);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__53075){
var G__51913 = cljs.core.first(arglist__53075);
arglist__53075 = cljs.core.next(arglist__53075);
var G__51914 = cljs.core.first(arglist__53075);
arglist__53075 = cljs.core.next(arglist__53075);
var G__51915 = cljs.core.first(arglist__53075);
arglist__53075 = cljs.core.next(arglist__53075);
var G__51916 = cljs.core.first(arglist__53075);
var G__51917 = cljs.core.rest(arglist__53075);
return sci$impl$fns$fun_$_arity_4__delegate(G__51913,G__51914,G__51915,G__51916,G__51917);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__51930 = cljs.core._nth(params,(0));
var G__51931 = cljs.core._nth(params,(1));
var G__51932 = cljs.core._nth(params,(2));
var G__51933 = cljs.core._nth(params,(3));
var G__51934 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__51924,G__51925,G__51926,G__51927,G__51928,G__51929){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51924);

(invoc_array[(1)] = G__51925);

(invoc_array[(2)] = G__51926);

(invoc_array[(3)] = G__51927);

(invoc_array[(4)] = G__51928);

(invoc_array[vararg_idx] = G__51929);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__51924,G__51925,G__51926,G__51927,G__51928,var_args){
var G__51929 = null;
if (arguments.length > 5) {
var G__53077__i = 0, G__53077__a = new Array(arguments.length -  5);
while (G__53077__i < G__53077__a.length) {G__53077__a[G__53077__i] = arguments[G__53077__i + 5]; ++G__53077__i;}
  G__51929 = new cljs.core.IndexedSeq(G__53077__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__53078){
var G__51924 = cljs.core.first(arglist__53078);
arglist__53078 = cljs.core.next(arglist__53078);
var G__51925 = cljs.core.first(arglist__53078);
arglist__53078 = cljs.core.next(arglist__53078);
var G__51926 = cljs.core.first(arglist__53078);
arglist__53078 = cljs.core.next(arglist__53078);
var G__51927 = cljs.core.first(arglist__53078);
arglist__53078 = cljs.core.next(arglist__53078);
var G__51928 = cljs.core.first(arglist__53078);
var G__51929 = cljs.core.rest(arglist__53078);
return sci$impl$fns$fun_$_arity_5__delegate(G__51924,G__51925,G__51926,G__51927,G__51928,G__51929);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__51945 = cljs.core._nth(params,(0));
var G__51946 = cljs.core._nth(params,(1));
var G__51947 = cljs.core._nth(params,(2));
var G__51948 = cljs.core._nth(params,(3));
var G__51949 = cljs.core._nth(params,(4));
var G__51950 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51938);

(invoc_array[(1)] = G__51939);

(invoc_array[(2)] = G__51940);

(invoc_array[(3)] = G__51941);

(invoc_array[(4)] = G__51942);

(invoc_array[(5)] = G__51943);

(invoc_array[vararg_idx] = G__51944);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,var_args){
var G__51944 = null;
if (arguments.length > 6) {
var G__53083__i = 0, G__53083__a = new Array(arguments.length -  6);
while (G__53083__i < G__53083__a.length) {G__53083__a[G__53083__i] = arguments[G__53083__i + 6]; ++G__53083__i;}
  G__51944 = new cljs.core.IndexedSeq(G__53083__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__53084){
var G__51938 = cljs.core.first(arglist__53084);
arglist__53084 = cljs.core.next(arglist__53084);
var G__51939 = cljs.core.first(arglist__53084);
arglist__53084 = cljs.core.next(arglist__53084);
var G__51940 = cljs.core.first(arglist__53084);
arglist__53084 = cljs.core.next(arglist__53084);
var G__51941 = cljs.core.first(arglist__53084);
arglist__53084 = cljs.core.next(arglist__53084);
var G__51942 = cljs.core.first(arglist__53084);
arglist__53084 = cljs.core.next(arglist__53084);
var G__51943 = cljs.core.first(arglist__53084);
var G__51944 = cljs.core.rest(arglist__53084);
return sci$impl$fns$fun_$_arity_6__delegate(G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__51961 = cljs.core._nth(params,(0));
var G__51962 = cljs.core._nth(params,(1));
var G__51963 = cljs.core._nth(params,(2));
var G__51964 = cljs.core._nth(params,(3));
var G__51965 = cljs.core._nth(params,(4));
var G__51966 = cljs.core._nth(params,(5));
var G__51967 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51953);

(invoc_array[(1)] = G__51954);

(invoc_array[(2)] = G__51955);

(invoc_array[(3)] = G__51956);

(invoc_array[(4)] = G__51957);

(invoc_array[(5)] = G__51958);

(invoc_array[(6)] = G__51959);

(invoc_array[vararg_idx] = G__51960);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,var_args){
var G__51960 = null;
if (arguments.length > 7) {
var G__53089__i = 0, G__53089__a = new Array(arguments.length -  7);
while (G__53089__i < G__53089__a.length) {G__53089__a[G__53089__i] = arguments[G__53089__i + 7]; ++G__53089__i;}
  G__51960 = new cljs.core.IndexedSeq(G__53089__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__53090){
var G__51953 = cljs.core.first(arglist__53090);
arglist__53090 = cljs.core.next(arglist__53090);
var G__51954 = cljs.core.first(arglist__53090);
arglist__53090 = cljs.core.next(arglist__53090);
var G__51955 = cljs.core.first(arglist__53090);
arglist__53090 = cljs.core.next(arglist__53090);
var G__51956 = cljs.core.first(arglist__53090);
arglist__53090 = cljs.core.next(arglist__53090);
var G__51957 = cljs.core.first(arglist__53090);
arglist__53090 = cljs.core.next(arglist__53090);
var G__51958 = cljs.core.first(arglist__53090);
arglist__53090 = cljs.core.next(arglist__53090);
var G__51959 = cljs.core.first(arglist__53090);
var G__51960 = cljs.core.rest(arglist__53090);
return sci$impl$fns$fun_$_arity_7__delegate(G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__51978 = cljs.core._nth(params,(0));
var G__51979 = cljs.core._nth(params,(1));
var G__51980 = cljs.core._nth(params,(2));
var G__51981 = cljs.core._nth(params,(3));
var G__51982 = cljs.core._nth(params,(4));
var G__51983 = cljs.core._nth(params,(5));
var G__51984 = cljs.core._nth(params,(6));
var G__51985 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51969);

(invoc_array[(1)] = G__51970);

(invoc_array[(2)] = G__51971);

(invoc_array[(3)] = G__51972);

(invoc_array[(4)] = G__51973);

(invoc_array[(5)] = G__51974);

(invoc_array[(6)] = G__51975);

(invoc_array[(7)] = G__51976);

(invoc_array[vararg_idx] = G__51977);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,var_args){
var G__51977 = null;
if (arguments.length > 8) {
var G__53095__i = 0, G__53095__a = new Array(arguments.length -  8);
while (G__53095__i < G__53095__a.length) {G__53095__a[G__53095__i] = arguments[G__53095__i + 8]; ++G__53095__i;}
  G__51977 = new cljs.core.IndexedSeq(G__53095__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__53096){
var G__51969 = cljs.core.first(arglist__53096);
arglist__53096 = cljs.core.next(arglist__53096);
var G__51970 = cljs.core.first(arglist__53096);
arglist__53096 = cljs.core.next(arglist__53096);
var G__51971 = cljs.core.first(arglist__53096);
arglist__53096 = cljs.core.next(arglist__53096);
var G__51972 = cljs.core.first(arglist__53096);
arglist__53096 = cljs.core.next(arglist__53096);
var G__51973 = cljs.core.first(arglist__53096);
arglist__53096 = cljs.core.next(arglist__53096);
var G__51974 = cljs.core.first(arglist__53096);
arglist__53096 = cljs.core.next(arglist__53096);
var G__51975 = cljs.core.first(arglist__53096);
arglist__53096 = cljs.core.next(arglist__53096);
var G__51976 = cljs.core.first(arglist__53096);
var G__51977 = cljs.core.rest(arglist__53096);
return sci$impl$fns$fun_$_arity_8__delegate(G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__51996 = cljs.core._nth(params,(0));
var G__51997 = cljs.core._nth(params,(1));
var G__51998 = cljs.core._nth(params,(2));
var G__51999 = cljs.core._nth(params,(3));
var G__52000 = cljs.core._nth(params,(4));
var G__52001 = cljs.core._nth(params,(5));
var G__52002 = cljs.core._nth(params,(6));
var G__52003 = cljs.core._nth(params,(7));
var G__52004 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51986);

(invoc_array[(1)] = G__51987);

(invoc_array[(2)] = G__51988);

(invoc_array[(3)] = G__51989);

(invoc_array[(4)] = G__51990);

(invoc_array[(5)] = G__51991);

(invoc_array[(6)] = G__51992);

(invoc_array[(7)] = G__51993);

(invoc_array[(8)] = G__51994);

(invoc_array[vararg_idx] = G__51995);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,var_args){
var G__51995 = null;
if (arguments.length > 9) {
var G__53098__i = 0, G__53098__a = new Array(arguments.length -  9);
while (G__53098__i < G__53098__a.length) {G__53098__a[G__53098__i] = arguments[G__53098__i + 9]; ++G__53098__i;}
  G__51995 = new cljs.core.IndexedSeq(G__53098__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__53099){
var G__51986 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51987 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51988 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51989 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51990 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51991 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51992 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51993 = cljs.core.first(arglist__53099);
arglist__53099 = cljs.core.next(arglist__53099);
var G__51994 = cljs.core.first(arglist__53099);
var G__51995 = cljs.core.rest(arglist__53099);
return sci$impl$fns$fun_$_arity_9__delegate(G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__52018 = cljs.core._nth(params,(0));
var G__52019 = cljs.core._nth(params,(1));
var G__52020 = cljs.core._nth(params,(2));
var G__52021 = cljs.core._nth(params,(3));
var G__52022 = cljs.core._nth(params,(4));
var G__52023 = cljs.core._nth(params,(5));
var G__52024 = cljs.core._nth(params,(6));
var G__52025 = cljs.core._nth(params,(7));
var G__52026 = cljs.core._nth(params,(8));
var G__52027 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52007);

(invoc_array[(1)] = G__52008);

(invoc_array[(2)] = G__52009);

(invoc_array[(3)] = G__52010);

(invoc_array[(4)] = G__52011);

(invoc_array[(5)] = G__52012);

(invoc_array[(6)] = G__52013);

(invoc_array[(7)] = G__52014);

(invoc_array[(8)] = G__52015);

(invoc_array[(9)] = G__52016);

(invoc_array[vararg_idx] = G__52017);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,var_args){
var G__52017 = null;
if (arguments.length > 10) {
var G__53108__i = 0, G__53108__a = new Array(arguments.length -  10);
while (G__53108__i < G__53108__a.length) {G__53108__a[G__53108__i] = arguments[G__53108__i + 10]; ++G__53108__i;}
  G__52017 = new cljs.core.IndexedSeq(G__53108__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__53112){
var G__52007 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52008 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52009 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52010 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52011 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52012 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52013 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52014 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52015 = cljs.core.first(arglist__53112);
arglist__53112 = cljs.core.next(arglist__53112);
var G__52016 = cljs.core.first(arglist__53112);
var G__52017 = cljs.core.rest(arglist__53112);
return sci$impl$fns$fun_$_arity_10__delegate(G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__52041 = cljs.core._nth(params,(0));
var G__52042 = cljs.core._nth(params,(1));
var G__52043 = cljs.core._nth(params,(2));
var G__52044 = cljs.core._nth(params,(3));
var G__52045 = cljs.core._nth(params,(4));
var G__52046 = cljs.core._nth(params,(5));
var G__52047 = cljs.core._nth(params,(6));
var G__52048 = cljs.core._nth(params,(7));
var G__52049 = cljs.core._nth(params,(8));
var G__52050 = cljs.core._nth(params,(9));
var G__52051 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52029);

(invoc_array[(1)] = G__52030);

(invoc_array[(2)] = G__52031);

(invoc_array[(3)] = G__52032);

(invoc_array[(4)] = G__52033);

(invoc_array[(5)] = G__52034);

(invoc_array[(6)] = G__52035);

(invoc_array[(7)] = G__52036);

(invoc_array[(8)] = G__52037);

(invoc_array[(9)] = G__52038);

(invoc_array[(10)] = G__52039);

(invoc_array[vararg_idx] = G__52040);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,var_args){
var G__52040 = null;
if (arguments.length > 11) {
var G__53117__i = 0, G__53117__a = new Array(arguments.length -  11);
while (G__53117__i < G__53117__a.length) {G__53117__a[G__53117__i] = arguments[G__53117__i + 11]; ++G__53117__i;}
  G__52040 = new cljs.core.IndexedSeq(G__53117__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__53120){
var G__52029 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52030 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52031 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52032 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52033 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52034 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52035 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52036 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52037 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52038 = cljs.core.first(arglist__53120);
arglist__53120 = cljs.core.next(arglist__53120);
var G__52039 = cljs.core.first(arglist__53120);
var G__52040 = cljs.core.rest(arglist__53120);
return sci$impl$fns$fun_$_arity_11__delegate(G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__52071 = cljs.core._nth(params,(0));
var G__52072 = cljs.core._nth(params,(1));
var G__52073 = cljs.core._nth(params,(2));
var G__52074 = cljs.core._nth(params,(3));
var G__52075 = cljs.core._nth(params,(4));
var G__52076 = cljs.core._nth(params,(5));
var G__52077 = cljs.core._nth(params,(6));
var G__52078 = cljs.core._nth(params,(7));
var G__52079 = cljs.core._nth(params,(8));
var G__52080 = cljs.core._nth(params,(9));
var G__52081 = cljs.core._nth(params,(10));
var G__52082 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52058);

(invoc_array[(1)] = G__52059);

(invoc_array[(2)] = G__52060);

(invoc_array[(3)] = G__52061);

(invoc_array[(4)] = G__52062);

(invoc_array[(5)] = G__52063);

(invoc_array[(6)] = G__52064);

(invoc_array[(7)] = G__52065);

(invoc_array[(8)] = G__52066);

(invoc_array[(9)] = G__52067);

(invoc_array[(10)] = G__52068);

(invoc_array[(11)] = G__52069);

(invoc_array[vararg_idx] = G__52070);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,var_args){
var G__52070 = null;
if (arguments.length > 12) {
var G__53141__i = 0, G__53141__a = new Array(arguments.length -  12);
while (G__53141__i < G__53141__a.length) {G__53141__a[G__53141__i] = arguments[G__53141__i + 12]; ++G__53141__i;}
  G__52070 = new cljs.core.IndexedSeq(G__53141__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__53143){
var G__52058 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52059 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52060 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52061 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52062 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52063 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52064 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52065 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52066 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52067 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52068 = cljs.core.first(arglist__53143);
arglist__53143 = cljs.core.next(arglist__53143);
var G__52069 = cljs.core.first(arglist__53143);
var G__52070 = cljs.core.rest(arglist__53143);
return sci$impl$fns$fun_$_arity_12__delegate(G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__52106 = cljs.core._nth(params,(0));
var G__52107 = cljs.core._nth(params,(1));
var G__52108 = cljs.core._nth(params,(2));
var G__52109 = cljs.core._nth(params,(3));
var G__52110 = cljs.core._nth(params,(4));
var G__52111 = cljs.core._nth(params,(5));
var G__52112 = cljs.core._nth(params,(6));
var G__52113 = cljs.core._nth(params,(7));
var G__52114 = cljs.core._nth(params,(8));
var G__52115 = cljs.core._nth(params,(9));
var G__52116 = cljs.core._nth(params,(10));
var G__52117 = cljs.core._nth(params,(11));
var G__52118 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52092);

(invoc_array[(1)] = G__52093);

(invoc_array[(2)] = G__52094);

(invoc_array[(3)] = G__52095);

(invoc_array[(4)] = G__52096);

(invoc_array[(5)] = G__52097);

(invoc_array[(6)] = G__52098);

(invoc_array[(7)] = G__52099);

(invoc_array[(8)] = G__52100);

(invoc_array[(9)] = G__52101);

(invoc_array[(10)] = G__52102);

(invoc_array[(11)] = G__52103);

(invoc_array[(12)] = G__52104);

(invoc_array[vararg_idx] = G__52105);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,var_args){
var G__52105 = null;
if (arguments.length > 13) {
var G__53152__i = 0, G__53152__a = new Array(arguments.length -  13);
while (G__53152__i < G__53152__a.length) {G__53152__a[G__53152__i] = arguments[G__53152__i + 13]; ++G__53152__i;}
  G__52105 = new cljs.core.IndexedSeq(G__53152__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__53154){
var G__52092 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52093 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52094 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52095 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52096 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52097 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52098 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52099 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52100 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52101 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52102 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52103 = cljs.core.first(arglist__53154);
arglist__53154 = cljs.core.next(arglist__53154);
var G__52104 = cljs.core.first(arglist__53154);
var G__52105 = cljs.core.rest(arglist__53154);
return sci$impl$fns$fun_$_arity_13__delegate(G__52092,G__52093,G__52094,G__52095,G__52096,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__52141 = cljs.core._nth(params,(0));
var G__52142 = cljs.core._nth(params,(1));
var G__52143 = cljs.core._nth(params,(2));
var G__52144 = cljs.core._nth(params,(3));
var G__52145 = cljs.core._nth(params,(4));
var G__52146 = cljs.core._nth(params,(5));
var G__52147 = cljs.core._nth(params,(6));
var G__52148 = cljs.core._nth(params,(7));
var G__52149 = cljs.core._nth(params,(8));
var G__52150 = cljs.core._nth(params,(9));
var G__52151 = cljs.core._nth(params,(10));
var G__52152 = cljs.core._nth(params,(11));
var G__52153 = cljs.core._nth(params,(12));
var G__52154 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52126);

(invoc_array[(1)] = G__52127);

(invoc_array[(2)] = G__52128);

(invoc_array[(3)] = G__52129);

(invoc_array[(4)] = G__52130);

(invoc_array[(5)] = G__52131);

(invoc_array[(6)] = G__52132);

(invoc_array[(7)] = G__52133);

(invoc_array[(8)] = G__52134);

(invoc_array[(9)] = G__52135);

(invoc_array[(10)] = G__52136);

(invoc_array[(11)] = G__52137);

(invoc_array[(12)] = G__52138);

(invoc_array[(13)] = G__52139);

(invoc_array[vararg_idx] = G__52140);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,var_args){
var G__52140 = null;
if (arguments.length > 14) {
var G__53156__i = 0, G__53156__a = new Array(arguments.length -  14);
while (G__53156__i < G__53156__a.length) {G__53156__a[G__53156__i] = arguments[G__53156__i + 14]; ++G__53156__i;}
  G__52140 = new cljs.core.IndexedSeq(G__53156__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__53158){
var G__52126 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52127 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52128 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52129 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52130 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52131 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52132 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52133 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52134 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52135 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52136 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52137 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52138 = cljs.core.first(arglist__53158);
arglist__53158 = cljs.core.next(arglist__53158);
var G__52139 = cljs.core.first(arglist__53158);
var G__52140 = cljs.core.rest(arglist__53158);
return sci$impl$fns$fun_$_arity_14__delegate(G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__52179 = cljs.core._nth(params,(0));
var G__52180 = cljs.core._nth(params,(1));
var G__52181 = cljs.core._nth(params,(2));
var G__52182 = cljs.core._nth(params,(3));
var G__52183 = cljs.core._nth(params,(4));
var G__52184 = cljs.core._nth(params,(5));
var G__52185 = cljs.core._nth(params,(6));
var G__52186 = cljs.core._nth(params,(7));
var G__52187 = cljs.core._nth(params,(8));
var G__52188 = cljs.core._nth(params,(9));
var G__52189 = cljs.core._nth(params,(10));
var G__52190 = cljs.core._nth(params,(11));
var G__52191 = cljs.core._nth(params,(12));
var G__52192 = cljs.core._nth(params,(13));
var G__52193 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52163);

(invoc_array[(1)] = G__52164);

(invoc_array[(2)] = G__52165);

(invoc_array[(3)] = G__52166);

(invoc_array[(4)] = G__52167);

(invoc_array[(5)] = G__52168);

(invoc_array[(6)] = G__52169);

(invoc_array[(7)] = G__52170);

(invoc_array[(8)] = G__52171);

(invoc_array[(9)] = G__52172);

(invoc_array[(10)] = G__52173);

(invoc_array[(11)] = G__52174);

(invoc_array[(12)] = G__52175);

(invoc_array[(13)] = G__52176);

(invoc_array[(14)] = G__52177);

(invoc_array[vararg_idx] = G__52178);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,var_args){
var G__52178 = null;
if (arguments.length > 15) {
var G__53163__i = 0, G__53163__a = new Array(arguments.length -  15);
while (G__53163__i < G__53163__a.length) {G__53163__a[G__53163__i] = arguments[G__53163__i + 15]; ++G__53163__i;}
  G__52178 = new cljs.core.IndexedSeq(G__53163__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__53165){
var G__52163 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52164 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52165 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52166 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52167 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52168 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52169 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52170 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52171 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52172 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52173 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52174 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52175 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52176 = cljs.core.first(arglist__53165);
arglist__53165 = cljs.core.next(arglist__53165);
var G__52177 = cljs.core.first(arglist__53165);
var G__52178 = cljs.core.rest(arglist__53165);
return sci$impl$fns$fun_$_arity_15__delegate(G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__52217 = cljs.core._nth(params,(0));
var G__52218 = cljs.core._nth(params,(1));
var G__52219 = cljs.core._nth(params,(2));
var G__52220 = cljs.core._nth(params,(3));
var G__52221 = cljs.core._nth(params,(4));
var G__52222 = cljs.core._nth(params,(5));
var G__52223 = cljs.core._nth(params,(6));
var G__52224 = cljs.core._nth(params,(7));
var G__52225 = cljs.core._nth(params,(8));
var G__52226 = cljs.core._nth(params,(9));
var G__52227 = cljs.core._nth(params,(10));
var G__52228 = cljs.core._nth(params,(11));
var G__52229 = cljs.core._nth(params,(12));
var G__52230 = cljs.core._nth(params,(13));
var G__52231 = cljs.core._nth(params,(14));
var G__52232 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52200);

(invoc_array[(1)] = G__52201);

(invoc_array[(2)] = G__52202);

(invoc_array[(3)] = G__52203);

(invoc_array[(4)] = G__52204);

(invoc_array[(5)] = G__52205);

(invoc_array[(6)] = G__52206);

(invoc_array[(7)] = G__52207);

(invoc_array[(8)] = G__52208);

(invoc_array[(9)] = G__52209);

(invoc_array[(10)] = G__52210);

(invoc_array[(11)] = G__52211);

(invoc_array[(12)] = G__52212);

(invoc_array[(13)] = G__52213);

(invoc_array[(14)] = G__52214);

(invoc_array[(15)] = G__52215);

(invoc_array[vararg_idx] = G__52216);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,var_args){
var G__52216 = null;
if (arguments.length > 16) {
var G__53173__i = 0, G__53173__a = new Array(arguments.length -  16);
while (G__53173__i < G__53173__a.length) {G__53173__a[G__53173__i] = arguments[G__53173__i + 16]; ++G__53173__i;}
  G__52216 = new cljs.core.IndexedSeq(G__53173__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__53174){
var G__52200 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52201 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52202 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52203 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52204 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52205 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52206 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52207 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52208 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52209 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52210 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52211 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52212 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52213 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52214 = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var G__52215 = cljs.core.first(arglist__53174);
var G__52216 = cljs.core.rest(arglist__53174);
return sci$impl$fns$fun_$_arity_16__delegate(G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__52255 = cljs.core._nth(params,(0));
var G__52256 = cljs.core._nth(params,(1));
var G__52257 = cljs.core._nth(params,(2));
var G__52258 = cljs.core._nth(params,(3));
var G__52259 = cljs.core._nth(params,(4));
var G__52260 = cljs.core._nth(params,(5));
var G__52261 = cljs.core._nth(params,(6));
var G__52262 = cljs.core._nth(params,(7));
var G__52263 = cljs.core._nth(params,(8));
var G__52264 = cljs.core._nth(params,(9));
var G__52265 = cljs.core._nth(params,(10));
var G__52266 = cljs.core._nth(params,(11));
var G__52267 = cljs.core._nth(params,(12));
var G__52268 = cljs.core._nth(params,(13));
var G__52269 = cljs.core._nth(params,(14));
var G__52270 = cljs.core._nth(params,(15));
var G__52271 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52237);

(invoc_array[(1)] = G__52238);

(invoc_array[(2)] = G__52239);

(invoc_array[(3)] = G__52240);

(invoc_array[(4)] = G__52241);

(invoc_array[(5)] = G__52242);

(invoc_array[(6)] = G__52243);

(invoc_array[(7)] = G__52244);

(invoc_array[(8)] = G__52245);

(invoc_array[(9)] = G__52246);

(invoc_array[(10)] = G__52247);

(invoc_array[(11)] = G__52248);

(invoc_array[(12)] = G__52249);

(invoc_array[(13)] = G__52250);

(invoc_array[(14)] = G__52251);

(invoc_array[(15)] = G__52252);

(invoc_array[(16)] = G__52253);

(invoc_array[vararg_idx] = G__52254);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,var_args){
var G__52254 = null;
if (arguments.length > 17) {
var G__53179__i = 0, G__53179__a = new Array(arguments.length -  17);
while (G__53179__i < G__53179__a.length) {G__53179__a[G__53179__i] = arguments[G__53179__i + 17]; ++G__53179__i;}
  G__52254 = new cljs.core.IndexedSeq(G__53179__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__53180){
var G__52237 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52238 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52239 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52240 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52241 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52242 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52243 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52244 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52245 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52246 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52247 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52248 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52249 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52250 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52251 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52252 = cljs.core.first(arglist__53180);
arglist__53180 = cljs.core.next(arglist__53180);
var G__52253 = cljs.core.first(arglist__53180);
var G__52254 = cljs.core.rest(arglist__53180);
return sci$impl$fns$fun_$_arity_17__delegate(G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__52292 = cljs.core._nth(params,(0));
var G__52293 = cljs.core._nth(params,(1));
var G__52294 = cljs.core._nth(params,(2));
var G__52295 = cljs.core._nth(params,(3));
var G__52296 = cljs.core._nth(params,(4));
var G__52297 = cljs.core._nth(params,(5));
var G__52298 = cljs.core._nth(params,(6));
var G__52299 = cljs.core._nth(params,(7));
var G__52300 = cljs.core._nth(params,(8));
var G__52301 = cljs.core._nth(params,(9));
var G__52302 = cljs.core._nth(params,(10));
var G__52303 = cljs.core._nth(params,(11));
var G__52304 = cljs.core._nth(params,(12));
var G__52305 = cljs.core._nth(params,(13));
var G__52306 = cljs.core._nth(params,(14));
var G__52307 = cljs.core._nth(params,(15));
var G__52308 = cljs.core._nth(params,(16));
var G__52309 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52273);

(invoc_array[(1)] = G__52274);

(invoc_array[(2)] = G__52275);

(invoc_array[(3)] = G__52276);

(invoc_array[(4)] = G__52277);

(invoc_array[(5)] = G__52278);

(invoc_array[(6)] = G__52279);

(invoc_array[(7)] = G__52280);

(invoc_array[(8)] = G__52281);

(invoc_array[(9)] = G__52282);

(invoc_array[(10)] = G__52283);

(invoc_array[(11)] = G__52284);

(invoc_array[(12)] = G__52285);

(invoc_array[(13)] = G__52286);

(invoc_array[(14)] = G__52287);

(invoc_array[(15)] = G__52288);

(invoc_array[(16)] = G__52289);

(invoc_array[(17)] = G__52290);

(invoc_array[vararg_idx] = G__52291);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,var_args){
var G__52291 = null;
if (arguments.length > 18) {
var G__53185__i = 0, G__53185__a = new Array(arguments.length -  18);
while (G__53185__i < G__53185__a.length) {G__53185__a[G__53185__i] = arguments[G__53185__i + 18]; ++G__53185__i;}
  G__52291 = new cljs.core.IndexedSeq(G__53185__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__53186){
var G__52273 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52274 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52275 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52276 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52277 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52278 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52279 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52280 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52281 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52282 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52283 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52284 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52285 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52286 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52287 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52288 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52289 = cljs.core.first(arglist__53186);
arglist__53186 = cljs.core.next(arglist__53186);
var G__52290 = cljs.core.first(arglist__53186);
var G__52291 = cljs.core.rest(arglist__53186);
return sci$impl$fns$fun_$_arity_18__delegate(G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__52337 = cljs.core._nth(params,(0));
var G__52338 = cljs.core._nth(params,(1));
var G__52339 = cljs.core._nth(params,(2));
var G__52340 = cljs.core._nth(params,(3));
var G__52341 = cljs.core._nth(params,(4));
var G__52342 = cljs.core._nth(params,(5));
var G__52343 = cljs.core._nth(params,(6));
var G__52344 = cljs.core._nth(params,(7));
var G__52345 = cljs.core._nth(params,(8));
var G__52346 = cljs.core._nth(params,(9));
var G__52347 = cljs.core._nth(params,(10));
var G__52348 = cljs.core._nth(params,(11));
var G__52349 = cljs.core._nth(params,(12));
var G__52350 = cljs.core._nth(params,(13));
var G__52351 = cljs.core._nth(params,(14));
var G__52352 = cljs.core._nth(params,(15));
var G__52353 = cljs.core._nth(params,(16));
var G__52354 = cljs.core._nth(params,(17));
var G__52355 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335,G__52336){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52317);

(invoc_array[(1)] = G__52318);

(invoc_array[(2)] = G__52319);

(invoc_array[(3)] = G__52320);

(invoc_array[(4)] = G__52321);

(invoc_array[(5)] = G__52322);

(invoc_array[(6)] = G__52323);

(invoc_array[(7)] = G__52324);

(invoc_array[(8)] = G__52325);

(invoc_array[(9)] = G__52326);

(invoc_array[(10)] = G__52327);

(invoc_array[(11)] = G__52328);

(invoc_array[(12)] = G__52329);

(invoc_array[(13)] = G__52330);

(invoc_array[(14)] = G__52331);

(invoc_array[(15)] = G__52332);

(invoc_array[(16)] = G__52333);

(invoc_array[(17)] = G__52334);

(invoc_array[(18)] = G__52335);

(invoc_array[vararg_idx] = G__52336);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335,var_args){
var G__52336 = null;
if (arguments.length > 19) {
var G__53190__i = 0, G__53190__a = new Array(arguments.length -  19);
while (G__53190__i < G__53190__a.length) {G__53190__a[G__53190__i] = arguments[G__53190__i + 19]; ++G__53190__i;}
  G__52336 = new cljs.core.IndexedSeq(G__53190__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335,G__52336);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__53191){
var G__52317 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52318 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52319 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52320 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52321 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52322 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52323 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52324 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52325 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52326 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52327 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52328 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52329 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52330 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52331 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52332 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52333 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52334 = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var G__52335 = cljs.core.first(arglist__53191);
var G__52336 = cljs.core.rest(arglist__53191);
return sci$impl$fns$fun_$_arity_19__delegate(G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335,G__52336);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__52381 = cljs.core._nth(params,(0));
var G__52382 = cljs.core._nth(params,(1));
var G__52383 = cljs.core._nth(params,(2));
var G__52384 = cljs.core._nth(params,(3));
var G__52385 = cljs.core._nth(params,(4));
var G__52386 = cljs.core._nth(params,(5));
var G__52387 = cljs.core._nth(params,(6));
var G__52388 = cljs.core._nth(params,(7));
var G__52389 = cljs.core._nth(params,(8));
var G__52390 = cljs.core._nth(params,(9));
var G__52391 = cljs.core._nth(params,(10));
var G__52392 = cljs.core._nth(params,(11));
var G__52393 = cljs.core._nth(params,(12));
var G__52394 = cljs.core._nth(params,(13));
var G__52395 = cljs.core._nth(params,(14));
var G__52396 = cljs.core._nth(params,(15));
var G__52397 = cljs.core._nth(params,(16));
var G__52398 = cljs.core._nth(params,(17));
var G__52399 = cljs.core._nth(params,(18));
var G__52400 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__52360,G__52361,G__52362,G__52363,G__52364,G__52365,G__52366,G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,G__52380){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52360);

(invoc_array[(1)] = G__52361);

(invoc_array[(2)] = G__52362);

(invoc_array[(3)] = G__52363);

(invoc_array[(4)] = G__52364);

(invoc_array[(5)] = G__52365);

(invoc_array[(6)] = G__52366);

(invoc_array[(7)] = G__52367);

(invoc_array[(8)] = G__52368);

(invoc_array[(9)] = G__52369);

(invoc_array[(10)] = G__52370);

(invoc_array[(11)] = G__52371);

(invoc_array[(12)] = G__52372);

(invoc_array[(13)] = G__52373);

(invoc_array[(14)] = G__52374);

(invoc_array[(15)] = G__52375);

(invoc_array[(16)] = G__52376);

(invoc_array[(17)] = G__52377);

(invoc_array[(18)] = G__52378);

(invoc_array[(19)] = G__52379);

(invoc_array[vararg_idx] = G__52380);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__52360,G__52361,G__52362,G__52363,G__52364,G__52365,G__52366,G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,var_args){
var G__52380 = null;
if (arguments.length > 20) {
var G__53199__i = 0, G__53199__a = new Array(arguments.length -  20);
while (G__53199__i < G__53199__a.length) {G__53199__a[G__53199__i] = arguments[G__53199__i + 20]; ++G__53199__i;}
  G__52380 = new cljs.core.IndexedSeq(G__53199__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__52360,G__52361,G__52362,G__52363,G__52364,G__52365,G__52366,G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,G__52380);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__53201){
var G__52360 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52361 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52362 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52363 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52364 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52365 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52366 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52367 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52368 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52369 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52370 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52371 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52372 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52373 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52374 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52375 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52376 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52377 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52378 = cljs.core.first(arglist__53201);
arglist__53201 = cljs.core.next(arglist__53201);
var G__52379 = cljs.core.first(arglist__53201);
var G__52380 = cljs.core.rest(arglist__53201);
return sci$impl$fns$fun_$_arity_20__delegate(G__52360,G__52361,G__52362,G__52363,G__52364,G__52365,G__52366,G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,G__52380);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51888)].join('')));

}
})():(function (){var G__52404 = (fixed_arity | (0));
switch (G__52404) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__50813__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50813__auto__)){
continue;
} else {
return ret__50813__auto__;
}
break;
}
});

break;
case (1):
var G__52407 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__52406){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52406);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (2):
var G__52410 = cljs.core._nth(params,(0));
var G__52411 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__52408,G__52409){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52408);

(invoc_array[(1)] = G__52409);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (3):
var G__52422 = cljs.core._nth(params,(0));
var G__52423 = cljs.core._nth(params,(1));
var G__52424 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__52419,G__52420,G__52421){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52419);

(invoc_array[(1)] = G__52420);

(invoc_array[(2)] = G__52421);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (4):
var G__52434 = cljs.core._nth(params,(0));
var G__52435 = cljs.core._nth(params,(1));
var G__52436 = cljs.core._nth(params,(2));
var G__52437 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__52430,G__52431,G__52432,G__52433){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52430);

(invoc_array[(1)] = G__52431);

(invoc_array[(2)] = G__52432);

(invoc_array[(3)] = G__52433);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (5):
var G__52446 = cljs.core._nth(params,(0));
var G__52447 = cljs.core._nth(params,(1));
var G__52448 = cljs.core._nth(params,(2));
var G__52449 = cljs.core._nth(params,(3));
var G__52450 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__52441,G__52442,G__52443,G__52444,G__52445){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52441);

(invoc_array[(1)] = G__52442);

(invoc_array[(2)] = G__52443);

(invoc_array[(3)] = G__52444);

(invoc_array[(4)] = G__52445);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (6):
var G__52465 = cljs.core._nth(params,(0));
var G__52466 = cljs.core._nth(params,(1));
var G__52467 = cljs.core._nth(params,(2));
var G__52468 = cljs.core._nth(params,(3));
var G__52469 = cljs.core._nth(params,(4));
var G__52470 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__52459,G__52460,G__52461,G__52462,G__52463,G__52464){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52459);

(invoc_array[(1)] = G__52460);

(invoc_array[(2)] = G__52461);

(invoc_array[(3)] = G__52462);

(invoc_array[(4)] = G__52463);

(invoc_array[(5)] = G__52464);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (7):
var G__52485 = cljs.core._nth(params,(0));
var G__52486 = cljs.core._nth(params,(1));
var G__52487 = cljs.core._nth(params,(2));
var G__52488 = cljs.core._nth(params,(3));
var G__52489 = cljs.core._nth(params,(4));
var G__52490 = cljs.core._nth(params,(5));
var G__52491 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__52478,G__52479,G__52480,G__52481,G__52482,G__52483,G__52484){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52478);

(invoc_array[(1)] = G__52479);

(invoc_array[(2)] = G__52480);

(invoc_array[(3)] = G__52481);

(invoc_array[(4)] = G__52482);

(invoc_array[(5)] = G__52483);

(invoc_array[(6)] = G__52484);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (8):
var G__52507 = cljs.core._nth(params,(0));
var G__52508 = cljs.core._nth(params,(1));
var G__52509 = cljs.core._nth(params,(2));
var G__52510 = cljs.core._nth(params,(3));
var G__52511 = cljs.core._nth(params,(4));
var G__52512 = cljs.core._nth(params,(5));
var G__52513 = cljs.core._nth(params,(6));
var G__52514 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__52499,G__52500,G__52501,G__52502,G__52503,G__52504,G__52505,G__52506){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52499);

(invoc_array[(1)] = G__52500);

(invoc_array[(2)] = G__52501);

(invoc_array[(3)] = G__52502);

(invoc_array[(4)] = G__52503);

(invoc_array[(5)] = G__52504);

(invoc_array[(6)] = G__52505);

(invoc_array[(7)] = G__52506);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (9):
var G__52553 = cljs.core._nth(params,(0));
var G__52554 = cljs.core._nth(params,(1));
var G__52555 = cljs.core._nth(params,(2));
var G__52556 = cljs.core._nth(params,(3));
var G__52557 = cljs.core._nth(params,(4));
var G__52558 = cljs.core._nth(params,(5));
var G__52559 = cljs.core._nth(params,(6));
var G__52560 = cljs.core._nth(params,(7));
var G__52561 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__52544,G__52545,G__52546,G__52547,G__52548,G__52549,G__52550,G__52551,G__52552){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52544);

(invoc_array[(1)] = G__52545);

(invoc_array[(2)] = G__52546);

(invoc_array[(3)] = G__52547);

(invoc_array[(4)] = G__52548);

(invoc_array[(5)] = G__52549);

(invoc_array[(6)] = G__52550);

(invoc_array[(7)] = G__52551);

(invoc_array[(8)] = G__52552);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (10):
var G__52576 = cljs.core._nth(params,(0));
var G__52578 = cljs.core._nth(params,(1));
var G__52579 = cljs.core._nth(params,(2));
var G__52580 = cljs.core._nth(params,(3));
var G__52581 = cljs.core._nth(params,(4));
var G__52582 = cljs.core._nth(params,(5));
var G__52583 = cljs.core._nth(params,(6));
var G__52584 = cljs.core._nth(params,(7));
var G__52585 = cljs.core._nth(params,(8));
var G__52586 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__52566,G__52567,G__52568,G__52569,G__52570,G__52571,G__52572,G__52573,G__52574,G__52575){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52566);

(invoc_array[(1)] = G__52567);

(invoc_array[(2)] = G__52568);

(invoc_array[(3)] = G__52569);

(invoc_array[(4)] = G__52570);

(invoc_array[(5)] = G__52571);

(invoc_array[(6)] = G__52572);

(invoc_array[(7)] = G__52573);

(invoc_array[(8)] = G__52574);

(invoc_array[(9)] = G__52575);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (11):
var G__52604 = cljs.core._nth(params,(0));
var G__52605 = cljs.core._nth(params,(1));
var G__52606 = cljs.core._nth(params,(2));
var G__52607 = cljs.core._nth(params,(3));
var G__52608 = cljs.core._nth(params,(4));
var G__52609 = cljs.core._nth(params,(5));
var G__52610 = cljs.core._nth(params,(6));
var G__52611 = cljs.core._nth(params,(7));
var G__52612 = cljs.core._nth(params,(8));
var G__52613 = cljs.core._nth(params,(9));
var G__52614 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__52593,G__52594,G__52595,G__52596,G__52597,G__52598,G__52599,G__52600,G__52601,G__52602,G__52603){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52593);

(invoc_array[(1)] = G__52594);

(invoc_array[(2)] = G__52595);

(invoc_array[(3)] = G__52596);

(invoc_array[(4)] = G__52597);

(invoc_array[(5)] = G__52598);

(invoc_array[(6)] = G__52599);

(invoc_array[(7)] = G__52600);

(invoc_array[(8)] = G__52601);

(invoc_array[(9)] = G__52602);

(invoc_array[(10)] = G__52603);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (12):
var G__52640 = cljs.core._nth(params,(0));
var G__52641 = cljs.core._nth(params,(1));
var G__52642 = cljs.core._nth(params,(2));
var G__52643 = cljs.core._nth(params,(3));
var G__52644 = cljs.core._nth(params,(4));
var G__52645 = cljs.core._nth(params,(5));
var G__52646 = cljs.core._nth(params,(6));
var G__52647 = cljs.core._nth(params,(7));
var G__52648 = cljs.core._nth(params,(8));
var G__52649 = cljs.core._nth(params,(9));
var G__52650 = cljs.core._nth(params,(10));
var G__52651 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__52628,G__52629,G__52630,G__52631,G__52632,G__52633,G__52634,G__52635,G__52636,G__52637,G__52638,G__52639){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52628);

(invoc_array[(1)] = G__52629);

(invoc_array[(2)] = G__52630);

(invoc_array[(3)] = G__52631);

(invoc_array[(4)] = G__52632);

(invoc_array[(5)] = G__52633);

(invoc_array[(6)] = G__52634);

(invoc_array[(7)] = G__52635);

(invoc_array[(8)] = G__52636);

(invoc_array[(9)] = G__52637);

(invoc_array[(10)] = G__52638);

(invoc_array[(11)] = G__52639);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (13):
var G__52676 = cljs.core._nth(params,(0));
var G__52677 = cljs.core._nth(params,(1));
var G__52678 = cljs.core._nth(params,(2));
var G__52679 = cljs.core._nth(params,(3));
var G__52680 = cljs.core._nth(params,(4));
var G__52681 = cljs.core._nth(params,(5));
var G__52682 = cljs.core._nth(params,(6));
var G__52683 = cljs.core._nth(params,(7));
var G__52684 = cljs.core._nth(params,(8));
var G__52685 = cljs.core._nth(params,(9));
var G__52686 = cljs.core._nth(params,(10));
var G__52687 = cljs.core._nth(params,(11));
var G__52688 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__52663,G__52664,G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52673,G__52674,G__52675){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52663);

(invoc_array[(1)] = G__52664);

(invoc_array[(2)] = G__52665);

(invoc_array[(3)] = G__52666);

(invoc_array[(4)] = G__52667);

(invoc_array[(5)] = G__52668);

(invoc_array[(6)] = G__52669);

(invoc_array[(7)] = G__52670);

(invoc_array[(8)] = G__52671);

(invoc_array[(9)] = G__52672);

(invoc_array[(10)] = G__52673);

(invoc_array[(11)] = G__52674);

(invoc_array[(12)] = G__52675);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (14):
var G__52732 = cljs.core._nth(params,(0));
var G__52733 = cljs.core._nth(params,(1));
var G__52734 = cljs.core._nth(params,(2));
var G__52735 = cljs.core._nth(params,(3));
var G__52736 = cljs.core._nth(params,(4));
var G__52737 = cljs.core._nth(params,(5));
var G__52738 = cljs.core._nth(params,(6));
var G__52739 = cljs.core._nth(params,(7));
var G__52740 = cljs.core._nth(params,(8));
var G__52741 = cljs.core._nth(params,(9));
var G__52742 = cljs.core._nth(params,(10));
var G__52743 = cljs.core._nth(params,(11));
var G__52744 = cljs.core._nth(params,(12));
var G__52745 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__52718,G__52719,G__52720,G__52721,G__52722,G__52723,G__52724,G__52725,G__52726,G__52727,G__52728,G__52729,G__52730,G__52731){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52718);

(invoc_array[(1)] = G__52719);

(invoc_array[(2)] = G__52720);

(invoc_array[(3)] = G__52721);

(invoc_array[(4)] = G__52722);

(invoc_array[(5)] = G__52723);

(invoc_array[(6)] = G__52724);

(invoc_array[(7)] = G__52725);

(invoc_array[(8)] = G__52726);

(invoc_array[(9)] = G__52727);

(invoc_array[(10)] = G__52728);

(invoc_array[(11)] = G__52729);

(invoc_array[(12)] = G__52730);

(invoc_array[(13)] = G__52731);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (15):
var G__52789 = cljs.core._nth(params,(0));
var G__52790 = cljs.core._nth(params,(1));
var G__52791 = cljs.core._nth(params,(2));
var G__52792 = cljs.core._nth(params,(3));
var G__52793 = cljs.core._nth(params,(4));
var G__52794 = cljs.core._nth(params,(5));
var G__52795 = cljs.core._nth(params,(6));
var G__52796 = cljs.core._nth(params,(7));
var G__52797 = cljs.core._nth(params,(8));
var G__52798 = cljs.core._nth(params,(9));
var G__52799 = cljs.core._nth(params,(10));
var G__52800 = cljs.core._nth(params,(11));
var G__52801 = cljs.core._nth(params,(12));
var G__52802 = cljs.core._nth(params,(13));
var G__52803 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__52774,G__52775,G__52776,G__52777,G__52778,G__52779,G__52780,G__52781,G__52782,G__52783,G__52784,G__52785,G__52786,G__52787,G__52788){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52774);

(invoc_array[(1)] = G__52775);

(invoc_array[(2)] = G__52776);

(invoc_array[(3)] = G__52777);

(invoc_array[(4)] = G__52778);

(invoc_array[(5)] = G__52779);

(invoc_array[(6)] = G__52780);

(invoc_array[(7)] = G__52781);

(invoc_array[(8)] = G__52782);

(invoc_array[(9)] = G__52783);

(invoc_array[(10)] = G__52784);

(invoc_array[(11)] = G__52785);

(invoc_array[(12)] = G__52786);

(invoc_array[(13)] = G__52787);

(invoc_array[(14)] = G__52788);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (16):
var G__52852 = cljs.core._nth(params,(0));
var G__52853 = cljs.core._nth(params,(1));
var G__52854 = cljs.core._nth(params,(2));
var G__52855 = cljs.core._nth(params,(3));
var G__52856 = cljs.core._nth(params,(4));
var G__52857 = cljs.core._nth(params,(5));
var G__52858 = cljs.core._nth(params,(6));
var G__52859 = cljs.core._nth(params,(7));
var G__52860 = cljs.core._nth(params,(8));
var G__52861 = cljs.core._nth(params,(9));
var G__52862 = cljs.core._nth(params,(10));
var G__52863 = cljs.core._nth(params,(11));
var G__52864 = cljs.core._nth(params,(12));
var G__52865 = cljs.core._nth(params,(13));
var G__52866 = cljs.core._nth(params,(14));
var G__52867 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__52836,G__52837,G__52838,G__52839,G__52840,G__52841,G__52842,G__52843,G__52844,G__52845,G__52846,G__52847,G__52848,G__52849,G__52850,G__52851){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52836);

(invoc_array[(1)] = G__52837);

(invoc_array[(2)] = G__52838);

(invoc_array[(3)] = G__52839);

(invoc_array[(4)] = G__52840);

(invoc_array[(5)] = G__52841);

(invoc_array[(6)] = G__52842);

(invoc_array[(7)] = G__52843);

(invoc_array[(8)] = G__52844);

(invoc_array[(9)] = G__52845);

(invoc_array[(10)] = G__52846);

(invoc_array[(11)] = G__52847);

(invoc_array[(12)] = G__52848);

(invoc_array[(13)] = G__52849);

(invoc_array[(14)] = G__52850);

(invoc_array[(15)] = G__52851);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (17):
var G__52894 = cljs.core._nth(params,(0));
var G__52895 = cljs.core._nth(params,(1));
var G__52896 = cljs.core._nth(params,(2));
var G__52897 = cljs.core._nth(params,(3));
var G__52898 = cljs.core._nth(params,(4));
var G__52899 = cljs.core._nth(params,(5));
var G__52900 = cljs.core._nth(params,(6));
var G__52901 = cljs.core._nth(params,(7));
var G__52902 = cljs.core._nth(params,(8));
var G__52903 = cljs.core._nth(params,(9));
var G__52904 = cljs.core._nth(params,(10));
var G__52905 = cljs.core._nth(params,(11));
var G__52906 = cljs.core._nth(params,(12));
var G__52907 = cljs.core._nth(params,(13));
var G__52908 = cljs.core._nth(params,(14));
var G__52909 = cljs.core._nth(params,(15));
var G__52910 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__52877,G__52878,G__52879,G__52880,G__52881,G__52882,G__52883,G__52884,G__52885,G__52886,G__52887,G__52888,G__52889,G__52890,G__52891,G__52892,G__52893){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52877);

(invoc_array[(1)] = G__52878);

(invoc_array[(2)] = G__52879);

(invoc_array[(3)] = G__52880);

(invoc_array[(4)] = G__52881);

(invoc_array[(5)] = G__52882);

(invoc_array[(6)] = G__52883);

(invoc_array[(7)] = G__52884);

(invoc_array[(8)] = G__52885);

(invoc_array[(9)] = G__52886);

(invoc_array[(10)] = G__52887);

(invoc_array[(11)] = G__52888);

(invoc_array[(12)] = G__52889);

(invoc_array[(13)] = G__52890);

(invoc_array[(14)] = G__52891);

(invoc_array[(15)] = G__52892);

(invoc_array[(16)] = G__52893);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (18):
var G__52936 = cljs.core._nth(params,(0));
var G__52937 = cljs.core._nth(params,(1));
var G__52938 = cljs.core._nth(params,(2));
var G__52939 = cljs.core._nth(params,(3));
var G__52940 = cljs.core._nth(params,(4));
var G__52941 = cljs.core._nth(params,(5));
var G__52942 = cljs.core._nth(params,(6));
var G__52943 = cljs.core._nth(params,(7));
var G__52944 = cljs.core._nth(params,(8));
var G__52945 = cljs.core._nth(params,(9));
var G__52946 = cljs.core._nth(params,(10));
var G__52947 = cljs.core._nth(params,(11));
var G__52948 = cljs.core._nth(params,(12));
var G__52949 = cljs.core._nth(params,(13));
var G__52950 = cljs.core._nth(params,(14));
var G__52951 = cljs.core._nth(params,(15));
var G__52952 = cljs.core._nth(params,(16));
var G__52953 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__52918,G__52919,G__52920,G__52921,G__52922,G__52923,G__52924,G__52925,G__52926,G__52927,G__52928,G__52929,G__52930,G__52931,G__52932,G__52933,G__52934,G__52935){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52918);

(invoc_array[(1)] = G__52919);

(invoc_array[(2)] = G__52920);

(invoc_array[(3)] = G__52921);

(invoc_array[(4)] = G__52922);

(invoc_array[(5)] = G__52923);

(invoc_array[(6)] = G__52924);

(invoc_array[(7)] = G__52925);

(invoc_array[(8)] = G__52926);

(invoc_array[(9)] = G__52927);

(invoc_array[(10)] = G__52928);

(invoc_array[(11)] = G__52929);

(invoc_array[(12)] = G__52930);

(invoc_array[(13)] = G__52931);

(invoc_array[(14)] = G__52932);

(invoc_array[(15)] = G__52933);

(invoc_array[(16)] = G__52934);

(invoc_array[(17)] = G__52935);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (19):
var G__52976 = cljs.core._nth(params,(0));
var G__52977 = cljs.core._nth(params,(1));
var G__52978 = cljs.core._nth(params,(2));
var G__52979 = cljs.core._nth(params,(3));
var G__52980 = cljs.core._nth(params,(4));
var G__52981 = cljs.core._nth(params,(5));
var G__52982 = cljs.core._nth(params,(6));
var G__52983 = cljs.core._nth(params,(7));
var G__52984 = cljs.core._nth(params,(8));
var G__52985 = cljs.core._nth(params,(9));
var G__52986 = cljs.core._nth(params,(10));
var G__52987 = cljs.core._nth(params,(11));
var G__52988 = cljs.core._nth(params,(12));
var G__52989 = cljs.core._nth(params,(13));
var G__52990 = cljs.core._nth(params,(14));
var G__52991 = cljs.core._nth(params,(15));
var G__52992 = cljs.core._nth(params,(16));
var G__52993 = cljs.core._nth(params,(17));
var G__52994 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__52957,G__52958,G__52959,G__52960,G__52961,G__52962,G__52963,G__52964,G__52965,G__52966,G__52967,G__52968,G__52969,G__52970,G__52971,G__52972,G__52973,G__52974,G__52975){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52957);

(invoc_array[(1)] = G__52958);

(invoc_array[(2)] = G__52959);

(invoc_array[(3)] = G__52960);

(invoc_array[(4)] = G__52961);

(invoc_array[(5)] = G__52962);

(invoc_array[(6)] = G__52963);

(invoc_array[(7)] = G__52964);

(invoc_array[(8)] = G__52965);

(invoc_array[(9)] = G__52966);

(invoc_array[(10)] = G__52967);

(invoc_array[(11)] = G__52968);

(invoc_array[(12)] = G__52969);

(invoc_array[(13)] = G__52970);

(invoc_array[(14)] = G__52971);

(invoc_array[(15)] = G__52972);

(invoc_array[(16)] = G__52973);

(invoc_array[(17)] = G__52974);

(invoc_array[(18)] = G__52975);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
case (20):
var G__53023 = cljs.core._nth(params,(0));
var G__53024 = cljs.core._nth(params,(1));
var G__53025 = cljs.core._nth(params,(2));
var G__53026 = cljs.core._nth(params,(3));
var G__53027 = cljs.core._nth(params,(4));
var G__53028 = cljs.core._nth(params,(5));
var G__53029 = cljs.core._nth(params,(6));
var G__53030 = cljs.core._nth(params,(7));
var G__53031 = cljs.core._nth(params,(8));
var G__53032 = cljs.core._nth(params,(9));
var G__53033 = cljs.core._nth(params,(10));
var G__53034 = cljs.core._nth(params,(11));
var G__53035 = cljs.core._nth(params,(12));
var G__53036 = cljs.core._nth(params,(13));
var G__53037 = cljs.core._nth(params,(14));
var G__53038 = cljs.core._nth(params,(15));
var G__53039 = cljs.core._nth(params,(16));
var G__53040 = cljs.core._nth(params,(17));
var G__53041 = cljs.core._nth(params,(18));
var G__53042 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__53003,G__53004,G__53005,G__53006,G__53007,G__53008,G__53009,G__53010,G__53011,G__53012,G__53013,G__53014,G__53015,G__53016,G__53017,G__53018,G__53019,G__53020,G__53021,G__53022){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53003);

(invoc_array[(1)] = G__53004);

(invoc_array[(2)] = G__53005);

(invoc_array[(3)] = G__53006);

(invoc_array[(4)] = G__53007);

(invoc_array[(5)] = G__53008);

(invoc_array[(6)] = G__53009);

(invoc_array[(7)] = G__53010);

(invoc_array[(8)] = G__53011);

(invoc_array[(9)] = G__53012);

(invoc_array[(10)] = G__53013);

(invoc_array[(11)] = G__53014);

(invoc_array[(12)] = G__53015);

(invoc_array[(13)] = G__53016);

(invoc_array[(14)] = G__53017);

(invoc_array[(15)] = G__53018);

(invoc_array[(16)] = G__53019);

(invoc_array[(17)] = G__53020);

(invoc_array[(18)] = G__53021);

(invoc_array[(19)] = G__53022);

while(true){
var ret__50814__auto__ = sci.impl.evaluator.eval(ctx,invoc_array,body);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50814__auto__)){
continue;
} else {
return ret__50814__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52404)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__53259__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__53259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53261__i = 0, G__53261__a = new Array(arguments.length -  0);
while (G__53261__i < G__53261__a.length) {G__53261__a[G__53261__i] = arguments[G__53261__i + 0]; ++G__53261__i;}
  args = new cljs.core.IndexedSeq(G__53261__a,0,null);
} 
return G__53259__delegate.call(this,args);};
G__53259.cljs$lang$maxFixedArity = 0;
G__53259.cljs$lang$applyTo = (function (arglist__53262){
var args = cljs.core.seq(arglist__53262);
return G__53259__delegate(args);
});
G__53259.cljs$core$IFn$_invoke$arity$variadic = G__53259__delegate;
return G__53259;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__53048_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__53048_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
