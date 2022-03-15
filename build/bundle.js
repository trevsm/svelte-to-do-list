var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function i(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n){t.value=null==n?"":n}let $;function b(t){$=t}const k=[],y=[],x=[],v=[],_=Promise.resolve();let w=!1;function E(t){x.push(t)}const O=new Set;let N=0;function S(){const t=$;do{for(;N<k.length;){const t=k[N];N++,b(t),j(t.$$)}for(b(null),k.length=0,N=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];O.has(n)||(O.add(n),n())}x.length=0}while(k.length);for(;v.length;)v.pop()();w=!1,O.clear(),b(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const A=new Set;function L(t,n){-1===t.$$.dirty[0]&&(k.push(t),w||(w=!0,_.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(c,l,i,s,a,f,d,h=[-1]){const p=$;b(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:l.target||p.$$.root};d&&d(g.root);let m=!1;if(g.ctx=i?i(c,l.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),m&&L(c,t)),n})):[],g.update(),m=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();l.intro&&function(t,n){t&&t.i&&(A.delete(t),t.i(n))}(c.$$.fragment),function(t,e,c,l){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,c),l||E((()=>{const e=s.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(E)}(c,l.target,l.anchor,l.customElement),S()}b(p)}function C(t,n){return n&&localStorage.setItem("toDoList",JSON.stringify(n)),JSON.parse(localStorage.getItem(t))}function D(t,n,e){const o=t.slice();return o[10]=n[e],o}function I(t){let n,e,r,c,m,$,b,k,y,x,v,_,w,E=t[10].label+"";function O(){return t[7](t[10])}function N(){return t[8](t[10])}return{c(){n=a("li"),e=a("div"),r=a("input"),m=d(),$=a("span"),b=f(E),y=d(),x=a("button"),x.textContent="x",v=d(),p(r,"type","radio"),r.checked=c=t[10].done,p(r,"class","svelte-mwki4o"),p($,"class",k=l(t[10].done&&"line-through")+" svelte-mwki4o"),p(x,"class","svelte-mwki4o"),p(n,"class","task svelte-mwki4o")},m(t,o){s(t,n,o),i(n,e),i(e,r),i(e,m),i(e,$),i($,b),i(n,y),i(n,x),i(n,v),_||(w=[h(r,"click",O),h(x,"click",N)],_=!0)},p(n,e){t=n,1&e&&c!==(c=t[10].done)&&(r.checked=c),1&e&&E!==(E=t[10].label+"")&&g(b,E),1&e&&k!==(k=l(t[10].done&&"line-through")+" svelte-mwki4o")&&p($,"class",k)},d(t){t&&u(n),_=!1,o(w)}}}function J(n){let e,r,c,l,$,b,k,y,x,v,_,w,E,O=n[0],N=[];for(let t=0;t<O.length;t+=1)N[t]=I(D(n,O,t));return{c(){e=a("main"),r=a("div"),c=a("h2"),l=f(n[2]),$=d(),b=a("ul");for(let t=0;t<N.length;t+=1)N[t].c();k=d(),y=a("div"),x=a("input"),v=d(),_=a("button"),_.textContent="Add task",p(b,"class","svelte-mwki4o"),p(r,"class","top"),p(x,"type","text"),p(x,"class","svelte-mwki4o"),p(_,"class","svelte-mwki4o"),p(y,"class","textInput svelte-mwki4o"),p(e,"class","svelte-mwki4o")},m(t,o){s(t,e,o),i(e,r),i(r,c),i(c,l),i(r,$),i(r,b);for(let t=0;t<N.length;t+=1)N[t].m(b,null);i(e,k),i(e,y),i(y,x),m(x,n[1]),i(y,v),i(y,_),w||(E=[h(x,"input",n[9]),h(_,"click",n[3])],w=!0)},p(t,[n]){if(4&n&&g(l,t[2]),49&n){let e;for(O=t[0],e=0;e<O.length;e+=1){const o=D(t,O,e);N[e]?N[e].p(o,n):(N[e]=I(o),N[e].c(),N[e].m(b,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=O.length}2&n&&x.value!==t[1]&&m(x,t[1])},i:t,o:t,d(t){t&&u(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(N,t),w=!1,o(E)}}}function q(t,n,e){let o,r,c=C("toDoList")||[],l="";function i(t){e(0,c=c.map((n=>n.index!==t?n:Object.assign(Object.assign({},n),{done:!n.done}))))}function s(t){e(0,c=c.filter((n=>n.index!==t)))}return t.$$.update=()=>{1&t.$$.dirty&&e(6,o=c.filter((t=>t.done)).length),1&t.$$.dirty&&C("toDoList",c),65&t.$$.dirty&&e(2,r=c.length?"Today's Tasks: "+(c.length?`(${o}/${c.length})`:""):"No Tasks")},[c,l,r,function(){l&&(e(0,c=[...c,{label:l,done:!1,index:c.length+1}]),e(1,l=""))},i,s,o,t=>i(t.index),t=>s(t.index),function(){l=this.value,e(1,l)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,q,J,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
