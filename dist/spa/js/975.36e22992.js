"use strict";(globalThis["webpackChunkmisland"]=globalThis["webpackChunkmisland"]||[]).push([[975],{4975:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var l=s(9835),a=s(1957),n=s(6970);const o={class:"q-pa-md login-card absolute-center",style:{"max-width":"100%","border-radius":"15px"}},i={class:"text-center text-primary q-my-xl",style:{height:"fit-content"}},r={class:"q-px-md q-my-none q-pb-xs",style:{"font-weight":"700","font-size":"21px"}},d={class:"col text-primary q-gutter-xl q-py-xs q-px-md"},m={class:"q-mt-none q-mb-xs text-grey",style:{"font-size":"16px","font-weight":"400"}},p={class:"col q-gutter-md text-center q-ma-none q-my-lg"},u={class:"q-mt-sm q-mb-xs text-grey",style:{"font-size":"16px","font-weight":"400"}};function c(e,t,s,c,g,x){const f=(0,l.up)("q-input"),q=(0,l.up)("q-btn"),y=(0,l.up)("q-form"),b=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(b,{padding:"",class:"page-tint bg-white",id:"hero"},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.Wm)(y,{onSubmit:t[1]||(t[1]=(0,a.iM)((()=>{}),["prevent"]))},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("h6",r,(0,n.zw)(e.$t("passwordReset")),1)]),(0,l._)("div",d,[(0,l._)("div",null,[(0,l.Wm)(f,{rounded:"",outlined:"",dense:"",modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.email=t),label:e.$t("emailAddress"),"lazy-rules":"",rules:[e=>e&&e.length>0||"Field is required *"]},null,8,["modelValue","label","rules"])]),(0,l._)("p",m,[(0,l.Wm)(q,{style:{"font-size":"16px","font-weight":"700px"},class:"q-px-xs",flat:"",dense:"","no-caps":"",color:"primary",label:e.$t("backtologin"),to:"/login"},null,8,["label"])])]),(0,l._)("div",p,[(0,l.Wm)(q,{style:{"font-size":"16px","font-weight":"700"},type:"submit",class:"q-mt-none q-px-xl q-mb-lg",unelevated:"",dense:"","no-caps":"",rounded:"",color:"primary",label:e.$t("submit"),onClick:e.handlePasswordResset},null,8,["label","onClick"]),(0,l._)("p",u,[(0,l.Uk)((0,n.zw)(e.$t("dontHaveAnAccount"))+" ",1),(0,l.Wm)(q,{style:{"font-size":"16px","font-weight":"700px"},class:"q-px-xs",flat:"",dense:"","no-caps":"",color:"primary",label:e.$t("signup"),to:"/register"},null,8,["label"])])])])),_:1})])])),_:1})}s(9665);var g=s(499),x=s(6363),f=s(8957),q=s(8339);const y=(0,l.aZ)({setup(){const e=(0,q.tv)(),{login:t,isLoggedIn:s,sendPasswordRestEmail:l}=(0,x.Z)(),{notifyError:a,notifySuccess:n}=(0,f.Z)(),o=(0,g.iH)({email:""}),i=async()=>{console.log("email",o.value.email);try{await l(o.value.email),n("Password reset email sent!"),e.push({name:"reset-password-confirmation",query:{email:o.value.email}})}catch(t){a(t.message)}};return{form:o,handlePasswordResset:i,isPwd:(0,g.iH)(!0)}}});var b=s(1639),w=s(9885),h=s(8326),v=s(136),Z=s(8879),_=s(6611),z=s(2146),k=s(9984),P=s.n(k);const $=(0,b.Z)(y,[["render",c]]),C=$;P()(y,"components",{QPage:w.Z,QForm:h.Z,QSpace:v.Z,QBtn:Z.Z,QInput:_.Z}),P()(y,"directives",{ClosePopup:z.Z})}}]);