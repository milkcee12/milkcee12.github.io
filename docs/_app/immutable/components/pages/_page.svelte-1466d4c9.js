import{S as rt,i as at,s as nt,k as f,q as M,a as k,w as Z,l as u,m as h,r as L,c as $,x as J,h as i,n,R as je,b as ne,G as e,y as K,u as Pe,f as P,t as U,z as Q,T as lt,U as It,V as Vt,o as yt,W as Tt,X as st,Y as Ht,Z as tt,d as Ct,g as St}from"../../chunks/index-1133d749.js";import{I as jt,N as Pt,F as Mt}from"../../chunks/Footer-2869fa1d.js";function Lt(l){let r,t,a,_,o,g,v,m;return o=new jt({props:{icon:"radix-icons:triangle-right",width:"20",height:"20",color:l[3]?l[3]:l[2]}}),{c(){r=f("p"),t=f("a"),a=M(l[1]),_=k(),Z(o.$$.fragment),this.h()},l(p){r=u(p,"P",{class:!0});var E=h(r);t=u(E,"A",{class:!0,href:!0,target:!0});var H=h(t);a=L(H,l[1]),_=$(H),J(o.$$.fragment,H),H.forEach(i),E.forEach(i),this.h()},h(){n(t,"class",g=je(`color-${l[2]}`)+" svelte-111pp0z"),n(t,"href",l[0]),n(t,"target",v=l[4]?"_blank":""),n(r,"class","mc-c-arrow-link svelte-111pp0z")},m(p,E){ne(p,r,E),e(r,t),e(t,a),e(t,_),K(o,t,null),m=!0},p(p,[E]){(!m||E&2)&&Pe(a,p[1]);const H={};E&12&&(H.color=p[3]?p[3]:p[2]),o.$set(H),(!m||E&4&&g!==(g=je(`color-${p[2]}`)+" svelte-111pp0z"))&&n(t,"class",g),(!m||E&1)&&n(t,"href",p[0]),(!m||E&16&&v!==(v=p[4]?"_blank":""))&&n(t,"target",v)},i(p){m||(P(o.$$.fragment,p),m=!0)},o(p){U(o.$$.fragment,p),m=!1},d(p){p&&i(r),Q(o)}}}function Ft(l,r,t){let{href:a,name:_,color:o,arrowColor:g=!1,newTab:v}=r;return l.$$set=m=>{"href"in m&&t(0,a=m.href),"name"in m&&t(1,_=m.name),"color"in m&&t(2,o=m.color),"arrowColor"in m&&t(3,g=m.arrowColor),"newTab"in m&&t(4,v=m.newTab)},[a,_,o,g,v]}class we extends rt{constructor(r){super(),at(this,r,Ft,Lt,nt,{href:0,name:1,color:2,arrowColor:3,newTab:4})}}const{window:bt}=Tt;function wt(l,r,t){const a=l.slice();return a[10]=r[t],a}function kt(l){let r,t=l[10].tags.name+"",a,_;return{c(){r=f("li"),a=M(t),this.h()},l(o){r=u(o,"LI",{class:!0});var g=h(r);a=L(g,t),g.forEach(i),this.h()},h(){n(r,"class",_=je(`tag-${l[10].tags.type.name}`)+" svelte-1kxh44f")},m(o,g){ne(o,r,g),e(r,a)},p(o,g){g&2&&t!==(t=o[10].tags.name+"")&&Pe(a,t),g&2&&_!==(_=je(`tag-${o[10].tags.type.name}`)+" svelte-1kxh44f")&&n(r,"class",_)},d(o){o&&i(r)}}}function At(l){let r,t,a,_,o=l[1].title+"",g,v,m,p=l[1].end_yr===null?`${l[1].start_yr} - Present`:l[1].end_yr==l[1].start_yr?"project.end_yr":`${l[1].start_yr} - ${l[1].end_yr}`,E,H,z,d=l[1].blurb+"",F,x,G,re,A,j,ie,V,O,N,ee,Y,W,q,R,ke;G=new we({props:{color:l[1].project_type.name,href:l[1].url?l[1].url:"#",name:l[1].see_more,newTab:!!l[1].url}});let S=l[1].tags,I=[];for(let c=0;c<S.length;c+=1)I[c]=kt(wt(l,S,c));return{c(){r=f("div"),t=f("div"),a=f("div"),_=f("h3"),g=M(o),v=k(),m=f("p"),E=M(p),H=k(),z=f("p"),F=M(d),x=k(),Z(G.$$.fragment),re=k(),A=f("div"),j=f("div"),ie=k(),V=f("div"),O=k(),N=f("div"),ee=f("div"),Y=f("ul");for(let c=0;c<I.length;c+=1)I[c].c();this.h()},l(c){r=u(c,"DIV",{class:!0});var y=h(r);t=u(y,"DIV",{class:!0});var C=h(t);a=u(C,"DIV",{class:!0});var w=h(a);_=u(w,"H3",{class:!0});var ae=h(_);g=L(ae,o),ae.forEach(i),v=$(w),m=u(w,"P",{class:!0});var X=h(m);E=L(X,p),X.forEach(i),H=$(w),z=u(w,"P",{class:!0});var $e=h(z);F=L($e,d),$e.forEach(i),x=$(w),J(G.$$.fragment,w),w.forEach(i),C.forEach(i),re=$(y),A=u(y,"DIV",{class:!0});var B=h(A);j=u(B,"DIV",{class:!0}),h(j).forEach(i),ie=$(B),V=u(B,"DIV",{class:!0}),h(V).forEach(i),B.forEach(i),O=$(y),N=u(y,"DIV",{class:!0});var Ee=h(N);ee=u(Ee,"DIV",{class:!0});var Ie=h(ee);Y=u(Ie,"UL",{class:!0});var ye=h(Y);for(let te=0;te<I.length;te+=1)I[te].l(ye);ye.forEach(i),Ie.forEach(i),Ee.forEach(i),y.forEach(i),this.h()},h(){n(_,"class","mc-c-timeblock__col--content__bubble_title svelte-1kxh44f"),n(m,"class","mc-c-timeblock__col--content__bubble_date svelte-1kxh44f"),n(z,"class","mc-c-timeblock__col--content__bubble_blurb svelte-1kxh44f"),n(a,"class","mc-c-timeblock__col--content__bubble svelte-1kxh44f"),n(t,"class","mc-c-timeblock__col--content svelte-1kxh44f"),n(j,"class","mc-c-timeblock__vl--empty svelte-1kxh44f"),n(V,"class","mc-c-timeblock__vl--fill svelte-1kxh44f"),n(A,"class","mc-c-timeblock__vl svelte-1kxh44f"),n(Y,"class","svelte-1kxh44f"),n(ee,"class","tags svelte-1kxh44f"),n(N,"class","mc-c-timeblock__col--tags svelte-1kxh44f"),n(r,"class",W=je(`mc-c-timeblock --${l[0]%2===0?"even":"odd"}`)+" svelte-1kxh44f")},m(c,y){ne(c,r,y),e(r,t),e(t,a),e(a,_),e(_,g),e(a,v),e(a,m),e(m,E),e(a,H),e(a,z),e(z,F),e(a,x),K(G,a,null),e(r,re),e(r,A),e(A,j),l[7](j),e(A,ie),e(A,V),l[8](V),e(r,O),e(r,N),e(N,ee),e(ee,Y);for(let C=0;C<I.length;C+=1)I[C].m(Y,null);q=!0,R||(ke=[lt(bt,"scroll",l[5](l[4],10)),lt(bt,"resize",l[5](l[4],10))],R=!0)},p(c,[y]){(!q||y&2)&&o!==(o=c[1].title+"")&&Pe(g,o),(!q||y&2)&&p!==(p=c[1].end_yr===null?`${c[1].start_yr} - Present`:c[1].end_yr==c[1].start_yr?"project.end_yr":`${c[1].start_yr} - ${c[1].end_yr}`)&&Pe(E,p),(!q||y&2)&&d!==(d=c[1].blurb+"")&&Pe(F,d);const C={};if(y&2&&(C.color=c[1].project_type.name),y&2&&(C.href=c[1].url?c[1].url:"#"),y&2&&(C.name=c[1].see_more),y&2&&(C.newTab=!!c[1].url),G.$set(C),y&2){S=c[1].tags;let w;for(w=0;w<S.length;w+=1){const ae=wt(c,S,w);I[w]?I[w].p(ae,y):(I[w]=kt(ae),I[w].c(),I[w].m(Y,null))}for(;w<I.length;w+=1)I[w].d(1);I.length=S.length}(!q||y&1&&W!==(W=je(`mc-c-timeblock --${c[0]%2===0?"even":"odd"}`)+" svelte-1kxh44f"))&&n(r,"class",W)},i(c){q||(P(G.$$.fragment,c),q=!0)},o(c){U(G.$$.fragment,c),q=!1},d(c){c&&i(r),Q(G),l[7](null),l[8](null),It(I,c),R=!1,Vt(ke)}}}const Nt=80;function Ut(l,r,t){let{id:a,project:_,timelineHeight:o}=r,g,v,m;yt(()=>{v.classList.add("nofill"),t(3,v.style.position="absolute",v),p()});const p=()=>{m=window.scrollY;let d=Math.max(m-window.innerHeight,0);d=Math.min(d,o),d>Nt?(t(3,v.style.height=`calc(${d}px - 3em)`,v),v.classList.remove("nofill")):v.classList.add("nofill")};function E(d,F){var x=Date.now();return function(){x+F-Date.now()<0&&(a==0&&d(),x=Date.now())}}function H(d){st[d?"unshift":"push"](()=>{g=d,t(2,g)})}function z(d){st[d?"unshift":"push"](()=>{v=d,t(3,v)})}return l.$$set=d=>{"id"in d&&t(0,a=d.id),"project"in d&&t(1,_=d.project),"timelineHeight"in d&&t(6,o=d.timelineHeight)},[a,_,g,v,p,E,o,H,z]}class zt extends rt{constructor(r){super(),at(this,r,Ut,At,nt,{id:0,project:1,timelineHeight:6})}}const Gt=""+new URL("../../assets/hero-figure-754e2dd3.webp",import.meta.url).href,Ot=""+new URL("../../assets/hero-signature-147470d3.webp",import.meta.url).href,Wt=""+new URL("../../assets/about-profile-1-ffd31c60.jpg",import.meta.url).href;function qt(l){return parseFloat(l.substring(0,l.length-2))}function $t(l,r,t){const a=l.slice();return a[5]=r[t],a}function Et(l){let r,t;return r=new zt({props:{id:l[5],project:l[0][l[5]],timelineHeight:l[2]}}),{c(){Z(r.$$.fragment)},l(a){J(r.$$.fragment,a)},m(a,_){K(r,a,_),t=!0},p(a,_){const o={};_&1&&(o.id=a[5]),_&1&&(o.project=a[0][a[5]]),_&4&&(o.timelineHeight=a[2]),r.$set(o)},i(a){t||(P(r.$$.fragment,a),t=!0)},o(a){U(r.$$.fragment,a),t=!1},d(a){Q(r,a)}}}function Rt(l){let r,t,a,_,o,g,v,m,p,E,H,z,d,F,x,G,re,A,j,ie,V,O,N,ee,Y,W,q,R,ke,S,I,c,y,C,w,ae,X,$e,B,Ee,Ie,ye,te,oe,le,ce,De,We,qe,me,Re,fe,Ve,Be,Ye,Te,Xe,Ze,se,he,Je,_e,Ke,de,Qe,He,ve,it,Me,ge,Le,xe,ot;j=new Pt({}),W=new we({props:{href:"/work",color:"art",name:"See all",newTab:!1}});let pe=Object.keys(l[0]),D=[];for(let s=0;s<pe.length;s+=1)D[s]=Et($t(l,pe,s));const Dt=s=>U(D[s],1,1,()=>{D[s]=null});return w=new we({props:{href:"/playground",color:"art",name:"See all",newTab:!1}}),me=new we({props:{href:"/about",color:"art",name:"See all",newTab:!1}}),he=new we({props:{href:"https://github.com/milkcee12",color:"tech",name:"Github",arrowColor:"white",newTab:!0}}),_e=new we({props:{href:"https://instagram.com/milkcee12",color:"art",name:"Instagram",arrowColor:"white",newTab:!0}}),de=new we({props:{href:"https://twitter.com/milkcee12",color:"art",name:"Twitter",arrowColor:"white",newTab:!0}}),ge=new Mt({}),{c(){r=k(),t=f("section"),a=f("div"),_=k(),o=f("div"),g=k(),v=f("img"),p=k(),E=f("img"),z=k(),d=f("div"),F=f("p"),x=M("Explore"),G=k(),re=f("div"),A=k(),Z(j.$$.fragment),ie=k(),V=f("div"),O=f("div"),N=f("h2"),ee=M("Featured Work"),Y=k(),Z(W.$$.fragment),q=k(),R=f("section");for(let s=0;s<D.length;s+=1)D[s].c();ke=k(),S=f("section"),I=f("div"),c=f("h2"),y=M("Playground"),C=k(),Z(w.$$.fragment),ae=k(),X=f("p"),$e=M("Visit "),B=f("a"),Ee=M("kit.svelte.dev"),Ie=M(" to read the documentation"),ye=k(),te=f("section"),oe=f("div"),le=f("div"),ce=f("div"),De=f("h2"),We=M("Hello World \u{1F44B}"),qe=k(),Z(me.$$.fragment),Re=k(),fe=f("div"),Ve=f("p"),Be=M(`Hi there! I'm Michaela or Milkcee, depending on where you found me
            from.`),Ye=k(),Te=f("p"),Xe=M(`I'm an artist and a programmer, with a small fixation on cute cows.
            I\u2019m a student at University of Southern California majoring in
            Computer Science and minoring in 3-D Animation. [Insert more good
            first impression things.]`),Ze=k(),se=f("div"),Z(he.$$.fragment),Je=k(),Z(_e.$$.fragment),Ke=k(),Z(de.$$.fragment),Qe=k(),He=f("div"),ve=f("img"),Me=k(),Z(ge.$$.fragment),this.h()},l(s){Ht("svelte-1pqj0d0",document.head).forEach(i),r=$(s),t=u(s,"SECTION",{class:!0});var b=h(t);a=u(b,"DIV",{class:!0}),h(a).forEach(i),_=$(b),o=u(b,"DIV",{class:!0}),h(o).forEach(i),g=$(b),v=u(b,"IMG",{class:!0,src:!0,alt:!0}),p=$(b),E=u(b,"IMG",{class:!0,src:!0,alt:!0}),z=$(b),d=u(b,"DIV",{class:!0});var be=h(d);F=u(be,"P",{class:!0});var ct=h(F);x=L(ct,"Explore"),ct.forEach(i),G=$(be),re=u(be,"DIV",{class:!0}),h(re).forEach(i),be.forEach(i),b.forEach(i),A=$(s),J(j.$$.fragment,s),ie=$(s),V=u(s,"DIV",{class:!0});var ue=h(V);O=u(ue,"DIV",{class:!0});var Fe=h(O);N=u(Fe,"H2",{class:!0});var ft=h(N);ee=L(ft,"Featured Work"),ft.forEach(i),Y=$(Fe),J(W.$$.fragment,Fe),Fe.forEach(i),q=$(ue),R=u(ue,"SECTION",{class:!0});var ut=h(R);for(let et=0;et<D.length;et+=1)D[et].l(ut);ut.forEach(i),ke=$(ue),S=u(ue,"SECTION",{class:!0});var Ae=h(S);I=u(Ae,"DIV",{class:!0});var Ne=h(I);c=u(Ne,"H2",{class:!0});var mt=h(c);y=L(mt,"Playground"),mt.forEach(i),C=$(Ne),J(w.$$.fragment,Ne),Ne.forEach(i),ae=$(Ae),X=u(Ae,"P",{class:!0});var Ue=h(X);$e=L(Ue,"Visit "),B=u(Ue,"A",{href:!0,class:!0});var ht=h(B);Ee=L(ht,"kit.svelte.dev"),ht.forEach(i),Ie=L(Ue," to read the documentation"),Ue.forEach(i),Ae.forEach(i),ye=$(ue),te=u(ue,"SECTION",{class:!0});var _t=h(te);oe=u(_t,"DIV",{class:!0});var ze=h(oe);le=u(ze,"DIV",{class:!0});var Ce=h(le);ce=u(Ce,"DIV",{class:!0});var Ge=h(ce);De=u(Ge,"H2",{class:!0});var dt=h(De);We=L(dt,"Hello World \u{1F44B}"),dt.forEach(i),qe=$(Ge),J(me.$$.fragment,Ge),Ge.forEach(i),Re=$(Ce),fe=u(Ce,"DIV",{class:!0});var Oe=h(fe);Ve=u(Oe,"P",{class:!0});var vt=h(Ve);Be=L(vt,`Hi there! I'm Michaela or Milkcee, depending on where you found me
            from.`),vt.forEach(i),Ye=$(Oe),Te=u(Oe,"P",{class:!0});var gt=h(Te);Xe=L(gt,`I'm an artist and a programmer, with a small fixation on cute cows.
            I\u2019m a student at University of Southern California majoring in
            Computer Science and minoring in 3-D Animation. [Insert more good
            first impression things.]`),gt.forEach(i),Oe.forEach(i),Ze=$(Ce),se=u(Ce,"DIV",{class:!0});var Se=h(se);J(he.$$.fragment,Se),Je=$(Se),J(_e.$$.fragment,Se),Ke=$(Se),J(de.$$.fragment,Se),Se.forEach(i),Ce.forEach(i),Qe=$(ze),He=u(ze,"DIV",{class:!0});var pt=h(He);ve=u(pt,"IMG",{class:!0,src:!0,alt:!0}),pt.forEach(i),ze.forEach(i),_t.forEach(i),ue.forEach(i),Me=$(s),J(ge.$$.fragment,s),this.h()},h(){document.title="Milkcee Studios",n(a,"class","mc-c-hero__block--left svelte-18diu04"),n(o,"class","mc-c-hero__block--right svelte-18diu04"),n(v,"class","mc-c-hero__img--sig svelte-18diu04"),tt(v.src,m=Ot)||n(v,"src",m),n(v,"alt","Hero section signature"),n(E,"class","mc-c-hero__img--figure svelte-18diu04"),tt(E.src,H=Gt)||n(E,"src",H),n(E,"alt","Hero section figure"),n(F,"class","svelte-18diu04"),n(re,"class","mc-c-hero__explore__line svelte-18diu04"),n(d,"class","mc-c-hero__explore svelte-18diu04"),n(t,"class","mc-c-hero svelte-18diu04"),n(N,"class","svelte-18diu04"),n(O,"class","mc-c-title svelte-18diu04"),n(R,"class","mc-l-timeline svelte-18diu04"),n(c,"class","svelte-18diu04"),n(I,"class","mc-c-title svelte-18diu04"),n(B,"href","https://kit.svelte.dev"),n(B,"class","svelte-18diu04"),n(X,"class","svelte-18diu04"),n(S,"class","svelte-18diu04"),n(De,"class","svelte-18diu04"),n(ce,"class","mc-c-title svelte-18diu04"),n(Ve,"class","svelte-18diu04"),n(Te,"class","svelte-18diu04"),n(fe,"class","mc-c-about__blurb__desc svelte-18diu04"),n(se,"class","mc-c-about__blurb__social-links svelte-18diu04"),n(le,"class","mc-c-about__blurb svelte-18diu04"),n(ve,"class","mc-c-about__profile__img svelte-18diu04"),tt(ve.src,it=Wt)||n(ve,"src",it),n(ve,"alt","About section face profile"),n(He,"class","mc-c-about__profile svelte-18diu04"),n(oe,"class","mc-l-about svelte-18diu04"),n(te,"class","svelte-18diu04"),n(V,"class","mc-l-container svelte-18diu04")},m(s,T){ne(s,r,T),ne(s,t,T),e(t,a),e(t,_),e(t,o),e(t,g),e(t,v),e(t,p),e(t,E),e(t,z),e(t,d),e(d,F),e(F,x),e(d,G),e(d,re),ne(s,A,T),K(j,s,T),ne(s,ie,T),ne(s,V,T),e(V,O),e(O,N),e(N,ee),e(O,Y),K(W,O,null),e(V,q),e(V,R);for(let b=0;b<D.length;b+=1)D[b].m(R,null);l[4](R),e(V,ke),e(V,S),e(S,I),e(I,c),e(c,y),e(I,C),K(w,I,null),e(S,ae),e(S,X),e(X,$e),e(X,B),e(B,Ee),e(X,Ie),e(V,ye),e(V,te),e(te,oe),e(oe,le),e(le,ce),e(ce,De),e(De,We),e(ce,qe),K(me,ce,null),e(le,Re),e(le,fe),e(fe,Ve),e(Ve,Be),e(fe,Ye),e(fe,Te),e(Te,Xe),e(le,Ze),e(le,se),K(he,se,null),e(se,Je),K(_e,se,null),e(se,Ke),K(de,se,null),e(oe,Qe),e(oe,He),e(He,ve),ne(s,Me,T),K(ge,s,T),Le=!0,xe||(ot=lt(window,"resize",l[3]),xe=!0)},p(s,[T]){if(T&5){pe=Object.keys(s[0]);let b;for(b=0;b<pe.length;b+=1){const be=$t(s,pe,b);D[b]?(D[b].p(be,T),P(D[b],1)):(D[b]=Et(be),D[b].c(),P(D[b],1),D[b].m(R,null))}for(St(),b=pe.length;b<D.length;b+=1)Dt(b);Ct()}},i(s){if(!Le){P(j.$$.fragment,s),P(W.$$.fragment,s);for(let T=0;T<pe.length;T+=1)P(D[T]);P(w.$$.fragment,s),P(me.$$.fragment,s),P(he.$$.fragment,s),P(_e.$$.fragment,s),P(de.$$.fragment,s),P(ge.$$.fragment,s),Le=!0}},o(s){U(j.$$.fragment,s),U(W.$$.fragment,s),D=D.filter(Boolean);for(let T=0;T<D.length;T+=1)U(D[T]);U(w.$$.fragment,s),U(me.$$.fragment,s),U(he.$$.fragment,s),U(_e.$$.fragment,s),U(de.$$.fragment,s),U(ge.$$.fragment,s),Le=!1},d(s){s&&i(r),s&&i(t),s&&i(A),Q(j,s),s&&i(ie),s&&i(V),Q(W),It(D,s),l[4](null),Q(w),Q(me),Q(he),Q(_e),Q(de),s&&i(Me),Q(ge,s),xe=!1,ot()}}}function Bt(l,r,t){let{data:a}=r,_,o;yt(()=>{g()});function g(){let m=qt(getComputedStyle(_).getPropertyValue("height"));t(2,o=m)}function v(m){st[m?"unshift":"push"](()=>{_=m,t(1,_)})}return l.$$set=m=>{"data"in m&&t(0,a=m.data)},[a,_,o,g,v]}class Zt extends rt{constructor(r){super(),at(this,r,Bt,Rt,nt,{data:0})}}export{Zt as default};
