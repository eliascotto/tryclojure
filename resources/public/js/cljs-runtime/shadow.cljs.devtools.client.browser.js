goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55364 = arguments.length;
var i__4865__auto___55365 = (0);
while(true){
if((i__4865__auto___55365 < len__4864__auto___55364)){
args__4870__auto__.push((arguments[i__4865__auto___55365]));

var G__55366 = (i__4865__auto___55365 + (1));
i__4865__auto___55365 = G__55366;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54499){
var G__54500 = cljs.core.first(seq54499);
var seq54499__$1 = cljs.core.next(seq54499);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54500,seq54499__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54504 = cljs.core.seq(sources);
var chunk__54505 = null;
var count__54506 = (0);
var i__54507 = (0);
while(true){
if((i__54507 < count__54506)){
var map__54532 = chunk__54505.cljs$core$IIndexed$_nth$arity$2(null,i__54507);
var map__54532__$1 = cljs.core.__destructure_map(map__54532);
var src = map__54532__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54538){var e_55368 = e54538;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55368);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55368.message)].join('')));
}

var G__55371 = seq__54504;
var G__55372 = chunk__54505;
var G__55373 = count__54506;
var G__55374 = (i__54507 + (1));
seq__54504 = G__55371;
chunk__54505 = G__55372;
count__54506 = G__55373;
i__54507 = G__55374;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54504);
if(temp__5753__auto__){
var seq__54504__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54504__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54504__$1);
var G__55375 = cljs.core.chunk_rest(seq__54504__$1);
var G__55376 = c__4679__auto__;
var G__55377 = cljs.core.count(c__4679__auto__);
var G__55378 = (0);
seq__54504 = G__55375;
chunk__54505 = G__55376;
count__54506 = G__55377;
i__54507 = G__55378;
continue;
} else {
var map__54549 = cljs.core.first(seq__54504__$1);
var map__54549__$1 = cljs.core.__destructure_map(map__54549);
var src = map__54549__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54550){var e_55381 = e54550;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55381);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55381.message)].join('')));
}

var G__55382 = cljs.core.next(seq__54504__$1);
var G__55383 = null;
var G__55384 = (0);
var G__55385 = (0);
seq__54504 = G__55382;
chunk__54505 = G__55383;
count__54506 = G__55384;
i__54507 = G__55385;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__54556 = cljs.core.seq(js_requires);
var chunk__54557 = null;
var count__54558 = (0);
var i__54559 = (0);
while(true){
if((i__54559 < count__54558)){
var js_ns = chunk__54557.cljs$core$IIndexed$_nth$arity$2(null,i__54559);
var require_str_55390 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55390);


var G__55391 = seq__54556;
var G__55392 = chunk__54557;
var G__55393 = count__54558;
var G__55394 = (i__54559 + (1));
seq__54556 = G__55391;
chunk__54557 = G__55392;
count__54558 = G__55393;
i__54559 = G__55394;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54556);
if(temp__5753__auto__){
var seq__54556__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54556__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54556__$1);
var G__55397 = cljs.core.chunk_rest(seq__54556__$1);
var G__55398 = c__4679__auto__;
var G__55399 = cljs.core.count(c__4679__auto__);
var G__55400 = (0);
seq__54556 = G__55397;
chunk__54557 = G__55398;
count__54558 = G__55399;
i__54559 = G__55400;
continue;
} else {
var js_ns = cljs.core.first(seq__54556__$1);
var require_str_55401 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55401);


var G__55402 = cljs.core.next(seq__54556__$1);
var G__55403 = null;
var G__55404 = (0);
var G__55405 = (0);
seq__54556 = G__55402;
chunk__54557 = G__55403;
count__54558 = G__55404;
i__54559 = G__55405;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54564){
var map__54565 = p__54564;
var map__54565__$1 = cljs.core.__destructure_map(map__54565);
var msg = map__54565__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54565__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54566(s__54567){
return (new cljs.core.LazySeq(null,(function (){
var s__54567__$1 = s__54567;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54567__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__54575 = cljs.core.first(xs__6308__auto__);
var map__54575__$1 = cljs.core.__destructure_map(map__54575);
var src = map__54575__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__54567__$1,map__54575,map__54575__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54565,map__54565__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54566_$_iter__54568(s__54569){
return (new cljs.core.LazySeq(null,((function (s__54567__$1,map__54575,map__54575__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54565,map__54565__$1,msg,info,reload_info){
return (function (){
var s__54569__$1 = s__54569;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__54569__$1);
if(temp__5753__auto____$1){
var s__54569__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54569__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__54569__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__54571 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__54570 = (0);
while(true){
if((i__54570 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__54570);
cljs.core.chunk_append(b__54571,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__55412 = (i__54570 + (1));
i__54570 = G__55412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54571),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54566_$_iter__54568(cljs.core.chunk_rest(s__54569__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54571),null);
}
} else {
var warning = cljs.core.first(s__54569__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54566_$_iter__54568(cljs.core.rest(s__54569__$2)));
}
} else {
return null;
}
break;
}
});})(s__54567__$1,map__54575,map__54575__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54565,map__54565__$1,msg,info,reload_info))
,null,null));
});})(s__54567__$1,map__54575,map__54575__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54565,map__54565__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54566(cljs.core.rest(s__54567__$1)));
} else {
var G__55413 = cljs.core.rest(s__54567__$1);
s__54567__$1 = G__55413;
continue;
}
} else {
var G__55414 = cljs.core.rest(s__54567__$1);
s__54567__$1 = G__55414;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__54576_55415 = cljs.core.seq(warnings);
var chunk__54577_55416 = null;
var count__54578_55417 = (0);
var i__54579_55418 = (0);
while(true){
if((i__54579_55418 < count__54578_55417)){
var map__54582_55419 = chunk__54577_55416.cljs$core$IIndexed$_nth$arity$2(null,i__54579_55418);
var map__54582_55420__$1 = cljs.core.__destructure_map(map__54582_55419);
var w_55421 = map__54582_55420__$1;
var msg_55422__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54582_55420__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54582_55420__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54582_55420__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54582_55420__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55425)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55423),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55424),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55422__$1)].join(''));


var G__55428 = seq__54576_55415;
var G__55429 = chunk__54577_55416;
var G__55430 = count__54578_55417;
var G__55431 = (i__54579_55418 + (1));
seq__54576_55415 = G__55428;
chunk__54577_55416 = G__55429;
count__54578_55417 = G__55430;
i__54579_55418 = G__55431;
continue;
} else {
var temp__5753__auto___55432 = cljs.core.seq(seq__54576_55415);
if(temp__5753__auto___55432){
var seq__54576_55434__$1 = temp__5753__auto___55432;
if(cljs.core.chunked_seq_QMARK_(seq__54576_55434__$1)){
var c__4679__auto___55435 = cljs.core.chunk_first(seq__54576_55434__$1);
var G__55436 = cljs.core.chunk_rest(seq__54576_55434__$1);
var G__55437 = c__4679__auto___55435;
var G__55438 = cljs.core.count(c__4679__auto___55435);
var G__55439 = (0);
seq__54576_55415 = G__55436;
chunk__54577_55416 = G__55437;
count__54578_55417 = G__55438;
i__54579_55418 = G__55439;
continue;
} else {
var map__54586_55440 = cljs.core.first(seq__54576_55434__$1);
var map__54586_55441__$1 = cljs.core.__destructure_map(map__54586_55440);
var w_55442 = map__54586_55441__$1;
var msg_55443__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586_55441__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586_55441__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586_55441__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586_55441__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55446)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55444),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55445),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55443__$1)].join(''));


var G__55448 = cljs.core.next(seq__54576_55434__$1);
var G__55449 = null;
var G__55450 = (0);
var G__55451 = (0);
seq__54576_55415 = G__55448;
chunk__54577_55416 = G__55449;
count__54578_55417 = G__55450;
i__54579_55418 = G__55451;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54563_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54563_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54597){
var map__54598 = p__54597;
var map__54598__$1 = cljs.core.__destructure_map(map__54598);
var msg = map__54598__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54598__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54598__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__54599 = cljs.core.seq(updates);
var chunk__54601 = null;
var count__54602 = (0);
var i__54603 = (0);
while(true){
if((i__54603 < count__54602)){
var path = chunk__54601.cljs$core$IIndexed$_nth$arity$2(null,i__54603);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54792_55468 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54796_55469 = null;
var count__54797_55470 = (0);
var i__54798_55471 = (0);
while(true){
if((i__54798_55471 < count__54797_55470)){
var node_55477 = chunk__54796_55469.cljs$core$IIndexed$_nth$arity$2(null,i__54798_55471);
if(cljs.core.not(node_55477.shadow$old)){
var path_match_55478 = shadow.cljs.devtools.client.browser.match_paths(node_55477.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55478)){
var new_link_55479 = (function (){var G__54866 = node_55477.cloneNode(true);
G__54866.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55478),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54866;
})();
(node_55477.shadow$old = true);

(new_link_55479.onload = ((function (seq__54792_55468,chunk__54796_55469,count__54797_55470,i__54798_55471,seq__54599,chunk__54601,count__54602,i__54603,new_link_55479,path_match_55478,node_55477,path,map__54598,map__54598__$1,msg,updates,reload_info){
return (function (e){
var seq__54870_55483 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54872_55484 = null;
var count__54873_55485 = (0);
var i__54874_55486 = (0);
while(true){
if((i__54874_55486 < count__54873_55485)){
var map__54905_55493 = chunk__54872_55484.cljs$core$IIndexed$_nth$arity$2(null,i__54874_55486);
var map__54905_55494__$1 = cljs.core.__destructure_map(map__54905_55493);
var task_55495 = map__54905_55494__$1;
var fn_str_55496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905_55494__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905_55494__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55498 = goog.getObjectByName(fn_str_55496,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55497)].join(''));

(fn_obj_55498.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55498.cljs$core$IFn$_invoke$arity$2(path,new_link_55479) : fn_obj_55498.call(null,path,new_link_55479));


var G__55500 = seq__54870_55483;
var G__55501 = chunk__54872_55484;
var G__55502 = count__54873_55485;
var G__55503 = (i__54874_55486 + (1));
seq__54870_55483 = G__55500;
chunk__54872_55484 = G__55501;
count__54873_55485 = G__55502;
i__54874_55486 = G__55503;
continue;
} else {
var temp__5753__auto___55507 = cljs.core.seq(seq__54870_55483);
if(temp__5753__auto___55507){
var seq__54870_55509__$1 = temp__5753__auto___55507;
if(cljs.core.chunked_seq_QMARK_(seq__54870_55509__$1)){
var c__4679__auto___55510 = cljs.core.chunk_first(seq__54870_55509__$1);
var G__55511 = cljs.core.chunk_rest(seq__54870_55509__$1);
var G__55512 = c__4679__auto___55510;
var G__55513 = cljs.core.count(c__4679__auto___55510);
var G__55514 = (0);
seq__54870_55483 = G__55511;
chunk__54872_55484 = G__55512;
count__54873_55485 = G__55513;
i__54874_55486 = G__55514;
continue;
} else {
var map__54916_55515 = cljs.core.first(seq__54870_55509__$1);
var map__54916_55516__$1 = cljs.core.__destructure_map(map__54916_55515);
var task_55517 = map__54916_55516__$1;
var fn_str_55518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916_55516__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916_55516__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55520 = goog.getObjectByName(fn_str_55518,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55519)].join(''));

(fn_obj_55520.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55520.cljs$core$IFn$_invoke$arity$2(path,new_link_55479) : fn_obj_55520.call(null,path,new_link_55479));


var G__55521 = cljs.core.next(seq__54870_55509__$1);
var G__55522 = null;
var G__55523 = (0);
var G__55524 = (0);
seq__54870_55483 = G__55521;
chunk__54872_55484 = G__55522;
count__54873_55485 = G__55523;
i__54874_55486 = G__55524;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55477);
});})(seq__54792_55468,chunk__54796_55469,count__54797_55470,i__54798_55471,seq__54599,chunk__54601,count__54602,i__54603,new_link_55479,path_match_55478,node_55477,path,map__54598,map__54598__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55478], 0));

goog.dom.insertSiblingAfter(new_link_55479,node_55477);


var G__55526 = seq__54792_55468;
var G__55527 = chunk__54796_55469;
var G__55528 = count__54797_55470;
var G__55529 = (i__54798_55471 + (1));
seq__54792_55468 = G__55526;
chunk__54796_55469 = G__55527;
count__54797_55470 = G__55528;
i__54798_55471 = G__55529;
continue;
} else {
var G__55531 = seq__54792_55468;
var G__55532 = chunk__54796_55469;
var G__55533 = count__54797_55470;
var G__55534 = (i__54798_55471 + (1));
seq__54792_55468 = G__55531;
chunk__54796_55469 = G__55532;
count__54797_55470 = G__55533;
i__54798_55471 = G__55534;
continue;
}
} else {
var G__55535 = seq__54792_55468;
var G__55536 = chunk__54796_55469;
var G__55537 = count__54797_55470;
var G__55538 = (i__54798_55471 + (1));
seq__54792_55468 = G__55535;
chunk__54796_55469 = G__55536;
count__54797_55470 = G__55537;
i__54798_55471 = G__55538;
continue;
}
} else {
var temp__5753__auto___55539 = cljs.core.seq(seq__54792_55468);
if(temp__5753__auto___55539){
var seq__54792_55540__$1 = temp__5753__auto___55539;
if(cljs.core.chunked_seq_QMARK_(seq__54792_55540__$1)){
var c__4679__auto___55541 = cljs.core.chunk_first(seq__54792_55540__$1);
var G__55542 = cljs.core.chunk_rest(seq__54792_55540__$1);
var G__55543 = c__4679__auto___55541;
var G__55544 = cljs.core.count(c__4679__auto___55541);
var G__55545 = (0);
seq__54792_55468 = G__55542;
chunk__54796_55469 = G__55543;
count__54797_55470 = G__55544;
i__54798_55471 = G__55545;
continue;
} else {
var node_55546 = cljs.core.first(seq__54792_55540__$1);
if(cljs.core.not(node_55546.shadow$old)){
var path_match_55547 = shadow.cljs.devtools.client.browser.match_paths(node_55546.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55547)){
var new_link_55548 = (function (){var G__54925 = node_55546.cloneNode(true);
G__54925.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55547),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54925;
})();
(node_55546.shadow$old = true);

(new_link_55548.onload = ((function (seq__54792_55468,chunk__54796_55469,count__54797_55470,i__54798_55471,seq__54599,chunk__54601,count__54602,i__54603,new_link_55548,path_match_55547,node_55546,seq__54792_55540__$1,temp__5753__auto___55539,path,map__54598,map__54598__$1,msg,updates,reload_info){
return (function (e){
var seq__54929_55558 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54931_55559 = null;
var count__54932_55560 = (0);
var i__54933_55561 = (0);
while(true){
if((i__54933_55561 < count__54932_55560)){
var map__54944_55563 = chunk__54931_55559.cljs$core$IIndexed$_nth$arity$2(null,i__54933_55561);
var map__54944_55564__$1 = cljs.core.__destructure_map(map__54944_55563);
var task_55565 = map__54944_55564__$1;
var fn_str_55566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54944_55564__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54944_55564__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55571 = goog.getObjectByName(fn_str_55566,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55567)].join(''));

(fn_obj_55571.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55571.cljs$core$IFn$_invoke$arity$2(path,new_link_55548) : fn_obj_55571.call(null,path,new_link_55548));


var G__55572 = seq__54929_55558;
var G__55573 = chunk__54931_55559;
var G__55574 = count__54932_55560;
var G__55575 = (i__54933_55561 + (1));
seq__54929_55558 = G__55572;
chunk__54931_55559 = G__55573;
count__54932_55560 = G__55574;
i__54933_55561 = G__55575;
continue;
} else {
var temp__5753__auto___55576__$1 = cljs.core.seq(seq__54929_55558);
if(temp__5753__auto___55576__$1){
var seq__54929_55577__$1 = temp__5753__auto___55576__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54929_55577__$1)){
var c__4679__auto___55578 = cljs.core.chunk_first(seq__54929_55577__$1);
var G__55579 = cljs.core.chunk_rest(seq__54929_55577__$1);
var G__55580 = c__4679__auto___55578;
var G__55581 = cljs.core.count(c__4679__auto___55578);
var G__55582 = (0);
seq__54929_55558 = G__55579;
chunk__54931_55559 = G__55580;
count__54932_55560 = G__55581;
i__54933_55561 = G__55582;
continue;
} else {
var map__54949_55584 = cljs.core.first(seq__54929_55577__$1);
var map__54949_55585__$1 = cljs.core.__destructure_map(map__54949_55584);
var task_55586 = map__54949_55585__$1;
var fn_str_55587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54949_55585__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54949_55585__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55589 = goog.getObjectByName(fn_str_55587,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55588)].join(''));

(fn_obj_55589.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55589.cljs$core$IFn$_invoke$arity$2(path,new_link_55548) : fn_obj_55589.call(null,path,new_link_55548));


var G__55590 = cljs.core.next(seq__54929_55577__$1);
var G__55591 = null;
var G__55592 = (0);
var G__55593 = (0);
seq__54929_55558 = G__55590;
chunk__54931_55559 = G__55591;
count__54932_55560 = G__55592;
i__54933_55561 = G__55593;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55546);
});})(seq__54792_55468,chunk__54796_55469,count__54797_55470,i__54798_55471,seq__54599,chunk__54601,count__54602,i__54603,new_link_55548,path_match_55547,node_55546,seq__54792_55540__$1,temp__5753__auto___55539,path,map__54598,map__54598__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55547], 0));

goog.dom.insertSiblingAfter(new_link_55548,node_55546);


var G__55595 = cljs.core.next(seq__54792_55540__$1);
var G__55596 = null;
var G__55597 = (0);
var G__55598 = (0);
seq__54792_55468 = G__55595;
chunk__54796_55469 = G__55596;
count__54797_55470 = G__55597;
i__54798_55471 = G__55598;
continue;
} else {
var G__55599 = cljs.core.next(seq__54792_55540__$1);
var G__55600 = null;
var G__55601 = (0);
var G__55602 = (0);
seq__54792_55468 = G__55599;
chunk__54796_55469 = G__55600;
count__54797_55470 = G__55601;
i__54798_55471 = G__55602;
continue;
}
} else {
var G__55603 = cljs.core.next(seq__54792_55540__$1);
var G__55604 = null;
var G__55605 = (0);
var G__55606 = (0);
seq__54792_55468 = G__55603;
chunk__54796_55469 = G__55604;
count__54797_55470 = G__55605;
i__54798_55471 = G__55606;
continue;
}
}
} else {
}
}
break;
}


var G__55607 = seq__54599;
var G__55608 = chunk__54601;
var G__55609 = count__54602;
var G__55610 = (i__54603 + (1));
seq__54599 = G__55607;
chunk__54601 = G__55608;
count__54602 = G__55609;
i__54603 = G__55610;
continue;
} else {
var G__55611 = seq__54599;
var G__55612 = chunk__54601;
var G__55613 = count__54602;
var G__55614 = (i__54603 + (1));
seq__54599 = G__55611;
chunk__54601 = G__55612;
count__54602 = G__55613;
i__54603 = G__55614;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54599);
if(temp__5753__auto__){
var seq__54599__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54599__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54599__$1);
var G__55615 = cljs.core.chunk_rest(seq__54599__$1);
var G__55616 = c__4679__auto__;
var G__55617 = cljs.core.count(c__4679__auto__);
var G__55618 = (0);
seq__54599 = G__55615;
chunk__54601 = G__55616;
count__54602 = G__55617;
i__54603 = G__55618;
continue;
} else {
var path = cljs.core.first(seq__54599__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54960_55619 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54964_55620 = null;
var count__54965_55621 = (0);
var i__54966_55622 = (0);
while(true){
if((i__54966_55622 < count__54965_55621)){
var node_55624 = chunk__54964_55620.cljs$core$IIndexed$_nth$arity$2(null,i__54966_55622);
if(cljs.core.not(node_55624.shadow$old)){
var path_match_55628 = shadow.cljs.devtools.client.browser.match_paths(node_55624.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55628)){
var new_link_55629 = (function (){var G__55057 = node_55624.cloneNode(true);
G__55057.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55628),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55057;
})();
(node_55624.shadow$old = true);

(new_link_55629.onload = ((function (seq__54960_55619,chunk__54964_55620,count__54965_55621,i__54966_55622,seq__54599,chunk__54601,count__54602,i__54603,new_link_55629,path_match_55628,node_55624,path,seq__54599__$1,temp__5753__auto__,map__54598,map__54598__$1,msg,updates,reload_info){
return (function (e){
var seq__55059_55632 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55061_55633 = null;
var count__55062_55634 = (0);
var i__55063_55635 = (0);
while(true){
if((i__55063_55635 < count__55062_55634)){
var map__55084_55637 = chunk__55061_55633.cljs$core$IIndexed$_nth$arity$2(null,i__55063_55635);
var map__55084_55638__$1 = cljs.core.__destructure_map(map__55084_55637);
var task_55639 = map__55084_55638__$1;
var fn_str_55640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55084_55638__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55084_55638__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55644 = goog.getObjectByName(fn_str_55640,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55641)].join(''));

(fn_obj_55644.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55644.cljs$core$IFn$_invoke$arity$2(path,new_link_55629) : fn_obj_55644.call(null,path,new_link_55629));


var G__55648 = seq__55059_55632;
var G__55649 = chunk__55061_55633;
var G__55650 = count__55062_55634;
var G__55651 = (i__55063_55635 + (1));
seq__55059_55632 = G__55648;
chunk__55061_55633 = G__55649;
count__55062_55634 = G__55650;
i__55063_55635 = G__55651;
continue;
} else {
var temp__5753__auto___55652__$1 = cljs.core.seq(seq__55059_55632);
if(temp__5753__auto___55652__$1){
var seq__55059_55653__$1 = temp__5753__auto___55652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55059_55653__$1)){
var c__4679__auto___55654 = cljs.core.chunk_first(seq__55059_55653__$1);
var G__55655 = cljs.core.chunk_rest(seq__55059_55653__$1);
var G__55656 = c__4679__auto___55654;
var G__55657 = cljs.core.count(c__4679__auto___55654);
var G__55658 = (0);
seq__55059_55632 = G__55655;
chunk__55061_55633 = G__55656;
count__55062_55634 = G__55657;
i__55063_55635 = G__55658;
continue;
} else {
var map__55087_55661 = cljs.core.first(seq__55059_55653__$1);
var map__55087_55662__$1 = cljs.core.__destructure_map(map__55087_55661);
var task_55663 = map__55087_55662__$1;
var fn_str_55664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55087_55662__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55087_55662__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55667 = goog.getObjectByName(fn_str_55664,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55665)].join(''));

(fn_obj_55667.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55667.cljs$core$IFn$_invoke$arity$2(path,new_link_55629) : fn_obj_55667.call(null,path,new_link_55629));


var G__55669 = cljs.core.next(seq__55059_55653__$1);
var G__55670 = null;
var G__55671 = (0);
var G__55672 = (0);
seq__55059_55632 = G__55669;
chunk__55061_55633 = G__55670;
count__55062_55634 = G__55671;
i__55063_55635 = G__55672;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55624);
});})(seq__54960_55619,chunk__54964_55620,count__54965_55621,i__54966_55622,seq__54599,chunk__54601,count__54602,i__54603,new_link_55629,path_match_55628,node_55624,path,seq__54599__$1,temp__5753__auto__,map__54598,map__54598__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55628], 0));

goog.dom.insertSiblingAfter(new_link_55629,node_55624);


var G__55675 = seq__54960_55619;
var G__55676 = chunk__54964_55620;
var G__55677 = count__54965_55621;
var G__55678 = (i__54966_55622 + (1));
seq__54960_55619 = G__55675;
chunk__54964_55620 = G__55676;
count__54965_55621 = G__55677;
i__54966_55622 = G__55678;
continue;
} else {
var G__55681 = seq__54960_55619;
var G__55682 = chunk__54964_55620;
var G__55683 = count__54965_55621;
var G__55684 = (i__54966_55622 + (1));
seq__54960_55619 = G__55681;
chunk__54964_55620 = G__55682;
count__54965_55621 = G__55683;
i__54966_55622 = G__55684;
continue;
}
} else {
var G__55685 = seq__54960_55619;
var G__55686 = chunk__54964_55620;
var G__55687 = count__54965_55621;
var G__55688 = (i__54966_55622 + (1));
seq__54960_55619 = G__55685;
chunk__54964_55620 = G__55686;
count__54965_55621 = G__55687;
i__54966_55622 = G__55688;
continue;
}
} else {
var temp__5753__auto___55689__$1 = cljs.core.seq(seq__54960_55619);
if(temp__5753__auto___55689__$1){
var seq__54960_55690__$1 = temp__5753__auto___55689__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54960_55690__$1)){
var c__4679__auto___55691 = cljs.core.chunk_first(seq__54960_55690__$1);
var G__55692 = cljs.core.chunk_rest(seq__54960_55690__$1);
var G__55693 = c__4679__auto___55691;
var G__55694 = cljs.core.count(c__4679__auto___55691);
var G__55695 = (0);
seq__54960_55619 = G__55692;
chunk__54964_55620 = G__55693;
count__54965_55621 = G__55694;
i__54966_55622 = G__55695;
continue;
} else {
var node_55696 = cljs.core.first(seq__54960_55690__$1);
if(cljs.core.not(node_55696.shadow$old)){
var path_match_55697 = shadow.cljs.devtools.client.browser.match_paths(node_55696.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55697)){
var new_link_55698 = (function (){var G__55091 = node_55696.cloneNode(true);
G__55091.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55697),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55091;
})();
(node_55696.shadow$old = true);

(new_link_55698.onload = ((function (seq__54960_55619,chunk__54964_55620,count__54965_55621,i__54966_55622,seq__54599,chunk__54601,count__54602,i__54603,new_link_55698,path_match_55697,node_55696,seq__54960_55690__$1,temp__5753__auto___55689__$1,path,seq__54599__$1,temp__5753__auto__,map__54598,map__54598__$1,msg,updates,reload_info){
return (function (e){
var seq__55093_55699 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55095_55700 = null;
var count__55096_55701 = (0);
var i__55097_55702 = (0);
while(true){
if((i__55097_55702 < count__55096_55701)){
var map__55113_55704 = chunk__55095_55700.cljs$core$IIndexed$_nth$arity$2(null,i__55097_55702);
var map__55113_55705__$1 = cljs.core.__destructure_map(map__55113_55704);
var task_55706 = map__55113_55705__$1;
var fn_str_55707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55113_55705__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55113_55705__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55709 = goog.getObjectByName(fn_str_55707,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55708)].join(''));

(fn_obj_55709.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55709.cljs$core$IFn$_invoke$arity$2(path,new_link_55698) : fn_obj_55709.call(null,path,new_link_55698));


var G__55710 = seq__55093_55699;
var G__55711 = chunk__55095_55700;
var G__55712 = count__55096_55701;
var G__55713 = (i__55097_55702 + (1));
seq__55093_55699 = G__55710;
chunk__55095_55700 = G__55711;
count__55096_55701 = G__55712;
i__55097_55702 = G__55713;
continue;
} else {
var temp__5753__auto___55714__$2 = cljs.core.seq(seq__55093_55699);
if(temp__5753__auto___55714__$2){
var seq__55093_55715__$1 = temp__5753__auto___55714__$2;
if(cljs.core.chunked_seq_QMARK_(seq__55093_55715__$1)){
var c__4679__auto___55716 = cljs.core.chunk_first(seq__55093_55715__$1);
var G__55717 = cljs.core.chunk_rest(seq__55093_55715__$1);
var G__55718 = c__4679__auto___55716;
var G__55719 = cljs.core.count(c__4679__auto___55716);
var G__55720 = (0);
seq__55093_55699 = G__55717;
chunk__55095_55700 = G__55718;
count__55096_55701 = G__55719;
i__55097_55702 = G__55720;
continue;
} else {
var map__55127_55722 = cljs.core.first(seq__55093_55715__$1);
var map__55127_55723__$1 = cljs.core.__destructure_map(map__55127_55722);
var task_55724 = map__55127_55723__$1;
var fn_str_55725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55127_55723__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55127_55723__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55727 = goog.getObjectByName(fn_str_55725,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55726)].join(''));

(fn_obj_55727.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55727.cljs$core$IFn$_invoke$arity$2(path,new_link_55698) : fn_obj_55727.call(null,path,new_link_55698));


var G__55729 = cljs.core.next(seq__55093_55715__$1);
var G__55730 = null;
var G__55731 = (0);
var G__55732 = (0);
seq__55093_55699 = G__55729;
chunk__55095_55700 = G__55730;
count__55096_55701 = G__55731;
i__55097_55702 = G__55732;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55696);
});})(seq__54960_55619,chunk__54964_55620,count__54965_55621,i__54966_55622,seq__54599,chunk__54601,count__54602,i__54603,new_link_55698,path_match_55697,node_55696,seq__54960_55690__$1,temp__5753__auto___55689__$1,path,seq__54599__$1,temp__5753__auto__,map__54598,map__54598__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55697], 0));

goog.dom.insertSiblingAfter(new_link_55698,node_55696);


var G__55734 = cljs.core.next(seq__54960_55690__$1);
var G__55735 = null;
var G__55736 = (0);
var G__55737 = (0);
seq__54960_55619 = G__55734;
chunk__54964_55620 = G__55735;
count__54965_55621 = G__55736;
i__54966_55622 = G__55737;
continue;
} else {
var G__55738 = cljs.core.next(seq__54960_55690__$1);
var G__55739 = null;
var G__55740 = (0);
var G__55741 = (0);
seq__54960_55619 = G__55738;
chunk__54964_55620 = G__55739;
count__54965_55621 = G__55740;
i__54966_55622 = G__55741;
continue;
}
} else {
var G__55743 = cljs.core.next(seq__54960_55690__$1);
var G__55744 = null;
var G__55745 = (0);
var G__55746 = (0);
seq__54960_55619 = G__55743;
chunk__54964_55620 = G__55744;
count__54965_55621 = G__55745;
i__54966_55622 = G__55746;
continue;
}
}
} else {
}
}
break;
}


var G__55747 = cljs.core.next(seq__54599__$1);
var G__55748 = null;
var G__55749 = (0);
var G__55750 = (0);
seq__54599 = G__55747;
chunk__54601 = G__55748;
count__54602 = G__55749;
i__54603 = G__55750;
continue;
} else {
var G__55751 = cljs.core.next(seq__54599__$1);
var G__55752 = null;
var G__55753 = (0);
var G__55754 = (0);
seq__54599 = G__55751;
chunk__54601 = G__55752;
count__54602 = G__55753;
i__54603 = G__55754;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__55134){
var map__55135 = p__55134;
var map__55135__$1 = cljs.core.__destructure_map(map__55135);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55135__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__55197){
var map__55199 = p__55197;
var map__55199__$1 = cljs.core.__destructure_map(map__55199);
var _ = map__55199__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55199__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__55208,done,error){
var map__55211 = p__55208;
var map__55211__$1 = cljs.core.__destructure_map(map__55211);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55211__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__55213,done,error){
var map__55214 = p__55213;
var map__55214__$1 = cljs.core.__destructure_map(map__55214);
var msg = map__55214__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55219){
var map__55224 = p__55219;
var map__55224__$1 = cljs.core.__destructure_map(map__55224);
var src = map__55224__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55224__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__55238 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__55238) : done.call(null,G__55238));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__55242){
var map__55244 = p__55242;
var map__55244__$1 = cljs.core.__destructure_map(map__55244);
var msg__$1 = map__55244__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55244__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e55245){var ex = e55245;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__55254){
var map__55256 = p__55254;
var map__55256__$1 = cljs.core.__destructure_map(map__55256);
var env = map__55256__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55256__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__55333){
var map__55336 = p__55333;
var map__55336__$1 = cljs.core.__destructure_map(map__55336);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55336__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55336__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__55357){
var map__55358 = p__55357;
var map__55358__$1 = cljs.core.__destructure_map(map__55358);
var svc = map__55358__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55358__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
