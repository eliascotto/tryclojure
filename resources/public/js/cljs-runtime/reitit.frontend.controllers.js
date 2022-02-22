goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__53662,match){
var map__53663 = p__53662;
var map__53663__$1 = cljs.core.__destructure_map(map__53663);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53663__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53663__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53663__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4251__auto__ = identity;
if(cljs.core.truth_(and__4251__auto__)){
return parameters;
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__53667(s__53668){
return (new cljs.core.LazySeq(null,(function (){
var s__53668__$1 = s__53668;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53668__$1);
if(temp__5753__auto__){
var s__53668__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53668__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53668__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53670 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53669 = (0);
while(true){
if((i__53669 < size__4651__auto__)){
var vec__53676 = cljs.core._nth(c__4650__auto__,i__53669);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53676,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53676,(1),null);
cljs.core.chunk_append(b__53670,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__53760 = (i__53669 + (1));
i__53669 = G__53760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53670),reitit$frontend$controllers$get_identity_$_iter__53667(cljs.core.chunk_rest(s__53668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53670),null);
}
} else {
var vec__53680 = cljs.core.first(s__53668__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53680,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53680,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__53667(cljs.core.rest(s__53668__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__53686 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53686) : f.call(null,G__53686));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__53722_53776 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__53723_53777 = null;
var count__53724_53778 = (0);
var i__53725_53779 = (0);
while(true){
if((i__53725_53779 < count__53724_53778)){
var controller_53784 = chunk__53723_53777.cljs$core$IIndexed$_nth$arity$2(null,i__53725_53779);
reitit.frontend.controllers.apply_controller(controller_53784,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__53785 = seq__53722_53776;
var G__53786 = chunk__53723_53777;
var G__53787 = count__53724_53778;
var G__53788 = (i__53725_53779 + (1));
seq__53722_53776 = G__53785;
chunk__53723_53777 = G__53786;
count__53724_53778 = G__53787;
i__53725_53779 = G__53788;
continue;
} else {
var temp__5753__auto___53789 = cljs.core.seq(seq__53722_53776);
if(temp__5753__auto___53789){
var seq__53722_53791__$1 = temp__5753__auto___53789;
if(cljs.core.chunked_seq_QMARK_(seq__53722_53791__$1)){
var c__4679__auto___53793 = cljs.core.chunk_first(seq__53722_53791__$1);
var G__53794 = cljs.core.chunk_rest(seq__53722_53791__$1);
var G__53795 = c__4679__auto___53793;
var G__53796 = cljs.core.count(c__4679__auto___53793);
var G__53797 = (0);
seq__53722_53776 = G__53794;
chunk__53723_53777 = G__53795;
count__53724_53778 = G__53796;
i__53725_53779 = G__53797;
continue;
} else {
var controller_53798 = cljs.core.first(seq__53722_53791__$1);
reitit.frontend.controllers.apply_controller(controller_53798,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__53800 = cljs.core.next(seq__53722_53791__$1);
var G__53801 = null;
var G__53802 = (0);
var G__53803 = (0);
seq__53722_53776 = G__53800;
chunk__53723_53777 = G__53801;
count__53724_53778 = G__53802;
i__53725_53779 = G__53803;
continue;
}
} else {
}
}
break;
}

var seq__53739_53804 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__53740_53805 = null;
var count__53741_53806 = (0);
var i__53742_53807 = (0);
while(true){
if((i__53742_53807 < count__53741_53806)){
var controller_53808 = chunk__53740_53805.cljs$core$IIndexed$_nth$arity$2(null,i__53742_53807);
reitit.frontend.controllers.apply_controller(controller_53808,new cljs.core.Keyword(null,"start","start",-355208981));


var G__53809 = seq__53739_53804;
var G__53810 = chunk__53740_53805;
var G__53811 = count__53741_53806;
var G__53812 = (i__53742_53807 + (1));
seq__53739_53804 = G__53809;
chunk__53740_53805 = G__53810;
count__53741_53806 = G__53811;
i__53742_53807 = G__53812;
continue;
} else {
var temp__5753__auto___53814 = cljs.core.seq(seq__53739_53804);
if(temp__5753__auto___53814){
var seq__53739_53815__$1 = temp__5753__auto___53814;
if(cljs.core.chunked_seq_QMARK_(seq__53739_53815__$1)){
var c__4679__auto___53816 = cljs.core.chunk_first(seq__53739_53815__$1);
var G__53817 = cljs.core.chunk_rest(seq__53739_53815__$1);
var G__53818 = c__4679__auto___53816;
var G__53819 = cljs.core.count(c__4679__auto___53816);
var G__53820 = (0);
seq__53739_53804 = G__53817;
chunk__53740_53805 = G__53818;
count__53741_53806 = G__53819;
i__53742_53807 = G__53820;
continue;
} else {
var controller_53821 = cljs.core.first(seq__53739_53815__$1);
reitit.frontend.controllers.apply_controller(controller_53821,new cljs.core.Keyword(null,"start","start",-355208981));


var G__53822 = cljs.core.next(seq__53739_53815__$1);
var G__53823 = null;
var G__53824 = (0);
var G__53825 = (0);
seq__53739_53804 = G__53822;
chunk__53740_53805 = G__53823;
count__53741_53806 = G__53824;
i__53742_53807 = G__53825;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
