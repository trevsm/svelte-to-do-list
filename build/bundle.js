var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let m;function x(t){m=t}const b=[],v=[],y=[],k=[],_=Promise.resolve();let w=!1;function T(t){y.push(t)}function D(t){k.push(t)}const E=new Set;let O=0;function N(){const t=m;do{for(;O<b.length;){const t=b[O];O++,x(t),S(t.$$)}for(x(null),b.length=0,O=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(b.length);for(;k.length;)k.pop()();w=!1,E.clear(),x(t)}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const j=new Set;let A;function L(t,e){t&&t.i&&(j.delete(t),t.i(e))}function C(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),A.c.push((()=>{j.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function I(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function B(t,n,r,c){const{fragment:i,on_mount:s,on_destroy:u,after_update:f}=t.$$;i&&i.m(n,r),c||T((()=>{const n=s.map(e).filter(l);u?u.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(T)}function J(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,_.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,l,r,c,i,s,f,a=[-1]){const d=m;x(e);const p=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(d?d.$$.context:[])),callbacks:n(),dirty:a,skip_bound:!1,root:l.target||d.$$.root};f&&f(p.root);let h=!1;if(p.ctx=r?r(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=l)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](l),h&&q(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();l.intro&&L(e.$$.fragment),B(e,l.target,l.anchor,l.customElement),N()}x(d)}class P{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(e){let n,l,r,$,m,x,b,v,y,k,_;return{c(){n=f("li"),l=f("div"),r=f("input"),$=d(),m=f("span"),x=a(e[4]),v=d(),y=f("button"),y.textContent="x",h(r,"type","radio"),r.checked=e[2],h(r,"class","svelte-13fphr7"),h(m,"class",b=c(e[2]&&"line-through")+" svelte-13fphr7"),h(n,"class","task svelte-13fphr7")},m(t,o){s(t,n,o),i(n,l),i(l,r),i(l,$),i(l,m),i(m,x),i(n,v),i(n,y),k||(_=[p(r,"click",e[5]),p(y,"click",e[6])],k=!0)},p(t,[e]){4&e&&(r.checked=t[2]),16&e&&g(x,t[4]),4&e&&b!==(b=c(t[2]&&"line-through")+" svelte-13fphr7")&&h(m,"class",b)},i:t,o:t,d(t){t&&u(n),k=!1,o(_)}}}function F(t,e,n){let{deleteTask:o,toggleDone:l}=e,{done:r,index:c,label:i}=e;return t.$$set=t=>{"deleteTask"in t&&n(0,o=t.deleteTask),"toggleDone"in t&&n(1,l=t.toggleDone),"done"in t&&n(2,r=t.done),"index"in t&&n(3,c=t.index),"label"in t&&n(4,i=t.label)},[o,l,r,c,i,()=>l(c),()=>o(c)]}class G extends P{constructor(t){super(),M(this,t,F,z,r,{deleteTask:0,toggleDone:1,done:2,index:3,label:4})}}function H(t,e){return e&&localStorage.setItem("toDoList",JSON.stringify(e)),JSON.parse(localStorage.getItem(t))}function K(t,e,n){const o=t.slice();return o[10]=e[n].done,o[11]=e[n].index,o[12]=e[n].label,o[13]=e,o[14]=n,o}function Q(t){let e,n,o,l;function r(e){t[7](e,t[10],t[13],t[14])}function c(e){t[8](e,t[11],t[13],t[14])}let i={deleteTask:t[5],toggleDone:t[4],label:t[12]};return void 0!==t[10]&&(i.done=t[10]),void 0!==t[11]&&(i.index=t[11]),e=new G({props:i}),v.push((()=>I(e,"done",r))),v.push((()=>I(e,"index",c))),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,n){B(e,t,n),l=!0},p(l,r){t=l;const c={};1&r&&(c.label=t[12]),!n&&1&r&&(n=!0,c.done=t[10],D((()=>n=!1))),!o&&1&r&&(o=!0,c.index=t[11],D((()=>o=!1))),e.$set(c)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function R(t){let e,n,l,r,c,m,x,b,v,y,k,_,w,T,D=t[0],E=[];for(let e=0;e<D.length;e+=1)E[e]=Q(K(t,D,e));const O=t=>C(E[t],1,1,(()=>{E[t]=null}));return{c(){e=f("main"),n=f("div"),l=f("h2"),r=a(t[2]),c=d(),m=f("ul");for(let t=0;t<E.length;t+=1)E[t].c();x=d(),b=f("div"),v=f("input"),y=d(),k=f("button"),k.textContent="Add task",h(m,"class","svelte-wt0xfc"),h(n,"class","top"),h(v,"type","text"),h(v,"class","svelte-wt0xfc"),h(k,"class","svelte-wt0xfc"),h(b,"class","textInput svelte-wt0xfc"),h(e,"class","svelte-wt0xfc")},m(o,u){s(o,e,u),i(e,n),i(n,l),i(l,r),i(n,c),i(n,m);for(let t=0;t<E.length;t+=1)E[t].m(m,null);i(e,x),i(e,b),i(b,v),$(v,t[1]),i(b,y),i(b,k),_=!0,w||(T=[p(v,"input",t[9]),p(k,"click",t[3])],w=!0)},p(t,[e]){if((!_||4&e)&&g(r,t[2]),49&e){let n;for(D=t[0],n=0;n<D.length;n+=1){const o=K(t,D,n);E[n]?(E[n].p(o,e),L(E[n],1)):(E[n]=Q(o),E[n].c(),L(E[n],1),E[n].m(m,null))}for(A={r:0,c:[],p:A},n=D.length;n<E.length;n+=1)O(n);A.r||o(A.c),A=A.p}2&e&&v.value!==t[1]&&$(v,t[1])},i(t){if(!_){for(let t=0;t<D.length;t+=1)L(E[t]);_=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)C(E[t]);_=!1},d(t){t&&u(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,t),w=!1,o(T)}}}function U(t,e,n){let o,l,r=H("toDoList")||[],c="";return t.$$.update=()=>{1&t.$$.dirty&&n(6,o=r.filter((t=>t.done)).length),1&t.$$.dirty&&H("toDoList",r),65&t.$$.dirty&&n(2,l=r.length?"Today's Tasks: "+(r.length?`(${o}/${r.length})`:""):"No Tasks")},[r,c,l,function(){c&&(n(0,r=[...r,{label:c,done:!1,index:r.length+1}]),n(1,c=""))},function(t){n(0,r=r.map((e=>e.index!==t?e:Object.assign(Object.assign({},e),{done:!e.done}))))},function(t){n(0,r=r.filter((e=>e.index!==t)))},o,function(t,e,o,l){o[l].done=t,n(0,r)},function(t,e,o,l){o[l].index=t,n(0,r)},function(){c=this.value,n(1,c)}]}return new class extends P{constructor(t){super(),M(this,t,U,R,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map