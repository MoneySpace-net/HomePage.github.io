(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-240d8f50"],{2876:function(e,t,s){"use strict";s.r(t);var o=s("7a23"),n=s("67e5"),c=s.n(n),a=s("e5dc"),r=s.n(a),i=function(e){return Object(o["pushScopeId"])("data-v-3815c756"),e=e(),Object(o["popScopeId"])(),e},d={id:"bodyWrap"},l={class:"col-12 d-none d-sm-flex col-md-6 d-flex flex-column justify-content-center position-relative overflow-hidden",ref:"s3"},m=i((function(){return Object(o["createElementVNode"])("div",{class:"product__backgroundsquare position-absolute"},null,-1)})),b=[m],u={class:"productPageContent"},h={class:"container p-4 product-section mt-5"},p={class:"row h-100"},f={class:"col-12 col-md-6 flex-column d-flex justify-content-center px-5 align-items-center text-center align-items-md-start text-md-start"},j={class:"display-4 fw-normal",style:{"font-size":"36px"}},g={class:"py-4 lh-base fw-normal",style:{"font-size":"18px"}},O={class:"mt-5 mt-md-0 col-12 col-md-6 d-flex justify-content-center align-items-center position-relative"},v={key:0,style:{"animation-duration":"1.5s"}},_=i((function(){return Object(o["createElementVNode"])("img",{class:"w-75 shadow br-20 dashboard-image",src:c.a,alt:""},null,-1)})),w=i((function(){return Object(o["createElementVNode"])("div",{class:"dashboard-square position-absolute h-100 w-75 br-20"},null,-1)})),E=[_,w],y=i((function(){return Object(o["createElementVNode"])("div",{class:"section-separator"},null,-1)})),N={class:"container p-4 product-section mb-5 mb-md-0"},V={class:"mt-5 mt-md-0 row h-100"},x=i((function(){return Object(o["createElementVNode"])("div",{class:"order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center align-items-center"},[Object(o["createElementVNode"])("img",{class:"w-75 shadow br-20",src:r.a,alt:""})],-1)})),k={class:"order-1 order-md-2 col-12 col-md-6 flex-column d-flex justify-content-center align-item-center text-center px-5 align-items-md-start text-md-start"},P={class:"display-4 fw-normal",style:{"font-size":"36px"}},S={class:"py-4 lh-base fw-normal",style:{"font-size":"18px"}};function C(e,t,s,n,c,a){var r=Object(o["resolveComponent"])("Header"),i=Object(o["resolveComponent"])("Footer");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",d,[Object(o["createVNode"])(r),Object(o["createElementVNode"])("div",l,b,512),Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("h1",j,Object(o["toDisplayString"])(e.t("ProductPage.UnifiedReportingDashboard")),1),Object(o["createElementVNode"])("h4",g,Object(o["toDisplayString"])(e.t("ProductPage.AllTransactionsAreConsolidated")),1)]),Object(o["createElementVNode"])("div",O,[Object(o["createVNode"])(o["TransitionGroup"],{name:"fadeRight",tag:"div"},{default:Object(o["withCtx"])((function(){return[e.s3_dashboard?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",v,E)):Object(o["createCommentVNode"])("",!0)]})),_:1})])])]),y,Object(o["createElementVNode"])("div",N,[Object(o["createElementVNode"])("div",V,[x,Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("h1",P,Object(o["toDisplayString"])(e.t("ProductPage.EliminateFrictionAtCheckout")),1),Object(o["createElementVNode"])("h4",S,Object(o["toDisplayString"])(e.t("ProductPage.CustomersCanMakePayments")),1)])])])]),Object(o["createVNode"])(i)])}s("ac1f"),s("00b4");var A=s("fd2d"),B=s("0418"),D=s("47e2"),T=Object(o["defineComponent"])({components:{Header:B["a"],Footer:A["a"]},props:{sentinalName:{type:String,required:!0}},name:"DashboardPage",setup:function(){var e=Object(D["b"])(),t=e.t,s=e.locale;return{t:t,locale:s}},data:function(){return{s1_mastercard:!1,s1_visa:!1,s1_jcb:!1,s2_firstchoice:!1,s2_ktc:!1,s2_krungsri:!1,s3_dashboard:!1,scrollPosition:0,bottomScroll:!1}},methods:{s1AnimationToggle:function(){this.s1_mastercard=!this.s1_mastercard,this.s1_visa=!this.s1_visa,this.s1_jcb=!this.s1_jcb},s2AnimationToggle:function(){this.s2_firstchoice=!this.s2_firstchoice,this.s2_ktc=!this.s2_ktc,this.s2_krungsri=!this.s2_krungsri},updateScroll:function(){var e=this.$refs.s3;if(null!=e&&void 0!=e){var t=e.getBoundingClientRect().top-this.scrollPosition;this.scrollPosition=window.scrollY,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(t<-320&&(this.s3_dashboard||(this.s3_dashboard=!0)),t>-280&&this.s3_dashboard&&(this.s3_dashboard=!this.s3_dashboard),t<-900&&(this.s3_dashboard=!this.s3_dashboard)):(t<-1&&(this.s3_dashboard||(this.s3_dashboard=!0)),t<-1370&&this.s3_dashboard&&(this.s3_dashboard=!this.s3_dashboard))}}},mounted:function(){this.s1AnimationToggle(),window.addEventListener("scroll",this.updateScroll)},destroy:function(){window.removeEventListener("scroll",this.updateScroll)}}),z=(s("46cc"),s("6b0d")),I=s.n(z);const q=I()(T,[["render",C],["__scopeId","data-v-3815c756"]]);t["default"]=q},"46cc":function(e,t,s){"use strict";s("627a")},"627a":function(e,t,s){},"67e5":function(e,t,s){e.exports=s.p+"img/dashboard.31a69a9b.png"},e5dc:function(e,t,s){e.exports=s.p+"img/steps.a98fc5ea.png"}}]);
//# sourceMappingURL=chunk-240d8f50.6696f6cd.js.map