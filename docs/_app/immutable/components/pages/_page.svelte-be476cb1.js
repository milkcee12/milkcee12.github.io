import{S as Re,i as ze,s as Be,k as f,q as N,a as k,w as z,l as m,m as u,r as P,c as w,x as B,h as o,n,R as we,b as Z,G as l,y as J,u as Ee,f as L,t as U,z as K,T as nt,U as it,V as tt,d as ct,g as ft}from"../../chunks/index-7ec6916d.js";import{I as mt,N as ut,F as dt}from"../../chunks/footer-57349395.js";function _t(s){let r,t,e,c,i,p,E,v;return i=new mt({props:{icon:"radix-icons:triangle-right",width:"20",height:"20",color:s[3]?s[3]:s[2]}}),{c(){r=f("p"),t=f("a"),e=N(s[1]),c=k(),z(i.$$.fragment),this.h()},l(g){r=m(g,"P",{class:!0});var b=u(r);t=m(b,"A",{class:!0,href:!0,target:!0});var _=u(t);e=P(_,s[1]),c=w(_),B(i.$$.fragment,_),_.forEach(o),b.forEach(o),this.h()},h(){n(t,"class",p=we(`color-${s[2]}`)+" svelte-1su6xts"),n(t,"href",s[0]),n(t,"target",E=s[4]?"_blank":""),n(r,"class","mc-c-arrow-link svelte-1su6xts")},m(g,b){Z(g,r,b),l(r,t),l(t,e),l(t,c),J(i,t,null),v=!0},p(g,[b]){(!v||b&2)&&Ee(e,g[1]);const _={};b&12&&(_.color=g[3]?g[3]:g[2]),i.$set(_),(!v||b&4&&p!==(p=we(`color-${g[2]}`)+" svelte-1su6xts"))&&n(t,"class",p),(!v||b&1)&&n(t,"href",g[0]),(!v||b&16&&E!==(E=g[4]?"_blank":""))&&n(t,"target",E)},i(g){v||(L(i.$$.fragment,g),v=!0)},o(g){U(i.$$.fragment,g),v=!1},d(g){g&&o(r),K(i)}}}function vt(s,r,t){let{href:e,name:c,color:i,arrowColor:p,newTab:E}=r;return s.$$set=v=>{"href"in v&&t(0,e=v.href),"name"in v&&t(1,c=v.name),"color"in v&&t(2,i=v.color),"arrowColor"in v&&t(3,p=v.arrowColor),"newTab"in v&&t(4,E=v.newTab)},[e,c,i,p,E]}class ke extends Re{constructor(r){super(),ze(this,r,vt,_t,Be,{href:0,name:1,color:2,arrowColor:3,newTab:4})}}function lt(s,r,t){const e=s.slice();return e[8]=r[t],e}function st(s){let r,t=s[8].tags.name+"",e,c;return{c(){r=f("li"),e=N(t),this.h()},l(i){r=m(i,"LI",{class:!0});var p=u(r);e=P(p,t),p.forEach(o),this.h()},h(){n(r,"class",c=we(`tag-${s[8].tags.type.name}`)+" svelte-1ji3po")},m(i,p){Z(i,r,p),l(r,e)},p(i,p){p&128&&t!==(t=i[8].tags.name+"")&&Ee(e,t),p&128&&c!==(c=we(`tag-${i[8].tags.type.name}`)+" svelte-1ji3po")&&n(r,"class",c)},d(i){i&&o(r)}}}function ht(s){let r,t,e,c,i,p,E,v,g,b,_,le,H,W,Q,se,O,A,S,X,C;H=new ke({props:{color:s[6],href:s[5]+",",name:s[4]}});let T=s[7],I=[];for(let d=0;d<T.length;d+=1)I[d]=st(lt(s,T,d));return{c(){r=f("div"),t=f("div"),e=f("div"),c=f("h3"),i=N(s[1]),p=k(),E=f("p"),v=N(s[2]),g=k(),b=f("p"),_=N(s[3]),le=k(),z(H.$$.fragment),W=k(),Q=f("div"),se=k(),O=f("div"),A=f("div"),S=f("ul");for(let d=0;d<I.length;d+=1)I[d].c();this.h()},l(d){r=m(d,"DIV",{class:!0});var j=u(r);t=m(j,"DIV",{class:!0});var D=u(t);e=m(D,"DIV",{class:!0});var $=u(e);c=m($,"H3",{class:!0});var M=u(c);i=P(M,s[1]),M.forEach(o),p=w($),E=m($,"P",{class:!0});var de=u(E);v=P(de,s[2]),de.forEach(o),g=w($),b=m($,"P",{class:!0});var F=u(b);_=P(F,s[3]),F.forEach(o),le=w($),B(H.$$.fragment,$),$.forEach(o),D.forEach(o),W=w(j),Q=m(j,"DIV",{class:!0}),u(Q).forEach(o),se=w(j),O=m(j,"DIV",{class:!0});var G=u(O);A=m(G,"DIV",{class:!0});var Y=u(A);S=m(Y,"UL",{class:!0});var _e=u(S);for(let re=0;re<I.length;re+=1)I[re].l(_e);_e.forEach(o),Y.forEach(o),G.forEach(o),j.forEach(o),this.h()},h(){n(c,"class","mc-c-timeblock__col--content__bubble_title svelte-1ji3po"),n(E,"class","mc-c-timeblock__col--content__bubble_date svelte-1ji3po"),n(b,"class","mc-c-timeblock__col--content__bubble_blurb svelte-1ji3po"),n(e,"class","mc-c-timeblock__col--content__bubble svelte-1ji3po"),n(t,"class","mc-c-timeblock__col--content svelte-1ji3po"),n(Q,"class","mc-c-timeblock__vl svelte-1ji3po"),n(S,"class","svelte-1ji3po"),n(A,"class","tags svelte-1ji3po"),n(O,"class","mc-c-timeblock__col--tags svelte-1ji3po"),n(r,"class",X=we(`mc-c-timeblock --${s[0]%2===0?"even":"odd"}`)+" svelte-1ji3po")},m(d,j){Z(d,r,j),l(r,t),l(t,e),l(e,c),l(c,i),l(e,p),l(e,E),l(E,v),l(e,g),l(e,b),l(b,_),l(e,le),J(H,e,null),l(r,W),l(r,Q),l(r,se),l(r,O),l(O,A),l(A,S);for(let D=0;D<I.length;D+=1)I[D].m(S,null);C=!0},p(d,[j]){(!C||j&2)&&Ee(i,d[1]),(!C||j&4)&&Ee(v,d[2]),(!C||j&8)&&Ee(_,d[3]);const D={};if(j&64&&(D.color=d[6]),j&32&&(D.href=d[5]+","),j&16&&(D.name=d[4]),H.$set(D),j&128){T=d[7];let $;for($=0;$<T.length;$+=1){const M=lt(d,T,$);I[$]?I[$].p(M,j):(I[$]=st(M),I[$].c(),I[$].m(S,null))}for(;$<I.length;$+=1)I[$].d(1);I.length=T.length}(!C||j&1&&X!==(X=we(`mc-c-timeblock --${d[0]%2===0?"even":"odd"}`)+" svelte-1ji3po"))&&n(r,"class",X)},i(d){C||(L(H.$$.fragment,d),C=!0)},o(d){U(H.$$.fragment,d),C=!1},d(d){d&&o(r),K(H),nt(I,d)}}}function gt(s,r,t){let{id:e,title:c,date:i,blurb:p,expandName:E,expandHref:v,expandColor:g,tags:b}=r;return s.$$set=_=>{"id"in _&&t(0,e=_.id),"title"in _&&t(1,c=_.title),"date"in _&&t(2,i=_.date),"blurb"in _&&t(3,p=_.blurb),"expandName"in _&&t(4,E=_.expandName),"expandHref"in _&&t(5,v=_.expandHref),"expandColor"in _&&t(6,g=_.expandColor),"tags"in _&&t(7,b=_.tags)},[e,c,i,p,E,v,g,b]}class bt extends Re{constructor(r){super(),ze(this,r,gt,ht,Be,{id:0,title:1,date:2,blurb:3,expandName:4,expandHref:5,expandColor:6,tags:7})}}const pt=""+new URL("../../assets/hero-figure-932cc342.png",import.meta.url).href,kt=""+new URL("../../assets/hero-signature-a659ed62.png",import.meta.url).href;function rt(s,r,t){const e=s.slice();return e[1]=r[t],e}function at(s){let r,t;return r=new bt({props:{id:s[1],title:s[0][s[1]].title,date:s[0][s[1]].end_yr===null?`${s[0][s[1]].start_yr} - Present`:`${s[0][s[1]].start_yr===s[0][s[1]].end_yr?`${s[0][s[1]].start_yr}`:`${s[0][s[1]].start_yr} - ${s[0][s[1]].end_yr}`}`,blurb:s[0][s[1]].blurb,expandName:s[0][s[1]].see_more,expandColor:s[0][s[1]].project_type.name,expandHref:"#",tags:s[0][s[1]].tags}}),{c(){z(r.$$.fragment)},l(e){B(r.$$.fragment,e)},m(e,c){J(r,e,c),t=!0},p(e,c){const i={};c&1&&(i.id=e[1]),c&1&&(i.title=e[0][e[1]].title),c&1&&(i.date=e[0][e[1]].end_yr===null?`${e[0][e[1]].start_yr} - Present`:`${e[0][e[1]].start_yr===e[0][e[1]].end_yr?`${e[0][e[1]].start_yr}`:`${e[0][e[1]].start_yr} - ${e[0][e[1]].end_yr}`}`),c&1&&(i.blurb=e[0][e[1]].blurb),c&1&&(i.expandName=e[0][e[1]].see_more),c&1&&(i.expandColor=e[0][e[1]].project_type.name),c&1&&(i.tags=e[0][e[1]].tags),r.$set(i)},i(e){t||(L(r.$$.fragment,e),t=!0)},o(e){U(r.$$.fragment,e),t=!1},d(e){K(r,e)}}}function wt(s){let r,t,e,c,i,p,E,v,g,b,_,le,H,W,Q,se,O,A,S,X,C,T,I,d,j,D,$,M,de,F,G,Y,_e,re,ae,He,x,Se,ne,Te,Ne,Pe,q,ve,Me,Le,ee,he,Oe,Ue,ge,Ae,Fe,R,oe,Ge,ie,We,ce,$e,fe,Ie;S=new ut({}),D=new ke({props:{href:"/work",color:"art",name:"See all"}});let me=Object.keys(s[0]),y=[];for(let a=0;a<me.length;a+=1)y[a]=at(rt(s,me,a));const ot=a=>U(y[a],1,1,()=>{y[a]=null});return ae=new ke({props:{href:"/playground",color:"art",name:"See all"}}),oe=new ke({props:{href:"https://github.com/milkcee12",color:"tech",name:"Github",arrowColor:"white",newTab:"true"}}),ie=new ke({props:{href:"https://instagram.com/milkcee12",color:"art",name:"Instagram",arrowColor:"white",newTab:"true"}}),ce=new ke({props:{href:"https://twitter.com/milkcee12",color:"art",name:"Twitter",arrowColor:"white",newTab:"true"}}),fe=new dt({}),{c(){r=k(),t=f("section"),e=f("div"),c=k(),i=f("div"),p=k(),E=f("img"),g=k(),b=f("img"),le=k(),H=f("div"),W=f("p"),Q=N("Explore"),se=k(),O=f("div"),A=k(),z(S.$$.fragment),X=k(),C=f("div"),T=f("div"),I=f("h2"),d=N("Featured Work"),j=k(),z(D.$$.fragment),$=k(),M=f("section");for(let a=0;a<y.length;a+=1)y[a].c();de=k(),F=f("section"),G=f("div"),Y=f("h2"),_e=N("Playground"),re=k(),z(ae.$$.fragment),He=k(),x=f("p"),Se=N("Visit "),ne=f("a"),Te=N("kit.svelte.dev"),Ne=N(" to read the documentation"),Pe=k(),q=f("section"),ve=f("h2"),Me=N("Hello World \u{1F44B}"),Le=k(),ee=f("div"),he=f("p"),Oe=N("Hi, my name is Michaela. I also go by Milkcee on my art accounts."),Ue=k(),ge=f("p"),Ae=N("I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]"),Fe=k(),R=f("div"),z(oe.$$.fragment),Ge=k(),z(ie.$$.fragment),We=k(),z(ce.$$.fragment),$e=k(),z(fe.$$.fragment),this.h()},l(a){it("svelte-t6sc9g",document.head).forEach(o),r=w(a),t=m(a,"SECTION",{class:!0});var h=u(t);e=m(h,"DIV",{class:!0}),u(e).forEach(o),c=w(h),i=m(h,"DIV",{class:!0}),u(i).forEach(o),p=w(h),E=m(h,"IMG",{class:!0,src:!0,alt:!0}),g=w(h),b=m(h,"IMG",{class:!0,src:!0,alt:!0}),le=w(h),H=m(h,"DIV",{class:!0});var ue=u(H);W=m(ue,"P",{class:!0});var Je=u(W);Q=P(Je,"Explore"),Je.forEach(o),se=w(ue),O=m(ue,"DIV",{class:!0}),u(O).forEach(o),ue.forEach(o),h.forEach(o),A=w(a),B(S.$$.fragment,a),X=w(a),C=m(a,"DIV",{class:!0});var te=u(C);T=m(te,"DIV",{class:!0});var ye=u(T);I=m(ye,"H2",{class:!0});var Ke=u(I);d=P(Ke,"Featured Work"),Ke.forEach(o),j=w(ye),B(D.$$.fragment,ye),ye.forEach(o),$=w(te),M=m(te,"SECTION",{class:!0});var Qe=u(M);for(let qe=0;qe<y.length;qe+=1)y[qe].l(Qe);Qe.forEach(o),de=w(te),F=m(te,"SECTION",{class:!0});var Ce=u(F);G=m(Ce,"DIV",{class:!0});var je=u(G);Y=m(je,"H2",{class:!0});var Xe=u(Y);_e=P(Xe,"Playground"),Xe.forEach(o),re=w(je),B(ae.$$.fragment,je),je.forEach(o),He=w(Ce),x=m(Ce,"P",{class:!0});var Ve=u(x);Se=P(Ve,"Visit "),ne=m(Ve,"A",{href:!0,class:!0});var Ye=u(ne);Te=P(Ye,"kit.svelte.dev"),Ye.forEach(o),Ne=P(Ve," to read the documentation"),Ve.forEach(o),Ce.forEach(o),Pe=w(te),q=m(te,"SECTION",{class:!0});var be=u(q);ve=m(be,"H2",{class:!0});var Ze=u(ve);Me=P(Ze,"Hello World \u{1F44B}"),Ze.forEach(o),Le=w(be),ee=m(be,"DIV",{class:!0});var De=u(ee);he=m(De,"P",{class:!0});var xe=u(he);Oe=P(xe,"Hi, my name is Michaela. I also go by Milkcee on my art accounts."),xe.forEach(o),Ue=w(De),ge=m(De,"P",{class:!0});var et=u(ge);Ae=P(et,"I\u2019m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]"),et.forEach(o),De.forEach(o),Fe=w(be),R=m(be,"DIV",{class:!0});var pe=u(R);B(oe.$$.fragment,pe),Ge=w(pe),B(ie.$$.fragment,pe),We=w(pe),B(ce.$$.fragment,pe),pe.forEach(o),be.forEach(o),te.forEach(o),$e=w(a),B(fe.$$.fragment,a),this.h()},h(){document.title="Milkcee Studios",n(e,"class","mc-c-hero__block--left svelte-d19vdn"),n(i,"class","mc-c-hero__block--right svelte-d19vdn"),n(E,"class","mc-c-hero__img--sig svelte-d19vdn"),tt(E.src,v=kt)||n(E,"src",v),n(E,"alt","Hero section signature"),n(b,"class","mc-c-hero__img--figure svelte-d19vdn"),tt(b.src,_=pt)||n(b,"src",_),n(b,"alt","Hero section figure"),n(W,"class","svelte-d19vdn"),n(O,"class","mc-c-hero__explore__line svelte-d19vdn"),n(H,"class","mc-c-hero__explore svelte-d19vdn"),n(t,"class","mc-c-hero svelte-d19vdn"),n(I,"class","svelte-d19vdn"),n(T,"class","mc-c-title svelte-d19vdn"),n(M,"class","mc-l-timeline svelte-d19vdn"),n(Y,"class","svelte-d19vdn"),n(G,"class","mc-c-title svelte-d19vdn"),n(ne,"href","https://kit.svelte.dev"),n(ne,"class","svelte-d19vdn"),n(x,"class","svelte-d19vdn"),n(F,"class","svelte-d19vdn"),n(ve,"class","svelte-d19vdn"),n(he,"class","svelte-d19vdn"),n(ge,"class","svelte-d19vdn"),n(ee,"class","mc-c-about__blurb svelte-d19vdn"),n(R,"class","mc-c-about__social-links svelte-d19vdn"),n(q,"class","mc-c-about svelte-d19vdn"),n(C,"class","mc-l-container svelte-d19vdn")},m(a,V){Z(a,r,V),Z(a,t,V),l(t,e),l(t,c),l(t,i),l(t,p),l(t,E),l(t,g),l(t,b),l(t,le),l(t,H),l(H,W),l(W,Q),l(H,se),l(H,O),Z(a,A,V),J(S,a,V),Z(a,X,V),Z(a,C,V),l(C,T),l(T,I),l(I,d),l(T,j),J(D,T,null),l(C,$),l(C,M);for(let h=0;h<y.length;h+=1)y[h].m(M,null);l(C,de),l(C,F),l(F,G),l(G,Y),l(Y,_e),l(G,re),J(ae,G,null),l(F,He),l(F,x),l(x,Se),l(x,ne),l(ne,Te),l(x,Ne),l(C,Pe),l(C,q),l(q,ve),l(ve,Me),l(q,Le),l(q,ee),l(ee,he),l(he,Oe),l(ee,Ue),l(ee,ge),l(ge,Ae),l(q,Fe),l(q,R),J(oe,R,null),l(R,Ge),J(ie,R,null),l(R,We),J(ce,R,null),Z(a,$e,V),J(fe,a,V),Ie=!0},p(a,[V]){if(V&1){me=Object.keys(a[0]);let h;for(h=0;h<me.length;h+=1){const ue=rt(a,me,h);y[h]?(y[h].p(ue,V),L(y[h],1)):(y[h]=at(ue),y[h].c(),L(y[h],1),y[h].m(M,null))}for(ft(),h=me.length;h<y.length;h+=1)ot(h);ct()}},i(a){if(!Ie){L(S.$$.fragment,a),L(D.$$.fragment,a);for(let V=0;V<me.length;V+=1)L(y[V]);L(ae.$$.fragment,a),L(oe.$$.fragment,a),L(ie.$$.fragment,a),L(ce.$$.fragment,a),L(fe.$$.fragment,a),Ie=!0}},o(a){U(S.$$.fragment,a),U(D.$$.fragment,a),y=y.filter(Boolean);for(let V=0;V<y.length;V+=1)U(y[V]);U(ae.$$.fragment,a),U(oe.$$.fragment,a),U(ie.$$.fragment,a),U(ce.$$.fragment,a),U(fe.$$.fragment,a),Ie=!1},d(a){a&&o(r),a&&o(t),a&&o(A),K(S,a),a&&o(X),a&&o(C),K(D),nt(y,a),K(ae),K(oe),K(ie),K(ce),a&&o($e),K(fe,a)}}}function Et(s,r,t){let{data:e}=r;return s.$$set=c=>{"data"in c&&t(0,e=c.data)},[e]}class yt extends Re{constructor(r){super(),ze(this,r,Et,wt,Be,{data:0})}}export{yt as default};
