webpackJsonp([11],{HVFi:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("4YfN"),e=i.n(n),a=i("2bvH"),r={data:function(){return{}},computed:e()({},Object(a.b)({userList:function(t){return t.chat.userList},msgList:function(t){return t.chat.msgList},msgGroup:function(t){return t.chat.msgGroup},userInfo:function(t){return t.user.userInfo},isValidLogin:function(t){return t.user.isValidLogin}})),methods:{getLastMsg:function(t){return this.msgGroup[t.id][0].content},switchTalk:function(t){this.$store.dispatch("chat/switchTalkPage",t)}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view"},[t.isValidLogin?i("div",{staticClass:"list"},t._l(t.userList,function(s){return i("div",{key:s.id,staticClass:"item",on:{click:function(i){return t.switchTalk(s)}}},[i("img",{staticClass:"item-avatar",attrs:{src:s.avatar,alt:s.nickName}}),t._v(" "),i("div",[i("div",{staticClass:"item-name"},[t._v(t._s(s.nickname))]),t._v(" "),i("div",{staticClass:"item-msg",domProps:{textContent:t._s(t.getLastMsg(s))}})])])}),0):i("div",{staticClass:"login-tip",on:{click:function(s){return t.$store.dispatch("user/showLoginPop")}}},[i("span",[t._v("登录查看消息")])])])},staticRenderFns:[]};var u=i("C7Lr")(r,c,!1,function(t){i("aK68")},"data-v-4b595354",null);s.default=u.exports},aK68:function(t,s){}});
//# sourceMappingURL=11.15d133aca1364f089212.js.map