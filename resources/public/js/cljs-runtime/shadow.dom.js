goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_52587 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_52587(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_52597 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_52597(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50812 = coll;
var G__50813 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50812,G__50813) : shadow.dom.lazy_native_coll_seq.call(null,G__50812,G__50813));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50863 = arguments.length;
switch (G__50863) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50883 = arguments.length;
switch (G__50883) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50897 = arguments.length;
switch (G__50897) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50914 = arguments.length;
switch (G__50914) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50935 = arguments.length;
switch (G__50935) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50955 = arguments.length;
switch (G__50955) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50969){if((e50969 instanceof Object)){
var e = e50969;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50969;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50990 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50991 = null;
var count__50992 = (0);
var i__50993 = (0);
while(true){
if((i__50993 < count__50992)){
var el = chunk__50991.cljs$core$IIndexed$_nth$arity$2(null,i__50993);
var handler_52654__$1 = ((function (seq__50990,chunk__50991,count__50992,i__50993,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50990,chunk__50991,count__50992,i__50993,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52654__$1);


var G__52658 = seq__50990;
var G__52659 = chunk__50991;
var G__52660 = count__50992;
var G__52661 = (i__50993 + (1));
seq__50990 = G__52658;
chunk__50991 = G__52659;
count__50992 = G__52660;
i__50993 = G__52661;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50990);
if(temp__5753__auto__){
var seq__50990__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50990__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50990__$1);
var G__52665 = cljs.core.chunk_rest(seq__50990__$1);
var G__52666 = c__4679__auto__;
var G__52667 = cljs.core.count(c__4679__auto__);
var G__52668 = (0);
seq__50990 = G__52665;
chunk__50991 = G__52666;
count__50992 = G__52667;
i__50993 = G__52668;
continue;
} else {
var el = cljs.core.first(seq__50990__$1);
var handler_52669__$1 = ((function (seq__50990,chunk__50991,count__50992,i__50993,el,seq__50990__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50990,chunk__50991,count__50992,i__50993,el,seq__50990__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52669__$1);


var G__52671 = cljs.core.next(seq__50990__$1);
var G__52672 = null;
var G__52673 = (0);
var G__52674 = (0);
seq__50990 = G__52671;
chunk__50991 = G__52672;
count__50992 = G__52673;
i__50993 = G__52674;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51019 = arguments.length;
switch (G__51019) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51032 = cljs.core.seq(events);
var chunk__51033 = null;
var count__51034 = (0);
var i__51035 = (0);
while(true){
if((i__51035 < count__51034)){
var vec__51059 = chunk__51033.cljs$core$IIndexed$_nth$arity$2(null,i__51035);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52688 = seq__51032;
var G__52689 = chunk__51033;
var G__52690 = count__51034;
var G__52691 = (i__51035 + (1));
seq__51032 = G__52688;
chunk__51033 = G__52689;
count__51034 = G__52690;
i__51035 = G__52691;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51032);
if(temp__5753__auto__){
var seq__51032__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51032__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51032__$1);
var G__52693 = cljs.core.chunk_rest(seq__51032__$1);
var G__52694 = c__4679__auto__;
var G__52695 = cljs.core.count(c__4679__auto__);
var G__52696 = (0);
seq__51032 = G__52693;
chunk__51033 = G__52694;
count__51034 = G__52695;
i__51035 = G__52696;
continue;
} else {
var vec__51070 = cljs.core.first(seq__51032__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51070,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52698 = cljs.core.next(seq__51032__$1);
var G__52699 = null;
var G__52700 = (0);
var G__52701 = (0);
seq__51032 = G__52698;
chunk__51033 = G__52699;
count__51034 = G__52700;
i__51035 = G__52701;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51074 = cljs.core.seq(styles);
var chunk__51075 = null;
var count__51076 = (0);
var i__51077 = (0);
while(true){
if((i__51077 < count__51076)){
var vec__51091 = chunk__51075.cljs$core$IIndexed$_nth$arity$2(null,i__51077);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51091,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52708 = seq__51074;
var G__52709 = chunk__51075;
var G__52710 = count__51076;
var G__52711 = (i__51077 + (1));
seq__51074 = G__52708;
chunk__51075 = G__52709;
count__51076 = G__52710;
i__51077 = G__52711;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51074);
if(temp__5753__auto__){
var seq__51074__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51074__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51074__$1);
var G__52714 = cljs.core.chunk_rest(seq__51074__$1);
var G__52715 = c__4679__auto__;
var G__52716 = cljs.core.count(c__4679__auto__);
var G__52717 = (0);
seq__51074 = G__52714;
chunk__51075 = G__52715;
count__51076 = G__52716;
i__51077 = G__52717;
continue;
} else {
var vec__51102 = cljs.core.first(seq__51074__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51102,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51102,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52724 = cljs.core.next(seq__51074__$1);
var G__52725 = null;
var G__52726 = (0);
var G__52727 = (0);
seq__51074 = G__52724;
chunk__51075 = G__52725;
count__51076 = G__52726;
i__51077 = G__52727;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51111_52730 = key;
var G__51111_52731__$1 = (((G__51111_52730 instanceof cljs.core.Keyword))?G__51111_52730.fqn:null);
switch (G__51111_52731__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_52733 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_52733,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_52733,"aria-");
}
})())){
el.setAttribute(ks_52733,value);
} else {
(el[ks_52733] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51161){
var map__51162 = p__51161;
var map__51162__$1 = cljs.core.__destructure_map(map__51162);
var props = map__51162__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51164 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51164,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51164,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51164,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51171 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51171,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51171;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51175 = arguments.length;
switch (G__51175) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51194){
var vec__51196 = p__51194;
var seq__51197 = cljs.core.seq(vec__51196);
var first__51198 = cljs.core.first(seq__51197);
var seq__51197__$1 = cljs.core.next(seq__51197);
var nn = first__51198;
var first__51198__$1 = cljs.core.first(seq__51197__$1);
var seq__51197__$2 = cljs.core.next(seq__51197__$1);
var np = first__51198__$1;
var nc = seq__51197__$2;
var node = vec__51196;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51203 = nn;
var G__51204 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51203,G__51204) : create_fn.call(null,G__51203,G__51204));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51206 = nn;
var G__51207 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51206,G__51207) : create_fn.call(null,G__51206,G__51207));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51210 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51210,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51210,(1),null);
var seq__51213_52754 = cljs.core.seq(node_children);
var chunk__51214_52755 = null;
var count__51215_52756 = (0);
var i__51216_52757 = (0);
while(true){
if((i__51216_52757 < count__51215_52756)){
var child_struct_52758 = chunk__51214_52755.cljs$core$IIndexed$_nth$arity$2(null,i__51216_52757);
var children_52759 = shadow.dom.dom_node(child_struct_52758);
if(cljs.core.seq_QMARK_(children_52759)){
var seq__51297_52760 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52759));
var chunk__51299_52761 = null;
var count__51300_52762 = (0);
var i__51301_52763 = (0);
while(true){
if((i__51301_52763 < count__51300_52762)){
var child_52764 = chunk__51299_52761.cljs$core$IIndexed$_nth$arity$2(null,i__51301_52763);
if(cljs.core.truth_(child_52764)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52764);


var G__52767 = seq__51297_52760;
var G__52768 = chunk__51299_52761;
var G__52769 = count__51300_52762;
var G__52770 = (i__51301_52763 + (1));
seq__51297_52760 = G__52767;
chunk__51299_52761 = G__52768;
count__51300_52762 = G__52769;
i__51301_52763 = G__52770;
continue;
} else {
var G__52771 = seq__51297_52760;
var G__52772 = chunk__51299_52761;
var G__52773 = count__51300_52762;
var G__52774 = (i__51301_52763 + (1));
seq__51297_52760 = G__52771;
chunk__51299_52761 = G__52772;
count__51300_52762 = G__52773;
i__51301_52763 = G__52774;
continue;
}
} else {
var temp__5753__auto___52775 = cljs.core.seq(seq__51297_52760);
if(temp__5753__auto___52775){
var seq__51297_52779__$1 = temp__5753__auto___52775;
if(cljs.core.chunked_seq_QMARK_(seq__51297_52779__$1)){
var c__4679__auto___52780 = cljs.core.chunk_first(seq__51297_52779__$1);
var G__52781 = cljs.core.chunk_rest(seq__51297_52779__$1);
var G__52782 = c__4679__auto___52780;
var G__52783 = cljs.core.count(c__4679__auto___52780);
var G__52785 = (0);
seq__51297_52760 = G__52781;
chunk__51299_52761 = G__52782;
count__51300_52762 = G__52783;
i__51301_52763 = G__52785;
continue;
} else {
var child_52786 = cljs.core.first(seq__51297_52779__$1);
if(cljs.core.truth_(child_52786)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52786);


var G__52787 = cljs.core.next(seq__51297_52779__$1);
var G__52788 = null;
var G__52789 = (0);
var G__52790 = (0);
seq__51297_52760 = G__52787;
chunk__51299_52761 = G__52788;
count__51300_52762 = G__52789;
i__51301_52763 = G__52790;
continue;
} else {
var G__52791 = cljs.core.next(seq__51297_52779__$1);
var G__52792 = null;
var G__52793 = (0);
var G__52794 = (0);
seq__51297_52760 = G__52791;
chunk__51299_52761 = G__52792;
count__51300_52762 = G__52793;
i__51301_52763 = G__52794;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52759);
}


var G__52795 = seq__51213_52754;
var G__52796 = chunk__51214_52755;
var G__52797 = count__51215_52756;
var G__52798 = (i__51216_52757 + (1));
seq__51213_52754 = G__52795;
chunk__51214_52755 = G__52796;
count__51215_52756 = G__52797;
i__51216_52757 = G__52798;
continue;
} else {
var temp__5753__auto___52799 = cljs.core.seq(seq__51213_52754);
if(temp__5753__auto___52799){
var seq__51213_52800__$1 = temp__5753__auto___52799;
if(cljs.core.chunked_seq_QMARK_(seq__51213_52800__$1)){
var c__4679__auto___52801 = cljs.core.chunk_first(seq__51213_52800__$1);
var G__52802 = cljs.core.chunk_rest(seq__51213_52800__$1);
var G__52803 = c__4679__auto___52801;
var G__52804 = cljs.core.count(c__4679__auto___52801);
var G__52805 = (0);
seq__51213_52754 = G__52802;
chunk__51214_52755 = G__52803;
count__51215_52756 = G__52804;
i__51216_52757 = G__52805;
continue;
} else {
var child_struct_52807 = cljs.core.first(seq__51213_52800__$1);
var children_52810 = shadow.dom.dom_node(child_struct_52807);
if(cljs.core.seq_QMARK_(children_52810)){
var seq__51325_52811 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52810));
var chunk__51327_52812 = null;
var count__51328_52813 = (0);
var i__51329_52814 = (0);
while(true){
if((i__51329_52814 < count__51328_52813)){
var child_52815 = chunk__51327_52812.cljs$core$IIndexed$_nth$arity$2(null,i__51329_52814);
if(cljs.core.truth_(child_52815)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52815);


var G__52816 = seq__51325_52811;
var G__52817 = chunk__51327_52812;
var G__52818 = count__51328_52813;
var G__52819 = (i__51329_52814 + (1));
seq__51325_52811 = G__52816;
chunk__51327_52812 = G__52817;
count__51328_52813 = G__52818;
i__51329_52814 = G__52819;
continue;
} else {
var G__52820 = seq__51325_52811;
var G__52821 = chunk__51327_52812;
var G__52822 = count__51328_52813;
var G__52823 = (i__51329_52814 + (1));
seq__51325_52811 = G__52820;
chunk__51327_52812 = G__52821;
count__51328_52813 = G__52822;
i__51329_52814 = G__52823;
continue;
}
} else {
var temp__5753__auto___52824__$1 = cljs.core.seq(seq__51325_52811);
if(temp__5753__auto___52824__$1){
var seq__51325_52825__$1 = temp__5753__auto___52824__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51325_52825__$1)){
var c__4679__auto___52826 = cljs.core.chunk_first(seq__51325_52825__$1);
var G__52828 = cljs.core.chunk_rest(seq__51325_52825__$1);
var G__52829 = c__4679__auto___52826;
var G__52830 = cljs.core.count(c__4679__auto___52826);
var G__52831 = (0);
seq__51325_52811 = G__52828;
chunk__51327_52812 = G__52829;
count__51328_52813 = G__52830;
i__51329_52814 = G__52831;
continue;
} else {
var child_52833 = cljs.core.first(seq__51325_52825__$1);
if(cljs.core.truth_(child_52833)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52833);


var G__52834 = cljs.core.next(seq__51325_52825__$1);
var G__52835 = null;
var G__52836 = (0);
var G__52837 = (0);
seq__51325_52811 = G__52834;
chunk__51327_52812 = G__52835;
count__51328_52813 = G__52836;
i__51329_52814 = G__52837;
continue;
} else {
var G__52839 = cljs.core.next(seq__51325_52825__$1);
var G__52840 = null;
var G__52841 = (0);
var G__52842 = (0);
seq__51325_52811 = G__52839;
chunk__51327_52812 = G__52840;
count__51328_52813 = G__52841;
i__51329_52814 = G__52842;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52810);
}


var G__52850 = cljs.core.next(seq__51213_52800__$1);
var G__52851 = null;
var G__52852 = (0);
var G__52853 = (0);
seq__51213_52754 = G__52850;
chunk__51214_52755 = G__52851;
count__51215_52756 = G__52852;
i__51216_52757 = G__52853;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51390 = cljs.core.seq(node);
var chunk__51391 = null;
var count__51392 = (0);
var i__51394 = (0);
while(true){
if((i__51394 < count__51392)){
var n = chunk__51391.cljs$core$IIndexed$_nth$arity$2(null,i__51394);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52875 = seq__51390;
var G__52876 = chunk__51391;
var G__52877 = count__51392;
var G__52878 = (i__51394 + (1));
seq__51390 = G__52875;
chunk__51391 = G__52876;
count__51392 = G__52877;
i__51394 = G__52878;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51390);
if(temp__5753__auto__){
var seq__51390__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51390__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51390__$1);
var G__52879 = cljs.core.chunk_rest(seq__51390__$1);
var G__52880 = c__4679__auto__;
var G__52881 = cljs.core.count(c__4679__auto__);
var G__52882 = (0);
seq__51390 = G__52879;
chunk__51391 = G__52880;
count__51392 = G__52881;
i__51394 = G__52882;
continue;
} else {
var n = cljs.core.first(seq__51390__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52884 = cljs.core.next(seq__51390__$1);
var G__52885 = null;
var G__52886 = (0);
var G__52887 = (0);
seq__51390 = G__52884;
chunk__51391 = G__52885;
count__51392 = G__52886;
i__51394 = G__52887;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51421 = arguments.length;
switch (G__51421) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51427 = arguments.length;
switch (G__51427) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51463 = arguments.length;
switch (G__51463) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52910 = arguments.length;
var i__4865__auto___52911 = (0);
while(true){
if((i__4865__auto___52911 < len__4864__auto___52910)){
args__4870__auto__.push((arguments[i__4865__auto___52911]));

var G__52912 = (i__4865__auto___52911 + (1));
i__4865__auto___52911 = G__52912;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51479_52916 = cljs.core.seq(nodes);
var chunk__51480_52917 = null;
var count__51481_52918 = (0);
var i__51482_52919 = (0);
while(true){
if((i__51482_52919 < count__51481_52918)){
var node_52920 = chunk__51480_52917.cljs$core$IIndexed$_nth$arity$2(null,i__51482_52919);
fragment.appendChild(shadow.dom._to_dom(node_52920));


var G__52921 = seq__51479_52916;
var G__52922 = chunk__51480_52917;
var G__52923 = count__51481_52918;
var G__52924 = (i__51482_52919 + (1));
seq__51479_52916 = G__52921;
chunk__51480_52917 = G__52922;
count__51481_52918 = G__52923;
i__51482_52919 = G__52924;
continue;
} else {
var temp__5753__auto___52926 = cljs.core.seq(seq__51479_52916);
if(temp__5753__auto___52926){
var seq__51479_52927__$1 = temp__5753__auto___52926;
if(cljs.core.chunked_seq_QMARK_(seq__51479_52927__$1)){
var c__4679__auto___52929 = cljs.core.chunk_first(seq__51479_52927__$1);
var G__52930 = cljs.core.chunk_rest(seq__51479_52927__$1);
var G__52931 = c__4679__auto___52929;
var G__52932 = cljs.core.count(c__4679__auto___52929);
var G__52933 = (0);
seq__51479_52916 = G__52930;
chunk__51480_52917 = G__52931;
count__51481_52918 = G__52932;
i__51482_52919 = G__52933;
continue;
} else {
var node_52934 = cljs.core.first(seq__51479_52927__$1);
fragment.appendChild(shadow.dom._to_dom(node_52934));


var G__52935 = cljs.core.next(seq__51479_52927__$1);
var G__52936 = null;
var G__52937 = (0);
var G__52938 = (0);
seq__51479_52916 = G__52935;
chunk__51480_52917 = G__52936;
count__51481_52918 = G__52937;
i__51482_52919 = G__52938;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51478){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51478));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51511_52939 = cljs.core.seq(scripts);
var chunk__51512_52940 = null;
var count__51513_52941 = (0);
var i__51514_52942 = (0);
while(true){
if((i__51514_52942 < count__51513_52941)){
var vec__51541_52943 = chunk__51512_52940.cljs$core$IIndexed$_nth$arity$2(null,i__51514_52942);
var script_tag_52944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51541_52943,(0),null);
var script_body_52945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51541_52943,(1),null);
eval(script_body_52945);


var G__52946 = seq__51511_52939;
var G__52947 = chunk__51512_52940;
var G__52948 = count__51513_52941;
var G__52949 = (i__51514_52942 + (1));
seq__51511_52939 = G__52946;
chunk__51512_52940 = G__52947;
count__51513_52941 = G__52948;
i__51514_52942 = G__52949;
continue;
} else {
var temp__5753__auto___52950 = cljs.core.seq(seq__51511_52939);
if(temp__5753__auto___52950){
var seq__51511_52951__$1 = temp__5753__auto___52950;
if(cljs.core.chunked_seq_QMARK_(seq__51511_52951__$1)){
var c__4679__auto___52958 = cljs.core.chunk_first(seq__51511_52951__$1);
var G__52959 = cljs.core.chunk_rest(seq__51511_52951__$1);
var G__52960 = c__4679__auto___52958;
var G__52961 = cljs.core.count(c__4679__auto___52958);
var G__52962 = (0);
seq__51511_52939 = G__52959;
chunk__51512_52940 = G__52960;
count__51513_52941 = G__52961;
i__51514_52942 = G__52962;
continue;
} else {
var vec__51546_52964 = cljs.core.first(seq__51511_52951__$1);
var script_tag_52965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51546_52964,(0),null);
var script_body_52966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51546_52964,(1),null);
eval(script_body_52966);


var G__52968 = cljs.core.next(seq__51511_52951__$1);
var G__52969 = null;
var G__52970 = (0);
var G__52971 = (0);
seq__51511_52939 = G__52968;
chunk__51512_52940 = G__52969;
count__51513_52941 = G__52970;
i__51514_52942 = G__52971;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51554){
var vec__51555 = p__51554;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51555,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51555,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51581 = arguments.length;
switch (G__51581) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51614 = cljs.core.seq(style_keys);
var chunk__51615 = null;
var count__51616 = (0);
var i__51617 = (0);
while(true){
if((i__51617 < count__51616)){
var it = chunk__51615.cljs$core$IIndexed$_nth$arity$2(null,i__51617);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52977 = seq__51614;
var G__52978 = chunk__51615;
var G__52979 = count__51616;
var G__52980 = (i__51617 + (1));
seq__51614 = G__52977;
chunk__51615 = G__52978;
count__51616 = G__52979;
i__51617 = G__52980;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51614);
if(temp__5753__auto__){
var seq__51614__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51614__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51614__$1);
var G__52984 = cljs.core.chunk_rest(seq__51614__$1);
var G__52985 = c__4679__auto__;
var G__52986 = cljs.core.count(c__4679__auto__);
var G__52987 = (0);
seq__51614 = G__52984;
chunk__51615 = G__52985;
count__51616 = G__52986;
i__51617 = G__52987;
continue;
} else {
var it = cljs.core.first(seq__51614__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52988 = cljs.core.next(seq__51614__$1);
var G__52989 = null;
var G__52990 = (0);
var G__52991 = (0);
seq__51614 = G__52988;
chunk__51615 = G__52989;
count__51616 = G__52990;
i__51617 = G__52991;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51622,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51627 = k51622;
var G__51627__$1 = (((G__51627 instanceof cljs.core.Keyword))?G__51627.fqn:null);
switch (G__51627__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51622,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51629){
var vec__51630 = p__51629;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51630,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51630,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51621){
var self__ = this;
var G__51621__$1 = this;
return (new cljs.core.RecordIter((0),G__51621__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51623,other51624){
var self__ = this;
var this51623__$1 = this;
return (((!((other51624 == null)))) && ((((this51623__$1.constructor === other51624.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51623__$1.x,other51624.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51623__$1.y,other51624.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51623__$1.__extmap,other51624.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51622){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51666 = k51622;
var G__51666__$1 = (((G__51666 instanceof cljs.core.Keyword))?G__51666.fqn:null);
switch (G__51666__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51622);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51621){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51668 = cljs.core.keyword_identical_QMARK_;
var expr__51669 = k__4511__auto__;
if(cljs.core.truth_((pred__51668.cljs$core$IFn$_invoke$arity$2 ? pred__51668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__51669) : pred__51668.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__51669)))){
return (new shadow.dom.Coordinate(G__51621,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51668.cljs$core$IFn$_invoke$arity$2 ? pred__51668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__51669) : pred__51668.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__51669)))){
return (new shadow.dom.Coordinate(self__.x,G__51621,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51621),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51621){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51621,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51625){
var extmap__4542__auto__ = (function (){var G__51686 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51625,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51625)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51686);
} else {
return G__51686;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51625),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51625),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51698,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51716 = k51698;
var G__51716__$1 = (((G__51716 instanceof cljs.core.Keyword))?G__51716.fqn:null);
switch (G__51716__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51698,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51718){
var vec__51719 = p__51718;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51719,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51719,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51697){
var self__ = this;
var G__51697__$1 = this;
return (new cljs.core.RecordIter((0),G__51697__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51699,other51700){
var self__ = this;
var this51699__$1 = this;
return (((!((other51700 == null)))) && ((((this51699__$1.constructor === other51700.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51699__$1.w,other51700.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51699__$1.h,other51700.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51699__$1.__extmap,other51700.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51698){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51758 = k51698;
var G__51758__$1 = (((G__51758 instanceof cljs.core.Keyword))?G__51758.fqn:null);
switch (G__51758__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51698);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51697){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51762 = cljs.core.keyword_identical_QMARK_;
var expr__51763 = k__4511__auto__;
if(cljs.core.truth_((pred__51762.cljs$core$IFn$_invoke$arity$2 ? pred__51762.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51763) : pred__51762.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51763)))){
return (new shadow.dom.Size(G__51697,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51762.cljs$core$IFn$_invoke$arity$2 ? pred__51762.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51763) : pred__51762.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51763)))){
return (new shadow.dom.Size(self__.w,G__51697,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51697),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51697){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51697,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51702){
var extmap__4542__auto__ = (function (){var G__51785 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51702,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51702)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51785);
} else {
return G__51785;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51702),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51702),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__53042 = (i + (1));
var G__53043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53042;
ret = G__53043;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51888){
var vec__51890 = p__51888;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51890,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51921 = arguments.length;
switch (G__51921) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__53054 = ps;
var G__53055 = (i + (1));
el__$1 = G__53054;
i = G__53055;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__52069 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52069,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52069,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52069,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__52074_53067 = cljs.core.seq(props);
var chunk__52075_53068 = null;
var count__52076_53069 = (0);
var i__52077_53070 = (0);
while(true){
if((i__52077_53070 < count__52076_53069)){
var vec__52122_53071 = chunk__52075_53068.cljs$core$IIndexed$_nth$arity$2(null,i__52077_53070);
var k_53072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52122_53071,(0),null);
var v_53073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52122_53071,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_53072);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53072),v_53073);


var G__53079 = seq__52074_53067;
var G__53080 = chunk__52075_53068;
var G__53081 = count__52076_53069;
var G__53082 = (i__52077_53070 + (1));
seq__52074_53067 = G__53079;
chunk__52075_53068 = G__53080;
count__52076_53069 = G__53081;
i__52077_53070 = G__53082;
continue;
} else {
var temp__5753__auto___53083 = cljs.core.seq(seq__52074_53067);
if(temp__5753__auto___53083){
var seq__52074_53084__$1 = temp__5753__auto___53083;
if(cljs.core.chunked_seq_QMARK_(seq__52074_53084__$1)){
var c__4679__auto___53085 = cljs.core.chunk_first(seq__52074_53084__$1);
var G__53086 = cljs.core.chunk_rest(seq__52074_53084__$1);
var G__53087 = c__4679__auto___53085;
var G__53088 = cljs.core.count(c__4679__auto___53085);
var G__53089 = (0);
seq__52074_53067 = G__53086;
chunk__52075_53068 = G__53087;
count__52076_53069 = G__53088;
i__52077_53070 = G__53089;
continue;
} else {
var vec__52158_53091 = cljs.core.first(seq__52074_53084__$1);
var k_53092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52158_53091,(0),null);
var v_53093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52158_53091,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_53092);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53092),v_53093);


var G__53094 = cljs.core.next(seq__52074_53084__$1);
var G__53095 = null;
var G__53096 = (0);
var G__53097 = (0);
seq__52074_53067 = G__53094;
chunk__52075_53068 = G__53095;
count__52076_53069 = G__53096;
i__52077_53070 = G__53097;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__52192 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52192,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52192,(1),null);
var seq__52195_53107 = cljs.core.seq(node_children);
var chunk__52197_53108 = null;
var count__52198_53109 = (0);
var i__52199_53110 = (0);
while(true){
if((i__52199_53110 < count__52198_53109)){
var child_struct_53111 = chunk__52197_53108.cljs$core$IIndexed$_nth$arity$2(null,i__52199_53110);
if((!((child_struct_53111 == null)))){
if(typeof child_struct_53111 === 'string'){
var text_53115 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53115),child_struct_53111].join(''));
} else {
var children_53116 = shadow.dom.svg_node(child_struct_53111);
if(cljs.core.seq_QMARK_(children_53116)){
var seq__52384_53119 = cljs.core.seq(children_53116);
var chunk__52386_53120 = null;
var count__52387_53121 = (0);
var i__52388_53122 = (0);
while(true){
if((i__52388_53122 < count__52387_53121)){
var child_53123 = chunk__52386_53120.cljs$core$IIndexed$_nth$arity$2(null,i__52388_53122);
if(cljs.core.truth_(child_53123)){
node.appendChild(child_53123);


var G__53124 = seq__52384_53119;
var G__53125 = chunk__52386_53120;
var G__53126 = count__52387_53121;
var G__53127 = (i__52388_53122 + (1));
seq__52384_53119 = G__53124;
chunk__52386_53120 = G__53125;
count__52387_53121 = G__53126;
i__52388_53122 = G__53127;
continue;
} else {
var G__53128 = seq__52384_53119;
var G__53129 = chunk__52386_53120;
var G__53130 = count__52387_53121;
var G__53131 = (i__52388_53122 + (1));
seq__52384_53119 = G__53128;
chunk__52386_53120 = G__53129;
count__52387_53121 = G__53130;
i__52388_53122 = G__53131;
continue;
}
} else {
var temp__5753__auto___53134 = cljs.core.seq(seq__52384_53119);
if(temp__5753__auto___53134){
var seq__52384_53135__$1 = temp__5753__auto___53134;
if(cljs.core.chunked_seq_QMARK_(seq__52384_53135__$1)){
var c__4679__auto___53137 = cljs.core.chunk_first(seq__52384_53135__$1);
var G__53138 = cljs.core.chunk_rest(seq__52384_53135__$1);
var G__53139 = c__4679__auto___53137;
var G__53140 = cljs.core.count(c__4679__auto___53137);
var G__53141 = (0);
seq__52384_53119 = G__53138;
chunk__52386_53120 = G__53139;
count__52387_53121 = G__53140;
i__52388_53122 = G__53141;
continue;
} else {
var child_53142 = cljs.core.first(seq__52384_53135__$1);
if(cljs.core.truth_(child_53142)){
node.appendChild(child_53142);


var G__53143 = cljs.core.next(seq__52384_53135__$1);
var G__53144 = null;
var G__53145 = (0);
var G__53146 = (0);
seq__52384_53119 = G__53143;
chunk__52386_53120 = G__53144;
count__52387_53121 = G__53145;
i__52388_53122 = G__53146;
continue;
} else {
var G__53147 = cljs.core.next(seq__52384_53135__$1);
var G__53148 = null;
var G__53149 = (0);
var G__53150 = (0);
seq__52384_53119 = G__53147;
chunk__52386_53120 = G__53148;
count__52387_53121 = G__53149;
i__52388_53122 = G__53150;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53116);
}
}


var G__53152 = seq__52195_53107;
var G__53153 = chunk__52197_53108;
var G__53154 = count__52198_53109;
var G__53155 = (i__52199_53110 + (1));
seq__52195_53107 = G__53152;
chunk__52197_53108 = G__53153;
count__52198_53109 = G__53154;
i__52199_53110 = G__53155;
continue;
} else {
var G__53159 = seq__52195_53107;
var G__53160 = chunk__52197_53108;
var G__53161 = count__52198_53109;
var G__53162 = (i__52199_53110 + (1));
seq__52195_53107 = G__53159;
chunk__52197_53108 = G__53160;
count__52198_53109 = G__53161;
i__52199_53110 = G__53162;
continue;
}
} else {
var temp__5753__auto___53164 = cljs.core.seq(seq__52195_53107);
if(temp__5753__auto___53164){
var seq__52195_53165__$1 = temp__5753__auto___53164;
if(cljs.core.chunked_seq_QMARK_(seq__52195_53165__$1)){
var c__4679__auto___53166 = cljs.core.chunk_first(seq__52195_53165__$1);
var G__53167 = cljs.core.chunk_rest(seq__52195_53165__$1);
var G__53168 = c__4679__auto___53166;
var G__53169 = cljs.core.count(c__4679__auto___53166);
var G__53170 = (0);
seq__52195_53107 = G__53167;
chunk__52197_53108 = G__53168;
count__52198_53109 = G__53169;
i__52199_53110 = G__53170;
continue;
} else {
var child_struct_53171 = cljs.core.first(seq__52195_53165__$1);
if((!((child_struct_53171 == null)))){
if(typeof child_struct_53171 === 'string'){
var text_53172 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53172),child_struct_53171].join(''));
} else {
var children_53173 = shadow.dom.svg_node(child_struct_53171);
if(cljs.core.seq_QMARK_(children_53173)){
var seq__52426_53174 = cljs.core.seq(children_53173);
var chunk__52428_53175 = null;
var count__52429_53176 = (0);
var i__52430_53177 = (0);
while(true){
if((i__52430_53177 < count__52429_53176)){
var child_53178 = chunk__52428_53175.cljs$core$IIndexed$_nth$arity$2(null,i__52430_53177);
if(cljs.core.truth_(child_53178)){
node.appendChild(child_53178);


var G__53179 = seq__52426_53174;
var G__53180 = chunk__52428_53175;
var G__53181 = count__52429_53176;
var G__53182 = (i__52430_53177 + (1));
seq__52426_53174 = G__53179;
chunk__52428_53175 = G__53180;
count__52429_53176 = G__53181;
i__52430_53177 = G__53182;
continue;
} else {
var G__53187 = seq__52426_53174;
var G__53188 = chunk__52428_53175;
var G__53189 = count__52429_53176;
var G__53190 = (i__52430_53177 + (1));
seq__52426_53174 = G__53187;
chunk__52428_53175 = G__53188;
count__52429_53176 = G__53189;
i__52430_53177 = G__53190;
continue;
}
} else {
var temp__5753__auto___53194__$1 = cljs.core.seq(seq__52426_53174);
if(temp__5753__auto___53194__$1){
var seq__52426_53195__$1 = temp__5753__auto___53194__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52426_53195__$1)){
var c__4679__auto___53196 = cljs.core.chunk_first(seq__52426_53195__$1);
var G__53200 = cljs.core.chunk_rest(seq__52426_53195__$1);
var G__53201 = c__4679__auto___53196;
var G__53202 = cljs.core.count(c__4679__auto___53196);
var G__53203 = (0);
seq__52426_53174 = G__53200;
chunk__52428_53175 = G__53201;
count__52429_53176 = G__53202;
i__52430_53177 = G__53203;
continue;
} else {
var child_53204 = cljs.core.first(seq__52426_53195__$1);
if(cljs.core.truth_(child_53204)){
node.appendChild(child_53204);


var G__53205 = cljs.core.next(seq__52426_53195__$1);
var G__53206 = null;
var G__53207 = (0);
var G__53208 = (0);
seq__52426_53174 = G__53205;
chunk__52428_53175 = G__53206;
count__52429_53176 = G__53207;
i__52430_53177 = G__53208;
continue;
} else {
var G__53209 = cljs.core.next(seq__52426_53195__$1);
var G__53210 = null;
var G__53211 = (0);
var G__53212 = (0);
seq__52426_53174 = G__53209;
chunk__52428_53175 = G__53210;
count__52429_53176 = G__53211;
i__52430_53177 = G__53212;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53173);
}
}


var G__53213 = cljs.core.next(seq__52195_53165__$1);
var G__53214 = null;
var G__53215 = (0);
var G__53216 = (0);
seq__52195_53107 = G__53213;
chunk__52197_53108 = G__53214;
count__52198_53109 = G__53215;
i__52199_53110 = G__53216;
continue;
} else {
var G__53218 = cljs.core.next(seq__52195_53165__$1);
var G__53219 = null;
var G__53220 = (0);
var G__53221 = (0);
seq__52195_53107 = G__53218;
chunk__52197_53108 = G__53219;
count__52198_53109 = G__53220;
i__52199_53110 = G__53221;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53230 = arguments.length;
var i__4865__auto___53231 = (0);
while(true){
if((i__4865__auto___53231 < len__4864__auto___53230)){
args__4870__auto__.push((arguments[i__4865__auto___53231]));

var G__53232 = (i__4865__auto___53231 + (1));
i__4865__auto___53231 = G__53232;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq52498){
var G__52499 = cljs.core.first(seq52498);
var seq52498__$1 = cljs.core.next(seq52498);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52499,seq52498__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__52518 = arguments.length;
switch (G__52518) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__46786__auto___53251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_52542){
var state_val_52544 = (state_52542[(1)]);
if((state_val_52544 === (1))){
var state_52542__$1 = state_52542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52542__$1,(2),once_or_cleanup);
} else {
if((state_val_52544 === (2))){
var inst_52538 = (state_52542[(2)]);
var inst_52540 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_52542__$1 = (function (){var statearr_52550 = state_52542;
(statearr_52550[(7)] = inst_52538);

return statearr_52550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52542__$1,inst_52540);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46232__auto__ = null;
var shadow$dom$state_machine__46232__auto____0 = (function (){
var statearr_52554 = [null,null,null,null,null,null,null,null];
(statearr_52554[(0)] = shadow$dom$state_machine__46232__auto__);

(statearr_52554[(1)] = (1));

return statearr_52554;
});
var shadow$dom$state_machine__46232__auto____1 = (function (state_52542){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_52542);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e52556){var ex__46235__auto__ = e52556;
var statearr_52557_53255 = state_52542;
(statearr_52557_53255[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_52542[(4)]))){
var statearr_52559_53256 = state_52542;
(statearr_52559_53256[(1)] = cljs.core.first((state_52542[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53259 = state_52542;
state_52542 = G__53259;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
shadow$dom$state_machine__46232__auto__ = function(state_52542){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46232__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46232__auto____1.call(this,state_52542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46232__auto____0;
shadow$dom$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46232__auto____1;
return shadow$dom$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_52563 = f__46787__auto__();
(statearr_52563[(6)] = c__46786__auto___53251);

return statearr_52563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
