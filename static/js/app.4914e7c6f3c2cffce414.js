webpackJsonp([3],{"+BTi":function(t,e){},"2FaF":function(t,e){},"6ECP":function(t,e){},"6MxG":function(t,e){},Iun5:function(t,e){},M1IN:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i=(n("akml"),n("+BTi"),n("wZaX")),s=n.n(i),a=(n("Iun5"),n("ttjG")),c=n.n(a),r=function(t){t.use(c.a),t.use(s.a)},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")({name:"App"},l,!1,function(t){n("u6ST")},null,null).exports,d=n("/ocq"),h={name:"navgation",props:{navMove:Boolean,navTop:Boolean,navPlat:Boolean},data:function(){return{login:!1}},mounted:function(){},methods:{handlerFullScreen:function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"nav-active":t.navMove,"nav-top":t.navTop},attrs:{id:"nav"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.navPlat,expression:"!navPlat"}],staticClass:"pc"},[n("div",{staticClass:"nav-head"},[n("div",{staticClass:"nav-head-item logo",on:{click:t.handlerFullScreen}},[n("span",{staticClass:"logo-text"},[t._v("老胡子")])]),t._v(" "),n("div",{staticClass:"nav-head-item tab"},[t._v("首页|推荐|归档|友链|关于")]),t._v(" "),n("div",{staticClass:"nav-head-item icon"},[n("div",{staticClass:"icon-item"},[n("el-badge",{attrs:{value:"hot",hidden:!0,type:"danger"}},[n("i",{staticClass:"el-icon-search"})])],1),t._v(" "),n("div",{staticClass:"icon-item"},[n("el-badge",{attrs:{value:100,max:10}},[n("i",{staticClass:"el-icon-bell"})])],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"icon-item"},[n("el-badge",{attrs:{value:"more",hidden:!0}},[n("i",{staticClass:"el-icon-more"})])],1)]),t._v(" "),n("div",{staticClass:"nav-head-item user"},[t._m(1),t._v(" "),t.login?n("div",{staticClass:"user-item login-in"},[t._m(2)]):n("div",{staticClass:"user-item login-out"},[n("div",{staticClass:"login-out-item item-username",staticStyle:{display:"flex","align-items":"center"}},[n("i",{staticClass:"el-icon-user"}),t._v(" "),n("el-badge",{attrs:{"is-dot":"",hidden:!1}},[n("span",[t._v("老胡子吹风")])])],1),t._v(" "),t._m(3)])])]),t._v(" "),t._e()]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.navPlat,expression:"navPlat"}],staticClass:"mobile"},[n("div",{staticClass:"mobile-head"},[n("div",{staticClass:"mobile-head-item"},[n("el-badge",{staticStyle:{top:"-1px",left:"28px","z-index":"1"},attrs:{"is-dot":"",hidden:!1}}),t._v(" "),t._m(4)],1),t._v(" "),n("div",{staticClass:"mobile-head-item mobile-logo",on:{click:t.handlerFullScreen}},[n("span",{staticClass:"logo-text"},[t._v(" Old Beard")])]),t._v(" "),t._m(5)]),t._v(" "),t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon-item"},[e("i",{staticClass:"el-icon-share"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-item language"},[e("div",{},[e("span",{staticStyle:{color:"green"}},[this._v("●")]),this._v(" "),e("span",[this._v("简体中文")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("span",[this._v("登入")]),this._v(" "),e("i",{staticClass:"el-icon-info"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-out-item"},[e("span",[this._v("退出")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"nav-toggle"}},[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-head-item"},[e("span",{staticStyle:{color:"#32b37b","font-size":"6px"}},[this._v("● ")]),this._v(" "),e("span",{staticStyle:{"font-size":"13px"}},[this._v("English")])])}]};var v={name:"appHead",props:{},data:function(){return{isMobile:!1,isActive:!1,isNoActive:!0,curTop:0,preTop:0,isHeaderShow:!0,isHeaderSTop:!1,loadStatus:!0,rowShow:{row0:!1,row1:!1,row2:!1,row3:!1,row4:!1},bottomHeight:200,clientHeight:document.documentElement.clientHeight||document.body.clientHeight,scrollHeight:document.documentElement.scrollHeight||document.body.scrollHeight}},components:{"head-nav":n("VU/8")(h,m,!1,function(t){n("coub"),n("6MxG")},"data-v-4e91bfbd",null).exports},created:function(){this.isPhone()&&(this.isMobile=!0)},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{isPhone:function(){return null!=navigator.userAgent.match("Android|iPhone|iPad|Mobile")},handleScroll:function(){this.curTop=document.documentElement.scrollTop||document.body.scrollTop,this.curTop>this.clientHeight-55&&this.curTop>=this.preTop?(this.isHeaderShow=!1,this.isHeaderSTop=!1,this.preTop=this.curTop,this.contentLoad()):(this.isHeaderShow=!0,this.isHeaderSTop=!1,this.preTop=this.curTop,0===this.curTop&&(this.isHeaderSTop=!0))},contentLoad:function(){this.scrollHeight=document.documentElement.scrollHeight||document.body.scrollHeight,this.scrollHeight-this.bottomHeight-this.clientHeight-this.curTop<=0&&(this.loadStatus&&!this.rowShow.row0?this.rowShow.row0=!0:this.rowShow.row0&&!this.rowShow.row1?this.rowShow.row1=!0:this.rowShow.row1&&!this.rowShow.row2?this.rowShow.row2=!0:this.rowShow.row2&&!this.rowShow.row3?this.rowShow.row3=!0:this.rowShow.row3&&!this.rowShow.row4&&(this.rowShow.row4=!0,this.loadStatus=!1),this.$emit("contentListShow",this.rowShow))},navActive:function(){this.isActive=!0,this.isNoActive=!1;var t=this;setTimeout(function(){t.$emit("navActive",t.isActive)},300)}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("transition",{attrs:{name:"nav-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHeaderShow,expression:"isHeaderShow"}]},[n("head-nav",{attrs:{"nav-move":t.isActive,"nav-top":t.isHeaderSTop,"nav-plat":t.isMobile}})],1)]),t._v(" "),n("div",{staticClass:"introduction"},[t._m(0),t._v(" "),n("div",{staticClass:"head-content"},[n("div",{staticClass:"content-item info"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isNoActive,expression:"isNoActive"}],staticClass:"content-item load",on:{click:t.navActive}},[n("i",{staticClass:"el-icon-arrow-down load-jump"})])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-bg"},[e("div",{staticClass:"bg-mask"})])}]};var f={data:function(){return{curTop:0,preTop:0,isHeaderShow:!1,isHeaderSTop:!1}},mounted:function(){},beforeDestroy:function(){console.log("beforeDestroy 钩子执行...")},methods:{}},p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",[this._v("left")]),this._v(" "),e("div",[this._v("middle")]),this._v(" "),e("div",[this._v("right")])])}]};var _={name:"appHome",components:{"home-head":n("VU/8")(v,w,!1,function(t){n("6ECP")},"data-v-1a8460ed",null).exports,"home-foot":n("VU/8")(f,p,!1,function(t){n("2FaF"),n("M1IN")},"data-v-974563ee",null).exports,"home-content":function(){return n.e(1).then(n.bind(null,"n8FN"))}},data:function(){return{isContentActive:!1,contentListShow:{}}},mounted:function(){},computed:{},methods:{getHeadActive:function(t){this.isContentActive=t,setTimeout(function(){document.getElementById("post").scrollIntoView({block:"start",behavior:"smooth"})},200)},getContentListShow:function(t){this.contentListShow=t}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{staticClass:"header"},[n("home-head",{on:{navActive:t.getHeadActive,contentListShow:t.getContentListShow}})],1),t._v(" "),n("transition",{attrs:{name:"content-fade"}},[t.isContentActive?n("div",{staticClass:"content",attrs:{id:"post"}},[n("home-content",{attrs:{"list-show":t.contentListShow}})],1):t._e()]),t._v(" "),t.isContentActive?n("div",{staticClass:"footer"},[n("home-foot")],1):t._e()],1)},staticRenderFns:[]};var S=n("VU/8")(_,g,!1,function(t){n("wCfo")},"data-v-4d9bc65c",null).exports;o.a.use(d.a);var C=new d.a({mode:"history",routes:[{path:"/",name:"index",component:S},{path:"/index",name:"Home",component:S},{path:"/helloworld",name:"helloworld",component:function(){return n.e(0).then(n.bind(null,"gORT"))}}]}),b=n("NYxO"),E={showFooter:!0,changableNum:0},F={namespaced:!0,state:E,getters:{isShow:function(t){return t.showFooter},getChangedNum:function(){return E.changableNum}},mutations:{show:function(t){t.showFooter=!0},hide:function(t){t.showFooter=!1},newNum:function(t,e){t.changableNum+=e}},actions:{hideFooter:function(t){t.commit("hide")},showFooter:function(t){t.commit("show")},getNewNum:function(t,e){t.commit("newNum",e)}}},H={namespaced:!0,state:{collects:[]},getters:{renderCollects:function(t){return t.collects}},mutations:{pushCollects:function(t,e){t.collects.push(e)}},actions:{invokePushItems:function(t,e){t.commit("pushCollects",e)}}};o.a.use(b.a);var T=new b.a.Store({modules:{footerStatus:F,collection:H}}),A=n("AXdl");o.a.config.productionTip=!1,o.a.use(A.a,{preLoad:1.3,error:"static/error/9eb13cfdeb16a425add3fa4de7ff9bc1.jpg",loading:"static/loading/5-160914192R4-50.gif",attempt:1,throttleWait:2e3}),o.a.use(r),new o.a({el:"#app",router:C,store:T,components:{App:u},template:"<App/>"})},akml:function(t,e){},coub:function(t,e){},u6ST:function(t,e){},wCfo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4914e7c6f3c2cffce414.js.map