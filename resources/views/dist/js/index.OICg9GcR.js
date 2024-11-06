import{d as s,at as e,r as t,o,dG as _,au as a,e as l,h as i,l as n,w as c,g as r,aB as p,f as m,D as u,n as E,C as v,S as d,V as g,c6 as V,E as f,a5 as j,bO as L}from"./index.DMBpWXpT.js";import{E as I}from"./el-popper.Cb3Eus9m.js";import{E as O}from"./el-popover.OX4vypnS.js";import{E as R,a as A}from"./el-tab-pane.Dc62g1GH.js";import{E as D}from"./el-scrollbar.BJ_tYB1D.js";import"./el-tooltip.l0sNRNKZ.js";import{_ as T}from"./index.DBfl569D.js";import{_ as P}from"./_plugin-vue_export-helper.BCo6x5W8.js";const h={class:"icon-container"},b=["onClick"],k={class:"icon-container"},w=["onClick"],y=P(s({__name:"index",props:{modelValue:{type:String,require:!1,default:""},width:{type:String,require:!1,default:"500px"}},emits:["update:modelValue"],setup(s,{emit:P}){const y=P,C=e(s,"modelValue"),x=t(),S=t(),U=t("svg"),$=t(""),q=t(!1),z=[],G=t([]),K=Object.keys(L),W=t([]);function B(s){U.value=s.name,J()}function J(){"svg"===U.value?G.value=$.value?z.filter((s=>s.toLowerCase().includes($.value.toLowerCase()))):z:W.value=$.value?K.filter((s=>s.toLowerCase().includes($.value.toLowerCase()))):K}function M(s){"element"===U.value&&(s="el-icon-"+s),y("update:modelValue",s),q.value=!1}return o((()=>{!function(){const s=Object.assign({"../../assets/icons/api.svg":()=>V((()=>import("./api.B2FJMEEY.js")),[]),"../../assets/icons/backtop.svg":()=>V((()=>import("./backtop.C5bGCvZX.js")),[]),"../../assets/icons/captcha.svg":()=>V((()=>import("./captcha.KixZeTLs.js")),[]),"../../assets/icons/cascader.svg":()=>V((()=>import("./cascader.Bxy7lIuJ.js")),[]),"../../assets/icons/client.svg":()=>V((()=>import("./client.fwafuIJ_.js")),[]),"../../assets/icons/close.svg":()=>V((()=>import("./close.3A3CTE27.js")),[]),"../../assets/icons/close_all.svg":()=>V((()=>import("./close_all.CpAPdWg9.js")),[]),"../../assets/icons/close_left.svg":()=>V((()=>import("./close_left.FPCWsnfT.js")),[]),"../../assets/icons/close_other.svg":()=>V((()=>import("./close_other.CtMgS35C.js")),[]),"../../assets/icons/close_right.svg":()=>V((()=>import("./close_right.WYLOaSAD.js")),[]),"../../assets/icons/collapse.svg":()=>V((()=>import("./collapse.ROHmwAah.js")),[]),"../../assets/icons/dict.svg":()=>V((()=>import("./dict.BlxtrVRf.js")),[]),"../../assets/icons/document.svg":()=>V((()=>import("./document.DqID0E9P.js")),[]),"../../assets/icons/download.svg":()=>V((()=>import("./download.BcBrriOr.js")),[]),"../../assets/icons/fullscreen-exit.svg":()=>V((()=>import("./fullscreen-exit.DXwCcaMo.js")),[]),"../../assets/icons/fullscreen.svg":()=>V((()=>import("./fullscreen.dczNRBeD.js")),[]),"../../assets/icons/github.svg":()=>V((()=>import("./github.DLO2QQQy.js")),[]),"../../assets/icons/homepage.svg":()=>V((()=>import("./homepage.BcyYp1IG.js")),[]),"../../assets/icons/ip.svg":()=>V((()=>import("./ip.NBim6PQ8.js")),[]),"../../assets/icons/language.svg":()=>V((()=>import("./language.k0ZPy50U.js")),[]),"../../assets/icons/menu.svg":()=>V((()=>import("./menu.CSAxtYMZ.js")),[]),"../../assets/icons/message.svg":()=>V((()=>import("./message.CTraJOIE.js")),[]),"../../assets/icons/monitor.svg":()=>V((()=>import("./monitor.Cm5WDh5_.js")),[]),"../../assets/icons/project.svg":()=>V((()=>import("./project.CAkqf0A3.js")),[]),"../../assets/icons/pv.svg":()=>V((()=>import("./pv.oj4_s-Zv.js")),[]),"../../assets/icons/refresh.svg":()=>V((()=>import("./refresh.B5ExwFoE.js")),[]),"../../assets/icons/role.svg":()=>V((()=>import("./role.DDpGZwDf.js")),[]),"../../assets/icons/setting.svg":()=>V((()=>import("./setting.CfydkD5J.js")),[]),"../../assets/icons/size.svg":()=>V((()=>import("./size.C48ZYpz_.js")),[]),"../../assets/icons/system.svg":()=>V((()=>import("./system.BjyKXCM4.js")),[]),"../../assets/icons/table.svg":()=>V((()=>import("./table.C6Xt0YCE.js")),[]),"../../assets/icons/todo.svg":()=>V((()=>import("./todo.C6Ti5UL0.js")),[]),"../../assets/icons/tree.svg":()=>V((()=>import("./tree.ByH7Oq4A.js")),[]),"../../assets/icons/user.svg":()=>V((()=>import("./user.rrOxQVjB.js")),[]),"../../assets/icons/uv.svg":()=>V((()=>import("./uv.DYcf65LN.js")),[])});for(const e in s){const s=e.replace(/.*\/(.*)\.svg$/,"$1");z.push(s)}G.value=z}()})),_(x,(()=>q.value=!1),{ignore:[S]}),(e,t)=>{const o=f,_=T,V=a("ArrowDown"),L=j,P=I,y=D,z=R,K=A,N=O;return l(),i("div",{ref_key:"iconSelectRef",ref:x,style:E("width:"+s.width)},[n(N,{visible:r(q),width:s.width,placement:"bottom-end"},{reference:c((()=>[n(L,{class:"reference",modelValue:r(C),"onUpdate:modelValue":t[1]||(t[1]=s=>p(C)?C.value=s:null),readonly:"",placeholder:"点击选择图标",onClick:t[2]||(t[2]=s=>q.value=!r(q))},{prepend:c((()=>[r(C)&&r(C).startsWith("el-icon-")?(l(),m(o,{key:0},{default:c((()=>[(l(),m(u(r(C).replace("el-icon-",""))))])),_:1})):(l(),m(_,{key:1,"icon-class":r(C)},null,8,["icon-class"]))])),suffix:c((()=>[n(o,{style:E({transform:r(q)?"rotate(180deg)":"rotate(0)",transition:"transform .5s"}),onClick:t[0]||(t[0]=s=>q.value=!r(q))},{default:c((()=>[n(V)])),_:1},8,["style"])])),_:1},8,["modelValue"])])),default:c((()=>[v("div",{ref_key:"popoverContentRef",ref:S},[n(L,{modelValue:r($),"onUpdate:modelValue":t[3]||(t[3]=s=>p($)?$.value=s:null),placeholder:"搜索图标",clearable:"",onInput:J},null,8,["modelValue"]),n(K,{modelValue:r(U),"onUpdate:modelValue":t[4]||(t[4]=s=>p(U)?U.value=s:null),onTabClick:B},{default:c((()=>[n(z,{label:"SVG 图标",name:"svg"},{default:c((()=>[n(y,{height:"300px"},{default:c((()=>[v("ul",h,[(l(!0),i(d,null,g(r(G),(s=>(l(),i("li",{key:"svg-"+s,class:"icon-item",onClick:e=>M(s)},[n(P,{content:s,placement:"bottom",effect:"light"},{default:c((()=>[n(_,{"icon-class":s},null,8,["icon-class"])])),_:2},1032,["content"])],8,b)))),128))])])),_:1})])),_:1}),n(z,{label:"Element 图标",name:"element"},{default:c((()=>[n(y,{height:"300px"},{default:c((()=>[v("ul",k,[(l(!0),i(d,null,g(r(W),(s=>(l(),i("li",{key:s,class:"icon-item",onClick:e=>M(s)},[n(o,null,{default:c((()=>[(l(),m(u(s)))])),_:2},1024)],8,w)))),128))])])),_:1})])),_:1})])),_:1},8,["modelValue"])],512)])),_:1},8,["visible","width"])],4)}}}),[["__scopeId","data-v-1d873f0c"]]);export{y as _};
