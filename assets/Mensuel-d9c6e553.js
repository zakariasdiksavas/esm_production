import{a2 as A,at as Pe,a6 as R,d as U,r as g,j as e,a7 as B,X as Oe,l as s,a1 as M,a as L,h as N,bF as r,Y as j,an as Ee,T as K,B as Me,a3 as ce,V as I,al as Ae,ab as ne,ac as ae,ad as te,ae as k,k as Ce,F as ge}from"./index-b9aeea20.js";import{E as Ue,P as ye,M as De}from"./ModalDelete-e666945f.js";import{u as we,C as Re,T as Te}from"./index-75d71bb2.js";import{B as X,j as Fe,e as pe,T as me,a as ue,b as F,c as v,d as he,f as Ie,g as oe,G as w,u as ee,S as G,h as se,E as Ge}from"./moment-8bb476e3.js";import{C as z,T as Le}from"./TableRowsLoader-c4300d5c.js";import{E as Ne}from"./Eye-bd865af3.js";import{A as We,K as ke,a as Be}from"./KeyboardArrowUp-80820a8c.js";import{A as Ve}from"./AlertError-9fdceddd.js";import{D as He}from"./DeleteOutlineOutlined-7644538f.js";import{A as $e}from"./Add-94c13e39.js";import{u as re,c as ie,e as xe,C as ve,b as Ye,d as $}from"./formik.esm-799b94e8.js";import{A as Ke,a as Xe,F as ze,b as qe}from"./fr-3088b82b.js";import{E as Je}from"./ExpandMore-6e3ae782.js";import{D as Y}from"./DatePicker-05f47eec.js";import{C as Ze}from"./Container-7ef0f39f.js";import{M as fe}from"./ModalConfirm-37aae7aa.js";const Qe=m=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",boxShadow:24,p:4,[m.breakpoints.down("md")]:{width:"95%"}}),es=["application/pdf","image/jpg","image/jpeg","image/png"];function ss({isModalUpload:m,close:n,isFournisseur:t}){var V;const c=A(),l=Pe(),{currentData:a}=R(x=>x.mensuel),{t:i,i18n:d}=U(),[o,D]=g.useState([]),[u,p]=g.useState(4-((V=a==null?void 0:a.expenses_proof)==null?void 0:V.length)-o.length),[b,_]=g.useState(!1),{acceptedFiles:P,getRootProps:O,getInputProps:q}=we({onDrop:(x,C)=>{var E;if(C.length>0){if(C[0].errors[0].code=="too-many-files"){j.error(i(s.paiment.uploadLimitFile)+` ${4-((E=a==null?void 0:a.expenses_proof)==null?void 0:E.length)}`);return}else if(C[0].errors[0].code=="file-invalid-type"){j.error(i(s.paiment.fileSupported));return}j.error(C[0].errors[0].message)}D(T=>[...T,...x])},multiple:!0,maxFiles:u,validator:J,accept:{"application/pdf":[],"image/jpeg":[],"image/jpg":[],"image/png":[]}}),S=()=>{_(!0);const x=new FormData;x.append("id",a.id),o.map(C=>{x.append("files",C)}),N.post("/operatingexpenses/proof/add/",x).then(C=>{c(r.actions.addProofMensuel(C.data)),j.success(i(s.paiment.toastUploadFile)),_(!1),n(),D([])})},le=x=>{const C=o.findIndex(T=>T.path==x),E=o.filter((T,Z)=>Z!==C);D(E)};function J(x){var E;if(!es.includes(x.type))return{code:"extension-supported",message:i(s.paiment.fileSupported)};const C=5*1024*1024;return x.size>C?{code:"max-size",message:i(s.paiment.uploadMaxSize)}:u<=0?{code:"max-file",message:`${i(s.paiment.uploadLimitFile)} ${4-((E=a==null?void 0:a.expenses_proof)==null?void 0:E.length)}`}:null}return g.useEffect(()=>{var x;o.length>0&&p(4-((x=a==null?void 0:a.expenses_proof)==null?void 0:x.length)-o.length)},[o.length]),e.jsx(e.Fragment,{children:e.jsx(B,{open:m,onClose:n,children:e.jsxs(X,{sx:Qe(l),children:[b&&e.jsx(Oe,{}),e.jsx("h3",{className:"text-center font-semibold text-lg",children:i(s.paiment.uploadTitle)}),e.jsxs("div",{className:"flex flex-col items-center my-4 border-2 border-dashed border-purple-500 p-4",...O(),children:[e.jsx("input",{...q()}),e.jsx(Re,{color:"primary",fontSize:"large"}),e.jsx("p",{children:i(s.paiment.uploadTitle)}),e.jsxs("p",{children:[i(s.paiment.uploadMessage)," PNG, JPG, JPEG, PDF"]})]}),e.jsx("div",{children:o.map((x,C)=>e.jsxs("p",{children:[x.path," ",e.jsx(M,{onClick:()=>le(x.path),children:e.jsx(z,{color:"error"})})]},C))}),e.jsx("div",{className:"flex justify-end",children:e.jsx(L,{onClick:S,variant:"contained",color:"primary",children:i(s.paiment.upload)})})]})})})}function ns({close:m,isPreview:n,file:t}){const[c,l]=g.useState(null);return g.useEffect(()=>(console.log(t),(async()=>{try{console.log(t.file);const i=await N.get(t.file,{responseType:"blob"}),d=URL.createObjectURL(i.data);console.log(d),l(d)}catch(i){console.error("Error fetching PDF:",i)}})(),()=>{c&&URL.revokeObjectURL(c)}),[]),e.jsxs(Ee,{fullScreen:!0,open:n,children:[e.jsx(We,{sx:{position:"relative"},children:e.jsxs(Fe,{children:[e.jsx(M,{edge:"start",color:"inherit","aria-label":"close",onClick:()=>m(),children:e.jsx(z,{})}),e.jsx(K,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Preview File"})]})}),e.jsx("iframe",{src:c,height:"100%"})]})}const as=g.memo(m=>{const n=A();let{count:t=0,items:c=[],onDeselectAll:l,onDeselectOne:a,onSelectAll:i,onSelectOne:d,selected:o=[],isLoading:D,isError:u}=m;const[p,b]=g.useState(0),[_,P]=g.useState(!1),[O,q]=g.useState(25),{t:S,i18n:le}=U(),[J,V]=g.useState({}),[x,C]=g.useState(!1),[E,T]=g.useState();g.useState(),g.useState(null);const Z=h=>{V(f=>({...f,[h]:!f[h]}))},Q=(h,f)=>{const y=c.filter(W=>W.id==h);n(r.actions.setCurrentData(y[0])),f=="update"?n(r.actions.openCloseModalUpdate()):f=="delete"?n(r.actions.openCloseModalDelete()):P(!0)},je=(h,f)=>{b(f)},Se=h=>{q(parseInt(h.target.value,10)),b(0)},de=c==null?void 0:c.slice(p*O,p*O+O);return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{sx:{position:"relative"},children:[e.jsx(pe,{component:ce,children:e.jsxs(me,{sx:{minWidth:700},children:[e.jsx(ue,{children:e.jsxs(F,{children:[e.jsx(v,{align:"left"}),e.jsxs(v,{children:[S(s.paiment.amount)," ",S(s.global.mad)]}),e.jsx(v,{children:S(s.entrer.date)}),e.jsx(v,{children:S(s.depense.addlabel)}),e.jsx(v,{})]})}),D?e.jsx(Le,{rowsNum:10}):e.jsx(he,{children:de.length>0?de.map(h=>{const f=J[h.id]||!1;let y=new Date(h.date),W={year:y.getFullYear(),month:`${y.getMonth()+1}`,day:`${y.getDate()}`};const be=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(F,{hover:!0,children:[e.jsx(v,{sx:{width:"5%"},children:h.expenses_proof.length!==0&&e.jsx(M,{"aria-label":"expand row",size:"small",onClick:()=>Z(h.id),children:f?e.jsx(ke,{}):e.jsx(Be,{})})}),e.jsx(v,{sx:{direction:"initial",whiteSpace:"nowrap"},children:be.format(h.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(v,{children:[" ",W.day.padStart(2,0),"/",W.month.padStart(2,0),"/",W.year]}),e.jsx(v,{children:h.type_name}),e.jsxs(v,{children:[e.jsx(M,{color:"warning",onClick:()=>Q(h.id,"update"),children:e.jsx(I,{children:e.jsx(Ue,{})})}),e.jsx(M,{color:"error",onClick:()=>Q(h.id,"delete"),children:e.jsx(I,{children:e.jsx(He,{})})}),h.expenses_proof.length!==4&&e.jsx(M,{color:"success",onClick:()=>Q(h.id,"upload"),children:e.jsx(I,{children:e.jsx($e,{})})})]})]},h.id),e.jsx(F,{children:e.jsx(v,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(Ae,{in:f,timeout:"auto",unmountOnExit:!0,children:e.jsx(pe,{sx:{width:"100%"},component:ce,children:e.jsxs(me,{sx:{width:"100%"},children:[e.jsx(ue,{children:e.jsxs(F,{children:[e.jsx(v,{children:S(s.paiment.fileName)}),e.jsx(v,{})]})}),e.jsx(he,{children:h.expenses_proof.map((H,_e)=>e.jsxs(F,{children:[e.jsx(v,{children:H.file.replace("http://192.168.1.97:8000/api".replace("/api","")+"/uploads/","")}),e.jsxs(v,{children:[" ",e.jsx(M,{color:"inherit",onClick:()=>{n(r.actions.openCloseConfirmDeleteProof()),n(r.actions.setCurrentData({id:h.id,idFile:H.id}))},children:e.jsx(I,{children:e.jsx(Te,{})})}),e.jsx(M,{color:"secondary",onClick:()=>{T({file:H.file,extension:H.extension}),C(!0)},children:e.jsx(I,{children:e.jsx(Ne,{})})})]})]},_e))})]})})})})})]})}):e.jsx(F,{children:e.jsx(v,{colSpan:5,sx:{textAlign:"center"},children:S(s.batiment.nothingToDisplay)})})})]})}),e.jsx(Ie,{component:"div",count:t,onPageChange:je,onRowsPerPageChange:Se,page:p,rowsPerPage:O,rowsPerPageOptions:[5,10,25],labelRowsPerPage:S(s.batiment.Lignes),labelDisplayedRows:({from:h,to:f,count:y})=>`${h}–${f} ${S(s.batiment.sur)} ${y}`}),u&&e.jsx(Ve,{})]}),_&&e.jsx(ss,{isModalUpload:_,close:()=>P(!1)}),x&&e.jsx(ns,{isPreview:x,close:()=>C(!1),file:E})]})});function ts({type:m}){oe.locale("fr");const{t:n,i18n:t}=U(),c=A(),l=re({initialValues:{date1:null,date2:null,type:""},validationSchema:ie({date1:xe().nullable().test("is-before-date2",n(s.global.date2Greather),function(a){const{date2:i}=this.parent;return a<=i}),date2:xe().nullable().test("is-after-date1",n(s.global.date2Greather),function(a){const{date1:i}=this.parent;return a>=i})}),onSubmit:async(a,{resetForm:i,setErrors:d})=>{let o="";for(let D in a)if(a[D]!==""&&a[D]!==null){let u=new Date(a[D]),p=u.getFullYear()!==1970?`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`:a[D];o==""?o+=`?${D}=${p}`:o+=`&${D}=${p}`}c(r.actions.setLink(o))},onReset:()=>{c(r.actions.setLink(""))}});return e.jsxs(Ke,{defaultExpanded:!0,children:[e.jsx(Xe,{expandIcon:e.jsx(Je,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(ze,{}),n(s.global.filter)]})}),e.jsx(qe,{children:e.jsx(ve,{children:e.jsx(Ye,{children:e.jsx("form",{noValidate:!0,onSubmit:l.handleSubmit,onReset:l.handleReset,children:e.jsxs(w,{container:!0,alignItems:"center",gap:2,children:[e.jsx(w,{item:!0,xs:12,md:5,sm:12,children:e.jsxs(ne,{fullWidth:!0,children:[e.jsx(ae,{id:"batiment-id",children:n(s.depense.addlabel)}),e.jsx(te,{labelId:"batiment-id",id:"demo-simple-select",onBlur:l.handleBlur,fullWidth:!0,name:"type",onChange:l.handleChange,value:l.values.type,label:n(s.depense.addlabel),children:m==null?void 0:m.map(a=>e.jsx(k,{value:a.id,children:a.name}))})]})}),e.jsx(w,{item:!0,xs:12,md:2,sm:12,children:e.jsx(Y,{value:l.values.date1,onChange:a=>l.setFieldValue("date1",a),onBlur:l.handleBlur,label:n(s.global.date1),name:"date",slotProps:{textField:{variant:"outlined",error:!!(l.touched.date1&&l.errors.date1),helperText:l.touched.date1&&l.errors.date1}}})}),e.jsx(w,{item:!0,xs:12,md:2,sm:12,children:e.jsx(Y,{value:l.values.date2,onChange:a=>l.setFieldValue("date2",a),onBlur:l.handleBlur,label:n(s.global.date2),name:"date",slotProps:{textField:{variant:"outlined",error:!!(l.touched.date2&&l.errors.date2),helperText:l.touched.date2&&l.errors.date2}}})}),e.jsxs(w,{item:!0,container:!0,xs:12,md:12,sm:12,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(w,{items:!0,children:e.jsx(L,{variant:"contained",type:"reset",children:n(s.global.reset)})}),e.jsx(w,{items:!0,children:e.jsx(L,{type:"submit",variant:"contained",children:n(s.global.filter)})})]})]})})})})})]})}function os(){const m=A(),{t:n,i18n:t}=U(),{mensuel:c,link:l}=R(d=>d.mensuel),a=ee(["mensuel",l],()=>se.fetchMensuel(l)),i=ee("typeDePense",se.fetchExpenseType);return g.useEffect(()=>{a.status=="success"&&(console.log(a.data),m(r.actions.fetchMensuel(a.data)))},[a.status,l]),e.jsx(Ze,{maxWidth:"xl",children:e.jsxs(G,{spacing:4,children:[e.jsxs(G,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(G,{spacing:1,children:e.jsx(K,{variant:"h4",children:n(s.depense.titleMensuel)})}),e.jsx(G,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(L,{startIcon:e.jsx(I,{children:e.jsx(ye,{})}),variant:"contained",onClick:()=>m(r.actions.openCloseModalAdd()),children:n(s.global.ajouter)})})]}),e.jsxs(ve,{children:[e.jsx(ts,{type:i.data}),e.jsx(as,{items:c,count:c.length,rowsPerPage:25,isLoading:a.isLoading,isError:a.isError})]})]})})}const rs={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function is({types:m}){const n=A(),{t,i18n:c}=U(),{currentData:l,isModalUpdate:a,isConfirm:i}=R(p=>p.mensuel),d=ie({amount:$().required(t(s.paiment.amountRequired)),type:$().required()}),o=re({initialValues:{amount:0,type:"",date:new Date},validationSchema:d,onSubmit:async(p,{resetForm:b,setErrors:_})=>{const P={...p};P.date=oe(p.date).format("YYYY-MM-DD"),N.put("/operatingexpenses/update/",P).then(O=>{n(r.actions.editMensuel(O.data)),n(r.actions.openCloseModalUpdate()),n(r.actions.openCloseConfirm()),j.success(t(s.depense.toastUpdateSuccess)),b()}).catch(O=>{n(r.actions.openCloseConfirm()),j.error(t(s.global.toastError))})}}),D=async p=>{p.preventDefault();const b=await o.validateForm();Object.keys(b).length===0?n(r.actions.openCloseConfirm()):await o.submitForm()},u=()=>{o.handleSubmit()};return g.useEffect(()=>{const p={...l};p.date=new Date(p.date),o.setValues(p)},[]),e.jsxs(e.Fragment,{children:[e.jsx(B,{open:a,onClose:()=>n(r.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(X,{sx:rs,children:[e.jsxs(G,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:t(s.depense.updatemensuel)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>n(r.actions.openCloseModalUpdate()),children:e.jsx(z,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:p=>D(p),children:[e.jsx(Ce,{id:"outlined-basic",label:t(s.paiment.amount),variant:"outlined",onBlur:o.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:o.handleChange,value:o.values.amount,error:!!(o.touched.amount&&o.errors.amount),helperText:o.touched.amount&&o.errors.amount,style:{marginBottom:"15px"}}),e.jsxs(ne,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(o.touched.type&&o.errors.type),children:[e.jsx(ae,{id:"batiment-id",children:t(s.depense.addlabel)}),e.jsx(te,{labelId:"batiment-id",id:"demo-simple-select",onBlur:o.handleBlur,fullWidth:!0,name:"type",onChange:o.handleChange,value:o.values.type,label:t(s.depense.addlabel),children:m.length>0?m.map(p=>e.jsx(k,{value:p.id,children:p.name})):e.jsx(k,{children:t(s.batiment.nothingToDisplay)})}),o.touched.type&&o.errors.type&&e.jsx(ge,{children:o.errors.type})]}),e.jsx(Y,{label:t(s.entrer.date),value:o.values.date,onChange:p=>o.setFieldValue("date",p),onBlur:o.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(L,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:t(s.global.modifier)})]})]})}),e.jsx(fe,{confirmed:u,cancel:()=>n(r.actions.openCloseConfirm()),isConfirm:i})]})}const ls={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ds({types:m}){const n=A(),{t,i18n:c}=U(),{isModalAdd:l,isConfirm:a}=R(u=>u.mensuel),i=ie({amount:$().required(t(s.paiment.amountRequired)),type:$().required()}),d=re({initialValues:{amount:0,type:"",date:new Date},validationSchema:i,onSubmit:async(u,{resetForm:p,setErrors:b})=>{const _={...u};_.date=oe(u.date).format("YYYY-MM-DD"),N.post("/operatingexpenses/add/",_).then(P=>{n(r.actions.addMensuel(P.data)),n(r.actions.openCloseModalAdd()),n(r.actions.openCloseConfirm()),j.success(t(s.depense.toastAddSuccess)),p()}).catch(P=>{n(r.actions.openCloseConfirm()),j.error(t(s.global.toastError))})}}),o=async u=>{u.preventDefault();const p=await d.validateForm();Object.keys(p).length===0?n(r.actions.openCloseConfirm()):await d.submitForm()},D=()=>{d.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(B,{open:l,onClose:()=>n(r.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(X,{sx:ls,children:[e.jsxs(G,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:t(s.depense.addmensuel)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>n(r.actions.openCloseModalAdd()),children:e.jsx(z,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:u=>o(u),children:[e.jsx(Ce,{id:"outlined-basic",label:t(s.paiment.amount),variant:"outlined",onBlur:d.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:d.handleChange,value:d.values.amount,error:!!(d.touched.amount&&d.errors.amount),helperText:d.touched.amount&&d.errors.amount,style:{marginBottom:"15px"}}),e.jsxs(ne,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(d.touched.type&&d.errors.type),children:[e.jsx(ae,{id:"batiment-id",children:t(s.depense.addlabel)}),e.jsx(te,{labelId:"batiment-id",id:"demo-simple-select",onBlur:d.handleBlur,fullWidth:!0,name:"type",onChange:d.handleChange,value:d.values.type,label:t(s.depense.addlabel),children:m.length>0?m.map(u=>e.jsx(k,{value:u.id,children:u.name})):e.jsx(k,{children:t(s.batiment.nothingToDisplay)})}),d.touched.type&&d.errors.type&&e.jsx(ge,{children:d.errors.type})]}),e.jsx(Y,{label:t(s.entrer.date),value:d.values.date,onChange:u=>d.setFieldValue("date",u),onBlur:d.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(L,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:t(s.global.ajouter)})]})]})}),e.jsx(fe,{confirmed:D,cancel:()=>n(r.actions.openCloseConfirm()),isConfirm:a})]})}function cs(){const{currentData:m,isModalDelete:n}=R(i=>i.mensuel),t=A(),{t:c,i18n:l}=U(),a=()=>{N.delete(`/operatingexpenses/delete/${m.id}`).then(i=>{t(r.actions.deleteMensuel()),t(r.actions.openCloseModalDelete()),j.success(c(s.depense.toastDeleteSuccess))}).catch(i=>{t(r.actions.openCloseModalDelete()),j.error(c(s.global.toastError))})};return e.jsx(B,{open:n,onClose:()=>t(r.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(De,{title:c(s.depense.deletetitleMentuel),message:c(s.depense.deletemessageMentuel),deleteFn:a,cancel:()=>t(r.actions.openCloseModalDelete())})})}function ps(){const{currentData:m,isModalDeleteProof:n}=R(i=>i.mensuel),t=A(),{t:c,i18n:l}=U(),a=()=>{N.delete(`/operatingexpenses/proof/delete/${m.idFile}`).then(i=>{t(r.actions.deleteMensuelProof()),t(r.actions.openCloseConfirmDeleteProof()),j.success(c(s.global.toastSuccessDeleteFile))}).catch(i=>{console.log(i),t(r.actions.openCloseConfirmDeleteProof()),j.error(c(s.global.toastError))})};return e.jsx(B,{open:n,onClose:()=>t(r.actions.openCloseConfirmDeleteProof()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(De,{title:c(s.paiment.deleteTitleFile),message:c(s.paiment.deleteDescriptionFile),deleteFn:a,cancel:()=>t(r.actions.openCloseConfirmDeleteProof())})})}function ms(){const{isModalAdd:m,isModalUpdate:n}=R(c=>c.mensuel),t=ee("types",se.fetchExpenseType);return e.jsxs(X,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(Ge,{children:e.jsx(os,{})}),m&&e.jsx(ds,{types:t.data}),n&&e.jsx(is,{types:t.data}),e.jsx(cs,{}),e.jsx(ps,{})]})}function As(){return e.jsx(e.Fragment,{children:e.jsx(ms,{})})}export{As as default};
