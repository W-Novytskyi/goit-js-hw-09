function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");function u(e,o){return new Promise(((t,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(o){o.preventDefault();let t=Number(l.delay.value);const n=Number(l.step.value),i=Number(l.amount.value);for(let o=0;o<=i;o+=1)u(o,t).then((({position:o,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.42d7ba4c.js.map
