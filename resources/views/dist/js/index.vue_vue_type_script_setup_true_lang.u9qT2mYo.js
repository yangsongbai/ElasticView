import{d as e,au as t,e as o,f as a,w as s,k as l,l as n,n as c,aY as i,E as r,a6 as u}from"./index.DMBpWXpT.js";const p=e({name:"CopyButton",inheritAttrs:!1,__name:"index",props:{text:{type:String,default:""},style:{type:Object,default:()=>({})}},setup(e){const p=e;function y(){if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(p.text).then((()=>{i.success("Copy successfully")})).catch((e=>{i.warning("Copy failed"),console.log("[CopyButton] Copy failed",e)}));else{const t=document.createElement("input");t.style.position="absolute",t.style.left="-9999px",t.setAttribute("value",p.text),document.body.appendChild(t),t.select();try{document.execCommand("copy")?i.success("Copy successfully!"):i.warning("Copy failed!")}catch(e){i.error("Copy failed."),console.log("[CopyButton] Copy failed.",e)}finally{document.body.removeChild(t)}}}return(i,p)=>{const d=t("DocumentCopy"),f=r,C=u;return o(),a(C,{link:"",onClick:y,style:c(e.style)},{default:s((()=>[l(i.$slots,"default",{},(()=>[n(f,null,{default:s((()=>[n(d,{color:"var(--el-color-primary)"})])),_:1})]))])),_:3},8,["style"])}}});export{p as _};
