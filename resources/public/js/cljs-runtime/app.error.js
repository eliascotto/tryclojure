goog.provide('app.error');
app.error.println = (function app$error$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60516 = arguments.length;
var i__4865__auto___60517 = (0);
while(true){
if((i__4865__auto___60517 < len__4864__auto___60516)){
args__4870__auto__.push((arguments[i__4865__auto___60517]));

var G__60518 = (i__4865__auto___60517 + (1));
i__4865__auto___60517 = G__60518;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.error.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.error.println.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
return console.error(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",strs));
}));

(app.error.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.error.println.cljs$lang$applyTo = (function (seq60495){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60495));
}));

app.error.ruler = (function app$error$ruler(title){
return app.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,"----- ",title," ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((((50) - (7)) - cljs.core.count(title)),"-"))], 0));
});
app.error.split_stacktrace = (function app$error$split_stacktrace(stacktrace,verbose_QMARK_){
if(cljs.core.truth_(verbose_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stacktrace], null);
} else {
var stack_count = cljs.core.count(stacktrace);
if((stack_count <= (10))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stacktrace], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),stacktrace),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((stack_count - (5)),stacktrace)], null);
}
}
});
app.error.print_stacktrace = (function app$error$print_stacktrace(stacktrace,p__60498){
var map__60499 = p__60498;
var map__60499__$1 = cljs.core.__destructure_map(map__60499);
var verbose_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var stacktrace__$1 = sci.core.format_stacktrace(stacktrace);
var segments = app.error.split_stacktrace(stacktrace__$1,verbose_QMARK_);
var vec__60500 = segments;
var fst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60500,(0),null);
var snd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60500,(1),null);
cljs.core.run_BANG_((function (p1__60496_SHARP_){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__60496_SHARP_,"\n"], 0));
}),fst);

if(cljs.core.truth_(snd)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["...\n"], 0));

return cljs.core.run_BANG_((function (p1__60497_SHARP_){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__60497_SHARP_,"\n"], 0));
}),snd);
} else {
return null;
}
});
app.error.error_context = (function app$error$error_context(ex,src_map){
var map__60503 = cljs.core.ex_data(ex);
var map__60503__$1 = cljs.core.__destructure_map(map__60503);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_((function (){var and__4251__auto__ = file;
if(cljs.core.truth_(and__4251__auto__)){
return line;
} else {
return and__4251__auto__;
}
})())){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_map,file);
if(cljs.core.truth_(temp__5753__auto__)){
var content = temp__5753__auto__;
var matching_line = (line - (1));
var start_line = (function (){var x__4336__auto__ = (matching_line - (4));
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var end_line = (matching_line + (6));
var vec__60504 = cljs.core.split_at(((matching_line - start_line) + (1)),cljs.core.take.cljs$core$IFn$_invoke$arity$2((end_line - start_line),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start_line,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,clojure.string.split_lines(content)))));
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(1),null);
var snippet_lines = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,[clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((column - (1))," ")),["^--- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(ex))].join('')].join('')], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0));
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,snippet_lines);
var max_size = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.str),indices));
var snippet_lines__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60507){
var vec__60508 = p__60507;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60508,(0),null);
var line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60508,(1),null);
if(cljs.core.truth_(idx)){
var line_number = (idx + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number).padStart(max_size,"0")),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line__$1)].join('');
} else {
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((2) + max_size)," ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line__$1)].join('');
}
}),snippet_lines);
return ["\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",snippet_lines__$1)].join('');
} else {
return null;
}
} else {
return null;
}
});
app.error.right_pad = (function app$error$right_pad(s,n){
var n__$1 = (n - cljs.core.count(s));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n__$1," "))].join('');
});
app.error.error_handler = (function app$error$error_handler(e,src_map){
var d = cljs.core.ex_data(e);
var sci_error_QMARK_ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword("sci","error","sci/error",-979082803));
var stacktrace = sci.core.stacktrace(e);
app.error.ruler("Scittle error");

var temp__5753__auto___60519 = e.name;
if(cljs.core.truth_(temp__5753__auto___60519)){
var name_60520 = temp__5753__auto___60519;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Error",name_60520)){
} else {
app.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Type:    ",name_60520], 0));
}
} else {
}

var temp__5753__auto___60521 = e.message;
if(cljs.core.truth_(temp__5753__auto___60521)){
var m_60522 = temp__5753__auto___60521;
app.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Message:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_60522)].join('')], 0));
} else {
}

var temp__5753__auto___60523 = cljs.core.ex_data(cljs.core.ex_cause(e));
if(cljs.core.truth_(temp__5753__auto___60523)){
var d_60524__$1 = temp__5753__auto___60523;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data:     "], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_60524__$1], 0));
} else {
}

var map__60511_60525 = d;
var map__60511_60526__$1 = cljs.core.__destructure_map(map__60511_60525);
var file_60527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60511_60526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_60528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60511_60526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60511_60526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(line_60528)){
app.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Location: ",(cljs.core.truth_(file_60527)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_60527),":"].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60528),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60529),""].join('')], 0));
} else {
}

var temp__5753__auto___60530 = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(temp__5753__auto___60530)){
var phase_60531 = temp__5753__auto___60530;
app.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Phase:   ",phase_60531], 0));
} else {
}

var temp__5753__auto___60532 = ((sci_error_QMARK_)?app.error.error_context(e,src_map):null);
if(cljs.core.truth_(temp__5753__auto___60532)){
var ec_60533 = temp__5753__auto___60532;
app.error.ruler("Context");

app.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ec_60533], 0));
} else {
}

if(sci_error_QMARK_){
var temp__5753__auto__ = (function (){var st = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60512_60534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60513_60535 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60514_60536 = true;
var _STAR_print_fn_STAR__temp_val__60515_60537 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60514_60536);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60515_60537);

try{if(cljs.core.truth_(stacktrace)){
app.error.print_stacktrace(stacktrace,src_map);
} else {
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60513_60535);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60512_60534);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
if(clojure.string.blank_QMARK_(st)){
return null;
} else {
return st;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var st = temp__5753__auto__;
app.error.ruler("Stack trace");

return app.error.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st], 0));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=app.error.js.map
