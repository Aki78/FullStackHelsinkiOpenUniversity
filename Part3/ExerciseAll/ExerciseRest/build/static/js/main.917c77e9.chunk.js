(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(15),o=t.n(r),s=(t(20),t(5)),i=t(4),u=t(3),l=t.n(u),d=t(0),j=function(e){var n=e.persons,t=e.searchString,c=e.deletePerson;return n.map((function(e){if(e.name.toLowerCase().includes(t.toLowerCase()))return Object(d.jsxs)("div",{children:[e.name," ",e.number," ",Object(d.jsx)("button",{onClick:function(){return c(e.id)},style:{borderColor:"red"},children:" delete "})]},e.id)}))},b=function(e){var n=e.handleNameChange,t=e.handleNumberChange,c=(e.handleSearchString,e.addPerson);return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{children:["name : ",Object(d.jsx)("input",{onChange:n})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{onChange:t})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",onClick:c,children:"add"})})]})},h="http://localhost:3001/persons",f=(t(40),function(e){var n=e.injectMessage;return Object(d.jsxs)("h3",{className:n.length>3?"logMessage":"",children:[" ",n]},n)}),O=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],O=o[1],g=Object(c.useState)(""),m=Object(i.a)(g,2),p=m[0],v=m[1],x=Object(c.useState)(""),C=Object(i.a)(x,2),S=C[0],N=C[1],P=Object(c.useState)(""),k=Object(i.a)(P,2),D=k[0],w=k[1];Object(c.useEffect)((function(){l.a.get(h).then((function(e){return e.data})).then((function(e){console.log("promise fulfilled"),console.log(e),a(e)}))}),[]);var F=function(e){e.preventDefault(),w(e.target.value),console.log(e)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(f,{injectMessage:S}),Object(d.jsxs)("div",{children:["search : ",Object(d.jsx)("input",{onChange:F})]}),Object(d.jsx)(b,{handleNameChange:function(e){e.preventDefault(),O(e.target.value),console.log(e)},handleSearchString:F,handleNumberChange:function(e){e.preventDefault(),v(e.target.value),console.log(e)},addPerson:function(e){if(e.preventDefault(),t.reduce((function(e,n){return n.name===u||e}),!1)){var n=t.find((function(e){return e.name===u}));console.log(n,"ididid");var c=Object(s.a)(Object(s.a)({},n),{},{number:p});a(t.map((function(e){return e.id===n.id?c:e}))),function(e,n){l.a.put("http://localhost:3001/api/persons/".concat(e),n).then((function(e){return e.data}))}(n.id,Object(s.a)(Object(s.a)({},n),{},{number:p})),N("Name: ".concat(n.name,"'s number has been changed."))}else{var r={name:u,number:p};!function(e){l.a.post(h,e).then((function(e){return e.data}))}(r),N("Name: ".concat(r.name," has been injected.")),console.log(S),a(t.concat(r))}}}),Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)(j,{deletePerson:function(e){var n=t.filter((function(n){return n.id!==e}));l.a.delete("http://localhost:3001/api/persons/".concat(e)),a(n)},persons:t,searchString:D})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.917c77e9.chunk.js.map