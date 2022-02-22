goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46893 = arguments.length;
switch (G__46893) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46900 = (function (f,blockable,meta46901){
this.f = f;
this.blockable = blockable;
this.meta46901 = meta46901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46902,meta46901__$1){
var self__ = this;
var _46902__$1 = this;
return (new cljs.core.async.t_cljs$core$async46900(self__.f,self__.blockable,meta46901__$1));
}));

(cljs.core.async.t_cljs$core$async46900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46902){
var self__ = this;
var _46902__$1 = this;
return self__.meta46901;
}));

(cljs.core.async.t_cljs$core$async46900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46901","meta46901",-1721075356,null)], null);
}));

(cljs.core.async.t_cljs$core$async46900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46900");

(cljs.core.async.t_cljs$core$async46900.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46900.
 */
cljs.core.async.__GT_t_cljs$core$async46900 = (function cljs$core$async$__GT_t_cljs$core$async46900(f__$1,blockable__$1,meta46901){
return (new cljs.core.async.t_cljs$core$async46900(f__$1,blockable__$1,meta46901));
});

}

return (new cljs.core.async.t_cljs$core$async46900(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46948 = arguments.length;
switch (G__46948) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46964 = arguments.length;
switch (G__46964) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46973 = arguments.length;
switch (G__46973) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50808 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50808) : fn1.call(null,val_50808));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50808) : fn1.call(null,val_50808));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47002 = arguments.length;
switch (G__47002) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___50824 = n;
var x_50825 = (0);
while(true){
if((x_50825 < n__4741__auto___50824)){
(a[x_50825] = x_50825);

var G__50828 = (x_50825 + (1));
x_50825 = G__50828;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47041 = (function (flag,meta47042){
this.flag = flag;
this.meta47042 = meta47042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47043,meta47042__$1){
var self__ = this;
var _47043__$1 = this;
return (new cljs.core.async.t_cljs$core$async47041(self__.flag,meta47042__$1));
}));

(cljs.core.async.t_cljs$core$async47041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47043){
var self__ = this;
var _47043__$1 = this;
return self__.meta47042;
}));

(cljs.core.async.t_cljs$core$async47041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47042","meta47042",1142922968,null)], null);
}));

(cljs.core.async.t_cljs$core$async47041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47041");

(cljs.core.async.t_cljs$core$async47041.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47041.
 */
cljs.core.async.__GT_t_cljs$core$async47041 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47041(flag__$1,meta47042){
return (new cljs.core.async.t_cljs$core$async47041(flag__$1,meta47042));
});

}

return (new cljs.core.async.t_cljs$core$async47041(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47079 = (function (flag,cb,meta47080){
this.flag = flag;
this.cb = cb;
this.meta47080 = meta47080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47081,meta47080__$1){
var self__ = this;
var _47081__$1 = this;
return (new cljs.core.async.t_cljs$core$async47079(self__.flag,self__.cb,meta47080__$1));
}));

(cljs.core.async.t_cljs$core$async47079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47081){
var self__ = this;
var _47081__$1 = this;
return self__.meta47080;
}));

(cljs.core.async.t_cljs$core$async47079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47080","meta47080",-122788293,null)], null);
}));

(cljs.core.async.t_cljs$core$async47079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47079");

(cljs.core.async.t_cljs$core$async47079.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47079.
 */
cljs.core.async.__GT_t_cljs$core$async47079 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47079(flag__$1,cb__$1,meta47080){
return (new cljs.core.async.t_cljs$core$async47079(flag__$1,cb__$1,meta47080));
});

}

return (new cljs.core.async.t_cljs$core$async47079(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47103_SHARP_){
var G__47125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47103_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47125) : fret.call(null,G__47125));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47104_SHARP_){
var G__47130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47104_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47130) : fret.call(null,G__47130));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50857 = (i + (1));
i = G__50857;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50868 = arguments.length;
var i__4865__auto___50869 = (0);
while(true){
if((i__4865__auto___50869 < len__4864__auto___50868)){
args__4870__auto__.push((arguments[i__4865__auto___50869]));

var G__50874 = (i__4865__auto___50869 + (1));
i__4865__auto___50869 = G__50874;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47168){
var map__47173 = p__47168;
var map__47173__$1 = cljs.core.__destructure_map(map__47173);
var opts = map__47173__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47149){
var G__47151 = cljs.core.first(seq47149);
var seq47149__$1 = cljs.core.next(seq47149);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47151,seq47149__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47204 = arguments.length;
switch (G__47204) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46786__auto___50885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_47272){
var state_val_47280 = (state_47272[(1)]);
if((state_val_47280 === (7))){
var inst_47257 = (state_47272[(2)]);
var state_47272__$1 = state_47272;
var statearr_47282_50886 = state_47272__$1;
(statearr_47282_50886[(2)] = inst_47257);

(statearr_47282_50886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (1))){
var state_47272__$1 = state_47272;
var statearr_47283_50890 = state_47272__$1;
(statearr_47283_50890[(2)] = null);

(statearr_47283_50890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (4))){
var inst_47238 = (state_47272[(7)]);
var inst_47238__$1 = (state_47272[(2)]);
var inst_47240 = (inst_47238__$1 == null);
var state_47272__$1 = (function (){var statearr_47284 = state_47272;
(statearr_47284[(7)] = inst_47238__$1);

return statearr_47284;
})();
if(cljs.core.truth_(inst_47240)){
var statearr_47285_50891 = state_47272__$1;
(statearr_47285_50891[(1)] = (5));

} else {
var statearr_47286_50892 = state_47272__$1;
(statearr_47286_50892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (13))){
var state_47272__$1 = state_47272;
var statearr_47291_50893 = state_47272__$1;
(statearr_47291_50893[(2)] = null);

(statearr_47291_50893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (6))){
var inst_47238 = (state_47272[(7)]);
var state_47272__$1 = state_47272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47272__$1,(11),to,inst_47238);
} else {
if((state_val_47280 === (3))){
var inst_47260 = (state_47272[(2)]);
var state_47272__$1 = state_47272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47272__$1,inst_47260);
} else {
if((state_val_47280 === (12))){
var state_47272__$1 = state_47272;
var statearr_47293_50896 = state_47272__$1;
(statearr_47293_50896[(2)] = null);

(statearr_47293_50896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (2))){
var state_47272__$1 = state_47272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47272__$1,(4),from);
} else {
if((state_val_47280 === (11))){
var inst_47250 = (state_47272[(2)]);
var state_47272__$1 = state_47272;
if(cljs.core.truth_(inst_47250)){
var statearr_47294_50904 = state_47272__$1;
(statearr_47294_50904[(1)] = (12));

} else {
var statearr_47295_50905 = state_47272__$1;
(statearr_47295_50905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (9))){
var state_47272__$1 = state_47272;
var statearr_47296_50906 = state_47272__$1;
(statearr_47296_50906[(2)] = null);

(statearr_47296_50906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (5))){
var state_47272__$1 = state_47272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47297_50907 = state_47272__$1;
(statearr_47297_50907[(1)] = (8));

} else {
var statearr_47298_50908 = state_47272__$1;
(statearr_47298_50908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (14))){
var inst_47255 = (state_47272[(2)]);
var state_47272__$1 = state_47272;
var statearr_47299_50909 = state_47272__$1;
(statearr_47299_50909[(2)] = inst_47255);

(statearr_47299_50909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (10))){
var inst_47246 = (state_47272[(2)]);
var state_47272__$1 = state_47272;
var statearr_47300_50910 = state_47272__$1;
(statearr_47300_50910[(2)] = inst_47246);

(statearr_47300_50910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (8))){
var inst_47243 = cljs.core.async.close_BANG_(to);
var state_47272__$1 = state_47272;
var statearr_47305_50911 = state_47272__$1;
(statearr_47305_50911[(2)] = inst_47243);

(statearr_47305_50911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_47313 = [null,null,null,null,null,null,null,null];
(statearr_47313[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_47313[(1)] = (1));

return statearr_47313;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_47272){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47272);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47317){var ex__46235__auto__ = e47317;
var statearr_47318_50915 = state_47272;
(statearr_47318_50915[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47272[(4)]))){
var statearr_47319_50916 = state_47272;
(statearr_47319_50916[(1)] = cljs.core.first((state_47272[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50917 = state_47272;
state_47272 = G__50917;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_47272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_47272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_47323 = f__46787__auto__();
(statearr_47323[(6)] = c__46786__auto___50885);

return statearr_47323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47325){
var vec__47326 = p__47325;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47326,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47326,(1),null);
var job = vec__47326;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46786__auto___50921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_47336){
var state_val_47337 = (state_47336[(1)]);
if((state_val_47337 === (1))){
var state_47336__$1 = state_47336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47336__$1,(2),res,v);
} else {
if((state_val_47337 === (2))){
var inst_47333 = (state_47336[(2)]);
var inst_47334 = cljs.core.async.close_BANG_(res);
var state_47336__$1 = (function (){var statearr_47340 = state_47336;
(statearr_47340[(7)] = inst_47333);

return statearr_47340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47336__$1,inst_47334);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0 = (function (){
var statearr_47346 = [null,null,null,null,null,null,null,null];
(statearr_47346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__);

(statearr_47346[(1)] = (1));

return statearr_47346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1 = (function (state_47336){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47336);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47347){var ex__46235__auto__ = e47347;
var statearr_47348_50928 = state_47336;
(statearr_47348_50928[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47336[(4)]))){
var statearr_47349_50929 = state_47336;
(statearr_47349_50929[(1)] = cljs.core.first((state_47336[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50933 = state_47336;
state_47336 = G__50933;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = function(state_47336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1.call(this,state_47336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_47357 = f__46787__auto__();
(statearr_47357[(6)] = c__46786__auto___50921);

return statearr_47357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47358){
var vec__47359 = p__47358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47359,(1),null);
var job = vec__47359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___50939 = n;
var __50940 = (0);
while(true){
if((__50940 < n__4741__auto___50939)){
var G__47363_50942 = type;
var G__47363_50943__$1 = (((G__47363_50942 instanceof cljs.core.Keyword))?G__47363_50942.fqn:null);
switch (G__47363_50943__$1) {
case "compute":
var c__46786__auto___50946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50940,c__46786__auto___50946,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async){
return (function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = ((function (__50940,c__46786__auto___50946,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async){
return (function (state_47388){
var state_val_47390 = (state_47388[(1)]);
if((state_val_47390 === (1))){
var state_47388__$1 = state_47388;
var statearr_47391_50947 = state_47388__$1;
(statearr_47391_50947[(2)] = null);

(statearr_47391_50947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (2))){
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47388__$1,(4),jobs);
} else {
if((state_val_47390 === (3))){
var inst_47386 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47388__$1,inst_47386);
} else {
if((state_val_47390 === (4))){
var inst_47372 = (state_47388[(2)]);
var inst_47373 = process(inst_47372);
var state_47388__$1 = state_47388;
if(cljs.core.truth_(inst_47373)){
var statearr_47397_50949 = state_47388__$1;
(statearr_47397_50949[(1)] = (5));

} else {
var statearr_47398_50950 = state_47388__$1;
(statearr_47398_50950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (5))){
var state_47388__$1 = state_47388;
var statearr_47399_50951 = state_47388__$1;
(statearr_47399_50951[(2)] = null);

(statearr_47399_50951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (6))){
var state_47388__$1 = state_47388;
var statearr_47406_50953 = state_47388__$1;
(statearr_47406_50953[(2)] = null);

(statearr_47406_50953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47390 === (7))){
var inst_47384 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
var statearr_47407_50956 = state_47388__$1;
(statearr_47407_50956[(2)] = inst_47384);

(statearr_47407_50956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50940,c__46786__auto___50946,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async))
;
return ((function (__50940,switch__46231__auto__,c__46786__auto___50946,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0 = (function (){
var statearr_47419 = [null,null,null,null,null,null,null];
(statearr_47419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__);

(statearr_47419[(1)] = (1));

return statearr_47419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1 = (function (state_47388){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47388);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47422){var ex__46235__auto__ = e47422;
var statearr_47423_50959 = state_47388;
(statearr_47423_50959[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47388[(4)]))){
var statearr_47424_50960 = state_47388;
(statearr_47424_50960[(1)] = cljs.core.first((state_47388[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50961 = state_47388;
state_47388 = G__50961;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = function(state_47388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1.call(this,state_47388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__;
})()
;})(__50940,switch__46231__auto__,c__46786__auto___50946,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async))
})();
var state__46788__auto__ = (function (){var statearr_47428 = f__46787__auto__();
(statearr_47428[(6)] = c__46786__auto___50946);

return statearr_47428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
});})(__50940,c__46786__auto___50946,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async))
);


break;
case "async":
var c__46786__auto___50962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50940,c__46786__auto___50962,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async){
return (function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = ((function (__50940,c__46786__auto___50962,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async){
return (function (state_47446){
var state_val_47447 = (state_47446[(1)]);
if((state_val_47447 === (1))){
var state_47446__$1 = state_47446;
var statearr_47453_50965 = state_47446__$1;
(statearr_47453_50965[(2)] = null);

(statearr_47453_50965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (2))){
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47446__$1,(4),jobs);
} else {
if((state_val_47447 === (3))){
var inst_47444 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47446__$1,inst_47444);
} else {
if((state_val_47447 === (4))){
var inst_47434 = (state_47446[(2)]);
var inst_47437 = async(inst_47434);
var state_47446__$1 = state_47446;
if(cljs.core.truth_(inst_47437)){
var statearr_47462_50968 = state_47446__$1;
(statearr_47462_50968[(1)] = (5));

} else {
var statearr_47463_50970 = state_47446__$1;
(statearr_47463_50970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (5))){
var state_47446__$1 = state_47446;
var statearr_47465_50971 = state_47446__$1;
(statearr_47465_50971[(2)] = null);

(statearr_47465_50971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (6))){
var state_47446__$1 = state_47446;
var statearr_47468_50972 = state_47446__$1;
(statearr_47468_50972[(2)] = null);

(statearr_47468_50972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (7))){
var inst_47442 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
var statearr_47472_50973 = state_47446__$1;
(statearr_47472_50973[(2)] = inst_47442);

(statearr_47472_50973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50940,c__46786__auto___50962,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async))
;
return ((function (__50940,switch__46231__auto__,c__46786__auto___50962,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0 = (function (){
var statearr_47477 = [null,null,null,null,null,null,null];
(statearr_47477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__);

(statearr_47477[(1)] = (1));

return statearr_47477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1 = (function (state_47446){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47446);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47479){var ex__46235__auto__ = e47479;
var statearr_47481_50978 = state_47446;
(statearr_47481_50978[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47446[(4)]))){
var statearr_47482_50981 = state_47446;
(statearr_47482_50981[(1)] = cljs.core.first((state_47446[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50983 = state_47446;
state_47446 = G__50983;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = function(state_47446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1.call(this,state_47446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__;
})()
;})(__50940,switch__46231__auto__,c__46786__auto___50962,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async))
})();
var state__46788__auto__ = (function (){var statearr_47492 = f__46787__auto__();
(statearr_47492[(6)] = c__46786__auto___50962);

return statearr_47492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
});})(__50940,c__46786__auto___50962,G__47363_50942,G__47363_50943__$1,n__4741__auto___50939,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47363_50943__$1)].join('')));

}

var G__50985 = (__50940 + (1));
__50940 = G__50985;
continue;
} else {
}
break;
}

var c__46786__auto___50986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_47533){
var state_val_47534 = (state_47533[(1)]);
if((state_val_47534 === (7))){
var inst_47526 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
var statearr_47543_50988 = state_47533__$1;
(statearr_47543_50988[(2)] = inst_47526);

(statearr_47543_50988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (1))){
var state_47533__$1 = state_47533;
var statearr_47547_50989 = state_47533__$1;
(statearr_47547_50989[(2)] = null);

(statearr_47547_50989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (4))){
var inst_47503 = (state_47533[(7)]);
var inst_47503__$1 = (state_47533[(2)]);
var inst_47505 = (inst_47503__$1 == null);
var state_47533__$1 = (function (){var statearr_47549 = state_47533;
(statearr_47549[(7)] = inst_47503__$1);

return statearr_47549;
})();
if(cljs.core.truth_(inst_47505)){
var statearr_47551_50994 = state_47533__$1;
(statearr_47551_50994[(1)] = (5));

} else {
var statearr_47553_50995 = state_47533__$1;
(statearr_47553_50995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (6))){
var inst_47509 = (state_47533[(8)]);
var inst_47503 = (state_47533[(7)]);
var inst_47509__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47512 = [inst_47503,inst_47509__$1];
var inst_47513 = (new cljs.core.PersistentVector(null,2,(5),inst_47510,inst_47512,null));
var state_47533__$1 = (function (){var statearr_47558 = state_47533;
(statearr_47558[(8)] = inst_47509__$1);

return statearr_47558;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47533__$1,(8),jobs,inst_47513);
} else {
if((state_val_47534 === (3))){
var inst_47528 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47533__$1,inst_47528);
} else {
if((state_val_47534 === (2))){
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47533__$1,(4),from);
} else {
if((state_val_47534 === (9))){
var inst_47523 = (state_47533[(2)]);
var state_47533__$1 = (function (){var statearr_47562 = state_47533;
(statearr_47562[(9)] = inst_47523);

return statearr_47562;
})();
var statearr_47563_51003 = state_47533__$1;
(statearr_47563_51003[(2)] = null);

(statearr_47563_51003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (5))){
var inst_47507 = cljs.core.async.close_BANG_(jobs);
var state_47533__$1 = state_47533;
var statearr_47569_51004 = state_47533__$1;
(statearr_47569_51004[(2)] = inst_47507);

(statearr_47569_51004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (8))){
var inst_47509 = (state_47533[(8)]);
var inst_47515 = (state_47533[(2)]);
var state_47533__$1 = (function (){var statearr_47571 = state_47533;
(statearr_47571[(10)] = inst_47515);

return statearr_47571;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47533__$1,(9),results,inst_47509);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0 = (function (){
var statearr_47579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__);

(statearr_47579[(1)] = (1));

return statearr_47579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1 = (function (state_47533){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47533);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47581){var ex__46235__auto__ = e47581;
var statearr_47582_51008 = state_47533;
(statearr_47582_51008[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47533[(4)]))){
var statearr_47583_51009 = state_47533;
(statearr_47583_51009[(1)] = cljs.core.first((state_47533[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51010 = state_47533;
state_47533 = G__51010;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = function(state_47533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1.call(this,state_47533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_47585 = f__46787__auto__();
(statearr_47585[(6)] = c__46786__auto___50986);

return statearr_47585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


var c__46786__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_47632){
var state_val_47633 = (state_47632[(1)]);
if((state_val_47633 === (7))){
var inst_47626 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47641_51011 = state_47632__$1;
(statearr_47641_51011[(2)] = inst_47626);

(statearr_47641_51011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (20))){
var state_47632__$1 = state_47632;
var statearr_47643_51012 = state_47632__$1;
(statearr_47643_51012[(2)] = null);

(statearr_47643_51012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (1))){
var state_47632__$1 = state_47632;
var statearr_47650_51014 = state_47632__$1;
(statearr_47650_51014[(2)] = null);

(statearr_47650_51014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (4))){
var inst_47592 = (state_47632[(7)]);
var inst_47592__$1 = (state_47632[(2)]);
var inst_47594 = (inst_47592__$1 == null);
var state_47632__$1 = (function (){var statearr_47655 = state_47632;
(statearr_47655[(7)] = inst_47592__$1);

return statearr_47655;
})();
if(cljs.core.truth_(inst_47594)){
var statearr_47656_51016 = state_47632__$1;
(statearr_47656_51016[(1)] = (5));

} else {
var statearr_47661_51018 = state_47632__$1;
(statearr_47661_51018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (15))){
var inst_47607 = (state_47632[(8)]);
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47632__$1,(18),to,inst_47607);
} else {
if((state_val_47633 === (21))){
var inst_47621 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47663_51020 = state_47632__$1;
(statearr_47663_51020[(2)] = inst_47621);

(statearr_47663_51020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (13))){
var inst_47623 = (state_47632[(2)]);
var state_47632__$1 = (function (){var statearr_47664 = state_47632;
(statearr_47664[(9)] = inst_47623);

return statearr_47664;
})();
var statearr_47667_51021 = state_47632__$1;
(statearr_47667_51021[(2)] = null);

(statearr_47667_51021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (6))){
var inst_47592 = (state_47632[(7)]);
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47632__$1,(11),inst_47592);
} else {
if((state_val_47633 === (17))){
var inst_47616 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
if(cljs.core.truth_(inst_47616)){
var statearr_47670_51022 = state_47632__$1;
(statearr_47670_51022[(1)] = (19));

} else {
var statearr_47671_51023 = state_47632__$1;
(statearr_47671_51023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (3))){
var inst_47629 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47632__$1,inst_47629);
} else {
if((state_val_47633 === (12))){
var inst_47604 = (state_47632[(10)]);
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47632__$1,(14),inst_47604);
} else {
if((state_val_47633 === (2))){
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47632__$1,(4),results);
} else {
if((state_val_47633 === (19))){
var state_47632__$1 = state_47632;
var statearr_47681_51026 = state_47632__$1;
(statearr_47681_51026[(2)] = null);

(statearr_47681_51026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (11))){
var inst_47604 = (state_47632[(2)]);
var state_47632__$1 = (function (){var statearr_47685 = state_47632;
(statearr_47685[(10)] = inst_47604);

return statearr_47685;
})();
var statearr_47686_51028 = state_47632__$1;
(statearr_47686_51028[(2)] = null);

(statearr_47686_51028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (9))){
var state_47632__$1 = state_47632;
var statearr_47688_51029 = state_47632__$1;
(statearr_47688_51029[(2)] = null);

(statearr_47688_51029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (5))){
var state_47632__$1 = state_47632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47689_51030 = state_47632__$1;
(statearr_47689_51030[(1)] = (8));

} else {
var statearr_47690_51031 = state_47632__$1;
(statearr_47690_51031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (14))){
var inst_47609 = (state_47632[(11)]);
var inst_47607 = (state_47632[(8)]);
var inst_47607__$1 = (state_47632[(2)]);
var inst_47608 = (inst_47607__$1 == null);
var inst_47609__$1 = cljs.core.not(inst_47608);
var state_47632__$1 = (function (){var statearr_47695 = state_47632;
(statearr_47695[(11)] = inst_47609__$1);

(statearr_47695[(8)] = inst_47607__$1);

return statearr_47695;
})();
if(inst_47609__$1){
var statearr_47697_51036 = state_47632__$1;
(statearr_47697_51036[(1)] = (15));

} else {
var statearr_47698_51037 = state_47632__$1;
(statearr_47698_51037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (16))){
var inst_47609 = (state_47632[(11)]);
var state_47632__$1 = state_47632;
var statearr_47707_51041 = state_47632__$1;
(statearr_47707_51041[(2)] = inst_47609);

(statearr_47707_51041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (10))){
var inst_47601 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47716_51043 = state_47632__$1;
(statearr_47716_51043[(2)] = inst_47601);

(statearr_47716_51043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (18))){
var inst_47613 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47717_51044 = state_47632__$1;
(statearr_47717_51044[(2)] = inst_47613);

(statearr_47717_51044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (8))){
var inst_47598 = cljs.core.async.close_BANG_(to);
var state_47632__$1 = state_47632;
var statearr_47718_51054 = state_47632__$1;
(statearr_47718_51054[(2)] = inst_47598);

(statearr_47718_51054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0 = (function (){
var statearr_47726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__);

(statearr_47726[(1)] = (1));

return statearr_47726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1 = (function (state_47632){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47632);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47727){var ex__46235__auto__ = e47727;
var statearr_47729_51066 = state_47632;
(statearr_47729_51066[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47632[(4)]))){
var statearr_47730_51067 = state_47632;
(statearr_47730_51067[(1)] = cljs.core.first((state_47632[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51068 = state_47632;
state_47632 = G__51068;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__ = function(state_47632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1.call(this,state_47632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_47731 = f__46787__auto__();
(statearr_47731[(6)] = c__46786__auto__);

return statearr_47731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));

return c__46786__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47738 = arguments.length;
switch (G__47738) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47758 = arguments.length;
switch (G__47758) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47790 = arguments.length;
switch (G__47790) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46786__auto___51090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_47820){
var state_val_47821 = (state_47820[(1)]);
if((state_val_47821 === (7))){
var inst_47816 = (state_47820[(2)]);
var state_47820__$1 = state_47820;
var statearr_47828_51096 = state_47820__$1;
(statearr_47828_51096[(2)] = inst_47816);

(statearr_47828_51096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (1))){
var state_47820__$1 = state_47820;
var statearr_47829_51099 = state_47820__$1;
(statearr_47829_51099[(2)] = null);

(statearr_47829_51099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (4))){
var inst_47797 = (state_47820[(7)]);
var inst_47797__$1 = (state_47820[(2)]);
var inst_47798 = (inst_47797__$1 == null);
var state_47820__$1 = (function (){var statearr_47831 = state_47820;
(statearr_47831[(7)] = inst_47797__$1);

return statearr_47831;
})();
if(cljs.core.truth_(inst_47798)){
var statearr_47832_51105 = state_47820__$1;
(statearr_47832_51105[(1)] = (5));

} else {
var statearr_47836_51106 = state_47820__$1;
(statearr_47836_51106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (13))){
var state_47820__$1 = state_47820;
var statearr_47840_51107 = state_47820__$1;
(statearr_47840_51107[(2)] = null);

(statearr_47840_51107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (6))){
var inst_47797 = (state_47820[(7)]);
var inst_47803 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47797) : p.call(null,inst_47797));
var state_47820__$1 = state_47820;
if(cljs.core.truth_(inst_47803)){
var statearr_47841_51108 = state_47820__$1;
(statearr_47841_51108[(1)] = (9));

} else {
var statearr_47842_51110 = state_47820__$1;
(statearr_47842_51110[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (3))){
var inst_47818 = (state_47820[(2)]);
var state_47820__$1 = state_47820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47820__$1,inst_47818);
} else {
if((state_val_47821 === (12))){
var state_47820__$1 = state_47820;
var statearr_47844_51112 = state_47820__$1;
(statearr_47844_51112[(2)] = null);

(statearr_47844_51112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (2))){
var state_47820__$1 = state_47820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47820__$1,(4),ch);
} else {
if((state_val_47821 === (11))){
var inst_47797 = (state_47820[(7)]);
var inst_47807 = (state_47820[(2)]);
var state_47820__$1 = state_47820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47820__$1,(8),inst_47807,inst_47797);
} else {
if((state_val_47821 === (9))){
var state_47820__$1 = state_47820;
var statearr_47849_51114 = state_47820__$1;
(statearr_47849_51114[(2)] = tc);

(statearr_47849_51114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (5))){
var inst_47800 = cljs.core.async.close_BANG_(tc);
var inst_47801 = cljs.core.async.close_BANG_(fc);
var state_47820__$1 = (function (){var statearr_47850 = state_47820;
(statearr_47850[(8)] = inst_47800);

return statearr_47850;
})();
var statearr_47852_51115 = state_47820__$1;
(statearr_47852_51115[(2)] = inst_47801);

(statearr_47852_51115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (14))){
var inst_47814 = (state_47820[(2)]);
var state_47820__$1 = state_47820;
var statearr_47855_51116 = state_47820__$1;
(statearr_47855_51116[(2)] = inst_47814);

(statearr_47855_51116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (10))){
var state_47820__$1 = state_47820;
var statearr_47861_51119 = state_47820__$1;
(statearr_47861_51119[(2)] = fc);

(statearr_47861_51119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (8))){
var inst_47809 = (state_47820[(2)]);
var state_47820__$1 = state_47820;
if(cljs.core.truth_(inst_47809)){
var statearr_47864_51123 = state_47820__$1;
(statearr_47864_51123[(1)] = (12));

} else {
var statearr_47868_51124 = state_47820__$1;
(statearr_47868_51124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_47873 = [null,null,null,null,null,null,null,null,null];
(statearr_47873[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_47873[(1)] = (1));

return statearr_47873;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_47820){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47820);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47874){var ex__46235__auto__ = e47874;
var statearr_47875_51126 = state_47820;
(statearr_47875_51126[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47820[(4)]))){
var statearr_47876_51130 = state_47820;
(statearr_47876_51130[(1)] = cljs.core.first((state_47820[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51132 = state_47820;
state_47820 = G__51132;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_47820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_47820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_47881 = f__46787__auto__();
(statearr_47881[(6)] = c__46786__auto___51090);

return statearr_47881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46786__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_47906){
var state_val_47907 = (state_47906[(1)]);
if((state_val_47907 === (7))){
var inst_47902 = (state_47906[(2)]);
var state_47906__$1 = state_47906;
var statearr_47914_51136 = state_47906__$1;
(statearr_47914_51136[(2)] = inst_47902);

(statearr_47914_51136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47907 === (1))){
var inst_47883 = init;
var inst_47884 = inst_47883;
var state_47906__$1 = (function (){var statearr_47915 = state_47906;
(statearr_47915[(7)] = inst_47884);

return statearr_47915;
})();
var statearr_47916_51137 = state_47906__$1;
(statearr_47916_51137[(2)] = null);

(statearr_47916_51137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47907 === (4))){
var inst_47887 = (state_47906[(8)]);
var inst_47887__$1 = (state_47906[(2)]);
var inst_47888 = (inst_47887__$1 == null);
var state_47906__$1 = (function (){var statearr_47918 = state_47906;
(statearr_47918[(8)] = inst_47887__$1);

return statearr_47918;
})();
if(cljs.core.truth_(inst_47888)){
var statearr_47921_51138 = state_47906__$1;
(statearr_47921_51138[(1)] = (5));

} else {
var statearr_47923_51139 = state_47906__$1;
(statearr_47923_51139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47907 === (6))){
var inst_47887 = (state_47906[(8)]);
var inst_47891 = (state_47906[(9)]);
var inst_47884 = (state_47906[(7)]);
var inst_47891__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47884,inst_47887) : f.call(null,inst_47884,inst_47887));
var inst_47892 = cljs.core.reduced_QMARK_(inst_47891__$1);
var state_47906__$1 = (function (){var statearr_47929 = state_47906;
(statearr_47929[(9)] = inst_47891__$1);

return statearr_47929;
})();
if(inst_47892){
var statearr_47931_51145 = state_47906__$1;
(statearr_47931_51145[(1)] = (8));

} else {
var statearr_47932_51149 = state_47906__$1;
(statearr_47932_51149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47907 === (3))){
var inst_47904 = (state_47906[(2)]);
var state_47906__$1 = state_47906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47906__$1,inst_47904);
} else {
if((state_val_47907 === (2))){
var state_47906__$1 = state_47906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47906__$1,(4),ch);
} else {
if((state_val_47907 === (9))){
var inst_47891 = (state_47906[(9)]);
var inst_47884 = inst_47891;
var state_47906__$1 = (function (){var statearr_47937 = state_47906;
(statearr_47937[(7)] = inst_47884);

return statearr_47937;
})();
var statearr_47938_51152 = state_47906__$1;
(statearr_47938_51152[(2)] = null);

(statearr_47938_51152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47907 === (5))){
var inst_47884 = (state_47906[(7)]);
var state_47906__$1 = state_47906;
var statearr_47940_51153 = state_47906__$1;
(statearr_47940_51153[(2)] = inst_47884);

(statearr_47940_51153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47907 === (10))){
var inst_47900 = (state_47906[(2)]);
var state_47906__$1 = state_47906;
var statearr_47945_51154 = state_47906__$1;
(statearr_47945_51154[(2)] = inst_47900);

(statearr_47945_51154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47907 === (8))){
var inst_47891 = (state_47906[(9)]);
var inst_47895 = cljs.core.deref(inst_47891);
var state_47906__$1 = state_47906;
var statearr_47946_51155 = state_47906__$1;
(statearr_47946_51155[(2)] = inst_47895);

(statearr_47946_51155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46232__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46232__auto____0 = (function (){
var statearr_47947 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47947[(0)] = cljs$core$async$reduce_$_state_machine__46232__auto__);

(statearr_47947[(1)] = (1));

return statearr_47947;
});
var cljs$core$async$reduce_$_state_machine__46232__auto____1 = (function (state_47906){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47906);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47948){var ex__46235__auto__ = e47948;
var statearr_47949_51156 = state_47906;
(statearr_47949_51156[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47906[(4)]))){
var statearr_47952_51159 = state_47906;
(statearr_47952_51159[(1)] = cljs.core.first((state_47906[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51160 = state_47906;
state_47906 = G__51160;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46232__auto__ = function(state_47906){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46232__auto____1.call(this,state_47906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46232__auto____0;
cljs$core$async$reduce_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46232__auto____1;
return cljs$core$async$reduce_$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_47955 = f__46787__auto__();
(statearr_47955[(6)] = c__46786__auto__);

return statearr_47955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));

return c__46786__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46786__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_47966){
var state_val_47967 = (state_47966[(1)]);
if((state_val_47967 === (1))){
var inst_47961 = cljs.core.async.reduce(f__$1,init,ch);
var state_47966__$1 = state_47966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47966__$1,(2),inst_47961);
} else {
if((state_val_47967 === (2))){
var inst_47963 = (state_47966[(2)]);
var inst_47964 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47963) : f__$1.call(null,inst_47963));
var state_47966__$1 = state_47966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47966__$1,inst_47964);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46232__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46232__auto____0 = (function (){
var statearr_47974 = [null,null,null,null,null,null,null];
(statearr_47974[(0)] = cljs$core$async$transduce_$_state_machine__46232__auto__);

(statearr_47974[(1)] = (1));

return statearr_47974;
});
var cljs$core$async$transduce_$_state_machine__46232__auto____1 = (function (state_47966){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_47966);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e47976){var ex__46235__auto__ = e47976;
var statearr_47977_51167 = state_47966;
(statearr_47977_51167[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_47966[(4)]))){
var statearr_47980_51168 = state_47966;
(statearr_47980_51168[(1)] = cljs.core.first((state_47966[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51170 = state_47966;
state_47966 = G__51170;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46232__auto__ = function(state_47966){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46232__auto____1.call(this,state_47966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46232__auto____0;
cljs$core$async$transduce_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46232__auto____1;
return cljs$core$async$transduce_$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_47983 = f__46787__auto__();
(statearr_47983[(6)] = c__46786__auto__);

return statearr_47983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));

return c__46786__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47988 = arguments.length;
switch (G__47988) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46786__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_48024){
var state_val_48025 = (state_48024[(1)]);
if((state_val_48025 === (7))){
var inst_48005 = (state_48024[(2)]);
var state_48024__$1 = state_48024;
var statearr_48034_51177 = state_48024__$1;
(statearr_48034_51177[(2)] = inst_48005);

(statearr_48034_51177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (1))){
var inst_47996 = cljs.core.seq(coll);
var inst_47997 = inst_47996;
var state_48024__$1 = (function (){var statearr_48035 = state_48024;
(statearr_48035[(7)] = inst_47997);

return statearr_48035;
})();
var statearr_48036_51183 = state_48024__$1;
(statearr_48036_51183[(2)] = null);

(statearr_48036_51183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (4))){
var inst_47997 = (state_48024[(7)]);
var inst_48003 = cljs.core.first(inst_47997);
var state_48024__$1 = state_48024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48024__$1,(7),ch,inst_48003);
} else {
if((state_val_48025 === (13))){
var inst_48018 = (state_48024[(2)]);
var state_48024__$1 = state_48024;
var statearr_48041_51184 = state_48024__$1;
(statearr_48041_51184[(2)] = inst_48018);

(statearr_48041_51184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (6))){
var inst_48008 = (state_48024[(2)]);
var state_48024__$1 = state_48024;
if(cljs.core.truth_(inst_48008)){
var statearr_48042_51185 = state_48024__$1;
(statearr_48042_51185[(1)] = (8));

} else {
var statearr_48043_51186 = state_48024__$1;
(statearr_48043_51186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (3))){
var inst_48022 = (state_48024[(2)]);
var state_48024__$1 = state_48024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48024__$1,inst_48022);
} else {
if((state_val_48025 === (12))){
var state_48024__$1 = state_48024;
var statearr_48044_51187 = state_48024__$1;
(statearr_48044_51187[(2)] = null);

(statearr_48044_51187[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (2))){
var inst_47997 = (state_48024[(7)]);
var state_48024__$1 = state_48024;
if(cljs.core.truth_(inst_47997)){
var statearr_48046_51188 = state_48024__$1;
(statearr_48046_51188[(1)] = (4));

} else {
var statearr_48047_51189 = state_48024__$1;
(statearr_48047_51189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (11))){
var inst_48014 = cljs.core.async.close_BANG_(ch);
var state_48024__$1 = state_48024;
var statearr_48048_51191 = state_48024__$1;
(statearr_48048_51191[(2)] = inst_48014);

(statearr_48048_51191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (9))){
var state_48024__$1 = state_48024;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48050_51192 = state_48024__$1;
(statearr_48050_51192[(1)] = (11));

} else {
var statearr_48051_51193 = state_48024__$1;
(statearr_48051_51193[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (5))){
var inst_47997 = (state_48024[(7)]);
var state_48024__$1 = state_48024;
var statearr_48052_51195 = state_48024__$1;
(statearr_48052_51195[(2)] = inst_47997);

(statearr_48052_51195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (10))){
var inst_48020 = (state_48024[(2)]);
var state_48024__$1 = state_48024;
var statearr_48054_51199 = state_48024__$1;
(statearr_48054_51199[(2)] = inst_48020);

(statearr_48054_51199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48025 === (8))){
var inst_47997 = (state_48024[(7)]);
var inst_48010 = cljs.core.next(inst_47997);
var inst_47997__$1 = inst_48010;
var state_48024__$1 = (function (){var statearr_48056 = state_48024;
(statearr_48056[(7)] = inst_47997__$1);

return statearr_48056;
})();
var statearr_48057_51202 = state_48024__$1;
(statearr_48057_51202[(2)] = null);

(statearr_48057_51202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_48060 = [null,null,null,null,null,null,null,null];
(statearr_48060[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_48060[(1)] = (1));

return statearr_48060;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_48024){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_48024);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e48061){var ex__46235__auto__ = e48061;
var statearr_48062_51205 = state_48024;
(statearr_48062_51205[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_48024[(4)]))){
var statearr_48066_51208 = state_48024;
(statearr_48066_51208[(1)] = cljs.core.first((state_48024[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51209 = state_48024;
state_48024 = G__51209;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_48024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_48024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_48070 = f__46787__auto__();
(statearr_48070[(6)] = c__46786__auto__);

return statearr_48070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));

return c__46786__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48079 = arguments.length;
switch (G__48079) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_51227 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_51227(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51228 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_51228(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51230 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_51230(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51237 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_51237(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48159 = (function (ch,cs,meta48160){
this.ch = ch;
this.cs = cs;
this.meta48160 = meta48160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48161,meta48160__$1){
var self__ = this;
var _48161__$1 = this;
return (new cljs.core.async.t_cljs$core$async48159(self__.ch,self__.cs,meta48160__$1));
}));

(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48161){
var self__ = this;
var _48161__$1 = this;
return self__.meta48160;
}));

(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48160","meta48160",89378196,null)], null);
}));

(cljs.core.async.t_cljs$core$async48159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48159");

(cljs.core.async.t_cljs$core$async48159.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48159.
 */
cljs.core.async.__GT_t_cljs$core$async48159 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48159(ch__$1,cs__$1,meta48160){
return (new cljs.core.async.t_cljs$core$async48159(ch__$1,cs__$1,meta48160));
});

}

return (new cljs.core.async.t_cljs$core$async48159(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46786__auto___51277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_48327){
var state_val_48328 = (state_48327[(1)]);
if((state_val_48328 === (7))){
var inst_48321 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48329_51278 = state_48327__$1;
(statearr_48329_51278[(2)] = inst_48321);

(statearr_48329_51278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (20))){
var inst_48213 = (state_48327[(7)]);
var inst_48226 = cljs.core.first(inst_48213);
var inst_48227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48226,(0),null);
var inst_48229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48226,(1),null);
var state_48327__$1 = (function (){var statearr_48334 = state_48327;
(statearr_48334[(8)] = inst_48227);

return statearr_48334;
})();
if(cljs.core.truth_(inst_48229)){
var statearr_48335_51285 = state_48327__$1;
(statearr_48335_51285[(1)] = (22));

} else {
var statearr_48337_51286 = state_48327__$1;
(statearr_48337_51286[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (27))){
var inst_48264 = (state_48327[(9)]);
var inst_48180 = (state_48327[(10)]);
var inst_48262 = (state_48327[(11)]);
var inst_48269 = (state_48327[(12)]);
var inst_48269__$1 = cljs.core._nth(inst_48262,inst_48264);
var inst_48270 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48269__$1,inst_48180,done);
var state_48327__$1 = (function (){var statearr_48340 = state_48327;
(statearr_48340[(12)] = inst_48269__$1);

return statearr_48340;
})();
if(cljs.core.truth_(inst_48270)){
var statearr_48341_51288 = state_48327__$1;
(statearr_48341_51288[(1)] = (30));

} else {
var statearr_48342_51289 = state_48327__$1;
(statearr_48342_51289[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (1))){
var state_48327__$1 = state_48327;
var statearr_48345_51290 = state_48327__$1;
(statearr_48345_51290[(2)] = null);

(statearr_48345_51290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (24))){
var inst_48213 = (state_48327[(7)]);
var inst_48237 = (state_48327[(2)]);
var inst_48238 = cljs.core.next(inst_48213);
var inst_48189 = inst_48238;
var inst_48190 = null;
var inst_48191 = (0);
var inst_48192 = (0);
var state_48327__$1 = (function (){var statearr_48349 = state_48327;
(statearr_48349[(13)] = inst_48190);

(statearr_48349[(14)] = inst_48191);

(statearr_48349[(15)] = inst_48192);

(statearr_48349[(16)] = inst_48237);

(statearr_48349[(17)] = inst_48189);

return statearr_48349;
})();
var statearr_48350_51296 = state_48327__$1;
(statearr_48350_51296[(2)] = null);

(statearr_48350_51296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (39))){
var state_48327__$1 = state_48327;
var statearr_48355_51303 = state_48327__$1;
(statearr_48355_51303[(2)] = null);

(statearr_48355_51303[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (4))){
var inst_48180 = (state_48327[(10)]);
var inst_48180__$1 = (state_48327[(2)]);
var inst_48181 = (inst_48180__$1 == null);
var state_48327__$1 = (function (){var statearr_48356 = state_48327;
(statearr_48356[(10)] = inst_48180__$1);

return statearr_48356;
})();
if(cljs.core.truth_(inst_48181)){
var statearr_48357_51304 = state_48327__$1;
(statearr_48357_51304[(1)] = (5));

} else {
var statearr_48358_51305 = state_48327__$1;
(statearr_48358_51305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (15))){
var inst_48190 = (state_48327[(13)]);
var inst_48191 = (state_48327[(14)]);
var inst_48192 = (state_48327[(15)]);
var inst_48189 = (state_48327[(17)]);
var inst_48209 = (state_48327[(2)]);
var inst_48210 = (inst_48192 + (1));
var tmp48352 = inst_48190;
var tmp48353 = inst_48191;
var tmp48354 = inst_48189;
var inst_48189__$1 = tmp48354;
var inst_48190__$1 = tmp48352;
var inst_48191__$1 = tmp48353;
var inst_48192__$1 = inst_48210;
var state_48327__$1 = (function (){var statearr_48361 = state_48327;
(statearr_48361[(13)] = inst_48190__$1);

(statearr_48361[(14)] = inst_48191__$1);

(statearr_48361[(15)] = inst_48192__$1);

(statearr_48361[(18)] = inst_48209);

(statearr_48361[(17)] = inst_48189__$1);

return statearr_48361;
})();
var statearr_48365_51307 = state_48327__$1;
(statearr_48365_51307[(2)] = null);

(statearr_48365_51307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (21))){
var inst_48241 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48369_51311 = state_48327__$1;
(statearr_48369_51311[(2)] = inst_48241);

(statearr_48369_51311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (31))){
var inst_48269 = (state_48327[(12)]);
var inst_48273 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48269);
var state_48327__$1 = state_48327;
var statearr_48370_51312 = state_48327__$1;
(statearr_48370_51312[(2)] = inst_48273);

(statearr_48370_51312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (32))){
var inst_48261 = (state_48327[(19)]);
var inst_48264 = (state_48327[(9)]);
var inst_48262 = (state_48327[(11)]);
var inst_48263 = (state_48327[(20)]);
var inst_48275 = (state_48327[(2)]);
var inst_48276 = (inst_48264 + (1));
var tmp48366 = inst_48261;
var tmp48367 = inst_48262;
var tmp48368 = inst_48263;
var inst_48261__$1 = tmp48366;
var inst_48262__$1 = tmp48367;
var inst_48263__$1 = tmp48368;
var inst_48264__$1 = inst_48276;
var state_48327__$1 = (function (){var statearr_48381 = state_48327;
(statearr_48381[(19)] = inst_48261__$1);

(statearr_48381[(9)] = inst_48264__$1);

(statearr_48381[(21)] = inst_48275);

(statearr_48381[(11)] = inst_48262__$1);

(statearr_48381[(20)] = inst_48263__$1);

return statearr_48381;
})();
var statearr_48388_51314 = state_48327__$1;
(statearr_48388_51314[(2)] = null);

(statearr_48388_51314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (40))){
var inst_48292 = (state_48327[(22)]);
var inst_48296 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48292);
var state_48327__$1 = state_48327;
var statearr_48391_51317 = state_48327__$1;
(statearr_48391_51317[(2)] = inst_48296);

(statearr_48391_51317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (33))){
var inst_48279 = (state_48327[(23)]);
var inst_48284 = cljs.core.chunked_seq_QMARK_(inst_48279);
var state_48327__$1 = state_48327;
if(inst_48284){
var statearr_48392_51321 = state_48327__$1;
(statearr_48392_51321[(1)] = (36));

} else {
var statearr_48395_51322 = state_48327__$1;
(statearr_48395_51322[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (13))){
var inst_48201 = (state_48327[(24)]);
var inst_48205 = cljs.core.async.close_BANG_(inst_48201);
var state_48327__$1 = state_48327;
var statearr_48396_51324 = state_48327__$1;
(statearr_48396_51324[(2)] = inst_48205);

(statearr_48396_51324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (22))){
var inst_48227 = (state_48327[(8)]);
var inst_48233 = cljs.core.async.close_BANG_(inst_48227);
var state_48327__$1 = state_48327;
var statearr_48398_51331 = state_48327__$1;
(statearr_48398_51331[(2)] = inst_48233);

(statearr_48398_51331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (36))){
var inst_48279 = (state_48327[(23)]);
var inst_48286 = cljs.core.chunk_first(inst_48279);
var inst_48287 = cljs.core.chunk_rest(inst_48279);
var inst_48288 = cljs.core.count(inst_48286);
var inst_48261 = inst_48287;
var inst_48262 = inst_48286;
var inst_48263 = inst_48288;
var inst_48264 = (0);
var state_48327__$1 = (function (){var statearr_48399 = state_48327;
(statearr_48399[(19)] = inst_48261);

(statearr_48399[(9)] = inst_48264);

(statearr_48399[(11)] = inst_48262);

(statearr_48399[(20)] = inst_48263);

return statearr_48399;
})();
var statearr_48400_51333 = state_48327__$1;
(statearr_48400_51333[(2)] = null);

(statearr_48400_51333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (41))){
var inst_48279 = (state_48327[(23)]);
var inst_48298 = (state_48327[(2)]);
var inst_48299 = cljs.core.next(inst_48279);
var inst_48261 = inst_48299;
var inst_48262 = null;
var inst_48263 = (0);
var inst_48264 = (0);
var state_48327__$1 = (function (){var statearr_48401 = state_48327;
(statearr_48401[(19)] = inst_48261);

(statearr_48401[(9)] = inst_48264);

(statearr_48401[(11)] = inst_48262);

(statearr_48401[(25)] = inst_48298);

(statearr_48401[(20)] = inst_48263);

return statearr_48401;
})();
var statearr_48404_51338 = state_48327__$1;
(statearr_48404_51338[(2)] = null);

(statearr_48404_51338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (43))){
var state_48327__$1 = state_48327;
var statearr_48405_51340 = state_48327__$1;
(statearr_48405_51340[(2)] = null);

(statearr_48405_51340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (29))){
var inst_48308 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48408_51341 = state_48327__$1;
(statearr_48408_51341[(2)] = inst_48308);

(statearr_48408_51341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (44))){
var inst_48318 = (state_48327[(2)]);
var state_48327__$1 = (function (){var statearr_48412 = state_48327;
(statearr_48412[(26)] = inst_48318);

return statearr_48412;
})();
var statearr_48413_51342 = state_48327__$1;
(statearr_48413_51342[(2)] = null);

(statearr_48413_51342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (6))){
var inst_48253 = (state_48327[(27)]);
var inst_48252 = cljs.core.deref(cs);
var inst_48253__$1 = cljs.core.keys(inst_48252);
var inst_48254 = cljs.core.count(inst_48253__$1);
var inst_48255 = cljs.core.reset_BANG_(dctr,inst_48254);
var inst_48260 = cljs.core.seq(inst_48253__$1);
var inst_48261 = inst_48260;
var inst_48262 = null;
var inst_48263 = (0);
var inst_48264 = (0);
var state_48327__$1 = (function (){var statearr_48414 = state_48327;
(statearr_48414[(19)] = inst_48261);

(statearr_48414[(9)] = inst_48264);

(statearr_48414[(27)] = inst_48253__$1);

(statearr_48414[(11)] = inst_48262);

(statearr_48414[(28)] = inst_48255);

(statearr_48414[(20)] = inst_48263);

return statearr_48414;
})();
var statearr_48416_51343 = state_48327__$1;
(statearr_48416_51343[(2)] = null);

(statearr_48416_51343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (28))){
var inst_48261 = (state_48327[(19)]);
var inst_48279 = (state_48327[(23)]);
var inst_48279__$1 = cljs.core.seq(inst_48261);
var state_48327__$1 = (function (){var statearr_48419 = state_48327;
(statearr_48419[(23)] = inst_48279__$1);

return statearr_48419;
})();
if(inst_48279__$1){
var statearr_48421_51345 = state_48327__$1;
(statearr_48421_51345[(1)] = (33));

} else {
var statearr_48422_51346 = state_48327__$1;
(statearr_48422_51346[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (25))){
var inst_48264 = (state_48327[(9)]);
var inst_48263 = (state_48327[(20)]);
var inst_48266 = (inst_48264 < inst_48263);
var inst_48267 = inst_48266;
var state_48327__$1 = state_48327;
if(cljs.core.truth_(inst_48267)){
var statearr_48423_51350 = state_48327__$1;
(statearr_48423_51350[(1)] = (27));

} else {
var statearr_48424_51351 = state_48327__$1;
(statearr_48424_51351[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (34))){
var state_48327__$1 = state_48327;
var statearr_48425_51353 = state_48327__$1;
(statearr_48425_51353[(2)] = null);

(statearr_48425_51353[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (17))){
var state_48327__$1 = state_48327;
var statearr_48429_51356 = state_48327__$1;
(statearr_48429_51356[(2)] = null);

(statearr_48429_51356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (3))){
var inst_48323 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48327__$1,inst_48323);
} else {
if((state_val_48328 === (12))){
var inst_48246 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48433_51361 = state_48327__$1;
(statearr_48433_51361[(2)] = inst_48246);

(statearr_48433_51361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (2))){
var state_48327__$1 = state_48327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48327__$1,(4),ch);
} else {
if((state_val_48328 === (23))){
var state_48327__$1 = state_48327;
var statearr_48439_51364 = state_48327__$1;
(statearr_48439_51364[(2)] = null);

(statearr_48439_51364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (35))){
var inst_48305 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48444_51368 = state_48327__$1;
(statearr_48444_51368[(2)] = inst_48305);

(statearr_48444_51368[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (19))){
var inst_48213 = (state_48327[(7)]);
var inst_48217 = cljs.core.chunk_first(inst_48213);
var inst_48218 = cljs.core.chunk_rest(inst_48213);
var inst_48219 = cljs.core.count(inst_48217);
var inst_48189 = inst_48218;
var inst_48190 = inst_48217;
var inst_48191 = inst_48219;
var inst_48192 = (0);
var state_48327__$1 = (function (){var statearr_48453 = state_48327;
(statearr_48453[(13)] = inst_48190);

(statearr_48453[(14)] = inst_48191);

(statearr_48453[(15)] = inst_48192);

(statearr_48453[(17)] = inst_48189);

return statearr_48453;
})();
var statearr_48454_51369 = state_48327__$1;
(statearr_48454_51369[(2)] = null);

(statearr_48454_51369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (11))){
var inst_48213 = (state_48327[(7)]);
var inst_48189 = (state_48327[(17)]);
var inst_48213__$1 = cljs.core.seq(inst_48189);
var state_48327__$1 = (function (){var statearr_48456 = state_48327;
(statearr_48456[(7)] = inst_48213__$1);

return statearr_48456;
})();
if(inst_48213__$1){
var statearr_48458_51373 = state_48327__$1;
(statearr_48458_51373[(1)] = (16));

} else {
var statearr_48462_51374 = state_48327__$1;
(statearr_48462_51374[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (9))){
var inst_48248 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48466_51376 = state_48327__$1;
(statearr_48466_51376[(2)] = inst_48248);

(statearr_48466_51376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (5))){
var inst_48187 = cljs.core.deref(cs);
var inst_48188 = cljs.core.seq(inst_48187);
var inst_48189 = inst_48188;
var inst_48190 = null;
var inst_48191 = (0);
var inst_48192 = (0);
var state_48327__$1 = (function (){var statearr_48469 = state_48327;
(statearr_48469[(13)] = inst_48190);

(statearr_48469[(14)] = inst_48191);

(statearr_48469[(15)] = inst_48192);

(statearr_48469[(17)] = inst_48189);

return statearr_48469;
})();
var statearr_48470_51381 = state_48327__$1;
(statearr_48470_51381[(2)] = null);

(statearr_48470_51381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (14))){
var state_48327__$1 = state_48327;
var statearr_48474_51383 = state_48327__$1;
(statearr_48474_51383[(2)] = null);

(statearr_48474_51383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (45))){
var inst_48315 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48475_51386 = state_48327__$1;
(statearr_48475_51386[(2)] = inst_48315);

(statearr_48475_51386[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (26))){
var inst_48253 = (state_48327[(27)]);
var inst_48310 = (state_48327[(2)]);
var inst_48312 = cljs.core.seq(inst_48253);
var state_48327__$1 = (function (){var statearr_48477 = state_48327;
(statearr_48477[(29)] = inst_48310);

return statearr_48477;
})();
if(inst_48312){
var statearr_48480_51388 = state_48327__$1;
(statearr_48480_51388[(1)] = (42));

} else {
var statearr_48481_51389 = state_48327__$1;
(statearr_48481_51389[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (16))){
var inst_48213 = (state_48327[(7)]);
var inst_48215 = cljs.core.chunked_seq_QMARK_(inst_48213);
var state_48327__$1 = state_48327;
if(inst_48215){
var statearr_48483_51393 = state_48327__$1;
(statearr_48483_51393[(1)] = (19));

} else {
var statearr_48484_51395 = state_48327__$1;
(statearr_48484_51395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (38))){
var inst_48302 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48490_51397 = state_48327__$1;
(statearr_48490_51397[(2)] = inst_48302);

(statearr_48490_51397[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (30))){
var state_48327__$1 = state_48327;
var statearr_48493_51398 = state_48327__$1;
(statearr_48493_51398[(2)] = null);

(statearr_48493_51398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (10))){
var inst_48190 = (state_48327[(13)]);
var inst_48192 = (state_48327[(15)]);
var inst_48200 = cljs.core._nth(inst_48190,inst_48192);
var inst_48201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48200,(0),null);
var inst_48202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48200,(1),null);
var state_48327__$1 = (function (){var statearr_48495 = state_48327;
(statearr_48495[(24)] = inst_48201);

return statearr_48495;
})();
if(cljs.core.truth_(inst_48202)){
var statearr_48497_51402 = state_48327__$1;
(statearr_48497_51402[(1)] = (13));

} else {
var statearr_48498_51405 = state_48327__$1;
(statearr_48498_51405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (18))){
var inst_48244 = (state_48327[(2)]);
var state_48327__$1 = state_48327;
var statearr_48501_51406 = state_48327__$1;
(statearr_48501_51406[(2)] = inst_48244);

(statearr_48501_51406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (42))){
var state_48327__$1 = state_48327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48327__$1,(45),dchan);
} else {
if((state_val_48328 === (37))){
var inst_48279 = (state_48327[(23)]);
var inst_48180 = (state_48327[(10)]);
var inst_48292 = (state_48327[(22)]);
var inst_48292__$1 = cljs.core.first(inst_48279);
var inst_48293 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48292__$1,inst_48180,done);
var state_48327__$1 = (function (){var statearr_48506 = state_48327;
(statearr_48506[(22)] = inst_48292__$1);

return statearr_48506;
})();
if(cljs.core.truth_(inst_48293)){
var statearr_48513_51408 = state_48327__$1;
(statearr_48513_51408[(1)] = (39));

} else {
var statearr_48515_51410 = state_48327__$1;
(statearr_48515_51410[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48328 === (8))){
var inst_48191 = (state_48327[(14)]);
var inst_48192 = (state_48327[(15)]);
var inst_48194 = (inst_48192 < inst_48191);
var inst_48195 = inst_48194;
var state_48327__$1 = state_48327;
if(cljs.core.truth_(inst_48195)){
var statearr_48519_51411 = state_48327__$1;
(statearr_48519_51411[(1)] = (10));

} else {
var statearr_48522_51412 = state_48327__$1;
(statearr_48522_51412[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46232__auto__ = null;
var cljs$core$async$mult_$_state_machine__46232__auto____0 = (function (){
var statearr_48526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48526[(0)] = cljs$core$async$mult_$_state_machine__46232__auto__);

(statearr_48526[(1)] = (1));

return statearr_48526;
});
var cljs$core$async$mult_$_state_machine__46232__auto____1 = (function (state_48327){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_48327);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e48528){var ex__46235__auto__ = e48528;
var statearr_48529_51416 = state_48327;
(statearr_48529_51416[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_48327[(4)]))){
var statearr_48532_51417 = state_48327;
(statearr_48532_51417[(1)] = cljs.core.first((state_48327[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51418 = state_48327;
state_48327 = G__51418;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46232__auto__ = function(state_48327){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46232__auto____1.call(this,state_48327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46232__auto____0;
cljs$core$async$mult_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46232__auto____1;
return cljs$core$async$mult_$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_48535 = f__46787__auto__();
(statearr_48535[(6)] = c__46786__auto___51277);

return statearr_48535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48541 = arguments.length;
switch (G__48541) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_51422 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_51422(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51428 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_51428(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51440 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51440(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51448 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_51448(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51457 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51457(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51464 = arguments.length;
var i__4865__auto___51465 = (0);
while(true){
if((i__4865__auto___51465 < len__4864__auto___51464)){
args__4870__auto__.push((arguments[i__4865__auto___51465]));

var G__51466 = (i__4865__auto___51465 + (1));
i__4865__auto___51465 = G__51466;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48656){
var map__48657 = p__48656;
var map__48657__$1 = cljs.core.__destructure_map(map__48657);
var opts = map__48657__$1;
var statearr_48658_51467 = state;
(statearr_48658_51467[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48663_51468 = state;
(statearr_48663_51468[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_48669_51469 = state;
(statearr_48669_51469[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48641){
var G__48642 = cljs.core.first(seq48641);
var seq48641__$1 = cljs.core.next(seq48641);
var G__48643 = cljs.core.first(seq48641__$1);
var seq48641__$2 = cljs.core.next(seq48641__$1);
var G__48644 = cljs.core.first(seq48641__$2);
var seq48641__$3 = cljs.core.next(seq48641__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48642,G__48643,G__48644,seq48641__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48706 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48707){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48707 = meta48707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48708,meta48707__$1){
var self__ = this;
var _48708__$1 = this;
return (new cljs.core.async.t_cljs$core$async48706(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48707__$1));
}));

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48708){
var self__ = this;
var _48708__$1 = this;
return self__.meta48707;
}));

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48706.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48707","meta48707",-2107145454,null)], null);
}));

(cljs.core.async.t_cljs$core$async48706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48706");

(cljs.core.async.t_cljs$core$async48706.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48706.
 */
cljs.core.async.__GT_t_cljs$core$async48706 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48706(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48707){
return (new cljs.core.async.t_cljs$core$async48706(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48707));
});

}

return (new cljs.core.async.t_cljs$core$async48706(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46786__auto___51495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_48833){
var state_val_48834 = (state_48833[(1)]);
if((state_val_48834 === (7))){
var inst_48781 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
if(cljs.core.truth_(inst_48781)){
var statearr_48847_51500 = state_48833__$1;
(statearr_48847_51500[(1)] = (8));

} else {
var statearr_48849_51501 = state_48833__$1;
(statearr_48849_51501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (20))){
var inst_48773 = (state_48833[(7)]);
var state_48833__$1 = state_48833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48833__$1,(23),out,inst_48773);
} else {
if((state_val_48834 === (1))){
var inst_48747 = calc_state();
var inst_48748 = cljs.core.__destructure_map(inst_48747);
var inst_48749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48748,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48748,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48748,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48752 = inst_48747;
var state_48833__$1 = (function (){var statearr_48861 = state_48833;
(statearr_48861[(8)] = inst_48752);

(statearr_48861[(9)] = inst_48750);

(statearr_48861[(10)] = inst_48749);

(statearr_48861[(11)] = inst_48751);

return statearr_48861;
})();
var statearr_48863_51503 = state_48833__$1;
(statearr_48863_51503[(2)] = null);

(statearr_48863_51503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (24))){
var inst_48758 = (state_48833[(12)]);
var inst_48752 = inst_48758;
var state_48833__$1 = (function (){var statearr_48865 = state_48833;
(statearr_48865[(8)] = inst_48752);

return statearr_48865;
})();
var statearr_48868_51504 = state_48833__$1;
(statearr_48868_51504[(2)] = null);

(statearr_48868_51504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (4))){
var inst_48773 = (state_48833[(7)]);
var inst_48776 = (state_48833[(13)]);
var inst_48772 = (state_48833[(2)]);
var inst_48773__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48772,(0),null);
var inst_48774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48772,(1),null);
var inst_48776__$1 = (inst_48773__$1 == null);
var state_48833__$1 = (function (){var statearr_48875 = state_48833;
(statearr_48875[(7)] = inst_48773__$1);

(statearr_48875[(14)] = inst_48774);

(statearr_48875[(13)] = inst_48776__$1);

return statearr_48875;
})();
if(cljs.core.truth_(inst_48776__$1)){
var statearr_48876_51510 = state_48833__$1;
(statearr_48876_51510[(1)] = (5));

} else {
var statearr_48883_51515 = state_48833__$1;
(statearr_48883_51515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (15))){
var inst_48803 = (state_48833[(15)]);
var inst_48760 = (state_48833[(16)]);
var inst_48803__$1 = cljs.core.empty_QMARK_(inst_48760);
var state_48833__$1 = (function (){var statearr_48890 = state_48833;
(statearr_48890[(15)] = inst_48803__$1);

return statearr_48890;
})();
if(inst_48803__$1){
var statearr_48892_51520 = state_48833__$1;
(statearr_48892_51520[(1)] = (17));

} else {
var statearr_48894_51522 = state_48833__$1;
(statearr_48894_51522[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (21))){
var inst_48758 = (state_48833[(12)]);
var inst_48752 = inst_48758;
var state_48833__$1 = (function (){var statearr_48895 = state_48833;
(statearr_48895[(8)] = inst_48752);

return statearr_48895;
})();
var statearr_48897_51524 = state_48833__$1;
(statearr_48897_51524[(2)] = null);

(statearr_48897_51524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (13))){
var inst_48792 = (state_48833[(2)]);
var inst_48793 = calc_state();
var inst_48752 = inst_48793;
var state_48833__$1 = (function (){var statearr_48901 = state_48833;
(statearr_48901[(8)] = inst_48752);

(statearr_48901[(17)] = inst_48792);

return statearr_48901;
})();
var statearr_48902_51529 = state_48833__$1;
(statearr_48902_51529[(2)] = null);

(statearr_48902_51529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (22))){
var inst_48825 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
var statearr_48904_51530 = state_48833__$1;
(statearr_48904_51530[(2)] = inst_48825);

(statearr_48904_51530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (6))){
var inst_48774 = (state_48833[(14)]);
var inst_48779 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48774,change);
var state_48833__$1 = state_48833;
var statearr_48908_51539 = state_48833__$1;
(statearr_48908_51539[(2)] = inst_48779);

(statearr_48908_51539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (25))){
var state_48833__$1 = state_48833;
var statearr_48909_51544 = state_48833__$1;
(statearr_48909_51544[(2)] = null);

(statearr_48909_51544[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (17))){
var inst_48774 = (state_48833[(14)]);
var inst_48761 = (state_48833[(18)]);
var inst_48805 = (inst_48761.cljs$core$IFn$_invoke$arity$1 ? inst_48761.cljs$core$IFn$_invoke$arity$1(inst_48774) : inst_48761.call(null,inst_48774));
var inst_48806 = cljs.core.not(inst_48805);
var state_48833__$1 = state_48833;
var statearr_48916_51545 = state_48833__$1;
(statearr_48916_51545[(2)] = inst_48806);

(statearr_48916_51545[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (3))){
var inst_48829 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48833__$1,inst_48829);
} else {
if((state_val_48834 === (12))){
var state_48833__$1 = state_48833;
var statearr_48925_51549 = state_48833__$1;
(statearr_48925_51549[(2)] = null);

(statearr_48925_51549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (2))){
var inst_48758 = (state_48833[(12)]);
var inst_48752 = (state_48833[(8)]);
var inst_48758__$1 = cljs.core.__destructure_map(inst_48752);
var inst_48760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48758__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48758__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48758__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48833__$1 = (function (){var statearr_48937 = state_48833;
(statearr_48937[(12)] = inst_48758__$1);

(statearr_48937[(18)] = inst_48761);

(statearr_48937[(16)] = inst_48760);

return statearr_48937;
})();
return cljs.core.async.ioc_alts_BANG_(state_48833__$1,(4),inst_48762);
} else {
if((state_val_48834 === (23))){
var inst_48814 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
if(cljs.core.truth_(inst_48814)){
var statearr_48941_51559 = state_48833__$1;
(statearr_48941_51559[(1)] = (24));

} else {
var statearr_48945_51564 = state_48833__$1;
(statearr_48945_51564[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (19))){
var inst_48809 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
var statearr_48950_51565 = state_48833__$1;
(statearr_48950_51565[(2)] = inst_48809);

(statearr_48950_51565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (11))){
var inst_48774 = (state_48833[(14)]);
var inst_48789 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48774);
var state_48833__$1 = state_48833;
var statearr_48951_51569 = state_48833__$1;
(statearr_48951_51569[(2)] = inst_48789);

(statearr_48951_51569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (9))){
var inst_48774 = (state_48833[(14)]);
var inst_48760 = (state_48833[(16)]);
var inst_48797 = (state_48833[(19)]);
var inst_48797__$1 = (inst_48760.cljs$core$IFn$_invoke$arity$1 ? inst_48760.cljs$core$IFn$_invoke$arity$1(inst_48774) : inst_48760.call(null,inst_48774));
var state_48833__$1 = (function (){var statearr_48962 = state_48833;
(statearr_48962[(19)] = inst_48797__$1);

return statearr_48962;
})();
if(cljs.core.truth_(inst_48797__$1)){
var statearr_48965_51575 = state_48833__$1;
(statearr_48965_51575[(1)] = (14));

} else {
var statearr_48967_51576 = state_48833__$1;
(statearr_48967_51576[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (5))){
var inst_48776 = (state_48833[(13)]);
var state_48833__$1 = state_48833;
var statearr_48968_51577 = state_48833__$1;
(statearr_48968_51577[(2)] = inst_48776);

(statearr_48968_51577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (14))){
var inst_48797 = (state_48833[(19)]);
var state_48833__$1 = state_48833;
var statearr_48977_51583 = state_48833__$1;
(statearr_48977_51583[(2)] = inst_48797);

(statearr_48977_51583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (26))){
var inst_48819 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
var statearr_48980_51584 = state_48833__$1;
(statearr_48980_51584[(2)] = inst_48819);

(statearr_48980_51584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (16))){
var inst_48811 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
if(cljs.core.truth_(inst_48811)){
var statearr_48981_51585 = state_48833__$1;
(statearr_48981_51585[(1)] = (20));

} else {
var statearr_48982_51588 = state_48833__$1;
(statearr_48982_51588[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (10))){
var inst_48827 = (state_48833[(2)]);
var state_48833__$1 = state_48833;
var statearr_48987_51594 = state_48833__$1;
(statearr_48987_51594[(2)] = inst_48827);

(statearr_48987_51594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (18))){
var inst_48803 = (state_48833[(15)]);
var state_48833__$1 = state_48833;
var statearr_48991_51595 = state_48833__$1;
(statearr_48991_51595[(2)] = inst_48803);

(statearr_48991_51595[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48834 === (8))){
var inst_48773 = (state_48833[(7)]);
var inst_48787 = (inst_48773 == null);
var state_48833__$1 = state_48833;
if(cljs.core.truth_(inst_48787)){
var statearr_48993_51596 = state_48833__$1;
(statearr_48993_51596[(1)] = (11));

} else {
var statearr_48994_51597 = state_48833__$1;
(statearr_48994_51597[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46232__auto__ = null;
var cljs$core$async$mix_$_state_machine__46232__auto____0 = (function (){
var statearr_48999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48999[(0)] = cljs$core$async$mix_$_state_machine__46232__auto__);

(statearr_48999[(1)] = (1));

return statearr_48999;
});
var cljs$core$async$mix_$_state_machine__46232__auto____1 = (function (state_48833){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_48833);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e49000){var ex__46235__auto__ = e49000;
var statearr_49004_51598 = state_48833;
(statearr_49004_51598[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_48833[(4)]))){
var statearr_49008_51599 = state_48833;
(statearr_49008_51599[(1)] = cljs.core.first((state_48833[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51606 = state_48833;
state_48833 = G__51606;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46232__auto__ = function(state_48833){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46232__auto____1.call(this,state_48833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46232__auto____0;
cljs$core$async$mix_$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46232__auto____1;
return cljs$core$async$mix_$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_49012 = f__46787__auto__();
(statearr_49012[(6)] = c__46786__auto___51495);

return statearr_49012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_51613 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_51613(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_51618 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_51618(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_51619 = (function() {
var G__51620 = null;
var G__51620__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__51620__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__51620 = function(p,v){
switch(arguments.length){
case 1:
return G__51620__1.call(this,p);
case 2:
return G__51620__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51620.cljs$core$IFn$_invoke$arity$1 = G__51620__1;
G__51620.cljs$core$IFn$_invoke$arity$2 = G__51620__2;
return G__51620;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49055 = arguments.length;
switch (G__49055) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51619(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51619(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49065 = arguments.length;
switch (G__49065) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49063_SHARP_){
if(cljs.core.truth_((p1__49063_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49063_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49063_SHARP_.call(null,topic)))){
return p1__49063_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49063_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49071 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49072){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49072 = meta49072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49073,meta49072__$1){
var self__ = this;
var _49073__$1 = this;
return (new cljs.core.async.t_cljs$core$async49071(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49072__$1));
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49073){
var self__ = this;
var _49073__$1 = this;
return self__.meta49072;
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49072","meta49072",282904416,null)], null);
}));

(cljs.core.async.t_cljs$core$async49071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49071");

(cljs.core.async.t_cljs$core$async49071.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49071.
 */
cljs.core.async.__GT_t_cljs$core$async49071 = (function cljs$core$async$__GT_t_cljs$core$async49071(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49072){
return (new cljs.core.async.t_cljs$core$async49071(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49072));
});

}

return (new cljs.core.async.t_cljs$core$async49071(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46786__auto___51648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_49174){
var state_val_49175 = (state_49174[(1)]);
if((state_val_49175 === (7))){
var inst_49170 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49179_51652 = state_49174__$1;
(statearr_49179_51652[(2)] = inst_49170);

(statearr_49179_51652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (20))){
var state_49174__$1 = state_49174;
var statearr_49181_51653 = state_49174__$1;
(statearr_49181_51653[(2)] = null);

(statearr_49181_51653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (1))){
var state_49174__$1 = state_49174;
var statearr_49182_51654 = state_49174__$1;
(statearr_49182_51654[(2)] = null);

(statearr_49182_51654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (24))){
var inst_49153 = (state_49174[(7)]);
var inst_49162 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49153);
var state_49174__$1 = state_49174;
var statearr_49183_51655 = state_49174__$1;
(statearr_49183_51655[(2)] = inst_49162);

(statearr_49183_51655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (4))){
var inst_49088 = (state_49174[(8)]);
var inst_49088__$1 = (state_49174[(2)]);
var inst_49089 = (inst_49088__$1 == null);
var state_49174__$1 = (function (){var statearr_49184 = state_49174;
(statearr_49184[(8)] = inst_49088__$1);

return statearr_49184;
})();
if(cljs.core.truth_(inst_49089)){
var statearr_49185_51656 = state_49174__$1;
(statearr_49185_51656[(1)] = (5));

} else {
var statearr_49187_51657 = state_49174__$1;
(statearr_49187_51657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (15))){
var inst_49144 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49189_51658 = state_49174__$1;
(statearr_49189_51658[(2)] = inst_49144);

(statearr_49189_51658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (21))){
var inst_49167 = (state_49174[(2)]);
var state_49174__$1 = (function (){var statearr_49190 = state_49174;
(statearr_49190[(9)] = inst_49167);

return statearr_49190;
})();
var statearr_49191_51659 = state_49174__$1;
(statearr_49191_51659[(2)] = null);

(statearr_49191_51659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (13))){
var inst_49124 = (state_49174[(10)]);
var inst_49128 = cljs.core.chunked_seq_QMARK_(inst_49124);
var state_49174__$1 = state_49174;
if(inst_49128){
var statearr_49193_51660 = state_49174__$1;
(statearr_49193_51660[(1)] = (16));

} else {
var statearr_49194_51661 = state_49174__$1;
(statearr_49194_51661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (22))){
var inst_49159 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
if(cljs.core.truth_(inst_49159)){
var statearr_49204_51662 = state_49174__$1;
(statearr_49204_51662[(1)] = (23));

} else {
var statearr_49205_51663 = state_49174__$1;
(statearr_49205_51663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (6))){
var inst_49153 = (state_49174[(7)]);
var inst_49155 = (state_49174[(11)]);
var inst_49088 = (state_49174[(8)]);
var inst_49153__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49088) : topic_fn.call(null,inst_49088));
var inst_49154 = cljs.core.deref(mults);
var inst_49155__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49154,inst_49153__$1);
var state_49174__$1 = (function (){var statearr_49206 = state_49174;
(statearr_49206[(7)] = inst_49153__$1);

(statearr_49206[(11)] = inst_49155__$1);

return statearr_49206;
})();
if(cljs.core.truth_(inst_49155__$1)){
var statearr_49207_51664 = state_49174__$1;
(statearr_49207_51664[(1)] = (19));

} else {
var statearr_49208_51665 = state_49174__$1;
(statearr_49208_51665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (25))){
var inst_49164 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49213_51667 = state_49174__$1;
(statearr_49213_51667[(2)] = inst_49164);

(statearr_49213_51667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (17))){
var inst_49124 = (state_49174[(10)]);
var inst_49135 = cljs.core.first(inst_49124);
var inst_49136 = cljs.core.async.muxch_STAR_(inst_49135);
var inst_49137 = cljs.core.async.close_BANG_(inst_49136);
var inst_49138 = cljs.core.next(inst_49124);
var inst_49100 = inst_49138;
var inst_49101 = null;
var inst_49102 = (0);
var inst_49103 = (0);
var state_49174__$1 = (function (){var statearr_49214 = state_49174;
(statearr_49214[(12)] = inst_49103);

(statearr_49214[(13)] = inst_49100);

(statearr_49214[(14)] = inst_49137);

(statearr_49214[(15)] = inst_49101);

(statearr_49214[(16)] = inst_49102);

return statearr_49214;
})();
var statearr_49215_51672 = state_49174__$1;
(statearr_49215_51672[(2)] = null);

(statearr_49215_51672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (3))){
var inst_49172 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49174__$1,inst_49172);
} else {
if((state_val_49175 === (12))){
var inst_49146 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49218_51674 = state_49174__$1;
(statearr_49218_51674[(2)] = inst_49146);

(statearr_49218_51674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (2))){
var state_49174__$1 = state_49174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49174__$1,(4),ch);
} else {
if((state_val_49175 === (23))){
var state_49174__$1 = state_49174;
var statearr_49219_51675 = state_49174__$1;
(statearr_49219_51675[(2)] = null);

(statearr_49219_51675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (19))){
var inst_49155 = (state_49174[(11)]);
var inst_49088 = (state_49174[(8)]);
var inst_49157 = cljs.core.async.muxch_STAR_(inst_49155);
var state_49174__$1 = state_49174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49174__$1,(22),inst_49157,inst_49088);
} else {
if((state_val_49175 === (11))){
var inst_49100 = (state_49174[(13)]);
var inst_49124 = (state_49174[(10)]);
var inst_49124__$1 = cljs.core.seq(inst_49100);
var state_49174__$1 = (function (){var statearr_49224 = state_49174;
(statearr_49224[(10)] = inst_49124__$1);

return statearr_49224;
})();
if(inst_49124__$1){
var statearr_49225_51676 = state_49174__$1;
(statearr_49225_51676[(1)] = (13));

} else {
var statearr_49226_51677 = state_49174__$1;
(statearr_49226_51677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (9))){
var inst_49148 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49227_51678 = state_49174__$1;
(statearr_49227_51678[(2)] = inst_49148);

(statearr_49227_51678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (5))){
var inst_49095 = cljs.core.deref(mults);
var inst_49096 = cljs.core.vals(inst_49095);
var inst_49097 = cljs.core.seq(inst_49096);
var inst_49100 = inst_49097;
var inst_49101 = null;
var inst_49102 = (0);
var inst_49103 = (0);
var state_49174__$1 = (function (){var statearr_49231 = state_49174;
(statearr_49231[(12)] = inst_49103);

(statearr_49231[(13)] = inst_49100);

(statearr_49231[(15)] = inst_49101);

(statearr_49231[(16)] = inst_49102);

return statearr_49231;
})();
var statearr_49232_51683 = state_49174__$1;
(statearr_49232_51683[(2)] = null);

(statearr_49232_51683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (14))){
var state_49174__$1 = state_49174;
var statearr_49238_51684 = state_49174__$1;
(statearr_49238_51684[(2)] = null);

(statearr_49238_51684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (16))){
var inst_49124 = (state_49174[(10)]);
var inst_49130 = cljs.core.chunk_first(inst_49124);
var inst_49131 = cljs.core.chunk_rest(inst_49124);
var inst_49132 = cljs.core.count(inst_49130);
var inst_49100 = inst_49131;
var inst_49101 = inst_49130;
var inst_49102 = inst_49132;
var inst_49103 = (0);
var state_49174__$1 = (function (){var statearr_49244 = state_49174;
(statearr_49244[(12)] = inst_49103);

(statearr_49244[(13)] = inst_49100);

(statearr_49244[(15)] = inst_49101);

(statearr_49244[(16)] = inst_49102);

return statearr_49244;
})();
var statearr_49245_51685 = state_49174__$1;
(statearr_49245_51685[(2)] = null);

(statearr_49245_51685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (10))){
var inst_49103 = (state_49174[(12)]);
var inst_49100 = (state_49174[(13)]);
var inst_49101 = (state_49174[(15)]);
var inst_49102 = (state_49174[(16)]);
var inst_49113 = cljs.core._nth(inst_49101,inst_49103);
var inst_49114 = cljs.core.async.muxch_STAR_(inst_49113);
var inst_49116 = cljs.core.async.close_BANG_(inst_49114);
var inst_49121 = (inst_49103 + (1));
var tmp49235 = inst_49100;
var tmp49236 = inst_49101;
var tmp49237 = inst_49102;
var inst_49100__$1 = tmp49235;
var inst_49101__$1 = tmp49236;
var inst_49102__$1 = tmp49237;
var inst_49103__$1 = inst_49121;
var state_49174__$1 = (function (){var statearr_49248 = state_49174;
(statearr_49248[(17)] = inst_49116);

(statearr_49248[(12)] = inst_49103__$1);

(statearr_49248[(13)] = inst_49100__$1);

(statearr_49248[(15)] = inst_49101__$1);

(statearr_49248[(16)] = inst_49102__$1);

return statearr_49248;
})();
var statearr_49251_51691 = state_49174__$1;
(statearr_49251_51691[(2)] = null);

(statearr_49251_51691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (18))){
var inst_49141 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49255_51692 = state_49174__$1;
(statearr_49255_51692[(2)] = inst_49141);

(statearr_49255_51692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (8))){
var inst_49103 = (state_49174[(12)]);
var inst_49102 = (state_49174[(16)]);
var inst_49105 = (inst_49103 < inst_49102);
var inst_49106 = inst_49105;
var state_49174__$1 = state_49174;
if(cljs.core.truth_(inst_49106)){
var statearr_49257_51693 = state_49174__$1;
(statearr_49257_51693[(1)] = (10));

} else {
var statearr_49258_51695 = state_49174__$1;
(statearr_49258_51695[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_49259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49259[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_49259[(1)] = (1));

return statearr_49259;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_49174){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_49174);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e49269){var ex__46235__auto__ = e49269;
var statearr_49270_51701 = state_49174;
(statearr_49270_51701[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_49174[(4)]))){
var statearr_49278_51704 = state_49174;
(statearr_49278_51704[(1)] = cljs.core.first((state_49174[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51705 = state_49174;
state_49174 = G__51705;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_49174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_49174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_49288 = f__46787__auto__();
(statearr_49288[(6)] = c__46786__auto___51648);

return statearr_49288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49297 = arguments.length;
switch (G__49297) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49317 = arguments.length;
switch (G__49317) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49330 = arguments.length;
switch (G__49330) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46786__auto___51737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_49402){
var state_val_49407 = (state_49402[(1)]);
if((state_val_49407 === (7))){
var state_49402__$1 = state_49402;
var statearr_49410_51738 = state_49402__$1;
(statearr_49410_51738[(2)] = null);

(statearr_49410_51738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (1))){
var state_49402__$1 = state_49402;
var statearr_49411_51739 = state_49402__$1;
(statearr_49411_51739[(2)] = null);

(statearr_49411_51739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (4))){
var inst_49345 = (state_49402[(7)]);
var inst_49346 = (state_49402[(8)]);
var inst_49348 = (inst_49346 < inst_49345);
var state_49402__$1 = state_49402;
if(cljs.core.truth_(inst_49348)){
var statearr_49415_51745 = state_49402__$1;
(statearr_49415_51745[(1)] = (6));

} else {
var statearr_49416_51746 = state_49402__$1;
(statearr_49416_51746[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (15))){
var inst_49375 = (state_49402[(9)]);
var inst_49384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49375);
var state_49402__$1 = state_49402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49402__$1,(17),out,inst_49384);
} else {
if((state_val_49407 === (13))){
var inst_49375 = (state_49402[(9)]);
var inst_49375__$1 = (state_49402[(2)]);
var inst_49376 = cljs.core.some(cljs.core.nil_QMARK_,inst_49375__$1);
var state_49402__$1 = (function (){var statearr_49425 = state_49402;
(statearr_49425[(9)] = inst_49375__$1);

return statearr_49425;
})();
if(cljs.core.truth_(inst_49376)){
var statearr_49427_51749 = state_49402__$1;
(statearr_49427_51749[(1)] = (14));

} else {
var statearr_49428_51750 = state_49402__$1;
(statearr_49428_51750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (6))){
var state_49402__$1 = state_49402;
var statearr_49429_51751 = state_49402__$1;
(statearr_49429_51751[(2)] = null);

(statearr_49429_51751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (17))){
var inst_49386 = (state_49402[(2)]);
var state_49402__$1 = (function (){var statearr_49440 = state_49402;
(statearr_49440[(10)] = inst_49386);

return statearr_49440;
})();
var statearr_49441_51752 = state_49402__$1;
(statearr_49441_51752[(2)] = null);

(statearr_49441_51752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (3))){
var inst_49391 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49402__$1,inst_49391);
} else {
if((state_val_49407 === (12))){
var _ = (function (){var statearr_49442 = state_49402;
(statearr_49442[(4)] = cljs.core.rest((state_49402[(4)])));

return statearr_49442;
})();
var state_49402__$1 = state_49402;
var ex49439 = (state_49402__$1[(2)]);
var statearr_49443_51759 = state_49402__$1;
(statearr_49443_51759[(5)] = ex49439);


if((ex49439 instanceof Object)){
var statearr_49446_51760 = state_49402__$1;
(statearr_49446_51760[(1)] = (11));

(statearr_49446_51760[(5)] = null);

} else {
throw ex49439;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (2))){
var inst_49343 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49345 = cnt;
var inst_49346 = (0);
var state_49402__$1 = (function (){var statearr_49456 = state_49402;
(statearr_49456[(11)] = inst_49343);

(statearr_49456[(7)] = inst_49345);

(statearr_49456[(8)] = inst_49346);

return statearr_49456;
})();
var statearr_49458_51765 = state_49402__$1;
(statearr_49458_51765[(2)] = null);

(statearr_49458_51765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (11))){
var inst_49350 = (state_49402[(2)]);
var inst_49351 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49402__$1 = (function (){var statearr_49464 = state_49402;
(statearr_49464[(12)] = inst_49350);

return statearr_49464;
})();
var statearr_49466_51769 = state_49402__$1;
(statearr_49466_51769[(2)] = inst_49351);

(statearr_49466_51769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (9))){
var inst_49346 = (state_49402[(8)]);
var _ = (function (){var statearr_49469 = state_49402;
(statearr_49469[(4)] = cljs.core.cons((12),(state_49402[(4)])));

return statearr_49469;
})();
var inst_49361 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49346) : chs__$1.call(null,inst_49346));
var inst_49362 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49346) : done.call(null,inst_49346));
var inst_49363 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49361,inst_49362);
var ___$1 = (function (){var statearr_49474 = state_49402;
(statearr_49474[(4)] = cljs.core.rest((state_49402[(4)])));

return statearr_49474;
})();
var state_49402__$1 = state_49402;
var statearr_49476_51770 = state_49402__$1;
(statearr_49476_51770[(2)] = inst_49363);

(statearr_49476_51770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (5))){
var inst_49373 = (state_49402[(2)]);
var state_49402__$1 = (function (){var statearr_49483 = state_49402;
(statearr_49483[(13)] = inst_49373);

return statearr_49483;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49402__$1,(13),dchan);
} else {
if((state_val_49407 === (14))){
var inst_49378 = cljs.core.async.close_BANG_(out);
var state_49402__$1 = state_49402;
var statearr_49489_51773 = state_49402__$1;
(statearr_49489_51773[(2)] = inst_49378);

(statearr_49489_51773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (16))){
var inst_49389 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
var statearr_49495_51775 = state_49402__$1;
(statearr_49495_51775[(2)] = inst_49389);

(statearr_49495_51775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (10))){
var inst_49346 = (state_49402[(8)]);
var inst_49366 = (state_49402[(2)]);
var inst_49367 = (inst_49346 + (1));
var inst_49346__$1 = inst_49367;
var state_49402__$1 = (function (){var statearr_49496 = state_49402;
(statearr_49496[(14)] = inst_49366);

(statearr_49496[(8)] = inst_49346__$1);

return statearr_49496;
})();
var statearr_49497_51778 = state_49402__$1;
(statearr_49497_51778[(2)] = null);

(statearr_49497_51778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49407 === (8))){
var inst_49371 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
var statearr_49498_51779 = state_49402__$1;
(statearr_49498_51779[(2)] = inst_49371);

(statearr_49498_51779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_49505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49505[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_49505[(1)] = (1));

return statearr_49505;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_49402){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_49402);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e49506){var ex__46235__auto__ = e49506;
var statearr_49507_51781 = state_49402;
(statearr_49507_51781[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_49402[(4)]))){
var statearr_49508_51782 = state_49402;
(statearr_49508_51782[(1)] = cljs.core.first((state_49402[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51783 = state_49402;
state_49402 = G__51783;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_49402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_49402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_49509 = f__46787__auto__();
(statearr_49509[(6)] = c__46786__auto___51737);

return statearr_49509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49515 = arguments.length;
switch (G__49515) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46786__auto___51789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_49561){
var state_val_49562 = (state_49561[(1)]);
if((state_val_49562 === (7))){
var inst_49539 = (state_49561[(7)]);
var inst_49540 = (state_49561[(8)]);
var inst_49539__$1 = (state_49561[(2)]);
var inst_49540__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49539__$1,(0),null);
var inst_49541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49539__$1,(1),null);
var inst_49542 = (inst_49540__$1 == null);
var state_49561__$1 = (function (){var statearr_49564 = state_49561;
(statearr_49564[(7)] = inst_49539__$1);

(statearr_49564[(8)] = inst_49540__$1);

(statearr_49564[(9)] = inst_49541);

return statearr_49564;
})();
if(cljs.core.truth_(inst_49542)){
var statearr_49565_51794 = state_49561__$1;
(statearr_49565_51794[(1)] = (8));

} else {
var statearr_49566_51796 = state_49561__$1;
(statearr_49566_51796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49562 === (1))){
var inst_49525 = cljs.core.vec(chs);
var inst_49526 = inst_49525;
var state_49561__$1 = (function (){var statearr_49567 = state_49561;
(statearr_49567[(10)] = inst_49526);

return statearr_49567;
})();
var statearr_49568_51797 = state_49561__$1;
(statearr_49568_51797[(2)] = null);

(statearr_49568_51797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49562 === (4))){
var inst_49526 = (state_49561[(10)]);
var state_49561__$1 = state_49561;
return cljs.core.async.ioc_alts_BANG_(state_49561__$1,(7),inst_49526);
} else {
if((state_val_49562 === (6))){
var inst_49557 = (state_49561[(2)]);
var state_49561__$1 = state_49561;
var statearr_49569_51798 = state_49561__$1;
(statearr_49569_51798[(2)] = inst_49557);

(statearr_49569_51798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49562 === (3))){
var inst_49559 = (state_49561[(2)]);
var state_49561__$1 = state_49561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49561__$1,inst_49559);
} else {
if((state_val_49562 === (2))){
var inst_49526 = (state_49561[(10)]);
var inst_49528 = cljs.core.count(inst_49526);
var inst_49529 = (inst_49528 > (0));
var state_49561__$1 = state_49561;
if(cljs.core.truth_(inst_49529)){
var statearr_49573_51803 = state_49561__$1;
(statearr_49573_51803[(1)] = (4));

} else {
var statearr_49574_51807 = state_49561__$1;
(statearr_49574_51807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49562 === (11))){
var inst_49526 = (state_49561[(10)]);
var inst_49550 = (state_49561[(2)]);
var tmp49570 = inst_49526;
var inst_49526__$1 = tmp49570;
var state_49561__$1 = (function (){var statearr_49576 = state_49561;
(statearr_49576[(10)] = inst_49526__$1);

(statearr_49576[(11)] = inst_49550);

return statearr_49576;
})();
var statearr_49578_51819 = state_49561__$1;
(statearr_49578_51819[(2)] = null);

(statearr_49578_51819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49562 === (9))){
var inst_49540 = (state_49561[(8)]);
var state_49561__$1 = state_49561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49561__$1,(11),out,inst_49540);
} else {
if((state_val_49562 === (5))){
var inst_49555 = cljs.core.async.close_BANG_(out);
var state_49561__$1 = state_49561;
var statearr_49580_51829 = state_49561__$1;
(statearr_49580_51829[(2)] = inst_49555);

(statearr_49580_51829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49562 === (10))){
var inst_49553 = (state_49561[(2)]);
var state_49561__$1 = state_49561;
var statearr_49584_51834 = state_49561__$1;
(statearr_49584_51834[(2)] = inst_49553);

(statearr_49584_51834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49562 === (8))){
var inst_49539 = (state_49561[(7)]);
var inst_49526 = (state_49561[(10)]);
var inst_49540 = (state_49561[(8)]);
var inst_49541 = (state_49561[(9)]);
var inst_49545 = (function (){var cs = inst_49526;
var vec__49532 = inst_49539;
var v = inst_49540;
var c = inst_49541;
return (function (p1__49512_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49512_SHARP_);
});
})();
var inst_49546 = cljs.core.filterv(inst_49545,inst_49526);
var inst_49526__$1 = inst_49546;
var state_49561__$1 = (function (){var statearr_49585 = state_49561;
(statearr_49585[(10)] = inst_49526__$1);

return statearr_49585;
})();
var statearr_49586_51851 = state_49561__$1;
(statearr_49586_51851[(2)] = null);

(statearr_49586_51851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_49590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49590[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_49590[(1)] = (1));

return statearr_49590;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_49561){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_49561);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e49591){var ex__46235__auto__ = e49591;
var statearr_49592_51871 = state_49561;
(statearr_49592_51871[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_49561[(4)]))){
var statearr_49595_51874 = state_49561;
(statearr_49595_51874[(1)] = cljs.core.first((state_49561[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51876 = state_49561;
state_49561 = G__51876;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_49561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_49561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_49596 = f__46787__auto__();
(statearr_49596[(6)] = c__46786__auto___51789);

return statearr_49596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49604 = arguments.length;
switch (G__49604) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46786__auto___51896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_49638){
var state_val_49639 = (state_49638[(1)]);
if((state_val_49639 === (7))){
var inst_49620 = (state_49638[(7)]);
var inst_49620__$1 = (state_49638[(2)]);
var inst_49621 = (inst_49620__$1 == null);
var inst_49622 = cljs.core.not(inst_49621);
var state_49638__$1 = (function (){var statearr_49644 = state_49638;
(statearr_49644[(7)] = inst_49620__$1);

return statearr_49644;
})();
if(inst_49622){
var statearr_49649_51899 = state_49638__$1;
(statearr_49649_51899[(1)] = (8));

} else {
var statearr_49650_51900 = state_49638__$1;
(statearr_49650_51900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (1))){
var inst_49612 = (0);
var state_49638__$1 = (function (){var statearr_49656 = state_49638;
(statearr_49656[(8)] = inst_49612);

return statearr_49656;
})();
var statearr_49657_51903 = state_49638__$1;
(statearr_49657_51903[(2)] = null);

(statearr_49657_51903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (4))){
var state_49638__$1 = state_49638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49638__$1,(7),ch);
} else {
if((state_val_49639 === (6))){
var inst_49633 = (state_49638[(2)]);
var state_49638__$1 = state_49638;
var statearr_49661_51916 = state_49638__$1;
(statearr_49661_51916[(2)] = inst_49633);

(statearr_49661_51916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (3))){
var inst_49635 = (state_49638[(2)]);
var inst_49636 = cljs.core.async.close_BANG_(out);
var state_49638__$1 = (function (){var statearr_49662 = state_49638;
(statearr_49662[(9)] = inst_49635);

return statearr_49662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49638__$1,inst_49636);
} else {
if((state_val_49639 === (2))){
var inst_49612 = (state_49638[(8)]);
var inst_49617 = (inst_49612 < n);
var state_49638__$1 = state_49638;
if(cljs.core.truth_(inst_49617)){
var statearr_49663_51929 = state_49638__$1;
(statearr_49663_51929[(1)] = (4));

} else {
var statearr_49668_51931 = state_49638__$1;
(statearr_49668_51931[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (11))){
var inst_49612 = (state_49638[(8)]);
var inst_49625 = (state_49638[(2)]);
var inst_49626 = (inst_49612 + (1));
var inst_49612__$1 = inst_49626;
var state_49638__$1 = (function (){var statearr_49669 = state_49638;
(statearr_49669[(10)] = inst_49625);

(statearr_49669[(8)] = inst_49612__$1);

return statearr_49669;
})();
var statearr_49670_51946 = state_49638__$1;
(statearr_49670_51946[(2)] = null);

(statearr_49670_51946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (9))){
var state_49638__$1 = state_49638;
var statearr_49671_51950 = state_49638__$1;
(statearr_49671_51950[(2)] = null);

(statearr_49671_51950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (5))){
var state_49638__$1 = state_49638;
var statearr_49672_51956 = state_49638__$1;
(statearr_49672_51956[(2)] = null);

(statearr_49672_51956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (10))){
var inst_49630 = (state_49638[(2)]);
var state_49638__$1 = state_49638;
var statearr_49673_51969 = state_49638__$1;
(statearr_49673_51969[(2)] = inst_49630);

(statearr_49673_51969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49639 === (8))){
var inst_49620 = (state_49638[(7)]);
var state_49638__$1 = state_49638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49638__$1,(11),out,inst_49620);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_49675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49675[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_49675[(1)] = (1));

return statearr_49675;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_49638){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_49638);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e49676){var ex__46235__auto__ = e49676;
var statearr_49677_51978 = state_49638;
(statearr_49677_51978[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_49638[(4)]))){
var statearr_49678_51986 = state_49638;
(statearr_49678_51986[(1)] = cljs.core.first((state_49638[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51993 = state_49638;
state_49638 = G__51993;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_49638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_49638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_49685 = f__46787__auto__();
(statearr_49685[(6)] = c__46786__auto___51896);

return statearr_49685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49690 = (function (f,ch,meta49691){
this.f = f;
this.ch = ch;
this.meta49691 = meta49691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49692,meta49691__$1){
var self__ = this;
var _49692__$1 = this;
return (new cljs.core.async.t_cljs$core$async49690(self__.f,self__.ch,meta49691__$1));
}));

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49692){
var self__ = this;
var _49692__$1 = this;
return self__.meta49691;
}));

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49701 = (function (f,ch,meta49691,_,fn1,meta49702){
this.f = f;
this.ch = ch;
this.meta49691 = meta49691;
this._ = _;
this.fn1 = fn1;
this.meta49702 = meta49702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49703,meta49702__$1){
var self__ = this;
var _49703__$1 = this;
return (new cljs.core.async.t_cljs$core$async49701(self__.f,self__.ch,self__.meta49691,self__._,self__.fn1,meta49702__$1));
}));

(cljs.core.async.t_cljs$core$async49701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49703){
var self__ = this;
var _49703__$1 = this;
return self__.meta49702;
}));

(cljs.core.async.t_cljs$core$async49701.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49686_SHARP_){
var G__49705 = (((p1__49686_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49686_SHARP_) : self__.f.call(null,p1__49686_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49705) : f1.call(null,G__49705));
});
}));

(cljs.core.async.t_cljs$core$async49701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49691","meta49691",1718346117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49690","cljs.core.async/t_cljs$core$async49690",-1707987729,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49702","meta49702",-75950230,null)], null);
}));

(cljs.core.async.t_cljs$core$async49701.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49701");

(cljs.core.async.t_cljs$core$async49701.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49701");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49701.
 */
cljs.core.async.__GT_t_cljs$core$async49701 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49701(f__$1,ch__$1,meta49691__$1,___$2,fn1__$1,meta49702){
return (new cljs.core.async.t_cljs$core$async49701(f__$1,ch__$1,meta49691__$1,___$2,fn1__$1,meta49702));
});

}

return (new cljs.core.async.t_cljs$core$async49701(self__.f,self__.ch,self__.meta49691,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49746 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49746) : self__.f.call(null,G__49746));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49691","meta49691",1718346117,null)], null);
}));

(cljs.core.async.t_cljs$core$async49690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49690");

(cljs.core.async.t_cljs$core$async49690.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49690.
 */
cljs.core.async.__GT_t_cljs$core$async49690 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49690(f__$1,ch__$1,meta49691){
return (new cljs.core.async.t_cljs$core$async49690(f__$1,ch__$1,meta49691));
});

}

return (new cljs.core.async.t_cljs$core$async49690(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49777 = (function (f,ch,meta49778){
this.f = f;
this.ch = ch;
this.meta49778 = meta49778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49779,meta49778__$1){
var self__ = this;
var _49779__$1 = this;
return (new cljs.core.async.t_cljs$core$async49777(self__.f,self__.ch,meta49778__$1));
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49779){
var self__ = this;
var _49779__$1 = this;
return self__.meta49778;
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49778","meta49778",-558171381,null)], null);
}));

(cljs.core.async.t_cljs$core$async49777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49777");

(cljs.core.async.t_cljs$core$async49777.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49777.
 */
cljs.core.async.__GT_t_cljs$core$async49777 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49777(f__$1,ch__$1,meta49778){
return (new cljs.core.async.t_cljs$core$async49777(f__$1,ch__$1,meta49778));
});

}

return (new cljs.core.async.t_cljs$core$async49777(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49816 = (function (p,ch,meta49817){
this.p = p;
this.ch = ch;
this.meta49817 = meta49817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49818,meta49817__$1){
var self__ = this;
var _49818__$1 = this;
return (new cljs.core.async.t_cljs$core$async49816(self__.p,self__.ch,meta49817__$1));
}));

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49818){
var self__ = this;
var _49818__$1 = this;
return self__.meta49817;
}));

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49817","meta49817",244140005,null)], null);
}));

(cljs.core.async.t_cljs$core$async49816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49816");

(cljs.core.async.t_cljs$core$async49816.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49816.
 */
cljs.core.async.__GT_t_cljs$core$async49816 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49816(p__$1,ch__$1,meta49817){
return (new cljs.core.async.t_cljs$core$async49816(p__$1,ch__$1,meta49817));
});

}

return (new cljs.core.async.t_cljs$core$async49816(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49855 = arguments.length;
switch (G__49855) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46786__auto___52101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_49892){
var state_val_49895 = (state_49892[(1)]);
if((state_val_49895 === (7))){
var inst_49884 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49903_52102 = state_49892__$1;
(statearr_49903_52102[(2)] = inst_49884);

(statearr_49903_52102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (1))){
var state_49892__$1 = state_49892;
var statearr_49908_52110 = state_49892__$1;
(statearr_49908_52110[(2)] = null);

(statearr_49908_52110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (4))){
var inst_49867 = (state_49892[(7)]);
var inst_49867__$1 = (state_49892[(2)]);
var inst_49868 = (inst_49867__$1 == null);
var state_49892__$1 = (function (){var statearr_49909 = state_49892;
(statearr_49909[(7)] = inst_49867__$1);

return statearr_49909;
})();
if(cljs.core.truth_(inst_49868)){
var statearr_49910_52116 = state_49892__$1;
(statearr_49910_52116[(1)] = (5));

} else {
var statearr_49911_52121 = state_49892__$1;
(statearr_49911_52121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (6))){
var inst_49867 = (state_49892[(7)]);
var inst_49872 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49867) : p.call(null,inst_49867));
var state_49892__$1 = state_49892;
if(cljs.core.truth_(inst_49872)){
var statearr_49913_52129 = state_49892__$1;
(statearr_49913_52129[(1)] = (8));

} else {
var statearr_49915_52130 = state_49892__$1;
(statearr_49915_52130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (3))){
var inst_49887 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49892__$1,inst_49887);
} else {
if((state_val_49895 === (2))){
var state_49892__$1 = state_49892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49892__$1,(4),ch);
} else {
if((state_val_49895 === (11))){
var inst_49877 = (state_49892[(2)]);
var state_49892__$1 = state_49892;
var statearr_49936_52142 = state_49892__$1;
(statearr_49936_52142[(2)] = inst_49877);

(statearr_49936_52142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (9))){
var state_49892__$1 = state_49892;
var statearr_49942_52146 = state_49892__$1;
(statearr_49942_52146[(2)] = null);

(statearr_49942_52146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (5))){
var inst_49870 = cljs.core.async.close_BANG_(out);
var state_49892__$1 = state_49892;
var statearr_49943_52153 = state_49892__$1;
(statearr_49943_52153[(2)] = inst_49870);

(statearr_49943_52153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (10))){
var inst_49880 = (state_49892[(2)]);
var state_49892__$1 = (function (){var statearr_49945 = state_49892;
(statearr_49945[(8)] = inst_49880);

return statearr_49945;
})();
var statearr_49946_52162 = state_49892__$1;
(statearr_49946_52162[(2)] = null);

(statearr_49946_52162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (8))){
var inst_49867 = (state_49892[(7)]);
var state_49892__$1 = state_49892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49892__$1,(11),out,inst_49867);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_49948 = [null,null,null,null,null,null,null,null,null];
(statearr_49948[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_49948[(1)] = (1));

return statearr_49948;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_49892){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_49892);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e49951){var ex__46235__auto__ = e49951;
var statearr_49952_52171 = state_49892;
(statearr_49952_52171[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_49892[(4)]))){
var statearr_49953_52173 = state_49892;
(statearr_49953_52173[(1)] = cljs.core.first((state_49892[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52179 = state_49892;
state_49892 = G__52179;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_49892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_49892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_49956 = f__46787__auto__();
(statearr_49956[(6)] = c__46786__auto___52101);

return statearr_49956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49963 = arguments.length;
switch (G__49963) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46786__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_50077){
var state_val_50078 = (state_50077[(1)]);
if((state_val_50078 === (7))){
var inst_50069 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50082_52190 = state_50077__$1;
(statearr_50082_52190[(2)] = inst_50069);

(statearr_50082_52190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (20))){
var inst_50028 = (state_50077[(7)]);
var inst_50048 = (state_50077[(2)]);
var inst_50049 = cljs.core.next(inst_50028);
var inst_50006 = inst_50049;
var inst_50007 = null;
var inst_50008 = (0);
var inst_50013 = (0);
var state_50077__$1 = (function (){var statearr_50087 = state_50077;
(statearr_50087[(8)] = inst_50013);

(statearr_50087[(9)] = inst_50008);

(statearr_50087[(10)] = inst_50006);

(statearr_50087[(11)] = inst_50007);

(statearr_50087[(12)] = inst_50048);

return statearr_50087;
})();
var statearr_50089_52201 = state_50077__$1;
(statearr_50089_52201[(2)] = null);

(statearr_50089_52201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (1))){
var state_50077__$1 = state_50077;
var statearr_50092_52202 = state_50077__$1;
(statearr_50092_52202[(2)] = null);

(statearr_50092_52202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (4))){
var inst_49991 = (state_50077[(13)]);
var inst_49991__$1 = (state_50077[(2)]);
var inst_49996 = (inst_49991__$1 == null);
var state_50077__$1 = (function (){var statearr_50093 = state_50077;
(statearr_50093[(13)] = inst_49991__$1);

return statearr_50093;
})();
if(cljs.core.truth_(inst_49996)){
var statearr_50094_52204 = state_50077__$1;
(statearr_50094_52204[(1)] = (5));

} else {
var statearr_50095_52210 = state_50077__$1;
(statearr_50095_52210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (15))){
var state_50077__$1 = state_50077;
var statearr_50099_52215 = state_50077__$1;
(statearr_50099_52215[(2)] = null);

(statearr_50099_52215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (21))){
var state_50077__$1 = state_50077;
var statearr_50104_52216 = state_50077__$1;
(statearr_50104_52216[(2)] = null);

(statearr_50104_52216[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (13))){
var inst_50013 = (state_50077[(8)]);
var inst_50008 = (state_50077[(9)]);
var inst_50006 = (state_50077[(10)]);
var inst_50007 = (state_50077[(11)]);
var inst_50024 = (state_50077[(2)]);
var inst_50025 = (inst_50013 + (1));
var tmp50096 = inst_50008;
var tmp50097 = inst_50006;
var tmp50098 = inst_50007;
var inst_50006__$1 = tmp50097;
var inst_50007__$1 = tmp50098;
var inst_50008__$1 = tmp50096;
var inst_50013__$1 = inst_50025;
var state_50077__$1 = (function (){var statearr_50105 = state_50077;
(statearr_50105[(8)] = inst_50013__$1);

(statearr_50105[(9)] = inst_50008__$1);

(statearr_50105[(10)] = inst_50006__$1);

(statearr_50105[(11)] = inst_50007__$1);

(statearr_50105[(14)] = inst_50024);

return statearr_50105;
})();
var statearr_50107_52249 = state_50077__$1;
(statearr_50107_52249[(2)] = null);

(statearr_50107_52249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (22))){
var state_50077__$1 = state_50077;
var statearr_50116_52254 = state_50077__$1;
(statearr_50116_52254[(2)] = null);

(statearr_50116_52254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (6))){
var inst_49991 = (state_50077[(13)]);
var inst_50004 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49991) : f.call(null,inst_49991));
var inst_50005 = cljs.core.seq(inst_50004);
var inst_50006 = inst_50005;
var inst_50007 = null;
var inst_50008 = (0);
var inst_50013 = (0);
var state_50077__$1 = (function (){var statearr_50129 = state_50077;
(statearr_50129[(8)] = inst_50013);

(statearr_50129[(9)] = inst_50008);

(statearr_50129[(10)] = inst_50006);

(statearr_50129[(11)] = inst_50007);

return statearr_50129;
})();
var statearr_50131_52265 = state_50077__$1;
(statearr_50131_52265[(2)] = null);

(statearr_50131_52265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (17))){
var inst_50028 = (state_50077[(7)]);
var inst_50034 = cljs.core.chunk_first(inst_50028);
var inst_50039 = cljs.core.chunk_rest(inst_50028);
var inst_50040 = cljs.core.count(inst_50034);
var inst_50006 = inst_50039;
var inst_50007 = inst_50034;
var inst_50008 = inst_50040;
var inst_50013 = (0);
var state_50077__$1 = (function (){var statearr_50142 = state_50077;
(statearr_50142[(8)] = inst_50013);

(statearr_50142[(9)] = inst_50008);

(statearr_50142[(10)] = inst_50006);

(statearr_50142[(11)] = inst_50007);

return statearr_50142;
})();
var statearr_50146_52285 = state_50077__$1;
(statearr_50146_52285[(2)] = null);

(statearr_50146_52285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (3))){
var inst_50074 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50077__$1,inst_50074);
} else {
if((state_val_50078 === (12))){
var inst_50057 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50149_52296 = state_50077__$1;
(statearr_50149_52296[(2)] = inst_50057);

(statearr_50149_52296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (2))){
var state_50077__$1 = state_50077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50077__$1,(4),in$);
} else {
if((state_val_50078 === (23))){
var inst_50067 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50158_52317 = state_50077__$1;
(statearr_50158_52317[(2)] = inst_50067);

(statearr_50158_52317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (19))){
var inst_50052 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50164_52324 = state_50077__$1;
(statearr_50164_52324[(2)] = inst_50052);

(statearr_50164_52324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (11))){
var inst_50028 = (state_50077[(7)]);
var inst_50006 = (state_50077[(10)]);
var inst_50028__$1 = cljs.core.seq(inst_50006);
var state_50077__$1 = (function (){var statearr_50165 = state_50077;
(statearr_50165[(7)] = inst_50028__$1);

return statearr_50165;
})();
if(inst_50028__$1){
var statearr_50166_52329 = state_50077__$1;
(statearr_50166_52329[(1)] = (14));

} else {
var statearr_50170_52331 = state_50077__$1;
(statearr_50170_52331[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (9))){
var inst_50059 = (state_50077[(2)]);
var inst_50062 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50077__$1 = (function (){var statearr_50178 = state_50077;
(statearr_50178[(15)] = inst_50059);

return statearr_50178;
})();
if(cljs.core.truth_(inst_50062)){
var statearr_50182_52338 = state_50077__$1;
(statearr_50182_52338[(1)] = (21));

} else {
var statearr_50183_52343 = state_50077__$1;
(statearr_50183_52343[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (5))){
var inst_49998 = cljs.core.async.close_BANG_(out);
var state_50077__$1 = state_50077;
var statearr_50188_52345 = state_50077__$1;
(statearr_50188_52345[(2)] = inst_49998);

(statearr_50188_52345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (14))){
var inst_50028 = (state_50077[(7)]);
var inst_50032 = cljs.core.chunked_seq_QMARK_(inst_50028);
var state_50077__$1 = state_50077;
if(inst_50032){
var statearr_50190_52356 = state_50077__$1;
(statearr_50190_52356[(1)] = (17));

} else {
var statearr_50193_52357 = state_50077__$1;
(statearr_50193_52357[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (16))){
var inst_50055 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50196_52360 = state_50077__$1;
(statearr_50196_52360[(2)] = inst_50055);

(statearr_50196_52360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (10))){
var inst_50013 = (state_50077[(8)]);
var inst_50007 = (state_50077[(11)]);
var inst_50022 = cljs.core._nth(inst_50007,inst_50013);
var state_50077__$1 = state_50077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50077__$1,(13),out,inst_50022);
} else {
if((state_val_50078 === (18))){
var inst_50028 = (state_50077[(7)]);
var inst_50046 = cljs.core.first(inst_50028);
var state_50077__$1 = state_50077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50077__$1,(20),out,inst_50046);
} else {
if((state_val_50078 === (8))){
var inst_50013 = (state_50077[(8)]);
var inst_50008 = (state_50077[(9)]);
var inst_50019 = (inst_50013 < inst_50008);
var inst_50020 = inst_50019;
var state_50077__$1 = state_50077;
if(cljs.core.truth_(inst_50020)){
var statearr_50198_52372 = state_50077__$1;
(statearr_50198_52372[(1)] = (10));

} else {
var statearr_50199_52374 = state_50077__$1;
(statearr_50199_52374[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46232__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46232__auto____0 = (function (){
var statearr_50200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50200[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46232__auto__);

(statearr_50200[(1)] = (1));

return statearr_50200;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46232__auto____1 = (function (state_50077){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_50077);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e50201){var ex__46235__auto__ = e50201;
var statearr_50202_52378 = state_50077;
(statearr_50202_52378[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_50077[(4)]))){
var statearr_50204_52379 = state_50077;
(statearr_50204_52379[(1)] = cljs.core.first((state_50077[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52391 = state_50077;
state_50077 = G__52391;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46232__auto__ = function(state_50077){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46232__auto____1.call(this,state_50077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46232__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46232__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_50205 = f__46787__auto__();
(statearr_50205[(6)] = c__46786__auto__);

return statearr_50205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));

return c__46786__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50207 = arguments.length;
switch (G__50207) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50225 = arguments.length;
switch (G__50225) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50227 = arguments.length;
switch (G__50227) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46786__auto___52411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_50260){
var state_val_50261 = (state_50260[(1)]);
if((state_val_50261 === (7))){
var inst_50255 = (state_50260[(2)]);
var state_50260__$1 = state_50260;
var statearr_50273_52414 = state_50260__$1;
(statearr_50273_52414[(2)] = inst_50255);

(statearr_50273_52414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (1))){
var inst_50236 = null;
var state_50260__$1 = (function (){var statearr_50275 = state_50260;
(statearr_50275[(7)] = inst_50236);

return statearr_50275;
})();
var statearr_50276_52418 = state_50260__$1;
(statearr_50276_52418[(2)] = null);

(statearr_50276_52418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (4))){
var inst_50240 = (state_50260[(8)]);
var inst_50240__$1 = (state_50260[(2)]);
var inst_50241 = (inst_50240__$1 == null);
var inst_50242 = cljs.core.not(inst_50241);
var state_50260__$1 = (function (){var statearr_50278 = state_50260;
(statearr_50278[(8)] = inst_50240__$1);

return statearr_50278;
})();
if(inst_50242){
var statearr_50279_52419 = state_50260__$1;
(statearr_50279_52419[(1)] = (5));

} else {
var statearr_50280_52421 = state_50260__$1;
(statearr_50280_52421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (6))){
var state_50260__$1 = state_50260;
var statearr_50282_52425 = state_50260__$1;
(statearr_50282_52425[(2)] = null);

(statearr_50282_52425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (3))){
var inst_50257 = (state_50260[(2)]);
var inst_50258 = cljs.core.async.close_BANG_(out);
var state_50260__$1 = (function (){var statearr_50286 = state_50260;
(statearr_50286[(9)] = inst_50257);

return statearr_50286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50260__$1,inst_50258);
} else {
if((state_val_50261 === (2))){
var state_50260__$1 = state_50260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50260__$1,(4),ch);
} else {
if((state_val_50261 === (11))){
var inst_50240 = (state_50260[(8)]);
var inst_50249 = (state_50260[(2)]);
var inst_50236 = inst_50240;
var state_50260__$1 = (function (){var statearr_50288 = state_50260;
(statearr_50288[(10)] = inst_50249);

(statearr_50288[(7)] = inst_50236);

return statearr_50288;
})();
var statearr_50289_52439 = state_50260__$1;
(statearr_50289_52439[(2)] = null);

(statearr_50289_52439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (9))){
var inst_50240 = (state_50260[(8)]);
var state_50260__$1 = state_50260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50260__$1,(11),out,inst_50240);
} else {
if((state_val_50261 === (5))){
var inst_50236 = (state_50260[(7)]);
var inst_50240 = (state_50260[(8)]);
var inst_50244 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50240,inst_50236);
var state_50260__$1 = state_50260;
if(inst_50244){
var statearr_50291_52447 = state_50260__$1;
(statearr_50291_52447[(1)] = (8));

} else {
var statearr_50292_52448 = state_50260__$1;
(statearr_50292_52448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (10))){
var inst_50252 = (state_50260[(2)]);
var state_50260__$1 = state_50260;
var statearr_50293_52449 = state_50260__$1;
(statearr_50293_52449[(2)] = inst_50252);

(statearr_50293_52449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (8))){
var inst_50236 = (state_50260[(7)]);
var tmp50290 = inst_50236;
var inst_50236__$1 = tmp50290;
var state_50260__$1 = (function (){var statearr_50294 = state_50260;
(statearr_50294[(7)] = inst_50236__$1);

return statearr_50294;
})();
var statearr_50295_52452 = state_50260__$1;
(statearr_50295_52452[(2)] = null);

(statearr_50295_52452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_50296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50296[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_50296[(1)] = (1));

return statearr_50296;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_50260){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_50260);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e50298){var ex__46235__auto__ = e50298;
var statearr_50299_52458 = state_50260;
(statearr_50299_52458[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_50260[(4)]))){
var statearr_50300_52459 = state_50260;
(statearr_50300_52459[(1)] = cljs.core.first((state_50260[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52460 = state_50260;
state_50260 = G__52460;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_50260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_50260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_50301 = f__46787__auto__();
(statearr_50301[(6)] = c__46786__auto___52411);

return statearr_50301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50305 = arguments.length;
switch (G__50305) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46786__auto___52477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_50355){
var state_val_50356 = (state_50355[(1)]);
if((state_val_50356 === (7))){
var inst_50351 = (state_50355[(2)]);
var state_50355__$1 = state_50355;
var statearr_50357_52479 = state_50355__$1;
(statearr_50357_52479[(2)] = inst_50351);

(statearr_50357_52479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (1))){
var inst_50309 = (new Array(n));
var inst_50310 = inst_50309;
var inst_50311 = (0);
var state_50355__$1 = (function (){var statearr_50359 = state_50355;
(statearr_50359[(7)] = inst_50310);

(statearr_50359[(8)] = inst_50311);

return statearr_50359;
})();
var statearr_50360_52480 = state_50355__$1;
(statearr_50360_52480[(2)] = null);

(statearr_50360_52480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (4))){
var inst_50314 = (state_50355[(9)]);
var inst_50314__$1 = (state_50355[(2)]);
var inst_50315 = (inst_50314__$1 == null);
var inst_50316 = cljs.core.not(inst_50315);
var state_50355__$1 = (function (){var statearr_50361 = state_50355;
(statearr_50361[(9)] = inst_50314__$1);

return statearr_50361;
})();
if(inst_50316){
var statearr_50362_52485 = state_50355__$1;
(statearr_50362_52485[(1)] = (5));

} else {
var statearr_50363_52486 = state_50355__$1;
(statearr_50363_52486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (15))){
var inst_50336 = (state_50355[(2)]);
var state_50355__$1 = state_50355;
var statearr_50364_52487 = state_50355__$1;
(statearr_50364_52487[(2)] = inst_50336);

(statearr_50364_52487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (13))){
var state_50355__$1 = state_50355;
var statearr_50365_52488 = state_50355__$1;
(statearr_50365_52488[(2)] = null);

(statearr_50365_52488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (6))){
var inst_50311 = (state_50355[(8)]);
var inst_50332 = (inst_50311 > (0));
var state_50355__$1 = state_50355;
if(cljs.core.truth_(inst_50332)){
var statearr_50367_52489 = state_50355__$1;
(statearr_50367_52489[(1)] = (12));

} else {
var statearr_50368_52490 = state_50355__$1;
(statearr_50368_52490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (3))){
var inst_50353 = (state_50355[(2)]);
var state_50355__$1 = state_50355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50355__$1,inst_50353);
} else {
if((state_val_50356 === (12))){
var inst_50310 = (state_50355[(7)]);
var inst_50334 = cljs.core.vec(inst_50310);
var state_50355__$1 = state_50355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50355__$1,(15),out,inst_50334);
} else {
if((state_val_50356 === (2))){
var state_50355__$1 = state_50355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50355__$1,(4),ch);
} else {
if((state_val_50356 === (11))){
var inst_50326 = (state_50355[(2)]);
var inst_50327 = (new Array(n));
var inst_50310 = inst_50327;
var inst_50311 = (0);
var state_50355__$1 = (function (){var statearr_50369 = state_50355;
(statearr_50369[(10)] = inst_50326);

(statearr_50369[(7)] = inst_50310);

(statearr_50369[(8)] = inst_50311);

return statearr_50369;
})();
var statearr_50370_52504 = state_50355__$1;
(statearr_50370_52504[(2)] = null);

(statearr_50370_52504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (9))){
var inst_50310 = (state_50355[(7)]);
var inst_50324 = cljs.core.vec(inst_50310);
var state_50355__$1 = state_50355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50355__$1,(11),out,inst_50324);
} else {
if((state_val_50356 === (5))){
var inst_50314 = (state_50355[(9)]);
var inst_50319 = (state_50355[(11)]);
var inst_50310 = (state_50355[(7)]);
var inst_50311 = (state_50355[(8)]);
var inst_50318 = (inst_50310[inst_50311] = inst_50314);
var inst_50319__$1 = (inst_50311 + (1));
var inst_50320 = (inst_50319__$1 < n);
var state_50355__$1 = (function (){var statearr_50371 = state_50355;
(statearr_50371[(11)] = inst_50319__$1);

(statearr_50371[(12)] = inst_50318);

return statearr_50371;
})();
if(cljs.core.truth_(inst_50320)){
var statearr_50374_52510 = state_50355__$1;
(statearr_50374_52510[(1)] = (8));

} else {
var statearr_50375_52511 = state_50355__$1;
(statearr_50375_52511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (14))){
var inst_50345 = (state_50355[(2)]);
var inst_50349 = cljs.core.async.close_BANG_(out);
var state_50355__$1 = (function (){var statearr_50377 = state_50355;
(statearr_50377[(13)] = inst_50345);

return statearr_50377;
})();
var statearr_50378_52512 = state_50355__$1;
(statearr_50378_52512[(2)] = inst_50349);

(statearr_50378_52512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (10))){
var inst_50330 = (state_50355[(2)]);
var state_50355__$1 = state_50355;
var statearr_50385_52513 = state_50355__$1;
(statearr_50385_52513[(2)] = inst_50330);

(statearr_50385_52513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (8))){
var inst_50319 = (state_50355[(11)]);
var inst_50310 = (state_50355[(7)]);
var tmp50376 = inst_50310;
var inst_50310__$1 = tmp50376;
var inst_50311 = inst_50319;
var state_50355__$1 = (function (){var statearr_50395 = state_50355;
(statearr_50395[(7)] = inst_50310__$1);

(statearr_50395[(8)] = inst_50311);

return statearr_50395;
})();
var statearr_50396_52515 = state_50355__$1;
(statearr_50396_52515[(2)] = null);

(statearr_50396_52515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_50397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50397[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_50397[(1)] = (1));

return statearr_50397;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_50355){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_50355);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e50400){var ex__46235__auto__ = e50400;
var statearr_50401_52517 = state_50355;
(statearr_50401_52517[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_50355[(4)]))){
var statearr_50402_52519 = state_50355;
(statearr_50402_52519[(1)] = cljs.core.first((state_50355[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52520 = state_50355;
state_50355 = G__52520;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_50355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_50355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_50410 = f__46787__auto__();
(statearr_50410[(6)] = c__46786__auto___52477);

return statearr_50410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50424 = arguments.length;
switch (G__50424) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46786__auto___52527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46787__auto__ = (function (){var switch__46231__auto__ = (function (state_50493){
var state_val_50495 = (state_50493[(1)]);
if((state_val_50495 === (7))){
var inst_50488 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
var statearr_50508_52530 = state_50493__$1;
(statearr_50508_52530[(2)] = inst_50488);

(statearr_50508_52530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (1))){
var inst_50433 = [];
var inst_50434 = inst_50433;
var inst_50435 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50493__$1 = (function (){var statearr_50515 = state_50493;
(statearr_50515[(7)] = inst_50434);

(statearr_50515[(8)] = inst_50435);

return statearr_50515;
})();
var statearr_50524_52531 = state_50493__$1;
(statearr_50524_52531[(2)] = null);

(statearr_50524_52531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (4))){
var inst_50438 = (state_50493[(9)]);
var inst_50438__$1 = (state_50493[(2)]);
var inst_50441 = (inst_50438__$1 == null);
var inst_50442 = cljs.core.not(inst_50441);
var state_50493__$1 = (function (){var statearr_50532 = state_50493;
(statearr_50532[(9)] = inst_50438__$1);

return statearr_50532;
})();
if(inst_50442){
var statearr_50537_52532 = state_50493__$1;
(statearr_50537_52532[(1)] = (5));

} else {
var statearr_50539_52533 = state_50493__$1;
(statearr_50539_52533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (15))){
var inst_50434 = (state_50493[(7)]);
var inst_50480 = cljs.core.vec(inst_50434);
var state_50493__$1 = state_50493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50493__$1,(18),out,inst_50480);
} else {
if((state_val_50495 === (13))){
var inst_50473 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
var statearr_50552_52536 = state_50493__$1;
(statearr_50552_52536[(2)] = inst_50473);

(statearr_50552_52536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (6))){
var inst_50434 = (state_50493[(7)]);
var inst_50476 = inst_50434.length;
var inst_50477 = (inst_50476 > (0));
var state_50493__$1 = state_50493;
if(cljs.core.truth_(inst_50477)){
var statearr_50555_52539 = state_50493__$1;
(statearr_50555_52539[(1)] = (15));

} else {
var statearr_50558_52543 = state_50493__$1;
(statearr_50558_52543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (17))){
var inst_50485 = (state_50493[(2)]);
var inst_50486 = cljs.core.async.close_BANG_(out);
var state_50493__$1 = (function (){var statearr_50564 = state_50493;
(statearr_50564[(10)] = inst_50485);

return statearr_50564;
})();
var statearr_50568_52546 = state_50493__$1;
(statearr_50568_52546[(2)] = inst_50486);

(statearr_50568_52546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (3))){
var inst_50490 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50493__$1,inst_50490);
} else {
if((state_val_50495 === (12))){
var inst_50434 = (state_50493[(7)]);
var inst_50465 = cljs.core.vec(inst_50434);
var state_50493__$1 = state_50493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50493__$1,(14),out,inst_50465);
} else {
if((state_val_50495 === (2))){
var state_50493__$1 = state_50493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50493__$1,(4),ch);
} else {
if((state_val_50495 === (11))){
var inst_50434 = (state_50493[(7)]);
var inst_50451 = (state_50493[(11)]);
var inst_50438 = (state_50493[(9)]);
var inst_50460 = inst_50434.push(inst_50438);
var tmp50573 = inst_50434;
var inst_50434__$1 = tmp50573;
var inst_50435 = inst_50451;
var state_50493__$1 = (function (){var statearr_50580 = state_50493;
(statearr_50580[(7)] = inst_50434__$1);

(statearr_50580[(12)] = inst_50460);

(statearr_50580[(8)] = inst_50435);

return statearr_50580;
})();
var statearr_50585_52553 = state_50493__$1;
(statearr_50585_52553[(2)] = null);

(statearr_50585_52553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (9))){
var inst_50435 = (state_50493[(8)]);
var inst_50456 = cljs.core.keyword_identical_QMARK_(inst_50435,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50493__$1 = state_50493;
var statearr_50593_52555 = state_50493__$1;
(statearr_50593_52555[(2)] = inst_50456);

(statearr_50593_52555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (5))){
var inst_50451 = (state_50493[(11)]);
var inst_50452 = (state_50493[(13)]);
var inst_50438 = (state_50493[(9)]);
var inst_50435 = (state_50493[(8)]);
var inst_50451__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50438) : f.call(null,inst_50438));
var inst_50452__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50451__$1,inst_50435);
var state_50493__$1 = (function (){var statearr_50608 = state_50493;
(statearr_50608[(11)] = inst_50451__$1);

(statearr_50608[(13)] = inst_50452__$1);

return statearr_50608;
})();
if(inst_50452__$1){
var statearr_50613_52560 = state_50493__$1;
(statearr_50613_52560[(1)] = (8));

} else {
var statearr_50614_52562 = state_50493__$1;
(statearr_50614_52562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (14))){
var inst_50451 = (state_50493[(11)]);
var inst_50438 = (state_50493[(9)]);
var inst_50467 = (state_50493[(2)]);
var inst_50468 = [];
var inst_50470 = inst_50468.push(inst_50438);
var inst_50434 = inst_50468;
var inst_50435 = inst_50451;
var state_50493__$1 = (function (){var statearr_50618 = state_50493;
(statearr_50618[(14)] = inst_50467);

(statearr_50618[(7)] = inst_50434);

(statearr_50618[(8)] = inst_50435);

(statearr_50618[(15)] = inst_50470);

return statearr_50618;
})();
var statearr_50621_52564 = state_50493__$1;
(statearr_50621_52564[(2)] = null);

(statearr_50621_52564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (16))){
var state_50493__$1 = state_50493;
var statearr_50626_52565 = state_50493__$1;
(statearr_50626_52565[(2)] = null);

(statearr_50626_52565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (10))){
var inst_50458 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
if(cljs.core.truth_(inst_50458)){
var statearr_50629_52570 = state_50493__$1;
(statearr_50629_52570[(1)] = (11));

} else {
var statearr_50630_52571 = state_50493__$1;
(statearr_50630_52571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (18))){
var inst_50482 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
var statearr_50632_52572 = state_50493__$1;
(statearr_50632_52572[(2)] = inst_50482);

(statearr_50632_52572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50495 === (8))){
var inst_50452 = (state_50493[(13)]);
var state_50493__$1 = state_50493;
var statearr_50639_52577 = state_50493__$1;
(statearr_50639_52577[(2)] = inst_50452);

(statearr_50639_52577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46232__auto__ = null;
var cljs$core$async$state_machine__46232__auto____0 = (function (){
var statearr_50644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50644[(0)] = cljs$core$async$state_machine__46232__auto__);

(statearr_50644[(1)] = (1));

return statearr_50644;
});
var cljs$core$async$state_machine__46232__auto____1 = (function (state_50493){
while(true){
var ret_value__46233__auto__ = (function (){try{while(true){
var result__46234__auto__ = switch__46231__auto__(state_50493);
if(cljs.core.keyword_identical_QMARK_(result__46234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46234__auto__;
}
break;
}
}catch (e50650){var ex__46235__auto__ = e50650;
var statearr_50651_52582 = state_50493;
(statearr_50651_52582[(2)] = ex__46235__auto__);


if(cljs.core.seq((state_50493[(4)]))){
var statearr_50652_52584 = state_50493;
(statearr_50652_52584[(1)] = cljs.core.first((state_50493[(4)])));

} else {
throw ex__46235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52585 = state_50493;
state_50493 = G__52585;
continue;
} else {
return ret_value__46233__auto__;
}
break;
}
});
cljs$core$async$state_machine__46232__auto__ = function(state_50493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46232__auto____1.call(this,state_50493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46232__auto____0;
cljs$core$async$state_machine__46232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46232__auto____1;
return cljs$core$async$state_machine__46232__auto__;
})()
})();
var state__46788__auto__ = (function (){var statearr_50659 = f__46787__auto__();
(statearr_50659[(6)] = c__46786__auto___52527);

return statearr_50659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46788__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
