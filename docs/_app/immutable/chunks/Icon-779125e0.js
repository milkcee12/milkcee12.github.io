import{S as Be,i as Qe,s as qe,e as O,b as N,B as oe,h as I,o as ze,I as He,J as F,K as re,k as Ue,l as Ve,m as ve,L as ie,M as Se,N as Ke,O as Ge,P as se,Q as Je}from"./index-1133d749.js";const _=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,o,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),f={provider:n.length>0?n[0]:r,prefix:l,name:c};return t&&!M(f)?null:f}const i=n[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!M(c)?null:c}if(o&&r===""){const c={provider:r,prefix:"",name:i};return t&&!M(c,o)?null:c}return null},M=(e,t)=>e?!!((e.provider===""||e.provider.match(_))&&(t&&e.prefix===""||e.prefix.match(_))&&e.name.match(_)):!1,Ie=Object.freeze({left:0,top:0,width:16,height:16}),A=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),R=Object.freeze({...Ie,...A}),H=Object.freeze({...R,body:"",hidden:!1});function We(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(o.rotate=r),o}function ce(e,t){const o=We(e,t);for(const r in H)r in A?r in e&&!(r in o)&&(o[r]=A[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function Xe(e,t){const o=e.icons,r=e.aliases||Object.create(null),n=Object.create(null);function i(s){if(o[s])return n[s]=[];if(!(s in n)){n[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(n[s]=[c].concat(l))}return n[s]}return(t||Object.keys(o).concat(Object.keys(r))).forEach(i),n}function Ye(e,t,o){const r=e.icons,n=e.aliases||Object.create(null);let i={};function s(c){i=ce(r[c]||n[c],i)}return s(t),o.forEach(s),ce(e,i)}function ke(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const r=Xe(e);for(const n in r){const i=r[n];i&&(t(n,Ye(e,n,i)),o.push(n))}return o}const Ze={provider:"",aliases:{},not_found:{},...Ie};function q(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function Ce(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!q(e,Ze))return null;const o=t.icons;for(const n in o){const i=o[n];if(!n.match(_)||typeof i.body!="string"||!q(i,H))return null}const r=t.aliases||Object.create(null);for(const n in r){const i=r[n],s=i.parent;if(!n.match(_)||typeof s!="string"||!o[s]&&!r[s]||!q(i,H))return null}return t}const le=Object.create(null);function $e(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function v(e,t){const o=le[e]||(le[e]=Object.create(null));return o[t]||(o[t]=$e(e,t))}function X(e,t){return Ce(t)?ke(t,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function et(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let T=!1;function _e(e){return typeof e=="boolean"&&(T=e),T}function tt(e){const t=typeof e=="string"?D(e,!0,T):e;if(t){const o=v(t.provider,t.prefix),r=t.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function nt(e,t){const o=D(e,!0,T);if(!o)return!1;const r=v(o.provider,o.prefix);return et(r,o.name,t)}function ot(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),T&&!t&&!e.prefix){let n=!1;return Ce(e)&&(e.prefix="",ke(e,(i,s)=>{s&&nt(i,s)&&(n=!0)})),n}const o=e.prefix;if(!M({provider:t,prefix:o,name:"a"}))return!1;const r=v(t,o);return!!X(r,e)}const Te=Object.freeze({width:null,height:null}),je=Object.freeze({...Te,...A}),rt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,it=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function fe(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const r=e.split(rt);if(r===null||!r.length)return e;const n=[];let i=r.shift(),s=it.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?n.push(i):n.push(Math.ceil(c*t*o)/o)}else n.push(i);if(i=r.shift(),i===void 0)return n.join("");s=!s}}function st(e,t){const o={...R,...e},r={...je,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let i=o.body;[o,r].forEach(b=>{const m=[],S=b.hFlip,g=b.vFlip;let a=b.rotate;S?g?a+=2:(m.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),m.push("scale(-1 1)"),n.top=n.left=0):g&&(m.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),m.push("scale(1 -1)"),n.top=n.left=0);let y;switch(a<0&&(a-=Math.floor(a/4)*4),a=a%4,a){case 1:y=n.height/2+n.top,m.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:m.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:y=n.width/2+n.left,m.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}a%2===1&&(n.left!==n.top&&(y=n.left,n.left=n.top,n.top=y),n.width!==n.height&&(y=n.width,n.width=n.height,n.height=y)),m.length&&(i='<g transform="'+m.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=n.width,f=n.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?f:c,u=fe(d,l/f)):(u=s==="auto"?l:s,d=c===null?fe(u,f/l):c==="auto"?f:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:n.left.toString()+" "+n.top.toString()+" "+l.toString()+" "+f.toString()},body:i}}const ct=/\sid="(\S+)"/g,lt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ft=0;function ut(e,t=lt){const o=[];let r;for(;r=ct.exec(e);)o.push(r[1]);return o.length&&o.forEach(n=>{const i=typeof t=="function"?t(n):t+(ft++).toString(),s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),e}const U=Object.create(null);function at(e,t){U[e]=t}function V(e){return U[e]||U[""]}function Y(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Z=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;C.length>0;)C.length===1||Math.random()>.5?L.push(C.shift()):L.push(C.pop());Z[""]=Y({resources:["https://api.iconify.design"].concat(L)});function dt(e,t){const o=Y(t);return o===null?!1:(Z[e]=o,!0)}function $(e){return Z[e]}const ht=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ue=ht();function pt(e,t){const o=$(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let n=0;o.resources.forEach(s=>{n=Math.max(n,s.length)});const i=t+".json?icons=";r=o.maxURL-n-o.path.length-i.length}return r}function gt(e){return e===404}const mt=(e,t,o)=>{const r=[],n=pt(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return o.forEach((l,f)=>{c+=l.length+1,c>=n&&f>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function yt(e){if(typeof e=="string"){const t=$(e);if(t)return t.path}return"/"}const bt=(e,t,o)=>{if(!ue){o("abort",424);return}let r=yt(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let n=503;ue(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{o(gt(s)?"abort":"next",s)});return}return n=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",n)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",n)})},wt={prepare:mt,send:bt};function xt(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,i)=>n.provider!==i.provider?n.provider.localeCompare(i.provider):n.prefix!==i.prefix?n.prefix.localeCompare(i.prefix):n.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const i=n.provider,s=n.prefix,c=n.name,l=o[i]||(o[i]=Object.create(null)),f=l[s]||(l[s]=v(i,s));let u;c in f.icons?u=t.loaded:s===""||f.missing.has(c)?u=t.missing:u=t.pending;const d={provider:i,prefix:s,name:c};u.push(d)}),t}function Pe(e,t){e.forEach(o=>{const r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(n=>n.id!==t))})}function vt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const r=e.provider,n=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==n)return!0;const f=l.name;if(e.icons[f])s.loaded.push({provider:r,prefix:n,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:n,name:f});else return o=!0,!0;return!1}),s.pending.length!==c&&(o||Pe([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let St=0;function It(e,t,o){const r=St++,n=Pe.bind(null,o,r);if(!t.pending.length)return n;const i={id:r,icons:t,callback:e,abort:n};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),n}function kt(e,t=!0,o=!1){const r=[];return e.forEach(n=>{const i=typeof n=="string"?D(n,t,o):n;i&&r.push(i)}),r}var Ct={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function _t(e,t,o,r){const n=e.resources.length,i=e.random?Math.floor(Math.random()*n):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const w=Math.floor(Math.random()*h.length);s.push(h[w]),h=h.slice(0,w).concat(h.slice(w+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",f=0,u,d=null,p=[],b=[];typeof r=="function"&&b.push(r);function m(){d&&(clearTimeout(d),d=null)}function S(){l==="pending"&&(l="aborted"),m(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function g(h,w){w&&(b=[]),typeof h=="function"&&b.push(h)}function a(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:p.length,subscribe:g,abort:S}}function y(){l="failed",b.forEach(h=>{h(void 0,u)})}function ne(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function Re(h,w,k){const P=w!=="success";switch(p=p.filter(x=>x!==h),l){case"pending":break;case"failed":if(P||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){u=k,y();return}if(P){u=k,p.length||(s.length?Q():y());return}if(m(),ne(),!e.random){const x=e.resources.indexOf(h.resource);x!==-1&&x!==e.index&&(e.index=x)}l="completed",b.forEach(x=>{x(k)})}function Q(){if(l!=="pending")return;m();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{m(),l==="pending"&&(ne(),y())},e.timeout);return}y();return}const w={status:"pending",resource:h,callback:(k,P)=>{Re(w,k,P)}};p.push(w),f++,d=setTimeout(Q,e.rotate),o(h,t,w.callback)}return setTimeout(Q),a}function Ee(e){const t={...Ct,...e};let o=[];function r(){o=o.filter(c=>c().status==="pending")}function n(c,l,f){const u=_t(t,c,l,(d,p)=>{r(),f&&f(d,p)});return o.push(u),u}function i(c){return o.find(l=>c(l))||null}return{query:n,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function ae(){}const z=Object.create(null);function Tt(e){if(!z[e]){const t=$(e);if(!t)return;const o=Ee(t),r={config:t,redundancy:o};z[e]=r}return z[e]}function jt(e,t,o){let r,n;if(typeof e=="string"){const i=V(e);if(!i)return o(void 0,424),ae;n=i.send;const s=Tt(e);s&&(r=s.redundancy)}else{const i=Y(e);if(i){r=Ee(i);const s=e.resources?e.resources[0]:"",c=V(s);c&&(n=c.send)}}return!r||!n?(o(void 0,424),ae):r.query(t,n,o)().abort}const de="iconify2",j="iconify",Me=j+"-count",he=j+"-version",Le=36e5,Pt=168;function K(e,t){try{return e.getItem(t)}catch{}}function ee(e,t,o){try{return e.setItem(t,o),!0}catch{}}function pe(e,t){try{e.removeItem(t)}catch{}}function G(e,t){return ee(e,Me,t.toString())}function J(e){return parseInt(K(e,Me))||0}const B={local:!0,session:!0},Oe={local:new Set,session:new Set};let te=!1;function Et(e){te=e}let E=typeof window>"u"?{}:window;function Fe(e){const t=e+"Storage";try{if(E&&E[t]&&typeof E[t].length=="number")return E[t]}catch{}B[e]=!1}function Ae(e,t){const o=Fe(e);if(!o)return;const r=K(o,he);if(r!==de){if(r){const c=J(o);for(let l=0;l<c;l++)pe(o,j+l.toString())}ee(o,he,de),G(o,0);return}const n=Math.floor(Date.now()/Le)-Pt,i=c=>{const l=j+c.toString(),f=K(o,l);if(typeof f=="string"){try{const u=JSON.parse(f);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}pe(o,l)}};let s=J(o);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,G(o,s)):Oe[e].add(c))}function Ne(){if(!te){Et(!0);for(const e in B)Ae(e,t=>{const o=t.data,r=t.provider,n=o.prefix,i=v(r,n);if(!X(i,o).length)return!1;const s=o.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Mt(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const r in B)Ae(r,n=>{const i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function Lt(e,t){te||Ne();function o(r){let n;if(!B[r]||!(n=Fe(r)))return;const i=Oe[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=J(n),!G(n,s+1))return;const c={cached:Math.floor(Date.now()/Le),provider:e.provider,data:t};return ee(n,j+s.toString(),JSON.stringify(c))}t.lastModified&&!Mt(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function ge(){}function Ot(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,vt(e)}))}function Ft(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let i;if(!n||!(i=V(o)))return;i.prepare(o,r,n).forEach(c=>{jt(o,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{e.missing.add(f)});else try{const f=X(e,l);if(!f.length)return;const u=e.pendingIcons;u&&f.forEach(d=>{u.delete(d)}),Lt(e,l)}catch(f){console.error(f)}Ot(e)})})}))}const At=(e,t)=>{const o=kt(e,!0,_e()),r=xt(o);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ge)}),()=>{l=!1}}const n=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:u}=l;if(u===c&&f===s)return;s=f,c=u,i.push(v(f,u));const d=n[f]||(n[f]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:u,name:d}=l,p=v(f,u),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(d)||(b.add(d),n[f][u].push(d))}),i.forEach(l=>{const{provider:f,prefix:u}=l;n[f][u].length&&Ft(l,n[f][u])}),t?It(t,r,i):ge};function Nt(e,t){const o={...e};for(const r in t){const n=t[r],i=typeof n;r in Te?(n===null||n&&(i==="string"||i==="number"))&&(o[r]=n):i===typeof o[r]&&(o[r]=r==="rotate"?n%4:n)}return o}const Dt=/[\s,]+/;function Rt(e,t){t.split(Dt).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Bt(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/n,i%1===0?r(i):0)}}return t}function Qt(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function qt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function zt(e){return'url("data:image/svg+xml,'+qt(e)+'")'}const me={...je,inline:!1},Ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ut={display:"inline-block"},W={"background-color":"currentColor"},De={"background-color":"transparent"},ye={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},be={"-webkit-mask":W,mask:W,background:De};for(const e in be){const t=be[e];for(const o in ye)t[e+"-"+o]=ye[o]}function we(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Vt(e,t){const o=Nt(me,t),r=t.mode||"svg",n=r==="svg"?{...Ht}:{};let i=typeof t.style=="string"?t.style:"";for(let g in t){const a=t[g];if(a!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[g]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&Rt(o,a);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+a+"; ";break;case"rotate":typeof a=="string"?o[g]=Bt(a):typeof a=="number"&&(o[g]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete n["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;me[g]===void 0&&(n[g]=a)}}const s=st(e,o),c=s.attributes;if(o.inline&&(i="vertical-align: -0.125em; "+i),r==="svg"){Object.assign(n,c),i!==""&&(n.style=i);let g=0,a=t.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),{svg:!0,attributes:n,body:ut(s.body,a?()=>a+"ID"+g++:"iconifySvelte")}}const{body:l,width:f,height:u}=e,d=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),p=Qt(l,{...c,width:f+"",height:u+""}),m={"--svg":zt(p),width:we(c.width),height:we(c.height),...Ut,...d?W:De};let S="";for(const g in m)S+=g+": "+m[g]+";";return n.style=S+i,{svg:!1,attributes:n}}_e(!0);at("",wt);if(typeof document<"u"&&typeof window<"u"){Ne();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ot(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const r="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;dt(o,n)||console.error(r)}catch{console.error(r)}}}}function Kt(e,t,o,r,n){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",i(),{data:{...R,...e}};let s;if(typeof e!="string"||(s=D(e,!1,!0))===null)return i(),null;const c=tt(s);if(!c)return o&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:At([s],r)}),null;i(),t.name!==e&&(t.name=e,n&&!t.destroyed&&n(e));const l=["iconify"];return s.prefix!==""&&l.push("iconify--"+s.prefix),s.provider!==""&&l.push("iconify--"+s.provider),{data:c,classes:l}}function Gt(e,t){return e?Vt({...R,...e},t):null}function xe(e){let t;function o(i,s){return i[0].svg?Wt:Jt}let r=o(e),n=r(e);return{c(){n.c(),t=O()},l(i){n.l(i),t=O()},m(i,s){n.m(i,s),N(i,t,s)},p(i,s){r===(r=o(i))&&n?n.p(i,s):(n.d(1),n=r(i),n&&(n.c(),n.m(t.parentNode,t)))},d(i){n.d(i),i&&I(t)}}}function Jt(e){let t,o=[e[0].attributes],r={};for(let n=0;n<o.length;n+=1)r=F(r,o[n]);return{c(){t=Ue("span"),this.h()},l(n){t=Ve(n,"SPAN",{}),ve(t).forEach(I),this.h()},h(){ie(t,r)},m(n,i){N(n,t,i)},p(n,i){ie(t,r=Se(o,[i&1&&n[0].attributes]))},d(n){n&&I(t)}}}function Wt(e){let t,o=e[0].body+"",r=[e[0].attributes],n={};for(let i=0;i<r.length;i+=1)n=F(n,r[i]);return{c(){t=Ke("svg"),this.h()},l(i){t=Ge(i,"svg",{});var s=ve(t);s.forEach(I),this.h()},h(){se(t,n)},m(i,s){N(i,t,s),t.innerHTML=o},p(i,s){s&1&&o!==(o=i[0].body+"")&&(t.innerHTML=o),se(t,n=Se(r,[s&1&&i[0].attributes]))},d(i){i&&I(t)}}}function Xt(e){let t,o=e[0]&&xe(e);return{c(){o&&o.c(),t=O()},l(r){o&&o.l(r),t=O()},m(r,n){o&&o.m(r,n),N(r,t,n)},p(r,[n]){r[0]?o?o.p(r,n):(o=xe(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},i:oe,o:oe,d(r){o&&o.d(r),r&&I(t)}}}function Yt(e,t,o){const r={name:"",loading:null,destroyed:!1};let n=!1,i=0,s;const c=f=>{typeof t.onLoad=="function"&&t.onLoad(f),Je()("load",{icon:f})};function l(){o(3,i++,i)}return ze(()=>{o(2,n=!0)}),He(()=>{o(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),o(1,r.loading=null,r))}),e.$$set=f=>{o(6,t=F(F({},t),re(f)))},e.$$.update=()=>{{const f=Kt(t.icon,r,n,l,c);o(0,s=f?Gt(f.data,t):null),s&&f.classes&&o(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+f.classes.join(" "),s)}},t=re(t),[s,r,n,i]}class $t extends Be{constructor(t){super(),Qe(this,t,Yt,Xt,qe,{})}}export{$t as I};
