(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{495:function(t,e,o){},499:function(t,e,o){"use strict";var n=o(495);o.n(n).a},501:function(t,e,o){"use strict";var n=o(0),s=o(504);n.a.component("lm-icon",s.a);var a={name:"LemonButton",props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"==t||"right"==t}}}},i=(o(499),o(43)),l=Object(i.a)(a,(function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("button",{staticClass:"lm-button test",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?n("lm-icon",{attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?n("lm-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),n("div",{staticClass:"content"},[e._t("default")],2)],1)}),[],!1,null,null,null);e.a=l.exports},502:function(t,e,o){"use strict";var n=o(6),s=o(4),a=o(94),i=o(11),l=o(7),c=o(18),u=o(503),r=o(44),f=o(2),p=o(29),d=o(66).f,m=o(25).f,h=o(9).f,v=o(497).trim,C=s.Number,b=C.prototype,_="Number"==c(p(b)),B=function(t){var e,o,n,s,a,i,l,c,u=r(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=v(u)).charCodeAt(0))||45===e){if(88===(o=u.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+u}for(i=(a=u.slice(2)).length,l=0;l<i;l++)if((c=a.charCodeAt(l))<48||c>s)return NaN;return parseInt(a,n)}return+u};if(a("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var g,y=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof y&&(_?f((function(){b.valueOf.call(o)})):"Number"!=c(o))?u(new C(B(e)),o,y):B(e)},N=n?d(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;N.length>$;$++)l(C,g=N[$])&&!l(y,g)&&h(y,g,m(C,g));y.prototype=b,b.constructor=y,i(s,"Number",y)}},503:function(t,e,o){var n=o(5),s=o(95);t.exports=function(t,e,o){var a,i;return s&&"function"==typeof(a=e.constructor)&&a!==o&&n(i=a.prototype)&&i!==o.prototype&&s(t,i),t}},505:function(t,e,o){},518:function(t,e,o){"use strict";var n=o(505);o.n(n).a},519:function(t,e,o){"use strict";o(166),o(502),o(507),o(169);o(0).a.prototype.$toast=function(){console.log("我是 toast")};var n,s={name:"LemonToast",props:{autoClose:{type:[Boolean,Number],default:5,validator:function(t){return!1===t||"number"==typeof t}},isCloseButton:{type:Boolean,default:function(){return!1}},closeButton:{type:Object,default:function(){return{text:"关闭",callback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","middle","bottom"].indexOf(t)>=0}}},mounted:function(){this.delayClose(),this.updateStyle()},computed:{toastClasses:function(){return t={},e="position-".concat(this.position),o=!0,e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t;var t,e,o}},methods:{updateStyle:function(){var t=this;this.$nextTick((function(){t.$refs.line&&(t.$refs.line.style.height=t.$refs.toast.getBoundingClientRect().height+"px")}))},delayClose:function(){var t=this;setTimeout((function(){t.autoClose&&t.close()}),1e3*this.autoClose)},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onClickClose:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},a=(o(518),o(43)),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",class:t.toastClasses},[o("div",{ref:"toast",staticClass:"toast"},[o("div",{staticClass:"message"},[t.enableHtml?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),t.isCloseButton?o("div",{staticClass:"closeWrapper"},[o("div",{ref:"line",staticClass:"line"}),t._v(" "),t.closeButton?o("span",{staticClass:"close",on:{click:t.onClickClose}},[t._v("\n        "+t._s(t.closeButton.text)+"\n      ")]):t._e()]):t._e()])])}),[],!1,null,"0c20ebae",null).exports;e.a={install:function(t,e){t.prototype.$toast=function(e,o){n&&n.close(),n=function(t){var e=t.Vue,o=t.message,n=t.propsData,s=t.onClose,a=new(e.extend(i))({propsData:n});return a.$slots.default=[o],a.$mount(),a.$on("close",s),document.body.appendChild(a.$el),a}({Vue:t,message:e,propsData:o,onClose:function(){n=null}})}}}},635:function(t,e,o){"use strict";o.r(e);var n=o(519),s=o(496),a=o(501);o(0).a.use(n.a);var i={name:"collapse-demos",components:{templateDemos:s.default,Button:a.a},mounted:function(){},methods:{showToast1:function(){this.$toast("自定义关闭文字",{isCloseButton:!0,closeButton:{text:"点击我关闭Toast"}})},showToast2:function(){this.$toast("关闭后执行回调函数",{isCloseButton:!0,closeButton:{text:"关闭后执行 alert('已经关闭了')",callback:function(){window.alert("已经关闭了")}}})},showToast3:function(){this.$toast("2s后自动关闭",{isCloseButton:!0,autoClose:2})}},data:function(){return{code:'\nthis.$toast(\'自定义关闭文字\', {\n  isCloseButton: true,\n  closeButton: { text: "点击我关闭Toast" },\n});\nthis.$toast(\'关闭后执行回调函数\', {\n  isCloseButton: true,\n  closeButton: {\n    text: "关闭后执行 alert(\'已经关闭了\')",\n    callback: () => {\n      window.alert("已经关闭了");\n    },\n  },\n});\nthis.$toast("2s后自动关闭", {\n  isCloseButton: true,\n  autoClose: 2,\n});\n '}}},l=o(43),c=Object(l.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("templateDemos",{attrs:{title:"自定义关闭",code:t.code}},[o("Button",{on:{click:t.showToast1}},[t._v("自定义关闭文字")]),t._v(" "),o("Button",{on:{click:t.showToast2}},[t._v("关闭后执行回调函数")]),t._v(" "),o("Button",{on:{click:t.showToast3}},[t._v("设置自动关闭时间")])],1)}),[],!1,null,"3bd83bc2",null);e.default=c.exports}}]);