import{d as S,a2 as v,r as m,a6 as E,l as i,j as e,an as R,a_ as p,a1 as _,a as F,a3 as V,a4 as W,$ as z,T as L,V as M,bw as N,X as H,S as O}from"./index-8b885c7c.js";import{G as D,B as P,e as q,T as Q,a as U,b as y,c as o,d as X,S as w,u as k,E as I,h as A}from"./moment-a4ec633c.js";import{E as Y}from"./Eye-7bd27996.js";import{C as J,T as K}from"./TableRowsLoader-05c4d608.js";import{u as Z,c as ee,e as $,C as G,b as te}from"./formik.esm-8d1d4924.js";import{F as ae}from"./FilePreview-9e5f6d41.js";import{C as ie}from"./CardHeader-d8006523.js";import{C as se}from"./CardActions-0e93d08e.js";import{D as B}from"./DatePicker-66d8edae.js";import{A as ne}from"./AlertError-c105f592.js";import{T as re}from"./TextSnippet-ce9aaa39.js";import{M as oe}from"./ModalDetails-483d61c9.js";import{C as le}from"./Container-d358c3d2.js";import"./KeyboardArrowUp-8cedb4c9.js";import"./fr-f2ae4e07.js";import"./ExpandMore-b942b62b.js";import"./Tabs-bdff0dea.js";function de({id:c}){const{t:r,i18n:C}=S(),x=v(),[j,a]=m.useState(!1),[h,d]=m.useState(""),{isModalDisplayDoc:g}=E(s=>s.situationClient),n=Z({initialValues:{date1:null,date2:null},validationSchema:ee({date1:$().nullable().test("is-before-date2",r(i.global.date2Greather),function(s){const{date2:u}=this.parent;return s<=u}),date2:$().nullable().test("is-after-date1",r(i.global.date2Greather),function(s){const{date1:u}=this.parent;return s>=u})}),onSubmit:async(s,{resetForm:u,setErrors:b})=>{console.log(s);let t="";for(let l in s)if(s[l]!==""&&s[l]!==null){let f=new Date(s[l]),T=`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`;t==""?t+=`?${l}=${T}`:t+=`&${l}=${T}`}d(`/clientsituation/report/${c}/${t}`),a(!0)}});return e.jsxs(e.Fragment,{children:[e.jsx(R,{open:g,onClose:()=>x(p.actions.openCloseModalDoc()),children:e.jsxs(G,{children:[e.jsx(ie,{title:r(i.situationCliente.docTitle),sx:{borderBottom:s=>`0.5px solid ${s.palette.mode=="dark"?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"}`,padding:2},action:e.jsx(_,{onClick:()=>x(p.actions.openCloseModalDoc()),children:e.jsx(J,{})})}),e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx(te,{children:e.jsxs(D,{container:!0,spacing:2,children:[e.jsx(D,{item:!0,xs:12,md:6,children:e.jsx(B,{value:n.values.date1,onChange:s=>n.setFieldValue("date1",s),onBlur:n.handleBlur,label:r(i.global.date1),name:"date",slotProps:{textField:{variant:"outlined",error:!!(n.touched.date1&&n.errors.date1),helperText:n.touched.date1&&n.errors.date1}}})}),e.jsx(D,{item:!0,xs:12,md:6,children:e.jsx(B,{value:n.values.date2,onChange:s=>n.setFieldValue("date2",s),onBlur:n.handleBlur,label:r(i.global.date2),name:"date",slotProps:{textField:{variant:"outlined",error:!!(n.touched.date2&&n.errors.date2),helperText:n.touched.date2&&n.errors.date2}}})})]})}),e.jsxs(se,{sx:{display:"flex",justifyContent:"end"},children:[e.jsx(F,{variant:"outlined",color:"error",onClick:()=>x(p.actions.openCloseModalDoc()),children:r(i.client.deleteCancel)}),e.jsx(F,{variant:"contained",type:"submit",children:r(i.situationCliente.afficher)})]})]})]})}),j&&e.jsx(ae,{close:()=>a(!1),isPreview:j,file:{file:h}})]})}function ce({isLoading:c,setData:r,setLink:C,isLoadingDetails:x,isError:j}){const{t:a,i18n:h}=S(),{situationCLient:d}=E(t=>t.situationClient),g=v(),[n,s]=m.useState(),u=t=>{r(t),g(p.actions.setCurrentData(t))},b=t=>{s(t),g(p.actions.openCloseModalDoc())};return e.jsxs(e.Fragment,{children:[e.jsxs(P,{sx:{position:"relative"},children:[e.jsx(G,{children:e.jsx(q,{component:V,children:e.jsxs(Q,{children:[e.jsx(U,{children:e.jsxs(y,{children:[e.jsx(o,{children:a(i.client.title)}),e.jsxs(o,{children:[a(i.situationCliente.totalSortie)," ",a(i.global.mad)]}),e.jsxs(o,{children:[a(i.situationCliente.totalPaiment)," ",a(i.global.mad)]}),e.jsxs(o,{children:[a(i.situationCliente.paymentProgress)," ",a(i.global.mad)]}),e.jsxs(o,{children:[a(i.situationCliente.paymentEchec)," ",a(i.global.mad)]}),e.jsxs(o,{children:[a(i.situationCliente.debt)," ",a(i.global.mad)]}),e.jsx(o,{})]})}),c?e.jsx(K,{rowsNum:10}):e.jsx(X,{children:(d==null?void 0:d.length)>0?d==null?void 0:d.map(t=>{const l=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(o,{children:e.jsxs(w,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(W,{variant:"dot",color:t.is_active?"success":"error",anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circular",badgeContent:" ",sx:{"& .MuiBadge-badge":{minWidth:"14px",height:"14px",fontSize:"0.75rem",borderRadius:"100%",border:"2px solid #fff"}},children:e.jsx(z,{sx:{bgcolor:t.is_active?"rgb(19, 194, 194)":"",color:"white",width:45,height:45},children:(t==null?void 0:t.client_f_n[0])+" "+(t==null?void 0:t.client_l_n[0])})}),e.jsxs("div",{children:[t.client_f_n+" "+t.client_l_n,e.jsx(L,{color:"text.secondary",variant:"body2",children:t.client_email})]})]})}),e.jsx(o,{sx:{direction:"initial",whiteSpace:"nowrap"},children:l.format(t.sum_outbound_price).replaceAll(","," ").replace("MAD","")}),e.jsx(o,{sx:{direction:"initial",whiteSpace:"nowrap"},style:{fontWeight:"bold"},children:l.format(t.sum_payment_cashed_in).replaceAll(","," ").replace("MAD","")}),e.jsx(o,{sx:{color:f=>f.palette.warning.main,fontWeight:"600",direction:"initial",whiteSpace:"nowrap",whiteSpace:"nowrap"},children:l.format(t.sum_payment_in_progress).replaceAll(","," ").replace("MAD","")}),e.jsx(o,{sx:{direction:"initial",whiteSpace:"nowrap"},children:e.jsx("p",{style:{color:t.sum_payment_invalid>0?"red":"green"},children:l.format(t.sum_payment_invalid).replaceAll(","," ").replace("MAD","")})}),e.jsx(o,{sx:{direction:"initial",whiteSpace:"nowrap"},children:e.jsx("p",{className:"font-bold",style:{color:t.final_confirmed_sold>=0?"green":"red"},children:l.format(t.final_confirmed_sold).replaceAll(","," ").replace("MAD","")})}),e.jsxs(o,{children:[e.jsx(_,{color:"info",onClick:()=>u(t.client),children:e.jsx(M,{children:e.jsx(Y,{})})}),e.jsx(N,{title:"Telecharger document du situation client",children:e.jsx(_,{color:"primary",onClick:()=>b(t.client),children:e.jsx(M,{children:e.jsx(re,{})})})})]})]})})}):e.jsx(y,{children:e.jsx(o,{colSpan:5,sx:{textAlign:"center"},children:a(i.magazin.nothingToDisplay)})})})]})})}),j&&e.jsx(ne,{})]}),e.jsx(de,{id:n})]})}function he(){const c=v(),[r,C]=m.useState(),[x,j]=m.useState(""),a=k("clients",A.getClientSituation),h=k(["client",r,x],()=>A.getClientSituationDetails(r,x)),[d,g]=m.useState(),{t:n,i18n:s}=S(),u=t=>{C(t)},b=t=>j(t);return m.useEffect(()=>{!a.isLoading&&h.data==0&&c(p.actions.fetchSituationCLient(a.data)),h.status=="success"&&h.data!==0&&r!==""&&(c(p.actions.setClientSituationForOneClient({id:r})),c(p.actions.fetchClientSituationDetails({data:h.data})),C(void 0))},[a.isLoading,h.isLoading,r,x]),e.jsx(e.Fragment,{children:e.jsxs(I,{children:[h.isLoading&&e.jsx(H,{}),e.jsx(P,{component:"main",sx:{flexGrow:1,py:8},children:e.jsx(le,{maxWidth:"xl",children:e.jsxs(w,{spacing:4,children:[e.jsx(w,{spacing:1,children:e.jsx(L,{variant:"h4",children:n(i.situationCliente.title)})}),e.jsx(ce,{isLoading:a.isLoading,isError:a.isError,details:d,setData:u,setLink:b})]})})}),e.jsx(oe,{})]})})}function Me(){const{t:c,i18n:r}=S();return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:`ESM | ${c(i.nav.situationCliente)}`}),e.jsx(I,{children:e.jsx(he,{})})]})}export{Me as default};
