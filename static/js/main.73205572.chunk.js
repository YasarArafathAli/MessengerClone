(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{124:function(e,t,a){e.exports=a(317)},129:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),o=a.n(r),i=(a(129),a(46)),u=a(4),l=a(26),s=a(25),p=a.n(s),m=(a(132),p.a.initializeApp({apiKey:"AIzaSyBkCcBr1o2qa7mg0cR5Mi6DGn0qpYx2ErM",authDomain:"whatsapp-clone-68bce.firebaseapp.com",projectId:"whatsapp-clone-68bce",storageBucket:"whatsapp-clone-68bce.appspot.com",messagingSenderId:"653392782465",appId:"1:653392782465:web:d910d159029df41cead980",measurementId:"G-X09TMPYX5Q"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),o=r[0],i=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(u.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),i(!1),null!=e&&(console.log(e),b.push("/chats"))}))}),[d,b]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!o&&t)},f=a(27),b=a.n(f),g=a(69),v=a(122),E=a(3),j=a.n(E),w=function(){var e=Object(u.f)(),t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],o=a[1],i=Object(n.useContext)(h).user;console.log(i);var s=function(){var t=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i?j.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"fa55c1c1-f741-43f2-a108-eb26bdc388ab","user-name":i.email,"user-secret":i.uid}}).then((function(){o(!1)})).catch((function(){var e=new FormData;e.append("email",i.email),e.append("username",i.email),e.append("secret",i.uid),p(i.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users",e,{headers:{"private-key":"29a33efc-4eb9-4c1e-84c6-e39ac9d522b0"}}).then((function(){return o(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[i,e]),!i||r?"Loading...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"OneChat"),c.a.createElement("div",{className:"logout-tab",onClick:s},"Logout")),c.a.createElement(v.d,{height:"calc(100vh - 66ox)",projectID:"fa55c1c1-f741-43f2-a108-eb26bdc388ab",userName:i.email,userSecret:i.uid}))},O=a(319),k=a(320);var x=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Chatapp!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(O.a,null)," Sign in with Google"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(k.a,null)," Sign in with Facebook")))};var S=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(i.a,null,c.a.createElement(d,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/chats",component:w}),c.a.createElement(u.a,{path:"/",component:x})))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.73205572.chunk.js.map