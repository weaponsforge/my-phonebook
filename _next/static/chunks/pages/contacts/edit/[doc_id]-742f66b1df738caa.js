(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{8192:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts/edit/[doc_id]",function(){return i(1513)}])},1513:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Z}});var l=i(5893),n=i(1163),a=i(7294),o=i(1638),r=i(7488),s=i(1018),u=i(7357),d=i(1987),c=i(3972),p=i(7952),h=i(2715),f=i(9397),m=i(6489),g=i(8534),v=i(5077),_=i(2012),x=i(8978);let y="savedPhotoBlob",C={sorting:"",first_name:"",middle_name:"",last_name:"",phone_number:"",email_address:"",profile_picture_url:""},j="picturefile",b=()=>{var e,t,i,g,b;let[Z,E]=(0,a.useState)(!1),[k,N]=(0,a.useState)(null),[w,P]=(0,a.useState)(!1),[S,z]=(0,a.useState)(!1),D=(0,n.useRouter)(),{doc_id:O}=D.query,{authUser:M}=(0,o.C0)("auth"),R=(0,o.ay)("contacts"),A=(0,o.C0)(j),F=R.data.filter(e=>e.doc_id===O)[0],[L,U]=(0,a.useState)(null!=F?F:C),{loading:W,error:G,photo:J}=function(e){let t=(0,o.ay)(y),[i,l]=(0,a.useState)("");(0,a.useEffect)(()=>{let e=()=>{(0,o.Gt)(y,async()=>null,{deleteExistingData:!0})};return e(),()=>e()},[]),(0,a.useEffect)(()=>{if(i)return()=>{URL.revokeObjectURL(i)}},[i]),(0,a.useEffect)(()=>{if(null!==t.data&&!t.loading){let e=URL.createObjectURL(t.data);l(e)}},[t]),(0,a.useEffect)(()=>{e&&(0,o.Gt)(y,async()=>(0,s.kX)(e))},[e]);let n=(0,a.useMemo)(()=>{var e,i,l;return"boolean"==typeof t.error?"":null!==(l=null===(e=t.error)||void 0===e?void 0:null===(i=e.response)||void 0===i?void 0:i.data)&&void 0!==l?l:t.error.message},[t.error]);return{data:t.data,loading:t.loading,error:n,photo:i}}(""===L.profile_picture_url?null:L.profile_picture_url),T=(0,a.useMemo)(()=>{var e;return w?null!==(e=null==A?void 0:A.imgSrc)&&void 0!==e?e:"":J},[A,J,w]),q=(0,a.useMemo)(()=>""!==G?G:k||"",[k,G]);(0,a.useEffect)(()=>{S||(U(F),z(!0))},[F,S]);let H=e=>{let t=e.target.id,i=e.target.value,l={...L,[t]:i};U(l),JSON.stringify(l)===JSON.stringify(F)?E(!1):E(!0)};(0,o.cA)("contacts.loading",!0);let I=async()=>{var e,t,i,l;let n={...L,sorting:"".concat(L.first_name).concat(L.middle_name).concat(L.last_name).toUpperCase()};if(null==A?void 0:A.file)try{await (0,s.vJ)("photos/".concat(M.uid),A.file,"photo_".concat(O)),n.profile_picture_url="photos/".concat(M.uid,"/photo_").concat(O),(0,o.lC)("public_picture.".concat(JSON.stringify(n.profile_picture_url)))}catch(l){let i=null!==(t=null==l?void 0:null===(e=l.response)||void 0===e?void 0:e.data)&&void 0!==t?t:l.message;i.includes("storage/unauthorized")&&(i="Photo upload failed. Please verify that the photo you are uploading is less than 1 MB in file size. Only .jpg, .jpeg, .png, .gif, .bmp and .webp image file types are supported."),N(i);return}else w&&(n.profile_picture_url="");try{await r.q.updateDoc("users/".concat(M.uid,"/contacts/").concat(O),n),D.push("/contacts")}catch(t){let e=null!==(l=null==t?void 0:null===(i=t.response)||void 0===i?void 0:i.data)&&void 0!==l?l:t.message;e.includes("Missing or insufficient permissions")&&(e="Contact update failed. Please check your input."),N(e)}},X=async()=>{try{await Promise.all([r.q.deleteDoc("users/".concat(M.uid,"/contacts/").concat(O)),(0,s.C_)({pathToStorageDirectory:"photos/".concat(M.uid),fileName:"photo_".concat(O),allowMissingError:!0})]),U(C),D.push("/contacts")}catch(i){var e,t;N(null!==(t=null==i?void 0:null===(e=i.response)||void 0===e?void 0:e.data)&&void 0!==t?t:i.message)}};return(0,l.jsxs)(v.Z,{children:[(0,l.jsx)(u.Z,{sx:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"},children:(0,l.jsxs)(d.Z,{sx:{display:"grid",gridTemplateColumns:"1fr auto",gap:"10px",alignItems:"center",padding:"30px",borderRadius:"20px",backgroundColor:"inherit",backdropFilter:"contrast(120%)"},children:[(0,l.jsx)(c.Z,{variant:"h5",sx:{gridColumn:"1/-1"},children:"edit Contact"}),(0,l.jsxs)(u.Z,{sx:{aspectRatio:"1",gridColumn:"1/-1",position:"relative"},children:[(0,l.jsx)(p.Z,{src:T,alt:"profile_picture_url",sx:e=>({width:"342px",height:"342px",[e.breakpoints.down("400")]:{width:"100%",height:"100%"}}),children:w?null:W||""!==L.profile_picture_url?(0,l.jsx)(m.Z,{size:24,color:"info"}):null}),(0,l.jsx)(x.Z,{fileDomID:j,styles:{position:"absolute",bottom:"0",right:"0"},errorCallback:e=>N(e),clearFileCallback:()=>{w||(P(!0),E(!0))},setFileCallback:()=>{w||(P(!0),E(!0))},hasFile:""!==T})]}),(0,l.jsx)(c.Z,{variant:"h7",children:"First Name"}),(0,l.jsx)(h.Z,{id:"first_name",size:"small",inputProps:{style:{height:"20px"}},value:null!==(e=null==L?void 0:L.first_name)&&void 0!==e?e:"",onChange:H}),(0,l.jsx)(c.Z,{variant:"h7",children:"Middle Name"}),(0,l.jsx)(h.Z,{id:"middle_name",size:"small",inputProps:{style:{height:"20px"}},value:null!==(t=null==L?void 0:L.middle_name)&&void 0!==t?t:"",onChange:H}),(0,l.jsx)(c.Z,{variant:"h7",children:"Last Name"}),(0,l.jsx)(h.Z,{id:"last_name",size:"small",inputProps:{style:{height:"20px"}},value:null!==(i=null==L?void 0:L.last_name)&&void 0!==i?i:"",onChange:H}),(0,l.jsx)(c.Z,{variant:"h7",children:"Email Address"}),(0,l.jsx)(h.Z,{id:"email_address",size:"small",inputProps:{style:{height:"20px"}},value:null!==(g=null==L?void 0:L.email_address)&&void 0!==g?g:"",onChange:H}),(0,l.jsx)(c.Z,{variant:"h7",children:"Phone Number"}),(0,l.jsx)(h.Z,{id:"phone_number",size:"small",inputProps:{style:{height:"20px"}},value:null!==(b=null==L?void 0:L.phone_number)&&void 0!==b?b:"",onChange:H}),Z?(0,l.jsx)(f.Z,{variant:"contained",sx:{gridColumn:"1/-1",fontWeight:"bold"},onClick:I,children:"SAVE CHANGE"}):(0,l.jsx)(f.Z,{variant:"contained",disabled:!0,sx:{gridColumn:"1/-1",fontWeight:"bold"},children:"SAVE CHANGE"}),(0,l.jsx)(f.Z,{variant:"contained",fullWidth:!0,onClick:X,sx:{gridColumn:"1/-1",fontWeight:"bold"},children:"Delete"})]})}),q&&(0,l.jsx)(_.Z,{message:q,closeHandler:()=>N(null)})]})};var Z=(0,g.Z)(b)}},function(e){e.O(0,[642,101,548,77,412,774,888,179],function(){return e(e.s=8192)}),_N_E=e.O()}]);