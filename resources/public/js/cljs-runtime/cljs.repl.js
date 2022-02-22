goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51671){
var map__51673 = p__51671;
var map__51673__$1 = cljs.core.__destructure_map(map__51673);
var m = map__51673__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51673__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51679_52218 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51680_52219 = null;
var count__51681_52220 = (0);
var i__51682_52221 = (0);
while(true){
if((i__51682_52221 < count__51681_52220)){
var f_52223 = chunk__51680_52219.cljs$core$IIndexed$_nth$arity$2(null,i__51682_52221);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52223], 0));


var G__52225 = seq__51679_52218;
var G__52226 = chunk__51680_52219;
var G__52227 = count__51681_52220;
var G__52228 = (i__51682_52221 + (1));
seq__51679_52218 = G__52225;
chunk__51680_52219 = G__52226;
count__51681_52220 = G__52227;
i__51682_52221 = G__52228;
continue;
} else {
var temp__5753__auto___52231 = cljs.core.seq(seq__51679_52218);
if(temp__5753__auto___52231){
var seq__51679_52234__$1 = temp__5753__auto___52231;
if(cljs.core.chunked_seq_QMARK_(seq__51679_52234__$1)){
var c__4679__auto___52235 = cljs.core.chunk_first(seq__51679_52234__$1);
var G__52236 = cljs.core.chunk_rest(seq__51679_52234__$1);
var G__52237 = c__4679__auto___52235;
var G__52238 = cljs.core.count(c__4679__auto___52235);
var G__52239 = (0);
seq__51679_52218 = G__52236;
chunk__51680_52219 = G__52237;
count__51681_52220 = G__52238;
i__51682_52221 = G__52239;
continue;
} else {
var f_52241 = cljs.core.first(seq__51679_52234__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52241], 0));


var G__52244 = cljs.core.next(seq__51679_52234__$1);
var G__52245 = null;
var G__52246 = (0);
var G__52247 = (0);
seq__51679_52218 = G__52244;
chunk__51680_52219 = G__52245;
count__51681_52220 = G__52246;
i__51682_52221 = G__52247;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52248 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52248], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52248)))?cljs.core.second(arglists_52248):arglists_52248)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51706_52268 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51707_52269 = null;
var count__51708_52270 = (0);
var i__51709_52271 = (0);
while(true){
if((i__51709_52271 < count__51708_52270)){
var vec__51731_52272 = chunk__51707_52269.cljs$core$IIndexed$_nth$arity$2(null,i__51709_52271);
var name_52273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51731_52272,(0),null);
var map__51735_52274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51731_52272,(1),null);
var map__51735_52275__$1 = cljs.core.__destructure_map(map__51735_52274);
var doc_52276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735_52275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735_52275__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52273], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52277], 0));

if(cljs.core.truth_(doc_52276)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52276], 0));
} else {
}


var G__52281 = seq__51706_52268;
var G__52282 = chunk__51707_52269;
var G__52283 = count__51708_52270;
var G__52284 = (i__51709_52271 + (1));
seq__51706_52268 = G__52281;
chunk__51707_52269 = G__52282;
count__51708_52270 = G__52283;
i__51709_52271 = G__52284;
continue;
} else {
var temp__5753__auto___52286 = cljs.core.seq(seq__51706_52268);
if(temp__5753__auto___52286){
var seq__51706_52289__$1 = temp__5753__auto___52286;
if(cljs.core.chunked_seq_QMARK_(seq__51706_52289__$1)){
var c__4679__auto___52290 = cljs.core.chunk_first(seq__51706_52289__$1);
var G__52292 = cljs.core.chunk_rest(seq__51706_52289__$1);
var G__52293 = c__4679__auto___52290;
var G__52294 = cljs.core.count(c__4679__auto___52290);
var G__52295 = (0);
seq__51706_52268 = G__52292;
chunk__51707_52269 = G__52293;
count__51708_52270 = G__52294;
i__51709_52271 = G__52295;
continue;
} else {
var vec__51740_52302 = cljs.core.first(seq__51706_52289__$1);
var name_52303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51740_52302,(0),null);
var map__51743_52304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51740_52302,(1),null);
var map__51743_52305__$1 = cljs.core.__destructure_map(map__51743_52304);
var doc_52306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51743_52305__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51743_52305__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52303], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52307], 0));

if(cljs.core.truth_(doc_52306)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52306], 0));
} else {
}


var G__52320 = cljs.core.next(seq__51706_52289__$1);
var G__52321 = null;
var G__52322 = (0);
var G__52323 = (0);
seq__51706_52268 = G__52320;
chunk__51707_52269 = G__52321;
count__51708_52270 = G__52322;
i__51709_52271 = G__52323;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51754 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51755 = null;
var count__51756 = (0);
var i__51757 = (0);
while(true){
if((i__51757 < count__51756)){
var role = chunk__51755.cljs$core$IIndexed$_nth$arity$2(null,i__51757);
var temp__5753__auto___52328__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52328__$1)){
var spec_52330 = temp__5753__auto___52328__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52330)], 0));
} else {
}


var G__52333 = seq__51754;
var G__52334 = chunk__51755;
var G__52335 = count__51756;
var G__52336 = (i__51757 + (1));
seq__51754 = G__52333;
chunk__51755 = G__52334;
count__51756 = G__52335;
i__51757 = G__52336;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__51754);
if(temp__5753__auto____$1){
var seq__51754__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51754__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51754__$1);
var G__52339 = cljs.core.chunk_rest(seq__51754__$1);
var G__52340 = c__4679__auto__;
var G__52341 = cljs.core.count(c__4679__auto__);
var G__52342 = (0);
seq__51754 = G__52339;
chunk__51755 = G__52340;
count__51756 = G__52341;
i__51757 = G__52342;
continue;
} else {
var role = cljs.core.first(seq__51754__$1);
var temp__5753__auto___52344__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52344__$2)){
var spec_52346 = temp__5753__auto___52344__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52346)], 0));
} else {
}


var G__52352 = cljs.core.next(seq__51754__$1);
var G__52353 = null;
var G__52354 = (0);
var G__52355 = (0);
seq__51754 = G__52352;
chunk__51755 = G__52353;
count__51756 = G__52354;
i__51757 = G__52355;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__52370 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__52371 = cljs.core.ex_cause(t);
via = G__52370;
t = G__52371;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51880 = datafied_throwable;
var map__51880__$1 = cljs.core.__destructure_map(map__51880);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51880__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51880__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51880__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51881 = cljs.core.last(via);
var map__51881__$1 = cljs.core.__destructure_map(map__51881);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51882 = data;
var map__51882__$1 = cljs.core.__destructure_map(map__51882);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51882__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51882__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51882__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51883 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51883__$1 = cljs.core.__destructure_map(map__51883);
var top_data = map__51883__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51883__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51930 = phase;
var G__51930__$1 = (((G__51930 instanceof cljs.core.Keyword))?G__51930.fqn:null);
switch (G__51930__$1) {
case "read-source":
var map__51940 = data;
var map__51940__$1 = cljs.core.__destructure_map(map__51940);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51940__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51940__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51968 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51968__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51968,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51968);
var G__51968__$2 = (cljs.core.truth_((function (){var fexpr__51972 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51972.cljs$core$IFn$_invoke$arity$1 ? fexpr__51972.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51972.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51968__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51968__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51968__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51988 = top_data;
var G__51988__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51988,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51988);
var G__51988__$2 = (cljs.core.truth_((function (){var fexpr__51995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51995.cljs$core$IFn$_invoke$arity$1 ? fexpr__51995.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51995.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51988__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51988__$1);
var G__51988__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51988__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51988__$2);
var G__51988__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51988__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51988__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51988__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51988__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52023 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52023,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52023,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52023,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52023,(3),null);
var G__52036 = top_data;
var G__52036__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52036,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52036);
var G__52036__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52036__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52036__$1);
var G__52036__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52036__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52036__$2);
var G__52036__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52036__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52036__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52036__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52036__$4;
}

break;
case "execution":
var vec__52044 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52044,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52044,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52044,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52044,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51873_SHARP_){
var or__4253__auto__ = (p1__51873_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__52050 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52050.cljs$core$IFn$_invoke$arity$1 ? fexpr__52050.cljs$core$IFn$_invoke$arity$1(p1__51873_SHARP_) : fexpr__52050.call(null,p1__51873_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__52056 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52056__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52056,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52056);
var G__52056__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52056__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52056__$1);
var G__52056__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52056__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52056__$2);
var G__52056__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52056__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52056__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52056__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52056__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51930__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52067){
var map__52068 = p__52067;
var map__52068__$1 = cljs.core.__destructure_map(map__52068);
var triage_data = map__52068__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__52087 = phase;
var G__52087__$1 = (((G__52087 instanceof cljs.core.Keyword))?G__52087.fqn:null);
switch (G__52087__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52093 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52094 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52095 = loc;
var G__52096 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52104_52473 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52105_52474 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52106_52475 = true;
var _STAR_print_fn_STAR__temp_val__52107_52476 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52106_52475);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52107_52476);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52064_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52064_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52105_52474);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52104_52473);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52093,G__52094,G__52095,G__52096) : format.call(null,G__52093,G__52094,G__52095,G__52096));

break;
case "macroexpansion":
var G__52131 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52132 = cause_type;
var G__52133 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52134 = loc;
var G__52135 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52131,G__52132,G__52133,G__52134,G__52135) : format.call(null,G__52131,G__52132,G__52133,G__52134,G__52135));

break;
case "compile-syntax-check":
var G__52136 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52137 = cause_type;
var G__52138 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52139 = loc;
var G__52140 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52136,G__52137,G__52138,G__52139,G__52140) : format.call(null,G__52136,G__52137,G__52138,G__52139,G__52140));

break;
case "compilation":
var G__52147 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52148 = cause_type;
var G__52149 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52150 = loc;
var G__52151 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52147,G__52148,G__52149,G__52150,G__52151) : format.call(null,G__52147,G__52148,G__52149,G__52150,G__52151));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52154 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52155 = symbol;
var G__52156 = loc;
var G__52157 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52164_52493 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52165_52494 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52166_52495 = true;
var _STAR_print_fn_STAR__temp_val__52167_52496 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52166_52495);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52167_52496);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52065_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52065_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52165_52494);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52164_52493);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52154,G__52155,G__52156,G__52157) : format.call(null,G__52154,G__52155,G__52156,G__52157));
} else {
var G__52174 = "Execution error%s at %s(%s).\n%s\n";
var G__52175 = cause_type;
var G__52176 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52177 = loc;
var G__52178 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52174,G__52175,G__52176,G__52177,G__52178) : format.call(null,G__52174,G__52175,G__52176,G__52177,G__52178));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52087__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
