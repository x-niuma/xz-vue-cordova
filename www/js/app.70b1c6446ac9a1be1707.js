webpackJsonp([17],{0:function(t,e){},"3Fy4":function(t,e){},"3pLw":function(t,e,n){"use strict";n("Yj4y");var r=n("a8Zu"),a=n("rVsN"),o=n.n(a),s=n("CtzY"),i=n.n(s),c=n("84iU"),u=n.n(c),l=n("uAC3"),d=n.n(l),f=n("t4AY"),p=n.n(f);u.a.interceptors.request.use(function(t){var e=d.a.get("token")||"",n=new p.a(t.url,!0);return n.query.token=e,t.url=n.toString(),t.data||(t.data={}),"post"===t.method&&(t.data=i.a.stringify(t.data),t.headers["Content-Type"]="application/x-www-form-urlencoded"),t},function(t){return o.a.reject(t)}),u.a.interceptors.response.use(function(t){var e=t.data;return 0==+e.retCode&&(e.success=!0),e},function(t){Object(r.a)(t.message),o.a.reject(t)}),e.a=u.a},AMzZ:function(t,e){},F7qA:function(t,e){},GROG:function(t,e){},IXQZ:function(t,e){},IfTj:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("7YfB");var r=n("MCvH"),a=(n("99c9"),n("yExr")),o=(n("WI38"),n("AHMV")),s=(n("O0xd"),n("++Bq")),i=(n("a8v0"),n("jrG6")),c=(n("OeuV"),n("NxNH")),u=(n("X4iH"),n("Kfif")),l=(n("DUoB"),n("Xltu")),d=(n("Yj4y"),n("a8Zu")),f=(n("T3Cl"),n("8fgs")),p=(n("OC6q"),n("KAmN")),m=(n("5g71"),n("fjYW")),g=(n("7WS8"),n("l4SI")),h=n("xd7I"),v=n("4YfN"),b=n.n(v),I=(n("BB29"),n("FC9V")),L=(n("6Cxg"),n("CtUu")),w=n("2bvH"),k=n("T+/8");h.a.use(I.a).use(L.a);var y={name:"App",components:{LoginPop:k.default},data:function(){return{activeIndex:0,currentRoute:null,previousRoute:null,nextRoute:null,translate:"fade"}},computed:b()({},Object(w.b)({isValidLogin:function(t){return t.user.isValidLogin}})),watch:{$route:{handler:function(t){this.currentRoute=t},immediate:!0},isValidLogin:{handler:function(t){t&&(this.$store.dispatch("chat/initSocket"),this.$store.dispatch("chat/getChatList"))},immediate:!0}},methods:{handleChange:function(t){this.activeIndex=t},onLogin:function(){this.$store.dispatch("user/closeLoginPop")}},mounted:function(){this.$store.dispatch("user/getUserInfo")}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.tabbar,expression:"$route.meta.tabbar"}],staticClass:"tabbar",on:{change:t.handleChange},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[n("van-tabbar-item",{attrs:{icon:"fire",to:"/"}},[t._v("大厅")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"chat",to:"/chat"}},[t._v("聊天")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"manager",to:"/account"}},[t._v("我的")])],1),t._v(" "),n("router-view",{staticClass:"page",class:[{"has-tabbar":t.$route.meta.tabbar},t.$route.name]}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.user.showLoginPop,expression:"$store.state.user.showLoginPop"}],staticClass:"login-pop"},[n("div",{staticClass:"header"},[n("van-icon",{staticClass:"close-btn",attrs:{name:"cross"},on:{click:function(e){return t.$store.dispatch("user/closeLoginPop")}}})],1),t._v(" "),n("LoginPop",{attrs:{onLogin:t.onLogin}})],1)],1)},staticRenderFns:[]};var x=n("C7Lr")(y,C,!1,function(t){n("IfTj")},"data-v-7b376b22",null).exports,_=n("e1F6");h.a.use(_.a);var j=new _.a({routes:[{path:"/",name:"welcome",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"ZO6g"))},meta:{tabbar:!0}},{path:"/my-project",name:"my-project",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"XNwl"))}},{path:"/user-enroll-project",name:"user-enroll-project",component:function(){return n.e(13).then(n.bind(null,"+GFA"))},meta:{}},{path:"/point",name:"point",component:function(){return n.e(14).then(n.bind(null,"4fZK"))},meta:{tabbar:!0}},{path:"/project",name:"project",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"KYsC"))}},{path:"/demand/create",name:"demandCreate",component:function(){return n.e(1).then(n.bind(null,"TUz1"))}},{path:"/project/:itemId",name:"project-show",component:function(){return n.e(6).then(n.bind(null,"ja8l"))}},{path:"/account",name:"account",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"0FZS"))},meta:{tabbar:!0}},{path:"/login",name:"login",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"T+/8"))}},{path:"/checkin",name:"checkin",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"vEgj"))}},{path:"/userInfo",name:"userInfo",component:function(){return n.e(2).then(n.bind(null,"eSIO"))}},{path:"/collect",name:"collect",component:function(){return n.e(12).then(n.bind(null,"vi7c"))}},{path:"/chat",name:"chat",component:function(){return n.e(11).then(n.bind(null,"HVFi"))},meta:{tabbar:!0}},{path:"/chatItem/:partnerId",name:"chatItem",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"6KEU"))}},{path:"/search",name:"search",component:function(){return n.e(15).then(n.bind(null,"Rv23"))}},{path:"*",component:function(){return n.e(10).then(n.bind(null,"51AI"))}}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),P=n("lC5x"),T=n.n(P),S=n("J0Oq"),A=n.n(S),O=n("MgeX"),E=n.n(O),M=n("a7o1"),z=n.n(M),G=n("aTwi"),U=n("QmSG"),$=null;function N(t){var e=t.userList,n=t.msgGroup;function r(t,e){return e.create_time>t.create_time?1:e.create_time===t.create_time?0:-1}return E()(n).forEach(function(t){t.sort(r)}),e.sort(function(t,e){return r(n[t.id][0],n[e.id][0])}),[].concat(e)}function Y(t){var e=t.userInfo,n={};return t.msgList.forEach(function(t){if(t){var r=void 0;r=+t.f_from==+e.id?""+t.f_to:""+t.f_from;var a=e.id+"_"+r,o=t.f_from+"_"+t.f_to,s=t.f_to+"_"+t.f_from;a!==o&&a!==s||(n[r]||(n[r]=[]),n[r]&&n[r].push(t))}}),n}var F={namespaced:!0,state:{msgList:[],userList:[],msgGroup:{}},mutations:{getAllMsg:function(t,e){var n=e.userList,r=e.msgList,a=e.msgObj;t.userList=n,t.msgList=r,t.msgGroup=a},setMsgGroup:function(t,e){t.msgGroup=e},setChatUserList:function(t,e){t.userList=e},setMsgList:function(t,e){t.msgList=e}},actions:{initSocket:function(t){var e=t.dispatch,n=t.rootState.user.userInfo,r=z()(U.c,{query:{room:"demo",token:n?n.token:Math.random()},transports:["websocket"]});r.on("sendMsg_"+n.id,function(t){e("handleNewMsg",{msg:t})}),$=r},handleNewMsg:function(t,e){var n=t.commit,r=t.state,a=t.rootState,o=e.msg;console.log("新消息",o.data.payload);var s=a.user.userInfo,i=[].concat(r.userList),c=[].concat(r.msgList);i.forEach(function(t){console.log(t)}),c.push(o.data.payload);var u=Y({userInfo:s,msgList:c});console.log(i),n("getAllMsg",{msgObj:u,msgList:c,userList:i=N({userList:i,msgGroup:u})})},getChatList:function(t){var e=this,n=t.commit,r=t.rootState,a=t.dispatch;return A()(T.a.mark(function t(){var o,s,i,c,u;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.user.userInfo,t.next=3,G.a.getChatList();case 3:if(s=t.sent){t.next=6;break}return t.abrupt("return");case 6:if(s.success){t.next=8;break}return t.abrupt("return",Object(d.a)(s.errMsg));case 8:i=s.data.msgList,c=s.data.userList,u=Y({userInfo:o,msgList:i}),c=N({userList:c,msgGroup:u}),n("getAllMsg",{msgObj:u,msgList:i,userList:c}),a("scrollToLast");case 14:case"end":return t.stop()}},t,e)}))()},sendMsg:function(t,e){var n=t.rootState,r=e.to,a=e.content,o=n.user.userInfo;$.emit("sendMsg",{payload:{to:r,content:a,from:o.id}})},scrollToLast:function(){setTimeout(function(){try{var t=document.querySelector(".msg-scroll");t.scrollTop=t.scrollHeight+1e3}catch(t){console.log(t)}},1e3)},switchTalkPage:function(t,e){t.commit;j.push({path:"/chatItem/"+e.id,query:{avatar:e.avatar,nickname:e.nickname}})}}},V=n("uAC3"),q=n.n(V),R=n("nUeE"),X=n.n(R),H={namespaced:!0,state:function(){return{token:"",userInfo:X.a.get("userInfo"),loading:!1,showLoginPop:!1,isValidLogin:!1}},mutations:{setUserInfo:function(t,e){t.userInfo=e,X.a.set("userInfo",e),t.isValidLogin=!!e},setToken:function(t,e){t.token=e,q.a.set("token",e)},setSWhowLoginPop:function(t,e){t.showLoginPop=e}},actions:{checkLoginState:function(t,e){var n=this,r=(t.commit,e.success);return A()(T.a.mark(function t(){var e;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.checkLogin();case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:if(e.success){t.next=7;break}return t.abrupt("return");case 7:1===e.data.status&&r&&r();case 8:case"end":return t.stop()}},t,n)}))()},getUserInfo:function(t){var e=this,n=t.commit;return A()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.getUserInfo();case 3:0==+(r=t.sent).retCode?n("setUserInfo",r.data):n("setUserInfo",null),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n("setUserInfo",null);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},login:function(t,e){var n=this,r=t.commit,a=e.mobile,o=e.password,s=e.onSuccess;return A()(T.a.mark(function t(){var e;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.loading){t.next=2;break}return t.abrupt("return");case 2:return n.loading=!0,t.prev=3,t.next=6,G.a.login({mobile:a,password:o});case 6:if(0!=+(e=t.sent).retCode){t.next=13;break}r("setToken",e.data.token),r("setUserInfo",e.data),s&&s(),t.next=14;break;case 13:throw e.errMsg;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),Object(d.a)(t.t0.toString());case 19:n.loading=!1;case 20:case"end":return t.stop()}},t,n,[[3,16]])}))()},register:function(t,e){var n=this,r=t.commit,a=e.mobile,o=e.password,s=e.onSuccess;return A()(T.a.mark(function t(){var e;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.loading){t.next=2;break}return t.abrupt("return");case 2:return n.loading=!0,t.prev=3,t.next=6,G.a.register({mobile:a,password:o});case 6:if(0!=+(e=t.sent).retCode){t.next=13;break}r("setToken",e.data.token),r("setUserInfo",e.data),s&&s(),t.next=14;break;case 13:throw e.errMsg;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),Object(d.a)(t.t0.toString());case 19:n.loading=!1;case 20:case"end":return t.stop()}},t,n,[[3,16]])}))()},showLoginPop:function(t){(0,t.commit)("setSWhowLoginPop",!0)},closeLoginPop:function(t){(0,t.commit)("setSWhowLoginPop",!1)},loginFilter:function(t,e){t.commit;var n=t.state,r=t.dispatch,a=e.onLogin;n.isValidLogin?a&&a():r("showLoginPop")}}},Z={namespaced:!0,state:function(){return{category:{list:[],loading:!1}}},mutations:{setCategoryList:function(t,e){t.category.list=e},setCategoryLoading:function(t,e){t.category.loading=e}},actions:{getCategory:function(t){var e=this,n=t.commit;return A()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("setCategoryLoading",!0),t.prev=1,t.next=4,G.a.getXzCategorytList();case 4:0==+(r=t.sent).retCode?n("setCategoryList",r.data.list):Object(d.a)(r.errMsg),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:n("setCategoryLoading",!1);case 12:case"end":return t.stop()}},t,e,[[1,8]])}))()},doDelete:function(){var t=this;return A()(T.a.mark(function e(){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},doLike:function(){var t=this;return A()(T.a.mark(function e(){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},doCollect:function(){var t=this;return A()(T.a.mark(function e(){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}}};h.a.use(w.a);var B=new w.a.Store({state:{},getters:{},mutations:{},actions:{},modules:{chat:F,user:H,xzProduct:Z}}),D=n("GLlk"),W=n.n(D),K=(n("AMzZ"),n("daAf"),n("ujls"),n("NfSi")),Q=n.n(K);h.a.use(Q.a),h.a.use(g.a),h.a.use(m.a),h.a.use(p.a),h.a.use(f.a),h.a.use(d.a),h.a.use(l.a),h.a.use(u.a),h.a.use(c.a),h.a.use(i.a),h.a.use(s.a),h.a.use(o.a),h.a.use(a.a),h.a.use(r.a),h.a.use(W.a),h.a.config.productionTip=!1,new h.a({el:"#app",store:B,router:j,components:{App:x},template:"<App/>"}).$mount("#app")},QmSG:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return o});var r="http://kyzb.airtlab.com/api",a="ws://kyzb.airtlab.com:8003",o=[{name:"邮寄",id:1},{name:"自提",id:2},{name:"同城面交",id:3}]},"T+/8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("4YfN"),a=n.n(r),o=(n("WI38"),n("AHMV")),s=(n("OC6q"),n("KAmN")),i=n("xd7I"),c=n("2bvH");i.a.use(o.a).use(s.a);var u={props:{onLogin:Function},data:function(){return{mobile:"",password:"",LOGIN_TYPE:1,REGISTER_TYPE:2,authType:1}},computed:a()({},Object(c.b)({loading:function(t){return t.user.loading},userInfo:function(t){return t.user.userInfo}}),{disabled:function(){return 11!==this.mobile.length||this.password.length<6},redirect:function(){return this.$route.query.redirect}}),created:function(){this.$route.query.authType&&(this.authType=this.$route.query.authType)},methods:{handleClick:function(){var t=this,e=1===this.authType?"user/login":"user/register";this.$store.dispatch(e,{mobile:this.mobile,password:this.password,onSuccess:function(){if(t.onLogin)return t.onLogin();t.redirect?t.$router.push(t.redirect):t.$router.go(-1)}})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-login"},[n("div",{staticClass:"form"},[n("van-cell-group",[n("van-field",{attrs:{placeholder:"输入手机号码"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),n("van-field",{attrs:{placeholder:"输入登录密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{staticClass:"button",attrs:{type:"primary",size:"large",loading:t.loading,disabled:t.disabled},on:{click:t.handleClick}},[t._v("立即"+t._s(t.authType===t.LOGIN_TYPE?"登录":"注册"))]),t._v(" "),n("div",{staticClass:"btm-wrap"},[t.authType===t.LOGIN_TYPE?[n("span",[t._v("没有账户？")]),t._v(" "),n("span",{staticClass:"btn-toggle",on:{click:function(e){t.authType=t.REGISTER_TYPE}}},[t._v("注册")])]:[n("span",[t._v("已有账户？")]),t._v(" "),n("span",{staticClass:"btn-toggle",on:{click:function(e){t.authType=t.LOGIN_TYPE}}},[t._v("登录")])]],2)],1)])},staticRenderFns:[]};var d=n("C7Lr")(u,l,!1,function(t){n("iV3j")},"data-v-7b9fbaa0",null);e.default=d.exports},XmiD:function(t,e){},aTwi:function(t,e,n){"use strict";var r=n("4YfN"),a=n.n(r),o=n("QmSG"),s=n("3pLw");e.a={get7nToken:function(){return s.a.get(o.a+"/upload/getToken")},login:function(t){var e=t.mobile,n=t.password;return s.a.post(o.a+"/user/login",{mobile:e,password:n})},getUserInfo:function(){return s.a.get(o.a+"/user/userInfo")},getUserProfile:function(t){var e=t.uid;return s.a.get(o.a+"/user/profile?uid="+e)},updateUserInfo:function(t){return s.a.post(o.a+"/user/userInfo",t)},getCheckinStatus:function(){return s.a.get(o.a+"/checkin")},checkin:function(){return s.a.post(o.a+"/checkin")},getCheckinList:function(){return s.a.get(o.a+"/checkin/list")},getPointList:function(){return s.a.get(o.a+"/point/list")},getdeliveryAddressList:function(){return s.a.get(o.a+"/deliveryAddress")},getDemandList:function(t){return s.a.get("http://kyzb.airtlab.com/api/demand",{params:t})},getXzProductList:function(){var t=arguments[0],e=t&&t.categoryId||"";return s.a.get(o.a+"/xzProduct?categoryId="+e)},getXzProductItem:function(t){return s.a.get(o.a+"/xzProduct/"+t)},createXzProduct:function(t){return s.a.post(o.a+"/xzProduct/",t)},updateXzProduct:function(t){return s.a.post(o.a+"/xzProduct/"+t.itemId,t)},getMyProduct:function(){return s.a.get(o.a+"/user/xzProduct")},getXzCategorytList:function(){return s.a.get(o.a+"/xzCategory")},getCollect:function(t){var e=t.typeId,n=void 0===e?1:e,r=t.objectId;return s.a.get(o.a+"/collect?typeId="+n+"&objectId="+r)},addCollect:function(t){var e=t.itemId,n=t.objectId,r=t.typeId,a=void 0===r?1:r;return s.a.post(o.a+"/collect?typeId="+a+"&objectId="+n,{itemId:e})},removeCollect:function(t){var e=t.recordId;return s.a.delete(o.a+"/collect/"+e)},getCollectState:function(t){var e=t.itemId,n=t.typeId,r=void 0===n?1:n,a=t.objectId;return s.a.get(o.a+"/collect/"+e+"?typeId="+r+"&objectId="+a)},getChatList:function(){return s.a.get(o.a+"/chat")},getChatItem:function(t){var e=t.partnerId;return s.a.get(o.a+"/chat/"+e)},getSfCityList:function(){return s.a.get(o.a+"/sfCity")},addAddress:function(t){var e=t.mobile,n=t.address,r=t.street,a=t.username,i=t.city,c=t.province,u=t.district,l=t.zip;return s.a.post(o.a+"/deliveryAddress",{mobile:e,address:n,street:r,username:a,city:i,province:c,district:u,zip:l})},removeAddress:function(t){var e=t.id;return s.a.delete(o.a+"/deliveryAddress/"+e)},register:function(t){var e=t.mobile,n=t.password;return s.a.post(o.a+"/user/register",{mobile:e,password:n})},checkLogin:function(){return s.a.get(o.a+"/user/checkLogin")},getComment:function(t){var e=t.itemId,n=t.typeId;return s.a.get(o.a+"/comment?itemId="+e+"&typeId="+n)},addComment:function(t){var e=t.itemId,n=t.content,r=t.talkTo,a=t.typeId;return s.a.post(o.a+"/comment?itemId="+e,{talkTo:r,typeId:a,content:n})},getFollowList:function(){return s.a.get(o.a+"/user/follow")},addFollow:function(t){var e=t.followId;return s.a.post(o.a+"/user/follow",{followId:e})},removeFollow:function(t){var e=t.followId;return s.a.delete(o.a+"/user/follow/"+e)},createDemand:function(t){return s.a.post(o.a+"/demand",a()({},t))},getDemandItem:function(t){var e=t.itemId;return s.a.get(o.a+"/demand/"+e)},createEnroll:function(t){var e=t.projectId;return s.a.post(o.a+"/enroll/?projectId="+e)},getEnrollList:function(t){var e=t.projectId;return s.a.get(o.a+"/enroll/?projectId="+e)},getEnrollStatus:function(t){var e=t.projectId;return s.a.get(o.a+"/enrollStatus?projectId="+e)},getUserEnrollList:function(){return s.a.get(o.a+"/userEnrollList")},getUserCreateList:function(t){return s.a.get(o.a+"/demand/getUserCreateList",{params:t})}}},aclC:function(t,e){},daAf:function(t,e){},iIvR:function(t,e){},iV3j:function(t,e){},"udL+":function(t,e){},ujls:function(t,e){},"vD/O":function(t,e){},vGBe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.70b1c6446ac9a1be1707.js.map