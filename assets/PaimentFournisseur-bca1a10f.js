import{a2 as T,r as v,d as F,l as s,j as e,a1 as _,a as G,V as W,ak as Me,ae as A,al as ke,a3 as Ee,ap as o,B as Ae,h as w,ab as H,ac as V,ad as Y,a6 as k,C as We,i as ee,T as te,a7 as X,F as se,k as re,Y as R,O as Le,u as Be,an as Ne,ao as He}from"./index-0909516e.js";import{e as Ce,T as ge,a as je,b as I,c as u,d as De,P as Ve,f as ne,G as N,u as ve,h as fe,B as ie,S as be,E as Ye}from"./moment-648dda2f.js";import{E as $e,P as qe,M as ye}from"./ModalDelete-5fb89211.js";import{T as Ke,C as le}from"./TableRowsLoader-022b84e6.js";import{E as ze}from"./Eye-39b28278.js";import{C as Xe,T as Qe}from"./index-dacba1f3.js";import{F as Je}from"./FilePreview-3f822ebe.js";import{I as Ze,m as we,U as es,a as ss,C as ts,D as ns}from"./UploadFileModel-2987fa12.js";import{A as as}from"./AlertError-00fd4b21.js";import{K as os,a as rs}from"./KeyboardArrowUp-70496bb3.js";import{D as is}from"./DeleteOutlineOutlined-2fabed8a.js";import{u as de,c as ce,e as Oe,C as Fe,b as ls,d as L}from"./formik.esm-f6e343f0.js";import{A as ds,a as cs,F as ms,b as us}from"./fr-897bdd02.js";import{E as ps}from"./ExpandMore-09db540a.js";import{D as z}from"./DatePicker-ffa02013.js";import{M as Se}from"./ModalConfirm-9cd4ab44.js";import{D as hs}from"./Delete-2865585c.js";import{E as xs}from"./Edit-8285a0d2.js";import{C as Cs}from"./Check-9370a5e1.js";const gs=l=>{let{count:m=0,items:a=[],onDeselectAll:n,onDeselectOne:d,onSelectAll:c,onSelectOne:x,selected:b=[],isLoading:j,isError:r}=l;const t=T(),[D,C]=v.useState(1),[i,S]=v.useState(!1),[O,P]=v.useState(25),{t:g,i18n:Pe}=F(),[me,ue]=v.useState({}),[ae,$]=v.useState(!1),[pe,he]=v.useState(),[p,f]=v.useState(),U=[{mode:1,text:g(s.global.oui)},{mode:2,text:g(s.global.enCours)},{mode:3,text:g(s.global.echec)}],Q=[g(s.paiment.espece),g(s.paiment.virment),g(s.paiment.cheque),g(s.paiment.lcn)],[q,M]=v.useState(null),B=!!q,_e=(h,y)=>{f(y),M(h.currentTarget)},Ue=()=>{M(null)},Re=(h,y)=>{C(y)},Te=h=>{ue(y=>({...y,[h]:!y[h]}))},oe=(h,y)=>{const J=a.filter(Z=>Z.id==h);t(o.actions.setCurrentData(J[0])),y=="update"?t(o.actions.openCloseModalUpdate()):y=="delete"?t(o.actions.openCloseModalDelete()):y=="paimentHistory"?t(o.actions.openCloseModalHistory()):S(!0)},K=a==null?void 0:a.slice((D-1)*O,D*O);v.useEffect(()=>{C(1)},[a]);const Ie=h=>{w.put("/paymentsupplier/payed/",{id:p,mode:h}).then(y=>{t(o.actions.handlePayed({id:p,data:y.data})),M(null)})};return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{children:e.jsxs(ge,{children:[e.jsx(je,{children:e.jsxs(I,{children:[e.jsx(u,{}),e.jsx(u,{children:g(s.nav.fournisseur)}),e.jsxs(u,{children:[g(s.paiment.amount)," ",g(s.global.mad)]}),e.jsx(u,{children:g(s.entrer.date)}),e.jsx(u,{children:g(s.paiment.typePayment)}),e.jsx(u,{children:g(s.paiment.isPayed)}),e.jsx(u,{})]})}),j?e.jsx(Ke,{rowsNum:10}):e.jsx(De,{children:(K==null?void 0:K.length)>0?K==null?void 0:K.map(h=>{const y=me[h.id]||!1;let J=new Date(h.date),Z={year:J.getFullYear(),month:`${J.getMonth()+1}`,day:`${J.getDate()}`};const Ge=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:[e.jsx(u,{children:h.payment_proof.length!==0&&e.jsx(_,{"aria-label":"expand row",size:"small",onClick:()=>Te(h.id),children:y?e.jsx(os,{}):e.jsx(rs,{})})}),e.jsxs(u,{children:[h.name," ",h.last_name]}),e.jsx(u,{sx:{direction:"initial",whiteSpace:"nowrap"},children:Ge.format(h.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(u,{children:[" ",Z.day.padStart(2,0),"/",Z.month.padStart(2,0),"/",Z.year]}),e.jsx(u,{children:Q[h.mode-1]}),e.jsx(u,{children:e.jsxs("div",{children:[e.jsx(G,{id:"basic-button","aria-controls":B?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":B?"true":void 0,onClick:E=>_e(E,h.id),color:h.payed==1?"success":h.payed==2?"warning":"error",sx:{"&:disabled":{color:E=>E.palette.success.dark}},disabled:h.mode==1||h.mode==2,children:U[h.payed-1].text}),(h.payed==3||h.history)&&e.jsx(_,{color:"success",onClick:()=>oe(h.id,"paimentHistory"),children:e.jsx(W,{children:e.jsx(Ze,{path:we,size:1})})}),e.jsx(Me,{id:"basic-menu",anchorEl:q,open:B,onClose:Ue,MenuListProps:{"aria-labelledby":"basic-button"},children:U.map((E,xe)=>e.jsx(A,{onClick:Fs=>Ie(E.mode),children:E.text},xe))})]})}),e.jsxs(u,{children:[e.jsx(_,{color:"warning",onClick:()=>oe(h.id,"update"),children:e.jsx(W,{children:e.jsx($e,{})})}),e.jsx(_,{color:"error",onClick:()=>oe(h.id,"delete"),children:e.jsx(W,{children:e.jsx(is,{})})}),h.payment_proof.length!==4&&e.jsx(_,{color:"success",onClick:()=>oe(h.id,"upload"),children:e.jsx(W,{children:e.jsx(Xe,{})})})]})]}),e.jsx(I,{children:e.jsx(u,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(ke,{in:y,timeout:"auto",unmountOnExit:!0,children:e.jsx(Ce,{sx:{width:"100%"},component:Ee,children:e.jsxs(ge,{sx:{width:"100%"},children:[e.jsx(je,{children:e.jsxs(I,{children:[e.jsx(u,{children:g(s.paiment.fileName)}),e.jsx(u,{})]})}),e.jsx(De,{children:h.payment_proof.map((E,xe)=>e.jsxs(I,{children:[e.jsx(u,{children:E.file.replace("http://192.168.1.100:80/api".replace("/api","")+"/uploads/","")}),e.jsxs(u,{children:[" ",e.jsx(_,{color:"inherit",onClick:()=>{t(o.actions.openCloseConfirmDeleteProof()),t(o.actions.setCurrentData({id:h.id,idFile:E.id}))},children:e.jsx(W,{children:e.jsx(Qe,{})})}),e.jsx(_,{color:"secondary",onClick:()=>{he({file:E.file,extension:E.extension}),$(!0)},children:e.jsx(W,{children:e.jsx(ze,{})})})]})]},xe))})]})})})})})]})}):e.jsx(I,{children:e.jsx(u,{colSpan:8,sx:{textAlign:"center"},children:g(s.batiment.nothingToDisplay)})})})]})}),e.jsx(Ae,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(Ve,{count:Math.ceil(m/O),defaultPage:D,onChange:Re,color:"primary",size:"large"})}),r&&e.jsx(as,{}),i&&e.jsx(es,{isFournisseur:!0,isModalUpload:i,close:()=>S(!1)}),ae&&e.jsx(Je,{isPreview:ae,close:()=>$(!1),file:pe})]})};function js({fournisseur:l}){ne.locale("fr");const{t:m,i18n:a}=F(),n=T(),d=de({initialValues:{date1:null,date2:null,eggsource:""},validationSchema:ce({date1:Oe().nullable().test("is-before-date2",m(s.global.date2Greather),function(c){const{date2:x}=this.parent;return c<=x}),date2:Oe().nullable().test("is-after-date1",m(s.global.date2Greather),function(c){const{date1:x}=this.parent;return c>=x})}),onSubmit:async(c,{resetForm:x,setErrors:b})=>{let j="";for(let r in c)if(c[r]!==""&&c[r]!==null){let t=new Date(c[r]),D=t.getFullYear()!==1970?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`:c[r];j==""?j+=`?${r}=${D}`:j+=`&${r}=${D}`}w.get("/paymentsupplier/list/"+j).then(r=>{n(o.actions.fetchPaimentF(r.data))})},onReset:()=>{w.get("/paymentsupplier/list/").then(c=>{n(o.actions.fetchPaimentF(c.data))})}});return e.jsxs(ds,{defaultExpanded:!0,children:[e.jsx(cs,{expandIcon:e.jsx(ps,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(ms,{}),m(s.global.filter)]})}),e.jsx(us,{children:e.jsx(Fe,{children:e.jsx(ls,{children:e.jsx("form",{noValidate:!0,onSubmit:d.handleSubmit,onReset:d.handleReset,children:e.jsxs(N,{container:!0,alignItems:"center",gap:2,children:[e.jsx(N,{item:!0,xs:12,md:5,sm:12,children:e.jsxs(H,{fullWidth:!0,children:[e.jsx(V,{id:"batiment-id",children:m(s.fournisseur.title)}),e.jsx(Y,{labelId:"batiment-id",id:"demo-simple-select",onBlur:d.handleBlur,fullWidth:!0,name:"eggsource",onChange:d.handleChange,value:d.values.eggsource,label:m(s.fournisseur.title),children:l==null?void 0:l.map(c=>e.jsx(A,{value:c.id,children:c.name}))})]})}),e.jsx(N,{item:!0,xs:12,md:2,sm:12,children:e.jsx(z,{value:d.values.date1,onChange:c=>d.setFieldValue("date1",c),onBlur:d.handleBlur,label:m(s.global.date1),name:"date",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(d.touched.date1&&d.errors.date1),helperText:d.touched.date1&&d.errors.date1}}})}),e.jsx(N,{item:!0,xs:12,md:2,sm:12,children:e.jsx(z,{value:d.values.date2,onChange:c=>d.setFieldValue("date2",c),onBlur:d.handleBlur,label:m(s.global.date2),name:"date",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(d.touched.date2&&d.errors.date2),helperText:d.touched.date2&&d.errors.date2}}})}),e.jsxs(N,{item:!0,container:!0,xs:12,md:12,sm:12,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(N,{items:!0,children:e.jsx(G,{variant:"contained",type:"reset",children:m(s.global.reset)})}),e.jsx(N,{items:!0,children:e.jsx(G,{type:"submit",variant:"contained",children:m(s.global.filter)})})]})]})})})})})]})}function Ds({fournisseur:l}){const{t:m,i18n:a}=F(),n=T(),d=ve("paimentsF",fe.fetchPaimentFournisseur),{paimentF:c}=k(x=>x.paimentFournisseur);return v.useEffect(()=>{d.status=="success"&&n(o.actions.fetchPaimentF(d.data))},[d.status]),e.jsx(We,{maxWidth:"xl",children:e.jsxs(ee,{spacing:4,children:[e.jsxs(ee,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(ee,{spacing:1,children:e.jsx(te,{variant:"h4",children:m(s.paimentF.title)})}),e.jsx(ee,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(G,{startIcon:e.jsx(W,{children:e.jsx(qe,{})}),variant:"contained",onClick:()=>n(o.actions.openCloseModalAdd()),children:m(s.global.ajouter)})})]}),e.jsxs(Fe,{children:[e.jsx(js,{fournisseur:l}),e.jsx(gs,{items:c,count:c.length,rowsPerPage:25,isLoading:d.isLoading,isError:d.isError})]})]})})}const vs={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function fs({fournisseur:l,paimentModes:m}){const a=T(),{t:n,i18n:d}=F(),{isModalAdd:c,isConfirm:x}=k(C=>C.paimentFournisseur),b=[n(s.paiment.espece),n(s.paiment.virment),n(s.paiment.cheque),n(s.paiment.lcn)],j=ce({eggsource:L().required(n(s.sortie.fournisseurRequired)),amount:L().required(n(s.paiment.amountRequired)),mode:L().required(n(s.paiment.typePaymentRequired))}),r=de({initialValues:{eggsource:"",amount:"",mode:"",date:new Date},validationSchema:j,onSubmit:async(C,{resetForm:i,setErrors:S})=>{const O={...C};O.date=ne(C.date).format("YYYY-MM-DD"),w.post("/paymentsupplier/add/",O).then(P=>{a(o.actions.addPaimentF(P.data)),a(o.actions.openCloseModalAdd()),a(o.actions.openCloseConfirm()),R.success(n(s.paiment.toastAddSuccess)),i()}).catch(P=>{a(o.actions.openCloseConfirm()),R.error(n(s.global.toastError))})}}),t=async C=>{C.preventDefault();const i=await r.validateForm();Object.keys(i).length===0?a(o.actions.openCloseConfirm()):await r.submitForm()},D=()=>{r.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(X,{open:c,onClose:()=>a(o.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ie,{sx:vs,children:[e.jsxs(be,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(te,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(s.paiment.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>a(o.actions.openCloseModalAdd()),children:e.jsx(le,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:C=>t(C),children:[e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.eggsource&&r.errors.eggsource),children:[e.jsx(V,{id:"batiment-id",children:n(s.fournisseur.title)}),e.jsx(Y,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"eggsource",onChange:r.handleChange,value:r.values.eggsource,label:n(s.fournisseur.title),children:l.length>0?l.map(C=>e.jsxs(A,{value:C.id,children:[C.name," ",C.last_name]})):e.jsx(A,{children:n(s.batiment.nothingToDisplay)})}),r.touched.eggsource&&r.errors.eggsource&&e.jsx(se,{children:r.errors.eggsource})]}),e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.mode&&r.errors.mode),children:[e.jsx(V,{id:"batiment-id",children:n(s.paiment.typePayment)}),e.jsx(Y,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"mode",onChange:r.handleChange,value:r.values.mode,label:n(s.paiment.typePayment),children:m.map(C=>e.jsx(A,{value:C.id,children:b[C.id-1]}))}),r.touched.mode&&r.errors.mode&&e.jsx(se,{children:r.errors.mode})]}),e.jsx(re,{id:"outlined-basic",label:n(s.paiment.amount),variant:"outlined",onBlur:r.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:r.handleChange,value:r.values.amount,error:!!(r.touched.amount&&r.errors.amount),helperText:r.touched.amount&&r.errors.amount,style:{marginBottom:"15px"}}),e.jsx(z,{label:n(s.entrer.date),value:r.values.date,onChange:C=>r.setFieldValue("date",C),onBlur:r.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(s.global.ajouter)})]})]})}),e.jsx(Se,{confirmed:D,cancel:()=>a(o.actions.openCloseConfirm()),isConfirm:x})]})}const bs={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ys({fournisseur:l,paimentModes:m}){const a=T(),{t:n,i18n:d}=F(),{currentData:c,isModalUpdate:x,isConfirm:b}=k(i=>i.paimentFournisseur),j=[n(s.paiment.espece),n(s.paiment.virment),n(s.paiment.cheque),n(s.paiment.lcn)],r=ce({eggsource:L().required(n(s.sortie.fournisseurRequired)),amount:L().required(n(s.paiment.amountRequired)),mode:L().required(n(s.paiment.typePaymentRequired))}),t=de({initialValues:{eggsource:"",amount:"",mode:"",date:new Date},validationSchema:r,onSubmit:async(i,{resetForm:S,setErrors:O})=>{const P={...i};P.date=ne(i.date).format("YYYY-MM-DD"),w.put("/paymentsupplier/update/",P).then(g=>{a(o.actions.editPaimentF(g.data)),a(o.actions.openCloseModalUpdate()),a(o.actions.openCloseConfirm()),R.success(n(s.paiment.toastUpdateSuccess)),S()}).catch(g=>{a(o.actions.openCloseConfirm()),R.error(n(s.global.toastError))})}}),D=async i=>{i.preventDefault();const S=await t.validateForm();Object.keys(S).length===0?a(o.actions.openCloseConfirm()):await t.submitForm()},C=()=>{t.handleSubmit()};return v.useEffect(()=>{let i={...c};i.date=new Date(i.date),t.setValues(i)},[]),e.jsxs(e.Fragment,{children:[e.jsx(X,{open:x,onClose:()=>a(o.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ie,{sx:bs,children:[e.jsxs(be,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(te,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(s.paiment.update)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>a(o.actions.openCloseModalUpdate()),children:e.jsx(le,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:i=>D(i),children:[e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.eggsource&&t.errors.eggsource),children:[e.jsx(V,{id:"batiment-id",children:n(s.fournisseur.title)}),e.jsx(Y,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"eggsource",onChange:t.handleChange,value:t.values.eggsource,label:n(s.fournisseur.title),children:l.length>0?l.map(i=>e.jsxs(A,{value:i.id,children:[i.name," ",i.last_name]})):e.jsx(A,{children:n(s.batiment.nothingToDisplay)})}),t.touched.eggsource&&t.errors.eggsource&&e.jsx(se,{children:t.errors.eggsource})]}),e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.mode&&t.errors.mode),children:[e.jsx(V,{id:"batiment-id",children:n(s.paiment.typePayment)}),e.jsx(Y,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"mode",onChange:t.handleChange,value:t.values.mode,label:n(s.paiment.typePayment),children:m.map(i=>e.jsx(A,{value:i.id,children:j[i.id-1]}))}),t.touched.mode&&t.errors.mode&&e.jsx(se,{children:t.errors.mode})]}),e.jsx(re,{id:"outlined-basic",label:n(s.paiment.amount),variant:"outlined",onBlur:t.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:t.handleChange,value:t.values.amount,error:!!(t.touched.amount&&t.errors.amount),helperText:t.touched.amount&&t.errors.amount,style:{marginBottom:"15px"}}),e.jsx(z,{label:n(s.entrer.date),value:t.values.date,onChange:i=>t.setFieldValue("date",i),onBlur:t.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(s.global.modifier)})]})]})}),e.jsx(Se,{confirmed:C,cancel:()=>a(o.actions.openCloseConfirm()),isConfirm:b})]})}function Ss(){const{currentData:l,isModalDelete:m}=k(x=>x.paimentFournisseur),a=T(),{t:n,i18n:d}=F(),c=()=>{w.delete(`/paymentsupplier/delete/${l.id}`).then(x=>{a(o.actions.deletePaimentF()),a(o.actions.openCloseModalDelete()),R.success(n(s.paiment.toastDeleteSuccess))}).catch(x=>{a(o.actions.openCloseModalDelete()),R.error(n(s.global.toastError))})};return e.jsx(X,{open:m,onClose:()=>a(o.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(ye,{title:n(s.paiment.deleteTitle),message:n(s.paiment.deleteDescription),deleteFn:c,cancel:()=>a(o.actions.openCloseModalDelete())})})}function Ps(){const{currentData:l,isModalDeleteProof:m}=k(x=>x.paimentFournisseur),a=T(),{t:n,i18n:d}=F(),c=()=>{w.delete(`/paymentsupplier/proof/delete/${l.idFile}`).then(x=>{a(o.actions.deletePaimentFProof()),a(o.actions.openCloseConfirmDeleteProof()),R.success(n(s.global.toastSuccessDeleteFile))}).catch(x=>{a(o.actions.openCloseConfirmDeleteProof()),R.error(n(s.global.toastError))})};return e.jsx(X,{open:m,onClose:()=>a(o.actions.openCloseConfirmDeleteProof()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(ye,{title:n(s.paiment.deleteTitleFile),message:n(s.paiment.deleteDescriptionFile),deleteFn:c,cancel:()=>a(o.actions.openCloseConfirmDeleteProof())})})}function _s({isOpen:l,close:m,handleDelete:a}){const{t:n,i18n:d}=F();return e.jsx(X,{open:l,onClose:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(ye,{title:n(s.paiment.deleteTitle),message:n(s.paiment.deleteDescription),deleteFn:a,cancel:m})})}function Os(){const{t:l,i18n:m}=F(),{currentData:a}=k(p=>p.paimentFournisseur),[n,d]=v.useState(),c=T(),[x,b]=v.useState(!1),[j,r]=v.useState(!1),[t,D]=v.useState(),C=[{mode:1,text:l(s.global.oui)},{mode:2,text:l(s.global.enCours)},{mode:3,text:l(s.global.echec)}],i=[l(s.paiment.espece),l(s.paiment.virment),l(s.paiment.cheque),l(s.paiment.lcn)],[S,O]=v.useState(null),P=!!S,g=(p,f)=>{d(f),O(p.currentTarget)},Pe=()=>{O(null)},me=p=>{w.put("/payment/payedcorrection/",{id:n,mode:p}).then(f=>{c(o.actions.handlePayedCorrection({id:n,data:f.data})),O(null)})},ue=(p,f)=>{D(f),b(!0),d(p)},ae=p=>{r(!0),d(p)},$=p=>{const f=p.target.name;D(f?U=>({...U,date:new Date(U.date),[f]:Number(p.target.value)}):U=>({...U,date:new Date(U.date)}))},pe=()=>{let p={...t,date:ne(t.date).format("YYYY-MM-DD")};w.put("/paymentsupplier/updatecorrection/",p).then(f=>{c(o.actions.handlePayedCorrection({id:n,data:f.data})),b(!1)})},he=()=>{w.delete(`/paymentsupplier/deletecorrection/${n}`).then(p=>{c(o.actions.deletePaimentHistory()),r(!1)})};return e.jsxs(e.Fragment,{children:[e.jsx(Ae,{sx:{position:"relative"},children:e.jsx(Ce,{component:Ee,children:e.jsxs(ge,{sx:{minWidth:700},children:[e.jsx(je,{children:e.jsxs(I,{children:[e.jsxs(u,{children:[l(s.paiment.amount)," ",l(s.global.mad)]}),e.jsx(u,{children:l(s.entrer.date)}),e.jsx(u,{children:l(s.paiment.typePayment)}),e.jsx(u,{children:l(s.paiment.isPayed)}),e.jsx(u,{})]})}),e.jsx(De,{children:a.payment_correction.map((p,f)=>{const U=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});let Q=new Date(p.date),q={year:Q.getFullYear(),month:`${Q.getMonth()+1}`,day:`${Q.getDate()}`};return!x||a.payment_correction.length-1!==f?e.jsxs(I,{children:[e.jsxs(u,{sx:{direction:"initial"},children:[" ",U.format(p.amount).replaceAll(","," ").replace("MAD","")]}),e.jsxs(u,{children:[" ",q.day.padStart(2,0),"/",q.month.padStart(2,0),"/",q.year]}),e.jsx(u,{children:i[p.mode-1]}),e.jsxs(u,{children:[" ",e.jsxs("div",{children:[e.jsx(G,{id:"basic-button","aria-controls":P?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":P?"true":void 0,onClick:M=>g(M,p.id),color:p.payed==1?"success":p.payed==2?"warning":"error",sx:{"&:disabled":{color:M=>M.palette.success.dark}},disabled:p.mode==1||p.mode==2?!0:f==0,children:C[Number(p.payed)-1].text}),p.payed==3&&e.jsx(_,{color:"success",onClick:()=>openModal(p.id,"paimentHistory"),children:e.jsx(W,{children:e.jsx(ss,{path:we,size:1})})}),e.jsx(Me,{id:"basic-menu",anchorEl:S,open:P,onClose:Pe,MenuListProps:{"aria-labelledby":"basic-button"},children:C.map((M,B)=>e.jsx(A,{onClick:_e=>me(M.mode),children:M.text},B))})]})]}),a.payment_correction.length-1==f&&f!==0&&e.jsxs(u,{children:[e.jsx(_,{color:"error",onClick:()=>ae(p.id),children:e.jsx(hs,{})}),e.jsx(_,{color:"warning",onClick:()=>ue(p.id,p),children:e.jsx(xs,{})})]})]}):e.jsxs(I,{children:[e.jsx(u,{sx:{direction:"initial"},children:e.jsx(re,{value:t.amount,fullWidth:!0,label:l(s.paiment.amount),type:"number",name:"amount",onChange:$})}),e.jsxs(u,{children:[" ",e.jsx(z,{value:new Date(t.date),name:"date",onChange:$,label:l(s.entrer.date)})]}),e.jsx(u,{children:e.jsxs(H,{fullWidth:!0,children:[e.jsx(V,{id:"demo-simple-select-label",children:l(s.paiment.typePayment)}),e.jsx(Y,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.mode,label:l(s.paiment.typePayment),onChange:$,name:"mode",children:i.map((M,B)=>e.jsx(A,{value:B+1,children:M}))})]})}),e.jsxs(u,{children:[e.jsx(_,{color:"success",onClick:pe,children:e.jsx(Cs,{})}),e.jsx(_,{color:"error",onClick:()=>b(!1),children:e.jsx(ts,{})})]})]})})})]})})}),e.jsx(_s,{isOpen:j,close:()=>r(!1),handleDelete:he})]})}function Ms(){const l=T(),m=Le(),{t:a}=F(),{currentData:n,isModalHistory:d}=k(j=>j.paimentFournisseur),c=Be(m.breakpoints.down("md")),[x,b]=v.useState(!0);return v.useEffect(()=>{let j=n.payment_correction[0].amount;n.payment_correction.slice(1,n.payment_correction.length).reduce((t,D)=>D.payed==1?t+D.amount:t,0)>=j&&b(!1)},[n]),e.jsxs(Ne,{onClose:()=>l(o.actions.openCloseModalHistory()),fullScreen:c,open:d,maxWidth:"lg",children:[e.jsxs(ns,{sx:{m:0,p:2.5},id:"customized-dialog-title",children:[a(s.paiment.titleHistory)," ",n.name," ",n.last_name]}),e.jsx(_,{"aria-label":"close",onClick:()=>l(o.actions.openCloseModalHistory()),sx:j=>({position:"absolute",right:8,top:8,color:j.palette.grey[500]}),children:e.jsx(le,{})}),e.jsxs(He,{children:[e.jsxs(ee,{direction:"row",justifyContent:"space-between",alignItems:"center",mb:1.5,children:[e.jsx(te,{variant:"h6"}),x&&e.jsx(G,{variant:"contained",onClick:()=>l(o.actions.openCloseModalAddHistory()),children:a(s.global.ajouter)})]}),e.jsx(Os,{})]})]})}const Es={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function As({paimentModes:l}){const m=T(),{t:a,i18n:n}=F(),d=[a(s.paiment.espece),a(s.paiment.virment),a(s.paiment.cheque),a(s.paiment.lcn)],{paiment:c,isModalAddHistory:x,currentData:b,isConfirm:j}=k(i=>i.paimentFournisseur),r=ce({amount:L().required(a(s.paiment.amountRequired)),mode:L().required(a(s.paiment.typePaymentRequired))}),t=de({initialValues:{amount:"",mode:"",date:new Date,payment:b.id},validationSchema:r,onSubmit:async(i,{resetForm:S,setErrors:O})=>{const P={...i};P.date=ne(i.date).format("YYYY-MM-DD"),w.post("/paymentsupplier/addcorrection/",P).then(g=>{m(o.actions.addPaimentFHistory(g.data)),m(o.actions.openCloseModalAddHistory()),m(o.actions.openCloseConfirm()),R.success(a(s.paiment.toastAddSuccess)),S()}).catch(g=>{m(o.actions.openCloseConfirm()),R.error(a(s.global.toastError))})}}),D=async i=>{i.preventDefault();const S=await t.validateForm();Object.keys(S).length===0?m(o.actions.openCloseConfirm()):await t.submitForm()},C=()=>{t.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(X,{open:x,onClose:()=>m(o.actions.openCloseModalAddHistory()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ie,{sx:Es,children:[e.jsxs(be,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(te,{id:"modal-modal-title",variant:"h6",component:"h2",children:a(s.paiment.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>m(o.actions.openCloseModalAddHistory()),children:e.jsx(le,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:i=>D(i),children:[e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(t.touched.mode&&t.errors.mode),children:[e.jsx(V,{id:"batiment-id",children:a(s.paiment.typePayment)}),e.jsx(Y,{labelId:"batiment-id",id:"demo-simple-select",onBlur:t.handleBlur,fullWidth:!0,name:"mode",onChange:t.handleChange,value:t.values.mode,label:a(s.paiment.typePayment),children:l.map(i=>e.jsx(A,{value:i.id,children:d[i.id-1]}))}),t.touched.mode&&t.errors.mode&&e.jsx(se,{children:t.errors.mode})]}),e.jsx(re,{id:"outlined-basic",label:a(s.paiment.amount),variant:"outlined",onBlur:t.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:t.handleChange,value:t.values.amount,error:!!(t.touched.amount&&t.errors.amount),helperText:t.touched.amount&&t.errors.amount,style:{marginBottom:"15px"}}),e.jsx(z,{label:a(s.entrer.date),value:t.values.date,onChange:i=>t.setFieldValue("date",i),onBlur:t.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:a(s.global.ajouter)})]})]})}),e.jsx(Se,{confirmed:C,cancel:()=>m(o.actions.openCloseConfirm()),isConfirm:j})]})}function ws(){const{isModalAdd:l,isModalUpdate:m,isModalDelete:a,isModalHistory:n,isModalAddHistory:d}=k(b=>b.paimentFournisseur),c=ve("paymentMethod",fe.paymentMode),x=ve("fournisseur",fe.getBatimentSelect);return e.jsxs(e.Fragment,{children:[" ",e.jsx(ie,{component:"main",sx:{flexGrow:1,py:8},children:e.jsx(Ds,{fournisseur:x.data})}),l&&e.jsx(fs,{fournisseur:x.data,paimentModes:c.data}),m&&e.jsx(ys,{fournisseur:x.data,paimentModes:c.data}),d&&e.jsx(As,{paimentModes:c.data}),a&&e.jsx(Ss,{}),e.jsx(Ps,{}),n&&e.jsx(Ms,{})]})}function Js(){return e.jsx(e.Fragment,{children:e.jsx(Ye,{children:e.jsx(ws,{})})})}export{Js as default};
