"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[594],{9768:function(n,s,e){e.r(s),e.d(s,{default:function(){return i}});var u=function(){var n=this,s=n._self._c;return s("div",{staticClass:"about"},[s("h1",[n._v("This is an about page")]),s("div",[n._v(n._s(n.msg))]),s("div",[n._v("(num + 1) * 2 = "+n._s(n.result))]),n._v(" num: "),s("input",{directives:[{name:"model",rawName:"v-model",value:n.num,expression:"num"}],domProps:{value:n.num},on:{input:function(s){s.target.composing||(n.num=s.target.value)}}}),s("button",{on:{click:function(s){return n.plus()}}},[n._v("加1")]),n.result>10?s("div",[n._v("result大于10："+n._s(n.result))]):s("div",[n._v("result小于等于10："+n._s(n.result))]),s("div",{directives:[{name:"show",rawName:"v-show",value:n.result>10,expression:"result>10"}]},[n._v("result大于10")]),n._l(n.list,(function(e,u){return s("ul",{key:e},[1===e.classId?s("li",[n._v(n._s(e.no)+"："+n._s(e.name))]):2===e.classId?s("li",[n._v("("+n._s(e.no)+")"+n._s(e.name))]):s("li",[n._v(n._s(e.no)+"："+n._s(e.name)+"("+n._s(u)+")")])])}))],2)},l=[],t={name:"HomeView",data(){return{msg:"Hello World!",num:1,list:[{name:"张三",no:"001",classId:1},{name:"李四",no:"002",classId:2},{name:"王五",no:"003",classId:3}]}},methods:{plus:function(){this.num++}},computed:{result:function(){return 2*(parseInt(this.num)+1)}},watch:{num:function(n,s){console.log("new:"+n+",old:"+s)}}},o=t,r=e(9592),a=(0,r.A)(o,u,l,!1,null,null,null),i=a.exports}}]);
//# sourceMappingURL=about.61f91201.js.map