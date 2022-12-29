(()=>{var n={426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),c=t.n(i),a=t(667),s=t.n(a),d=new URL(t(88),t.b),l=c()(r()),u=s()(d);l.push([n.id,"* {\n    font-family: 'Playfair Display', serif;\n}\n\nhtml { \n    background: url("+u+') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n}\n\nbutton {\n    padding: 0;\n}\n\nbutton:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n#content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.divlayer {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header {\n    width: 100%;\n    height: 18%;\n    display: grid;\n    grid-template-columns: 1fr 11% 11% 11% 1fr;\n    grid-template-rows: 2fr 1fr;\n    justify-items: center;\n}\n\n.header:before {\n    content: "before";\n    top: 0px;\n    right: 0px;\n    left: 0px;\n    bottom: 82%;\n    opacity: 0.8;\n    background-color: black;\n    position: absolute;\n}\n\n.caramenotitle {\n    margin: 0;\n    color: white;\n    font-size: 5rem;\n    z-index: 2;\n    position: relative;\n    grid-column: 2 / 5;\n    grid-row: 1 / 1;\n    line-height: 5.3rem;\n}\n\n.homeButton {\n    grid-column: 2 / 2;\n    grid-row: 2 / 2;\n    z-index: 2;\n    border: none;\n    background-color: inherit;\n    font-size: 2.5rem;\n    color: white;\n    line-height: 6rem;\n}\n\n.menuButton {\n    grid-column: 3 / 3;\n    grid-row: 2 / 2;\n    z-index: 2;\n    border: none;\n    background-color: inherit;\n    font-size: 2.5rem;\n    color: white;\n    line-height: 6rem;\n}\n\n.contactButton {\n    grid-column: 4 / 4;\n    grid-row: 2 / 2;\n    z-index: 2;\n    border: none;\n    background-color: inherit;\n    font-size: 2.5rem;\n    color: white;\n    line-height: 6rem;\n}\n\n.middlediv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 33%;\n    height: 72%;\n    background-color: black;\n    opacity: 0.8;\n    border-radius: 4%;\n}\n\n.uptext {\n    color: white;\n    margin: 0;\n    padding: 1.5rem;\n    padding-bottom: 0;\n    font-size: 1.5rem;\n    text-align: center;\n    line-height: 1.5;\n}\n\n.homepicture {\n    height: 49%;\n    width: 77%;\n    border-radius: 11%;\n}\n\n.downtext {\n    color: white;\n    margin: 0;\n    font-size: 1.5rem;\n    padding-bottom: 5%;\n}\n\n.contacttext {\n    color: white;\n    margin: 0;\n    text-align: center;\n    font-size: 2.3rem;\n}\n\n#map {\n    height: 50%; \n    width: 80%; \n  }\n\n.footer {\n    width: 100%;\n    height: 4%;\n}\n\n.footer::before {\n    content: "before";\n    top: 96%;\n    right: 0px;\n    left: 0px;\n    bottom: 0;\n    opacity: 0.8;\n    background-color: black;\n    position: absolute;\n}\n\n.footertext {\n    margin: 0;\n    color: white;\n    font-size: 1.2rem;\n    text-align: center;\n    z-index: 2;\n    position: relative;\n}',""]);const p=l},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},c=[],a=0;a<n.length;a++){var s=n[a],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=t(i[c]);e[a].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},83:()=>{console.log("menu!")},88:(n,e,t)=>{"use strict";n.exports=t.p+"2a9dd8fa36dfe18fea58.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";function n(){const e={lat:29.331791626907243,lng:85.60751347831386},t=new google.maps.Map(document.getElementById("map"),{zoom:7,center:e});new google.maps.Marker({position:e,map:t}),window.initMap=n}t(83);var e=t(379),o=t.n(e),r=t(795),i=t.n(r),c=t(569),a=t.n(c),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),m=t.n(p),h=t(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals,function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("divlayer"),n.appendChild(e);const t=document.createElement("div");t.classList.add("header"),e.appendChild(t);const o=document.createElement("div");o.classList.add("middlediv"),e.appendChild(o);const r=document.createElement("div");r.classList.add("footer"),e.appendChild(r);const i=document.createElement("p");i.innerText="Carameno",i.classList.add("caramenotitle"),t.appendChild(i);const c=document.createElement("p");c.innerText="Copyright Ⓒ 2022 hebiscus",c.classList.add("footertext"),r.appendChild(c);const a=document.createElement("button");a.classList.add("homeButton"),a.innerText="Home",t.appendChild(a);const s=document.createElement("button");s.classList.add("menuButton"),s.innerText="Menu",t.appendChild(s);const d=document.createElement("button");d.classList.add("contactButton"),d.innerText="Contact",t.appendChild(d)}(),function(){const n=document.querySelector(".homeButton"),e=document.querySelector(".middlediv");n.addEventListener("click",(function(){!function(){const n=document.createElement("p");n.classList.add("uptext"),n.innerText="Our traditional French style breakfasts have been the backbone of our success. With a commitment to our community and the focus on total guest satisfaction we have been able to provide not only a great food product, but a great overall experience as well.",e.appendChild(n);const t=document.createElement("img");t.classList.add("homepicture"),t.src="../src/homepicture.jpg",e.appendChild(t);const o=document.createElement("p");o.classList.add("downtext"),o.innerText="Contact us for reservation!",e.appendChild(o)}()}))}(),function(){const e=document.querySelector(".contactButton"),t=document.querySelector(".middlediv");e.addEventListener("click",(function(){!function(){t.style.justifyContent="space-evenly";const e=document.createElement("p");e.classList.add("contacttext"),e.innerText="Dont contact us under:\n      +392 048 604\n      Saga County, Shigatse, Tibet, China",t.appendChild(e);const o=document.createElement("div");o.setAttribute("id","map"),t.appendChild(o),n()}()}))}()})()})();