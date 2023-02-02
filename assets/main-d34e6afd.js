(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function rf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hn={},ff={get exports(){return hn},set exports(t){hn=t}};(function(t,f){(function(s,l){t.exports=l()})(window,function(){return function(s){var l={};function a(o){if(l[o])return l[o].exports;var p=l[o]={i:o,l:!1,exports:{}};return s[o].call(p.exports,p,p.exports,a),p.l=!0,p.exports}return a.m=s,a.c=l,a.d=function(o,p,L){a.o(o,p)||Object.defineProperty(o,p,{enumerable:!0,get:L})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,p){if(1&p&&(o=a(o)),8&p||4&p&&typeof o=="object"&&o&&o.__esModule)return o;var L=Object.create(null);if(a.r(L),Object.defineProperty(L,"default",{enumerable:!0,value:o}),2&p&&typeof o!="string")for(var R in o)a.d(L,R,function(j){return o[j]}.bind(null,R));return L},a.n=function(o){var p=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(p,"a",p),p},a.o=function(o,p){return Object.prototype.hasOwnProperty.call(o,p)},a.p="",a(a.s=0)}([function(s,l,a){var o;Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var p=((o=a(1))&&o.__esModule?o:{default:o}).default;l.default=p,s.exports=l.default},function(s,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.Accordion=void 0,a(2);var o,p=(o=a(3))&&o.__esModule?o:{default:o};function L(T){return function(b){if(Array.isArray(b))return R(b)}(T)||function(b){if(typeof Symbol<"u"&&b[Symbol.iterator]!=null||b["@@iterator"]!=null)return Array.from(b)}(T)||function(b,C){if(b){if(typeof b=="string")return R(b,C);var A=Object.prototype.toString.call(b).slice(8,-1);if(A==="Object"&&b.constructor&&(A=b.constructor.name),A==="Map"||A==="Set")return Array.from(b);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return R(b,C)}}(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function R(T,b){(b==null||b>T.length)&&(b=T.length);for(var C=0,A=new Array(b);C<b;C++)A[C]=T[C];return A}function j(T,b){var C=Object.keys(T);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(T);b&&(A=A.filter(function(Se){return Object.getOwnPropertyDescriptor(T,Se).enumerable})),C.push.apply(C,A)}return C}function V(T){for(var b=1;b<arguments.length;b++){var C=arguments[b]!=null?arguments[b]:{};b%2?j(Object(C),!0).forEach(function(A){ie(T,A,C[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(C)):j(Object(C)).forEach(function(A){Object.defineProperty(T,A,Object.getOwnPropertyDescriptor(C,A))})}return T}function ie(T,b,C){return b in T?Object.defineProperty(T,b,{value:C,enumerable:!0,configurable:!0,writable:!0}):T[b]=C,T}function ne(T,b){if(!(T instanceof b))throw new TypeError("Cannot call a class as a function")}function _(T,b){for(var C=0;C<b.length;C++){var A=b[C];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(T,A.key,A)}}var He={maxHeight:"9e99px",withTransition:!0,withAutoClose:!0,onToggle:function(){}},et=function(){function T(A){var Se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:He;if(ne(this,T),this.element=document.getElementById(A),this.config=Object.assign(V({},He),Se),this.accordionItems=[],this.element.tagName.toLowerCase()!=="dl")throw new Error("Revise structure of accordion");this.init()}var b,C;return b=T,(C=[{key:"init",value:function(){this.element.classList.add("JsAccordion"),this.update(),this.config.withTransition&&this.element.classList.add("JsAccordion--withTransition")}},{key:"update",value:function(){var A=this,Se=this.element.querySelectorAll("dt");this.accordionItems=L(Se).map(function(k,tt){var d=new p.default(k,k.nextElementSibling,A.config);return d.header.addEventListener("click",function(){return A.toggleAccordion(d)},!1),d})}},{key:"toggleAccordion",value:function(A){A.opened?A.close():(this.config.withAutoClose&&this.accordionItems.map(function(Se){return Se.close()}),A.open()),this.config.onToggle(this)}}])&&_(b.prototype,C),Object.defineProperty(b,"prototype",{writable:!1}),T}();l.Accordion=et;var At=et;l.default=At},function(s,l,a){},function(s,l,a){function o(j,V){if(!(j instanceof V))throw new TypeError("Cannot call a class as a function")}function p(j,V){for(var ie=0;ie<V.length;ie++){var ne=V[ie];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(j,ne.key,ne)}}Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.AccordionItem=void 0,a(4);var L=function(){function j(ne,_){var He=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};o(this,j),this.opened=!1,this.header=ne,this.config=He,this.header.classList.add("JsAccordion-header"),_&&_.nodeName.toLowerCase()==="dd"&&(this.content=_,this.content.classList.contains("JsAccordion-body")||(this.content.classList.add("JsAccordion-body"),this.close()))}var V,ie;return V=j,(ie=[{key:"close",value:function(){this.opened=!1,this.header.classList.remove("JsAccordion-header--opened"),this.content&&(this.content.classList.remove("JsAccordion-body--opened"),this.content.style.maxHeight="0px")}},{key:"open",value:function(){this.opened=!0,this.header.classList.add("JsAccordion-header--opened"),this.content&&(this.content.classList.add("JsAccordion-body--opened"),this.content.style.maxHeight=this.config.maxHeight!=="9e99px"?this.config.maxHeight:"".concat(this.content.scrollHeight,"px"))}}])&&p(V.prototype,ie),Object.defineProperty(V,"prototype",{writable:!1}),j}();l.AccordionItem=L;var R=L;l.default=R},function(s,l,a){}])})})(ff);const af=rf(hn);var Mi=window,$e=Mi.requestAnimationFrame||Mi.webkitRequestAnimationFrame||Mi.mozRequestAnimationFrame||Mi.msRequestAnimationFrame||function(t){return setTimeout(t,16)},vr=window,cn=vr.cancelAnimationFrame||vr.mozCancelAnimationFrame||function(t){clearTimeout(t)};function dn(){for(var t,f,s,l=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if((t=arguments[a])!==null)for(f in t)s=t[f],l!==s&&s!==void 0&&(l[f]=s);return l}function Me(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function Oe(t,f,s,l){if(l)try{t.setItem(f,s)}catch{}return s}function of(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}function Si(){var t=document,f=t.body;return f||(f=t.createElement("body"),f.fake=!0),f}var Xt=document.documentElement;function Li(t){var f="";return t.fake&&(f=Xt.style.overflow,t.style.background="",t.style.overflow=Xt.style.overflow="hidden",Xt.appendChild(t)),f}function xi(t,f){t.fake&&(t.remove(),Xt.style.overflow=f,Xt.offsetHeight)}function lf(){var t=document,f=Si(),s=Li(f),l=t.createElement("div"),a=!1;f.appendChild(l);try{for(var o="(10px * 10)",p=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],L,R=0;R<3;R++)if(L=p[R],l.style.width=L,l.offsetWidth===100){a=L.replace(o,"");break}}catch{}return f.fake?xi(f,s):l.remove(),a}function sf(){var t=document,f=Si(),s=Li(f),l=t.createElement("div"),a=t.createElement("div"),o="",p=70,L=3,R=!1;l.className="tns-t-subp2",a.className="tns-t-ct";for(var j=0;j<p;j++)o+="<div></div>";return a.innerHTML=o,l.appendChild(a),f.appendChild(l),R=Math.abs(l.getBoundingClientRect().left-a.children[p-L].getBoundingClientRect().left)<2,f.fake?xi(f,s):l.remove(),R}function uf(){if(window.matchMedia||window.msMatchMedia)return!0;var t=document,f=Si(),s=Li(f),l=t.createElement("div"),a=t.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",p;return a.type="text/css",l.className="tns-mq-test",f.appendChild(a),f.appendChild(l),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(t.createTextNode(o)),p=window.getComputedStyle?window.getComputedStyle(l).position:l.currentStyle.position,f.fake?xi(f,s):l.remove(),p==="absolute"}function cf(t,f){var s=document.createElement("style");return t&&s.setAttribute("media",t),f&&s.setAttribute("nonce",f),document.querySelector("head").appendChild(s),s.sheet?s.sheet:s.styleSheet}function ze(t,f,s,l){"insertRule"in t?t.insertRule(f+"{"+s+"}",l):t.addRule(f,s,l)}function df(t,f){"deleteRule"in t?t.deleteRule(f):t.removeRule(f)}function ke(t){var f="insertRule"in t?t.cssRules:t.rules;return f.length}function hf(t,f){return Math.atan2(t,f)*(180/Math.PI)}function vf(t,f){var s=!1,l=Math.abs(90-Math.abs(t));return l>=90-f?s="horizontal":l<=f&&(s="vertical"),s}function Ge(t,f,s){for(var l=0,a=t.length;l<a;l++)f.call(s,t[l],l)}var vn="classList"in document.createElement("_"),wt=vn?function(t,f){return t.classList.contains(f)}:function(t,f){return t.className.indexOf(f)>=0},K=vn?function(t,f){wt(t,f)||t.classList.add(f)}:function(t,f){wt(t,f)||(t.className+=" "+f)},de=vn?function(t,f){wt(t,f)&&t.classList.remove(f)}:function(t,f){wt(t,f)&&(t.className=t.className.replace(f,""))};function Yt(t,f){return t.hasAttribute(f)}function Oi(t,f){return t.getAttribute(f)}function pr(t){return typeof t.item<"u"}function ge(t,f){if(t=pr(t)||t instanceof Array?t:[t],Object.prototype.toString.call(f)==="[object Object]")for(var s=t.length;s--;)for(var l in f)t[s].setAttribute(l,f[l])}function Be(t,f){t=pr(t)||t instanceof Array?t:[t],f=f instanceof Array?f:[f];for(var s=f.length,l=t.length;l--;)for(var a=s;a--;)t[l].removeAttribute(f[a])}function yr(t){for(var f=[],s=0,l=t.length;s<l;s++)f.push(t[s]);return f}function me(t,f){t.style.display!=="none"&&(t.style.display="none")}function pe(t,f){t.style.display==="none"&&(t.style.display="")}function gr(t){return window.getComputedStyle(t).display!=="none"}function Qt(t){if(typeof t=="string"){var f=[t],s=t.charAt(0).toUpperCase()+t.substr(1),l=["Webkit","Moz","ms","O"];l.forEach(function(L){(L!=="ms"||t==="transform")&&f.push(L+s)}),t=f}var a=document.createElement("fakeelement");t.length;for(var o=0;o<t.length;o++){var p=t[o];if(a.style[p]!==void 0)return p}return!1}function yf(t){if(!t||!window.getComputedStyle)return!1;var f=document,s=Si(),l=Li(s),a=f.createElement("p"),o,p=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return p+="transform",s.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",o=window.getComputedStyle(a).getPropertyValue(p),s.fake?xi(s,l):a.remove(),o!==void 0&&o.length>0&&o!=="none"}function mr(t,f){var s=!1;return/^Webkit/.test(t)?s="webkit"+f+"End":/^O/.test(t)?s="o"+f+"End":t&&(s=f.toLowerCase()+"end"),s}var br=!1;try{var gf=Object.defineProperty({},"passive",{get:function(){br=!0}});window.addEventListener("test",null,gf)}catch{}var wr=br?{passive:!0}:!1;function q(t,f,s){for(var l in f){var a=["touchstart","touchmove"].indexOf(l)>=0&&!s?wr:!1;t.addEventListener(l,f[l],a)}}function U(t,f){for(var s in f){var l=["touchstart","touchmove"].indexOf(s)>=0?wr:!1;t.removeEventListener(s,f[s],l)}}function mf(){return{topics:{},on:function(t,f){this.topics[t]=this.topics[t]||[],this.topics[t].push(f)},off:function(t,f){if(this.topics[t]){for(var s=0;s<this.topics[t].length;s++)if(this.topics[t][s]===f){this.topics[t].splice(s,1);break}}},emit:function(t,f){f.type=t,this.topics[t]&&this.topics[t].forEach(function(s){s(f,t)})}}}function pf(t,f,s,l,j,o,p){var L=Math.min(o,10),R=j.indexOf("%")>=0?"%":"px",j=j.replace(R,""),V=Number(t.style[f].replace(s,"").replace(l,"").replace(R,"")),ie=(j-V)/o*L;setTimeout(ne,L);function ne(){o-=L,V+=ie,t.style[f]=s+V+R+l,o>0?setTimeout(ne,L):p()}}Object.keys||(Object.keys=function(t){var f=[];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&f.push(s);return f});"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Ar=function(t){t=dn({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var f=document,s=window,l={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},a={},o=t.useLocalStorage;if(o){var p=navigator.userAgent,L=new Date;try{a=s.localStorage,a?(a.setItem(L,L),o=a.getItem(L)==L,a.removeItem(L)):o=!1,o||(a={})}catch{o=!1}o&&(a.tnsApp&&a.tnsApp!==p&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){a.removeItem(e)}),localStorage.tnsApp=p)}var R=a.tC?Me(a.tC):Oe(a,"tC",lf(),o),j=a.tPL?Me(a.tPL):Oe(a,"tPL",sf(),o),V=a.tMQ?Me(a.tMQ):Oe(a,"tMQ",uf(),o),ie=a.tTf?Me(a.tTf):Oe(a,"tTf",Qt("transform"),o),ne=a.t3D?Me(a.t3D):Oe(a,"t3D",yf(ie),o),_=a.tTDu?Me(a.tTDu):Oe(a,"tTDu",Qt("transitionDuration"),o),He=a.tTDe?Me(a.tTDe):Oe(a,"tTDe",Qt("transitionDelay"),o),et=a.tADu?Me(a.tADu):Oe(a,"tADu",Qt("animationDuration"),o),At=a.tADe?Me(a.tADe):Oe(a,"tADe",Qt("animationDelay"),o),T=a.tTE?Me(a.tTE):Oe(a,"tTE",mr(_,"Transition"),o),b=a.tAE?Me(a.tAE):Oe(a,"tAE",mr(et,"Animation"),o),C=s.console&&typeof s.console.warn=="function",A=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],Se={};if(A.forEach(function(e){if(typeof t[e]=="string"){var i=t[e],n=f.querySelector(i);if(Se[e]=i,n&&n.nodeName)t[e]=n;else{C&&console.warn("Can't find",t[e]);return}}}),t.container.children.length<1){C&&console.warn("No slides found in",t.container);return}var k=t.responsive,tt=t.nested,d=t.mode==="carousel";if(k){0 in k&&(t=dn(t,k[0]),delete k[0]);var Ci={};for(var yn in k){var Tt=k[yn];Tt=typeof Tt=="number"?{items:Tt}:Tt,Ci[yn]=Tt}k=Ci,Ci=null}function gn(e){for(var i in e)d||(i==="slideBy"&&(e[i]="page"),i==="edgePadding"&&(e[i]=!1),i==="autoHeight"&&(e[i]=!1)),i==="responsive"&&gn(e[i])}if(d||gn(t),!d){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var We=t.animateIn,Zt=t.animateOut,Ni=t.animateDelay,Le=t.animateNormal}var N=t.axis==="horizontal",ae=f.createElement("div"),oe=f.createElement("div"),le,y=t.container,Di=y.parentNode,mn=y.outerHTML,S=y.children,g=S.length,Et,Ut=Cn(),Mt=!1;k&&qn(),d&&(y.className+=" tns-vpfix");var w=t.autoWidth,h=m("fixedWidth"),W=m("edgePadding"),M=m("gutter"),Q=Dn(),$=m("center"),E=w?1:Math.floor(m("items")),ut=m("slideBy"),Ri=t.viewportMax||t.fixedWidthViewportWidth,Fe=m("arrowKeys"),be=m("speed"),Ot=t.rewind,G=Ot?!1:t.loop,se=m("autoHeight"),xe=m("controls"),_e=m("controlsText"),Ce=m("nav"),qe=m("touch"),Ve=m("mouseDrag"),re=m("autoplay"),ki=m("autoplayTimeout"),Ke=m("autoplayText"),Je=m("autoplayHoverPause"),Ie=m("autoplayResetOnVisibility"),D=cf(null,m("nonce")),St=t.lazyload,Tr=t.lazyloadSelector,J,ct=[],B=G?Sr():0,x=d?g+B*2:g+B,pn=!!((h||w)&&!G),dt=h?Gi():null,Hi=!d||!G,it=N?"left":"top",Ye="",ht="",Lt=function(){return h?function(){return $&&!G?g-1:Math.ceil(-dt/(h+M))}:w?function(){for(var e=0;e<x;e++)if(J[e]>=-dt)return e}:function(){return $&&d&&!G?g-1:G||d?Math.max(0,x-Math.ceil(E)):x-1}}(),u=Ln(m("startIndex")),Qe=u;Sn();var Ne=0,he=w?null:Lt(),$t=t.preventActionWhenRunning,Gt=t.swipeAngle,De=Gt?"?":!0,Xe=!1,Pi=t.onInit,X=new mf,Ze=" tns-slider tns-"+t.mode,z=y.id||of(),ue=m("disable"),xt=!1,Bt=t.freezable,we=Bt&&!w?Ii():!1,Ct=!1,Nt={click:Ue,keydown:Xr},ji={click:qr,keydown:Zr},Dt={mouseover:Ir,mouseout:Yr},Rt={visibilitychange:Jr},kt={keydown:Qr},Ht={touchstart:sr,touchmove:ur,touchend:Ei,touchcancel:Ei},Pt={mousedown:sr,mousemove:ur,mouseup:Ei,mouseleave:Ei},ei=Pe("controls"),zi=Pe("nav"),jt=w?!0:t.navAsThumbnails,Wi=Pe("autoplay"),bn=Pe("touch"),wn=Pe("mouseDrag"),Fi="tns-slide-active",An="tns-slide-cloned",ti="tns-complete",ii={load:kr,error:Hr},_i,qi,zt=t.preventScrollOnTouch==="force";if(ei)var I=t.controlsContainer,Tn=t.controlsContainer?t.controlsContainer.outerHTML:"",H=t.prevButton,P=t.nextButton,Er=t.prevButton?t.prevButton.outerHTML:"",Mr=t.nextButton?t.nextButton.outerHTML:"",Wt,Ft;if(zi)var ee=t.navContainer,En=t.navContainer?t.navContainer.outerHTML:"",ve,Ae=w?g:dr(),nt=0,rt=-1,ye=xn(),vt=ye,ni="tns-nav-active",yt="Carousel Page ",Vi=" (Current Slide)";if(Wi)var Mn=t.autoplayDirection==="forward"?1:-1,F=t.autoplayButton,On=t.autoplayButton?t.autoplayButton.outerHTML:"",_t=["<span class='tns-visually-hidden'>"," animation</span>"],ri,ce,fi,gt,ai;if(bn||wn)var ft={},Ee={},oi,at=!1,Te,Ki=N?function(e,i){return e.x-i.x}:function(e,i){return e.y-i.y};w||li(ue||we),ie&&(it=ie,Ye="translate",ne?(Ye+=N?"3d(":"3d(0px, ",ht=N?", 0px, 0px)":", 0px)"):(Ye+=N?"X(":"Y(",ht=")")),d&&(y.className=y.className.replace("tns-vpfix","")),xr(),Cr(),Hn();function li(e){e&&(xe=Ce=qe=Ve=Fe=re=Je=Ie=!1)}function Sn(){for(var e=d?u-B:u;e<0;)e+=g;return e%g+1}function Ln(e){return e=e?Math.max(0,Math.min(G?g-1:g-E,e)):0,d?e+B:e}function si(e){for(e==null&&(e=u),d&&(e-=B);e<0;)e+=g;return Math.floor(e%g)}function xn(){var e=si(),i;return i=jt?e:h||w?Math.ceil((e+1)*Ae/g-1):Math.floor(e/E),!G&&d&&u===he&&(i=Ae-1),i}function Or(){if(w||h&&!Ri)return g-1;var e=h?"fixedWidth":"items",i=[];if((h||t[e]<g)&&i.push(t[e]),k)for(var n in k){var r=k[n][e];r&&(h||r<g)&&i.push(r)}return i.length||i.push(0),Math.ceil(h?Ri/Math.min.apply(null,i):Math.max.apply(null,i))}function Sr(){var e=Or(),i=d?Math.ceil((e*5-g)/2):e*4-g;return i=Math.max(e,i),Pe("edgePadding")?i+1:i}function Cn(){return s.innerWidth||f.documentElement.clientWidth||f.body.clientWidth}function Ji(e){return e==="top"?"afterbegin":"beforeend"}function Nn(e){if(e!=null){var i=f.createElement("div"),n,r;return e.appendChild(i),n=i.getBoundingClientRect(),r=n.right-n.left,i.remove(),r||Nn(e.parentNode)}}function Dn(){var e=W?W*2-M:0;return Nn(Di)-e}function Pe(e){if(t[e])return!0;if(k){for(var i in k)if(k[i][e])return!0}return!1}function m(e,i){if(i==null&&(i=Ut),e==="items"&&h)return Math.floor((Q+M)/(h+M))||1;var n=t[e];if(k)for(var r in k)i>=parseInt(r)&&e in k[r]&&(n=k[r][e]);return e==="slideBy"&&n==="page"&&(n=m("items")),!d&&(e==="slideBy"||e==="items")&&(n=Math.floor(n)),n}function Lr(e){return R?R+"("+e*100+"% / "+x+")":e*100/x+"%"}function ui(e,i,n,r,c){var v="";if(e!==void 0){var O=e;i&&(O-=i),v=N?"margin: 0 "+O+"px 0 "+e+"px;":"margin: "+e+"px 0 "+O+"px 0;"}else if(i&&!n){var Z="-"+i+"px",te=N?Z+" 0 0":"0 "+Z+" 0";v="margin: 0 "+te+";"}return!d&&c&&_&&r&&(v+=ot(r)),v}function ci(e,i,n){return e?(e+i)*x+"px":R?R+"("+x*100+"% / "+n+")":x*100/n+"%"}function di(e,i,n){var r;if(e)r=e+i+"px";else{d||(n=Math.floor(n));var c=d?x:n;r=R?R+"(100% / "+c+")":100/c+"%"}return r="width:"+r,tt!=="inner"?r+";":r+" !important;"}function hi(e){var i="";if(e!==!1){var n=N?"padding-":"margin-",r=N?"right":"bottom";i=n+r+": "+e+"px;"}return i}function Rn(e,i){var n=e.substring(0,e.length-i).toLowerCase();return n&&(n="-"+n+"-"),n}function ot(e){return Rn(_,18)+"transition-duration:"+e/1e3+"s;"}function kn(e){return Rn(et,17)+"animation-duration:"+e/1e3+"s;"}function xr(){var e="tns-outer",i="tns-inner";if(Pe("gutter"),ae.className=e,oe.className=i,ae.id=z+"-ow",oe.id=z+"-iw",y.id===""&&(y.id=z),Ze+=j||w?" tns-subpixel":" tns-no-subpixel",Ze+=R?" tns-calc":" tns-no-calc",w&&(Ze+=" tns-autowidth"),Ze+=" tns-"+t.axis,y.className+=Ze,d?(le=f.createElement("div"),le.id=z+"-mw",le.className="tns-ovh",ae.appendChild(le),le.appendChild(oe)):ae.appendChild(oe),se){var n=le||oe;n.className+=" tns-ah"}if(Di.insertBefore(ae,y),oe.appendChild(y),Ge(S,function(Y,pt){K(Y,"tns-item"),Y.id||(Y.id=z+"-item"+pt),!d&&Le&&K(Y,Le),ge(Y,{"aria-hidden":"true",tabindex:"-1"})}),B){for(var r=f.createDocumentFragment(),c=f.createDocumentFragment(),v=B;v--;){var O=v%g,Z=S[O].cloneNode(!0);if(K(Z,An),Be(Z,"id"),c.insertBefore(Z,c.firstChild),d){var te=S[g-1-O].cloneNode(!0);K(te,An),Be(te,"id"),r.appendChild(te)}}y.insertBefore(r,y.firstChild),y.appendChild(c),S=y.children}}function Hn(){if(Pe("autoHeight")||w||!N){var e=y.querySelectorAll("img");Ge(e,function(i){var n=i.src;St||(n&&n.indexOf("data:image")<0?(i.src="",q(i,ii),K(i,"loading"),i.src=n):Qn(i))}),$e(function(){gi(yr(e),function(){_i=!0})}),Pe("autoHeight")&&(e=Ui(u,Math.min(u+E-1,x-1))),St?Pn():$e(function(){gi(yr(e),Pn)})}else d&&Vt(),zn(),Wn()}function Pn(){if(w&&g>1){var e=G?u:g-1;(function i(){var n=S[e].getBoundingClientRect().left,r=S[e-1].getBoundingClientRect().right;Math.abs(n-r)<=1?jn():setTimeout(function(){i()},16)})()}else jn()}function jn(){(!N||w)&&($n(),w?(dt=Gi(),Bt&&(we=Ii()),he=Lt(),li(ue||we)):tn()),d&&Vt(),zn(),Wn()}function Cr(){if(!d)for(var e=u,i=u+Math.min(g,E);e<i;e++){var n=S[e];n.style.left=(e-u)*100/E+"%",K(n,We),de(n,Le)}if(N&&(j||w?(ze(D,"#"+z+" > .tns-item","font-size:"+s.getComputedStyle(S[0]).fontSize+";",ke(D)),ze(D,"#"+z,"font-size:0;",ke(D))):d&&Ge(S,function(an,on){an.style.marginLeft=Lr(on)})),V){if(_){var r=le&&t.autoHeight?ot(t.speed):"";ze(D,"#"+z+"-mw",r,ke(D))}r=ui(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),ze(D,"#"+z+"-iw",r,ke(D)),d&&(r=N&&!w?"width:"+ci(t.fixedWidth,t.gutter,t.items)+";":"",_&&(r+=ot(be)),ze(D,"#"+z,r,ke(D))),r=N&&!w?di(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=hi(t.gutter)),d||(_&&(r+=ot(be)),et&&(r+=kn(be))),r&&ze(D,"#"+z+" > .tns-item",r,ke(D))}else{jr(),oe.style.cssText=ui(W,M,h,se),d&&N&&!w&&(y.style.width=ci(h,M,E));var r=N&&!w?di(h,M,E):"";M&&(r+=hi(M)),r&&ze(D,"#"+z+" > .tns-item",r,ke(D))}if(k&&V)for(var c in k){c=parseInt(c);var v=k[c],r="",O="",Z="",te="",Y="",pt=w?null:m("items",c),It=m("fixedWidth",c),st=m("speed",c),rn=m("edgePadding",c),fn=m("autoHeight",c),bt=m("gutter",c);_&&le&&m("autoHeight",c)&&"speed"in v&&(O="#"+z+"-mw{"+ot(st)+"}"),("edgePadding"in v||"gutter"in v)&&(Z="#"+z+"-iw{"+ui(rn,bt,It,st,fn)+"}"),d&&N&&!w&&("fixedWidth"in v||"items"in v||h&&"gutter"in v)&&(te="width:"+ci(It,bt,pt)+";"),_&&"speed"in v&&(te+=ot(st)),te&&(te="#"+z+"{"+te+"}"),("fixedWidth"in v||h&&"gutter"in v||!d&&"items"in v)&&(Y+=di(It,bt,pt)),"gutter"in v&&(Y+=hi(bt)),!d&&"speed"in v&&(_&&(Y+=ot(st)),et&&(Y+=kn(st))),Y&&(Y="#"+z+" > .tns-item{"+Y+"}"),r=O+Z+te+Y,r&&D.insertRule("@media (min-width: "+c/16+"em) {"+r+"}",D.cssRules.length)}}function zn(){if($i(),ae.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Yn()+"</span>  of "+g+"</div>"),qi=ae.querySelector(".tns-liveregion .current"),Wi){var e=re?"stop":"start";F?ge(F,{"data-action":e}):t.autoplayButtonOutput&&(ae.insertAdjacentHTML(Ji(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+_t[0]+e+_t[1]+Ke[0]+"</button>"),F=ae.querySelector("[data-action]")),F&&q(F,{click:fr}),re&&(Ti(),Je&&q(y,Dt),Ie&&q(y,Rt))}if(zi){if(ee)ge(ee,{"aria-label":"Carousel Pagination"}),ve=ee.children,Ge(ve,function(O,Z){ge(O,{"data-nav":Z,tabindex:"-1","aria-label":yt+(Z+1),"aria-controls":z})});else{for(var i="",n=jt?"":'style="display:none"',r=0;r<g;r++)i+='<button type="button" data-nav="'+r+'" tabindex="-1" aria-controls="'+z+'" '+n+' aria-label="'+yt+(r+1)+'"></button>';i='<div class="tns-nav" aria-label="Carousel Pagination">'+i+"</div>",ae.insertAdjacentHTML(Ji(t.navPosition),i),ee=ae.querySelector(".tns-nav"),ve=ee.children}if(nn(),_){var c=_.substring(0,_.length-18).toLowerCase(),v="transition: all "+be/1e3+"s";c&&(v="-"+c+"-"+v),ze(D,"[aria-controls^="+z+"-item]",v,ke(D))}ge(ve[ye],{"aria-label":yt+(ye+1)+Vi}),Be(ve[ye],"tabindex"),K(ve[ye],ni),q(ee,ji)}ei&&(!I&&(!H||!P)&&(ae.insertAdjacentHTML(Ji(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+z+'">'+_e[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+z+'">'+_e[1]+"</button></div>"),I=ae.querySelector(".tns-controls")),(!H||!P)&&(H=I.children[0],P=I.children[1]),t.controlsContainer&&ge(I,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&ge([H,P],{"aria-controls":z,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(ge(H,{"data-controls":"prev"}),ge(P,{"data-controls":"next"})),Wt=Bn(H),Ft=Bn(P),tr(),I?q(I,Nt):(q(H,Nt),q(P,Nt))),Qi()}function Wn(){if(d&&T){var e={};e[T]=Re,q(y,e)}qe&&q(y,Ht,t.preventScrollOnTouch),Ve&&q(y,Pt),Fe&&q(f,kt),tt==="inner"?X.on("outerResized",function(){_n(),X.emit("innerLoaded",fe())}):(k||h||w||se||!N)&&q(s,{resize:Fn}),se&&(tt==="outer"?X.on("innerLoaded",yi):ue||yi()),Xi(),ue?Jn():we&&Kn(),X.on("indexChanged",Xn),tt==="inner"&&X.emit("innerLoaded",fe()),typeof Pi=="function"&&Pi(fe()),Mt=!0}function Nr(){if(D.disabled=!0,D.ownerNode&&D.ownerNode.remove(),U(s,{resize:Fn}),Fe&&U(f,kt),I&&U(I,Nt),ee&&U(ee,ji),U(y,Dt),U(y,Rt),F&&U(F,{click:fr}),re&&clearInterval(ri),d&&T){var e={};e[T]=Re,U(y,e)}qe&&U(y,Ht),Ve&&U(y,Pt);var i=[mn,Tn,Er,Mr,En,On];A.forEach(function(r,c){var v=r==="container"?ae:t[r];if(typeof v=="object"&&v){var O=v.previousElementSibling?v.previousElementSibling:!1,Z=v.parentNode;v.outerHTML=i[c],t[r]=O?O.nextElementSibling:Z.firstElementChild}}),A=We=Zt=Ni=Le=N=ae=oe=y=Di=mn=S=g=Et=Ut=w=h=W=M=Q=E=ut=Ri=Fe=be=Ot=G=se=D=St=J=ct=B=x=pn=dt=Hi=it=Ye=ht=Lt=u=Qe=Ne=he=Gt=De=Xe=Pi=X=Ze=z=ue=xt=Bt=we=Ct=Nt=ji=Dt=Rt=kt=Ht=Pt=ei=zi=jt=Wi=bn=wn=Fi=ti=ii=_i=xe=_e=I=Tn=H=P=Wt=Ft=Ce=ee=En=ve=Ae=nt=rt=ye=vt=ni=yt=Vi=re=ki=Mn=Ke=Je=F=On=Ie=_t=ri=ce=fi=gt=ai=ft=Ee=oi=at=Te=Ki=qe=Ve=null;for(var n in this)n!=="rebuild"&&(this[n]=null);Mt=!1}function Fn(e){$e(function(){_n(je(e))})}function _n(e){if(Mt){tt==="outer"&&X.emit("outerResized",fe(e)),Ut=Cn();var i,n=Et,r=!1;k&&(qn(),i=n!==Et,i&&X.emit("newBreakpointStart",fe(e)));var c,v,O=E,Z=ue,te=we,Y=Fe,pt=xe,It=Ce,st=qe,rn=Ve,fn=re,bt=Je,an=Ie,on=u;if(i){var Ur=h,$r=se,Gr=_e,Br=$,ln=Ke;if(!V)var ef=M,tf=W}if(Fe=m("arrowKeys"),xe=m("controls"),Ce=m("nav"),qe=m("touch"),$=m("center"),Ve=m("mouseDrag"),re=m("autoplay"),Je=m("autoplayHoverPause"),Ie=m("autoplayResetOnVisibility"),i&&(ue=m("disable"),h=m("fixedWidth"),be=m("speed"),se=m("autoHeight"),_e=m("controlsText"),Ke=m("autoplayText"),ki=m("autoplayTimeout"),V||(W=m("edgePadding"),M=m("gutter"))),li(ue),Q=Dn(),(!N||w)&&!ue&&($n(),N||(tn(),r=!0)),(h||w)&&(dt=Gi(),he=Lt()),(i||h)&&(E=m("items"),ut=m("slideBy"),v=E!==O,v&&(!h&&!w&&(he=Lt()),Yi())),i&&ue!==Z&&(ue?Jn():Rr()),Bt&&(i||h||w)&&(we=Ii(),we!==te&&(we?(Bi(bi(Ln(0))),Kn()):(Dr(),r=!0))),li(ue||we),re||(Je=Ie=!1),Fe!==Y&&(Fe?q(f,kt):U(f,kt)),xe!==pt&&(xe?I?pe(I):(H&&pe(H),P&&pe(P)):I?me(I):(H&&me(H),P&&me(P))),Ce!==It&&(Ce?(pe(ee),nn()):me(ee)),qe!==st&&(qe?q(y,Ht,t.preventScrollOnTouch):U(y,Ht)),Ve!==rn&&(Ve?q(y,Pt):U(y,Pt)),re!==fn&&(re?(F&&pe(F),!ce&&!gt&&Ti()):(F&&me(F),ce&&Jt())),Je!==bt&&(Je?q(y,Dt):U(y,Dt)),Ie!==an&&(Ie?q(f,Rt):U(f,Rt)),i){if((h!==Ur||$!==Br)&&(r=!0),se!==$r&&(se||(oe.style.height="")),xe&&_e!==Gr&&(H.innerHTML=_e[0],P.innerHTML=_e[1]),F&&Ke!==ln){var sn=re?1:0,un=F.innerHTML,hr=un.length-ln[sn].length;un.substring(hr)===ln[sn]&&(F.innerHTML=un.substring(0,hr)+Ke[sn])}}else $&&(h||w)&&(r=!0);if((v||h&&!w)&&(Ae=dr(),nn()),c=u!==on,c?(X.emit("indexChanged",fe()),r=!0):v?c||Xn():(h||w)&&(Xi(),$i(),In()),v&&!d&&zr(),!ue&&!we){if(i&&!V&&((W!==tf||M!==ef)&&(oe.style.cssText=ui(W,M,h,be,se)),N)){d&&(y.style.width=ci(h,M,E));var nf=di(h,M,E)+hi(M);df(D,ke(D)-1),ze(D,"#"+z+" > .tns-item",nf,ke(D))}se&&yi(),r&&(Vt(),Qe=u)}i&&X.emit("newBreakpointEnd",fe(e))}}function Ii(){if(!h&&!w){var e=$?E-(E-1)/2:E;return g<=e}var i=h?(h+M)*g:J[g],n=W?Q+W*2:Q+M;return $&&(n-=h?(Q-h)/2:(Q-(J[u+1]-J[u]-M))/2),i<=n}function qn(){Et=0;for(var e in k)e=parseInt(e),Ut>=e&&(Et=e)}var Yi=function(){return G?d?function(){var e=Ne,i=he;e+=ut,i-=ut,W?(e+=1,i-=1):h&&(Q+M)%(h+M)&&(i-=1),B&&(u>i?u-=g:u<e&&(u+=g))}:function(){if(u>he)for(;u>=Ne+g;)u-=g;else if(u<Ne)for(;u<=he-g;)u+=g}:function(){u=Math.max(Ne,Math.min(he,u))}}();function Qi(){!re&&F&&me(F),!Ce&&ee&&me(ee),xe||(I?me(I):(H&&me(H),P&&me(P)))}function Vn(){re&&F&&pe(F),Ce&&ee&&pe(ee),xe&&(I?pe(I):(H&&pe(H),P&&pe(P)))}function Kn(){if(!Ct){if(W&&(oe.style.margin="0px"),B)for(var e="tns-transparent",i=B;i--;)d&&K(S[i],e),K(S[x-i-1],e);Qi(),Ct=!0}}function Dr(){if(Ct){if(W&&V&&(oe.style.margin=""),B)for(var e="tns-transparent",i=B;i--;)d&&de(S[i],e),de(S[x-i-1],e);Vn(),Ct=!1}}function Jn(){if(!xt){if(D.disabled=!0,y.className=y.className.replace(Ze.substring(1),""),Be(y,["style"]),G)for(var e=B;e--;)d&&me(S[e]),me(S[x-e-1]);if((!N||!d)&&Be(oe,["style"]),!d)for(var i=u,n=u+g;i<n;i++){var r=S[i];Be(r,["style"]),de(r,We),de(r,Le)}Qi(),xt=!0}}function Rr(){if(xt){if(D.disabled=!1,y.className+=Ze,Vt(),G)for(var e=B;e--;)d&&pe(S[e]),pe(S[x-e-1]);if(!d)for(var i=u,n=u+g;i<n;i++){var r=S[i],c=i<u+E?We:Le;r.style.left=(i-u)*100/E+"%",K(r,c)}Vn(),xt=!1}}function In(){var e=Yn();qi.innerHTML!==e&&(qi.innerHTML=e)}function Yn(){var e=vi(),i=e[0]+1,n=e[1]+1;return i===n?i+"":i+" to "+n}function vi(e){e==null&&(e=bi());var i=u,n,r,c;if($||W?(w||h)&&(r=-(parseFloat(e)+W),c=r+Q+W*2):w&&(r=J[u],c=r+Q),w)J.forEach(function(te,Y){Y<x&&(($||W)&&te<=r+.5&&(i=Y),c-te>=.5&&(n=Y))});else{if(h){var v=h+M;$||W?(i=Math.floor(r/v),n=Math.ceil(c/v-1)):n=i+Math.ceil(Q/v)-1}else if($||W){var O=E-1;if($?(i-=O/2,n=u+O/2):n=u+O,W){var Z=W*E/Q;i-=Z,n+=Z}i=Math.floor(i),n=Math.ceil(n)}else n=i+E-1;i=Math.max(i,0),n=Math.min(n,x-1)}return[i,n]}function Xi(){if(St&&!ue){var e=vi();e.push(Tr),Ui.apply(null,e).forEach(function(i){if(!wt(i,ti)){var n={};n[T]=function(c){c.stopPropagation()},q(i,n),q(i,ii),i.src=Oi(i,"data-src");var r=Oi(i,"data-srcset");r&&(i.srcset=r),K(i,"loading")}})}}function kr(e){Qn(mt(e))}function Hr(e){Pr(mt(e))}function Qn(e){K(e,"loaded"),Zi(e)}function Pr(e){K(e,"failed"),Zi(e)}function Zi(e){K(e,ti),de(e,"loading"),U(e,ii)}function Ui(e,i,n){var r=[];for(n||(n="img");e<=i;)Ge(S[e].querySelectorAll(n),function(c){r.push(c)}),e++;return r}function yi(){var e=Ui.apply(null,vi());$e(function(){gi(e,Un)})}function gi(e,i){if(_i||(e.forEach(function(n,r){!St&&n.complete&&Zi(n),wt(n,ti)&&e.splice(r,1)}),!e.length))return i();$e(function(){gi(e,i)})}function Xn(){Xi(),$i(),In(),tr(),Wr()}function jr(){d&&se&&(le.style[_]=be/1e3+"s")}function Zn(e,i){for(var n=[],r=e,c=Math.min(e+i,x);r<c;r++)n.push(S[r].offsetHeight);return Math.max.apply(null,n)}function Un(){var e=se?Zn(u,E):Zn(B,g),i=le||oe;i.style.height!==e&&(i.style.height=e+"px")}function $n(){J=[0];var e=N?"left":"top",i=N?"right":"bottom",n=S[0].getBoundingClientRect()[e];Ge(S,function(r,c){c&&J.push(r.getBoundingClientRect()[e]-n),c===x-1&&J.push(r.getBoundingClientRect()[i]-n)})}function $i(){var e=vi(),i=e[0],n=e[1];Ge(S,function(r,c){c>=i&&c<=n?Yt(r,"aria-hidden")&&(Be(r,["aria-hidden","tabindex"]),K(r,Fi)):Yt(r,"aria-hidden")||(ge(r,{"aria-hidden":"true",tabindex:"-1"}),de(r,Fi))})}function zr(){for(var e=u+Math.min(g,E),i=x;i--;){var n=S[i];i>=u&&i<e?(K(n,"tns-moving"),n.style.left=(i-u)*100/E+"%",K(n,We),de(n,Le)):n.style.left&&(n.style.left="",K(n,Le),de(n,We)),de(n,Zt)}setTimeout(function(){Ge(S,function(r){de(r,"tns-moving")})},300)}function Wr(){if(Ce&&(ye=rt>=0?rt:xn(),rt=-1,ye!==vt)){var e=ve[vt],i=ve[ye];ge(e,{tabindex:"-1","aria-label":yt+(vt+1)}),de(e,ni),ge(i,{"aria-label":yt+(ye+1)+Vi}),Be(i,"tabindex"),K(i,ni),vt=ye}}function Gn(e){return e.nodeName.toLowerCase()}function Bn(e){return Gn(e)==="button"}function er(e){return e.getAttribute("aria-disabled")==="true"}function mi(e,i,n){e?i.disabled=n:i.setAttribute("aria-disabled",n.toString())}function tr(){if(!(!xe||Ot||G)){var e=Wt?H.disabled:er(H),i=Ft?P.disabled:er(P),n=u<=Ne,r=!Ot&&u>=he;n&&!e&&mi(Wt,H,!0),!n&&e&&mi(Wt,H,!1),r&&!i&&mi(Ft,P,!0),!r&&i&&mi(Ft,P,!1)}}function pi(e,i){_&&(e.style[_]=i)}function Fr(){return h?(h+M)*x:J[x]}function qt(e){e==null&&(e=u);var i=W?M:0;return w?(Q-i-(J[e+1]-J[e]-M))/2:h?(Q-h)/2:(E-1)/2}function Gi(){var e=W?M:0,i=Q+e-Fr();return $&&!G&&(i=h?-(h+M)*(x-1)-qt():qt(x-1)-J[x-1]),i>0&&(i=0),i}function bi(e){e==null&&(e=u);var i;if(N&&!w)if(h)i=-(h+M)*e,$&&(i+=qt());else{var n=ie?x:E;$&&(e-=qt()),i=-e*100/n}else i=-J[e],$&&w&&(i+=qt());return pn&&(i=Math.max(i,dt)),i+=N&&!w&&!h?"%":"px",i}function Vt(e){pi(y,"0s"),Bi(e)}function Bi(e){e==null&&(e=bi()),y.style[it]=Ye+e+ht}function ir(e,i,n,r){var c=e+E;G||(c=Math.min(c,x));for(var v=e;v<c;v++){var O=S[v];r||(O.style.left=(v-u)*100/E+"%"),Ni&&He&&(O.style[He]=O.style[At]=Ni*(v-e)/1e3+"s"),de(O,i),K(O,n),r&&ct.push(O)}}var _r=function(){return d?function(){pi(y,""),_||!be?(Bi(),(!be||!gr(y))&&Re()):pf(y,it,Ye,ht,bi(),be,Re),N||tn()}:function(){ct=[];var e={};e[T]=e[b]=Re,U(S[Qe],e),q(S[u],e),ir(Qe,We,Zt,!0),ir(u,Le,We),(!T||!b||!be||!gr(y))&&Re()}}();function en(e,i){Hi&&Yi(),(u!==Qe||i)&&(X.emit("indexChanged",fe()),X.emit("transitionStart",fe()),se&&yi(),ce&&e&&["click","keydown"].indexOf(e.type)>=0&&Jt(),Xe=!0,_r())}function nr(e){return e.toLowerCase().replace(/-/g,"")}function Re(e){if(d||Xe){if(X.emit("transitionEnd",fe(e)),!d&&ct.length>0)for(var i=0;i<ct.length;i++){var n=ct[i];n.style.left="",At&&He&&(n.style[At]="",n.style[He]=""),de(n,Zt),K(n,Le)}if(!e||!d&&e.target.parentNode===y||e.target===y&&nr(e.propertyName)===nr(it)){if(!Hi){var r=u;Yi(),u!==r&&(X.emit("indexChanged",fe()),Vt())}tt==="inner"&&X.emit("innerLoaded",fe()),Xe=!1,Qe=u}}}function Kt(e,i){if(!we)if(e==="prev")Ue(i,-1);else if(e==="next")Ue(i,1);else{if(Xe){if($t)return;Re()}var n=si(),r=0;if(e==="first"?r=-n:e==="last"?r=d?g-E-n:g-1-n:(typeof e!="number"&&(e=parseInt(e)),isNaN(e)||(i||(e=Math.max(0,Math.min(g-1,e))),r=e-n)),!d&&r&&Math.abs(r)<E){var c=r>0?1:-1;r+=u+r-g>=Ne?g*c:g*2*c*-1}u+=r,d&&G&&(u<Ne&&(u+=g),u>he&&(u-=g)),si(u)!==si(Qe)&&en(i)}}function Ue(e,i){if(Xe){if($t)return;Re()}var n;if(!i){e=je(e);for(var r=mt(e);r!==I&&[H,P].indexOf(r)<0;)r=r.parentNode;var c=[H,P].indexOf(r);c>=0&&(n=!0,i=c===0?-1:1)}if(Ot){if(u===Ne&&i===-1){Kt("last",e);return}else if(u===he&&i===1){Kt("first",e);return}}i&&(u+=ut*i,w&&(u=Math.floor(u)),en(n||e&&e.type==="keydown"?e:null))}function qr(e){if(Xe){if($t)return;Re()}e=je(e);for(var i=mt(e),n;i!==ee&&!Yt(i,"data-nav");)i=i.parentNode;if(Yt(i,"data-nav")){var n=rt=Number(Oi(i,"data-nav")),r=h||w?n*g/Ae:n*E,c=jt?n:Math.min(Math.ceil(r),g-1);Kt(c,e),ye===n&&(ce&&Jt(),rt=-1)}}function wi(){ri=setInterval(function(){Ue(null,Mn)},ki),ce=!0}function Ai(){clearInterval(ri),ce=!1}function rr(e,i){ge(F,{"data-action":e}),F.innerHTML=_t[0]+e+_t[1]+i}function Ti(){wi(),F&&rr("stop",Ke[1])}function Jt(){Ai(),F&&rr("start",Ke[0])}function Vr(){re&&!ce&&(Ti(),gt=!1)}function Kr(){ce&&(Jt(),gt=!0)}function fr(){ce?(Jt(),gt=!0):(Ti(),gt=!1)}function Jr(){f.hidden?ce&&(Ai(),ai=!0):ai&&(wi(),ai=!1)}function Ir(){ce&&(Ai(),fi=!0)}function Yr(){fi&&(wi(),fi=!1)}function Qr(e){e=je(e);var i=[l.LEFT,l.RIGHT].indexOf(e.keyCode);i>=0&&Ue(e,i===0?-1:1)}function Xr(e){e=je(e);var i=[l.LEFT,l.RIGHT].indexOf(e.keyCode);i>=0&&(i===0?H.disabled||Ue(e,-1):P.disabled||Ue(e,1))}function ar(e){e.focus()}function Zr(e){e=je(e);var i=f.activeElement;if(Yt(i,"data-nav")){var n=[l.LEFT,l.RIGHT,l.ENTER,l.SPACE].indexOf(e.keyCode),r=Number(Oi(i,"data-nav"));n>=0&&(n===0?r>0&&ar(ve[r-1]):n===1?r<Ae-1&&ar(ve[r+1]):(rt=r,Kt(r,e)))}}function je(e){return e=e||s.event,lt(e)?e.changedTouches[0]:e}function mt(e){return e.target||s.event.srcElement}function lt(e){return e.type.indexOf("touch")>=0}function or(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function lr(){return vf(hf(Ee.y-ft.y,Ee.x-ft.x),Gt)===t.axis}function sr(e){if(Xe){if($t)return;Re()}re&&ce&&Ai(),at=!0,Te&&(cn(Te),Te=null);var i=je(e);X.emit(lt(e)?"touchStart":"dragStart",fe(e)),!lt(e)&&["img","a"].indexOf(Gn(mt(e)))>=0&&or(e),Ee.x=ft.x=i.clientX,Ee.y=ft.y=i.clientY,d&&(oi=parseFloat(y.style[it].replace(Ye,"")),pi(y,"0s"))}function ur(e){if(at){var i=je(e);Ee.x=i.clientX,Ee.y=i.clientY,d?Te||(Te=$e(function(){cr(e)})):(De==="?"&&(De=lr()),De&&(zt=!0)),(typeof e.cancelable!="boolean"||e.cancelable)&&zt&&e.preventDefault()}}function cr(e){if(!De){at=!1;return}if(cn(Te),at&&(Te=$e(function(){cr(e)})),De==="?"&&(De=lr()),De){!zt&&lt(e)&&(zt=!0);try{e.type&&X.emit(lt(e)?"touchMove":"dragMove",fe(e))}catch{}var i=oi,n=Ki(Ee,ft);if(!N||h||w)i+=n,i+="px";else{var r=ie?n*E*100/((Q+M)*x):n*100/(Q+M);i+=r,i+="%"}y.style[it]=Ye+i+ht}}function Ei(e){if(at){Te&&(cn(Te),Te=null),d&&pi(y,""),at=!1;var i=je(e);Ee.x=i.clientX,Ee.y=i.clientY;var n=Ki(Ee,ft);if(Math.abs(n)){if(!lt(e)){var r=mt(e);q(r,{click:function c(v){or(v),U(r,{click:c})}})}d?Te=$e(function(){if(N&&!w){var c=-n*E/(Q+M);c=n>0?Math.floor(c):Math.ceil(c),u+=c}else{var v=-(oi+n);if(v<=0)u=Ne;else if(v>=J[x-1])u=he;else for(var O=0;O<x&&v>=J[O];)u=O,v>J[O]&&n<0&&(u+=1),O++}en(e,n),X.emit(lt(e)?"touchEnd":"dragEnd",fe(e))}):De&&Ue(e,n>0?-1:1)}}t.preventScrollOnTouch==="auto"&&(zt=!1),Gt&&(De="?"),re&&!ce&&wi()}function tn(){var e=le||oe;e.style.height=J[u+E]-J[u]+"px"}function dr(){var e=h?(h+M)*g/Q:g/E;return Math.min(Math.ceil(e),g)}function nn(){if(!(!Ce||jt)&&Ae!==nt){var e=nt,i=Ae,n=pe;for(nt>Ae&&(e=Ae,i=nt,n=me);e<i;)n(ve[e]),e++;nt=Ae}}function fe(e){return{container:y,slideItems:S,navContainer:ee,navItems:ve,controlsContainer:I,hasControls:ei,prevButton:H,nextButton:P,items:E,slideBy:ut,cloneCount:B,slideCount:g,slideCountNew:x,index:u,indexCached:Qe,displayIndex:Sn(),navCurrentIndex:ye,navCurrentIndexCached:vt,pages:Ae,pagesCached:nt,sheet:D,isOn:Mt,event:e||{}}}return{version:"2.9.4",getInfo:fe,events:X,goTo:Kt,play:Vr,pause:Kr,isOn:Mt,updateSliderHeight:Un,refresh:Hn,destroy:Nr,rebuild:function(){return Ar(dn(t,Se))}}};Ar({container:".my-slider",items:1,slideBy:"page",autoplay:!1,navContainer:".controls--container",controls:!1});const bf="accordion";new af(bf);
