!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");function a(e){var n=e.position,o=e.delay,t=Math.random()>.3;return new Promise((function(e,i){setTimeout((function(){t?e({position:n,delay:o}):i({position:n,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=n.currentTarget.elements,t=o.delay,i=o.step,u=o.amount,l=Number(i.value),c=Number(u.value),d=Number(t.value),f=1;f<=c;f+=1){var s=d+=1===f?0:l;a({position:f,delay:s}).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.ecf0f579.js.map
