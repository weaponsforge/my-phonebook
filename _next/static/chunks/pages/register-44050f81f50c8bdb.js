(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{7572:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(6531)}])},2012:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(5893),a=t(7294),s=t(3321),i=t(6798),l=t(3946),o=t(594);function c(e){let{message:r,closeHandler:t}=e,[c,u]=(0,a.useState)(!0),d=(e,r)=>{"clickaway"!==r&&(u(!1),t&&t())},p=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{color:"secondary",size:"small",onClick:d,children:"UNDO"}),(0,n.jsx)(l.Z,{size:"small","aria-label":"close",color:"inherit",onClick:d,children:(0,n.jsx)(o.Z,{fontSize:"small"})})]});return(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{open:c,autoHideDuration:6e3,onClose:d,message:r,action:p})})}},6341:function(e,r,t){"use strict";var n=t(5893),a=t(5697),s=t.n(a),i=t(3321),l=t(8456),o=t(3367);function c(e){let{label:r="",variant:t="contained",isloading:a=!1,disabled:s=!1,sx:c={},handleClick:u}=e,[d]=(0,o.e)("activeTheme");return(0,n.jsx)(i.Z,{sx:c,variant:t,disabled:a||s,onClick:u,children:(0,n.jsx)("div",{style:{display:"flex",alignItems:"center"},children:a?(0,n.jsx)(l.Z,{size:24,color:"light"===d?"dark":"primary"}):(0,n.jsx)("span",{children:r})})})}c.propTypes={label:s().string,variant:s().string,isloading:s().bool,disabled:s().bool,handleClick:s().func,sx:s().object},r.Z=c},3787:function(e,r,t){"use strict";var n=t(5893),a=t(5441),s=t(948);let i=(0,s.ZP)(e=>(0,n.jsx)(a.Z,{...e}))(e=>{let{theme:r}=e;return{"& .MuiInputBase-root":{"& input":{backgroundClip:"text !important"}},"& .MuiOutlinedInput-input":{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px transparent inset"}}}});r.Z=i},7797:function(e,r,t){"use strict";t.d(r,{LS:function(){return o},_p:function(){return s},jn:function(){return u},w$:function(){return l},xe:function(){return c}});var n=t(6154);let a="".concat("https://myphonebook-app.vercel.app","/api/account/action"),s={SEND_VERIFICATTION:"send_verification",SEND_RESET:"send_reset",VERIFY_EMAIL:"verifyEmail",RESET_PASSWORD:"resetPassword",RECOVER_EMAIL:"recoverEmail"},i=async e=>{let{mode:r,actionCode:t,email:s,password:i}=e;return await n.Z.post(a,{mode:r,actionCode:t,email:s,password:i})},l=async e=>i({mode:s.SEND_VERIFICATTION,email:e}),o=async e=>i({mode:s.SEND_RESET,email:e}),c=async e=>i({mode:s.VERIFY_EMAIL,actionCode:e}),u=async(e,r)=>i({mode:s.RESET_PASSWORD,actionCode:e,password:r})},891:function(e,r,t){"use strict";t.d(r,{n:function(){return n}});let n=async()=>{try{let e=await fetch("https://v2.jokeapi.dev/joke/Misc?format=json&safe-mode&type=single"),r=await e.json();return r}catch(e){}}},866:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(4924),a=t(1047);class s{}(0,n.Z)(s,"config",{createUserWithEmailAndPassword:a.Xb,signInWithEmailAndPassword:a.e5}),(0,n.Z)(s,"signUp",async(e,r)=>{try{let t=await s.config.createUserWithEmailAndPassword(a.I8,e,r),n=t.user;return n}catch(t){let e=t.code,r=t.message;return{errorCode:e,errorMessage:r}}}),(0,n.Z)(s,"signIn",async(e,r)=>{try{let t=await s.config.signInWithEmailAndPassword(a.I8,e,r),n=t.user;return n}catch(t){let e=t.code,r=t.message;return{errorCode:e,errorMessage:r}}})},771:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(4924);class a{static wrap(e){return new Promise(r=>{e.then(e=>{r({response:e,status:a.STATUS.SUCCESS,error:""})},e=>{var t,n;r({response:null,status:a.STATUS.ERROR,error:null!==(n=null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)&&void 0!==n?n:e.message})})})}}(0,n.Z)(a,"STATUS",{PENDING:"pending",SUCCESS:"success",ERROR:"error",DEFAULT:"default"})},5323:function(e,r,t){"use strict";t.d(r,{Q:function(){return f}});var n=t(2037),a=t(4924),s=t(7297);function i(){let e=(0,s.Z)(["(?<uppercase>[A-Z])"]);return i=function(){return e},e}function l(){let e=(0,s.Z)(["(?<lowercase>[a-z])"]);return l=function(){return e},e}function o(){let e=(0,s.Z)(["(?<number>[0-9])"]);return o=function(){return e},e}function c(){let e=(0,s.Z)(["(?<symbol>[-#?!@$ %^&*())])"]);return c=function(){return e},e}function u(){let e=(0,s.Z)(["(?<prohibitedCharacters>[-a-zA-Z0-9#?!@$ %^&*()]+)"]);return u=function(){return e},e}function d(){let e=(0,s.Z)(["(?<emailPrefix>^[^@]+)"]);return d=function(){return e},e}function p(){let e=(0,s.Z)(["(?<atSymbol>@)"]);return p=function(){return e},e}function g(){let e=(0,s.Z)(["(?<domain>[^@]+$)"]);return g=function(){return e},e}class f{}(0,a.Z)(f,"email",e=>{let r=(0,n.Z)(f,f,E).call(f,e),t=(0,n.Z)(f,f,S).call(f,e),a=(0,n.Z)(f,f,b).call(f,e),s=!r||!t||!a,i=(0,n.Z)(f,f,T).call(f,s,r,t,a);return{error:s,helperText:i,color:s?"error":"success"}}),(0,a.Z)(f,"password",e=>{let r=(0,n.Z)(f,f,m).call(f,e),t=(0,n.Z)(f,f,x).call(f,e),a=(0,n.Z)(f,f,h).call(f,e),s=(0,n.Z)(f,f,w).call(f,e),i=(0,n.Z)(f,f,v).call(f,e),l=(0,n.Z)(f,f,Z).call(f,e),o=!r||!t||!a||!s||!i||l,c=(0,n.Z)(f,f,j).call(f,o,r,t,a,s,i,l);return{error:o,helperText:c,color:o?"error":"success"}}),(0,a.Z)(f,"passwordConfirmation",(e,r)=>{if(e.error)return{error:!0,helperText:"Check : invalid password",color:"error"};let t=e.value!==r;return{error:t,helperText:t?"Check : password missmatch":"Valid",color:t?"error":"success"}});var m={writable:!0,value:e=>{let r=e.length>=8&&e.length<=30;return r}},x={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(i())));return r}},h={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(l())));return r}},w={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(o())));return r}},v={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(c())));return r}},Z={writable:!0,value:e=>{let r=e.replace(RegExp(String.raw(u()),"g"),"");return""!==r&&[...r].join(" ")}},E={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(d())));return r}},S={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(p())));return r}},b={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(g())));return r}},T={writable:!0,value:(e,r,t,n)=>{switch(e){case!0:let a=[!r&&"missing email prefix",!t&&"missing @",!n&&"missing email domain"].filter(e=>!1!==e).join(", ");return"Check : ".concat(a);case!1:return"Valid email"}}},j={writable:!0,value:(e,r,t,n,a,s,i)=>{switch(e){case!0:let l=[!r&&"should consist of 8 to 30 characters",!t&&"missing an uppercase letter",!n&&"missing a lowercase letter",!a&&"missing an alphanumeric character",!s&&"missing a special character",!!i&&"contains prohibited character(s) : ".concat(i)].filter(e=>!1!==e).join(", ");return"Check : ".concat(l);case!1:return"Valid password"}}}},6531:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var n=t(4924),a=t(5893),s=t(3025),i=t(629),l=t(3321),o=t(5861),c=t(7036),u=t(2012),d=t(6341),p=t(3787),g=t(5697),f=t.n(g),m=t(1664),x=t.n(m),h=t(2443);let w=e=>{let{state:r,eventsHandler:t}=e,n=(0,h.u)(),{joke:g,username:f,password:m,passwordConfirmation:w,errorMessage:v,successMessage:Z,loading:E}=r,{usernameHandler:S,passwordHandler:b,passwordConfirmationHandler:T,registerHandler:j,resetError:C}=t;return(0,a.jsx)(s.Z,{children:(0,a.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",justifyContent:"center",flex:1,background:"inherit",flexWrap:"wrap-reverse"},children:[(0,a.jsxs)(o.Z,{variant:"h8",component:"h3",gutterBottom:!0,sx:{color:e=>e.palette.text.disabled,textAlign:"center",paddingLeft:"20px",paddingRight:"20px",width:"50vw"},children:["`",g&&g.joke,"`"]}),(0,a.jsxs)(i.Z,{elevation:0,sx:{display:"grid",gridTemplateColumns:"1fr 20px",gridTemplateAreas:'"username icon1"\n            "password icon2"\n            "passwordConfirmation icon3"\n            "register ."\n            "login ."',alignItems:"stretch",gap:"10px",minWidth:"300px",width:"500px",borderRadius:"30px",padding:"40px",background:"inherit"},children:[(0,a.jsx)(p.Z,{sx:{gridArea:"username"},label:"Username (email)",id:"username",size:"small",type:"text",fullwidth:"true",required:!0,disabled:E,color:f.color,helperText:f.helperText,value:f.value,error:f.error,onInput:S}),!f.error&&(0,a.jsx)(c.Z,{fontSize:"large",color:"success",sx:{gridArea:"icon1"}}),(0,a.jsx)(p.Z,{sx:{gridArea:"password"},label:"Password",id:"userPassword",size:"small",type:"password",fullwidth:"true",required:!0,disabled:E,value:m.value,error:m.error,color:m.color,helperText:m.helperText,onInput:b}),!m.error&&(0,a.jsx)(c.Z,{fontSize:"large",color:"success",sx:{gridArea:"icon2"}}),(0,a.jsx)(p.Z,{sx:{gridArea:"passwordConfirmation"},label:"Password confirmation",id:"userPasswordConfirmation",size:"small",type:"password",fullwidth:"true",required:!0,disabled:E,value:w.value,error:w.error,color:w.color,helperText:w.helperText,onInput:T}),!w.error&&(0,a.jsx)(c.Z,{fontSize:"large",color:"success",sx:{gridArea:"icon3"}}),r.username.error||r.password.error||r.passwordConfirmation.error?(0,a.jsx)(l.Z,{disabled:!0,variant:"contained",sx:{gridArea:"register",fontWeight:"bold",color:e=>e.palette.primary.contrastText},onClick:j,children:"REGISTER"}):(0,a.jsx)(d.Z,{variant:"contained",sx:{gridArea:"register",fontWeight:"bold",color:e=>e.palette.primary.contrastText},isloading:E,handleClick:j,label:"REGISTER"}),(0,a.jsx)(x(),{href:"/login",style:{gridArea:"login"},children:(0,a.jsx)(o.Z,{sx:{fontSize:"12px",textAlign:"center",marginTop:"-5px",color:n.palette.text.primary},children:"Already have an account? Login instead."})}),(v||Z)&&(0,a.jsx)(u.Z,{message:v||Z,closeHandler:C})]})]})})};w.propTypes={state:f().object,eventsHandler:f().func};var v=t(891),Z=t(7294),E=t(5323),S=t(866),b=t(7797),T=t(771);let j={joke:void 0,username:{error:!0,helperText:" ",value:"",color:"text"},password:{error:!0,helperText:" ",value:"",color:"text"},passwordConfirmation:{error:!0,helperText:" ",value:"",color:"text"},errorMessage:void 0,successMessage:"",loading:!1},C=()=>{let[e,r]=(0,Z.useState)(j),{username:t,password:s,passwordConfirmation:i}=e;(0,Z.useEffect)(()=>{(async()=>{let e=await (0,v.n)();r(r=>({...r,joke:e}))})()},[]);class l{}return(0,n.Z)(l,"usernameHandler",e=>{let{helperText:t,error:n,color:a}=E.Q.email(e.target.value);r(r=>({...r,username:{...r.username,value:e.target.value,error:n,helperText:t,color:a}}))}),(0,n.Z)(l,"passwordHandler",e=>{let{helperText:t,error:n,color:a}=E.Q.password(e.target.value);r(r=>({...r,password:{...r.password,value:e.target.value,error:n,helperText:t,color:a}}))}),(0,n.Z)(l,"passwordConfirmationHandler",e=>{let{helperText:t,error:n,color:a}=E.Q.passwordConfirmation(s,e.target.value);r(r=>({...r,passwordConfirmation:{...r.passwordConfirmation,value:e.target.value,error:n,helperText:t,color:a}}))}),(0,n.Z)(l,"registerHandler",()=>{let e=!t.error&&!s.error&&!i.error;e&&(async()=>{r(e=>({...e,loading:!0,errorMessage:void 0,successMessage:""}));let e=await S.Z.signUp(t.value,s.value),n=e.errorMessage,a=T.Z.STATUS.SUCCESS;if(void 0===n){let{error:e,status:r}=await T.Z.wrap((0,b.w$)(t.value));n=""===e?void 0:e,a=r}r(e=>({...e,loading:!1,errorMessage:n,successMessage:a===T.Z.STATUS.SUCCESS?"Email sent. Please check your email.":""}))})()}),(0,n.Z)(l,"resetError",()=>{r({...e,errorMessage:"",successMessage:""})}),(0,a.jsx)(w,{state:e,eventsHandler:l})};var y=C}},function(e){e.O(0,[146,30,231,626,25,774,888,179],function(){return e(e.s=7572)}),_N_E=e.O()}]);