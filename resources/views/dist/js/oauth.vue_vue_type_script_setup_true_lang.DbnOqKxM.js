import{d as e,a0 as a,o as l,e as o,h as t,l as s,w as d,g as m,a7 as r,dL as u,aY as c,dM as n,a5 as p,a6 as f}from"./index.DMBpWXpT.js";import{E as i,a as g}from"./el-tab-pane.Dc62g1GH.js";import{a as w,E as V}from"./el-form.DUR-mZNt.js";import"./el-form-item.l0sNRNKZ.js";import{E as _}from"./el-switch.BvIaL9AI.js";const b=e({__name:"oauth",setup(e){const b=a({authType:"企业微信认证(内部应用)",wecomeCfg:{agentId:"",corpid:"",enable:!1,secert:""}});return l((()=>{(async()=>{const e=await n({});0==e.code?b.wecomeCfg=e.data["企业微信认证(内部应用)"]:c.error({message:e.msg,type:"error"})})()})),(e,a)=>{const l=_,n=w,y=p,C=f,h=V,j=i,x=g;return o(),t("div",null,[s(x,{modelValue:m(b).authType,"onUpdate:modelValue":a[5]||(a[5]=e=>m(b).authType=e)},{default:d((()=>[s(j,{label:"企业微信认证(内部应用)",name:"企业微信认证(内部应用)"},{default:d((()=>[s(h,{"label-width":"200px","label-position":"left"},{default:d((()=>[s(n,{label:"启用企业微信认证:"},{default:d((()=>[s(l,{modelValue:m(b).wecomeCfg.enable,"onUpdate:modelValue":a[0]||(a[0]=e=>m(b).wecomeCfg.enable=e),"active-text":"开启","inactive-text":"不开启"},null,8,["modelValue"])])),_:1}),s(n,{label:"corpid:"},{default:d((()=>[s(y,{modelValue:m(b).wecomeCfg.corpid,"onUpdate:modelValue":a[1]||(a[1]=e=>m(b).wecomeCfg.corpid=e)},null,8,["modelValue"])])),_:1}),s(n,{label:"agentId:"},{default:d((()=>[s(y,{modelValue:m(b).wecomeCfg.agentId,"onUpdate:modelValue":a[2]||(a[2]=e=>m(b).wecomeCfg.agentId=e)},null,8,["modelValue"])])),_:1}),s(n,{label:"secert:"},{default:d((()=>[s(y,{type:"password","show-password":"",modelValue:m(b).wecomeCfg.secert,"onUpdate:modelValue":a[3]||(a[3]=e=>m(b).wecomeCfg.secert=e)},null,8,["modelValue"])])),_:1}),s(n,{label:""},{default:d((()=>[s(C,{onClick:a[4]||(a[4]=e=>(async e=>{const a=await u(e);0==a.code?c.success({message:a.msg,type:"success"}):c.error({message:a.msg,type:"error"})})({application_name:m(b).authType,config:m(b).wecomeCfg})),type:"primary"},{default:d((()=>[r("提交")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}});export{b as _};
