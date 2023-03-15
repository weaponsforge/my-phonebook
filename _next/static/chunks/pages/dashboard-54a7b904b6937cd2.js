(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{8456:function(r,e,t){"use strict";t.d(e,{Z:function(){return D}});var n=t(3366),i=t(7462),a=t(7294),s=t(6010),o=t(4780),c=t(917),l=t(8216),d=t(1657),u=t(948),h=t(1588),f=t(4867);function x(r){return(0,f.Z)("MuiCircularProgress",r)}(0,h.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p=t(5893);let v=["className","color","disableShrink","size","style","thickness","value","variant"],m=r=>r,g,k,Z,b,j=(0,c.F4)(g||(g=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,c.F4)(k||(k=m`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=r=>{let{classes:e,variant:t,color:n,disableShrink:i}=r,a={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,i&&"circleDisableShrink"]};return(0,o.Z)(a,x,e)},C=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,l.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>"indeterminate"===r.variant&&(0,c.iv)(Z||(Z=m`
      animation: ${0} 1.4s linear infinite;
    `),j)),P=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),S=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.circle,e[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,c.iv)(b||(b=m`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y)),_=a.forwardRef(function(r,e){let t=(0,d.Z)({props:r,name:"MuiCircularProgress"}),{className:a,color:o="primary",disableShrink:c=!1,size:l=40,style:u,thickness:h=3.6,value:f=0,variant:x="indeterminate"}=t,m=(0,n.Z)(t,v),g=(0,i.Z)({},t,{color:o,disableShrink:c,size:l,thickness:h,value:f,variant:x}),k=w(g),Z={},b={},j={};if("determinate"===x){let r=2*Math.PI*((44-h)/2);Z.strokeDasharray=r.toFixed(3),j["aria-valuenow"]=Math.round(f),Z.strokeDashoffset=`${((100-f)/100*r).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,p.jsx)(C,(0,i.Z)({className:(0,s.Z)(k.root,a),style:(0,i.Z)({width:l,height:l},b,u),ownerState:g,ref:e,role:"progressbar"},j,m,{children:(0,p.jsx)(P,{className:k.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,p.jsx)(S,{className:k.circle,style:Z,ownerState:g,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})}))});var D=_},1015:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(4036)}])},8534:function(r,e,t){"use strict";t.d(e,{Z:function(){return x}});var n=t(5893),i=t(7294),a=t(1163),s=t(9005),o=t(7357),c=t(5861),l=t(8456),d=t(3025),u=function(r){let{children:e}=r;return(0,n.jsx)(o.Z,{sx:{width:{md:"800px"},backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:"8px",boxShadow:"box-shadow: 0 10px 40px rgb(0 0 0 / 14%)",textAlign:"center",padding:"24px",display:"grid",placeContent:"center"},children:e})},h=t(3367),f=function(r){let{authError:e}=r,[t]=(0,h.e)("activeTheme");return(0,n.jsx)(d.Z,{children:(0,n.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",placeContent:"center",height:"100vh"},children:(0,n.jsxs)(u,{children:[(0,n.jsx)("span",{children:(0,n.jsx)(c.Z,{variant:"h6",color:"#000",children:"Loading..."})}),(0,n.jsx)("span",{children:(0,n.jsx)(l.Z,{color:"light"===t?"dark":"primary"})}),e&&(0,n.jsx)(c.Z,{variant:"label",color:"error",children:e})]})})})},x=function(r){return function(e){let t=(0,a.useRouter)(),{authLoading:o,authError:c,authUser:l}=(0,s.a)();(0,i.useEffect)(()=>{o||l||t.push("/login")},[l,o,t]);let d=()=>o?(0,n.jsx)(f,{}):l?(0,n.jsx)(r,{...e}):(0,n.jsx)(f,{authError:c});return(0,n.jsx)(d,{})}}},4036:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var n=t(5893),i=t(8534),a=t(3025),s=function(){return(0,n.jsx)(a.Z,{children:(0,n.jsx)("h1",{children:"Dashboard"})})},o=(0,i.Z)(function(){return(0,n.jsx)(s,{})})}},function(r){r.O(0,[146,25,774,888,179],function(){return r(r.s=1015)}),_N_E=r.O()}]);