import{o as A,n as W,s as y,bw as D,_ as d,r as G,y as H,bs as J,bo as K,j as x,z as M,q as Q,A as T}from"./index-2315324d.js";function V(e){return A("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y=e=>{const{classes:a,checked:i,disabled:l,edge:o}=e,r={root:["root",i&&"checked",l&&"disabled",o&&`edge${Q(o)}`],input:["input"]};return T(r,V,a)},Z=y(D)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ee=y("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),se=G.forwardRef(function(a,i){const{autoFocus:l,checked:o,checkedIcon:r,className:F,defaultChecked:h,disabled:w,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:I,inputProps:P,inputRef:j,name:z,onBlur:f,onChange:b,onFocus:g,readOnly:q,required:E=!1,tabIndex:N,type:c,value:m}=a,U=H(a,X),[k,_]=J({controlled:o,default:!!h,name:"SwitchBase",state:"checked"}),t=K(),v=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},L=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;_(C),b&&b(s,C)};let n=w;t&&typeof n>"u"&&(n=t.disabled);const $=c==="checkbox"||c==="radio",u=d({},a,{checked:k,disabled:n,disableFocusRipple:p,edge:S}),B=Y(u);return x.jsxs(Z,d({component:"span",className:M(B.root,F),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:v,onBlur:L,ownerState:u,ref:i},U,{children:[x.jsx(ee,d({autoFocus:l,checked:o,defaultChecked:h,className:B.input,disabled:n,id:$?I:void 0,name:z,onChange:O,readOnly:q,ref:j,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&m===void 0?{}:{value:m},P)),k?r:R]}))}),ae=se;export{ae as S};
