(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{122:function(e,t,n){var content=n(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("0f5d76ff",content,!0,{sourceMap:!1})},16:function(e,t,n){var content=n(26);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("8c724af4",content,!0,{sourceMap:!1})},243:function(e,t,n){"use strict";n(122)},244:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},25:function(e,t,n){"use strict";n(16)},26:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,'*[data-v-514cb2af]{margin:0}[data-debug][data-v-514cb2af]{position:relative;}[data-debug] pre[data-v-514cb2af]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;margin:0;font-family:monospace;font-weight:400;}[data-debug] pre[data-v-514cb2af]:before{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-514cb2af]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},e.exports=o},28:function(e,t,n){var content=n(56);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("fa89aa7e",content,!0,{sourceMap:!1})},29:function(e,t,n){var content=n(58);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("6979baa3",content,!0,{sourceMap:!1})},30:function(e,t,n){var content=n(60);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("3e60a14b",content,!0,{sourceMap:!1})},301:function(e,t,n){"use strict";n.r(t);var o=n(15),l=n(70),r={components:{LayoutLostContainer:o.a,MoleculeContent:l.a},props:{article:{type:Object,default:()=>({headline:{overline:"Text Overline",headline:"Text Headline",subline:"Text Subline"},content:"<p>Example Text</p>"})}}},d=(n(243),n(7)),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return t("layout-lost-container",{staticClass:"organism-full-text"},[t("molecule-content",e._b({},"molecule-content",e.article,!1))],1)}),[],!1,null,"433ad6b0",null);t.default=component.exports},36:function(e,t,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{tag:{type:String,default:null},font:{type:[Object,Array],default:()=>[]}},data:()=>({debug:!1}),computed:{contextLevel(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}},mounted(){this.debug="debug-headline"in this.$route.query}},l=(n(25),n(7)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t(e.tag||`h${e.contextLevel}`,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?t("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"514cb2af",null);t.a=component.exports},55:function(e,t,n){"use strict";n(28)},56:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,".atom-headline[data-v-0b858b12]{margin:0;line-height:1.5;}.atom-headline>*[data-v-0b858b12]{display:block}h2.atom-headline .overline[data-v-0b858b12]{font-size:3.2vw;}@media (min-width: 576px){h2.atom-headline .overline[data-v-0b858b12]{font-size:12px;}}@media (--xs){h2.atom-headline .overline[data-v-0b858b12]{font-size:12px;}}h2.atom-headline .subline[data-v-0b858b12]{font-size:4.26667vw;}@media (min-width: 576px){h2.atom-headline .subline[data-v-0b858b12]{font-size:16px;}}@media (--xs){h2.atom-headline .subline[data-v-0b858b12]{font-size:16px;}}h2.atom-headline .headline[data-v-0b858b12]{font-size:9.6vw;}@media (min-width: 576px){h2.atom-headline .headline[data-v-0b858b12]{font-size:36px;}}@media (--xs){h2.atom-headline .headline[data-v-0b858b12]{font-size:36px;}}",""]),o.locals={},e.exports=o},57:function(e,t,n){"use strict";n(29)},58:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,".atom-rich-text[data-v-1a1ea68a]{font-size:4.26667vw;line-height:1.3;letter-spacing:.05625em;}@media (min-width: 576px){.atom-rich-text[data-v-1a1ea68a]{font-size:16px;}}@media (--xs){.atom-rich-text[data-v-1a1ea68a]{font-size:16px;}}",""]),o.locals={},e.exports=o},59:function(e,t,n){"use strict";n(30)},60:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},70:function(e,t,n){"use strict";var o=n(18),l={components:{BaseContentHeadline:n(36).a},props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},headline:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}}},r=(n(55),n(7)),d=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("base-content-headline",{staticClass:"atom-headline"},[e._t("default",(function(){return[e.$slots.overline||e.overline?t("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"overline"},[e._t("overline-slot",(function(){return[e._v("\n        "+e._s(e.overline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.headline||e.headline?t("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Roboto Slab",700),expression:"$getFont('Roboto Slab', 700)"}],staticClass:"headline"},[e._t("headline-slot",(function(){return[e._v("\n        "+e._s(e.headline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.subline||e.subline?t("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway",700),expression:"$getFont('Raleway', 700)"}],staticClass:"subline"},[e._t("subline-slot",(function(){return[e._v("\n        "+e._s(e.subline)+"\n      ")]}))],2):e._e()]}))],2)}),[],!1,null,"0b858b12",null).exports,c={props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}},f=(n(57),{components:{AtomHeadline:d,AtomRichText:Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Raleway"),e.$getFont("Raleway",700,"normal",{selector:"strong"}),e.$getFont("Raleway",400,"italic",{selector:"em"})],expression:"[\n    $getFont('Raleway'),\n    $getFont('Raleway', 700, 'normal', {selector:'strong'}),\n    $getFont('Raleway', 400, 'italic', {selector:'em'})\n  ]"}],staticClass:"atom-rich-text"},[e.$slots.default?e._e():t("div",{domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default")],2)}),[],!1,null,"1a1ea68a",null).exports,BaseContentContainer:o.a},props:{headline:{type:Object,default:()=>({overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"})},content:{type:String,default:()=>"<p>Example Text</p>"}}}),m=(n(59),Object(r.a)(f,(function(){var e=this,t=e._self._c;return t("base-content-container",{staticClass:"molecule-article",scopedSlots:e._u([{key:"header",fn:function(){return[e.headline?t("atom-headline",e._b({},"atom-headline",e.headline,!1)):e._e()]},proxy:!0},{key:"default",fn:function(){return[e._t("default",(function(){return[t("atom-rich-text",{attrs:{content:e.content}})]}))]},proxy:!0}],null,!0)})}),[],!1,null,null,null));t.a=m.exports}}]);