(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{242:function(e,t,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(192).default)("69047851",content,!0,{sourceMap:!1})},279:function(e,t){var o=["class","staticClass","style","staticStyle","attrs"];function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(source,e){if(null==source)return{};var t,i,o=function(source,e){if(null==source)return{};var t,i,o={},n=Object.keys(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(o[t]=source[t]);return o}(source,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(o[t]=source[t])}return o}e.exports={functional:!0,render:function(e,t){var l=t._c,data=(t._v,t.data),d=t.children,v=void 0===d?[]:d,f=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,h=data.attrs,w=void 0===h?{}:h,x=c(data,o);return l("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[f,y],style:[style,m],attrs:Object.assign({viewBox:"0 0 20 20",fill:"currentColor"},w)},x),v.concat([l("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"}})]))}}},280:function(e,t,o){"use strict";o(242)},281:function(e,t,o){var n=o(191)((function(i){return i[1]}));n.push([e.i,'.atom-responsive-video[data-v-a634cc02]{position:relative;background:var(--color-black);}.atom-responsive-video[data-v-a634cc02]:before{display:block;padding-top:177.77778%;content:"";}@media (min-width: 576px){.atom-responsive-video[data-v-a634cc02]:before{padding-top:56.25%;}}@media (--xs){.atom-responsive-video[data-v-a634cc02]:before{padding-top:56.25%;}}.atom-responsive-video video[data-v-a634cc02]{position:absolute;top:0;left:0;z-index:5;width:100%;height:100%}.atom-responsive-video .poster[data-v-a634cc02]{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;}.atom-responsive-video .poster[data-v-a634cc02]:before{display:block;padding-top:177.77778%;content:"";}@media (min-width: 576px){.atom-responsive-video .poster[data-v-a634cc02]:before{padding-top:56.25%;}}@media (--xs){.atom-responsive-video .poster[data-v-a634cc02]:before{padding-top:56.25%;}}.atom-responsive-video .poster[data-v-a634cc02] picture{position:absolute;top:0;left:0;width:100%;height:100%}.atom-responsive-video .poster[data-v-a634cc02] img{position:absolute;top:0;left:0;width:100%}.atom-responsive-video .play-button[data-v-a634cc02]{position:absolute;top:0;left:0;z-index:11;width:100%;height:100%;cursor:pointer;}.atom-responsive-video .play-button svg[data-v-a634cc02]{position:absolute;top:50%;left:50%;width:64px;height:64px;color:var(--color-white);filter:drop-shadow(0 0 6px black);transform:translate(-50%,-50%)}.atom-responsive-video.js--started .play-button[data-v-a634cc02],.atom-responsive-video.js--started .poster[data-v-a634cc02]{pointer-events:none;opacity:0}',""]),n.locals={},e.exports=n},298:function(e,t,o){"use strict";o(127),o(54);var n=o(248),r=o(279),c=o.n(r),l={components:{SpeedkitPicture:n.a,SvgIconPlay:c.a},props:{poster:{type:Object,required:!1,default:function(){return{title:"Text Image",alt:"Text Image",sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}},sources:{type:Array,required:!1,default:function(){return[{type:"video/mp4",src:"video/9_16/BigBuckBunny_9_16.mp4",media:"all and (max-width:575px)"},{type:"video/mp4",src:"video/16_9/BigBuckBunny_16_9.mp4",media:"all and (min-width:576px)"}]}},autoplay:{type:Boolean,required:!1,default:function(){return!1}},muted:{type:Boolean,required:!1,default:function(){return!1}},loop:{type:Boolean,required:!1,default:function(){return!1}},controls:{type:Boolean,required:!1,default:function(){return!0}},playsinline:{type:Boolean,required:!1,default:function(){return!1}},preload:{type:String,required:!1,default:function(){return"none"}}},data:function(){return{videoPlaying:!1,videoStarted:!1}},computed:{videoAttributes:function(){return{playsinline:this.playsinline,preload:this.preload,loop:this.loop,controls:this.controls,muted:this.muted}},styleClasses:function(){return{"js--started":this.videoStarted,"js--playing":this.videoPlaying}},filteredSources:function(){var e=this;return this.$isServer?[]:this.sources.filter((function(source){return e.isMedia(source.media)}))}},mounted:function(){var e=this;this.$nextTick((function(){e.autoplay&&e.$refs.video.play()}))},methods:{isMedia:function(e){return!!this.$isServer||e&&window.matchMedia(e).matches},onClickPlayButton:function(){this.$refs.video.play()},onPlay:function(){this.videoStarted=this.videoPlaying=!0},onPause:function(){this.videoPlaying=!1}}},d=(o(280),o(190)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"atom-responsive-video",class:e.styleClasses},[t("client-only",[t("video",e._b({ref:"video",on:{play:e.onPlay,pause:e.onPause}},"video",e.videoAttributes,!1),e._l(e.filteredSources,(function(source,o){return t("source",e._b({key:o},"source",source,!1))})),0)]),e._v(" "),t("speedkit-picture",e._b({staticClass:"poster"},"speedkit-picture",e.poster,!1)),e._v(" "),e.autoplay?e._e():t("span",{staticClass:"play-button",on:{click:e.onClickPlayButton}},[t("svg-icon-play")],1)],1)}),[],!1,null,"a634cc02",null);t.a=component.exports},362:function(e,t,o){var content=o(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(192).default)("655bbdc4",content,!0,{sourceMap:!1})},520:function(e,t,o){"use strict";o(362)},521:function(e,t,o){var n=o(191)((function(i){return i[1]}));n.push([e.i,".organism-stage-video[data-v-00ea137c]:first-child{margin-top:0}.organism-stage-video[data-v-00ea137c]{position:relative;width:100%;}",""]),n.locals={},e.exports=n},582:function(e,t,o){"use strict";o.r(t);var n=o(210),r=o(298),c={components:{LayoutLostContainer:n.a,AtomResponsiveVideo:r.a},props:{video:{type:Object,required:!1,default:function(){return{poster:{sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}}}}},l=(o(520),o(190)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("layout-lost-container",{staticClass:"organism-stage-video"},[t("template",{slot:"background"},[e.video?t("atom-responsive-video",e._b({},"atom-responsive-video",e.video,!1)):e._e()],1)],2)}),[],!1,null,"00ea137c",null);t.default=component.exports}}]);