import{c as we,j as e,r as C,at as Be,a2 as P,d as I,B as me,a3 as Ne,l as t,a1 as Y,V as Z,al as Te,bf as d,h as V,ab as G,ac as H,ad as K,ae as O,i as _e,a as F,a6 as z,T as Q,a7 as ee,F as le,Y as A,an as ke,ao as Me,U as oe,bg as xe,k as L,S as Ee}from"./index-5da57776.js";import{e as pe,T as je,a as ge,b as R,c as f,d as fe,P as qe,f as Fe,G as T,u as re,S as M,h as ie,B as te,E as Ce}from"./moment-60dfa4f6.js";import{E as be,P as Ae,M as Ie}from"./ModalDelete-08369dbd.js";import{T as We,C as ae}from"./TableRowsLoader-2200d224.js";import{A as $e}from"./AlertError-dc33b758.js";import{K as Oe,a as Pe,A as Ve,T as ze}from"./KeyboardArrowUp-7956d9eb.js";import{D as Ue}from"./DeleteOutlineOutlined-a09c2912.js";import{u as se,c as ce,e as ve,C as De,b as Re,d as de}from"./formik.esm-ec72eb0c.js";import{A as Ye,a as Le,F as Je,b as Ge,m as J}from"./fr-f51f55a1.js";import{E as He}from"./ExpandMore-5c6293d0.js";import{D as ye}from"./DatePicker-598a5ad6.js";import{C as Ke}from"./Container-45fc29ac.js";import{M as he}from"./ModalConfirm-f38340a1.js";import{D as Se}from"./DateTimePicker-a3305734.js";import"./Tabs-d5cb80ae.js";const Qe=we(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),Xe=C.memo(l=>{const i=Be(),s=P();let{count:r=0,items:m=[],onDeselectAll:x,onDeselectOne:o,onSelectAll:a,onSelectOne:j,selected:B=[],isLoading:h,isError:v}=l;const[n,N]=C.useState(1),[E,u]=C.useState(25),y=JSON.parse(sessionStorage.getItem("user")),{t:S,i18n:q}=I(),[k,ue]=C.useState({}),W=g=>{ue(_=>({..._,[g]:!_[g]}))},X=(g,_)=>{const c=m.filter(w=>w.id==g)[0];switch(s(d.actions.setCurrentData(c)),_){case"update":s(d.actions.openCloseModalUpdate());break;case"delete":s(d.actions.openCloseModalDelete());break;case"addDetails":s(d.actions.openCloseModalAddDetails());break}},p=(g,_)=>{N(_)},$=m==null?void 0:m.slice((n-1)*E,n*E);return C.useEffect(()=>{N(1)},[m]),e.jsxs(me,{sx:{position:"relative"},children:[e.jsx(pe,{component:Ne,children:e.jsxs(je,{sx:{minWidth:700,"& .MuiTableCell-body":{padding:"2px 18px"}},size:"small","aria-label":"a dense table",children:[e.jsx(ge,{children:e.jsxs(R,{children:[e.jsx(f,{align:"left"}),e.jsx(f,{align:"left",children:y!=null&&y.is_eleveur?S(t.batiment.Nom):S(t.fournisseur.Nom)}),e.jsx(f,{align:"left",children:S(t.magazin.Nom)}),e.jsx(f,{align:"left",children:S(t.entrer.date)}),e.jsx(f,{align:"left",children:S(t.entrer.temps)}),e.jsx(f,{align:"left"})]})}),h?e.jsx(We,{rowsNum:10}):e.jsx(fe,{children:($==null?void 0:$.length)>0?$==null?void 0:$.map((g,_)=>{const c=k[g.id]||!1;let w=new Date(g.date),D={year:w.getFullYear(),month:`${w.getMonth()+1}`,day:`${w.getDate()}`};return e.jsxs(e.Fragment,{children:[e.jsxs(R,{hover:!1,sx:{backgroundColor:_%2!==0?c?i.palette.mode=="dark"?i.palette.primary.dark:i.palette.primary.light:i.palette.mode==="dark"?i.palette.grey[900]:i.palette.grey[100]:c?i.palette.mode=="dark"?i.palette.primary.dark:i.palette.primary.light:"transparent"},children:[e.jsx(f,{children:g.inbound_details.length!==0&&e.jsx(Y,{"aria-label":"expand row",size:"small",onClick:()=>W(g.id),children:c?e.jsx(Oe,{}):e.jsx(Pe,{})})}),e.jsxs(f,{align:"left",children:[g.eggsource_name," ",g.eggsource_lastname]}),e.jsx(f,{align:"left",children:g.warehouse_name}),e.jsxs(f,{align:"left",children:[D.day.padStart(2,0),"/",D.month.padStart(2,0),"/",D.year]}),e.jsx(f,{align:"left",children:g.time.substring(0,5)}),e.jsxs(f,{children:[e.jsx(Y,{color:"warning",onClick:()=>X(g.id,"update"),children:e.jsx(Z,{children:e.jsx(be,{})})}),e.jsx(Y,{color:"error",onClick:()=>X(g.id,"delete"),children:e.jsx(Z,{children:e.jsx(Ue,{})})}),g.inbound_details.length==0&&e.jsx(Y,{color:"success",onClick:()=>X(g.id,"addDetails"),children:e.jsx(Z,{children:e.jsx(Qe,{})})})]})]},g.id),e.jsx(R,{children:e.jsx(f,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e.jsx(Te,{in:c,timeout:"auto",unmountOnExit:!0,children:e.jsx(pe,{children:e.jsxs(je,{children:[e.jsx(ge,{children:e.jsxs(R,{children:[e.jsxs(f,{children:[S(t.sortie.eggType)," "]}),e.jsx(f,{children:S(t.entrer.quantity)}),!(y!=null&&y.is_eleveur)&&e.jsxs(f,{children:[S(t.entrer.prix)," ",S(t.global.mad)]}),e.jsx(f,{})]})}),e.jsx(fe,{children:g.inbound_details.map((b,ne)=>e.jsxs(R,{sx:{backgroundColor:ne%2!==0?i.palette.mode==="dark"?i.palette.grey[900]:i.palette.grey[100]:"transparent","&:hover":{backgroundColor:i.palette.mode==="dark"?i.palette.grey[800]:i.palette.grey[200]}},children:[e.jsx(f,{children:b.egg_class}),e.jsx(f,{children:b.quantity}),!(y!=null&&y.is_eleveur)&&e.jsx(f,{children:b.price}),e.jsxs(f,{children:[" ",e.jsx(Y,{color:"info",onClick:()=>s(d.actions.setCurrentDetailData({id:g.id,id_details:b.id})),children:e.jsx(Z,{children:e.jsx(be,{})})})]})]},ne))})]})})})})})]})}):e.jsx(R,{children:e.jsx(f,{colSpan:7,sx:{textAlign:"center"},children:S(t.magazin.nothingToDisplay)})})})]})}),e.jsx(me,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(qe,{count:Math.ceil(r/E),defaultPage:n,onChange:p,color:"primary",size:"large"})}),v&&e.jsx($e,{})]})});function Ze({batiment:l,magazin:i}){Fe.locale("fr");const{t:s,i18n:r}=I(),m=P(),x=JSON.parse(sessionStorage.getItem("user")),o=se({initialValues:{date1:null,date2:null,warehouse:"",eggsource:""},validationSchema:ce({date1:ve().nullable().test("is-before-date2",s(t.global.date2Greather),function(a){const{date2:j}=this.parent;return a<=j}),date2:ve().nullable().test("is-after-date1",s(t.global.date2Greather),function(a){const{date1:j}=this.parent;return a>=j})}),onSubmit:async(a,{resetForm:j,setErrors:B})=>{let h="";for(let v in a)if(a[v]!==""&&a[v]!==null){let n=new Date(a[v]),N=n.getFullYear()!==1970?`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`:a[v];h==""?h+=`?${v}=${N}`:h+=`&${v}=${N}`}if(a.date1!==null&&a.date2==null){B({date2:s(t.global.date2Required)});return}else if(a.date1==null&&a.date2!==null){B({date1:s(t.global.date1Required)});return}V.get("/inbound/list/"+h).then(v=>{m(d.actions.fetchEntrer(v.data))})},onReset:()=>{V.get("/inbound/list/").then(a=>{m(d.actions.fetchEntrer(a.data))})}});return e.jsxs(Ye,{defaultExpanded:!0,children:[e.jsx(Le,{expandIcon:e.jsx(He,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(Je,{}),s(t.global.filter)]})}),e.jsx(Ge,{children:e.jsx(De,{children:e.jsx(Re,{children:e.jsxs("form",{noValidate:!0,onSubmit:o.handleSubmit,onReset:o.handleReset,children:[e.jsxs(T,{container:!0,alignItems:"center",gap:2,children:[e.jsx(T,{item:!0,xs:12,md:2.5,sm:12,children:e.jsxs(G,{fullWidth:!0,children:[e.jsx(H,{id:"batiment-id",children:x!=null&&x.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom)}),e.jsx(K,{labelId:"batiment-id",id:"demo-simple-select",onBlur:o.handleBlur,fullWidth:!0,name:"eggsource",onChange:o.handleChange,value:o.values.eggsource,label:x!=null&&x.is_eleveur?s(t.batiment.Nom):s(t.fournisseur.Nom),children:l==null?void 0:l.map(a=>e.jsxs(O,{value:a.id,children:[a.name," ",a.last_name]}))})]})}),e.jsx(T,{items:!0,xs:12,md:2.5,sm:12,children:e.jsxs(G,{fullWidth:!0,children:[e.jsx(H,{id:"batiment-id",children:s(t.magazin.Nom)}),e.jsx(K,{labelId:"batiment-id",id:"demo-simple-select",onBlur:o.handleBlur,fullWidth:!0,name:"warehouse",onChange:o.handleChange,value:o.values.warehouse,label:s(t.batiment.Nom),children:i==null?void 0:i.map(a=>e.jsx(O,{value:a.id,children:a.name}))})]})}),e.jsx(T,{item:!0,xs:12,md:2.5,sm:12,children:e.jsx(ye,{value:o.values.date1,onChange:a=>o.setFieldValue("date1",a),onBlur:o.handleBlur,label:s(t.global.date1),name:"date1",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(o.touched.date1&&o.errors.date1),helperText:o.touched.date1&&o.errors.date1}}})}),e.jsx(T,{item:!0,xs:12,md:2.5,sm:12,children:e.jsx(ye,{value:o.values.date2,onChange:a=>o.setFieldValue("date2",a),onBlur:o.handleBlur,label:s(t.global.date2),name:"date2",sx:{width:"100%"},slotProps:{textField:{variant:"outlined",error:!!(o.touched.date2&&o.errors.date2),helperText:o.touched.date2&&o.errors.date2}}})})]}),e.jsxs(_e,{direction:"row",justifyContent:"end",spacing:2,mt:2,children:[e.jsx(F,{variant:"contained",type:"reset",children:s(t.global.reset)}),e.jsx(F,{type:"submit",variant:"contained",children:s(t.global.filter)})]})]})})})})]})}function et({batiment:l,magazin:i}){const s=P(),{t:r,i18n:m}=I(),{entrer:x}=z(j=>j.entrer),o=re("entrers",ie.getEntrer),a=JSON.parse(sessionStorage.getItem("user"));return C.useEffect(()=>{o.status=="success"&&s(d.actions.fetchEntrer(o.data))},[o.status]),e.jsx(Ke,{maxWidth:"xl",children:e.jsxs(M,{spacing:4,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(M,{spacing:1,children:e.jsx(Q,{variant:"h4",children:a!=null&&a.is_eleveur?r(t.entrer.titleBreeder):r(t.entrer.titleDealer)})}),e.jsx(M,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(F,{startIcon:e.jsx(Z,{children:e.jsx(Ae,{})}),variant:"contained",onClick:()=>s(d.actions.openCloseModalAdd()),children:r(t.global.ajouter)})})]}),e.jsxs(De,{children:[e.jsx(Ze,{batiment:l,magazin:i}),e.jsx(Xe,{items:x,isLoading:o.isLoading,count:x.length,rowsPerPage:25,isError:o.isError})]})]})})}const tt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function at({batiment:l,magazin:i}){J.locale("fr");const s=JSON.parse(sessionStorage.getItem("user")),r=P(),{t:m,i18n:x}=I(),{currentData:o,isModalUpdate:a,isConfirm:j}=z(u=>u.entrer),[B,h]=C.useState(new Date),v=ce({warehouse:de().required(),eggsource:de().required()}),n=se({initialValues:{warehouse:"",eggsource:"",dateTime:""},validationSchema:v,onSubmit:async(u,{resetForm:y,setErrors:S})=>{let q={...u};q.date=J(B).format("YYYY-MM-DD"),q.time=J(B).format("LT"),V.put("/inbound/update/",q).then(k=>{r(d.actions.editEntrer(k.data)),r(d.actions.openCloseModalUpdate()),r(d.actions.openCloseConfirm()),A.success(s!=null&&s.is_eleveur?m(t.entrer.toastUpdateSuccessBreeder):m(t.entrer.toastUpdateSuccessDealer)),y()}).catch(k=>{r(d.actions.openCloseConfirm()),A.error(m(t.global.toastError))})}}),N=async u=>{u.preventDefault();const y=await n.validateForm();Object.keys(y).length===0?r(d.actions.openCloseConfirm()):await n.submitForm()},E=()=>{n.handleSubmit()};return C.useEffect(()=>{n.setValues(o),h(new Date(`${o.date}T${o.time}`)),n.setFieldValue("dateTime",new Date,!1)},[n.errors]),e.jsxs(e.Fragment,{children:[e.jsx(ee,{open:a,onClose:()=>r(d.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(te,{sx:tt,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Q,{id:"modal-modal-title",variant:"h6",component:"h2",children:s!=null&&s.is_eleveur?m(t.entrer.updateBreeder):m(t.entrer.updateDealer)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>r(d.actions.openCloseModalUpdate()),children:e.jsx(ae,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:u=>N(u),children:[e.jsxs(G,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.eggsource&&n.errors.eggsource),children:[e.jsx(H,{id:"batiment-id",children:s!=null&&s.is_eleveur?m(t.batiment.Nom):m(t.fournisseur.Nom)}),e.jsx(K,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"eggsource",onChange:n.handleChange,value:n.values.eggsource,label:s!=null&&s.is_eleveur?m(t.batiment.Nom):m(t.fournisseur.Nom),children:l.map(u=>e.jsxs(O,{value:u.id,children:[u.name," ",u.last_name]}))}),n.touched.eggsource&&n.errors.eggsource&&e.jsx(le,{children:n.errors.eggsource})]}),e.jsxs(G,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.warehouse&&n.errors.warehouse),children:[e.jsx(H,{id:"batiment-id",children:m(t.magazin.Nom)}),e.jsx(K,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"warehouse",onChange:n.handleChange,value:n.values.warehouse,label:m(t.batiment.Nom),children:i.map(u=>e.jsx(O,{value:u.id,children:u.name}))}),n.touched.warehouse&&n.errors.warehouse&&e.jsx(le,{children:n.errors.warehouse})]}),e.jsx(Se,{id:"outlined-basic",label:m(t.entrer.temps)+" "+m(t.entrer.date),variant:"outlined",onBlur:n.handleBlur,fullWidth:!0,name:"dateTime",value:B,onChange:u=>{n.setFieldValue("dateTime",u,!0),h(u)},slotProps:{textField:{variant:"outlined",error:!!(n.touched.dateTime&&n.errors.dateTime),helperText:!!(n.touched.dateTime&&n.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:m(t.global.modifier)})]})]})}),e.jsx(he,{confirmed:E,cancel:()=>r(d.actions.openCloseConfirm()),isConfirm:j})]})}const st={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function nt({batiment:l,magazin:i}){J.locale("fr");const s=P(),{t:r,i18n:m}=I(),{entrer:x,isModalAdd:o,isConfirm:a}=z(u=>u.entrer),[j,B]=C.useState(new Date),h=JSON.parse(sessionStorage.getItem("user")),v=ce({warehouse:de().required(r(t.sortie.magazinRequired)),eggsource:de().required(h!=null&&h.is_eleveur?r(t.sortie.batimentRequired):r(t.sortie.fournisseurRequired))}),n=se({initialValues:{warehouse:"",eggsource:"",dateTime:""},validationSchema:v,onSubmit:async(u,{resetForm:y,setErrors:S})=>{let q={...u};q.date=J(j).format("YYYY-MM-DD"),q.time=J(j).format("LT"),V.post("/inbound/add/",q).then(k=>{s(d.actions.addEntrer(k.data)),s(d.actions.openCloseModalAdd()),s(d.actions.openCloseConfirm()),A.success(h!=null&&h.is_eleveur?r(t.entrer.toastAddSuccessBreeder):r(t.entrer.toastAddSuccessDealer)),y()}).catch(k=>{s(d.actions.openCloseConfirm()),A.error(r(t.entrer.toastError))})}}),N=async u=>{u.preventDefault();const y=await n.validateForm();Object.keys(y).length===0?s(d.actions.openCloseConfirm()):await n.submitForm()},E=()=>{n.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{open:o,onClose:()=>s(d.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(te,{sx:st,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Q,{id:"modal-modal-title",variant:"h6",component:"h2",children:h!=null&&h.is_eleveur?r(t.entrer.addBreeder):r(t.entrer.addDealer)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>s(d.actions.openCloseModalAdd()),children:e.jsx(ae,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:u=>N(u),children:[e.jsxs(G,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.eggsource&&n.errors.eggsource),children:[e.jsx(H,{id:"batiment-id",children:h!=null&&h.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom)}),e.jsx(K,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"eggsource",onChange:n.handleChange,value:n.values.eggsource,label:h!=null&&h.is_eleveur?r(t.batiment.Nom):r(t.fournisseur.Nom),children:l.length>0?l.map(u=>e.jsxs(O,{value:u.id,children:[u.name," ",u.last_name]},u.id)):e.jsx(O,{children:r(t.batiment.nothingToDisplay)})}),n.touched.eggsource&&n.errors.eggsource&&e.jsx(le,{children:n.errors.eggsource})]}),e.jsxs(G,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(n.touched.warehouse&&n.errors.warehouse),children:[e.jsx(H,{id:"batiment-id",children:r(t.magazin.Nom)}),e.jsx(K,{labelId:"batiment-id",id:"demo-simple-select",onBlur:n.handleBlur,fullWidth:!0,name:"warehouse",onChange:n.handleChange,value:n.values.warehouse,label:r(t.batiment.Nom),children:i.length>0?i.map(u=>e.jsx(O,{value:u.id,children:u.name},u.id)):e.jsx(O,{children:r(t.batiment.nothingToDisplay)})}),n.touched.warehouse&&n.errors.warehouse&&e.jsx(le,{children:n.errors.warehouse})]}),e.jsx(Se,{id:"outlined-basic",label:r(t.entrer.temps)+" "+r(t.entrer.date),variant:"outlined",onBlur:n.handleBlur,fullWidth:!0,name:"dateTime",value:j,onChange:u=>{n.setFieldValue("dateTime",u,!0),B(u)},slotProps:{textField:{variant:"outlined",error:!!(n.touched.dateTime&&n.errors.dateTime),helperText:!!(n.touched.dateTime&&n.errors.dateTime)}},sx:{marginBottom:"15px",width:"100%"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:r(t.global.ajouter)})]})]})}),e.jsx(he,{confirmed:E,cancel:()=>s(d.actions.openCloseConfirm()),isConfirm:a})]})}function rt(){const{currentData:l,isModalDelete:i}=z(j=>j.entrer),s=P(),{t:r,i18n:m}=I(),x=JSON.parse(sessionStorage.getItem("user")),o=()=>{V.delete(`/inbound/delete/${l.id}`).then(j=>{s(d.actions.deleteEntrer()),s(d.actions.openCloseModalDelete()),A.success(x!=null&&x.is_eleveur?r(t.entrer.toastDeleteSuccessBreeder):r(t.entrer.toastDeleteSuccessDealer))}).catch(j=>{s(d.actions.openCloseModalDelete()),A.error(r(t.entrer.toastError))})},a=`${x!=null&&x.is_eleveur?r(t.entrer.deleteDescriptionBreeder):r(t.entrer.deleteDescriptionDealer)}`;return e.jsx(ee,{open:i,onClose:()=>s(d.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Ie,{title:x!=null&&x.is_eleveur?r(t.entrer.deleteTitleBreeder):r(t.entrer.deleteTitleDealer),message:a,deleteFn:o,cancel:()=>s(d.actions.openCloseModalDelete())})})}function it({title:l,closeFunction:i}){return e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px",p:"1px"},children:[e.jsx(Q,{id:"modal-modal-title",variant:"h6",component:"h2",children:l}),e.jsx("div",{className:"cursor-pointer",onClick:()=>i(),children:e.jsx(ae,{})})]})}const lt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:2};function ot({eggClass:l}){const i=P(),{t:s,i18n:r}=I(),{entrer:m,currentData:x,isModalAddDetails:o}=z(c=>c.entrer),a=JSON.parse(sessionStorage.getItem("user")),[j,B]=C.useState(0),[h,v]=C.useState(0),[n,N]=C.useState(0),[E,u]=C.useState({}),[y,S]=C.useState(0),[q,k]=C.useState(!1),ue=l==null?void 0:l.findIndex(c=>c.egg_class_id==10),[W,X]=C.useState({Normaux:[],Declasse:[]}),p=se({initialValues:{},validationSchema:"",onSubmit:async(c,{resetForm:w,setErrors:D})=>{const b=Object.keys(c).map(U=>({option:c[U].option,price:c[U].pu,quantity:c[U].qte}));let ne={id:x.id,values:b};V.post("/inbound/detail/add/",ne).then(U=>{i(d.actions.addDetailsEnter({details:U.data,id:x.id})),A.success(s(t.entrer.toastAddSuccess)),k(!1),w()}).catch(U=>{i(d.actions.openCloseConfirm()),A.error(s(t.global.toastError))})}}),$=c=>{c.preventDefault(),k(!0)},g=()=>{p.handleSubmit()},_=c=>w=>{if(w.target.name.includes("qte")||w.target.name.includes("pu")){B(0),v(0),S(0);for(let D in p.values)a!=null&&a.is_eleveur||(S(b=>Number(b+p.values[D].pu*p.values[D].qte).toFixed(2)),u(b=>({...b,[D]:Number(p.values[D].pu*p.values[D].qte).toFixed(2)}))),p.values[D].option<=6?B(b=>b+p.values[D].qte):p.values[D].option==10?N(p.values[D].qte):v(b=>b+p.values[D].qte)}c(w)};return C.useEffect(()=>{let c={};l==null||l.map(b=>{c[b.id]={qte:0,pu:0,option:b.egg_class_id}});const w=l==null?void 0:l.filter(b=>b.egg_class_id<=6),D=l==null?void 0:l.filter(b=>b.egg_class_id>=7);X({Normaux:w,Declasse:D}),p.setValues(c)},[]),e.jsxs(e.Fragment,{children:[Object.keys(p.values).length!==0&&e.jsxs(ke,{fullScreen:!0,open:o,onClose:()=>i(d.actions.openCloseModalAddDetails()),children:[e.jsx(Ve,{sx:{position:"relative"},children:e.jsxs(ze,{children:[e.jsx(Y,{edge:"start",color:"inherit",onClick:()=>i(d.actions.openCloseModalAddDetails()),"aria-label":"close",children:e.jsx(ae,{})}),e.jsx(Q,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a!=null&&a.is_eleveur?s(t.entrer.addDetailsBreeder):s(t.entrer.addDetailsDealer)})]})}),e.jsx(Me,{sx:{p:1},children:e.jsxs("form",{noValidate:!0,onSubmit:c=>$(c),children:[e.jsxs(T,{container:!0,spacing:2,children:[W.Normaux.length>0&&e.jsxs(T,{item:!0,spacing:2,xs:12,md:6,children:[e.jsxs("h1",{className:"font-bold text-center text-lg",children:[s(t.entrer.nomeaux)," "]}),W.Normaux.map((c,w)=>e.jsxs(T,{item:!0,xs:12,mt:1,children:[e.jsx(oe,{children:e.jsx(xe,{label:c.value,size:"small"})}),e.jsxs(M,{direction:"row",alignItems:"center",justifyItems:"center",flexWrap:"wrap",gap:1,mt:2,children:[e.jsx(L,{id:"outlined-basic",label:s(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.qte`,onBlur:_(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].qte,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsx(L,{id:"outlined-basic",label:s(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.pu`,onBlur:_(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].pu,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsxs("span",{style:{flexBasis:"100%",textAlign:r.language=="ar"?"right":"left"},children:[s(t.entrer.total)," ",E[c.id]]})]})]}))]}),e.jsxs(T,{item:!0,spacing:2,xs:12,md:6,children:[W.Declasse.length>0&&e.jsx("h1",{className:"font-bold text-center text-lg",children:s(t.entrer.declasse)}),W.Declasse.map((c,w)=>e.jsxs(T,{item:!0,xs:12,mt:1,children:[e.jsx(oe,{children:e.jsx(xe,{label:`${c.value}`,size:"small"})}),e.jsxs(M,{direction:"row",alignItems:"center",justifyItems:"center",flexWrap:"wrap",gap:1,mt:2,children:[e.jsx(L,{id:"outlined-basic",label:c.egg_class_id==10?`${s(t.entrer.quantity)} (kg)`:s(t.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.qte`,onBlur:_(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].qte,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsx(L,{id:"outlined-basic",label:s(t.entrer.prix),variant:"outlined",fullWidth:!0,type:"number",name:`${c.id}.pu`,onBlur:_(p.handleBlur),onChange:p.handleChange,value:p.values[c.id].pu,style:{flexBasis:a!=null&&a.is_eleveur?"100%":"48%"}}),!(a!=null&&a.is_eleveur)&&e.jsxs("span",{style:{flexBasis:"100%",textAlign:r.language=="ar"?"right":"left"},children:[s(t.entrer.total)," ",E[c.id]]})]})]})),e.jsx(M,{sx:{backgroundColor:c=>c.palette.mode==="dark"?"neutral.800":"error.lightest",borderRadius:2.5,p:1,mt:3},children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-around mb-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[s(t.entrer.nomeaux)," : "]}),e.jsx("p",{children:j})]}),W.Declasse.length>0&&e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[s(t.entrer.declasse)," : "]}),e.jsx("p",{children:h})]}),ue!==-1&&e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[s(t.entrer.eliminer)," : "]}),e.jsxs("p",{children:[n,"kg"]})]}),e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:s(t.entrer.total)}),e.jsx("p",{children:j+h})]}),!(a!=null&&a.is_eleveur)&&e.jsxs(e.Fragment,{children:[" ",e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:s(t.entrer.totalPrice)}),e.jsx("p",{children:y})]})]})]})}),W.Declasse.length==0&&e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2,mb:2},type:"submit",variant:"contained",children:a!=null&&a.is_eleveur?s(t.entrer.addDetailsBreeder):s(t.entrer.addDetailsDealer)})]})]}),W.Declasse.length>0&&e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:1,mb:1},type:"submit",variant:"contained",children:s(t.global.ajouter)})]})})]}),e.jsx(dt,{isOpen:q,confirmed:g,close:()=>{k(!1)},data:{type1:j,type2:h,weight:n}})]})}const dt=({isOpen:l,confirmed:i,close:s,data:r})=>{const{t:m,i18n:x}=I();return e.jsx(ee,{open:l,children:e.jsxs(te,{sx:lt,children:[e.jsx(it,{title:m(t.client.confirmOperation),closeFunction:s}),e.jsxs("div",{className:"flex justify-around mb-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:"Normaux : "}),e.jsx("p",{children:r.type1})]}),e.jsx(oe,{}),e.jsxs("div",{className:"flex justify-around my-2",children:[e.jsx("h3",{className:"w-28 font-bold",children:"Déclassés : "}),e.jsxs("p",{children:[r.type2," + ",r.weight," kg"]})]}),e.jsx(oe,{}),e.jsxs("div",{className:"flex justify-around mt-2",children:[e.jsxs("h3",{className:"w-28 font-bold",children:[m(t.entrer.total)," "]}),e.jsx("p",{children:r.type1+r.type2})]}),e.jsxs(T,{container:!0,mt:3,spacing:2,children:[e.jsx(T,{item:!0,xs:6}),e.jsx(T,{item:!0,xs:3,children:e.jsx(F,{variant:"contained",color:"error",onClick:s,children:m(t.client.deleteCancel)})}),e.jsx(T,{item:!0,xs:3,children:e.jsx(F,{variant:"contained",color:"success",onClick:i,children:m(t.client.deleteConfirm)})})]})]})})},ct={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ut(){const l=P(),{t:i,i18n:s}=I(),{currentDetailData:r,isModalUpdateDetails:m,isConfirm:x}=z(h=>h.entrer),o=ce({}),a=se({initialValues:{quantity:0,price:0},validationSchema:o,onSubmit:async(h,{resetForm:v,setErrors:n})=>{V.put("/inbound/detail/update/",h).then(N=>{l(d.actions.updateDetailsLignes({id:h.inbound,id_details:h.id,details:N.data})),l(d.actions.openCloseModalUpdateDetails()),l(d.actions.openCloseConfirm()),A.success(i(t.entrer.toastAddSuccess)),v()}).catch(N=>{l(d.actions.openCloseConfirm()),l(d.actions.openCloseConfirm()),A.error(i(t.entrer.toastError))})}}),j=h=>{h.preventDefault(),l(d.actions.openCloseConfirm())},B=()=>{a.handleSubmit()};return C.useEffect(()=>{console.log(r),a.setValues(r)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(ee,{open:m,onClose:()=>l(d.actions.openCloseModalUpdateDetails()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(te,{sx:ct,children:[e.jsxs(M,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(Q,{id:"modal-modal-title",variant:"h6",component:"h2",children:i(t.entrer.updateTitleDetails)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>l(d.actions.openCloseModalUpdateDetails()),children:e.jsx(ae,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:h=>j(h),children:[e.jsx(L,{id:"outlined-basic",label:i(t.entrer.quantity),variant:"outlined",onBlur:a.handleBlur,fullWidth:!0,type:"number",name:"quantity",onChange:a.handleChange,value:a.values.quantity,error:!!(a.touched.quantity&&a.errors.quantity),helperText:a.touched.quantity&&a.errors.quantity,style:{marginBottom:"15px"}}),e.jsx(L,{id:"outlined-basic",label:i(t.entrer.prix),variant:"outlined",onBlur:a.handleBlur,fullWidth:!0,type:"number",name:"price",onChange:a.handleChange,value:a.values.price,error:!!(a.touched.price&&a.errors.price),helperText:a.touched.price&&a.errors.price,style:{marginBottom:"15px"}}),e.jsx(F,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:i(t.entrer.updateTitleDetails)})]})]})}),e.jsx(he,{confirmed:()=>B(),cancel:()=>l(d.actions.openCloseConfirm()),isConfirm:x})]})}function ht(){const{isModalAdd:l,isModalUpdate:i,isModalAddDetails:s,isModalUpdateDetails:r}=z(a=>a.entrer),m=re("batimens",ie.getBatimentSelect),x=re("magazins",ie.getWarehouseSelect),o=re("classLists",ie.getClass);return e.jsxs(te,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(Ce,{children:e.jsx(et,{batiment:m.data,magazin:x.data})}),l&&e.jsx(nt,{batiment:m.data,magazin:x.data}),i&&e.jsx(at,{batiment:m.data,magazin:x.data}),s&&e.jsx(ot,{eggClass:o.data}),r&&e.jsx(ut,{eggClass:o.data}),e.jsx(rt,{})]})}function Tt(){const l=JSON.parse(sessionStorage.getItem("user")),{t:i,i18n:s}=I(),r=l!=null&&l.is_eleveur?i(t.nav.production):i(t.nav.achat);return e.jsxs(e.Fragment,{children:[e.jsx(Ee,{title:`ESM | ${r}`}),e.jsx(Ce,{children:e.jsx(ht,{})})]})}export{Tt as default};
