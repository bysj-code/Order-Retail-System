(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{4574:function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.shangpinxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g0:i}}))),i=n.__map(n.shangpinxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g1:i}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},r=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}))},4759:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,i,a,r,u){try{var c=n[r](u),o=c.value}catch(s){return void e(s)}c.done?t(o):Promise.resolve(o).then(i,a)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var u=n.apply(t,e);function c(n){r(u,i,a,c,o,"next",n)}function o(n){r(u,i,a,c,o,"throw",n)}c(void 0)}))}}e("e79f");var c=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("93bc"))}.bind(null,e)).catch(e.oe)},o={components:{uniIcons:c},data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"商品名称"}],queryIndex:0,searchForm:{shangpinxinxishangpinmingcheng:""},CustomBar:"0",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],shangpinxinxilist:[],news:[]}},onShow:function(){var n=u(i.default.mark((function n(){var t,e,a,r,u,c,o,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),t=[],n.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(e=n.sent,a=!0,r=!1,u=void 0,n.prev=8,c=e.data.list[Symbol.iterator]();!(a=(o=c.next()).done);a=!0)s=o.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&t.push({img:s.value});n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](8),r=!0,u=n.t0;case 16:n.prev=16,n.prev=17,a||null==c.return||c.return();case 19:if(n.prev=19,!r){n.next=22;break}throw u;case 22:return n.finish(19);case 23:return n.finish(16);case 24:return t&&(this.swiperList=t),n.next=27,this.$api.list("news",{page:1,limit:3});case 27:return e=n.sent,this.news=e.data.list,n.next=31,this.$api.recommend("shangpinxinxi",1,6);case 31:e=n.sent,this.shangpinxinxilist=e.data.list;case 33:case"end":return n.stop()}}),n,this,[[8,12,16,24],[17,,19,23]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.shangpinxinxishangpinmingcheng=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.shangpinxinxishangpinmingcheng),this.searchForm.shangpinxinxishangpinmingcheng=""),n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=o}).call(this,e("543d")["default"])},7709:function(n,t,e){"use strict";e.r(t);var i=e("4759"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},"94c8":function(n,t,e){"use strict";(function(n){e("8515"),e("921b");i(e("66fd"));var t=i(e("dd8f"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"98c8":function(n,t,e){},dd8f:function(n,t,e){"use strict";e.r(t);var i=e("4574"),a=e("7709");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("f990");var u,c=e("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=o.exports},f990:function(n,t,e){"use strict";var i=e("98c8"),a=e.n(i);a.a}},[["94c8","common/runtime","common/vendor"]]]);