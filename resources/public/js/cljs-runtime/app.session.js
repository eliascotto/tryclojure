goog.provide('app.session');
if((typeof app !== 'undefined') && (typeof app.session !== 'undefined') && (typeof app.session.session !== 'undefined')){
} else {
app.session.session = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
app.session.get = (function app$session$get(k){
var G__64684 = cljs.core.deref(app.session.session);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__64684) : k.call(null,G__64684));
});
app.session.set_BANG_ = (function app$session$set_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.session.session,cljs.core.assoc,k,v);
});
app.session.del_BANG_ = (function app$session$del_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.session.session,cljs.core.dissoc,k);
});
app.session.inc_BANG_ = (function app$session$inc_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.session.session,cljs.core.update,k,cljs.core.inc);
});
app.session.dec_BANG_ = (function app$session$dec_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.session.session,cljs.core.update,k,cljs.core.dec);
});

//# sourceMappingURL=app.session.js.map
