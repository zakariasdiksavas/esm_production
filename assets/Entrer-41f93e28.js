import{r as D,at as Se,a2 as O,d as I,j as e,B as me,a3 as Be,l as t,a1 as R,V as X,al as Ne,bn as d,h as P,ab as J,ac as G,ad as H,ae as $,a as F,a6 as V,T as K,a7 as Z,F as le,Y as A,an as Te,ao as _e,U as oe,bo as he,k as Y,S as ke}from"./index-6dfaf798.js";import{e as xe,T as pe,a as je,b as z,c as b,d as ge,P as Me,f as Ee,G as S,u as re,S as M,h as ie,B as ee,E as ye}from"./moment-b22360b6.js";import{E as fe,P as qe,M as Fe}from"./ModalDelete-26a071ca.js";import{T as Ae,C as te}from"./TableRowsLoader-e8443f2b.js";import{A as Ie}from"./AlertError-202fc79f.js";import{K as We,a as $e,A as Oe,T as Pe}from"./KeyboardArrowUp-fbf656ad.js";import{D as Ve}from"./DeleteOutlineOutlined-c33c7e3c.js";import{A as Ue}from"./Add-5aa9af27.js";import{u as ae,c as ce,e as be,C as Ce,b as ze,d as de}from"./formik.esm-45b81460.js";import{A as Re,a as Ye,F as Le,b as Je,m as L}from"./fr-dfeccf7c.js";import{E as Ge}from"./ExpandMore-9a47559a.js";import{D as ve}from"./DatePicker-c3bd6d5c.js";import{C as He}from"./Container-2497af14.js";import{M as De}from"./ModalConfirm-0866ad57.js";import{D as we}from"./DateTimePicker-12de52f4.js";import"./Tabs-2c1cc1bf.js";const Ke=D.memo(o=>{const l=Se(),a=O();let{count:r=0,items:m=[],onDeselectAll:h,onDeselectOne:i,onSelectAll:n,onSelectOne:j,selected:f=[],isLoading:x,isError:C}=o;const[s,_]=D.useState(1),[E,u]=D.useState(25),y=JSON.parse(sessionStorage.getItem("user")),{t:B,i18n:q}=I(),[k,ue]=D.useState({}),W=g=>{ue(T=>({...T,[g]:!T[g]}))},Q=(g,T)=>{const c=m.filter(N=>N.id==g)[0];switch(a(d.actions.setCurrentData(c)),T){case"update":a(d.actions.openCloseModalUpdate());break;case"delete":a(d.actions.openCloseModalDelete());break;case"addDetails":a(d.actions.openCloseModalAddDetails());break}},p=(g,T)=>{_(T)},ne=m==null?void 0:m.slice((s-1)*E,s*E);return D.useEffect(()=>{_(1)},[m]),e.jsxs(me,{sx:{position:"relative"},children:[e.jsx(xe,{component:Be,children:e.jsxs(pe,{sx:{minWidth:700,"& .MuiTableCell-body":{padding:"2px 18px"}},size:"small","aria-label":"a dense table",children:[e.jsx(je,{children:e.jsxs(z,{children:[e.jsx(b,{align:"left"}),e.jsx(b,{align:"left",children:y!=null&&y.is_eleveur?B(t.batiment.Nom):B(t.fournisseur.Nom)}),e.jsx(b,{align:"left",children:B(t.magazin.Nom)}),e.jsx(b,{align:"left",children:B(t.entrer.date)}),e.jsx(b,{align:"left",children:B(t.entrer.temps)}),e.jsx(b,{align:"left"})]})}),x?e.jsx(Ae,{rowsNum:10}):e.jsx(ge,{children:ne.length>0?ne.map((g,T)=>{const c=k[g.id]||!1;let N=new Date(g.date),w={year:N.getFullYear(),month:`${N.getMonth()+1}`,day:`${N.getDate()}`};return e.jsxs(e.Fragment,{children:[e.jsxs(z,{hover:!1,sx:{backgroundColor:T%2!==0?c?l.palette.mode=="dark"?l.palette.primary.dark:l.palette.primary.light:l.palette.mode==="dark"?l.palette.grey[900]:l.palette.grey[100]:c?l.palette.mode=="dark"?l.palette.primary.dark:l.palette.primary.light:"transparent"},children:[e.jsx(b,{children:g.inbound_details.length!==0&&e.jsx(R,{"aria-label":"expand row",size:"small",onClick:()=>W(g.id),children:c?e.jsx(We,{}):e.jsx($e,{})})}),e.jsxs(b,{align:"left",children:[g.eggsource_name," ",g.eggsource_lastname]}),e.jsx(b,{align:"left",children:g.warehouse_name}),e.jsxs(b,{align:"left",children:[w.day.padStart(2,0),"/",w.month.padStart(2,0),"/",w.year]}),e.jsx(b,{align:"left",children:g.time.substring(0,5)}),e.jsxs(b,{children:[e.jsx(R,{color:"warning",onClick:()=>Q(g.id,"update"),children:e.jsx(X,{children:e.jsx(fe,{})})}),e.jsx(R,{color:"error",onClick:()=>Q(g.id,"delete"),children:e.jsx(X,{children:e.jsx(Ve,{})})}),g.inbound_details.length==0&&e.jsx(R,{color:"success",onClick:()=>Q(g.id,"addDetails"),children:e.jsx(X,{children:e.jsx(Ue,{})})})]})]},g.id),e.jsx(z,{children:e.jsx(b,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e.jsx(Ne,{in:c,timeout:"auto",unmountOnExit:!0,children:e.jsx(xe,{children:e.jsxs(pe,{children:[e.jsx(je,{children:e.jsxs(z,{children:[e.jsxs(b,{children:[B(t.sortie.eggType)," "]}),e.jsx(b,{children:B(t.entrer.quantity)}),!(y!=null&&y.is_eleveur)&&e.jsxs(b,{children:[B(t.entrer.prix)," ",B(t.global.mad)]}),e.jsx(b,{})]})}),e.jsx(ge,{children:g.inbound_details.map((v,se)=>e.jsxs(z,{sx:{backgroundColor:se%2!==0?l.palette.mode==="dark"?l.palette.grey[900]:l.palette.grey[100]:"transparent","&:hover":{backgroundColor:l.palette.mode==="dark"?l.palette.grey[800]:l.palette.grey[200]}},children:[e.jsx(b,{children:v.egg_class}),e.jsx(b,{children:v.quantity}),!(y!=null&&y.is_eleveur)&&e.jsx(b,{children:v.price}),e.jsxs(b,{children:[" ",e.jsx(R,{color:"info",onClick:()=>a(d.actions.setCurrentDetailData({id:g.id,id_details:v.id})),children:e.jsx(X,{children:e.jsx(fe,{})})})]})]},se))})]})})})})})]})}):e.jsx(z,{children:e.jsx(b,{colSpan:7,sx:{textAlign:"center"},children:B(t.magazin.nothingToDisplay)})})})]})}),e.jsx(me,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(Me,{count:Math.ceil(r/E),defaultPage:s,onChange:p,color:"primary",size:"large"})}),C&&e.jsx(Ie,{})]})});function Qe({batiment:o,magazin:l}){Ee.locale("fr");const{t:a,i18n:r}=I(),m=O(),h=JSON.parse(sessionStorage.getItem("user")),i=ae({initialValues:{date1:null,date2:null,warehouse:"",eggsource:""},validationSchema:ce({date1:be().nullable().test("is-before-date2",a(t.global.date2Greather),function(n){const{date2:j}=this.parent;return n<=j}),date2:be().nullable().test("is-after-date1",a(t.global.date2Greather),function(n){const{date1:j}=this.parent;return n>=j})}),onSubmit:async(n,{resetForm:j,setErrors:f})=>{let x="";for(let C in n)if(n[C]!==""&&n[C]!==null){let s=new Date(n[C]),_=s.getFullYear()!==1970?`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`:n[C];x==""?x+=`?${C}=${_}`:x+=`&${C}=${_}`}if(n.date1!==null&&n.date2==null){f({date2:a(t.global.date2Required)});return}else if(n.date1==null&&n.date2!==null){f({date1:a(t.global.date1Required)});return}P.get("/inbound/list/"+x).then(C=>{m(d.actions.fetchEntrer(C.data))})},onReset:()=>{P.get("/inbound/list/").then(n=>{m(d.actions.fetchEntrer(n.data))})}});return e.jsxs(Re,{defaultExpanded:!0,children:[e.jsx(Ye,{expandIcon:e.jsx(Ge,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(Le,{}),a(t.global.filter)]})}),e.jsx(Je,{children:e.jsx(Ce,{children:e.jsx(ze,{children:e.jsx("form",{noValidate:!0,onSubmit:i.handleSubmit,onReset:i.handleReset,children:e.jsxs(S,{container:!0,alignItems:"center",gap:2,children:[e.jsx(S,{item:!0,xs:12,md:2,sm:12,children:e.jsxs(J,{fullWidth:!0,children:[e.jsx(G,{id:"batiment-id",children:h!=null&&h.is_eleveur?a(t.batiment.Nom):a(t.fournisseur.Nom)}),e.jsx(H,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"eggsource",onChange:i.handleChange,value:i.values.eggsource,label:h!=null&&h.is_eleveur?a(t.batiment.Nom):a(t.fournisseur.Nom),children:o==null?void 0:o.map(n=>e.jsxs($,{value:n.id,children:[n.name," ",n.last_name]}))})]})}),e.jsx(S,{items:!0,xs:12,md:2,sm:12,children:e.jsxs(J,{fullWidth:!0,children:[e.jsx(G,{id:"batiment-id",children:a(t.magazin.Nom)}),e.jsx(H,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"warehouse",onChange:i.handleChange,value:i.values.warehouse,label:a(t.batiment.Nom),children:l==null?void 0:l.map(n=>e.jsx($,{value:n.id,children:n.name}))})]})}),e.jsx(S,{item:!0,xs:12,md:2,sm:12,children:e.jsx(ve,{value:i.values.date1,onChange:n=>i.setFieldValue("date1",n),onBlur:i.handleBlur,label:a(t.global.date1),name:"date1",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(i.touched.date1&&i.errors.date1),helperText:i.touched.date1&&i.errors.date1}}})}),e.jsx(S,{item:!0,xs:12,md:2,sm:12,children:e.jsx(ve,{value:i.values.date2,onChange:n=>i.setFieldValue("date2",n),onBlur:i.handleBlur,label:a(t.global.date2),name:"date2",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(i.touched.date2&&i.errors.date2),helperText:i.touched.date2&&i.errors.date2}}})}),e.jsxs(S,{item:!0,container:!0,xs:12,md:2,sm:12,gap:2,sx:{alignContent:"center",justifyContent:"end"},children:[e.jsx(S,{items:!0,children:e.jsx(F,{variant:"contained",type:"reset",children:a(t.global.reset)})}),e.jsx(S,{items:!0,children:e.jsx(F,{type:"submit",variant:"contained",children:a(t.global.filter)})})]})]})})})})})]})}function Xe({batiment:o,magazin:l}){const a=O(),{t:r,i18n:m}=I(),{entrer:h}=V(j=>j.entrer),i=re("entrers",ie.getEntrer),n=JSON.parse(sessionStorage.getItem("user"));return D.useEffect(()=>{i.status=="success"&&a(d.actions.fetchEntrer(i.data))},[i.status]),e.jsx(He,{maxWidth:"xl",children:e.jsxs(M,{spacing:4,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(M,{spacing:1,children:e.jsx(K,{variant:"h4",children:n!=null&&n.is_eleveur?r(t.entrer.titleBreeder):r(t.entrer.titleDealer)})}),e.jsx(M,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(F,{startIcon:e.jsx(X,{children:e.jsx(qe,{})}),variant:"contained",onClick:()=>a(d.actions.openCloseModalAdd()),children:r(t.global.ajouter)})})]}),e.jsxs(Ce,{children:[e.jsx(Qe,{batiment:o,magazin:l}),e.jsx(Ke,{items:h,isLoading:i.isLoading,count:h.length,rowsPerPage:25,isError:i.isError})]})]})})}const Ze={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function et({batiment:o,magazin:l}){L.locale("fr");const a=JSON.parse(sessionStorage.getItem("user")),r=O(),{t:m,i18n:h}=I(),{currentData:i,isModalUpdate:n,isConfirm:j}=V(u=>u.entrer),[f,x]=D.useState(new Date),C=ce({warehouse:de().required(),eggsource:de().required()}),s=ae({initialValues:{warehouse:"",eggsource:"",dateTime:""},validationSchema:C,onSubmit:async(u,{resetForm:y,setErrors:B})=>{let q={...u};q.date=L(f).format("YYYY-MM-DD"),q.time=L(f).format("LT"),P.put("/inbound/update/",q).then(k=>{r(d.actions.editEntrer(k.data)),r(d.actions.openCloseModalUpdate()),r(d.actions.openCloseConfirm()),A.success(a!=null&&a.is_eleveur?m(t.entrer.toastUpdateSuccessBreeder):m(t.entrer.toastUpdateSuccessDealer)),y()}).catch(k=>{r(d.actions.openCloseConfirm()),A.error(m(t.global.toastError))})}}),_=async u=>{u.preventDefault();const y=await s.validateForm();Object.keys(y).length===0?r(d.actions.openCloseConfirm()):await s.submitForm()},E=()=>{s.handleSubmit()};return D.useEffect(()=>{s.setValues(i),x(new Date(`${i.date}T${i.time}`)),s.setFieldValue("dateTime",new Date,!1)},[s.errors]),e.jsxs(e.Fragment,{children:[e.jsx(Z,{open:n,onClose:()=>r(d.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ee,{sx:Ze,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:a!=null&&a.is_eleveur?m(t.entrer.updateBreeder):m(t.entrer.updateDealer)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>r(d.actions.openCloseModalUpdate()),children:e.jsx(te,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:u=>_(u),children:[e.jsxs(J,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.eggsource&&s.errors.eggsource),children:[e.jsx(G,{id:"batiment-id",children:a!=null&&a.is_eleveur?m(t.batiment.Nom):m(t.fournisseur.Nom)}),e.jsx(H,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"eggsource",onChange:s.handleChange,value:s.values.eggsource,label:a!=null&&a.is_eleveur?m(t.batiment.Nom):m(t.fournisseur.Nom),children:o.map(u=>e.jsxs($,{value:u.id,children:[u.name," ",u.last_name]}))}),s.touched.eggsource&&s.errors.eggsource&&e.jsx(le,{children:s.errors.eggsource})]}),e.jsxs(J,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.warehouse&&s.errors.warehouse),children:[e.jsx(G,{id:"batiment-id",children:m(t.magazin.Nom)}),e.jsx(H,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"warehouse",onChange:s.handleChange,value:s.values.warehouse,label:m(t.batiment.Nom),children:l.map(u=>e.jsx($,{value:u.id,children:u.name}))}),s.touched.warehouse&&s.errors.warehouse&&e.jsx(le,{children:s.errors.warehouse})]}),e.jsx(we,{id:"outlined-basic",label:m(t.entrer.temps)+" "+m(t.entrer.date),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,name:"dateTime",value:f,onChange:u=>{s.setFieldValue("dateTime",u,!0),x(u)},slotProps:{textField:{variant:"outlined",error:!!(s.touched.dateTime&&s.errors.dateTime),helperText:!!(s.touched.dateTime&&s.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:m(t.global.modifier)})]})]})}),e.jsx(De,{confirmed:E,cancel:()=>r(d.actions.openCloseConfirm()),isConfirm:j})]})}const tt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function at({batiment:o,magazin:l}){L.locale("fr");const a=O(),{t:r,i18n:m}=I(),{entrer:h,isModalAdd:i,isConfirm:n}=V(u=>u.entrer),[j,f]=D.useState(new Date),x=JSON.parse(sessionStorage.getItem("user")),C=ce({warehouse:de().required(r(t.sortie.magazinRequired)),eggsource:de().required(x!=null&&x.is_eleveur?r(t.sortie.batimentRequired):r(t.sortie.fournisseurRequired))}),s=ae({initialValues:{warehouse:"",eggsource:"",dateTime:""},validationSchema:C,onSubmit:async(u,{resetForm:y,setErrors:B})=>{let q={...u};q.date=L(j).format("YYYY-MM-DD"),q.time=L(j).format("LT"),P.post("/inbound/add/",q).then(k=>{a(d.actions.addEntrer(k.data)),a(d.actions.openCloseModalAdd()),a(d.actions.openCloseConfirm()),A.success(x!=null&&x.is_eleveur?r(t.entrer.toastAddSuccessBreeder):r(t.entrer.toastAddSuccessDealer)),y()}).catch(k=>{a(d.actions.openCloseConfirm()),A.error(r(t.entrer.toastError))})}}),_=async u=>{u.preventDefault();const y=await s.validateForm();Object.keys(y).length===0?a(d.actions.openCloseConfirm()):await s.submitForm()},E=()=>{s.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(Z,{open:i,onClose:()=>a(d.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ee,{sx:tt,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:x!=null&&x.is_eleveur?r(t.entrer.addBreeder):r(t.entrer.addDealer)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>a(d.actions.openCloseModalAdd()),children:e.jsx(te,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:u=>_(u),children:[e.jsxs(J,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.eggsource&&s.errors.eggsource),children:[e.jsx(G,{id:"batiment-id",children:x!=null&&x.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom)}),e.jsx(H,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"eggsource",onChange:s.handleChange,value:s.values.eggsource,label:x!=null&&x.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom),children:o.length>0?o.map(u=>e.jsxs($,{value:u.id,children:[u.name," ",u.last_name]},u.id)):e.jsx($,{children:r(t.batiment.nothingToDisplay)})}),s.touched.eggsource&&s.errors.eggsource&&e.jsx(le,{children:s.errors.eggsource})]}),e.jsxs(J,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.warehouse&&s.errors.warehouse),children:[e.jsx(G,{id:"batiment-id",children:r(t.magazin.Nom)}),e.jsx(H,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"warehouse",onChange:s.handleChange,value:s.values.warehouse,label:r(t.batiment.Nom),children:l.length>0?l.map(u=>e.jsx($,{value:u.id,children:u.name},u.id)):e.jsx($,{children:r(t.batiment.nothingToDisplay)})}),s.touched.warehouse&&s.errors.warehouse&&e.jsx(le,{children:s.errors.warehouse})]}),e.jsx(we,{id:"outlined-basic",label:r(t.entrer.temps)+" "+r(t.entrer.date),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,name:"dateTime",value:j,onChange:u=>{s.setFieldValue("dateTime",u,!0),f(u)},slotProps:{textField:{variant:"outlined",error:!!(s.touched.dateTime&&s.errors.dateTime),helperText:!!(s.touched.dateTime&&s.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:r(t.global.ajouter)})]})]})}),e.jsx(De,{confirmed:E,cancel:()=>a(d.actions.openCloseConfirm()),isConfirm:n})]})}function nt(){const{currentData:o,isModalDelete:l}=V(j=>j.entrer),a=O(),{t:r,i18n:m}=I(),h=JSON.parse(sessionStorage.getItem("user")),i=()=>{P.delete(`/inbound/delete/${o.id}`).then(j=>{a(d.actions.deleteEntrer()),a(d.actions.openCloseModalDelete()),A.success(h!=null&&h.is_eleveur?r(t.entrer.toastDeleteSuccessBreeder):r(t.entrer.toastDeleteSuccessDealer))}).catch(j=>{a(d.actions.openCloseModalDelete()),A.error(r(t.entrer.toastError))})},n=`${h!=null&&h.is_eleveur?r(t.entrer.deleteDescriptionBreeder):r(t.entrer.deleteDescriptionDealer)}`;return e.jsx(Z,{open:l,onClose:()=>a(d.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Fe,{title:h!=null&&h.is_eleveur?r(t.entrer.deleteTitleBreeder):r(t.entrer.deleteTitleDealer),message:n,deleteFn:i,cancel:()=>a(d.actions.openCloseModalDelete())})})}function st({title:o,closeFunction:l}){return e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px",p:"1px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:o}),e.jsx("div",{className:"cursor-pointer",onClick:()=>l(),children:e.jsx(te,{})})]})}const rt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:2};function it({eggClass:o}){const l=O(),{t:a,i18n:r}=I(),{entrer:m,currentData:h,isModalAddDetails:i}=V(c=>c.entrer),n=JSON.parse(sessionStorage.getItem("user")),[j,f]=D.useState(0),[x,C]=D.useState(0),[s,_]=D.useState(0),[E,u]=D.useState({}),[y,B]=D.useState(0),[q,k]=D.useState(!1),ue=o==null?void 0:o.findIndex(c=>c.egg_class_id==10),[W,Q]=D.useState({Normaux:[],Declasse:[]}),p=ae({initialValues:{},validationSchema:"",onSubmit:async(c,{resetForm:N,setErrors:w})=>{const v=Object.keys(c).map(U=>({option:c[U].option,price:c[U].pu,quantity:c[U].qte}));let se={id:h.id,values:v};P.post("/inbound/detail/add/",se).then(U=>{l(d.actions.addDetailsEnter({details:U.data,id:h.id})),A.success(a(t.entrer.toastAddSuccess)),k(!1),N()}).catch(U=>{l(d.actions.openCloseConfirm()),A.error(a(t.entrer.toastError))})}}),ne=c=>{c.preventDefault(),k(!0)},g=()=>{p.handleSubmit()},T=c=>N=>{if(N.target.name.includes("qte")||N.target.name.includes("pu")){f(0),C(0),B(0);for(let w in p.values)n!=null&&n.is_eleveur||(B(v=>Number(v+p.values[w].pu*p.values[w].qte).toFixed(2)),u(v=>({...v,[w]:Number(p.values[w].pu*p.values[w].qte).toFixed(2)}))),p.values[w].option<=6?f(v=>v+p.values[w].qte):p.values[w].option==10?_(p.values[w].qte):C(v=>v+p.values[w].qte)}c(N)};return D.useEffect(()=>{let c={};o==null||o.map(v=>{c[v.id]={qte:0,pu:0,option:v.egg_class_id}});const N=o==null?void 0:o.filter(v=>v.egg_class_id<=6),w=o==null?void 0:o.filter(v=>v.egg_class_id>=7);Q({Normaux:N,Declasse:w}),p.setValues(c)},[]),e.jsxs(e.Fragment,{children:[Object.keys(p.values).length!==0&&e.jsxs(Te,{fullScreen:!0,open:i,onClose:()=>l(d.actions.openCloseModalAddDetails()),children:[e.jsx(Oe,{sx:{position:"relative"},children:e.jsxs(Pe,{children:[e.jsx(R,{edge:"start",color:"inherit",onClick:()=>l(d.actions.openCloseModalAddDetails()),"aria-label":"close",children:e.jsx(te,{})}),e.jsx(K,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:n!=null&&n.is_eleveur?a(t.entrer.addDetailsBreeder):a(t.entrer.addDetailsDealer)})]})}),e.jsx(_e,{sx:{p:1},children:e.jsxs("form",{noValidate:!0,onSubmit:c=>ne(c),children:[e.jsxs(S,{container:!0,spacing:2,children:[W.Normaux.length>0&&e.jsxs(S,{item:!0,spacing:2,xs:12,md:6,children:[e.jsxs("h1",{className:"font-bold text-center text-lg",children:[a(t.entrer.nomeaux)," "]}),W.Normaux.map((c,N)=>e.jsxs(S,{item:!0,xs:12,mt:1,children:[e.jsx(oe,{children:e.jsx(he,{label:c.value,size:"small"})}),e.jsxs(M,{direction:"row",alignItems:"center",justifyItems:"center",flexWrap:"wrap",gap:1,mt:2,children:[e.jsx(Y,{id:"outlined-basic",label:a(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.qte`,onBlur:T(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].qte,style:{flexBasis:n!=null&&n.is_eleveur?"100%":"48%"}}),!(n!=null&&n.is_eleveur)&&e.jsx(Y,{id:"outlined-basic",label:a(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.pu`,onBlur:T(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].pu,style:{flexBasis:n!=null&&n.is_eleveur?"100%":"48%"}}),!(n!=null&&n.is_eleveur)&&e.jsxs("span",{style:{flexBasis:"100%",textAlign:r.language=="ar"?"right":"left"},children:[a(t.entrer.total)," ",E[c.id]]})]})]}))]}),e.jsxs(S,{item:!0,spacing:2,xs:12,md:6,children:[W.Declasse.length>0&&e.jsx("h1",{className:"font-bold text-center text-lg",children:a(t.entrer.declasse)}),W.Declasse.map((c,N)=>e.jsxs(S,{item:!0,xs:12,mt:1,children:[e.jsx(oe,{children:e.jsx(he,{label:`${c.value}`,size:"small"})}),e.jsxs(M,{direction:"row",alignItems:"center",justifyItems:"center",flexWrap:"wrap",gap:1,mt:2,children:[e.jsx(Y,{id:"outlined-basic",label:c.egg_class_id==10?`${a(t.entrer.quantity)} (kg)`:a(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.qte`,onBlur:T(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].qte,style:{flexBasis:n!=null&&n.is_eleveur?"100%":"48%"}}),!(n!=null&&n.is_eleveur)&&e.jsx(Y,{id:"outlined-basic",label:a(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.pu`,onBlur:T(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].pu,style:{flexBasis:n!=null&&n.is_eleveur?"100%":"48%"}}),!(n!=null&&n.is_eleveur)&&e.jsxs("span",{style:{flexBasis:"100%",textAlign:r.language=="ar"?"right":"left"},children:[a(t.entrer.total)," ",E[c.id]]})]})]})),e.jsx(M,{sx:{backgroundColor:c=>c.palette.mode==="dark"?"neutral.800":"error.lightest",borderRadius:2.5,p:1,mt:3},children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-around mb-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[a(t.entrer.nomeaux)," : "]}),e.jsx("p",{children:j})]}),W.Declasse.length>0&&e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[a(t.entrer.declasse)," : "]}),e.jsx("p",{children:x})]}),ue!==-1&&e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[a(t.entrer.eliminer)," : "]}),e.jsxs("p",{children:[s,"kg"]})]}),e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:a(t.entrer.total)}),e.jsx("p",{children:j+x})]}),!(n!=null&&n.is_eleveur)&&e.jsxs(e.Fragment,{children:[" ",e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:a(t.entrer.totalPrice)}),e.jsx("p",{children:y})]})]})]})}),W.Declasse.length==0&&e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2,mb:2},type:"submit",variant:"contained",children:n!=null&&n.is_eleveur?a(t.entrer.addDetailsBreeder):a(t.entrer.addDetailsDealer)})]})]}),W.Declasse.length>0&&e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:1,mb:1},type:"submit",variant:"contained",children:a(t.global.ajouter)})]})})]}),e.jsx(lt,{isOpen:q,confirmed:g,close:()=>{k(!1)},data:{type1:j,type2:x,weight:s}})]})}const lt=({isOpen:o,confirmed:l,close:a,data:r})=>{const{t:m,i18n:h}=I();return e.jsx(Z,{open:o,children:e.jsxs(ee,{sx:rt,children:[e.jsx(st,{title:m(t.client.confirmOperation),closeFunction:a}),e.jsxs("div",{className:"flex justify-around mb-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:"Normaux : "}),e.jsx("p",{children:r.type1})]}),e.jsx(oe,{}),e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:"Déclassés : "}),e.jsxs("p",{children:[r.type2," + ",r.weight," kg"]})]}),e.jsx(oe,{}),e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[m(t.entrer.total)," "]}),e.jsx("p",{children:r.type1+r.type2})]}),e.jsxs(S,{container:!0,mt:3,spacing:2,children:[e.jsx(S,{item:!0,xs:6}),e.jsx(S,{item:!0,xs:3,children:e.jsx(F,{variant:"contained",color:"error",onClick:a,children:m(t.client.deleteCancel)})}),e.jsx(S,{item:!0,xs:3,children:e.jsx(F,{variant:"contained",color:"success",onClick:l,children:m(t.client.deleteConfirm)})})]})]})})},ot={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function dt(){const o=O(),{t:l,i18n:a}=I(),{currentDetailData:r,isModalUpdateDetails:m}=V(f=>f.entrer),h=ce({}),i=ae({initialValues:{quantity:0,price:0},validationSchema:h,onSubmit:async(f,{resetForm:x,setErrors:C})=>{console.log(r),P.put("/inbound/detail/update/",f).then(s=>{o(d.actions.updateDetailsLignes({id:f.inbound,id_details:f.id,details:s.data})),o(d.actions.openCloseModalUpdateDetails()),o(d.actions.openCloseConfirm()),A.success(l(t.entrer.toastAddSuccess)),x()}).catch(s=>{o(d.actions.openCloseConfirm()),o(d.actions.openCloseConfirm()),A.error(l(t.entrer.toastError))})}}),n=f=>{f.preventDefault(),o(d.actions.openCloseConfirm())},j=()=>{i.handleSubmit()};return D.useEffect(()=>{console.log(r),i.setValues(r)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(Z,{open:m,onClose:()=>o(d.actions.openCloseModalUpdateDetails()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ee,{sx:ot,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:l(t.entrer.updateTitleDetails)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>o(d.actions.openCloseModalUpdateDetails()),children:e.jsx(te,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:f=>n(f),children:[e.jsx(Y,{id:"outlined-basic",label:l(t.entrer.quantity),variant:"outlined",onBlur:i.handleBlur,fullWidth:!0,type:"number",name:"quantity",onChange:i.handleChange,value:i.values.quantity,error:!!(i.touched.quantity&&i.errors.quantity),helperText:i.touched.quantity&&i.errors.quantity,style:{marginBottom:"15px"}}),e.jsx(Y,{id:"outlined-basic",label:l(t.entrer.prix),variant:"outlined",onBlur:i.handleBlur,fullWidth:!0,type:"number",name:"price",onChange:i.handleChange,value:i.values.price,error:!!(i.touched.price&&i.errors.price),helperText:i.touched.price&&i.errors.price,style:{marginBottom:"15px"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:l(t.entrer.updateTitleDetails)})]})]})}),e.jsx(Confirm,{confirmed:j})]})}function ct(){const{isModalAdd:o,isModalUpdate:l,isModalAddDetails:a,isModalUpdateDetails:r}=V(n=>n.entrer),m=re("batimens",ie.getBatimentSelect),h=re("magazins",ie.getWarehouseSelect),i=re("classLists",ie.getClass);return e.jsxs(ee,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(ye,{children:e.jsx(Xe,{batiment:m.data,magazin:h.data})}),o&&e.jsx(at,{batiment:m.data,magazin:h.data}),l&&e.jsx(et,{batiment:m.data,magazin:h.data}),a&&e.jsx(it,{eggClass:i.data}),r&&e.jsx(dt,{eggClass:i.data}),e.jsx(nt,{})]})}function Nt(){const o=JSON.parse(sessionStorage.getItem("user")),{t:l,i18n:a}=I(),r=o!=null&&o.is_eleveur?l(t.nav.production):l(t.nav.achat);return e.jsxs(e.Fragment,{children:[e.jsx(ke,{title:`ESM | ${r}`}),e.jsx(ye,{children:e.jsx(ct,{})})]})}export{Nt as default};
