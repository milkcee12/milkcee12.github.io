import{S as We,i as Le,s as Re,k as i,q as w,a as _,w as ne,l as c,m as o,r as y,h as s,c as g,x as ie,n as t,b as X,G as e,y as ce,u as oe,f as ve,t as fe,z as he,R as Oe,T as Fe,U as qe,V as Te,B as Ae}from"../../chunks/index-c1b971f1.js";import{I as Ge,N as je,F as Be}from"../../chunks/footer-6c33b5ed.js";function $e(d,n,l){const v=d.slice();return v[7]=n[l],v}function Ce(d){let n,l=d[7].name+"",v,b;return{c(){n=i("li"),v=w(l),this.h()},l(u){n=c(u,"LI",{class:!0});var I=o(n);v=y(I,l),I.forEach(s),this.h()},h(){t(n,"class",b=Fe(`tag-${d[7].type}`)+" svelte-n0kkv5")},m(u,I){X(u,n,I),e(n,v)},p(u,I){I&64&&l!==(l=u[7].name+"")&&oe(v,l),I&64&&b!==(b=Fe(`tag-${u[7].type}`)+" svelte-n0kkv5")&&t(n,"class",b)},d(u){u&&s(n)}}}function Xe(d){let n,l,v,b,u,I,D,N,W,f,z,K,S,H,O,Q,P,q,x,A,p,F,C,G,E;P=new Ge({props:{icon:"radix-icons:triangle-right"}});let U=d[6],k=[];for(let a=0;a<U.length;a+=1)k[a]=Ce($e(d,U,a));return{c(){n=i("div"),l=i("div"),v=i("div"),b=i("h3"),u=w(d[1]),I=_(),D=i("p"),N=w(d[2]),W=_(),f=i("p"),z=w(d[3]),K=_(),S=i("p"),H=i("a"),O=w(d[4]),Q=_(),ne(P.$$.fragment),q=_(),x=i("div"),A=_(),p=i("div"),F=i("div"),C=i("ul");for(let a=0;a<k.length;a+=1)k[a].c();this.h()},l(a){n=c(a,"DIV",{class:!0});var m=o(n);l=c(m,"DIV",{class:!0});var h=o(l);v=c(h,"DIV",{class:!0});var V=o(v);b=c(V,"H3",{class:!0});var Z=o(b);u=y(Z,d[1]),Z.forEach(s),I=g(V),D=c(V,"P",{class:!0});var ee=o(D);N=y(ee,d[2]),ee.forEach(s),W=g(V),f=c(V,"P",{class:!0});var M=o(f);z=y(M,d[3]),M.forEach(s),K=g(V),S=c(V,"P",{class:!0});var te=o(S);H=c(te,"A",{href:!0,class:!0});var T=o(H);O=y(T,d[4]),Q=g(T),ie(P.$$.fragment,T),T.forEach(s),te.forEach(s),V.forEach(s),h.forEach(s),q=g(m),x=c(m,"DIV",{class:!0}),o(x).forEach(s),A=g(m),p=c(m,"DIV",{class:!0});var se=o(p);F=c(se,"DIV",{class:!0});var le=o(F);C=c(le,"UL",{class:!0});var ae=o(C);for(let $=0;$<k.length;$+=1)k[$].l(ae);ae.forEach(s),le.forEach(s),se.forEach(s),m.forEach(s),this.h()},h(){t(b,"class","title svelte-n0kkv5"),t(D,"class","date svelte-n0kkv5"),t(f,"class","blurb svelte-n0kkv5"),t(H,"href",d[5]),t(H,"class","svelte-n0kkv5"),t(S,"class","expand svelte-n0kkv5"),t(v,"class","content svelte-n0kkv5"),t(l,"class","col col-content svelte-n0kkv5"),t(x,"class","vl svelte-n0kkv5"),t(C,"class","svelte-n0kkv5"),t(F,"class","tags svelte-n0kkv5"),t(p,"class","col svelte-n0kkv5"),t(n,"class",G="block "+(d[0]%2===0?"even":"odd")+" svelte-n0kkv5")},m(a,m){X(a,n,m),e(n,l),e(l,v),e(v,b),e(b,u),e(v,I),e(v,D),e(D,N),e(v,W),e(v,f),e(f,z),e(v,K),e(v,S),e(S,H),e(H,O),e(H,Q),ce(P,H,null),e(n,q),e(n,x),e(n,A),e(n,p),e(p,F),e(F,C);for(let h=0;h<k.length;h+=1)k[h].m(C,null);E=!0},p(a,[m]){if((!E||m&2)&&oe(u,a[1]),(!E||m&4)&&oe(N,a[2]),(!E||m&8)&&oe(z,a[3]),(!E||m&16)&&oe(O,a[4]),(!E||m&32)&&t(H,"href",a[5]),m&64){U=a[6];let h;for(h=0;h<U.length;h+=1){const V=$e(a,U,h);k[h]?k[h].p(V,m):(k[h]=Ce(V),k[h].c(),k[h].m(C,null))}for(;h<k.length;h+=1)k[h].d(1);k.length=U.length}(!E||m&1&&G!==(G="block "+(a[0]%2===0?"even":"odd")+" svelte-n0kkv5"))&&t(n,"class",G)},i(a){E||(ve(P.$$.fragment,a),E=!0)},o(a){fe(P.$$.fragment,a),E=!1},d(a){a&&s(n),he(P),Oe(k,a)}}}function ze(d,n,l){let{id:v,title:b,date:u,blurb:I,expand:D,expandHref:N,tags:W}=n;return d.$$set=f=>{"id"in f&&l(0,v=f.id),"title"in f&&l(1,b=f.title),"date"in f&&l(2,u=f.date),"blurb"in f&&l(3,I=f.blurb),"expand"in f&&l(4,D=f.expand),"expandHref"in f&&l(5,N=f.expandHref),"tags"in f&&l(6,W=f.tags)},[v,b,u,I,D,N,W]}class Me extends We{constructor(n){super(),Le(this,n,ze,Xe,Re,{id:0,title:1,date:2,blurb:3,expand:4,expandHref:5,tags:6})}}const Ke=""+new URL("../../assets/hero-figure-932cc342.png",import.meta.url).href,Qe=""+new URL("../../assets/hero-signature-a659ed62.png",import.meta.url).href;function Je(d){let n,l,v,b,u,I,D,N,W,f,z,K,S,H,O,Q,P,q,x,A,p,F,C,G,E,U,k,a,m,h,V,Z,ee,M,te,T,se,le,ae,$,re,be,Ie,j,Ve,J,De,He,de,Y,ue;return x=new je({}),U=new Me({props:{id:++Ne,title:"Milkcee Studios",date:"2022",blurb:"Designed my portfolio website. Implemented using SvelteKit and MySQL.",expand:"View the creation process",expandHref:"#",tags:[{name:"Front-End",type:"tech"},{name:"Back-End",type:"tech"},{name:"UI/UX",type:"art"}]}}),a=new Me({props:{id:++Ne,title:"Trojan Dining",date:"2021 - Present",blurb:"Student-first redesign of the USC Residential Dining Menu website. Implemented using React.js.",expand:"View case study",expandHref:"#",tags:[{name:"Front-End",type:"tech"},{name:"UI/UX",type:"art"}]}}),Y=new Be({}),{c(){n=_(),l=i("section"),v=i("div"),b=_(),u=i("div"),I=_(),D=i("img"),W=_(),f=i("img"),K=_(),S=i("div"),H=i("p"),O=w("Explore"),Q=_(),P=i("div"),q=_(),ne(x.$$.fragment),A=_(),p=i("div"),F=i("h2"),C=w("Featured Work"),G=_(),E=i("section"),ne(U.$$.fragment),k=_(),ne(a.$$.fragment),m=_(),h=i("section"),V=i("h2"),Z=w("Works"),ee=_(),M=i("p"),te=w("Visit "),T=i("a"),se=w("kit.svelte.dev"),le=w(" to read the documentation"),ae=_(),$=i("section"),re=i("h2"),be=w("Hello World \u{1F44B}"),Ie=_(),j=i("p"),Ve=w("Visit "),J=i("a"),De=w("kit.svelte.dev"),He=w(" to read the documentation"),de=_(),ne(Y.$$.fragment),this.h()},l(r){qe("svelte-t6sc9g",document.head).forEach(s),n=g(r),l=c(r,"SECTION",{class:!0});var L=o(l);v=c(L,"DIV",{class:!0}),o(v).forEach(s),b=g(L),u=c(L,"DIV",{class:!0}),o(u).forEach(s),I=g(L),D=c(L,"IMG",{class:!0,src:!0,alt:!0}),W=g(L),f=c(L,"IMG",{class:!0,src:!0,alt:!0}),K=g(L),S=c(L,"DIV",{class:!0});var me=o(S);H=c(me,"P",{class:!0});var Se=o(H);O=y(Se,"Explore"),Se.forEach(s),Q=g(me),P=c(me,"DIV",{class:!0}),o(P).forEach(s),me.forEach(s),L.forEach(s),q=g(r),ie(x.$$.fragment,r),A=g(r),p=c(r,"DIV",{class:!0});var B=o(p);F=c(B,"H2",{class:!0});var we=o(F);C=y(we,"Featured Work"),we.forEach(s),G=g(B),E=c(B,"SECTION",{class:!0});var _e=o(E);ie(U.$$.fragment,_e),k=g(_e),ie(a.$$.fragment,_e),_e.forEach(s),m=g(B),h=c(B,"SECTION",{class:!0});var ge=o(h);V=c(ge,"H2",{class:!0});var ye=o(V);Z=y(ye,"Works"),ye.forEach(s),ee=g(ge),M=c(ge,"P",{class:!0});var pe=o(M);te=y(pe,"Visit "),T=c(pe,"A",{href:!0,class:!0});var Ue=o(T);se=y(Ue,"kit.svelte.dev"),Ue.forEach(s),le=y(pe," to read the documentation"),pe.forEach(s),ge.forEach(s),ae=g(B),$=c(B,"SECTION",{class:!0});var ke=o($);re=c(ke,"H2",{class:!0});var Pe=o(re);be=y(Pe,"Hello World \u{1F44B}"),Pe.forEach(s),Ie=g(ke),j=c(ke,"P",{class:!0});var Ee=o(j);Ve=y(Ee,"Visit "),J=c(Ee,"A",{href:!0,class:!0});var xe=o(J);De=y(xe,"kit.svelte.dev"),xe.forEach(s),He=y(Ee," to read the documentation"),Ee.forEach(s),ke.forEach(s),B.forEach(s),de=g(r),ie(Y.$$.fragment,r),this.h()},h(){document.title="Milkcee Studios",t(v,"class","block left svelte-2hln8r"),t(u,"class","block right svelte-2hln8r"),t(D,"class","hero-sig svelte-2hln8r"),Te(D.src,N=Qe)||t(D,"src",N),t(D,"alt","Hero section signature"),t(f,"class","hero-figure svelte-2hln8r"),Te(f.src,z=Ke)||t(f,"src",z),t(f,"alt","Hero section figure"),t(H,"class","svelte-2hln8r"),t(P,"class","line svelte-2hln8r"),t(S,"class","explore svelte-2hln8r"),t(l,"class","hero svelte-2hln8r"),t(F,"class","svelte-2hln8r"),t(E,"class","timeline svelte-2hln8r"),t(V,"class","svelte-2hln8r"),t(T,"href","https://kit.svelte.dev"),t(T,"class","svelte-2hln8r"),t(M,"class","svelte-2hln8r"),t(h,"class","svelte-2hln8r"),t(re,"class","svelte-2hln8r"),t(J,"href","https://kit.svelte.dev"),t(J,"class","svelte-2hln8r"),t(j,"class","svelte-2hln8r"),t($,"class","svelte-2hln8r"),t(p,"class","container svelte-2hln8r")},m(r,R){X(r,n,R),X(r,l,R),e(l,v),e(l,b),e(l,u),e(l,I),e(l,D),e(l,W),e(l,f),e(l,K),e(l,S),e(S,H),e(H,O),e(S,Q),e(S,P),X(r,q,R),ce(x,r,R),X(r,A,R),X(r,p,R),e(p,F),e(F,C),e(p,G),e(p,E),ce(U,E,null),e(E,k),ce(a,E,null),e(p,m),e(p,h),e(h,V),e(V,Z),e(h,ee),e(h,M),e(M,te),e(M,T),e(T,se),e(M,le),e(p,ae),e(p,$),e($,re),e(re,be),e($,Ie),e($,j),e(j,Ve),e(j,J),e(J,De),e(j,He),X(r,de,R),ce(Y,r,R),ue=!0},p:Ae,i(r){ue||(ve(x.$$.fragment,r),ve(U.$$.fragment,r),ve(a.$$.fragment,r),ve(Y.$$.fragment,r),ue=!0)},o(r){fe(x.$$.fragment,r),fe(U.$$.fragment,r),fe(a.$$.fragment,r),fe(Y.$$.fragment,r),ue=!1},d(r){r&&s(n),r&&s(l),r&&s(q),he(x,r),r&&s(A),r&&s(p),he(U),he(a),r&&s(de),he(Y,r)}}}let Ne=0;class et extends We{constructor(n){super(),Le(this,n,null,Je,Re,{})}}export{et as default};
