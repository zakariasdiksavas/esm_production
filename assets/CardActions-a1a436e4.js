import{o as d,n as p,s as u,_ as a,r as C,x as g,y as m,j as f,z as x,A}from"./index-5b79c039.js";function S(s){return d("MuiCardActions",s)}p("MuiCardActions",["root","spacing"]);const y=["disableSpacing","className"],b=s=>{const{classes:t,disableSpacing:o}=s;return A({root:["root",!o&&"spacing"]},S,t)},R=u("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>a({display:"flex",alignItems:"center",padding:8},!s.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),j=C.forwardRef(function(t,o){const e=g({props:t,name:"MuiCardActions"}),{disableSpacing:r=!1,className:i}=e,c=m(e,y),n=a({},e,{disableSpacing:r}),l=b(n);return f.jsx(R,a({className:x(l.root,i),ownerState:n,ref:o},c))}),M=j;export{M as C};
