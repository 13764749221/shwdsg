(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2225313b","chunk-2d0dd4fb","chunk-2d20feb8"],{"229a":function(n,e,t){"use strict";t.r(e);var d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("多级表头")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},a=[],i=t("b64b"),c=t.n(i),r=t("819e"),s={data:function(){return{doc:c.a,code:r["default"],columns:[{title:"日期",key:"date"},{title:"配送信息",children:[{title:"姓名",key:"name"},{title:"地址",children:[{title:"省份",key:"province"},{title:"市区",key:"city"},{title:"地址",key:"address"}]}]}],data:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}},o=s,l=t("2877"),p=function(n){n.options.__source="src/views/demo/d2-crud/demo8/index.vue"},u=p,m=Object(l["a"])(o,d,a,!1,null,null,null);"function"===typeof u&&u(m);e["default"]=m.exports},"819e":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '配送信息',\n          children: [\n            {\n              title: '姓名',\n              key: 'name'\n            },\n            {\n              title: '地址',\n              children: [\n                {\n                  title: '省份',\n                  key: 'province'\n                },\n                {\n                  title: '市区',\n                  key: 'city'\n                },\n                {\n                  title: '地址',\n                  key: 'address'\n                }\n              ]\n            },\n          ]\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-08',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-06',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        },\n        {\n          date: '2016-05-07',\n          name: '王小虎',\n          province: '上海',\n          city: '普陀区',\n          address: '上海市普陀区金沙江路 1518 弄',\n          zip: 200333\n        }\n      ]\n    }\n  }\n}\n<\/script>"},b64b:function(n,e){n.exports="数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系，只需在 `columns` 中使用 `children` 字段对子级表头进行嵌套即可。代码如下：\n"}}]);
//# sourceMappingURL=chunk-2225313b.7d06f662.js.map