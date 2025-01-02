import{a2 as P,ao as Pe,a6 as U,d as O,r as D,j as e,a7 as W,X as Oe,l as s,a1 as A,a as N,h as w,bF as l,Y as f,b3 as Ee,T as Y,B as Ae,a3 as ae,V as G,al as Ue,k as ce,ab as pe,ac as me,ad as ue,ae as H,F as he}from"./index-2315324d.js";import{E as ye,P as we,M as xe}from"./ModalDelete-f6fc281f.js";import{u as Me,C as Te,T as Re}from"./index-fe901995.js";import{B as K,j as Fe,e as oe,T as re,a as ie,b as F,c as g,d as le,f as Ie,g as ee,G as I,u as Ce,S as L,h as Ge,E as Le}from"./moment-0b0e8416.js";import{C as z,T as Ne}from"./TableRowsLoader-12723a10.js";import{E as We}from"./Eye-ae0c2454.js";import{A as ke,K as Be,a as Ve}from"./KeyboardArrowUp-16b54b68.js";import{A as He}from"./AlertError-b447808a.js";import{D as $e}from"./DeleteOutlineOutlined-3338308b.js";import{A as Ye}from"./Add-fb3f4505.js";import{u as se,c as ne,e as de,C as De,b as Ke,d as ge,a as ve}from"./formik.esm-a69188f0.js";import{A as ze,a as Xe,F as qe,b as Je}from"./fr-8077ad92.js";import{E as Ze}from"./ExpandMore-0cef7d7e.js";import{D as $}from"./DatePicker-794fd4c1.js";import{C as Qe}from"./Container-efb50e69.js";import{M as es}from"./ModalConfirm-1555c5f9.js";const ss=r=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",boxShadow:24,p:4,[r.breakpoints.down("md")]:{width:"95%"}}),ns=["application/pdf","image/jpg","image/jpeg","image/png"];function ts({isModalUpload:r,close:o,isFournisseur:t}){var B;const a=P(),c=Pe(),{currentData:d}=U(h=>h.divers),{t:n,i18n:i}=O(),[x,m]=D.useState([]),[p,j]=D.useState(4-((B=d==null?void 0:d.expenses_proof)==null?void 0:B.length)-x.length),[E,S]=D.useState(!1),{acceptedFiles:M,getRootProps:T,getInputProps:X}=Me({onDrop:(h,C)=>{var _;if(C.length>0){if(C[0].errors[0].code=="too-many-files"){f.error(n(s.paiment.uploadLimitFile)+` ${4-((_=d==null?void 0:d.expenses_proof)==null?void 0:_.length)}`);return}else if(C[0].errors[0].code=="file-invalid-type"){f.error(n(s.paiment.fileSupported));return}f.error(C[0].errors[0].message)}m(R=>[...R,...h])},multiple:!0,maxFiles:p,validator:J,accept:{"application/pdf":[],"image/jpeg":[],"image/jpg":[],"image/png":[]}}),b=()=>{S(!0);const h=new FormData;h.append("id",d.id),x.map(C=>{h.append("files",C)}),w.post("/otherexpenses/proof/add/",h).then(C=>{a(l.actions.addProofDivers(C.data)),f.success(n(s.paiment.toastUploadFile)),S(!1),o(),m([])})},q=h=>{const C=x.findIndex(R=>R.path==h),_=x.filter((R,Z)=>Z!==C);m(_)};function J(h){var _;if(!ns.includes(h.type))return{code:"extension-supported",message:n(s.paiment.fileSupported)};const C=5*1024*1024;return h.size>C?{code:"max-size",message:n(s.paiment.uploadMaxSize)}:p<=0?{code:"max-file",message:`${n(s.paiment.uploadLimitFile)} ${4-((_=d==null?void 0:d.expenses_proof)==null?void 0:_.length)}`}:null}return D.useEffect(()=>{var h;x.length>0&&j(4-((h=d==null?void 0:d.expenses_proof)==null?void 0:h.length)-x.length)},[x.length]),e.jsx(e.Fragment,{children:e.jsx(W,{open:r,onClose:o,children:e.jsxs(K,{sx:ss(c),children:[E&&e.jsx(Oe,{}),e.jsx("h3",{className:"text-center font-semibold text-lg",children:n(s.paiment.uploadTitle)}),e.jsxs("div",{className:"flex flex-col items-center my-4 border-2 border-dashed border-purple-500 p-4",...T(),children:[e.jsx("input",{...X()}),e.jsx(Te,{color:"primary",fontSize:"large"}),e.jsx("p",{children:n(s.paiment.uploadTitle)}),e.jsxs("p",{children:[n(s.paiment.uploadMessage)," PNG, JPG, JPEG, PDF"]})]}),e.jsx("div",{children:x.map((h,C)=>e.jsxs("p",{children:[h.path," ",e.jsx(A,{onClick:()=>q(h.path),children:e.jsx(z,{color:"error"})})]},C))}),e.jsx("div",{className:"flex justify-end",children:e.jsx(N,{onClick:b,variant:"contained",color:"primary",children:n(s.paiment.upload)})})]})})})}function as({close:r,isPreview:o,file:t}){const[a,c]=D.useState(null);return D.useEffect(()=>(console.log(t),(async()=>{try{console.log(t.file);const n=await w.get(t.file,{responseType:"blob"}),i=URL.createObjectURL(n.data);console.log(i),c(i)}catch(n){console.error("Error fetching PDF:",n)}})(),()=>{a&&URL.revokeObjectURL(a)}),[]),e.jsxs(Ee,{fullScreen:!0,open:o,children:[e.jsx(ke,{sx:{position:"relative"},children:e.jsxs(Fe,{children:[e.jsx(A,{edge:"start",color:"inherit","aria-label":"close",onClick:()=>r(),children:e.jsx(z,{})}),e.jsx(Y,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Preview File"})]})}),e.jsx("iframe",{src:a,height:"100%"})]})}const os=D.memo(r=>{const o=P();let{count:t=0,items:a=[],onDeselectAll:c,onDeselectOne:d,onSelectAll:n,onSelectOne:i,selected:x=[],isLoading:m,isError:p}=r;const[j,E]=D.useState(0),[S,M]=D.useState(!1),[T,X]=D.useState(25),{t:b,i18n:q}=O(),[J,B]=D.useState({}),[h,C]=D.useState(!1),[_,R]=D.useState();D.useState(),D.useState(null);const Z=u=>{B(v=>({...v,[u]:!v[u]}))},Q=(u,v)=>{const y=a.filter(k=>k.id==u);o(l.actions.setCurrentData(y[0])),v=="update"?o(l.actions.openCloseModalUpdate()):v=="delete"?o(l.actions.openCloseModalDelete()):M(!0)},je=(u,v)=>{E(v)},Se=u=>{X(parseInt(u.target.value,10)),E(0)},te=a==null?void 0:a.slice(j*T,j*T+T);return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{sx:{position:"relative"},children:[e.jsx(oe,{component:ae,children:e.jsxs(re,{sx:{minWidth:700},children:[e.jsx(ie,{children:e.jsxs(F,{children:[e.jsx(g,{align:"left"}),e.jsxs(g,{children:[b(s.paiment.amount)," ",b(s.global.mad)]}),e.jsx(g,{children:b(s.entrer.date)}),e.jsx(g,{children:b(s.depense.addlabel)}),e.jsx(g,{})]})}),m?e.jsx(Ne,{rowsNum:10}):e.jsx(le,{children:te.length>0?te.map(u=>{const v=J[u.id]||!1;let y=new Date(u.date),k={year:y.getFullYear(),month:`${y.getMonth()+1}`,day:`${y.getDate()}`};const be=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(F,{hover:!0,children:[e.jsx(g,{sx:{width:"5%"},children:u.expenses_proof.length!==0&&e.jsx(A,{"aria-label":"expand row",size:"small",onClick:()=>Z(u.id),children:v?e.jsx(Be,{}):e.jsx(Ve,{})})}),e.jsx(g,{sx:{direction:q.language=="ar"?"rtl":"ltr",whiteSpace:"nowrap"},children:be.format(u.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(g,{children:[" ",k.day.padStart(2,0),"/",k.month.padStart(2,0),"/",k.year]}),e.jsx(g,{children:u.type_name}),e.jsxs(g,{children:[e.jsx(A,{color:"warning",onClick:()=>Q(u.id,"update"),children:e.jsx(G,{children:e.jsx(ye,{})})}),e.jsx(A,{color:"error",onClick:()=>Q(u.id,"delete"),children:e.jsx(G,{children:e.jsx($e,{})})}),u.expenses_proof.length!==4&&e.jsx(A,{color:"success",onClick:()=>Q(u.id,"upload"),children:e.jsx(G,{children:e.jsx(Ye,{})})})]})]},u.id),e.jsx(F,{children:e.jsx(g,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(Ue,{in:v,timeout:"auto",unmountOnExit:!0,children:e.jsx(oe,{sx:{width:"100%"},component:ae,children:e.jsxs(re,{sx:{width:"100%"},children:[e.jsx(ie,{children:e.jsxs(F,{children:[e.jsx(g,{children:b(s.paiment.fileName)}),e.jsx(g,{})]})}),e.jsx(le,{children:u.expenses_proof.map((V,_e)=>e.jsxs(F,{children:[e.jsx(g,{children:V.file.replace("http://192.168.1.97:8000/api".replace("/api","")+"/uploads/","")}),e.jsxs(g,{children:[" ",e.jsx(A,{color:"inherit",onClick:()=>{o(l.actions.openCloseConfirmDeleteProof()),o(l.actions.setCurrentData({id:u.id,idFile:V.id}))},children:e.jsx(G,{children:e.jsx(Re,{})})}),e.jsx(A,{color:"secondary",onClick:()=>{R({file:V.file,extension:V.extension}),C(!0)},children:e.jsx(G,{children:e.jsx(We,{})})})]})]},_e))})]})})})})})]})}):e.jsx(F,{children:e.jsx(g,{colSpan:5,sx:{textAlign:"center"},children:b(s.batiment.nothingToDisplay)})})})]})}),e.jsx(Ie,{component:"div",count:t,onPageChange:je,onRowsPerPageChange:Se,page:j,rowsPerPage:T,rowsPerPageOptions:[5,10,25],labelRowsPerPage:b(s.batiment.Lignes),labelDisplayedRows:({from:u,to:v,count:y})=>`${u}–${v} ${b(s.batiment.sur)} ${y}`}),p&&e.jsx(He,{})]}),S&&e.jsx(ts,{isModalUpload:S,close:()=>M(!1)}),h&&e.jsx(as,{isPreview:h,close:()=>C(!1),file:_})]})});function rs(){ee.locale("fr");const{t:r,i18n:o}=O(),t=P(),a=se({initialValues:{date1:null,date2:null,client:""},validationSchema:ne({date1:de().nullable().test("is-before-date2",r(s.global.date2Greather),function(c){const{date2:d}=this.parent;return c<=d}),date2:de().nullable().test("is-after-date1",r(s.global.date2Greather),function(c){const{date1:d}=this.parent;return c>=d})}),onSubmit:async(c,{resetForm:d,setErrors:n})=>{let i="";for(let x in c)if(c[x]!==""&&c[x]!==null){let m=new Date(c[x]),p=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`;i==""?i+=`?${x}=${p}`:i+=`&${x}=${p}`}t(l.actions.setLink(i))},onReset:()=>{t(l.actions.setLink(""))}});return e.jsxs(ze,{defaultExpanded:!0,children:[e.jsx(Xe,{expandIcon:e.jsx(Ze,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(qe,{}),r(s.global.filter)]})}),e.jsx(Je,{children:e.jsx(De,{children:e.jsx(Ke,{children:e.jsx("form",{noValidate:!0,onSubmit:a.handleSubmit,onReset:a.handleReset,children:e.jsxs(I,{container:!0,alignItems:"center",gap:2,children:[e.jsx(I,{item:!0,xs:12,md:4,children:e.jsx($,{value:a.values.date1,onChange:c=>a.setFieldValue("date1",c),onBlur:a.handleBlur,label:r(s.global.date1),name:"date",slotProps:{textField:{variant:"outlined",error:!!(a.touched.date1&&a.errors.date1),helperText:a.touched.date1&&a.errors.date1}},sx:{width:"100%"}})}),e.jsx(I,{item:!0,xs:12,md:4,children:e.jsx($,{value:a.values.date2,onChange:c=>a.setFieldValue("date2",c),onBlur:a.handleBlur,label:r(s.global.date2),name:"date",slotProps:{textField:{variant:"outlined",error:!!(a.touched.date2&&a.errors.date2),helperText:a.touched.date2&&a.errors.date2}},sx:{width:"100%"}})}),e.jsxs(I,{item:!0,container:!0,xs:12,md:3,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(I,{items:!0,children:e.jsx(N,{variant:"contained",type:"reset",children:r(s.global.reset)})}),e.jsx(I,{items:!0,children:e.jsx(N,{type:"submit",variant:"contained",children:r(s.global.filter)})})]})]})})})})})]})}function is(){const r=P(),{t:o,i18n:t}=O(),{divers:a,link:c}=U(n=>n.divers),d=Ce(["divers",c],()=>Ge.fetchDivers(c));return D.useEffect(()=>{d.status=="success"&&r(l.actions.fetchDivers(d.data))},[d.status,c]),e.jsx(Qe,{maxWidth:"xl",children:e.jsxs(L,{spacing:4,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(L,{spacing:1,children:e.jsx(Y,{variant:"h4",children:o(s.divers.title)})}),e.jsx(L,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(N,{startIcon:e.jsx(G,{children:e.jsx(we,{})}),variant:"contained",onClick:()=>r(l.actions.openCloseModalAdd()),children:o(s.global.ajouter)})})]}),e.jsxs(De,{children:[e.jsx(rs,{}),e.jsx(os,{items:a,count:a.length,rowsPerPage:25,isLoading:d.isLoading,isError:d.isError})]})]})})}function fe({confirmed:r}){const{currentData:o,isConfirm:t}=U(i=>i.divers),a=P(),{t:c,i18n:d}=O(),n=()=>{r()};return e.jsx(W,{open:t,onClose:()=>a(l.actions.openCloseConfirm()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(es,{title:c(s.global.confirmOperation),message:c(s.global.confirmMessage),confirmFn:n,cancel:()=>a(l.actions.openCloseConfirm())})})}const ls={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ds({typeDepense:r}){const o=P(),{t,i18n:a}=O(),{currentData:c,isModalUpdate:d}=U(p=>p.divers),n=ne({amount:ge().required(t(s.paiment.amountRequired)),type:ve().required()}),i=se({initialValues:{amount:0,type:"",date:new Date},validationSchema:n,onSubmit:async(p,{resetForm:j,setErrors:E})=>{const S={...p};S.date=ee(p.date).format("YYYY-MM-DD"),w.put("/otherexpenses/update/",S).then(M=>{o(l.actions.editDivers(M.data)),o(l.actions.openCloseModalUpdate()),o(l.actions.openCloseConfirm()),f.success(t(s.depense.toastAddSuccess)),j()}).catch(M=>{o(l.actions.openCloseConfirm()),f.error(t(s.global.toastError))})}}),x=async p=>{p.preventDefault();const j=await i.validateForm();console.log(j),Object.keys(j).length===0?o(l.actions.openCloseConfirm()):await i.submitForm()},m=()=>{i.handleSubmit()};return D.useEffect(()=>{const p={...c};p.date=new Date(p.date),i.setValues(p)},[]),e.jsxs(e.Fragment,{children:[e.jsx(W,{open:d,onClose:()=>o(l.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(K,{sx:ls,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Y,{id:"modal-modal-title",variant:"h6",component:"h2",children:t(s.divers.updateTitle)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(l.actions.openCloseModalUpdate()),children:e.jsx(z,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:p=>x(p),children:[e.jsx(ce,{id:"outlined-basic",label:t(s.paiment.amount),variant:"outlined",onBlur:i.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:i.handleChange,value:i.values.amount,error:!!(i.touched.amount&&i.errors.amount),helperText:i.touched.amount&&i.errors.amount,style:{marginBottom:"15px"}}),e.jsxs(pe,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.type&&i.errors.type),children:[e.jsx(me,{id:"batiment-id",children:t(s.depense.addlabel)}),e.jsx(ue,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"type",onChange:i.handleChange,value:i.values.type,label:t(s.depense.addlabel),children:r.length>0?r.map(p=>e.jsx(H,{value:p.id,children:p.type})):e.jsx(H,{children:t(s.batiment.nothingToDisplay)})}),i.touched.type&&i.errors.type&&e.jsx(he,{children:i.errors.type})]}),e.jsx($,{label:t(s.entrer.date),value:i.values.date,onChange:p=>i.setFieldValue("date",p),onBlur:i.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(N,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:t(s.global.modifier)})]})]})}),e.jsx(fe,{confirmed:m})]})}const cs={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ps({typeDepense:r}){const o=P(),{t,i18n:a}=O(),{isModalAdd:c}=U(m=>m.divers),d=ne({amount:ge().required(t(s.paiment.amountRequired)),type:ve().required()}),n=se({initialValues:{amount:0,type:"",date:new Date},validationSchema:d,onSubmit:async(m,{resetForm:p,setErrors:j})=>{const E={...m};E.date=ee(m.date).format("YYYY-MM-DD"),w.post("/otherexpenses/add/",E).then(S=>{o(l.actions.addDivers(S.data)),o(l.actions.openCloseModalAdd()),o(l.actions.openCloseConfirm()),f.success(t(s.depense.toastAddSuccess)),p()}).catch(S=>{o(l.actions.openCloseConfirm()),f.error(t(s.global.toastError))})}}),i=async m=>{m.preventDefault();const p=await n.validateForm();console.log(p),Object.keys(p).length===0?o(l.actions.openCloseConfirm()):await n.submitForm()},x=()=>{n.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(W,{open:c,onClose:()=>o(l.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(K,{sx:cs,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Y,{id:"modal-modal-title",variant:"h6",component:"h2",children:t(s.divers.addTitle)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(l.actions.openCloseModalAdd()),children:e.jsx(z,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:m=>i(m),children:[e.jsx(ce,{id:"outlined-basic",label:t(s.paiment.amount),variant:"outlined",onBlur:n.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:n.handleChange,value:n.values.amount,error:!!(n.touched.amount&&n.errors.amount),helperText:n.touched.amount&&n.errors.amount,style:{marginBottom:"15px"}}),e.jsxs(pe,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.type&&n.errors.type),children:[e.jsx(me,{id:"batiment-id",children:t(s.depense.addlabel)}),e.jsx(ue,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"type",onChange:n.handleChange,value:n.values.type,label:t(s.depense.addlabel),children:r.length>0?r.map(m=>e.jsx(H,{value:m.id,children:m.type})):e.jsx(H,{children:t(s.batiment.nothingToDisplay)})}),n.touched.type&&n.errors.type&&e.jsx(he,{children:n.errors.type})]}),e.jsx($,{label:t(s.entrer.date),value:n.values.date,onChange:m=>n.setFieldValue("date",m),onBlur:n.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(N,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:t(s.global.ajouter)})]})]})}),e.jsx(fe,{confirmed:x})]})}function ms(){const{currentData:r,isModalDelete:o}=U(n=>n.divers),t=P(),{t:a,i18n:c}=O(),d=()=>{w.delete(`/otherexpenses/delete/${r.id}`).then(n=>{t(l.actions.deleteDivers()),t(l.actions.openCloseModalDelete()),f.success(a(s.depense.toastDeleteSuccess))}).catch(n=>{t(l.actions.openCloseModalDelete()),f.error(a(s.global.toastError))})};return e.jsx(W,{open:o,onClose:()=>t(l.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(xe,{title:a(s.divers.deletetitle),message:a(s.divers.deletemessage),deleteFn:d,cancel:()=>t(l.actions.openCloseModalDelete())})})}function us(){const{currentData:r,isModalDeleteProof:o}=U(n=>n.divers),t=P(),{t:a,i18n:c}=O(),d=()=>{w.delete(`/otherexpenses/proof/delete/${r.idFile}`).then(n=>{t(l.actions.deleteDiversProof()),t(l.actions.openCloseConfirmDeleteProof()),f.success(a(s.global.toastSuccessDeleteFile))}).catch(n=>{console.log(n),t(l.actions.openCloseConfirmDeleteProof()),f.error(a(s.global.toastError))})};return e.jsx(W,{open:o,onClose:()=>t(l.actions.openCloseConfirmDeleteProof()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(xe,{title:a(s.paiment.deleteTitleFile),message:a(s.paiment.deleteDescriptionFile),deleteFn:d,cancel:()=>t(l.actions.openCloseConfirmDeleteProof())})})}const hs=async()=>{try{const{data:r}=await w.get("/otherexpensestype/list/");return r}catch(r){throw new Error(r)}};function xs(){const{isModalAdd:r,isModalUpdate:o}=U(a=>a.divers),t=Ce("typeDepenseDivers",hs);return e.jsxs(K,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(Le,{children:e.jsx(is,{})}),r&&e.jsx(ps,{typeDepense:t.data}),o&&e.jsx(ds,{typeDepense:t.data}),e.jsx(ms,{}),e.jsx(us,{})]})}function Ms(){return e.jsx(e.Fragment,{children:e.jsx(xs,{})})}export{Ms as default};
