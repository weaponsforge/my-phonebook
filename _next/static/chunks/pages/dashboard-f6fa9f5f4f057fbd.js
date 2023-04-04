(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6489:function(r,e,t){"use strict";var n=t(3366),i=t(7462),s=t(7294),a=t(6010),o=t(4780),c=t(917),l=t(8216),u=t(1657),d=t(948),h=t(2346),f=t(5893);let x=["className","color","disableShrink","size","style","thickness","value","variant"],p=r=>r,m,v,g,Z,k=(0,c.F4)(m||(m=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),j=(0,c.F4)(v||(v=p`
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
`)),y=r=>{let{classes:e,variant:t,color:n,disableShrink:i}=r,s={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,i&&"circleDisableShrink"]};return(0,o.Z)(s,h.C,e)},b=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,l.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>"indeterminate"===r.variant&&(0,c.iv)(g||(g=p`
      animation: ${0} 1.4s linear infinite;
    `),k)),C=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),w=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.circle,e[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,c.iv)(Z||(Z=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),j)),P=s.forwardRef(function(r,e){let t=(0,u.Z)({props:r,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:c=!1,size:l=40,style:d,thickness:h=3.6,value:p=0,variant:m="indeterminate"}=t,v=(0,n.Z)(t,x),g=(0,i.Z)({},t,{color:o,disableShrink:c,size:l,thickness:h,value:p,variant:m}),Z=y(g),k={},j={},P={};if("determinate"===m){let r=2*Math.PI*((44-h)/2);k.strokeDasharray=r.toFixed(3),P["aria-valuenow"]=Math.round(p),k.strokeDashoffset=`${((100-p)/100*r).toFixed(3)}px`,j.transform="rotate(-90deg)"}return(0,f.jsx)(b,(0,i.Z)({className:(0,a.Z)(Z.root,s),style:(0,i.Z)({width:l,height:l},j,d),ownerState:g,ref:e,role:"progressbar"},P,v,{children:(0,f.jsx)(C,{className:Z.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,f.jsx)(w,{className:Z.circle,style:k,ownerState:g,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})}))});e.Z=P},2346:function(r,e,t){"use strict";t.d(e,{C:function(){return s}});var n=t(1588),i=t(4867);function s(r){return(0,i.Z)("MuiCircularProgress",r)}let a=(0,n.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);e.Z=a},1015:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(4036)}])},8534:function(r,e,t){"use strict";t.d(e,{Z:function(){return x}});var n=t(5893),i=t(7294),s=t(1163),a=t(9005),o=t(7357),c=t(3972),l=t(6489),u=t(8600),d=function(r){let{children:e}=r;return(0,n.jsx)(o.Z,{sx:{width:{sm:"600px"},backgroundColor:{xs:"none",sm:"rgba(255, 255, 255, 0.4)"},borderRadius:"8px",textAlign:"center",margin:"24px !important",padding:"24px",display:"grid",placeContent:"center"},children:e})},h=t(3367),f=function(r){let{authError:e}=r,t=(0,h.e6)("activeTheme");return(0,n.jsx)(u.Z,{children:(0,n.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",placeContent:"center",height:"100vh"},children:(0,n.jsxs)(d,{children:[(0,n.jsx)("span",{children:(0,n.jsx)(c.Z,{variant:"h6",color:"#000",children:"Loading..."})}),(0,n.jsx)("span",{children:(0,n.jsx)(l.Z,{color:"light"===t?"dark":"primary"})}),e&&(0,n.jsx)(c.Z,{variant:"label",color:"error",children:e})]})})})},x=function(r){return function(e){let t=(0,s.useRouter)(),{authLoading:o,authError:c,authUser:l}=(0,a.a)();(0,i.useEffect)(()=>{o||l||t.push("/login")},[l,o,t]);let u=()=>o?(0,n.jsx)(f,{}):l?(0,n.jsx)(r,{...e}):(0,n.jsx)(f,{authError:c});return(0,n.jsx)(u,{})}}},4036:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var n=t(5893),i=t(8534),s=t(8600),a=function(){return(0,n.jsx)(s.Z,{children:(0,n.jsx)("h1",{children:"Dashboard"})})},o=(0,i.Z)(function(){return(0,n.jsx)(a,{})})}},function(r){r.O(0,[553,600,774,888,179],function(){return r(r.s=1015)}),_N_E=r.O()}]);