import{r as _,a2 as U,d as E,l as t,j as e,B as ne,a3 as me,bg as xe,a1 as ae,bh as c,V as X,h as O,ab as C,ac as S,ad as B,ae as b,a as L,a6 as z,T as Z,at as le,Y as N,a7 as ee,F as W,k as J,S as pe}from"./index-5da57776.js";import{e as ge,T as je,a as be,b as K,c as p,d as fe,P as ye,f as A,G as h,u as $,S as Y,h as V,B as te,E as oe}from"./moment-60dfa4f6.js";import{E as ve,P as Ce,M as Se}from"./ModalDelete-08369dbd.js";import{T as Be,C as de}from"./TableRowsLoader-2200d224.js";import{A as Te}from"./AlertError-dc33b758.js";import{D as we}from"./Delete-23e9a74f.js";import{u as re,c as ie,e as H,C as ce,b as qe,a as I,d as Q}from"./formik.esm-ec72eb0c.js";import{A as De,a as Me,F as We,b as Ie}from"./fr-f51f55a1.js";import{E as _e}from"./ExpandMore-5c6293d0.js";import{C as Ne}from"./CardActions-04248a3c.js";import{D as se}from"./DatePicker-598a5ad6.js";import{C as Fe}from"./Container-45fc29ac.js";import{M as ue}from"./ModalConfirm-f38340a1.js";import{D as he}from"./DateTimePicker-a3305734.js";import"./Tabs-d5cb80ae.js";const Re=_.memo(x=>{const f=JSON.parse(sessionStorage.getItem("user")),m=U();let{count:y=0,items:j=[],onDeselectAll:s,onDeselectOne:i,onSelectAll:F,onSelectOne:g,selected:a=[],isLoading:l,isError:M}=x;const[q,w]=_.useState(1),[v,D]=_.useState(25),{t:r,i18n:G}=E(),n=[r(t.sortie.vente),r(t.sortie.gratuit),r(t.sortie.accident),r(t.sortie.change)],d=u=>{O.put("/outbound/delivered/",{id:u}).then(T=>{m(c.actions.setDeliver(T.data.id))})},R=(u,T)=>{w(T)},o=j==null?void 0:j.slice((q-1)*v,q*v);return _.useEffect(()=>{w(1)},[j]),e.jsxs(ne,{sx:{position:"relative"},children:[e.jsx(ge,{component:me,children:e.jsxs(je,{sx:{minWidth:700},children:[e.jsx(be,{children:e.jsxs(K,{children:[e.jsx(p,{children:r(t.client.title)}),e.jsx(p,{children:f!=null&&f.is_eleveur?r(t.batiment.title):r(t.fournisseur.title)}),e.jsx(p,{children:r(t.magazin.title)}),e.jsx(p,{children:r(t.sortie.eggType)}),e.jsx(p,{children:r(t.entrer.quantity)}),e.jsx(p,{children:r(t.sortie.typeDeSortie)}),e.jsxs(p,{children:[r(t.entrer.prix)," ",r(t.global.mad)]}),e.jsx(p,{children:r(t.entrer.date)}),e.jsx(p,{children:r(t.entrer.temps)}),e.jsx(p,{children:r(t.sortie.status)}),e.jsx(p,{})]})}),l?e.jsx(Be,{rowsNum:10,cellNum:10}):e.jsx(fe,{children:(o==null?void 0:o.length)>0?o==null?void 0:o.map(u=>{let T=new Date(u.date),k={year:T.getFullYear(),month:`${T.getMonth()+1}`,day:`${T.getDate()}`};const P=new Intl.NumberFormat("en-US",{style:"currency",currency:"MAD"});return e.jsxs(K,{hover:!0,children:[e.jsxs(p,{children:[u.client_first_name," ",u.client_last_name]}),e.jsxs(p,{children:[u.eggsource_name," ",u.eggsource_lastname]}),e.jsx(p,{children:u.warehouse_name}),e.jsx(p,{children:u.eggclass_name}),e.jsx(p,{sx:{direction:"initial",whiteSpace:"nowrap"},children:u.quantity.toLocaleString("en-US").replaceAll(","," ")}),e.jsx(p,{children:n[u.type-1]}),e.jsx(p,{children:P.format(u.price).replaceAll(","," ").replace("MAD","")}),e.jsxs(p,{children:[k.day.padStart(2,0),"/",k.month.padStart(2,0),"/",k.year]}),e.jsx(p,{children:u.time.substring(0,5)}),e.jsxs(p,{children:[" ",e.jsx(xe,{onClick:()=>d(u.id),label:u.is_delivered?r(t.sortie.oui):r(t.sortie.non),color:u.is_delivered?"success":"error"})]}),e.jsxs(p,{children:[e.jsx(ae,{color:"warning",onClick:()=>{m(c.actions.setCurrentData(u)),m(c.actions.openCloseModalUpdate())},children:e.jsx(X,{children:e.jsx(ve,{})})}),e.jsx(ae,{color:"error",onClick:()=>{m(c.actions.setCurrentData(u)),m(c.actions.openCloseModalDelete())},children:e.jsx(X,{children:e.jsx(we,{})})})]})]},u.id)}):e.jsx(K,{children:e.jsx(p,{colSpan:11,sx:{textAlign:"center"},children:r(t.batiment.nothingToDisplay)})})})]})}),e.jsx(ne,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(ye,{count:Math.ceil(y/v),defaultPage:q,onChange:R,color:"primary",size:"large"})}),M&&e.jsx(Te,{})]})});function ke({batiment:x,magazin:f,classList:m,typeList:y,clientList:j}){A.locale("fr");const{t:s,i18n:i}=E(),F=U(),g=JSON.parse(sessionStorage.getItem("user")),a=re({initialValues:{date1:null,date2:null,type:"",client:"",warehouse:"",option:"",eggsource:""},validationSchema:ie({date1:H().nullable().test("is-before-date2",s(t.global.date2Greather),function(l){const{date2:M}=this.parent;return l<=M}),date2:H().nullable().test("is-after-date1",s(t.global.date2Greather),function(l){const{date1:M}=this.parent;return l>=M})}),onSubmit:async(l,{resetForm:M,setErrors:q})=>{let w="";for(let v in l)if(l[v]!==""&&l[v]!==null){let D=new Date(l[v]),r=D.getFullYear()!==1970?`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}-${String(D.getDate()).padStart(2,"0")}`:l[v];w==""?w+=`?${v}=${r}`:w+=`&${v}=${r}`}if(l.date1!==null&&l.date2==null){q({date2:s(t.global.date2Required)});return}else if(l.date1==null&&l.date2!==null){q({date1:s(t.global.date1Required)});return}O.get("/outbound/list/"+w).then(v=>{F(c.actions.fetchSortie(v.data))})},onReset:()=>{O.get("/outbound/list/").then(l=>{F(c.actions.fetchSortie(l.data))})}});return e.jsxs(De,{defaultExpanded:!0,children:[e.jsx(Me,{expandIcon:e.jsx(_e,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(We,{}),s(t.global.filter)]})}),e.jsx(Ie,{children:e.jsx(ce,{children:e.jsx(qe,{children:e.jsxs("form",{noValidate:!0,onSubmit:a.handleSubmit,onReset:a.handleReset,children:[e.jsxs(h,{container:!0,gap:2,children:[e.jsx(h,{item:!0,xs:12,sm:5,md:2,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:g!=null&&g.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"eggsource",onChange:a.handleChange,value:a.values.eggsource,label:g!=null&&g.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom),children:x==null?void 0:x.map(l=>e.jsxs(b,{value:l.id,children:[l.name," ",l.last_name]}))})]})}),e.jsx(h,{items:!0,xs:12,sm:5,md:2,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:s(t.magazin.Nom)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"warehouse",onChange:a.handleChange,value:a.values.warehouse,label:s(t.batiment.Nom),children:f==null?void 0:f.map(l=>e.jsx(b,{value:l.id,children:l.name}))})]})}),e.jsx(h,{items:!0,xs:12,sm:5,md:2,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:s(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"client",onChange:a.handleChange,value:a.values.client,label:"Type de payment",children:j==null?void 0:j.map(l=>e.jsxs(b,{value:l.id,children:[l.first_name," ",l.last_name]}))})]})}),e.jsx(h,{item:!0,xs:12,sm:5,md:2,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(a.touched.option&&a.errors.option),children:[e.jsx(S,{id:"batiment-id",children:s(t.sortie.eggType)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"option",onChange:a.handleChange,value:a.values.option,label:s(t.sortie.eggType),children:m==null?void 0:m.map(l=>e.jsx(b,{value:l.id,children:l.value}))})]})}),e.jsx(h,{item:!0,xs:12,sm:5,md:2,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,children:[e.jsx(S,{id:"batiment-id",children:s(t.sortie.typeDeSortie)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:a.handleBlur,fullWidth:!0,name:"type",onChange:a.handleChange,value:a.values.type,label:s(t.sortie.typeDeSortie),children:y==null?void 0:y.map(l=>e.jsx(b,{value:l.id,children:l.value}))})]})}),e.jsx(h,{item:!0,xs:12,sm:5,md:2,children:e.jsx(se,{value:a.values.date1,onChange:l=>a.setFieldValue("date1",l),onBlur:a.handleBlur,label:s(t.global.date1),name:"date1",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(a.touched.date1&&a.errors.date1),helperText:a.touched.date1&&a.errors.date1}}})}),e.jsx(h,{item:!0,xs:12,sm:5,md:2,children:e.jsx(se,{value:a.values.date2,onChange:l=>a.setFieldValue("date2",l),onBlur:a.handleBlur,label:s(t.global.date2),name:"date2",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(a.touched.date2&&a.errors.date2),helperText:a.touched.date2&&a.errors.date2}}})}),e.jsx(h,{item:!0,xs:7,children:e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(L,{variant:"contained",type:"reset",children:s(t.global.reset)}),e.jsx(L,{type:"submit",variant:"contained",children:s(t.global.filter)})]})})]}),e.jsx(Ne,{children:e.jsx("div",{className:"flex justify-end w-full"})})]})})})})]})}function Ae({batiment:x,magazin:f,classList:m,typeList:y,clientList:j}){const s=U(),{t:i,i18n:F}=E(),{sortie:g}=z(l=>l.sortie),a=$("sortie",V.getSortie);return _.useEffect(()=>{a.status=="success"&&s(c.actions.fetchSortie(a.data))},[a.status]),e.jsx(Fe,{maxWidth:"xl",children:e.jsxs(Y,{spacing:4,children:[e.jsxs(Y,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(Y,{spacing:1,children:e.jsx(Z,{variant:"h4",children:i(t.sortie.title)})}),e.jsx(Y,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(L,{startIcon:e.jsx(X,{children:e.jsx(Ce,{})}),variant:"contained",onClick:()=>s(c.actions.openCloseModalAdd()),children:i(t.global.ajouter)})})]}),e.jsxs(ce,{children:[e.jsx(ke,{batiment:x,magazin:f,classList:m,typeList:y,clientList:j}),e.jsx(Re,{items:g,isLoading:a.isLoading,isError:a.isError,count:g.length,rowsPerPage:25})]})]})})}const Ee=x=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:400,height:"auto",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,[x.breakpoints.down("md")]:{width:"95%",height:"90vh",overflow:"auto"}}),Pe=({batiment:x,magazin:f,classList:m,typeList:y,clientList:j})=>{A.locale("fr");const s=U(),{t:i,i18n:F}=E(),g=JSON.parse(sessionStorage.getItem("user")),{currentData:a,isModalUpdate:l,isConfirm:M}=z(d=>d.sortie),[q,w]=_.useState(),v=le(),D=ie({dateTime:H().required(i(t.sortie.dateTimeRequired)),eggsource:I().required(g!=null&&g.is_eleveur?i(t.sortie.batimentRequired):i(t.sortie.fournisseurRequired)),warehouse:I().required(i(t.sortie.magazinRequired)),option:I().required(i(t.sortie.optionRequired)),type:I().required(i(t.sortie.typeRequired)),client:I().required(i(t.sortie.clientRequired)),price:Q().required(i(t.sortie.prixRequired)),quantity:Q().required(i(t.sortie.quantityRequired))}),r=re({initialValues:{dateTime:"",type:"",client:"",warehouse:"",option:"",eggsource:"",price:0,quantity:0},validationSchema:D,onSubmit:async(d,{resetForm:R,setErrors:o})=>{console.log(d);let u={...d};u.date=A(q).format("YYYY-MM-DD"),u.time=A(q).format("LT").replace(" AM","").replace(" PM",""),O.put("/outbound/update/",u).then(T=>{s(c.actions.editSortie(T.data)),s(c.actions.openCloseModalUpdate()),s(c.actions.openCloseConfirm()),N.success(i(t.sortie.toastUpdateSuccess)),R()}).catch(T=>{if(s(c.actions.openCloseConfirm()),T.response.data==2){N.error(i(t.sortie.outOfStock));return}else T.response.data==1?N.error(i(t.sortie.noStockExist)):N.error(i(t.sortie.toastError))})}}),G=async d=>{d.preventDefault();const R=await r.validateForm();Object.keys(R).length===0?s(c.actions.openCloseConfirm()):await r.submitForm()},n=()=>{r.handleSubmit()};return _.useEffect(()=>{r.setValues(a),w(new Date(`${a.date}T${a.time}`)),r.setFieldValue("dateTime",new Date,!1)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(ee,{open:l,onClose:()=>s(c.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(te,{sx:Ee(v),children:[e.jsxs(Y,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:i(t.sortie.update)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>s(c.actions.openCloseModalUpdate()),children:e.jsx(de,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:d=>G(d),children:[e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.eggsource&&r.errors.eggsource),children:[e.jsx(S,{id:"batiment-id",children:g!=null&&g.is_eleveur?i(t.batiment.Nom):i(t.fournisseur.Nom)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"eggsource",onChange:r.handleChange,value:r.values.eggsource,label:g!=null&&g.is_eleveur?i(t.batiment.Nom):i(t.fournisseur.Nom),children:x.length>0?x.map(d=>e.jsxs(b,{value:d.id,children:[d.name," ",d.last_name]})):e.jsx(b,{children:i(t.batiment.nothingToDisplay)})}),r.touched.eggsource&&r.errors.eggsource&&e.jsx(W,{children:r.errors.eggsource})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.warehouse&&r.errors.warehouse),children:[e.jsx(S,{id:"batiment-id",children:i(t.magazin.Nom)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"warehouse",onChange:r.handleChange,value:r.values.warehouse,label:i(t.batiment.Nom),children:f.length>0?f.map(d=>e.jsx(b,{value:d.id,children:d.name})):e.jsx(b,{children:i(t.batiment.nothingToDisplay)})}),r.touched.warehouse&&r.errors.warehouse&&e.jsx(W,{children:r.errors.warehouse})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.client&&r.errors.client),children:[e.jsx(S,{id:"batiment-id",children:i(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"client",onChange:r.handleChange,value:r.values.client,label:i(t.client.title),children:j.length>0?j.map(d=>e.jsxs(b,{value:d.id,children:[d.first_name," ",d.last_name]})):e.jsx(b,{children:i(t.batiment.nothingToDisplay)})}),r.touched.client&&r.errors.client&&e.jsx(W,{children:r.errors.client})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.option&&r.errors.option),children:[e.jsx(S,{id:"batiment-id",children:i(t.sortie.eggType)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"option",onChange:r.handleChange,value:r.values.option,label:i(t.sortie.eggType),children:m.map(d=>e.jsx(b,{value:d.id,children:d.value}))}),r.touched.option&&r.errors.option&&e.jsx(W,{children:r.errors.option})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.type&&r.errors.type),children:[e.jsx(S,{id:"batiment-id",children:i(t.sortie.typeDeSortie)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"type",onChange:r.handleChange,value:r.values.type,label:i(t.sortie.typeDeSortie),children:y.map(d=>e.jsx(b,{value:d.id,children:d.value}))}),r.touched.type&&r.errors.type&&e.jsx(W,{children:r.errors.type})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:i(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.quantity,error:!!(r.touched.quantity&&r.errors.quantity),helperText:r.touched.quantity&&r.errors.quantity,name:"quantity",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:i(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.price,error:!!(r.touched.price&&r.errors.price),helperText:r.touched.price&&r.errors.price,name:"price",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(he,{id:"outlined-basic",label:i(t.entrer.temps)+" "+i(t.entrer.date),variant:"outlined",onBlur:r.handleBlur,fullWidth:!0,name:"dateTime",value:q,onChange:d=>{r.setFieldValue("dateTime",d,!0),w(d)},slotProps:{textField:{variant:"outlined",error:!!(r.touched.dateTime&&r.errors.dateTime),helperText:!!(r.touched.dateTime&&r.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}})})]}),e.jsx(L,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:i(t.global.modifier)})]})]})}),e.jsx(ue,{confirmed:n,cancel:()=>s(c.actions.openCloseConfirm()),isConfirm:M})]})},$e=Pe,Ve=x=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:600,height:"auto",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,[x.breakpoints.down("md")]:{width:"95%",height:"90vh",overflow:"auto"}}),Ye=({batiment:x,magazin:f,classList:m,typeList:y,clientList:j})=>{A.locale("fr");const s=U(),{t:i,i18n:F}=E(),g=le(),a=JSON.parse(sessionStorage.getItem("user")),[l,M]=_.useState(0),{sortie:q,isModalAdd:w,isConfirm:v}=z(o=>o.sortie),[D,r]=_.useState(),G=ie({dateTime:H().required(i(t.sortie.dateTimeRequired)),eggsource:I().required(a!=null&&a.is_eleveur?i(t.sortie.batimentRequired):i(t.sortie.fournisseurRequired)),warehouse:I().required(i(t.sortie.magazinRequired)),option:I().required(i(t.sortie.optionRequired)),type:I().required(i(t.sortie.typeRequired)),client:I().required(i(t.sortie.clientRequired)),price:Q().required(i(t.sortie.prixRequired)),quantity:Q().required(i(t.sortie.quantityRequired))}),n=re({initialValues:{dateTime:"",type:"",client:"",warehouse:"",option:"",eggsource:"",price:0,quantity:0},validationSchema:G,onSubmit:async(o,{resetForm:u,setErrors:T})=>{let k={...o};k.date=A(D).format("YYYY-MM-DD"),k.time=A(D).format("LT").replace(" AM","").replace(" PM",""),O.post("/outbound/add/",k).then(P=>{s(c.actions.addSortie(P.data)),s(c.actions.openCloseModalAdd()),s(c.actions.openCloseConfirm()),N.success(i(t.sortie.toastAddSuccess)),u()}).catch(P=>{if(s(c.actions.openCloseConfirm()),P.response.data==2){N.error(i(t.sortie.outOfStock));return}else P.response.data==1?N.error(i(t.sortie.noStockExist)):N.error(i(t.sortie.toastError))})}}),d=async o=>{o.preventDefault();const u=await n.validateForm();Object.keys(u).length===0?s(c.actions.openCloseConfirm()):await n.submitForm()},R=()=>{n.handleSubmit()};return _.useEffect(()=>{M(n.values.price*n.values.quantity)},[n.values.price,n.values.quantity]),e.jsxs(e.Fragment,{children:[e.jsx(ee,{open:w,onClose:()=>s(c.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(te,{sx:Ve(g),children:[e.jsxs(Y,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:i(t.sortie.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>s(c.actions.openCloseModalAdd()),children:e.jsx(de,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:o=>d(o),children:[e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.eggsource&&n.errors.eggsource),children:[e.jsx(S,{id:"batiment-id",children:a!=null&&a.is_eleveur?i(t.batiment.Nom):i(t.fournisseur.Nom)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"eggsource",onChange:n.handleChange,value:n.values.eggsource,label:a!=null&&a.is_eleveur?i(t.batiment.Nom):i(t.fournisseur.Nom),children:x.length>0?x.map(o=>e.jsxs(b,{value:o.id,children:[o.name," ",o.last_name]})):e.jsx(b,{children:i(t.batiment.nothingToDisplay)})}),n.touched.eggsource&&n.errors.eggsource&&e.jsx(W,{children:n.errors.eggsource})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.warehouse&&n.errors.warehouse),children:[e.jsx(S,{id:"batiment-id",children:i(t.magazin.Nom)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"warehouse",onChange:n.handleChange,value:n.values.warehouse,label:i(t.batiment.Nom),children:f.length>0?f.map(o=>e.jsx(b,{value:o.id,children:o.name})):e.jsx(b,{children:i(t.batiment.nothingToDisplay)})}),n.touched.warehouse&&n.errors.warehouse&&e.jsx(W,{children:n.errors.warehouse})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.client&&n.errors.client),children:[e.jsx(S,{id:"batiment-id",children:i(t.client.title)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"client",onChange:n.handleChange,value:n.values.client,label:i(t.client.title),children:j.length>0?j.map(o=>e.jsxs(b,{value:o.id,children:[o.first_name," ",o.last_name]})):e.jsx(b,{children:i(t.batiment.nothingToDisplay)})}),n.touched.client&&n.errors.client&&e.jsx(W,{children:n.errors.client})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.option&&n.errors.option),children:[e.jsx(S,{id:"batiment-id",children:i(t.sortie.eggType)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"option",onChange:n.handleChange,value:n.values.option,label:i(t.sortie.eggType),children:m.map(o=>e.jsx(b,{value:o.id,children:o.value}))}),n.touched.option&&n.errors.option&&e.jsx(W,{children:n.errors.option})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsxs(C,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.type&&n.errors.type),children:[e.jsx(S,{id:"batiment-id",children:i(t.sortie.typeDeSortie)}),e.jsx(B,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"type",onChange:n.handleChange,value:n.values.type,label:i(t.sortie.typeDeSortie),children:y.map(o=>e.jsx(b,{value:o.id,children:o.value}))}),n.touched.type&&n.errors.type&&e.jsx(W,{children:n.errors.type})]})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:i(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.quantity,error:!!(n.touched.quantity&&n.errors.quantity),helperText:n.touched.quantity&&n.errors.quantity,name:"quantity",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(J,{id:"outlined-basic",label:i(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.price,error:!!(n.touched.price&&n.errors.price),helperText:n.touched.price&&n.errors.price,name:"price",style:{marginBottom:"15px"}})}),e.jsx(h,{item:!0,xs:12,md:6,children:e.jsx(he,{id:"outlined-basic",label:i(t.entrer.temps)+" "+i(t.entrer.date),variant:"outlined",onBlur:n.handleBlur,fullWidth:!0,name:"dateTime",value:D,onChange:o=>{n.setFieldValue("dateTime",o,!0),r(o)},slotProps:{textField:{variant:"outlined",error:!!(n.touched.dateTime&&n.errors.dateTime),helperText:!!(n.touched.dateTime&&n.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}})}),e.jsx(h,{xs:12,children:e.jsxs("p",{children:[e.jsx("strong",{children:"Montant a payer: "}),l]})})]}),e.jsx(L,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:i(t.global.ajouter)})]})]})}),e.jsx(ue,{confirmed:R,cancel:()=>s(c.actions.openCloseConfirm()),isConfirm:v})]})},Oe=Ye;function Ue(){const{currentData:x,isModalDelete:f}=z(i=>i.sortie),m=U(),{t:y,i18n:j}=E();JSON.parse(sessionStorage.getItem("user"));const s=()=>{O.delete(`/outbound/delete/${x.id}`).then(i=>{m(c.actions.deleteSortie()),m(c.actions.openCloseModalDelete()),N.success(y(t.sortie.toastDeleteSuccess))}).catch(i=>{m(c.actions.openCloseModalDelete()),N.error(y(t.sortie.toastError))})};return e.jsx(ee,{open:f,onClose:()=>m(c.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Se,{title:y(t.sortie.deleteTitle),message:y(t.sortie.deleteDescription),deleteFn:s,cancel:()=>m(c.actions.openCloseModalDelete())})})}function Le(){const{isModalAdd:x,isModalUpdate:f}=z(F=>F.sortie),m=$("batimens",V.getBatimentSelect),y=$("magazins",V.getWarehouseSelect),j=$("classLists",V.getClass),s=$("typeList",V.typeLists),i=$("clientLists",V.getClientSelect);return e.jsxs(te,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(oe,{children:e.jsx(Ae,{batiment:m.data,magazin:y.data,classList:j.data,typeList:s.data,clientList:i.data})}),x&&e.jsx(Oe,{batiment:m.data,magazin:y.data,classList:j.data,typeList:s.data,clientList:i.data}),f&&e.jsx($e,{batiment:m.data,magazin:y.data,classList:j.data,typeList:s.data,clientList:i.data}),e.jsx(Ue,{})]})}function lt(){const{t:x,i18n:f}=E();return e.jsxs(e.Fragment,{children:[e.jsx(pe,{title:`ESM | ${x(t.nav.sortie)}`}),e.jsx(oe,{children:e.jsx(Le,{})})]})}export{lt as default};
