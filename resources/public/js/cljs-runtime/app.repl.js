goog.provide('app.repl');
if((typeof app !== 'undefined') && (typeof app.repl !== 'undefined') && (typeof app.repl.repl_history !== 'undefined')){
} else {
app.repl.repl_history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"special","special",-1125941630),new cljs.core.Keyword(null,"value","value",305978217),"Type your Clojure symbolic expressions here"], null)], null));
}
if((typeof app !== 'undefined') && (typeof app.repl !== 'undefined') && (typeof app.repl.repl_input !== 'undefined')){
} else {
app.repl.repl_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.repl !== 'undefined') && (typeof app.repl.repl_multiline !== 'undefined')){
} else {
app.repl.repl_multiline = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Append `s` to the REPL history.
 *   Optional keyword `k` to use as a type.
 */
app.repl.write_repl_BANG_ = (function app$repl$write_repl_BANG_(var_args){
var G__79540 = arguments.length;
switch (G__79540) {
case 1:
return app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (s){
return app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"output","output",-1105869043));
}));

(app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.repl.repl_history,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),k,new cljs.core.Keyword(null,"value","value",305978217),s], null)], null));
}));

(app.repl.write_repl_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Increment the current tutorial steps.
 */
app.repl.inc_step_BANG_ = (function app$repl$inc_step_BANG_(){
return app.session.inc_BANG_(new cljs.core.Keyword(null,"step","step",1288888124));
});
/**
 * Increment the current tutorial steps.
 */
app.repl.dec_step_BANG_ = (function app$repl$dec_step_BANG_(){
return app.session.dec_BANG_(new cljs.core.Keyword(null,"step","step",1288888124));
});
app.repl.tutorial_active_QMARK_ = (function app$repl$tutorial_active_QMARK_(){
return app.session.get(new cljs.core.Keyword(null,"tutorial","tutorial",1017223195)) === true;
});
/**
 * Start the tutorial setting the initial step into the session.
 */
app.repl.start_tutorial = (function app$repl$start_tutorial(){
app.session.set_BANG_(new cljs.core.Keyword(null,"tutorial","tutorial",1017223195),true);

app.session.set_BANG_(new cljs.core.Keyword(null,"step","step",1288888124),(0));

return "Tutorial started!";
});
/**
 * Delete all the repl history.
 */
app.repl.clear_repl = (function app$repl$clear_repl(){
cljs.core.reset_BANG_(app.repl.repl_history,cljs.core.PersistentVector.EMPTY);

return null;
});
/**
 * Reset the tutorial session.
 */
app.repl.restart_tutorial = (function app$repl$restart_tutorial(){
return cljs.core.reset_BANG_(app.session.session,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Save user name into the session.
 */
app.repl.set_name = (function app$repl$set_name(s){
if(typeof s === 'string'){
app.session.set_BANG_(new cljs.core.Keyword(null,"user-name","user-name",1302913545),s);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-name","user-name",1302913545),s], null);
} else {
return null;
}
});
/**
 * Change the prompt style.
 */
app.repl.set_prompt = (function app$repl$set_prompt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___79572 = arguments.length;
var i__4865__auto___79573 = (0);
while(true){
if((i__4865__auto___79573 < len__4864__auto___79572)){
args__4870__auto__.push((arguments[i__4865__auto___79573]));

var G__79574 = (i__4865__auto___79573 + (1));
i__4865__auto___79573 = G__79574;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.repl.set_prompt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.repl.set_prompt.cljs$core$IFn$_invoke$arity$variadic = (function (p__79542){
var map__79543 = p__79542;
var map__79543__$1 = cljs.core.__destructure_map(map__79543);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79543__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79543__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(typeof text === 'string'){
app.session.set_BANG_(new cljs.core.Keyword(null,"prompt-text","prompt-text",1559526625),text);
} else {
}

if(typeof color === 'string'){
var valid_colors = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-amber-400","text-yellow-400","text-red-400","text-green-400","text-orange-400","text-slate-400","text-gray-400","text-teal-400","text-lime-400","text-blue-400","text-violet-400","text-purple-400","text-pink-400","text-rose-400","text-emerald-400"], null);
var full_color = ["text-",clojure.string.lower_case(color),"-400"].join('');
var colors = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["amber","yellow","red","green","orange","slate","gray","teal","lime","blue","violet","purple","pink","rose","emerald"], null);
if(cljs.core.truth_(app.utils.in_QMARK_(valid_colors,full_color))){
return app.session.set_BANG_(new cljs.core.Keyword(null,"prompt-color","prompt-color",1906612381),full_color);
} else {
return ["Invalid color: ",color,"! Valid colors are: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",colors),"."].join('');
}
} else {
return null;
}
}));

(app.repl.set_prompt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.repl.set_prompt.cljs$lang$applyTo = (function (seq79541){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq79541));
}));

app.sci.set_print_fn((function (s){
return app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$1(s);
}));
app.sci.extend_ctx(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"more","more",-418290273,null),new cljs.core.Symbol(null,"set-prompt","set-prompt",-932244910,null),new cljs.core.Symbol(null,"set-step","set-step",-961995539,null),new cljs.core.Symbol(null,"restart","restart",-139352085,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"my-name","my-name",671011245,null),new cljs.core.Symbol(null,"next-step","next-step",-1247741282,null),new cljs.core.Symbol(null,"prev-step","prev-step",-1331264849,null)],[(function (){
return true;
}),app.repl.set_prompt,((app.env.DEBUG)?(function (v){
return app.session.set_BANG_(new cljs.core.Keyword(null,"step","step",1288888124),v);
}):null),app.repl.restart_tutorial,app.repl.start_tutorial,app.repl.clear_repl,app.repl.set_name,app.repl.inc_step_BANG_,app.repl.dec_step_BANG_])], null)], null));
/**
 * Check if the sci output pass the test function.
 *   If it does, increase the tutorial step.
 */
app.repl.check_tutorial_test = (function app$repl$check_tutorial_test(out){
if(app.repl.tutorial_active_QMARK_()){
var step_idx = app.session.get(new cljs.core.Keyword(null,"step","step",1288888124));
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.tutorial.tutorial,step_idx);
var test_fn = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(step);
try{if(cljs.core.truth_((test_fn.cljs$core$IFn$_invoke$arity$1 ? test_fn.cljs$core$IFn$_invoke$arity$1(out) : test_fn.call(null,out)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HUUUUUUU"], 0));

return app.repl.inc_step_BANG_();
} else {
return null;
}
}catch (e79544){var _ = e79544;
return null;
}} else {
return null;
}
});
/**
 * Return formatted output for REPL print.
 */
app.repl.format_output = (function app$repl$format_output(out){
if((out == null)){
return "nil";
} else {
if(typeof out === 'string'){
return ["\"",out,"\""].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(out);

}
}
});
/**
 * Return the entire command typed into the REPL.
 *   Update the repl-multiline in case.
 */
app.repl.input_command = (function app$repl$input_command(){
if(cljs.core.empty_QMARK_(cljs.core.deref(app.repl.repl_multiline))){
return cljs.core.deref(app.repl.repl_input);
} else {
return cljs.core.deref(app.repl.repl_multiline);
}
});
app.repl.update_multiline_BANG_ = (function app$repl$update_multiline_BANG_(){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(app.repl.repl_multiline)))){
return cljs.core.reset_BANG_(app.repl.repl_multiline,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.repl.repl_multiline)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.repl.repl_input))].join(''));
} else {
return null;
}
});
app.repl.write_input_BANG_ = (function app$repl$write_input_BANG_(in$){
if(cljs.core.empty_QMARK_(cljs.core.deref(app.repl.repl_multiline))){
return app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"input","input",556931961));
} else {
return app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374));
}
});
/**
 * Onkeydown event for the REPL input; Evaluate the string
 *   using SCI and add the output/error to the REPL. Manage
 *   the last command using arrow-up and a basic multiline
 *   in case of EOF error.
 */
app.repl.on_keydown = (function app$repl$on_keydown(e){
var in$ = cljs.core.deref(app.repl.repl_input);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter");
if(and__4251__auto__){
return cljs.core.not_empty(in$);
} else {
return and__4251__auto__;
}
})())){
app.env.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input: ",in$], 0));

app.repl.update_multiline_BANG_();

app.repl.write_input_BANG_(in$);

var cmd_79575 = app.repl.input_command();
try{var out_79576 = app.sci.eval_string(cmd_79575);
var out_str_79577 = app.repl.format_output(out_79576);
app.repl.check_tutorial_test(out_79576);

app.env.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["output: ",out_79576], 0));

cljs.core.reset_BANG_(app.repl.repl_input,null);

cljs.core.reset_BANG_(app.repl.repl_multiline,null);

app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$1(out_str_79577);
}catch (e79546){var e_79578__$1 = e79546;
if(clojure.string.includes_QMARK_(e_79578__$1.message,"EOF while reading")){
cljs.core.reset_BANG_(app.repl.repl_input,null);

cljs.core.reset_BANG_(app.repl.repl_multiline,cmd_79575);
} else {
cljs.core.reset_BANG_(app.repl.repl_input,null);

cljs.core.reset_BANG_(app.repl.repl_multiline,null);

app.repl.write_repl_BANG_.cljs$core$IFn$_invoke$arity$2(e_79578__$1.message,new cljs.core.Keyword(null,"error","error",-978969032));

}
}} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"ArrowUp")){
var inputs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__79545_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__79545_SHARP_),new cljs.core.Keyword(null,"input","input",556931961));
}),cljs.core.deref(app.repl.repl_history));
var last_in = cljs.core.last(inputs);
return cljs.core.reset_BANG_(app.repl.repl_input,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(last_in));
} else {
return null;
}
});
/**
 * Render the prompt element, extracting color and text
 *   from the session.
 */
app.repl.prompt = (function app$repl$prompt(){
var color = app.session.get(new cljs.core.Keyword(null,"prompt-color","prompt-color",1906612381));
var text = app.session.get(new cljs.core.Keyword(null,"prompt-text","prompt-text",1559526625));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "text-amber-500 dark:text-amber-400";
}
})()], null)], null),(function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "=>";
}
})()], null);
});
/**
 * Render a list of div containing the command history
 *   of the REPL.
 */
app.repl.history_view = (function app$repl$history_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4652__auto__ = (function app$repl$history_view_$_iter__79547(s__79548){
return (new cljs.core.LazySeq(null,(function (){
var s__79548__$1 = s__79548;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__79548__$1);
if(temp__5753__auto__){
var s__79548__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79548__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79548__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79550 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79549 = (0);
while(true){
if((i__79549 < size__4651__auto__)){
var vec__79551 = cljs.core._nth(c__4650__auto__,i__79549);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79551,(0),null);
var map__79554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79551,(1),null);
var map__79554__$1 = cljs.core.__destructure_map(map__79554);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79554__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79554__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append(b__79550,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"mt-1 mb-2":null)], null)], null),(function (){var pred__79555 = cljs.core._EQ_;
var expr__79556 = type;
if(cljs.core.truth_((pred__79555.cljs$core$IFn$_invoke$arity$2 ? pred__79555.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__79556) : pred__79555.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__79556)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.repl.prompt], null);
} else {
if(cljs.core.truth_((pred__79555.cljs$core$IFn$_invoke$arity$2 ? pred__79555.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__79556) : pred__79555.call(null,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__79556)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),">"], null);
} else {
return null;
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"text-red-400":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"text-gray-500 italic":null)], null)], null),value], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["repl-part-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)));

var G__79580 = (i__79549 + (1));
i__79549 = G__79580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79550),app$repl$history_view_$_iter__79547(cljs.core.chunk_rest(s__79548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79550),null);
}
} else {
var vec__79558 = cljs.core.first(s__79548__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79558,(0),null);
var map__79561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79558,(1),null);
var map__79561__$1 = cljs.core.__destructure_map(map__79561);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79561__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79561__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"mt-1 mb-2":null)], null)], null),(function (){var pred__79562 = cljs.core._EQ_;
var expr__79563 = type;
if(cljs.core.truth_((pred__79562.cljs$core$IFn$_invoke$arity$2 ? pred__79562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__79563) : pred__79562.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__79563)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.repl.prompt], null);
} else {
if(cljs.core.truth_((pred__79562.cljs$core$IFn$_invoke$arity$2 ? pred__79562.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__79563) : pred__79562.call(null,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__79563)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),">"], null);
} else {
return null;
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"text-red-400":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"text-gray-500 italic":null)], null)], null),value], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["repl-part-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)),app$repl$history_view_$_iter__79547(cljs.core.rest(s__79548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.deref(app.repl.repl_history)));
})()], null);
});
/**
 * Scroll DOM element `el` to the bottom.
 */
app.repl.scroll_bottom = (function app$repl$scroll_bottom(el,_){
if(cljs.core.truth_(el)){
return setTimeout((function (){
return (el.scrollTop = el.scrollHeight);
}),(0));
} else {
return null;
}
});
if((typeof app !== 'undefined') && (typeof app.repl !== 'undefined') && (typeof app.repl.input_el !== 'undefined')){
} else {
app.repl.input_el = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.repl.focus_input = (function app$repl$focus_input(){
return cljs.core.deref(app.repl.input_el).focus();
});
app.repl.repl_el = (function app$repl$repl_el(){
var with_let79568 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let79568","with-let79568",837820171));
var temp__5757__auto___79587 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___79587 == null)){
} else {
var c__44351__auto___79588 = temp__5757__auto___79587;
if((with_let79568.generation === c__44351__auto___79588.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let79568.generation = c__44351__auto___79588.ratomGeneration);
}

var init79569 = (with_let79568.length === (0));
var container_el = ((((init79569) || (cljs.core.not(with_let79568.hasOwnProperty((0))))))?(with_let79568[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let79568[(0)]));
var has_focus = ((((init79569) || (cljs.core.not(with_let79568.hasOwnProperty((1))))))?(with_let79568[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let79568[(1)]));
var scroll_watch = ((((init79569) || (cljs.core.not(with_let79568.hasOwnProperty((2))))))?(with_let79568[(2)] = reagent.core.track_BANG_((function (){
return app.repl.scroll_bottom(cljs.core.deref(container_el),cljs.core.deref(app.repl.repl_history));
}))):(with_let79568[(2)]));
var res79570 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","border-gray-300","dark:border-0","rounded-md","bg-white","dark:bg-slate-800","font-mono","text-sm","text-black","dark:text-white","sm:h-[500px]","h-[200px]","xl:max-w-[618px]","lg:max-w-[518px]","md:max-w-[350px]","overflow-auto","p-3","-my-8","shadow-2xl"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__79565_SHARP_){
return cljs.core.reset_BANG_(container_el,p1__79565_SHARP_);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.repl.focus_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.repl.history_view], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","pl-2"], null)], null),((cljs.core.empty_QMARK_(cljs.core.deref(app.repl.repl_multiline)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.repl.prompt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),">"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","px-2","outline-none","bg-transparent"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__79566_SHARP_){
return cljs.core.reset_BANG_(app.repl.input_el,p1__79566_SHARP_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(app.repl.repl_input),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.reset_BANG_(has_focus,true);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.reset_BANG_(has_focus,false);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),app.repl.on_keydown,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__79567_SHARP_){
return cljs.core.reset_BANG_(app.repl.repl_input,app.utils.get_val(p1__79567_SHARP_));
})], null)], null)], null)], null);
var destroy__44350__auto___79589 = (function (){
return reagent.core.dispose_BANG_(scroll_watch);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let79568.destroy == null)){
(with_let79568.destroy = destroy__44350__auto___79589);
} else {
}
} else {
destroy__44350__auto___79589();
}

return res79570;
});

//# sourceMappingURL=app.repl.js.map
