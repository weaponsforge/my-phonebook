(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1969:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(6518)}])},6518:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return b}});var l=n(5893),t=n(8534),s=n(5077),a=n(9361),r=n(7488),o=n(1170),d=n(7357),u=n(1987),c=n(3972),h=n(7952),p=n(4799),x=n(2715),m=n(9397),v=n(5697),g=n.n(v),f=n(7294),_=n(2092);let j=()=>{var e,i,n,t,v,g,j,Z;let b=null!==(n=null===(e=(0,_.C0)("auth"))||void 0===e?void 0:null===(i=e.authUser)||void 0===i?void 0:i.uid)&&void 0!==n?n:"",{data:C,loading:y}=(0,_.ay)("user"),[N,E]=(0,f.useState)(),[k,P]=(0,f.useState)(!1);(0,f.useEffect)(()=>{b&&r.q.subscribeDoc("users/".concat(b),async e=>{let i=e.data();(0,_.Gt)("user",i),E(i)})},[b]);let w=e=>{let i=e.target.id,n=e.target.value;E(e=>({...e,[i]:n})),JSON.stringify(N)===JSON.stringify(C)?P(!1):P(!0)},S=()=>{},z=()=>{r.q.updateDoc("users/".concat(b),N),P(!1)};return(0,l.jsxs)(s.Z,{children:[y&&(0,l.jsx)(a.l,{}),(0,l.jsx)(d.Z,{sx:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"},children:(0,l.jsxs)(u.Z,{sx:{display:"grid",gridTemplateColumns:"1fr auto",gap:"10px",alignItems:"center",padding:"30px",borderRadius:"20px",backgroundColor:"inherit",backdropFilter:"contrast(120%)"},children:[(0,l.jsx)(c.Z,{variant:"h5",sx:{gridColumn:"1/-1"},children:"my Profile"}),(0,l.jsxs)(d.Z,{sx:{aspectRatio:"1",gridColumn:"1/-1",position:"relative"},children:[(0,l.jsx)(h.Z,{src:null==N?void 0:N.profile_picture_url,alt:"profile_picture_url",sx:{width:"100%",height:"100%"},onClick:S}),(0,l.jsxs)(p.Z,{color:"primary","aria-label":"upload picture",component:"label",sx:{position:"absolute",bottom:"0",right:"0"},children:[(0,l.jsx)("input",{hidden:!0,accept:"image/*",type:"file"}),(0,l.jsx)(o.Z,{sx:{color:"black"}})]})]}),(0,l.jsx)(c.Z,{variant:"h7",children:"First Name"}),(0,l.jsx)(x.Z,{id:"first_name",size:"small",inputProps:{style:{height:"20px"}},value:null!==(t=null==N?void 0:N.first_name)&&void 0!==t?t:"",onChange:w}),(0,l.jsx)(c.Z,{variant:"h7",children:"Middle Name"}),(0,l.jsx)(x.Z,{id:"middle_name",size:"small",inputProps:{style:{height:"20px"}},value:null!==(v=null==N?void 0:N.middle_name)&&void 0!==v?v:"",onChange:w}),(0,l.jsx)(c.Z,{variant:"h7",children:"Last Name"}),(0,l.jsx)(x.Z,{id:"last_name",size:"small",inputProps:{style:{height:"20px"}},value:null!==(g=null==N?void 0:N.last_name)&&void 0!==g?g:"",onChange:w}),(0,l.jsx)(c.Z,{variant:"h7",children:"Email Address"}),(0,l.jsx)(x.Z,{id:"email_address",size:"small",inputProps:{style:{height:"20px"}},value:null!==(j=null==N?void 0:N.email_address)&&void 0!==j?j:"",onChange:w}),(0,l.jsx)(c.Z,{variant:"h7",children:"Phone Number"}),(0,l.jsx)(x.Z,{id:"phone_number",size:"small",inputProps:{style:{height:"20px"}},value:null!==(Z=null==N?void 0:N.phone_number)&&void 0!==Z?Z:"",onChange:w}),k?(0,l.jsx)(m.Z,{variant:"contained",sx:{gridColumn:"1/-1",fontWeight:"bold"},onClick:z,children:"SAVE CHANGE"}):(0,l.jsx)(m.Z,{variant:"contained",disabled:!0,sx:{gridColumn:"1/-1",fontWeight:"bold"},children:"SAVE CHANGE"})]})})]})};j.propTypes={state:g().object,eventsHandler:g().func};let Z=()=>(0,l.jsx)(j,{});var b=(0,t.Z)(Z)}},function(e){e.O(0,[540,101,77,456,774,888,179],function(){return e(e.s=1969)}),_N_E=e.O()}]);