import{j as s,_ as j,d as f,r as c,a7 as u,B as d,C as m,a3 as C,i as b,$ as k,V as v,T as x,l as r,a as h,m as y}from"./index-0909516e.js";var w=function(a){return s.jsxs("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[s.jsx("path",{fill:"#fff",fillOpacity:.01,d:"M2.3902 18.0983 10.615 3.8917c.4545-.7852.6818-1.1777.9784-1.3096a1 1 0 0 1 .8126 0c.2965.1319.5238.5244.9783 1.3096l8.2249 14.2066c.4562.788.6843 1.182.6506 1.5054a1.0003 1.0003 0 0 1-.4065.7051c-.263.1912-.7182.1912-1.6288.1912H3.7749c-.9106 0-1.3658 0-1.6288-.1912a1.0002 1.0002 0 0 1-.4065-.7051c-.0337-.3234.1944-.7174.6506-1.5054Z"}),s.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.9998 9v4m0 4h.01M10.6151 3.8917l-8.225 14.2066c-.4561.788-.6842 1.182-.6505 1.5054.0294.282.1772.5383.4065.7051.263.1912.7182.1912 1.6288.1912h16.4497c.9106 0 1.3658 0 1.6288-.1912a1.0003 1.0003 0 0 0 .4065-.7051c.0337-.3234-.1944-.7174-.6506-1.5054L13.3844 3.8917c-.4545-.7852-.6818-1.1777-.9783-1.3096a1 1 0 0 0-.8126 0c-.2966.1319-.5239.5244-.9784 1.3096Z"})]}))};const A=({confirmed:o,cancel:a,isConfirm:n})=>{const{t:e,i18n:M}=f(),[l,i]=c.useState(!1),g=()=>{i(!0),o()},t=()=>{i(!1),a()};return c.useEffect(()=>{n||i(!1)},[n]),s.jsx(u,{open:n,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:s.jsx(d,{onClick:a,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:s.jsx(m,{maxWidth:"sm",onClick:p=>p.stopPropagation(),children:s.jsxs(C,{elevation:12,children:[s.jsxs(b,{direction:"row",spacing:2,sx:{display:"flex",p:3},children:[s.jsx(k,{sx:{backgroundColor:"warning.lightest",color:"warning.main"},children:s.jsx(v,{children:s.jsx(w,{})})}),s.jsxs("div",{children:[s.jsx(x,{variant:"h5",children:e(r.global.confirmOperation)}),s.jsx(x,{color:"text.secondary",sx:{mt:1},variant:"body2",children:e(r.global.confirmMessage)})]})]}),s.jsxs(d,{sx:{display:"flex",justifyContent:"flex-end",pb:3,px:3},children:[s.jsx(h,{onClick:()=>g(),color:"inherit",sx:{mr:2},disabled:l,children:l?s.jsx(y,{color:"primary",size:20}):e(r.sortie.oui)}),s.jsx(h,{onClick:t,sx:{backgroundColor:"warning.main","&:hover":{backgroundColor:"warning.dark"}},variant:"contained",children:e(r.sortie.non)})]})]})})})})};export{w as A,A as M};
