(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db9808b"],{7636:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("demo-page-header",{ref:"header",attrs:{slot:"header"},on:{submit:e.handleSubmit},slot:"header"}),n("demo-page-main",{attrs:{"table-data":e.table,loading:e.loading}}),n("demo-page-footer",{attrs:{slot:"footer",current:e.page.pageCurrent,size:e.page.pageSize,total:e.page.pageTotal},on:{change:e.handlePaginationChange},slot:"footer"})],1)},o=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("ef69");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var s={name:"demo-business-table-1",components:{DemoPageHeader:function(){return n.e("chunk-2d0abab8").then(n.bind(null,"15ec"))},DemoPageMain:function(){return n.e("chunk-f64163d6").then(n.bind(null,"b124"))},DemoPageFooter:function(){return n.e("chunk-2d0f0690").then(n.bind(null,"9bf7"))}},data:function(){return{table:[],loading:!1,page:{pageCurrent:1,pageSize:10,pageTotal:0}}},methods:{handlePaginationChange:function(e){var t=this;this.$notify({title:"分页变化",message:"当前第".concat(e.current,"页 共").concat(e.total,"条 每页").concat(e.size,"条")}),this.page=e,this.$nextTick(function(){t.$refs.header.handleFormSubmit()})},handleSubmit:function(e){var t=this;this.loading=!0,this.$notify({title:"开始请求模拟表格数据"}),Object(i["a"])(u({},e,{},this.page)).then(function(e){t.loading=!1,t.$notify({title:"模拟表格数据请求完毕"}),t.table=e.list,t.page.pageTotal=e.page.total}).catch(function(e){t.loading=!1,t.$notify({title:"模拟表格数据请求异常"})})}}},l=s,f=n("2877"),d=function(e){e.options.__source="src/views/demo/business/table/1/index.vue"},b=d,p=Object(f["a"])(l,a,o,!1,null,null,null);"function"===typeof b&&b(p);t["default"]=p.exports},ef69:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("9bd2");function o(e){return Object(a["a"])({url:"/demo/business/table/1/fetch",method:"get",params:e})}}}]);
//# sourceMappingURL=chunk-4db9808b.f1a131a4.js.map