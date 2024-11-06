import{d as e,b as t,e as d,f as n,w as o,k as a,a8 as s,cH as r,g as i,T as l,_ as c,Q as h,a0 as u,as as p,cI as f,B as g,am as y,z as v,r as k,ah as N,ag as C,E as x,bk as m,J as b,a2 as E,cJ as D,au as K,a3 as w,aa as S,h as A,C as T,D as B,i as L,j as O,p as $,l as _,n as H,S as q,V as I,G as M,bm as z,N as F,s as P,o as j,co as R,a as U,ad as J,x as Q,y as W,c as G,ci as V,F as Y}from"./index.DMBpWXpT.js";import{s as X}from"./token.DWNpOE8r.js";import{E as Z}from"./el-checkbox.8MJHthul.js";const ee=e({name:"ElCollapseTransition"});var te=c(e({...ee,setup(e){const c=t("collapse-transition"),h=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},u={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){requestAnimationFrame((()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:0!==e.scrollHeight?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"}))},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){h(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){h(e)},leaveCancelled(e){h(e)}};return(e,t)=>(d(),n(l,s({name:i(c).b()},r(u)),{default:o((()=>[a(e.$slots,"default")])),_:3},16,["name"]))}}),[["__file","collapse-transition.vue"]]);te.install=e=>{e.component(te.name,te)};const de=te,ne="$treeNodeId",oe=function(e,t){t&&!t[ne]&&Object.defineProperty(t,ne,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},ae=function(e,t){return e?t[e]:t[ne]},se=(e,t,d)=>{const n=e.value.currentNode;d();const o=e.value.currentNode;n!==o&&t("current-change",o?o.data:null,o)},re=e=>{let t=!0,d=!0,n=!0;for(let o=0,a=e.length;o<a;o++){const a=e[o];(!0!==a.checked||a.indeterminate)&&(t=!1,a.disabled||(n=!1)),(!1!==a.checked||a.indeterminate)&&(d=!1)}return{all:t,none:d,allWithoutDisable:n,half:!t&&!d}},ie=function(e){if(0===e.childNodes.length||e.loading)return;const{all:t,none:d,half:n}=re(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):n?(e.checked=!1,e.indeterminate=!0):d&&(e.checked=!1,e.indeterminate=!1);const o=e.parent;o&&0!==o.level&&(e.store.checkStrictly||ie(o))},le=function(e,t){const d=e.store.props,n=e.data||{},o=d[t];if("function"==typeof o)return o(n,e);if("string"==typeof o)return n[o];if(void 0===o){const e=n[t];return void 0===e?"":e}};let ce=0;class he{constructor(e){this.id=ce++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const t in e)h(e,t)&&(this[t]=e[t]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const t=e.props;if(t&&void 0!==t.isLeaf){const e=le(this,"isLeaf");"boolean"==typeof e&&(this.isLeafByUser=e)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||oe(this,this.data),!this.data)return;const d=e.defaultExpandedKeys,n=e.key;n&&d&&d.includes(this.key)&&this.expand(null,e.autoExpandParent),n&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}setData(e){let t;Array.isArray(e)||oe(this,e),this.data=e,this.childNodes=[],t=0===this.level&&Array.isArray(this.data)?this.data:le(this,"children")||[];for(let d=0,n=t.length;d<n;d++)this.insertChild({data:t[d]})}get label(){return le(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return le(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){return(this.childNodes||[]).some((d=>d===e||t&&d.contains(e)))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,t,d){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof he)){if(!d){const d=this.getChildren(!0);d.includes(e.data)||(void 0===t||t<0?d.push(e.data):d.splice(t,0,e.data))}Object.assign(e,{parent:this,store:this.store}),(e=u(new he(e)))instanceof he&&e.initialize()}e.level=this.level+1,void 0===t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),this.updateLeafState()}insertBefore(e,t){let d;t&&(d=this.childNodes.indexOf(t)),this.insertChild(e,d)}insertAfter(e,t){let d;t&&(d=this.childNodes.indexOf(t),-1!==d&&(d+=1)),this.insertChild(e,d)}removeChild(e){const t=this.getChildren()||[],d=t.indexOf(e.data);d>-1&&t.splice(d,1);const n=this.childNodes.indexOf(e);n>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(n,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let d=0;d<this.childNodes.length;d++)if(this.childNodes[d].data===e){t=this.childNodes[d];break}t&&this.removeChild(t)}expand(e,t){const d=()=>{if(t){let e=this.parent;for(;e.level>0;)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e(),this.childNodes.forEach((e=>{e.canFocus=!0}))};this.shouldLoadData()?this.loadData((e=>{Array.isArray(e)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||ie(this),d())})):d()}doCreateChildren(e,t={}){e.forEach((e=>{this.insertChild(Object.assign({data:e},t),void 0,!0)}))}collapse(){this.expanded=!1,this.childNodes.forEach((e=>{e.canFocus=!1}))}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&void 0!==this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,d,n){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){const{all:d,allWithoutDisable:o}=re(this.childNodes);this.isLeaf||d||!o||(this.checked=!1,e=!1);const a=()=>{if(t){const d=this.childNodes;for(let s=0,r=d.length;s<r;s++){const o=d[s];n=n||!1!==e;const a=o.disabled?o.checked:n;o.setChecked(a,t,!0,n)}const{half:o,all:a}=re(d);a||(this.checked=a,this.indeterminate=o)}};if(this.shouldLoadData())return void this.loadData((()=>{a(),ie(this)}),{checked:!1!==e});a()}const o=this.parent;o&&0!==o.level&&(d||ie(o))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const d=this.store.props;let n="children";return d&&(n=d.children||"children"),void 0===t[n]&&(t[n]=null),e&&!t[n]&&(t[n]=[]),t[n]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map((e=>e.data)),d={},n=[];e.forEach(((e,o)=>{const a=e[ne];!!a&&t.findIndex((e=>e[ne]===a))>=0?d[a]={index:o,data:e}:n.push({index:o,data:e})})),this.store.lazy||t.forEach((e=>{d[e[ne]]||this.removeChildByData(e)})),n.forEach((({index:e,data:t})=>{this.insertChild({data:t},e)})),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const d=d=>{this.childNodes=[],this.doCreateChildren(d,t),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,d)},n=()=>{this.loading=!1};this.store.load(this,d,n)}}eachNode(e){const t=[this];for(;t.length;){const d=t.shift();t.unshift(...d.childNodes),e(d)}}reInitChecked(){this.store.checkStrictly||ie(this)}}class ue{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const t in e)h(e,t)&&(this[t]=e[t]);this.nodesMap={}}initialize(){if(this.root=new he({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){(0,this.load)(this.root,(e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()}))}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,d=this.lazy,n=function(o){const a=o.root?o.root.childNodes:o.childNodes;if(a.forEach((d=>{d.visible=t.call(d,e,d.data,d),n(d)})),!o.visible&&a.length){let e=!0;e=!a.some((e=>e.visible)),o.root?o.root.visible=!1===e:o.visible=!1===e}e&&o.visible&&!o.isLeaf&&(d&&!o.loaded||o.expand())};n(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof he)return e;const t=p(e)?ae(this.key,e):e;return this.nodesMap[t]||null}insertBefore(e,t){const d=this.getNode(t);d.parent.insertBefore({data:e},d)}insertAfter(e,t){const d=this.getNode(t);d.parent.insertAfter({data:e},d)}remove(e){const t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}append(e,t){const d=f(t)?this.root:this.getNode(t);d&&d.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach((e=>{const d=t[e];d&&d.setChecked(!0,!this.checkStrictly)}))}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(e&&e.data)if(t){void 0!==e.key&&(this.nodesMap[e.key]=e)}else this.nodesMap[e.id]=e}deregisterNode(e){this.key&&e&&e.data&&(e.childNodes.forEach((e=>{this.deregisterNode(e)})),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1){const d=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach((o=>{(o.checked||t&&o.indeterminate)&&(!e||e&&o.isLeaf)&&d.push(o.data),n(o)}))};return n(this),d}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map((e=>(e||{})[this.key]))}getHalfCheckedNodes(){const e=[],t=function(d){(d.root?d.root.childNodes:d.childNodes).forEach((d=>{d.indeterminate&&e.push(d.data),t(d)}))};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map((e=>(e||{})[this.key]))}_getAllNodes(){const e=[],t=this.nodesMap;for(const d in t)h(t,d)&&e.push(t[d]);return e}updateChildren(e,t){const d=this.nodesMap[e];if(!d)return;const n=d.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];this.remove(e.data)}for(let o=0,a=t.length;o<a;o++){const e=t[o];this.append(e,d.data)}}_setCheckedKeys(e,t=!1,d){const n=this._getAllNodes().sort(((e,t)=>e.level-t.level)),o=Object.create(null),a=Object.keys(d);n.forEach((e=>e.setChecked(!1,!1)));const s=t=>{t.childNodes.forEach((t=>{var d;o[t.data[e]]=!0,(null==(d=t.childNodes)?void 0:d.length)&&s(t)}))};for(let r=0,i=n.length;r<i;r++){const d=n[r],i=d.data[e].toString();if(a.includes(i)){if(d.childNodes.length&&s(d),d.isLeaf||this.checkStrictly)d.setChecked(!0,!1);else if(d.setChecked(!0,!0),t){d.setChecked(!1,!1);const e=function(t){t.childNodes.forEach((t=>{t.isLeaf||t.setChecked(!1,!1),e(t)}))};e(d)}}else d.checked&&!o[i]&&d.setChecked(!1,!1)}}setCheckedNodes(e,t=!1){const d=this.key,n={};e.forEach((e=>{n[(e||{})[d]]=!0})),this._setCheckedKeys(d,t,n)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const d=this.key,n={};e.forEach((e=>{n[e]=!0})),this._setCheckedKeys(d,t,n)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach((e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)}))}setChecked(e,t,d){const n=this.getNode(e);n&&n.setChecked(!!t,d)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,t=!0){const d=e[this.key],n=this.nodesMap[d];this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,t=!0){if(null==e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);const d=this.getNode(e);d&&(this.setCurrentNode(d),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}var pe=c(e({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const d=t("tree"),n=g("NodeInstance"),o=g("RootTree");return()=>{const t=e.node,{data:s,store:r}=t;return e.renderContent?e.renderContent(y,{_self:n,node:t,data:s,store:r}):a(o.ctx.slots,"default",{node:t,data:s},(()=>[y("span",{class:d.be("node","label")},[t.label])]))}}}),[["__file","tree-node-content.vue"]]);function fe(e){const t=g("TreeNodeMap",null),d={treeNodeExpand:t=>{e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(d),v("TreeNodeMap",d),{broadcastExpanded:t=>{if(e.accordion)for(const e of d.children)e.treeNodeExpand(t)}}}const ge=Symbol("dragEvents");const ye=e({name:"ElTreeNode",components:{ElCollapseTransition:de,ElCheckbox:Z,NodeContent:pe,ElIcon:x,Loading:m},props:{node:{type:he,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,d){const n=t("tree"),{broadcastExpanded:o}=fe(e),a=g("RootTree"),s=k(!1),r=k(!1),i=k(null),l=k(null),c=k(null),h=g(ge),u=M();v("NodeInstance",u),e.node.expanded&&(s.value=!0,r.value=!0);const p=a.props.props.children||"children";b((()=>{const t=e.node.data[p];return t&&[...t]}),(()=>{e.node.updateChildren()})),b((()=>e.node.indeterminate),(t=>{f(e.node.checked,t)})),b((()=>e.node.checked),(t=>{f(t,e.node.indeterminate)})),b((()=>e.node.childNodes.length),(()=>e.node.reInitChecked())),b((()=>e.node.expanded),(e=>{E((()=>s.value=e)),e&&(r.value=!0)}));const f=(t,d)=>{i.value===t&&l.value===d||a.ctx.emit("check-change",e.node.data,t,d),i.value=t,l.value=d},y=()=>{e.node.isLeaf||(s.value?(a.ctx.emit("node-collapse",e.node.data,e.node,u),e.node.collapse()):(e.node.expand(),d.emit("node-expand",e.node.data,e.node,u)))},N=(t,d)=>{e.node.setChecked(d.target.checked,!a.props.checkStrictly),E((()=>{const t=a.store.value;a.ctx.emit("check",e.node.data,{checkedNodes:t.getCheckedNodes(),checkedKeys:t.getCheckedKeys(),halfCheckedNodes:t.getHalfCheckedNodes(),halfCheckedKeys:t.getHalfCheckedKeys()})}))};return{ns:n,node$:c,tree:a,expanded:s,childNodeRendered:r,oldChecked:i,oldIndeterminate:l,getNodeKey:e=>ae(a.props.nodeKey,e.data),getNodeClass:t=>{const d=e.props.class;if(!d)return{};let n;if(z(d)){const{data:e}=t;n=d(e,t)}else n=d;return F(n)?{[n]:!0}:n},handleSelectChange:f,handleClick:t=>{se(a.store,a.ctx.emit,(()=>a.store.value.setCurrentNode(e.node))),a.currentNode.value=e.node,a.props.expandOnClickNode&&y(),a.props.checkOnClickNode&&!e.node.disabled&&N(null,{target:{checked:!e.node.checked}}),a.ctx.emit("node-click",e.node.data,e.node,u,t)},handleContextMenu:t=>{a.instance.vnode.props.onNodeContextmenu&&(t.stopPropagation(),t.preventDefault()),a.ctx.emit("node-contextmenu",t,e.node.data,e.node,u)},handleExpandIconClick:y,handleCheckChange:N,handleChildNodeExpand:(e,t,d)=>{o(t),a.ctx.emit("node-expand",e,t,d)},handleDragStart:t=>{a.props.draggable&&h.treeNodeDragStart({event:t,treeNode:e})},handleDragOver:t=>{t.preventDefault(),a.props.draggable&&h.treeNodeDragOver({event:t,treeNode:{$el:c.value,node:e.node}})},handleDrop:e=>{e.preventDefault()},handleDragEnd:e=>{a.props.draggable&&h.treeNodeDragEnd(e)},CaretRight:D}}}),ve=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],ke=["aria-expanded"];var Ne=c(e({name:"ElTree",components:{ElTreeNode:c(ye,[["render",function(e,t,a,s,r,i){const l=K("el-icon"),c=K("el-checkbox"),h=K("loading"),u=K("node-content"),p=K("el-tree-node"),f=K("el-collapse-transition");return w((d(),A("div",{ref:"node$",class:L([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=O(((...t)=>e.handleClick&&e.handleClick(...t)),["stop"])),onContextmenu:t[2]||(t[2]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t)),onDragstart:t[3]||(t[3]=O(((...t)=>e.handleDragStart&&e.handleDragStart(...t)),["stop"])),onDragover:t[4]||(t[4]=O(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["stop"])),onDragend:t[5]||(t[5]=O(((...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),["stop"])),onDrop:t[6]||(t[6]=O(((...t)=>e.handleDrop&&e.handleDrop(...t)),["stop"]))},[T("div",{class:L(e.ns.be("node","content")),style:H({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?(d(),n(l,{key:0,class:L([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:O(e.handleExpandIconClick,["stop"])},{default:o((()=>[(d(),n(B(e.tree.props.icon||e.CaretRight)))])),_:1},8,["class","onClick"])):$("v-if",!0),e.showCheckbox?(d(),n(c,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=O((()=>{}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):$("v-if",!0),e.node.loading?(d(),n(l,{key:2,class:L([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:o((()=>[_(h)])),_:1},8,["class"])):$("v-if",!0),_(u,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),_(f,null,{default:o((()=>[!e.renderAfterExpand||e.childNodeRendered?w((d(),A("div",{key:0,class:L(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[(d(!0),A(q,null,I(e.node.childNodes,(t=>(d(),n(p,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])))),128))],10,ke)),[[S,e.expanded]]):$("v-if",!0)])),_:1})],42,ve)),[[S,e.node.visible]])}],["__file","tree-node.vue"]])},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Q}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,d){const{t:n}=W(),o=t("tree"),a=g(X,null),s=k(new ue({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));s.value.initialize();const r=k(s.value.root),i=k(null),l=k(null),c=k(null),{broadcastExpanded:h}=fe(e),{dragState:u}=function({props:e,ctx:d,el$:n,dropIndicator$:o,store:a}){const s=t("tree"),r=k({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return v(ge,{treeNodeDragStart:({event:t,treeNode:n})=>{if("function"==typeof e.allowDrag&&!e.allowDrag(n.node))return t.preventDefault(),!1;t.dataTransfer.effectAllowed="move";try{t.dataTransfer.setData("text/plain","")}catch(o){}r.value.draggingNode=n,d.emit("node-drag-start",n.node,t)},treeNodeDragOver:({event:t,treeNode:a})=>{const i=a,l=r.value.dropNode;l&&l.node.id!==i.node.id&&N(l.$el,s.is("drop-inner"));const c=r.value.draggingNode;if(!c||!i)return;let h=!0,u=!0,p=!0,f=!0;"function"==typeof e.allowDrop&&(h=e.allowDrop(c.node,i.node,"prev"),f=u=e.allowDrop(c.node,i.node,"inner"),p=e.allowDrop(c.node,i.node,"next")),t.dataTransfer.dropEffect=u||h||p?"move":"none",(h||u||p)&&(null==l?void 0:l.node.id)!==i.node.id&&(l&&d.emit("node-drag-leave",c.node,l.node,t),d.emit("node-drag-enter",c.node,i.node,t)),r.value.dropNode=h||u||p?i:null,i.node.nextSibling===c.node&&(p=!1),i.node.previousSibling===c.node&&(h=!1),i.node.contains(c.node,!1)&&(u=!1),(c.node===i.node||c.node.contains(i.node))&&(h=!1,u=!1,p=!1);const g=i.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),y=n.value.getBoundingClientRect();let v;const k=h?u?.25:p?.45:1:-1,x=p?u?.75:h?.55:0:1;let m=-9999;const b=t.clientY-g.top;v=b<g.height*k?"before":b>g.height*x?"after":u?"inner":"none";const E=i.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),D=o.value;"before"===v?m=E.top-y.top:"after"===v&&(m=E.bottom-y.top),D.style.top=`${m}px`,D.style.left=E.right-y.left+"px","inner"===v?C(i.$el,s.is("drop-inner")):N(i.$el,s.is("drop-inner")),r.value.showDropIndicator="before"===v||"after"===v,r.value.allowDrop=r.value.showDropIndicator||f,r.value.dropType=v,d.emit("node-drag-over",c.node,i.node,t)},treeNodeDragEnd:e=>{const{draggingNode:t,dropType:n,dropNode:o}=r.value;if(e.preventDefault(),e.dataTransfer.dropEffect="move",t&&o){const r={data:t.node.data};"none"!==n&&t.node.remove(),"before"===n?o.node.parent.insertBefore(r,o.node):"after"===n?o.node.parent.insertAfter(r,o.node):"inner"===n&&o.node.insertChild(r),"none"!==n&&(a.value.registerNode(r),a.value.key&&t.node.eachNode((e=>{var t;null==(t=a.value.nodesMap[e.data[a.value.key]])||t.setChecked(e.checked,!a.value.checkStrictly)}))),N(o.$el,s.is("drop-inner")),d.emit("node-drag-end",t.node,o.node,n,e),"none"!==n&&d.emit("node-drop",t.node,o.node,n,e)}t&&!o&&d.emit("node-drag-end",t.node,null,n,e),r.value.showDropIndicator=!1,r.value.draggingNode=null,r.value.dropNode=null,r.value.allowDrop=!0}}),{dragState:r}}({props:e,ctx:d,el$:l,dropIndicator$:c,store:s});!function({el$:e},d){const n=t("tree"),o=P([]),a=P([]);j((()=>{s()})),R((()=>{o.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))})),b(a,(e=>{e.forEach((e=>{e.setAttribute("tabindex","-1")}))})),U(e,"keydown",(t=>{const a=t.target;if(!a.className.includes(n.b("node")))return;const s=t.code;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const r=o.value.indexOf(a);let i;if([J.up,J.down].includes(s)){if(t.preventDefault(),s===J.up){i=-1===r?0:0!==r?r-1:o.value.length-1;const e=i;for(;!d.value.getNode(o.value[i].dataset.key).canFocus;){if(i--,i===e){i=-1;break}i<0&&(i=o.value.length-1)}}else{i=-1===r?0:r<o.value.length-1?r+1:0;const e=i;for(;!d.value.getNode(o.value[i].dataset.key).canFocus;){if(i++,i===e){i=-1;break}i>=o.value.length&&(i=0)}}-1!==i&&o.value[i].focus()}[J.left,J.right].includes(s)&&(t.preventDefault(),a.click());const l=a.querySelector('[type="checkbox"]');[J.enter,J.space].includes(s)&&l&&(t.preventDefault(),l.click())}));const s=()=>{var t;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const d=e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);d.length?d[0].setAttribute("tabindex","0"):null==(t=o.value[0])||t.setAttribute("tabindex","0")}}({el$:l},s);const p=G((()=>{const{childNodes:e}=r.value,t=!!a&&0!==a.hasFilteredOptions;return(!e||0===e.length||e.every((({visible:e})=>!e)))&&!t}));b((()=>e.currentNodeKey),(e=>{s.value.setCurrentNodeKey(e)})),b((()=>e.defaultCheckedKeys),(e=>{s.value.setDefaultCheckedKey(e)})),b((()=>e.defaultExpandedKeys),(e=>{s.value.setDefaultExpandedKeys(e)})),b((()=>e.data),(e=>{s.value.setData(e)}),{deep:!0}),b((()=>e.checkStrictly),(e=>{s.value.checkStrictly=e}));const f=()=>{const e=s.value.getCurrentNode();return e?e.data:null};return v("RootTree",{ctx:d,props:e,store:s,root:r,currentNode:i,instance:M()}),v(V,void 0),{ns:o,store:s,root:r,currentNode:i,dragState:u,el$:l,dropIndicator$:c,isEmpty:p,filter:t=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");s.value.filter(t)},getNodeKey:t=>ae(e.nodeKey,t.data),getNodePath:t=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const d=s.value.getNode(t);if(!d)return[];const n=[d.data];let o=d.parent;for(;o&&o!==r.value;)n.push(o.data),o=o.parent;return n.reverse()},getCheckedNodes:(e,t)=>s.value.getCheckedNodes(e,t),getCheckedKeys:e=>s.value.getCheckedKeys(e),getCurrentNode:f,getCurrentKey:()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const t=f();return t?t[e.nodeKey]:null},setCheckedNodes:(t,d)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");s.value.setCheckedNodes(t,d)},setCheckedKeys:(t,d)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");s.value.setCheckedKeys(t,d)},setChecked:(e,t,d)=>{s.value.setChecked(e,t,d)},getHalfCheckedNodes:()=>s.value.getHalfCheckedNodes(),getHalfCheckedKeys:()=>s.value.getHalfCheckedKeys(),setCurrentNode:(t,n=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");se(s,d.emit,(()=>{h(t),s.value.setUserCurrentNode(t,n)}))},setCurrentKey:(t,n=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");se(s,d.emit,(()=>{h(),s.value.setCurrentNodeKey(t,n)}))},t:n,getNode:e=>s.value.getNode(e),remove:e=>{s.value.remove(e)},append:(e,t)=>{s.value.append(e,t)},insertBefore:(e,t)=>{s.value.insertBefore(e,t)},insertAfter:(e,t)=>{s.value.insertAfter(e,t)},handleNodeExpand:(e,t,n)=>{h(t),d.emit("node-expand",e,t,n)},updateKeyChildren:(t,d)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");s.value.updateChildren(t,d)}}}}),[["render",function(e,t,o,s,r,i){const l=K("el-tree-node");return d(),A("div",{ref:"el$",class:L([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner","inner"===e.dragState.dropType),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[(d(!0),A(q,null,I(e.root.childNodes,(t=>(d(),n(l,{key:e.getNodeKey(t),node:t,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])))),128)),e.isEmpty?(d(),A("div",{key:0,class:L(e.ns.e("empty-block"))},[a(e.$slots,"empty",{},(()=>{var t;return[T("span",{class:L(e.ns.e("empty-text"))},Y(null!=(t=e.emptyText)?t:e.t("el.tree.emptyText")),3)]}))],2)):$("v-if",!0),w(T("div",{ref:"dropIndicator$",class:L(e.ns.e("drop-indicator"))},null,2),[[S,e.dragState.showDropIndicator]])],2)}],["__file","tree.vue"]]);Ne.install=e=>{e.component(Ne.name,Ne)};const Ce=Ne,xe=Ce;export{xe as E,de as _,Ce as a};
