(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ab66035"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var i,c,o=String(a(t)),u=n(r),l=o.length;return u<0||u>=l?e?"":void 0:(i=o.charCodeAt(u),i<55296||i>56319||u+1===l||(c=o.charCodeAt(u+1))<56320||c>57343?e?o.charAt(u):i:e?o.slice(u,u+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),i=r("79e5"),c=r("be13"),o=r("2b4c"),u=r("520a"),l=o("species"),s=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var v=o(e),d=!i(function(){var t={};return t[v]=function(){return 7},7!=""[e](t)}),p=d?!i(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[v](""),!t}):void 0;if(!d||!p||"replace"===e&&!s||"split"===e&&!f){var h=/./[v],x=r(c,v,""[e],function(e,t,r,n,a){return t.exec===u?d&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),g=x[0],b=x[1];n(String.prototype,e,g),a(RegExp.prototype,v,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),a=r("cb7c"),i=r("ebd6"),c=r("0390"),o=r("9def"),u=r("5f1b"),l=r("520a"),s=r("79e5"),f=Math.min,v=[].push,d="split",p="length",h="lastIndex",x=4294967295,g=!s(function(){RegExp(x,"y")});r("214f")("split",2,function(e,t,r,s){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var i,c,o,u=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,d=void 0===t?x:t>>>0,g=new RegExp(e.source,s+"g");while(i=l.call(g,a)){if(c=g[h],c>f&&(u.push(a.slice(f,i.index)),i[p]>1&&i.index<a[p]&&v.apply(u,i.slice(1)),o=i[0][p],f=c,u[p]>=d))break;g[h]===i.index&&g[h]++}return f===a[p]?!o&&g.test("")||u.push(""):u.push(a.slice(f)),u[p]>d?u.slice(0,d):u}:"0"[d](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):b.call(String(a),r,n)},function(e,t){var n=s(b,e,this,t,b!==r);if(n.done)return n.value;var l=a(e),v=String(this),d=i(l,RegExp),p=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),m=new d(g?l:"^(?:"+l.source+")",h),y=void 0===t?x:t>>>0;if(0===y)return[];if(0===v.length)return null===u(m,v)?[v]:[];var w=0,E=0,R=[];while(E<v.length){m.lastIndex=g?E:0;var S,k=u(m,g?v:v.slice(E));if(null===k||(S=f(o(m.lastIndex+(g?0:E)),v.length))===w)E=c(v,E,p);else{if(R.push(v.slice(w,E)),R.length===y)return R;for(var C=1;C<=k.length-1;C++)if(R.push(k[C]),R.length===y)return R;E=w=S}}return R.push(v.slice(w)),R}]})},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,o="lastIndex",u=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[o]||0!==t[o]}(),l=void 0!==/()??/.exec("")[1],s=u||l;s&&(c=function(e){var t,r,c,s,f=this;return l&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),u&&(t=f[o]),c=a.call(f,e),u&&c&&(f[o]=f.global?c.index+c[0].length:t),l&&c&&c.length>1&&i.call(c[0],r,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)}),c}),e.exports=c},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},a481:function(e,t,r){"use strict";var n=r("cb7c"),a=r("4bf8"),i=r("9def"),c=r("4588"),o=r("0390"),u=r("5f1b"),l=Math.max,s=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,function(e,t,r,h){return[function(n,a){var i=e(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,i,a):r.call(String(i),n,a)},function(e,t){var a=h(r,e,this,t);if(a.done)return a.value;var f=n(e),v=String(this),d="function"===typeof t;d||(t=String(t));var g=f.global;if(g){var b=f.unicode;f.lastIndex=0}var m=[];while(1){var y=u(f,v);if(null===y)break;if(m.push(y),!g)break;var w=String(y[0]);""===w&&(f.lastIndex=o(v,i(f.lastIndex),b))}for(var E="",R=0,S=0;S<m.length;S++){y=m[S];for(var k=String(y[0]),C=l(s(c(y.index),v.length),0),$=[],V=1;V<y.length;V++)$.push(p(y[V]));var I=y.groups;if(d){var A=[k].concat($,C,v);void 0!==I&&A.push(I);var T=String(t.apply(void 0,A))}else T=x(k,v,C,$,I,t);C>=R&&(E+=v.slice(R,C)+T,R=C+k.length)}return E+v.slice(R)}];function x(e,t,n,i,c,o){var u=n+e.length,l=i.length,s=d;return void 0!==c&&(c=a(c),s=v),r.call(o,s,function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(u);case"<":o=c[a.slice(1,-1)];break;default:var s=+a;if(0===s)return r;if(s>l){var v=f(s/10);return 0===v?r:v<=l?void 0===i[v-1]?a.charAt(1):i[v-1]+a.charAt(1):r}o=i[s-1]}return void 0===o?"":o})}})},aae3:function(e,t,r){var n=r("d3f4"),a=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c58f:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[r("v-card",[r("v-card-title",[r("h1",[e._v("Remove Empty Lines")])]),r("v-card-text",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-textarea",{attrs:{placeholder:"Paste your text here"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),r("v-flex",{attrs:{xs6:""}},[r("v-textarea",{attrs:{placeholder:"Result"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.remove()}}},[e._v("Remove")])],1),r("actions",{attrs:{result:e.result}})],1)],1)],1)],1)},a=[],i=(r("a481"),r("28a5"),{data:function(){return{text:"",result:""}},methods:{remove:function(){var e=this.text.split("\n");this.result=e.filter(function(e){return""!==e.replace(/ /gi,"")}).join("\n")}}}),c=i,o=r("2877"),u=r("6544"),l=r.n(u),s=r("8336"),f=r("b0af"),v=r("99d9"),d=r("12b2"),p=r("a523"),h=r("0e8f"),x=r("a722"),g=r("a844"),b=Object(o["a"])(c,n,a,!1,null,null,null);t["default"]=b.exports;l()(b,{VBtn:s["a"],VCard:f["a"],VCardText:v["b"],VCardTitle:d["a"],VContainer:p["a"],VFlex:h["a"],VLayout:x["a"],VTextarea:g["a"]})}}]);
//# sourceMappingURL=chunk-5ab66035.323fc976.js.map