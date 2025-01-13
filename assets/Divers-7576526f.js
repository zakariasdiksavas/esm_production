import{a2 as U,at as Pe,a6 as M,d as y,r as C,j as e,a7 as H,X as Ee,a1 as P,l as s,a as N,h as w,bz as r,Y as f,an as Ae,T as X,B as ae,a3 as oe,V as G,al as Ue,k as pe,ab as me,ac as ue,ad as he,ae as K,F as xe}from"./index-8b885c7c.js";import{E as ye,P as Me,M as Ce}from"./ModalDelete-526b766f.js";import{u as we,C as ve,T as Te}from"./index-bcb6054f.js";import{B,e as re,T as ie,a as le,b as F,c as D,d as de,P as Re,f as Z,G as I,u as De,S as L,h as Fe,E as Ie}from"./moment-a4ec633c.js";import{C as V,T as Ge}from"./TableRowsLoader-05c4d608.js";import{E as Le}from"./Eye-7bd27996.js";import{A as Ne,T as We,K as ke,a as Be}from"./KeyboardArrowUp-8cedb4c9.js";import{A as Ve}from"./AlertError-c105f592.js";import{D as He}from"./DeleteOutlineOutlined-e0c3d916.js";import{u as ee,c as se,e as ce,C as ge,b as $e,d as fe,a as je}from"./formik.esm-8d1d4924.js";import{A as Ye,a as Ke,F as ze,b as Xe}from"./fr-f2ae4e07.js";import{E as qe}from"./ExpandMore-b942b62b.js";import{D as z}from"./DatePicker-66d8edae.js";import{C as Je}from"./Container-d358c3d2.js";import{M as Se}from"./ModalConfirm-d235208a.js";const Qe=i=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",boxShadow:24,p:4,[i.breakpoints.down("md")]:{width:"95%"}}),Ze=["application/pdf","image/jpg","image/jpeg","image/png"];function es({isModalUpload:i,close:o,isFournisseur:n}){var $;const t=U(),m=Pe(),{currentData:l}=M(h=>h.divers),{t:c,i18n:d}=y(),[a,g]=C.useState([]),[u,p]=C.useState(4-(($=l==null?void 0:l.expenses_proof)==null?void 0:$.length)-a.length),[j,b]=C.useState(!1),{acceptedFiles:_,getRootProps:E,getInputProps:ne}=we({onDrop:(h,v)=>{var O;if(v.length>0){if(v[0].errors[0].code=="too-many-files"){f.error(c(s.paiment.uploadLimitFile)+` ${4-((O=l==null?void 0:l.expenses_proof)==null?void 0:O.length)}`);return}else if(v[0].errors[0].code=="file-invalid-type"){f.error(c(s.paiment.fileSupported));return}f.error(v[0].errors[0].message)}g(T=>[...T,...h])},multiple:!0,maxFiles:u,validator:q,accept:{"application/pdf":[],"image/jpeg":[],"image/jpg":[],"image/png":[]}}),A=()=>{b(!0);const h=new FormData;h.append("id",l.id),a.map(v=>{h.append("files",v)}),w.post("/otherexpenses/proof/add/",h).then(v=>{t(r.actions.addProofDivers(v.data)),f.success(c(s.paiment.toastUploadFile)),b(!1),o(),g([])})},te=h=>{const v=a.findIndex(T=>T.path==h),O=a.filter((T,J)=>J!==v);g(O)};function q(h){var O;if(!Ze.includes(h.type))return{code:"extension-supported",message:c(s.paiment.fileSupported)};const v=5*1024*1024;return h.size>v?{code:"max-size",message:c(s.paiment.uploadMaxSize)}:u<=0?{code:"max-file",message:`${c(s.paiment.uploadLimitFile)} ${4-((O=l==null?void 0:l.expenses_proof)==null?void 0:O.length)}`}:null}return C.useEffect(()=>{var h;a.length>0&&p(4-((h=l==null?void 0:l.expenses_proof)==null?void 0:h.length)-a.length)},[a.length]),e.jsx(e.Fragment,{children:e.jsx(H,{open:i,onClose:o,children:e.jsxs(B,{sx:Qe(m),children:[j&&e.jsx(Ee,{}),e.jsx(B,{sx:{position:"absolute",right:0,top:0},children:e.jsx(P,{onClick:o,children:e.jsx(V,{})})}),e.jsx("h3",{className:"text-center font-semibold text-lg",children:c(s.paiment.uploadTitle)}),e.jsxs("div",{className:"flex flex-col items-center my-4 border-2 border-dashed border-purple-500 p-4",...E(),children:[e.jsx("input",{...ne()}),e.jsx(ve,{color:"primary",fontSize:"large"}),e.jsx("p",{children:c(s.paiment.uploadTitle)}),e.jsxs("p",{children:[c(s.paiment.uploadMessage)," PNG, JPG, JPEG, PDF"]})]}),e.jsx("div",{children:a.map((h,v)=>e.jsxs("p",{children:[h.path," ",e.jsx(P,{onClick:()=>te(h.path),children:e.jsx(V,{color:"error"})})]},v))}),e.jsx("div",{className:"flex justify-end",children:e.jsx(N,{onClick:A,variant:"contained",color:"primary",children:c(s.paiment.upload)})})]})})})}function ss({close:i,isPreview:o,file:n}){const[t,m]=C.useState(null);return C.useEffect(()=>(console.log(n),(async()=>{try{console.log(n.file);const c=await w.get(n.file,{responseType:"blob"}),d=URL.createObjectURL(c.data);console.log(d),m(d)}catch(c){console.error("Error fetching PDF:",c)}})(),()=>{t&&URL.revokeObjectURL(t)}),[]),e.jsxs(Ae,{fullScreen:!0,open:o,children:[e.jsx(Ne,{sx:{position:"relative"},children:e.jsxs(We,{children:[e.jsx(P,{edge:"start",color:"inherit","aria-label":"close",onClick:()=>i(),children:e.jsx(V,{})}),e.jsx(X,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Preview File"})]})}),e.jsx("iframe",{src:t,height:"100%"})]})}const ns=C.memo(i=>{const o=U();let{count:n=0,items:t=[],onDeselectAll:m,onDeselectOne:l,onSelectAll:c,onSelectOne:d,selected:a=[],isLoading:g,isError:u}=i;const[p,j]=C.useState(1),[b,_]=C.useState(!1),[E,ne]=C.useState(25),{t:A,i18n:te}=y(),[q,$]=C.useState({}),[h,v]=C.useState(!1),[O,T]=C.useState();C.useState(),C.useState(null);const J=x=>{$(S=>({...S,[x]:!S[x]}))},Q=(x,S)=>{const W=t.filter(k=>k.id==x);o(r.actions.setCurrentData(W[0])),S=="update"?o(r.actions.openCloseModalUpdate()):S=="delete"?o(r.actions.openCloseModalDelete()):_(!0)},be=(x,S)=>{j(S)},R=t==null?void 0:t.slice((p-1)*E,p*E);return C.useEffect(()=>{j(1)},[t]),e.jsxs(e.Fragment,{children:[e.jsxs(ae,{sx:{position:"relative"},children:[e.jsx(re,{component:oe,children:e.jsxs(ie,{sx:{minWidth:700},children:[e.jsx(le,{children:e.jsxs(F,{children:[e.jsx(D,{align:"left"}),e.jsxs(D,{children:[A(s.paiment.amount)," ",A(s.global.mad)]}),e.jsx(D,{children:A(s.entrer.date)}),e.jsx(D,{children:A(s.depense.addlabel)}),e.jsx(D,{})]})}),g?e.jsx(Ge,{rowsNum:10}):e.jsx(de,{children:(R==null?void 0:R.length)>0?R==null?void 0:R.map(x=>{const S=q[x.id]||!1;let W=new Date(x.date),k={year:W.getFullYear(),month:`${W.getMonth()+1}`,day:`${W.getDate()}`};const _e=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(e.Fragment,{children:[e.jsxs(F,{hover:!0,children:[e.jsx(D,{sx:{width:"5%"},children:x.expenses_proof.length!==0&&e.jsx(P,{"aria-label":"expand row",size:"small",onClick:()=>J(x.id),children:S?e.jsx(ke,{}):e.jsx(Be,{})})}),e.jsx(D,{sx:{direction:"initial",whiteSpace:"nowrap"},children:_e.format(x.amount).replaceAll(","," ").replace("MAD","")}),e.jsxs(D,{children:[" ",k.day.padStart(2,0),"/",k.month.padStart(2,0),"/",k.year]}),e.jsx(D,{children:x.type_name}),e.jsxs(D,{children:[e.jsx(P,{color:"warning",onClick:()=>Q(x.id,"update"),children:e.jsx(G,{children:e.jsx(ye,{})})}),e.jsx(P,{color:"error",onClick:()=>Q(x.id,"delete"),children:e.jsx(G,{children:e.jsx(He,{})})}),x.expenses_proof.length!==4&&e.jsx(P,{color:"success",onClick:()=>Q(x.id,"upload"),children:e.jsx(G,{children:e.jsx(ve,{})})})]})]},x.id),e.jsx(F,{children:e.jsx(D,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:e.jsx(Ue,{in:S,timeout:"auto",unmountOnExit:!0,children:e.jsx(re,{sx:{width:"100%"},component:oe,children:e.jsxs(ie,{sx:{width:"100%"},children:[e.jsx(le,{children:e.jsxs(F,{children:[e.jsx(D,{children:A(s.paiment.fileName)}),e.jsx(D,{})]})}),e.jsx(de,{children:x.expenses_proof.map((Y,Oe)=>e.jsxs(F,{children:[e.jsx(D,{children:Y.file.replace("http://192.168.1.100:80/api".replace("/api","")+"/uploads/","")}),e.jsxs(D,{children:[" ",e.jsx(P,{color:"inherit",onClick:()=>{o(r.actions.openCloseConfirmDeleteProof()),o(r.actions.setCurrentData({id:x.id,idFile:Y.id}))},children:e.jsx(G,{children:e.jsx(Te,{})})}),e.jsx(P,{color:"secondary",onClick:()=>{T({file:Y.file,extension:Y.extension}),v(!0)},children:e.jsx(G,{children:e.jsx(Le,{})})})]})]},Oe))})]})})})})})]})}):e.jsx(F,{children:e.jsx(D,{colSpan:5,sx:{textAlign:"center"},children:A(s.batiment.nothingToDisplay)})})})]})}),e.jsx(ae,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(Re,{count:Math.ceil(n/E),defaultPage:p,onChange:be,color:"primary",size:"large"})}),u&&e.jsx(Ve,{})]}),b&&e.jsx(es,{isModalUpload:b,close:()=>_(!1)}),h&&e.jsx(ss,{isPreview:h,close:()=>v(!1),file:O})]})});function ts(){Z.locale("fr");const{t:i,i18n:o}=y(),n=U(),t=ee({initialValues:{date1:null,date2:null,client:""},validationSchema:se({date1:ce().nullable().test("is-before-date2",i(s.global.date2Greather),function(m){const{date2:l}=this.parent;return m<=l}),date2:ce().nullable().test("is-after-date1",i(s.global.date2Greather),function(m){const{date1:l}=this.parent;return m>=l})}),onSubmit:async(m,{resetForm:l,setErrors:c})=>{let d="";for(let a in m)if(m[a]!==""&&m[a]!==null){let g=new Date(m[a]),u=`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}-${String(g.getDate()).padStart(2,"0")}`;d==""?d+=`?${a}=${u}`:d+=`&${a}=${u}`}n(r.actions.setLink(d))},onReset:()=>{n(r.actions.setLink(""))}});return e.jsxs(Ye,{defaultExpanded:!0,children:[e.jsx(Ke,{expandIcon:e.jsx(qe,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(ze,{}),i(s.global.filter)]})}),e.jsx(Xe,{children:e.jsx(ge,{children:e.jsx($e,{children:e.jsx("form",{noValidate:!0,onSubmit:t.handleSubmit,onReset:t.handleReset,children:e.jsxs(I,{container:!0,alignItems:"center",gap:2,children:[e.jsx(I,{item:!0,xs:12,md:4,children:e.jsx(z,{value:t.values.date1,onChange:m=>t.setFieldValue("date1",m),onBlur:t.handleBlur,label:i(s.global.date1),name:"date",slotProps:{textField:{variant:"outlined",error:!!(t.touched.date1&&t.errors.date1),helperText:t.touched.date1&&t.errors.date1}},sx:{width:"100%"}})}),e.jsx(I,{item:!0,xs:12,md:4,children:e.jsx(z,{value:t.values.date2,onChange:m=>t.setFieldValue("date2",m),onBlur:t.handleBlur,label:i(s.global.date2),name:"date",slotProps:{textField:{variant:"outlined",error:!!(t.touched.date2&&t.errors.date2),helperText:t.touched.date2&&t.errors.date2}},sx:{width:"100%"}})}),e.jsxs(I,{item:!0,container:!0,xs:12,md:3,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(I,{items:!0,children:e.jsx(N,{variant:"contained",type:"reset",children:i(s.global.reset)})}),e.jsx(I,{items:!0,children:e.jsx(N,{type:"submit",variant:"contained",children:i(s.global.filter)})})]})]})})})})})]})}function as(){const i=U(),{t:o,i18n:n}=y(),{divers:t,link:m}=M(c=>c.divers),l=De(["divers",m],()=>Fe.fetchDivers(m));return C.useEffect(()=>{l.status=="success"&&i(r.actions.fetchDivers(l.data))},[l.status,m]),e.jsx(Je,{maxWidth:"xl",children:e.jsxs(L,{spacing:4,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(L,{spacing:1,children:e.jsx(X,{variant:"h4",children:o(s.divers.title)})}),e.jsx(L,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(N,{startIcon:e.jsx(G,{children:e.jsx(Me,{})}),variant:"contained",onClick:()=>i(r.actions.openCloseModalAdd()),children:o(s.global.ajouter)})})]}),e.jsxs(ge,{children:[e.jsx(ts,{}),e.jsx(ns,{items:t,count:t.length,rowsPerPage:25,isLoading:l.isLoading,isError:l.isError})]})]})})}const os={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function rs({typeDepense:i}){const o=U(),{t:n,i18n:t}=y(),{currentData:m,isModalUpdate:l,isConfirm:c}=M(p=>p.divers),d=se({amount:fe().required(n(s.paiment.amountRequired)),type:je().required()}),a=ee({initialValues:{amount:0,type:"",date:new Date},validationSchema:d,onSubmit:async(p,{resetForm:j,setErrors:b})=>{const _={...p};_.date=Z(p.date).format("YYYY-MM-DD"),w.put("/otherexpenses/update/",_).then(E=>{o(r.actions.editDivers(E.data)),o(r.actions.openCloseModalUpdate()),o(r.actions.openCloseConfirm()),f.success(n(s.divers.toastUpdateSuccess)),j()}).catch(E=>{o(r.actions.openCloseConfirm()),f.error(n(s.global.toastError))})}}),g=async p=>{p.preventDefault();const j=await a.validateForm();console.log(j),Object.keys(j).length===0?o(r.actions.openCloseConfirm()):await a.submitForm()},u=()=>{a.handleSubmit()};return C.useEffect(()=>{const p={...m};p.date=new Date(p.date),a.setValues(p)},[]),e.jsxs(e.Fragment,{children:[e.jsx(H,{open:l,onClose:()=>o(r.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(B,{sx:os,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(X,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(s.divers.updateTitle)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(r.actions.openCloseModalUpdate()),children:e.jsx(V,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:p=>g(p),children:[e.jsx(pe,{id:"outlined-basic",label:n(s.paiment.amount),variant:"outlined",onBlur:a.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:a.handleChange,value:a.values.amount,error:!!(a.touched.amount&&a.errors.amount),helperText:a.touched.amount&&a.errors.amount,style:{marginBottom:"15px"}}),e.jsxs(me,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(a.touched.type&&a.errors.type),children:[e.jsx(ue,{id:"batiment-id",children:n(s.depense.addlabel)}),e.jsx(he,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"type",onChange:a.handleChange,value:a.values.type,label:n(s.depense.addlabel),children:i.length>0?i.map(p=>e.jsx(K,{value:p.id,children:p.type})):e.jsx(K,{children:n(s.batiment.nothingToDisplay)})}),a.touched.type&&a.errors.type&&e.jsx(xe,{children:a.errors.type})]}),e.jsx(z,{label:n(s.entrer.date),value:a.values.date,onChange:p=>a.setFieldValue("date",p),onBlur:a.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(N,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(s.global.modifier)})]})]})}),e.jsx(Se,{confirmed:u,cancel:()=>o(r.actions.openCloseConfirm()),isConfirm:c})]})}const is={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ls({typeDepense:i}){const o=U(),{t:n,i18n:t}=y(),{isModalAdd:m,isConfirm:l}=M(u=>u.divers),c=se({amount:fe().required(n(s.paiment.amountRequired)),type:je().required()}),d=ee({initialValues:{amount:0,type:"",date:new Date},validationSchema:c,onSubmit:async(u,{resetForm:p,setErrors:j})=>{const b={...u};b.date=Z(u.date).format("YYYY-MM-DD"),w.post("/otherexpenses/add/",b).then(_=>{o(r.actions.addDivers(_.data)),o(r.actions.openCloseModalAdd()),o(r.actions.openCloseConfirm()),f.success(n(s.divers.toastAddSuccess)),p()}).catch(_=>{o(r.actions.openCloseConfirm()),f.error(n(s.global.toastError))})}}),a=async u=>{u.preventDefault();const p=await d.validateForm();console.log(p),Object.keys(p).length===0?o(r.actions.openCloseConfirm()):await d.submitForm()},g=()=>{d.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(H,{open:m,onClose:()=>o(r.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(B,{sx:is,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(X,{id:"modal-modal-title",variant:"h6",component:"h2",children:n(s.divers.addTitle)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(r.actions.openCloseModalAdd()),children:e.jsx(V,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:u=>a(u),children:[e.jsx(pe,{id:"outlined-basic",label:n(s.paiment.amount),variant:"outlined",onBlur:d.handleBlur,fullWidth:!0,type:"number",name:"amount",onChange:d.handleChange,value:d.values.amount,error:!!(d.touched.amount&&d.errors.amount),helperText:d.touched.amount&&d.errors.amount,style:{marginBottom:"15px"}}),e.jsxs(me,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(d.touched.type&&d.errors.type),children:[e.jsx(ue,{id:"batiment-id",children:n(s.depense.addlabel)}),e.jsx(he,{labelId:"batiment-id",id:"demo-simple-select",onBlur:d.handleBlur,fullWidth:!0,name:"type",onChange:d.handleChange,value:d.values.type,label:n(s.depense.addlabel),children:i.length>0?i.map(u=>e.jsx(K,{value:u.id,children:u.type})):e.jsx(K,{children:n(s.batiment.nothingToDisplay)})}),d.touched.type&&d.errors.type&&e.jsx(xe,{children:d.errors.type})]}),e.jsx(z,{label:n(s.entrer.date),value:d.values.date,onChange:u=>d.setFieldValue("date",u),onBlur:d.handleBlur,name:"date",sx:{width:"100%"}}),e.jsx(N,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(s.global.ajouter)})]})]})}),e.jsx(Se,{confirmed:g,cancel:()=>o(r.actions.openCloseConfirm()),isConfirm:l})]})}function ds(){const{currentData:i,isModalDelete:o}=M(c=>c.divers),n=U(),{t,i18n:m}=y(),l=()=>{w.delete(`/otherexpenses/delete/${i.id}`).then(c=>{n(r.actions.deleteDivers()),n(r.actions.openCloseModalDelete()),f.success(t(s.divers.toastDeleteSuccess))}).catch(c=>{n(r.actions.openCloseModalDelete()),f.error(t(s.global.toastError))})};return e.jsx(H,{open:o,onClose:()=>n(r.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Ce,{title:t(s.divers.deletetitle),message:t(s.divers.deletemessage),deleteFn:l,cancel:()=>n(r.actions.openCloseModalDelete())})})}function cs(){const{currentData:i,isModalDeleteProof:o}=M(c=>c.divers),n=U(),{t,i18n:m}=y(),l=()=>{w.delete(`/otherexpenses/proof/delete/${i.idFile}`).then(c=>{n(r.actions.deleteDiversProof()),n(r.actions.openCloseConfirmDeleteProof()),f.success(t(s.global.toastSuccessDeleteFile))}).catch(c=>{console.log(c),n(r.actions.openCloseConfirmDeleteProof()),f.error(t(s.global.toastError))})};return e.jsx(H,{open:o,onClose:()=>n(r.actions.openCloseConfirmDeleteProof()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Ce,{title:t(s.paiment.deleteTitleFile),message:t(s.paiment.deleteDescriptionFile),deleteFn:l,cancel:()=>n(r.actions.openCloseConfirmDeleteProof())})})}const ps=async()=>{try{const{data:i}=await w.get("/otherexpensestype/list/");return i}catch(i){throw new Error(i)}};function ms(){const{isModalAdd:i,isModalUpdate:o}=M(t=>t.divers),n=De("typeDepenseDivers",ps);return e.jsxs(B,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(Ie,{children:e.jsx(as,{})}),i&&e.jsx(ls,{typeDepense:n.data}),o&&e.jsx(rs,{typeDepense:n.data}),e.jsx(ds,{}),e.jsx(cs,{})]})}function As(){return e.jsx(e.Fragment,{children:e.jsx(ms,{})})}export{As as default};
