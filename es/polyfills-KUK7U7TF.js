(function(t){t.ng??={},t.ng.common??={},t.ng.common.locales??={};let e=void 0;function a(n){let c=n,l=Math.floor(Math.abs(n)),E=n.toString().replace(/^[^.]*\.?/,"").length,_=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return c===1?1:_===0&&l!==0&&l%1e6===0&&E===0||!(_>=0&&_<=5)?4:5;}t.ng.common.locales.es=["es",[["a.\xA0m.","p.\xA0m."],e,e],e,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],e,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],e,[["a. C.","d. C."],e,["antes de Cristo","despu\xE9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",e,e,e],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[e,"$"],BRL:[e,"R$"],BYN:[e,"\u0440."],CAD:[e,"$"],CNY:[e,"\xA5"],EGP:[],ESP:["\u20A7"],GBP:[e,"\xA3"],HKD:[e,"$"],ILS:[e,"\u20AA"],INR:[e,"\u20B9"],JPY:[e,"\xA5"],KRW:[e,"\u20A9"],MXN:[e,"$"],NZD:[e,"$"],PHP:[e,"\u20B1"],RON:[e,"L"],THB:["\u0E3F"],TWD:[e,"NT$"],USD:["US$","$"],XAF:[],XCD:[e,"$"],XOF:[]},"ltr",a,[[["del mediod\xEDa","de la madrugada","de la ma\xF1ana","de la tarde","de la noche"],e,e],[["mediod\xEDa","madrugada","ma\xF1ana","tarde","noche"],e,e],["12:00",["00:00","06:00"],["06:00","12:00"],["12:00","20:00"],["20:00","24:00"]]]];})(globalThis);var ce=globalThis;function te(t){return(ce.__Zone_symbol_prefix||"__zone_symbol__")+t;}function dt(){let t=ce.performance;function e(I){t&&t.mark&&t.mark(I);}function a(I,s){t&&t.measure&&t.measure(I,s);}e("Zone");class n{static{this.__symbol__=te;}static assertZonePatched(){if(ce.Promise!==S.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");}static get root(){let s=n.current;for(;s.parent;)s=s.parent;return s;}static get current(){return b.zone;}static get currentTask(){return D;}static __load_patch(s,i,o=!1){if(S.hasOwnProperty(s)){let m=ce[te("forceDuplicateZoneCheck")]===!0;if(!o&&m)throw Error("Already loaded patch: "+s);}else if(!ce["__Zone_disable_"+s]){let m="Zone:"+s;e(m),S[s]=i(ce,n,R),a(m,m);}}get parent(){return this._parent;}get name(){return this._name;}constructor(s,i){this._parent=s,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,i);}get(s){let i=this.getZoneWith(s);if(i)return i._properties[s];}getZoneWith(s){let i=this;for(;i;){if(i._properties.hasOwnProperty(s))return i;i=i._parent;}return null;}fork(s){if(!s)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,s);}wrap(s,i){if(typeof s!="function")throw new Error("Expecting function got: "+s);let o=this._zoneDelegate.intercept(this,s,i),m=this;return function(){return m.runGuarded(o,this,arguments,i);};}run(s,i,o,m){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,s,i,o,m);}finally{b=b.parent;}}runGuarded(s,i=null,o,m){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,s,i,o,m);}catch(V){if(this._zoneDelegate.handleError(this,V))throw V;}}finally{b=b.parent;}}runTask(s,i,o){if(s.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(s.zone||J).name+"; Execution: "+this.name+")");let m=s,{type:V,data:{isPeriodic:ee=!1,isRefreshable:Z=!1}={}}=s;if(s.state===X&&(V===U||V===g))return;let he=s.state!=A;he&&m._transitionTo(A,d);let _e=D;D=m,b={parent:b,zone:this};try{V==g&&s.data&&!ee&&!Z&&(s.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,m,i,o);}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q;}}finally{let Q=s.state;if(Q!==X&&Q!==q)if(V==U||ee||Z&&Q===k)he&&m._transitionTo(d,A,k);else{let Ee=m._zoneDelegates;this._updateTaskCount(m,-1),he&&m._transitionTo(X,A,X),Z&&(m._zoneDelegates=Ee);}b=b.parent,D=_e;}}scheduleTask(s){if(s.zone&&s.zone!==this){let o=this;for(;o;){if(o===s.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);o=o.parent;}}s._transitionTo(k,X);let i=[];s._zoneDelegates=i,s._zone=this;try{s=this._zoneDelegate.scheduleTask(this,s);}catch(o){throw s._transitionTo(q,k,X),this._zoneDelegate.handleError(this,o),o;}return s._zoneDelegates===i&&this._updateTaskCount(s,1),s.state==k&&s._transitionTo(d,k),s;}scheduleMicroTask(s,i,o,m){return this.scheduleTask(new E(x,s,i,o,m,void 0));}scheduleMacroTask(s,i,o,m,V){return this.scheduleTask(new E(g,s,i,o,m,V));}scheduleEventTask(s,i,o,m,V){return this.scheduleTask(new E(U,s,i,o,m,V));}cancelTask(s){if(s.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(s.zone||J).name+"; Execution: "+this.name+")");if(!(s.state!==d&&s.state!==A)){s._transitionTo(G,d,A);try{this._zoneDelegate.cancelTask(this,s);}catch(i){throw s._transitionTo(q,G),this._zoneDelegate.handleError(this,i),i;}return this._updateTaskCount(s,-1),s._transitionTo(X,G),s.runCount=-1,s;}}_updateTaskCount(s,i){let o=s._zoneDelegates;i==-1&&(s._zoneDelegates=null);for(let m=0;m<o.length;m++)o[m]._updateTaskCount(s.type,i);}}let c={name:"",onHasTask:(I,s,i,o)=>I.hasTask(i,o),onScheduleTask:(I,s,i,o)=>I.scheduleTask(i,o),onInvokeTask:(I,s,i,o,m,V)=>I.invokeTask(i,o,m,V),onCancelTask:(I,s,i,o)=>I.cancelTask(i,o)};class l{get zone(){return this._zone;}constructor(s,i,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=s,this._parentDelegate=i,this._forkZS=o&&(o&&o.onFork?o:i._forkZS),this._forkDlgt=o&&(o.onFork?i:i._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:i._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:i._interceptZS),this._interceptDlgt=o&&(o.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:i._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:i._invokeZS),this._invokeDlgt=o&&(o.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:i._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:i._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:i._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:i._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:i._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:i._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:i._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:i._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let m=o&&o.onHasTask,V=i&&i._hasTaskZS;(m||V)&&(this._hasTaskZS=m?o:c,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=c,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=c,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=c,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this._zone));}fork(s,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,s,i):new n(s,i);}intercept(s,i,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,s,i,o):i;}invoke(s,i,o,m,V){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,s,i,o,m,V):i.apply(o,m);}handleError(s,i){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,s,i):!0;}scheduleTask(s,i){let o=i;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,s,i),o||(o=i);else if(i.scheduleFn)i.scheduleFn(i);else if(i.type==x)B(i);else throw new Error("Task is missing scheduleFn.");return o;}invokeTask(s,i,o,m){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,s,i,o,m):i.callback.apply(o,m);}cancelTask(s,i){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,s,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");o=i.cancelFn(i);}return o;}hasTask(s,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,s,i);}catch(o){this.handleError(s,o);}}_updateTaskCount(s,i){let o=this._taskCounts,m=o[s],V=o[s]=m+i;if(V<0)throw new Error("More tasks executed then were scheduled.");if(m==0||V==0){let ee={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:s};this.hasTask(this._zone,ee);}}}class E{constructor(s,i,o,m,V,ee){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=s,this.source=i,this.data=m,this.scheduleFn=V,this.cancelFn=ee,!o)throw new Error("callback is not defined");this.callback=o;let Z=this;s===U&&m&&m.useG?this.invoke=E.invokeTask:this.invoke=function(){return E.invokeTask.call(ce,Z,this,arguments);};}static invokeTask(s,i,o){s||(s=this),K++;try{return s.runCount++,s.zone.runTask(s,i,o);}finally{K==1&&Y(),K--;}}get zone(){return this._zone;}get state(){return this._state;}cancelScheduleRequest(){this._transitionTo(X,k);}_transitionTo(s,i,o){if(this._state===i||this._state===o)this._state=s,s==X&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${s}', expecting state '${i}'${o?" or '"+o+"'":""}, was '${this._state}'.`);}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this);}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount};}}let _=te("setTimeout"),p=te("Promise"),C=te("then"),T=[],P=!1,L;function H(I){if(L||ce[p]&&(L=ce[p].resolve(0)),L){let s=L[C];s||(s=L.then),s.call(L,I);}else ce[_](I,0);}function B(I){K===0&&T.length===0&&H(Y),I&&T.push(I);}function Y(){if(!P){for(P=!0;T.length;){let I=T;T=[];for(let s=0;s<I.length;s++){let i=I[s];try{i.zone.runTask(i,null,null);}catch(o){R.onUnhandledError(o);}}}R.microtaskDrainDone(),P=!1;}}let J={name:"NO ZONE"},X="notScheduled",k="scheduling",d="scheduled",A="running",G="canceling",q="unknown",x="microTask",g="macroTask",U="eventTask",S={},R={symbol:te,currentZoneFrame:()=>b,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:B,showUncaughtError:()=>!n[te("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:H},b={parent:null,zone:new n(null,null)},D=null,K=0;function W(){}return a("Zone","Zone"),n;}function _t(){let t=globalThis,e=t[te("forceDuplicateZoneCheck")]===!0;if(t.Zone&&(e||typeof t.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return t.Zone??=dt(),t.Zone;}var be=Object.getOwnPropertyDescriptor,Ae=Object.defineProperty,je=Object.getPrototypeOf,Et=Object.create,Tt=Array.prototype.slice,He="addEventListener",Ge="removeEventListener",Me=te(He),Le=te(Ge),ae="true",le="false",Pe=te("");function Ve(t,e){return Zone.current.wrap(t,e);}function xe(t,e,a,n,c){return Zone.current.scheduleMacroTask(t,e,a,n,c);}var j=te,De=typeof window<"u",pe=De?window:void 0,$=De&&pe||globalThis,mt="removeAttribute";function Fe(t,e){for(let a=t.length-1;a>=0;a--)typeof t[a]=="function"&&(t[a]=Ve(t[a],e+"_"+a));return t;}function gt(t,e){let a=t.constructor.name;for(let n=0;n<e.length;n++){let c=e[n],l=t[c];if(l){let E=be(t,c);if(!tt(E))continue;t[c]=(_=>{let p=function(){return _.apply(this,Fe(arguments,a+"."+c));};return fe(p,_),p;})(l);}}}function tt(t){return t?t.writable===!1?!1:!(typeof t.get=="function"&&typeof t.set>"u"):!0;}var nt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Se=!("nw"in $)&&typeof $.process<"u"&&$.process.toString()==="[object process]",ze=!Se&&!nt&&!!(De&&pe.HTMLElement),rt=typeof $.process<"u"&&$.process.toString()==="[object process]"&&!nt&&!!(De&&pe.HTMLElement),Ce={},yt=j("enable_beforeunload"),$e=function(t){if(t=t||$.event,!t)return;let e=Ce[t.type];e||(e=Ce[t.type]=j("ON_PROPERTY"+t.type));let a=this||t.target||$,n=a[e],c;if(ze&&a===pe&&t.type==="error"){let l=t;c=n&&n.call(this,l.message,l.filename,l.lineno,l.colno,l.error),c===!0&&t.preventDefault();}else c=n&&n.apply(this,arguments),t.type==="beforeunload"&&$[yt]&&typeof c=="string"?t.returnValue=c:c!=null&&!c&&t.preventDefault();return c;};function Ye(t,e,a){let n=be(t,e);if(!n&&a&&be(a,e)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let c=j("on"+e+"patched");if(t.hasOwnProperty(c)&&t[c])return;delete n.writable,delete n.value;let l=n.get,E=n.set,_=e.slice(2),p=Ce[_];p||(p=Ce[_]=j("ON_PROPERTY"+_)),n.set=function(C){let T=this;if(!T&&t===$&&(T=$),!T)return;typeof T[p]=="function"&&T.removeEventListener(_,$e),E&&E.call(T,null),T[p]=C,typeof C=="function"&&T.addEventListener(_,$e,!1);},n.get=function(){let C=this;if(!C&&t===$&&(C=$),!C)return null;let T=C[p];if(T)return T;if(l){let P=l.call(this);if(P)return n.set.call(this,P),typeof C[mt]=="function"&&C.removeAttribute(e),P;}return null;},Ae(t,e,n),t[c]=!0;}function ot(t,e,a){if(e)for(let n=0;n<e.length;n++)Ye(t,"on"+e[n],a);else{let n=[];for(let c in t)c.slice(0,2)=="on"&&n.push(c);for(let c=0;c<n.length;c++)Ye(t,n[c],a);}}var oe=j("originalInstance");function ve(t){let e=$[t];if(!e)return;$[j(t)]=e,$[t]=function(){let c=Fe(arguments,t);switch(c.length){case 0:this[oe]=new e();break;case 1:this[oe]=new e(c[0]);break;case 2:this[oe]=new e(c[0],c[1]);break;case 3:this[oe]=new e(c[0],c[1],c[2]);break;case 4:this[oe]=new e(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.");}},fe($[t],e);let a=new e(function(){}),n;for(n in a)t==="XMLHttpRequest"&&n==="responseBlob"||function(c){typeof a[c]=="function"?$[t].prototype[c]=function(){return this[oe][c].apply(this[oe],arguments);}:Ae($[t].prototype,c,{set:function(l){typeof l=="function"?(this[oe][c]=Ve(l,t+"."+c),fe(this[oe][c],l)):this[oe][c]=l;},get:function(){return this[oe][c];}});}(n);for(n in e)n!=="prototype"&&e.hasOwnProperty(n)&&($[t][n]=e[n]);}function ue(t,e,a){let n=t;for(;n&&!n.hasOwnProperty(e);)n=je(n);!n&&t[e]&&(n=t);let c=j(e),l=null;if(n&&(!(l=n[c])||!n.hasOwnProperty(c))){l=n[c]=n[e];let E=n&&be(n,e);if(tt(E)){let _=a(l,c,e);n[e]=function(){return _(this,arguments);},fe(n[e],l);}}return l;}function pt(t,e,a){let n=null;function c(l){let E=l.data;return E.args[E.cbIdx]=function(){l.invoke.apply(this,arguments);},n.apply(E.target,E.args),l;}n=ue(t,e,l=>function(E,_){let p=a(E,_);return p.cbIdx>=0&&typeof _[p.cbIdx]=="function"?xe(p.name,_[p.cbIdx],p,c):l.apply(E,_);});}function fe(t,e){t[j("OriginalDelegate")]=e;}var Je=!1,Ie=!1;function kt(){try{let t=pe.navigator.userAgent;if(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1)return!0;}catch{}return!1;}function vt(){if(Je)return Ie;Je=!0;try{let t=pe.navigator.userAgent;(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1||t.indexOf("Edge/")!==-1)&&(Ie=!0);}catch{}return Ie;}function Ke(t){return typeof t=="function";}function Qe(t){return typeof t=="number";}var ye=!1;if(typeof window<"u")try{let t=Object.defineProperty({},"passive",{get:function(){ye=!0;}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t);}catch{ye=!1;}var bt={useG:!0},ne={},st={},it=new RegExp("^"+Pe+"(\\w+)(true|false)$"),ct=j("propagationStopped");function at(t,e){let a=(e?e(t):t)+le,n=(e?e(t):t)+ae,c=Pe+a,l=Pe+n;ne[t]={},ne[t][le]=c,ne[t][ae]=l;}function Pt(t,e,a,n){let c=n&&n.add||He,l=n&&n.rm||Ge,E=n&&n.listeners||"eventListeners",_=n&&n.rmAll||"removeAllListeners",p=j(c),C="."+c+":",T="prependListener",P="."+T+":",L=function(k,d,A){if(k.isRemoved)return;let G=k.callback;typeof G=="object"&&G.handleEvent&&(k.callback=g=>G.handleEvent(g),k.originalDelegate=G);let q;try{k.invoke(k,d,[A]);}catch(g){q=g;}let x=k.options;if(x&&typeof x=="object"&&x.once){let g=k.originalDelegate?k.originalDelegate:k.callback;d[l].call(d,A.type,g,x);}return q;};function H(k,d,A){if(d=d||t.event,!d)return;let G=k||d.target||t,q=G[ne[d.type][A?ae:le]];if(q){let x=[];if(q.length===1){let g=L(q[0],G,d);g&&x.push(g);}else{let g=q.slice();for(let U=0;U<g.length&&!(d&&d[ct]===!0);U++){let S=L(g[U],G,d);S&&x.push(S);}}if(x.length===1)throw x[0];for(let g=0;g<x.length;g++){let U=x[g];e.nativeScheduleMicroTask(()=>{throw U;});}}}let B=function(k){return H(this,k,!1);},Y=function(k){return H(this,k,!0);};function J(k,d){if(!k)return!1;let A=!0;d&&d.useG!==void 0&&(A=d.useG);let G=d&&d.vh,q=!0;d&&d.chkDup!==void 0&&(q=d.chkDup);let x=!1;d&&d.rt!==void 0&&(x=d.rt);let g=k;for(;g&&!g.hasOwnProperty(c);)g=je(g);if(!g&&k[c]&&(g=k),!g||g[p])return!1;let U=d&&d.eventNameToString,S={},R=g[p]=g[c],b=g[j(l)]=g[l],D=g[j(E)]=g[E],K=g[j(_)]=g[_],W;d&&d.prepend&&(W=g[j(d.prepend)]=g[d.prepend]);function I(r,f){return!ye&&typeof r=="object"&&r?!!r.capture:!ye||!f?r:typeof r=="boolean"?{capture:r,passive:!0}:r?typeof r=="object"&&r.passive!==!1?{...r,passive:!0}:r:{passive:!0};}let s=function(r){if(!S.isExisting)return R.call(S.target,S.eventName,S.capture?Y:B,S.options);},i=function(r){if(!r.isRemoved){let f=ne[r.eventName],v;f&&(v=f[r.capture?ae:le]);let w=v&&r.target[v];if(w){for(let y=0;y<w.length;y++)if(w[y]===r){w.splice(y,1),r.isRemoved=!0,r.removeAbortListener&&(r.removeAbortListener(),r.removeAbortListener=null),w.length===0&&(r.allRemoved=!0,r.target[v]=null);break;}}}if(r.allRemoved)return b.call(r.target,r.eventName,r.capture?Y:B,r.options);},o=function(r){return R.call(S.target,S.eventName,r.invoke,S.options);},m=function(r){return W.call(S.target,S.eventName,r.invoke,S.options);},V=function(r){return b.call(r.target,r.eventName,r.invoke,r.options);},ee=A?s:o,Z=A?i:V,he=function(r,f){let v=typeof f;return v==="function"&&r.callback===f||v==="object"&&r.originalDelegate===f;},_e=d&&d.diff?d.diff:he,Q=Zone[j("UNPATCHED_EVENTS")],Ee=t[j("PASSIVE_EVENTS")];function h(r){if(typeof r=="object"&&r!==null){let f={...r};return r.signal&&(f.signal=r.signal),f;}return r;}let u=function(r,f,v,w,y=!1,N=!1){return function(){let O=this||t,M=arguments[0];d&&d.transferEventName&&(M=d.transferEventName(M));let F=arguments[1];if(!F)return r.apply(this,arguments);if(Se&&M==="uncaughtException")return r.apply(this,arguments);let z=!1;if(typeof F!="function"){if(!F.handleEvent)return r.apply(this,arguments);z=!0;}if(G&&!G(r,F,O,arguments))return;let de=ye&&!!Ee&&Ee.indexOf(M)!==-1,se=h(I(arguments[2],de)),Te=se?.signal;if(Te?.aborted)return;if(Q){for(let ie=0;ie<Q.length;ie++)if(M===Q[ie])return de?r.call(O,M,F,se):r.apply(this,arguments);}let Ne=se?typeof se=="boolean"?!0:se.capture:!1,Be=se&&typeof se=="object"?se.once:!1,ht=Zone.current,Oe=ne[M];Oe||(at(M,U),Oe=ne[M]);let Ue=Oe[Ne?ae:le],me=O[Ue],We=!1;if(me){if(We=!0,q){for(let ie=0;ie<me.length;ie++)if(_e(me[ie],F))return;}}else me=O[Ue]=[];let Re,Xe=O.constructor.name,qe=st[Xe];qe&&(Re=qe[M]),Re||(Re=Xe+f+(U?U(M):M)),S.options=se,Be&&(S.options.once=!1),S.target=O,S.capture=Ne,S.eventName=M,S.isExisting=We;let ke=A?bt:void 0;ke&&(ke.taskData=S),Te&&(S.options.signal=void 0);let re=ht.scheduleEventTask(Re,F,ke,v,w);if(Te){S.options.signal=Te;let ie=()=>re.zone.cancelTask(re);r.call(Te,"abort",ie,{once:!0}),re.removeAbortListener=()=>Te.removeEventListener("abort",ie);}if(S.target=null,ke&&(ke.taskData=null),Be&&(S.options.once=!0),!ye&&typeof re.options=="boolean"||(re.options=se),re.target=O,re.capture=Ne,re.eventName=M,z&&(re.originalDelegate=F),N?me.unshift(re):me.push(re),y)return O;};};return g[c]=u(R,C,ee,Z,x),W&&(g[T]=u(W,P,m,Z,x,!0)),g[l]=function(){let r=this||t,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=arguments[2],w=v?typeof v=="boolean"?!0:v.capture:!1,y=arguments[1];if(!y)return b.apply(this,arguments);if(G&&!G(b,y,r,arguments))return;let N=ne[f],O;N&&(O=N[w?ae:le]);let M=O&&r[O];if(M)for(let F=0;F<M.length;F++){let z=M[F];if(_e(z,y)){if(M.splice(F,1),z.isRemoved=!0,M.length===0&&(z.allRemoved=!0,r[O]=null,!w&&typeof f=="string")){let de=Pe+"ON_PROPERTY"+f;r[de]=null;}return z.zone.cancelTask(z),x?r:void 0;}}return b.apply(this,arguments);},g[E]=function(){let r=this||t,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=[],w=lt(r,U?U(f):f);for(let y=0;y<w.length;y++){let N=w[y],O=N.originalDelegate?N.originalDelegate:N.callback;v.push(O);}return v;},g[_]=function(){let r=this||t,f=arguments[0];if(f){d&&d.transferEventName&&(f=d.transferEventName(f));let v=ne[f];if(v){let w=v[le],y=v[ae],N=r[w],O=r[y];if(N){let M=N.slice();for(let F=0;F<M.length;F++){let z=M[F],de=z.originalDelegate?z.originalDelegate:z.callback;this[l].call(this,f,de,z.options);}}if(O){let M=O.slice();for(let F=0;F<M.length;F++){let z=M[F],de=z.originalDelegate?z.originalDelegate:z.callback;this[l].call(this,f,de,z.options);}}}}else{let v=Object.keys(r);for(let w=0;w<v.length;w++){let y=v[w],N=it.exec(y),O=N&&N[1];O&&O!=="removeListener"&&this[_].call(this,O);}this[_].call(this,"removeListener");}if(x)return this;},fe(g[c],R),fe(g[l],b),K&&fe(g[_],K),D&&fe(g[E],D),!0;}let X=[];for(let k=0;k<a.length;k++)X[k]=J(a[k],n);return X;}function lt(t,e){if(!e){let l=[];for(let E in t){let _=it.exec(E),p=_&&_[1];if(p&&(!e||p===e)){let C=t[E];if(C)for(let T=0;T<C.length;T++)l.push(C[T]);}}return l;}let a=ne[e];a||(at(e),a=ne[e]);let n=t[a[le]],c=t[a[ae]];return n?c?n.concat(c):n.slice():c?c.slice():[];}function Rt(t,e){let a=t.Event;a&&a.prototype&&e.patchMethod(a.prototype,"stopImmediatePropagation",n=>function(c,l){c[ct]=!0,n&&n.apply(c,l);});}function wt(t,e){e.patchMethod(t,"queueMicrotask",a=>function(n,c){Zone.current.scheduleMicroTask("queueMicrotask",c[0]);});}var we=j("zoneTask");function ge(t,e,a,n){let c=null,l=null;e+=n,a+=n;let E={};function _(C){let T=C.data;T.args[0]=function(){return C.invoke.apply(this,arguments);};let P=c.apply(t,T.args);return Qe(P)?T.handleId=P:(T.handle=P,T.isRefreshable=Ke(P.refresh)),C;}function p(C){let{handle:T,handleId:P}=C.data;return l.call(t,T??P);}c=ue(t,e,C=>function(T,P){if(Ke(P[0])){let L={isRefreshable:!1,isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?P[1]||0:void 0,args:P},H=P[0];P[0]=function(){try{return H.apply(this,arguments);}finally{let{handle:A,handleId:G,isPeriodic:q,isRefreshable:x}=L;!q&&!x&&(G?delete E[G]:A&&(A[we]=null));}};let B=xe(e,P[0],L,_,p);if(!B)return B;let{handleId:Y,handle:J,isRefreshable:X,isPeriodic:k}=B.data;if(Y)E[Y]=B;else if(J&&(J[we]=B,X&&!k)){let d=J.refresh;J.refresh=function(){let{zone:A,state:G}=B;return G==="notScheduled"?(B._state="scheduled",A._updateTaskCount(B,1)):G==="running"&&(B._state="scheduling"),d.call(this);};}return J??Y??B;}else return C.apply(t,P);}),l=ue(t,a,C=>function(T,P){let L=P[0],H;Qe(L)?(H=E[L],delete E[L]):(H=L?.[we],H?L[we]=null:H=L),H?.type?H.cancelFn&&H.zone.cancelTask(H):C.apply(t,P);});}function Ct(t,e){let{isBrowser:a,isMix:n}=e.getGlobalObjects();if(!a&&!n||!t.customElements||!("customElements"in t))return;let c=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];e.patchCallbacks(e,t.customElements,"customElements","define",c);}function Dt(t,e){if(Zone[e.symbol("patchEventTarget")])return;let{eventNames:a,zoneSymbolEventNames:n,TRUE_STR:c,FALSE_STR:l,ZONE_SYMBOL_PREFIX:E}=e.getGlobalObjects();for(let p=0;p<a.length;p++){let C=a[p],T=C+l,P=C+c,L=E+T,H=E+P;n[C]={},n[C][l]=L,n[C][c]=H;}let _=t.EventTarget;if(!(!_||!_.prototype))return e.patchEventTarget(t,e,[_&&_.prototype]),!0;}function St(t,e){e.patchEventPrototype(t,e);}function ut(t,e,a){if(!a||a.length===0)return e;let n=a.filter(l=>l.target===t);if(!n||n.length===0)return e;let c=n[0].ignoreProperties;return e.filter(l=>c.indexOf(l)===-1);}function et(t,e,a,n){if(!t)return;let c=ut(t,e,a);ot(t,c,n);}function Ze(t){return Object.getOwnPropertyNames(t).filter(e=>e.startsWith("on")&&e.length>2).map(e=>e.substring(2));}function Nt(t,e){if(Se&&!rt||Zone[t.symbol("patchEvents")])return;let a=e.__Zone_ignore_on_properties,n=[];if(ze){let c=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=kt()?[{target:c,ignoreProperties:["error"]}]:[];et(c,Ze(c),a&&a.concat(l),je(c));}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<n.length;c++){let l=e[n[c]];l&&l.prototype&&et(l.prototype,Ze(l.prototype),a);}}function Ot(t){t.__load_patch("legacy",e=>{let a=e[t.__symbol__("legacyPatch")];a&&a();}),t.__load_patch("timers",e=>{let a="set",n="clear";ge(e,a,n,"Timeout"),ge(e,a,n,"Interval"),ge(e,a,n,"Immediate");}),t.__load_patch("requestAnimationFrame",e=>{ge(e,"request","cancel","AnimationFrame"),ge(e,"mozRequest","mozCancel","AnimationFrame"),ge(e,"webkitRequest","webkitCancel","AnimationFrame");}),t.__load_patch("blocking",(e,a)=>{let n=["alert","prompt","confirm"];for(let c=0;c<n.length;c++){let l=n[c];ue(e,l,(E,_,p)=>function(C,T){return a.current.run(E,e,T,p);});}}),t.__load_patch("EventTarget",(e,a,n)=>{St(e,n),Dt(e,n);let c=e.XMLHttpRequestEventTarget;c&&c.prototype&&n.patchEventTarget(e,n,[c.prototype]);}),t.__load_patch("MutationObserver",(e,a,n)=>{ve("MutationObserver"),ve("WebKitMutationObserver");}),t.__load_patch("IntersectionObserver",(e,a,n)=>{ve("IntersectionObserver");}),t.__load_patch("FileReader",(e,a,n)=>{ve("FileReader");}),t.__load_patch("on_property",(e,a,n)=>{Nt(n,e);}),t.__load_patch("customElements",(e,a,n)=>{Ct(e,n);}),t.__load_patch("XHR",(e,a)=>{C(e);let n=j("xhrTask"),c=j("xhrSync"),l=j("xhrListener"),E=j("xhrScheduled"),_=j("xhrURL"),p=j("xhrErrorBeforeScheduled");function C(T){let P=T.XMLHttpRequest;if(!P)return;let L=P.prototype;function H(R){return R[n];}let B=L[Me],Y=L[Le];if(!B){let R=T.XMLHttpRequestEventTarget;if(R){let b=R.prototype;B=b[Me],Y=b[Le];}}let J="readystatechange",X="scheduled";function k(R){let b=R.data,D=b.target;D[E]=!1,D[p]=!1;let K=D[l];B||(B=D[Me],Y=D[Le]),K&&Y.call(D,J,K);let W=D[l]=()=>{if(D.readyState===D.DONE)if(!b.aborted&&D[E]&&R.state===X){let s=D[a.__symbol__("loadfalse")];if(D.status!==0&&s&&s.length>0){let i=R.invoke;R.invoke=function(){let o=D[a.__symbol__("loadfalse")];for(let m=0;m<o.length;m++)o[m]===R&&o.splice(m,1);!b.aborted&&R.state===X&&i.call(R);},s.push(R);}else R.invoke();}else!b.aborted&&D[E]===!1&&(D[p]=!0);};return B.call(D,J,W),D[n]||(D[n]=R),U.apply(D,b.args),D[E]=!0,R;}function d(){}function A(R){let b=R.data;return b.aborted=!0,S.apply(b.target,b.args);}let G=ue(L,"open",()=>function(R,b){return R[c]=b[2]==!1,R[_]=b[1],G.apply(R,b);}),q="XMLHttpRequest.send",x=j("fetchTaskAborting"),g=j("fetchTaskScheduling"),U=ue(L,"send",()=>function(R,b){if(a.current[g]===!0||R[c])return U.apply(R,b);{let D={target:R,url:R[_],isPeriodic:!1,args:b,aborted:!1},K=xe(q,d,D,k,A);R&&R[p]===!0&&!D.aborted&&K.state===X&&K.invoke();}}),S=ue(L,"abort",()=>function(R,b){let D=H(R);if(D&&typeof D.type=="string"){if(D.cancelFn==null||D.data&&D.data.aborted)return;D.zone.cancelTask(D);}else if(a.current[x]===!0)return S.apply(R,b);});}}),t.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&gt(e.navigator.geolocation,["getCurrentPosition","watchPosition"]);}),t.__load_patch("PromiseRejectionEvent",(e,a)=>{function n(c){return function(l){lt(e,c).forEach(_=>{let p=e.PromiseRejectionEvent;if(p){let C=new p(c,{promise:l.promise,reason:l.rejection});_.invoke(C);}});};}e.PromiseRejectionEvent&&(a[j("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),a[j("rejectionHandledHandler")]=n("rejectionhandled"));}),t.__load_patch("queueMicrotask",(e,a,n)=>{wt(e,n);});}function Mt(t){t.__load_patch("ZoneAwarePromise",(e,a,n)=>{let c=Object.getOwnPropertyDescriptor,l=Object.defineProperty;function E(h){if(h&&h.toString===Object.prototype.toString){let u=h.constructor&&h.constructor.name;return(u||"")+": "+JSON.stringify(h);}return h?h.toString():Object.prototype.toString.call(h);}let _=n.symbol,p=[],C=e[_("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,T=_("Promise"),P=_("then"),L="__creationTrace__";n.onUnhandledError=h=>{if(n.showUncaughtError()){let u=h&&h.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(h);}},n.microtaskDrainDone=()=>{for(;p.length;){let h=p.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h;});}catch(u){B(u);}}};let H=_("unhandledPromiseRejectionHandler");function B(h){n.onUnhandledError(h);try{let u=a[H];typeof u=="function"&&u.call(this,h);}catch{}}function Y(h){return h&&h.then;}function J(h){return h;}function X(h){return Z.reject(h);}let k=_("state"),d=_("value"),A=_("finally"),G=_("parentPromiseValue"),q=_("parentPromiseState"),x="Promise.then",g=null,U=!0,S=!1,R=0;function b(h,u){return r=>{try{I(h,u,r);}catch(f){I(h,!1,f);}};}let D=function(){let h=!1;return function(r){return function(){h||(h=!0,r.apply(null,arguments));};};},K="Promise resolved with itself",W=_("currentTaskTrace");function I(h,u,r){let f=D();if(h===r)throw new TypeError(K);if(h[k]===g){let v=null;try{(typeof r=="object"||typeof r=="function")&&(v=r&&r.then);}catch(w){return f(()=>{I(h,!1,w);})(),h;}if(u!==S&&r instanceof Z&&r.hasOwnProperty(k)&&r.hasOwnProperty(d)&&r[k]!==g)i(r),I(h,r[k],r[d]);else if(u!==S&&typeof v=="function")try{v.call(r,f(b(h,u)),f(b(h,!1)));}catch(w){f(()=>{I(h,!1,w);})();}else{h[k]=u;let w=h[d];if(h[d]=r,h[A]===A&&u===U&&(h[k]=h[q],h[d]=h[G]),u===S&&r instanceof Error){let y=a.currentTask&&a.currentTask.data&&a.currentTask.data[L];y&&l(r,W,{configurable:!0,enumerable:!1,writable:!0,value:y});}for(let y=0;y<w.length;)o(h,w[y++],w[y++],w[y++],w[y++]);if(w.length==0&&u==S){h[k]=R;let y=r;try{throw new Error("Uncaught (in promise): "+E(r)+(r&&r.stack?`
`+r.stack:""));}catch(N){y=N;}C&&(y.throwOriginal=!0),y.rejection=r,y.promise=h,y.zone=a.current,y.task=a.currentTask,p.push(y),n.scheduleMicroTask();}}}return h;}let s=_("rejectionHandledHandler");function i(h){if(h[k]===R){try{let u=a[s];u&&typeof u=="function"&&u.call(this,{rejection:h[d],promise:h});}catch{}h[k]=S;for(let u=0;u<p.length;u++)h===p[u].promise&&p.splice(u,1);}}function o(h,u,r,f,v){i(h);let w=h[k],y=w?typeof f=="function"?f:J:typeof v=="function"?v:X;u.scheduleMicroTask(x,()=>{try{let N=h[d],O=!!r&&A===r[A];O&&(r[G]=N,r[q]=w);let M=u.run(y,void 0,O&&y!==X&&y!==J?[]:[N]);I(r,!0,M);}catch(N){I(r,!1,N);}},r);}let m="function ZoneAwarePromise() { [native code] }",V=function(){},ee=e.AggregateError;class Z{static toString(){return m;}static resolve(u){return u instanceof Z?u:I(new this(null),U,u);}static reject(u){return I(new this(null),S,u);}static withResolvers(){let u={};return u.promise=new Z((r,f)=>{u.resolve=r,u.reject=f;}),u;}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new ee([],"All promises were rejected"));let r=[],f=0;try{for(let y of u)f++,r.push(Z.resolve(y));}catch{return Promise.reject(new ee([],"All promises were rejected"));}if(f===0)return Promise.reject(new ee([],"All promises were rejected"));let v=!1,w=[];return new Z((y,N)=>{for(let O=0;O<r.length;O++)r[O].then(M=>{v||(v=!0,y(M));},M=>{w.push(M),f--,f===0&&(v=!0,N(new ee(w,"All promises were rejected")));});});}static race(u){let r,f,v=new this((N,O)=>{r=N,f=O;});function w(N){r(N);}function y(N){f(N);}for(let N of u)Y(N)||(N=this.resolve(N)),N.then(w,y);return v;}static all(u){return Z.allWithCallback(u);}static allSettled(u){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})});}static allWithCallback(u,r){let f,v,w=new this((M,F)=>{f=M,v=F;}),y=2,N=0,O=[];for(let M of u){Y(M)||(M=this.resolve(M));let F=N;try{M.then(z=>{O[F]=r?r.thenCallback(z):z,y--,y===0&&f(O);},z=>{r?(O[F]=r.errorCallback(z),y--,y===0&&f(O)):v(z);});}catch(z){v(z);}y++,N++;}return y-=2,y===0&&f(O),w;}constructor(u){let r=this;if(!(r instanceof Z))throw new Error("Must be an instanceof Promise.");r[k]=g,r[d]=[];try{let f=D();u&&u(f(b(r,U)),f(b(r,S)));}catch(f){I(r,!1,f);}}get[Symbol.toStringTag](){return"Promise";}get[Symbol.species](){return Z;}then(u,r){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||Z);let v=new f(V),w=a.current;return this[k]==g?this[d].push(w,v,u,r):o(this,w,v,u,r),v;}catch(u){return this.then(null,u);}finally(u){let r=this.constructor?.[Symbol.species];(!r||typeof r!="function")&&(r=Z);let f=new r(V);f[A]=A;let v=a.current;return this[k]==g?this[d].push(v,f,u,u):o(this,v,f,u,u),f;}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;let he=e[T]=e.Promise;e.Promise=Z;let _e=_("thenPatched");function Q(h){let u=h.prototype,r=c(u,"then");if(r&&(r.writable===!1||!r.configurable))return;let f=u.then;u[P]=f,h.prototype.then=function(v,w){return new Z((N,O)=>{f.call(this,N,O);}).then(v,w);},h[_e]=!0;}n.patchThen=Q;function Ee(h){return function(u,r){let f=h.apply(u,r);if(f instanceof Z)return f;let v=f.constructor;return v[_e]||Q(v),f;};}return he&&(Q(he),ue(e,"fetch",h=>Ee(h))),Promise[a.__symbol__("uncaughtPromiseErrors")]=p,Z;});}function Lt(t){t.__load_patch("toString",e=>{let a=Function.prototype.toString,n=j("OriginalDelegate"),c=j("Promise"),l=j("Error"),E=function(){if(typeof this=="function"){let T=this[n];if(T)return typeof T=="function"?a.call(T):Object.prototype.toString.call(T);if(this===Promise){let P=e[c];if(P)return a.call(P);}if(this===Error){let P=e[l];if(P)return a.call(P);}}return a.call(this);};E[n]=a,Function.prototype.toString=E;let _=Object.prototype.toString,p="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?p:_.call(this);};});}function It(t,e,a,n,c){let l=Zone.__symbol__(n);if(e[l])return;let E=e[l]=e[n];e[n]=function(_,p,C){return p&&p.prototype&&c.forEach(function(T){let P=`${a}.${n}::`+T,L=p.prototype;try{if(L.hasOwnProperty(T)){let H=t.ObjectGetOwnPropertyDescriptor(L,T);H&&H.value?(H.value=t.wrapWithCurrentZone(H.value,P),t._redefineProperty(p.prototype,T,H)):L[T]&&(L[T]=t.wrapWithCurrentZone(L[T],P));}else L[T]&&(L[T]=t.wrapWithCurrentZone(L[T],P));}catch{}}),E.call(e,_,p,C);},t.attachOriginToPatched(e[n],E);}function Zt(t){t.__load_patch("util",(e,a,n)=>{let c=Ze(e);n.patchOnProperties=ot,n.patchMethod=ue,n.bindArguments=Fe,n.patchMacroTask=pt;let l=a.__symbol__("BLACK_LISTED_EVENTS"),E=a.__symbol__("UNPATCHED_EVENTS");e[E]&&(e[l]=e[E]),e[l]&&(a[l]=a[E]=e[l]),n.patchEventPrototype=Rt,n.patchEventTarget=Pt,n.isIEOrEdge=vt,n.ObjectDefineProperty=Ae,n.ObjectGetOwnPropertyDescriptor=be,n.ObjectCreate=Et,n.ArraySlice=Tt,n.patchClass=ve,n.wrapWithCurrentZone=Ve,n.filterProperties=ut,n.attachOriginToPatched=fe,n._redefineProperty=Object.defineProperty,n.patchCallbacks=It,n.getGlobalObjects=()=>({globalSources:st,zoneSymbolEventNames:ne,eventNames:c,isBrowser:ze,isMix:rt,isNode:Se,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:He,REMOVE_EVENT_LISTENER_STR:Ge});});}function At(t){Mt(t),Lt(t),Zt(t);}var ft=_t();At(ft);Ot(ft);(globalThis.$localize??={}).locale="es";/**i18n:b9d26eb179ccae765049b6e76931e3a5bd757a59bcb43f86fa5027b91ddc3155*/