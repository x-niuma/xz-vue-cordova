webpackJsonp([8],{"6KEU":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("lC5x"),a=r.n(n),s=(r("Yj4y"),r("a8Zu")),i=r("J0Oq"),o=r.n(i),c=r("4YfN"),u=r.n(c),l=r("2bvH"),f=r("gyMJ"),d={data:function(){return{msgList:[],partnerInfo:null,content:""}},computed:u()({},Object(l.b)({userInfo:function(t){return t.user.userInfo},list:function(t){var e=this.$route.params.partnerId,r=[].concat(t.chat.msgGroup[e]||[]);return r.sort(function(t,e){return e.create_time<t.create_time?1:e.create_time===t.create_time?0:-1}),r}}),{title:function(){return this.$route.query.nickname},avatar:function(){return this.$route.query.avatar}}),mounted:function(){this.doGetUserProfile()},methods:{doGetUserProfile:function(){var t=this;return o()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getUserProfile({uid:t.$route.params.partnerId});case 3:0==+(r=e.sent).retCode?t.partnerInfo=r.data:Object(s.a)(r.errMsg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},getAvatar:function(t){return this.isFromMe(t)?this.userInfo.avatar:this.avatar},isFromMe:function(t){return+t.f_from==+this.userInfo.id},itemCls:function(t){return this.isFromMe(t)?"item-mine":"item-partner"},doSendMsg:function(){this.$store.dispatch("chat/sendMsg",{to:this.$route.params.partnerId,content:this.content})}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.partnerInfo?r("div",{staticClass:"page"},[r("van-nav-bar",{staticClass:"page__header",attrs:{title:t.title,"left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),t._v(" "),r("div",{staticClass:"page__body"},[r("div",{staticClass:"msg-scroll list"},t._l(t.list,function(e){return r("div",{key:e.id,staticClass:"item",class:t.itemCls(e),attrs:{"data-from":e.from,"data-to":e.to},on:{click:function(r){return t.$router.push("/chatItem/"+e.id)}}},[r("img",{staticClass:"item-avatar",attrs:{src:t.getAvatar(e),alt:"头像"}}),t._v(" "),r("div",{staticClass:"item-name"},[t._v(t._s(e.content))])])}),0)]),t._v(" "),r("div",{staticClass:"btm-fixed"},[r("div",{staticClass:"form"},[r("van-field",{staticClass:"form-input",attrs:{placeholder:"输入您要发送的内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),r("van-button",{staticClass:"form-submit",attrs:{type:"primary"},on:{click:t.doSendMsg}},[t._v("发送")])],1)])],1):t._e()},staticRenderFns:[]};var v=r("C7Lr")(d,m,!1,function(t){r("K2W2")},"data-v-df6286b0",null);e.default=v.exports},K2W2:function(t,e){}});
//# sourceMappingURL=8.c00e1f64cabb63d04225.js.map