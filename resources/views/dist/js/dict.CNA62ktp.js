import{bC as t}from"./index.DMBpWXpT.js";const e="/api/v1/dict";class r{static getPage(r){return t({url:`${e}/page`,method:"get",params:r})}static getFormData(r){return t({url:`${e}/${r}/form`,method:"get"})}static add(r){return t({url:`${e}`,method:"post",data:r})}static update(r,a){return t({url:`${e}/${r}`,method:"put",data:a})}static deleteByIds(r){return t({url:`${e}/${r}`,method:"delete"})}static getOptions(r){return t({url:`${e}/${r}/options`,method:"get"})}}export{r as D};
