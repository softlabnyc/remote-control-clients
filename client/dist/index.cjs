function t(n){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(n)}function n(t,e){return n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},n(t,e)}function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function o(t,r,c){return o=e()?Reflect.construct:function(t,e,o){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return o&&n(c,o.prototype),c},o.apply(null,arguments)}function r(e){var c="function"==typeof Map?new Map:void 0;return r=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==c){if(c.has(e))return c.get(e);c.set(e,r)}function r(){return o(e,arguments,t(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),n(r,e)},r(e)}var c=/*#__PURE__*/function(t){var e,o;function r(n){var e;return(e=t.call(this)||this).url=void 0,e.ws=void 0,e.url=n,e.addEventListener("message",function(t){return console.log(t)}),e}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,n(e,o);var c=r.prototype;return c.connect=function(t){var n=this;this.ws=new WebSocket(this.url),this.ws.onopen=function(t){var e=new Event("open");n.dispatchEvent(e)},this.ws.onclose=function(t){var e=new CloseEvent("close",{code:t.code});n.dispatchEvent(e)},this.ws.onmessage=function(t){var e=new MessageEvent("message",{data:t.data});n.dispatchEvent(e)},this.ws.onerror=function(t){n.dispatchEvent(t)};var e=new Event("connecting");this.dispatchEvent(e)},c.sendValue=function(t,n,e){var o;null==(o=this.ws)||o.send(JSON.stringify({name:t,value:n}))},c.on=function(t,n,e){return this.addEventListener(t,n,e)},c.off=function(t,n,e){return this.removeEventListener(t,n,e)},r}(/*#__PURE__*/r(EventTarget));exports.TouchControlClient=c;
//# sourceMappingURL=index.cjs.map
