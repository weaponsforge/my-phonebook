"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[600],{8600:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(5893),a=n(7357),o=n(1987),i={footer:{display:{xs:"none",md:"block"},width:"100%",minHeight:e=>e.spacing(4),padding:e=>e.spacing(2),textAlign:"center",marginTop:"auto",zIndex:100,background:"inherit",backdropFilter:"blur(5px)",fontWeight:"bold"}},l=function(){return(0,r.jsx)(o.Z,{elevation:10,sx:i.footer,component:"footer",children:"myPhonebook @2023"})},s=n(4924),c=n(7294),x=n(1664),d=n.n(x),h=n(1163),p=n(9078),u=n(2595),m=n(6646),f=n(9485),g=n(326),j=n(9206),k=n(7952),y=n(9397),Z=n(5582),b=n(4799),C=n(4486),v=n(3931),w=n(3808),D=n(1023),N=n(3972),W=n(655),z=n(2736),S=n(3367),T=n(4758),I=n(3232);let M=["about"],O=[{name:"Profile",route:"profile"},{name:"Account",route:"/"},{name:"Contacts",route:"contacts"},{name:"Logout",route:"#"}];var A=function(){let[e,t]=(0,c.useState)(null),[n,o]=(0,c.useState)(null),i=(0,S.e6)("activeTheme"),l=(0,S.e6)("animate"),{authUser:x}=(0,I.C0)("auth"),A=(0,h.useRouter)();class F{}(0,s.Z)(F,"themeHandler",()=>{(0,S.kL)("activeTheme","dark"===i?"light":"dark")}),(0,s.Z)(F,"handleOpenNavMenu",e=>{t(e.currentTarget)}),(0,s.Z)(F,"handleOpenUserMenu",e=>{o(e.currentTarget)}),(0,s.Z)(F,"handleCloseNavMenu",()=>{t(null)}),(0,s.Z)(F,"handleCloseUserMenu",()=>{o(null)}),(0,s.Z)(F,"handleClickNavMenu",e=>{A.push(e)}),(0,s.Z)(F,"animateHandler",()=>{(0,S.kL)("animate",!l)});let{themeHandler:L,handleOpenNavMenu:P,handleOpenUserMenu:E,handleCloseNavMenu:_,handleCloseUserMenu:B,handleClickNavMenu:G,animateHandler:H}=F;return(0,r.jsx)(j.Z,{elevation:10,sx:{position:"relative",zIndex:100,background:"inherit",backdropFilter:"blur(5px)"},id:"appBar",children:(0,r.jsx)(Z.Z,{maxWidth:"xxl",children:(0,r.jsxs)(w.Z,{disableGutters:!0,children:[(0,r.jsx)(d(),{href:"/",style:{textDecoration:"none",display:"flex"},children:(0,r.jsx)(N.Z,{className:T.G3.className,variant:"h6",noWrap:!0,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".1rem",textDecoration:"none",color:e=>e.palette.text.primary},children:"myPhonebook"})}),(0,r.jsxs)(a.Z,{sx:{display:{xs:"flex",md:"none"}},children:[(0,r.jsx)(b.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:P,color:"inherit",children:(0,r.jsx)(g.Z,{})}),(0,r.jsx)(C.Z,{id:"menu-appbar",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(e),onClose:_,sx:{display:{xs:"block",md:"none"}},children:M.map(e=>(0,r.jsx)(v.Z,{onClick:_,children:(0,r.jsx)(N.Z,{textAlign:"center",children:e})},e))})]}),(0,r.jsx)(d(),{href:"/",style:{textDecoration:"none",display:"flex",flex:1,justifyContent:"center"},children:(0,r.jsx)(N.Z,{className:T.G3.className,variant:"h5",noWrap:!0,sx:{display:{xs:"flex",md:"none"},fontWeight:700,letterSpacing:".1rem",textDecoration:"none",marginTop:"5px",color:e=>e.palette.text.primary},children:"myPhonebook"})}),(0,r.jsx)(a.Z,{sx:{display:{xs:"none",md:"flex"}},children:M.map(e=>(0,r.jsx)(d(),{href:"/".concat(e),style:{textDecoration:"none"},children:(0,r.jsx)(y.Z,{onClick:_,sx:{my:2,color:e=>e.palette.text.primary,display:"block",fontWeight:"bold"},children:e})},e))}),null!==x?(0,r.jsxs)(a.Z,{sx:{flex:0},children:[(0,r.jsx)(D.Z,{title:"Open settings",children:(0,r.jsx)(b.Z,{onClick:E,sx:{p:0},children:(0,r.jsx)(k.Z,{alt:"avatarPicture",src:"/static/images/avatar/2.jpg"})})}),(0,r.jsx)(C.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:B,children:O.map((e,t)=>"Logout"===e.name?(0,r.jsx)(v.Z,{onClick:()=>(0,z.h)(),children:(0,r.jsx)(N.Z,{textAlign:"center",children:e.name})},t):(0,r.jsx)(v.Z,{onClick:()=>G(e.route),children:(0,r.jsx)(N.Z,{textAlign:"center",children:e.name})},t))})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,r.jsx)(d(),{href:"/login",style:{textDecoration:"none"},children:(0,r.jsx)(y.Z,{sx:{my:2,color:"black",display:{xs:"none",md:"flex"}},children:(0,r.jsx)(N.Z,{variant:"h8",sx:{fontWeight:"bold",color:e=>e.palette.text.primary},children:"Login"})})}),(0,r.jsx)(d(),{href:"/register",style:{textDecoration:"none"},children:(0,r.jsx)(y.Z,{sx:{my:2,color:"black",display:{xs:"none",md:"flex"}},children:(0,r.jsx)(N.Z,{variant:"h8",sx:{fontWeight:"bold",color:e=>e.palette.text.primary},children:"Register"})})})]}),(0,r.jsx)(d(),{href:"/login",style:{textDecoration:"none"},children:(0,r.jsx)(b.Z,{sx:{color:"black",display:{xs:"flex",md:"none"},justifyContent:"center",alignItems:"center"},children:"dark"===i?(0,r.jsx)(f.Z,{style:{filter:"invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)"}}):(0,r.jsx)(f.Z,{})})}),(0,r.jsx)(d(),{href:"/register",style:{textDecoration:"none"},children:(0,r.jsx)(b.Z,{sx:{color:"black",display:{xs:"flex",md:"none"},justifyContent:"center",alignItems:"center"},children:"dark"===i?(0,r.jsx)(u.Z,{style:{filter:"invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)"}}):(0,r.jsx)(u.Z,{})})})]}),(0,r.jsx)(b.Z,{sx:{color:"black",display:"flex",justifyContent:"center",alignItems:"center"},onClick:H,children:"dark"===i?(0,r.jsx)(W.Z,{style:{filter:"invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)"}}):(0,r.jsx)(W.Z,{})}),(0,r.jsx)(b.Z,{sx:{color:"black",display:"flex",justifyContent:"center",alignItems:"center"},onClick:L,children:"dark"===i?(0,r.jsx)(m.Z,{style:{filter:"invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)"}}):(0,r.jsx)(p.Z,{})})]})})})},F={container:{height:"100%",flex:1,display:"flex",flexDirection:"column",overflow:"auto"}},L=function(e){let{children:t}=e;return(0,r.jsx)(a.Z,{sx:F.container,children:t})};let P=()=>{let e=(0,S.e6)("activeTheme");return(0,r.jsx)(a.Z,{sx:{"&:after,:before":{content:'""',display:"block",position:"fixed",zIndex:"-1",top:0,width:"100%",height:"100%",animation:"animate 90s linear infinite, ".concat("dark"===e?"darkColorSwitcher":"lightColorSwitcher"," 42s linear infinite")},"&:after":{left:"15vw"},"&:before":{right:"15vw",animationDelay:"-15s",animationDirection:"reverse"},"@keyframes lightColorSwitcher":{"0%":{backgroundColor:"hsla(0,40%,80%,80%)"},"50%":{backgroundColor:"hsla(180,50%,80%,80%)"},"100%":{backgroundColor:"hsla(360,40%,80%,80%)"}},"@keyframes darkColorSwitcher":{"0%":{backgroundColor:"hsla(0,40%,80%,10%)"},"50%":{backgroundColor:"hsla(180,50%,80%,10%)"},"100%":{backgroundColor:"hsla(360,40%,80%,10%)"}},"@keyframes animate":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}}})};var E=function(e){let{children:t}=e,n=(0,S.e6)("animate");return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(P,{}),(0,r.jsxs)(a.Z,{sx:{width:"100%",height:"100%",display:"grid",gridTemplateRows:"auto 1fr auto"},children:[(0,r.jsx)(A,{}),(0,r.jsx)(L,{children:t}),(0,r.jsx)(l,{})]})]})}}}]);