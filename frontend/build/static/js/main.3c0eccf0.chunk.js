(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,n){e.exports=n(64)},64:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n(1),l=n.n(r),u=n(46),o=n.n(u),c=n(6),i=n(33),m=n(73),s=n(21),E=n(75);function b(){var e=Object(s.a)(["\n  query me {\n    me {\n      username\n      favoriteGenre\n    }\n  }\n"]);return b=function(){return e},e}function d(){var e=Object(s.a)(["\n  query allBooks($author: String, $genre: String) {\n    allBooks(author: $author, genre: $genre) {\n      title\n      published\n      author {\n        name\n        born\n      }\n      genres\n    }\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(s.a)(["\n  {\n    allAuthors {\n      name\n      born\n      bookCount\n    }\n  }\n"]);return f=function(){return e},e}var h=Object(E.a)(f()),v=Object(E.a)(d()),g=Object(E.a)(b()),p=n(68);function j(){var e=Object(s.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      value\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  mutation editAuthor($name: String!, $setBornTo: Int!) {\n    editAuthor(name: $name, setBornTo: $setBornTo) {\n      name\n      born\n    }\n  }\n"]);return O=function(){return e},e}function k(){var e=Object(s.a)(["\n  mutation AddBook(\n    $title: String!\n    $author: String!\n    $published: Int!\n    $genres: [String!]!\n  ) {\n    addBook(\n      title: $title\n      author: $author\n      published: $published\n      genres: $genres\n    ) {\n      title\n      author\n      genres\n      id\n    }\n  }\n"]);return k=function(){return e},e}var S=Object(E.a)(k()),y=Object(E.a)(O()),w=Object(E.a)(j()),C=function(e){var t=e.setError,n=e.authors,a=Object(r.useState)(n[0].name),u=Object(c.a)(a,2),o=u[0],i=u[1],m=Object(r.useState)(""),s=Object(c.a)(m,2),E=s[0],b=s[1],d=Object(p.a)(y,{refetchQueries:[{query:h}]}),f=Object(c.a)(d,2),v=f[0],g=f[1];return Object(r.useEffect)((function(){g.data&&null===g.data.editAuthor&&t("Author not found")}),[g.data,t]),l.a.createElement("div",null,l.a.createElement("h2",null,"Set Birth Year"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v({variables:{name:o,setBornTo:E}}),b("")}},l.a.createElement("div",null,"Name:"," ",l.a.createElement("select",{value:o,onChange:function(e){var t=e.target;return i(t.value)}},n.map((function(e){return l.a.createElement("option",{key:e.name},e.name)})))),l.a.createElement("div",null,"Birth Year:"," ",l.a.createElement("input",{type:"number",value:E,onChange:function(e){var t=e.target;return b(parseInt(t.value))}})),l.a.createElement("button",{type:"submit"},"Update Author")))},$=function(e){var t=e.show,n=e.setError,a=Object(m.a)(h),r=a.loading,u=a.error,o=a.data;if(!t)return null;if(r)return l.a.createElement("div",null,"loading...");if(u)return l.a.createElement("div",null,u);var c=o.allAuthors;return l.a.createElement("div",null,l.a.createElement("h2",null,"authors"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"author"),l.a.createElement("th",null,"born"),l.a.createElement("th",null,"books")),c.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.born),l.a.createElement("td",null,e.bookCount))})))),l.a.createElement(C,{setError:n,authors:c}))},B=n(23),A=function(e){var t=e.show,n=Object(m.a)(v),a=n.loading,u=n.error,o=n.data,i=Object(r.useState)(""),s=Object(c.a)(i,2),E=s[0],b=s[1];if(!t)return null;if(a)return l.a.createElement("div",null,"loading...");if(u)return l.a.createElement("div",null,u);var d=o.allBooks,f=Object(B.a)(new Set(d.map((function(e){return e.genres})).flat().map((function(e){return e.toLowerCase()}))));return l.a.createElement("div",null,l.a.createElement("h2",null,"books"),E?l.a.createElement((function(e){var t=e.genre,n=d.filter((function(e){return e.genres.map((function(e){return e.toLowerCase()})).includes(t)}));return l.a.createElement("div",null,l.a.createElement("h3",null,"In genre ",t),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"title"),l.a.createElement("th",null,"author"),l.a.createElement("th",null,"published")),n.map((function(e){return l.a.createElement("tr",{key:e.title},l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.author.name),l.a.createElement("td",null,e.published))})))))}),{genre:E}):l.a.createElement((function(){return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"title"),l.a.createElement("th",null,"author"),l.a.createElement("th",null,"published")),d.map((function(e){return l.a.createElement("tr",{key:e.title},l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.author.name),l.a.createElement("td",null,e.published))})))))}),null),f.map((function(e){return l.a.createElement("button",{key:e,onClick:function(){return b(e)}},e)})),l.a.createElement("button",{onClick:function(){return b("")}},"all genres"))},I=function(e){var t=e.show,n=e.setError,a=e.setToken,u=e.setPage,o=Object(r.useState)(""),i=Object(c.a)(o,2),m=i[0],s=i[1],E=Object(r.useState)(""),b=Object(c.a)(E,2),d=b[0],f=b[1],h=Object(p.a)(w,{onError:function(e){n(e.graphQLErrors[0].message)}}),v=Object(c.a)(h,2),g=v[0],j=v[1];Object(r.useEffect)((function(){if(j.data){var e=j.data.login.value;a(e),localStorage.setItem("library-user-token",e)}}),[j.data,a]);return t?l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g({variables:{username:m,password:d}}),u("books"),s(""),f("")}},l.a.createElement("h1",null,"Log in"),l.a.createElement("div",null,"username:"," ",l.a.createElement("input",{value:m,onChange:function(e){var t=e.target;return s(t.value)}})),l.a.createElement("div",null,"password:"," ",l.a.createElement("input",{type:"password",value:d,onChange:function(e){var t=e.target;return f(t.value)}})),l.a.createElement("button",{type:"submit"},"Log in"))):null},L=n(39),T=n.n(L),q=n(48),Q=function(e){var t=e.show,n=e.setError,a=Object(r.useState)(""),u=Object(c.a)(a,2),o=u[0],i=u[1],m=Object(r.useState)(""),s=Object(c.a)(m,2),E=s[0],b=s[1],d=Object(r.useState)(""),f=Object(c.a)(d,2),g=f[0],j=f[1],O=Object(r.useState)(""),k=Object(c.a)(O,2),y=k[0],w=k[1],C=Object(r.useState)([]),$=Object(c.a)(C,2),B=$[0],A=$[1],I=Object(p.a)(S,{refetchQueries:[{query:v},{query:h}],onError:function(e){n(e.graphQLErrors[0].message)}}),L=Object(c.a)(I,1)[0];if(!t)return null;var Q=function(){var e=Object(q.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o&&g){e.next=4;break}return n("All Fields are required"),e.abrupt("return");case 4:L({variables:{title:o,author:E,published:g,genres:B}}),i(""),j(""),b(""),A([]),w("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:Q},l.a.createElement("div",null,"title",l.a.createElement("input",{value:o,onChange:function(e){var t=e.target;return i(t.value)}})),l.a.createElement("div",null,"author",l.a.createElement("input",{value:E,onChange:function(e){var t=e.target;return b(t.value)}})),l.a.createElement("div",null,"published",l.a.createElement("input",{type:"number",value:g,onChange:function(e){var t=e.target;return j(parseInt(t.value))}})),l.a.createElement("div",null,l.a.createElement("input",{value:y,onChange:function(e){var t=e.target;return w(t.value)}}),l.a.createElement("button",{onClick:function(){A(B.concat(y)),w("")},type:"button"},"add genre")),l.a.createElement("div",null,"genres: ",B.join(" ")),l.a.createElement("button",{type:"submit"},"create book")))},x=function(e){var t=e.errorMessage;return t?l.a.createElement("div",{style:{color:"red"}},t):null},D=n(49),G=function(e){var t=e.show,n=Object(m.a)(v),a=Object(m.a)(g),r=a.loading,u=a.error,o=a.data,c=Object(D.get)(o,"me");if(!t)return null;if(r)return l.a.createElement("div",null,"loading...");if(u)return l.a.createElement("div",null,u);var i=n.data.allBooks.filter((function(e){return e.genres.map((function(e){return e.toLowerCase()})).includes(c.favoriteGenre)}));return l.a.createElement("div",null,l.a.createElement("h1",null,"Recommendations"),l.a.createElement("p",null,c.username," these books are in your favorite genre:"," ",l.a.createElement("b",null,c.favoriteGenre)," "),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"author"),l.a.createElement("th",null,"published")),i.map((function(e){return l.a.createElement("tr",{key:e.title},l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.author.name),l.a.createElement("td",null,e.published))})))))},J=function(){var e=Object(r.useState)("authors"),t=Object(c.a)(e,2),n=t[0],a=t[1],u=Object(r.useState)(null),o=Object(c.a)(u,2),m=o[0],s=o[1],E=Object(r.useState)(null),b=Object(c.a)(E,2),d=b[0],f=b[1],h=Object(i.a)();Object(r.useEffect)((function(){d||f(localStorage.getItem("library-user-token"))}),[d]);var v=function(e){s(e),setTimeout((function(){s(null)}),1e4)};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Why is this not working well"),l.a.createElement("button",{onClick:function(){return a("authors")}},"authors"),l.a.createElement("button",{onClick:function(){return a("books")}},"books"),d?l.a.createElement("button",{onClick:function(){return a("add")}},"add book"):l.a.createElement("button",{onClick:function(){return a("login")}},"login"),d?l.a.createElement("button",{onClick:function(){return a("recommended")}},"recommended"):null,d?l.a.createElement("button",{onClick:function(){return localStorage.clear(),f(null),h.clearStore(),void a("login")}},"log out"):null),l.a.createElement(x,{errorMessage:m}),l.a.createElement($,{show:"authors"===n,setError:v}),l.a.createElement(A,{show:"books"===n}),l.a.createElement(Q,{show:"add"===n,setError:v}),l.a.createElement(I,{show:"login"===n,setError:v,setToken:f,setPage:a}),d?l.a.createElement(G,{show:"recommended"===n,setError:v}):null,";")},M=n(50),P=n(76),Y=n(53),z=n(77),F=n(74),N=Object(M.a)((function(e,t){var n=t.headers,r=localStorage.getItem("library-user-token");return{headers:Object(a.a)({},n,{authorization:r?"bearer ".concat(r):null})}})),R=new P.a({uri:"http://localhost:4000"}),U=new Y.a({cache:new z.a,link:N.concat(R)});o.a.render(l.a.createElement(F.a,{client:U},l.a.createElement(J,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.3c0eccf0.chunk.js.map