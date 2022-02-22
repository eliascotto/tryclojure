goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__49704,res){
var map__49706 = p__49704;
var map__49706__$1 = cljs.core.__destructure_map(map__49706);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__49707 = res;
var G__49707__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49707,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__49707);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49707__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__49707__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__49709 = arguments.length;
switch (G__49709) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__49711,msg,handlers,timeout_after_ms){
var map__49712 = p__49711;
var map__49712__$1 = cljs.core.__destructure_map(map__49712);
var runtime = map__49712__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49969 = arguments.length;
var i__4865__auto___49970 = (0);
while(true){
if((i__4865__auto___49970 < len__4864__auto___49969)){
args__4870__auto__.push((arguments[i__4865__auto___49970]));

var G__49972 = (i__4865__auto___49970 + (1));
i__4865__auto___49970 = G__49972;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__49730,ev,args){
var map__49731 = p__49730;
var map__49731__$1 = cljs.core.__destructure_map(map__49731);
var runtime = map__49731__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49731__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__49732 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__49735 = null;
var count__49736 = (0);
var i__49737 = (0);
while(true){
if((i__49737 < count__49736)){
var ext = chunk__49735.cljs$core$IIndexed$_nth$arity$2(null,i__49737);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__49981 = seq__49732;
var G__49982 = chunk__49735;
var G__49983 = count__49736;
var G__49984 = (i__49737 + (1));
seq__49732 = G__49981;
chunk__49735 = G__49982;
count__49736 = G__49983;
i__49737 = G__49984;
continue;
} else {
var G__49985 = seq__49732;
var G__49986 = chunk__49735;
var G__49987 = count__49736;
var G__49988 = (i__49737 + (1));
seq__49732 = G__49985;
chunk__49735 = G__49986;
count__49736 = G__49987;
i__49737 = G__49988;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49732);
if(temp__5753__auto__){
var seq__49732__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49732__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49732__$1);
var G__49992 = cljs.core.chunk_rest(seq__49732__$1);
var G__49993 = c__4679__auto__;
var G__49994 = cljs.core.count(c__4679__auto__);
var G__49995 = (0);
seq__49732 = G__49992;
chunk__49735 = G__49993;
count__49736 = G__49994;
i__49737 = G__49995;
continue;
} else {
var ext = cljs.core.first(seq__49732__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50009 = cljs.core.next(seq__49732__$1);
var G__50010 = null;
var G__50011 = (0);
var G__50012 = (0);
seq__49732 = G__50009;
chunk__49735 = G__50010;
count__49736 = G__50011;
i__49737 = G__50012;
continue;
} else {
var G__50015 = cljs.core.next(seq__49732__$1);
var G__50016 = null;
var G__50017 = (0);
var G__50018 = (0);
seq__49732 = G__50015;
chunk__49735 = G__50016;
count__49736 = G__50017;
i__49737 = G__50018;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq49713){
var G__49714 = cljs.core.first(seq49713);
var seq49713__$1 = cljs.core.next(seq49713);
var G__49715 = cljs.core.first(seq49713__$1);
var seq49713__$2 = cljs.core.next(seq49713__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49714,G__49715,seq49713__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__49780,p__49781){
var map__49782 = p__49780;
var map__49782__$1 = cljs.core.__destructure_map(map__49782);
var runtime = map__49782__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49783 = p__49781;
var map__49783__$1 = cljs.core.__destructure_map(map__49783);
var msg = map__49783__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49783__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__49785 = cljs.core.deref(state_ref);
var map__49785__$1 = cljs.core.__destructure_map(map__49785);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__49805){
var map__49806 = p__49805;
var map__49806__$1 = cljs.core.__destructure_map(map__49806);
var runtime = map__49806__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49806__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__49807,msg){
var map__49808 = p__49807;
var map__49808__$1 = cljs.core.__destructure_map(map__49808);
var runtime = map__49808__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49808__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__49820,key,p__49821){
var map__49822 = p__49820;
var map__49822__$1 = cljs.core.__destructure_map(map__49822);
var state = map__49822__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__49823 = p__49821;
var map__49823__$1 = cljs.core.__destructure_map(map__49823);
var spec = map__49823__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49823__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__49833,key,spec){
var map__49834 = p__49833;
var map__49834__$1 = cljs.core.__destructure_map(map__49834);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49834__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__49836_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__49836_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__49837_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__49837_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__49838_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__49838_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__49839_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__49839_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__49840_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__49840_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__49856,key){
var map__49858 = p__49856;
var map__49858__$1 = cljs.core.__destructure_map(map__49858);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49858__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__49863,msg){
var map__49864 = p__49863;
var map__49864__$1 = cljs.core.__destructure_map(map__49864);
var runtime = map__49864__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49864__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__49904,p__49905){
var map__49906 = p__49904;
var map__49906__$1 = cljs.core.__destructure_map(map__49906);
var runtime = map__49906__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49906__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49907 = p__49905;
var map__49907__$1 = cljs.core.__destructure_map(map__49907);
var msg = map__49907__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49907__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49907__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__49916 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__49918 = null;
var count__49919 = (0);
var i__49920 = (0);
while(true){
if((i__49920 < count__49919)){
var map__49944 = chunk__49918.cljs$core$IIndexed$_nth$arity$2(null,i__49920);
var map__49944__$1 = cljs.core.__destructure_map(map__49944);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49944__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50108 = seq__49916;
var G__50109 = chunk__49918;
var G__50110 = count__49919;
var G__50111 = (i__49920 + (1));
seq__49916 = G__50108;
chunk__49918 = G__50109;
count__49919 = G__50110;
i__49920 = G__50111;
continue;
} else {
var G__50112 = seq__49916;
var G__50113 = chunk__49918;
var G__50114 = count__49919;
var G__50115 = (i__49920 + (1));
seq__49916 = G__50112;
chunk__49918 = G__50113;
count__49919 = G__50114;
i__49920 = G__50115;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49916);
if(temp__5753__auto__){
var seq__49916__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49916__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49916__$1);
var G__50117 = cljs.core.chunk_rest(seq__49916__$1);
var G__50118 = c__4679__auto__;
var G__50119 = cljs.core.count(c__4679__auto__);
var G__50120 = (0);
seq__49916 = G__50117;
chunk__49918 = G__50118;
count__49919 = G__50119;
i__49920 = G__50120;
continue;
} else {
var map__49947 = cljs.core.first(seq__49916__$1);
var map__49947__$1 = cljs.core.__destructure_map(map__49947);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50121 = cljs.core.next(seq__49916__$1);
var G__50122 = null;
var G__50123 = (0);
var G__50124 = (0);
seq__49916 = G__50121;
chunk__49918 = G__50122;
count__49919 = G__50123;
i__49920 = G__50124;
continue;
} else {
var G__50125 = cljs.core.next(seq__49916__$1);
var G__50126 = null;
var G__50127 = (0);
var G__50128 = (0);
seq__49916 = G__50125;
chunk__49918 = G__50126;
count__49919 = G__50127;
i__49920 = G__50128;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
