import{S as $e,i as Fe,s as Le,k as i,q as H,a as z,w as te,l as o,m as u,r as C,c as w,x as se,h as a,n as s,R as be,b as O,G as e,y as le,u as ue,f as ae,t as ne,z as re,T as Je,U as Ye,V as Ge,B as Ze}from"../../chunks/index-7ec6916d.js";import{I as Qe,N as et,F as tt}from"../../chunks/footer-5839ca19.js";function st(d){let l,t,r,m,c,v,_;return c=new Qe({props:{icon:"radix-icons:triangle-right",width:"20",height:"20"}}),{c(){l=i("p"),t=i("a"),r=H(d[1]),m=z(),te(c.$$.fragment),this.h()},l(g){l=o(g,"P",{class:!0});var V=u(l);t=o(V,"A",{class:!0,href:!0});var k=u(t);r=C(k,d[1]),m=w(k),se(c.$$.fragment,k),k.forEach(a),V.forEach(a),this.h()},h(){s(t,"class",v=be(d[2])+" svelte-koiqe3"),s(t,"href",d[0]),s(l,"class","arrow-link svelte-koiqe3")},m(g,V){O(g,l,V),e(l,t),e(t,r),e(t,m),le(c,t,null),_=!0},p(g,[V]){(!_||V&2)&&ue(r,g[1]),(!_||V&4&&v!==(v=be(g[2])+" svelte-koiqe3"))&&s(t,"class",v),(!_||V&1)&&s(t,"href",g[0])},i(g){_||(ae(c.$$.fragment,g),_=!0)},o(g){ne(c.$$.fragment,g),_=!1},d(g){g&&a(l),re(c)}}}function lt(d,l,t){let{href:r,name:m,color:c}=l;return d.$$set=v=>{"href"in v&&t(0,r=v.href),"name"in v&&t(1,m=v.name),"color"in v&&t(2,c=v.color)},[r,m,c]}class at extends $e{constructor(l){super(),Fe(this,l,lt,st,Le,{href:0,name:1,color:2})}}function je(d,l,t){const r=d.slice();return r[8]=l[t],r}function Be(d){let l,t=d[8].name+"",r,m;return{c(){l=i("li"),r=H(t),this.h()},l(c){l=o(c,"LI",{class:!0});var v=u(l);r=C(v,t),v.forEach(a),this.h()},h(){s(l,"class",m=be(`tag-${d[8].type}`)+" svelte-1sn9iot")},m(c,v){O(c,l,v),e(l,r)},p(c,v){v&128&&t!==(t=c[8].name+"")&&ue(r,t),v&128&&m!==(m=be(`tag-${c[8].type}`)+" svelte-1sn9iot")&&s(l,"class",m)},d(c){c&&a(l)}}}function nt(d){let l,t,r,m,c,v,_,g,V,k,p,Q,S,F,M,J,x,P,N,W,b;S=new at({props:{color:d[6],href:d[5]+",",name:d[4]}});let y=d[7],E=[];for(let f=0;f<y.length;f+=1)E[f]=Be(je(d,y,f));return{c(){l=i("div"),t=i("div"),r=i("div"),m=i("h3"),c=H(d[1]),v=z(),_=i("p"),g=H(d[2]),V=z(),k=i("p"),p=H(d[3]),Q=z(),te(S.$$.fragment),F=z(),M=i("div"),J=z(),x=i("div"),P=i("div"),N=i("ul");for(let f=0;f<E.length;f+=1)E[f].c();this.h()},l(f){l=o(f,"DIV",{class:!0});var I=u(l);t=o(I,"DIV",{class:!0});var D=u(t);r=o(D,"DIV",{class:!0});var h=u(r);m=o(h,"H3",{class:!0});var A=u(m);c=C(A,d[1]),A.forEach(a),v=w(h),_=o(h,"P",{class:!0});var L=u(_);g=C(L,d[2]),L.forEach(a),V=w(h),k=o(h,"P",{class:!0});var ie=u(k);p=C(ie,d[3]),ie.forEach(a),Q=w(h),se(S.$$.fragment,h),h.forEach(a),D.forEach(a),F=w(I),M=o(I,"DIV",{class:!0}),u(M).forEach(a),J=w(I),x=o(I,"DIV",{class:!0});var U=u(x);P=o(U,"DIV",{class:!0});var T=u(P);N=o(T,"UL",{class:!0});var oe=u(N);for(let $=0;$<E.length;$+=1)E[$].l(oe);oe.forEach(a),T.forEach(a),U.forEach(a),I.forEach(a),this.h()},h(){s(m,"class","title svelte-1sn9iot"),s(_,"class","date svelte-1sn9iot"),s(k,"class","blurb svelte-1sn9iot"),s(r,"class","content svelte-1sn9iot"),s(t,"class","col col-content svelte-1sn9iot"),s(M,"class","vl svelte-1sn9iot"),s(N,"class","svelte-1sn9iot"),s(P,"class","tags svelte-1sn9iot"),s(x,"class","col svelte-1sn9iot"),s(l,"class",W="block "+(d[0]%2===0?"even":"odd")+" svelte-1sn9iot")},m(f,I){O(f,l,I),e(l,t),e(t,r),e(r,m),e(m,c),e(r,v),e(r,_),e(_,g),e(r,V),e(r,k),e(k,p),e(r,Q),le(S,r,null),e(l,F),e(l,M),e(l,J),e(l,x),e(x,P),e(P,N);for(let D=0;D<E.length;D+=1)E[D].m(N,null);b=!0},p(f,[I]){(!b||I&2)&&ue(c,f[1]),(!b||I&4)&&ue(g,f[2]),(!b||I&8)&&ue(p,f[3]);const D={};if(I&64&&(D.color=f[6]),I&32&&(D.href=f[5]+","),I&16&&(D.name=f[4]),S.$set(D),I&128){y=f[7];let h;for(h=0;h<y.length;h+=1){const A=je(f,y,h);E[h]?E[h].p(A,I):(E[h]=Be(A),E[h].c(),E[h].m(N,null))}for(;h<E.length;h+=1)E[h].d(1);E.length=y.length}(!b||I&1&&W!==(W="block "+(f[0]%2===0?"even":"odd")+" svelte-1sn9iot"))&&s(l,"class",W)},i(f){b||(ae(S.$$.fragment,f),b=!0)},o(f){ne(S.$$.fragment,f),b=!1},d(f){f&&a(l),re(S),Je(E,f)}}}function rt(d,l,t){let{id:r,title:m,date:c,blurb:v,expandName:_,expandHref:g,expandColor:V,tags:k}=l;return d.$$set=p=>{"id"in p&&t(0,r=p.id),"title"in p&&t(1,m=p.title),"date"in p&&t(2,c=p.date),"blurb"in p&&t(3,v=p.blurb),"expandName"in p&&t(4,_=p.expandName),"expandHref"in p&&t(5,g=p.expandHref),"expandColor"in p&&t(6,V=p.expandColor),"tags"in p&&t(7,k=p.tags)},[r,m,c,v,_,g,V,k]}class Xe extends $e{constructor(l){super(),Fe(this,l,rt,nt,Le,{id:0,title:1,date:2,blurb:3,expandName:4,expandHref:5,expandColor:6,tags:7})}}const it=""+new URL("../../assets/hero-figure-932cc342.png",import.meta.url).href,ot=""+new URL("../../assets/hero-signature-a659ed62.png",import.meta.url).href;function ct(d){let l,t,r,m,c,v,_,g,V,k,p,Q,S,F,M,J,x,P,N,W,b,y,E,f,I,D,h,A,L,ie,U,T,oe,$,Ie,G,ce,ze,we,j,Ve,Y,De,Se,He,B,fe,Ce,Ne,X,ye,Z,xe,Pe,de,ee,ve;return N=new et({}),L=new Qe({props:{icon:"radix-icons:triangle-right"}}),T=new Xe({props:{id:++Ke,title:"Milkcee Studios",date:"2022",blurb:"Designed my portfolio website. Implemented using SvelteKit and MySQL.",expandName:"View the creation process",expandHref:"#",expandColor:"text-art",tags:[{name:"Front-End",type:"tech"},{name:"Back-End",type:"tech"},{name:"UI/UX",type:"art"}]}}),$=new Xe({props:{id:++Ke,title:"Trojan Dining",date:"2021 - Present",blurb:"Student-first redesign of the USC Residential Dining Menu website. Implemented using React.js.",expandName:"View case study",expandHref:"#",expandColor:"text-tech",tags:[{name:"Front-End",type:"tech"},{name:"UI/UX",type:"art"}]}}),ee=new tt({}),{c(){l=z(),t=i("section"),r=i("div"),m=z(),c=i("div"),v=z(),_=i("img"),V=z(),k=i("img"),Q=z(),S=i("div"),F=i("p"),M=H("Explore"),J=z(),x=i("div"),P=z(),te(N.$$.fragment),W=z(),b=i("div"),y=i("div"),E=i("h2"),f=H("Featured Work"),I=z(),D=i("p"),h=i("a"),A=H("See all "),te(L.$$.fragment),ie=z(),U=i("section"),te(T.$$.fragment),oe=z(),te($.$$.fragment),Ie=z(),G=i("section"),ce=i("h2"),ze=H("Works"),we=z(),j=i("p"),Ve=H("Visit "),Y=i("a"),De=H("kit.svelte.dev"),Se=H(" to read the documentation"),He=z(),B=i("section"),fe=i("h2"),Ce=H("Hello World \u{1F44B}"),Ne=z(),X=i("p"),ye=H("Visit "),Z=i("a"),xe=H("kit.svelte.dev"),Pe=H(" to read the documentation"),de=z(),te(ee.$$.fragment),this.h()},l(n){Ye("svelte-t6sc9g",document.head).forEach(a),l=w(n),t=o(n,"SECTION",{class:!0});var q=u(t);r=o(q,"DIV",{class:!0}),u(r).forEach(a),m=w(q),c=o(q,"DIV",{class:!0}),u(c).forEach(a),v=w(q),_=o(q,"IMG",{class:!0,src:!0,alt:!0}),V=w(q),k=o(q,"IMG",{class:!0,src:!0,alt:!0}),Q=w(q),S=o(q,"DIV",{class:!0});var he=u(S);F=o(he,"P",{class:!0});var Te=u(F);M=C(Te,"Explore"),Te.forEach(a),J=w(he),x=o(he,"DIV",{class:!0}),u(x).forEach(a),he.forEach(a),q.forEach(a),P=w(n),se(N.$$.fragment,n),W=w(n),b=o(n,"DIV",{class:!0});var K=u(b);y=o(K,"DIV",{class:!0});var me=u(y);E=o(me,"H2",{class:!0});var qe=u(E);f=C(qe,"Featured Work"),qe.forEach(a),I=w(me),D=o(me,"P",{class:!0});var Me=u(D);h=o(Me,"A",{href:!0,class:!0});var Ue=u(h);A=C(Ue,"See all "),se(L.$$.fragment,Ue),Ue.forEach(a),Me.forEach(a),me.forEach(a),ie=w(K),U=o(K,"SECTION",{class:!0});var _e=u(U);se(T.$$.fragment,_e),oe=w(_e),se($.$$.fragment,_e),_e.forEach(a),Ie=w(K),G=o(K,"SECTION",{class:!0});var ge=u(G);ce=o(ge,"H2",{class:!0});var We=u(ce);ze=C(We,"Works"),We.forEach(a),we=w(ge),j=o(ge,"P",{class:!0});var pe=u(j);Ve=C(pe,"Visit "),Y=o(pe,"A",{href:!0,class:!0});var Ae=u(Y);De=C(Ae,"kit.svelte.dev"),Ae.forEach(a),Se=C(pe," to read the documentation"),pe.forEach(a),ge.forEach(a),He=w(K),B=o(K,"SECTION",{class:!0});var Ee=u(B);fe=o(Ee,"H2",{class:!0});var Re=u(fe);Ce=C(Re,"Hello World \u{1F44B}"),Re.forEach(a),Ne=w(Ee),X=o(Ee,"P",{class:!0});var ke=u(X);ye=C(ke,"Visit "),Z=o(ke,"A",{href:!0,class:!0});var Oe=u(Z);xe=C(Oe,"kit.svelte.dev"),Oe.forEach(a),Pe=C(ke," to read the documentation"),ke.forEach(a),Ee.forEach(a),K.forEach(a),de=w(n),se(ee.$$.fragment,n),this.h()},h(){document.title="Milkcee Studios",s(r,"class","block left svelte-n47lnz"),s(c,"class","block right svelte-n47lnz"),s(_,"class","hero-sig svelte-n47lnz"),Ge(_.src,g=ot)||s(_,"src",g),s(_,"alt","Hero section signature"),s(k,"class","hero-figure svelte-n47lnz"),Ge(k.src,p=it)||s(k,"src",p),s(k,"alt","Hero section figure"),s(F,"class","svelte-n47lnz"),s(x,"class","line svelte-n47lnz"),s(S,"class","explore svelte-n47lnz"),s(t,"class","hero svelte-n47lnz"),s(E,"class","svelte-n47lnz"),s(h,"href","/work"),s(h,"class","svelte-n47lnz"),s(D,"class","svelte-n47lnz"),s(y,"class","title svelte-n47lnz"),s(U,"class","timeline svelte-n47lnz"),s(ce,"class","svelte-n47lnz"),s(Y,"href","https://kit.svelte.dev"),s(Y,"class","svelte-n47lnz"),s(j,"class","svelte-n47lnz"),s(G,"class","svelte-n47lnz"),s(fe,"class","svelte-n47lnz"),s(Z,"href","https://kit.svelte.dev"),s(Z,"class","svelte-n47lnz"),s(X,"class","svelte-n47lnz"),s(B,"class","svelte-n47lnz"),s(b,"class","container svelte-n47lnz")},m(n,R){O(n,l,R),O(n,t,R),e(t,r),e(t,m),e(t,c),e(t,v),e(t,_),e(t,V),e(t,k),e(t,Q),e(t,S),e(S,F),e(F,M),e(S,J),e(S,x),O(n,P,R),le(N,n,R),O(n,W,R),O(n,b,R),e(b,y),e(y,E),e(E,f),e(y,I),e(y,D),e(D,h),e(h,A),le(L,h,null),e(b,ie),e(b,U),le(T,U,null),e(U,oe),le($,U,null),e(b,Ie),e(b,G),e(G,ce),e(ce,ze),e(G,we),e(G,j),e(j,Ve),e(j,Y),e(Y,De),e(j,Se),e(b,He),e(b,B),e(B,fe),e(fe,Ce),e(B,Ne),e(B,X),e(X,ye),e(X,Z),e(Z,xe),e(X,Pe),O(n,de,R),le(ee,n,R),ve=!0},p:Ze,i(n){ve||(ae(N.$$.fragment,n),ae(L.$$.fragment,n),ae(T.$$.fragment,n),ae($.$$.fragment,n),ae(ee.$$.fragment,n),ve=!0)},o(n){ne(N.$$.fragment,n),ne(L.$$.fragment,n),ne(T.$$.fragment,n),ne($.$$.fragment,n),ne(ee.$$.fragment,n),ve=!1},d(n){n&&a(l),n&&a(t),n&&a(P),re(N,n),n&&a(W),n&&a(b),re(L),re(T),re($),n&&a(de),re(ee,n)}}}let Ke=0;class dt extends $e{constructor(l){super(),Fe(this,l,null,ct,Le,{})}}export{dt as default};
