(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__mvqos",control:"ProfileForm_control__1Gqaw",action:"ProfileForm_action__1Dpnx"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__3X5dZ",logo:"MainNavigation_logo__1vWEG"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__3q0SO"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__1frKN"}},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(17),c=n.n(o),r=n(7),i=n(11),s=n(1),a=n.n(s),l=n(0),j=a.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),u=function(e){var t=Object(s.useState)(null),n=Object(i.a)(t,2),o=n[0],c=n[1],r={token:o,isLoggedIn:!!o,login:function(e){c(e)},logout:function(){c(null)}};return Object(l.jsx)(j.Provider,{value:r,children:e.children})},d=(n(27),n(2)),h=n(15),b=n.n(h),O=function(){var e=Object(s.useContext)(j),t=e.isLoggedIn;return Object(l.jsxs)("header",{className:b.a.header,children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("div",{className:b.a.logo,children:"React Auth"})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[!t&&Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/auth",children:"Login"})}),t&&Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/profile",children:"Profile"})}),t&&Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},f=function(e){return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsx)("main",{children:e.children})]})},g="AIzaSyDguANr3nSydaMFK070Icw5FFTDA7l09UQ",x=n(12),p=n.n(x),m=function(){var e=Object(s.useRef)(),t=Object(s.useContext)(j),n=Object(d.f)();return Object(l.jsxs)("form",{onSubmit:function(o){o.preventDefault();var c=e.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=".concat(g),{method:"POST",body:JSON.stringify({idToken:t.token,password:c,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),n.replace("/")})).catch((function(e){}))},className:p.a.form,children:[Object(l.jsxs)("div",{className:p.a.control,children:[Object(l.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(l.jsx)("input",{type:"password",id:"new-password",minLength:7,ref:e})]}),Object(l.jsx)("div",{className:p.a.action,children:Object(l.jsx)("button",{children:"Change Password"})})]})},v=n(20),_=n.n(v),w=function(){return Object(l.jsxs)("section",{className:_.a.profile,children:[Object(l.jsx)("h1",{children:"Your User Profile"}),Object(l.jsx)(m,{})]})},k=n(9),y=n.n(k),N=function(){var e=Object(d.f)(),t=Object(s.useState)(!0),n=Object(i.a)(t,2),o=n[0],c=n[1],r=Object(s.useState)(!1),a=Object(i.a)(r,2),u=a[0],h=a[1],b=Object(s.useRef)(),O=Object(s.useRef)(),f=Object(s.useContext)(j);return Object(l.jsxs)("section",{className:y.a.auth,children:[Object(l.jsx)("h1",{children:o?"Login":"Sign Up"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n,c=b.current.value,r=O.current.value;h(!0),o?(n="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(g),fetch(n,{method:"POST",body:JSON.stringify({email:c,password:r,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json;e.json().then((function(e){var t="oshibka";throw e&&e.error&&e.error.message&&(t=e.error.message),console.log(e),new Error(t)}))})).then((function(t){f.login(t.idToken),e.replace("/")})).catch((function(e){alert(e.message)}))):(n="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(g),fetch(n,{method:"POST",body:JSON.stringify({email:c,password:r,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){if(h(!1),e.ok)return e.json();e.json().then((function(e){var t="Authenticatin failed";throw e&&e.error&&e.error.message&&(t=e.error.message),new Error(t)}))})).then((function(t){f.login(t.idToken),e.replace("/")})).catch((function(e){alert(e.message)})))},children:[Object(l.jsxs)("div",{className:y.a.control,children:[Object(l.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(l.jsx)("input",{ref:b,type:"email",id:"email",required:!0})]}),Object(l.jsxs)("div",{className:y.a.control,children:[Object(l.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(l.jsx)("input",{ref:O,type:"password",id:"password",required:!0})]}),Object(l.jsxs)("div",{className:y.a.actions,children:[!u&&Object(l.jsx)("button",{children:o?"Login":"Create Account"}),u&&Object(l.jsx)("p",{children:"sending request..."}),Object(l.jsx)("button",{type:"button",className:y.a.toggle,onClick:function(){c((function(e){return!e}))},children:o?"Create new account":"Login with existing account"})]})]})]})},S=function(){return Object(l.jsx)(N,{})},C=n(21),F=n.n(C),P=function(){return Object(l.jsx)("section",{className:F.a.starting,children:Object(l.jsx)("h1",{children:"Welcome on Board!"})})},T=function(){return Object(l.jsx)(P,{})};var A=function(){return Object(l.jsx)(f,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/",exact:!0,children:Object(l.jsx)(T,{})}),Object(l.jsx)(d.a,{path:"/auth",children:Object(l.jsx)(S,{})}),Object(l.jsx)(d.a,{path:"/profile",children:Object(l.jsx)(w,{})})]})})};c.a.render(Object(l.jsx)(u,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(A,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__1lvgI",control:"AuthForm_control__1HktC",actions:"AuthForm_actions__2FdCn",toggle:"AuthForm_toggle__1ev71"}}},[[36,1,2]]]);
//# sourceMappingURL=main.4eac48f7.chunk.js.map