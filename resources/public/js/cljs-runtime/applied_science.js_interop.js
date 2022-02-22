goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52517 = arguments.length;
var i__4865__auto___52518 = (0);
while(true){
if((i__4865__auto___52518 < len__4864__auto___52517)){
args__4870__auto__.push((arguments[i__4865__auto___52518]));

var G__52520 = (i__4865__auto___52518 + (1));
i__4865__auto___52518 = G__52520;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__51884_52522 = keyvals;
var vec__51885_52523 = G__51884_52522;
var seq__51886_52524 = cljs.core.seq(vec__51885_52523);
var first__51887_52525 = cljs.core.first(seq__51886_52524);
var seq__51886_52526__$1 = cljs.core.next(seq__51886_52524);
var k_52527 = first__51887_52525;
var first__51887_52528__$1 = cljs.core.first(seq__51886_52526__$1);
var seq__51886_52529__$2 = cljs.core.next(seq__51886_52526__$1);
var v_52530 = first__51887_52528__$1;
var keyvals_52531__$1 = seq__51886_52529__$2;
var G__51884_52533__$1 = G__51884_52522;
while(true){
var vec__51889_52535 = G__51884_52533__$1;
var seq__51890_52536 = cljs.core.seq(vec__51889_52535);
var first__51891_52537 = cljs.core.first(seq__51890_52536);
var seq__51890_52538__$1 = cljs.core.next(seq__51890_52536);
var k_52539__$1 = first__51891_52537;
var first__51891_52540__$1 = cljs.core.first(seq__51890_52538__$1);
var seq__51890_52541__$2 = cljs.core.next(seq__51890_52538__$1);
var v_52542__$1 = first__51891_52540__$1;
var keyvals_52543__$2 = seq__51890_52541__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_52539__$1)] = v_52542__$1);

if(keyvals_52543__$2){
var G__52563 = keyvals_52543__$2;
G__51884_52533__$1 = G__52563;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq51873){
var G__51874 = cljs.core.first(seq51873);
var seq51873__$1 = cljs.core.next(seq51873);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51874,seq51873__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__51902 = arguments.length;
switch (G__51902) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj51912 = obj;
if((!((obj51912 == null)))){
return (obj51912[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj51922 = obj;
if((!((obj51922 == null)))){
return (obj51922[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__50050__auto__ = (function (){var obj51923 = obj;
if((!((obj51923 == null)))){
return (obj51923[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__50050__auto__)){
return not_found;
} else {
return val__50050__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__51937 = arguments.length;
switch (G__51937) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj52005 = self__.obj;
if((!((obj52005 == null)))){
return (obj52005[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__50050__auto__ = (function (){var obj52006 = self__.obj;
if((!((obj52006 == null)))){
return (obj52006[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__50050__auto__)){
return not_found;
} else {
return val__50050__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52616 = arguments.length;
var i__4865__auto___52618 = (0);
while(true){
if((i__4865__auto___52618 < len__4864__auto___52616)){
args__4870__auto__.push((arguments[i__4865__auto___52618]));

var G__52619 = (i__4865__auto___52618 + (1));
i__4865__auto___52618 = G__52619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__52057 = keyvals;
var vec__52083 = G__52057;
var seq__52084 = cljs.core.seq(vec__52083);
var first__52085 = cljs.core.first(seq__52084);
var seq__52084__$1 = cljs.core.next(seq__52084);
var k = first__52085;
var first__52085__$1 = cljs.core.first(seq__52084__$1);
var seq__52084__$2 = cljs.core.next(seq__52084__$1);
var v = first__52085__$1;
var kvs = seq__52084__$2;
var G__52057__$1 = G__52057;
while(true){
var vec__52086 = G__52057__$1;
var seq__52087 = cljs.core.seq(vec__52086);
var first__52088 = cljs.core.first(seq__52087);
var seq__52087__$1 = cljs.core.next(seq__52087);
var k__$1 = first__52088;
var first__52088__$1 = cljs.core.first(seq__52087__$1);
var seq__52087__$2 = cljs.core.next(seq__52087__$1);
var v__$1 = first__52088__$1;
var kvs__$1 = seq__52087__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__52620 = kvs__$1;
G__52057__$1 = G__52620;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq52052){
var G__52053 = cljs.core.first(seq52052);
var seq52052__$1 = cljs.core.next(seq52052);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52053,seq52052__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52625 = arguments.length;
var i__4865__auto___52626 = (0);
while(true){
if((i__4865__auto___52626 < len__4864__auto___52625)){
args__4870__auto__.push((arguments[i__4865__auto___52626]));

var G__52627 = (i__4865__auto___52626 + (1));
i__4865__auto___52626 = G__52627;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq52119){
var G__52120 = cljs.core.first(seq52119);
var seq52119__$1 = cljs.core.next(seq52119);
var G__52121 = cljs.core.first(seq52119__$1);
var seq52119__$2 = cljs.core.next(seq52119__$1);
var G__52122 = cljs.core.first(seq52119__$2);
var seq52119__$3 = cljs.core.next(seq52119__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52120,G__52121,G__52122,seq52119__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52656 = arguments.length;
var i__4865__auto___52658 = (0);
while(true){
if((i__4865__auto___52658 < len__4864__auto___52656)){
args__4870__auto__.push((arguments[i__4865__auto___52658]));

var G__52659 = (i__4865__auto___52658 + (1));
i__4865__auto___52658 = G__52659;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq52159){
var G__52160 = cljs.core.first(seq52159);
var seq52159__$1 = cljs.core.next(seq52159);
var G__52161 = cljs.core.first(seq52159__$1);
var seq52159__$2 = cljs.core.next(seq52159__$1);
var G__52162 = cljs.core.first(seq52159__$2);
var seq52159__$3 = cljs.core.next(seq52159__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52160,G__52161,G__52162,seq52159__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__52199 = arguments.length;
switch (G__52199) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___52690 = arguments.length;
var i__4865__auto___52691 = (0);
while(true){
if((i__4865__auto___52691 < len__4864__auto___52690)){
args_arr__4885__auto__.push((arguments[i__4865__auto___52691]));

var G__52692 = (i__4865__auto___52691 + (1));
i__4865__auto___52691 = G__52692;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__52233_52695 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__52234_52696 = null;
var count__52235_52697 = (0);
var i__52236_52698 = (0);
while(true){
if((i__52236_52698 < count__52235_52697)){
var k_52699 = chunk__52234_52696.cljs$core$IIndexed$_nth$arity$2(null,i__52236_52698);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52699,applied_science.js_interop.unchecked_get(x,k_52699)], 0));


var G__52701 = seq__52233_52695;
var G__52702 = chunk__52234_52696;
var G__52703 = count__52235_52697;
var G__52704 = (i__52236_52698 + (1));
seq__52233_52695 = G__52701;
chunk__52234_52696 = G__52702;
count__52235_52697 = G__52703;
i__52236_52698 = G__52704;
continue;
} else {
var temp__5753__auto___52705 = cljs.core.seq(seq__52233_52695);
if(temp__5753__auto___52705){
var seq__52233_52706__$1 = temp__5753__auto___52705;
if(cljs.core.chunked_seq_QMARK_(seq__52233_52706__$1)){
var c__4679__auto___52707 = cljs.core.chunk_first(seq__52233_52706__$1);
var G__52708 = cljs.core.chunk_rest(seq__52233_52706__$1);
var G__52709 = c__4679__auto___52707;
var G__52710 = cljs.core.count(c__4679__auto___52707);
var G__52711 = (0);
seq__52233_52695 = G__52708;
chunk__52234_52696 = G__52709;
count__52235_52697 = G__52710;
i__52236_52698 = G__52711;
continue;
} else {
var k_52712 = cljs.core.first(seq__52233_52706__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52712,applied_science.js_interop.unchecked_get(x,k_52712)], 0));


var G__52713 = cljs.core.next(seq__52233_52706__$1);
var G__52714 = null;
var G__52715 = (0);
var G__52716 = (0);
seq__52233_52695 = G__52713;
chunk__52234_52696 = G__52714;
count__52235_52697 = G__52715;
i__52236_52698 = G__52716;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq52196){
var G__52197 = cljs.core.first(seq52196);
var seq52196__$1 = cljs.core.next(seq52196);
var G__52198 = cljs.core.first(seq52196__$1);
var seq52196__$2 = cljs.core.next(seq52196__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52197,G__52198,seq52196__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__52311 = array;
G__52311.push(x);

return G__52311;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__52313 = array;
G__52313.unshift(x);

return G__52313;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52749 = arguments.length;
var i__4865__auto___52750 = (0);
while(true){
if((i__4865__auto___52750 < len__4864__auto___52749)){
args__4870__auto__.push((arguments[i__4865__auto___52750]));

var G__52751 = (i__4865__auto___52750 + (1));
i__4865__auto___52750 = G__52751;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj52356 = obj;
if((!((obj52356 == null)))){
return (obj52356[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq52314){
var G__52315 = cljs.core.first(seq52314);
var seq52314__$1 = cljs.core.next(seq52314);
var G__52316 = cljs.core.first(seq52314__$1);
var seq52314__$2 = cljs.core.next(seq52314__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52315,G__52316,seq52314__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj52359 = obj;
if((!((obj52359 == null)))){
return (obj52359[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52760 = arguments.length;
var i__4865__auto___52761 = (0);
while(true){
if((i__4865__auto___52761 < len__4864__auto___52760)){
args__4870__auto__.push((arguments[i__4865__auto___52761]));

var G__52762 = (i__4865__auto___52761 + (1));
i__4865__auto___52761 = G__52762;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq52401){
var G__52402 = cljs.core.first(seq52401);
var seq52401__$1 = cljs.core.next(seq52401);
var G__52403 = cljs.core.first(seq52401__$1);
var seq52401__$2 = cljs.core.next(seq52401__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52402,G__52403,seq52401__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52770 = arguments.length;
var i__4865__auto___52772 = (0);
while(true){
if((i__4865__auto___52772 < len__4864__auto___52770)){
args__4870__auto__.push((arguments[i__4865__auto___52772]));

var G__52773 = (i__4865__auto___52772 + (1));
i__4865__auto___52772 = G__52773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__52415_52804 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__52416_52805 = null;
var count__52417_52806 = (0);
var i__52418_52807 = (0);
while(true){
if((i__52418_52807 < count__52417_52806)){
var vec__52471_52808 = chunk__52416_52805.cljs$core$IIndexed$_nth$arity$2(null,i__52418_52807);
var k_52809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52471_52808,(0),null);
var v_52810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52471_52808,(1),null);
var obj52474_52811 = obj;
var obj52475_52813 = (((!((obj52474_52811 == null))))?obj52474_52811:({}));
(obj52475_52813[applied_science.js_interop.impl.wrap_key(k_52809)] = v_52810);



var G__52814 = seq__52415_52804;
var G__52815 = chunk__52416_52805;
var G__52816 = count__52417_52806;
var G__52817 = (i__52418_52807 + (1));
seq__52415_52804 = G__52814;
chunk__52416_52805 = G__52815;
count__52417_52806 = G__52816;
i__52418_52807 = G__52817;
continue;
} else {
var temp__5753__auto___52818 = cljs.core.seq(seq__52415_52804);
if(temp__5753__auto___52818){
var seq__52415_52819__$1 = temp__5753__auto___52818;
if(cljs.core.chunked_seq_QMARK_(seq__52415_52819__$1)){
var c__4679__auto___52820 = cljs.core.chunk_first(seq__52415_52819__$1);
var G__52821 = cljs.core.chunk_rest(seq__52415_52819__$1);
var G__52822 = c__4679__auto___52820;
var G__52823 = cljs.core.count(c__4679__auto___52820);
var G__52824 = (0);
seq__52415_52804 = G__52821;
chunk__52416_52805 = G__52822;
count__52417_52806 = G__52823;
i__52418_52807 = G__52824;
continue;
} else {
var vec__52492_52825 = cljs.core.first(seq__52415_52819__$1);
var k_52826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52492_52825,(0),null);
var v_52827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52492_52825,(1),null);
var obj52495_52828 = obj;
var obj52496_52829 = (((!((obj52495_52828 == null))))?obj52495_52828:({}));
(obj52496_52829[applied_science.js_interop.impl.wrap_key(k_52826)] = v_52827);



var G__52830 = cljs.core.next(seq__52415_52819__$1);
var G__52831 = null;
var G__52832 = (0);
var G__52833 = (0);
seq__52415_52804 = G__52830;
chunk__52416_52805 = G__52831;
count__52417_52806 = G__52832;
i__52418_52807 = G__52833;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq52405){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52405));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
