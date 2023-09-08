/*! For license information please see 503.8b56b800.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{704:function(t,n,e){e.r(n),e.d(n,{ERROR_MSG:function(){return Ft},default:function(){return Rt}});var r=e(3433),o=e(5861),i=e(9439),a=e(2791),c=e(1243);function l(){l=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var i=n&&n.prototype instanceof v?n:v,a=Object.create(i.prototype),c=new S(r||[]);return o(a,"_invoke",{value:E(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",d="executing",g="completed",y={};function v(){}function x(){}function m(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==e&&r.call(j,a)&&(w=j);var k=m.prototype=v.prototype=Object.create(w);function Z(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function e(o,i,a,c){var l=f(t[o],t,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?n.resolve(u.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function E(n,e,r){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=O(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=f(n,e,r);if("normal"===s.type){if(o=r.done?g:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=g,r.method="throw",r.arg=s.arg)}}}function O(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,O(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return x.prototype=m,o(k,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:x,configurable:!0}),x.displayName=u(m,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},Z(L.prototype),u(L.prototype,c,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new L(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(k),u(k,s,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=G,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:G(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}var s,u=function(){var t=(0,o.Z)(l().mark((function t(n,e){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://647baa58d2e5b6101db18476.mockapi.io/adverts?page=".concat(n,"&limit=8"));case 2:if(404!==(r=t.sent).status){t.next=5;break}throw new Error("Something went wrong, please try again",r.status);case 5:return console.log(r.data),t.abrupt("return",r.data);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),h=e(7635),f=e(168),p=e(5867),d=["title","titleId"];function g(){return g=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},g.apply(this,arguments)}function y(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function v(t,n){var e=t.title,r=t.titleId,o=y(t,d);return a.createElement("svg",g({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),e?a.createElement("title",{id:r},e):null,s||(s=a.createElement("path",{d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.796A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.127 4.127 0 0 0 0-5.835Z"})))}var x,m,w,b,j,k,Z,L,E,O,P,_=a.forwardRef(v),S=(e.p,p.ZP.div(x||(x=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"])))),G=p.ZP.p(m||(m=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n  color: #121417;\n"]))),C=p.ZP.span(w||(w=(0,f.Z)(["\n  color: #3470ff;\n"]))),N=p.ZP.div(b||(b=(0,f.Z)(["\n  /* /* display: flex;\n  flex-wrap: wrap;\n  gap: 12px; */\n  margin-bottom: 28px;\n  /* overflow: hidden; */\n  /* text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2; */\n  /* -webkit-box-orient: vertical; */\n"]))),I=p.ZP.p(j||(j=(0,f.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: calc(18 / 12);\n  color: #121417;\n  opacity: 0.5;\n  /* overflow: hidden; */\n\n  &:not(:last-child)::after {\n    content: '';\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: #121417;\n    opacity: 0.1;\n    margin: 0 6px;\n    vertical-align: middle;\n  }\n"]))),T=p.ZP.div(k||(k=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 4px;\n"]))),z=p.ZP.div(Z||(Z=(0,f.Z)(["\n  display: flex;\n  /* overflow: hidden; */\n"]))),F=p.ZP.img(L||(L=(0,f.Z)(["\n  display: block;\n  border-radius: 14px;\n  height: 268px;\n  object-fit: cover;\n  margin-bottom: 14px;\n"]))),R=p.ZP.button(E||(E=(0,f.Z)(["\n  display: block;\n  padding: 12px;\n  width: 100%;\n  border-radius: 12px;\n  border: none;\n  background-color: #3470ff;\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 1.43;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 250ms;\n\n  &:hover {\n    background-color: #0b44cd;\n  }\n"]))),A=(0,p.ZP)(_)(O||(O=(0,f.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 18px;\n  height: 18px;\n  stroke: #fff;\n  stroke-opacity: 0.8;\n  stroke-width: 1.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n\n  &:hover,\n  &:focus {\n    fill: #3470ff;\n    stroke: #3470ff;\n  }\n"]))),M=e.p+"static/media/no-image-car.9a3ecb413e743c27d998.jpg",Y=e(7948),W=e.n(Y),q=["title","titleId"];function U(){return U=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},U.apply(this,arguments)}function B(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function D(t,n){var e=t.title,r=t.titleId,o=B(t,q);return a.createElement("svg",U({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),e?a.createElement("title",{id:r},e):null,P||(P=a.createElement("path",{d:"M18 6 6 18M6 6l12 12",stroke:"#121417",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})))}var H,J,K,Q,V,X,$,tt,nt,et,rt,ot,it,at,ct,lt=a.forwardRef(D),st=(e.p,p.ZP.div(H||(H=(0,f.Z)(["\n  position: relative;\n"])))),ut=p.ZP.img(J||(J=(0,f.Z)(["\n  display: block;\n  border-radius: 14px;\n  height: 248px;\n  object-fit: cover;\n  margin-bottom: 14px;\n"]))),ht=p.ZP.p(K||(K=(0,f.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n  color: #121417;\n  margin-bottom: 8px;\n"]))),ft=p.ZP.span(Q||(Q=(0,f.Z)(["\n  color: #3470ff;\n"]))),pt=p.ZP.div(V||(V=(0,f.Z)(["\n  margin-bottom: 14px;\n"]))),dt=p.ZP.p(X||(X=(0,f.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: calc(18 / 12);\n  color: #121417;\n  opacity: 0.5;\n\n  &:not(:last-child)::after {\n    content: '';\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: #121417;\n    opacity: 0.1;\n    margin: 0 6px;\n    vertical-align: middle;\n  }\n"]))),gt=p.ZP.div($||($=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 4px;\n"]))),yt=p.ZP.div(tt||(tt=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 24px;\n"]))),vt=p.ZP.p(nt||(nt=(0,f.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n  font-weight: 400;\n  color: #121417;\n  margin-bottom: 24px;\n"]))),xt=p.ZP.p(et||(et=(0,f.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n  font-weight: 500;\n  color: #121417;\n  margin-bottom: 8px;\n"]))),mt=p.ZP.div(rt||(rt=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n"]))),wt=p.ZP.p(ot||(ot=(0,f.Z)(["\n  background-color: #f9f9f9;\n  border-radius: 35px;\n  padding: 7px 14px;\n  color: #363535;\n  font-size: 12px;\n  line-height: 1.5;\n  font-weight: 400;\n"]))),bt=p.ZP.span(it||(it=(0,f.Z)(["\n  color: #3470ff;\n"]))),jt=p.ZP.a(at||(at=(0,f.Z)(["\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 12px 50px;\n  border-radius: 12px;\n  background-color: #3470ff;\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 600;\n  transition: all 250ms;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),kt=(0,p.ZP)(lt)(ct||(ct=(0,f.Z)(["\n  fill: #121417;\n  position: absolute;\n  top: -24px;\n  right: -24px;\n  width: 24px;\n  height: 24px;\n"]))),Zt=e(184),Lt={content:{position:"relative",maxWidth:"541px",height:"752px",padding:"40px",borderRadius:"24px",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};W().setAppElement("#root");var Et,Ot,Pt,_t=function(t){var n=t.isOpen,e=t.car,r=t.onClose;return console.log(e),(0,Zt.jsx)(W(),{isOpen:n,onRequestClose:r,style:Lt,contentLabel:"Example Modal",children:(0,Zt.jsxs)(st,{children:[(0,Zt.jsx)(ut,{src:e.img||M,alt:e.make,width:"461"}),(0,Zt.jsxs)(ht,{children:[e.make," ",(0,Zt.jsxs)(ft,{children:[e.model,","]})," ",e.year]}),(0,Zt.jsxs)(pt,{children:[(0,Zt.jsxs)(gt,{children:[(0,Zt.jsx)(dt,{children:e.address.split(",")[1]}),(0,Zt.jsx)(dt,{children:e.address.split(",")[2]}),(0,Zt.jsxs)(dt,{children:["id:",e.id]}),(0,Zt.jsxs)(dt,{children:["Year:",e.year]}),(0,Zt.jsxs)(dt,{children:[" Type:",e.type," "]})]}),(0,Zt.jsxs)(yt,{children:[(0,Zt.jsxs)(dt,{children:[" Fuel Consumption:",e.fuelConsumption," "]}),(0,Zt.jsxs)(dt,{children:["Engine Size:",e.engineSize]})]})]}),(0,Zt.jsx)(vt,{children:e.description}),(0,Zt.jsx)(xt,{children:"Accessories and functionalities:"}),(0,Zt.jsx)(gt,{children:e.accessories.map((function(t,n){return(0,Zt.jsx)(dt,{children:t},n)}))}),(0,Zt.jsx)(yt,{children:e.functionalities.map((function(t,n){return(0,Zt.jsx)(dt,{children:t},n)}))}),(0,Zt.jsx)(xt,{children:"Rental Conditions: "}),(0,Zt.jsxs)(mt,{children:[e.rentalConditions.split("\n").map((function(t,n){return(0,Zt.jsx)(wt,{children:t},n)})),(0,Zt.jsxs)(wt,{children:["Mileage:",(0,Zt.jsx)(bt,{children:parseInt(e.mileage).toLocaleString("en-US")})]}),(0,Zt.jsxs)(wt,{children:["Price: ",(0,Zt.jsx)(bt,{children:e.rentalPrice})]})]}),(0,Zt.jsx)(jt,{href:"tel:+380730000000",children:"Rental car"}),(0,Zt.jsx)(kt,{onClick:r})]})})},St=function(t){var n=t.car,e=(0,a.useState)(null),r=(0,i.Z)(e,2),o=r[0],c=r[1];return(0,Zt.jsxs)("div",{children:[(0,Zt.jsx)(F,{src:n.img||M,alt:n.make,width:"274px",height:"268px"}),(0,Zt.jsxs)(S,{children:[(0,Zt.jsxs)(G,{children:[n.make," ",(0,Zt.jsxs)(C,{children:[n.model,","]})," ",n.year]}),(0,Zt.jsx)(G,{children:n.rentalPrice})]}),(0,Zt.jsxs)(N,{children:[(0,Zt.jsxs)(T,{children:[(0,Zt.jsx)(I,{children:n.address.split(",")[1]}),(0,Zt.jsx)(I,{children:n.address.split(",")[2]}),(0,Zt.jsx)(I,{children:n.rentalCompany})]}),(0,Zt.jsxs)(z,{children:[(0,Zt.jsxs)(I,{children:[" ",n.type," "]}),(0,Zt.jsx)(I,{children:n.id}),(0,Zt.jsx)(I,{children:n.accessories[0]})]})]}),(0,Zt.jsx)(R,{type:"button",onClick:function(){return console.log("click",n,o),c(n)},children:"Learn more"}),(0,Zt.jsx)(A,{onClick:function(){console.log("click")}}),o&&(0,Zt.jsx)(_t,{car:o,isOpen:null!==o,onClose:function(){return c(null)}})]})},Gt=p.ZP.ul(Et||(Et=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n"]))),Ct=p.ZP.li(Ot||(Ot=(0,f.Z)(["\n  position: relative;\n  max-width: calc((100% - (29px * 3)) / 4);\n"]))),Nt=function(t){var n=t.cars;return(0,Zt.jsx)(Gt,{children:n.map((function(t){return(0,Zt.jsx)(Ct,{children:(0,Zt.jsx)(St,{car:t})},t.id)}))})},It=p.ZP.button(Pt||(Pt=(0,f.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  font-family: inherit;\n  text-decoration: underline;\n  font-size: 16px;\n  line-height: 1.5;\n  font-style: normal;\n  font-weight: 500;\n  color: #3470ff;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  transition: all 250ms;\n  text-align: center;\n\n  &:hover,\n  &:focus {\n    color: #0b44cd;\n    transform: scale(1.2);\n  }\n"]))),Tt=function(t){var n=t.onClick;return(0,Zt.jsx)(It,{type:"submit",onClick:n,children:"Load more"})};function zt(){zt=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),c=new _(r||[]);return o(a,"_invoke",{value:L(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=u;var f="suspendedStart",p="executing",d="completed",g={};function y(){}function v(){}function x(){}var m={};s(m,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==e&&r.call(b,a)&&(m=b);var j=x.prototype=y.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function Z(t,n){function e(o,i,a,c){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?n.resolve(u.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function L(n,e,r){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var s=h(n,e,r);if("normal"===s.type){if(o=r.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=d,r.method="throw",r.arg=s.arg)}}}function E(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,E(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:v,configurable:!0}),v.displayName=s(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},k(Z.prototype),s(Z.prototype,c,(function(){return this})),n.AsyncIterator=Z,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new Z(u(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(j),s(j,l,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=S,_.prototype={constructor:_,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:S(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}var Ft="Something went wrong, please try again",Rt=function(){var t=(0,a.useState)([]),n=(0,i.Z)(t,2),e=n[0],c=n[1],l=(0,a.useState)(!1),s=(0,i.Z)(l,2),f=s[0],p=s[1],d=(0,a.useState)(null),g=(0,i.Z)(d,2),y=g[0],v=g[1],x=(0,a.useState)(1),m=(0,i.Z)(x,2),w=m[0],b=m[1];return(0,a.useEffect)((function(){function t(){return(t=(0,o.Z)(zt().mark((function t(){var n;return zt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(!0),v(null),t.next=5,u(w);case 5:n=t.sent,c(1===w?n:function(t){return[].concat((0,r.Z)(t),(0,r.Z)(n))}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),v(Ft);case 12:return t.prev=12,p(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[w]),(0,Zt.jsxs)("div",{children:[y&&(0,Zt.jsxs)("h1",{children:[y," "]}),f&&(0,Zt.jsx)(h.a,{}),(0,Zt.jsx)(Nt,{cars:e}),e&&e.length>0&&(0,Zt.jsx)(Tt,{onClick:function(){b((function(t){return t+1}))}})]})}}}]);
//# sourceMappingURL=503.8b56b800.chunk.js.map