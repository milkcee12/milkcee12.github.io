import{S as me,i as ye,s as be,k as I,q as F,a as A,l as k,m as C,r as N,h as S,c as M,n as y,b as B,G as b,B as $,e as K,o as st,I as it,J as W,K as Ce,L as Ee,M as ze,N as ct,O as lt,P as Pe,Q as at,w as ee,x as te,y as ne,u as ft,f as re,t as oe,z as se}from"./index-7ec6916d.js";import{P as ut}from"./public-b5419dbf.js";function dt(e){let t,n,o,r,s,i,c,l,a,f,h,p,g,v;return{c(){t=I("nav"),n=I("a"),o=I("b"),r=F("MC"),s=A(),i=I("div"),c=I("a"),l=F("Work"),a=A(),f=I("a"),h=F("About"),p=A(),g=I("a"),v=F("Playground"),this.h()},l(w){t=k(w,"NAV",{class:!0});var m=C(t);n=k(m,"A",{href:!0,class:!0});var u=C(n);o=k(u,"B",{class:!0});var _=C(o);r=N(_,"MC"),_.forEach(S),u.forEach(S),s=M(m),i=k(m,"DIV",{class:!0});var P=C(i);c=k(P,"A",{href:!0,class:!0});var j=C(c);l=N(j,"Work"),j.forEach(S),a=M(P),f=k(P,"A",{href:!0,class:!0});var x=C(f);h=N(x,"About"),x.forEach(S),p=M(P),g=k(P,"A",{href:!0,class:!0});var d=C(g);v=N(d,"Playground"),d.forEach(S),P.forEach(S),m.forEach(S),this.h()},h(){y(o,"class","svelte-1l20xui"),y(n,"href","/"),y(n,"class","mc-c-navbar__brand svelte-1l20xui"),y(c,"href","/work"),y(c,"class","svelte-1l20xui"),y(f,"href","/about"),y(f,"class","svelte-1l20xui"),y(g,"href","/playground"),y(g,"class","svelte-1l20xui"),y(i,"class","mc-c-navbar__links svelte-1l20xui"),y(t,"class","mc-c-navbar svelte-1l20xui")},m(w,m){B(w,t,m),b(t,n),b(n,o),b(o,r),b(t,s),b(t,i),b(i,c),b(c,l),b(i,a),b(i,f),b(f,h),b(i,p),b(i,g),b(g,v)},p:$,i:$,o:$,d(w){w&&S(t)}}}class _n extends me{constructor(t){super(),ye(this,t,null,dt,be,{})}}const q=/^[a-z0-9]+(-[a-z0-9]+)*$/,X=(e,t,n,o="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const c=r.pop(),l=r.pop(),a={provider:r.length>0?r[0]:o,prefix:l,name:c};return t&&!V(a)?null:a}const s=r[0],i=s.split("-");if(i.length>1){const c={provider:o,prefix:i.shift(),name:i.join("-")};return t&&!V(c)?null:c}if(n&&o===""){const c={provider:o,prefix:"",name:s};return t&&!V(c,n)?null:c}return null},V=(e,t)=>e?!!((e.provider===""||e.provider.match(q))&&(t&&e.prefix===""||e.prefix.match(q))&&e.name.match(q)):!1,He=Object.freeze({left:0,top:0,width:16,height:16}),J=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...He,...J}),ae=Object.freeze({...Y,body:"",hidden:!1});function ht(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function Te(e,t){const n=ht(e,t);for(const o in ae)o in J?o in e&&!(o in n)&&(n[o]=J[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function pt(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);function s(i){if(n[i])return r[i]=[];if(!(i in r)){r[i]=null;const c=o[i]&&o[i].parent,l=c&&s(c);l&&(r[i]=[c].concat(l))}return r[i]}return(t||Object.keys(n).concat(Object.keys(o))).forEach(s),r}function gt(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let s={};function i(c){s=Te(o[c]||r[c],s)}return i(t),n.forEach(i),Te(e,s)}function Qe(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const o=pt(e);for(const r in o){const s=o[r];s&&(t(r,gt(e,r,s)),n.push(r))}return n}const mt={provider:"",aliases:{},not_found:{},...He};function ie(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ve(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ie(e,mt))return null;const n=t.icons;for(const r in n){const s=n[r];if(!r.match(q)||typeof s.body!="string"||!ie(s,ae))return null}const o=t.aliases||Object.create(null);for(const r in o){const s=o[r],i=s.parent;if(!r.match(q)||typeof i!="string"||!n[i]&&!o[i]||!ie(s,ae))return null}return t}const je=Object.create(null);function yt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function D(e,t){const n=je[e]||(je[e]=Object.create(null));return n[t]||(n[t]=yt(e,t))}function ve(e,t){return Ve(t)?Qe(t,(n,o)=>{o?e.icons[n]=o:e.missing.add(n)}):[]}function bt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let z=!1;function Ge(e){return typeof e=="boolean"&&(z=e),z}function vt(e){const t=typeof e=="string"?X(e,!0,z):e;if(t){const n=D(t.provider,t.prefix),o=t.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function wt(e,t){const n=X(e,!0,z);if(!n)return!1;const o=D(n.provider,n.prefix);return bt(o,n.name,t)}function _t(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),z&&!t&&!e.prefix){let r=!1;return Ve(e)&&(e.prefix="",Qe(e,(s,i)=>{i&&wt(s,i)&&(r=!0)})),r}const n=e.prefix;if(!V({provider:t,prefix:n,name:"a"}))return!1;const o=D(t,n);return!!ve(o,e)}const Ke=Object.freeze({width:null,height:null}),We=Object.freeze({...Ke,...J}),xt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,St=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Le(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const o=e.split(xt);if(o===null||!o.length)return e;const r=[];let s=o.shift(),i=St.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?r.push(s):r.push(Math.ceil(c*t*n)/n)}else r.push(s);if(s=o.shift(),s===void 0)return r.join("");i=!i}}function It(e,t){const n={...Y,...e},o={...We,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach(g=>{const v=[],w=g.hFlip,m=g.vFlip;let u=g.rotate;w?m?u+=2:(v.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),v.push("scale(-1 1)"),r.top=r.left=0):m&&(v.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),v.push("scale(1 -1)"),r.top=r.left=0);let _;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:_=r.height/2+r.top,v.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:v.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:_=r.width/2+r.left,v.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}u%2===1&&(r.left!==r.top&&(_=r.left,r.left=r.top,r.top=_),r.width!==r.height&&(_=r.width,r.width=r.height,r.height=_)),v.length&&(s='<g transform="'+v.join(" ")+'">'+s+"</g>")});const i=o.width,c=o.height,l=r.width,a=r.height;let f,h;return i===null?(h=c===null?"1em":c==="auto"?a:c,f=Le(h,l/a)):(f=i==="auto"?l:i,h=c===null?Le(f,a/l):c==="auto"?a:c),{attributes:{width:f.toString(),height:h.toString(),viewBox:r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+a.toString()},body:s}}const kt=/\sid="(\S+)"/g,Ct="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Et=0;function Pt(e,t=Ct){const n=[];let o;for(;o=kt.exec(e);)n.push(o[1]);return n.length&&n.forEach(r=>{const s=typeof t=="function"?t(r):t+(Et++).toString(),i=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+s+"$3")}),e}const fe=Object.create(null);function Tt(e,t){fe[e]=t}function ue(e){return fe[e]||fe[""]}function we(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const _e=Object.create(null),U=["https://api.simplesvg.com","https://api.unisvg.com"],G=[];for(;U.length>0;)U.length===1||Math.random()>.5?G.push(U.shift()):G.push(U.pop());_e[""]=we({resources:["https://api.iconify.design"].concat(G)});function jt(e,t){const n=we(t);return n===null?!1:(_e[e]=n,!0)}function xe(e){return _e[e]}const Lt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ae=Lt();function At(e,t){const n=xe(e);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let r=0;n.resources.forEach(i=>{r=Math.max(r,i.length)});const s=t+".json?icons=";o=n.maxURL-r-n.path.length-s.length}return o}function Mt(e){return e===404}const Ot=(e,t,n)=>{const o=[],r=At(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=r&&a>0&&(o.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),o.push(i),o};function Ft(e){if(typeof e=="string"){const t=xe(e);if(t)return t.path}return"/"}const Nt=(e,t,n)=>{if(!Ae){n("abort",424);return}let o=Ft(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});o+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;Ae(e+o).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Mt(i)?"abort":"next",i)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},Dt={prepare:Ot,send:Nt};function Bt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let o={provider:"",prefix:"",name:""};return e.forEach(r=>{if(o.name===r.name&&o.prefix===r.prefix&&o.provider===r.provider)return;o=r;const s=r.provider,i=r.prefix,c=r.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=D(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const h={provider:s,prefix:i,name:c};f.push(h)}),t}function Je(e,t){e.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(r=>r.id!==t))})}function Rt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==r)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:o,prefix:r,name:a});else if(e.missing.has(a))i.missing.push({provider:o,prefix:r,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Je([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Ut=0;function $t(e,t,n){const o=Ut++,r=Je.bind(null,n,o);if(!t.pending.length)return r;const s={id:o,icons:t,callback:e,abort:r};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),r}function qt(e,t=!0,n=!1){const o=[];return e.forEach(r=>{const s=typeof r=="string"?X(r,t,n):r;s&&o.push(s)}),o}var zt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ht(e,t,n,o){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let i;if(e.random){let d=e.resources.slice(0);for(i=[];d.length>1;){const E=Math.floor(Math.random()*d.length);i.push(d[E]),d=d.slice(0,E).concat(d.slice(E+1))}i=i.concat(d)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,h=null,p=[],g=[];typeof o=="function"&&g.push(o);function v(){h&&(clearTimeout(h),h=null)}function w(){l==="pending"&&(l="aborted"),v(),p.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),p=[]}function m(d,E){E&&(g=[]),typeof d=="function"&&g.push(d)}function u(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:p.length,subscribe:m,abort:w}}function _(){l="failed",g.forEach(d=>{d(void 0,f)})}function P(){p.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),p=[]}function j(d,E,T){const O=E!=="success";switch(p=p.filter(L=>L!==d),l){case"pending":break;case"failed":if(O||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){f=T,_();return}if(O){f=T,p.length||(i.length?x():_());return}if(v(),P(),!e.random){const L=e.resources.indexOf(d.resource);L!==-1&&L!==e.index&&(e.index=L)}l="completed",g.forEach(L=>{L(T)})}function x(){if(l!=="pending")return;v();const d=i.shift();if(d===void 0){if(p.length){h=setTimeout(()=>{v(),l==="pending"&&(P(),_())},e.timeout);return}_();return}const E={status:"pending",resource:d,callback:(T,O)=>{j(E,T,O)}};p.push(E),a++,h=setTimeout(x,e.rotate),n(d,t,E.callback)}return setTimeout(x),u}function Xe(e){const t={...zt,...e};let n=[];function o(){n=n.filter(c=>c().status==="pending")}function r(c,l,a){const f=Ht(t,c,l,(h,p)=>{o(),a&&a(h,p)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:r,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:o}}function Me(){}const ce=Object.create(null);function Qt(e){if(!ce[e]){const t=xe(e);if(!t)return;const n=Xe(t),o={config:t,redundancy:n};ce[e]=o}return ce[e]}function Vt(e,t,n){let o,r;if(typeof e=="string"){const s=ue(e);if(!s)return n(void 0,424),Me;r=s.send;const i=Qt(e);i&&(o=i.redundancy)}else{const s=we(e);if(s){o=Xe(s);const i=e.resources?e.resources[0]:"",c=ue(i);c&&(r=c.send)}}return!o||!r?(n(void 0,424),Me):o.query(t,r,n)().abort}const Oe="iconify2",H="iconify",Ye=H+"-count",Fe=H+"-version",Ze=36e5,Gt=168;function de(e,t){try{return e.getItem(t)}catch{}}function Se(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ne(e,t){try{e.removeItem(t)}catch{}}function he(e,t){return Se(e,Ye,t.toString())}function pe(e){return parseInt(de(e,Ye))||0}const Z={local:!0,session:!0},et={local:new Set,session:new Set};let Ie=!1;function Kt(e){Ie=e}let Q=typeof window>"u"?{}:window;function tt(e){const t=e+"Storage";try{if(Q&&Q[t]&&typeof Q[t].length=="number")return Q[t]}catch{}Z[e]=!1}function nt(e,t){const n=tt(e);if(!n)return;const o=de(n,Fe);if(o!==Oe){if(o){const c=pe(n);for(let l=0;l<c;l++)Ne(n,H+l.toString())}Se(n,Fe,Oe),he(n,0);return}const r=Math.floor(Date.now()/Ze)-Gt,s=c=>{const l=H+c.toString(),a=de(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>r&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Ne(n,l)}};let i=pe(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,he(n,i)):et[e].add(c))}function rt(){if(!Ie){Kt(!0);for(const e in Z)nt(e,t=>{const n=t.data,o=t.provider,r=n.prefix,s=D(o,r);if(!ve(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Wt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in Z)nt(o,r=>{const s=r.data;return r.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function Jt(e,t){Ie||rt();function n(o){let r;if(!Z[o]||!(r=tt(o)))return;const s=et[o];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=pe(r),!he(r,i+1))return;const c={cached:Math.floor(Date.now()/Ze),provider:e.provider,data:t};return Se(r,H+i.toString(),JSON.stringify(c))}t.lastModified&&!Wt(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function De(){}function Xt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Rt(e)}))}function Yt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:o}=e,r=e.iconsToLoad;delete e.iconsToLoad;let s;if(!r||!(s=ue(n)))return;s.prepare(n,o,r).forEach(c=>{Vt(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=ve(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(h=>{f.delete(h)}),Jt(e,l)}catch(a){console.error(a)}Xt(e)})})}))}const Zt=(e,t)=>{const n=qt(e,!0,Ge()),o=Bt(n);if(!o.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(o.loaded,o.missing,o.pending,De)}),()=>{l=!1}}const r=Object.create(null),s=[];let i,c;return o.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(D(a,f));const h=r[a]||(r[a]=Object.create(null));h[f]||(h[f]=[])}),o.pending.forEach(l=>{const{provider:a,prefix:f,name:h}=l,p=D(a,f),g=p.pendingIcons||(p.pendingIcons=new Set);g.has(h)||(g.add(h),r[a][f].push(h))}),s.forEach(l=>{const{provider:a,prefix:f}=l;r[a][f].length&&Yt(l,r[a][f])}),t?$t(t,o,s):De};function en(e,t){const n={...e};for(const o in t){const r=t[o],s=typeof r;o in Ke?(r===null||r&&(s==="string"||s==="number"))&&(n[o]=r):s===typeof n[o]&&(n[o]=o==="rotate"?r%4:r)}return n}const tn=/[\s,]+/;function nn(e,t){t.split(tn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function rn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:o(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?o(s):0)}}return t}function on(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function sn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function cn(e){return'url("data:image/svg+xml,'+sn(e)+'")'}const Be={...We,inline:!1},ln={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},an={display:"inline-block"},ge={"background-color":"currentColor"},ot={"background-color":"transparent"},Re={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ue={"-webkit-mask":ge,mask:ge,background:ot};for(const e in Ue){const t=Ue[e];for(const n in Re)t[e+"-"+n]=Re[n]}function $e(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function fn(e,t){const n=en(Be,t),o=t.mode||"svg",r=o==="svg"?{...ln}:{};let s=typeof t.style=="string"?t.style:"";for(let m in t){const u=t[m];if(u!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[m]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&nn(n,u);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+u+"; ";break;case"rotate":typeof u=="string"?n[m]=rn(u):typeof u=="number"&&(n[m]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete r["aria-hidden"];break;default:if(m.slice(0,3)==="on:")break;Be[m]===void 0&&(r[m]=u)}}const i=It(e,n),c=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),o==="svg"){Object.assign(r,c),s!==""&&(r.style=s);let m=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),{svg:!0,attributes:r,body:Pt(i.body,u?()=>u+"ID"+m++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,h=o==="mask"||(o==="bg"?!1:l.indexOf("currentColor")!==-1),p=on(l,{...c,width:a+"",height:f+""}),v={"--svg":cn(p),width:$e(c.width),height:$e(c.height),...an,...h?ge:ot};let w="";for(const m in v)w+=m+": "+v[m]+";";return r.style=w+s,{svg:!1,attributes:r}}Ge(!0);Tt("",Dt);if(typeof document<"u"&&typeof window<"u"){rt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!_t(o))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const o="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;jt(n,r)||console.error(o)}catch{console.error(o)}}}}function un(e,t,n,o,r){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",s(),{data:{...Y,...e}};let i;if(typeof e!="string"||(i=X(e,!1,!0))===null)return s(),null;const c=vt(i);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:Zt([i],o)}),null;s(),t.name!==e&&(t.name=e,r&&!t.destroyed&&r(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function dn(e,t){return e?fn({...Y,...e},t):null}function qe(e){let t;function n(s,i){return s[0].svg?pn:hn}let o=n(e),r=o(e);return{c(){r.c(),t=K()},l(s){r.l(s),t=K()},m(s,i){r.m(s,i),B(s,t,i)},p(s,i){o===(o=n(s))&&r?r.p(s,i):(r.d(1),r=o(s),r&&(r.c(),r.m(t.parentNode,t)))},d(s){r.d(s),s&&S(t)}}}function hn(e){let t,n=[e[0].attributes],o={};for(let r=0;r<n.length;r+=1)o=W(o,n[r]);return{c(){t=I("span"),this.h()},l(r){t=k(r,"SPAN",{}),C(t).forEach(S),this.h()},h(){Ee(t,o)},m(r,s){B(r,t,s)},p(r,s){Ee(t,o=ze(n,[s&1&&r[0].attributes]))},d(r){r&&S(t)}}}function pn(e){let t,n=e[0].body+"",o=[e[0].attributes],r={};for(let s=0;s<o.length;s+=1)r=W(r,o[s]);return{c(){t=ct("svg"),this.h()},l(s){t=lt(s,"svg",{});var i=C(t);i.forEach(S),this.h()},h(){Pe(t,r)},m(s,i){B(s,t,i),t.innerHTML=n},p(s,i){i&1&&n!==(n=s[0].body+"")&&(t.innerHTML=n),Pe(t,r=ze(o,[i&1&&s[0].attributes]))},d(s){s&&S(t)}}}function gn(e){let t,n=e[0]&&qe(e);return{c(){n&&n.c(),t=K()},l(o){n&&n.l(o),t=K()},m(o,r){n&&n.m(o,r),B(o,t,r)},p(o,[r]){o[0]?n?n.p(o,r):(n=qe(o),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:$,o:$,d(o){n&&n.d(o),o&&S(t)}}}function mn(e,t,n){const o={name:"",loading:null,destroyed:!1};let r=!1,s=0,i;const c=a=>{typeof t.onLoad=="function"&&t.onLoad(a),at()("load",{icon:a})};function l(){n(3,s++,s)}return st(()=>{n(2,r=!0)}),it(()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))}),e.$$set=a=>{n(6,t=W(W({},t),Ce(a)))},e.$$.update=()=>{{const a=un(t.icon,o,r,l,c);n(0,i=a?dn(a.data,t):null),i&&a.classes&&n(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),i)}},t=Ce(t),[i,o,r,s]}class le extends me{constructor(t){super(),ye(this,t,mn,gn,be,{})}}function yn(e){let t,n,o,r,s,i,c,l,a,f,h,p,g,v,w,m,u,_,P,j;return c=new le({props:{icon:"fa6-brands:instagram",width:"25",height:"25"}}),f=new le({props:{icon:"fa6-brands:github",width:"25",height:"25"}}),g=new le({props:{icon:"fa6-brands:twitter",width:"25",height:"25"}}),{c(){t=I("footer"),n=I("p"),o=F("\xA9 2022 All right reserved."),r=A(),s=I("div"),i=I("a"),ee(c.$$.fragment),l=A(),a=I("a"),ee(f.$$.fragment),h=A(),p=I("a"),ee(g.$$.fragment),v=A(),w=I("p"),m=F("Last updated: "),u=I("br"),_=A(),P=F(e[0]),this.h()},l(x){t=k(x,"FOOTER",{class:!0});var d=C(t);n=k(d,"P",{class:!0});var E=C(n);o=N(E,"\xA9 2022 All right reserved."),E.forEach(S),r=M(d),s=k(d,"DIV",{class:!0});var T=C(s);i=k(T,"A",{href:!0,target:!0,rel:!0,class:!0});var O=C(i);te(c.$$.fragment,O),O.forEach(S),l=M(T),a=k(T,"A",{href:!0,target:!0,rel:!0,class:!0});var L=C(a);te(f.$$.fragment,L),L.forEach(S),h=M(T),p=k(T,"A",{href:!0,target:!0,rel:!0,class:!0});var ke=C(p);te(g.$$.fragment,ke),ke.forEach(S),T.forEach(S),v=M(d),w=k(d,"P",{class:!0});var R=C(w);m=N(R,"Last updated: "),u=k(R,"BR",{class:!0}),_=M(R),P=N(R,e[0]),R.forEach(S),d.forEach(S),this.h()},h(){y(n,"class","mc-c-footer__item--copyright svelte-1a7f8c"),y(i,"href","https://www.instagram.com/milkcee12/"),y(i,"target","_blank"),y(i,"rel","noreferrer"),y(i,"class","svelte-1a7f8c"),y(a,"href","https://github.com/milkcee12/"),y(a,"target","_blank"),y(a,"rel","noreferrer"),y(a,"class","svelte-1a7f8c"),y(p,"href","https://twitter.com/milkcee12"),y(p,"target","_blank"),y(p,"rel","noreferrer"),y(p,"class","svelte-1a7f8c"),y(s,"class","mc-c-footer__item--socials svelte-1a7f8c"),y(u,"class","svelte-1a7f8c"),y(w,"class","mc-c-footer__item--updated svelte-1a7f8c"),y(t,"class","mc-c-footer svelte-1a7f8c")},m(x,d){B(x,t,d),b(t,n),b(n,o),b(t,r),b(t,s),b(s,i),ne(c,i,null),b(s,l),b(s,a),ne(f,a,null),b(s,h),b(s,p),ne(g,p,null),b(t,v),b(t,w),b(w,m),b(w,u),b(w,_),b(w,P),j=!0},p(x,[d]){(!j||d&1)&&ft(P,x[0])},i(x){j||(re(c.$$.fragment,x),re(f.$$.fragment,x),re(g.$$.fragment,x),j=!0)},o(x){oe(c.$$.fragment,x),oe(f.$$.fragment,x),oe(g.$$.fragment,x),j=!1},d(x){x&&S(t),se(c),se(f),se(g)}}}function bn(e,t,n){let o="undefined";return fetch(ut).then(r=>r.json()).then(r=>{const s={weekday:"long",year:"numeric",month:"long",day:"numeric"};var i=new Date(r[0].commit.committer.date);n(0,o=i.toLocaleDateString("en-US",s))}),[o]}class xn extends me{constructor(t){super(),ye(this,t,bn,yn,be,{})}}export{xn as F,le as I,_n as N};
