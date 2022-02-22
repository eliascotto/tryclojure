goog.provide('app.views.home');
app.views.home.intro_title = "Got 5 minutes?";
app.views.home.intro_content = "> If you want everything to be familiar, you'll never learn anything new. - Rich Hickey\n\nLet's have some fun! Here on the right you have a **REPL**, a command line\nwith a _read-eval-print_ loop. Everything you write will be evaluated. \nTry to type some expressions as `(+ 1 2)` or click on code to auto insert.\n\nType `(start)` when you're ready!";
/**
 * Returns a list of `title` and `content`
 *   based on the current step stored into the session.
 */
app.views.home.compute_step = (function app$views$home$compute_step(){
if(app.repl.tutorial_active_QMARK_()){
var step_idx = app.session.get(new cljs.core.Keyword(null,"step","step",1288888124));
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.tutorial.tutorial,step_idx);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(step),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(step)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.home.intro_title,app.views.home.intro_content], null);
}
});
app.views.home.link_target = (function app$views$home$link_target(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(text,/<a /,"<a target=\"_blank\" "),state], null);
});
app.views.home.re_doublebrackets = /(\[\[(.+)\]\])/;
app.views.home.session_vars = (function app$views$home$session_vars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var res = cljs.core.re_find(app.views.home.re_doublebrackets,text);
if(cljs.core.truth_(res)){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.last(res));
var v = app.session.get(k);
return clojure.string.replace(text,app.views.home.re_doublebrackets,v);
} else {
return text;
}
})(),state], null);
});
app.views.home.parse_md = (function app$views$home$parse_md(s){
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.home.link_target,app.views.home.session_vars], null)], 0));
});
app.views.home.tutorial_view = (function app$views$home$tutorial_view(p__79736){
var vec__79737 = p__79736;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79737,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79737,(1),null);
var with_let79740 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let79740","with-let79740",862777636));
var temp__5757__auto___79743 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___79743 == null)){
} else {
var c__44351__auto___79744 = temp__5757__auto___79743;
if((with_let79740.generation === c__44351__auto___79744.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let79740.generation = c__44351__auto___79744.ratomGeneration);
}

var init79741 = (with_let79740.length === (0));
var click_fn = ((((init79741) || (cljs.core.not(with_let79740.hasOwnProperty((0))))))?(with_let79740[(0)] = (function (e){
var target = e.target;
var node_name = target.nodeName;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_name,"CODE")){
cljs.core.reset_BANG_(app.repl.repl_input,target.textContent);

return app.repl.focus_input();
} else {
return null;
}
})):(with_let79740[(0)]));
var res79742 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-gray-200","text-black","dark:text-white","dark:bg-gray-800","shadow-lg","rounded-l-md","w-full","md:p-8","p-6","min-h-[200px]","opacity-95"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-3xl","mb-4","font-bold","tracking-tight"], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["leading-relaxed","last:pb-0"], null),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),({"__html": app.views.home.parse_md(content)})], null)], null)], null);
return res79742;
});
app.views.home.view = (function app$views$home$view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","sm:flex-row","flex-col","items-center","justify-center","xl:-mt-32","lg:-mt-8","mt-0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","z-0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.home.tutorial_view,app.views.home.compute_step()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","z-10","sm:w-auto","w-full","sm:mt-0","mt-7","sm:mb-0","mb-14"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.repl.repl_el], null)], null)], null);
});

//# sourceMappingURL=app.views.home.js.map
