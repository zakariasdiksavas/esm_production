import{n as ft,o as pt,s as F,bq as zt,q as Pt,_ as b,r as d,x as ht,y as lt,z as P,j as S,A as St,c as Wt,br as Ot,bC as Nt,bD as bt,O as $t,bu as et,bt as dt,bE as It,bF as Vt,bG as qt}from"./index-0909516e.js";function Gt(t){return pt("MuiTab",t)}const Jt=ft("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),L=Jt,Qt=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Zt=t=>{const{classes:o,textColor:r,fullWidth:c,wrapped:n,icon:i,label:p,selected:f,disabled:u}=t,m={root:["root",i&&p&&"labelIcon",`textColor${Pt(r)}`,c&&"fullWidth",n&&"wrapped",f&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return St(m,Gt,o)},to=F(zt,{name:"MuiTab",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.label&&r.icon&&o.labelIcon,o[`textColor${Pt(r.textColor)}`],r.fullWidth&&o.fullWidth,r.wrapped&&o.wrapped]}})(({theme:t,ownerState:o})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:o.iconPosition==="top"||o.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${L.iconWrapper}`]:b({},o.iconPosition==="top"&&{marginBottom:6},o.iconPosition==="bottom"&&{marginTop:6},o.iconPosition==="start"&&{marginRight:t.spacing(1)},o.iconPosition==="end"&&{marginLeft:t.spacing(1)})},o.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${L.selected}`]:{opacity:1},[`&.${L.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${L.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${L.disabled}`]:{color:(t.vars||t).palette.text.disabled}},o.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${L.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${L.disabled}`]:{color:(t.vars||t).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:t.typography.pxToRem(12)})),oo=d.forwardRef(function(o,r){const c=ht({props:o,name:"MuiTab"}),{className:n,disabled:i=!1,disableFocusRipple:p=!1,fullWidth:f,icon:u,iconPosition:m="top",indicator:E,label:w,onChange:g,onClick:x,onFocus:A,selected:y,selectionFollowsFocus:v,textColor:j="inherit",value:I,wrapped:rt=!1}=c,H=lt(c,Qt),U=b({},c,{disabled:i,disableFocusRipple:p,selected:y,icon:!!u,iconPosition:m,label:!!w,fullWidth:f,textColor:j,wrapped:rt}),D=Zt(U),W=u&&w&&d.isValidElement(u)?d.cloneElement(u,{className:P(D.iconWrapper,u.props.className)}):u,G=M=>{!y&&g&&g(M,I),x&&x(M)},X=M=>{v&&!y&&g&&g(M,I),A&&A(M)};return S.jsxs(to,b({focusRipple:!p,className:P(D.root,n),ref:r,role:"tab","aria-selected":y,disabled:i,onClick:G,onFocus:X,ownerState:U,tabIndex:y?0:-1},H,{children:[m==="top"||m==="start"?S.jsxs(d.Fragment,{children:[W,w]}):S.jsxs(d.Fragment,{children:[w,W]}),E]}))}),Ro=oo,eo=Wt(S.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),lo=Wt(S.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function ro(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function no(t,o,r,c={},n=()=>{}){const{ease:i=ro,duration:p=300}=c;let f=null;const u=o[t];let m=!1;const E=()=>{m=!0},w=g=>{if(m){n(new Error("Animation cancelled"));return}f===null&&(f=g);const x=Math.min(1,(g-f)/p);if(o[t]=i(x)*(r-u)+u,x>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(w)};return u===r?(n(new Error("Element already at target position")),E):(requestAnimationFrame(w),E)}const so=["onChange"],ao={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function io(t){const{onChange:o}=t,r=lt(t,so),c=d.useRef(),n=d.useRef(null),i=()=>{c.current=n.current.offsetHeight-n.current.clientHeight};return Ot(()=>{const p=bt(()=>{const u=c.current;i(),u!==c.current&&o(c.current)}),f=Nt(n.current);return f.addEventListener("resize",p),()=>{p.clear(),f.removeEventListener("resize",p)}},[o]),d.useEffect(()=>{i(),o(c.current)},[o]),S.jsx("div",b({style:ao,ref:n},r))}function co(t){return pt("MuiTabScrollButton",t)}const uo=ft("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),bo=uo,fo=["className","slots","slotProps","direction","orientation","disabled"],po=t=>{const{classes:o,orientation:r,disabled:c}=t;return St({root:["root",r,c&&"disabled"]},co,o)},ho=F(zt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.orientation&&o[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${bo.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),So=d.forwardRef(function(o,r){var c,n;const i=ht({props:o,name:"MuiTabScrollButton"}),{className:p,slots:f={},slotProps:u={},direction:m}=i,E=lt(i,fo),g=$t().direction==="rtl",x=b({isRtl:g},i),A=po(x),y=(c=f.StartScrollButtonIcon)!=null?c:eo,v=(n=f.EndScrollButtonIcon)!=null?n:lo,j=et({elementType:y,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x}),I=et({elementType:v,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x});return S.jsx(ho,b({component:"div",className:P(A.root,p),ref:r,role:null,ownerState:x,tabIndex:null},E,{children:m==="left"?S.jsx(y,b({},j)):S.jsx(v,b({},I))}))}),mo=So;function xo(t){return pt("MuiTabs",t)}const vo=ft("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ut=vo,go=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Mt=(t,o)=>t===o?t.firstChild:o&&o.nextElementSibling?o.nextElementSibling:t.firstChild,Et=(t,o)=>t===o?t.lastChild:o&&o.previousElementSibling?o.previousElementSibling:t.lastChild,ot=(t,o,r)=>{let c=!1,n=r(t,o);for(;n;){if(n===t.firstChild){if(c)return;c=!0}const i=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||i)n=r(t,n);else{n.focus();return}}},Co=t=>{const{vertical:o,fixed:r,hideScrollbar:c,scrollableX:n,scrollableY:i,centered:p,scrollButtonsHideMobile:f,classes:u}=t;return St({root:["root",o&&"vertical"],scroller:["scroller",r&&"fixed",c&&"hideScrollbar",n&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",o&&"flexContainerVertical",p&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},xo,u)},Bo=F("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[{[`& .${ut.scrollButtons}`]:o.scrollButtons},{[`& .${ut.scrollButtons}`]:r.scrollButtonsHideMobile&&o.scrollButtonsHideMobile},o.root,r.vertical&&o.vertical]}})(({ownerState:t,theme:o})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${ut.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}})),wo=F("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.scroller,r.fixed&&o.fixed,r.hideScrollbar&&o.hideScrollbar,r.scrollableX&&o.scrollableX,r.scrollableY&&o.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),yo=F("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.flexContainer,r.vertical&&o.flexContainerVertical,r.centered&&o.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),To=F("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,o)=>o.indicator})(({ownerState:t,theme:o})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(o.vars||o).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Io=F(io,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Rt={},Mo=d.forwardRef(function(o,r){const c=ht({props:o,name:"MuiTabs"}),n=$t(),i=n.direction==="rtl",{"aria-label":p,"aria-labelledby":f,action:u,centered:m=!1,children:E,className:w,component:g="div",allowScrollButtonsMobile:x=!1,indicatorColor:A="primary",onChange:y,orientation:v="horizontal",ScrollButtonComponent:j=mo,scrollButtons:I="auto",selectionFollowsFocus:rt,slots:H={},slotProps:U={},TabIndicatorProps:D={},TabScrollButtonProps:W={},textColor:G="primary",value:X,variant:M="standard",visibleScrollbar:nt=!1}=c,kt=lt(c,go),R=M==="scrollable",C=v==="vertical",_=C?"scrollTop":"scrollLeft",J=C?"top":"left",Q=C?"bottom":"right",st=C?"clientHeight":"clientWidth",O=C?"height":"width",N=b({},c,{component:g,allowScrollButtonsMobile:x,indicatorColor:A,orientation:v,vertical:C,scrollButtons:I,textColor:G,variant:M,visibleScrollbar:nt,fixed:!R,hideScrollbar:R&&!nt,scrollableX:R&&!C,scrollableY:R&&C,centered:m&&!R,scrollButtonsHideMobile:!x}),z=Co(N),Lt=et({elementType:H.StartScrollButtonIcon,externalSlotProps:U.startScrollButtonIcon,ownerState:N}),Ft=et({elementType:H.EndScrollButtonIcon,externalSlotProps:U.endScrollButtonIcon,ownerState:N}),[mt,At]=d.useState(!1),[$,xt]=d.useState(Rt),[Y,jt]=d.useState({start:!1,end:!1}),[vt,Ht]=d.useState({overflow:"hidden",scrollbarWidth:0}),gt=new Map,T=d.useRef(null),V=d.useRef(null),Ct=()=>{const e=T.current;let l;if(e){const a=e.getBoundingClientRect();l={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:It(e,n.direction),scrollWidth:e.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let s;if(e&&X!==!1){const a=V.current.children;if(a.length>0){const h=a[gt.get(X)];s=h?h.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:s}},q=dt(()=>{const{tabsMeta:e,tabMeta:l}=Ct();let s=0,a;if(C)a="top",l&&e&&(s=l.top-e.top+e.scrollTop);else if(a=i?"right":"left",l&&e){const B=i?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;s=(i?-1:1)*(l[a]-e[a]+B)}const h={[a]:s,[O]:l?l[O]:0};if(isNaN($[a])||isNaN($[O]))xt(h);else{const B=Math.abs($[a]-h[a]),K=Math.abs($[O]-h[O]);(B>=1||K>=1)&&xt(h)}}),at=(e,{animation:l=!0}={})=>{l?no(_,T.current,e,{duration:n.transitions.duration.standard}):T.current[_]=e},Bt=e=>{let l=T.current[_];C?l+=e:(l+=e*(i?-1:1),l*=i&&qt()==="reverse"?-1:1),at(l)},wt=()=>{const e=T.current[st];let l=0;const s=Array.from(V.current.children);for(let a=0;a<s.length;a+=1){const h=s[a];if(l+h[st]>e){a===0&&(l=e);break}l+=h[st]}return l},Dt=()=>{Bt(-1*wt())},Xt=()=>{Bt(wt())},Yt=d.useCallback(e=>{Ht({overflow:null,scrollbarWidth:e})},[]),Kt=()=>{const e={};e.scrollbarSizeListener=R?S.jsx(Io,{onChange:Yt,className:P(z.scrollableX,z.hideScrollbar)}):null;const l=Y.start||Y.end,s=R&&(I==="auto"&&l||I===!0);return e.scrollButtonStart=s?S.jsx(j,b({slots:{StartScrollButtonIcon:H.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Lt},orientation:v,direction:i?"right":"left",onClick:Dt,disabled:!Y.start},W,{className:P(z.scrollButtons,W.className)})):null,e.scrollButtonEnd=s?S.jsx(j,b({slots:{EndScrollButtonIcon:H.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ft},orientation:v,direction:i?"left":"right",onClick:Xt,disabled:!Y.end},W,{className:P(z.scrollButtons,W.className)})):null,e},yt=dt(e=>{const{tabsMeta:l,tabMeta:s}=Ct();if(!(!s||!l)){if(s[J]<l[J]){const a=l[_]+(s[J]-l[J]);at(a,{animation:e})}else if(s[Q]>l[Q]){const a=l[_]+(s[Q]-l[Q]);at(a,{animation:e})}}}),k=dt(()=>{if(R&&I!==!1){const{scrollTop:e,scrollHeight:l,clientHeight:s,scrollWidth:a,clientWidth:h}=T.current;let B,K;if(C)B=e>1,K=e<l-s-1;else{const tt=It(T.current,n.direction);B=i?tt<a-h-1:tt>1,K=i?tt>1:tt<a-h-1}(B!==Y.start||K!==Y.end)&&jt({start:B,end:K})}});d.useEffect(()=>{const e=bt(()=>{T.current&&(q(),k())}),l=Nt(T.current);l.addEventListener("resize",e);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(e),Array.from(V.current.children).forEach(a=>{s.observe(a)})),()=>{e.clear(),l.removeEventListener("resize",e),s&&s.disconnect()}},[q,k]);const it=d.useMemo(()=>bt(()=>{k()}),[k]);d.useEffect(()=>()=>{it.clear()},[it]),d.useEffect(()=>{At(!0)},[]),d.useEffect(()=>{q(),k()}),d.useEffect(()=>{yt(Rt!==$)},[yt,$]),d.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:k}),[q,k]);const Tt=S.jsx(To,b({},D,{className:P(z.indicator,D.className),ownerState:N,style:b({},$,D.style)}));let Z=0;const Ut=d.Children.map(E,e=>{if(!d.isValidElement(e))return null;const l=e.props.value===void 0?Z:e.props.value;gt.set(l,Z);const s=l===X;return Z+=1,d.cloneElement(e,b({fullWidth:M==="fullWidth",indicator:s&&!mt&&Tt,selected:s,selectionFollowsFocus:rt,onChange:y,textColor:G,value:l},Z===1&&X===!1&&!e.props.tabIndex?{tabIndex:0}:{}))}),_t=e=>{const l=V.current,s=Vt(l).activeElement;if(s.getAttribute("role")!=="tab")return;let h=v==="horizontal"?"ArrowLeft":"ArrowUp",B=v==="horizontal"?"ArrowRight":"ArrowDown";switch(v==="horizontal"&&i&&(h="ArrowRight",B="ArrowLeft"),e.key){case h:e.preventDefault(),ot(l,s,Et);break;case B:e.preventDefault(),ot(l,s,Mt);break;case"Home":e.preventDefault(),ot(l,null,Mt);break;case"End":e.preventDefault(),ot(l,null,Et);break}},ct=Kt();return S.jsxs(Bo,b({className:P(z.root,w),ownerState:N,ref:r,as:g},kt,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,S.jsxs(wo,{className:z.scroller,ownerState:N,style:{overflow:vt.overflow,[C?`margin${i?"Left":"Right"}`:"marginBottom"]:nt?void 0:-vt.scrollbarWidth},ref:T,onScroll:it,children:[S.jsx(yo,{"aria-label":p,"aria-labelledby":f,"aria-orientation":v==="vertical"?"vertical":null,className:z.flexContainer,ownerState:N,onKeyDown:_t,ref:V,role:"tablist",children:Ut}),mt&&Tt]}),ct.scrollButtonEnd]}))}),zo=Mo;export{lo as K,zo as T,Ro as a,eo as b,ut as t};
