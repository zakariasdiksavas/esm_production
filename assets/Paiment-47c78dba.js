import{r as j,a2 as w,d as P,l as t,j as e,B as je,a3 as oe,a1 as M,a as E,V as U,ak as be,ae as A,al as Le,am as i,h as F,ab as N,ac as k,ad as B,a6 as R,T as $,a7 as q,F as V,k as me,Y as _,O as We,u as Ne,an as ke,ao as Be,i as He,S as Ve}from"./index-b9aeea20.js";import{e as ie,T as re,a as le,b as T,c as u,d as de,f as Ye,g as J,G as L,u as X,S as W,h as z,B as Q,E as ce}from"./moment-8bb476e3.js";import{E as $e,P as qe,M as fe}from"./ModalDelete-e666945f.js";import{I as Ke,m as Se,U as Xe,a as ze,D as Je}from"./UploadFileModel-556f8c1c.js";import{E as Qe}from"./Eye-bd865af3.js";import{T as Ze}from"./index-75d71bb2.js";import{F as es}from"./FilePreview-05d835a3.js";import{T as ss,C as Z}from"./TableRowsLoader-c4300d5c.js";import{A as ts}from"./AlertError-9fdceddd.js";import{K as ns,a as as}from"./KeyboardArrowUp-80820a8c.js";import{D as os}from"./DeleteOutlineOutlined-7644538f.js";import{A as is}from"./Add-94c13e39.js";import{u as ee,c as se,e as De,C as ye,b as rs,d as I}from"./formik.esm-799b94e8.js";import{A as ls,a as ds,F as cs,b as ms}from"./fr-3088b82b.js";import{E as ps}from"./ExpandMore-6e3ae782.js";import{D as Y}from"./DatePicker-05f47eec.js";import{C as us}from"./Container-7ef0f39f.js";import{M as pe}from"./ModalConfirm-37aae7aa.js";const hs=j.memo(r=>{let{count:m=0,items:o=[],onDeselectAll:n,onDeselectOne:l,onSelectAll:d,onSelectOne:p,selected:b=[],isLoading:C,isError:v}=r;const s=w(),[g,f]=j.useState(0),[a,x]=j.useState(!1),[O,S]=j.useState(25),{t:h,i18n:Ms}=P(),[Pe,_e]=j.useState({}),[ue,he]=j.useState(!1),[Oe,Me]=j.useState(),[xe,Ae]=j.useState(),Ce=[{mode:1,text:h(t.global.oui)},{mode:2,text:h(t.global.enCours)},{mode:3,text:h(t.global.echec)}],Ee=[h(t.paiment.espece),h(t.paiment.virment),h(t.paiment.cheque),h(t.paiment.lcn)],[ve,te]=j.useState(null),ne=!!ve,we=(c,D)=>{Ae(D),te(c.currentTarget)},Re=()=>{te(null)},Ue=c=>{_e(D=>({...D,[c]:!D[c]}))},K=(c,D)=>{const G=o.filter(H=>H.id==c);s(i.actions.setCurrentData(G[0])),D=="update"?s(i.actions.openCloseModalUpdate()):D=="delete"?s(i.actions.openCloseModalDelete()):D=="paimentHistory"?s(i.actions.openCloseModalHistory()):x(!0)},Te=(c,D)=>{f(D)},Ie=c=>{S(parseInt(c.target.value,10)),f(0)},ge=o==null?void 0:o.slice(g*O,g*O+O),Fe=c=>{F.put("/payment/payed/",{id:xe,mode:c}).then(D=>{s(i.actions.handlePayed({id:xe,data:D.data})),te(null)})};return e.jsxs(e.Fragment,{children:[e.jsxs(je,{sx:{position:"relative"},children:[e.jsx(ie,{component:oe,children:e.jsxs(re,{sx:{minWidth:700},children:[e.jsx(le,{children:e.jsxs(T,{children:[e.jsx(u,{align:"left"}),e.jsx(u,{children:h(t.client.title)}),e.jsxs(u,{children:[h(t.paiment.amount)," ",h(t.global.mad)]}),e.jsx(u,{children:h(t.entrer.date)}),e.jsx(u,{children:h(t.paiment.typePayment)}),e.jsx(u,{children:h(t.paiment.isPayed)}),e.jsx(u,{})]})}),C?e.jsx(ss,{rowsNum:10}):e.jsx(de,{children:ge.length>0?ge.map(c=>{const D=Pe[c.id]||!1;let G=new Date(c.date),H={year:G.getFullYear(),month:`${G.getMonth()+1}`,day:`${G.getDate()}`};const Ge=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(T,{hover:!0,children:[e.jsx(u,{children:c.payment_proof.length!==0&&e.jsx(M,{"aria-label":"expand row",size:"small",onClick:()=>Ue(c.id),children:D?e.jsx(ns,{}):e.jsx(as,{})})}),e.jsxs(u,{children:[c.client_f_n," ",c.client_l_n]}),e.jsx(u,{sx:{direction:"initial",whiteSpace:"nowrap"},children:Ge.format(c.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(u,{children:[" ",H.day.padStart(2,0),"/",H.month.padStart(2,0),"/",H.year]}),e.jsx(u,{children:Ee[c.mode-1]}),e.jsx(u,{children:e.jsxs("div",{children:[e.jsx(E,{id:"basic-button","aria-controls":ne?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":ne?"true":void 0,onClick:y=>we(y,c.id),color:c.payed==1?"success":c.payed==2?"warning":"error",sx:{"&:disabled":{color:y=>y.palette.success.dark}},disabled:c.mode==1||c.mode==2,children:Ce[Number(c.payed)-1].text}),(c.payed==3||c.history)&&e.jsx(M,{color:"success",onClick:()=>K(c.id,"paimentHistory"),children:e.jsx(U,{children:e.jsx(Ke,{path:Se,size:1})})}),e.jsx(be,{id:"basic-menu",anchorEl:ve,open:ne,onClose:Re,MenuListProps:{"aria-labelledby":"basic-button"},children:Ce.map((y,ae)=>e.jsx(A,{onClick:As=>Fe(y.mode),children:y.text},ae))})]})}),e.jsxs(u,{children:[e.jsx(M,{color:"warning",onClick:()=>K(c.id,"update"),children:e.jsx(U,{children:e.jsx($e,{})})}),e.jsx(M,{color:"error",onClick:()=>K(c.id,"delete"),children:e.jsx(U,{children:e.jsx(os,{})})}),c.payment_proof.length!==4&&e.jsx(M,{color:"success",onClick:()=>K(c.id,"upload"),children:e.jsx(U,{children:e.jsx(is,{})})})]})]},c.id),e.jsx(T,{children:e.jsx(u,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(Le,{in:D,timeout:"auto",unmountOnExit:!0,children:e.jsx(ie,{sx:{width:"100%"},component:oe,children:e.jsxs(re,{sx:{width:"100%"},children:[e.jsx(le,{children:e.jsxs(T,{children:[e.jsx(u,{children:h(t.paiment.fileName)}),e.jsx(u,{})]})}),e.jsx(de,{children:c.payment_proof.map((y,ae)=>e.jsxs(T,{children:[e.jsx(u,{children:y.file.replace("http://192.168.1.97:8000/api".replace("/api","")+"/uploads/","")}),e.jsxs(u,{children:[" ",e.jsx(M,{color:"inherit",onClick:()=>{s(i.actions.openCloseConfirmDeleteProof()),s(i.actions.setCurrentData({id:c.id,idFile:y.id}))},children:e.jsx(U,{children:e.jsx(Ze,{})})}),e.jsx(M,{color:"secondary",onClick:()=>{Me({file:y.file,extension:y.extension}),he(!0)},children:e.jsx(U,{children:e.jsx(Qe,{})})})]})]},ae))})]})})})})})]})}):e.jsx(T,{children:e.jsx(u,{colSpan:5,sx:{textAlign:"center"},children:h(t.batiment.nothingToDisplay)})})})]})}),e.jsx(Ye,{component:"div",count:m,onPageChange:Te,onRowsPerPageChange:Ie,page:g,rowsPerPage:O,rowsPerPageOptions:[5,10,25],labelRowsPerPage:h(t.batiment.Lignes),labelDisplayedRows:({from:c,to:D,count:G})=>`${c}–${D} ${h(t.batiment.sur)} ${G}`}),v&&e.jsx(ts,{})]}),a&&e.jsx(Xe,{isModalUpload:a,close:()=>x(!1)}),ue&&e.jsx(es,{isPreview:ue,close:()=>he(!1),file:Oe})]})});function xs({clients:r}){J.locale("fr");const{t:m,i18n:o}=P(),n=w(),l=ee({initialValues:{date1:null,date2:null,client:""},validationSchema:se({date1:De().nullable().test("is-before-date2",m(t.global.date2Greather),function(d){const{date2:p}=this.parent;return d<=p}),date2:De().nullable().test("is-after-date1",m(t.global.date2Greather),function(d){const{date1:p}=this.parent;return d>=p})}),onSubmit:async(d,{resetForm:p,setErrors:b})=>{let C="";for(let v in d)if(d[v]!==""&&d[v]!==null){let s=new Date(d[v]),g=s.getFullYear()!==1970?`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`:d[v];C==""?C+=`?${v}=${g}`:C+=`&${v}=${g}`}F.get("/payment/list/"+C).then(v=>{n(i.actions.fetchPaiment(v.data))})},onReset:()=>{F.get("/payment/list/").then(d=>{n(i.actions.fetchPaiment(d.data))})}});return e.jsxs(ls,{defaultExpanded:!0,children:[e.jsx(ds,{expandIcon:e.jsx(ps,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(cs,{}),m(t.global.filter)]})}),e.jsx(ms,{children:e.jsx(ye,{children:e.jsx(rs,{children:e.jsx("form",{noValidate:!0,onSubmit:l.handleSubmit,onReset:l.handleReset,children:e.jsxs(L,{container:!0,alignItems:"center",gap:2,children:[e.jsx(L,{item:!0,xs:12,md:5,sm:12,children:e.jsxs(N,{fullWidth:!0,children:[e.jsx(k,{id:"batiment-id",children:m(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:l.handleBlur,fullWidth:!0,name:"client",onChange:l.handleChange,value:l.values.client,label:m(t.client.title),children:r==null?void 0:r.map(d=>e.jsxs(A,{value:d.id,children:[d.first_name," ",d.last_name]}))})]})}),e.jsx(L,{item:!0,xs:12,md:2,sm:12,children:e.jsx(Y,{value:l.values.date1,onChange:d=>l.setFieldValue("date1",d),onBlur:l.handleBlur,label:m(t.global.date1),name:"date",slotProps:{textField:{variant:"outlined",error:!!(l.touched.date1&&l.errors.date1),helperText:l.touched.date1&&l.errors.date1}}})}),e.jsx(L,{item:!0,xs:12,md:2,sm:12,children:e.jsx(Y,{value:l.values.date2,onChange:d=>l.setFieldValue("date2",d),onBlur:l.handleBlur,label:m(t.global.date2),name:"date",slotProps:{textField:{variant:"outlined",error:!!(l.touched.date2&&l.errors.date2),helperText:l.touched.date2&&l.errors.date2}}})}),e.jsxs(L,{item:!0,container:!0,xs:12,md:12,sm:12,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(L,{items:!0,children:e.jsx(E,{variant:"contained",type:"reset",children:m(t.global.reset)})}),e.jsx(L,{items:!0,children:e.jsx(E,{type:"submit",variant:"contained",children:m(t.global.filter)})})]})]})})})})})]})}function Cs(){const r=w(),{t:m,i18n:o}=P(),{paiment:n}=R(p=>p.paiment),l=X("paiment",z.getPaiments),d=X("clients",z.getClientSelect);return j.useEffect(()=>{l.status=="success"&&r(i.actions.fetchPaiment(l.data))},[l.status]),e.jsx(us,{maxWidth:"xl",children:e.jsxs(W,{spacing:4,children:[e.jsxs(W,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(W,{spacing:1,children:e.jsx($,{variant:"h4",children:m(t.paiment.title)})}),e.jsx(W,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(E,{startIcon:e.jsx(U,{children:e.jsx(qe,{})}),variant:"contained",onClick:()=>r(i.actions.openCloseModalAdd()),children:m(t.global.ajouter)})})]}),e.jsxs(ye,{children:[e.jsx(xs,{clients:d.data}),e.jsx(hs,{items:n,count:n.length,rowsPerPage:25,isLoading:l.isLoading,isError:l.isError})]})]})})}const vs={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function gs({clients:r,paimentModes:m}){const o=w(),{t:n,i18n:l}=P();JSON.parse(sessionStorage.getItem("user"));const{currentData:d,isModalUpdate:p,isConfirm:b}=R(a=>a.paiment),C=[n(t.paiment.espece),n(t.paiment.virment),n(t.paiment.cheque),n(t.paiment.lcn)],v=se({client:I().required(n(t.sortie.clientRequired)),amount:I().required(n(t.paiment.amountRequired)),mode:I().required(n(t.paiment.typePaymentRequired))}),s=ee({initialValues:{client:"",amount:"",mode:"",date:new Date},validationSchema:v,onSubmit:async(a,{resetForm:x,setErrors:O})=>{const S={...a};console.log(a),S.date=J(a.date).format("YYYY-MM-DD"),F.put("/payment/update/",S).then(h=>{o(i.actions.editPaiment(h.data)),o(i.actions.openCloseModalUpdate()),o(i.actions.openCloseConfirm()),_.success(n(t.paiment.toastUpdateSuccess)),x()}).catch(h=>{o(i.actions.openCloseConfirm()),_.error(n(t.global.toastError))})}}),g=async a=>{a.preventDefault();const x=await s.validateForm();Object.keys(x).length===0?o(i.actions.openCloseConfirm()):await s.submitForm()},f=()=>{s.handleSubmit()};return j.useEffect(()=>{let a={...d};a.date=new Date(a.date),s.setValues(a)},[]),e.jsxs(e.Fragment,{children:[e.jsx(q,{open:p,onClose:()=>o(i.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(Q,{sx:vs,children:[e.jsxs(W,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx($,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(t.paiment.update)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(i.actions.openCloseModalUpdate()),children:e.jsx(Z,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:a=>g(a),children:[e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.client&&s.errors.client),children:[e.jsx(k,{id:"batiment-id",children:n(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"client",onChange:s.handleChange,value:s.values.client,label:n(t.client.title),children:r.map(a=>e.jsxs(A,{value:a.id,children:[a.first_name," ",a.last_name]}))}),s.touched.client&&s.errors.client&&e.jsx(V,{children:s.errors.client})]}),e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.mode&&s.errors.mode),children:[e.jsx(k,{id:"batiment-id",children:n(t.paiment.typePayment)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"mode",onChange:s.handleChange,value:s.values.mode,label:n(t.paiment.typePayment),children:m.map(a=>e.jsx(A,{value:a.id,children:C[a.id-1]}))}),s.touched.mode&&s.errors.mode&&e.jsx(V,{children:s.errors.mode})]}),e.jsx(me,{id:"outlined-basic",label:n(t.paiment.amount),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:s.handleChange,value:s.values.amount,error:!!(s.touched.amount&&s.errors.amount),helperText:s.touched.amount&&s.errors.amount,style:{marginBottom:"15px"}}),e.jsx(Y,{label:n(t.entrer.date),value:s.values.date,onChange:a=>s.setFieldValue("date",a),onBlur:s.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(E,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(t.global.modifier)})]})]})}),e.jsx(pe,{confirmed:f,cancel:()=>o(i.actions.openCloseConfirm()),isConfirm:b})]})}const Ds={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function js({clients:r,paimentModes:m}){const o=w(),{t:n,i18n:l}=P();JSON.parse(sessionStorage.getItem("user"));const{paiment:d,isModalAdd:p,isConfirm:b}=R(a=>a.paiment),C=[n(t.paiment.espece),n(t.paiment.virment),n(t.paiment.cheque),n(t.paiment.lcn)],v=se({client:I().required(n(t.sortie.clientRequired)),amount:I().required(n(t.paiment.amountRequired)),mode:I().required(n(t.paiment.typePaymentRequired))}),s=ee({initialValues:{client:"",amount:"",mode:"",date:new Date},validationSchema:v,onSubmit:async(a,{resetForm:x,setErrors:O})=>{const S={...a};S.date=J(a.date).format("YYYY-MM-DD"),F.post("/payment/add/",S).then(h=>{o(i.actions.addPaiment(h.data)),o(i.actions.openCloseModalAdd()),o(i.actions.openCloseConfirm()),_.success(n(t.paiment.toastAddSuccess)),x()}).catch(h=>{o(i.actions.openCloseConfirm()),_.error(n(t.global.toastError))})}}),g=async a=>{a.preventDefault();const x=await s.validateForm();Object.keys(x).length===0?o(i.actions.openCloseConfirm()):await s.submitForm()},f=()=>{s.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(q,{open:p,onClose:()=>o(i.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(Q,{sx:Ds,children:[e.jsxs(W,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx($,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(t.paiment.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(i.actions.openCloseModalAdd()),children:e.jsx(Z,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:a=>g(a),children:[e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.client&&s.errors.client),children:[e.jsx(k,{id:"batiment-id",children:n(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"client",onChange:s.handleChange,value:s.values.client,label:n(t.client.title),children:r.length>0?r.map(a=>e.jsxs(A,{value:a.id,children:[a.first_name," ",a.last_name]})):e.jsx(A,{children:n(t.batiment.nothingToDisplay)})}),s.touched.client&&s.errors.client&&e.jsx(V,{children:s.errors.client})]}),e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.mode&&s.errors.mode),children:[e.jsx(k,{id:"batiment-id",children:n(t.paiment.typePayment)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"mode",onChange:s.handleChange,value:s.values.mode,label:n(t.paiment.typePayment),children:m.map(a=>e.jsx(A,{value:a.id,children:C[a.id-1]}))}),s.touched.mode&&s.errors.mode&&e.jsx(V,{children:s.errors.mode})]}),e.jsx(me,{id:"outlined-basic",label:n(t.paiment.amount),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:s.handleChange,value:s.values.amount,error:!!(s.touched.amount&&s.errors.amount),helperText:s.touched.amount&&s.errors.amount,style:{marginBottom:"15px"}}),e.jsx(Y,{label:n(t.entrer.date),value:s.values.date,onChange:a=>s.setFieldValue("date",a),onBlur:s.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(E,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(t.global.ajouter)})]})]})}),e.jsx(pe,{confirmed:f,cancel:()=>o(i.actions.openCloseConfirm()),isConfirm:b})]})}function bs(){const{currentData:r,isModalDelete:m}=R(p=>p.paiment),o=w(),{t:n,i18n:l}=P();JSON.parse(sessionStorage.getItem("user"));const d=()=>{F.delete(`/payment/delete/${r.id}`).then(p=>{o(i.actions.deletePaiment()),o(i.actions.openCloseModalDelete()),_.success(n(t.paiment.toastDeleteSuccess))}).catch(p=>{o(i.actions.openCloseModalDelete()),_.error(n(t.global.toastError))})};return e.jsx(q,{open:m,onClose:()=>o(i.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(fe,{title:n(t.paiment.deleteTitle),message:n(t.paiment.deleteDescription),deleteFn:d,cancel:()=>o(i.actions.openCloseModalDelete())})})}function fs(){const{currentData:r,isModalDeleteProof:m}=R(p=>p.paiment),o=w(),{t:n,i18n:l}=P(),d=()=>{F.delete(`/payment/proof/delete/${r.idFile}`).then(p=>{o(i.actions.deletePaimentProof()),o(i.actions.openCloseConfirmDeleteProof()),_.success(n(t.global.toastSuccessDeleteFile))}).catch(p=>{o(i.actions.openCloseConfirmDeleteProof()),_.error(n(t.global.toastError))})};return e.jsx(q,{open:m,onClose:()=>o(i.actions.openCloseConfirmDeleteProof()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(fe,{title:n(t.paiment.deleteTitleFile),message:n(t.paiment.deleteDescriptionFile),deleteFn:d,cancel:()=>o(i.actions.openCloseConfirmDeleteProof())})})}function Ss(){const{t:r,i18n:m}=P(),{currentData:o}=R(s=>s.paiment),n=[{mode:1,text:r(t.global.oui)},{mode:2,text:r(t.global.enCours)},{mode:3,text:r(t.global.echec)}],l=[r(t.paiment.espece),r(t.paiment.virment),r(t.paiment.cheque),r(t.paiment.lcn)],[d,p]=j.useState(null),b=!!d,C=(s,g)=>{setCurrentId(g),p(s.currentTarget)},v=()=>{p(null)};return e.jsx(je,{sx:{position:"relative"},children:e.jsx(ie,{component:oe,children:e.jsxs(re,{sx:{minWidth:700},children:[e.jsx(le,{children:e.jsxs(T,{children:[e.jsxs(u,{children:[r(t.paiment.amount)," ",r(t.global.mad)]}),e.jsx(u,{children:r(t.entrer.date)}),e.jsx(u,{children:r(t.paiment.typePayment)}),e.jsx(u,{children:r(t.paiment.isPayed)})]})}),e.jsx(de,{children:o.payment_correction.map(s=>{const g=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});let f=new Date(s.date),a={year:f.getFullYear(),month:`${f.getMonth()+1}`,day:`${f.getDate()}`};return e.jsxs(T,{children:[e.jsxs(u,{sx:{direction:"initial"},children:[" ",g.format(s.amount).replaceAll(","," ").replace("MAD","")]}),e.jsxs(u,{children:[" ",a.day.padStart(2,0),"/",a.month.padStart(2,0),"/",a.year]}),e.jsx(u,{children:l[s.mode-1]}),e.jsxs(u,{children:[" ",e.jsxs("div",{children:[e.jsx(E,{id:"basic-button","aria-controls":b?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":b?"true":void 0,onClick:x=>C(x,s.id),color:s.payed==1?"success":s.payed==2?"warning":"error",sx:{"&:disabled":{color:x=>x.palette.success.dark}},disabled:s.mode==1||s.mode==2,children:n[Number(s.payed)-1].text}),s.payed==3&&e.jsx(M,{color:"success",onClick:()=>openModal(s.id,"paimentHistory"),children:e.jsx(U,{children:e.jsx(ze,{path:Se,size:1})})}),e.jsx(be,{id:"basic-menu",anchorEl:d,open:b,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},children:n.map((x,O)=>e.jsx(A,{onClick:S=>handlePayed(x.mode),children:x.text},O))})]})]})]})})})]})})})}function ys(){const r=w(),m=We(),{t:o}=P(),{currentData:n,isModalHistory:l}=R(C=>C.paiment),d=Ne(m.breakpoints.down("md")),[p,b]=j.useState(!0);return j.useEffect(()=>{let C=n.payment_correction[0].amount;n.payment_correction.slice(1,n.payment_correction.length).reduce((s,g)=>g.payed==1?s+g.amount:s,0)>=C&&b(!1)},[n]),e.jsxs(ke,{onClose:()=>r(i.actions.openCloseModalHistory()),fullScreen:d,open:l,maxWidth:"lg",children:[e.jsxs(Je,{sx:{m:0,p:2.5},id:"customized-dialog-title",children:[o(t.paiment.titleHistory)," ",n.client_f_n," ",n.client_l_n]}),e.jsx(M,{"aria-label":"close",onClick:()=>r(i.actions.openCloseModalHistory()),sx:C=>({position:"absolute",right:8,top:8,color:C.palette.grey[500]}),children:e.jsx(Z,{})}),e.jsxs(Be,{children:[e.jsxs(He,{direction:"row",justifyContent:"space-between",alignItems:"center",mb:1.5,children:[e.jsx($,{variant:"h6"}),p&&e.jsx(E,{variant:"contained",onClick:()=>r(i.actions.openCloseModalAddHistory()),children:o(t.global.ajouter)})]}),e.jsx(Ss,{})]})]})}const Ps={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function _s({paimentModes:r}){const m=w(),{t:o,i18n:n}=P(),l=[o(t.paiment.espece),o(t.paiment.virment),o(t.paiment.cheque),o(t.paiment.lcn)],{paiment:d,isModalAddHistory:p,currentData:b,isConfirm:C}=R(a=>a.paiment),v=se({amount:I().required(o(t.paiment.amountRequired)),mode:I().required(o(t.paiment.typePaymentRequired))}),s=ee({initialValues:{amount:"",mode:"",date:new Date,payment:b.id},validationSchema:v,onSubmit:async(a,{resetForm:x,setErrors:O})=>{const S={...a};S.date=J(a.date).format("YYYY-MM-DD"),F.post("/payment/addcorrection/",S).then(h=>{m(i.actions.addPaimentHistory(h.data)),m(i.actions.openCloseModalAddHistory()),m(i.actions.openCloseConfirm()),_.success(o(t.paiment.toastAddSuccess)),x()}).catch(h=>{m(i.actions.openCloseConfirm()),_.error(o(t.global.toastError))})}}),g=async a=>{a.preventDefault();const x=await s.validateForm();Object.keys(x).length===0?m(i.actions.openCloseConfirm()):await s.submitForm()},f=()=>{s.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(q,{open:p,onClose:()=>m(i.actions.openCloseModalAddHistory()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(Q,{sx:Ps,children:[e.jsxs(W,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx($,{id:"modal-modal-title",variant:"h6",component:"h2",children:o(t.paiment.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>m(i.actions.openCloseModalAddHistory()),children:e.jsx(Z,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:a=>g(a),children:[e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.mode&&s.errors.mode),children:[e.jsx(k,{id:"batiment-id",children:o(t.paiment.typePayment)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"mode",onChange:s.handleChange,value:s.values.mode,label:o(t.paiment.typePayment),children:r.map(a=>e.jsx(A,{value:a.id,children:l[a.id-1]}))}),s.touched.mode&&s.errors.mode&&e.jsx(V,{children:s.errors.mode})]}),e.jsx(me,{id:"outlined-basic",label:o(t.paiment.amount),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:s.handleChange,value:s.values.amount,error:!!(s.touched.amount&&s.errors.amount),helperText:s.touched.amount&&s.errors.amount,style:{marginBottom:"15px"}}),e.jsx(Y,{label:o(t.entrer.date),value:s.values.date,onChange:a=>s.setFieldValue("date",a),onBlur:s.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(E,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:o(t.global.ajouter)})]})]})}),e.jsx(pe,{confirmed:f,cancel:()=>m(i.actions.openCloseConfirm()),isConfirm:C})]})}function Os(){const{isModalAdd:r,isModalUpdate:m,isModalHistory:o,isModalAddHistory:n}=R(p=>p.paiment),l=X("clients",z.getClientSelect),d=X("paimentsMode",z.paymentMode);return e.jsxs(Q,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(ce,{children:e.jsx(Cs,{})}),r&&e.jsx(js,{clients:l.data,paimentModes:d.data}),m&&e.jsx(gs,{clients:l.data,paimentModes:d.data}),n&&e.jsx(_s,{paimentModes:d.data}),e.jsx(bs,{}),e.jsx(fs,{}),o&&e.jsxs(ce,{children:[" ",e.jsx(ys,{})]})]})}function Ks(){const{t:r,i18n:m}=P();return e.jsxs("div",{children:[e.jsx(Ve,{title:`ESM | ${r(t.nav.Paiment)}`}),e.jsx(ce,{children:e.jsx(Os,{})})]})}export{Ks as default};
