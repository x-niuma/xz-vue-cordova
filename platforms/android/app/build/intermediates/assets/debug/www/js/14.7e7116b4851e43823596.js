webpackJsonp([14],{"1VZ0":function(t,e){},"4fZK":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("lC5x"),n=s.n(a),i=s("J0Oq"),r=s.n(i),c=s("aTwi"),u={data:function(){return{list:[]}},mounted:function(){this.getDataList()},methods:{getDataList:function(){var t=this;return r()(n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getPointList();case 2:if(s=e.sent){e.next=5;break}return e.abrupt("return");case 5:if(s.success){e.next=7;break}return e.abrupt("return",t.$toast(s.errMsg));case 7:t.list=s.data.list;case 8:case"end":return e.stop()}},e,t)}))()}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-point"},[s("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":"",title:"我的积分"},on:{"click-left":function(e){return t.$router.go(-1)}}}),t._v(" "),s("div",{staticClass:"content"},[s("ul",{staticClass:"list"},t._l(t.list,function(e,a){return s("li",{key:a,staticClass:"item"},[s("div",{staticClass:"item-date"},[t._v(t._s(e.createTime.substr(0,10)))]),t._v(" "),s("div",{staticClass:"item-value",class:{"is-negative":!e.action}},[t._v(t._s(e.action?"+":"-")+t._s(e.value))]),t._v(" "),s("div",{staticClass:"item-desc"},[t._v(t._s(e.description))])])}),0)])],1)},staticRenderFns:[]};var o=s("C7Lr")(u,l,!1,function(t){s("1VZ0")},"data-v-01d05912",null);e.default=o.exports}});
//# sourceMappingURL=14.7e7116b4851e43823596.js.map