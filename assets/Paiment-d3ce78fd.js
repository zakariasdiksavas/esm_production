import{r as D,a2 as P,d as f,l as t,j as e,B as Fe,a3 as de,a1 as R,a as G,ak as Ge,ae as M,V as T,al as Le,am as r,h as y,ab as N,ac as W,ad as B,a6 as U,T as Q,a7 as k,F as H,k as Ce,Y as _,S as Ne}from"./index-2315324d.js";import{e as ce,T as me,a as pe,b as w,c as u,d as ue,f as We,g as Z,G as A,u as Y,S as I,h as $,B as ee,E as xe}from"./moment-0b0e8416.js";import{E as Be,P as ke,M as ve}from"./ModalDelete-f6fc281f.js";import{U as Ve}from"./UploadFileModel-f28336f7.js";import{E as He}from"./Eye-ae0c2454.js";import{T as Ye}from"./index-fe901995.js";import{F as $e}from"./FilePreview-7330affd.js";import{T as Ke,C as De}from"./TableRowsLoader-12723a10.js";import{A as qe}from"./AlertError-b447808a.js";import{K as Xe,a as Je}from"./KeyboardArrowUp-16b54b68.js";import{D as ze}from"./DeleteOutlineOutlined-3338308b.js";import{A as Qe}from"./Add-fb3f4505.js";import{u as se,c as te,e as he,C as ge,b as Ze,d as F}from"./formik.esm-a69188f0.js";import{A as es,a as ss,F as ts,b as ns}from"./fr-8077ad92.js";import{E as as}from"./ExpandMore-0cef7d7e.js";import{D as K}from"./DatePicker-794fd4c1.js";import{C as os}from"./Container-efb50e69.js";import{M as rs}from"./ModalConfirm-1555c5f9.js";const is=D.memo(m=>{const d=P();let{count:o=0,items:n=[],onDeselectAll:i,onDeselectOne:c,onSelectAll:p,onSelectOne:O,selected:s=[],isLoading:x,isError:g}=m;const[a,j]=D.useState(0),[V,S]=D.useState(!1),[b,be]=D.useState(25),{t:h,i18n:fe}=f(),[Se,_e]=D.useState({}),[ne,ae]=D.useState(!1),[Pe,Oe]=D.useState(),[oe,Ee]=D.useState(),re=[{mode:1,text:h(t.global.oui)},{mode:2,text:h(t.global.enCours)},{mode:3,text:h(t.global.echec)}],Ae=[h(t.paiment.espece),h(t.paiment.virment),h(t.paiment.cheque),h(t.paiment.lcn)],[ie,q]=D.useState(null),X=!!ie,Me=(l,C)=>{Ee(C),q(l.currentTarget)},ye=()=>{q(null)},Ue=l=>{_e(C=>({...C,[l]:!C[l]}))},J=(l,C)=>{const E=n.filter(L=>L.id==l);d(r.actions.setCurrentData(E[0])),C=="update"?d(r.actions.openCloseModalUpdate()):C=="delete"?d(r.actions.openCloseModalDelete()):S(!0)},Re=(l,C)=>{j(C)},we=l=>{be(parseInt(l.target.value,10)),j(0)},le=n==null?void 0:n.slice(a*b,a*b+b),Te=l=>{y.put("/payment/payed/",{id:oe,mode:l}).then(C=>{d(r.actions.handlePayed({id:oe,data:C.data})),q(null)})};return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{sx:{position:"relative"},children:[e.jsx(ce,{component:de,children:e.jsxs(me,{sx:{minWidth:700},children:[e.jsx(pe,{children:e.jsxs(w,{children:[e.jsx(u,{align:"left"}),e.jsx(u,{children:h(t.client.title)}),e.jsxs(u,{children:[h(t.paiment.amount)," ",h(t.global.mad)]}),e.jsx(u,{children:h(t.entrer.date)}),e.jsx(u,{children:h(t.paiment.typePayment)}),e.jsx(u,{children:h(t.paiment.isPayed)}),e.jsx(u,{})]})}),x?e.jsx(Ke,{rowsNum:10}):e.jsx(ue,{children:le.length>0?le.map(l=>{const C=Se[l.id]||!1;let E=new Date(l.date),L={year:E.getFullYear(),month:`${E.getMonth()+1}`,day:`${E.getDate()}`};const Ie=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(w,{hover:!0,children:[e.jsx(u,{children:l.payment_proof.length!==0&&e.jsx(R,{"aria-label":"expand row",size:"small",onClick:()=>Ue(l.id),children:C?e.jsx(Xe,{}):e.jsx(Je,{})})}),e.jsxs(u,{children:[l.client_f_n," ",l.client_l_n]}),e.jsx(u,{sx:{direction:fe.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:Ie.format(l.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(u,{children:[" ",L.day.padStart(2,0),"/",L.month.padStart(2,0),"/",L.year]}),e.jsx(u,{children:Ae[l.mode-1]}),e.jsx(u,{children:e.jsxs("div",{children:[e.jsx(G,{id:"basic-button","aria-controls":X?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":X?"true":void 0,onClick:v=>Me(v,l.id),color:l.payed==1?"success":l.payed==2?"warning":"error",sx:{"&:disabled":{color:v=>v.palette.success.dark}},disabled:l.mode==1||l.mode==2,children:re[Number(l.payed)-1].text}),e.jsx(Ge,{id:"basic-menu",anchorEl:ie,open:X,onClose:ye,MenuListProps:{"aria-labelledby":"basic-button"},children:re.map((v,z)=>e.jsx(M,{onClick:vs=>Te(v.mode),children:v.text},z))})]})}),e.jsxs(u,{children:[e.jsx(R,{color:"warning",onClick:()=>J(l.id,"update"),children:e.jsx(T,{children:e.jsx(Be,{})})}),e.jsx(R,{color:"error",onClick:()=>J(l.id,"delete"),children:e.jsx(T,{children:e.jsx(ze,{})})}),l.payment_proof.length!==4&&e.jsx(R,{color:"success",onClick:()=>J(l.id,"upload"),children:e.jsx(T,{children:e.jsx(Qe,{})})})]})]},l.id),e.jsx(w,{children:e.jsx(u,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(Le,{in:C,timeout:"auto",unmountOnExit:!0,children:e.jsx(ce,{sx:{width:"100%"},component:de,children:e.jsxs(me,{sx:{width:"100%"},children:[e.jsx(pe,{children:e.jsxs(w,{children:[e.jsx(u,{children:h(t.paiment.fileName)}),e.jsx(u,{})]})}),e.jsx(ue,{children:l.payment_proof.map((v,z)=>e.jsxs(w,{children:[e.jsx(u,{children:v.file.replace("http://192.168.1.97:8000/api".replace("/api","")+"/uploads/","")}),e.jsxs(u,{children:[" ",e.jsx(R,{color:"inherit",onClick:()=>{d(r.actions.openCloseConfirmDeleteProof()),d(r.actions.setCurrentData({id:l.id,idFile:v.id}))},children:e.jsx(T,{children:e.jsx(Ye,{})})}),e.jsx(R,{color:"secondary",onClick:()=>{Oe({file:v.file,extension:v.extension}),ae(!0)},children:e.jsx(T,{children:e.jsx(He,{})})})]})]},z))})]})})})})})]})}):e.jsx(w,{children:e.jsx(u,{colSpan:5,sx:{textAlign:"center"},children:h(t.batiment.nothingToDisplay)})})})]})}),e.jsx(We,{component:"div",count:o,onPageChange:Re,onRowsPerPageChange:we,page:a,rowsPerPage:b,rowsPerPageOptions:[5,10,25],labelRowsPerPage:h(t.batiment.Lignes),labelDisplayedRows:({from:l,to:C,count:E})=>`${l}–${C} ${h(t.batiment.sur)} ${E}`}),g&&e.jsx(qe,{})]}),V&&e.jsx(Ve,{isModalUpload:V,close:()=>S(!1)}),ne&&e.jsx($e,{isPreview:ne,close:()=>ae(!1),file:Pe})]})});function ls({clients:m}){Z.locale("fr");const{t:d,i18n:o}=f(),n=P(),i=se({initialValues:{date1:null,date2:null,client:""},validationSchema:te({date1:he().nullable().test("is-before-date2",d(t.global.date2Greather),function(c){const{date2:p}=this.parent;return c<=p}),date2:he().nullable().test("is-after-date1",d(t.global.date2Greather),function(c){const{date1:p}=this.parent;return c>=p})}),onSubmit:async(c,{resetForm:p,setErrors:O})=>{let s="";for(let x in c)if(c[x]!==""&&c[x]!==null){let g=new Date(c[x]),a=g.getFullYear()!==1970?`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}-${String(g.getDate()).padStart(2,"0")}`:c[x];s==""?s+=`?${x}=${a}`:s+=`&${x}=${a}`}y.get("/payment/list/"+s).then(x=>{n(r.actions.fetchPaiment(x.data))})},onReset:()=>{y.get("/payment/list/").then(c=>{n(r.actions.fetchPaiment(c.data))})}});return e.jsxs(es,{defaultExpanded:!0,children:[e.jsx(ss,{expandIcon:e.jsx(as,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(ts,{}),d(t.global.filter)]})}),e.jsx(ns,{children:e.jsx(ge,{children:e.jsx(Ze,{children:e.jsx("form",{noValidate:!0,onSubmit:i.handleSubmit,onReset:i.handleReset,children:e.jsxs(A,{container:!0,alignItems:"center",gap:2,children:[e.jsx(A,{item:!0,xs:12,md:5,sm:12,children:e.jsxs(N,{fullWidth:!0,children:[e.jsx(W,{id:"batiment-id",children:d(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"client",onChange:i.handleChange,value:i.values.client,label:d(t.client.title),children:m==null?void 0:m.map(c=>e.jsxs(M,{value:c.id,children:[c.first_name," ",c.last_name]}))})]})}),e.jsx(A,{item:!0,xs:12,md:2,sm:12,children:e.jsx(K,{value:i.values.date1,onChange:c=>i.setFieldValue("date1",c),onBlur:i.handleBlur,label:d(t.global.date1),name:"date",slotProps:{textField:{variant:"outlined",error:!!(i.touched.date1&&i.errors.date1),helperText:i.touched.date1&&i.errors.date1}}})}),e.jsx(A,{item:!0,xs:12,md:2,sm:12,children:e.jsx(K,{value:i.values.date2,onChange:c=>i.setFieldValue("date2",c),onBlur:i.handleBlur,label:d(t.global.date2),name:"date",slotProps:{textField:{variant:"outlined",error:!!(i.touched.date2&&i.errors.date2),helperText:i.touched.date2&&i.errors.date2}}})}),e.jsxs(A,{item:!0,container:!0,xs:12,md:12,sm:12,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(A,{items:!0,children:e.jsx(G,{variant:"contained",type:"reset",children:d(t.global.reset)})}),e.jsx(A,{items:!0,children:e.jsx(G,{type:"submit",variant:"contained",children:d(t.global.filter)})})]})]})})})})})]})}function ds(){const m=P(),{t:d,i18n:o}=f(),{paiment:n}=U(p=>p.paiment),i=Y("paiment",$.getPaiments),c=Y("clients",$.getClientSelect);return D.useEffect(()=>{i.status=="success"&&m(r.actions.fetchPaiment(i.data))},[i.status]),e.jsx(os,{maxWidth:"xl",children:e.jsxs(I,{spacing:4,children:[e.jsxs(I,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(I,{spacing:1,children:e.jsx(Q,{variant:"h4",children:d(t.paiment.title)})}),e.jsx(I,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(G,{startIcon:e.jsx(T,{children:e.jsx(ke,{})}),variant:"contained",onClick:()=>m(r.actions.openCloseModalAdd()),children:d(t.global.ajouter)})})]}),e.jsxs(ge,{children:[e.jsx(ls,{clients:c.data}),e.jsx(is,{items:n,count:n.length,rowsPerPage:25,isLoading:i.isLoading,isError:i.isError})]})]})})}function je({confirmed:m}){const{currentData:d,isConfirm:o}=U(O=>O.paiment),n=P(),{t:i,i18n:c}=f(),p=()=>{m()};return e.jsx(k,{open:o,onClose:()=>n(r.actions.openCloseConfirm()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(rs,{title:i(t.global.confirmOperation),message:i(t.global.confirmMessage),confirmFn:p,cancel:()=>n(r.actions.openCloseConfirm())})})}const cs={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ms({clients:m,paimentModes:d}){const o=P(),{t:n,i18n:i}=f();JSON.parse(sessionStorage.getItem("user"));const{currentData:c,isModalUpdate:p}=U(a=>a.paiment),O=te({client:F().required(n(t.sortie.clientRequired)),amount:F().required(n(t.paiment.amountRequired)),mode:F().required(n(t.paiment.typePaymentRequired))}),s=se({initialValues:{client:"",amount:"",mode:"",date:new Date},validationSchema:O,onSubmit:async(a,{resetForm:j,setErrors:V})=>{const S={...a};console.log(a),S.date=Z(a.date).format("YYYY-MM-DD"),y.put("/payment/update/",S).then(b=>{o(r.actions.editPaiment(b.data)),o(r.actions.openCloseModalUpdate()),o(r.actions.openCloseConfirm()),_.success(n(t.paiment.toastUpdateSuccess)),j()}).catch(b=>{o(r.actions.openCloseConfirm()),_.error(n(t.global.toastError))})}}),x=async a=>{a.preventDefault();const j=await s.validateForm();Object.keys(j).length===0?o(r.actions.openCloseConfirm()):await s.submitForm()},g=()=>{s.handleSubmit()};return D.useEffect(()=>{let a={...c};a.date=new Date(a.date),s.setValues(a)},[]),e.jsxs(e.Fragment,{children:[e.jsx(k,{open:p,onClose:()=>o(r.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ee,{sx:cs,children:[e.jsxs(I,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Q,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(t.paiment.update)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(r.actions.openCloseModalUpdate()),children:e.jsx(De,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:a=>x(a),children:[e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.client&&s.errors.client),children:[e.jsx(W,{id:"batiment-id",children:n(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"client",onChange:s.handleChange,value:s.values.client,label:n(t.client.title),children:m.map(a=>e.jsxs(M,{value:a.id,children:[a.first_name," ",a.last_name]}))}),s.touched.client&&s.errors.client&&e.jsx(H,{children:s.errors.client})]}),e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.mode&&s.errors.mode),children:[e.jsx(W,{id:"batiment-id",children:n(t.paiment.typePayment)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"mode",onChange:s.handleChange,value:s.values.mode,label:n(t.paiment.typePayment),children:d.map(a=>e.jsx(M,{value:a.id,children:a.value}))}),s.touched.mode&&s.errors.mode&&e.jsx(H,{children:s.errors.mode})]}),e.jsx(Ce,{id:"outlined-basic",label:n(t.paiment.amount),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:s.handleChange,value:s.values.amount,error:!!(s.touched.amount&&s.errors.amount),helperText:s.touched.amount&&s.errors.amount,style:{marginBottom:"15px"}}),e.jsx(K,{label:n(t.entrer.date),value:s.values.date,onChange:a=>s.setFieldValue("date",a),onBlur:s.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(t.global.modifier)})]})]})}),e.jsx(je,{confirmed:g})]})}const ps={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function us({clients:m,paimentModes:d}){const o=P(),{t:n,i18n:i}=f();JSON.parse(sessionStorage.getItem("user"));const{paiment:c,isModalAdd:p}=U(a=>a.paiment),O=te({client:F().required(n(t.sortie.clientRequired)),amount:F().required(n(t.paiment.amountRequired)),mode:F().required(n(t.paiment.typePaymentRequired))}),s=se({initialValues:{client:"",amount:"",mode:"",date:new Date},validationSchema:O,onSubmit:async(a,{resetForm:j,setErrors:V})=>{const S={...a};S.date=Z(a.date).format("YYYY-MM-DD"),y.post("/payment/add/",S).then(b=>{o(r.actions.addPaiment(b.data)),o(r.actions.openCloseModalAdd()),o(r.actions.openCloseConfirm()),_.success(n(t.paiment.toastAddSuccess)),j()}).catch(b=>{o(r.actions.openCloseConfirm()),_.error(n(t.global.toastError))})}}),x=async a=>{a.preventDefault();const j=await s.validateForm();Object.keys(j).length===0?o(r.actions.openCloseConfirm()):await s.submitForm()},g=()=>{s.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(k,{open:p,onClose:()=>o(r.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ee,{sx:ps,children:[e.jsxs(I,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Q,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(t.paiment.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(r.actions.openCloseModalAdd()),children:e.jsx(De,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:a=>x(a),children:[e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.client&&s.errors.client),children:[e.jsx(W,{id:"batiment-id",children:n(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"client",onChange:s.handleChange,value:s.values.client,label:n(t.client.title),children:m.length>0?m.map(a=>e.jsxs(M,{value:a.id,children:[a.first_name," ",a.last_name]})):e.jsx(M,{children:n(t.batiment.nothingToDisplay)})}),s.touched.client&&s.errors.client&&e.jsx(H,{children:s.errors.client})]}),e.jsxs(N,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.mode&&s.errors.mode),children:[e.jsx(W,{id:"batiment-id",children:n(t.paiment.typePayment)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"mode",onChange:s.handleChange,value:s.values.mode,label:n(t.paiment.typePayment),children:d.map(a=>e.jsx(M,{value:a.id,children:a.value}))}),s.touched.mode&&s.errors.mode&&e.jsx(H,{children:s.errors.mode})]}),e.jsx(Ce,{id:"outlined-basic",label:n(t.paiment.amount),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:s.handleChange,value:s.values.amount,error:!!(s.touched.amount&&s.errors.amount),helperText:s.touched.amount&&s.errors.amount,style:{marginBottom:"15px"}}),e.jsx(K,{label:n(t.entrer.date),value:s.values.date,onChange:a=>s.setFieldValue("date",a),onBlur:s.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(t.global.ajouter)})]})]})}),e.jsx(je,{confirmed:g})]})}function hs(){const{currentData:m,isModalDelete:d}=U(p=>p.paiment),o=P(),{t:n,i18n:i}=f();JSON.parse(sessionStorage.getItem("user"));const c=()=>{y.delete(`/payment/delete/${m.id}`).then(p=>{o(r.actions.deletePaiment()),o(r.actions.openCloseModalDelete()),_.success(n(t.paiment.toastDeleteSuccess))}).catch(p=>{o(r.actions.openCloseModalDelete()),_.error(n(t.global.toastError))})};return e.jsx(k,{open:d,onClose:()=>o(r.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(ve,{title:n(t.paiment.deleteTitle),message:n(t.paiment.deleteDescription),deleteFn:c,cancel:()=>o(r.actions.openCloseModalDelete())})})}function Cs(){const{currentData:m,isModalDeleteProof:d}=U(p=>p.paiment),o=P(),{t:n,i18n:i}=f(),c=()=>{y.delete(`/payment/proof/delete/${m.idFile}`).then(p=>{o(r.actions.deletePaimentProof()),o(r.actions.openCloseConfirmDeleteProof()),_.success(n(t.global.toastSuccessDeleteFile))}).catch(p=>{o(r.actions.openCloseConfirmDeleteProof()),_.error(n(t.global.toastError))})};return e.jsx(k,{open:d,onClose:()=>o(r.actions.openCloseConfirmDeleteProof()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(ve,{title:n(t.paiment.deleteTitleFile),message:n(t.paiment.deleteDescriptionFile),deleteFn:c,cancel:()=>o(r.actions.openCloseConfirmDeleteProof())})})}function xs(){const{isModalAdd:m,isModalUpdate:d}=U(i=>i.paiment),o=Y("clients",$.getClientSelect),n=Y("paimentsMode",$.paymentMode);return e.jsxs(ee,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(xe,{children:e.jsx(ds,{})}),m&&e.jsx(us,{clients:o.data,paimentModes:n.data}),d&&e.jsx(ms,{clients:o.data,paimentModes:n.data}),e.jsx(hs,{}),e.jsx(Cs,{})]})}function Fs(){const{t:m,i18n:d}=f();return e.jsxs("div",{children:[e.jsx(Ne,{title:`ESM | ${m(t.nav.Paiment)}`}),e.jsx(xe,{children:e.jsx(xs,{})})]})}export{Fs as default};