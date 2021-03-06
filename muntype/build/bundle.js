var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let l=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const c=new Set;function d(t){c.forEach(e=>{e.c(t)||(c.delete(e),e.f())}),0!==c.size&&u(d)}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(){return t=" ",document.createTextNode(t);var t}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const v=new Set;let b,_=0;function x(t,e,n,o,r,a,s,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*a(t);u+=100*t+`%{${s(o,1-o)}}\n`}const c=u+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(c)}_${i}`,f=t.ownerDocument;v.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(m("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${c}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${d} ${o}ms linear ${r}ms 1 both`,_+=1,d}function w(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),_-=r,_||u(()=>{_||(v.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),v.clear())}))}function j(t){b=t}const E=[],C=[],q=[],F=[],k=Promise.resolve();let T=!1;function O(t){q.push(t)}let A=!1;const M=new Set;function S(){if(!A){A=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];j(e),z(e.$$)}for(E.length=0;C.length;)C.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];M.has(e)||(M.add(e),e())}q.length=0}while(E.length);for(;F.length;)F.pop()();T=!1,A=!1,M.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let B;function L(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const N=new Set;let R;function D(t,e){t&&t.i&&(N.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),R.c.push(()=>{N.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const P={duration:0};function W(n,o,s,i){let f=o(n,s),p=i?0:1,h=null,m=null,g=null;function $(){g&&w(n,g)}function y(t,e){const n=t.b-p;return e*=Math.abs(n),{a:p,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:a=0,duration:s=300,easing:i=e,tick:v=t,css:b}=f||P,_={start:l()+a,b:o};o||(_.group=R,R.r+=1),h?m=_:(b&&($(),g=x(n,p,o,s,a,i,b)),o&&v(0,1),h=y(_,s),O(()=>L(n,o,"start")),function(t){let e;0===c.size&&u(d),new Promise(n=>{c.add(e={c:t,f:n})})}(t=>{if(m&&t>m.start&&(h=y(m,s),m=null,L(n,h.b,"start"),b&&($(),g=x(n,p,h.b,h.duration,0,i,f.css))),h)if(t>=h.end)v(p=h.b,1-p),L(n,h.b,"end"),m||(h.b?$():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;p=h.a+h.d*i(e/h.duration),v(p,1-p)}return!(!h&&!m)}))}return{run(t){a(f)?(B||(B=Promise.resolve(),B.then(()=>{B=null})),B).then(()=>{f=f(),v(t)}):v(t)},end(){$(),h=m=null}}}function H(t){t&&t.c()}function V(t,e,o){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=t.$$;s&&s.m(e,o),O(()=>{const e=i.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(E.push(t),T||(T=!0,k.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,a,s,i,l,u=[-1]){const c=b;j(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:o(),dirty:u};let p=!1;if(f.ctx=a?a(e,d,(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),p&&J(e,t)),n}):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();n.intro&&D(e.$$.fragment),V(e,n.target,n.anchor),S()}j(c)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function U(e){let n,o,a,s,i;return{c(){n=m("input"),o=g(),a=m("input"),y(n,"placeholder","name"),n.value=e[0],y(n,"type","string"),y(n,"class","svelte-i3xaaj"),y(a,"placeholder","type"),a.value=e[1],y(a,"type","number"),y(a,"class","svelte-i3xaaj")},m(t,r){p(t,n,r),p(t,o,r),p(t,a,r),s||(i=[$(n,"input",e[4]),$(a,"input",e[5])],s=!0)},p(t,[e]){1&e&&(n.value=t[0]),2&e&&(a.value=t[1])},i:t,o:t,d(t){t&&h(n),t&&h(o),t&&h(a),s=!1,r(i)}}}function X(t,e,n){let o="",r="";const a="abcdefghijklmnopqrstuvwxyz0123456789".split(""),s=a.length;function i(t){n(0,o=t),n(1,r=function(t){let e,n=0,o=0;for(e=0;e<t.length;e++){let r=a.indexOf(t[e]);r<0||(n=s*n+r,o=s*o+1)}return n+o}(o))}function l(t){n(1,r=+t),n(0,o=function(t){let e=0,n=s*e+1,o=0;for(;n<=t;)o++,e=n,n=s*n+1;let r=[];for(t-=e;o>=0;)o--,r[o]=a[t%s],t=Math.floor(t/s);return r.join("")}(r))}return[o,r,i,l,t=>i(t.target.value),t=>l(t.target.value)]}class Y extends Q{constructor(t){super(),K(this,t,X,U,s,{})}}function Z(e){let n,o,a,s,i;return{c(){n=m("input"),o=g(),a=m("input"),y(n,"placeholder","name"),n.value=e[0],y(n,"type","string"),y(n,"class","svelte-i3xaaj"),y(a,"placeholder","type"),a.value=e[1],y(a,"type","number"),y(a,"class","svelte-i3xaaj")},m(t,r){p(t,n,r),p(t,o,r),p(t,a,r),s||(i=[$(n,"input",e[4]),$(a,"input",e[5])],s=!0)},p(t,[e]){1&e&&(n.value=t[0]),2&e&&(a.value=t[1])},i:t,o:t,d(t){t&&h(n),t&&h(o),t&&h(a),s=!1,r(i)}}}function tt(t,e,n){let o="",r="";const a=" abcdefghijklmnopqrstuvwxyz0123456789".split("");function s(t){n(0,o=t),n(1,r=function(t){t=t.toLowerCase();let e=0;for(let n=0;n<t.length;n++){let o=a.indexOf(t[n]);o<0||(e+=o<<6*n)}return e}(o))}function i(t){n(1,r=+t),n(0,o=function(t){let e=[];for(;t>0;)t%64>=a.length?console.log("error"):e.push(a[t%64]),t=Math.floor(t/64);return e.join("")}(r))}return[o,r,s,i,t=>s(t.target.value),t=>i(t.target.value)]}class et extends Q{constructor(t){super(),K(this,t,tt,Z,s,{})}}function nt(t){const e=t-1;return e*e*e+1}function ot(t){return--t*t*t*t*t+1}function rt(t,{delay:e=0,duration:n=400,easing:o=nt}){const r=getComputedStyle(t),a=+r.opacity,s=parseFloat(r.height),i=parseFloat(r.paddingTop),l=parseFloat(r.paddingBottom),u=parseFloat(r.marginTop),c=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*a};height: ${t*s}px;padding-top: ${t*i}px;padding-bottom: ${t*l}px;margin-top: ${t*u}px;margin-bottom: ${t*c}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function at(t){let e,n,o;return{c(){e=m("p"),e.innerHTML='\n        The scheduling messaging system in the <a href="https://github.com/nvi-inc/fs" class="svelte-noqn0a">VLBI Field System</a> uses a message\n        type &quot;<code>mtype</code>&quot; to convert a human readable string into a\n        number. In the current\n        design, a hash function would be inconvenient as there is no easy way\n        to avoid clashes and there are only 28 bits available so using large\n        hash range is not an option. Instead we use an encoding of the strings\n        matched by the regular expression <code>[a-z0-9]*</code>. The old\n        format, pre v9.13, used an encoding which was not completely dense, and\n        to free up a few more bits for flags, the new format was created. This\n        new encoding is a bijection, rather than just an injection as the old type.\n    ',y(e,"class","svelte-noqn0a")},m(t,n){p(t,e,n),o=!0},i(t){o||(O(()=>{n||(n=W(e,rt,{delay:0,duration:250,easing:ot},!0)),n.run(1)}),o=!0)},o(t){n||(n=W(e,rt,{delay:0,duration:250,easing:ot},!1)),n.run(0),o=!1},d(t){t&&h(e),t&&n&&n.end()}}}function st(t){let e,n,o,a,s,i,l,u,c,d,v,b,_,x,w,j,E,C,q;l=new Y({}),b=new et({});let F=t[0]&&at();return{c(){e=m("main"),n=m("h1"),n.textContent="m(un)type",o=g(),a=m("div"),s=m("h2"),s.textContent="New Format",i=g(),H(l.$$.fragment),u=g(),c=m("div"),d=m("h2"),d.textContent="Old Format",v=g(),H(b.$$.fragment),_=g(),x=m("h3"),w=m("button"),w.textContent="What is this?",j=g(),F&&F.c(),y(n,"class","svelte-noqn0a"),y(x,"class","svelte-noqn0a"),y(e,"class","svelte-noqn0a")},m(r,h){p(r,e,h),f(e,n),f(e,o),f(e,a),f(a,s),f(a,i),V(l,a,null),f(e,u),f(e,c),f(c,d),f(c,v),V(b,c,null),f(e,_),f(e,x),f(x,w),f(e,j),F&&F.m(e,null),E=!0,C||(q=$(w,"click",t[1]),C=!0)},p(t,[n]){t[0]?F?1&n&&D(F,1):(F=at(),F.c(),D(F,1),F.m(e,null)):F&&(R={r:0,c:[],p:R},I(F,1,1,()=>{F=null}),R.r||r(R.c),R=R.p)},i(t){E||(D(l.$$.fragment,t),D(b.$$.fragment,t),D(F),E=!0)},o(t){I(l.$$.fragment,t),I(b.$$.fragment,t),I(F),E=!1},d(t){t&&h(e),G(l),G(b),F&&F.d(),C=!1,q()}}}function it(t,e,n){let o=!1;return[o,t=>{t.preventDefault(),n(0,o=!o)}]}return new class extends Q{constructor(t){super(),K(this,t,it,st,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
