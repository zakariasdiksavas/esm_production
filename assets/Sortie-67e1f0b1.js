import{r as N,a2 as E,d as k,l as t,j as e,B as me,a3 as pe,bm as xe,a1 as ne,bn as d,V as Z,h as L,ab as B,ac as S,ad as T,ae as v,a as G,a6 as U,T as ee,a7 as K,ao as se,Y as F,F as I,k as J,S as ge}from"./index-5221874e.js";import{e as je,T as be,a as fe,b as X,c as b,d as ye,f as ve,g as $,G as h,u as O,S as Y,h as V,B as te,E as oe}from"./moment-95a9c38c.js";import{E as Ce,P as Be,M as Se}from"./ModalDelete-0c51dcd4.js";import{T as Te,C as le}from"./TableRowsLoader-ee514eef.js";import{A as we}from"./AlertError-c792a5f9.js";import{D as qe}from"./Delete-87b8da19.js";import{u as re,c as ie,e as H,C as de,b as De,a as R,d as Q}from"./formik.esm-288cd6c1.js";import{A as Me,a as We,F as Ie,b as Re}from"./fr-5577b27f.js";import{E as Fe}from"./ExpandMore-c9ce65e8.js";import{C as Ne}from"./CardActions-000f437c.js";import{D as ae}from"./DatePicker-97870438.js";import{C as Pe}from"./Container-85c02ec2.js";import{M as _e}from"./ModalConfirm-6544d406.js";import{D as ce}from"./DateTimePicker-dc733c30.js";import"./Tabs-8d8e92c9.js";const ke=N.memo(x=>{const y=JSON.parse(sessionStorage.getItem("user")),m=E();let{count:g=0,items:j=[],onDeselectAll:s,onDeselectOne:r,onSelectAll:M,onSelectOne:f,selected:a=[],isLoading:o,isError:q}=x;const[W,D]=N.useState(0),[C,i]=N.useState(25),{t:u,i18n:n}=k(),l=[u(t.sortie.vente),u(t.sortie.gratuit),u(t.sortie.accident),u(t.sortie.change)],A=p=>{L.put("/outbound/delivered/",{id:p}).then(w=>{m(d.actions.setDeliver(w.data.id))})},c=(p,w)=>{D(w)},P=p=>{i(parseInt(p.target.value,10)),D(0)},_=j==null?void 0:j.slice(W*C,W*C+C);return e.jsxs(me,{sx:{position:"relative"},children:[e.jsx(je,{component:pe,children:e.jsxs(be,{sx:{minWidth:700},children:[e.jsx(fe,{children:e.jsxs(X,{children:[e.jsx(b,{children:u(t.client.title)}),e.jsx(b,{children:y!=null&&y.is_eleveur?u(t.batiment.title):u(t.fournisseur.title)}),e.jsx(b,{children:u(t.magazin.title)}),e.jsx(b,{children:u(t.sortie.eggType)}),e.jsx(b,{children:u(t.entrer.quantity)}),e.jsx(b,{children:u(t.sortie.typeDeSortie)}),e.jsxs(b,{children:[u(t.entrer.prix)," ",u(t.global.mad)]}),e.jsx(b,{children:u(t.entrer.date)}),e.jsx(b,{children:u(t.entrer.temps)}),e.jsx(b,{children:u(t.sortie.status)}),e.jsx(b,{})]})}),o?e.jsx(Te,{rowsNum:10,cellNum:10}):e.jsx(ye,{children:_.length>0?_.map(p=>{let w=new Date(p.date),z={year:w.getFullYear(),month:`${w.getMonth()+1}`,day:`${w.getDate()}`};const he=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(X,{hover:!0,children:[e.jsxs(b,{children:[p.client_first_name," ",p.client_last_name]}),e.jsx(b,{children:p.eggsource_name}),e.jsx(b,{children:p.warehouse_name}),e.jsx(b,{children:p.eggclass_name}),e.jsx(b,{sx:{direction:n.language=="ar"?"rtl":"lrt"},children:p.quantity.toLocaleString("en-US").replaceAll(","," ")}),e.jsx(b,{children:l[p.type-1]}),e.jsx(b,{children:he.format(p.price).replaceAll(","," ").replace("MAD","")}),e.jsxs(b,{children:[z.day.padStart(2,0),"/",z.month.padStart(2,0),"/",z.year]}),e.jsx(b,{children:p.time.substring(0,5)}),e.jsxs(b,{children:[" ",e.jsx(xe,{onClick:()=>A(p.id),label:p.is_delivered?u(t.sortie.oui):u(t.sortie.non),color:p.is_delivered?"success":"error"})]}),e.jsxs(b,{children:[e.jsx(ne,{color:"warning",onClick:()=>{m(d.actions.setCurrentData(p)),m(d.actions.openCloseModalUpdate())},children:e.jsx(Z,{children:e.jsx(Ce,{})})}),e.jsx(ne,{color:"error",onClick:()=>{m(d.actions.setCurrentData(p)),m(d.actions.openCloseModalDelete())},children:e.jsx(Z,{children:e.jsx(qe,{})})})]})]},p.id)}):e.jsx(X,{children:e.jsx(b,{colSpan:11,sx:{textAlign:"center"},children:u(t.batiment.nothingToDisplay)})})})]})}),e.jsx(ve,{component:"div",count:g,onPageChange:c,onRowsPerPageChange:P,page:W,rowsPerPage:C,rowsPerPageOptions:[5,10,25],labelRowsPerPage:u(t.batiment.Lignes),labelDisplayedRows:({from:p,to:w,count:z})=>`${p}–${w} ${u(t.batiment.sur)} ${z}`}),q&&e.jsx(we,{})]})});function Ae({batiment:x,magazin:y,classList:m,typeList:g,clientList:j}){$.locale("fr");const{t:s,i18n:r}=k(),M=E(),f=JSON.parse(sessionStorage.getItem("user")),a=re({initialValues:{date1:null,date2:null,type:"",client:"",warehouse:"",option:"",eggsource:""},validationSchema:ie({date1:H().nullable().test("is-before-date2",s(t.global.date2Greather),function(o){const{date2:q}=this.parent;return o<=q}),date2:H().nullable().test("is-after-date1",s(t.global.date2Greather),function(o){const{date1:q}=this.parent;return o>=q})}),onSubmit:async(o,{resetForm:q,setErrors:W})=>{let D="";for(let C in o)if(o[C]!==""&&o[C]!==null){let i=new Date(o[C]),u=i.getFullYear()!==1970?`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`:o[C];D==""?D+=`?${C}=${u}`:D+=`&${C}=${u}`}if(o.date1!==null&&o.date2==null){W({date2:s(t.global.date2Required)});return}else if(o.date1==null&&o.date2!==null){W({date1:s(t.global.date1Required)});return}L.get("/outbound/list/"+D).then(C=>{M(d.actions.fetchSortie(C.data))})},onReset:()=>{L.get("/outbound/list/").then(o=>{M(d.actions.fetchSortie(o.data))})}});return N.useEffect(()=>{console.log(x)},[]),e.jsxs(Me,{defaultExpanded:!0,children:[e.jsx(We,{expandIcon:e.jsx(Fe,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(Ie,{}),s(t.global.filter)]})}),e.jsx(Re,{children:e.jsx(de,{children:e.jsx(De,{children:e.jsxs("form",{noValidate:!0,onSubmit:a.handleSubmit,onReset:a.handleReset,children:[e.jsxs(h,{container:!0,gap:2,children:[e.jsx(h,{item:!0,xs:"2",children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:f!=null&&f.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"eggsource",onChange:a.handleChange,value:a.values.eggsource,label:f!=null&&f.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom),children:x==null?void 0:x.map(o=>e.jsx(v,{value:o.id,children:o.name}))})]})}),e.jsx(h,{items:!0,xs:"2",children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:s(t.magazin.Nom)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"warehouse",onChange:a.handleChange,value:a.values.warehouse,label:s(t.batiment.Nom),children:y==null?void 0:y.map(o=>e.jsx(v,{value:o.id,children:o.name}))})]})}),e.jsx(h,{items:!0,xs:"2",children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:s(t.client.title)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"client",onChange:a.handleChange,value:a.values.client,label:"Type de payment",children:j==null?void 0:j.map(o=>e.jsxs(v,{value:o.id,children:[o.first_name," ",o.last_name]}))})]})}),e.jsx(h,{item:!0,xs:"2",children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(a.touched.option&&a.errors.option),children:[e.jsx(S,{id:"batiment-id",children:s(t.sortie.eggType)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"option",onChange:a.handleChange,value:a.values.option,label:s(t.sortie.eggType),children:m==null?void 0:m.map(o=>e.jsx(v,{value:o.id,children:o.value}))})]})}),e.jsx(h,{item:!0,xs:"2",children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:s(t.sortie.typeDeSortie)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"type",onChange:a.handleChange,value:a.values.type,label:s(t.sortie.typeDeSortie),children:g==null?void 0:g.map(o=>e.jsx(v,{value:o.id,children:o.value}))})]})}),e.jsx(h,{item:!0,xs:2,children:e.jsx(ae,{value:a.values.date1,onChange:o=>a.setFieldValue("date1",o),onBlur:a.handleBlur,label:s(t.global.date1),name:"date1",slotProps:{textField:{variant:"outlined",error:!!(a.touched.date1&&a.errors.date1),helperText:a.touched.date1&&a.errors.date1}}})}),e.jsx(h,{item:!0,xs:2,children:e.jsx(ae,{value:a.values.date2,onChange:o=>a.setFieldValue("date2",o),onBlur:a.handleBlur,label:s(t.global.date2),name:"date2",slotProps:{textField:{variant:"outlined",error:!!(a.touched.date2&&a.errors.date2),helperText:a.touched.date2&&a.errors.date2}}})}),e.jsx(h,{item:!0,xs:7,children:e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(G,{variant:"contained",type:"reset",children:s(t.global.reset)}),e.jsx(G,{type:"submit",variant:"contained",children:s(t.global.filter)})]})})]}),e.jsx(Ne,{children:e.jsx("div",{className:"flex justify-end w-full"})})]})})})})]})}function $e({batiment:x,magazin:y,classList:m,typeList:g,clientList:j}){const s=E(),{t:r,i18n:M}=k(),{sortie:f}=U(o=>o.sortie),a=O("sortie",V.getSortie);return N.useEffect(()=>{a.status=="success"&&s(d.actions.fetchSortie(a.data))},[a.status]),e.jsx(Pe,{maxWidth:"xl",children:e.jsxs(Y,{spacing:4,children:[e.jsxs(Y,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(Y,{spacing:1,children:e.jsx(ee,{variant:"h4",children:r(t.sortie.title)})}),e.jsx(Y,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(G,{startIcon:e.jsx(Z,{children:e.jsx(Be,{})}),variant:"contained",onClick:()=>s(d.actions.openCloseModalAdd()),children:r(t.global.ajouter)})})]}),e.jsxs(de,{children:[e.jsx(Ae,{batiment:x,magazin:y,classList:m,typeList:g,clientList:j}),e.jsx(ke,{items:f,isLoading:a.isLoading,isError:a.isError,count:f.length,rowsPerPage:25})]})]})})}function ue({confirmed:x}){const{currentData:y,isConfirm:m}=U(M=>M.sortie),g=E(),{t:j,i18n:s}=k(),r=()=>{x()};return e.jsx(K,{open:m,onClose:()=>g(d.actions.openCloseConfirm()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(_e,{title:j(t.global.confirmOperation),message:j(t.global.confirmMessage),confirmFn:r,cancel:()=>g(d.actions.openCloseConfirm())})})}const Ee=x=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:400,height:"auto",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,[x.breakpoints.down("md")]:{width:"95%",height:"90vh",overflow:"auto"}}),Oe=({batiment:x,magazin:y,classList:m,typeList:g,clientList:j})=>{$.locale("fr");const s=E(),{t:r,i18n:M}=k(),f=JSON.parse(sessionStorage.getItem("user")),{currentData:a,isModalUpdate:o}=U(l=>l.sortie),[q,W]=N.useState(),D=se(),C=ie({dateTime:H().required(r(t.sortie.dateTimeRequired)),eggsource:R().required(f!=null&&f.is_eleveur?r(t.sortie.batimentRequired):r(t.sortie.fournisseurRequired)),warehouse:R().required(r(t.sortie.magazinRequired)),option:R().required(r(t.sortie.optionRequired)),type:R().required(r(t.sortie.typeRequired)),client:R().required(r(t.sortie.clientRequired)),price:Q().required(r(t.sortie.prixRequired)),quantity:Q().required(r(t.sortie.quantityRequired))}),i=re({initialValues:{dateTime:"",type:"",client:"",warehouse:"",option:"",eggsource:"",price:0,quantity:0},validationSchema:C,onSubmit:async(l,{resetForm:A,setErrors:c})=>{console.log(l);let P={...l};P.date=$(q).format("YYYY-MM-DD"),P.time=$(q).format("LT").replace(" AM","").replace(" PM",""),L.put("/outbound/update/",P).then(_=>{s(d.actions.editSortie(_.data)),s(d.actions.openCloseModalUpdate()),s(d.actions.openCloseConfirm()),F.success(r(t.sortie.toastUpdateSuccess)),A()}).catch(_=>{if(s(d.actions.openCloseConfirm()),_.response.data==2){F.error(r(t.sortie.outOfStock));return}else _.response.data==1?F.error(r(t.sortie.noStockExist)):F.error(r(t.sortie.toastError))})}}),u=async l=>{l.preventDefault();const A=await i.validateForm();Object.keys(A).length===0?s(d.actions.openCloseConfirm()):await i.submitForm()},n=()=>{i.handleSubmit()};return N.useEffect(()=>{i.setValues(a),W(new Date(`${a.date}T${a.time}`)),i.setFieldValue("dateTime",new Date,!1)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(K,{open:o,onClose:()=>s(d.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(te,{sx:Ee(D),children:[e.jsxs(Y,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(ee,{id:"modal-modal-title",variant:"h6",component:"h2",children:r(t.sortie.update)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>s(d.actions.openCloseModalUpdate()),children:e.jsx(le,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:l=>u(l),children:[e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.eggsource&&i.errors.eggsource),children:[e.jsx(S,{id:"batiment-id",children:f!=null&&f.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"eggsource",onChange:i.handleChange,value:i.values.eggsource,label:f!=null&&f.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom),children:x.length>0?x.map(l=>e.jsx(v,{value:l.id,children:l.name})):e.jsx(v,{children:r(t.batiment.nothingToDisplay)})}),i.touched.eggsource&&i.errors.eggsource&&e.jsx(I,{children:i.errors.eggsource})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.warehouse&&i.errors.warehouse),children:[e.jsx(S,{id:"batiment-id",children:r(t.magazin.Nom)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"warehouse",onChange:i.handleChange,value:i.values.warehouse,label:r(t.batiment.Nom),children:y.length>0?y.map(l=>e.jsx(v,{value:l.id,children:l.name})):e.jsx(v,{children:r(t.batiment.nothingToDisplay)})}),i.touched.warehouse&&i.errors.warehouse&&e.jsx(I,{children:i.errors.warehouse})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.client&&i.errors.client),children:[e.jsx(S,{id:"batiment-id",children:r(t.client.title)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"client",onChange:i.handleChange,value:i.values.client,label:r(t.client.title),children:j.length>0?j.map(l=>e.jsxs(v,{value:l.id,children:[l.first_name," ",l.last_name]})):e.jsx(v,{children:r(t.batiment.nothingToDisplay)})}),i.touched.client&&i.errors.client&&e.jsx(I,{children:i.errors.client})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.option&&i.errors.option),children:[e.jsx(S,{id:"batiment-id",children:r(t.sortie.eggType)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"option",onChange:i.handleChange,value:i.values.option,label:r(t.sortie.eggType),children:m.map(l=>e.jsx(v,{value:l.id,children:l.value}))}),i.touched.option&&i.errors.option&&e.jsx(I,{children:i.errors.option})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.type&&i.errors.type),children:[e.jsx(S,{id:"batiment-id",children:r(t.sortie.typeDeSortie)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"type",onChange:i.handleChange,value:i.values.type,label:r(t.sortie.typeDeSortie),children:g.map(l=>e.jsx(v,{value:l.id,children:l.value}))}),i.touched.type&&i.errors.type&&e.jsx(I,{children:i.errors.type})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:r(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",onBlur:i.handleBlur,onChange:i.handleChange,value:i.values.quantity,error:!!(i.touched.quantity&&i.errors.quantity),helperText:i.touched.quantity&&i.errors.quantity,name:"quantity",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:r(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",onBlur:i.handleBlur,onChange:i.handleChange,value:i.values.price,error:!!(i.touched.price&&i.errors.price),helperText:i.touched.price&&i.errors.price,name:"price",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(ce,{id:"outlined-basic",label:r(t.entrer.temps)+" "+r(t.entrer.date),variant:"outlined",onBlur:i.handleBlur,fullWidth:!0,name:"dateTime",value:q,onChange:l=>{i.setFieldValue("dateTime",l,!0),W(l)},slotProps:{textField:{variant:"outlined",error:!!(i.touched.dateTime&&i.errors.dateTime),helperText:!!(i.touched.dateTime&&i.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}})})]}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:r(t.global.modifier)})]})]})}),e.jsx(ue,{confirmed:n})]})},Ve=Oe,Ye=x=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:600,height:"auto",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,[x.breakpoints.down("md")]:{width:"95%",height:"90vh",overflow:"auto"}}),Le=({batiment:x,magazin:y,classList:m,typeList:g,clientList:j})=>{$.locale("fr");const s=E(),{t:r,i18n:M}=k(),f=se(),a=JSON.parse(sessionStorage.getItem("user")),[o,q]=N.useState(0),{sortie:W,isModalAdd:D}=U(c=>c.sortie),[C,i]=N.useState(),u=ie({dateTime:H().required(r(t.sortie.dateTimeRequired)),eggsource:R().required(a!=null&&a.is_eleveur?r(t.sortie.batimentRequired):r(t.sortie.fournisseurRequired)),warehouse:R().required(r(t.sortie.magazinRequired)),option:R().required(r(t.sortie.optionRequired)),type:R().required(r(t.sortie.typeRequired)),client:R().required(r(t.sortie.clientRequired)),price:Q().required(r(t.sortie.prixRequired)),quantity:Q().required(r(t.sortie.quantityRequired))}),n=re({initialValues:{dateTime:"",type:"",client:"",warehouse:"",option:"",eggsource:"",price:0,quantity:0},validationSchema:u,onSubmit:async(c,{resetForm:P,setErrors:_})=>{let p={...c};p.date=$(C).format("YYYY-MM-DD"),p.time=$(C).format("LT").replace(" AM","").replace(" PM",""),L.post("/outbound/add/",p).then(w=>{s(d.actions.addSortie(w.data)),s(d.actions.openCloseModalAdd()),s(d.actions.openCloseConfirm()),F.success(r(t.sortie.toastAddSuccess)),P()}).catch(w=>{if(s(d.actions.openCloseConfirm()),s(d.actions.openCloseConfirm()),w.response.data==2){F.error(r(t.sortie.outOfStock));return}else w.response.data==1?F.error(r(t.sortie.noStockExist)):F.error(r(t.sortie.toastError))})}}),l=async c=>{c.preventDefault();const P=await n.validateForm();Object.keys(P).length===0?s(d.actions.openCloseConfirm()):await n.submitForm()},A=()=>{n.handleSubmit()};return N.useEffect(()=>{q(n.values.price*n.values.quantity)},[n.values.price,n.values.quantity]),e.jsxs(e.Fragment,{children:[e.jsx(K,{open:D,onClose:()=>s(d.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(te,{sx:Ye(f),children:[e.jsxs(Y,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(ee,{id:"modal-modal-title",variant:"h6",component:"h2",children:r(t.sortie.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>s(d.actions.openCloseModalAdd()),children:e.jsx(le,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:c=>l(c),children:[e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.eggsource&&n.errors.eggsource),children:[e.jsx(S,{id:"batiment-id",children:a!=null&&a.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"eggsource",onChange:n.handleChange,value:n.values.eggsource,label:a!=null&&a.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom),children:x.length>0?x.map(c=>e.jsx(v,{value:c.id,children:c.name})):e.jsx(v,{children:r(t.batiment.nothingToDisplay)})}),n.touched.eggsource&&n.errors.eggsource&&e.jsx(I,{children:n.errors.eggsource})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.warehouse&&n.errors.warehouse),children:[e.jsx(S,{id:"batiment-id",children:r(t.magazin.Nom)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"warehouse",onChange:n.handleChange,value:n.values.warehouse,label:r(t.batiment.Nom),children:y.length>0?y.map(c=>e.jsx(v,{value:c.id,children:c.name})):e.jsx(v,{children:r(t.batiment.nothingToDisplay)})}),n.touched.warehouse&&n.errors.warehouse&&e.jsx(I,{children:n.errors.warehouse})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.client&&n.errors.client),children:[e.jsx(S,{id:"batiment-id",children:r(t.client.title)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"client",onChange:n.handleChange,value:n.values.client,label:r(t.client.title),children:j.length>0?j.map(c=>e.jsxs(v,{value:c.id,children:[c.first_name," ",c.last_name]})):e.jsx(v,{children:r(t.batiment.nothingToDisplay)})}),n.touched.client&&n.errors.client&&e.jsx(I,{children:n.errors.client})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.option&&n.errors.option),children:[e.jsx(S,{id:"batiment-id",children:r(t.sortie.eggType)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"option",onChange:n.handleChange,value:n.values.option,label:r(t.sortie.eggType),children:m.map(c=>e.jsx(v,{value:c.id,children:c.value}))}),n.touched.option&&n.errors.option&&e.jsx(I,{children:n.errors.option})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(B,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.type&&n.errors.type),children:[e.jsx(S,{id:"batiment-id",children:r(t.sortie.typeDeSortie)}),e.jsx(T,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"type",onChange:n.handleChange,value:n.values.type,label:r(t.sortie.typeDeSortie),children:g.map(c=>e.jsx(v,{value:c.id,children:c.value}))}),n.touched.type&&n.errors.type&&e.jsx(I,{children:n.errors.type})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:r(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.quantity,error:!!(n.touched.quantity&&n.errors.quantity),helperText:n.touched.quantity&&n.errors.quantity,name:"quantity",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:r(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.price,error:!!(n.touched.price&&n.errors.price),helperText:n.touched.price&&n.errors.price,name:"price",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(ce,{id:"outlined-basic",label:r(t.entrer.temps)+" "+r(t.entrer.date),variant:"outlined",onBlur:n.handleBlur,fullWidth:!0,name:"dateTime",value:C,onChange:c=>{n.setFieldValue("dateTime",c,!0),i(c)},slotProps:{textField:{variant:"outlined",error:!!(n.touched.dateTime&&n.errors.dateTime),helperText:!!(n.touched.dateTime&&n.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}})}),e.jsx(h,{xs:12,children:e.jsxs("p",{children:[e.jsx("strong",{children:"Montant a payer: "}),o]})})]}),e.jsx(G,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:r(t.global.ajouter)})]})]})}),e.jsx(ue,{confirmed:A})]})},Ue=Le;function ze(){const{currentData:x,isModalDelete:y}=U(r=>r.sortie),m=E(),{t:g,i18n:j}=k();JSON.parse(sessionStorage.getItem("user"));const s=()=>{L.delete(`/outbound/delete/${x.id}`).then(r=>{m(d.actions.deleteSortie()),m(d.actions.openCloseModalDelete()),F.success(g(t.sortie.toastDeleteSuccess))}).catch(r=>{m(d.actions.openCloseModalDelete()),F.error(g(t.sortie.toastError))})};return e.jsx(K,{open:y,onClose:()=>m(d.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Se,{title:g(t.sortie.deleteTitle),message:g(t.sortie.deleteDescription),deleteFn:s,cancel:()=>m(d.actions.openCloseModalDelete())})})}function Ge(){const{isModalAdd:x,isModalUpdate:y}=U(M=>M.sortie),m=O("batimens",V.getBatimentSelect),g=O("magazins",V.getWarehouseSelect),j=O("classLists",V.getClass),s=O("typeList",V.typeLists),r=O("clientLists",V.getClientSelect);return e.jsxs(te,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(oe,{children:e.jsx($e,{batiment:m.data,magazin:g.data,classList:j.data,typeList:s.data,clientList:r.data})}),x&&e.jsx(Ue,{batiment:m.data,magazin:g.data,classList:j.data,typeList:s.data,clientList:r.data}),y&&e.jsx(Ve,{batiment:m.data,magazin:g.data,classList:j.data,typeList:s.data,clientList:r.data}),e.jsx(ze,{})]})}function dt(){const{t:x,i18n:y}=k();return e.jsxs(e.Fragment,{children:[e.jsx(ge,{title:`ESM | ${x(t.nav.sortie)}`}),e.jsx(oe,{children:e.jsx(Ge,{})})]})}export{dt as default};