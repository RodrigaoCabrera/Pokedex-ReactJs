(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(9),a=n.n(r),o=(n(15),n(3)),i=n.n(o),l=n(4),d=(n(17),n(10)),u=n(8),j=n(2),b=n(0),m=s.a.createContext();function x(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(!1),o=Object(j.a)(a,2),x=o[0],h=o[1],f=Object(c.useState)(!1),p=Object(j.a)(f,2),O=p[0],v=p[1],g=Object(c.useState)(0),k=Object(j.a)(g,2),y=k[0],N=k[1],w=Object(c.useState)(0),P=Object(j.a)(w,2),F=P[0],C=P[1],S=Object(c.useState)([]),B=Object(j.a)(S,2),I=B[0],M=B[1],V=Object(c.useState)(!1),E=Object(j.a)(V,2),_=E[0],J=E[1],A=function(e){return e.types.map((function(e){switch(e.type.name){case"grass":return"bg-success";case"fire":return"bg-danger";case"water":case"electric":return"bg-primary";case"poison":return"bg-warning";case"flying":return"bg-info";case"bug":return"bg-secondary";case"normal":return"#00cdaa";case"ground":return"#ab5600";case"fairy":return"#cdcdcd";case"fighting":return"#cd0000";case"psychic":return"#abff12";case"rock":return"#999999";case"steel":return"#cfcfcf";case"ice":return"#00cdef";case"ghost":return"#7d56cd";case"dragon":return"#ff6700";case"dark":return"#120000";default:return null}}))},L=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1),v(!0),e.next=4,fetch("https://pokeapi.co/api/v2/pokemon?limit=18&offset=".concat(18*y));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,C(Math.ceil(n.count/18)),c=null===n||void 0===n?void 0:n.results.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=12,Promise.all(c);case 12:s=e.sent,r(s),v(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){if(I.some((function(t){return t.name===e}))){var t=I.filter((function(t){return t.name!==e}));M(t)}else{var n=s.filter((function(t){return t.name===e}));M([].concat(Object(u.a)(I),Object(u.a)(n)))}},X=function(e){return I.some((function(t){return t.name===e}))?"\u2764\ufe0f":"\u2661"},q=Object(c.useMemo)((function(){return{pokemones:s,setPokemones:r,ObtenerPokemones:L,notFound:x,setNotFound:h,isSearching:O,setIsSearching:v,page:y,setPage:N,totalPage:F,setTotalPage:C,favoritsPokemons:I,setFavoritsPokemons:M,isViewFavorits:_,setIsViewFavorits:J,typePokemonColor:A,favorits:T,heart:X}}),[y,F,O,x,I,_,T,X,s]);return Object(b.jsx)(m.Provider,Object(d.a)({value:q},e))}function h(){var e=s.a.useContext(m);return e||console.log("Erroooor"),e}var f=function(){var e=h(),t=e.favoritsPokemons,n=e.setIsViewFavorits,c=e.ObtenerPokemones;return Object(b.jsx)("nav",{className:"h-25 pt-2",children:Object(b.jsxs)("section",{className:"h-25 d-flex bg-primary justify-content-around",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{className:"",style:{height:"50px"},children:Object(b.jsx)("img",{className:"h-100",src:"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",alt:""})}),Object(b.jsxs)("div",{className:"align-self-center",onClick:function(){n(!0),c()},style:{cursor:"pointer"},children:["\u2764\ufe0f ",t.length]})]})})},p=function(e){var t=e.searchPokemon,n=Object(c.useState)(),s=Object(j.a)(n,2),r=s[0],a=s[1],o=h().setNotFound,i=function(){o(!1),t(r)};return Object(b.jsx)("div",{className:"container justify-content-center mt-2",children:Object(b.jsxs)("section",{className:"row d-flex",children:[Object(b.jsx)("div",{className:"col-md-7 offset-md-2 col-sm-12",children:Object(b.jsx)("label",{htmlFor:"searchBar",className:"gb-dark d-flex align-content-end border-0 mb-sm-2",style:{height:"2.5rem"},children:Object(b.jsx)("input",{className:"shadow border border-light rounded-pill p-2 w-100 ",style:{outline:"none"},type:"text",placeholder:"Buscar pokemones",onChange:function(e){0===e.target.value.length?(t(null),a()):a(e.target.value.toLowerCase())}})})}),Object(b.jsx)("div",{className:"col-md-2 col-sm-12 d-flex justify-content-center",children:Object(b.jsx)("section",{style:{height:"2.5rem"},children:r?Object(b.jsx)("button",{className:"btn btn-dark rounded-circle h-100",onClick:i,children:"Buscar"}):Object(b.jsx)("button",{className:"btn btn-dark rounded-circle h-100",onClick:i,disabled:!0,children:"Buscar"})})})]})})},O=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",width:"28",height:"28",children:Object(b.jsx)("path",{d:"M11.5 14.5l-4-4 4-4",fill:"none",stroke:"#FFF","stroke-linecap":"round","stroke-linejoin":"round"})})},v=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",width:"28",height:"28",children:Object(b.jsx)("path",{d:"M9.5 14.5l4-4-4-4",fill:"none",stroke:"#FFF","stroke-linecap":"round","stroke-linejoin":"round"})})},g=function(){var e=h(),t=e.page,n=e.setPage,c=e.totalPage;return Object(b.jsxs)("div",{className:"d-flex justify-content-end px-3 py-3",children:[Object(b.jsx)("button",{className:"btn btn-dark rounded-circle",onClick:function(){n(Math.max(t-1,0))},children:Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(O,{})})}),Object(b.jsxs)("div",{className:"align-self-center mx-2",children:[t+1," de ",c]}),Object(b.jsx)("button",{className:"btn btn-dark rounded-circle",onClick:function(){n(Math.min(t+1,c-1))},children:Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(v,{})})})]})},k=function(e){var t,n,s=e.pokemon,r=(e.key,h()),a=r.typePokemonColor,o=r.favorits,i=r.heart;return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{src:s.sprites.front_default,alt:s.name,className:"img-fluid"})}),Object(b.jsxs)("section",{className:"w-100",children:[Object(b.jsx)("div",{className:"text-start mt-2",children:Object(b.jsx)("h5",{children:s.name})}),Object(b.jsxs)("div",{className:"d-flex w-100 justify-content-around",children:[Object(b.jsx)("div",{className:"mx-1 d-flex w-50",children:Object(b.jsx)("p",{className:"".concat(a(s)[0]," px-1 py-1 w-100 rounded-pill text-center"),style:{backgroundColor:a(s)[0]},children:s.types[0].type.name})}),Object(b.jsx)("div",{className:"mx-1 d-flex w-50",children:Object(b.jsx)("p",{className:(null===(t=s.types[1])||void 0===t?void 0:t.type.name)?"".concat(a(s)[1]," px-1 py-1 w-100 rounded-pill text-center"):"my-auto bg-secondary rounded-pill text-center",style:{backgroundColor:a(s)[1]},children:null===(n=s.types[1])||void 0===n?void 0:n.type.name})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"btn btn-outline",onClick:function(){return o(s.name)},children:Object(b.jsx)("div",{children:i(s.name)})})})]})]})]})},y=function(){return Object(b.jsx)("div",{style:{height:"100vh"},className:"bg-primary d-flex justify-content-center",children:Object(b.jsx)("section",{className:"align-self-center",children:Object(b.jsx)("div",{class:"spinner-grow",role:"status",children:Object(b.jsx)("span",{class:"sr-only"})})})})},N=function(e){var t=e.pokemones,n=e.isSearching;return Object(b.jsxs)("div",{className:"bg-primary w-100",children:[Object(b.jsx)(g,{}),n?Object(b.jsx)(y,{}):Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"container rounded",children:Object(b.jsx)("div",{className:"row",children:null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)("div",{className:"col-md-4 col-sm-6 col-12 d-flex shadow bg-white rounded",children:Object(b.jsx)(k,{pokemon:e})},e.name)}))})}),Object(b.jsx)(g,{})]})]})},w=function(){var e=h(),t=e.favoritsPokemons,n=e.setIsViewFavorits,c=e.typePokemonColor,s=e.favorits,r=e.heart;return Object(b.jsxs)("div",{className:"container p-3 rounded bg-secondary position-absolute d-flex flex-column mt-5 overflow-auto shadow",style:{height:"80vh"},children:[Object(b.jsx)("section",{className:"mb-4 d-flex justify-content-center",children:Object(b.jsx)("span",{onClick:function(){n(!1)},className:"bg-danger text-white shadow border border-1 rounded-circle p-2 px-3 cursor-pointer",style:{cursor:"pointer"},children:"X"})}),Object(b.jsx)("div",{className:"container h-100 ",children:Object(b.jsx)("div",{className:"row d-flex",children:0!==t.length?t.map((function(e){var t,n;return Object(b.jsxs)("div",{className:"col-md-4 col-sm-6 col-xm-12 d-flex shadow",children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{src:e.sprites.front_default,alt:e.name,className:"img-fluid"})}),Object(b.jsxs)("section",{className:"w-100",children:[Object(b.jsx)("div",{className:"text-start mt-2",children:Object(b.jsx)("h5",{children:e.name})}),Object(b.jsxs)("div",{className:"d-flex w-100 justify-content-around",children:[Object(b.jsx)("div",{className:"mx-1 d-flex w-50",children:Object(b.jsx)("p",{className:"".concat(c(e)[0]," px-1 py-1 w-100 rounded-pill text-center"),children:e.types[0].type.name})}),Object(b.jsx)("div",{className:"mx-1 d-flex w-50",children:Object(b.jsx)("p",{className:(null===(t=e.types[1])||void 0===t?void 0:t.type.name)?"".concat(c(e)[1]," px-1 py-1 w-100 rounded-pill text-center"):"my-auto bg-secondary rounded-pill text-center",children:null===(n=e.types[1])||void 0===n?void 0:n.type.name})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"btn btn-outline",onClick:function(){return s(e.name)},children:Object(b.jsx)("div",{children:r(e.name)})})})]})]})]},e.name)})):Object(b.jsx)("div",{className:"col-12 mt-5 text-warning h4 text-center",children:"No has seleccionado ningun pokem\xf3n favorito."})})})]})},P=function(){return Object(b.jsx)(x,{children:Object(b.jsx)(F,{})})};function F(){var e=h(),t=e.page,n=e.pokemones,s=e.setPokemones,r=e.ObtenerPokemones,a=e.notFound,o=e.setNotFound,d=e.isSearching,u=e.setIsSearching,j=e.isViewFavorits;Object(c.useEffect)((function(){r()}),[t]);var m=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!0),!t){e.next=18;break}return"https://pokeapi.co/api/v2/pokemon/",e.next=5,fetch("https://pokeapi.co/api/v2/pokemon/"+t);case 5:if(!(n=e.sent).ok){e.next=14;break}return e.next=9,n.json();case 9:c=e.sent,s([c]),u(!1),e.next=16;break;case 14:o(!0),u(!1);case 16:e.next=19;break;case 18:r();case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j?Object(b.jsx)("div",{className:"d-flex justify-content-center items-content-center lead",children:Object(b.jsx)(w,{})}):Object(b.jsxs)("div",{className:"lead",children:[Object(b.jsx)(f,{}),Object(b.jsx)(p,{searchPokemon:m}),a?Object(b.jsx)("div",{className:"text-warning p-5 h4 text-center",children:"\xa1No se encontraron resultados!"}):Object(b.jsx)(N,{pokemones:n,isSearching:d})]})}n(19);a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0b56ab43.chunk.js.map