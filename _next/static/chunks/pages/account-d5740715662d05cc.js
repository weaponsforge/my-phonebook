(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4865:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return t(463)}])},3787:function(e,r,t){"use strict";var a=t(5893),n=t(2715),o=t(948);let i=(0,o.ZP)(e=>(0,a.jsx)(n.Z,{...e}))(e=>{let{theme:r}=e;return{"& .MuiInputBase-root":{"& input":{backgroundClip:"text !important"}},"& .MuiOutlinedInput-input":{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px transparent inset"}}}});r.Z=i},8065:function(e,r,t){"use strict";t.d(r,{e:function(){return i},f:function(){return s}});var a=t(7294),n=t(771);let o={name:"default",response:null,loading:!1,error:"",status:n.Z.STATUS.IDLE},i=n.Z.STATUS;function s(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",[t,i]=(0,a.useState)(o);return(0,a.useEffect)(()=>{null!==e&&(i(e=>({...e,name:r,response:null,loading:!0,error:"",status:n.Z.STATUS.PENDING})),e.then(e=>{i(r=>({...r,response:e,loading:!1,status:n.Z.STATUS.SUCCESS}))},e=>{var r;i(t=>{var a;return{...t,loading:!1,error:null!==(r=null==e?void 0:null===(a=e.response)||void 0===a?void 0:a.data)&&void 0!==r?r:e.message,status:n.Z.STATUS.ERROR}})}))},[e,r]),{name:t.name,response:t.response,loading:t.loading,error:t.error,status:t.status}}},7797:function(e,r,t){"use strict";t.d(r,{LS:function(){return l},_p:function(){return o},jn:function(){return c},w$:function(){return s},xe:function(){return u}});var a=t(6154);let n="".concat("https://myphonebook-app.vercel.app","/api/account/action"),o={SEND_VERIFICATTION:"send_verification",SEND_RESET:"send_reset",VERIFY_EMAIL:"verifyEmail",RESET_PASSWORD:"resetPassword",RECOVER_EMAIL:"recoverEmail",RESEND_EMAIL_VERIFICATION:"resend_email_verification"},i=async e=>{let{mode:r,actionCode:t,email:o,password:i}=e;return await a.Z.post(n,{mode:r,actionCode:t,email:o,password:i})},s=async e=>i({mode:o.SEND_VERIFICATTION,email:e}),l=async e=>i({mode:o.SEND_RESET,email:e}),u=async e=>i({mode:o.VERIFY_EMAIL,actionCode:e}),c=async(e,r)=>i({mode:o.RESET_PASSWORD,actionCode:e,password:r})},771:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var a=t(4924);class n{static wrap(e){return new Promise(r=>{e.then(e=>{r({response:e,status:n.STATUS.SUCCESS,error:""})},e=>{var t,a;r({response:null,status:n.STATUS.ERROR,error:null!==(a=null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)&&void 0!==a?a:e.message})})})}}(0,a.Z)(n,"STATUS",{IDLE:"idle",PENDING:"pending",SUCCESS:"success",ERROR:"error",DEFAULT:"default"})},5323:function(e,r,t){"use strict";t.d(r,{Q:function(){return h}});var a=t(2037),n=t(4924),o=t(7297);function i(){let e=(0,o.Z)(["(?<uppercase>[A-Z])"]);return i=function(){return e},e}function s(){let e=(0,o.Z)(["(?<lowercase>[a-z])"]);return s=function(){return e},e}function l(){let e=(0,o.Z)(["(?<number>[0-9])"]);return l=function(){return e},e}function u(){let e=(0,o.Z)(["(?<symbol>[-#?!@$ %^&*())])"]);return u=function(){return e},e}function c(){let e=(0,o.Z)(["(?<prohibitedCharacters>[-a-zA-Z0-9#?!@$ %^&*()]+)"]);return c=function(){return e},e}function d(){let e=(0,o.Z)(["(?<emailPrefix>^[^@]+)"]);return d=function(){return e},e}function p(){let e=(0,o.Z)(["(?<atSymbol>@)"]);return p=function(){return e},e}function m(){let e=(0,o.Z)(["(?<domain>[^@]+$)"]);return m=function(){return e},e}class h{}(0,n.Z)(h,"email",e=>{let r=(0,a.Z)(h,h,x).call(h,e),t=(0,a.Z)(h,h,R).call(h,e),n=(0,a.Z)(h,h,T).call(h,e),o=!r||!t||!n,i=(0,a.Z)(h,h,_).call(h,o,r,t,n);return{error:o,helperText:i,color:o?"error":"success"}}),(0,n.Z)(h,"password",e=>{let r=(0,a.Z)(h,h,v).call(h,e),t=(0,a.Z)(h,h,f).call(h,e),n=(0,a.Z)(h,h,g).call(h,e),o=(0,a.Z)(h,h,S).call(h,e),i=(0,a.Z)(h,h,E).call(h,e),s=(0,a.Z)(h,h,w).call(h,e),l=!r||!t||!n||!o||!i||s,u=(0,a.Z)(h,h,b).call(h,l,r,t,n,o,i,s);return{error:l,helperText:u,color:l?"error":"success"}}),(0,n.Z)(h,"passwordConfirmation",(e,r)=>{if(e.error)return{error:!0,helperText:"Check : invalid password",color:"error"};let t=e.value!==r;return{error:t,helperText:t?"Check : password missmatch":"Valid",color:t?"error":"success"}});var v={writable:!0,value:e=>{let r=e.length>=8&&e.length<=30;return r}},f={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(i())));return r}},g={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(s())));return r}},S={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(l())));return r}},E={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(u())));return r}},w={writable:!0,value:e=>{let r=e.replace(RegExp(String.raw(c()),"g"),"");return""!==r&&[...r].join(" ")}},x={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(d())));return r}},R={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(p())));return r}},T={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(m())));return r}},_={writable:!0,value:(e,r,t,a)=>{switch(e){case!0:let n=[!r&&"missing email prefix",!t&&"missing @",!a&&"missing email domain"].filter(e=>!1!==e).join(", ");return"Check : ".concat(n);case!1:return"Valid email"}}},b={writable:!0,value:(e,r,t,a,n,o,i)=>{switch(e){case!0:let s=[!r&&"should consist of 8 to 30 characters",!t&&"missing an uppercase letter",!a&&"missing a lowercase letter",!n&&"missing an alphanumeric character",!o&&"missing a special character",!!i&&"contains prohibited character(s) : ".concat(i)].filter(e=>!1!==e).join(", ");return"Check : ".concat(s);case!1:return"Valid password"}}}},463:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return I}});var a=t(5893),n=t(7294),o=t(1163),i=t(8578),s=t(9825),l=t(7797),u=t(8065),c=t(5697),d=t.n(c),p=t(7357),m=t(6489),h=t(3972),v=t(5077),f=t(5323),g=t(9397),S=t(3787),E=t(3367);let w={helperText:"",error:!1,color:"",value:""},x={PASSWORD:"password",CONFIRM_PASSWORD:"confirmpassword"};function R(e){let{loading:r,locked:t,handleResetPasswordSubmit:o}=e,[i,s]=(0,n.useState)(w),[l,u]=(0,n.useState)(w),c=(0,E.e6)("activeTheme"),d=e=>{let{id:r}=e.target;r===x.PASSWORD&&s({...f.Q.password(e.target.value),value:e.target.value}),r===x.CONFIRM_PASSWORD&&u({...f.Q.passwordConfirmation(i,e.target.value),value:e.target.value})};return(0,a.jsx)(p.Z,{sx:{margin:"auto",marginBottom:"24px",width:{sm:"400px"},"& .MuiTextField-root, button":{marginTop:"24px",width:"100%"}},children:(0,a.jsxs)("form",{id:"resetpassword",onSubmit:o,children:[(0,a.jsx)(S.Z,{id:x.PASSWORD,type:"password",size:"small",label:"Enter your new password",placeholder:"Enter your new password",helperText:i.helperText,error:i.error,disabled:r||t,color:"success"===i.color?i.color:"light"===c?"dark":"primary",onChange:d}),(0,a.jsx)(S.Z,{id:x.CONFIRM_PASSWORD,type:"password",size:"small",label:"Confirm your new password",placeholder:"Confirm your new password",helperText:l.helperText,error:l.error,disabled:r||t,color:"success"===l.color?l.color:"light"===c?"dark":"primary",onChange:d}),(0,a.jsx)(g.Z,{variant:"contained",type:"submit",disabled:r||t||i.error||l.error||""===i.value||""===l,children:"Submit"})]})})}R.propTypes={loading:d().bool,locked:d().bool,handleResetPasswordSubmit:d().func};let T={helperText:"",error:!1,color:"",value:""};function _(e){let{loading:r,locked:t,handleResendEmailVerification:o}=e,[i,s]=(0,n.useState)(T),l=(0,E.e6)("activeTheme"),u=e=>{let{id:r}=e.target;"email"===r&&s({...f.Q.email(e.target.value),value:e.target.value})};return(0,a.jsx)(p.Z,{sx:{margin:"auto",marginBottom:"24px",width:{sm:"400px"},"& .MuiTextField-root, button":{marginTop:"24px",width:"100%"}},children:(0,a.jsxs)("form",{id:"resetpassword",onSubmit:o,children:[(0,a.jsx)(S.Z,{id:"email",type:"email",size:"small",label:"Enter your email",placeholder:"Enter your email",helperText:i.helperText,error:i.error,disabled:r||t,color:"success"===i.color?i.color:"light"===l?"dark":"primary",onChange:u}),(0,a.jsx)(g.Z,{variant:"contained",type:"submit",disabled:r||t||i.error||""===i.value,children:"Resend"})]})})}function b(e){let{state:r,handleResetPasswordSubmit:t,handleResendEmailVerification:n}=e;return(0,a.jsx)(v.Z,{children:(0,a.jsx)(p.Z,{sx:{padding:"16px"},children:(0,a.jsxs)(p.Z,{sx:{width:{md:"800px"},backgroundColor:"rgba(255, 255, 255, 0.2)",margin:"auto",marginTop:"32px",borderRadius:"8px",boxShadow:"inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1), 0 0 0 1px hsla(230, 13%, 9%, 0.075), 0 0.3px 0.4px hsla(230, 13%, 9%, 0.02), 0 0.9px 1.5px hsla(230, 13%, 9%, 0.045), 0 3.5px 6px hsla(230, 13%, 9%, 0.09)",textAlign:"center",padding:"24px","& a":e=>({fontSize:"12px",textAlign:"center",marginTop:"-5px",color:e.palette.text.primary})},children:[(0,a.jsx)("div",{children:r.message&&(0,a.jsx)("p",{children:r.message})}),r.mode===l._p.RESET_PASSWORD&&(0,a.jsx)(R,{loading:r.loading,locked:r.locked,handleResetPasswordSubmit:t}),r.mode===l._p.RESEND_EMAIL_VERIFICATION&&(0,a.jsx)(_,{loading:r.loading,locked:r.locked,handleResendEmailVerification:n}),(0,a.jsx)("div",{children:r.loading?(0,a.jsx)(m.Z,{size:24,color:"secondary"}):""!==r.error?(0,a.jsx)(h.Z,{variant:"caption",color:"error",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:r.error}})}):(0,a.jsx)(h.Z,{variant:"caption",color:"success.main",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:r.success}})})})]})})})}_.propTypes={loading:d().bool,locked:d().bool,handleResendEmailVerification:d().func},b.propTypes={state:d().object,handleResetPasswordSubmit:d().func,handleResendEmailVerification:d().func};var y=JSON.parse('[{"mode":"verifyEmail","message":"Please wait while we verify your email.","success":"Success! Email verified. You can now <a href=\'/login\'>sign in</a> with your new account.","error":"Try verifying your email again.<br>Your request to verify your email has expired or the link has already been used.<br><br>Resend email verification? <a href=\'/account?mode=resend_email_verification\'>Resend</a>"},{"mode":"resetPassword","message":"Reset your password.","success":"Success! Password changed. You can now <a href=\'/login\'>sign in</a> using your new password.","error":"Try <a href=\'/recoverPassword\'>resetting</a> your password again.<br>Your request to change your password has expired or the link has already been used."},{"mode":"resend_email_verification","message":"Enter your registration email","success":"Success! Email verification sent."},{"mode":"recoverEmail","message":"","success":""}]');let Z={loading:!0,locked:!1,checkCode:!1,message:"",error:"",success:"",mode:"",actionCode:"",password:""};var I=function(){var e,r,t;let[c,d]=(0,n.useState)(Z),[p,m]=(0,n.useState)({promise:null,name:"default"}),h=(0,o.useRouter)(),{status:v,error:f,loading:g,name:S}=(0,u.f)(p.promise,p.name);(0,n.useEffect)(()=>{if(h.isReady){let{mode:r,actionCode:t}=h.query;if(!Object.values(l._p).includes(r)){d(e=>({...e,loading:!1,error:"Invalid mode"}));return}if(r){var e;d(t=>{var a;return{...t,message:null!==(e=null===(a=y.find(e=>e.mode===r))||void 0===a?void 0:a.message)&&void 0!==e?e:"",mode:r}})}if(t)switch(d(e=>({...e,actionCode:t})),r){case l._p.VERIFY_EMAIL:m({promise:(0,l.xe)(t),name:l._p.VERIFY_EMAIL});break;case l._p.RESET_PASSWORD:d(e=>({...e,checkCode:!0})),m({promise:(0,i.TX)(s.I8,t),name:"checkcode"});break;default:d(e=>({...e,loading:!1,error:"Invalid request",locked:!0}))}else r!==l._p.RESEND_EMAIL_VERIFICATION&&d(e=>({...e,loading:!1,error:"Invalid request",locked:!0}))}},[h.isReady,h.query]);let E=e=>{var r,t,a;e.preventDefault(),d(e=>({...e,checkCode:!1})),m({promise:(0,l.jn)(c.actionCode,null!==(a=null==e?void 0:null===(r=e.target)||void 0===r?void 0:null===(t=r.password)||void 0===t?void 0:t.value)&&void 0!==a?a:""),name:l._p.RESET_PASSWORD})},w=e=>{var r,t,a;e.preventDefault(),m({promise:(0,l.w$)(null!==(a=null==e?void 0:null===(r=e.target)||void 0===r?void 0:null===(t=r.email)||void 0===t?void 0:t.value)&&void 0!==a?a:""),name:l._p.RESEND_EMAIL_VERIFICATION})};return(0,a.jsx)(b,{state:{...c,loading:g,locked:c.mode===l._p.RESET_PASSWORD&&v===u.e.ERROR||c.locked,error:f?"Network Error"!==f&&null!==(t=null===(e=y.find(e=>e.mode===c.mode))||void 0===e?void 0:e.error)&&void 0!==t?t:f:c.error,success:v!==u.e.SUCCESS||c.checkCode?"":null===(r=y.find(e=>e.mode===S))||void 0===r?void 0:r.success},handleResetPasswordSubmit:E,handleResendEmailVerification:w})}}},function(e){e.O(0,[642,101,154,77,774,888,179],function(){return e(e.s=4865)}),_N_E=e.O()}]);