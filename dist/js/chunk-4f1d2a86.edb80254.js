(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f1d2a86","chunk-2d0cc1c8","chunk-2d0cc083"],{"0f0f":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("d2-container",[e("template",{slot:"header"},[n._v("加载状态")]),e("el-button",{on:{click:n.handleLoading}},[n._v("点我切换加载状态")]),e("d2-crud",{staticStyle:{"margin-top":"10px"},attrs:{columns:n.columns,data:n.data,loading:n.loading}}),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-markdown",{attrs:{source:n.doc}})],1),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-highlight",{attrs:{code:n.code}})],1),e("template",{slot:"footer"},[e("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],s=e("4bcb"),o=e.n(s),c=e("4d13"),r={data:function(){return{doc:o.a,code:c["default"],columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],loading:!0}},methods:{handleLoading:function(){this.loading=!this.loading}}},l=r,i=e("2877"),u=function(n){n.options.__source="src/views/demo/d2-crud/demo27/index.vue"},m=u,f=Object(i["a"])(l,a,d,!1,null,null,null);"function"===typeof m&&m(f);t["default"]=f.exports},"4bcb":function(n,t){n.exports="在 `D2 Crud` 组件中传入 `loading` ，即可控制表格加载状态，`loading` 的可选值为 `true` 和 `false`。代码如下：\n"},"4d13":function(n,t,e){"use strict";e.r(t),t["default"]="<template>\n  <div>\n  <d2-crud\n    :columns=\"columns\"\n    :data=\"data\"\n    :loading=\"loading\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      loading: true\n    }\n  }\n}\n<\/script>"}}]);
//# sourceMappingURL=chunk-4f1d2a86.edb80254.js.map