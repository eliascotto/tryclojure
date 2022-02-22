goog.provide('app.core');
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.match !== 'undefined')){
} else {
app.core.match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.core.main = (function app$core$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5751__auto__ = cljs.core.deref(app.core.match);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(m));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-col","h-full","w-full","bg-white","dark:bg-slate-900"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xl:w-[1080px]","lg:w-[980px]","md:w-[700px]","sm:w-[600px]","w-full","mx-auto","h-full","flex","flex-col","justify-between"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.common.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.common.footer], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.not_found.view], null);
}
})()], null);
});
app.core.router = reitit.core.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"view","view",1247994814),app.views.home.view], null)], null),((app.env.DEBUG)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/all",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"view","view",1247994814),app.views.all.view], null)], null):null)], null));
app.core.navigate_BANG_ = (function app$core$navigate_BANG_(new_match){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.core.match,(function (old_match){
if(cljs.core.truth_(new_match)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match));
} else {
return null;
}
}));
});
app.core.start_router_BANG_ = (function app$core$start_router_BANG_(){
return reitit.frontend.easy.start_BANG_(app.core.router,app.core.navigate_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
app.core.mount = (function app$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.main], null),document.getElementById("app"));
});
app.core.init_BANG_ = (function app$core$init_BANG_(){
app.core.start_router_BANG_();

return app.core.mount();
});
app.core.init_BANG_();

//# sourceMappingURL=app.core.js.map
