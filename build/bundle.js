var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){return null==t?"":t}function l(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $(t,n){t.value=null==n?"":n}let m;function y(t){m=t}const b=[],x=[],_=[],v=[],k=Promise.resolve();let E=!1;function O(t){_.push(t)}const w=new Set;let S=0;function j(){const t=m;do{for(;S<b.length;){const t=b[S];S++,y(t),A(t.$$)}for(y(null),b.length=0,S=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];w.has(n)||(w.add(n),n())}_.length=0}while(b.length);for(;v.length;)v.pop()();E=!1,w.clear(),y(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const L=new Set;function N(t,n){-1===t.$$.dirty[0]&&(b.push(t),E||(E=!0,k.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(c,u,l,i,f,a,d,h=[-1]){const g=m;y(c);const p=c.$$={fragment:null,ctx:null,props:a,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(g?g.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:u.target||g.$$.root};d&&d(p.root);let $=!1;if(p.ctx=l?l(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return p.ctx&&f(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),$&&N(c,t)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();u.intro&&function(t,n){t&&t.i&&(L.delete(t),t.i(n))}(c.$$.fragment),function(t,e,c,u){const{fragment:l,on_mount:i,on_destroy:s,after_update:f}=t.$$;l&&l.m(e,c),u||O((()=>{const e=i.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(O)}(c,u.target,u.anchor,u.customElement),j()}y(g)}function T(t,n){return n&&localStorage.setItem("toDoList",JSON.stringify(n)),JSON.parse(localStorage.getItem(t))}function D(t,n,e){const o=t.slice();return o[9]=n[e],o}function z(t){let n,e,r,c,$,m,y,b,x,_,v,k,E=t[9].value+"";function O(){return t[6](t[9])}function w(){return t[7](t[9])}return{c(){n=f("li"),e=f("input"),c=d(),$=f("span"),m=a(E),b=d(),x=f("button"),x.textContent="x",_=d(),g(e,"type","radio"),e.checked=r=t[9].done,g($,"class",y=u(t[9].done&&"line-through")+" svelte-zl8l02")},m(t,o){i(t,n,o),l(n,e),l(n,c),l(n,$),l($,m),l(n,b),l(n,x),l(n,_),v||(k=[h(e,"click",O),h(x,"click",w)],v=!0)},p(n,o){t=n,1&o&&r!==(r=t[9].done)&&(e.checked=r),1&o&&E!==(E=t[9].value+"")&&p(m,E),1&o&&y!==(y=u(t[9].done&&"line-through")+" svelte-zl8l02")&&g($,"class",y)},d(t){t&&s(n),v=!1,o(k)}}}function I(n){let e,r,c,u,m,y,b,x,_,v,k,E=n[0].length?`(${n[2]}/${n[0].length})`:"",O=n[0],w=[];for(let t=0;t<O.length;t+=1)w[t]=z(D(n,O,t));return{c(){e=f("h2"),r=a("Today's Tasks: "),c=a(E),u=d(),m=f("ul");for(let t=0;t<w.length;t+=1)w[t].c();y=d(),b=f("input"),x=d(),_=f("button"),_.textContent="Add task",g(b,"type","text")},m(t,o){i(t,e,o),l(e,r),l(e,c),i(t,u,o),i(t,m,o);for(let t=0;t<w.length;t+=1)w[t].m(m,null);i(t,y,o),i(t,b,o),$(b,n[1]),i(t,x,o),i(t,_,o),v||(k=[h(b,"input",n[8]),h(_,"click",n[3])],v=!0)},p(t,[n]){if(5&n&&E!==(E=t[0].length?`(${t[2]}/${t[0].length})`:"")&&p(c,E),49&n){let e;for(O=t[0],e=0;e<O.length;e+=1){const o=D(t,O,e);w[e]?w[e].p(o,n):(w[e]=z(o),w[e].c(),w[e].m(m,null))}for(;e<w.length;e+=1)w[e].d(1);w.length=O.length}2&n&&b.value!==t[1]&&$(b,t[1])},i:t,o:t,d(t){t&&s(e),t&&s(u),t&&s(m),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(w,t),t&&s(y),t&&s(b),t&&s(x),t&&s(_),v=!1,o(k)}}}function J(t,n,e){let o,r=T("toDoList")||[],c="";function u(t){e(0,r=r.map((n=>n.index!==t?n:Object.assign(Object.assign({},n),{done:!n.done}))))}function l(t){e(0,r=r.filter((n=>n.index!==t)))}return t.$$.update=()=>{1&t.$$.dirty&&e(2,o=r.filter((t=>t.done)).length),1&t.$$.dirty&&T("toDoList",r)},[r,c,o,function(){c&&(e(0,r=[...r,{value:c,done:!1,index:r.length+1}]),e(1,c=""))},u,l,t=>u(t.index),t=>l(t.index),function(){c=this.value,e(1,c)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,J,I,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
