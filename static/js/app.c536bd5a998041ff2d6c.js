webpackJsonp([1],{"801s":function(t,e){},EVUe:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"controls",on:{click:function(e){t.navigation("Controls")}}},[t._v("🚪")]),t._v(" "),n("div",{staticClass:"logs",on:{click:function(e){t.navigation("Logs")}}},[t._v("📖")]),t._v(" "),n("div",{staticClass:"users",on:{click:function(e){t.navigation("Users")}}},[t._v("👤")])])},staticRenderFns:[]};var a=n("VU/8")({methods:{navigation:function(t){this.$emit("navigation",t)}}},o,!1,function(t){n("W8wV")},"data-v-5197f566",null).exports,r=n("mvHQ"),i=n.n(r),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"button",on:{click:function(e){t.$emit("close")}}},[t._v("\n\tX\n")]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.text))])])},staticRenderFns:[]};var l=n("VU/8")({props:["text"]},c,!1,function(t){n("UT/A")},"data-v-3f00a138",null).exports,u=n("It2I");n("YtIj");var d={props:["token"],components:{Modal:l},data:function(){return{modalText:""}},methods:{logout:function(){var t=this;u.auth().signOut().then(function(){return t.$emit("navigation","Login")})},open:function(){var t=this;fetch("/api/open",{method:"POST",body:i()({token:this.token}),headers:{"Content-Type":"application/json"}}).then(function(e){return 200!==e.status&&(t.modalText=e.status+": "+e.statusText),e.json()}).then(function(e){e.error&&(t.modalText=e.error)})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[""!==t.modalText?n("Modal",{attrs:{text:t.modalText},on:{close:function(e){t.modalText=""}}}):t._e(),t._v(" "),n("div",{staticClass:"button",on:{click:t.open}},[t._v("öffnen")]),t._v(" "),n("div",{staticClass:"button",on:{click:t.logout}},[t._v("abmelden")])],1)},staticRenderFns:[]};var v=n("VU/8")(d,m,!1,function(t){n("801s")},"data-v-b4117380",null).exports,f={props:["token"],components:{Modal:l},data:function(){return{rawLogs:[],modalText:"",rawLogsMock:[{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T15:23:57.277Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T15:20:03.807Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T15:19:11.337Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T01:33:38.437Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T01:33:37.181Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T01:33:15.140Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T01:32:59.934Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T01:32:45.189Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T00:06:35.556Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-03T00:06:34.512Z"},{user:"me@malts.me",action:"Tür geöffnet",createdAt:"2018-02-01T23:53:25.146Z"}]}},created:function(){var t=this;fetch("/api/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:i()({token:this.token,offset:0})}).then(function(e){return 200!==e.status&&(t.modalText=e.status+": "+e.statusText),e.json()}).then(function(e){return t.rawLogs=e})},computed:{logs:function(){var t=[];return this.rawLogs.forEach(function(e){var n=new Date(e.createdAt),s=(n.getDate()<10?"0":"")+n.getDate()+"."+(n.getMonth()<10?"0":"")+n.getMonth()+"."+n.getFullYear(),o=!1;e.time=(n.getHours()<10?"0":"")+n.getHours()+":"+(n.getMinutes()<10?"0":"")+n.getMinutes(),t.forEach(function(t){t.date===s&&(t.logs.push(e),o=!0)}),o||t.push({date:s,logs:[e]})}),t}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.modalText?n("Modal",{attrs:{text:t.modalText},on:{close:function(e){t.modalText=""}}}):t._e(),t._v(" "),t._l(t.logs,function(e){return n("div",{key:e.date},[n("h1",[t._v(" "+t._s(e.date)+" ")]),t._v(" "),n("div",{staticClass:"entries"},[n("div",{staticClass:"list-down"},t._l(e.logs,function(e){return n("p",{key:e.createdAt},[t._v("["+t._s(e.time))])})),t._v(" "),n("div",{staticClass:"list-down"},t._l(e.logs,function(e){return n("p",{key:e.createdAt},[t._v("] "+t._s(e.user)+" - "+t._s(e.action))])}))])])})],2)},staticRenderFns:[]};var p=n("VU/8")(f,g,!1,function(t){n("d8dC")},"data-v-5d72f65e",null).exports,h={props:["user"],methods:{changeRole:function(){console.log("change users role to "+(this.user.admin?"user: ":"admin: ")+this.user.uid)},resetPassword:function(){console.log("reset password of user: "+this.user.email)},deleteUser:function(){console.log("delete user: "+this.user.uid)}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"listing"},[n("div",{staticClass:"user-info"},[n("p",{staticClass:"name"},[t._v(t._s(t.user.name))]),t._v(" "),n("p",{staticClass:"mail"},[t._v(t._s(t.user.email))])]),t._v(" "),t.user.admin?t._e():n("div",{staticClass:"role button",on:{click:t.changeRole}},[t._v("🙂")]),t._v(" "),t.user.admin?n("div",{staticClass:"role button",on:{click:t.changeRole}},[t._v("👑")]):t._e(),t._v(" "),n("div",{staticClass:"reset-mail button",on:{click:t.resetPassword}},[t._v("♻️")]),t._v(" "),n("div",{staticClass:"delete button",on:{click:t.deleteUser}},[t._v("🗑️")])])},staticRenderFns:[]};var T={components:{UserListing:n("VU/8")(h,_,!1,function(t){n("EVUe")},"data-v-a5e4e2f2",null).exports,Modal:l},created:function(){},data:function(){return{users:[{name:"Malte Janßen",email:"me@malts.me",uid:"bNRqk6WFRz6g",admin:!0},{name:"Lennard Kleyman",email:"mail@lennard.tech",uid:"ZHrkTlvMMf17",admin:!0},{name:"Kerstin Rolfes",email:"rolfes@hgo-ol.de",uid:"lEbfITVmRAmz",admin:!1}],modalText:"test"}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[""!==t.modalText?n("Modal",{attrs:{text:t.modalText},on:{close:function(e){t.modalText=""}}}):t._e(),t._v(" "),n("input",{attrs:{type:"text",placeholder:"name"}}),t._v(" "),n("input",{attrs:{type:"email",placeholder:"email"}}),t._v(" "),n("div",{staticClass:"button"},[t._v("hinzufügen")]),t._v(" "),t._m(0),t._v(" "),t._l(t.users,function(t){return n("UserListing",{key:t.uid,attrs:{user:t}})})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-search"},[e("input",{attrs:{type:"text",placeholder:"suche"}}),this._v(" "),e("div",{staticClass:"button"},[this._v("🔎")])])}]};var C=n("VU/8")(T,k,!1,function(t){n("c5IM")},"data-v-67ad4b9a",null).exports,x=n("It2I");n("YtIj"),x.initializeApp({apiKey:"AIzaSyAuhn5rTvl91iGOugkxfdG_HvHWDiAwlUs",authDomain:"hgo-doorlock.firebaseapp.com",databaseURL:"https://hgo-doorlock.firebaseio.com",projectId:"hgo-doorlock",storageBucket:"hgo-doorlock.appspot.com",messagingSenderId:"308945458314"});var A={props:["token"],data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;x.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){x.auth().currentUser.getIdToken(!0).then(function(e){t.$emit("token",e),t.$emit("navigation","Controls")}).catch(function(t){return console.log(t)})}).catch(function(t){return console.log(t)})}},computed:{loggedIn:function(){var t=this;x.auth().onAuthStateChanged(function(e){if(e)return x.auth().currentUser.getIdToken(!0).then(function(e){t.$emit("token",e),t.$emit("navigation","Controls")}),!0})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("header",{staticClass:"button"},[t._v("HGO 🚪🔒")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.loggedIn?t._e():n("div",{staticClass:"button",attrs:{type:"submit"},on:{click:t.login}},[t._v("Anmelden")])])},staticRenderFns:[]};var w={name:"App",components:{Navigation:a,Controls:v,Logs:p,Users:C,Login:n("VU/8")(A,b,!1,function(t){n("oCJ2")},"data-v-9dd44b88",null).exports},data:function(){return{user:{token:""},currScreen:"Login"}},methods:{changeScreen:function(t){console.log("changing screen to "+t),this.currScreen=t}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["Login"!==t.currScreen?n("Navigation",{on:{navigation:t.changeScreen}}):t._e(),t._v(" "),"Login"===t.currScreen?n("Login",{on:{navigation:t.changeScreen,token:function(e){return t.user.token=e}}}):t._e(),t._v(" "),"Controls"===t.currScreen?n("Controls",{staticClass:"fs",attrs:{token:t.user.token},on:{navigation:t.changeScreen}}):t._e(),t._v(" "),"Logs"===t.currScreen?n("Logs",{staticClass:"fs",attrs:{token:t.user.token}}):t._e(),t._v(" "),"Users"===t.currScreen?n("Users",{staticClass:"fs"}):t._e(),t._v(" "),"Login"!==t.currScreen?n("div",{staticClass:"spacer"}):t._e()],1)},staticRenderFns:[]};var y=n("VU/8")(w,U,!1,function(t){n("Yh/t")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:y},template:"<App/>"})},"UT/A":function(t,e){},W8wV:function(t,e){},"Yh/t":function(t,e){},c5IM:function(t,e){},d8dC:function(t,e){},oCJ2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c536bd5a998041ff2d6c.js.map