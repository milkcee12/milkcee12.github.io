import{S as Ze,i as Je,s as Qe,k as u,q as N,a as k,w as x,l as h,m as _,r as F,c as E,x as ee,h as i,n,R as Ve,b as ae,G as e,y as te,u as He,f as B,t as Y,z as le,T as Ke,U as vt,V as pt,o as dt,W as wt,X as Ye,Y as bt,Z as ct,d as kt,g as Et}from"../../chunks/index-1133d749.js";import{I as $t,N as It,F as yt}from"../../chunks/Footer-c6c354e7.js";function Xe(l){return parseFloat(l.substring(0,l.length-2))}function Tt(l){let s,t,r,v,o,d,g,c;return o=new $t({props:{icon:"radix-icons:triangle-right",width:"20",height:"20",color:l[3]?l[3]:l[2]}}),{c(){s=u("p"),t=u("a"),r=N(l[1]),v=k(),x(o.$$.fragment),this.h()},l(m){s=h(m,"P",{class:!0});var $=_(s);t=h($,"A",{class:!0,href:!0,target:!0});var H=_(t);r=F(H,l[1]),v=E(H),ee(o.$$.fragment,H),H.forEach(i),$.forEach(i),this.h()},h(){n(t,"class",d=Ve(`color-${l[2]}`)+" svelte-1su6xts"),n(t,"href",l[0]),n(t,"target",g=l[4]?"_blank":""),n(s,"class","mc-c-arrow-link svelte-1su6xts")},m(m,$){ae(m,s,$),e(s,t),e(t,r),e(t,v),te(o,t,null),c=!0},p(m,[$]){(!c||$&2)&&He(r,m[1]);const H={};$&12&&(H.color=m[3]?m[3]:m[2]),o.$set(H),(!c||$&4&&d!==(d=Ve(`color-${m[2]}`)+" svelte-1su6xts"))&&n(t,"class",d),(!c||$&1)&&n(t,"href",m[0]),(!c||$&16&&g!==(g=m[4]?"_blank":""))&&n(t,"target",g)},i(m){c||(B(o.$$.fragment,m),c=!0)},o(m){Y(o.$$.fragment,m),c=!1},d(m){m&&i(s),le(o)}}}function Dt(l,s,t){let{href:r,name:v,color:o,arrowColor:d=!1,newTab:g}=s;return l.$$set=c=>{"href"in c&&t(0,r=c.href),"name"in c&&t(1,v=c.name),"color"in c&&t(2,o=c.color),"arrowColor"in c&&t(3,d=c.arrowColor),"newTab"in c&&t(4,g=c.newTab)},[r,v,o,d,g]}class De extends Ze{constructor(s){super(),Je(this,s,Dt,Tt,Qe,{href:0,name:1,color:2,arrowColor:3,newTab:4})}}const{window:ft}=wt;function ut(l,s,t){const r=l.slice();return r[11]=s[t],r}function ht(l){let s,t=l[11].tags.name+"",r,v;return{c(){s=u("li"),r=N(t),this.h()},l(o){s=h(o,"LI",{class:!0});var d=_(s);r=F(d,t),d.forEach(i),this.h()},h(){n(s,"class",v=Ve(`tag-${l[11].tags.type.name}`)+" svelte-11cwi6a")},m(o,d){ae(o,s,d),e(s,r)},p(o,d){d&2&&t!==(t=o[11].tags.name+"")&&He(r,t),d&2&&v!==(v=Ve(`tag-${o[11].tags.type.name}`)+" svelte-11cwi6a")&&n(s,"class",v)},d(o){o&&i(s)}}}function Vt(l){let s,t,r,v,o=l[1].title+"",d,g,c,m=l[1].end_yr===null?`${l[1].start_yr} - Present`:l[1].end_yr==l[1].start_yr?"project.end_yr":`${l[1].start_yr} - ${l[1].end_yr}`,$,H,G,C=l[1].blurb+"",p,M,P,se,L,O,ne,D,R,W,J,X,U,q,z,de;P=new De({props:{color:l[1].project_type.name,href:l[1].url?l[1].url:"#",name:l[1].see_more,newTab:!!l[1].url}});let j=l[1].tags,I=[];for(let f=0;f<j.length;f+=1)I[f]=ht(ut(l,j,f));return{c(){s=u("div"),t=u("div"),r=u("div"),v=u("h3"),d=N(o),g=k(),c=u("p"),$=N(m),H=k(),G=u("p"),p=N(C),M=k(),x(P.$$.fragment),se=k(),L=u("div"),O=u("div"),ne=k(),D=u("div"),R=k(),W=u("div"),J=u("div"),X=u("ul");for(let f=0;f<I.length;f+=1)I[f].c();this.h()},l(f){s=h(f,"DIV",{class:!0});var y=_(s);t=h(y,"DIV",{class:!0});var S=_(t);r=h(S,"DIV",{class:!0});var b=_(r);v=h(b,"H3",{class:!0});var re=_(v);d=F(re,o),re.forEach(i),g=E(b),c=h(b,"P",{class:!0});var Z=_(c);$=F(Z,m),Z.forEach(i),H=E(b),G=h(b,"P",{class:!0});var ge=_(G);p=F(ge,C),ge.forEach(i),M=E(b),ee(P.$$.fragment,b),b.forEach(i),S.forEach(i),se=E(y),L=h(y,"DIV",{class:!0});var K=_(L);O=h(K,"DIV",{class:!0}),_(O).forEach(i),ne=E(K),D=h(K,"DIV",{class:!0}),_(D).forEach(i),K.forEach(i),R=E(y),W=h(y,"DIV",{class:!0});var pe=_(W);J=h(pe,"DIV",{class:!0});var we=_(J);X=h(we,"UL",{class:!0});var be=_(X);for(let A=0;A<I.length;A+=1)I[A].l(be);be.forEach(i),we.forEach(i),pe.forEach(i),y.forEach(i),this.h()},h(){n(v,"class","mc-c-timeblock__col--content__bubble_title svelte-11cwi6a"),n(c,"class","mc-c-timeblock__col--content__bubble_date svelte-11cwi6a"),n(G,"class","mc-c-timeblock__col--content__bubble_blurb svelte-11cwi6a"),n(r,"class","mc-c-timeblock__col--content__bubble svelte-11cwi6a"),n(t,"class","mc-c-timeblock__col--content svelte-11cwi6a"),n(O,"class","mc-c-timeblock__vl--empty svelte-11cwi6a"),n(D,"class","mc-c-timeblock__vl--fill svelte-11cwi6a"),n(L,"class","mc-c-timeblock__vl svelte-11cwi6a"),n(X,"class","svelte-11cwi6a"),n(J,"class","tags svelte-11cwi6a"),n(W,"class","mc-c-timeblock__col--tags svelte-11cwi6a"),n(s,"class",U=Ve(`mc-c-timeblock --${l[0]%2===0?"even":"odd"}`)+" svelte-11cwi6a")},m(f,y){ae(f,s,y),e(s,t),e(t,r),e(r,v),e(v,d),e(r,g),e(r,c),e(c,$),e(r,H),e(r,G),e(G,p),e(r,M),te(P,r,null),e(s,se),e(s,L),e(L,O),e(L,ne),e(L,D),l[7](D),l[8](L),e(s,R),e(s,W),e(W,J),e(J,X);for(let S=0;S<I.length;S+=1)I[S].m(X,null);q=!0,z||(de=[Ke(ft,"scroll",l[5](l[4],30)),Ke(ft,"resize",l[4])],z=!0)},p(f,[y]){(!q||y&2)&&o!==(o=f[1].title+"")&&He(d,o),(!q||y&2)&&m!==(m=f[1].end_yr===null?`${f[1].start_yr} - Present`:f[1].end_yr==f[1].start_yr?"project.end_yr":`${f[1].start_yr} - ${f[1].end_yr}`)&&He($,m),(!q||y&2)&&C!==(C=f[1].blurb+"")&&He(p,C);const S={};if(y&2&&(S.color=f[1].project_type.name),y&2&&(S.href=f[1].url?f[1].url:"#"),y&2&&(S.name=f[1].see_more),y&2&&(S.newTab=!!f[1].url),P.$set(S),y&2){j=f[1].tags;let b;for(b=0;b<j.length;b+=1){const re=ut(f,j,b);I[b]?I[b].p(re,y):(I[b]=ht(re),I[b].c(),I[b].m(X,null))}for(;b<I.length;b+=1)I[b].d(1);I.length=j.length}(!q||y&1&&U!==(U=Ve(`mc-c-timeblock --${f[0]%2===0?"even":"odd"}`)+" svelte-11cwi6a"))&&n(s,"class",U)},i(f){q||(B(P.$$.fragment,f),q=!0)},o(f){Y(P.$$.fragment,f),q=!1},d(f){f&&i(s),le(P),l[7](null),l[8](null),vt(I,f),z=!1,pt(de)}}}const Ht=576,Ct=768,St=992,ce=20;function Mt(l,s,t){let{id:r,project:v,timelineHeight:o}=s,d,g,c,m;dt(()=>{c=o-Xe(getComputedStyle(d).getPropertyValue("margin-top")),g.classList.add("nofill"),t(3,g.style.position="absolute",g),$()});const $=()=>{if(m=window.scrollY,c=o-Xe(getComputedStyle(d).getPropertyValue("margin-top")),!c)return;let p=!0,M;window.innerWidth<=Ht?m<=570+ce?p=!1:M=Math.min(Math.max(m-570,ce),c):window.innerWidth<=Ct?m<=480+ce?p=!1:M=Math.min(Math.max(m-480,ce),c):window.innerWidth<=St?m<=500+ce?p=!1:M=Math.min(Math.max(m-500,ce),c):m<=900+ce?p=!1:M=Math.min(Math.max(m-900,ce),c),p?(g.classList.remove("nofill"),t(3,g.style.height=M+"px",g)):g.classList.add("nofill")};function H(p,M){var P=Date.now();return function(){P+M-Date.now()<0&&(r==0&&p(),P=Date.now())}}function G(p){Ye[p?"unshift":"push"](()=>{g=p,t(3,g)})}function C(p){Ye[p?"unshift":"push"](()=>{d=p,t(2,d)})}return l.$$set=p=>{"id"in p&&t(0,r=p.id),"project"in p&&t(1,v=p.project),"timelineHeight"in p&&t(6,o=p.timelineHeight)},[r,v,d,g,$,H,o,G,C]}class Pt extends Ze{constructor(s){super(),Je(this,s,Mt,Vt,Qe,{id:0,project:1,timelineHeight:6})}}const jt=""+new URL("../../assets/hero-figure-932cc342.png",import.meta.url).href,Lt=""+new URL("../../assets/hero-signature-a659ed62.png",import.meta.url).href;function mt(l,s,t){const r=l.slice();return r[5]=s[t],r}function _t(l){let s,t;return s=new Pt({props:{id:l[5],project:l[0][l[5]],timelineHeight:l[2]}}),{c(){x(s.$$.fragment)},l(r){ee(s.$$.fragment,r)},m(r,v){te(s,r,v),t=!0},p(r,v){const o={};v&1&&(o.id=r[5]),v&1&&(o.project=r[0][r[5]]),v&4&&(o.timelineHeight=r[2]),s.$set(o)},i(r){t||(B(s.$$.fragment,r),t=!0)},o(r){Y(s.$$.fragment,r),t=!1},d(r){le(s,r)}}}function At(l){let s,t,r,v,o,d,g,c,m,$,H,G,C,p,M,P,se,L,O,ne,D,R,W,J,X,U,q,z,de,j,I,f,y,S,b,re,Z,ge,K,pe,we,be,A,ke,Ee,Ne,Fe,ie,$e,Oe,We,Ie,Be,Ge,Q,fe,Re,ue,Ue,he,Ce,me,Se,qe,xe;O=new It({}),U=new De({props:{href:"/work",color:"art",name:"See all",newTab:!1}});let _e=Object.keys(l[0]),T=[];for(let a=0;a<_e.length;a+=1)T[a]=_t(mt(l,_e,a));const gt=a=>Y(T[a],1,1,()=>{T[a]=null});return b=new De({props:{href:"/playground",color:"art",name:"See all",newTab:!1}}),fe=new De({props:{href:"https://github.com/milkcee12",color:"tech",name:"Github",arrowColor:"white",newTab:!0}}),ue=new De({props:{href:"https://instagram.com/milkcee12",color:"art",name:"Instagram",arrowColor:"white",newTab:!0}}),he=new De({props:{href:"https://twitter.com/milkcee12",color:"art",name:"Twitter",arrowColor:"white",newTab:!0}}),me=new yt({}),{c(){s=k(),t=u("section"),r=u("div"),v=k(),o=u("div"),d=k(),g=u("img"),m=k(),$=u("img"),G=k(),C=u("div"),p=u("p"),M=N("Explore"),P=k(),se=u("div"),L=k(),x(O.$$.fragment),ne=k(),D=u("div"),R=u("div"),W=u("h2"),J=N("Featured Work"),X=k(),x(U.$$.fragment),q=k(),z=u("section");for(let a=0;a<T.length;a+=1)T[a].c();de=k(),j=u("section"),I=u("div"),f=u("h2"),y=N("Playground"),S=k(),x(b.$$.fragment),re=k(),Z=u("p"),ge=N("Visit "),K=u("a"),pe=N("kit.svelte.dev"),we=N(" to read the documentation"),be=k(),A=u("section"),ke=u("div"),Ee=u("h2"),Ne=N("Hello World \u{1F44B}"),Fe=k(),ie=u("div"),$e=u("p"),Oe=N("Hi, my name is Michaela. I also go by Milkcee on my art accounts."),We=k(),Ie=u("p"),Be=N("I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]"),Ge=k(),Q=u("div"),x(fe.$$.fragment),Re=k(),x(ue.$$.fragment),Ue=k(),x(he.$$.fragment),Ce=k(),x(me.$$.fragment),this.h()},l(a){bt("svelte-t6sc9g",document.head).forEach(i),s=E(a),t=h(a,"SECTION",{class:!0});var w=_(t);r=h(w,"DIV",{class:!0}),_(r).forEach(i),v=E(w),o=h(w,"DIV",{class:!0}),_(o).forEach(i),d=E(w),g=h(w,"IMG",{class:!0,src:!0,alt:!0}),m=E(w),$=h(w,"IMG",{class:!0,src:!0,alt:!0}),G=E(w),C=h(w,"DIV",{class:!0});var ve=_(C);p=h(ve,"P",{class:!0});var et=_(p);M=F(et,"Explore"),et.forEach(i),P=E(ve),se=h(ve,"DIV",{class:!0}),_(se).forEach(i),ve.forEach(i),w.forEach(i),L=E(a),ee(O.$$.fragment,a),ne=E(a),D=h(a,"DIV",{class:!0});var oe=_(D);R=h(oe,"DIV",{class:!0});var Me=_(R);W=h(Me,"H2",{class:!0});var tt=_(W);J=F(tt,"Featured Work"),tt.forEach(i),X=E(Me),ee(U.$$.fragment,Me),Me.forEach(i),q=E(oe),z=h(oe,"SECTION",{class:!0});var lt=_(z);for(let ze=0;ze<T.length;ze+=1)T[ze].l(lt);lt.forEach(i),de=E(oe),j=h(oe,"SECTION",{class:!0});var Pe=_(j);I=h(Pe,"DIV",{class:!0});var je=_(I);f=h(je,"H2",{class:!0});var st=_(f);y=F(st,"Playground"),st.forEach(i),S=E(je),ee(b.$$.fragment,je),je.forEach(i),re=E(Pe),Z=h(Pe,"P",{class:!0});var Le=_(Z);ge=F(Le,"Visit "),K=h(Le,"A",{href:!0,class:!0});var rt=_(K);pe=F(rt,"kit.svelte.dev"),rt.forEach(i),we=F(Le," to read the documentation"),Le.forEach(i),Pe.forEach(i),be=E(oe),A=h(oe,"SECTION",{class:!0});var ye=_(A);ke=h(ye,"DIV",{class:!0});var at=_(ke);Ee=h(at,"H2",{class:!0});var nt=_(Ee);Ne=F(nt,"Hello World \u{1F44B}"),nt.forEach(i),at.forEach(i),Fe=E(ye),ie=h(ye,"DIV",{class:!0});var Ae=_(ie);$e=h(Ae,"P",{class:!0});var it=_($e);Oe=F(it,"Hi, my name is Michaela. I also go by Milkcee on my art accounts."),it.forEach(i),We=E(Ae),Ie=h(Ae,"P",{class:!0});var ot=_(Ie);Be=F(ot,"I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]"),ot.forEach(i),Ae.forEach(i),Ge=E(ye),Q=h(ye,"DIV",{class:!0});var Te=_(Q);ee(fe.$$.fragment,Te),Re=E(Te),ee(ue.$$.fragment,Te),Ue=E(Te),ee(he.$$.fragment,Te),Te.forEach(i),ye.forEach(i),oe.forEach(i),Ce=E(a),ee(me.$$.fragment,a),this.h()},h(){document.title="Milkcee Studios",n(r,"class","mc-c-hero__block--left svelte-1ephx79"),n(o,"class","mc-c-hero__block--right svelte-1ephx79"),n(g,"class","mc-c-hero__img--sig svelte-1ephx79"),ct(g.src,c=Lt)||n(g,"src",c),n(g,"alt","Hero section signature"),n($,"class","mc-c-hero__img--figure svelte-1ephx79"),ct($.src,H=jt)||n($,"src",H),n($,"alt","Hero section figure"),n(p,"class","svelte-1ephx79"),n(se,"class","mc-c-hero__explore__line svelte-1ephx79"),n(C,"class","mc-c-hero__explore svelte-1ephx79"),n(t,"class","mc-c-hero svelte-1ephx79"),n(W,"class","svelte-1ephx79"),n(R,"class","mc-c-title svelte-1ephx79"),n(z,"class","mc-l-timeline svelte-1ephx79"),n(f,"class","svelte-1ephx79"),n(I,"class","mc-c-title svelte-1ephx79"),n(K,"href","https://kit.svelte.dev"),n(K,"class","svelte-1ephx79"),n(Z,"class","svelte-1ephx79"),n(j,"class","svelte-1ephx79"),n(Ee,"class","svelte-1ephx79"),n(ke,"class","mc-c-title svelte-1ephx79"),n($e,"class","svelte-1ephx79"),n(Ie,"class","svelte-1ephx79"),n(ie,"class","mc-c-about__blurb svelte-1ephx79"),n(Q,"class","mc-c-about__social-links svelte-1ephx79"),n(A,"class","svelte-1ephx79"),n(D,"class","mc-l-container svelte-1ephx79")},m(a,V){ae(a,s,V),ae(a,t,V),e(t,r),e(t,v),e(t,o),e(t,d),e(t,g),e(t,m),e(t,$),e(t,G),e(t,C),e(C,p),e(p,M),e(C,P),e(C,se),ae(a,L,V),te(O,a,V),ae(a,ne,V),ae(a,D,V),e(D,R),e(R,W),e(W,J),e(R,X),te(U,R,null),e(D,q),e(D,z);for(let w=0;w<T.length;w+=1)T[w].m(z,null);l[4](z),e(D,de),e(D,j),e(j,I),e(I,f),e(f,y),e(I,S),te(b,I,null),e(j,re),e(j,Z),e(Z,ge),e(Z,K),e(K,pe),e(Z,we),e(D,be),e(D,A),e(A,ke),e(ke,Ee),e(Ee,Ne),e(A,Fe),e(A,ie),e(ie,$e),e($e,Oe),e(ie,We),e(ie,Ie),e(Ie,Be),e(A,Ge),e(A,Q),te(fe,Q,null),e(Q,Re),te(ue,Q,null),e(Q,Ue),te(he,Q,null),ae(a,Ce,V),te(me,a,V),Se=!0,qe||(xe=Ke(window,"resize",l[3]),qe=!0)},p(a,[V]){if(V&5){_e=Object.keys(a[0]);let w;for(w=0;w<_e.length;w+=1){const ve=mt(a,_e,w);T[w]?(T[w].p(ve,V),B(T[w],1)):(T[w]=_t(ve),T[w].c(),B(T[w],1),T[w].m(z,null))}for(Et(),w=_e.length;w<T.length;w+=1)gt(w);kt()}},i(a){if(!Se){B(O.$$.fragment,a),B(U.$$.fragment,a);for(let V=0;V<_e.length;V+=1)B(T[V]);B(b.$$.fragment,a),B(fe.$$.fragment,a),B(ue.$$.fragment,a),B(he.$$.fragment,a),B(me.$$.fragment,a),Se=!0}},o(a){Y(O.$$.fragment,a),Y(U.$$.fragment,a),T=T.filter(Boolean);for(let V=0;V<T.length;V+=1)Y(T[V]);Y(b.$$.fragment,a),Y(fe.$$.fragment,a),Y(ue.$$.fragment,a),Y(he.$$.fragment,a),Y(me.$$.fragment,a),Se=!1},d(a){a&&i(s),a&&i(t),a&&i(L),le(O,a),a&&i(ne),a&&i(D),le(U),vt(T,a),l[4](null),le(b),le(fe),le(ue),le(he),a&&i(Ce),le(me,a),qe=!1,xe()}}}function Nt(l,s,t){let{data:r}=s,v,o;dt(()=>{d()});function d(){let c=Xe(getComputedStyle(v).getPropertyValue("height"));t(2,o=c)}function g(c){Ye[c?"unshift":"push"](()=>{v=c,t(1,v)})}return l.$$set=c=>{"data"in c&&t(0,r=c.data)},[r,v,o,d,g]}class Wt extends Ze{constructor(s){super(),Je(this,s,Nt,At,Qe,{data:0})}}export{Wt as default};
