(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{6410:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-top"},[[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"100%"}},[a("q-tabs",{model:{value:t.detaillink,callback:function(e){t.detaillink=e},expression:"detaillink"}},[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-route-tab",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                          $q.localStorage.getItem('staff_type') !== 'Customer'\n                         "}],attrs:{name:"driverlist",label:t.$t("driver.driver"),icon:"img:statics/staff/driver.png",to:"/driver/driverlist",exact:""}})],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-route-tab",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                          $q.localStorage.getItem('staff_type') !== 'Customer'\n                         "}],attrs:{name:"dispatchlist",label:t.$t("driver.dispatchlist"),icon:"img:statics/outbound/dispatchlist.png",to:"/driver/dispatchlist",exact:""}})],1)],1)],1)])],a("div",{staticClass:"main-table"},[a("router-view")],1)],2)},i=[],r={name:"Pagedriver",data(){return{detaillink:"driverlist"}},methods:{}},l=r,o=a("42e1"),n=a("9989"),c=a("429b"),p=a("7867"),d=a("eebe"),m=a.n(d),u=Object(o["a"])(l,s,i,!1,null,null,null);e["default"]=u.exports;m()(u,"components",{QPage:n["a"],QTabs:c["a"],QRouteTab:p["a"]})}}]);