goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__57760){
var map__57761 = p__57760;
var map__57761__$1 = cljs.core.__destructure_map(map__57761);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57761__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57761__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57761__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__57762 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__57763 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__57763);

try{var vec__57764 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__57767,transformer){
var vec__57768 = p__57767;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57768,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57768,(1),null);
var G__57771 = text;
var G__57772 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__57771,G__57772) : transformer.call(null,G__57771,G__57772));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57764,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57764,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__57762);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57815 = arguments.length;
var i__4865__auto___57816 = (0);
while(true){
if((i__4865__auto___57816 < len__4864__auto___57815)){
args__4870__auto__.push((arguments[i__4865__auto___57816]));

var G__57817 = (i__4865__auto___57816 + (1));
i__4865__auto___57816 = G__57817;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq57773){
var G__57774 = cljs.core.first(seq57773);
var seq57773__$1 = cljs.core.next(seq57773);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57774,seq57773__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__57775_57818 = cljs.core.seq(lines);
var chunk__57776_57819 = null;
var count__57777_57820 = (0);
var i__57778_57821 = (0);
while(true){
if((i__57778_57821 < count__57777_57820)){
var line_57822 = chunk__57776_57819.cljs$core$IIndexed$_nth$arity$2(null,i__57778_57821);
markdown.links.parse_reference_link(line_57822,references);


var G__57823 = seq__57775_57818;
var G__57824 = chunk__57776_57819;
var G__57825 = count__57777_57820;
var G__57826 = (i__57778_57821 + (1));
seq__57775_57818 = G__57823;
chunk__57776_57819 = G__57824;
count__57777_57820 = G__57825;
i__57778_57821 = G__57826;
continue;
} else {
var temp__5753__auto___57827 = cljs.core.seq(seq__57775_57818);
if(temp__5753__auto___57827){
var seq__57775_57828__$1 = temp__5753__auto___57827;
if(cljs.core.chunked_seq_QMARK_(seq__57775_57828__$1)){
var c__4679__auto___57829 = cljs.core.chunk_first(seq__57775_57828__$1);
var G__57830 = cljs.core.chunk_rest(seq__57775_57828__$1);
var G__57831 = c__4679__auto___57829;
var G__57832 = cljs.core.count(c__4679__auto___57829);
var G__57833 = (0);
seq__57775_57818 = G__57830;
chunk__57776_57819 = G__57831;
count__57777_57820 = G__57832;
i__57778_57821 = G__57833;
continue;
} else {
var line_57834 = cljs.core.first(seq__57775_57828__$1);
markdown.links.parse_reference_link(line_57834,references);


var G__57835 = cljs.core.next(seq__57775_57828__$1);
var G__57836 = null;
var G__57837 = (0);
var G__57838 = (0);
seq__57775_57818 = G__57835;
chunk__57776_57819 = G__57836;
count__57777_57820 = G__57837;
i__57778_57821 = G__57838;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__57782_57839 = cljs.core.seq(lines);
var chunk__57783_57840 = null;
var count__57784_57841 = (0);
var i__57785_57842 = (0);
while(true){
if((i__57785_57842 < count__57784_57841)){
var line_57843 = chunk__57783_57840.cljs$core$IIndexed$_nth$arity$2(null,i__57785_57842);
markdown.links.parse_footnote_link(line_57843,footnotes);


var G__57844 = seq__57782_57839;
var G__57845 = chunk__57783_57840;
var G__57846 = count__57784_57841;
var G__57847 = (i__57785_57842 + (1));
seq__57782_57839 = G__57844;
chunk__57783_57840 = G__57845;
count__57784_57841 = G__57846;
i__57785_57842 = G__57847;
continue;
} else {
var temp__5753__auto___57848 = cljs.core.seq(seq__57782_57839);
if(temp__5753__auto___57848){
var seq__57782_57849__$1 = temp__5753__auto___57848;
if(cljs.core.chunked_seq_QMARK_(seq__57782_57849__$1)){
var c__4679__auto___57850 = cljs.core.chunk_first(seq__57782_57849__$1);
var G__57851 = cljs.core.chunk_rest(seq__57782_57849__$1);
var G__57852 = c__4679__auto___57850;
var G__57853 = cljs.core.count(c__4679__auto___57850);
var G__57854 = (0);
seq__57782_57839 = G__57851;
chunk__57783_57840 = G__57852;
count__57784_57841 = G__57853;
i__57785_57842 = G__57854;
continue;
} else {
var line_57855 = cljs.core.first(seq__57782_57849__$1);
markdown.links.parse_footnote_link(line_57855,footnotes);


var G__57856 = cljs.core.next(seq__57782_57849__$1);
var G__57857 = null;
var G__57858 = (0);
var G__57859 = (0);
seq__57782_57839 = G__57856;
chunk__57783_57840 = G__57857;
count__57784_57841 = G__57858;
i__57785_57842 = G__57859;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__57786 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57786,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__57789 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__57790 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__57791 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__57792 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__57791);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__57792);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__57793 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57793,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57793,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__57799_57860 = lines__$1;
var vec__57800_57861 = G__57799_57860;
var seq__57801_57862 = cljs.core.seq(vec__57800_57861);
var first__57802_57863 = cljs.core.first(seq__57801_57862);
var seq__57801_57864__$1 = cljs.core.next(seq__57801_57862);
var line_57865 = first__57802_57863;
var more_57866 = seq__57801_57864__$1;
var state_57867 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__57799_57868__$1 = G__57799_57860;
var state_57869__$1 = state_57867;
while(true){
var vec__57806_57870 = G__57799_57868__$1;
var seq__57807_57871 = cljs.core.seq(vec__57806_57870);
var first__57808_57872 = cljs.core.first(seq__57807_57871);
var seq__57807_57873__$1 = cljs.core.next(seq__57807_57871);
var line_57874__$1 = first__57808_57872;
var more_57875__$1 = seq__57807_57873__$1;
var state_57876__$2 = state_57869__$1;
var line_57877__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_57876__$2))?"":line_57874__$1);
var state_57878__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_57876__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_57876__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_57876__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_57876__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_57876__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_57875__$1))){
var G__57879 = more_57875__$1;
var G__57880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_57877__$2,cljs.core.first(more_57875__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_57878__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_57877__$2.trim()));
G__57799_57868__$1 = G__57879;
state_57869__$1 = G__57880;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_57878__$3))),line_57877__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_57878__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__57790);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__57789);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57881 = arguments.length;
var i__4865__auto___57882 = (0);
while(true){
if((i__4865__auto___57882 < len__4864__auto___57881)){
args__4870__auto__.push((arguments[i__4865__auto___57882]));

var G__57883 = (i__4865__auto___57882 + (1));
i__4865__auto___57882 = G__57883;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq57809){
var G__57810 = cljs.core.first(seq57809);
var seq57809__$1 = cljs.core.next(seq57809);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57810,seq57809__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57884 = arguments.length;
var i__4865__auto___57885 = (0);
while(true){
if((i__4865__auto___57885 < len__4864__auto___57884)){
args__4870__auto__.push((arguments[i__4865__auto___57885]));

var G__57886 = (i__4865__auto___57885 + (1));
i__4865__auto___57885 = G__57886;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq57811){
var G__57812 = cljs.core.first(seq57811);
var seq57811__$1 = cljs.core.next(seq57811);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57812,seq57811__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57887 = arguments.length;
var i__4865__auto___57888 = (0);
while(true){
if((i__4865__auto___57888 < len__4864__auto___57887)){
args__4870__auto__.push((arguments[i__4865__auto___57888]));

var G__57889 = (i__4865__auto___57888 + (1));
i__4865__auto___57888 = G__57889;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq57813){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57813));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57890 = arguments.length;
var i__4865__auto___57891 = (0);
while(true){
if((i__4865__auto___57891 < len__4864__auto___57890)){
args__4870__auto__.push((arguments[i__4865__auto___57891]));

var G__57892 = (i__4865__auto___57891 + (1));
i__4865__auto___57891 = G__57892;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq57814){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57814));
}));


//# sourceMappingURL=markdown.core.js.map
