function C(){}function ct(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Q(t){return t()}function I(){return Object.create(null)}function k(t){t.forEach(Q)}function U(t){return typeof t=="function"}function At(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function St(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function st(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function jt(t){let e;return V(t,n=>e=n)(),e}function Ct(t,e,n){t.$$.on_destroy.push(V(e,n))}function Tt(t,e,n,r){if(t){const c=X(t,e,n,r);return t[0](c)}}function X(t,e,n,r){return t[1]&&r?ct(n.ctx.slice(),t[1](r(e))):n.ctx}function Mt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const l=[],i=Math.max(e.dirty.length,c.length);for(let o=0;o<i;o+=1)l[o]=e.dirty[o]|c[o];return l}return e.dirty|c}return e.dirty}function Dt(t,e,n,r,c,l){if(c){const i=X(e,n,r,l);t.p(i,c)}}function Ot(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Pt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function qt(t){return t??""}function Bt(t,e,n){return t.set(n),e}const Ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let T=!1;function lt(){T=!0}function ut(){T=!1}function ot(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,_=(c>0&&e[n[c]].claim_order<=u?c+1:ot(1,c,a=>e[n[a]].claim_order,u))-1;r[s]=n[_]+1;const d=_+1;n[d]=s,c=Math.max(d,c)}const l=[],i=[];let o=e.length-1;for(let s=n[c]+1;s!=0;s=r[s-1]){for(l.push(e[s-1]);o>=s;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);l.reverse(),i.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<i.length;s++){for(;u<l.length&&i[s].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(i[s],_)}}function ft(t,e){if(T){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){T&&!n?ft(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function _t(t){t.parentNode&&t.parentNode.removeChild(t)}function zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function dt(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Ft(){return L(" ")}function Rt(){return L("")}function Wt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const mt=["width","height"];function Gt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&mt.indexOf(r)===-1?t[r]=e[r]:Y(t,r,e[r])}function It(t,e){for(const n in e)Y(t,n,e[n])}function pt(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,r,c=!1){yt(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const s=n(o);return s===void 0?t.splice(i,1):t[i]=s,c||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const s=n(o);return s===void 0?t.splice(i,1):t[i]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,e,n,r){return Z(t,c=>c.nodeName===e,c=>{const l=[];for(let i=0;i<c.attributes.length;i++){const o=c.attributes[i];n[o.name]||l.push(o.name)}l.forEach(i=>c.removeAttribute(i))},()=>r(e))}function Jt(t,e,n){return tt(t,e,n,dt)}function Kt(t,e,n){return tt(t,e,n,ht)}function gt(t,e){return Z(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>L(e),!0)}function Qt(t){return gt(t," ")}function Ut(t,e){e=""+e,t.data!==e&&(t.data=e)}function Vt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function bt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}function Xt(t,e){const n=[];let r=0;for(const c of e.childNodes)if(c.nodeType===8){const l=c.textContent.trim();l===`HEAD_${t}_END`?(r-=1,n.push(c)):l===`HEAD_${t}_START`&&(r+=1,n.push(c))}else r>0&&n.push(c);return n}function Yt(t,e){return new t(e)}let v;function g(t){v=t}function E(){if(!v)throw new Error("Function called outside component initialization");return v}function Zt(t){E().$$.on_mount.push(t)}function te(t){E().$$.after_update.push(t)}function ee(t){E().$$.on_destroy.push(t)}function ne(){const t=E();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const l=bt(e,n,{cancelable:r});return c.slice().forEach(i=>{i.call(t,l)}),!l.defaultPrevented}return!0}}const w=[],J=[];let $=[];const K=[],et=Promise.resolve();let B=!1;function nt(){B||(B=!0,et.then(z))}function re(){return nt(),et}function H(t){$.push(t)}const q=new Set;let x=0;function z(){if(x!==0)return;const t=v;do{try{for(;x<w.length;){const e=w[x];x++,g(e),xt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(g(null),w.length=0,x=0;J.length;)J.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];q.has(n)||(q.add(n),n())}$.length=0}while(w.length);for(;K.length;)K.pop()();B=!1,q.clear(),g(t)}function xt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function wt(t){const e=[],n=[];$.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),$=e}const j=new Set;let b;function $t(){b={r:0,c:[],p:b}}function kt(){b.r||k(b.c),b=b.p}function F(t,e){t&&t.i&&(j.delete(t),t.i(e))}function rt(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),b.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ce(t,e){const n=e.token={};function r(c,l,i,o){if(e.token!==n)return;e.resolved=o;let s=e.ctx;i!==void 0&&(s=s.slice(),s[i]=o);const u=c&&(e.current=c)(s);let _=!1;e.block&&(e.blocks?e.blocks.forEach((d,a)=>{a!==l&&d&&($t(),rt(d,1,1,()=>{e.blocks[a]===d&&(e.blocks[a]=null)}),kt())}):e.block.d(1),u.c(),F(u,1),u.m(e.mount(),e.anchor),_=!0),e.block=u,e.blocks&&(e.blocks[l]=u),_&&z()}if(it(t)){const c=E();if(t.then(l=>{g(c),r(e.then,1,e.value,l),g(null)},l=>{if(g(c),r(e.catch,2,e.error,l),g(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ie(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function se(t,e){rt(t,1,1,()=>{e.delete(t.key)})}function le(t,e,n,r,c,l,i,o,s,u,_,d){let a=t.length,m=l.length,h=a;const M={};for(;h--;)M[t[h].key]=h;const N=[],D=new Map,O=new Map,R=[];for(h=m;h--;){const f=d(c,l,h),p=n(f);let y=i.get(p);y?r&&R.push(()=>y.p(f,e)):(y=u(p,f),y.c()),D.set(p,N[h]=y),p in M&&O.set(p,Math.abs(h-M[p]))}const W=new Set,G=new Set;function P(f){F(f,1),f.m(o,_),i.set(f.key,f),_=f.first,m--}for(;a&&m;){const f=N[m-1],p=t[a-1],y=f.key,A=p.key;f===p?(_=f.first,a--,m--):D.has(A)?!i.has(y)||W.has(y)?P(f):G.has(A)?a--:O.get(y)>O.get(A)?(G.add(y),P(f)):(W.add(A),a--):(s(p,i),a--)}for(;a--;){const f=t[a];D.has(f.key)||s(f,i)}for(;m;)P(N[m-1]);return k(R),N}function ue(t,e){const n={},r={},c={$$scope:1};let l=t.length;for(;l--;){const i=t[l],o=e[l];if(o){for(const s in i)s in o||(r[s]=1);for(const s in o)c[s]||(n[s]=o[s],c[s]=1);t[l]=o}else for(const s in i)c[s]=1}for(const i in r)i in n||(n[i]=void 0);return n}function oe(t){return typeof t=="object"&&t!==null?t:{}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function vt(t,e,n,r){const{fragment:c,after_update:l}=t.$$;c&&c.m(e,n),r||H(()=>{const i=t.$$.on_mount.map(Q).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...i):k(i),t.$$.on_mount=[]}),l.forEach(H)}function Et(t,e){const n=t.$$;n.fragment!==null&&(wt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,r,c,l,i,o=[-1]){const s=v;g(t);const u=t.$$={fragment:null,ctx:[],props:l,update:C,not_equal:c,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(d,a,...m)=>{const h=m.length?m[0]:a;return u.ctx&&c(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),_&&Nt(t,d)),a}):[],u.update(),_=!0,k(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){lt();const d=pt(e.target);u.fragment&&u.fragment.l(d),d.forEach(_t)}else u.fragment&&u.fragment.c();e.intro&&F(t.$$.fragment),vt(t,e.target,e.anchor,e.customElement),ut(),z()}g(s)}class de{$destroy(){Et(this,1),this.$destroy=C}$on(e,n){if(!U(n))return C;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as $,vt as A,Et as B,Tt as C,Dt as D,Ot as E,Mt as F,ft as G,C as H,Ct as I,jt as J,le as K,Bt as L,se as M,ue as N,oe as O,ce as P,ie as Q,ct as R,de as S,Wt as T,qt as U,zt as V,k as W,Ht as X,Xt as Y,St as Z,ee as _,Ft as a,Gt as a0,ht as a1,Kt as a2,It as a3,ne as a4,Lt as b,Qt as c,rt as d,Rt as e,kt as f,F as g,_t as h,_e as i,te as j,dt as k,Jt as l,pt as m,Y as n,Zt as o,Vt as p,L as q,gt as r,At as s,re as t,Ut as u,$t as v,J as w,Yt as x,ae as y,fe as z};