import{v as e,x as o,A as l,U as a,c9 as n,bX as t,b8 as s,r as u,cK as c,c as r,K as d,cL as i,J as p,a2 as f,o as y,G as v,cM as m,an as C,I as b}from"./index.DMBpWXpT.js";import{i as B}from"./isUndefined.DgmxjSXK.js";const g=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),x={close:()=>!0},D=e({...g,appendToBody:Boolean,appendTo:{type:l(String),default:"body"},beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),S={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{var l;const n=v().emit,{nextZIndex:g}=t();let x="";const D=s(),S=s(),F=u(!1),I=u(!1),A=u(!1),h=u(null!=(l=e.zIndex)?l:g());let O,w;const k=c("namespace",m),L=r((()=>{const o={},l=`--${k.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=d(e.width))),o})),z=r((()=>e.alignCenter?{display:"flex"}:{}));function M(){null==w||w(),null==O||O(),e.openDelay&&e.openDelay>0?({stop:O}=C((()=>P()),e.openDelay)):P()}function N(){null==O||O(),null==w||w(),e.closeDelay&&e.closeDelay>0?({stop:w}=C((()=>T()),e.closeDelay)):T()}function E(){e.beforeClose?e.beforeClose((function(e){e||(I.value=!0,F.value=!1)})):N()}function P(){b&&(F.value=!0)}function T(){F.value=!1}return e.lockScroll&&i(F),p((()=>e.modelValue),(l=>{l?(I.value=!1,M(),A.value=!0,h.value=B(e.zIndex)?g():h.value++,f((()=>{n("open"),o.value&&(o.value.scrollTop=0)}))):F.value&&N()})),p((()=>e.fullscreen),(e=>{o.value&&(e?(x=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=x)})),y((()=>{e.modelValue&&(F.value=!0,A.value=!0,M())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(a,!1),e.destroyOnClose&&(A.value=!1)},beforeLeave:function(){n("close")},handleClose:E,onModalClick:function(){e.closeOnClickModal&&E()},close:N,doClose:T,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&E()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:D,bodyId:S,closed:I,style:L,overlayDialogStyle:z,rendered:A,visible:F,zIndex:h}};export{S as a,g as b,x as c,D as d,F as u};
