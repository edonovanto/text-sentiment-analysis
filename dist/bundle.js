!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)})(n)}function c(n,t,e){return(c=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=u(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._shadowRoot.innerHTML='\n    <style>\n    .search-container {\n      max-width: 800px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      padding: 16px;\n      border-radius: 5px;\n      display: flex;\n      position: sticky;\n      top: 10px;\n      background-color: white;\n  }\n  \n  .search-container > input {\n      width: 80%;\n      padding: 16px;\n      border: 0;\n      border-bottom: 1px solid #262626;\n      font-size : 20px;\n      font-style: italic;\n      font-family : \'Tangerine\';\n  }\n  \n  .search-container > input:focus {\n      outline: 0;\n      border-bottom: 2px solid #262626;\n  }\n  \n  .search-container > input:focus::placeholder {\n      font-weight: bold;\n  }\n  \n  .search-container >  input::placeholder {\n      color: #262626;\n      font-weight: normal;\n  }\n  \n  .search-container > button {\n      border-radius: 25px;\n      width: 18%;\n      cursor: pointer;\n      margin-left: auto;\n      padding: 16px;\n      background-color: #414141;\n      color: white;\n      border: 0;\n      text-transform: uppercase;\n  }\n  \n  @media screen and (max-width: 550px){\n      .search-container {\n          flex-direction: column;\n          position: static;\n      }\n  \n      .search-container > input {\n          width: 100%;\n          margin-bottom: 12px;\n      }\n  \n      .search-container > button {\n          width: 100%;\n      }\n  }\n    </style>\n\n    <div id="search-container" class="search-container">\n      <input placeholder="Your caption here..." id="searchElement" type="search">\n      <button id="searchButtonElement" type="submit">Search</button>\n    </div>\n        ',this._shadowRoot.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this._shadowRoot.querySelector("#searchElement").value}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("search-bar",f)},function(n,t,e){var r=e(2),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),c=[];function u(n){for(var t=-1,e=0;e<c.length;e++)if(c[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],l=e[a]||0,f="".concat(a," ").concat(l);e[a]=l+1;var s=u(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:f,updater:b(p,t),references:1}),r.push(f)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var f,s=(f=[],function(n,t){return f[n]=t,f.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(i,c[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var y=null,h=0;function b(n,t){var e,r,o;if(t.singleton){var i=h++;e=y||(y=l(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=u(e[r]);c[o].references--}for(var i=a(n,t),l=0;l<e.length;l++){var f=u(e[l]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}e=i}}}},function(n,t,e){(t=e(4)(!1)).push([n.i,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;\r\n}\r\n\r\nmain {\r\n  width: 90%;\r\n  max-width: 800px;\r\n  margin: 32px auto;\r\n}\r\n\r\n.logo {\r\n  margin: 20px;\r\n  margin-bottom: 0;\r\n  max-width: 200px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n',""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(c=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var c,u,a;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<n.length;u++){var a=[].concat(n[u]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),t.push(a))}},t}},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)})(n)}function c(n,t,e){return(c=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=u(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n\n    <style>\n\n      .placeholder {\n        font-weight: lighter;\n        color: rgba(0,0,0,0.5);\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n     }\n\n      .result {\n        text-align : center;\n      }\n\n    </style>\n\n    <div class="result">\n    <h2 class="placeholder">'.concat(this._result,"</h2>\n    </div>\n      ")}},{key:"renderError",value:function(n){this.shadowDOM.innerHTML="",this.shadowDOM.innerHTML+='\n\n    <style>\n\n    .placeholder {\n        font-weight: lighter;\n        color: rgba(0,0,0,0.5);\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        text-align : center;\n     }\n\n    </style>\n\n        <h2 class="placeholder">'.concat(n,"</h2>\n     ")}},{key:"result",set:function(n){this._result=n,this.render()}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("text-result",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)})(n)}function c(n,t,e){return(c=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return(a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=u(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._shadowRoot.innerHTML="\n    \n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n         }\n         \n          :host {\n            display: block;\n            width: 100%;\n            color: #262626;\n            text-align: center;\n          }\n    \n          h2 {\n            font-size: 55px;\n            font-family: 'Merriweather', serif;\n            padding: 16px;\n            padding-top: 0;\n            padding-bottom: 0;\n          }\n\n          p{\n            padding : 3px 20px 0px 20px;\n          }\n\n        </style>\n        \n        <h2>Sentiment Analysis</h2>\n        <p>-Analyze your caption before upload it to social media!-</p>\n        "}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("app-bar",f)},function(n,t,e){"use strict";e.r(t);e(1);function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var o=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,o;return t=n,o=[{key:"analyzeText",value:function(n){if(!n)return Promise.reject("Please insert the text to analyze");var t=new Headers;t.append("api-key","24e57c9d-60f6-43f4-bf47-71d833c9a1dc");var e=new FormData;return e.append("text","".concat(n)),fetch("https://api.deepai.org/api/sentiment-analysis",{method:"POST",headers:t,body:e,redirect:"follow"}).then((function(n){return n.json()})).then((function(n){return console.log(n.output),Promise.resolve(n.output)})).catch((function(n){return Promise.reject(n)}))}}],(e=null)&&r(t.prototype,e),o&&r(t,o),n}(),i=(e(0),e(5),function(){var n=document.querySelector("search-bar"),t=document.querySelector("text-result"),e=function(n){t.result=n},r=function(n){t.renderError(n)};n.clickEvent=function(){o.analyzeText(n.value).then(e).catch(r)}});e(6);document.addEventListener("DOMContentLoaded",i)}]);