(function(e){function n(n){for(var t,a,u=n[0],d=n[1],i=n[2],s=0,l=[];s<u.length;s++)a=u[s],r[a]&&l.push(r[a][0]),r[a]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);f&&f(n);while(l.length)l.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,n=0;n<o.length;n++){for(var c=o[n],t=!0,a=1;a<c.length;a++){var u=c[a];0!==r[u]&&(t=!1)}t&&(o.splice(n--,1),e=d(d.s=c[0]))}return e}var t={},a={app:0},r={app:0},o=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-3a07718f":"df562f43","chunk-ae2c9502":"d167408f","chunk-1c31c6f2":"2f8c330b","chunk-23ee9f1c":"8ecab3ee","chunk-2d0a3e2b":"cbaaa51a","chunk-2d0aba3e":"90588567","chunk-2d0b1fb6":"799c49a9","chunk-2d0ba4ea":"eccd2d0d","chunk-2d0de536":"80c57110","chunk-2d0e19ff":"3195dba0","chunk-2d0e1f07":"efbd7e88","chunk-2d216b25":"49e6dcac","chunk-2d2254c3":"a6568269","chunk-2d22c6d6":"5b9aa25d","chunk-3102dff4":"94e294e5","chunk-3d9a5ac2":"6d977adf","chunk-411ac7ce":"b3939744","chunk-41eb650f":"499bb1c3","chunk-42014d39":"756dfe89","chunk-4a3a2b7d":"d5f70819","chunk-5439d343":"7f613250","chunk-5ab66035":"323fc976","chunk-5e8d9051":"bc99c489","chunk-913afa92":"d1fedf9a","chunk-cd252ab0":"d4b94438","chunk-d881fffc":"f270f6c7"}[e]+".js"}function d(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,d),c.l=!0,c.exports}d.e=function(e){var n=[],c={"chunk-3a07718f":1,"chunk-ae2c9502":1,"chunk-1c31c6f2":1};a[e]?n.push(a[e]):0!==a[e]&&c[e]&&n.push(a[e]=new Promise(function(n,c){for(var t="css/"+({}[e]||e)+"."+{"chunk-3a07718f":"a6ace10d","chunk-ae2c9502":"9384723b","chunk-1c31c6f2":"21fbd315","chunk-23ee9f1c":"31d6cfe0","chunk-2d0a3e2b":"31d6cfe0","chunk-2d0aba3e":"31d6cfe0","chunk-2d0b1fb6":"31d6cfe0","chunk-2d0ba4ea":"31d6cfe0","chunk-2d0de536":"31d6cfe0","chunk-2d0e19ff":"31d6cfe0","chunk-2d0e1f07":"31d6cfe0","chunk-2d216b25":"31d6cfe0","chunk-2d2254c3":"31d6cfe0","chunk-2d22c6d6":"31d6cfe0","chunk-3102dff4":"31d6cfe0","chunk-3d9a5ac2":"31d6cfe0","chunk-411ac7ce":"31d6cfe0","chunk-41eb650f":"31d6cfe0","chunk-42014d39":"31d6cfe0","chunk-4a3a2b7d":"31d6cfe0","chunk-5439d343":"31d6cfe0","chunk-5ab66035":"31d6cfe0","chunk-5e8d9051":"31d6cfe0","chunk-913afa92":"31d6cfe0","chunk-cd252ab0":"31d6cfe0","chunk-d881fffc":"31d6cfe0"}[e]+".css",r=d.p+t,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===t||s===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],s=i.getAttribute("data-href");if(s===t||s===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var t=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete a[e],f.parentNode.removeChild(f),c(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){a[e]=0}));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,c){t=r[e]=[n,c]});n.push(t[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=u(e),i=function(n){s.onerror=s.onload=null,clearTimeout(l);var c=r[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+t+": "+a+")");o.type=t,o.request=a,c[1](o)}r[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},d.m=e,d.c=t,d.d=function(e,n,c){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)d.d(c,t,function(n){return e[n]}.bind(null,t));return c},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=s;o.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("56d7")},"56d7":function(e,n,c){"use strict";c.r(n);c("cadf"),c("551c"),c("f751"),c("097d");var t=c("2b0e"),a=c("bb71");c("da64");t["a"].use(a["a"],{iconfont:"md"});var r=function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("v-app",[c("v-toolbar",{attrs:{color:"indigo",dark:"",app:"",fixed:""}},[c("v-toolbar-side-icon",{on:{click:function(n){return e.$router.push("/")}}},[c("v-icon",[e._v("home")])],1),c("v-toolbar-title",{staticClass:"font-weight-light",on:{click:function(n){return e.$router.push("/")}}},[e._v("String Tools")])],1),c("v-content",[c("v-container",{attrs:{fluid:""}},[c("router-view")],1)],1)],1)},o=[],u={data:function(){return{drawer:!1}}},d=u,i=c("2877"),s=c("6544"),l=c.n(s),f=c("7496"),h=c("a523"),k=c("549c"),p=c("132d"),m=c("71d9"),v=c("706c"),b=c("2a7f"),g=Object(i["a"])(d,r,o,!1,null,null,null),x=g.exports;l()(g,{VApp:f["a"],VContainer:h["a"],VContent:k["a"],VIcon:p["a"],VToolbar:m["a"],VToolbarSideIcon:v["a"],VToolbarTitle:b["a"]});c("b54a");var y=c("8c4f"),w=(c("a250"),c("9f21"));function C(e){return function(){return c("9dac")("./".concat(e))}}t["a"].use(y["a"]);var T=w["a"].map(function(e){return{path:e.link,component:C(e.component)}}),E=new y["a"]({mode:"history",base:"/",routes:[{path:"/",component:C("index")}]});E.addRoutes(T);var _=E,S=c("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var O=function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("v-flex",{attrs:{xs12:""}},[c("v-btn",{attrs:{color:"success"},on:{click:function(n){return e.cpy(e.result)}}},[e._v("Copy")]),c("v-btn",{attrs:{color:"error"},on:{click:function(n){return e.download(e.result)}}},[e._v("Download")]),c("v-snackbar",{attrs:{color:"success",timeout:3e3},model:{value:e.snackbar,callback:function(n){e.snackbar=n},expression:"snackbar"}},[e._v("\n    Copy successful\n    "),c("v-btn",{attrs:{dark:"",flat:""},on:{click:function(n){e.snackbar=!1}}},[e._v("Close")])],1)],1)},A=[],L={props:["result"],data:function(){return{snackbar:!1}},methods:{cpy:function(e){this.copy(e),this.snackbar=!0}}},j=L,P=c("8336"),R=c("0e8f"),N=c("2db4"),V=Object(i["a"])(j,O,A,!1,null,null,null),B=V.exports;l()(V,{VBtn:P["a"],VFlex:R["a"],VSnackbar:N["a"]}),t["a"].component("Actions",B),t["a"].config.productionTip=!1,t["a"].mixin({methods:{copy:function(e){var n=document.createElement("input");n.value=e,n.id="inp",document.body.appendChild(n);var c=document.getElementById("inp");c.select(),document.execCommand("copy"),c.remove()},download:function(e){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download","result.txt"),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}}),new t["a"]({router:_,render:function(e){return e(x)}}).$mount("#app")},"9dac":function(e,n,c){var t={"./":["1e4b","chunk-3a07718f"],"./add-prefix-suffix-to-lines":["d99c","chunk-ae2c9502","chunk-d881fffc"],"./add-prefix-suffix-to-lines.vue":["d99c","chunk-ae2c9502","chunk-d881fffc"],"./base-64-encode-decode":["e497","chunk-ae2c9502","chunk-2d2254c3"],"./base-64-encode-decode.vue":["e497","chunk-ae2c9502","chunk-2d2254c3"],"./binary-text-converter":["3799","chunk-ae2c9502","chunk-cd252ab0"],"./binary-text-converter.vue":["3799","chunk-ae2c9502","chunk-cd252ab0"],"./calculate-string-length":["03a3","chunk-ae2c9502","chunk-2d0a3e2b"],"./calculate-string-length.vue":["03a3","chunk-ae2c9502","chunk-2d0a3e2b"],"./case-converter":["45ad","chunk-ae2c9502","chunk-23ee9f1c"],"./case-converter.vue":["45ad","chunk-ae2c9502","chunk-23ee9f1c"],"./create-palindrome-string":["84bf","chunk-ae2c9502","chunk-2d0de536"],"./create-palindrome-string.vue":["84bf","chunk-ae2c9502","chunk-2d0de536"],"./escape-unscape-html":["7adc","chunk-ae2c9502","chunk-2d0e19ff"],"./escape-unscape-html.vue":["7adc","chunk-ae2c9502","chunk-2d0e19ff"],"./find-and-replace-text":["d4b8","chunk-ae2c9502","chunk-411ac7ce"],"./find-and-replace-text.vue":["d4b8","chunk-ae2c9502","chunk-411ac7ce"],"./hex-text-converter":["ffe7","chunk-ae2c9502","chunk-4a3a2b7d"],"./hex-text-converter.vue":["ffe7","chunk-ae2c9502","chunk-4a3a2b7d"],"./index":["1e4b","chunk-3a07718f"],"./index.vue":["1e4b","chunk-3a07718f"],"./occurrence-counter":["54c3","chunk-ae2c9502","chunk-3102dff4"],"./occurrence-counter.vue":["54c3","chunk-ae2c9502","chunk-3102dff4"],"./random-line-picker":["9656","chunk-ae2c9502","chunk-5439d343"],"./random-line-picker.vue":["9656","chunk-ae2c9502","chunk-5439d343"],"./random-string-generator":["3cc0","chunk-ae2c9502","chunk-3d9a5ac2"],"./random-string-generator.vue":["3cc0","chunk-ae2c9502","chunk-3d9a5ac2"],"./remove-accents":["f2d8","chunk-ae2c9502","chunk-2d22c6d6"],"./remove-accents.vue":["f2d8","chunk-ae2c9502","chunk-2d22c6d6"],"./remove-duplicate-lines":["af33","chunk-ae2c9502","chunk-5e8d9051"],"./remove-duplicate-lines.vue":["af33","chunk-ae2c9502","chunk-5e8d9051"],"./remove-empty-lines":["c58f","chunk-ae2c9502","chunk-5ab66035"],"./remove-empty-lines.vue":["c58f","chunk-ae2c9502","chunk-5ab66035"],"./remove-extra-spaces":["311e","chunk-ae2c9502","chunk-41eb650f"],"./remove-extra-spaces.vue":["311e","chunk-ae2c9502","chunk-41eb650f"],"./remove-line-breaks":["c719","chunk-ae2c9502","chunk-42014d39"],"./remove-line-breaks.vue":["c719","chunk-ae2c9502","chunk-42014d39"],"./remove-lines-containing":["08a5","chunk-ae2c9502","chunk-1c31c6f2"],"./remove-lines-containing.vue":["08a5","chunk-ae2c9502","chunk-1c31c6f2"],"./reverse-text":["15ae","chunk-ae2c9502","chunk-2d0aba3e"],"./reverse-text.vue":["15ae","chunk-ae2c9502","chunk-2d0aba3e"],"./sort-lines":["83c0","chunk-ae2c9502","chunk-913afa92"],"./sort-lines.vue":["83c0","chunk-ae2c9502","chunk-913afa92"],"./strip-html-tags":["373c","chunk-ae2c9502","chunk-2d0ba4ea"],"./strip-html-tags.vue":["373c","chunk-ae2c9502","chunk-2d0ba4ea"],"./upside-down-text":["7d26","chunk-ae2c9502","chunk-2d0e1f07"],"./upside-down-text.vue":["7d26","chunk-ae2c9502","chunk-2d0e1f07"],"./url-encode-decode":["21bc","chunk-ae2c9502","chunk-2d0b1fb6"],"./url-encode-decode.vue":["21bc","chunk-ae2c9502","chunk-2d0b1fb6"],"./word-counter":["c420","chunk-ae2c9502","chunk-2d216b25"],"./word-counter.vue":["c420","chunk-ae2c9502","chunk-2d216b25"]};function a(e){var n=t[e];return n?Promise.all(n.slice(1).map(c.e)).then(function(){var e=n[0];return c(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}a.keys=function(){return Object.keys(t)},a.id="9dac",e.exports=a},"9f21":function(e,n,c){"use strict";n["a"]=[{name:"Reverse Text",component:"reverse-text",link:"/reverse-text"},{name:"Word Counter",component:"word-counter",link:"/word-counter"},{name:"Create Palindrome String",component:"create-palindrome-string",link:"/create-palindrome-string"},{name:"Upside Down Text",component:"upside-down-text",link:"/upside-down-text"},{name:"Case Converter",component:"case-converter",link:"/case-converter"},{name:"Remove Duplicate Lines",component:"remove-duplicate-lines",link:"/remove-duplicate-lines"},{name:"Sort Lines",component:"sort-lines",link:"/sort-lines"},{name:"Calculate String Length",component:"calculate-string-length",link:"/calculate-string-length"},{name:"Occurrence Counter",component:"occurrence-counter",link:"/occurrence-counter"},{name:"Find And Replace Text",component:"find-and-replace-text",link:"/find-and-replace-text"},{name:"Add Prefix/Suffix To Lines",component:"add-prefix-suffix-to-lines",link:"/add-prefix-suffix-to-lines"},{name:"Random Line Picker",component:"random-line-picker",link:"/random-line-picker"},{name:"Strip HTML Tags",component:"strip-html-tags",link:"/strip-html-tags"},{name:"Binary Text Converter",component:"binary-text-converter",link:"/binary-text-converter"},{name:"Hex Text Converter",component:"hex-text-converter",link:"/hex-text-converter"},{name:"Random String Generator",component:"random-string-generator",link:"/random-string-generator"},{name:"Remove Accents",component:"remove-accents",link:"/remove-accents"},{name:"Remove Empty Lines",component:"remove-empty-lines",link:"/remove-empty-lines"},{name:"Remove Line Breaks",component:"remove-line-breaks",link:"/remove-line-breaks"},{name:"Remove Extra Spaces",component:"remove-extra-spaces",link:"/remove-extra-spaces"},{name:"Remove Lines Containing",component:"remove-lines-containing",link:"/remove-lines-containing"},{name:"Base64 Encode & Decode",component:"base-64-encode-decode",link:"/base-64-encode-decode"},{name:"URL Encode & Decode",component:"url-encode-decode",link:"/url-encode-decode"},{name:"Escape & Unscape HTML",component:"escape-unscape-html",link:"/escape-unscape-html"}]}});
//# sourceMappingURL=app.67a28556.js.map