(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{8624:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recoverPassword",function(){return t(5285)}])},2012:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(5893),a=t(7294),i=t(9397),s=t(9820),l=t(4799),o=t(594);function c(e){let{message:r,closeHandler:t}=e,[c,u]=(0,a.useState)(!0),d=(e,r)=>{"clickaway"!==r&&(u(!1),t&&t())},p=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{color:"secondary",size:"small",onClick:d,children:"UNDO"}),(0,n.jsx)(l.Z,{size:"small","aria-label":"close",color:"inherit",onClick:d,children:(0,n.jsx)(o.Z,{fontSize:"small"})})]});return(0,n.jsx)("div",{children:(0,n.jsx)(s.Z,{open:c,autoHideDuration:6e3,onClose:d,message:r,action:p,sx:{maxWidth:600}})})}},6341:function(e,r,t){"use strict";var n=t(5893),a=t(5697),i=t.n(a),s=t(9397),l=t(6489),o=t(3367);function c(e){let{label:r="",variant:t="contained",isloading:a=!1,disabled:i=!1,sx:c={},handleClick:u}=e,d=(0,o.e)("activeTheme");return(0,n.jsx)(s.Z,{sx:c,variant:t,disabled:a||i,onClick:u,children:(0,n.jsx)("div",{style:{display:"flex",alignItems:"center"},children:a?(0,n.jsx)(l.Z,{size:24,color:"light"===d?"dark":"primary"}):(0,n.jsx)("span",{children:r})})})}c.propTypes={label:i().string,variant:i().string,isloading:i().bool,disabled:i().bool,handleClick:i().func,sx:i().object},r.Z=c},3787:function(e,r,t){"use strict";var n=t(5893),a=t(2715),i=t(948);let s=(0,i.ZP)(e=>(0,n.jsx)(a.Z,{...e}))(e=>{let{theme:r}=e;return{"& .MuiInputBase-root":{"& input":{backgroundClip:"text !important"}},"& .MuiOutlinedInput-input":{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px transparent inset"}}}});r.Z=s},8065:function(e,r,t){"use strict";t.d(r,{e:function(){return s},f:function(){return l}});var n=t(7294),a=t(771);let i={name:"default",response:null,loading:!1,error:"",status:a.Z.STATUS.IDLE},s=a.Z.STATUS;function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",[t,s]=(0,n.useState)(i);return(0,n.useEffect)(()=>{null!==e&&(s(e=>({...e,name:r,response:null,loading:!0,error:"",status:a.Z.STATUS.PENDING})),e.then(e=>{s(r=>({...r,response:e,loading:!1,status:a.Z.STATUS.SUCCESS}))},e=>{var r;s(t=>{var n;return{...t,loading:!1,error:null!==(r=null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.data)&&void 0!==r?r:e.message,status:a.Z.STATUS.ERROR}})}))},[e,r]),{name:t.name,response:t.response,loading:t.loading,error:t.error,status:t.status}}},7797:function(e,r,t){"use strict";t.d(r,{LS:function(){return o},_p:function(){return i},jn:function(){return u},w$:function(){return l},xe:function(){return c}});var n=t(6154);let a="".concat("https://myphonebook-app.vercel.app","/api/account/action"),i={SEND_VERIFICATTION:"send_verification",SEND_RESET:"send_reset",VERIFY_EMAIL:"verifyEmail",RESET_PASSWORD:"resetPassword",RECOVER_EMAIL:"recoverEmail",RESEND_EMAIL_VERIFICATION:"resend_email_verification"},s=async e=>{let{mode:r,actionCode:t,email:i,password:s}=e;return await n.Z.post(a,{mode:r,actionCode:t,email:i,password:s})},l=async e=>s({mode:i.SEND_VERIFICATTION,email:e}),o=async e=>s({mode:i.SEND_RESET,email:e}),c=async e=>s({mode:i.VERIFY_EMAIL,actionCode:e}),u=async(e,r)=>s({mode:i.RESET_PASSWORD,actionCode:e,password:r})},891:function(e,r,t){"use strict";t.d(r,{n:function(){return n}});let n=async()=>{try{let e=await fetch("https://v2.jokeapi.dev/joke/Misc?format=json&safe-mode&type=single"),r=await e.json();return r}catch(e){}}},771:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(4924);class a{static wrap(e){return new Promise(r=>{e.then(e=>{r({response:e,status:a.STATUS.SUCCESS,error:""})},e=>{var t,n;r({response:null,status:a.STATUS.ERROR,error:null!==(n=null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)&&void 0!==n?n:e.message})})})}}(0,n.Z)(a,"STATUS",{IDLE:"idle",PENDING:"pending",SUCCESS:"success",ERROR:"error",DEFAULT:"default"})},5323:function(e,r,t){"use strict";t.d(r,{Q:function(){return f}});var n=t(2037),a=t(4924),i=t(7297);function s(){let e=(0,i.Z)(["(?<uppercase>[A-Z])"]);return s=function(){return e},e}function l(){let e=(0,i.Z)(["(?<lowercase>[a-z])"]);return l=function(){return e},e}function o(){let e=(0,i.Z)(["(?<number>[0-9])"]);return o=function(){return e},e}function c(){let e=(0,i.Z)(["(?<symbol>[-#?!@$ %^&*())])"]);return c=function(){return e},e}function u(){let e=(0,i.Z)(["(?<prohibitedCharacters>[-a-zA-Z0-9#?!@$ %^&*()]+)"]);return u=function(){return e},e}function d(){let e=(0,i.Z)(["(?<emailPrefix>^[^@]+)"]);return d=function(){return e},e}function p(){let e=(0,i.Z)(["(?<atSymbol>@)"]);return p=function(){return e},e}function m(){let e=(0,i.Z)(["(?<domain>[^@]+$)"]);return m=function(){return e},e}class f{}(0,a.Z)(f,"email",e=>{let r=(0,n.Z)(f,f,w).call(f,e),t=(0,n.Z)(f,f,Z).call(f,e),a=(0,n.Z)(f,f,b).call(f,e),i=!r||!t||!a,s=(0,n.Z)(f,f,T).call(f,i,r,t,a);return{error:i,helperText:s,color:i?"error":"success"}}),(0,a.Z)(f,"password",e=>{let r=(0,n.Z)(f,f,g).call(f,e),t=(0,n.Z)(f,f,h).call(f,e),a=(0,n.Z)(f,f,x).call(f,e),i=(0,n.Z)(f,f,v).call(f,e),s=(0,n.Z)(f,f,S).call(f,e),l=(0,n.Z)(f,f,E).call(f,e),o=!r||!t||!a||!i||!s||l,c=(0,n.Z)(f,f,R).call(f,o,r,t,a,i,s,l);return{error:o,helperText:c,color:o?"error":"success"}}),(0,a.Z)(f,"passwordConfirmation",(e,r)=>{if(e.error)return{error:!0,helperText:"Check : invalid password",color:"error"};let t=e.value!==r;return{error:t,helperText:t?"Check : password missmatch":"Valid",color:t?"error":"success"}});var g={writable:!0,value:e=>{let r=e.length>=8&&e.length<=30;return r}},h={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(s())));return r}},x={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(l())));return r}},v={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(o())));return r}},S={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(c())));return r}},E={writable:!0,value:e=>{let r=e.replace(RegExp(String.raw(u()),"g"),"");return""!==r&&[...r].join(" ")}},w={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(d())));return r}},Z={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(p())));return r}},b={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(m())));return r}},T={writable:!0,value:(e,r,t,n)=>{switch(e){case!0:let a=[!r&&"missing email prefix",!t&&"missing @",!n&&"missing email domain"].filter(e=>!1!==e).join(", ");return"Check : ".concat(a);case!1:return"Valid email"}}},R={writable:!0,value:(e,r,t,n,a,i,s)=>{switch(e){case!0:let l=[!r&&"should consist of 8 to 30 characters",!t&&"missing an uppercase letter",!n&&"missing a lowercase letter",!a&&"missing an alphanumeric character",!i&&"missing a special character",!!s&&"contains prohibited character(s) : ".concat(s)].filter(e=>!1!==e).join(", ");return"Check : ".concat(l);case!1:return"Valid password"}}}},5285:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return R}});var n=t(4924),a=t(5893),i=t(5697),s=t.n(i),l=t(1664),o=t.n(l),c=t(5077),u=t(1987),d=t(3972),p=t(6341),m=t(3787),f=t(6400),g=t(2443),h=t(2012);let x=e=>{var r;let{state:t,eventsHandler:n}=e,i=(0,g.u)(),{username:s,joke:l}=t,{usernameHandler:x,recoverPasswordHandler:v}=n;return(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(u.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",justifyContent:"center",flex:1,background:"inherit",flexWrap:"wrap-reverse"},children:[(0,a.jsxs)(d.Z,{variant:"h8",component:"h3",gutterBottom:!0,sx:{color:i.palette.text.disabled,textAlign:"center",paddingLeft:"20px",paddingRight:"20px",width:"50vw"},children:["`",l&&l.joke,"`"]}),(0,a.jsxs)(u.Z,{elevation:0,sx:{display:"grid",gridTemplateColumns:"1fr 20px",gridTemplateAreas:'"username icon1"\n              "recoverPassword ."\n              "resend ."',alignItems:"stretch",gap:"10px",minWidth:"300px",width:"500px",borderRadius:"30px",padding:"40px",background:"inherit"},children:[(0,a.jsx)(m.Z,{label:"Username (email)",id:"username",size:"small",type:"text",fullwidth:"true",disabled:t.loading,required:!0,color:s.color,helperText:s.helperText,value:s.value,error:s.error,onChange:x,sx:{gridArea:"username"}}),!s.error&&(0,a.jsx)(f.Z,{fontSize:"large",color:"success",sx:{gridArea:"icon1"}}),t.username.error?(0,a.jsx)(p.Z,{variant:"contained",sx:{fontWeight:"bold",color:i.palette.primary.contrastText,gridArea:"recoverPassword"},onClick:v,disabled:!0,label:"RECOVER PASSWORD"}):(0,a.jsx)(p.Z,{variant:"contained",disabled:t.loading,sx:{fontWeight:"bold",color:i.palette.primary.contrastText,gridArea:"recoverPassword"},isloading:t.loading,handleClick:v,label:"RECOVER PASSWORD"}),(null==t?void 0:null===(r=t.message)||void 0===r?void 0:r.includes("User is not yet email-verified"))&&(0,a.jsxs)(d.Z,{sx:{fontSize:"12px",textAlign:"center",marginTop:"-5px",color:i.palette.text.primary,a:{color:i.palette.text.primary}},style:{gridArea:"resend"},children:["Did not receive the account verification email? Resend it \xa0",(0,a.jsx)(o(),{href:"/account?mode=resend_email_verification",children:"here"}),"."]})]})]}),t.message&&(0,a.jsx)(h.Z,{message:t.message,closeHandler:n.resetMessage})]})};x.propTypes={state:s().object,eventsHandler:s().func};var v=t(891),S=t(7294),E=t(5323),w=t(7797),Z=t(8065);let b={username:{error:!0,helperText:" ",value:"",color:"text"},joke:void 0,method:null},T=()=>{let[e,r]=(0,S.useState)(b),{loading:t,error:i,status:s}=(0,Z.f)(e.method);class l{}return(0,n.Z)(l,"usernameHandler",e=>{let{helperText:t,error:n,color:a}=E.Q.email(e.target.value);r(r=>({...r,username:{...r.username,value:e.target.value,error:n,helperText:t,color:a}}))}),(0,n.Z)(l,"recoverPasswordHandler",()=>{r({...e,method:(0,w.LS)(e.username.value)})}),(0,n.Z)(l,"resetMessage",()=>{r({...e,message:""})}),(0,S.useEffect)(()=>{(async()=>{let e=await (0,v.n)();r(r=>({...r,joke:e}))})()},[]),(0,a.jsx)(x,{state:{...e,loading:t,message:s===Z.e.SUCCESS?"Email sent. Please check your inbox or your Spam folder. Wait for at most 5 minutes if you do not see the email right away.":i},eventsHandler:l})};var R=T}},function(e){e.O(0,[540,101,548,154,235,77,774,888,179],function(){return e(e.s=8624)}),_N_E=e.O()}]);