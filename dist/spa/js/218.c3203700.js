"use strict";(globalThis["webpackChunkmisland"]=globalThis["webpackChunkmisland"]||[]).push([[218],{18218:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var a=t(59835),l=t(61957),o=t(86970);const i={class:"q-pa-md login-card absolute-center",style:{"max-width":"100%"}},d={class:"text-center text-primary",style:{height:"fit-content"}},n={class:"q-px-md q-my-none q-pb-xs",style:{"font-weight":"700","font-size":"21px"}},r={class:"text-primary q-py-xs q-px-md q-mt-lg"},u={class:"col q-gutter-md text-center q-ma-none"};function p(e,s,t,p,c,m){const w=(0,a.up)("q-icon"),f=(0,a.up)("q-input"),y=(0,a.up)("q-btn"),b=(0,a.up)("q-form"),h=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(h,{padding:"",class:"page-tint bg-white"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(b,{onSubmit:s[4]||(s[4]=(0,l.iM)((()=>{}),["prevent"]))},{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a._)("h6",n,(0,o.zw)(e.$t("updatePassword")),1)]),(0,a._)("div",r,[(0,a._)("div",null,[(0,a.Wm)(f,{type:e.isPwd?"password":"text",rounded:"",outlined:"",dense:"",modelValue:e.form.password,"onUpdate:modelValue":s[1]||(s[1]=s=>e.form.password=s),label:e.$t("newPassword"),"lazy-rules":"",rules:[e=>e&&e.length>0||"Field is required *"]},{append:(0,a.w5)((()=>[(0,a.Wm)(w,{size:"xs",name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[0]||(s[0]=s=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["type","modelValue","label","rules"])]),(0,a._)("div",null,[(0,a.Wm)(f,{type:e.isPwd?"password":"text",rounded:"",outlined:"",dense:"",modelValue:e.confirmedpassword,"onUpdate:modelValue":s[3]||(s[3]=s=>e.confirmedpassword=s),label:e.$t("confirmPassword"),"lazy-rules":"",rules:[e=>e&&e.length>0||"Field is required *",s=>s===e.form.password||"passwords should match"]},{append:(0,a.w5)((()=>[(0,a.Wm)(w,{size:"xs",name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[2]||(s[2]=s=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["type","modelValue","label","rules"])])]),(0,a._)("div",u,[(0,a.Wm)(y,{style:{"font-weight":"400","font-size":"16px"},"no-caps":"",type:"submit",class:"q-px-xl",unelevated:"",rounded:"",color:"primary",label:e.$t("submit"),onClick:e.updatePassword},null,8,["label","onClick"])])])),_:1})])])),_:1})}t(69665);var c=t(60499),m=t(6363),w=t(48957),f=t(28339);const y=(0,a.aZ)({setup(){const e=(0,f.tv)(),{register:s,updateUserPassword:t}=(0,m.Z)(),{notifyError:a,notifySuccess:l}=(0,w.Z)(),o=(0,c.iH)(""),i=(0,c.iH)({password:""}),d=async()=>{if(o.value===i.value.password)try{await t(i.value.password),l("Success"),e.push({name:"home"})}catch(s){a(s.message)}else a("Your passwords do not match")};return{form:i,confirmedpassword:o,updatePassword:d,isPwd:(0,c.iH)(!0)}}});var b=t(11639),h=t(69885),v=t(8326),g=t(90136),q=t(68879),x=t(66611),P=t(22857),_=t(62146),Z=t(69984),k=t.n(Z);const z=(0,b.Z)(y,[["render",p]]),C=z;k()(y,"components",{QPage:h.Z,QForm:v.Z,QSpace:g.Z,QBtn:q.Z,QInput:x.Z,QIcon:P.Z}),k()(y,"directives",{ClosePopup:_.Z})}}]);