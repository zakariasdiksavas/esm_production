import{a6 as _,a2 as K,d as v,l as t,h as O,a_ as E,j as e,a as U,r as g,a3 as A,bg as W,B as G,a1 as N,al as L,V as ee,i as te,a4 as ne,$ as ae,T as H,an as se}from"./index-e45fdd46.js";import{u as re,c as le,e as V,C as J,b as ie}from"./formik.esm-15bfe51a.js";import{f as oe,e as P,T as y,a as T,c as n,d as F,b as j,P as Q,B as k}from"./moment-a74daaec.js";import{A as ce,a as de,F as he,b as xe}from"./fr-1a8f4938.js";import{E as pe}from"./ExpandMore-7d18f2de.js";import{D as Y}from"./DatePicker-59b426ec.js";import{E as ue}from"./Eye-4335b8c8.js";import{F as je}from"./FilePreview-de5965c4.js";import{K as me,a as ge,A as fe,T as be}from"./KeyboardArrowUp-c24085f8.js";import{C as ye}from"./TableRowsLoader-ded9d543.js";import{T as Se,a as q}from"./Tabs-746b8f9b.js";function we(){oe.locale("fr");const{currentId:i}=_(r=>r.situationClient),p=K(),{t:c,i18n:a}=v(),l=re({initialValues:{date1:null,date2:null},validationSchema:le({date1:V().nullable().test("is-before-date2",c(t.global.date2Greather),function(r){const{date2:s}=this.parent;return r<=s}),date2:V().nullable().test("is-after-date1",c(t.global.date2Greather),function(r){const{date1:s}=this.parent;return r>=s})}),onSubmit:async(r,{resetForm:s,setErrors:S})=>{const u=new Date(r.date1),b=new Date(r.date2);let h="";h=`?date1=${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}&date2=${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`,O.get("/clientsituation/detail/list/"+i+"/"+h).then(o=>{p(E.actions.fetchClientSituationDetails({data:o.data,isFilter:!0}))})},onReset:()=>{O.get("/clientsituation/detail/list/"+i+"/").then(r=>{p(E.actions.fetchClientSituationDetails({data:r.data,isFilter:!0}))})}});return e.jsxs(ce,{defaultExpanded:!0,children:[e.jsx(de,{expandIcon:e.jsx(pe,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(he,{}),c(t.global.filter)]})}),e.jsx(xe,{children:e.jsx(J,{children:e.jsx(ie,{children:e.jsx("form",{noValidate:!0,onSubmit:l.handleSubmit,onReset:l.handleReset,children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center space-x-6 space-y-2 md:space-y-0",children:[e.jsx(Y,{value:l.values.date1,onChange:r=>l.setFieldValue("date1",r),onBlur:l.handleBlur,label:c(t.global.date1),name:"date1",className:"w-[100%] md:w-[30%]",slotProps:{textField:{variant:"outlined",error:!!(l.touched.date1&&l.errors.date1),helperText:l.touched.date1&&l.errors.date1}}}),e.jsx(Y,{value:l.values.date2,onChange:r=>l.setFieldValue("date2",r),onBlur:l.handleBlur,label:c(t.global.date2),name:"date2",className:"w-[100%] md:w-[30%]",slotProps:{textField:{variant:"outlined",error:!!(l.touched.date2&&l.errors.date2),helperText:l.touched.date2&&l.errors.date2}}}),e.jsx(U,{variant:"contained",type:"reset",children:c(t.global.reset)}),e.jsx(U,{type:"submit",variant:"contained",children:c(t.global.filter)})]})})})})})]})}function Ce(){var o,M;const i=JSON.parse(sessionStorage.getItem("user")),[p,c]=g.useState(1),[a,l]=g.useState(10),{situationCLientDetails:r}=_(x=>x.situationClient),{t:s,i18n:S}=v(),u=[s(t.sortie.vente),s(t.sortie.gratuit),s(t.sortie.accident),s(t.sortie.change)],b=(x,f)=>{c(f)},h=(o=r==null?void 0:r.outbounds)==null?void 0:o.slice((p-1)*a,p*a);return e.jsxs(e.Fragment,{children:[e.jsx(P,{component:A,children:e.jsx(y,{children:e.jsxs(y,{children:[e.jsxs(T,{children:[e.jsx(n,{children:i!=null&&i.is_eleveur?s(t.batiment.title):s(t.fournisseur.title)}),e.jsx(n,{children:s(t.magazin.title)}),e.jsx(n,{children:s(t.sortie.eggType)}),e.jsx(n,{children:s(t.entrer.quantity)}),e.jsx(n,{children:s(t.sortie.typeDeSortie)}),e.jsxs(n,{children:[s(t.entrer.prix)," ",s(t.global.mad)]}),e.jsx(n,{children:s(t.entrer.date)}),e.jsx(n,{children:s(t.entrer.temps)}),e.jsx(n,{children:s(t.sortie.status)})]}),e.jsx(F,{children:(h==null?void 0:h.length)>0?h==null?void 0:h.map(x=>{let f=new Date(x.date),w={year:f.getFullYear(),month:`${f.getMonth()+1}`,day:`${f.getDate()}`};const m=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(j,{children:[e.jsx(n,{children:x.eggsource_name}),e.jsx(n,{children:x.warehouse_name}),e.jsx(n,{children:x.eggclass_name}),e.jsx(n,{sx:{direction:"initial",whiteSpace:"nowrap"},children:x.quantity.toLocaleString("en-US").replaceAll(","," ")}),e.jsx(n,{children:u[x.type-1]}),e.jsx(n,{sx:{direction:"initial",whiteSpace:"nowrap"},children:m.format(x.price).replaceAll(","," ").replace("MAD","")}),e.jsxs(n,{children:[w.day.padStart(2,0),"/",w.month.padStart(2,0),"/",w.year]}),e.jsx(n,{children:x.time.substring(0,5)}),e.jsxs(n,{children:[" ",e.jsx(W,{label:x.is_delivered?s(t.sortie.oui):s(t.sortie.non),color:x.is_delivered?"success":"error"})]})]},x.id)}):e.jsx(j,{children:e.jsx(n,{colSpan:10,sx:{textAlign:"center"},children:s(t.magazin.nothingToDisplay)})})})]})})}),e.jsx(G,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(Q,{count:Math.ceil(((M=r==null?void 0:r.outbounds)==null?void 0:M.length)/a),defaultPage:p,onChange:b,color:"primary",size:"large"})})]})}function _e(){var R,z;const[i,p]=g.useState({}),[c,a]=g.useState(!1),[l,r]=g.useState(),[s,S]=g.useState(1),[u,b]=g.useState(10),{situationCLientDetails:h}=_(d=>d.situationClient),{t:o,i18n:M}=v(),x=[o(t.paiment.espece),o(t.paiment.virment),o(t.paiment.cheque),o(t.paiment.lcn)],f=d=>{p(C=>({...C,[d]:!C[d]}))},w=(d,C)=>{S(C)},m=(R=h==null?void 0:h.payments)==null?void 0:R.slice((s-1)*u,s*u);return e.jsxs(e.Fragment,{children:[e.jsx(P,{component:A,children:e.jsx(y,{children:e.jsxs(y,{children:[e.jsxs(T,{children:[e.jsx(n,{width:"50"}),e.jsxs(n,{children:[o(t.paiment.amount)," ",o(t.global.mad)]}),e.jsx(n,{children:o(t.entrer.date)}),e.jsx(n,{children:o(t.paiment.typePayment)}),e.jsx(n,{children:o(t.paiment.isPayed)})]}),e.jsx(F,{children:(m==null?void 0:m.length)>0?m==null?void 0:m.map((d,C)=>{const I=i[d.id]||!1;let D=new Date(d.date),B={year:D.getFullYear(),month:`${D.getMonth()+1}`,day:`${D.getDate()}`};const X=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(n,{children:d.payment_proof.length!==0&&e.jsx(N,{"aria-label":"expand row",size:"small",onClick:()=>f(d.id),children:I?e.jsx(me,{}):e.jsx(ge,{})})}),e.jsx(n,{sx:{direction:"initial",whiteSpace:"nowrap"},children:X.format(d.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(n,{children:[" ",B.day.padStart(2,0),"/",B.month.padStart(2,0),"/",B.year]}),e.jsx(n,{children:x[d.mode-1]}),e.jsxs(n,{children:[" ",e.jsx(W,{label:d.payed==1?o(t.sortie.oui):d.payed==2?o(t.global.enCours):o(t.global.echec),color:d.payed==1?"success":d.payed==2?"warning":"error"})]})]}),e.jsx(j,{children:e.jsx(n,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(L,{in:I,timeout:"auto",unmountOnExit:!0,children:e.jsx(P,{sx:{width:"100%"},component:A,children:e.jsxs(y,{sx:{width:"100%"},children:[e.jsx(T,{children:e.jsxs(j,{children:[e.jsx(n,{children:"Nom du fichier"}),e.jsx(n,{})]})}),e.jsx(F,{children:d.payment_proof.map(($,Z)=>e.jsxs(j,{children:[e.jsx(n,{children:$.file.replace("/uploads/","")}),e.jsxs(n,{children:[" ",e.jsx(N,{color:"secondary",onClick:()=>{r({file:$.file,extension:$.extension}),a(!0)},children:e.jsx(ee,{children:e.jsx(ue,{})})})]})]},Z))})]})})})})})]})}):e.jsx(j,{children:e.jsx(n,{colSpan:5,sx:{textAlign:"center"},children:o(t.magazin.nothingToDisplay)})})})]})})}),e.jsx(G,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(Q,{count:Math.ceil(((z=h==null?void 0:h.payments)==null?void 0:z.length)/u),defaultPage:s,onChange:w,color:"primary",size:"large"})}),c&&e.jsx(je,{isPreview:c,close:()=>a(!1),file:l})]})}function ve(){const{t:i,i18n:p}=v(),{situationCLientForOneClient:c}=_(a=>a.situationClient);return console.log(c),e.jsx(P,{component:A,children:e.jsxs(y,{children:[e.jsx(T,{children:e.jsxs(j,{children:[e.jsx(n,{children:i(t.client.title)}),e.jsxs(n,{children:[i(t.situationCliente.totalSortie)," ",i(t.global.mad)]}),e.jsxs(n,{children:[i(t.situationCliente.totalPaiment)," ",i(t.global.mad)]}),e.jsxs(n,{children:[i(t.situationCliente.paymentProgress)," ",i(t.global.mad)]}),e.jsxs(n,{children:[i(t.situationCliente.paymentEchec)," ",i(t.global.mad)]}),e.jsxs(n,{children:[i(t.situationCliente.debt)," ",i(t.global.mad)]})]})}),e.jsx(F,{children:c.map(a=>{const l=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(j,{children:[e.jsx(n,{children:e.jsxs(te,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(ne,{variant:"dot",color:a.is_active?"success":"error",anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circular",badgeContent:" ",sx:{"& .MuiBadge-badge":{minWidth:"14px",height:"14px",fontSize:"0.75rem",borderRadius:"100%",border:"2px solid #fff"}},children:e.jsx(ae,{sx:{bgcolor:a.is_active?"rgb(19, 194, 194)":"",color:"white",width:45,height:45},children:(a==null?void 0:a.client_f_n[0])+" "+(a==null?void 0:a.client_l_n[0])})}),e.jsxs("div",{children:[a.client_f_n+" "+a.client_l_n,e.jsx(H,{color:"text.secondary",variant:"body2",children:a.client_email})]})]})}),e.jsx(n,{sx:{direction:"initial",whiteSpace:"nowrap"},children:l.format(a.sum_outbound_price).replaceAll(","," ").replace("MAD","")}),e.jsx(n,{sx:{direction:"initial",whiteSpace:"nowrap"},style:{fontWeight:"bold"},children:l.format(a.sum_payment_cashed_in).replaceAll(","," ").replace("MAD","")}),e.jsx(n,{sx:{color:r=>r.palette.warning.main,fontWeight:"600",direction:"initial",whiteSpace:"nowrap",whiteSpace:"nowrap"},children:l.format(a.sum_payment_in_progress).replaceAll(","," ").replace("MAD","")}),e.jsx(n,{sx:{direction:"initial",whiteSpace:"nowrap"},children:e.jsx("p",{style:{color:a.sum_payment_invalid>0?"red":"green"},children:l.format(a.sum_payment_invalid).replaceAll(","," ").replace("MAD","")})}),e.jsx(n,{sx:{direction:"initial",whiteSpace:"nowrap"},children:e.jsx("p",{className:"font-bold",style:{color:a.final_confirmed_sold>=0?"green":"red"},children:l.format(a.final_confirmed_sold).replaceAll(","," ").replace("MAD","")})})]})})})]})})}function Re(){const[i,p]=g.useState(0),{modalDetailsOpen:c}=_(s=>s.situationClient),{t:a,i18n:l}=v(),r=K();return e.jsxs(se,{open:c,fullScreen:!0,children:[e.jsx(fe,{sx:{position:"relative"},children:e.jsxs(be,{children:[e.jsx(N,{edge:"start",color:"inherit",onClick:()=>r(E.actions.openCloseModalDetails()),"aria-label":"close",children:e.jsx(ye,{})}),e.jsx(H,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a(t.situationCliente.details)})]})}),e.jsxs(k,{children:[e.jsx(ve,{}),e.jsx(k,{sx:{bgcolor:"background.paper",display:"flex",justifyContent:"center"},children:e.jsxs(Se,{value:i,onChange:(s,S)=>p(S),children:[e.jsx(q,{label:a(t.nav.Paiment)}),e.jsx(q,{label:a(t.nav.sortie)})]})})]}),e.jsx(k,{children:e.jsxs(J,{children:[e.jsx(we,{}),i===0?e.jsx(_e,{}):e.jsx(Ce,{})]})})]})}export{Re as M};
