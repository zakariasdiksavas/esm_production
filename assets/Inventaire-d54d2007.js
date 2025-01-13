import{n as ae,o as se,s as E,q as te,_ as k,r as g,x as ie,y as oe,bi as be,bj as je,T as V,j as e,z as K,A as le,c as ve,bk as Me,t as Pe,bl as _e,bm as Fe,bn as De,bo as Ne,a2 as G,d as W,B as he,a3 as $e,l as r,a1 as pe,V as ne,bp as x,h as O,ab as P,ac as D,ad as N,ae as T,i as qe,a as Y,a6 as J,a7 as de,F as A,k as Ce,Y as _,S as Ee}from"./index-8b885c7c.js";import{e as We,T as Le,a as Ae,b as re,c as R,d as ze,P as Ge,f as Ue,G as S,u as Q,S as L,h as Z,B as ce,E as ye}from"./moment-a4ec633c.js";import{E as Ve,P as Oe,M as Ye}from"./ModalDelete-526b766f.js";import{T as Je,C as Se}from"./TableRowsLoader-05c4d608.js";import{A as He}from"./AlertError-c105f592.js";import{D as Qe}from"./DeleteOutlineOutlined-e0c3d916.js";import{u as ue,c as me,C as we,b as Ze,d as $}from"./formik.esm-8d1d4924.js";import{A as Ke,a as Xe,F as et,b as tt}from"./fr-f2ae4e07.js";import{E as ot}from"./ExpandMore-b942b62b.js";import{C as rt}from"./Container-d358c3d2.js";import{M as Re}from"./ModalConfirm-d235208a.js";import{m as z}from"./moment-52369269.js";import{S as nt}from"./SwitchBase-ecca83f5.js";import{D as Be}from"./DateTimePicker-a2159221.js";import"./Tabs-bdff0dea.js";function at(o){return se("MuiFormControlLabel",o)}const st=ae("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),U=st,it=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],lt=o=>{const{classes:n,disabled:d,labelPlacement:a,error:t,required:p}=o,m={root:["root",d&&"disabled",`labelPlacement${te(a)}`,t&&"error",p&&"required"],label:["label",d&&"disabled"],asterisk:["asterisk",t&&"error"]};return le(m,at,n)},dt=E("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:d}=o;return[{[`& .${U.label}`]:n.label},n.root,n[`labelPlacement${te(d.labelPlacement)}`]]}})(({theme:o,ownerState:n})=>k({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${U.disabled}`]:{cursor:"default"}},n.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},n.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},n.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${U.label}`]:{[`&.${U.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),ct=E("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,n)=>n.asterisk})(({theme:o})=>({[`&.${U.error}`]:{color:(o.vars||o).palette.error.main}})),ut=g.forwardRef(function(n,d){var a,t;const p=ie({props:n,name:"MuiFormControlLabel"}),{className:m,componentsProps:u={},control:l,disabled:w,disableTypography:f,label:b,labelPlacement:s="end",required:i,slotProps:B={}}=p,h=oe(p,it),c=be(),I=(a=w??l.props.disabled)!=null?a:c==null?void 0:c.disabled,j=i??l.props.required,v={disabled:I,required:j};["checked","name","onChange","value","inputRef"].forEach(H=>{typeof l.props[H]>"u"&&typeof p[H]<"u"&&(v[H]=p[H])});const C=je({props:p,muiFormControl:c,states:["error"]}),y=k({},p,{disabled:I,labelPlacement:s,required:j,error:C.error}),M=lt(y),F=(t=B.typography)!=null?t:u.typography;let q=b;return q!=null&&q.type!==V&&!f&&(q=e.jsx(V,k({component:"span"},F,{className:K(M.label,F==null?void 0:F.className),children:q}))),e.jsxs(dt,k({className:K(M.root,m),ownerState:y,ref:d},h,{children:[g.cloneElement(l,v),q,j&&e.jsxs(ct,{ownerState:y,"aria-hidden":!0,className:M.asterisk,children:[" ","*"]})]}))}),X=ut;function mt(o){return se("MuiFormGroup",o)}ae("MuiFormGroup",["root","row","error"]);const ht=["className","row"],pt=o=>{const{classes:n,row:d,error:a}=o;return le({root:["root",d&&"row",a&&"error"]},mt,n)},xt=E("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:d}=o;return[n.root,d.row&&n.row]}})(({ownerState:o})=>k({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),gt=g.forwardRef(function(n,d){const a=ie({props:n,name:"MuiFormGroup"}),{className:t,row:p=!1}=a,m=oe(a,ht),u=be(),l=je({props:a,muiFormControl:u,states:["error"]}),w=k({},a,{row:p,error:l.error}),f=pt(w);return e.jsx(xt,k({className:K(f.root,t),ownerState:w,ref:d},m))}),ft=gt,bt=ve(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),jt=ve(e.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),vt=E("span")({position:"relative",display:"flex"}),Ct=E(bt)({transform:"scale(1)"}),yt=E(jt)(({theme:o,ownerState:n})=>k({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function ke(o){const{checked:n=!1,classes:d={},fontSize:a}=o,t=k({},o,{checked:n});return e.jsxs(vt,{className:d.root,ownerState:t,children:[e.jsx(Ct,{fontSize:a,className:d.background,ownerState:t}),e.jsx(yt,{fontSize:a,className:d.dot,ownerState:t})]})}const St=g.createContext(void 0),Te=St;function wt(){return g.useContext(Te)}function Rt(o){return se("MuiRadio",o)}const Bt=ae("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),xe=Bt,kt=["checked","checkedIcon","color","icon","name","onChange","size","className"],Tt=o=>{const{classes:n,color:d}=o,a={root:["root",`color${te(d)}`]};return k({},n,le(a,Rt,n))},It=E(nt,{shouldForwardProp:o=>Me(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:d}=o;return[n.root,n[`color${te(d.color)}`]]}})(({theme:o,ownerState:n})=>k({color:(o.vars||o).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${n.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[n.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:Pe(n.color==="default"?o.palette.action.active:o.palette[n.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${xe.checked}`]:{color:(o.vars||o).palette[n.color].main}},{[`&.${xe.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function Mt(o,n){return typeof n=="object"&&n!==null?o===n:String(o)===String(n)}const ge=e.jsx(ke,{checked:!0}),fe=e.jsx(ke,{}),Pt=g.forwardRef(function(n,d){var a,t;const p=ie({props:n,name:"MuiRadio"}),{checked:m,checkedIcon:u=ge,color:l="primary",icon:w=fe,name:f,onChange:b,size:s="medium",className:i}=p,B=oe(p,kt),h=k({},p,{color:l,size:s}),c=Tt(h),I=wt();let j=m;const v=_e(b,I&&I.onChange);let C=f;return I&&(typeof j>"u"&&(j=Mt(I.value,p.value)),typeof C>"u"&&(C=I.name)),e.jsx(It,k({type:"radio",icon:g.cloneElement(w,{fontSize:(a=fe.props.fontSize)!=null?a:s}),checkedIcon:g.cloneElement(u,{fontSize:(t=ge.props.fontSize)!=null?t:s}),ownerState:h,classes:c,name:C,checked:j,onChange:v,ref:d,className:K(c.root,i)},B))}),ee=Pt,_t=["actions","children","defaultValue","name","onChange","value"],Ft=g.forwardRef(function(n,d){const{actions:a,children:t,defaultValue:p,name:m,onChange:u,value:l}=n,w=oe(n,_t),f=g.useRef(null),[b,s]=Fe({controlled:l,default:p,name:"RadioGroup"});g.useImperativeHandle(a,()=>({focus:()=>{let c=f.current.querySelector("input:not(:disabled):checked");c||(c=f.current.querySelector("input:not(:disabled)")),c&&c.focus()}}),[]);const i=De(d,f),B=Ne(m),h=g.useMemo(()=>({name:B,onChange(c){s(c.target.value),u&&u(c,c.target.value)},value:b}),[B,u,s,b]);return e.jsx(Te.Provider,{value:h,children:e.jsx(ft,k({role:"radiogroup",ref:i},w,{children:t}))})}),Ie=Ft,Dt=g.memo(o=>{const n=JSON.parse(sessionStorage.getItem("user")),d=G();let{count:a=0,items:t=[],onDeselectAll:p,onDeselectOne:m,onSelectAll:u,onSelectOne:l,selected:w=[],isLoading:f,isError:b}=o;const[s,i]=g.useState(1),[B,h]=g.useState(25),{t:c,i18n:I}=W(),j=(y,M)=>{let F=t.filter(q=>q.id==y);d(x.actions.setCurrentData(F[0])),d(M?x.actions.openCloseModalUpdate():x.actions.openCloseModalDelete())},v=(y,M)=>{i(M)},C=t==null?void 0:t.slice((s-1)*B,s*B);return g.useEffect(()=>{i(1)},[t]),e.jsxs(he,{sx:{position:"relative"},children:[e.jsx(We,{component:$e,children:e.jsxs(Le,{sx:{minWidth:700},children:[e.jsx(Ae,{children:e.jsxs(re,{children:[e.jsx(R,{children:n!=null&&n.is_eleveur?c(r.batiment.Nom):c(r.fournisseur.Nom)}),e.jsx(R,{children:c(r.magazin.title)}),e.jsx(R,{children:c(r.sortie.eggType)}),e.jsx(R,{children:c(r.entrer.quantity)}),e.jsx(R,{children:c(r.entrer.date)}),e.jsx(R,{children:c(r.entrer.temps)}),e.jsx(R,{})]})}),f?e.jsx(Je,{rowsNum:10}):e.jsx(ze,{children:(C==null?void 0:C.length)>0?C==null?void 0:C.map(y=>{let M=new Date(y.date),F={year:M.getFullYear(),month:`${M.getMonth()+1}`,day:`${M.getDate()}`};return e.jsxs(re,{hover:!0,children:[e.jsx(R,{children:y.eggsource_name}),e.jsx(R,{children:y.warehouse_name}),e.jsx(R,{children:y.eggclass_name}),e.jsxs(R,{sx:{direction:"initial",whiteSpace:"nowrap"},children:[y.is_positive?"+":"-",y.value.toLocaleString("en-US").replaceAll(","," ")]}),e.jsxs(R,{children:[F.day.padStart(2,0),"/",F.month.padStart(2,0),"/",F.year]}),e.jsx(R,{children:y.time.substring(0,5)}),e.jsxs(R,{children:[e.jsx(pe,{color:"warning",onClick:()=>j(y.id,!0),children:e.jsx(ne,{children:e.jsx(Ve,{})})}),e.jsx(pe,{color:"error",onClick:()=>j(y.id,!1),children:e.jsx(ne,{children:e.jsx(Qe,{})})})]})]},y.id)}):e.jsx(re,{children:e.jsx(R,{colSpan:5,sx:{textAlign:"center"},children:c(r.batiment.nothingToDisplay)})})})]})}),e.jsx(he,{sx:{display:"flex",justifyContent:"end",p:"5px"},children:e.jsx(Ge,{count:Math.ceil(a/B),defaultPage:s,onChange:v,color:"primary",size:"large"})}),b&&e.jsx(He,{})]})});function Nt({batiment:o,magazin:n,eggType:d}){Ue.locale("fr");const{t:a,i18n:t}=W(),p=G(),m=JSON.parse(sessionStorage.getItem("user")),u=ue({initialValues:{warehouse:"",eggsource:"",classe:""},validationSchema:me({}),onSubmit:async(l,{resetForm:w,setErrors:f})=>{let b="";for(let s in l)b==""?b+=`?${s}=${l[s]}`:b+=`&${s}=${l[s]}`;O.get("/inventory/list/"+b).then(s=>{p(x.actions.fetchInventaire(s.data))})},onReset:()=>{O.get("/inventory/list/").then(l=>{p(x.actions.fetchInventaire(l.data))})}});return e.jsxs(Ke,{defaultExpanded:!0,children:[e.jsx(Xe,{expandIcon:e.jsx(ot,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsxs("h3",{className:"font-bold text-lg",children:[e.jsx(et,{}),a(r.global.filter)]})}),e.jsx(tt,{children:e.jsx(we,{children:e.jsx(Ze,{children:e.jsxs("form",{noValidate:!0,onSubmit:u.handleSubmit,onReset:u.handleReset,children:[e.jsxs(S,{container:!0,alignItems:"center",gap:2,children:[e.jsx(S,{item:!0,xs:12,md:3.8,children:e.jsxs(P,{fullWidth:!0,children:[e.jsx(D,{id:"batiment-id",children:m!=null&&m.is_eleveur?a(r.batiment.Nom):a(r.fournisseur.Nom)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:u.handleBlur,fullWidth:!0,name:"eggsource",onChange:u.handleChange,value:u.values.eggsource,label:m!=null&&m.is_eleveur?a(r.batiment.Nom):a(r.fournisseur.Nom),children:o==null?void 0:o.map(l=>e.jsxs(T,{value:l.id,children:[l.name," ",l.last_name]}))})]})}),e.jsx(S,{items:!0,xs:12,md:3.8,children:e.jsxs(P,{fullWidth:!0,children:[e.jsx(D,{id:"batiment-id",children:a(r.magazin.Nom)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:u.handleBlur,fullWidth:!0,name:"warehouse",onChange:u.handleChange,value:u.values.warehouse,label:a(r.batiment.Nom),children:n==null?void 0:n.map(l=>e.jsx(T,{value:l.id,children:l.name}))})]})}),e.jsx(S,{items:!0,xs:12,md:3.8,children:e.jsxs(P,{fullWidth:!0,children:[e.jsx(D,{id:"batiment-id",children:a(r.magazin.Nom)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:u.handleBlur,fullWidth:!0,name:"classe",onChange:u.handleChange,value:u.values.classe,label:a(r.sortie.eggType),children:d==null?void 0:d.map(l=>e.jsx(T,{value:l.id,children:l.value}))})]})})]}),e.jsxs(qe,{direction:"row",justifyContent:"end",mt:2,spacing:2,children:[e.jsx(Y,{variant:"contained",type:"reset",children:a(r.global.reset)}),e.jsx(Y,{type:"submit",variant:"contained",children:a(r.global.filter)})]})]})})})})]})}function $t({magazin:o,batiment:n,eggType:d}){const a=G(),{t,i18n:p}=W(),{inventaire:m}=J(l=>l.inventaire),u=Q("inventaire",Z.getInventaire);return g.useEffect(()=>{u.status=="success"&&a(x.actions.fetchInventaire(u.data))},[u.status]),e.jsx(rt,{maxWidth:"xl",children:e.jsxs(L,{spacing:4,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",spacing:4,children:[e.jsx(L,{spacing:1,children:e.jsx(V,{variant:"h4",children:t(r.inventaire.title)})}),e.jsx(L,{alignItems:"center",direction:"row",spacing:3,children:e.jsx(Y,{startIcon:e.jsx(ne,{children:e.jsx(Oe,{})}),variant:"contained",onClick:()=>a(x.actions.openCloseModalAdd()),children:t(r.global.ajouter)})})]}),e.jsxs(we,{children:[e.jsx(Nt,{batiment:n,magazin:o,eggType:d}),e.jsx(Dt,{items:m,isLoading:u.isLoading,count:m.length,rowsPerPage:25,isError:u.isError})]})]})})}const qt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function Et({batiment:o,magazin:n,eggType:d}){z.locale("fr");const a=G(),{t,i18n:p}=W(),[m,u]=g.useState(new Date),l=JSON.parse(sessionStorage.getItem("user")),{isModalUpdate:w,currentData:f,isConfirm:b}=J(c=>c.inventaire),s=me({eggsource:$().required(l!=null&&l.is_eleveur?t(r.entrer.batimentRequired):t(r.entrer.fournisseurRequired)),warehouse:$().required(t(r.entrer.magazinRequired)),option:$().required(t(r.sortie.optionRequired)),value:$().required(t(r.sortie.quantityRequired))}),i=ue({initialValues:{eggsource:"",warehouse:"",option:"",value:"",is_positive:"true",dateTime:""},validationSchema:s,onSubmit:async(c,{resetForm:I,setErrors:j})=>{let v={...c};v.date=z(m).format("YYYY-MM-DD"),v.time=z(m).format("LT"),v.is_positive=v.is_positive=="true",O.put("/inventory/update/",v).then(C=>{a(x.actions.editInventaire(C.data)),a(x.actions.openCloseModalUpdate()),a(x.actions.openCloseConfirm()),_.success(t(r.inventaire.toastUpdateSuccess)),I()}).catch(C=>{if(a(x.actions.openCloseConfirm()),C.response.data==2){_.error(t(r.sortie.outOfStock));return}else C.response.data==1?_.error(t(r.sortie.noStockExist)):_.error(t(r.sortie.toastError))})}}),B=c=>{c.preventDefault(),a(x.actions.openCloseConfirm())},h=()=>{i.handleSubmit()};return g.useEffect(()=>{i.setValues(f),f.is_positive?i.setFieldValue("is_positive","true"):i.setFieldValue("is_positive","false"),u(new Date(`${f.date}T${f.time}`)),i.setFieldValue("dateTime",new Date,!1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(de,{open:w,onClose:()=>a(x.actions.openCloseModalUpdate()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ce,{sx:qt,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(V,{id:"modal-modal-title",variant:"h6",component:"h2",children:t(r.inventaire.update)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>a(x.actions.openCloseModalUpdate()),children:e.jsx(Se,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:c=>B(c),children:[e.jsxs(S,{container:!0,spacing:2,children:[e.jsx(S,{item:!0,xs:12,md:6,children:e.jsxs(P,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.eggsource&&i.errors.eggsource),children:[e.jsx(D,{id:"batiment-id",children:l!=null&&l.is_eleveur?t(r.batiment.Nom):t(r.fournisseur.Nom)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"eggsource",onChange:i.handleChange,value:i.values.eggsource,label:l!=null&&l.is_eleveur?t(r.batiment.Nom):t(r.fournisseur.Nom),children:o.length>0?o.map(c=>e.jsx(T,{value:c.id,children:c.name})):e.jsx(T,{children:t(r.batiment.nothingToDisplay)})}),i.touched.eggsource&&i.errors.eggsource&&e.jsx(A,{children:i.errors.eggsource})]})}),e.jsx(S,{item:!0,xs:12,md:6,children:e.jsxs(P,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.warehouse&&i.errors.warehouse),children:[e.jsx(D,{id:"batiment-id",children:t(r.magazin.title)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"warehouse",onChange:i.handleChange,value:i.values.warehouse,label:t(r.magazin.title),children:n.length>0?n.map(c=>e.jsx(T,{value:c.id,children:c.name})):e.jsx(T,{children:t(r.batiment.nothingToDisplay)})}),i.touched.warehouse&&i.errors.warehouse&&e.jsx(A,{children:i.errors.warehouse})]})}),e.jsx(S,{item:!0,xs:12,md:6,children:e.jsxs(P,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(i.touched.option&&i.errors.option),children:[e.jsx(D,{id:"batiment-id",children:t(r.sortie.eggType)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:i.handleBlur,fullWidth:!0,name:"option",onChange:i.handleChange,value:i.values.option,label:l!=null&&l.is_eleveur?t(r.batiment.Nom):t(r.fournisseur.Nom),children:d.map(c=>e.jsx(T,{value:c.id,children:c.value}))}),i.touched.option&&i.errors.option&&e.jsx(A,{children:i.errors.option})]})}),e.jsx(S,{item:!0,xs:12,md:6,children:e.jsx(Be,{id:"outlined-basic",label:t(r.entrer.temps)+" "+t(r.entrer.date),variant:"outlined",onBlur:i.handleBlur,fullWidth:!0,name:"dateTime",value:m,onChange:c=>{i.setFieldValue("dateTime",c,!0),u(c)},slotProps:{textField:{variant:"outlined",error:!!(i.touched.dateTime&&i.errors.dateTime),helperText:!!(i.touched.dateTime&&i.errors.dateTime)}},sx:{marginBottom:"15px",marginTop:"5px",width:"100%"}})}),e.jsxs(S,{item:!0,xs:12,children:[e.jsx(Ce,{id:"outlined-basic",label:t(r.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",onBlur:i.handleBlur,onChange:i.handleChange,value:i.values.value,error:!!(i.touched.value&&i.errors.value),helperText:i.touched.value&&i.errors.value,name:"value",style:{marginBottom:"1px"}}),e.jsx(P,{children:e.jsxs(Ie,{"aria-labelledby":"demo-radio-buttons-group-label",value:i.values.is_positive,onBlur:i.handleBlur,onChange:i.handleChange,name:"is_positive",children:[e.jsx(X,{name:"is_positive",value:"true",control:e.jsx(ee,{}),label:t(r.inventaire.increaseStock)}),e.jsx(X,{name:"is_positive",value:"false",control:e.jsx(ee,{}),label:t(r.inventaire.decreaseStock)})]})})]})]}),e.jsx(Y,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:t(r.global.modifier)})]})]})}),e.jsx(Re,{confirmed:h,cancel:()=>a(x.actions.openCloseConfirm()),isConfirm:b})]})}const Wt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function Lt({batiment:o,magazin:n,eggType:d}){z.locale("fr");const a=G(),{t,i18n:p}=W(),[m,u]=g.useState(new Date),l=JSON.parse(sessionStorage.getItem("user")),{isModalAdd:w,isConfirm:f}=J(h=>h.inventaire),b=me({eggsource:$().required(l!=null&&l.is_eleveur?t(r.entrer.batimentRequired):t(r.entrer.fournisseurRequired)),warehouse:$().required(t(r.entrer.magazinRequired)),option:$().required(t(r.sortie.optionRequired)),value:$().required(t(r.sortie.quantityRequired))}),s=ue({initialValues:{eggsource:"",warehouse:"",option:"",value:"",is_positive:"true",dateTime:""},validationSchema:b,onSubmit:async(h,{resetForm:c,setErrors:I})=>{let j={...h};j.date=z(m).format("YYYY-MM-DD"),j.time=z(m).format("LT"),j.is_positive=j.is_positive=="true",O.post("/inventory/add/",j).then(v=>{a(x.actions.addInventaire(v.data)),a(x.actions.openCloseModalAdd()),a(x.actions.openCloseConfirm()),_.success(t(r.inventaire.toastAddSuccess)),c()}).catch(v=>{if(a(x.actions.openCloseConfirm()),v.response.data==2){_.error(t(r.sortie.outOfStock));return}else v.response.data==1?_.error(t(r.sortie.noStockExist)):_.error(t(r.sortie.toastError))})}}),i=h=>{h.preventDefault(),a(x.actions.openCloseConfirm())},B=()=>{s.handleSubmit()};return e.jsxs(e.Fragment,{children:[e.jsx(de,{open:w,onClose:()=>a(x.actions.openCloseModalAdd()),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(ce,{sx:Wt,children:[e.jsxs(L,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"20px"},children:[e.jsx(V,{id:"modal-modal-title",variant:"h6",component:"h2",children:t(r.inventaire.add)}),e.jsx("div",{className:"cursor-pointer",onClick:()=>a(x.actions.openCloseModalAdd()),children:e.jsx(Se,{})})]}),e.jsxs("form",{noValidate:!0,onSubmit:h=>i(h),children:[e.jsxs(S,{container:!0,spacing:2,children:[e.jsx(S,{item:!0,xs:12,md:6,children:e.jsxs(P,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.eggsource&&s.errors.eggsource),children:[e.jsx(D,{id:"batiment-id",children:l!=null&&l.is_eleveur?t(r.batiment.Nom):t(r.fournisseur.Nom)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"eggsource",onChange:s.handleChange,value:s.values.eggsource,label:l!=null&&l.is_eleveur?t(r.batiment.Nom):t(r.fournisseur.Nom),children:o.length>0?o.map(h=>e.jsx(T,{value:h.id,children:h.name})):e.jsx(T,{children:t(r.batiment.nothingToDisplay)})}),s.touched.eggsource&&s.errors.eggsource&&e.jsx(A,{children:s.errors.eggsource})]})}),e.jsx(S,{item:!0,xs:12,md:6,children:e.jsxs(P,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.warehouse&&s.errors.warehouse),children:[e.jsx(D,{id:"batiment-id",children:t(r.magazin.title)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"warehouse",onChange:s.handleChange,value:s.values.warehouse,label:t(r.magazin.title),children:n.length>0?n.map(h=>e.jsx(T,{value:h.id,children:h.name})):e.jsx(T,{children:t(r.batiment.nothingToDisplay)})}),s.touched.warehouse&&s.errors.warehouse&&e.jsx(A,{children:s.errors.warehouse})]})}),e.jsx(S,{item:!0,xs:12,md:6,children:e.jsxs(P,{style:{marginBottom:"15px"},fullWidth:!0,error:!!(s.touched.option&&s.errors.option),children:[e.jsx(D,{id:"batiment-id",children:t(r.sortie.eggType)}),e.jsx(N,{labelId:"batiment-id",id:"demo-simple-select",onBlur:s.handleBlur,fullWidth:!0,name:"option",onChange:s.handleChange,value:s.values.option,label:l!=null&&l.is_eleveur?t(r.batiment.Nom):t(r.fournisseur.Nom),children:d.map(h=>e.jsx(T,{value:h.id,children:h.value}))}),s.touched.option&&s.errors.option&&e.jsx(A,{children:s.errors.option})]})}),e.jsx(S,{item:!0,xs:12,md:6,children:e.jsx(Be,{id:"outlined-basic",label:t(r.entrer.temps)+" "+t(r.entrer.date),variant:"outlined",onBlur:s.handleBlur,fullWidth:!0,name:"dateTime",value:m,onChange:h=>{s.setFieldValue("dateTime",h,!0),u(h)},slotProps:{textField:{variant:"outlined",error:!!(s.touched.dateTime&&s.errors.dateTime),helperText:!!(s.touched.dateTime&&s.errors.dateTime)}},sx:{marginBottom:"15px",marginTop:"5px",width:"100%"}})}),e.jsxs(S,{item:!0,xs:12,children:[e.jsx(Ce,{id:"outlined-basic",label:t(r.entrer.quantity),variant:"outlined",fullWidth:!0,type:"number",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.value,error:!!(s.touched.value&&s.errors.value),helperText:s.touched.value&&s.errors.value,name:"value",style:{marginBottom:"1px"}}),e.jsx(P,{children:e.jsxs(Ie,{"aria-labelledby":"demo-radio-buttons-group-label",value:s.values.is_positive,onBlur:s.handleBlur,onChange:s.handleChange,name:"is_positive",children:[e.jsx(X,{name:"is_positive",value:"true",control:e.jsx(ee,{}),label:t(r.inventaire.increaseStock)}),e.jsx(X,{name:"is_positive",value:"false",control:e.jsx(ee,{}),label:t(r.inventaire.decreaseStock)})]})})]})]}),e.jsx(Y,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:t(r.global.ajouter)})]})]})}),e.jsx(Re,{confirmed:B,cancel:()=>a(x.actions.openCloseConfirm()),isConfirm:f})]})}function At(){const{currentData:o,isModalDelete:n}=J(m=>m.inventaire),d=G(),{t:a,i18n:t}=W();JSON.parse(sessionStorage.getItem("user"));const p=()=>{O.delete(`/inventory/delete/${o.id}`).then(m=>{d(x.actions.deleteInventaire()),d(x.actions.openCloseModalDelete()),_.success(a(r.inventaire.toastDeleteSuccess))}).catch(m=>{d(x.actions.openCloseModalDelete()),_.error(a(r.global.toastError))})};return e.jsx(de,{open:n,onClose:()=>d(x.actions.openCloseModalDelete()),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsx(Ye,{title:a(r.inventaire.deleteTitle),message:a(r.inventaire.deleteDescription),deleteFn:p,cancel:()=>d(x.actions.openCloseModalDelete())})})}function zt(){const{isModalAdd:o,isModalUpdate:n}=J(p=>p.inventaire),d=Q("batiment",Z.getBatimentSelect),a=Q("magazin",Z.getWarehouseSelect),t=Q("eggType",Z.getClass);return e.jsxs(ce,{component:"main",sx:{flexGrow:1,py:8},children:[e.jsx(ye,{children:e.jsx($t,{magazin:a==null?void 0:a.data,batiment:d==null?void 0:d.data,eggType:t==null?void 0:t.data})}),o&&e.jsx(Lt,{batiment:d.data,magazin:a.data,eggType:t.data}),n&&e.jsx(Et,{batiment:d.data,magazin:a.data,eggType:t.data}),e.jsx(At,{})]})}function no(){const{t:o,i18n:n}=W();return e.jsxs(e.Fragment,{children:[e.jsx(Ee,{title:`ESM | ${o(r.nav.inventaire)}`}),e.jsx(ye,{children:e.jsx(zt,{})})]})}export{no as default};
