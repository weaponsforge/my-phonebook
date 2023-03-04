(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{4797:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgotPassword",function(){return t(2210)}])},5323:function(e,r,t){"use strict";t.d(r,{Q:function(){return g}});var n=t(2037),a=t(4924),l=t(7297);function i(){let e=(0,l.Z)(["(?<uppercase>[A-Z])"]);return i=function(){return e},e}function c(){let e=(0,l.Z)(["(?<lowercase>[a-z])"]);return c=function(){return e},e}function s(){let e=(0,l.Z)(["(?<number>[0-9])"]);return s=function(){return e},e}function u(){let e=(0,l.Z)(["(?<symbol>[-#?!@$ %^&*())])"]);return u=function(){return e},e}function o(){let e=(0,l.Z)(["(?<prohibitedCharacters>[-a-zA-Z0-9#?!@$ %^&*()]+)"]);return o=function(){return e},e}function p(){let e=(0,l.Z)(["(?<emailPrefix>^[^@]+)"]);return p=function(){return e},e}function d(){let e=(0,l.Z)(["(?<atSymbol>@)"]);return d=function(){return e},e}function h(){let e=(0,l.Z)(["(?<domain>[^@]+$)"]);return h=function(){return e},e}class g{}(0,a.Z)(g,"email",e=>{let r=(0,n.Z)(g,g,b).call(g,e),t=(0,n.Z)(g,g,E).call(g,e),a=(0,n.Z)(g,g,S).call(g,e),l=!r||!t||!a,i=(0,n.Z)(g,g,j).call(g,l,r,t,a);return{error:l,helperText:i,color:l?"error":"success"}}),(0,a.Z)(g,"password",e=>{let r=(0,n.Z)(g,g,f).call(g,e),t=(0,n.Z)(g,g,x).call(g,e),a=(0,n.Z)(g,g,m).call(g,e),l=(0,n.Z)(g,g,w).call(g,e),i=(0,n.Z)(g,g,Z).call(g,e),c=(0,n.Z)(g,g,v).call(g,e),s=!r||!t||!a||!l||!i||c,u=(0,n.Z)(g,g,k).call(g,s,r,t,a,l,i,c);return{error:s,helperText:u,color:s?"error":"success"}}),(0,a.Z)(g,"passwordConfirmation",(e,r)=>{if(e.error)return{error:!0,helperText:"Check : invalid password",color:"error"};let t=e.value!==r;return{error:t,helperText:t?"Check : password missmatch":"Valid",color:t?"error":"success"}});var f={writable:!0,value:e=>{let r=e.length>=8&&e.length<=30;return r}},x={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(i())));return r}},m={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(c())));return r}},w={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(s())));return r}},Z={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(u())));return r}},v={writable:!0,value:e=>{let r=e.replace(RegExp(String.raw(o()),"g"),"");return""!==r&&[...r].join(" ")}},b={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(p())));return r}},E={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(d())));return r}},S={writable:!0,value:e=>{let r=!!e.match(RegExp(String.raw(h())));return r}},j={writable:!0,value:(e,r,t,n)=>{switch(e){case!0:let a=[!r&&"missing email prefix",!t&&"missing @",!n&&"missing email domain"].filter(e=>!1!==e).join(", ");return"Check : ".concat(a);case!1:return"Valid email"}}},k={writable:!0,value:(e,r,t,n,a,l,i)=>{switch(e){case!0:let c=[!r&&"should consist of 8 to 30 characters",!t&&"missing an uppercase letter",!n&&"missing a lowercase letter",!a&&"missing an alphanumeric character",!l&&"missing a special character",!!i&&"contains prohibited character(s) : ".concat(i)].filter(e=>!1!==e).join(", ");return"Check : ".concat(c);case!1:return"Valid password"}}}},2210:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),a=t(3025),l=t(891),i=t(5323),c=t(629),s=t(5861),u=t(5441),o=t(3321),p=t(7294),d=t(7036);let h=()=>{let[e,r]=(0,p.useState)({error:!0,helperText:" ",value:"",color:"text"}),[t,h]=(0,p.useState)();(0,p.useEffect)(()=>{setTimeout(async()=>{let e=await (0,l.n)();h(e)})},[]);let g=t=>{let{helperText:n,error:a,color:l}=i.Q.email(t.target.value),c={...e,value:t.target.value,error:a,helperText:n,color:l};r(c)},f=()=>{};return(0,n.jsx)(a.Z,{children:(0,n.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",justifyContent:"center",flex:1,background:"inherit",flexWrap:"wrap-reverse"},children:[(0,n.jsxs)(s.Z,{variant:"h8",component:"h3",gutterBottom:!0,sx:{color:e=>e.palette.text.disabled,textAlign:"center",paddingLeft:"20px",paddingRight:"20px",width:"50vw"},children:["`",t&&t.joke,"`"]}),(0,n.jsxs)(c.Z,{elevation:0,sx:{display:"grid",gridTemplateColumns:"1fr 20px",gridTemplateAreas:'"username icon1"\n              "resetPassword ."',alignItems:"stretch",gap:"10px",minWidth:"300px",width:"500px",borderRadius:"30px",padding:"40px",background:"inherit"},children:[(0,n.jsx)(u.Z,{label:"Username (email)",id:"username",size:"small",type:"text",fullwidth:"true",required:!0,color:e.color,helperText:e.helperText,value:e.value,error:e.error,onChange:g,sx:{gridArea:"username"}}),!e.error&&(0,n.jsx)(d.Z,{fontSize:"large",color:"success",sx:{gridArea:"icon1"}}),(0,n.jsx)(o.Z,{variant:"contained",sx:{fontWeight:"bold",color:e=>e.palette.primary.contrastText,gridArea:"resetPassword"},onClick:f,children:"RESET PASSWORD"})]})]})})},g=()=>(0,n.jsx)(h,{});var f=g}},function(e){e.O(0,[190,827,387,774,888,179],function(){return e(e.s=4797)}),_N_E=e.O()}]);