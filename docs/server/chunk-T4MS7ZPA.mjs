import './polyfills.server.mjs';
import{a as kn,b as In,c as Cn,f as En,j as An,m as Mn}from"./chunk-LJKEC6O7.mjs";import{$ as de,Ca as ue,Da as Nt,E as dn,Ea as fe,F as ln,Fa as m,Ga as f,H as mn,Ha as N,Ia as be,J as un,Ja as at,Ka as Rt,La as h,Ma as _n,N as W,Na as jt,O as D,Oa as Z,Q as re,R as se,S as it,U as O,V as T,X as ce,_ as fn,aa as bn,ba as A,c as nn,ca as vt,cb as yn,f as an,ga as pn,gb as ut,lb as xn,mb as zt,n as oe,o as on,pb as wn,q as rn,qa as _t,ra as G,sa as le,ta as hn,ua as gn,v as sn,va as me,wa as vn,x as cn,xa as K}from"./chunk-AE44JKLV.mjs";import{a as mt}from"./chunk-VVCT4QZE.mjs";var Dn=(()=>{let t=class t{constructor(){this.title="resume"}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=W({type:t,selectors:[["app-root"]],standalone:!0,features:[Z],decls:1,vars:0,template:function(a,o){a&1&&N(0,"router-outlet")},dependencies:[An]});let e=t;return e})();var pe;try{pe=typeof Intl<"u"&&Intl.v8BreakIterator}catch{pe=!1}var xt=(()=>{let t=class t{constructor(i){this._platformId=i,this.isBrowser=this._platformId?wn(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||pe)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(a){return new(a||t)(A(fn))},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var yt;function aa(){if(yt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>yt=!0}))}finally{yt=yt||!1}return yt}function he(e){return aa()?e:!!e.capture}function On(e){return e.composedPath?e.composedPath()[0]:e.target}function Tn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ge(e){return Array.isArray(e)?e:[e]}function ve(e){return e instanceof it?e.nativeElement:e}var Pn=new Set,ot,oa=(()=>{let t=class t{constructor(i,a){this._platform=i,this._nonce=a,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):sa}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&ra(i,this._nonce),this._matchMedia(i)}};t.\u0275fac=function(a){return new(a||t)(A(xt),A(bn,8))},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function ra(e,t){if(!Pn.has(e))try{ot||(ot=document.createElement("style"),t&&(ot.nonce=t),ot.setAttribute("type","text/css"),document.head.appendChild(ot)),ot.sheet&&(ot.sheet.insertRule(`@media ${e} {body{ }}`,0),Pn.add(e))}catch(n){console.error(n)}}function sa(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Nn=(()=>{let t=class t{constructor(i,a){this._mediaMatcher=i,this._zone=a,this._queries=new Map,this._destroySubject=new an}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return Fn(ge(i)).some(o=>this._registerQuery(o).mql.matches)}observe(i){let o=Fn(ge(i)).map(s=>this._registerQuery(s).observable),r=on(o);return r=rn(r.pipe(cn(1)),r.pipe(dn(1),sn(0))),r.pipe(oe(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:d})=>{c.matches=c.matches||l,c.breakpoints[d]=l}),c}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let a=this._mediaMatcher.matchMedia(i),r={observable:new nn(s=>{let c=l=>this._zone.run(()=>s.next(l));return a.addListener(c),()=>{a.removeListener(c)}}).pipe(ln(a),oe(({matches:s})=>({query:i,matches:s})),mn(this._destroySubject)),mql:a};return this._queries.set(i,r),r}};t.\u0275fac=function(a){return new(a||t)(A(oa),A(K))},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Fn(e){return e.map(t=>t.split(",")).reduce((t,n)=>t.concat(n)).map(t=>t.trim())}function Bn(e){return e.buttons===0||e.detail===0}function Hn(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var rt=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(rt||{}),Rn="cdk-high-contrast-black-on-white",jn="cdk-high-contrast-white-on-black",_e="cdk-high-contrast-active",Vn=(()=>{let t=class t{constructor(i,a){this._platform=i,this._document=a,this._breakpointSubscription=vt(Nn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return rt.NONE;let i=this._document.createElement("div");i.style.backgroundColor="rgb(1,2,3)",i.style.position="absolute",this._document.body.appendChild(i);let a=this._document.defaultView||window,o=a&&a.getComputedStyle?a.getComputedStyle(i):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(i.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return rt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return rt.BLACK_ON_WHITE}return rt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let i=this._document.body.classList;i.remove(_e,Rn,jn),this._hasCheckedHighContrastMode=!0;let a=this.getHighContrastMode();a===rt.BLACK_ON_WHITE?i.add(_e,Rn):a===rt.WHITE_ON_BLACK&&i.add(_e,jn)}}};t.\u0275fac=function(a){return new(a||t)(A(xt),A(ut))},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var xe=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=D({type:t}),t.\u0275inj=T({});let e=t;return e})();function fa(){return!0}var ba=new ce("mat-sanity-checks",{providedIn:"root",factory:fa}),X=(()=>{let t=class t{constructor(i,a,o){this._sanityChecks=a,this._document=o,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return Tn()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[i]}};t.\u0275fac=function(a){return new(a||t)(A(Vn),A(ba,8),A(ut))},t.\u0275mod=D({type:t}),t.\u0275inj=T({imports:[xe,xe]});let e=t;return e})();var R=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(R||{}),we=class{constructor(t,n,i,a=!1){this._renderer=t,this.element=n,this.config=i,this._animationForciblyDisabledThroughCss=a,this.state=R.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},$n=he({passive:!0,capture:!0}),ke=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let n=On(t);n&&this._events.get(t.type)?.forEach((i,a)=>{(a===n||a.contains(n))&&i.forEach(o=>o.handleEvent(t))})}}addHandler(t,n,i,a){let o=this._events.get(n);if(o){let r=o.get(i);r?r.add(a):o.set(i,new Set([a]))}else this._events.set(n,new Map([[i,new Set([a])]])),t.runOutsideAngular(()=>{document.addEventListener(n,this._delegateEventHandler,$n)})}removeHandler(t,n,i){let a=this._events.get(t);if(!a)return;let o=a.get(n);o&&(o.delete(i),o.size===0&&a.delete(n),a.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,$n)))}},Un={enterDuration:225,exitDuration:150},pa=800,Yn=he({passive:!0,capture:!0}),Wn=["mousedown","touchstart"],Gn=["mouseup","mouseleave","touchend","touchcancel"],kt=class kt{constructor(t,n,i,a){this._target=t,this._ngZone=n,this._platform=a,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,a.isBrowser&&(this._containerElement=ve(i))}fadeInRipple(t,n,i={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=mt(mt({},Un),i.animation);i.centered&&(t=a.left+a.width/2,n=a.top+a.height/2);let r=i.radius||ha(t,n,a),s=t-a.left,c=n-a.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-r}px`,d.style.top=`${c-r}px`,d.style.height=`${r*2}px`,d.style.width=`${r*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let b=window.getComputedStyle(d),g=b.transitionProperty,v=b.transitionDuration,k=g==="none"||v==="0s"||v==="0s, 0s"||a.width===0&&a.height===0,w=new we(this,d,i,k);d.style.transform="scale3d(1, 1, 1)",w.state=R.FADING_IN,i.persistent||(this._mostRecentTransientRipple=w);let M=null;return!k&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let S=()=>this._finishRippleTransition(w),I=()=>this._destroyRipple(w);d.addEventListener("transitionend",S),d.addEventListener("transitioncancel",I),M={onTransitionEnd:S,onTransitionCancel:I}}),this._activeRipples.set(w,M),(k||!l)&&this._finishRippleTransition(w),w}fadeOutRipple(t){if(t.state===R.FADING_OUT||t.state===R.HIDDEN)return;let n=t.element,i=mt(mt({},Un),t.config.animation);n.style.transitionDuration=`${i.exitDuration}ms`,n.style.opacity="0",t.state=R.FADING_OUT,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let n=ve(t);!this._platform.isBrowser||!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,Wn.forEach(i=>{kt._eventManager.addHandler(this._ngZone,i,n,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Gn.forEach(n=>{this._triggerElement.addEventListener(n,this,Yn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===R.FADING_IN?this._startFadeOutTransition(t):t.state===R.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let n=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=R.VISIBLE,!i&&(!n||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let n=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=R.HIDDEN,n!==null&&(t.element.removeEventListener("transitionend",n.onTransitionEnd),t.element.removeEventListener("transitioncancel",n.onTransitionCancel)),t.element.remove()}_onMousedown(t){let n=Bn(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+pa;!this._target.rippleDisabled&&!n&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Hn(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let n=t.changedTouches;if(n)for(let i=0;i<n.length;i++)this.fadeInRipple(n[i].clientX,n[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let n=t.state===R.VISIBLE||t.config.terminateOnPointerUp&&t.state===R.FADING_IN;!t.config.persistent&&n&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Wn.forEach(n=>kt._eventManager.removeHandler(n,t,this)),this._pointerUpEventsRegistered&&Gn.forEach(n=>t.removeEventListener(n,this,Yn)))}};kt._eventManager=new ke;var Kn=kt;function ha(e,t,n){let i=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),a=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(i*i+a*a)}var Zn=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=D({type:t}),t.\u0275inj=T({imports:[X,X]});let e=t;return e})();var Xn=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=D({type:t}),t.\u0275inj=T({imports:[X,Zn,X]});let e=t;return e})();var qn=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=D({type:t}),t.\u0275inj=T({imports:[X,zt,X]});let e=t;return e})();function Qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qn(Object(n),!0).forEach(function(i){C(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qn(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Xt(e){"@babel/helpers - typeof";return Xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xt(e)}function va(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jn(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _a(e,t,n){return t&&Jn(e.prototype,t),n&&Jn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ve(e,t){return xa(e)||ka(e,t)||Ii(e,t)||Ca()}function St(e){return ya(e)||wa(e)||Ii(e)||Ia()}function ya(e){if(Array.isArray(e))return Te(e)}function xa(e){if(Array.isArray(e))return e}function wa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ka(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i=[],a=!0,o=!1,r,s;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!(t&&i.length===t));a=!0);}catch(c){o=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw s}}return i}}function Ii(e,t){if(e){if(typeof e=="string")return Te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(e,t)}}function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Ia(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ca(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ti=function(){},$e={},Ci={},Ei=null,Ai={mark:ti,measure:ti};try{typeof window<"u"&&($e=window),typeof document<"u"&&(Ci=document),typeof MutationObserver<"u"&&(Ei=MutationObserver),typeof performance<"u"&&(Ai=performance)}catch{}var Ea=$e.navigator||{},ei=Ea.userAgent,ni=ei===void 0?"":ei,Q=$e,y=Ci,ii=Ei,Lt=Ai,xs=!!Q.document,U=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Mi=~ni.indexOf("MSIE")||~ni.indexOf("Trident/"),Bt,Ht,Vt,$t,Ut,H="___FONT_AWESOME___",Se=16,Di="fa",Oi="svg-inline--fa",dt="data-fa-i2svg",Pe="data-fa-pseudo-element",Aa="data-fa-pseudo-element-pending",Ue="data-prefix",Ye="data-icon",ai="fontawesome-i2svg",Ma="async",Da=["HTML","HEAD","STYLE","SCRIPT"],Ti=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),_="classic",x="sharp",We=[_,x];function Pt(e){return new Proxy(e,{get:function(n,i){return i in n?n[i]:n[_]}})}var At=Pt((Bt={},C(Bt,_,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(Bt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Bt)),Mt=Pt((Ht={},C(Ht,_,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(Ht,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ht)),Dt=Pt((Vt={},C(Vt,_,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(Vt,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Vt)),Oa=Pt(($t={},C($t,_,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C($t,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$t)),Ta=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Si="fa-layers-text",Sa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pa=Pt((Ut={},C(Ut,_,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(Ut,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ut)),Pi=[1,2,3,4,5,6,7,8,9,10],Fa=Pi.concat([11,12,13,14,15,16,17,18,19,20]),Na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ot=new Set;Object.keys(Mt[_]).map(Ot.add.bind(Ot));Object.keys(Mt[x]).map(Ot.add.bind(Ot));var Ra=[].concat(We,St(Ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat(Pi.map(function(e){return"".concat(e,"x")})).concat(Fa.map(function(e){return"w-".concat(e)})),Ct=Q.FontAwesomeConfig||{};function ja(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function za(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&(oi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],oi.forEach(function(e){var t=Ve(e,2),n=t[0],i=t[1],a=za(ja(n));a!=null&&(Ct[i]=a)}));var oi,Fi={styleDefault:"solid",familyDefault:"classic",cssPrefix:Di,replacementClass:Oi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ct.familyPrefix&&(Ct.cssPrefix=Ct.familyPrefix);var ht=u(u({},Fi),Ct);ht.autoReplaceSvg||(ht.observeMutations=!1);var p={};Object.keys(Fi).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(n){ht[e]=n,Et.forEach(function(i){return i(p)})},get:function(){return ht[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){ht.cssPrefix=t,Et.forEach(function(n){return n(p)})},get:function(){return ht.cssPrefix}});Q.FontAwesomeConfig=p;var Et=[];function La(e){return Et.push(e),function(){Et.splice(Et.indexOf(e),1)}}var q=Se,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ba(e){if(!(!e||!U)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=y.head.childNodes,i=null,a=n.length-1;a>-1;a--){var o=n[a],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=o)}return y.head.insertBefore(t,i),e}}var Ha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Tt(){for(var e=12,t="";e-- >0;)t+=Ha[Math.random()*62|0];return t}function gt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ge(e){return e.classList?gt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ni(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Va(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ni(e[n]),'" ')},"").trim()}function Jt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ke(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function $a(e){var t=e.transform,n=e.containerWidth,i=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(r," ").concat(s)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Ua(e){var t=e.transform,n=e.width,i=n===void 0?Se:n,a=e.height,o=a===void 0?Se:a,r=e.startCentered,s=r===void 0?!1:r,c="";return s&&Mi?c+="translate(".concat(t.x/q-i/2,"em, ").concat(t.y/q-o/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/q,"em), calc(-50% + ").concat(t.y/q,"em)) "):c+="translate(".concat(t.x/q,"em, ").concat(t.y/q,"em) "),c+="scale(".concat(t.size/q*(t.flipX?-1:1),", ").concat(t.size/q*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Ya=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ri(){var e=Di,t=Oi,n=p.cssPrefix,i=p.replacementClass,a=Ya;if(n!==e||i!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(s,".".concat(i))}return a}var ri=!1;function Ae(){p.autoAddCss&&!ri&&(Ba(Ri()),ri=!0)}var Wa={mixout:function(){return{dom:{css:Ri,insertCss:Ae}}},hooks:function(){return{beforeDOMElementCreation:function(){Ae()},beforeI2svg:function(){Ae()}}}},V=Q||{};V[H]||(V[H]={});V[H].styles||(V[H].styles={});V[H].hooks||(V[H].hooks={});V[H].shims||(V[H].shims=[]);var z=V[H],ji=[],Ga=function e(){y.removeEventListener("DOMContentLoaded",e),qt=1,ji.map(function(t){return t()})},qt=!1;U&&(qt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),qt||y.addEventListener("DOMContentLoaded",Ga));function Ka(e){U&&(qt?setTimeout(e,0):ji.push(e))}function Ft(e){var t=e.tag,n=e.attributes,i=n===void 0?{}:n,a=e.children,o=a===void 0?[]:a;return typeof e=="string"?Ni(e):"<".concat(t," ").concat(Va(i),">").concat(o.map(Ft).join(""),"</").concat(t,">")}function si(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Za=function(t,n){return function(i,a,o,r){return t.call(n,i,a,o,r)}},Me=function(t,n,i,a){var o=Object.keys(t),r=o.length,s=a!==void 0?Za(n,a):n,c,l,d;for(i===void 0?(c=1,d=t[o[0]]):(c=0,d=i);c<r;c++)l=o[c],d=s(d,t[l],l,t);return d};function Xa(e){for(var t=[],n=0,i=e.length;n<i;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<i){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Fe(e){var t=Xa(e);return t.length===1?t[0].toString(16):null}function qa(e,t){var n=e.length,i=e.charCodeAt(t),a;return i>=55296&&i<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}function ci(e){return Object.keys(e).reduce(function(t,n){var i=e[n],a=!!i.icon;return a?t[i.iconName]=i.icon:t[n]=i,t},{})}function Ne(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,a=i===void 0?!1:i,o=ci(t);typeof z.hooks.addPack=="function"&&!a?z.hooks.addPack(e,ci(t)):z.styles[e]=u(u({},z.styles[e]||{}),o),e==="fas"&&Ne("fa",t)}var Yt,Wt,Gt,ft=z.styles,Qa=z.shims,Ja=(Yt={},C(Yt,_,Object.values(Dt[_])),C(Yt,x,Object.values(Dt[x])),Yt),Ze=null,zi={},Li={},Bi={},Hi={},Vi={},to=(Wt={},C(Wt,_,Object.keys(At[_])),C(Wt,x,Object.keys(At[x])),Wt);function eo(e){return~Ra.indexOf(e)}function no(e,t){var n=t.split("-"),i=n[0],a=n.slice(1).join("-");return i===e&&a!==""&&!eo(a)?a:null}var $i=function(){var t=function(o){return Me(ft,function(r,s,c){return r[c]=Me(s,o,{}),r},{})};zi=t(function(a,o,r){if(o[3]&&(a[o[3]]=r),o[2]){var s=o[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=r})}return a}),Li=t(function(a,o,r){if(a[r]=r,o[2]){var s=o[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=r})}return a}),Vi=t(function(a,o,r){var s=o[2];return a[r]=r,s.forEach(function(c){a[c]=r}),a});var n="far"in ft||p.autoFetchSvg,i=Me(Qa,function(a,o){var r=o[0],s=o[1],c=o[2];return s==="far"&&!n&&(s="fas"),typeof r=="string"&&(a.names[r]={prefix:s,iconName:c}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});Bi=i.names,Hi=i.unicodes,Ze=te(p.styleDefault,{family:p.familyDefault})};La(function(e){Ze=te(e.styleDefault,{family:p.familyDefault})});$i();function Xe(e,t){return(zi[e]||{})[t]}function io(e,t){return(Li[e]||{})[t]}function ct(e,t){return(Vi[e]||{})[t]}function Ui(e){return Bi[e]||{prefix:null,iconName:null}}function ao(e){var t=Hi[e],n=Xe("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Ze}var qe=function(){return{prefix:null,iconName:null,rest:[]}};function te(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,i=n===void 0?_:n,a=At[i][e],o=Mt[i][e]||Mt[i][a],r=e in z.styles?e:null;return o||r||null}var di=(Gt={},C(Gt,_,Object.keys(Dt[_])),C(Gt,x,Object.keys(Dt[x])),Gt);function ee(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,a=i===void 0?!1:i,o=(t={},C(t,_,"".concat(p.cssPrefix,"-").concat(_)),C(t,x,"".concat(p.cssPrefix,"-").concat(x)),t),r=null,s=_;(e.includes(o[_])||e.some(function(l){return di[_].includes(l)}))&&(s=_),(e.includes(o[x])||e.some(function(l){return di[x].includes(l)}))&&(s=x);var c=e.reduce(function(l,d){var b=no(p.cssPrefix,d);if(ft[d]?(d=Ja[s].includes(d)?Oa[s][d]:d,r=d,l.prefix=d):to[s].indexOf(d)>-1?(r=d,l.prefix=te(d,{family:s})):b?l.iconName=b:d!==p.replacementClass&&d!==o[_]&&d!==o[x]&&l.rest.push(d),!a&&l.prefix&&l.iconName){var g=r==="fa"?Ui(l.iconName):{},v=ct(l.prefix,l.iconName);g.prefix&&(r=null),l.iconName=g.iconName||v||l.iconName,l.prefix=g.prefix||l.prefix,l.prefix==="far"&&!ft.far&&ft.fas&&!p.autoFetchSvg&&(l.prefix="fas")}return l},qe());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===x&&(ft.fass||p.autoFetchSvg)&&(c.prefix="fass",c.iconName=ct(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||r==="fa")&&(c.prefix=J()||"fas"),c}var oo=function(){function e(){va(this,e),this.definitions={}}return _a(e,[{key:"add",value:function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var r=a.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),r[s]),Ne(s,r[s]);var c=Dt[_][s];c&&Ne(c,r[s]),$i()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var a=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(a).map(function(o){var r=a[o],s=r.prefix,c=r.iconName,l=r.icon,d=l[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(b){typeof b=="string"&&(n[s][b]=l)}),n[s][c]=l}),n}}]),e}(),li=[],bt={},pt={},ro=Object.keys(pt);function so(e,t){var n=t.mixoutsTo;return li=e,bt={},Object.keys(pt).forEach(function(i){ro.indexOf(i)===-1&&delete pt[i]}),li.forEach(function(i){var a=i.mixout?i.mixout():{};if(Object.keys(a).forEach(function(r){typeof a[r]=="function"&&(n[r]=a[r]),Xt(a[r])==="object"&&Object.keys(a[r]).forEach(function(s){n[r]||(n[r]={}),n[r][s]=a[r][s]})}),i.hooks){var o=i.hooks();Object.keys(o).forEach(function(r){bt[r]||(bt[r]=[]),bt[r].push(o[r])})}i.provides&&i.provides(pt)}),n}function Re(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o=bt[e]||[];return o.forEach(function(r){t=r.apply(null,[t].concat(i))}),t}function lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a=bt[e]||[];a.forEach(function(o){o.apply(null,n)})}function $(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return pt[e]?pt[e].apply(null,t):void 0}function je(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||J();if(t)return t=ct(n,t)||t,si(Yi.definitions,n,t)||si(z.styles,n,t)}var Yi=new oo,co=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,lt("noAuto")},lo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(lt("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ka(function(){uo({autoReplaceSvgRoot:n}),lt("watch",t)})}},mo={icon:function(t){if(t===null)return null;if(Xt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=te(t[0]);return{prefix:i,iconName:ct(i,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Ta))){var a=ee(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||J(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var o=J();return{prefix:o,iconName:ct(o,t)||t}}}},F={noAuto:co,config:p,dom:lo,parse:mo,library:Yi,findIconDefinition:je,toHtml:Ft},uo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,i=n===void 0?y:n;(Object.keys(z.styles).length>0||p.autoFetchSvg)&&U&&p.autoReplaceSvg&&F.dom.i2svg({node:i})};function ne(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(i){return Ft(i)})}}),Object.defineProperty(e,"node",{get:function(){if(U){var i=y.createElement("div");return i.innerHTML=e.html,i.children}}}),e}function fo(e){var t=e.children,n=e.main,i=e.mask,a=e.attributes,o=e.styles,r=e.transform;if(Ke(r)&&n.found&&!i.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=Jt(u(u({},o),{},{"transform-origin":"".concat(l.x+r.x/16,"em ").concat(l.y+r.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function bo(e){var t=e.prefix,n=e.iconName,i=e.children,a=e.attributes,o=e.symbol,r=o===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},a),{},{id:r}),children:i}]}]}function Qe(e){var t=e.icons,n=t.main,i=t.mask,a=e.prefix,o=e.iconName,r=e.transform,s=e.symbol,c=e.title,l=e.maskId,d=e.titleId,b=e.extra,g=e.watchable,v=g===void 0?!1:g,k=i.found?i:n,w=k.width,M=k.height,S=a==="fak",I=[p.replacementClass,o?"".concat(p.cssPrefix,"-").concat(o):""].filter(function(Y){return b.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(b.classes).join(" "),E={children:[],attributes:u(u({},b.attributes),{},{"data-prefix":a,"data-icon":o,class:I,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(M)})},L=S&&!~b.classes.indexOf("fa-fw")?{width:"".concat(w/M*16*.0625,"em")}:{};v&&(E.attributes[dt]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Tt())},children:[c]}),delete E.attributes.title);var P=u(u({},E),{},{prefix:a,iconName:o,main:n,mask:i,maskId:l,transform:r,symbol:s,styles:u(u({},L),b.styles)}),et=i.found&&n.found?$("generateAbstractMask",P)||{children:[],attributes:{}}:$("generateAbstractIcon",P)||{children:[],attributes:{}},nt=et.children,ae=et.attributes;return P.children=nt,P.attributes=ae,s?bo(P):fo(P)}function mi(e){var t=e.content,n=e.width,i=e.height,a=e.transform,o=e.title,r=e.extra,s=e.watchable,c=s===void 0?!1:s,l=u(u(u({},r.attributes),o?{title:o}:{}),{},{class:r.classes.join(" ")});c&&(l[dt]="");var d=u({},r.styles);Ke(a)&&(d.transform=Ua({transform:a,startCentered:!0,width:n,height:i}),d["-webkit-transform"]=d.transform);var b=Jt(d);b.length>0&&(l.style=b);var g=[];return g.push({tag:"span",attributes:l,children:[t]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function po(e){var t=e.content,n=e.title,i=e.extra,a=u(u(u({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=Jt(i.styles);o.length>0&&(a.style=o);var r=[];return r.push({tag:"span",attributes:a,children:[t]}),n&&r.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),r}var De=z.styles;function ze(e){var t=e[0],n=e[1],i=e.slice(4),a=Ve(i,1),o=a[0],r=null;return Array.isArray(o)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:o[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:r}}var ho={found:!1,width:512,height:512};function go(e,t){!Ti&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Le(e,t){var n=t;return t==="fa"&&p.styleDefault!==null&&(t=J()),new Promise(function(i,a){var o={found:!1,width:512,height:512,icon:$("missingIconAbstract")||{}};if(n==="fa"){var r=Ui(e)||{};e=r.iconName||e,t=r.prefix||t}if(e&&t&&De[t]&&De[t][e]){var s=De[t][e];return i(ze(s))}go(e,t),i(u(u({},ho),{},{icon:p.showMissingIcons&&e?$("missingIconAbstract")||{}:{}}))})}var ui=function(){},Be=p.measurePerformance&&Lt&&Lt.mark&&Lt.measure?Lt:{mark:ui,measure:ui},It='FA "6.5.1"',vo=function(t){return Be.mark("".concat(It," ").concat(t," begins")),function(){return Wi(t)}},Wi=function(t){Be.mark("".concat(It," ").concat(t," ends")),Be.measure("".concat(It," ").concat(t),"".concat(It," ").concat(t," begins"),"".concat(It," ").concat(t," ends"))},Je={begin:vo,end:Wi},Kt=function(){};function fi(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function _o(e){var t=e.getAttribute?e.getAttribute(Ue):null,n=e.getAttribute?e.getAttribute(Ye):null;return t&&n}function yo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function xo(){if(p.autoReplaceSvg===!0)return Zt.replace;var e=Zt[p.autoReplaceSvg];return e||Zt.replace}function wo(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function ko(e){return y.createElement(e)}function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,i=n===void 0?e.tag==="svg"?wo:ko:n;if(typeof e=="string")return y.createTextNode(e);var a=i(e.tag);Object.keys(e.attributes||[]).forEach(function(r){a.setAttribute(r,e.attributes[r])});var o=e.children||[];return o.forEach(function(r){a.appendChild(Gi(r,{ceFn:i}))}),a}function Io(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Zt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Gi(a),n)}),n.getAttribute(dt)===null&&p.keepOriginalSource){var i=y.createComment(Io(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(t){var n=t[0],i=t[1];if(~Ge(n).indexOf(p.replacementClass))return Zt.replace(t);var a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var o=i[0].attributes.class.split(" ").reduce(function(s,c){return c===p.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});i[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var r=i.map(function(s){return Ft(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=r}};function bi(e){e()}function Ki(e,t){var n=typeof t=="function"?t:Kt;if(e.length===0)n();else{var i=bi;p.mutateApproach===Ma&&(i=Q.requestAnimationFrame||bi),i(function(){var a=xo(),o=Je.begin("mutate");e.map(a),o(),n()})}}var tn=!1;function Zi(){tn=!0}function He(){tn=!1}var Qt=null;function pi(e){if(ii&&p.observeMutations){var t=e.treeCallback,n=t===void 0?Kt:t,i=e.nodeCallback,a=i===void 0?Kt:i,o=e.pseudoElementsCallback,r=o===void 0?Kt:o,s=e.observeMutationsRoot,c=s===void 0?y:s;Qt=new ii(function(l){if(!tn){var d=J();gt(l).forEach(function(b){if(b.type==="childList"&&b.addedNodes.length>0&&!fi(b.addedNodes[0])&&(p.searchPseudoElements&&r(b.target),n(b.target)),b.type==="attributes"&&b.target.parentNode&&p.searchPseudoElements&&r(b.target.parentNode),b.type==="attributes"&&fi(b.target)&&~Na.indexOf(b.attributeName))if(b.attributeName==="class"&&_o(b.target)){var g=ee(Ge(b.target)),v=g.prefix,k=g.iconName;b.target.setAttribute(Ue,v||d),k&&b.target.setAttribute(Ye,k)}else yo(b.target)&&a(b.target)})}}),U&&Qt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Co(){Qt&&Qt.disconnect()}function Eo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(i,a){var o=a.split(":"),r=o[0],s=o.slice(1);return r&&s.length>0&&(i[r]=s.join(":").trim()),i},{})),n}function Ao(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",a=ee(Ge(e));return a.prefix||(a.prefix=J()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=io(a.prefix,e.innerText)||Xe(a.prefix,Fe(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Mo(e){var t=gt(e.attributes).reduce(function(a,o){return a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a},{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||Tt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Do(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ao(e),i=n.iconName,a=n.prefix,o=n.rest,r=Mo(e),s=Re("parseNodeAttributes",{},e),c=t.styleParser?Eo(e):[];return u({iconName:i,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:r}},s)}var Oo=z.styles;function Xi(e){var t=p.autoReplaceSvg==="nest"?hi(e,{styleParser:!1}):hi(e);return~t.extra.classes.indexOf(Si)?$("generateLayersText",e,t):$("generateSvgReplacementMutation",e,t)}var tt=new Set;We.map(function(e){tt.add("fa-".concat(e))});Object.keys(At[_]).map(tt.add.bind(tt));Object.keys(At[x]).map(tt.add.bind(tt));tt=St(tt);function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var n=y.documentElement.classList,i=function(b){return n.add("".concat(ai,"-").concat(b))},a=function(b){return n.remove("".concat(ai,"-").concat(b))},o=p.autoFetchSvg?tt:We.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Oo));o.includes("fa")||o.push("fa");var r=[".".concat(Si,":not([").concat(dt,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(dt,"])")})).join(", ");if(r.length===0)return Promise.resolve();var s=[];try{s=gt(e.querySelectorAll(r))}catch{}if(s.length>0)i("pending"),a("complete");else return Promise.resolve();var c=Je.begin("onTree"),l=s.reduce(function(d,b){try{var g=Xi(b);g&&d.push(g)}catch(v){Ti||v.name==="MissingIcon"&&console.error(v)}return d},[]);return new Promise(function(d,b){Promise.all(l).then(function(g){Ki(g,function(){i("active"),i("complete"),a("pending"),typeof t=="function"&&t(),c(),d()})}).catch(function(g){c(),b(g)})})}function To(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xi(e).then(function(n){n&&Ki([n],t)})}function So(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:je(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:je(a||{})),e(i,u(u({},n),{},{mask:a}))}}var Po=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,a=i===void 0?B:i,o=n.symbol,r=o===void 0?!1:o,s=n.mask,c=s===void 0?null:s,l=n.maskId,d=l===void 0?null:l,b=n.title,g=b===void 0?null:b,v=n.titleId,k=v===void 0?null:v,w=n.classes,M=w===void 0?[]:w,S=n.attributes,I=S===void 0?{}:S,E=n.styles,L=E===void 0?{}:E;if(t){var P=t.prefix,et=t.iconName,nt=t.icon;return ne(u({type:"icon"},t),function(){return lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),p.autoA11y&&(g?I["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(k||Tt()):(I["aria-hidden"]="true",I.focusable="false")),Qe({icons:{main:ze(nt),mask:c?ze(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:et,transform:u(u({},B),a),symbol:r,title:g,maskId:d,titleId:k,extra:{attributes:I,styles:L,classes:M}})})}},Fo={mixout:function(){return{icon:So(Po)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=gi,n.nodeCallback=To,n}}},provides:function(t){t.i2svg=function(n){var i=n.node,a=i===void 0?y:i,o=n.callback,r=o===void 0?function(){}:o;return gi(a,r)},t.generateSvgReplacementMutation=function(n,i){var a=i.iconName,o=i.title,r=i.titleId,s=i.prefix,c=i.transform,l=i.symbol,d=i.mask,b=i.maskId,g=i.extra;return new Promise(function(v,k){Promise.all([Le(a,s),d.iconName?Le(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var M=Ve(w,2),S=M[0],I=M[1];v([n,Qe({icons:{main:S,mask:I},prefix:s,iconName:a,transform:c,symbol:l,maskId:b,title:o,titleId:r,extra:g,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var i=n.children,a=n.attributes,o=n.main,r=n.transform,s=n.styles,c=Jt(s);c.length>0&&(a.style=c);var l;return Ke(r)&&(l=$("generateAbstractTransformGrouping",{main:o,transform:r,containerWidth:o.width,iconWidth:o.width})),i.push(l||o.icon),{children:i,attributes:a}}}},No={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.classes,o=a===void 0?[]:a;return ne({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:n,params:i});var r=[];return n(function(s){Array.isArray(s)?s.map(function(c){r=r.concat(c.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(St(o)).join(" ")},children:r}]})}}}},Ro={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.title,o=a===void 0?null:a,r=i.classes,s=r===void 0?[]:r,c=i.attributes,l=c===void 0?{}:c,d=i.styles,b=d===void 0?{}:d;return ne({type:"counter",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:i}),po({content:n.toString(),title:o,extra:{attributes:l,styles:b,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(St(s))}})})}}}},jo={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,o=a===void 0?B:a,r=i.title,s=r===void 0?null:r,c=i.classes,l=c===void 0?[]:c,d=i.attributes,b=d===void 0?{}:d,g=i.styles,v=g===void 0?{}:g;return ne({type:"text",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:i}),mi({content:n,transform:u(u({},B),o),title:s,extra:{attributes:b,styles:v,classes:["".concat(p.cssPrefix,"-layers-text")].concat(St(l))}})})}}},provides:function(t){t.generateLayersText=function(n,i){var a=i.title,o=i.transform,r=i.extra,s=null,c=null;if(Mi){var l=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/l,c=d.height/l}return p.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([n,mi({content:n.innerHTML,width:s,height:c,transform:o,title:a,extra:r,watchable:!0})])}}},zo=new RegExp('"',"ug"),vi=[1105920,1112319];function Lo(e){var t=e.replace(zo,""),n=qa(t,0),i=n>=vi[0]&&n<=vi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Fe(a?t[0]:t),isSecondary:i||a}}function _i(e,t){var n="".concat(Aa).concat(t.replace(":","-"));return new Promise(function(i,a){if(e.getAttribute(n)!==null)return i();var o=gt(e.children),r=o.filter(function(nt){return nt.getAttribute(Pe)===t})[0],s=Q.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(Sa),l=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(r&&!c)return e.removeChild(r),i();if(c&&d!=="none"&&d!==""){var b=s.getPropertyValue("content"),g=~["Sharp"].indexOf(c[2])?x:_,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Mt[g][c[2].toLowerCase()]:Pa[g][l],k=Lo(b),w=k.value,M=k.isSecondary,S=c[0].startsWith("FontAwesome"),I=Xe(v,w),E=I;if(S){var L=ao(w);L.iconName&&L.prefix&&(I=L.iconName,v=L.prefix)}if(I&&!M&&(!r||r.getAttribute(Ue)!==v||r.getAttribute(Ye)!==E)){e.setAttribute(n,E),r&&e.removeChild(r);var P=Do(),et=P.extra;et.attributes[Pe]=t,Le(I,v).then(function(nt){var ae=Qe(u(u({},P),{},{icons:{main:nt,mask:qe()},prefix:v,iconName:E,extra:et,watchable:!0})),Y=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=ae.map(function(ia){return Ft(ia)}).join(`
`),e.removeAttribute(n),i()}).catch(a)}else i()}else i()})}function Bo(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function Ho(e){return e.parentNode!==document.head&&!~Da.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yi(e){if(U)return new Promise(function(t,n){var i=gt(e.querySelectorAll("*")).filter(Ho).map(Bo),a=Je.begin("searchPseudoElements");Zi(),Promise.all(i).then(function(){a(),He(),t()}).catch(function(){a(),He(),n()})})}var Vo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var i=n.node,a=i===void 0?y:i;p.searchPseudoElements&&yi(a)}}},xi=!1,$o={mixout:function(){return{dom:{unwatch:function(){Zi(),xi=!0}}}},hooks:function(){return{bootstrap:function(){pi(Re("mutationObserverCallbacks",{}))},noAuto:function(){Co()},watch:function(n){var i=n.observeMutationsRoot;xi?He():pi(Re("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},wi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(i,a){var o=a.toLowerCase().split("-"),r=o[0],s=o.slice(1).join("-");if(r&&s==="h")return i.flipX=!0,i;if(r&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(r){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},Uo={mixout:function(){return{parse:{transform:function(n){return wi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var a=i.getAttribute("data-fa-transform");return a&&(n.transform=wi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var i=n.main,a=n.transform,o=n.containerWidth,r=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),b={transform:"".concat(c," ").concat(l," ").concat(d)},g={transform:"translate(".concat(r/2*-1," -256)")},v={outer:s,inner:b,path:g};return{tag:"g",attributes:u({},v.outer),children:[{tag:"g",attributes:u({},v.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:u(u({},i.icon.attributes),v.path)}]}]}}}},Oe={x:0,y:0,width:"100%",height:"100%"};function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Yo(e){return e.tag==="g"?e.children:[e]}var Wo={hooks:function(){return{parseNodeAttributes:function(n,i){var a=i.getAttribute("data-fa-mask"),o=a?ee(a.split(" ").map(function(r){return r.trim()})):qe();return o.prefix||(o.prefix=J()),n.mask=o,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var i=n.children,a=n.attributes,o=n.main,r=n.mask,s=n.maskId,c=n.transform,l=o.width,d=o.icon,b=r.width,g=r.icon,v=$a({transform:c,containerWidth:b,iconWidth:l}),k={tag:"rect",attributes:u(u({},Oe),{},{fill:"white"})},w=d.children?{children:d.children.map(ki)}:{},M={tag:"g",attributes:u({},v.inner),children:[ki(u({tag:d.tag,attributes:u(u({},d.attributes),v.path)},w))]},S={tag:"g",attributes:u({},v.outer),children:[M]},I="mask-".concat(s||Tt()),E="clip-".concat(s||Tt()),L={tag:"mask",attributes:u(u({},Oe),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,S]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Yo(g)},L]};return i.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(I,")")},Oe)}),{children:i,attributes:a}}}},Go={provides:function(t){var n=!1;Q.matchMedia&&(n=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var i=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},r),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},r),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},Ko={hooks:function(){return{parseNodeAttributes:function(n,i){var a=i.getAttribute("data-fa-symbol"),o=a===null?!1:a===""?!0:a;return n.symbol=o,n}}}},Zo=[Wa,Fo,No,Ro,jo,Vo,$o,Uo,Wo,Go,Ko];so(Zo,{mixoutsTo:F});var ws=F.noAuto,ks=F.config,Is=F.library,Cs=F.dom,Xo=F.parse,Es=F.findIconDefinition,As=F.toHtml,qo=F.icon,Ms=F.layer,Qo=F.text,Jo=F.counter;var qi=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=D({type:t}),t.\u0275inj=T({});let e=t;return e})();var ie=(()=>{let t=class t{constructor(){this.themeKey="theme",this.darkMode=!1}isDarkMode(){return this.darkMode}setDarkMode(i){this.darkMode=i,console.log(this.darkMode),i?(console.log(document.body.classList),document.body.classList.add("dark-theme")):document.body.classList.remove("dark-theme")}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function er(e,t){if(e&1){let n=be();m(0,"div",32),at("click",function(){re(n);let a=Rt();return se(a.toggleTheme())}),N(1,"i",33),f()}}function nr(e,t){if(e&1){let n=be();m(0,"div",32),at("click",function(){re(n);let a=Rt();return se(a.toggleTheme())}),N(1,"img",34),f()}}var Qi=(()=>{let t=class t{get themeMode(){return this.darkMode?"dark-theme":""}constructor(i,a){this.themeService=i,this.renderer=a,this.isDarkTheme=!1,this.darkMode=!1,this.isDarkMode=this.themeService.isDarkMode()}ngOnInit(){}toggleTheme(){this.darkMode=!this.darkMode;let i=document.getElementById("contentToConvert");this.darkMode?i?.classList.add("dark-theme"):i?.classList.remove("dark-theme")}socialLink(i){i=="linkedin"&&window.open("www.linkedin.com/in/anjali-sen-webdev","_blank"),i=="resume"?window.open("https://docs.google.com/document/d/1oTcOxsBA2q2cWtTrvcUw6wi_08HkYvAc2ecwHa3zFSo/edit?usp=sharing","_blank"):window.open("https://github.com/sAnjali12","_blank")}};t.\u0275fac=function(a){return new(a||t)(G(ie),G(me))},t.\u0275cmp=W({type:t,selectors:[["app-my-resume"]],hostVars:2,hostBindings:function(a,o){a&2&&fe(o.themeMode)},standalone:!0,features:[jt([ie]),Z],decls:153,vars:3,consts:[["id","contentToConvert",1,"cv"],["id","theme-btn",3,"click",4,"ngIf"],[1,"cv-row"],[1,"cv-wrap"],[1,"cv-name"],[1,"cv-subname"],[1,"cv-content"],[1,"head-title"],[1,"cv-content-item"],[1,"exprecince"],[1,"title"],[1,"subtitle"],[1,"time"],[1,"key-points"],[1,"avatar"],[1,"info"],["href",""],["href","tel:+905555554444"],[1,"cv-skills"],[1,"social-info","d-flex"],[1,"social-item"],[3,"click"],[1,"fa-brands","fa-linkedin-in","fa-beat-fade"],[1,"social-item","mt-3"],[1,"fa-brands","fa-github","fa-beat-fade"],[1,"fa-solid","fa-file","fa-beat-fade"],[1,"cv-skills","mt-3"],[1,"skills-info"],[1,"education-info"],[1,"education-item"],[1,"year"],[1,"education-item","mt-2"],["id","theme-btn",3,"click"],[1,"fa-solid","fa-moon","fa-bounce"],["src","../../../assets/images/sun-waving.gif","alt",""]],template:function(a,o){a&1&&(m(0,"div",0)(1,"div"),ue(2,er,2,0,"div",1)(3,nr,2,0,"div",1),f(),m(4,"div",2)(5,"div",3)(6,"div",4),h(7,"Anjali Sen "),f(),m(8,"div",5),h(9,"Web Designer & Full Stack Developer"),f(),m(10,"div",6)(11,"div",7),h(12,"About"),f(),m(13,"div",8)(14,"div",9),h(15,"Driven and dedicated IT professional with over 4 years of hands-on experience in software development. My expertise spans a wide range of technologies, including HTML, CSS, and Bootstrap for front-end development, along with Angular, TypeScript, REST API, Node.js, Hapi.js, MongoDB, and ExpressJS for full-stack development. Proficient in cloud computing with AWS and adept at utilizing version control tools such as Git, GitHub, and Bitbucket. Experienced in project management tools like JIRA and Trello, facilitating efficient collaboration and task management within teams."),f()(),m(16,"div",7),h(17,"Company Projects"),f(),m(18,"div",8)(19,"div",9),h(20,"HeatDance, Le-offer, Promotix, Boatzone, Instrucko, Fanzly, ideal"),f()(),m(21,"div",7),h(22,"Exprecince"),f(),m(23,"div",8)(24,"div",10),h(25,"Frontend Developer/Full Stack Developer"),f(),m(26,"div",11),h(27,"3Embed Software Technologies Private Limited"),f(),m(28,"div",12),h(29,"2020-2023 - 3 years"),f(),m(30,"div",9),h(31,"As a full-time MEAN Stack Developer at Appscrip, I am responsible for designing, developing, and maintaining robust and scalable web applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Here's an overview of my role and contributions: "),m(32,"ul",13)(33,"li"),h(34,"Led full stack development efforts, utilizing Angular for frontend interfaces and Node.js/Express.js for backend logic, ensuring smooth integration and high performance."),f(),m(35,"li"),h(36,"Designed and implemented MongoDB databases, focusing on optimizing data storage and retrieval processes to meet application requirements while maintaining data security."),f(),m(37,"li"),h(38,"Engaged in Agile development methodologies, contributing to sprint planning, daily stand-ups, and sprint reviews for collaborative feature delivery."),f(),m(39,"li"),h(40,"Upheld coding best practices to produce clean, maintainable code, while continuously optimizing application performance and scalability to meet evolving business needs. "),f(),m(41,"li"),h(42,"Fostered team collaboration across frontend and backend developers, UI/UX designers, QA testers, and project managers to align with project objectives and quality standards."),f(),m(43,"li"),h(44,"Committed to continuous learning, staying updated on emerging web technologies through workshops, training sessions, and online courses to enhance proficiency in MEAN stack and related technologies."),f()()()(),m(45,"div",8)(46,"div",10),h(47,"Angular Developer"),f(),m(48,"div",11),h(49,"Ksolves India Limited (Contract Based)"),f(),m(50,"div",12),h(51,"2023- Present now"),f(),m(52,"div",9),h(53,"As an Angular Developer working on a contract basis, I provided valuable expertise in developing and enhancing web applications using Angular frameworks. Here's an overview of my contributions during this period: "),m(54,"ul",13)(55,"li"),h(56,"Project Collaboration: Collaborated with clients and project teams to understand requirements and translate them into functional user interfaces, ensuring alignment with project goals."),f(),m(57,"li"),h(58,"Angular Development: Developed responsive web applications using Angular 8+, implementing best practices to deliver high-quality code."),f(),m(59,"li"),h(60,"Client Communication: Regularly communicated with clients to provide updates on project progress and gather feedback, ensuring transparent collaboration. "),f(),m(61,"li"),h(62,"Problem-solving: Identified and resolved technical issues through troubleshooting and debugging, ensuring application stability."),f(),m(63,"li"),h(64,"Flexibility and Adaptability: Managed multiple clients and projects simultaneously, prioritizing effectively to meet deadlines and deliverables."),f()()()()()(),m(65,"div",3),N(66,"div",14),m(67,"div",15)(68,"div",10),h(69,"Contact"),f(),m(70,"p")(71,"a",16),h(72),f()(),m(73,"p")(74,"a",17),h(75,"+918602289353"),f()(),N(76,"p"),f(),m(77,"div",18)(78,"div",7),h(79,"Social "),f(),m(80,"div",19)(81,"div",20)(82,"p"),h(83,"Linkd In"),f(),m(84,"span",21),at("click",function(){return o.socialLink("linkedin")}),N(85,"i",22),f()(),m(86,"div",23)(87,"p"),h(88,"GitHub"),f(),m(89,"span",21),at("click",function(){return o.socialLink("github")}),N(90,"i",24),f()(),m(91,"div",23)(92,"p"),h(93,"Resume"),f(),m(94,"span",21),at("click",function(){return o.socialLink("resume")}),N(95,"i",25),f()()()(),m(96,"div",26)(97,"div",7),h(98,"Skills"),f(),m(99,"div",27)(100,"ul",28)(101,"li"),h(102,"Angular"),f(),m(103,"li"),h(104,"HTML"),f(),m(105,"li"),h(106,"CSS"),f(),m(107,"li"),h(108,"Bootstrap"),f(),m(109,"li"),h(110,"Angular Material"),f(),m(111,"li"),h(112,"Tailwind CSS"),f(),m(113,"li"),h(114,"Node.js"),f(),m(115,"li"),h(116,"MongoDB"),f(),m(117,"li"),h(118,"Express js"),f(),m(119,"li"),h(120,"Python"),f()()()(),m(121,"div",26)(122,"div",7),h(123,"Education "),f(),m(124,"div",28)(125,"div",29)(126,"p"),h(127,"Degree / Bachelor"),f(),m(128,"div"),h(129,"University Of Vikram"),f(),m(130,"p",30),h(131,"2017-2021"),f()(),m(132,"div",29)(133,"p"),h(134,"Organization / Internship"),f(),m(135,"div"),h(136,"Navgurukul (Bengaluru)"),f(),m(137,"p",30),h(138,"2018-2019"),f()(),m(139,"div",31)(140,"p"),h(141,"School/HSC"),f(),m(142,"div"),h(143,"HSC from M.P Board"),f(),m(144,"p",30),h(145,"2016-2017"),f()(),m(146,"div",31)(147,"p"),h(148,"School/SSC"),f(),m(149,"div"),h(150,"SSC from M.P Board"),f(),m(151,"p",30),h(152,"2014-2015"),f()()()()()()()),a&2&&(_t(2),Nt("ngIf",!o.darkMode),_t(),Nt("ngIf",o.darkMode),_t(69),_n("anjalisen694@gmail.com"))},dependencies:[qn,Xn,qi,zt,xn],styles:[".cv[_ngcontent-%COMP%]{width:60%;margin:0 auto;display:flex;background-color:#efeeee;color:#000;flex-direction:column;padding:3.383vw;border-top:8px solid black;position:relative;margin-top:2.165vw;border-bottom:.541vw solid rgb(174,61,72);box-shadow:0 0 1.353vw #474747;margin-bottom:7.578vw;height:50%;overflow:hidden;border-radius:.541vw}.dark-theme[_ngcontent-%COMP%]{position:relative;background-color:#121212;border-top:.541vw solid rgb(250,248,248);color:#eee;flex-direction:column;padding:3.383vw;margin-top:2.165vw;border-bottom:.541vw solid rgb(174,61,72);margin-bottom:7.578vw;height:50%;overflow:hidden;border-radius:.541vw;box-shadow:0 0 1.353vw #ae3d48}.dark-theme[_ngcontent-%COMP%]   .cv-name[_ngcontent-%COMP%]{font-size:2.165vw;font-weight:900;line-height:normal;margin-bottom:.541vw;color:#ae3d48;width:fit-content;-webkit-animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both;animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both}.dark-theme[_ngcontent-%COMP%]   .cv-subname[_ngcontent-%COMP%]{color:#f0f0f0}.dark-theme[_ngcontent-%COMP%]   .cv-content-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#f4f4f4}.dark-theme[_ngcontent-%COMP%]   .cv-content[_ngcontent-%COMP%]{color:#e8e8e8}.dark-theme[_ngcontent-%COMP%]   .cv-content-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#c3c3c3}.dark-theme[_ngcontent-%COMP%]   .cv-content-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#dbd9d9}.dark-theme[_ngcontent-%COMP%]   .cv-content-item[_ngcontent-%COMP%]   .exprecince[_ngcontent-%COMP%]{color:#e4e4e4}.dark-theme[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#e8e8e8}.dark-theme[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#b3b3b3}.dark-theme[_ngcontent-%COMP%]   #theme-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{color:#873917}.dark-theme[_ngcontent-%COMP%]   .tracking-in-contract[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both;animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both;margin-top:1px;color:#ae3d48;font-size:2vw;font-synthesis:weight;font-weight:400}.cv-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;width:120%;height:100%;position:relative}.tracking-in-contract[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both;animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both;margin-top:1px;color:#ae3d48;font-size:2vw;font-synthesis:weight;font-weight:40px}.cv-wrap[_ngcontent-%COMP%]{width:50%;margin-right:-7.253vw;display:flex;flex-direction:column}.cv-name[_ngcontent-%COMP%]{font-size:2.165vw;font-weight:900;line-height:normal;margin-bottom:.541vw;color:#ae3d48;width:fit-content;-webkit-animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both;animation:_ngcontent-%COMP%_tracking-in-contract .8s cubic-bezier(.215,.61,.355,1) both}@-webkit-keyframes _ngcontent-%COMP%_tracking-in-contract{0%{letter-spacing:1em;opacity:0}40%{opacity:.6}to{letter-spacing:normal;opacity:1}}@keyframes _ngcontent-%COMP%_tracking-in-contract{0%{letter-spacing:1em;opacity:0}40%{opacity:.6}to{letter-spacing:normal;opacity:1}}.cv-subname[_ngcontent-%COMP%]{font-size:1.624vw;font-weight:500;line-height:normal;margin-bottom:2.165vw;color:#b2b2b2}.cv-content[_ngcontent-%COMP%]{font-size:.866vw;font-weight:400;line-height:normal;margin-bottom:.541vw;color:#b2b2b2;letter-spacing:.135vw}.cv-content-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:1.407vw}.cv-content-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.083vw;font-weight:700;line-height:normal;margin-bottom:.433vw;color:#000}.cv-content-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.083vw;font-weight:500;line-height:normal;margin-bottom:.162vw;color:#555}.cv-content-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:.866vw;font-weight:500;line-height:normal;margin-bottom:.433vw;color:#3e3e3e}.cv-content[_ngcontent-%COMP%]   .head-title[_ngcontent-%COMP%]{font-size:1.245vw;font-weight:600;line-height:1.5;color:#ae3d48}.cv-content-item[_ngcontent-%COMP%]   .exprecince[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;line-height:1.5;color:#131313}.key-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{color:#a32d2d;list-style-type:lower-greek}.info[_ngcontent-%COMP%]{display:flex;overflow:hidden;position:relative;flex-direction:column;margin-bottom:2.165vw;margin-top:10.825vw}.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.245vw;font-weight:600;line-height:normal;margin-bottom:.541vw;color:#ae3d48}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.325vw}.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600;line-height:normal;color:#686868;width:fit-content;text-decoration:none}.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2d2d2e}.cv-skills[_ngcontent-%COMP%]{margin-bottom:.541vw}.cv-skills[_ngcontent-%COMP%]   .head-title[_ngcontent-%COMP%]{font-size:1.245vw;font-weight:600;line-height:normal;margin-bottom:.541vw;color:#ae3d48;width:fit-content}.cv-skills[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.social-item[_ngcontent-%COMP%]{display:flex;text-align:right}.social-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.social-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;color:#ae3d48;margin-left:.677vw}.cv-skills[_ngcontent-%COMP%]   .education-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.education-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.education-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:13px;font-weight:500;margin-top:-11px}.education-item[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{font-size:13px;font-weight:500}#theme-btn[_ngcontent-%COMP%]{margin-top:-1px;font-size:1.624vw;margin-left:51.962vw;cursor:pointer;color:#1e1e1e}#theme-btn[_ngcontent-%COMP%]:hover{color:#35335a}#theme-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.624vw;height:1.624vw;margin-right:-.677vw;object-fit:cover;object-position:center}@media (max-width: 900px){.cv-wrap[_ngcontent-%COMP%]{width:50%;margin-right:-6rem;flex-direction:column}.cv-row[_ngcontent-%COMP%]{display:grid;align-items:flex-start;justify-content:space-between;width:50rem;height:100%;margin-left:2vw;position:relative}#theme-btn[_ngcontent-%COMP%]{margin-top:-15px;font-size:2vw;margin-left:2.165vw;cursor:pointer;color:#1e1e1e}#theme-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2.5vw;height:2.5vw;margin-right:-.677vw;object-fit:cover;object-position:center}.info[_ngcontent-%COMP%]{display:flex;overflow:hidden;position:relative;flex-direction:column;margin-bottom:2.165vw;margin-top:0rem}.cv-content-item[_ngcontent-%COMP%]   .exprecince[_ngcontent-%COMP%]{font-size:.7rem;font-weight:400;line-height:1.5}.cv-content-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.193vw;font-weight:500}.cv-content-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:1.05vw;font-weight:500}.cv-content[_ngcontent-%COMP%]   .head-title[_ngcontent-%COMP%]{font-size:1.445vw;font-weight:600}.education-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px;font-weight:600}.education-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:10px;font-weight:500;margin-top:-11px}.education-item[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{font-size:11px;font-weight:500}.social-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:10px;font-weight:500}.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600}}@media (max-width: 750px){.cv-wrap[_ngcontent-%COMP%]{width:30%;margin-right:-6rem;flex-direction:column}.cv-row[_ngcontent-%COMP%]{display:grid;align-items:flex-start;justify-content:space-between;width:50rem;height:100%;margin-left:2vw;position:relative}#theme-btn[_ngcontent-%COMP%]{margin-top:-15px;font-size:2vw;margin-left:2.165vw;cursor:pointer;color:#1e1e1e}#theme-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2.5vw;height:2.5vw;margin-right:-.677vw;object-fit:cover;object-position:center}.info[_ngcontent-%COMP%]{display:flex;overflow:hidden;position:relative;flex-direction:column;margin-bottom:2.165vw;margin-top:0rem}.cv-content-item[_ngcontent-%COMP%]   .exprecince[_ngcontent-%COMP%]{font-size:.7rem;font-weight:400;line-height:1.5}.cv-content-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.893vw;font-weight:500}.cv-content-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:1.45vw;font-weight:500}.cv-content[_ngcontent-%COMP%]   .head-title[_ngcontent-%COMP%]{font-size:1.745vw;font-weight:600}.cv-skills[_ngcontent-%COMP%]   .head-title[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.945vw;font-weight:600}.cv-content-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.983vw;font-weight:700}.cv-subname[_ngcontent-%COMP%]{font-size:1.624vw;font-weight:500;line-height:normal;margin-bottom:2.165vw;color:#656565}.education-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11px;font-weight:600}.education-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:10px;font-weight:500;margin-top:-11px}.education-item[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{font-size:11px;font-weight:500}.social-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:10px;font-weight:500}.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600}}@media (max-width: 450px){.cv-wrap[_ngcontent-%COMP%]{width:25%;margin-right:-6rem;flex-direction:column}}"]});let e=t;return e})();var Ji=[{path:"resume",component:Qi},{path:"",redirectTo:"resume",pathMatch:"full"}];var ir="@",ar=(()=>{let t=class t{constructor(i,a,o,r,s){this.doc=i,this.delegate=a,this.zone=o,this.animationType=r,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=vt(hn,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-2BCSGZA7.mjs")).catch(a=>{throw new un(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:o})=>{this._engine=a(this.animationType,this.doc,this.scheduler);let r=new o(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(i,a){let o=this.delegate.createRenderer(i,a);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let r=new en(o);return a?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(i,a);r.use(c)}).catch(s=>{r.use(o)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(a){le()},t.\u0275prov=O({token:t,factory:t.\u0275fac});let e=t;return e})(),en=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let n of this.replay)n(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,n){return this.delegate.createElement(t,n)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,n){this.delegate.appendChild(t,n)}insertBefore(t,n,i,a){this.delegate.insertBefore(t,n,i,a)}removeChild(t,n,i){this.delegate.removeChild(t,n,i)}selectRootElement(t,n){return this.delegate.selectRootElement(t,n)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,n,i,a){this.delegate.setAttribute(t,n,i,a)}removeAttribute(t,n,i){this.delegate.removeAttribute(t,n,i)}addClass(t,n){this.delegate.addClass(t,n)}removeClass(t,n){this.delegate.removeClass(t,n)}setStyle(t,n,i,a){this.delegate.setStyle(t,n,i,a)}removeStyle(t,n,i){this.delegate.removeStyle(t,n,i)}setProperty(t,n,i){this.shouldReplay(n)&&this.replay.push(a=>a.setProperty(t,n,i)),this.delegate.setProperty(t,n,i)}setValue(t,n){this.delegate.setValue(t,n)}listen(t,n,i){return this.shouldReplay(n)&&this.replay.push(a=>a.listen(t,n,i)),this.delegate.listen(t,n,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(ir)}};function ta(e="animations"){return vn("NgAsyncAnimations"),pn([{provide:gn,useFactory:(t,n,i)=>new ar(t,n,i,e),deps:[ut,kn,K]},{provide:de,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ea={providers:[Mn(Ji),Cn(),ta()]};var or={providers:[En()]},na=yn(ea,or);var rr=()=>In(Dn,na),rc=rr;export{rc as a};
