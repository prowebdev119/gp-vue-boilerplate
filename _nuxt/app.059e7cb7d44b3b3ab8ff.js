!function(e){function t(data){for(var t,n,o=data[0],c=data[1],i=0,d=[];i<o.length;i++)n=o[i],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(l&&l(data);d.length;)d.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var d,script=document.createElement("script");script.charset="utf-8",script.timeout=120,o.nc&&script.setAttribute("nonce",o.nc),script.src=function(e){return o.p+""+({2:"pages/index",3:"pages/p/_page",4:"pages/p/_sub/_child",5:"vendors/content/plugin.js"}[e]||e)+"."+{0:"cdef49eab65795e4f8a7",2:"50ff630c7f11edea8646",3:"e88608347ee1659fb383",4:"41f217e5da456895b9c5",5:"e8a51e1b993788a85dbe",6:"f2fcaca8e97f26bd4d1a",7:"41cdfa11abc402f2c681",8:"44e810b15ce245de64ce",9:"6377afe771c74e8b3842",10:"293c29e801f72ac00fab",11:"851d4ffc62e9c47bf358",12:"a2b68bb4d7c08f0206a5",13:"c18e38d1dbef986a34b1",14:"9c44b17b2b90fb2b0ee9",15:"3994083247748a51b39b",16:"c3403554108516450ac4",17:"093d0760688aefad99ad",18:"e535bcda61dde61c2470",19:"d5c4bc54de8859c88564",20:"95cfcef8b6cd330e134b",21:"5a5010adf99368935f37",22:"3cb673cb27dff69e8e74",23:"6ac09c954ce15ef1bd66",24:"d9107a499b56589f7ad3"}[e]+".js"}(e);var l=new Error;d=function(t){script.onerror=script.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:script})}),12e4);script.onerror=script.onload=d,document.head.appendChild(script)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/gp-vue-boilerplate/_nuxt/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=d;o(o.s=4)}([function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return h}));var r=n(1);const o={timing:{fcp:500,dcl:800}};let c,d=o;function l(e={}){d={timing:Object.assign({},o.timing,e.timing||{})},d=Object.assign({},o,e)}function f(){return m()&&!0}function m(){if(e.performance){const e=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<d.timing.fcp;if(t.length)return t.reduce(((e,t)=>((!e||e<t.responseEnd)&&(e=t.responseEnd),e)),null)<d.timing.dcl}return!1}const h=(t={})=>{if(e.requestIdleCallback){const{maxTime:e,threshold:n}=Object.assign({},{maxTime:1e3,threshold:.65},t),o=new r.a(y),d=new r.a(w);return new Promise(((t,l)=>{c=window.performance.now(),Object(r.b)(((e,t,n,r)=>{const o=new v(10,t/2);return([d,l])=>{const time=window.performance.now()-c,f=l/d;f<=1&&o.add(f),o.avg<=1&&o.avg>t?n(!0):time>=e&&r(!1)}})(e,n,t,l),[o,d])})).finally((()=>{o.destroy(),d.destroy()}))}},y=e=>{let t=performance.now();const n=()=>{const time=performance.now(),r=time-t;t=time;e(r)&&requestAnimationFrame(n)};requestAnimationFrame(n)},w=t=>{const n=r=>{t(r.timeRemaining())&&e.requestIdleCallback(n)};e.requestIdleCallback(n)};class v{constructor(e=10,t=0){this.list=void 0,this.index=0,this.list=Array(e).fill(t)}add(e){this.list[this.index]=e,this.index=(this.index+1)%this.list.length}get avg(){return this.list.reduce(((e,t)=>e+t),0)/this.list.length}}}).call(this,n(2))},function(e,t,n){"use strict";function r(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var o=0;function c(e){return"__private_"+o+++"_"+e}var d=c("listeners"),l=c("destroyed");class f{constructor(e){Object.defineProperty(this,d,{writable:!0,value:[]}),Object.defineProperty(this,l,{writable:!0,value:!1}),e((e=>!r(this,l)[l]&&(r(this,d)[d].forEach((t=>t(e))),!0)))}subscribe(e){return r(this,d)[d].push(e),{unsubscribe:()=>{r(this,d)[d]=r(this,d)[d].filter((t=>t===e))}}}destroy(){r(this,l)[l]=!0}}const m=(e,t)=>{let n=[];t.forEach(((r,o)=>{r.subscribe((r=>o=>{n[Number(r)]=o,n.filter(Boolean).length>=t.length&&(e(n),n=[])})(o))}))}},function(e,t){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}e.exports=g},function(e,t,n){"use strict";(function(e){function r(t){return new RegExp(t.regex).test(e.navigator.userAgent)}n.d(t,"a",(function(){return r}))}).call(this,n(2))},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n(3);let o=!1;const c=e.document.getElementById("nuxt-speedkit-layer"),d=t=>e.dispatchEvent(new CustomEvent("nuxt-speedkit:run",{detail:{sufficient:t}}));async function l(e){if(!o){document.documentElement.classList.remove("nuxt-speedkit-reduced-view");try{return e||await Object(t.c)(),o=!0,d(!0),Promise.all([n.e(9),n.e(6),n.e(7)]).then(n.bind(null,6))}catch(e){d(!1),c&&m("nuxt-speedkit-message-weak-hardware")}return null}}function f(e,t){Array.from(document.querySelectorAll(`#${e}`)).forEach((e=>{e.addEventListener("click",t,{capture:!0,once:!0,passive:!0})}))}function m(t){const n=e.document.getElementById(t);if(!n)throw new Error(`Can't update speedkit-layer, message ${t} missing.`);n.style.display="block",c.className+=" nuxt-speedkit-layer-visible"}function h(){document.documentElement.classList.add("nuxt-speedkit-reduced-view"),e.document.querySelectorAll("[data-font]").forEach((e=>{e.classList.add("font-active")})),Array.from(document.querySelectorAll("noscript.nuxt-speedkit-picture-noscript")).forEach((e=>{const t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t.children[0],e),t.remove()}))}const y=Object(r.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(14[_.]5|14[_.]([6-9]|\\d{2,})|14[_.]8|14[_.](9|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})[_.]\\d+|15[_.]5|15[_.]([6-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+|16[_.]0|16[_.]([1-9]|\\d{2,})|(1[7-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|((?:Chrome).*OPR\\/(90|(9[1-9]|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(18|(19|[2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(106|(10[7-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(105|(10[6-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(?:\\.\\d+)?)|(Version\\/(15\\.6|15\\.([7-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})\\.\\d+)(?:\\.\\d+)? Safari\\/)|(Trident\\/7\\.0)|(Firefox\\/(102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,})|105|(10[6-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+\\.\\d+)|(Firefox\\/(102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,})|105|(10[6-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)|(([MS]?IE) (11|(1[2-9]|[2-9]\\d|\\d{3,}))\\.\\d+)","")});window.addEventListener("load",(function(){document.getElementById("nuxt-speedkit-layer")?(f("nuxt-speedkit-button-init-reduced-view",h),f("nuxt-speedkit-button-init-app",(()=>l(!0))),Object(t.d)({timing:{fcp:800,dcl:1200}}),"__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(t.b)()&&y?l():function(e){e||m("nuxt-speedkit-message-unsupported-browser"),Object(t.a)()||m("nuxt-speedkit-message-reduced-bandwidth")}(y)):l()}))}.call(this,n(2))}]);