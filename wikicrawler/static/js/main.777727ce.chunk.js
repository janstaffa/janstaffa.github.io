(this.webpackJsonpwikicrawler=this.webpackJsonpwikicrawler||[]).push([[0],{57:function(e,i,t){},58:function(e,i,t){"use strict";t.r(i);var n=t(0),r=t.n(n),a=t(16),o=t.n(a),c=t(12),s=t(11),l=t(4),d=t(19),u=t(17),h=["https://en.wikipedia.org/wiki/Alfred_Nobel","https://en.wikipedia.org/wiki/Chemistry","https://en.wikipedia.org/wiki/Mathematics","https://en.wikipedia.org/wiki/France","https://en.wikipedia.org/wiki/Great_Britain","https://en.wikipedia.org/wiki/Biology","https://en.wikipedia.org/wiki/Geology","https://en.wikipedia.org/wiki/Czech_Republic","https://en.wikipedia.org/wiki/Warsaw_Pact","https://en.wikipedia.org/wiki/Soviet_Union","https://en.wikipedia.org/wiki/World_War_II","https://en.wikipedia.org/wiki/World_War_I","https://en.wikipedia.org/wiki/Computer","https://en.wikipedia.org/wiki/Copper","https://en.wikipedia.org/wiki/Universe","https://en.wikipedia.org/wiki/Earth","https://en.wikipedia.org/wiki/Solar_System","https://en.wikipedia.org/wiki/Physics","https://en.wikipedia.org/wiki/Semiconductor","https://cs.wikipedia.org/wiki/Napoleon_Bonaparte","https://en.wikipedia.org/wiki/Computer_programming","https://en.wikipedia.org/wiki/Milky_Way","https://en.wikipedia.org/wiki/Big_Bang","https://en.wikipedia.org/wiki/Matter","https://en.wikipedia.org/wiki/Liquid","https://en.wikipedia.org/wiki/Gas","https://en.wikipedia.org/wiki/Video_game","https://en.wikipedia.org/wiki/Marie_Curie","https://en.wikipedia.org/wiki/Google","https://en.wikipedia.org/wiki/Facebook","https://en.wikipedia.org/wiki/Bitcoin","https://en.wikipedia.org/wiki/Stock_market","https://en.wikipedia.org/wiki/Cryptography","https://en.wikipedia.org/wiki/Food","https://en.wikipedia.org/wiki/Animal","https://en.wikipedia.org/wiki/Dog","https://en.wikipedia.org/wiki/Cat","https://en.wikipedia.org/wiki/Microsoft","https://en.wikipedia.org/wiki/Chicken","https://en.wikipedia.org/wiki/Latin","https://en.wikipedia.org/wiki/Crystal","https://en.wikipedia.org/wiki/Hydrogen","https://en.wikipedia.org/wiki/Radiation","https://en.wikipedia.org/wiki/Chernobyl_disaster"],p=t(9),w=function e(i,t,n){Object(p.a)(this,e),this.value=null,this.previous=null,this.next=null,this.value=i,this.previous=t,this.next=n},j=function e(){var i=this;Object(p.a)(this,e),this.nodes=[],this.addNode=function(e){var t=i.nodes[i.nodes.length-1],n=new w(e,t,null);return i.nodes[i.nodes.length-1].next=n,i.nodes.push(n),n}},k=function(e){return fetch(e).then((function(e){return e.text()})).then((function(e){var i;if(!e)throw new Error("URL can't be reached.");var t=document.createElement("html");t.innerHTML=e;var n=t.querySelector("body");return n&&(null===(i=n.querySelector("#firstHeading"))||void 0===i?void 0:i.innerText)||null}))},b=t(10),g=t.n(b),f=t(18),v=function(){var e=Object(f.a)(g.a.mark((function e(i){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i<1&&(i=1),e.next=3,fetch("https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=".concat(i,"&format=json")).then((function(e){return e.json()})).then((function(e){var i,t=null===e||void 0===e||null===(i=e.query)||void 0===i?void 0:i.random;if(t&&0!==t.length){var n=t.map((function(e){var i=e.title;return i&&"string"===typeof i?"https://en.wikipedia.org/wiki/"+i.replaceAll(" ","_"):null}));if(n&&0!==n.length)return n}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),m=function(e,i){return Math.floor(Math.random()*(i-e+1)+e)},O=t(1),x=function(){var e=Object(n.useState)(0),i=Object(l.a)(e,2),t=i[0],r=i[1],a=Object(n.useRef)(t);a.current=t;var o=Object(n.useState)(!1),p=Object(l.a)(o,2),w=p[0],b=p[1],g=Object(n.useState)(),f=Object(l.a)(g,2),x=f[0],y=f[1],S=Object(n.useState)(),C=Object(l.a)(S,2),N=C[0],L=C[1],_=Object(n.useRef)();_.current=N;var E=Object(n.useState)({url:"",previousPage:null,nextPage:null}),A=Object(l.a)(E,2),M=A[0],P=A[1],q=Object(n.useState)(!1),T=Object(l.a)(q,2),R=T[0],W=T[1],H=Object(n.useRef)(R);H.current=R;var B=Object(n.useState)(!1),G=Object(l.a)(B,2),U=G[0],I=G[1],F=function(){w||(I(!1),v(2).then((function(e){var i=h[m(0,h.length-1)];(null===e||void 0===e?void 0:e[0])&&!H.current&&(i=e[0]),k(i).then((function(e){e&&(y({url:i,title:e}),r(0))}));var t=null===e||void 0===e?void 0:e[1];if(!(null===e||void 0===e?void 0:e[1])||t===i||H.current)do{t=h[m(0,h.length-1)]}while(t===i);k(t).then((function(e){e&&(L({url:t,title:e}),P({url:i,nextPage:null,previousPage:null}))}))})))};Object(n.useEffect)((function(){F()}),[]);var z=Object(n.useState)(""),J=Object(l.a)(z,2),V=J[0],D=J[1],Y=Object(n.useRef)(null);return Object(n.useRef)().current=new j,Object(n.useEffect)((function(){var e,i;if(M.url!==(null===(e=_.current)||void 0===e?void 0:e.url)){if(M.url){b(!0);var t=Y.current,n=null===t||void 0===t||null===(i=t.contentWindow)||void 0===i?void 0:i.document;if(n){var o=new URL(M.url).origin,c=function(e){var i,c=e.target,s=c.closest("a");if(c||s){var l=c;if("A"!==c.tagName){if(!s)return;l=s}var d=l.getAttribute("data-href");if(d&&"/"!==d)if("#"!==d[0])r(a.current+1),P({url:o+d,previousPage:M,nextPage:null}),null===t||void 0===t||null===(i=t.contentWindow)||void 0===i||i.scrollTo({top:0});else{var u=n.querySelector(d);u&&u.scrollIntoView()}}};return fetch(M.url).then((function(e){return e.text()})).then((function(e){var i,r=document.createElement("html");r.innerHTML=e;var a=document.createElement("html"),o=document.createElement("head"),l=document.createElement("body"),d=r.querySelector("head"),u=r.querySelector("#firstHeading"),h=r.querySelector("#bodyContent");if(d&&h){u&&(u.style.marginTop="0",l.prepend(u),D(u.innerText));var p=d.querySelectorAll('link[rel="stylesheet"]');if(p){var w=new URL(M.url).origin;Array.from(p).forEach((function(e){var i=new URL(e.href);i.origin===window.origin&&(e.href=w+i.pathname+i.search)}))}o.appendChild(d);var j=[],k=h.querySelectorAll(".mw-editsection");j.push.apply(j,Object(s.a)(Array.from(k)));var g=h.querySelectorAll(".navbox, .navbox2");j.push.apply(j,Object(s.a)(Array.from(g)));var f=h.querySelector("#catlinks");f&&j.push(f),j&&j.length>0&&j.forEach((function(e){return e.remove()}));var v=h.querySelectorAll("a.new");Array.from(v).forEach((function(e){e.classList.remove("new"),e.outerHTML="<span>"+e.innerHTML+"</span>"}));var m=h.getElementsByTagName("a");if(m&&(Array.from(m).forEach((function(e){var i=e.getAttribute("href");if(e.href&&i){var t=new URL(e.href),n=t.pathname+t.search;t.hash&&"#"===i[0]&&(n=t.hash),t.origin===window.origin?(e.setAttribute("data-href",n),e.removeAttribute("href")):e.outerHTML="<span>"+e.innerHTML+"</span>"}})),n.addEventListener("click",c)),l.appendChild(h),l.style.padding="10px",a.append(o,l),a){var O=null===t||void 0===t||null===(i=t.contentWindow)||void 0===i?void 0:i.document.querySelector("html");O&&(O.innerHTML=a.outerHTML,b(!1))}}})),function(){var e,i=null===t||void 0===t||null===(e=t.contentWindow)||void 0===e?void 0:e.document.documentElement;i&&(i.innerHTML=""),null===n||void 0===n||n.removeEventListener("click",c)}}}}else I(!0)}),[M]),Object(O.jsxs)("main",{children:[Object(O.jsxs)("div",{className:"tool-bar",children:[Object(O.jsx)("table",{className:"info-table",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Start:"}),Object(O.jsx)("td",{children:Object(O.jsx)("b",{children:Object(O.jsx)("a",{href:null===x||void 0===x?void 0:x.url,target:"_blank",rel:"noreferrer",children:null===x||void 0===x?void 0:x.title})})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Target:"}),Object(O.jsx)("td",{children:Object(O.jsx)("b",{children:Object(O.jsx)("a",{href:null===N||void 0===N?void 0:N.url,target:"_blank",rel:"noreferrer",children:null===N||void 0===N?void 0:N.title})})})]})]})}),Object(O.jsxs)("div",{className:"game-options",children:[Object(O.jsxs)("div",{className:"easy-mode-wrap",children:[Object(O.jsx)(u.Popup,{content:function(){return Object(O.jsx)("div",{children:"Pages get chosen from a limited list of Wikipedia articles."})},innerStyle:{background:"#fff",width:"200px",padding:"5px",borderRadius:"5px",color:"#000"},closeOnClickOutside:!0,position:"top",children:function(e){var i=e.setShow;return Object(O.jsx)("label",{onClick:function(){return i(!0)},className:"easy-mode-label",children:"easy mode"})}}),Object(O.jsx)("input",{type:"checkbox",onClick:F,checked:R,onChange:function(e){return W(e.target.checked)}})]}),Object(O.jsx)("button",{onClick:function(){return F()},className:"new-game-btn",title:"Generate a new game",children:"New game"}),Object(O.jsxs)("div",{className:"link-counter",children:["Links: ",Object(O.jsx)("b",{children:t})]})]})]}),Object(O.jsxs)("div",{className:"game",children:[Object(O.jsxs)("div",{className:"game-bar",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){w||U||M.previousPage&&P(Object(c.a)(Object(c.a)({},M.previousPage),{},{nextPage:M}))},title:"Go back in history",children:"<"}),Object(O.jsx)("button",{onClick:function(){w||U||M.nextPage&&P(M.nextPage)},title:"Go forward in history",children:">"})]}),Object(O.jsx)("div",{children:!U&&Object(O.jsx)("b",{children:V})})]}),Object(O.jsxs)("div",{className:"game-wrap",children:[Object(O.jsx)("iframe",{className:"game-window"+(w||U?" hidden":""),ref:Y,title:"game window"}),U&&Object(O.jsxs)("div",{className:"end-screen",children:[Object(O.jsx)("h2",{children:"You won!"}),Object(O.jsxs)("div",{children:["clicked links: ",t]}),Object(O.jsxs)("div",{children:["start: ",null===x||void 0===x?void 0:x.title]}),Object(O.jsxs)("div",{children:["target: ",null===N||void 0===N?void 0:N.title]}),Object(O.jsx)("button",{onClick:function(){return F()},className:"new-game-btn",children:"Play again"})]}),w&&Object(O.jsx)(d.ClipLoader,{color:"#ffff",size:"60"})]})]})]})},y=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"app-wrap",children:[Object(O.jsxs)("div",{className:"main-title",children:[Object(O.jsx)("h1",{children:"WikiCrawler"}),Object(O.jsx)("p",{children:"Click through Wikipedia links to get to the target page."})]}),Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"credits",children:["by ",Object(O.jsx)("a",{href:"https://janstaffa.cz",children:"janstaffa"})]})]})})};t(57);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.777727ce.chunk.js.map