(function(){"use strict";var e={6250:function(e,a,t){var i=t(9242),s=t(3396);function l(e,a,t,i,l,n){const o=(0,s.up)("main-page");return(0,s.wg)(),(0,s.j4)(o)}var n=t(7139);const o=e=>((0,s.dD)("data-v-57c205cc"),e=e(),(0,s.Cn)(),e),d={class:"app"},r={class:"container"},c=o((()=>(0,s._)("div",{class:"header"},null,-1))),_={class:"content"},u={class:"top"},v={class:"btns"},p=o((()=>(0,s._)("label",{for:"grid"},null,-1))),h=o((()=>(0,s._)("button",{class:"btn"},[(0,s._)("div",{class:"icon"}),(0,s.Uk)(" + ")],-1))),f={key:0,class:"bottom"},m={key:1,class:"bottom"},g={class:"links"},y=["onClick"],b=o((()=>(0,s._)("span",null," /",-1))),w={class:"grid"},k=["onClick"],x={class:"row"},D=o((()=>(0,s._)("div",{class:"name"},null,-1))),T={class:"value"},E={key:0,class:"grid"},O={key:0,class:"text"},C={class:"row"},q={class:"name"},z={class:"value"},j={class:"rows"},H={class:"name"},Y={class:"value"},F=o((()=>(0,s._)("div",{class:"card_footer"},null,-1))),K=o((()=>(0,s._)("div",{class:"footer"},null,-1)));function P(e,a,t,l,o,P){const S=(0,s.up)("selector-vue");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",r,[c,(0,s._)("div",_,[(0,s._)("div",u,[(0,s.Wm)(S,{options_props:o.short_data,onSelect:P.select},null,8,["options_props","onSelect"]),(0,s._)("div",v,[(0,s.wy)((0,s._)("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":a[0]||(a[0]=e=>o.show_cards=e),id:"grid"},null,512),[[i.e8,o.show_cards]]),p,h])]),o.show_cards?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.rows,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"row",key:e},(0,n.zw)(e),1)))),128))])),o.show_cards?((0,s.wg)(),(0,s.iD)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.path,((e,a)=>(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:"path",key:e},[(0,s._)("h2",null,(0,n.zw)(e)+":",1),(0,s._)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s._)("a",{href:"#",onClick:a=>{o.sel_idx=e-1,o.selected_categoryes.splice(e-1)}},(0,n.zw)(o.path[e-1]),9,y),b])))),128))]),(0,s._)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.categoryes[e],(e=>((0,s.wg)(),(0,s.iD)("div",{class:"card",key:e,onClick:a=>{o.selected_categoryes.push(e),o.sel_idx+=1}},[(0,s._)("div",x,[D,(0,s._)("div",T,(0,n.zw)(e),1)])],8,k)))),128))])])),[[i.F8,o.sel_idx==a&&o.show_categoryes]]))),128)),o.show_categoryes&&o.path.length!=o.selected_categoryes.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",E,[0==P.paginatedData.length?((0,s.wg)(),(0,s.iD)("label",O," Ничего не найдено ")):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(P.paginatedData,(a=>((0,s.wg)(),(0,s.iD)("div",{class:"card",key:a},[(0,s._)("div",C,[(0,s._)("div",q,(0,n.zw)(e.params[1])+" :",1),(0,s._)("div",z,(0,n.zw)(a[0]),1)]),(0,s._)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a,((a,t)=>(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:"row",key:a},[(0,s._)("div",H,(0,n.zw)(e.params[t+1])+" :",1),(0,s._)("div",Y,(0,n.zw)(a),1)])),[[i.F8,0!=t]]))),128))]),F])))),128))]))])):(0,s.kq)("",!0)]),K])])}t(6699);var S=t(65);const M={class:"v-select"},Z={class:"options",key:"a1"},A=["onClick"];function I(e,a,t,l,o,d){return(0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("div",{class:(0,n.C_)(["title",{title_checked:l.show_options,disabled:t.disabled}]),onClick:a[0]||(a[0]=e=>l.open_close_options()),onFocusout:a[1]||(a[1]=(...e)=>l.handleFocusOut&&l.handleFocusOut(...e)),tabindex:"0"},[(0,s._)("p",null,(0,n.zw)(t.selected_option.name),1),t.disabled?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,n.C_)(["arrow",{rotate_arrow:l.show_options}])},null,2))],34),(0,s.Wm)(i.uT,{name:"list"},{default:(0,s.w5)((()=>[l.show_options?((0,s.wg)(),(0,s.iD)("div",Z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.options,(e=>((0,s.wg)(),(0,s.iD)("p",{key:e.value,onClick:a=>l.select_option(e)},(0,n.zw)(e.name),9,A)))),128))])):(0,s.kq)("",!0)])),_:1})])}var U=t(4870),V={props:{options_props:{type:Array,default(){return[]},required:!0},selected_option:{type:Object,required:!0,default(){return{}}},disabled:{type:Boolean,required:!1,default:!1},idx:{type:Number,required:!1}},emits:{select:null},setup(e,{emit:a}){const t=(0,U.iH)([]);(0,s.bv)((()=>{(0,s.Y3)((()=>{i()}))}));const i=()=>{t.value=[],e.options_props.forEach((e=>t.value.push(e)))};(0,s.YP)((()=>e.options_props),(()=>{i()}),{deep:!0});const l=(0,U.iH)(!1),n=()=>{l.value=!1},o=()=>{e.disabled||(l.value=!l.value)},d=()=>{n()},r=t=>{a("select",t,e.idx),n()};return{open_close_options:o,handleFocusOut:d,show_options:l,options:t,select_option:r}}},W=t(89);const B=(0,W.Z)(V,[["render",I],["__scopeId","data-v-64812f98"]]);var N=B,G={components:{SelectorVue:N},data(){return{path:["Поступление","№ партии","НДС включен в цену"],selected_categoryes:[],sel_idx:0,show_categoryes:!0,categoryes:{},short_data:[],cat_for_short_dat:["Название","Артикул","№ партии"],rows:[],show_cards:!1}},computed:{...(0,S.Se)(["data","params"]),paginatedData(){if(this.show_categoryes){let e=[];e=e.concat(this.data);let a=[];return e.forEach((e=>{let t=!0;this.path.forEach(((a,i)=>{const s=this.params.indexOf(a)-1;t=e[s]==this.selected_categoryes[i]&&t})),t&&a.push(e)})),a}return this.data}},mounted(){this.get_data_categoryes(),this.get_short_data()},watch:{show_cards(){this.show_cards||(this.selected_categoryes=[],this.sel_idx=0)}},methods:{select(e){this.short_data.forEach(((a,t)=>{a.name==e.name&&this.short_data.splice(t,1)})),this.rows.push(e.name)},get_data_categoryes(){function e(e){let a=[];for(let t of e)a.includes(t)||a.push(t);return a}this.categoryes={};const a={};let t=[];t=t.concat(this.params),t.pop(),t.shift(),t.forEach(((t,i)=>{a[t]=[];let s=[];this.data.forEach((e=>{s.push(e[i])})),a[t]=e(s)})),Object.assign(this.categoryes,a)},get_short_data(){this.short_data=[],this.data.forEach(((e,a)=>{const t=e=>this.params.indexOf(e)-1;let i="";this.cat_for_short_dat.forEach(((a,s)=>{i=0==s?i+e[t(a)]+" (":i+a+": "+e[t(a)]})),i+=")";const s={name:i,value:a};this.short_data.push(s)}))}}};const J=(0,W.Z)(G,[["render",P],["__scopeId","data-v-57c205cc"]]);var L=J,Q={name:"App",components:{MainPage:L}};const R=(0,W.Z)(Q,[["render",l]]);var X=R,$={state:{params:["","Название","Артикул","Себестоимость","Цена","Склад","На складе","Свободно для резерва","В резерве","№ партии","Поступление","НДС","Изменение","Единицы измерений","НДС %","НДС включен в цену","Менеджер может менять % НДС","Описание","Прибыль","Группа",""],data:[["Товар 1","1","500","509","Склад 1","509","50","51","1","2022-07-13","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 1"],["Товар 1","1","120","129","Склад 1","129","12","11","2","2022-07-13","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 1","1","300","309","Склад 1","309","30","31","2","2022-07-13","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 1","1","1500","1509","Склад 1","1509","150","151","3","2022-07-13","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 1"],["Товар 2","2","1800","1809","Склад 1","1809","180","181","1","2022-07-14","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 3","3","13","19","Склад 1","19","1","1","2","2022-07-18","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 4","4","117","119","Склад 1","119","11","11","3","2022-07-13","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 5","5","4356","4359","Склад 2","4359","435","431","2","2022-07-18","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 2"],["Товар 6","6","67589","67589","Склад 2","67589","6758","6751","2","2022-07-11","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 7","7","123","129","Склад 2","129","12","11","1","2022-07-11","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 8","8","123","129","Склад 2","129","12","11","1","2022-07-18","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 9","9","123","129","Склад 2","129","12","11","2","2022-07-11","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 9","9","123","129","Склад 2","129","12","11","3","2022-07-28","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 2"],["Товар 10","10","123","129","Склад 2","129","12","11","3","2022-07-16","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"]],service:[["Услуга 1","1","1500","1509","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 1"],["Услуга 2","2","1800","1809","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 1"],["Услуга 3","3","13","19","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 1"],["Услуга 1","1","1500","1509","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","1234","Да","Группа 2"],["Услуга 1","1","1500","1509","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 2"]],types:[{name:"Число целое",value:1},{name:"Дробное число",value:2},{name:"Строка",value:3},{name:"Текст",value:4},{name:"Список",value:5},{name:"Мильтисписок",value:6},{name:"Дата",value:7},{name:"Дата-Время",value:8},{name:"Флаг",value:9}],fields:[{id:1,field:"Название",type:{name:"Строка",value:3},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:2,field:"Артикул",type:{name:"Строка",value:3},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:3,field:"Себестоимость",type:{name:"Дробное число",value:2},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:4,field:"Цена",type:{name:"Дробное число",value:2},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:5,field:"Склад",type:{name:"Список",value:5},selector_options:[{name:"Не выбрано",value:1},{name:"Склад 1",value:2},{name:"Склад 2",value:3}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:6,field:"На складе",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:7,field:"Свободно для резерва",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!1,visibility:!0,edit:!1,editing:!1,delete:!0,available_to_services:!1},{id:8,field:"В резерве",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:9,field:"№ партии",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:10,field:"Поступление",type:{name:"Дата",value:7},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:11,field:"НДС",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:12,field:"Изменение",type:{name:"Дата-Время",value:8},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:13,field:"Единицы измерений",type:{name:"Список",value:5},selector_options:[{name:"Не выбрано",value:1},{name:"шт",value:2},{name:"л (литры)",value:3},{name:"м3 (кубические метры)",value:4},{name:"кг (килограммы)",value:5},{name:"т (тонны)",value:6},{name:"комплект",value:7},{name:"услуга",value:8}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:14,field:"НДС %",type:{name:"Дробное число",value:2},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:15,field:"НДС включен в цену",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:16,field:"Менеджер может менять % НДС",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:17,field:"Описание",type:{name:"Текст",value:4},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:18,field:"Прибыль",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!1,visibility:!1,edit:!1,editing:!1,delete:!0,available_to_services:!0},{id:19,field:"Группа",type:{name:"Мильтисписок",value:6},selector_options:[{name:"Не выбрано",value:1},{name:"Группа 1",value:2},{name:"Группа 2",value:3},{name:"Группа 3",value:4},{name:"Группа 4",value:5}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0}]},getters:{data(e){return e.data},data1(e){return e.data},get_data_storage(e){const a=e.params.indexOf("Склад")-1,t={};let i=[],s=null;return e.fields.forEach((e=>{"Склад"==e.field&&(s=e.id-1)})),e.fields[s].selector_options.forEach((e=>{i.push(e.name)})),i.shift(),i.forEach((e=>{t[e]=[]})),i.forEach((i=>{e.data.forEach((e=>{e[a]==i&&t[i].push(e)}))})),t},service(e){return e.service},params(e){return e.params},types(e){return e.types},fields(e){return e.fields},options_from_name:e=>{const a={};return e.fields.forEach((e=>{a[e.field]=e.selector_options})),a}},mutations:{update_data(e,a){e.data=a},update_data_idx(e,a){e.data[a.idx]=a.data},update_all_data(e,a){e.data.forEach(((t,i)=>{e.data[i].push(a)}))},add_new_data(e,a){let t=[];e.params.forEach((()=>t.push(""))),t.pop(),t.pop(),a.title.forEach(((i,s)=>{const l=e.params.indexOf(i)-1;l>=0&&(t[l]=a.new_data[s])})),e.data.push(t)},cancel_item_in_data(e,a){const t=e.params.indexOf(a.name)-1,i=e.data[a.idx][t];e.data[a.idx][t]=i-a.count},delete_data_idx(e,a){e.data.forEach(((t,i)=>{a.forEach((a=>{e.data[i].splice(a,1)}))}))},remove_data_idx(e,a){e.data.splice(a.idx,1)},add_data(e,a){e.data.push(a.data)},archive_data(e,a){a.forEach((a=>{e.archive.items.push(e.data[a]),e.archive.sourses.push(0)}));const t=a.reverse();t.forEach((a=>e.data.splice(a,1)))},update_params(e,a){e.params=a},update_fields(e,a){e.fields=a}},actions:{}},ee=(0,S.MT)({modules:{data:$}});(0,i.ri)(X).use(ee).mount("#app")}},a={};function t(i){var s=a[i];if(void 0!==s)return s.exports;var l=a[i]={exports:{}};return e[i](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(a,i,s,l){if(!i){var n=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],l=e[c][2];for(var o=!0,d=0;d<i.length;d++)(!1&l||n>=l)&&Object.keys(t.O).every((function(e){return t.O[e](i[d])}))?i.splice(d--,1):(o=!1,l<n&&(n=l));if(o){e.splice(c--,1);var r=s();void 0!==r&&(a=r)}}return a}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,s,l]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var s,l,n=i[0],o=i[1],d=i[2],r=0;if(n.some((function(a){return 0!==e[a]}))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(d)var c=d(t)}for(a&&a(i);r<n.length;r++)l=n[r],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},i=self["webpackChunkadditing_product"]=self["webpackChunkadditing_product"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(6250)}));i=t.O(i)})();
//# sourceMappingURL=app.83bf2096.js.map