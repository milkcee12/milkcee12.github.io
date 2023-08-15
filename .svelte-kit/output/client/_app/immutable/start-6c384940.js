import{S as Ye,i as We,s as Xe,a as Ze,e as D,c as Qe,b as F,g as Q,t as V,d as x,f as q,h as C,j as xe,o as Re,k as et,l as tt,m as nt,n as Ee,p as z,q as rt,r as at,u as ot,v as J,w as G,x as ie,y as K,z as M,A as Ce}from"./chunks/index-1133d749.js";import{g as Fe,f as Je,s as X,a as Oe,b as st,i as it}from"./chunks/singletons-6073a6ec.js";import{_ as Z}from"./chunks/preload-helper-b21cceae.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const n=new URL(r);for(const o of ft){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return pt(n),n}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;me.delete(o)}return _e(r,e)};const me=new Map;function ht(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${dt(n.body)}"]`);const c=document.querySelector(s);if(c!=null&&c.textContent){const{body:t,...l}=JSON.parse(c.textContent),f=c.getAttribute("data-ttl");return f&&me.set(e,{body:t,init:l,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,l))}return _e(r,n)}function mt(r,e){const n=me.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);me.delete(r)}return _e(r,e)}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(r){const e=[],n=[],o=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${yt(r).map((t,l,f)=>{const d=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(g)return e.push(g[1]),n.push(g[2]),o.push(!1),"(?:/(.*))?";const b=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(b)return e.push(b[1]),n.push(b[2]),o.push(!0),"(?:/([^/]+))?";const T=l===f.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((U,B)=>{if(B%2){const H=_t.exec(U);if(!H)throw new Error(`Invalid param: ${U}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,W,le,ne,ce]=H;return e.push(ne),n.push(ce),o.push(!!W),le?"(.*?)":W?"([^/]*)?":"([^/]+?)"}return T&&U.includes(".")&&(s=!1),U.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:n,optional:o}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r){return r.slice(1).split("/").filter(wt)}function bt(r,{names:e,types:n,optional:o},s){const c={};for(let t=0;t<e.length;t+=1){const l=e[t],f=n[t];let d=r[t+1];if(d||!o[t]){if(f){const g=s[f];if(!g)throw new Error(`Missing "${f}" param matcher`);if(!g(d))return}c[l]=d!=null?d:""}}return c}function vt(r,e,n,o){const s=new Set(e);return Object.entries(n).map(([l,[f,d,g]])=>{const{pattern:b,names:T,types:k,optional:ee}=gt(l),U={id:l,exec:B=>{const H=b.exec(B);if(H)return bt(H,{names:T,types:k,optional:ee},o)},errors:[1,...g||[]].map(B=>r[B]),layouts:[0,...d||[]].map(t),leaf:c(f)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function c(l){const f=l<0;return f&&(l=~l),[f,r[l]]}function t(l){return l===void 0?l:[s.has(l),r[l]]}}function kt(r){let e,n,o;var s=r[0][0];function c(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&2&&(f.form=t[1]),s!==(s=t[0][0])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Et(r){let e,n,o;var s=r[0][0];function c(t){return{props:{data:t[2],$$slots:{default:[St]},$$scope:{ctx:t}}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&1051&&(f.$$scope={dirty:l,ctx:t}),s!==(s=t[0][0])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function $t(r){let e,n,o;var s=r[0][1];function c(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&2&&(f.form=t[1]),s!==(s=t[0][1])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Rt(r){let e,n,o;var s=r[0][1];function c(t){return{props:{data:t[3],$$slots:{default:[Ot]},$$scope:{ctx:t}}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&1043&&(f.$$scope={dirty:l,ctx:t}),s!==(s=t[0][1])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ot(r){let e,n,o;var s=r[0][2];function c(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&16&&(f.data=t[4]),l&2&&(f.form=t[1]),s!==(s=t[0][2])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function St(r){let e,n,o,s;const c=[Rt,$t],t=[];function l(f,d){return f[0][2]?0:1}return e=l(r),n=t[e]=c[e](r),{c(){n.c(),o=D()},l(f){n.l(f),o=D()},m(f,d){t[e].m(f,d),F(f,o,d),s=!0},p(f,d){let g=e;e=l(f),e===g?t[e].p(f,d):(Q(),V(t[g],1,1,()=>{t[g]=null}),x(),n=t[e],n?n.p(f,d):(n=t[e]=c[e](f),n.c()),q(n,1),n.m(o.parentNode,o))},i(f){s||(q(n),s=!0)},o(f){V(n),s=!1},d(f){t[e].d(f),f&&C(o)}}}function Ge(r){let e,n=r[6]&&Ke(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=nt(e);n&&n.l(s),s.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(o,s){F(o,e,s),n&&n.m(e,null)},p(o,s){o[6]?n?n.p(o,s):(n=Ke(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Ke(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ot(e,n[7])},d(n){n&&C(e)}}}function It(r){let e,n,o,s,c;const t=[Et,kt],l=[];function f(g,b){return g[0][1]?0:1}e=f(r),n=l[e]=t[e](r);let d=r[5]&&Ge(r);return{c(){n.c(),o=Ze(),d&&d.c(),s=D()},l(g){n.l(g),o=Qe(g),d&&d.l(g),s=D()},m(g,b){l[e].m(g,b),F(g,o,b),d&&d.m(g,b),F(g,s,b),c=!0},p(g,[b]){let T=e;e=f(g),e===T?l[e].p(g,b):(Q(),V(l[T],1,1,()=>{l[T]=null}),x(),n=l[e],n?n.p(g,b):(n=l[e]=t[e](g),n.c()),q(n,1),n.m(o.parentNode,o)),g[5]?d?d.p(g,b):(d=Ge(g),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(g){c||(q(n),c=!0)},o(g){V(n),c=!1},d(g){l[e].d(g),g&&C(o),d&&d.d(g),g&&C(s)}}}function Lt(r,e,n){let{stores:o}=e,{page:s}=e,{components:c}=e,{form:t}=e,{data_0:l=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(o.page.notify);let g=!1,b=!1,T=null;return Re(()=>{const k=o.page.subscribe(()=>{g&&(n(6,b=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,o=k.stores),"page"in k&&n(9,s=k.page),"components"in k&&n(0,c=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,l=k.data_0),"data_1"in k&&n(3,f=k.data_1),"data_2"in k&&n(4,d=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[c,t,l,f,d,g,b,T,o,s]}class At extends Ye{constructor(e){super(),We(this,e,Lt,It,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Nt={},ge=[()=>Z(()=>import("./chunks/0-8363bd3e.js"),["./chunks\\0-8363bd3e.js","./chunks\\_layout-8d2a742b.js","./components\\pages\\_layout.svelte-cc2fd59d.js","./chunks\\index-1133d749.js","./assets\\_layout-0cf55396.css"],import.meta.url),()=>Z(()=>import("./chunks/1-536f96f9.js"),["./chunks\\1-536f96f9.js","./components\\error.svelte-c21ceb1d.js","./chunks\\index-1133d749.js","./chunks\\singletons-6073a6ec.js"],import.meta.url),()=>Z(()=>import("./chunks/2-1fbfe68a.js"),["./chunks\\2-1fbfe68a.js","./components\\pages\\(app)\\_layout.svelte-ecaa3d8a.js","./chunks\\index-1133d749.js","./chunks\\Footer-e722bbc6.js","./chunks\\public-b5419dbf.js","./chunks\\functions-dc903a50.js","./assets\\Footer-a882e901.css"],import.meta.url),()=>Z(()=>import("./chunks/3-370f9f0c.js"),["./chunks\\3-370f9f0c.js","./chunks\\_page-fafbdb70.js","./chunks\\preload-helper-b21cceae.js","./chunks\\public-b5419dbf.js","./components\\pages\\_page.svelte-63db82c0.js","./chunks\\index-1133d749.js","./chunks\\Footer-e722bbc6.js","./chunks\\functions-dc903a50.js","./assets\\Footer-a882e901.css","./assets\\_page-15c4380c.css","./assets\\ArrowLink-0ae68b2a.css"],import.meta.url),()=>Z(()=>import("./chunks/4-a9cc0a36.js"),["./chunks\\4-a9cc0a36.js","./components\\pages\\(app)\\about\\_page.svelte-0ff87860.js","./chunks\\index-1133d749.js","./chunks\\functions-dc903a50.js","./assets\\_page-c33a37b5.css","./assets\\ArrowLink-0ae68b2a.css"],import.meta.url),()=>Z(()=>import("./chunks/5-ad9bc79b.js"),["./chunks\\5-ad9bc79b.js","./components\\pages\\(app)\\art\\_page.svelte-33f16a1e.js","./chunks\\index-1133d749.js","./assets\\_page-5f825c6b.css"],import.meta.url),()=>Z(()=>import("./chunks/6-f72dabd0.js"),["./chunks\\6-f72dabd0.js","./components\\pages\\(app)\\work\\_page.svelte-6deaab09.js","./chunks\\index-1133d749.js"],import.meta.url)],jt=[],Pt={"/":[3],"/(app)/about":[4,[2]],"/(app)/art":[5,[2]],"/(app)/work":[6,[2]]},Tt={handleError:({error:r})=>{console.error(r)}};class Se{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,n){this.status=e,this.location=n}}const Ut="/__data.json";async function Dt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Vt=-1,qt=-2,Bt=-3,Ct=-4,Ft=-5,Jt=-6;function Gt(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const n=e,o=Array(n.length);function s(c){if(c===Vt)return;if(c===Bt)return NaN;if(c===Ct)return 1/0;if(c===Ft)return-1/0;if(c===Jt)return-0;if(c in o)return o[c];const t=n[c];if(!t||typeof t!="object")o[c]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[c]=new Date(t[1]);break;case"Set":const f=new Set;o[c]=f;for(let b=1;b<t.length;b+=1)f.add(s(t[b]));break;case"Map":const d=new Map;o[c]=d;for(let b=1;b<t.length;b+=2)d.set(s(t[b]),s(t[b+1]));break;case"RegExp":o[c]=new RegExp(t[1],t[2]);break;case"Object":o[c]=Object(t[1]);break;case"BigInt":o[c]=BigInt(t[1]);break;case"null":const g=Object.create(null);o[c]=g;for(let b=1;b<t.length;b+=2)g[t[b]]=s(t[b+1]);break}else{const l=new Array(t.length);o[c]=l;for(let f=0;f<t.length;f+=1){const d=t[f];d!==qt&&(l[f]=s(d))}}else{const l={};o[c]=l;for(const f in t){const d=t[f];l[f]=s(d)}}return o[c]}return s(0)}const He="sveltekit:scroll",Y="sveltekit:index",pe=vt(ge,jt,Pt,Nt),Ie=ge[0],Le=ge[1];Ie();Le();let se={};try{se=JSON.parse(sessionStorage[He])}catch{}function $e(r){se[r]=Oe()}function Kt({target:r,base:e,trailing_slash:n}){var Ve;const o=[];let s=null;const c={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,f=!1,d=!0,g=!1,b=!1,T,k=(Ve=history.state)==null?void 0:Ve[Y];k||(k=Date.now(),history.replaceState({...history.state,[Y]:k},"",location.href));const ee=se[k];ee&&(history.scrollRestoration="manual",scrollTo(ee.x,ee.y));let U=!1,B,H,W;async function le(){W=W||Promise.resolve(),await W,W=null;const a=new URL(location.href),p=be(a,!0);s=null,await Ae(p,a,[])}async function ne(a,{noscroll:p=!1,replaceState:h=!1,keepfocus:i=!1,state:u={}},m,_){return typeof a=="string"&&(a=new URL(a,Fe(document))),ve({url:a,scroll:p?Oe():null,keepfocus:i,redirect_chain:m,details:{state:u,replaceState:h},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function ce(a){const p=be(a,!1);if(!p)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:p.id,promise:Pe(p)},s.promise}async function Ae(a,p,h,i,u={},m){var $,E;H=u;let _=a&&await Pe(a);if(_||(_=await De(p,null,oe(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(a==null?void 0:a.url)||p,H!==u)return!1;if(_.type==="redirect")if(h.length>10||h.includes(p.pathname))_=await fe({status:500,error:oe(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return ne(new URL(_.location,p).href,{},[...h,p.pathname],u),!1;else((E=($=_.props)==null?void 0:$.page)==null?void 0:E.status)>=400&&await X.updated.check()&&await ue(p);if(o.length=0,b=!1,g=!0,i&&i.details){const{details:y}=i,v=y.replaceState?0:1;y.state[Y]=k+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",p)}if(s=null,f){t=_.state,_.props.page&&(_.props.page.url=p);const y=he();T.$set(_.props),y()}else Ne(_);if(i){const{scroll:y,keepfocus:v}=i;if(!v){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Ce(),d){const O=p.hash&&document.getElementById(p.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,_.props.page&&(B=_.props.page),m&&m(),g=!1}function Ne(a){var u,m;t=a.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),B=a.props.page;const h=he();T=new At({target:r,props:{...a.props,stores:X},hydrate:!0}),h();const i={from:null,to:de("to",{params:t.params,routeId:(m=(u=t.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(_=>_(i)),f=!0}async function re({url:a,params:p,branch:h,status:i,error:u,route:m,form:_}){var I;const $=h.filter(Boolean),E={type:"loaded",state:{url:a,params:p,branch:h,error:u,route:m},props:{components:$.map(L=>L.node.component)}};_!==void 0&&(E.props.form=_);let y={},v=!B;for(let L=0;L<$.length;L+=1){const j=$[L];y={...y,...j.data},(v||!t.branch.some(P=>P===j))&&(E.props[`data_${L}`]=y,v=v||Object.keys((I=j.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(B.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==u||_!==void 0||v){E.props.page={error:u,params:p,routeId:m&&m.id,status:i,url:a,form:_,data:v?y:B.data};const L=(j,P)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${P}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function we({loader:a,parent:p,url:h,params:i,routeId:u,server_data_node:m}){var y,v,O,I,L;let _=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let j=function(...S){for(const w of S){const{href:R}=new URL(w,h);$.dependencies.add(R)}};const P={routeId:u,params:new Proxy(i,{get:(S,w)=>($.params.add(w),S[w])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:ut(h,()=>{$.url=!0}),async fetch(S,w){let R;S instanceof Request?(R=S.url,w={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...w}):R=S;const N=new URL(R,h).href;return j(N),f?mt(N,w):ht(R,N,w)},setHeaders:()=>{},depends:j,parent(){return $.parent=!0,p()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(O=await E.shared.load.call(null,P))!=null?O:null,_=_?await Dt(_):null}return{node:E,loader:a,server:m,shared:(I=E.shared)!=null&&I.load?{type:"data",data:_,uses:$}:null,data:(L=_!=null?_:m==null?void 0:m.data)!=null?L:null}}function je(a,p,h,i){if(b)return!0;if(!h)return!1;if(h.parent&&p||h.url&&a)return!0;for(const u of h.params)if(i[u]!==t.params[u])return!0;for(const u of h.dependencies)if(o.some(m=>m(new URL(u))))return!0;return!1}function ye(a,p){var h,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((h=a.uses.dependencies)!=null?h:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&p!=null?p:null}async function Pe({id:a,invalidating:p,url:h,params:i,route:u}){var S;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:_,leaf:$}=u,E=[..._,$];m.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const v=t.url?a!==t.url.pathname+t.url.search:!1,O=E.reduce((w,R,N)=>{var ae;const A=t.branch[N],te=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||je(v,w.some(Boolean),(ae=A.server)==null?void 0:ae.uses,i));return w.push(te),w},[]);if(O.some(Boolean)){try{y=await ze(h,O)}catch(w){return fe({status:500,error:oe(w,{url:h,params:i,routeId:u.id}),url:h,routeId:u.id})}if(y.type==="redirect")return y}const I=y==null?void 0:y.nodes;let L=!1;const j=E.map(async(w,R)=>{var ae;if(!w)return;const N=t.branch[R],A=I==null?void 0:I[R];if((!A||A.type==="skip")&&w[1]===(N==null?void 0:N.loader)&&!je(v,L,(ae=N.shared)==null?void 0:ae.uses,i))return N;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:w[1],url:h,params:i,routeId:u.id,parent:async()=>{var Be;const qe={};for(let ke=0;ke<R;ke+=1)Object.assign(qe,(Be=await j[ke])==null?void 0:Be.data);return qe},server_data_node:ye(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const w of j)w.catch(()=>{});const P=[];for(let w=0;w<E.length;w+=1)if(E[w])try{P.push(await j[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let N=500,A;I!=null&&I.includes(R)?(N=(S=R.status)!=null?S:N,A=R.error):R instanceof Se?(N=R.status,A=R.body):A=oe(R,{params:i,url:h,routeId:u.id});const te=await Te(w,P,m);return te?await re({url:h,params:i,branch:P.slice(0,te.idx).concat(te.node),status:N,error:A,route:u}):await De(h,u.id,A,N)}else P.push(void 0);return await re({url:h,params:i,branch:P,status:200,error:null,route:u,form:p?void 0:null})}async function Te(a,p,h){for(;a--;)if(h[a]){let i=a;for(;!p[i];)i-=1;try{return{idx:i+1,node:{node:await h[a](),loader:h[a],data:{},server:null,shared:null}}}catch{continue}}}async function fe({status:a,error:p,url:h,routeId:i}){var y;const u={},m=await Ie();let _=null;if(m.server)try{const v=await ze(h,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(y=v.nodes[0])!=null?y:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||l)&&await ue(h)}const $=await we({loader:Ie,url:h,params:u,routeId:i,parent:()=>Promise.resolve({}),server_data_node:ye(_)}),E={node:await Le(),loader:Le,shared:null,server:null,data:null};return await re({url:h,params:u,branch:[$,E],status:a,error:p,route:null})}function be(a,p){if(Ue(a))return;const h=decodeURI(a.pathname.slice(e.length)||"/");for(const i of pe){const u=i.exec(h);if(u){const m=new URL(a.origin+lt(a.pathname,n)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:p,route:i,params:ct(u),url:m}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ve({url:a,scroll:p,keepfocus:h,redirect_chain:i,details:u,type:m,delta:_,nav_token:$,accepted:E,blocked:y}){var j,P,S,w;let v=!1;const O=be(a,!1),I={from:de("from",{params:t.params,routeId:(P=(j=t.route)==null?void 0:j.id)!=null?P:null,url:t.url}),to:de("to",{params:(S=O==null?void 0:O.params)!=null?S:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:a}),type:m};_!==void 0&&(I.delta=_);const L={...I,cancel:()=>{v=!0}};if(c.before_navigate.forEach(R=>R(L)),v){y();return}$e(k),E(),f&&X.navigating.set(I),await Ae(O,a,i,{scroll:p,keepfocus:h,details:u},$,()=>{c.after_navigate.forEach(R=>R(I)),X.navigating.set(null)})}async function De(a,p,h,i){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await fe({status:i,error:h,url:a,routeId:p}):await ue(a)}function ue(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(c.after_navigate.push(a),()=>{const p=c.after_navigate.indexOf(a);c.after_navigate.splice(p,1)}))},before_navigate:a=>{Re(()=>(c.before_navigate.push(a),()=>{const p=c.before_navigate.indexOf(a);c.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(a,p={})=>ne(a,p,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:p}=new URL(a,location.href);o.push(h=>h.href===p)}return le()},invalidateAll:()=>(b=!0,le()),prefetch:async a=>{const p=new URL(a,Fe(document));await ce(p)},prefetch_routes:async a=>{const h=(a?pe.filter(i=>a.some(u=>i.exec(u))):pe).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async a=>{if(a.type==="error"){const p=new URL(location.href),{branch:h,route:i}=t;if(!i)return;const u=await Te(t.branch.length,h,i.errors);if(u){const m=await re({url:p,params:t.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});t=m.state;const _=he();T.$set(m.props),_()}}else if(a.type==="redirect")ne(a.location,{},[]);else{const p={form:a.data,page:{...B,form:a.data,status:a.status}},h=he();T.$set(p),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,$;let u=!1;const m={from:de("from",{params:t.params,routeId:($=(_=t.route)==null?void 0:_.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};c.before_navigate.forEach(E=>E(m)),u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(k);try{sessionStorage[He]=JSON.stringify(se)}catch{}}});const a=i=>{const{url:u,options:m}=Je(i);if(u&&m.prefetch){if(Ue(u))return;ce(u)}};let p;const h=i=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=i.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:m,options:_}=Je(i);if(!u||!m)return;const $=u instanceof SVGAElement;if(!$&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||E.includes("external")||_.reload||($?u.target.baseVal:u.target))return;const[y,v]=m.href.split("#");if(v!==void 0&&y===location.href.split("#")[0]){U=!0,$e(k),t.url=m,X.page.set({...B,url:m}),X.page.notify();return}ve({url:m,scroll:_.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[Y]===k)return;const u=i.state[Y]-k;ve({url:new URL(location.href),scroll:se[i.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{k=i.state[Y]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{U&&(U=!1,history.replaceState({...history.state,[Y]:++k},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&X.navigating.set(null)})},_hydrate:async({status:a,error:p,node_ids:h,params:i,routeId:u,data:m,form:_})=>{var y;l=!0;const $=new URL(location.href);let E;try{const v=h.map(async(O,I)=>{const L=m[I];return we({loader:ge[O],url:$,params:i,routeId:u,parent:async()=>{const j={};for(let P=0;P<I;P+=1)Object.assign(j,(await v[P]).data);return j},server_data_node:ye(L)})});E=await re({url:$,params:i,branch:await Promise.all(v),status:a,error:p,form:_,route:(y=pe.find(O=>O.id===u))!=null?y:null})}catch(v){if(v instanceof Me){await ue(new URL(v.location,location.href));return}E=await fe({status:v instanceof Se?v.status:500,error:oe(v,{url:$,params:i,routeId:u}),url:$,routeId:u})}Ne(E)}}}async function ze(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Ut;const o=await _e(n.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),s=await o.text();if(!o.ok)throw new Error(JSON.parse(s));return Gt(s)}function oe(r,e){var n;return r instanceof Se?r.body:(n=Tt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Mt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of Mt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function he(){return()=>{}}async function Wt({env:r,hydrate:e,paths:n,target:o,trailing_slash:s}){st(n);const c=Kt({target:o,base:n.base,trailing_slash:s});it({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Wt as start};
