import{a6 as C,a2 as W,d as v,l as a,h as U,b4 as E,j as e,a as V,r as f,a3 as F,bm as G,a1 as I,al as L,V as ee,i as ae,a4 as te,$ as ne,T as H,b3 as re}from"./index-bffffd5d.js";import{u as se,c as le,e as Y,C as J,b as ie}from"./formik.esm-51017e53.js";import{g as oe,e as D,T as P,a as $,c as t,d as M,b as m,f as Q,j as ce,B as z}from"./moment-c1228ca8.js";import{A as de,a as he,F as xe,b as pe}from"./fr-a1d10d63.js";import{E as ue}from"./ExpandMore-933c5590.js";import{D as q}from"./DatePicker-b45e2a50.js";import{E as ge}from"./Eye-0948d72f.js";import{F as me}from"./FilePreview-fb84f310.js";import{K as je,a as be,A as fe}from"./KeyboardArrowUp-4b584357.js";import{C as ye}from"./TableRowsLoader-1fe09bf9.js";import{T as we,a as K}from"./Tabs-12df9ed9.js";function Se(){oe.locale("fr");const{currentId:o}=C(l=>l.situationClient),x=W(),{t:h,i18n:n}=v(),s=se({initialValues:{date1:null,date2:null},validationSchema:le({date1:Y().nullable().test("is-before-date2",h(a.global.date2Greather),function(l){const{date2:r}=this.parent;return l<=r}),date2:Y().nullable().test("is-after-date1",h(a.global.date2Greather),function(l){const{date1:r}=this.parent;return l>=r})}),onSubmit:async(l,{resetForm:r,setErrors:j})=>{const u=new Date(l.date1),y=new Date(l.date2);let p="";p=`?date1=${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}&date2=${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`,U.get("/clientsituation/detail/list/"+o+"/"+p).then(i=>{x(E.actions.fetchClientSituationDetails({data:i.data,isFilter:!0}))})},onReset:()=>{U.get("/clientsituation/detail/list/"+o+"/").then(l=>{x(E.actions.fetchClientSituationDetails({data:l.data,isFilter:!0}))})}});return e.jsxs(de,{defaultExpanded:!0,children:[e.jsx(he,{expandIcon:e.jsx(ue,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(xe,{}),h(a.global.filter)]})}),e.jsx(pe,{children:e.jsx(J,{children:e.jsx(ie,{children:e.jsx("form",{noValidate:!0,onSubmit:s.handleSubmit,onReset:s.handleReset,children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center space-x-6 space-y-2 md:space-y-0",children:[e.jsx(q,{value:s.values.date1,onChange:l=>s.setFieldValue("date1",l),onBlur:s.handleBlur,label:h(a.global.date1),name:"date1",className:"w-[100%] md:w-[30%]",slotProps:{textField:{variant:"outlined",error:!!(s.touched.date1&&s.errors.date1),helperText:s.touched.date1&&s.errors.date1}}}),e.jsx(q,{value:s.values.date2,onChange:l=>s.setFieldValue("date2",l),onBlur:s.handleBlur,label:h(a.global.date2),name:"date2",className:"w-[100%] md:w-[30%]",slotProps:{textField:{variant:"outlined",error:!!(s.touched.date2&&s.errors.date2),helperText:s.touched.date2&&s.errors.date2}}}),e.jsx(V,{variant:"contained",type:"reset",children:h(a.global.reset)}),e.jsx(V,{type:"submit",variant:"contained",children:h(a.global.filter)})]})})})})})]})}function Pe(){var _,A;const o=JSON.parse(sessionStorage.getItem("user")),[x,h]=f.useState(0),[n,s]=f.useState(10),{situationCLientDetails:l}=C(d=>d.situationClient),{t:r,i18n:j}=v(),u=[r(a.sortie.vente),r(a.sortie.gratuit),r(a.sortie.accident),r(a.sortie.change)],y=(d,g)=>{h(g)},p=d=>{s(parseInt(d.target.value,10)),h(0)},i=(_=l==null?void 0:l.outbounds)==null?void 0:_.slice(x*n,x*n+n);return e.jsxs(e.Fragment,{children:[e.jsx(D,{component:F,children:e.jsx(P,{children:e.jsxs(P,{children:[e.jsxs($,{children:[e.jsx(t,{children:o!=null&&o.is_eleveur?r(a.batiment.title):r(a.fournisseur.title)}),e.jsx(t,{children:r(a.magazin.title)}),e.jsx(t,{children:r(a.sortie.eggType)}),e.jsx(t,{children:r(a.entrer.quantity)}),e.jsx(t,{children:r(a.sortie.typeDeSortie)}),e.jsxs(t,{children:[r(a.entrer.prix)," ",r(a.global.mad)]}),e.jsx(t,{children:r(a.entrer.date)}),e.jsx(t,{children:r(a.entrer.temps)}),e.jsx(t,{children:r(a.sortie.status)})]}),e.jsx(M,{children:(i==null?void 0:i.length)>0?i==null?void 0:i.map(d=>{let g=new Date(d.date),w={year:g.getFullYear(),month:`${g.getMonth()+1}`,day:`${g.getDate()}`};const b=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(m,{children:[e.jsx(t,{children:d.eggsource_name}),e.jsx(t,{children:d.warehouse_name}),e.jsx(t,{children:d.eggclass_name}),e.jsx(t,{sx:{direction:j.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:d.quantity.toLocaleString("en-US").replaceAll(","," ")}),e.jsx(t,{children:u[d.type-1]}),e.jsx(t,{sx:{direction:j.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:b.format(d.price).replaceAll(","," ").replace("MAD","")}),e.jsxs(t,{children:[w.day.padStart(2,0),"/",w.month.padStart(2,0),"/",w.year]}),e.jsx(t,{children:d.time.substring(0,5)}),e.jsxs(t,{children:[" ",e.jsx(G,{label:d.is_delivered?r(a.sortie.oui):r(a.sortie.non),color:d.is_delivered?"success":"error"})]})]},d.id)}):e.jsx(m,{children:e.jsx(t,{colSpan:10,sx:{textAlign:"center"},children:r(a.magazin.nothingToDisplay)})})})]})})}),e.jsx(Q,{component:"div",count:(A=l==null?void 0:l.outbounds)==null?void 0:A.length,onPageChange:y,onRowsPerPageChange:p,page:x,rowsPerPage:n,rowsPerPageOptions:[5,10,25],labelRowsPerPage:r(a.magazin.Lignes),labelDisplayedRows:({from:d,to:g,count:w})=>`${d}–${g} ${r(a.magazin.sur)} ${w}`})]})}function Ce(){var N,O;const[o,x]=f.useState({}),[h,n]=f.useState(!1),[s,l]=f.useState(),[r,j]=f.useState(0),[u,y]=f.useState(10),{situationCLientDetails:p}=C(c=>c.situationClient),{t:i,i18n:_}=v(),A=[i(a.paiment.espece),i(a.paiment.virment),i(a.paiment.cheque),i(a.paiment.lcn)],d=c=>{x(S=>({...S,[c]:!S[c]}))},g=(c,S)=>{j(S)},w=c=>{y(parseInt(c.target.value,10)),j(0)},b=(N=p==null?void 0:p.payments)==null?void 0:N.slice(r*u,r*u+u);return e.jsxs(e.Fragment,{children:[e.jsx(D,{component:F,children:e.jsx(P,{children:e.jsxs(P,{children:[e.jsxs($,{children:[e.jsx(t,{width:"50"}),e.jsxs(t,{children:[i(a.paiment.amount)," ",i(a.global.mad)]}),e.jsx(t,{children:i(a.entrer.date)}),e.jsx(t,{children:i(a.paiment.typePayment)}),e.jsx(t,{children:i(a.paiment.isPayed)})]}),e.jsx(M,{children:(b==null?void 0:b.length)>0?b==null?void 0:b.map((c,S)=>{const T=o[c.id]||!1;let R=new Date(c.date),B={year:R.getFullYear(),month:`${R.getMonth()+1}`,day:`${R.getDate()}`};const X=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(t,{children:c.payment_proof.length!==0&&e.jsx(I,{"aria-label":"expand row",size:"small",onClick:()=>d(c.id),children:T?e.jsx(je,{}):e.jsx(be,{})})}),e.jsx(t,{sx:{direction:_.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:X.format(c.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(t,{children:[" ",B.day.padStart(2,0),"/",B.month.padStart(2,0),"/",B.year]}),e.jsx(t,{children:A[c.mode-1]}),e.jsxs(t,{children:[" ",e.jsx(G,{label:c.payed==1?i(a.sortie.oui):c.payed==2?i(a.global.enCours):i(a.global.echec),color:c.payed==1?"success":c.payed==2?"warning":"error"})]})]}),e.jsx(m,{children:e.jsx(t,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(L,{in:T,timeout:"auto",unmountOnExit:!0,children:e.jsx(D,{sx:{width:"100%"},component:F,children:e.jsxs(P,{sx:{width:"100%"},children:[e.jsx($,{children:e.jsxs(m,{children:[e.jsx(t,{children:"Nom du fichier"}),e.jsx(t,{})]})}),e.jsx(M,{children:c.payment_proof.map((k,Z)=>e.jsxs(m,{children:[e.jsx(t,{children:k.file.replace("/uploads/","")}),e.jsxs(t,{children:[" ",e.jsx(I,{color:"secondary",onClick:()=>{l({file:k.file,extension:k.extension}),n(!0)},children:e.jsx(ee,{children:e.jsx(ge,{})})})]})]},Z))})]})})})})})]})}):e.jsx(m,{children:e.jsx(t,{colSpan:5,sx:{textAlign:"center"},children:i(a.magazin.nothingToDisplay)})})})]})})}),e.jsx(Q,{component:"div",count:(O=p==null?void 0:p.payments)==null?void 0:O.length,onPageChange:g,onRowsPerPageChange:w,page:r,rowsPerPage:u,rowsPerPageOptions:[5,10,25],labelRowsPerPage:i(a.magazin.Lignes),labelDisplayedRows:({from:c,to:S,count:T})=>`${c}–${S} ${i(a.magazin.sur)} ${T}`}),h&&e.jsx(me,{isPreview:h,close:()=>n(!1),file:s})]})}function ve(){const{t:o,i18n:x}=v(),{situationCLientForOneClient:h}=C(n=>n.situationClient);return console.log(h),e.jsx(D,{component:F,children:e.jsxs(P,{children:[e.jsx($,{children:e.jsxs(m,{children:[e.jsx(t,{children:o(a.client.title)}),e.jsxs(t,{children:[o(a.situationCliente.totalSortie)," ",o(a.global.mad)]}),e.jsxs(t,{children:[o(a.situationCliente.totalPaiment)," ",o(a.global.mad)]}),e.jsxs(t,{children:[o(a.situationCliente.paymentProgress)," ",o(a.global.mad)]}),e.jsxs(t,{children:[o(a.situationCliente.paymentEchec)," ",o(a.global.mad)]}),e.jsxs(t,{children:[o(a.situationCliente.debt)," ",o(a.global.mad)]})]})}),e.jsx(M,{children:h.map(n=>{const s=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(m,{children:[e.jsx(t,{children:e.jsxs(ae,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(te,{variant:"dot",color:n.is_active?"success":"error",anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circular",badgeContent:" ",sx:{"& .MuiBadge-badge":{minWidth:"14px",height:"14px",fontSize:"0.75rem",borderRadius:"100%",border:"2px solid #fff"}},children:e.jsx(ne,{sx:{bgcolor:n.is_active?"rgb(19, 194, 194)":"",color:"white",width:45,height:45},children:(n==null?void 0:n.client_f_n[0])+" "+(n==null?void 0:n.client_l_n[0])})}),e.jsxs("div",{children:[n.client_f_n+" "+n.client_l_n,e.jsx(H,{color:"text.secondary",variant:"body2",children:n.client_email})]})]})}),e.jsx(t,{sx:{direction:x.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:s.format(n.sum_outbound_price).replaceAll(","," ").replace("MAD","")}),e.jsx(t,{sx:{direction:x.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},style:{fontWeight:"bold"},children:s.format(n.sum_payment_cashed_in).replaceAll(","," ").replace("MAD","")}),e.jsx(t,{sx:{color:l=>l.palette.warning.main,fontWeight:"600",direction:x.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap",whiteSpace:"nowrap"},children:s.format(n.sum_payment_in_progress).replaceAll(","," ").replace("MAD","")}),e.jsx(t,{sx:{direction:x.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:e.jsx("p",{style:{color:n.sum_payment_invalid>0?"red":"green"},children:s.format(n.sum_payment_invalid).replaceAll(","," ").replace("MAD","")})}),e.jsx(t,{sx:{direction:x.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:e.jsx("p",{className:"font-bold",style:{color:n.final_confirmed_sold>=0?"green":"red"},children:s.format(n.final_confirmed_sold).replaceAll(","," ").replace("MAD","")})})]})})})]})})}function Ee(){const[o,x]=f.useState(0),{modalDetailsOpen:h}=C(r=>r.situationClient),{t:n,i18n:s}=v(),l=W();return e.jsxs(re,{open:h,fullScreen:!0,children:[e.jsx(fe,{sx:{position:"relative"},children:e.jsxs(ce,{children:[e.jsx(I,{edge:"start",color:"inherit",onClick:()=>l(E.actions.openCloseModalDetails()),"aria-label":"close",children:e.jsx(ye,{})}),e.jsx(H,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:n(a.situationCliente.details)})]})}),e.jsxs(z,{children:[e.jsx(ve,{}),e.jsx(z,{sx:{bgcolor:"background.paper",display:"flex",justifyContent:"center"},children:e.jsxs(we,{value:o,onChange:(r,j)=>x(j),children:[e.jsx(K,{label:n(a.nav.Paiment)}),e.jsx(K,{label:n(a.nav.sortie)})]})})]}),e.jsx(z,{children:e.jsxs(J,{children:[e.jsx(Se,{}),o===0?e.jsx(Ce,{}):e.jsx(Pe,{})]})})]})}export{Ee as M};
