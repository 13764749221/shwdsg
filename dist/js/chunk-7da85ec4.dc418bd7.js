(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7da85ec4","chunk-2d0f069e","chunk-2d22fc97","chunk-2d2245b0","chunk-744c9c7b"],{"15ec3":function(e,t){e.exports="你可以点击每个演示卡片右上角的刷新按钮检查每次 `mock` 不同的结果\n\n官方演示页面 [http://mockjs.com/examples.html](http://mockjs.com/examples.html)\n\n官方 `Wiki` [https://github.com/nuysoft/Mock/wiki/Getting-Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)"},"9bed":function(e,t,n){"use strict";n.r(t),t["default"]=[{title:"复制1-10次固定字符串",json:{"string|1-10":"★"}},{title:"复制3次",json:{"string|3":"Ha"}},{title:"范围随机取值",json:{"number|1-100":50}},{title:"累加1",json:{"number|+1":10}},{title:"累加2",json:{"number|+2":10}},{title:"浮点数",json:{"number1|1-100.1-10":1,"number2|123.1-10":1,"number3|123.3":1,"number4|123.10":1.123}},{title:"true 的概率是 1/2",json:{"boolean|1":!0}},{title:"随机选择3个属性",json:{"obj|3":{name:"FairyEver",use:"vue.js",sex:1,qq:"1711467488",tel:"123-4567-8910",city:"beijing",mail:"1711467488liyang@gmail.com",github:"https://github.com/d2-projects",blog:"http://www.fairyever.com/",creatDate:"2018-1-1",updateDate:"2018-1-2",delFlag:0}}},{title:"随机选择4-8个属性",json:{"obj|4-8":{name:"FairyEver",use:"vue.js",sex:1,qq:"1711467488",tel:"123-4567-8910",city:"beijing",mail:"1711467488liyang@gmail.com",github:"https://github.com/FairyEver",blog:"http://www.fairyever.com/",creatDate:"2018-1-1",updateDate:"2018-1-2",delFlag:0}}},{title:"随机选1个",json:{"arr|1":["1-vue","2-react","3-angular","4-node","5-java"]}},{title:"顺序选1个",json:{"arr|+1":["1-vue","2-react","3-angular","4-node","5-java"]}},{title:"重复3次",json:{"arr|3":["o","o - o","o - o - o"]}},{title:"重复2-10次",json:{"arr|2-10":["-","----"]}}]},ae2f:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[e._v("数据模板")]),n("d2-markdown",{staticClass:"d2-mb",attrs:{source:e.doc}}),e._l(e.settingDTD,function(t,o){return n("d2-demo-mock-card",{key:o,attrs:{title:t.title,code:JSON.stringify(t.json,null,2),mock:e.mockResult[o]},on:{reload:function(t){return e.doMock(o)}}})}),n("d2-demo-mock-card",{attrs:{title:e.fn.title,code:e.fn.code,mock:e.fn.mocked},on:{reload:function(t){return e.fnMock()}}}),n("d2-demo-mock-card",{staticStyle:{"margin-bottom":"0px !important"},attrs:{title:e.regexp.title,code:e.regexp.code,mock:e.regexp.mocked},on:{reload:function(t){return e.regexpMock()}}})],2)},i=[],c=(n("ac6a"),n("2b0e")),r=n("2ef0"),a=n("96eb"),s=n.n(a),u=n("9bed"),l=n("e07f"),d=n("ea05"),m=n("15ec3"),f=n.n(m),g={mixins:[l["default"],d["default"]],components:{"d2-demo-mock-card":function(){return n.e("chunk-2f62945f").then(n.bind(null,"1c81"))}},data:function(){return{mockResult:[],settingDTD:u["default"],settingDTDClone:Object(r["cloneDeep"])(u["default"]),doc:f.a}},mounted:function(){var e=this;this.settingDTD.forEach(function(t,n){e.doMock(n)}),this.fnMock(),this.regexpMock()},methods:{doMock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;c["default"].set(this.mockResult,e,JSON.stringify(s.a.mock(this.settingDTDClone[e].json),null,2))}}},k=g,h=n("2877"),p=function(e){e.options.__source="src/views/demo/plugins/mock/dtd.vue"},b=p,j=Object(h["a"])(k,o,i,!1,null,null,null);"function"===typeof b&&b(j);t["default"]=j.exports},e07f:function(e,t,n){"use strict";n.r(t);var o=n("96eb"),i=n.n(o);t["default"]={data:function(){return{regexp:{title:"正则表达式",code:"{\n  'regexp1': /[a-z][A-Z][0-9]/,\n  'regexp2': /wWsSdD/,\n  'regexp3': /d{5,10}/\n}",json:{regexp1:/[a-z][A-Z][0-9]/,regexp2:/\w\W\s\S\d\D/,regexp3:/\d{5,10}/},mocked:""}}},methods:{regexpMock:function(){this.regexp.mocked=JSON.stringify(i.a.mock(this.regexp.json),null,2)}}}},ea05:function(e,t,n){"use strict";n.r(t);n("7f7f");var o=n("96eb"),i=n.n(o);t["default"]={data:function(){return{fn:{title:"函数",code:'{\n  "name": "FairyEver",\n  "say": function() {\n    return \'I AM \' + this.name\n  }\n}',json:{name:"FairyEver",say:function(){return"I AM "+this.name}},mocked:""}}},methods:{fnMock:function(){this.fn.mocked=JSON.stringify(i.a.mock(this.fn.json),null,2)}}}}}]);
//# sourceMappingURL=chunk-7da85ec4.dc418bd7.js.map