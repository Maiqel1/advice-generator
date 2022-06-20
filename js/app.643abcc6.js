(function(){"use strict";var t={6241:function(t,n,e){var r=e(9242),o=e(3396);function i(t,n,e,r,i,a){const u=(0,o.up)("Content");return(0,o.wg)(),(0,o.j4)(u)}var a=e(7139);const u={class:"my-auto"},c={class:"background mx-auto"},l={class:"text-center"},s={class:"text-white text-center mt-5"},f=(0,o._)("br",null,null,-1),h=(0,o._)("hr",{class:"text-white"},null,-1),d=(0,o._)("h1",{class:"text-white text-center linep"},'""',-1),p=(0,o._)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{d:"M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",fill:"hsl(150, 100%, 66%)"})],-1),v=[p],w=(0,o._)("br",null,null,-1),b=(0,o._)("br",null,null,-1),g=(0,o._)("br",null,null,-1),m=(0,o._)("div",{class:"attribution text-white"},[(0,o.Uk)(" Challenge by "),(0,o._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),(0,o.Uk)(". Coded by "),(0,o._)("a",{href:"www.linkedin.com/in/michael-olowe-7b600620a"},"Maiqel"),(0,o.Uk)(". ")],-1);function _(t,n,e,r,i,p){const _=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("section",c,[(0,o._)("h4",l,"Advice "+(0,a.zw)("#"+i.Id),1),(0,o._)("p",s,(0,a.zw)(i.Quote),1),f,h,d,(0,o.Wm)(_,{class:""},{default:(0,o.w5)((()=>[(0,o._)("button",{class:"btn btn-md text-white",onClick:n[0]||(n[0]=(...t)=>p.getQuote&&p.getQuote(...t))},v)])),_:1})]),w,b,g,m])}var x={name:"Content",data(){return{Quote:"",Id:""}},methods:{async getQuote(){const t=await fetch("https://api.adviceslip.com/advice"),n=await t.json();console.log(n),this.Quote=n["slip"]["advice"],this.Id=n.slip.id}},created(){this.getQuote()}},k=e(89);const y=(0,k.Z)(x,[["render",_]]);var O=y,j={name:"App",components:{Content:O}};const C=(0,k.Z)(j,[["render",i]]);var Z=C;(0,r.ri)(Z).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],i=t[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var s=c(e)}for(n&&n(r);l<a.length;l++)i=a[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(s)},r=self["webpackChunkvue_practice"]=self["webpackChunkvue_practice"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(6241)}));r=e.O(r)})();
//# sourceMappingURL=app.643abcc6.js.map