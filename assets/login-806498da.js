import{c as S,j as s,b as v,P as M,d as R,e as T,f as I,g as E,r as n,l as a,h as V,p as d,S as A,i as F,k as x,F as f,I as q,a as $,m as W,B as H,L as N,R as O}from"./index-6dfaf798.js";import{c as U,a as j,u as D,s as G,C as J,b as K}from"./formik.esm-45b81460.js";import{u as Q}from"./use-page-view-595bde33.js";import{C as X}from"./CardHeader-ad50e0ad.js";const Y=S(s.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),Z=S(s.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),_=()=>{const[r]=v();return r};M.string.isRequired;const ls=()=>{const{t:r,i18n:m}=R(),h=T(),g=I(),b=_().get("returnTo"),{issuer:es,signIn:w}=E(),[p,rs]=n.useState(),[y,as]=n.useState(0),[t,P]=n.useState(),[i,C]=n.useState(!1),[L,l]=n.useState(!1),z=U({username:j().required(r(a.login.emailRequired)),password:j().required(r(a.login.passwordRequired))}),e=D({initialValues:{username:"",password:""},validationSchema:z,onSubmit:async(u,c)=>{try{l(!0),await w(u.username,u.password);const o=sessionStorage.getItem("accessToken");V.defaults.headers.Authorization=`Bearer ${o}`,h()&&(l(!1),g.push(b||d.dashboard.index))}catch(o){if(P(r(a.login.credentialsError)),l(!1),h()){if(o.code==="UserNotConfirmedException"){const B=new URLSearchParams({username:u.username}).toString(),k=d.auth.amplify.confirmRegister+`?${B}`;g.push(k);return}c.setStatus({success:!1}),c.setErrors({submit:o.message}),c.setSubmitting(!1)}}}});return n.useEffect(()=>{G({number:{max:r(a.login.emailMax),min:r(a.login.passwordMin)}})},[y]),Q(),s.jsxs(s.Fragment,{children:[s.jsx(A,{title:"Login"}),s.jsx("div",{children:s.jsxs(J,{elevation:16,children:[s.jsx(X,{sx:{pb:0},title:r(a.login.login)}),s.jsx(K,{children:s.jsxs("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[s.jsxs(F,{spacing:3,children:[s.jsx(x,{autoFocus:!0,fullWidth:!0,label:r(a.login.username),name:"username",onBlur:e.handleBlur,onChange:e.handleChange,type:"text",error:!!(e.touched.username&&e.errors.username)||t,value:e.values.username,InputLabelProps:{style:p}}),e.touched.username&&s.jsx(f,{style:{marginTop:"5px",color:"red",textAlign:m.language=="ar"?"right":"left"},children:t||e.errors.username}),s.jsx(x,{error:!!(e.touched.password&&e.errors.password)||t,fullWidth:!0,label:r(a.login.password),name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:i?"text":"password",value:e.values.password,InputProps:{endAdornment:s.jsx(q,{className:"cursor-pointer",position:"end",onClick:()=>C(!i),children:i?s.jsx(Z,{}):s.jsx(Y,{})})},InputLabelProps:{style:{...p}}})]}),e.touched.password&&s.jsx(f,{style:{marginTop:"5px",color:"red",textAlign:m.language=="ar"?"right":"left"},children:t||e.errors.password}),s.jsx($,{disabled:e.isSubmitting,fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:L?s.jsx(W,{size:30}):r(a.login.login)}),s.jsx(H,{sx:{display:"flex",justifyContent:"center",mt:3},children:s.jsx(N,{component:O,href:d.auth.amplify.forgotPassword,underline:"hover",variant:"subtitle2",children:r(a.login.forgetPass)})})]})})]})})]})};export{ls as default};
