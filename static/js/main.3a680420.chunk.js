(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(29),r=n.n(a),s=n(4),i=n(9),o=n(2),l=(n(37),n(38),n(0)),j=function(e){var t=e.isAuth;return Object(l.jsx)("div",{className:"navigationbar",children:Object(l.jsx)("div",{className:"navigationbar-content",children:Object(l.jsxs)("ul",{className:"navigation-list",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("li",{className:"icon",children:"FakeB"})}),t?Object(l.jsx)(i.b,{to:"/profile",children:Object(l.jsx)("li",{children:"profile"})}):Object(l.jsx)(i.b,{to:"/login_page",children:Object(l.jsx)("li",{children:"login"})}),t?"":Object(l.jsx)(i.b,{to:"/signup_page",children:Object(l.jsx)("li",{children:"Sign up"})})]})})})},u=n(19),b=n(32),h=n(12),d=n.n(h),O=n(15),p=(n(14),function(e){var t=e.logOutButtonOnClick;return Object(l.jsx)("button",{className:"btn",onClick:function(){t()},children:"Log out"})}),x=n(10),g=n.n(x),f=Object(o.h)((function(){var e=Object(o.g)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),j=Object(s.a)(i,2),u=j[0],b=j[1],h=function(){var e=Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={id:localStorage.getItem("_id")};try{g.a.post("https://loginauthenticator-app-server.herokuapp.com/api/get-profile",t).then((function(e){r(e.data.username),b(e.data.firstName)})).catch((function(e){return console.log(e)}))}catch(n){console.log(n)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(l.jsx)("div",{className:"background",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"block",children:[Object(l.jsxs)("h1",{children:["Hi! ","".concat(u)]}),Object(l.jsxs)("h2",{children:["you are logged in as ","".concat(a)]}),Object(l.jsx)(p,{logOutButtonOnClick:function(){localStorage.removeItem("_id"),e.push("/login-authenticator-project/"),window.location.reload()}})]})})})})),v=["isAuth","component"],m=function(e){var t=e.isAuth,n=(e.component,Object(b.a)(e,v));return Object(l.jsx)(o.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return t?Object(l.jsx)(f,{}):Object(l.jsx)(o.a,{to:{pathname:"/login-authenticator-project",state:{from:e.location}}})}}))},N=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1],u=function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://loginauthenticator-app-server.herokuapp.com/api/fetch-users").then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}));case 3:j(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(l.jsx)("div",{className:"background",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"block center-text",children:[Object(l.jsx)("h1",{children:"Welcome to Fakebook"}),Object(l.jsxs)("h3",{children:["Users registered: ",o?"".concat(n.length):"Loading..."]})]})})})},k=(n(64),function(e){var t=e.cN,n=e.loginButtonOnClick;return Object(l.jsx)("button",{className:t,onClick:function(){n()},children:"Log in"})}),S=function(){var e=Object(o.g)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),j=Object(s.a)(i,2),u=j[0],b=j[1];return Object(l.jsx)("div",{className:"background",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h1",{className:"center-text",children:"Login"}),Object(l.jsxs)("div",{className:"login-field",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Username: "}),Object(l.jsx)("input",{type:"text",onChange:function(e){return r(e.currentTarget.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Password: "}),Object(l.jsx)("input",{type:"password",onChange:function(e){return b(e.currentTarget.value)}})]}),Object(l.jsx)(k,{cN:"btn ",loginButtonOnClick:function(){var t={username:a,password:u};g.a.post("https://loginauthenticator-app-server.herokuapp.com/api/login",t).then((function(e){return localStorage.setItem("_id",e.data)})).then((function(){e.push("/"),window.location.reload()})).catch((function(e){return alert(e.response.data)}))}})]})]})})})},w=(n(65),function(){var e=Object(o.g)(),t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),j=Object(s.a)(i,2),u=j[0],b=j[1],h=Object(c.useState)(null),d=Object(s.a)(h,2),O=d[0],p=d[1],x=Object(c.useState)(null),f=Object(s.a)(x,2),v=f[0],m=f[1],N=Object(c.useState)(0),k=Object(s.a)(N,2),S=k[0],w=k[1];return Object(l.jsx)("div",{className:"background",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"block center-text",children:[Object(l.jsx)("h1",{className:"center-text",children:"Sign up"}),Object(l.jsxs)("div",{className:"signup-field",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Username: "}),Object(l.jsx)("input",{type:"text",onChange:function(e){return r(e.currentTarget.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Password: "}),Object(l.jsx)("input",{type:"password",onChange:function(e){return b(e.currentTarget.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"First Name: "}),Object(l.jsx)("input",{type:"text",onChange:function(e){return p(e.currentTarget.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Last Name: "}),Object(l.jsx)("input",{type:"text",onChange:function(e){return m(e.currentTarget.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Age: "}),Object(l.jsx)("input",{type:"number",onChange:function(e){return w(e.currentTarget.value)}})]})]}),Object(l.jsx)("button",{className:"btn center-text",onClick:function(t){var n={username:a,password:u,firstName:O,lastName:v,age:S};g.a.post("https://loginauthenticator-app-server.herokuapp.com/api/create-user",n).then((function(e){return console.log(e.data)})).then((function(){return window.location.reload()})).catch((function(e){return console.log(e.response.data)})),e.push("/")},children:"Sign up"})]})})})});var C=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){a(localStorage.getItem("_id"))}),[n]),Object(l.jsxs)(i.a,{basename:"/login-authenticator-project",children:[Object(l.jsx)(j,{isAuth:n}),Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/login-authenticator-project",children:Object(l.jsx)(N,{})}),Object(l.jsx)(o.b,{path:"/login_page",children:Object(l.jsx)(S,{})}),Object(l.jsx)(o.b,{path:"/signup_page",children:Object(l.jsx)(w,{})}),Object(l.jsx)(m,{path:"/profile",component:f,isAuth:n})]})]})};r.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.3a680420.chunk.js.map