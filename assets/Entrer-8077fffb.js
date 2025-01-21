import{c as we,j as e,r as D,aA as Be,aa as O,d as A,B as Ne,ab as Te,l as t,a9 as U,a2 as Q,as as _e,bn as d,h as V,aj as H,ak as J,al as G,am as z,i as ke,a as F,ae as P,T as K,af as X,F as le,a5 as I,au as Me,av as Ee,a1 as ie,aG as xe,k as L,S as qe}from"./index-5b79c039.js";import{e as pe,T as je,a as ge,b as R,c as f,d as fe,f as Fe,G as T,u as re,S as E,h as ne,B as Z,E as Ce}from"./moment-864131f4.js";import{E as be,P as Ie,M as Ae}from"./ModalDelete-04bd8acd.js";import{T as We,C as ee}from"./TableRowsLoader-23cb4167.js";import{A as $e}from"./AlertError-96b329d4.js";import{K as ze,a as Oe,A as Ve,T as Pe}from"./KeyboardArrowUp-c6409d2a.js";import{D as Re}from"./DeleteOutlineOutlined-32598299.js";import{u as te,c as de,e as ve,C as De,b as Ue,d as oe}from"./formik.esm-f8b1f355.js";import{m as Y}from"./fr-4efeb1d7.js";import{D as ye}from"./DatePicker-9add668e.js";import{T as Le}from"./driverObj-1c0270c6.js";import{M as me}from"./ModalConfirm-575c2085.js";import{D as Se}from"./DateTimePicker-2dfbc613.js";import"./Tabs-0c73418c.js";const Ye=we(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),He=D.memo(i=>{const l=Be(),s=O();let{count:n=0,items:h=[],onDeselectAll:x,onDeselectOne:o,onSelectAll:a,onSelectOne:g,selected:B=[],isLoading:u,isError:v}=i;const[r,_]=D.useState(1),[W,m]=D.useState(25),y=JSON.parse(sessionStorage.getItem("user")),{t:w,i18n:q}=A(),[k,ce]=D.useState({}),N=D.useRef(null),ue=p=>{ce(c=>({...c,[p]:!c[p]}))},j=(p,c)=>{const S=h.filter(C=>C.id==p)[0];switch(s(d.actions.setCurrentData(S)),c){case"update":s(d.actions.openCloseModalUpdate());break;case"delete":s(d.actions.openCloseModalDelete());break;case"addDetails":s(d.actions.openCloseModalAddDetails());break}},ae=()=>{const p=N.current;p&&p.scrollHeight===p.scrollTop+p.clientHeight&&!u&&_(S=>S+1)};D.useEffect(()=>(N.current&&N.current.addEventListener("scroll",ae),()=>{N.current&&N.current.removeEventListener("scroll",ae)}),[u]);const $=h==null?void 0:h.slice(0,r*W);return e.jsxs(Ne,{sx:{position:"relative"},children:[e.jsx(pe,{component:Te,sx:{maxHeight:"60vh"},ref:N,children:e.jsxs(je,{sx:{minWidth:700,"& .MuiTableCell-body":{padding:"2px 18px"}},size:"small","aria-label":"a dense table",stickyHeader:!0,children:[e.jsx(ge,{children:e.jsxs(R,{children:[e.jsx(f,{align:"left"}),e.jsx(f,{align:"left",children:y!=null&&y.is_eleveur?w(t.batiment.Nom):w(t.fournisseur.Nom)}),e.jsx(f,{align:"left",children:w(t.magazin.Nom)}),e.jsx(f,{align:"left",children:w(t.entrer.date)}),e.jsx(f,{align:"left",children:w(t.entrer.temps)}),e.jsx(f,{align:"left"})]})}),u?e.jsx(We,{rowsNum:10}):e.jsx(fe,{children:($==null?void 0:$.length)>0?$==null?void 0:$.map((p,c)=>{var se;const S=k[p.id]||!1;let C=new Date(p.date),b={year:C.getFullYear(),month:`${C.getMonth()+1}`,day:`${C.getDate()}`};return e.jsxs(e.Fragment,{children:[e.jsxs(R,{hover:!1,sx:{backgroundColor:c%2!==0?S?l.palette.mode=="dark"?l.palette.primary.dark:l.palette.primary.light:l.palette.mode==="dark"?l.palette.grey[900]:l.palette.grey[100]:S?l.palette.mode=="dark"?l.palette.primary.dark:l.palette.primary.light:"transparent"},children:[e.jsx(f,{children:((se=p==null?void 0:p.inbound_details)==null?void 0:se.length)!==0&&e.jsx(U,{"aria-label":"expand row",size:"small",onClick:()=>ue(p.id),children:S?e.jsx(ze,{}):e.jsx(Oe,{})})}),e.jsxs(f,{align:"left",children:[p.eggsource_name," ",p.eggsource_lastname]}),e.jsx(f,{align:"left",children:p.warehouse_name}),e.jsxs(f,{align:"left",children:[b.day.padStart(2,0),"/",b.month.padStart(2,0),"/",b.year]}),e.jsx(f,{align:"left",children:p.time.substring(0,5)}),e.jsxs(f,{children:[e.jsx(U,{className:"editBtn",color:"warning",onClick:()=>j(p.id,"update"),children:e.jsx(Q,{children:e.jsx(be,{})})}),e.jsx(U,{className:"deleteBtn",color:"error",onClick:()=>j(p.id,"delete"),children:e.jsx(Q,{children:e.jsx(Re,{})})}),p.inbound_details.length==0&&e.jsx(U,{color:"success",onClick:()=>j(p.id,"addDetails"),children:e.jsx(Q,{children:e.jsx(Ye,{})})})]})]},p.id),e.jsx(R,{children:e.jsx(f,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e.jsx(_e,{in:S,timeout:"auto",unmountOnExit:!0,children:e.jsx(pe,{children:e.jsxs(je,{children:[e.jsx(ge,{children:e.jsxs(R,{children:[e.jsxs(f,{children:[w(t.sortie.eggType)," "]}),e.jsx(f,{children:w(t.entrer.quantity)}),!(y!=null&&y.is_eleveur)&&e.jsxs(f,{children:[w(t.entrer.prix)," ",w(t.global.mad)]}),e.jsx(f,{})]})}),e.jsx(fe,{children:p.inbound_details.map((M,he)=>e.jsxs(R,{sx:{backgroundColor:he%2!==0?l.palette.mode==="dark"?l.palette.grey[900]:l.palette.grey[100]:"transparent","&:hover":{backgroundColor:l.palette.mode==="dark"?l.palette.grey[800]:l.palette.grey[200]}},children:[e.jsx(f,{children:M.egg_class}),e.jsx(f,{children:M.quantity}),!(y!=null&&y.is_eleveur)&&e.jsx(f,{children:M.price}),e.jsxs(f,{children:[" ",e.jsx(U,{color:"info",onClick:()=>s(d.actions.setCurrentDetailData({id:p.id,id_details:M.id})),children:e.jsx(Q,{children:e.jsx(be,{})})})]})]},he))})]})})})})})]})}):e.jsx(R,{children:e.jsx(f,{colSpan:7,sx:{textAlign:"center"},children:w(t.magazin.nothingToDisplay)})})})]})}),v&&e.jsx($e,{})]})});function Je({batiment:i,magazin:l}){Fe.locale("fr");const{t:s,i18n:n}=A(),h=O(),x=JSON.parse(sessionStorage.getItem("user")),o=te({initialValues:{date1:null,date2:null,warehouse:"",eggsource:""},validationSchema:de({date1:ve().nullable().test("is-before-date2",s(t.global.date2Greather),function(a){const{date2:g}=this.parent;return a<=g}),date2:ve().nullable().test("is-after-date1",s(t.global.date2Greather),function(a){const{date1:g}=this.parent;return a>=g})}),onSubmit:async(a,{resetForm:g,setErrors:B})=>{let u="";for(let v in a)if(a[v]!==""&&a[v]!==null){let r=new Date(a[v]),_=r.getFullYear()!==1970?`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`:a[v];u==""?u+=`?${v}=${_}`:u+=`&${v}=${_}`}if(a.date1!==null&&a.date2==null){B({date2:s(t.global.date2Required)});return}else if(a.date1==null&&a.date2!==null){B({date1:s(t.global.date1Required)});return}V.get("/inbound/list/"+u).then(v=>{h(d.actions.fetchEntrer(v.data))})},onReset:()=>{V.get("/inbound/list/").then(a=>{h(d.actions.fetchEntrer(a.data))})}});return e.jsx(De,{className:"filter",children:e.jsx(Ue,{children:e.jsxs("form",{noValidate:!0,onSubmit:o.handleSubmit,onReset:o.handleReset,children:[e.jsxs(T,{container:!0,alignItems:"center",gap:2,children:[e.jsx(T,{item:!0,xs:12,md:2.5,sm:12,children:e.jsxs(H,{fullWidth:!0,children:[e.jsx(J,{id:"batiment-id",size:"small",children:x!=null&&x.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom)}),e.jsx(G,{labelId:"batiment-id",id:"demo-simple-select",onBlur:o.handleBlur,fullWidth:!0,size:"small",name:"eggsource",onChange:o.handleChange,value:o.values.eggsource,label:x!=null&&x.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom),children:i==null?void 0:i.map(a=>e.jsxs(z,{value:a.id,children:[a.name," ",a.last_name]}))})]})}),e.jsx(T,{items:!0,xs:12,md:2.5,sm:12,children:e.jsxs(H,{fullWidth:!0,children:[e.jsx(J,{id:"batiment-id",size:"small",children:s(t.magazin.Nom)}),e.jsx(G,{labelId:"batiment-id",id:"demo-simple-select",onBlur:o.handleBlur,fullWidth:!0,size:"small",name:"warehouse",onChange:o.handleChange,value:o.values.warehouse,label:s(t.batiment.Nom),children:l==null?void 0:l.map(a=>e.jsx(z,{value:a.id,children:a.name}))})]})}),e.jsx(T,{item:!0,xs:12,md:2.5,sm:12,children:e.jsx(ye,{value:o.values.date1,onChange:a=>o.setFieldValue("date1",a),onBlur:o.handleBlur,label:s(t.global.date1),name:"date1",size:"small",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",size:"small",error:!!(o.touched.date1&&o.errors.date1),helperText:o.touched.date1&&o.errors.date1}}})}),e.jsx(T,{item:!0,xs:12,md:2.5,sm:12,children:e.jsx(ye,{value:o.values.date2,onChange:a=>o.setFieldValue("date2",a),onBlur:o.handleBlur,label:s(t.global.date2),name:"date2",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",size:"small",error:!!(o.touched.date2&&o.errors.date2),helperText:o.touched.date2&&o.errors.date2}}})})]}),e.jsxs(ke,{direction:"row",justifyContent:"end",spacing:2,mt:2,children:[e.jsx(F,{variant:"contained",type:"reset",className:"reianstaller",children:s(t.global.reset)}),e.jsx(F,{type:"submit",variant:"contained",className:"filtrerBtn",children:s(t.global.filter)})]})]})})})}function Ge({batiment:i,magazin:l}){const s=O(),{t:n,i18n:h}=A(),{entrer:x}=P(g=>g.entrer),o=re("entrers",ne.getEntrer),a=JSON.parse(sessionStorage.getItem("user"));return D.useEffect(()=>{o.status=="success"&&s(d.actions.fetchEntrer(o.data))},[o.status]),e.jsxs(E,{spacing:4,children:[e.jsx(Le,{isLoading:o.isLoading}),e.jsxs(E,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(E,{spacing:1,children:e.jsx(K,{variant:"h4",children:a!=null&&a.is_eleveur?n(t.entrer.titleBreeder):n(t.entrer.titleDealer)})}),e.jsx(E,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(F,{startIcon:e.jsx(Q,{children:e.jsx(Ie,{})}),variant:"contained",onClick:()=>s(d.actions.openCloseModalAdd()),className:"ajout",children:n(t.global.ajouter)})})]}),e.jsxs(De,{children:[e.jsx(Je,{batiment:i,magazin:l}),e.jsx(He,{items:x,isLoading:o.isLoading,count:x.length,rowsPerPage:25,isError:o.isError})]})]})}const Ke={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function Qe({batiment:i,magazin:l}){Y.locale("fr");const s=JSON.parse(sessionStorage.getItem("user")),n=O(),{t:h,i18n:x}=A(),{currentData:o,isModalUpdate:a,isConfirm:g}=P(m=>m.entrer),[B,u]=D.useState(new Date),v=de({warehouse:oe().required(),eggsource:oe().required()}),r=te({initialValues:{warehouse:"",eggsource:"",dateTime:""},validationSchema:v,onSubmit:async(m,{resetForm:y,setErrors:w})=>{let q={...m};q.date=Y(B).format("YYYY-MM-DD"),q.time=Y(B).format("LT"),V.put("/inbound/update/",q).then(k=>{n(d.actions.editEntrer(k.data)),n(d.actions.openCloseModalUpdate()),n(d.actions.openCloseConfirm()),I.success(s!=null&&s.is_eleveur?h(t.entrer.toastUpdateSuccessBreeder):h(t.entrer.toastUpdateSuccessDealer)),y()}).catch(k=>{n(d.actions.openCloseConfirm()),I.error(h(t.global.toastError))})}}),_=async m=>{m.preventDefault();const y=await r.validateForm();Object.keys(y).length===0?n(d.actions.openCloseConfirm()):await r.submitForm()},W=()=>{r.handleSubmit()};return D.useEffect(()=>{r.setValues(o),u(new Date(`${o.date}T${o.time}`)),r.setFieldValue("dateTime",new Date,!1)},[r.errors]),e.jsxs(e.Fragment,{children:[e.jsx(X,{open:a,onClose:()=>n(d.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(Z,{sx:Ke,children:[e.jsxs(E,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:s!=null&&s.is_eleveur?h(t.entrer.updateBreeder):h(t.entrer.updateDealer)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>n(d.actions.openCloseModalUpdate()),children:e.jsx(ee,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:m=>_(m),children:[e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.eggsource&&r.errors.eggsource),children:[e.jsx(J,{id:"batiment-id",children:s!=null&&s.is_eleveur?h(t.batiment.Nom):h(t.fournisseur.Nom)}),e.jsx(G,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"eggsource",onChange:r.handleChange,value:r.values.eggsource,label:s!=null&&s.is_eleveur?h(t.batiment.Nom):h(t.fournisseur.Nom),children:i.map(m=>e.jsxs(z,{value:m.id,children:[m.name," ",m.last_name]}))}),r.touched.eggsource&&r.errors.eggsource&&e.jsx(le,{children:r.errors.eggsource})]}),e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.warehouse&&r.errors.warehouse),children:[e.jsx(J,{id:"batiment-id",children:h(t.magazin.Nom)}),e.jsx(G,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"warehouse",onChange:r.handleChange,value:r.values.warehouse,label:h(t.batiment.Nom),children:l.map(m=>e.jsx(z,{value:m.id,children:m.name}))}),r.touched.warehouse&&r.errors.warehouse&&e.jsx(le,{children:r.errors.warehouse})]}),e.jsx(Se,{id:"outlined-basic",label:h(t.entrer.temps)+" "+h(t.entrer.date),variant:"outlined",onBlur:r.handleBlur,fullWidth:!0,name:"dateTime",value:B,onChange:m=>{r.setFieldValue("dateTime",m,!0),u(m)},slotProps:{textField:{variant:"outlined",error:!!(r.touched.dateTime&&r.errors.dateTime),helperText:!!(r.touched.dateTime&&r.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:h(t.global.modifier)})]})]})}),e.jsx(me,{confirmed:W,cancel:()=>n(d.actions.openCloseConfirm()),isConfirm:g})]})}const Xe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function Ze({batiment:i,magazin:l}){Y.locale("fr");const s=O(),{t:n,i18n:h}=A(),{entrer:x,isModalAdd:o,isConfirm:a}=P(m=>m.entrer),[g,B]=D.useState(new Date),u=JSON.parse(sessionStorage.getItem("user")),v=de({warehouse:oe().required(n(t.sortie.magazinRequired)),eggsource:oe().required(u!=null&&u.is_eleveur?n(t.sortie.batimentRequired):n(t.sortie.fournisseurRequired))}),r=te({initialValues:{warehouse:"",eggsource:"",dateTime:""},validationSchema:v,onSubmit:async(m,{resetForm:y,setErrors:w})=>{let q={...m};q.date=Y(g).format("YYYY-MM-DD"),q.time=Y(g).format("LT"),V.post("/inbound/add/",q).then(k=>{s(d.actions.addEntrer(k.data)),s(d.actions.openCloseModalAdd()),s(d.actions.openCloseConfirm()),I.success(u!=null&&u.is_eleveur?n(t.entrer.toastAddSuccessBreeder):n(t.entrer.toastAddSuccessDealer)),y()}).catch(k=>{s(d.actions.openCloseConfirm()),I.error(n(t.entrer.toastError))})}}),_=async m=>{m.preventDefault();const y=await r.validateForm();Object.keys(y).length===0?s(d.actions.openCloseConfirm()):await r.submitForm()},W=()=>{r.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(X,{open:o,onClose:()=>s(d.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(Z,{sx:Xe,children:[e.jsxs(E,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:u!=null&&u.is_eleveur?n(t.entrer.addBreeder):n(t.entrer.addDealer)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>s(d.actions.openCloseModalAdd()),children:e.jsx(ee,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:m=>_(m),children:[e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.eggsource&&r.errors.eggsource),children:[e.jsx(J,{id:"batiment-id",children:u!=null&&u.is_eleveur?n(t.batiment.Nom):n(t.fournisseur.Nom)}),e.jsx(G,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"eggsource",onChange:r.handleChange,value:r.values.eggsource,label:u!=null&&u.is_eleveur?n(t.batiment.Nom):n(t.fournisseur.Nom),children:i.length>0?i.map(m=>e.jsxs(z,{value:m.id,children:[m.name," ",m.last_name]},m.id)):e.jsx(z,{children:n(t.batiment.nothingToDisplay)})}),r.touched.eggsource&&r.errors.eggsource&&e.jsx(le,{children:r.errors.eggsource})]}),e.jsxs(H,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(r.touched.warehouse&&r.errors.warehouse),children:[e.jsx(J,{id:"batiment-id",children:n(t.magazin.Nom)}),e.jsx(G,{labelId:"batiment-id",id:"demo-simple-select",onBlur:r.handleBlur,fullWidth:!0,name:"warehouse",onChange:r.handleChange,value:r.values.warehouse,label:n(t.batiment.Nom),children:l.length>0?l.map(m=>e.jsx(z,{value:m.id,children:m.name},m.id)):e.jsx(z,{children:n(t.batiment.nothingToDisplay)})}),r.touched.warehouse&&r.errors.warehouse&&e.jsx(le,{children:r.errors.warehouse})]}),e.jsx(Se,{id:"outlined-basic",label:n(t.entrer.temps)+" "+n(t.entrer.date),variant:"outlined",onBlur:r.handleBlur,fullWidth:!0,name:"dateTime",value:g,onChange:m=>{r.setFieldValue("dateTime",m,!0),B(m)},slotProps:{textField:{variant:"outlined",error:!!(r.touched.dateTime&&r.errors.dateTime),helperText:!!(r.touched.dateTime&&r.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:n(t.global.ajouter)})]})]})}),e.jsx(me,{confirmed:W,cancel:()=>s(d.actions.openCloseConfirm()),isConfirm:a})]})}function et(){const{currentData:i,isModalDelete:l}=P(g=>g.entrer),s=O(),{t:n,i18n:h}=A(),x=JSON.parse(sessionStorage.getItem("user")),o=()=>{V.delete(`/inbound/delete/${i.id}`).then(g=>{s(d.actions.deleteEntrer()),s(d.actions.openCloseModalDelete()),I.success(x!=null&&x.is_eleveur?n(t.entrer.toastDeleteSuccessBreeder):n(t.entrer.toastDeleteSuccessDealer))}).catch(g=>{s(d.actions.openCloseModalDelete()),I.error(n(t.entrer.toastError))})},a=`${x!=null&&x.is_eleveur?n(t.entrer.deleteDescriptionBreeder):n(t.entrer.deleteDescriptionDealer)}`;return e.jsx(X,{open:l,onClose:()=>s(d.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Ae,{title:x!=null&&x.is_eleveur?n(t.entrer.deleteTitleBreeder):n(t.entrer.deleteTitleDealer),message:a,deleteFn:o,cancel:()=>s(d.actions.openCloseModalDelete())})})}function tt({title:i,closeFunction:l}){return e.jsxs(E,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px",p:"1px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:i}),e.jsx("div",{className:"cursor-pointer",onClick:()=>l(),children:e.jsx(ee,{})})]})}const at={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:2};function st({eggClass:i}){const l=O(),{t:s,i18n:n}=A(),{entrer:h,currentData:x,isModalAddDetails:o}=P(c=>c.entrer),a=JSON.parse(sessionStorage.getItem("user")),[g,B]=D.useState(0),[u,v]=D.useState(0),[r,_]=D.useState(0),[W,m]=D.useState({}),[y,w]=D.useState(0),[q,k]=D.useState(!1),ce=i==null?void 0:i.findIndex(c=>c.egg_class_id==10),[N,ue]=D.useState({Normaux:[],Declasse:[]}),j=te({initialValues:{},validationSchema:"",onSubmit:async(c,{resetForm:S,setErrors:C})=>{const b=Object.keys(c).map(M=>({option:c[M].option,price:c[M].pu,quantity:c[M].qte}));let se={id:x.id,values:b};V.post("/inbound/detail/add/",se).then(M=>{l(d.actions.addDetailsEnter({details:M.data,id:x.id})),I.success(s(t.entrer.toastAddSuccess)),k(!1),S()}).catch(M=>{l(d.actions.openCloseConfirm()),I.error(s(t.global.toastError))})}}),ae=c=>{c.preventDefault(),k(!0)},$=()=>{j.handleSubmit()},p=c=>S=>{if(S.target.name.includes("qte")||S.target.name.includes("pu")){B(0),v(0),w(0);for(let C in j.values)a!=null&&a.is_eleveur||(w(b=>Number(b+j.values[C].pu*j.values[C].qte).toFixed(2)),m(b=>({...b,[C]:Number(j.values[C].pu*j.values[C].qte).toFixed(2)}))),j.values[C].option<=6?B(b=>b+j.values[C].qte):j.values[C].option==10?_(j.values[C].qte):v(b=>b+j.values[C].qte)}c(S)};return D.useEffect(()=>{let c={};i==null||i.map(b=>{c[b.id]={qte:0,pu:0,option:b.egg_class_id}});const S=i==null?void 0:i.filter(b=>b.egg_class_id<=6),C=i==null?void 0:i.filter(b=>b.egg_class_id>=7);ue({Normaux:S,Declasse:C}),j.setValues(c)},[]),e.jsxs(e.Fragment,{children:[Object.keys(j.values).length!==0&&e.jsxs(Me,{fullScreen:!0,open:o,onClose:()=>l(d.actions.openCloseModalAddDetails()),children:[e.jsx(Ve,{sx:{position:"relative"},children:e.jsxs(Pe,{children:[e.jsx(U,{edge:"start",color:"inherit",onClick:()=>l(d.actions.openCloseModalAddDetails()),"aria-label":"close",children:e.jsx(ee,{})}),e.jsx(K,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a!=null&&a.is_eleveur?s(t.entrer.addDetailsBreeder):s(t.entrer.addDetailsDealer)})]})}),e.jsx(Ee,{sx:{p:1},children:e.jsxs("form",{noValidate:!0,onSubmit:c=>ae(c),children:[e.jsxs(T,{container:!0,spacing:2,children:[N.Normaux.length>0&&e.jsxs(T,{item:!0,spacing:2,xs:12,md:6,children:[e.jsxs("h1",{className:"font-bold text-center text-lg",children:[s(t.entrer.nomeaux)," "]}),N.Normaux.map((c,S)=>e.jsxs(T,{item:!0,xs:12,mt:1,children:[e.jsx(ie,{children:e.jsx(xe,{label:c.value,size:"small"})}),e.jsxs(E,{direction:"row",alignItems:"center",justifyItems:"center",flexWrap:"wrap",gap:1,mt:2,children:[e.jsx(L,{id:"outlined-basic",label:s(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.qte`,onBlur:p(j.handleBlur),onChange:j.handleChange,value:j.values[c.id].qte,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsx(L,{id:"outlined-basic",label:s(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.pu`,onBlur:p(j.handleBlur),onChange:j.handleChange,value:j.values[c.id].pu,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsxs("span",{style:{flexBasis:"100%",textAlign:n.language=="ar"?"right":"left"},children:[s(t.entrer.total)," ",W[c.id]]})]})]}))]}),e.jsxs(T,{item:!0,spacing:2,xs:12,md:6,children:[N.Declasse.length>0&&e.jsx("h1",{className:"font-bold text-center text-lg",children:s(t.entrer.declasse)}),N.Declasse.map((c,S)=>e.jsxs(T,{item:!0,xs:12,mt:1,children:[e.jsx(ie,{children:e.jsx(xe,{label:`${c.value}`,size:"small"})}),e.jsxs(E,{direction:"row",alignItems:"center",justifyItems:"center",flexWrap:"wrap",gap:1,mt:2,children:[e.jsx(L,{id:"outlined-basic",label:c.egg_class_id==10?`${s(t.entrer.quantity)} (kg)`:s(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.qte`,onBlur:p(j.handleBlur),onChange:j.handleChange,value:j.values[c.id].qte,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsx(L,{id:"outlined-basic",label:s(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.pu`,onBlur:p(j.handleBlur),onChange:j.handleChange,value:j.values[c.id].pu,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsxs("span",{style:{flexBasis:"100%",textAlign:n.language=="ar"?"right":"left"},children:[s(t.entrer.total)," ",W[c.id]]})]})]})),e.jsx(E,{sx:{backgroundColor:c=>c.palette.mode==="dark"?"neutral.800":"error.lightest",borderRadius:2.5,p:1,mt:3},children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-around mb-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[s(t.entrer.nomeaux)," : "]}),e.jsx("p",{children:g})]}),N.Declasse.length>0&&e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[s(t.entrer.declasse)," : "]}),e.jsx("p",{children:u})]}),ce!==-1&&e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[s(t.entrer.eliminer)," : "]}),e.jsxs("p",{children:[r,"kg"]})]}),e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:s(t.entrer.total)}),e.jsx("p",{children:g+u})]}),!(a!=null&&a.is_eleveur)&&e.jsxs(e.Fragment,{children:[" ",e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:s(t.entrer.totalPrice)}),e.jsx("p",{children:y})]})]})]})}),N.Declasse.length==0&&e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2,mb:2},type:"submit",variant:"contained",children:a!=null&&a.is_eleveur?s(t.entrer.addDetailsBreeder):s(t.entrer.addDetailsDealer)})]})]}),N.Declasse.length>0&&e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:1,mb:1},type:"submit",variant:"contained",children:s(t.global.ajouter)})]})})]}),e.jsx(rt,{isOpen:q,confirmed:$,close:()=>{k(!1)},data:{type1:g,type2:u,weight:r}})]})}const rt=({isOpen:i,confirmed:l,close:s,data:n})=>{const{t:h,i18n:x}=A();return e.jsx(X,{open:i,children:e.jsxs(Z,{sx:at,children:[e.jsx(tt,{title:h(t.client.confirmOperation),closeFunction:s}),e.jsxs("div",{className:"flex justify-around mb-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:"Normaux : "}),e.jsx("p",{children:n.type1})]}),e.jsx(ie,{}),e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:"Déclassés : "}),e.jsxs("p",{children:[n.type2," + ",n.weight," kg"]})]}),e.jsx(ie,{}),e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[h(t.entrer.total)," "]}),e.jsx("p",{children:n.type1+n.type2})]}),e.jsxs(T,{container:!0,mt:3,spacing:2,children:[e.jsx(T,{item:!0,xs:6}),e.jsx(T,{item:!0,xs:3,children:e.jsx(F,{variant:"contained",color:"error",onClick:s,children:h(t.client.deleteCancel)})}),e.jsx(T,{item:!0,xs:3,children:e.jsx(F,{variant:"contained",color:"success",onClick:l,children:h(t.client.deleteConfirm)})})]})]})})},nt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function lt(){const i=O(),{t:l,i18n:s}=A(),{currentDetailData:n,isModalUpdateDetails:h,isConfirm:x}=P(u=>u.entrer),o=de({}),a=te({initialValues:{quantity:0,price:0},validationSchema:o,onSubmit:async(u,{resetForm:v,setErrors:r})=>{V.put("/inbound/detail/update/",u).then(_=>{i(d.actions.updateDetailsLignes({id:u.inbound,id_details:u.id,details:_.data})),i(d.actions.openCloseModalUpdateDetails()),i(d.actions.openCloseConfirm()),I.success(l(t.entrer.toastAddSuccess)),v()}).catch(_=>{i(d.actions.openCloseConfirm()),i(d.actions.openCloseConfirm()),I.error(l(t.entrer.toastError))})}}),g=u=>{u.preventDefault(),i(d.actions.openCloseConfirm())},B=()=>{a.handleSubmit()};return D.useEffect(()=>{console.log(n),a.setValues(n)},[n]),e.jsxs(e.Fragment,{children:[e.jsx(X,{open:h,onClose:()=>i(d.actions.openCloseModalUpdateDetails()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(Z,{sx:nt,children:[e.jsxs(E,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(K,{id:"modal-modal-title",variant:"h6",component:"h2",children:l(t.entrer.updateTitleDetails)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>i(d.actions.openCloseModalUpdateDetails()),children:e.jsx(ee,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:u=>g(u),children:[e.jsx(L,{id:"outlined-basic",label:l(t.entrer.quantity),variant:"outlined",onBlur:a.handleBlur,fullWidth:!0,type:"number",name:"quantity",onChange:a.handleChange,value:a.values.quantity,error:!!(a.touched.quantity&&a.errors.quantity),helperText:a.touched.quantity&&a.errors.quantity,style:{marginBottom:"15px"}}),e.jsx(L,{id:"outlined-basic",label:l(t.entrer.prix),variant:"outlined",onBlur:a.handleBlur,fullWidth:!0,type:"number",name:"price",onChange:a.handleChange,value:a.values.price,error:!!(a.touched.price&&a.errors.price),helperText:a.touched.price&&a.errors.price,style:{marginBottom:"15px"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:l(t.entrer.updateTitleDetails)})]})]})}),e.jsx(me,{confirmed:()=>B(),cancel:()=>i(d.actions.openCloseConfirm()),isConfirm:x})]})}function it(){const{isModalAdd:i,isModalUpdate:l,isModalAddDetails:s,isModalUpdateDetails:n}=P(a=>a.entrer),h=re("batimens",ne.getBatimentSelect),x=re("magazins",ne.getWarehouseSelect),o=re("classLists",ne.getClass);return e.jsxs(Z,{component:"main",sx:{flexGrow:1,p:3},children:[e.jsx(Ce,{children:e.jsx(Ge,{batiment:h.data,magazin:x.data})}),i&&e.jsx(Ze,{batiment:h.data,magazin:x.data}),l&&e.jsx(Qe,{batiment:h.data,magazin:x.data}),s&&e.jsx(st,{eggClass:o.data}),n&&e.jsx(lt,{eggClass:o.data}),e.jsx(et,{})]})}function Ct(){const i=JSON.parse(sessionStorage.getItem("user")),{t:l,i18n:s}=A(),n=i!=null&&i.is_eleveur?l(t.nav.production):l(t.nav.achat);return e.jsxs(e.Fragment,{children:[e.jsx(qe,{title:`ESM | ${n}`}),e.jsx(Ce,{children:e.jsx(it,{})})]})}export{Ct as default};
