import{j as r,_ as d,d as j,r as g,B as i,C as f,a3 as m,i as k,$ as v,V as C,T as a,a as l,l as c,m as w}from"./index-e440a775.js";import{A as y}from"./ModalConfirm-c662a901.js";var M=function(s){return r.jsxs("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s,{children:[r.jsx("path",{fill:"#fff",fillOpacity:.01,d:"M2.8112 15.37c.038-.3423.0571-.5134.1089-.6734.046-.1419.1108-.277.193-.4015.0925-.1404.2143-.2621.4578-.5057L14.503 2.8574c.9144-.9144 2.3968-.9144 3.3112 0 .9144.9143.9144 2.3968 0 3.3111L6.8821 17.1006c-.2435.2435-.3653.3653-.5057.4579a1.6544 1.6544 0 0 1-.4015.1929c-.16.0518-.331.0708-.6734.1089L2.5 18.1716l.3112-2.8016Z"}),r.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m15.3308 8.652-3.3112-3.3113M2.5 18.1716l2.8015-.3113c.3423-.0381.5135-.0571.6734-.1089.142-.0459.277-.1108.4015-.1929.1404-.0926.2622-.2144.5057-.4579l10.9321-10.932c.9144-.9144.9144-2.3969 0-3.3113-.9144-.9143-2.3968-.9143-3.3112 0L3.571 13.7894c-.2436.2436-.3654.3653-.458.5057a1.6548 1.6548 0 0 0-.193.4015c-.0517.16-.0707.3311-.1088.6734L2.5 18.1716Z"})]}))},L=function(s){return r.jsx("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s,{children:r.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 5v14m-7-7h14"})}))};const T=L,A=({title:e,message:s,deleteFn:x,cancel:n})=>{const{t:o,i18n:b}=j(),[t,h]=g.useState(!1),u=()=>{h(!0),x()};return r.jsx(i,{onClick:n,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:r.jsx(f,{maxWidth:"sm",onClick:p=>p.stopPropagation(),children:r.jsxs(m,{elevation:12,children:[r.jsxs(k,{direction:"row",spacing:2,sx:{display:"flex",p:3},children:[r.jsx(v,{sx:{backgroundColor:"error.lightest",color:"error.main"},children:r.jsx(C,{children:r.jsx(y,{})})}),r.jsxs("div",{children:[r.jsx(a,{variant:"h5",children:e}),r.jsx(a,{color:"text.secondary",sx:{mt:1},variant:"body2",children:s})]})]}),r.jsxs(i,{sx:{display:"flex",justifyContent:"flex-end",pb:3,px:3},children:[r.jsx(l,{onClick:()=>u(),color:"inherit",sx:{mr:2},disabled:t,children:t?r.jsx(w,{color:"primary",size:20}):o(c.sortie.oui)}),r.jsx(l,{onClick:n,sx:{backgroundColor:"error.main","&:hover":{backgroundColor:"error.dark"}},variant:"contained",children:o(c.sortie.non)})]})]})})})};export{M as E,A as M,T as P};
