(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{9655:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return t(5642)}])},8534:function(r,e,t){"use strict";t.d(e,{Z:function(){return m}});var a=t(5893),n=t(7294),o=t(1163),s=t(2092),l=t(7357),i=t(3972),c=t(6489),u=t(5077),d=function(r){let{children:e}=r;return(0,a.jsx)(l.Z,{sx:{width:{sm:"600px"},backgroundColor:{xs:"none",sm:"rgba(255, 255, 255, 0.4)"},borderRadius:"8px",textAlign:"center",margin:"24px !important",padding:"24px",display:"grid",placeContent:"center"},children:e})},p=t(3367),w=function(r){let{authError:e}=r,t=(0,p.e)("activeTheme");return(0,a.jsx)(u.Z,{children:(0,a.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",placeContent:"center",height:"100vh"},children:(0,a.jsxs)(d,{children:[(0,a.jsx)("span",{children:(0,a.jsx)(i.Z,{variant:"h6",color:"#000",children:"Loading..."})}),(0,a.jsx)("span",{children:(0,a.jsx)(c.Z,{color:"light"===t?"dark":"primary"})}),e&&(0,a.jsx)(i.Z,{variant:"label",color:"error",children:e})]})})})},m=function(r){return function(e){let t=(0,o.useRouter)(),{authLoading:l,authUser:i,authError:c}=(0,s.C0)("auth");return(0,n.useEffect)(()=>{l||null!==i||t.push("/login")},[i,l,t]),l?(0,a.jsx)(w,{}):i?(0,a.jsx)(r,{...e}):(0,a.jsx)(w,{authError:c})}}},2012:function(r,e,t){"use strict";t.d(e,{Z:function(){return c}});var a=t(5893),n=t(7294),o=t(9397),s=t(9820),l=t(4799),i=t(594);function c(r){let{message:e,closeHandler:t}=r,[c,u]=(0,n.useState)(!0),d=(r,e)=>{"clickaway"!==e&&(u(!1),t&&t())},p=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{color:"secondary",size:"small",onClick:d,children:"UNDO"}),(0,a.jsx)(l.Z,{size:"small","aria-label":"close",color:"inherit",onClick:d,children:(0,a.jsx)(i.Z,{fontSize:"small"})})]});return(0,a.jsx)("div",{children:(0,a.jsx)(s.Z,{open:c,autoHideDuration:6e3,onClose:d,message:e,action:p,sx:{maxWidth:600}})})}},3787:function(r,e,t){"use strict";var a=t(5893),n=t(2715),o=t(948);let s=(0,o.ZP)(r=>(0,a.jsx)(n.Z,{...r}))(r=>{let{theme:e}=r;return{"& .MuiInputBase-root":{"& input":{backgroundClip:"text !important"}},"& .MuiOutlinedInput-input":{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px transparent inset"}}}});e.Z=s},5323:function(r,e,t){"use strict";t.d(e,{Q:function(){return m}});var a=t(2037),n=t(4924),o=t(7297);function s(){let r=(0,o.Z)(["(?<uppercase>[A-Z])"]);return s=function(){return r},r}function l(){let r=(0,o.Z)(["(?<lowercase>[a-z])"]);return l=function(){return r},r}function i(){let r=(0,o.Z)(["(?<number>[0-9])"]);return i=function(){return r},r}function c(){let r=(0,o.Z)(["(?<symbol>[-#?!@$ %^&*())])"]);return c=function(){return r},r}function u(){let r=(0,o.Z)(["(?<prohibitedCharacters>[-a-zA-Z0-9#?!@$ %^&*()]+)"]);return u=function(){return r},r}function d(){let r=(0,o.Z)(["(?<emailPrefix>^[^@]+)"]);return d=function(){return r},r}function p(){let r=(0,o.Z)(["(?<atSymbol>@)"]);return p=function(){return r},r}function w(){let r=(0,o.Z)(["(?<domain>[^@]+$)"]);return w=function(){return r},r}class m{}(0,n.Z)(m,"email",r=>{let e=(0,a.Z)(m,m,b).call(m,r),t=(0,a.Z)(m,m,_).call(m,r),n=(0,a.Z)(m,m,j).call(m,r),o=!e||!t||!n,s=(0,a.Z)(m,m,k).call(m,o,e,t,n);return{error:o,helperText:s,color:o?"error":"success"}}),(0,n.Z)(m,"password",r=>{let e=(0,a.Z)(m,m,f).call(m,r),t=(0,a.Z)(m,m,h).call(m,r),n=(0,a.Z)(m,m,x).call(m,r),o=(0,a.Z)(m,m,g).call(m,r),s=(0,a.Z)(m,m,Z).call(m,r),l=(0,a.Z)(m,m,v).call(m,r),i=!e||!t||!n||!o||!s||l,c=(0,a.Z)(m,m,C).call(m,i,e,t,n,o,s,l);return{error:i,helperText:c,color:i?"error":"success"}}),(0,n.Z)(m,"passwordConfirmation",(r,e)=>{if(r.error)return{error:!0,helperText:"Check : invalid password",color:"error"};let t=r.value!==e;return{error:t,helperText:t?"Check : password missmatch":"Valid",color:t?"error":"success"}});var f={writable:!0,value:r=>{let e=r.length>=8&&r.length<=30;return e}},h={writable:!0,value:r=>{let e=!!r.match(RegExp(String.raw(s())));return e}},x={writable:!0,value:r=>{let e=!!r.match(RegExp(String.raw(l())));return e}},g={writable:!0,value:r=>{let e=!!r.match(RegExp(String.raw(i())));return e}},Z={writable:!0,value:r=>{let e=!!r.match(RegExp(String.raw(c())));return e}},v={writable:!0,value:r=>{let e=r.replace(RegExp(String.raw(u()),"g"),"");return""!==e&&[...e].join(" ")}},b={writable:!0,value:r=>{let e=!!r.match(RegExp(String.raw(d())));return e}},_={writable:!0,value:r=>{let e=!!r.match(RegExp(String.raw(p())));return e}},j={writable:!0,value:r=>{let e=!!r.match(RegExp(String.raw(w())));return e}},k={writable:!0,value:(r,e,t,a)=>{switch(r){case!0:let n=[!e&&"missing email prefix",!t&&"missing @",!a&&"missing email domain"].filter(r=>!1!==r).join(", ");return"Check : ".concat(n);case!1:return"Valid email"}}},C={writable:!0,value:(r,e,t,a,n,o,s)=>{switch(r){case!0:let l=[!e&&"should consist of 8 to 30 characters",!t&&"missing an uppercase letter",!a&&"missing a lowercase letter",!n&&"missing an alphanumeric character",!o&&"missing a special character",!!s&&"contains prohibited character(s) : ".concat(s)].filter(r=>!1!==r).join(", ");return"Check : ".concat(l);case!1:return"Valid password"}}}},5642:function(r,e,t){"use strict";t.r(e);var a=t(5893),n=t(5077),o=t(7357),s=t(1987),l=t(9397),i=t(7294),c=t(8578),u=t(2012),d=t(3787),p=t(5323),w=t(8534);let m={form:{old_password:{error:!0,value:"",helperText:""},new_password:{error:!0,value:"",helperText:""},password_confirmation:{error:!0,value:"",helperText:""}},show:{changePassword:!1,snackbar:!1,save:!1},message:{snackbar:""}},f=()=>{let[r,e]=(0,i.useState)(m);(0,i.useEffect)(()=>{r.form.old_password.error||r.form.new_password.error||r.form.password_confirmation.error||e(r=>({...r,show:{...r.show,save:!0}}))},[r.form.new_password.error,r.form.old_password.error,r.form.password_confirmation.error]);let t=t=>{let a=t.target.id,n=t.target.value;switch(a){case"old_password":{let{error:r,helperText:t,color:o}=p.Q.password(n);e(e=>({...e,form:{...e.form,[a]:{...e.form[a],value:n,error:r,color:o,helperText:t}}}));break}case"new_password":{let{error:r,helperText:t,color:o}=p.Q.password(n);e(e=>({...e,form:{...e.form,[a]:{...e.form[a],value:n,error:r,color:o,helperText:t}}}));break}case"password_confirmation":{let{error:t,helperText:o,color:s}=p.Q.passwordConfirmation(r.form.new_password,n);e(r=>({...r,form:{...r.form,[a]:{...r.form[a],value:n,error:t,color:s,helperText:o}}}))}}},w=()=>{let t=(0,c.v0)().currentUser,a=async()=>{try{let a=c.w9.credential(t.email,r.form.old_password.value);await (0,c.aF)(t,a),await (0,c.gQ)(t,r.form.new_password.value),e(r=>({...m,show:{...r.show,snackbar:!0,changePassword:!1},message:{...r.message,snackbar:"Password Changed !"}})),setTimeout(()=>{e(m)},6e3)}catch(r){e(e=>({...e,show:{...e.show,snackbar:!0},message:{...e.message,snackbar:"".concat(r.message)}})),setTimeout(()=>{e(r=>({...r,show:{...r.show,snackbar:!1}}))},6e3)}};a()},f=()=>{e(r=>({...r,show:{...r.show,changePassword:!0}}))};return(0,a.jsxs)(n.Z,{children:[r.show.snackbar&&(0,a.jsx)(u.Z,{message:r.message.snackbar}),(0,a.jsx)(o.Z,{sx:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"},children:(0,a.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",padding:"30px",borderRadius:"20px",backgroundColor:"inherit",backdropFilter:"contrast(120%)",maxWidth:"300px"},children:[!r.show.changePassword&&(0,a.jsx)(l.Z,{variant:"contained",onClick:f,children:"Change Password"}),r.show.changePassword&&(0,a.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center"},children:[(0,a.jsx)(d.Z,{label:"Old Password",id:"old_password",size:"small",type:"password",fullwidth:"true",required:!0,color:r.form.old_password.color,helperText:r.form.old_password.helperText,value:r.form.old_password.value,error:r.form.old_password.error,onInput:t}),(0,a.jsx)(d.Z,{label:"New Password",id:"new_password",size:"small",type:"password",fullwidth:"true",required:!0,color:r.form.new_password.color,helperText:r.form.new_password.helperText,value:r.form.new_password.value,error:r.form.new_password.error,onInput:t}),(0,a.jsx)(d.Z,{label:"Password Confirmation",id:"password_confirmation",size:"small",type:"password",fullwidth:"true",required:!0,color:r.form.password_confirmation.color,helperText:r.form.password_confirmation.helperText,value:r.form.password_confirmation.value,error:r.form.password_confirmation.error,onInput:t})]}),r.show.save&&(0,a.jsx)(l.Z,{variant:"contained",fullWidth:!0,onClick:w,children:"Save"})]})})]})};e.default=(0,w.Z)(f)}},function(r){r.O(0,[540,101,548,77,774,888,179],function(){return r(r.s=9655)}),_N_E=r.O()}]);