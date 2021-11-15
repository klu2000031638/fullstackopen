(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(14),o=n.n(c),u=n(3),a=n(0),i=function(e){var t=e.persons,n=e.searchFilter,r=e.deletePerson;return 0===t.length?Object(a.jsx)("div",{children:"No entries yet, please add one."}):t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(a.jsxs)("div",{children:[e.name," ",e.number," ",Object(a.jsx)("button",{onClick:function(){return r(e.id)},children:"delete"})]},e.name)}))},s=function(e){var t=e.newName,n=e.setNewName,r=e.newNumber,c=e.setNewNumber;return Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var t=e.searchFilter,n=e.setSearchFilter;return Object(a.jsxs)(a.Fragment,{children:["filter shown with ",Object(a.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}})]})},f=n(4),d=n.n(f),m="/api/persons",b={getAll:function(){return d.a.get(m).then((function(e){return e.data}))},create:function(e){return d.a.post(m,e).then((function(e){return e.data}))},deletePerson:function(e){return d.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},update:function(e,t){return d.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))}},j=function(e){var t=e.message,n=e.style;return null===t?null:Object(a.jsx)("div",{className:n,children:t})},h=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),f=Object(u.a)(o,2),d=f[0],m=f[1],h=Object(r.useState)(""),O=Object(u.a)(h,2),v=O[0],p=O[1],x=Object(r.useState)(""),w=Object(u.a)(x,2),g=w[0],N=w[1],y=Object(r.useState)(null),S=Object(u.a)(y,2),k=S[0],F=S[1],T=Object(r.useState)(""),C=Object(u.a)(T,2),P=C[0],I=C[1];Object(r.useEffect)((function(){b.getAll().then((function(e){c(e)})).catch((function(e){I("error"),F("error fetching data from backend api"),setTimeout((function(){F(null)}),5e3)}))}),[]);return Object(a.jsxs)("div",{onSubmit:function(e){e.preventDefault();var t={name:d,number:v};if(n.some((function(e){return e.name===d}))){var r=n.filter((function(e){return e.name===d}))[0].id;return window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&b.update(r,t).then((function(e){F("Updated ".concat(e.name)),I("success"),setTimeout((function(){F(null)}),5e3),c(n.map((function(t){return t.id!==r?t:e})))})).catch((function(e){F("Information of ".concat(d," has already been removed from server")),I("error"),setTimeout((function(){F(null)}),5e3),c(n.filter((function(e){return e.name!==d})))})),m(""),void p("")}b.create(t).then((function(e){F("Added ".concat(e.name)),I("success"),setTimeout((function(){F(null)}),5e3),c(n.concat(e)),m(""),p("")})).catch((function(e){I("error"),F(e.response.data.error),setTimeout((function(){F(null)}),5e3)}))},children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(j,{message:k,style:P}),Object(a.jsx)(l,{searchFilter:g,setSearchFilter:N}),Object(a.jsx)("h3",{children:"add a new"}),Object(a.jsx)(s,{newName:d,setNewName:m,newNumber:v,setNewNumber:p}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(i,{persons:n,searchFilter:g,deletePerson:function(e){var t=n.filter((function(t){return t.id===e}))[0];window.confirm("Delete ".concat(t.name," ?"))&&b.deletePerson(e).then((function(r){c(n.filter((function(t){return t.id!==e}))),F("Information of ".concat(t.name," removed from server successfully")),I("success"),setTimeout((function(){F(null)}),5e3)})).catch((function(e){F("Information of ".concat(t.name," has already been removed from server")),I("error"),setTimeout((function(){F(null)}),5e3),c(n.filter((function(e){return e.name!==t.name})))}))}})]})};n(38);o.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ed7a3a81.chunk.js.map