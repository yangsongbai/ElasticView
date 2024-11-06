import{d as e,r as l,J as a,au as t,e as s,h as o,l as i,w as r,C as u,p,g as n,aB as m,i as d,f as c,S as f,aY as g,E as h,a7 as v}from"./index.DMBpWXpT.js";import{E as y,a as _}from"./el-table-column.Dl1jn1Bd.js";import"./el-checkbox.8MJHthul.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.Cb3Eus9m.js";import"./el-scrollbar.BJ_tYB1D.js";/* empty css               */import{a as j,E as b}from"./el-form.DUR-mZNt.js";import"./el-form-item.l0sNRNKZ.js";import{E as w}from"./el-link.7KZopgR8.js";import{E as N}from"./el-image-viewer.CSeiPfXQ.js";import{E as x}from"./el-progress.BF08Xthz.js";import{_ as B}from"./plus.BhbEy4-l.js";import{F as k}from"./file.CkIRLx9T.js";import{_ as U}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./index.CP01f_MK.js";import"./_Uint8Array.BEOPqGcx.js";import"./isEqual.B61-3bNT.js";import"./debounce.l44evi-0.js";import"./isUndefined.DgmxjSXK.js";import"./castArray.arHVDzqw.js";const E=["src"],S={class:"el-upload-list__item-actions"},C=["onClick"],I=["onClick"],M=U(e({__name:"ImageUpload",props:{modelValue:{type:Array,default:()=>[]},limit:{type:Number,default:10},showDelBtn:{type:Boolean,default:!0},showUploadBtn:{type:Boolean,default:!0},uploadMaxSize:{type:Number,default:2097152},accept:{type:String,default:"image/*"}},emits:["update:modelValue"],setup(e,{emit:v}){const y=v,_=e,j=l(!1),b=l(0),w=l([]),U=l([]);async function M(e){const l=await k.upload(e.file),a=w.value.findIndex((l=>l.uid==e.file.uid));w.value.splice(a,1,{name:l.name,url:l.url}),y("update:modelValue",w.value.map((e=>e.url)))}function V(e){const l=e.url;l&&k.deleteByPath(l).then((()=>{y("update:modelValue",w.value.map((e=>e.url)))}))}function z(e){return!(e.size>_.uploadMaxSize)||(g.warning("上传图片不能大于"+_.uploadMaxSize/1024/1024+"M"),!1)}a((()=>_.modelValue),(e=>{const l=w.value.map((e=>e.url));l.length>0&&l.length===e.length&&l.every((l=>e.some((e=>e===l))))&&e.every((e=>l.some((l=>l===e))))||(e.length<=0?w.value=[]:w.value=e.map((e=>({url:e}))))}),{immediate:!0});const q=()=>{j.value=!1};return(e,l)=>{const a=B,g=t("zoom-in"),v=h,y=t("Delete"),k=x,D=N;return s(),o(f,null,[i(k,{"file-list":n(w),"onUpdate:fileList":l[0]||(l[0]=e=>m(w)?w.value=e:null),"list-type":"picture-card",class:d(n(w).length>=_.limit||!_.showUploadBtn?"hide":"show"),"before-upload":z,"http-request":M,"on-remove":V,accept:_.accept,limit:_.limit},{file:r((({file:e})=>[u("div",null,[u("img",{class:"el-upload-list__item-thumbnail",src:e.url,alt:""},null,8,E),u("span",S,[u("span",{class:"el-upload-list__item-preview",onClick:l=>{return a=e,U.value=w.value.map((e=>e.url)),b.value=w.value.findIndex((e=>e.url===a.url)),void(j.value=!0);var a}},[i(v,null,{default:r((()=>[i(g)])),_:1})],8,C),_.showDelBtn?(s(),o("span",{key:0,class:"el-upload-list__item-delete",onClick:l=>V(e)},[i(v,null,{default:r((()=>[i(y)])),_:1})],8,I)):p("",!0)])])])),default:r((()=>[i(a)])),_:1},8,["file-list","class","accept","limit"]),n(j)?(s(),c(D,{key:0,"zoom-rate":1.2,onClose:q,initialIndex:n(b),"url-list":n(U)},null,8,["initialIndex","url-list"])):p("",!0)],64)}}}),[["__scopeId","data-v-6362baf4"]]),V={class:"app-container"},z=e({__name:"upload",setup(e){l("");const a=l(["https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg","https://s2.loli.net/2023/05/24/RuHFMwW4rG5lIqs.jpg","https://s2.loli.net/2023/05/24/ZPiGbcpR91WqInB.jpg","https://s2.loli.net/2023/05/24/e1bcnEq3MFdmlNL.jpg","https://s2.loli.net/2023/05/24/wZTSPj1yDQNcuhU.jpg"]),t=[{argsName:"v-model",type:"Arrays",default:"[]",desc:"已经上传的图片数组"},{argsName:"limit",type:"Number",default:10,desc:"上传最大的图片数量"},{argsName:"showDelBtn",type:"Boolean",default:!0,desc:"是否显示删除按钮"},{argsName:"showUploadBtn",type:"Boolean",default:!0,desc:"是否显示上传按钮"},{argsName:"accept",type:"String",default:"image/*",desc:"上传文件类型"},{argsName:"uploadMaxSize",type:"Number",default:"2 * 1024 * 1024",desc:"单个图片上传大小限制(单位byte)"}];return(e,l)=>{const u=w,p=j,d=b,c=y,f=_;return s(),o("div",V,[i(u,{href:"https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/upload.vue",type:"primary",target:"_blank",class:"mb-10"},{default:r((()=>[v(" 示例源码 请点击>>>> ")])),_:1}),i(d,null,{default:r((()=>[i(p,{label:"图片上传"},{default:r((()=>[i(M,{modelValue:n(a),"onUpdate:modelValue":l[0]||(l[0]=e=>m(a)?a.value=e:null)},null,8,["modelValue"])])),_:1})])),_:1}),i(d,null,{default:r((()=>[i(p,{label:"参数说明"},{default:r((()=>[i(f,{data:t,border:""},{default:r((()=>[i(c,{prop:"argsName",label:"参数名称",width:"300"}),i(c,{prop:"type",label:"参数类型",width:"200"}),i(c,{prop:"default",label:"默认值",width:"200"}),i(c,{prop:"desc",label:"描述",width:"300"})])),_:1})])),_:1})])),_:1})])}}});export{z as default};
