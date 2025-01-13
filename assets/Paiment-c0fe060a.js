import{r as v,a2 as I,d as M,l as s,j as e,B as ve,a3 as De,a1 as _,a as G,V as k,ak as Ae,ae as R,al as We,am as r,h as A,ab as V,ac as Y,ad as $,a6 as W,T as se,a7 as J,F as te,k as le,Y as T,O as ke,u as Ne,an as Le,ao as Be,i as He,S as Ve}from"./index-0909516e.js";import{e as ge,T as fe,a as be,b as F,c as u,d as Se,P as Ye,f as ne,G as B,u as re,S as H,h as ie,B as de,E as ye}from"./moment-648dda2f.js";import{E as $e,P as qe,M as _e}from"./ModalDelete-5fb89211.js";import{I as Ke,m as we,U as ze,a as Xe,C as Je,D as Qe}from"./UploadFileModel-2987fa12.js";import{E as Ze}from"./Eye-39b28278.js";import{C as et,T as tt}from"./index-dacba1f3.js";import{F as st}from"./FilePreview-3f822ebe.js";import{T as nt,C as ce}from"./TableRowsLoader-022b84e6.js";import{A as at}from"./AlertError-00fd4b21.js";import{K as ot,a as rt}from"./KeyboardArrowUp-70496bb3.js";import{D as it}from"./DeleteOutlineOutlined-2fabed8a.js";import{u as me,c as ue,e as Ee,C as Ue,b as lt,d as N}from"./formik.esm-f6e343f0.js";import{A as dt,a as ct,F as mt,b as ut}from"./fr-897bdd02.js";import{E as pt}from"./ExpandMore-09db540a.js";import{D as X}from"./DatePicker-ffa02013.js";import{C as ht}from"./Container-606bae81.js";import{M as Pe}from"./ModalConfirm-9cd4ab44.js";import{D as xt}from"./Delete-2865585c.js";import{E as Ct}from"./Edit-8285a0d2.js";import{C as jt}from"./Check-9370a5e1.js";const vt=v.memo(i=>{let{count:d=0,items:a=[],onDeselectAll:n,onDeselectOne:l,onSelectAll:c,onSelectOne:h,selected:S=[],isLoading:j,isError:C}=i;const t=I(),[D,P]=v.useState(1),[o,g]=v.useState(!1),[w,y]=v.useState(25),{t:x,i18n:Oe}=M(),[pe,he]=v.useState({}),[ae,q]=v.useState(!1),[xe,Ce]=v.useState(),[p,f]=v.useState(),U=[{mode:1,text:x(s.global.oui)},{mode:2,text:x(s.global.enCours)},{mode:3,text:x(s.global.echec)}],Q=[x(s.paiment.espece),x(s.paiment.virment),x(s.paiment.cheque),x(s.paiment.lcn)],[K,O]=v.useState(null),L=!!K,Me=(m,b)=>{f(b),O(m.currentTarget)},Re=()=>{O(null)},Te=m=>{he(b=>({...b,[m]:!b[m]}))},oe=(m,b)=>{const Z=a.filter(ee=>ee.id==m);t(r.actions.setCurrentData(Z[0])),b=="update"?t(r.actions.openCloseModalUpdate()):b=="delete"?t(r.actions.openCloseModalDelete()):b=="paimentHistory"?t(r.actions.openCloseModalHistory()):g(!0)},Ie=(m,b)=>{P(b)},z=a==null?void 0:a.slice((D-1)*w,D*w);v.useEffect(()=>{P(1)},[a]);const Fe=m=>{A.put("/payment/payed/",{id:p,mode:m}).then(b=>{t(r.actions.handlePayed({id:p,data:b.data})),O(null)})};return v.useEffect(()=>{P(1)},[a]),e.jsxs(e.Fragment,{children:[e.jsxs(ve,{sx:{position:"relative"},children:[e.jsx(ge,{component:De,children:e.jsxs(fe,{sx:{minWidth:700},children:[e.jsx(be,{children:e.jsxs(F,{children:[e.jsx(u,{align:"left"}),e.jsx(u,{children:x(s.client.title)}),e.jsxs(u,{children:[x(s.paiment.amount)," ",x(s.global.mad)]}),e.jsx(u,{children:x(s.entrer.date)}),e.jsx(u,{children:x(s.paiment.typePayment)}),e.jsx(u,{children:x(s.paiment.isPayed)}),e.jsx(u,{})]})}),j?e.jsx(nt,{rowsNum:10}):e.jsx(Se,{children:(z==null?void 0:z.length)>0?z==null?void 0:z.map(m=>{const b=pe[m.id]||!1;let Z=new Date(m.date),ee={year:Z.getFullYear(),month:`${Z.getMonth()+1}`,day:`${Z.getDate()}`};const Ge=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(F,{hover:!0,children:[e.jsx(u,{children:m.payment_proof.length!==0&&e.jsx(_,{"aria-label":"expand row",size:"small",onClick:()=>Te(m.id),children:b?e.jsx(ot,{}):e.jsx(rt,{})})}),e.jsxs(u,{children:[m.client_f_n," ",m.client_l_n]}),e.jsx(u,{sx:{direction:"initial",whiteSpace:"nowrap"},children:Ge.format(m.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(u,{children:[" ",ee.day.padStart(2,0),"/",ee.month.padStart(2,0),"/",ee.year]}),e.jsx(u,{children:Q[m.mode-1]}),e.jsx(u,{children:e.jsxs("div",{children:[e.jsx(G,{id:"basic-button","aria-controls":L?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":L?"true":void 0,onClick:E=>Me(E,m.id),color:m.payed==1?"success":m.payed==2?"warning":"error",sx:{"&:disabled":{color:E=>E.palette.success.dark}},disabled:m.mode==1||m.mode==2,children:U[Number(m.payed)-1].text}),(m.payed==3||m.history)&&e.jsx(_,{color:"success",onClick:()=>oe(m.id,"paimentHistory"),children:e.jsx(k,{children:e.jsx(Ke,{path:we,size:1})})}),e.jsx(Ae,{id:"basic-menu",anchorEl:K,open:L,onClose:Re,MenuListProps:{"aria-labelledby":"basic-button"},children:U.map((E,je)=>e.jsx(R,{onClick:Rt=>Fe(E.mode),children:E.text},je))})]})}),e.jsxs(u,{children:[e.jsx(_,{color:"warning",onClick:()=>oe(m.id,"update"),children:e.jsx(k,{children:e.jsx($e,{})})}),e.jsx(_,{color:"error",onClick:()=>oe(m.id,"delete"),children:e.jsx(k,{children:e.jsx(it,{})})}),m.payment_proof.length!==4&&e.jsx(_,{color:"success",onClick:()=>oe(m.id,"upload"),children:e.jsx(k,{children:e.jsx(et,{})})})]})]},m.id),e.jsx(F,{children:e.jsx(u,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(We,{in:b,timeout:"auto",unmountOnExit:!0,children:e.jsx(ge,{sx:{width:"100%"},component:De,children:e.jsxs(fe,{sx:{width:"100%"},children:[e.jsx(be,{children:e.jsxs(F,{children:[e.jsx(u,{children:x(s.paiment.fileName)}),e.jsx(u,{})]})}),e.jsx(Se,{children:m.payment_proof.map((E,je)=>e.jsxs(F,{children:[e.jsx(u,{children:E.file.replace("http://192.168.1.100:80/api".replace("/api","")+"/uploads/","")}),e.jsxs(u,{children:[" ",e.jsx(_,{color:"inherit",onClick:()=>{t(r.actions.openCloseConfirmDeleteProof()),t(r.actions.setCurrentData({id:m.id,idFile:E.id}))},children:e.jsx(k,{children:e.jsx(tt,{})})}),e.jsx(_,{color:"secondary",onClick:()=>{Ce({file:E.file,extension:E.extension}),q(!0)},children:e.jsx(k,{children:e.jsx(Ze,{})})})]})]},je))})]})})})})})]})}):e.jsx(F,{children:e.jsx(u,{colSpan:5,sx:{textAlign:"center"},children:x(s.batiment.nothingToDisplay)})})})]})}),e.jsx(ve,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(Ye,{count:Math.ceil(d/w),defaultPage:D,onChange:Ie,color:"primary",size:"large"})}),C&&e.jsx(at,{})]}),o&&e.jsx(ze,{isModalUpload:o,close:()=>g(!1)}),ae&&e.jsx(st,{isPreview:ae,close:()=>q(!1),file:xe})]})});function Dt({clients:i}){ne.locale("fr");const{t:d,i18n:a}=M(),n=I(),l=me({initialValues:{date1:null,date2:null,client:""},validationSchema:ue({date1:Ee().nullable().test("is-before-date2",d(s.global.date2Greather),function(c){const{date2:h}=this.parent;return c<=h}),date2:Ee().nullable().test("is-after-date1",d(s.global.date2Greather),function(c){const{date1:h}=this.parent;return c>=h})}),onSubmit:async(c,{resetForm:h,setErrors:S})=>{let j="";for(let C in c)if(c[C]!==""&&c[C]!==null){let t=new Date(c[C]),D=t.getFullYear()!==1970?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`:c[C];j==""?j+=`?${C}=${D}`:j+=`&${C}=${D}`}A.get("/payment/list/"+j).then(C=>{n(r.actions.fetchPaiment(C.data))})},onReset:()=>{A.get("/payment/list/").then(c=>{n(r.actions.fetchPaiment(c.data))})}});return e.jsxs(dt,{defaultExpanded:!0,children:[e.jsx(ct,{expandIcon:e.jsx(pt,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(mt,{}),d(s.global.filter)]})}),e.jsx(ut,{children:e.jsx(Ue,{children:e.jsx(lt,{children:e.jsx("form",{noValidate:!0,onSubmit:l.handleSubmit,onReset:l.handleReset,children:e.jsxs(B,{container:!0,alignItems:"center",gap:2,children:[e.jsx(B,{item:!0,xs:12,md:5,sm:12,children:e.jsxs(V,{fullWidth:!0,children:[e.jsx(Y,{id:"batiment-id",children:d(s.client.title)}),e.jsx($,{labelId:"batiment-id",id:"demo-simple-select",onBlur:l.handleBlur,fullWidth:!0,name:"client",onChange:l.handleChange,value:l.values.client,label:d(s.client.title),children:i==null?void 0:i.map(c=>e.jsxs(R,{value:c.id,children:[c.first_name," ",c.last_name]}))})]})}),e.jsx(B,{item:!0,xs:12,md:2,sm:12,children:e.jsx(X,{value:l.values.date1,onChange:c=>l.setFieldValue("date1",c),onBlur:l.handleBlur,label:d(s.global.date1),name:"date",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(l.touched.date1&&l.errors.date1),helperText:l.touched.date1&&l.errors.date1}}})}),e.jsx(B,{item:!0,xs:12,md:2,sm:12,children:e.jsx(X,{value:l.values.date2,onChange:c=>l.setFieldValue("date2",c),onBlur:l.handleBlur,label:d(s.global.date2),name:"date",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(l.touched.date2&&l.errors.date2),helperText:l.touched.date2&&l.errors.date2}}})}),e.jsxs(B,{item:!0,container:!0,xs:12,md:12,sm:12,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(B,{items:!0,children:e.jsx(G,{variant:"contained",type:"reset",children:d(s.global.reset)})}),e.jsx(B,{items:!0,children:e.jsx(G,{type:"submit",variant:"contained",children:d(s.global.filter)})})]})]})})})})})]})}function gt(){const i=I(),{t:d,i18n:a}=M(),{paiment:n}=W(h=>h.paiment),l=re("paiment",ie.getPaiments),c=re("clients",ie.getClientSelect);return v.useEffect(()=>{l.status=="success"&&i(r.actions.fetchPaiment(l.data))},[l.status]),e.jsx(ht,{maxWidth:"xl",children:e.jsxs(H,{spacing:4,children:[e.jsxs(H,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(H,{spacing:1,children:e.jsx(se,{variant:"h4",children:d(s.paiment.title)})}),e.jsx(H,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(G,{startIcon:e.jsx(k,{children:e.jsx(qe,{})}),variant:"contained",onClick:()=>i(r.actions.openCloseModalAdd()),children:d(s.global.ajouter)})})]}),e.jsxs(Ue,{children:[e.jsx(Dt,{clients:c.data}),e.jsx(vt,{items:n,count:n.length,rowsPerPage:25,isLoading:l.isLoading,isError:l.isError})]})]})})}const ft={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function bt({clients:i,paimentModes:d}){const a=I(),{t:n,i18n:l}=M();JSON.parse(sessionStorage.getItem("user"));const{currentData:c,isModalUpdate:h,isConfirm:S}=W(o=>o.paiment),j=[n(s.paiment.espece),n(s.paiment.virment),n(s.paiment.cheque),n(s.paiment.lcn)],C=ue({client:N().required(n(s.sortie.clientRequired)),amount:N().required(n(s.paiment.amountRequired)),mode:N().required(n(s.paiment.typePaymentRequired))}),t=me({initialValues:{client:"",amount:"",mode:"",date:new Date},validationSchema:C,onSubmit:async(o,{resetForm:g,setErrors:w})=>{const y={...o};console.log(o),y.date=ne(o.date).format("YYYY-MM-DD"),A.put("/payment/update/",y).then(x=>{a(r.actions.editPaiment(x.data)),a(r.actions.openCloseModalUpdate()),a(r.actions.openCloseConfirm()),T.success(n(s.paiment.toastUpdateSuccess)),g()}).catch(x=>{a(r.actions.openCloseConfirm()),T.error(n(s.global.toastError))})}}),D=async o=>{o.preventDefault();const g=await t.validateForm();Object.keys(g).length===0?a(r.actions.openCloseConfirm()):await t.submitForm()},P=()=>{t.handleSubmit()};return v.useEffect(()=>{let o={...c};o.date=new Date(o.date),t.setValues(o)},[]),e.jsxs(e.Fragment,{children:[e.jsx(J,{open:h,onClose:()=>a(r.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(de,{sx:ft,children:[e.jsxs(H,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(se,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(s.paiment.update)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>a(r.actions.openCloseModalUpdate()),children:e.jsx(ce,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:o=>D(o),children:[e.jsxs(V,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.client&&t.errors.client),children:[e.jsx(Y,{id:"batiment-id",children:n(s.client.title)}),e.jsx($,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"client",onChange:t.handleChange,value:t.values.client,label:n(s.client.title),children:i.map(o=>e.jsxs(R,{value:o.id,children:[o.first_name," ",o.last_name]}))}),t.touched.client&&t.errors.client&&e.jsx(te,{children:t.errors.client})]}),e.jsxs(V,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.mode&&t.errors.mode),children:[e.jsx(Y,{id:"batiment-id",children:n(s.paiment.typePayment)}),e.jsx($,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"mode",onChange:t.handleChange,value:t.values.mode,label:n(s.paiment.typePayment),children:d.map(o=>e.jsx(R,{value:o.id,children:j[o.id-1]}))}),t.touched.mode&&t.errors.mode&&e.jsx(te,{children:t.errors.mode})]}),e.jsx(le,{id:"outlined-basic",label:n(s.paiment.amount),variant:"outlined",onBlur:t.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:t.handleChange,value:t.values.amount,error:!!(t.touched.amount&&t.errors.amount),helperText:t.touched.amount&&t.errors.amount,style:{marginBottom:"15px"}}),e.jsx(X,{label:n(s.entrer.date),value:t.values.date,onChange:o=>t.setFieldValue("date",o),onBlur:t.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(s.global.modifier)})]})]})}),e.jsx(Pe,{confirmed:P,cancel:()=>a(r.actions.openCloseConfirm()),isConfirm:S})]})}const St={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function yt({clients:i,paimentModes:d}){const a=I(),{t:n,i18n:l}=M();JSON.parse(sessionStorage.getItem("user"));const{paiment:c,isModalAdd:h,isConfirm:S}=W(o=>o.paiment),j=[n(s.paiment.espece),n(s.paiment.virment),n(s.paiment.cheque),n(s.paiment.lcn)],C=ue({client:N().required(n(s.sortie.clientRequired)),amount:N().required(n(s.paiment.amountRequired)),mode:N().required(n(s.paiment.typePaymentRequired))}),t=me({initialValues:{client:"",amount:"",mode:"",date:new Date},validationSchema:C,onSubmit:async(o,{resetForm:g,setErrors:w})=>{const y={...o};y.date=ne(o.date).format("YYYY-MM-DD"),A.post("/payment/add/",y).then(x=>{a(r.actions.addPaiment(x.data)),a(r.actions.openCloseModalAdd()),a(r.actions.openCloseConfirm()),T.success(n(s.paiment.toastAddSuccess)),g()}).catch(x=>{a(r.actions.openCloseConfirm()),T.error(n(s.global.toastError))})}}),D=async o=>{o.preventDefault();const g=await t.validateForm();Object.keys(g).length===0?a(r.actions.openCloseConfirm()):await t.submitForm()},P=()=>{t.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(J,{open:h,onClose:()=>a(r.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(de,{sx:St,children:[e.jsxs(H,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(se,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(s.paiment.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>a(r.actions.openCloseModalAdd()),children:e.jsx(ce,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:o=>D(o),children:[e.jsxs(V,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.client&&t.errors.client),children:[e.jsx(Y,{id:"batiment-id",children:n(s.client.title)}),e.jsx($,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"client",onChange:t.handleChange,value:t.values.client,label:n(s.client.title),children:i.length>0?i.map(o=>e.jsxs(R,{value:o.id,children:[o.first_name," ",o.last_name]})):e.jsx(R,{children:n(s.batiment.nothingToDisplay)})}),t.touched.client&&t.errors.client&&e.jsx(te,{children:t.errors.client})]}),e.jsxs(V,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.mode&&t.errors.mode),children:[e.jsx(Y,{id:"batiment-id",children:n(s.paiment.typePayment)}),e.jsx($,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"mode",onChange:t.handleChange,value:t.values.mode,label:n(s.paiment.typePayment),children:d.map(o=>e.jsx(R,{value:o.id,children:j[o.id-1]}))}),t.touched.mode&&t.errors.mode&&e.jsx(te,{children:t.errors.mode})]}),e.jsx(le,{id:"outlined-basic",label:n(s.paiment.amount),variant:"outlined",onBlur:t.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:t.handleChange,value:t.values.amount,error:!!(t.touched.amount&&t.errors.amount),helperText:t.touched.amount&&t.errors.amount,style:{marginBottom:"15px"}}),e.jsx(X,{label:n(s.entrer.date),value:t.values.date,onChange:o=>t.setFieldValue("date",o),onBlur:t.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(s.global.ajouter)})]})]})}),e.jsx(Pe,{confirmed:P,cancel:()=>a(r.actions.openCloseConfirm()),isConfirm:S})]})}function _t(){const{currentData:i,isModalDelete:d}=W(h=>h.paiment),a=I(),{t:n,i18n:l}=M();JSON.parse(sessionStorage.getItem("user"));const c=()=>{A.delete(`/payment/delete/${i.id}`).then(h=>{a(r.actions.deletePaiment()),a(r.actions.openCloseModalDelete()),T.success(n(s.paiment.toastDeleteSuccess))}).catch(h=>{a(r.actions.openCloseModalDelete()),T.error(n(s.global.toastError))})};return e.jsx(J,{open:d,onClose:()=>a(r.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(_e,{title:n(s.paiment.deleteTitle),message:n(s.paiment.deleteDescription),deleteFn:c,cancel:()=>a(r.actions.openCloseModalDelete())})})}function Pt(){const{currentData:i,isModalDeleteProof:d}=W(h=>h.paiment),a=I(),{t:n,i18n:l}=M(),c=()=>{A.delete(`/payment/proof/delete/${i.idFile}`).then(h=>{a(r.actions.deletePaimentProof()),a(r.actions.openCloseConfirmDeleteProof()),T.success(n(s.global.toastSuccessDeleteFile))}).catch(h=>{a(r.actions.openCloseConfirmDeleteProof()),T.error(n(s.global.toastError))})};return e.jsx(J,{open:d,onClose:()=>a(r.actions.openCloseConfirmDeleteProof()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(_e,{title:n(s.paiment.deleteTitleFile),message:n(s.paiment.deleteDescriptionFile),deleteFn:c,cancel:()=>a(r.actions.openCloseConfirmDeleteProof())})})}function Ot({isOpen:i,close:d,handleDelete:a}){const{t:n,i18n:l}=M();return e.jsx(J,{open:i,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(_e,{title:n(s.paiment.deleteTitle),message:n(s.paiment.deleteDescription),deleteFn:a,cancel:d})})}function Mt(){const{t:i,i18n:d}=M(),{currentData:a}=W(p=>p.paiment),[n,l]=v.useState(),c=I(),[h,S]=v.useState(!1),[j,C]=v.useState(!1),[t,D]=v.useState(),P=[{mode:1,text:i(s.global.oui)},{mode:2,text:i(s.global.enCours)},{mode:3,text:i(s.global.echec)}],o=[i(s.paiment.espece),i(s.paiment.virment),i(s.paiment.cheque),i(s.paiment.lcn)],[g,w]=v.useState(null),y=!!g,x=(p,f)=>{l(f),w(p.currentTarget)},Oe=()=>{w(null)},pe=p=>{A.put("/payment/payedcorrection/",{id:n,mode:p}).then(f=>{c(r.actions.handlePayedCorrection({id:n,data:f.data})),w(null)})},he=(p,f)=>{D(f),S(!0),l(p)},ae=p=>{C(!0),l(p)},q=p=>{const f=p.target.name;D(f?U=>({...U,date:new Date(U.date),[f]:Number(p.target.value)}):U=>({...U,date:new Date(U.date)}))},xe=()=>{let p={...t,date:ne(t.date).format("YYYY-MM-DD")};A.put("/payment/updatecorrection/",p).then(f=>{c(r.actions.handlePayedCorrection({id:n,data:f.data})),S(!1)})},Ce=()=>{A.delete(`/payment/deletecorrection/${n}`).then(p=>{c(r.actions.deletePaimentHistory()),C(!1)})};return e.jsxs(e.Fragment,{children:[e.jsx(ve,{sx:{position:"relative"},children:e.jsx(ge,{component:De,children:e.jsxs(fe,{sx:{minWidth:700},children:[e.jsx(be,{children:e.jsxs(F,{children:[e.jsxs(u,{children:[i(s.paiment.amount)," ",i(s.global.mad)]}),e.jsx(u,{children:i(s.entrer.date)}),e.jsx(u,{children:i(s.paiment.typePayment)}),e.jsx(u,{children:i(s.paiment.isPayed)}),e.jsx(u,{})]})}),e.jsx(Se,{children:a.payment_correction.map((p,f)=>{const U=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});let Q=new Date(p.date),K={year:Q.getFullYear(),month:`${Q.getMonth()+1}`,day:`${Q.getDate()}`};return!h||a.payment_correction.length-1!==f?e.jsxs(F,{children:[e.jsxs(u,{sx:{direction:"initial"},children:[" ",U.format(p.amount).replaceAll(","," ").replace("MAD","")]}),e.jsxs(u,{children:[" ",K.day.padStart(2,0),"/",K.month.padStart(2,0),"/",K.year]}),e.jsx(u,{children:o[p.mode-1]}),e.jsxs(u,{children:[" ",e.jsxs("div",{children:[e.jsx(G,{id:"basic-button","aria-controls":y?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":y?"true":void 0,onClick:O=>x(O,p.id),color:p.payed==1?"success":p.payed==2?"warning":"error",sx:{"&:disabled":{color:O=>O.palette.success.dark}},disabled:p.mode==1||p.mode==2?!0:f==0,children:P[Number(p.payed)-1].text}),p.payed==3&&e.jsx(_,{color:"success",onClick:()=>openModal(p.id,"paimentHistory"),children:e.jsx(k,{children:e.jsx(Xe,{path:we,size:1})})}),e.jsx(Ae,{id:"basic-menu",anchorEl:g,open:y,onClose:Oe,MenuListProps:{"aria-labelledby":"basic-button"},children:P.map((O,L)=>e.jsx(R,{onClick:Me=>pe(O.mode),children:O.text},L))})]})]}),a.payment_correction.length-1==f&&f!==0&&e.jsxs(u,{children:[e.jsx(_,{color:"error",onClick:()=>ae(p.id),children:e.jsx(xt,{})}),e.jsx(_,{color:"warning",onClick:()=>he(p.id,p),children:e.jsx(Ct,{})})]})]}):e.jsxs(F,{children:[e.jsx(u,{sx:{direction:"initial"},children:e.jsx(le,{value:t.amount,fullWidth:!0,label:i(s.paiment.amount),type:"number",name:"amount",onChange:q})}),e.jsxs(u,{children:[" ",e.jsx(X,{value:new Date(t.date),name:"date",onChange:q,label:i(s.entrer.date)})]}),e.jsx(u,{children:e.jsxs(V,{fullWidth:!0,children:[e.jsx(Y,{id:"demo-simple-select-label",children:i(s.paiment.typePayment)}),e.jsx($,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.mode,label:i(s.paiment.typePayment),onChange:q,name:"mode",children:o.map((O,L)=>e.jsx(R,{value:L+1,children:O}))})]})}),e.jsxs(u,{children:[e.jsx(_,{color:"success",onClick:xe,children:e.jsx(jt,{})}),e.jsx(_,{color:"error",onClick:()=>S(!1),children:e.jsx(Je,{})})]})]})})})]})})}),e.jsx(Ot,{isOpen:j,close:()=>C(!1),handleDelete:Ce})]})}function Et(){const i=I(),d=ke(),{t:a}=M(),{currentData:n,isModalHistory:l}=W(j=>j.paiment),c=Ne(d.breakpoints.down("md")),[h,S]=v.useState(!0);return v.useEffect(()=>{let j=n.payment_correction[0].amount;n.payment_correction.slice(1,n.payment_correction.length).reduce((t,D)=>D.payed==1?t+D.amount:t,0)>=j&&S(!1)},[n]),e.jsxs(Le,{onClose:()=>i(r.actions.openCloseModalHistory()),fullScreen:c,open:l,maxWidth:"lg",children:[e.jsxs(Qe,{sx:{m:0,p:2.5},id:"customized-dialog-title",children:[a(s.paiment.titleHistory)," ",n.client_f_n," ",n.client_l_n]}),e.jsx(_,{"aria-label":"close",onClick:()=>i(r.actions.openCloseModalHistory()),sx:j=>({position:"absolute",right:8,top:8,color:j.palette.grey[500]}),children:e.jsx(ce,{})}),e.jsxs(Be,{children:[e.jsxs(He,{direction:"row",justifyContent:"space-between",alignItems:"center",mb:1.5,children:[e.jsx(se,{variant:"h6"}),h&&e.jsx(G,{variant:"contained",onClick:()=>i(r.actions.openCloseModalAddHistory()),children:a(s.global.ajouter)})]}),e.jsx(Mt,{})]})]})}const At={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function wt({paimentModes:i}){const d=I(),{t:a,i18n:n}=M(),l=[a(s.paiment.espece),a(s.paiment.virment),a(s.paiment.cheque),a(s.paiment.lcn)],{paiment:c,isModalAddHistory:h,currentData:S,isConfirm:j}=W(o=>o.paiment),C=ue({amount:N().required(a(s.paiment.amountRequired)),mode:N().required(a(s.paiment.typePaymentRequired))}),t=me({initialValues:{amount:"",mode:"",date:new Date,payment:S.id},validationSchema:C,onSubmit:async(o,{resetForm:g,setErrors:w})=>{const y={...o};y.date=ne(o.date).format("YYYY-MM-DD"),A.post("/payment/addcorrection/",y).then(x=>{d(r.actions.addPaimentHistory(x.data)),d(r.actions.openCloseModalAddHistory()),d(r.actions.openCloseConfirm()),T.success(a(s.paiment.toastAddSuccess)),g()}).catch(x=>{d(r.actions.openCloseConfirm()),T.error(a(s.global.toastError))})}}),D=async o=>{o.preventDefault();const g=await t.validateForm();Object.keys(g).length===0?d(r.actions.openCloseConfirm()):await t.submitForm()},P=()=>{t.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(J,{open:h,onClose:()=>d(r.actions.openCloseModalAddHistory()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(de,{sx:At,children:[e.jsxs(H,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(se,{id:"modal-modal-title",variant:"h6",component:"h2",children:a(s.paiment.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>d(r.actions.openCloseModalAddHistory()),children:e.jsx(ce,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:o=>D(o),children:[e.jsxs(V,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.mode&&t.errors.mode),children:[e.jsx(Y,{id:"batiment-id",children:a(s.paiment.typePayment)}),e.jsx($,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"mode",onChange:t.handleChange,value:t.values.mode,label:a(s.paiment.typePayment),children:i.map(o=>e.jsx(R,{value:o.id,children:l[o.id-1]}))}),t.touched.mode&&t.errors.mode&&e.jsx(te,{children:t.errors.mode})]}),e.jsx(le,{id:"outlined-basic",label:a(s.paiment.amount),variant:"outlined",onBlur:t.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:t.handleChange,value:t.values.amount,error:!!(t.touched.amount&&t.errors.amount),helperText:t.touched.amount&&t.errors.amount,style:{marginBottom:"15px"}}),e.jsx(X,{label:a(s.entrer.date),value:t.values.date,onChange:o=>t.setFieldValue("date",o),onBlur:t.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:a(s.global.ajouter)})]})]})}),e.jsx(Pe,{confirmed:P,cancel:()=>d(r.actions.openCloseConfirm()),isConfirm:j})]})}function Ut(){const{isModalAdd:i,isModalUpdate:d,isModalHistory:a,isModalAddHistory:n}=W(h=>h.paiment),l=re("clients",ie.getClientSelect),c=re("paimentsMode",ie.paymentMode);return e.jsxs(de,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(ye,{children:e.jsx(gt,{})}),i&&e.jsx(yt,{clients:l.data,paimentModes:c.data}),d&&e.jsx(bt,{clients:l.data,paimentModes:c.data}),n&&e.jsx(wt,{paimentModes:c.data}),e.jsx(_t,{}),e.jsx(Pt,{}),a&&e.jsxs(ye,{children:[" ",e.jsx(Et,{})]})]})}function es(){const{t:i,i18n:d}=M();return e.jsxs("div",{children:[e.jsx(Ve,{title:`ESM | ${i(s.nav.Paiment)}`}),e.jsx(ye,{children:e.jsx(Ut,{})})]})}export{es as default};
