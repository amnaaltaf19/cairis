(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f75f478"],{"02f4":function(e,t,r){var n=r("4588"),i=r("be13");e.exports=function(e){return function(t,r){var a,o,s=String(i(t)),c=n(r),l=s.length;return c<0||c>=l?e?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?e?s.charAt(c):a:e?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),i=r("32e9"),a=r("79e5"),o=r("be13"),s=r("2b4c"),c=r("520a"),l=s("species"),u=!a(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=s(e),h=!a(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),p=h?!a(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[f](""),!t}):void 0;if(!h||!p||"replace"===e&&!u||"split"===e&&!d){var m=/./[f],v=r(o,f,""[e],function(e,t,r,n,i){return t.exec===c?h&&!i?{done:!0,value:m.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),g=v[0],b=v[1];n(String.prototype,e,g),i(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),i=r("cb7c"),a=r("ebd6"),o=r("0390"),s=r("9def"),c=r("5f1b"),l=r("520a"),u=r("79e5"),d=Math.min,f=[].push,h="split",p="length",m="lastIndex",v=4294967295,g=!u(function(){RegExp(v,"y")});r("214f")("split",2,function(e,t,r,u){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(i,e,t);var a,o,s,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,h=void 0===t?v:t>>>0,g=new RegExp(e.source,u+"g");while(a=l.call(g,i)){if(o=g[m],o>d&&(c.push(i.slice(d,a.index)),a[p]>1&&a.index<i[p]&&f.apply(c,a.slice(1)),s=a[0][p],d=o,c[p]>=h))break;g[m]===a.index&&g[m]++}return d===i[p]?!s&&g.test("")||c.push(""):c.push(i.slice(d)),c[p]>h?c.slice(0,h):c}:"0"[h](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var i=e(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,i,n):b.call(String(i),r,n)},function(e,t){var n=u(b,e,this,t,b!==r);if(n.done)return n.value;var l=i(e),f=String(this),h=a(l,RegExp),p=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),y=new h(g?l:"^(?:"+l.source+")",m),x=void 0===t?v:t>>>0;if(0===x)return[];if(0===f.length)return null===c(y,f)?[f]:[];var w=0,C=0,N=[];while(C<f.length){y.lastIndex=g?C:0;var S,L=c(y,g?f:f.slice(C));if(null===L||(S=d(s(y.lastIndex+(g?0:C)),f.length))===w)C=o(f,C,p);else{if(N.push(f.slice(w,C)),N.length===x)return N;for(var _=1;_<=L.length-1;_++)if(N.push(L[_]),N.length===x)return N;C=w=S}}return N.push(f.slice(w)),N}]})},"520a":function(e,t,r){"use strict";var n=r("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s="lastIndex",c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[s]||0!==t[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(o=function(e){var t,r,o,u,d=this;return l&&(r=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),c&&(t=d[s]),o=i.call(d,e),c&&o&&(d[s]=d.global?o.index+o[0].length:t),l&&o&&o.length>1&&a.call(o[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),e.exports=o},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"7f7f":function(e,t,r){var n=r("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in i||r("9e1e")&&n(i,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},9062:function(e,t,r){!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n="undefined"!=typeof window?window.HTMLElement:Object,i={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(e){if(this.isActive&&e.target!==this.$el&&!this.$el.contains(e.target)){var t=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(e,t,r,n,i,a,o,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[t("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),t("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])},[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[t("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[t("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,c=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[t("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])},[],!1,null,null,null).exports,l=a({name:"vue-loading",mixins:[i],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var e=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(function(){var t;e.$destroy(),void 0!==(t=e.$el).remove?t.remove():t.parentNode.removeChild(t)},150))},keyPress:function(e){27===e.keyCode&&this.cancel()}},watch:{active:function(e){this.isActive=e}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:e.transition}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":e.isFullPage},style:{zIndex:this.zIndex},attrs:{tabindex:"0","aria-busy":e.isActive,"aria-label":"Loading"}},[r("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(t){return t.preventDefault(),e.cancel(t)}}}),r("div",{staticClass:"vld-icon"},[e._t("before"),e._t("default",[r(e.loader,{tag:"component",attrs:{color:e.color,width:e.width,height:e.height}})]),e._t("after")],2)])])},[],!1,null,null,null).exports,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=Object.assign({},t,n,{programmatic:!0}),o=new(e.extend(l))({el:document.createElement("div"),propsData:a}),s=Object.assign({},r,i);return Object.keys(s).map(function(e){o.$slots[e]=s[e]}),o}}};r(0),l.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=u(e,t,r);e.$loading=n,e.prototype.$loading=n},t.default=l}]).default})},"9ee9":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fromtrello"},[r("b-form",{staticClass:"vld-parent"},[r("loading",{attrs:{active:e.isLoading,"is-full-page":""},on:{"update:active":function(t){e.isLoading=t}}}),r("b-breadcrumb",{attrs:{items:e.bcItems}}),r("b-container",{attrs:{fluid:""}},[e.errors.length?r("p",[r("b",[e._v("Please correct the following error(s):")]),r("ul",e._l(e.errors,function(t){return r("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),r("b-card",{attrs:{"bg-variant":"light"}},[r("b-form-group",{attrs:{label:"Board","label-class":"text-md-left","label-cols":"3","label-for":"theBoardSelect"}},[r("b-form-select",{staticClass:"mb-3",attrs:{id:"theBoardSelect",options:e.boardNames,required:""},model:{value:e.theBoardName,callback:function(t){e.theBoardName=t},expression:"theBoardName"}})],1),r("b-form-group",{attrs:{label:"Persona","label-class":"text-md-left","label-cols":"3","label-for":"thePersonaSelect"}},[r("b-form-select",{staticClass:"mb-3",attrs:{id:"thePersonaSelect",options:e.personaNames,required:""},model:{value:e.thePersonaName,callback:function(t){e.thePersonaName=t},expression:"thePersonaName"}})],1)],1)],1),r("b-container",{attrs:{fluid:""}},[r("b-form-row",[r("b-col",{attrs:{md:"4","offset-md":"5"}},[r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onImport}},[e._v("Import")]),r("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)],1)},i=[],a=(r("7f7f"),r("28a5"),r("ac6a"),r("9062")),o=r.n(a),s=(r("e40d"),r("bc3a")),c=r.n(s),l=r("61da"),u={computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Trello Import",to:{name:"fromtrello"}}]}},components:{Loading:o.a},data:function(){return{errors:[],isLoading:!1,theBoardName:"",thePersonaName:"",boardNames:[],personaNames:[]}},methods:{checkForm:function(){return this.errors=[],0==this.theBoardName.length&&this.errors.push("Board name is required"),0==this.thePersonaName.length&&this.errors.push("Persona name is required"),!this.errors.length},onImport:function(e){e.preventDefault(),this.checkForm()&&(this.isLoading=!0,this.importBoard())},onCancel:function(e){e.preventDefault(),this.isLoading=!1,this.$router.push({name:"home"})},containsReserved:function(e){for(var t=[34,35,36,37,39,42,47,51,60,62,63,92,95,96],r=0;r<e.length;r++){var n=e[r].charCodeAt(0);if(-1!=t.indexOf(n))return!0;if(n>127)return!0}return!1},importBoard:function(){var e=this,t=["activities","aptitudes","attitudes","motivations","skills","intrinsic","contextual"],r=["grounds","warrant","rebuttal"];Trello.get("/boards/"+this.theBoardName+"/lists",function(n){e.isLoading=!0,n.forEach(function(n){var i=n.name.split(":"),a=i[1].trim();if(-1!=t.indexOf(a)){var o={thePersonaName:e.thePersonaName,theModQual:"Perhaps",theVariable:a,theName:i[0].trim(),theCharacteristicSynopsis:{theActor:"",theSynopsis:"",theDimension:"",theActorType:""},theGrounds:[],theWarrant:[],theRebuttal:[],theBacking:[]};Trello.get("/lists/"+n.id+"/cards",function(t){t.forEach(function(t){var n=t.name;e.containsReserved(n)&&e.errors.push(n+" contains a reserved or non-ASCII character");var i=t.desc;""==i&&(i=n),e.containsReserved(i)&&e.errors.push("Card description "+i+" contains a reserved or non-ASCII character"),0==t.labels.length&&e.errors.push("No card labels set.  Permissable values: grounds, warrant, rebuttal");var a=t.labels[0].name;-1==r.indexOf(a)&&e.errors.push("Card label "+a+" is invalid.  Permissable values: grounds, warrant, rebuttal");var s={theCharacteristicType:a,theDimensionName:"document",theReferenceName:n,theReferenceDescription:i};"warrant"==s.theCharacteristicType?o.theWarrant.push(s):"rebuttal"==s.theCharacteristicType?o.theRebuttal.push(s):o.theGrounds.push(s)}),0==e.errors.length&&c.a.post(e.$store.state.url+"/api/persona_characteristics",{session_id:e.$store.state.session,object:o}).then(function(t){l["a"].$emit("operation-success","Imported persona characteristic: "+o.theName),e.isLoading=!1}).catch(function(t){l["a"].$emit("operation-failure",t),e.isLoading=!1})}),e.$router.push({name:"home"})}else e.errors.push(a+" is an invalid behavioural variable.  Permissable values: activities, aptitudes, attitudes, motivations, skills, intrinsic, contextual")})})},postReference:function(e,t){var r={name:e.theName,desc:e.theExcerpt,due:null};Trello.post("/lists/"+t+"/cards",r,function(){})}},mounted:function(){var e=this;Trello.authorize({type:"popup",name:"CAIRIS",scope:{read:"true",write:"true"},expiration:"never",success:function(){Trello.get("/members/me/boards",function(t){e.boardNames=t.map(function(e){return{text:e.name,value:e.id}}),c.a.get("/api/dimensions/table/persona",{baseURL:e.$store.state.url,params:{session_id:e.$store.state.session}}).then(function(t){e.personaNames=t.data}).catch(function(e){l["a"].$emit("operation-failure",e)})})},error:function(){l["a"].$emit("operation-failure","Authentication failed")}})}},d=u,f=r("2877"),h=Object(f["a"])(d,n,i,!1,null,null,null);t["default"]=h.exports},aae3:function(e,t,r){var n=r("d3f4"),i=r("2d95"),a=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},ac6a:function(e,t,r){for(var n=r("cadf"),i=r("0d58"),a=r("2aba"),o=r("7726"),s=r("32e9"),c=r("84f2"),l=r("2b4c"),u=l("iterator"),d=l("toStringTag"),f=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),m=0;m<p.length;m++){var v,g=p[m],b=h[g],y=o[g],x=y&&y.prototype;if(x&&(x[u]||s(x,u,f),x[d]||s(x,d,g),c[g]=f,b))for(v in n)x[v]||a(x,v,n[v],!0)}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},e40d:function(e,t,r){}}]);
//# sourceMappingURL=chunk-5f75f478.e620a441.js.map