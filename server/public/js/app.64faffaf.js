(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"253ca5a3","chunk-1b2bfe08":"8ecc1c2c","chunk-2d0c7e16":"40c27ff2","chunk-3bf8a8f3":"7004cba3"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-1b2bfe08":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-1b2bfe08":"2ecf4062","chunk-2d0c7e16":"31d6cfe0","chunk-3bf8a8f3":"31d6cfe0"}[t]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],m.parentNode.removeChild(m),a(i)},m.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"2c28":function(t,e,a){"use strict";var r=a("be79"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark"},[a("routerLink",{staticClass:"navbar-brand home",attrs:{to:"/"}},[t._v("AK WEB DEV")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavId"}},[a("ul",{staticClass:"navbar-nav ml-auto mr-3"},[a("li",{staticClass:"nav-item ml-1"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item ml-1"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"nav-item ml-1"},[t.isLoggedIn()?t._e():a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),a("li",{staticClass:"nav-item ml-1"},[t.isLoggedIn()?t._e():a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1),a("li",{staticClass:"nav-item ml-1"},[t.isLoggedIn()?a("routerLink",{staticClass:"nav-link",attrs:{to:"/quote"}},[t._v("Secret Quote")]):t._e()],1),a("li",{staticClass:"nav-item ml-1"},[t.isLoggedIn()?a("routerLink",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")]):t._e()],1),a("li",{staticClass:"nav-item mr-3"},[t.isLoggedIn()?a("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.logoutUser()}}},[t._v("Logout")]):t._e()])])])],1),a("router-view"),a("Message")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler d-lg-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i=a("5f87"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},c=[],l=(a("96cf"),a("1da1")),u=(a("d3b7"),a("bc3a")),d=a.n(u),m="";function v(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(a,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({url:"".concat(m,"api/post"),method:"GET",headers:{"auth-token":t}});case 3:n=e.sent,f(n.data),a(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}())}function f(t){return t}var p={data:function(){return{msg:"",tokens:"",Pdata:""}},methods:{getMessage:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("auth-token"),t.tokens=a,e.next=5,v(a);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),alert("Erorr: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},privateData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t.Pdata=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},h=p,g=a("2877"),b=Object(g["a"])(h,o,c,!1,null,null,null),C=b.exports,_={components:{Message:C},data:function(){return{token:""}},methods:{isLoggedIn:function(){return Object(i["b"])()},getUserInfo:function(){return Object(i["a"])()},logoutUser:function(){Object(i["d"])(),this.$router.push("/")}}},w=_,y=(a("034f"),Object(g["a"])(w,n,s,!1,null,null,null)),k=y.exports,x=(a("b0c0"),a("8c4f")),E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("header",[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"img-header"},[r("h1",{staticClass:"header-content"},[t._v("Hello, I'm "),r("span",{staticStyle:{color:"#49d3d3"}},[t._v("Aklil Asregid")]),t._v(","),r("br"),t._v("I'm a full-stack web developer")])])])]),r("section",[r("div",{staticClass:"container mt-5"},[r("h1",{staticClass:"text-center"},[t._v("Who am I?")]),r("div",{staticClass:"row mb-4"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"photo"},[r("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:a("6c86"),alt:""}})])]),r("div",{staticClass:"offset-2 col-md-6"},[r("h2",[t._v("A FEW WORD ABOUT ME.")]),r("p",{staticClass:"lead"},[t._v(" I'm Aklil Asregid, computer engineer,woking in front-end and back-end web develpment. If you hava a project that needs some creative injection then that's where I come in! My job is to build your website so that it is functional and user-friendly but at the same time attractive and secure. Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message identity in the most creative way. ")])])]),r("h4",{staticClass:"text-center"},[t._v("I'm really good at:")]),r("div",{staticClass:"col-md-10 mx-auto"},[r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-css3",attrs:{"aria-hidden":"true"}}),t._v(" CSS")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"85%"}},[t._v("85% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-html5",attrs:{"aria-hidden":"true"}}),t._v(" Html")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"90%"}},[t._v("90% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[t._v(" Javascript")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"90%"}},[t._v("90% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-php    "}),t._v(" Php")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"85%"}},[t._v("85% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-node-js    "}),t._v(" NodeJs")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"91%"}},[t._v("91% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-node-js    "}),t._v(" REST API")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"91%"}},[t._v("93% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-node-js    "}),t._v(" Vue Js")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"91%"}},[t._v("81% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-node-js    "}),t._v(" Bootstrap")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"91%"}},[t._v("90% ")])])]),r("div",[r("h5",{staticClass:"mt-4"},[r("i",{staticClass:"fa fa-file-image-o",attrs:{"aria-hidden":"true"}}),t._v(" Photoshop")]),r("div",{staticClass:"progress mt-3"},[r("div",{staticClass:"progress-bar bg-secondary",staticStyle:{width:"65%"}},[t._v("65% ")])])])])])]),r("footer",{attrs:{id:"contact"}},[r("div",{staticClass:"container-fluid mt-4 "},[r("div",{staticClass:"row ml-2"},[r("div",{staticClass:"col-md-4 col-lg-4 mt-4"},[r("h5",{staticClass:"text-center"},[r("i",{staticClass:"fa fa-address-book",attrs:{"aria-hidden":"true"}}),t._v(" Contact Me")]),r("hr",{staticClass:"bg-light mx-3"}),r("p",{staticClass:"lead "},[r("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),t._v(" +251 937 45 23 75")]),r("p",{staticClass:"lead "},[r("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),t._v(" scotmiller84@gmail.com")])]),r("div",{staticClass:"col-md-4 col-lg-4 mt-4"},[r("h5",{staticClass:"text-center"},[t._v("OUR HOUR")]),r("hr",{staticClass:"bg-light "}),r("p",{staticClass:"lead "},[t._v("Monday 02:00AM-8:30PM")]),r("p",{staticClass:"lead"},[t._v("---To---")]),r("p",{staticClass:"lead "},[t._v("Friday 02:00AM-8:30PM")]),r("p",{staticClass:"lead "},[t._v("Sunday closed")])]),r("div",{staticClass:"col-md-4 col-lg-4 mt-4 "},[r("h5",{staticClass:"text-center"},[t._v("Service Location")]),r("hr",{staticClass:"bg-light "}),r("p",{staticClass:"lead "},[t._v("Addis Ababa,Ethiopia")]),r("p",{staticClass:"lead "},[t._v("Nifas silk Lafto, Haile Garment")]),r("p",{staticClass:"lead "},[t._v("Kotari Kondominium")])]),r("div",{staticClass:"col-md-12 col-lg-12 "},[r("hr",{staticClass:"bg-light "}),r("p",{staticClass:"text-center "},[t._v("© AkWeb dev")])])])])])])}],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},P=[],S={name:"HelloWorld",props:{msg:String}},A=S,I=(a("fb0d"),Object(g["a"])(A,O,P,!1,null,"e95dc580",null)),R=I.exports,L={name:"Home",components:{HelloWorld:R},data:function(){return{name:"",id:""}},methods:{getUserInfo:function(){return Object(i["a"])()}},computed:{loggedIn:function(){return Object(i["b"])()}},created:function(){Object(i["b"])()&&(this.name=Object(i["a"])().user.name,this.id=Object(i["a"])().user.id)}},$=L,M=Object(g["a"])($,E,j,!1,null,null,null),N=M.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container col-md-4 mt-5"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.login()}}},[a("h2",{staticClass:"my-2"},[t._v("login")]),a("hr"),t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter Email",name:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter Password",name:"Enter Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"clearfix"},[a("button",{staticClass:"changebtn"},[t._v(" Login ")]),a("p",{staticClass:"lead"},[t._v("if you don't have an account "),a("routerLink",{attrs:{to:"/register"}},[t._v("click here")])],1)])])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"email"}},[a("b",[t._v("Email ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"Old Password"}},[a("b",[t._v("Password ")])])}],U={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i["c"])(t.email,t.password);case 3:t.$router.push("/contact"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$swal("Error",e.t0,"error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},H=U,D=(a("2c28"),Object(g["a"])(H,T,q,!1,null,"10faf5de",null)),W=D.exports;a("73cf");r["a"].use(x["a"]);var B=[{path:"/",name:"Home",component:N,meta:{allowAnonymous:!0}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))},meta:{allowAnonymous:!0}},{path:"/login",name:"login",component:W,meta:{allowAnonymous:!0}},{path:"/register",name:"register",component:function(){return Promise.resolve().then(a.bind(null,"73cf"))},meta:{allowAnonymous:!0}},{path:"/quote",name:"quote",component:function(){return a.e("chunk-1b2bfe08").then(a.bind(null,"7a89"))}},{path:"/contact",name:"contact",component:function(){return a.e("chunk-3bf8a8f3").then(a.bind(null,"b8fa"))}},{path:"/contact/:id",name:"editcontact",component:function(){return a.e("chunk-2d0c7e16").then(a.bind(null,"5302"))}}],J=new x["a"]({mode:"history",base:"/",routes:B});J.beforeEach((function(t,e,a){"login"==t.name&&Object(i["b"])()?a({name:"quote"}):t.meta.allowAnonymous||Object(i["b"])()?a():a({path:"/login",query:{redirect:t.fullPath}})}));var K=J,F=a("5886");a("6672"),a("df25"),a("4413");r["a"].use(F["a"]),r["a"].config.productionTip=!1,new r["a"]({router:K,render:function(t){return t(k)}}).$mount("#app")},"5f87":function(t,e,a){"use strict";a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return d})),a.d(e,"b",(function(){return p})),a.d(e,"a",(function(){return h}));a("d3b7"),a("96cf");var r=a("1da1"),n=a("04e1"),s=a.n(n),i=a("bc3a"),o=a.n(i),c="",l="auth-token";function u(t,e){return new Promise(function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(r,n){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o()({url:"".concat(c,"api/user/login"),method:"POST",data:{email:t,password:e}});case 3:s=a.sent,s.data.token?(m(s.data.token),r()):n(s.data.error),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(t,e){return a.apply(this,arguments)}}())}function d(){f()}function m(t){o.a.defaults.headers.common["auth-token"]=t,localStorage.setItem(l,t)}function v(){return localStorage.getItem(l)}function f(){o.a.defaults.headers.common["auth-token"]="",localStorage.removeItem(l)}function p(){var t=v();return!!t&&!b(t)}function h(){if(p())return s()(v())}function g(t){var e=s()(t);if(!e.exp)return null;var a=new Date(0);return a.setUTCSeconds(e.exp),a}function b(t){var e=g(t);return e<new Date}},"61ab":function(t,e,a){},6672:function(t,e,a){},"6c86":function(t,e,a){t.exports=a.p+"img/Aklil.d64d9b87.jpg"},"73cf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{},[a("form",{on:{submit:function(e){return e.preventDefault(),t.registerU(e)}}},[a("h1",[t._v("Register page")]),a("p",[t._v("Please fill in this form to Register")]),a("hr"),t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter name",name:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"Password",id:"newp",placeholder:"Enter  Password",name:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"clearfix"},[a("button",{staticClass:"changebtn",attrs:{type:"Submit"}},[t._v("Register")]),a("p",[t._v(" Already have an account??"),a("router-link",{attrs:{to:"/login"}},[t._v("click here")])],1)])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"name"}},[a("b",[t._v("Name ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"email"}},[a("b",[t._v("Email ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"password"}},[a("b",[t._v("Password ")])])}],s=(a("b0c0"),a("96cf"),a("1da1")),i=(a("d3b7"),a("04e1"),a("bc3a")),o=a.n(i),c=(a("5f87"),"");function l(t,e,a){return new Promise(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(n,s){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o()({url:"".concat(c,"api/user/register"),method:"POST",data:{name:t,email:e,password:a}});case 3:i=r.sent,i.data.error&&s(i.data.error),n(),r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("Eroor happen during register: "+r.t0),s(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t,e){return r.apply(this,arguments)}}())}var u={data:function(){return{name:"",email:"",password:""}},methods:{registerU:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t.name,t.email,t.password);case 3:t.$router.push("/login"),t.$swal("Success","Registration Was successful","success"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal("Error",e.t0,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},d=u,m=(a("a3fb"),a("2877")),v=Object(m["a"])(d,r,n,!1,null,"e8cb6f84",null);e["default"]=v.exports},"85ec":function(t,e,a){},a3fb:function(t,e,a){"use strict";var r=a("61ab"),n=a.n(r);n.a},be79:function(t,e,a){},d10c:function(t,e,a){},df25:function(t,e,a){},fb0d:function(t,e,a){"use strict";var r=a("d10c"),n=a.n(r);n.a}});
//# sourceMappingURL=app.64faffaf.js.map