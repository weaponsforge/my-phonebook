(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8417:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),i=Math.abs,s=String.fromCharCode,o=Object.assign;function a(e,t,n){return e.replace(t,n)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function c(e,t,n){return e.slice(t,n)}function h(e){return e.length}function d(e,t){return t.push(e),e}var f=1,p=1,m=0,g=0,y=0,v="";function b(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:f,column:p,length:o,return:""}}function w(e,t){return o(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function _(){return y=g<m?l(v,g++):0,p++,10===y&&(p=1,f++),y}function E(){return l(v,g)}function I(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return f=p=1,m=h(v=e),g=0,[]}function S(e){var t,n;return(t=g-1,n=function e(t){for(;_();)switch(y){case t:return g;case 34:case 39:34!==t&&39!==t&&e(y);break;case 40:41===t&&e(t);break;case 92:_()}return g}(91===e?e+2:40===e?e+1:e),c(v,t,n)).trim()}var k="-ms-",A="-moz-",C="-webkit-",O="comm",N="rule",R="decl",D="@keyframes";function x(e,t){for(var n="",r=e.length,i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function P(e,t,n,r){switch(e.type){case"@import":case R:return e.return=e.return||e.value;case O:return"";case D:return e.return=e.value+"{"+x(e.children,r)+"}";case N:e.value=e.props.join(",")}return h(n=x(e.children,r))?e.return=e.value+"{"+n+"}":""}function L(e,t,n,r,s,o,u,l,h,d,f){for(var p=s-1,m=0===s?o:[""],g=m.length,y=0,v=0,w=0;y<r;++y)for(var _=0,E=c(e,p+1,p=i(v=u[y])),I=e;_<g;++_)(I=(v>0?m[_]+" "+E:a(E,/&\f/g,m[_])).trim())&&(h[w++]=I);return b(e,t,n,0===s?N:l,h,d,f)}function M(e,t,n,r){return b(e,t,n,R,c(e,0,r),c(e,r+1,-1),r)}var U=function(e,t,n){for(var r=0,i=0;r=i,i=E(),38===r&&12===i&&(t[n]=1),!I(i);)_();return c(v,e,g)},F=function(e,t){var n=-1,r=44;do switch(I(r)){case 0:38===r&&12===E()&&(t[n]=1),e[n]+=U(g-1,t,n);break;case 2:e[n]+=S(r);break;case 4:if(44===r){e[++n]=58===E()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=s(r)}while(r=_());return e},j=function(e,t){var n;return n=F(T(e),t),v="",n},V=new WeakMap,$=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||V.get(n))&&!r){V.set(e,!0);for(var i=[],s=j(t,i),o=n.props,a=0,u=0;a<s.length;a++)for(var l=0;l<o.length;l++,u++)e.props[u]=i[a]?s[a].replace(/&\f/g,o[l]):o[l]+" "+s[a]}}},q=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},B=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case R:e.return=function e(t,n){switch(45^l(t,0)?(((n<<2^l(t,0))<<2^l(t,1))<<2^l(t,2))<<2^l(t,3):0){case 5103:return C+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return C+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return C+t+A+t+k+t+t;case 6828:case 4268:return C+t+k+t+t;case 6165:return C+t+k+"flex-"+t+t;case 5187:return C+t+a(t,/(\w+).+(:[^]+)/,C+"box-$1$2"+k+"flex-$1$2")+t;case 5443:return C+t+k+"flex-item-"+a(t,/flex-|-self/,"")+t;case 4675:return C+t+k+"flex-line-pack"+a(t,/align-content|flex-|-self/,"")+t;case 5548:return C+t+k+a(t,"shrink","negative")+t;case 5292:return C+t+k+a(t,"basis","preferred-size")+t;case 6060:return C+"box-"+a(t,"-grow","")+C+t+k+a(t,"grow","positive")+t;case 4554:return C+a(t,/([^-])(transform)/g,"$1"+C+"$2")+t;case 6187:return a(a(a(t,/(zoom-|grab)/,C+"$1"),/(image-set)/,C+"$1"),t,"")+t;case 5495:case 3959:return a(t,/(image-set\([^]*)/,C+"$1$`$1");case 4968:return a(a(t,/(.+:)(flex-)?(.*)/,C+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+C+t+t;case 4095:case 3583:case 4068:case 2532:return a(t,/(.+)-inline(.+)/,C+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-n>6)switch(l(t,n+1)){case 109:if(45!==l(t,n+4))break;case 102:return a(t,/(.+:)(.+)-([^]+)/,"$1"+C+"$2-$3$1"+A+(108==l(t,n+3)?"$3":"$2-$3"))+t;case 115:return~u(t,"stretch")?e(a(t,"stretch","fill-available"),n)+t:t}break;case 4949:if(115!==l(t,n+1))break;case 6444:switch(l(t,h(t)-3-(~u(t,"!important")&&10))){case 107:return a(t,":",":"+C)+t;case 101:return a(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+C+(45===l(t,14)?"inline-":"")+"box$3$1"+C+"$2$3$1"+k+"$2box$3")+t}break;case 5936:switch(l(t,n+11)){case 114:return C+t+k+a(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return C+t+k+a(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return C+t+k+a(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return C+t+k+t+t}return t}(e.value,e.length);break;case D:return x([w(e,{value:a(e.value,"@","@"+C)})],r);case N:if(e.length)return e.props.map(function(t){var n;switch(n=t,(n=/(::plac\w+|:read-\w+)/.exec(n))?n[0]:n){case":read-only":case":read-write":return x([w(e,{props:[a(t,/:(read-\w+)/,":"+A+"$1")]})],r);case"::placeholder":return x([w(e,{props:[a(t,/:(plac\w+)/,":"+C+"input-$1")]}),w(e,{props:[a(t,/:(plac\w+)/,":"+A+"$1")]}),w(e,{props:[a(t,/:(plac\w+)/,k+"input-$1")]})],r)}return""}).join("")}}],z=function(e){var t,n,i,o,m,w=e.key;if("css"===w){var k=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(k,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var A=e.stylisPlugins||B,C={},N=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+w+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)C[t[n]]=!0;N.push(e)});var R=(n=(t=[$,q].concat(A,[P,(i=function(e){m.insert(e)},function(e){!e.root&&(e=e.return)&&i(e)})])).length,function(e,r,i,s){for(var o="",a=0;a<n;a++)o+=t[a](e,r,i,s)||"";return o}),D=function(e){var t,n;return x((n=function e(t,n,r,i,o,m,w,T,k){for(var A,C=0,N=0,R=w,D=0,x=0,P=0,U=1,F=1,j=1,V=0,$="",q=o,B=m,z=i,K=$;F;)switch(P=V,V=_()){case 40:if(108!=P&&58==l(K,R-1)){-1!=u(K+=a(S(V),"&","&\f"),"&\f")&&(j=-1);break}case 34:case 39:case 91:K+=S(V);break;case 9:case 10:case 13:case 32:K+=function(e){for(;y=E();)if(y<33)_();else break;return I(e)>2||I(y)>3?"":" "}(P);break;case 92:K+=function(e,t){for(var n;--t&&_()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return n=g+(t<6&&32==E()&&32==_()),c(v,e,n)}(g-1,7);continue;case 47:switch(E()){case 42:case 47:d(b(A=function(e,t){for(;_();)if(e+y===57)break;else if(e+y===84&&47===E())break;return"/*"+c(v,t,g-1)+"*"+s(47===e?e:_())}(_(),g),n,r,O,s(y),c(A,2,-2),0),k);break;default:K+="/"}break;case 123*U:T[C++]=h(K)*j;case 125*U:case 59:case 0:switch(V){case 0:case 125:F=0;case 59+N:x>0&&h(K)-R&&d(x>32?M(K+";",i,r,R-1):M(a(K," ","")+";",i,r,R-2),k);break;case 59:K+=";";default:if(d(z=L(K,n,r,C,N,o,T,$,q=[],B=[],R),m),123===V){if(0===N)e(K,n,z,z,q,m,R,T,B);else switch(99===D&&110===l(K,3)?100:D){case 100:case 109:case 115:e(t,z,z,i&&d(L(t,z,z,0,0,o,T,$,o,q=[],R),B),o,B,R,T,i?q:B);break;default:e(K,z,z,z,[""],B,0,T,B)}}}C=N=x=0,U=j=1,$=K="",R=w;break;case 58:R=1+h(K),x=P;default:if(U<1){if(123==V)--U;else if(125==V&&0==U++&&125==(y=g>0?l(v,--g):0,p--,10===y&&(p=1,f--),y))continue}switch(K+=s(V),V*U){case 38:j=N>0?1:(K+="\f",-1);break;case 44:T[C++]=(h(K)-1)*j,j=1;break;case 64:45===E()&&(K+=S(_())),D=E(),N=R=h($=K+=function(e){for(;!I(E());)_();return c(v,e,g)}(g)),V++;break;case 45:45===P&&2==h(K)&&(U=0)}}return m}("",null,null,null,[""],t=T(t=e),0,[0],t),v="",n),R)},U={key:w,sheet:new r({key:w,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:C,registered:{},insert:function(e,t,n,r){m=n,D(e?e+"{"+t.styles+"}":t.styles),r&&(U.inserted[t.name]=!0)}};return U.sheet.hydrate(N),U}},5042:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},2443:function(e,t,n){"use strict";n.d(t,{C:function(){return o},T:function(){return u},u:function(){return l},w:function(){return a}});var r=n(7294),i=n(8417);n(8137),n(7278);var s=(0,r.createContext)("undefined"!=typeof HTMLElement?(0,i.Z)({key:"css"}):null),o=s.Provider,a=function(e){return(0,r.forwardRef)(function(t,n){return e(t,(0,r.useContext)(s),n)})},u=(0,r.createContext)({}),l=function(){return(0,r.useContext)(u)}},917:function(e,t,n){"use strict";n.d(t,{F4:function(){return c},iv:function(){return l},xB:function(){return u}});var r=n(7294);n(8417);var i=n(2443);n(8679);var s=n(444),o=n(8137),a=n(7278),u=(0,i.w)(function(e,t){var n=e.styles,u=(0,o.O)([n],void 0,(0,r.useContext)(i.T)),l=(0,r.useRef)();return(0,a.j)(function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,i=document.querySelector('style[data-emotion="'+e+" "+u.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==i&&(r=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),l.current=[n,r],function(){n.flush()}},[t]),(0,a.j)(function(){var e=l.current,n=e[0];if(e[1]){e[1]=!1;return}if(void 0!==u.next&&(0,s.My)(t,u.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",u,n,!1)},[t,u.name]),null});function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.O)(t)}var c=function(){var e=l.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},8137:function(e,t,n){"use strict";n.d(t,{O:function(){return m}});var r,i=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&n)*1540483477+((n>>>16)*59797<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n^=255&e.charCodeAt(r),n=(65535&n)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,(((n=(65535&n)*1540483477+((n>>>16)*59797<<16))^n>>>15)>>>0).toString(36)},s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=n(5042),a=/[A-Z]|^ms/g,u=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},h=(0,o.Z)(function(e){return l(e)?e:e.replace(a,"-$&").toLowerCase()}),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(u,function(e,t,n){return r={name:t,styles:n,next:r},t})}return 1===s[e]||l(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return r={name:n.name,styles:n.styles,next:r},n.name;if(void 0!==n.styles){var i=n.next;if(void 0!==i)for(;void 0!==i;)r={name:i.name,styles:i.styles,next:r},i=i.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=f(e,t,n[i])+";";else for(var s in n){var o=n[s];if("object"!=typeof o)null!=t&&void 0!==t[o]?r+=s+"{"+t[o]+"}":c(o)&&(r+=h(s)+":"+d(s,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==t||void 0===t[o[0]]))for(var a=0;a<o.length;a++)c(o[a])&&(r+=h(s)+":"+d(s,o[a])+";");else{var u=f(e,t,o);switch(s){case"animation":case"animationName":r+=h(s)+":"+u+";";break;default:r+=s+"{"+u+"}"}}}return r}(e,t,n);case"function":if(void 0!==e){var s=r,o=n(e);return r=s,f(e,t,o)}}if(null==t)return n;var a=t[n];return void 0!==a?a:n}var p=/label:\s*([^\s;\n{]+)\s*(;|$)/g,m=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var s,o=!0,a="";r=void 0;var u=e[0];null==u||void 0===u.raw?(o=!1,a+=f(n,t,u)):a+=u[0];for(var l=1;l<e.length;l++)a+=f(n,t,e[l]),o&&(a+=u[l]);p.lastIndex=0;for(var c="";null!==(s=p.exec(a));)c+="-"+s[1];return{name:i(a)+c,styles:a,next:r}}},7278:function(e,t,n){"use strict";n.d(t,{L:function(){return o},j:function(){return a}});var r,i=n(7294),s=!!(r||(r=n.t(i,2))).useInsertionEffect&&(r||(r=n.t(i,2))).useInsertionEffect,o=s||function(e){return e()},a=s||i.useLayoutEffect},444:function(e,t,n){"use strict";function r(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "}),r}n.d(t,{My:function(){return s},fp:function(){return r},hC:function(){return i}});var i=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},s=function(e,t,n){i(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do e.insert(t===s?"."+r:"",s,e.sheet,!0),s=s.next;while(void 0!==s)}}},4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return v},L:function(){return u},LL:function(){return C},P0:function(){return m},Pz:function(){return y},Sg:function(){return b},ZR:function(){return A},aH:function(){return g},b$:function(){return I},eu:function(){return k},hl:function(){return S},m9:function(){return F},ne:function(){return L},pd:function(){return P},q4:function(){return p},ru:function(){return E},tV:function(){return l},uI:function(){return _},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],o=n[s];if(R(r)&&R(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w1:function(){return T},xO:function(){return D},xb:function(){return N},z$:function(){return w},zd:function(){return x}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[n++],o=e[n++],a=e[n++],u=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,l=i>>2,c=(3&i)<<4|o>>4,h=(15&o)<<2|u>>6,d=63&u;a||(d=64,s||(h=64)),r.push(n[l],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length,o=s?n[e.charAt(t)]:0;++t;let a=t<e.length,u=a?n[e.charAt(t)]:64;++t;let l=t<e.length,c=l?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==u||null==c)throw Error();let h=i<<2|o>>4;if(r.push(h),64!==u){let e=o<<4&240|u>>2;if(r.push(e),64!==c){let e=u<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,h=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},d=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&l(e[1]);return t&&JSON.parse(t)},f=()=>{try{return c()||h()||d()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},p=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{let t=p(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function E(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function I(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){let e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){try{return"object"==typeof indexedDB}catch(e){return!1}}function k(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(O,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new A(r,o,n);return a}}let O=/\{\$([^}]+)}/g;function N(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function x(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function P(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function L(e,t){let n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return e&&e._delegate?e._delegate:e}},6720:function(e,t,n){"use strict";n.d(t,{d1:function(){return l},dy:function(){return u}});var r=n(7462),i=n(7294),s=n(1657),o=n(6294),a=n(5893);let u=(e,t)=>(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),l=e=>(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),c=(e,t=!1)=>{var n,i;let s={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,n])=>{var r;s[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(r=n.palette)?void 0:r.mode}});let o=(0,r.Z)({html:u(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},l(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},s),a=null==(n=e.components)?void 0:null==(i=n.MuiCssBaseline)?void 0:i.styleOverrides;return a&&(o=[o,a]),o};t.ZP=function(e){let t=(0,s.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(o.Z,{styles:e=>c(e,r)}),n]})}},6294:function(e,t,n){"use strict";var r=n(7462);n(7294);var i=n(1234),s=n(247),o=n(5893);t.Z=function(e){return(0,o.jsx)(i.Z,(0,r.Z)({},e,{defaultTheme:s.Z}))}},859:function(e,t){"use strict";t.Z={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"}},6115:function(e,t){"use strict";t.Z={black:"#000",white:"#fff"}},3486:function(e,t){"use strict";t.Z={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"}},7036:function(e,t){"use strict";t.Z={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"}},5621:function(e,t){"use strict";t.Z={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"}},5137:function(e,t){"use strict";t.Z={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"}},4518:function(e,t){"use strict";t.Z={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"}},265:function(e,t){"use strict";t.Z={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"}},4562:function(e,t,n){"use strict";n.d(t,{A:function(){return N},Z:function(){return R}});var r=n(7462),i=n(3366),s=n(1387),o=n(9766),a=n(8647),u=n(4920),l=n(6523),c=n(1796),h=n(6115),d=n(7036),f=n(4518),p=n(265),m=n(5137),g=n(859),y=n(5621),v=n(3486);let b=["mode","contrastThreshold","tonalOffset"],w={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.Z.white,default:h.Z.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},_={text:{primary:h.Z.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:h.Z.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function E(e,t,n,r){let i=r.light||r,s=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,c.$n)(e.main,i):"dark"===t&&(e.dark=(0,c._j)(e.main,s)))}var I=n(1445);function T(...e){return`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2),${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14),${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`}let S=["none",T(0,2,1,-1,0,1,1,0,0,1,3,0),T(0,3,1,-2,0,2,2,0,0,1,5,0),T(0,3,3,-2,0,3,4,0,0,1,8,0),T(0,2,4,-1,0,4,5,0,0,1,10,0),T(0,3,5,-1,0,5,8,0,0,1,14,0),T(0,3,5,-1,0,6,10,0,0,1,18,0),T(0,4,5,-2,0,7,10,1,0,2,16,1),T(0,5,5,-3,0,8,10,1,0,3,14,2),T(0,5,6,-3,0,9,12,1,0,3,16,2),T(0,6,6,-3,0,10,14,1,0,4,18,3),T(0,6,7,-4,0,11,15,1,0,4,20,3),T(0,7,8,-4,0,12,17,2,0,5,22,4),T(0,7,8,-4,0,13,19,2,0,5,24,4),T(0,7,9,-4,0,14,21,2,0,5,26,4),T(0,8,9,-5,0,15,22,2,0,6,28,5),T(0,8,10,-5,0,16,24,2,0,6,30,5),T(0,8,11,-5,0,17,26,2,0,6,32,5),T(0,9,11,-5,0,18,28,2,0,7,34,6),T(0,9,12,-6,0,19,29,2,0,7,36,6),T(0,10,13,-6,0,20,31,3,0,8,38,7),T(0,10,13,-6,0,21,33,3,0,8,40,7),T(0,10,14,-6,0,22,35,3,0,8,42,7),T(0,11,14,-7,0,23,36,3,0,9,44,8),T(0,11,15,-7,0,24,38,3,0,9,46,8)];var k=n(6067),A={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let C=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function O(e={},...t){var n;let{mixins:T={},palette:N={},transitions:R={},typography:D={}}=e,x=(0,i.Z)(e,C);if(e.vars)throw Error((0,s.Z)(18));let P=function(e){let{mode:t="light",contrastThreshold:n=3,tonalOffset:a=.2}=e,u=(0,i.Z)(e,b),l=e.primary||function(e="light"){return"dark"===e?{main:g.Z[200],light:g.Z[50],dark:g.Z[400]}:{main:g.Z[700],light:g.Z[400],dark:g.Z[800]}}(t),I=e.secondary||function(e="light"){return"dark"===e?{main:f.Z[200],light:f.Z[50],dark:f.Z[400]}:{main:f.Z[500],light:f.Z[300],dark:f.Z[700]}}(t),T=e.error||function(e="light"){return"dark"===e?{main:p.Z[500],light:p.Z[300],dark:p.Z[700]}:{main:p.Z[700],light:p.Z[400],dark:p.Z[800]}}(t),S=e.info||function(e="light"){return"dark"===e?{main:y.Z[400],light:y.Z[300],dark:y.Z[700]}:{main:y.Z[700],light:y.Z[500],dark:y.Z[900]}}(t),k=e.success||function(e="light"){return"dark"===e?{main:v.Z[400],light:v.Z[300],dark:v.Z[700]}:{main:v.Z[800],light:v.Z[500],dark:v.Z[900]}}(t),A=e.warning||function(e="light"){return"dark"===e?{main:m.Z[400],light:m.Z[300],dark:m.Z[700]}:{main:"#ed6c02",light:m.Z[500],dark:m.Z[900]}}(t);function C(e){let t=(0,c.mi)(e,_.text.primary)>=n?_.text.primary:w.text.primary;return t}let O=({color:e,name:t,mainShade:n=500,lightShade:i=300,darkShade:o=700})=>{if(!(e=(0,r.Z)({},e)).main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty("main"))throw Error((0,s.Z)(11,t?` (${t})`:"",n));if("string"!=typeof e.main)throw Error((0,s.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return E(e,"light",i,a),E(e,"dark",o,a),e.contrastText||(e.contrastText=C(e.main)),e},N=(0,o.Z)((0,r.Z)({common:(0,r.Z)({},h.Z),mode:t,primary:O({color:l,name:"primary"}),secondary:O({color:I,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:O({color:T,name:"error"}),warning:O({color:A,name:"warning"}),info:O({color:S,name:"info"}),success:O({color:k,name:"success"}),grey:d.Z,contrastThreshold:n,getContrastText:C,augmentColor:O,tonalOffset:a},{dark:_,light:w}[t]),u);return N}(N),L=(0,a.Z)(e),M=(0,o.Z)(L,{mixins:(n=L.breakpoints,(0,r.Z)({toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}}},T)),palette:P,shadows:S.slice(),typography:(0,I.Z)(P,D),transitions:(0,k.ZP)(R),zIndex:(0,r.Z)({},A)});return M=(0,o.Z)(M,x),(M=t.reduce((e,t)=>(0,o.Z)(e,t),M)).unstable_sxConfig=(0,r.Z)({},u.Z,null==x?void 0:x.unstable_sxConfig),M.unstable_sx=function(e){return(0,l.Z)({sx:e,theme:this})},M}function N(...e){return O(...e)}var R=O},6067:function(e,t,n){"use strict";n.d(t,{Ui:function(){return o},ZP:function(){return c},x9:function(){return a}});var r=n(3366),i=n(7462);let s=["duration","easing","delay"],o={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},a={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function u(e){return`${Math.round(e)}ms`}function l(e){if(!e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function c(e){let t=(0,i.Z)({},o,e.easing),n=(0,i.Z)({},a,e.duration),c=(e=["all"],i={})=>{let{duration:o=n.standard,easing:a=t.easeInOut,delay:l=0}=i;return(0,r.Z)(i,s),(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"==typeof o?o:u(o)} ${a} ${"string"==typeof l?l:u(l)}`).join(",")};return(0,i.Z)({getAutoHeightDuration:l,create:c},e,{easing:t,duration:n})}},1445:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7462),i=n(3366),s=n(9766);let o=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],a={textTransform:"uppercase"},u='"Roboto", "Helvetica", "Arial", sans-serif';function l(e,t){let n="function"==typeof t?t(e):t,{fontFamily:l=u,fontSize:c=14,fontWeightLight:h=300,fontWeightRegular:d=400,fontWeightMedium:f=500,fontWeightBold:p=700,htmlFontSize:m=16,allVariants:g,pxToRem:y}=n,v=(0,i.Z)(n,o),b=c/14,w=y||(e=>`${e/m*b}rem`),_=(e,t,n,i,s)=>(0,r.Z)({fontFamily:l,fontWeight:e,fontSize:w(t),lineHeight:n},l===u?{letterSpacing:`${Math.round(1e5*(i/t))/1e5}em`}:{},s,g),E={h1:_(h,96,1.167,-1.5),h2:_(h,60,1.2,-.5),h3:_(d,48,1.167,0),h4:_(d,34,1.235,.25),h5:_(d,24,1.334,0),h6:_(f,20,1.6,.15),subtitle1:_(d,16,1.75,.15),subtitle2:_(f,14,1.57,.1),body1:_(d,16,1.5,.15),body2:_(d,14,1.43,.15),button:_(f,14,1.75,.4,a),caption:_(d,12,1.66,.4),overline:_(d,12,2.66,1,a)};return(0,s.Z)((0,r.Z)({htmlFontSize:m,pxToRem:w,fontFamily:l,fontSize:c,fontWeightLight:h,fontWeightRegular:d,fontWeightMedium:f,fontWeightBold:p},E),v,{clone:!1})}},247:function(e,t,n){"use strict";var r=n(4562);let i=(0,r.Z)();t.Z=i},1657:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9628),i=n(247);function s({props:e,name:t}){return(0,r.Z)({props:e,name:t,defaultTheme:i.Z})}},4819:function(e,t,n){"use strict";var r=n(7294);let i=r.createContext(null);t.Z=i},6760:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),i=n(4819);function s(){let e=r.useContext(i.Z);return e}},1234:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}}),n(7294);var r=n(917),i=n(5893);function s(e){let{styles:t,defaultTheme:n={}}=e;return(0,i.jsx)(r.xB,{styles:"function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t})}},1927:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),i=n(7462),s=n(4819),o=n(6760);let a="function"==typeof Symbol&&Symbol.for;var u=a?Symbol.for("mui.nested"):"__THEME_NESTED__",l=n(5893),c=function(e){let{children:t,theme:n}=e,a=(0,o.Z)(),c=r.useMemo(()=>{let e=null===a?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return(0,i.Z)({},e,t)}(a,n);return null!=e&&(e[u]=null!==a),e},[n,a]);return(0,l.jsx)(s.Z.Provider,{value:c,children:t})},h=n(2443),d=n(6682);let f={};function p(e){let t=(0,d.Z)();return(0,l.jsx)(h.T.Provider,{value:"object"==typeof t?t:f,children:e.children})}var m=function(e){let{children:t,theme:n}=e;return(0,l.jsx)(c,{theme:n,children:(0,l.jsx)(p,{children:t})})}},5408:function(e,t,n){"use strict";n.d(t,{L7:function(){return u},P$:function(){return c},VO:function(){return i},W8:function(){return a},dt:function(){return l},k9:function(){return o}});var r=n(9766);let i={xs:0,sm:600,md:900,lg:1200,xl:1536},s={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${i[e]}px)`};function o(e,t,n){let r=e.theme||{};if(Array.isArray(t)){let e=r.breakpoints||s;return t.reduce((r,i,s)=>(r[e.up(e.keys[s])]=n(t[s]),r),{})}if("object"==typeof t){let e=r.breakpoints||s;return Object.keys(t).reduce((r,s)=>{if(-1!==Object.keys(e.values||i).indexOf(s)){let i=e.up(s);r[i]=n(t[s],s)}else r[s]=t[s];return r},{})}let o=n(t);return o}function a(e={}){var t;let n=null==(t=e.keys)?void 0:t.reduce((t,n)=>{let r=e.up(n);return t[r]={},t},{});return n||{}}function u(e,t){return e.reduce((e,t)=>{let n=e[t],r=!n||0===Object.keys(n).length;return r&&delete e[t],e},t)}function l(e,...t){let n=a(e),i=[n,...t].reduce((e,t)=>(0,r.Z)(e,t),{});return u(Object.keys(n),i)}function c({values:e,breakpoints:t,base:n}){let r;let i=n||function(e,t){if("object"!=typeof e)return{};let n={},r=Object.keys(t);return Array.isArray(e)?r.forEach((t,r)=>{r<e.length&&(n[t]=!0)}):r.forEach(t=>{null!=e[t]&&(n[t]=!0)}),n}(e,t),s=Object.keys(i);return 0===s.length?e:s.reduce((t,n,i)=>(Array.isArray(e)?(t[n]=null!=e[i]?e[i]:e[r],r=i):"object"==typeof e?(t[n]=null!=e[n]?e[n]:e[r],r=n):t[n]=e,t),{})}},1796:function(e,t,n){"use strict";n.d(t,{$n:function(){return v},Fq:function(){return p},H3:function(){return d},LR:function(){return u},_4:function(){return w},_j:function(){return g},fk:function(){return function e(t,n,r){try{return e(t,n)}catch(e){return t}}},mi:function(){return f},oo:function(){return s},q8:function(){return y},tB:function(){return o},ux:function(){return b},ve:function(){return h},vq:function(){return c},wy:function(){return l},zp:function(){return m}});var r=n(1387);function i(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function s(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map(e=>e+e)),n?`rgb${4===n.length?"a":""}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function o(e){let t;if(e.type)return e;if("#"===e.charAt(0))return o(s(e));let n=e.indexOf("("),i=e.substring(0,n);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw Error((0,r.Z)(9,e));let a=e.substring(n+1,e.length-1);if("color"===i){if(t=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,r.Z)(10,t))}else a=a.split(",");return{type:i,values:a=a.map(e=>parseFloat(e)),colorSpace:t}}let a=e=>{let t=o(e);return t.values.slice(0,3).map((e,n)=>-1!==t.type.indexOf("hsl")&&0!==n?`${e}%`:e).join(" ")},u=(e,t)=>{try{return a(e)}catch(t){return e}};function l(e){let{type:t,colorSpace:n}=e,{values:r}=e;return -1!==t.indexOf("rgb")?r=r.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),`${t}(${r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`})`}function c(e){if(0===e.indexOf("#"))return e;let{values:t}=o(e);return`#${t.map((e,t)=>(function(e){let t=e.toString(16);return 1===t.length?`0${t}`:t})(3===t?Math.round(255*e):e)).join("")}`}function h(e){e=o(e);let{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,s=r*Math.min(i,1-i),a=(e,t=(e+n/30)%12)=>i-s*Math.max(Math.min(t-3,9-t,1),-1),u="rgb",c=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(u+="a",c.push(t[3])),l({type:u,values:c})}function d(e){let t="hsl"===(e=o(e)).type||"hsla"===e.type?o(h(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function f(e,t){let n=d(e),r=d(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function p(e,t){return e=o(e),t=i(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,l(e)}function m(e,t,n){try{return p(e,t)}catch(t){return e}}function g(e,t){if(e=o(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return l(e)}function y(e,t,n){try{return g(e,t)}catch(t){return e}}function v(e,t){if(e=o(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return l(e)}function b(e,t,n){try{return v(e,t)}catch(t){return e}}function w(e,t=.15){return d(e)>.5?g(e,t):v(e,t)}},1512:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3366),i=n(7462);let s=["values","unit","step"],o=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,i.Z)({},e,{[t.key]:t.val}),{})};function a(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:a=5}=e,u=(0,r.Z)(e,s),l=o(t),c=Object.keys(l);function h(e){let r="number"==typeof t[e]?t[e]:e;return`@media (min-width:${r}${n})`}function d(e){let r="number"==typeof t[e]?t[e]:e;return`@media (max-width:${r-a/100}${n})`}function f(e,r){let i=c.indexOf(r);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==i&&"number"==typeof t[c[i]]?t[c[i]]:r)-a/100}${n})`}return(0,i.Z)({keys:c,values:l,up:h,down:d,between:f,only:function(e){return c.indexOf(e)+1<c.length?f(e,c[c.indexOf(e)+1]):h(e)},not:function(e){let t=c.indexOf(e);return 0===t?h(c[1]):t===c.length-1?d(c[t]):f(e,c[c.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},u)}},8373:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(8700);function i(e=8){if(e.mui)return e;let t=(0,r.hB)({spacing:e}),n=(...e)=>{let n=0===e.length?[1]:e;return n.map(e=>{let n=t(e);return"number"==typeof n?`${n}px`:n}).join(" ")};return n.mui=!0,n}},8647:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),i=n(3366),s=n(9766),o=n(1512),a={borderRadius:4},u=n(8373),l=n(6523),c=n(4920);let h=["breakpoints","palette","spacing","shape"];var d=function(e={},...t){let{breakpoints:n={},palette:d={},spacing:f,shape:p={}}=e,m=(0,i.Z)(e,h),g=(0,o.Z)(n),y=(0,u.Z)(f),v=(0,s.Z)({breakpoints:g,direction:"ltr",components:{},palette:(0,r.Z)({mode:"light"},d),spacing:y,shape:(0,r.Z)({},a,p)},m);return(v=t.reduce((e,t)=>(0,s.Z)(e,t),v)).unstable_sxConfig=(0,r.Z)({},c.Z,null==m?void 0:m.unstable_sxConfig),v.unstable_sx=function(e){return(0,l.Z)({sx:e,theme:this})},v}},7730:function(e,t,n){"use strict";var r=n(9766);t.Z=function(e,t){return t?(0,r.Z)(e,t,{clone:!1}):e}},8700:function(e,t,n){"use strict";n.d(t,{hB:function(){return p},eI:function(){return f},NA:function(){return m},e6:function(){return y},o3:function(){return v}});var r=n(5408),i=n(4844),s=n(7730);let o={m:"margin",p:"padding"},a={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},u={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},l=function(e){let t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}(e=>{if(e.length>2){if(!u[e])return[e];e=u[e]}let[t,n]=e.split(""),r=o[t],i=a[n]||"";return Array.isArray(i)?i.map(e=>r+e):[r+i]}),c=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],h=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],d=[...c,...h];function f(e,t,n,r){var s;let o=null!=(s=(0,i.DW)(e,t,!1))?s:n;return"number"==typeof o?e=>"string"==typeof e?e:o*e:Array.isArray(o)?e=>"string"==typeof e?e:o[e]:"function"==typeof o?o:()=>void 0}function p(e){return f(e,"spacing",8,"spacing")}function m(e,t){if("string"==typeof t||null==t)return t;let n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:`-${n}`}function g(e,t){let n=p(e.theme);return Object.keys(e).map(i=>(function(e,t,n,i){if(-1===t.indexOf(n))return null;let s=l(n),o=e=>s.reduce((t,n)=>(t[n]=m(i,e),t),{}),a=e[n];return(0,r.k9)(e,a,o)})(e,t,i,n)).reduce(s.Z,{})}function y(e){return g(e,c)}function v(e){return g(e,h)}function b(e){return g(e,d)}y.propTypes={},y.filterProps=c,v.propTypes={},v.filterProps=h,b.propTypes={},b.filterProps=d},4844:function(e,t,n){"use strict";n.d(t,{DW:function(){return s},Jq:function(){return o}});var r=n(8320),i=n(5408);function s(e,t,n=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&n){let n=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=n)return n}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function o(e,t,n,r=n){let i;return i="function"==typeof e?e(n):Array.isArray(e)?e[n]||r:s(e,n)||r,t&&(i=t(i,r,e)),i}t.ZP=function(e){let{prop:t,cssProperty:n=e.prop,themeKey:a,transform:u}=e,l=e=>{if(null==e[t])return null;let l=e[t],c=e.theme,h=s(c,a)||{},d=e=>{let i=o(h,u,e);return(e===i&&"string"==typeof e&&(i=o(h,u,`${t}${"default"===e?"":(0,r.Z)(e)}`,e)),!1===n)?i:{[n]:i}};return(0,i.k9)(e,l,d)};return l.propTypes={},l.filterProps=[t],l}},4920:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var r=n(8700),i=n(4844),s=n(7730),o=function(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),n=e=>Object.keys(e).reduce((n,r)=>t[r]?(0,s.Z)(n,t[r](e)):n,{});return n.propTypes={},n.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),n},a=n(5408);function u(e){return"number"!=typeof e?e:`${e}px solid`}let l=(0,i.ZP)({prop:"border",themeKey:"borders",transform:u}),c=(0,i.ZP)({prop:"borderTop",themeKey:"borders",transform:u}),h=(0,i.ZP)({prop:"borderRight",themeKey:"borders",transform:u}),d=(0,i.ZP)({prop:"borderBottom",themeKey:"borders",transform:u}),f=(0,i.ZP)({prop:"borderLeft",themeKey:"borders",transform:u}),p=(0,i.ZP)({prop:"borderColor",themeKey:"palette"}),m=(0,i.ZP)({prop:"borderTopColor",themeKey:"palette"}),g=(0,i.ZP)({prop:"borderRightColor",themeKey:"palette"}),y=(0,i.ZP)({prop:"borderBottomColor",themeKey:"palette"}),v=(0,i.ZP)({prop:"borderLeftColor",themeKey:"palette"}),b=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){let t=(0,r.eI)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,r.NA)(t,e)});return(0,a.k9)(e,e.borderRadius,n)}return null};b.propTypes={},b.filterProps=["borderRadius"],o(l,c,h,d,f,p,m,g,y,v,b);let w=e=>{if(void 0!==e.gap&&null!==e.gap){let t=(0,r.eI)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,r.NA)(t,e)});return(0,a.k9)(e,e.gap,n)}return null};w.propTypes={},w.filterProps=["gap"];let _=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){let t=(0,r.eI)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,r.NA)(t,e)});return(0,a.k9)(e,e.columnGap,n)}return null};_.propTypes={},_.filterProps=["columnGap"];let E=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){let t=(0,r.eI)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,r.NA)(t,e)});return(0,a.k9)(e,e.rowGap,n)}return null};E.propTypes={},E.filterProps=["rowGap"];let I=(0,i.ZP)({prop:"gridColumn"}),T=(0,i.ZP)({prop:"gridRow"}),S=(0,i.ZP)({prop:"gridAutoFlow"}),k=(0,i.ZP)({prop:"gridAutoColumns"}),A=(0,i.ZP)({prop:"gridAutoRows"}),C=(0,i.ZP)({prop:"gridTemplateColumns"}),O=(0,i.ZP)({prop:"gridTemplateRows"}),N=(0,i.ZP)({prop:"gridTemplateAreas"}),R=(0,i.ZP)({prop:"gridArea"});function D(e,t){return"grey"===t?t:e}o(w,_,E,I,T,S,k,A,C,O,N,R);let x=(0,i.ZP)({prop:"color",themeKey:"palette",transform:D}),P=(0,i.ZP)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:D}),L=(0,i.ZP)({prop:"backgroundColor",themeKey:"palette",transform:D});function M(e){return e<=1&&0!==e?`${100*e}%`:e}o(x,P,L);let U=(0,i.ZP)({prop:"width",transform:M}),F=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){let t=t=>{var n,r,i;let s=(null==(n=e.theme)?void 0:null==(r=n.breakpoints)?void 0:null==(i=r.values)?void 0:i[t])||a.VO[t];return{maxWidth:s||M(t)}};return(0,a.k9)(e,e.maxWidth,t)}return null};F.filterProps=["maxWidth"];let j=(0,i.ZP)({prop:"minWidth",transform:M}),V=(0,i.ZP)({prop:"height",transform:M}),$=(0,i.ZP)({prop:"maxHeight",transform:M}),q=(0,i.ZP)({prop:"minHeight",transform:M});(0,i.ZP)({prop:"size",cssProperty:"width",transform:M}),(0,i.ZP)({prop:"size",cssProperty:"height",transform:M});let B=(0,i.ZP)({prop:"boxSizing"});o(U,F,j,V,$,q,B);let z={border:{themeKey:"borders",transform:u},borderTop:{themeKey:"borders",transform:u},borderRight:{themeKey:"borders",transform:u},borderBottom:{themeKey:"borders",transform:u},borderLeft:{themeKey:"borders",transform:u},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:b},color:{themeKey:"palette",transform:D},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:D},backgroundColor:{themeKey:"palette",transform:D},p:{style:r.o3},pt:{style:r.o3},pr:{style:r.o3},pb:{style:r.o3},pl:{style:r.o3},px:{style:r.o3},py:{style:r.o3},padding:{style:r.o3},paddingTop:{style:r.o3},paddingRight:{style:r.o3},paddingBottom:{style:r.o3},paddingLeft:{style:r.o3},paddingX:{style:r.o3},paddingY:{style:r.o3},paddingInline:{style:r.o3},paddingInlineStart:{style:r.o3},paddingInlineEnd:{style:r.o3},paddingBlock:{style:r.o3},paddingBlockStart:{style:r.o3},paddingBlockEnd:{style:r.o3},m:{style:r.e6},mt:{style:r.e6},mr:{style:r.e6},mb:{style:r.e6},ml:{style:r.e6},mx:{style:r.e6},my:{style:r.e6},margin:{style:r.e6},marginTop:{style:r.e6},marginRight:{style:r.e6},marginBottom:{style:r.e6},marginLeft:{style:r.e6},marginX:{style:r.e6},marginY:{style:r.e6},marginInline:{style:r.e6},marginInlineStart:{style:r.e6},marginInlineEnd:{style:r.e6},marginBlock:{style:r.e6},marginBlockStart:{style:r.e6},marginBlockEnd:{style:r.e6},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:w},rowGap:{style:E},columnGap:{style:_},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:M},maxWidth:{style:F},minWidth:{transform:M},height:{transform:M},maxHeight:{transform:M},minHeight:{transform:M},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var K=z},6523:function(e,t,n){"use strict";var r=n(8320),i=n(7730),s=n(4844),o=n(5408),a=n(4920);let u=function(){function e(e,t,n,i){let a={[e]:t,theme:n},u=i[e];if(!u)return{[e]:t};let{cssProperty:l=e,themeKey:c,transform:h,style:d}=u;if(null==t)return null;let f=(0,s.DW)(n,c)||{};if(d)return d(a);let p=t=>{let n=(0,s.Jq)(f,h,t);return(t===n&&"string"==typeof t&&(n=(0,s.Jq)(f,h,`${e}${"default"===t?"":(0,r.Z)(t)}`,t)),!1===l)?n:{[l]:n}};return(0,o.k9)(a,t,p)}return function t(n){var r;let{sx:s,theme:u={}}=n||{};if(!s)return null;let l=null!=(r=u.unstable_sxConfig)?r:a.Z;function c(n){let r=n;if("function"==typeof n)r=n(u);else if("object"!=typeof n)return n;if(!r)return null;let s=(0,o.W8)(u.breakpoints),a=Object.keys(s),c=s;return Object.keys(r).forEach(n=>{var s;let a="function"==typeof(s=r[n])?s(u):s;if(null!=a){if("object"==typeof a){if(l[n])c=(0,i.Z)(c,e(n,a,u,l));else{let e=(0,o.k9)({theme:u},a,e=>({[n]:e}));(function(...e){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]),n=new Set(t);return e.every(e=>n.size===Object.keys(e).length)})(e,a)?c[n]=t({sx:a,theme:u}):c=(0,i.Z)(c,e)}}else c=(0,i.Z)(c,e(n,a,u,l))}}),(0,o.L7)(a,c)}return Array.isArray(s)?s.map(c):c(s)}}();u.filterProps=["sx"],t.Z=u},6682:function(e,t,n){"use strict";var r=n(8647),i=n(4168);let s=(0,r.Z)();t.Z=function(e=s){return(0,i.Z)(e)}},539:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7925);function i(e){let{theme:t,name:n,props:i}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.Z)(t.components[n].defaultProps,i):i}},9628:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(539),i=n(6682);function s({props:e,name:t,defaultTheme:n}){let s=(0,i.Z)(n),o=(0,r.Z)({theme:s,name:t,props:e});return o}},4168:function(e,t,n){"use strict";var r=n(6760);t.Z=function(e=null){let t=(0,r.Z)();return t&&0!==Object.keys(t).length?t:e}},8320:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1387);function i(e){if("string"!=typeof e)throw Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},9766:function(e,t,n){"use strict";n.d(t,{P:function(){return i},Z:function(){return function e(t,n,s={clone:!0}){let o=s.clone?(0,r.Z)({},t):t;return i(t)&&i(n)&&Object.keys(n).forEach(r=>{"__proto__"!==r&&(i(n[r])&&r in t&&i(t[r])?o[r]=e(t[r],n[r],s):s.clone?o[r]=i(n[r])?function e(t){if(!i(t))return t;let n={};return Object.keys(t).forEach(r=>{n[r]=e(t[r])}),n}(n[r]):n[r]:o[r]=n[r])}),o}}});var r=n(7462);function i(e){return null!==e&&"object"==typeof e&&e.constructor===Object}},1387:function(e,t,n){"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{Z:function(){return r}})},7925:function(e,t,n){"use strict";n.d(t,{Z:function(){return function e(t,n){let i=(0,r.Z)({},n);return Object.keys(t).forEach(s=>{if(s.toString().match(/^(components|slots)$/))i[s]=(0,r.Z)({},t[s],i[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){let o=t[s]||{},a=n[s];i[s]={},a&&Object.keys(a)?o&&Object.keys(o)?(i[s]=(0,r.Z)({},a),Object.keys(o).forEach(t=>{i[s][t]=e(o[t],a[t])})):i[s]=a:i[s]=o}else void 0===i[s]&&(i[s]=t[s])}),i}}});var r=n(7462)},8683:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[z]}function s(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===K}(e)||Array.isArray(e)||!!e[B]||!!(null===(t=e.constructor)||void 0===t?void 0:t[B])||h(e)||d(e))}function o(e,t,n){void 0===n&&(n=!1),0===a(e)?(n?Object.keys:G)(e).forEach(function(r){n&&"symbol"==typeof r||t(r,e[r],e)}):e.forEach(function(n,r){return t(r,n,e)})}function a(e){var t=e[z];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:h(e)?2:d(e)?3:0}function u(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t,n){var r=a(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function c(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e){return j&&e instanceof Map}function d(e){return V&&e instanceof Set}function f(e){return e.o||e.t}function p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=H(e);delete t[z];for(var n=G(t),r=0;r<n.length;r++){var i=n[r],s=t[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function m(e,t){return void 0===t&&(t=!1),y(e)||i(e)||!s(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=g),Object.freeze(e),t&&o(e,function(e,t){return m(t,!0)},!0)),e}function g(){r(2)}function y(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function v(e){var t=Z[e];return t||r(18,e),t}function b(e,t){t&&(v("Patches"),e.u=[],e.s=[],e.v=t)}function w(e){_(e),e.p.forEach(I),e.p=null}function _(e){e===U&&(U=e.l)}function E(e){return U={p:[],l:U,h:e,m:!0,_:0}}function I(e){var t=e[z];0===t.i||1===t.i?t.j():t.O=!0}function T(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.g||v("ES5").S(t,e,i),i?(n[z].P&&(w(t),r(4)),s(e)&&(e=S(t,e),t.l||A(t,e)),t.u&&v("Patches").M(n[z].t,e,t.u,t.s)):e=S(t,n,[]),w(t),t.u&&t.v(t.u,t.s),e!==q?e:void 0}function S(e,t,n){if(y(t))return t;var r=t[z];if(!r)return o(t,function(i,s){return k(e,r,t,i,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return A(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=p(r.k):r.o,s=i,a=!1;3===r.i&&(s=new Set(i),i.clear(),a=!0),o(s,function(t,s){return k(e,r,i,t,s,n,a)}),A(e,i,!1),n&&e.u&&v("Patches").N(r,n,e.u,e.s)}return r.o}function k(e,t,n,r,o,a,c){if(i(o)){var h=S(e,o,a&&t&&3!==t.i&&!u(t.R,r)?a.concat(r):void 0);if(l(n,r,h),!i(h))return;e.m=!1}else c&&n.add(o);if(s(o)&&!y(o)){if(!e.h.D&&e._<1)return;S(e,o),t&&t.A.l||A(e,o)}}function A(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&m(t,n)}function C(e,t){var n=e[z];return(n?f(n):e)[t]}function O(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function R(e){e.o||(e.o=p(e.t))}function D(e,t,n){var r,i,s,o,a,u,l,c=h(t)?v("MapSet").F(t,n):d(t)?v("MapSet").T(t,n):e.g?(s=i={i:(r=Array.isArray(t))?1:0,A:n?n.A:U,P:!1,I:!1,R:{},l:n,t:t,k:null,o:null,j:null,C:!1},o=W,r&&(s=[i],o=Q),u=(a=Proxy.revocable(s,o)).revoke,l=a.proxy,i.k=l,i.j=u,l):v("ES5").J(t,n);return(n?n.A:U).p.push(c),c}function x(e){return i(e)||r(22,e),function e(t){if(!s(t))return t;var n,r=t[z],i=a(t);if(r){if(!r.P&&(r.i<4||!v("ES5").K(r)))return r.t;r.I=!0,n=P(t,i),r.I=!1}else n=P(t,i);return o(n,function(t,i){var s;r&&(2===a(s=r.t)?s.get(t):s[t])===i||l(n,t,e(i))}),3===i?new Set(n):n}(e)}function P(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return p(e)}n.d(t,{xC:function(){return eE},hg:function(){return eU},HF:function(){return eR},oM:function(){return ek},zR:function(){return function e(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return 0===t.length?function(e){return eV(e,["pending"])}:e$(t)?function(e){return ej.apply(void 0,t.map(function(e){return e.pending}))(e)}:e()(t[0])}},Iv:function(){return function e(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return 0===t.length?function(e){return eV(e,["rejected"])}:e$(t)?function(e){return ej.apply(void 0,t.map(function(e){return e.rejected}))(e)}:e()(t[0])}}});var L,M,U,F="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),j="undefined"!=typeof Map,V="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,q=F?Symbol.for("immer-nothing"):((M={})["immer-nothing"]=!0,M),B=F?Symbol.for("immer-draftable"):"__$immer_draftable",z=F?Symbol.for("immer-state"):"__$immer_state",K=""+Object.prototype.constructor,G="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,H=Object.getOwnPropertyDescriptors||function(e){var t={};return G(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Z={},W={get:function(e,t){if(t===z)return e;var n,r,i=f(e);if(!u(i,t))return(r=O(i,t))?"value"in r?r.value:null===(n=r.get)||void 0===n?void 0:n.call(e.k):void 0;var o=i[t];return e.I||!s(o)?o:o===C(e.t,t)?(R(e),e.o[t]=D(e.A.h,o,e)):o},has:function(e,t){return t in f(e)},ownKeys:function(e){return Reflect.ownKeys(f(e))},set:function(e,t,n){var r=O(f(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=C(f(e),t),s=null==i?void 0:i[z];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(c(n,i)&&(void 0!==n||u(e.t,t)))return!0;R(e),N(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==C(e.t,t)||t in e.t?(e.R[t]=!1,R(e),N(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=f(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},Q={};o(W,function(e,t){Q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Q.deleteProperty=function(e,t){return Q.set.call(this,e,t,void 0)},Q.set=function(e,t,n){return W.set.call(this,e[0],t,n,e[0])};var X=new(function(){function e(e){var t=this;this.g=$,this.D=!0,this.produce=function(e,n,i){if("function"==typeof e&&"function"!=typeof n){var o,a=n;return n=e,function(e){var r=this;void 0===e&&(e=a);for(var i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return t.produce(e,function(e){var t;return(t=n).call.apply(t,[r,e].concat(s))})}}if("function"!=typeof n&&r(6),void 0!==i&&"function"!=typeof i&&r(7),s(e)){var u=E(t),l=D(t,e,void 0),c=!0;try{o=n(l),c=!1}finally{c?w(u):_(u)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return b(u,i),T(e,u)},function(e){throw w(u),e}):(b(u,i),T(o,u))}if(!e||"object"!=typeof e){if(void 0===(o=n(e))&&(o=e),o===q&&(o=void 0),t.D&&m(o,!0),i){var h=[],d=[];v("Patches").M(e,o,h,d),i(h,d)}return o}r(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return t.produceWithPatches(n,function(t){return e.apply(void 0,[t].concat(i))})};var r,i,s=t.produce(e,n,function(e,t){r=e,i=t});return"undefined"!=typeof Promise&&s instanceof Promise?s.then(function(e){return[e,r,i]}):[s,r,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){s(e)||r(8),i(e)&&(e=x(e));var t=E(this),n=D(this,e,void 0);return n[z].C=!0,_(t),n},t.finishDraft=function(e,t){var n=(e&&e[z]).A;return b(n,t),T(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!$&&r(20),this.g=e},t.applyPatches=function(e,t){for(n=t.length-1;n>=0;n--){var n,r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var s=v("Patches").$;return i(e)?s(e,t):this.produce(e,function(e){return s(e,t)})},e}()),J=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseProxies.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);var Y="NOT_FOUND",ee=function(e,t){return e===t},et=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t,r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=0,a={memoizeOptions:void 0},u=i.pop();if("object"==typeof u&&(a=u,u=i.pop()),"function"!=typeof u)throw Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=a.memoizeOptions,c=void 0===l?n:l,h=Array.isArray(c)?c:[c],d=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e}))throw Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t.map(function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e}).join(", ")+"]");return t}(i),f=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(h)),p=e(function(){for(var e=[],n=d.length,r=0;r<n;r++)e.push(d[r].apply(null,arguments));return t=f.apply(null,e)});return Object.assign(p,{resultFunc:u,memoizedResultFunc:f,dependencies:d,lastResult:function(){return t},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),p}}(function(e,t){var n,r,i="object"==typeof t?t:{equalityCheck:t},s=i.equalityCheck,o=i.maxSize,a=void 0===o?1:o,u=i.resultEqualityCheck,l=(n=void 0===s?ee:s,function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}),c=1===a?{get:function(e){return r&&l(r.key,e)?r.value:Y},put:function(e,t){r={key:e,value:t}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}:function(e,t){var n=[];function r(e){var r=n.findIndex(function(n){return t(e,n.key)});if(r>-1){var i=n[r];return r>0&&(n.splice(r,1),n.unshift(i)),i.value}return Y}return{get:r,put:function(t,i){r(t)===Y&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(a,l);function h(){var t=c.get(arguments);if(t===Y){if(t=e.apply(null,arguments),u){var n=c.getEntries().find(function(e){return u(e.value,t)});n&&(t=n.value)}c.put(arguments,t)}return t}return h.clearCache=function(){return c.clear()},h}),en=n(8356);function er(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var ei=er();ei.withExtraArgument=er,n(3454);var es=(L=function(e,t){return(L=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),eo=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},ea=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},eu=Object.defineProperty,el=Object.defineProperties,ec=Object.getOwnPropertyDescriptors,eh=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,ef=Object.prototype.propertyIsEnumerable,ep=function(e,t,n){return t in e?eu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},em=function(e,t){for(var n in t||(t={}))ed.call(t,n)&&ep(e,n,t[n]);if(eh)for(var r=0,i=eh(t);r<i.length;r++){var n=i[r];ef.call(t,n)&&ep(e,n,t[n])}return e},eg=function(e,t){return el(e,ec(t))},ey=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=et.apply(void 0,e);return function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.apply(void 0,ea([i(e)?x(e):e],t))}},ev="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?en.qC:en.qC.apply(null,arguments)};function eb(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var ew=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return es(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,ea([void 0],e[0].concat(this)))):new(t.bind.apply(t,ea([void 0],e.concat(this))))},t}(Array);function e_(e){return s(e)?J(e,function(){}):e}function eE(e){var t,n=function(e){var t,n,r,i;return void 0===(t=e)&&(t={}),r=void 0===(n=t.thunk)||n,t.immutableCheck,t.serializableCheck,i=new ew,r&&("boolean"==typeof r?i.push(ei):i.push(ei.withExtraArgument(r.extraArgument))),i},r=e||{},i=r.reducer,s=void 0===i?void 0:i,o=r.middleware,a=void 0===o?n():o,u=r.devTools,l=void 0===u||u,c=r.preloadedState,h=r.enhancers,d=void 0===h?void 0:h;if("function"==typeof s)t=s;else if(eb(s))t=(0,en.UY)(s);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var f=a;"function"==typeof f&&(f=f(n));var p=en.md.apply(void 0,f),m=en.qC;l&&(m=ev(em({trace:!1},"object"==typeof l&&l)));var g=[p];Array.isArray(d)?g=ea([p],d):"function"==typeof d&&(g=d(g));var y=m.apply(void 0,g);return(0,en.MT)(t,void 0===c?void 0:c,y)}function eI(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var i=t.apply(void 0,n);if(!i)throw Error("prepareAction did not return an object");return em(em({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}function eT(e){return["type","payload","error","meta"].indexOf(e)>-1}function eS(e){var t,n={},r=[],i={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(r in n)throw Error("addCase cannot be called with two reducers for the same action type");return n[r]=t,i},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[n,r,t]}function ek(e){var t,n=e.name;if(!n)throw Error("`name` is a required option for createSlice");var r="function"==typeof e.initialState?e.initialState:e_(e.initialState),o=e.reducers||{},a=Object.keys(o),u={},l={},c={};function h(){var t="function"==typeof e.extraReducers?eS(e.extraReducers):[e.extraReducers],n=t[0],o=t[1],a=void 0===o?[]:o,u=t[2],c=void 0===u?void 0:u,h=em(em({},void 0===n?{}:n),l);return function(e,t,n,r){void 0===n&&(n=[]);var o,a="function"==typeof t?eS(t):[t,n,void 0],u=a[0],l=a[1],c=a[2];if("function"==typeof e)o=function(){return e_(e())};else{var h=e_(e);o=function(){return h}}function d(e,t){void 0===e&&(e=o());var n=ea([u[t.type]],l.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===n.filter(function(e){return!!e}).length&&(n=[c]),n.reduce(function(e,n){if(n){if(i(e)){var r=n(e,t);return void 0===r?e:r}if(s(e))return J(e,function(e){return n(e,t)});var r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e},e)}return d.getInitialState=o,d}(r,function(e){for(var t in h)e.addCase(t,h[t]);for(var n=0;n<a.length;n++){var r=a[n];e.addMatcher(r.matcher,r.reducer)}c&&e.addDefaultCase(c)})}return a.forEach(function(e){var t,r,i=o[e],s=n+"/"+e;"reducer"in i?(t=i.reducer,r=i.prepare):t=i,u[e]=t,l[s]=t,c[e]=r?eI(s,r):eI(s)}),{name:n,reducer:function(e,n){return t||(t=h()),t(e,n)},actions:c,caseReducers:u,getInitialState:function(){return t||(t=h()),t.getInitialState()}}}function eA(e){return function(t,n){var r=function(t){eb(n)&&"string"==typeof n.type&&Object.keys(n).every(eT)?e(n.payload,t):e(n,t)};return i(t)?(r(t),t):J(t,r)}}function eC(e){return Array.isArray(e)||(e=Object.values(e)),e}function eO(e,t,n){e=eC(e);for(var r=[],i=[],s=0,o=e;s<o.length;s++){var a=o[s],u=t(a);u in n.entities?i.push({id:u,changes:a}):r.push(a)}return[r,i]}function eN(e){var t,n;function r(t,n){var r=e(t);r in n.entities||(n.ids.push(r),n.entities[r]=t)}function i(e,t){e=eC(e);for(var n=0,i=e;n<i.length;n++)r(i[n],t)}function s(t,n){var r=e(t);r in n.entities||n.ids.push(r),n.entities[r]=t}function o(e,t){var n=!1;e.forEach(function(e){e in t.entities&&(delete t.entities[e],n=!0)}),n&&(t.ids=t.ids.filter(function(e){return e in t.entities}))}function a(t,n){var r={},i={};t.forEach(function(e){e.id in n.entities&&(i[e.id]={id:e.id,changes:em(em({},i[e.id]?i[e.id].changes:null),e.changes)})}),(t=Object.values(i)).length>0&&t.filter(function(t){var i,s,o,a,u,l;return i=r,s=t,(l=(u=e(a=Object.assign({},(o=n).entities[s.id],s.changes)))!==s.id)&&(i[s.id]=u,delete o.entities[s.id]),o.entities[u]=a,l}).length>0&&(n.ids=Object.keys(n.entities))}function u(t,n){var r=eO(t,e,n),s=r[0];a(r[1],n),i(s,n)}return{removeAll:(t=function(e){Object.assign(e,{ids:[],entities:{}})},n=eA(function(e,n){return t(n)}),function(e){return n(e,void 0)}),addOne:eA(r),addMany:eA(i),setOne:eA(s),setMany:eA(function(e,t){e=eC(e);for(var n=0,r=e;n<r.length;n++)s(r[n],t)}),setAll:eA(function(e,t){e=eC(e),t.ids=[],t.entities={},i(e,t)}),updateOne:eA(function(e,t){return a([e],t)}),updateMany:eA(a),upsertOne:eA(function(e,t){return u([e],t)}),upsertMany:eA(u),removeOne:eA(function(e,t){return o([e],t)}),removeMany:eA(o)}}function eR(e){void 0===e&&(e={});var t=em({sortComparer:!1,selectId:function(e){return e.id}},e),n=t.selectId,r=t.sortComparer,i=r?function(e,t){var n=eN(e);function r(t,n){var r=(t=eC(t)).filter(function(t){return!(e(t) in n.entities)});0!==r.length&&a(r,n)}function i(e,t){0!==(e=eC(e)).length&&a(e,t)}function s(t,n){for(var r=!1,i=0;i<t.length;i++){var s=t[i],o=n.entities[s.id];if(o){r=!0,Object.assign(o,s.changes);var a=e(o);s.id!==a&&(delete n.entities[s.id],n.entities[a]=o)}}r&&u(n)}function o(t,n){var i=eO(t,e,n),o=i[0];s(i[1],n),r(o,n)}function a(t,n){t.forEach(function(t){n.entities[e(t)]=t}),u(n)}function u(n){var r=Object.values(n.entities);r.sort(t);var i=r.map(e);!function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(e[n]!==t[n])return!1;return!0}(n.ids,i)&&(n.ids=i)}return{removeOne:n.removeOne,removeMany:n.removeMany,removeAll:n.removeAll,addOne:eA(function(e,t){return r([e],t)}),updateOne:eA(function(e,t){return s([e],t)}),upsertOne:eA(function(e,t){return o([e],t)}),setOne:eA(function(e,t){return i([e],t)}),setMany:eA(i),setAll:eA(function(e,t){e=eC(e),t.entities={},t.ids=[],r(e,t)}),addMany:eA(r),updateMany:eA(s),upsertMany:eA(o)}}(n,r):eN(n);return em(em(em({selectId:n,sortComparer:r},{getInitialState:function(e){return void 0===e&&(e={}),Object.assign({ids:[],entities:{}},e)}}),{getSelectors:function(e){var t=function(e){return e.ids},n=function(e){return e.entities},r=ey(t,n,function(e,t){return e.map(function(e){return t[e]})}),i=function(e,t){return t},s=function(e,t){return e[t]},o=ey(t,function(e){return e.length});if(!e)return{selectIds:t,selectEntities:n,selectAll:r,selectTotal:o,selectById:ey(n,i,s)};var a=ey(e,n);return{selectIds:ey(e,t),selectEntities:a,selectAll:ey(e,r),selectTotal:ey(e,o),selectById:ey(a,i,s)}}}),i)}var eD=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},ex=["name","message","stack","code"],eP=function(e,t){this.payload=e,this.meta=t},eL=function(e,t){this.payload=e,this.meta=t},eM=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0;n<ex.length;n++){var r=ex[n];"string"==typeof e[r]&&(t[r]=e[r])}return t}return{message:String(e)}},eU=function(){function e(e,t,n){var r=eI(e+"/fulfilled",function(e,t,n,r){return{payload:e,meta:eg(em({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}}),i=eI(e+"/pending",function(e,t,n){return{payload:void 0,meta:eg(em({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),s=eI(e+"/rejected",function(e,t,r,i,s){return{payload:i,error:(n&&n.serializeError||eM)(e||"Rejected"),meta:eg(em({},s||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(a,u,l){var c,h=(null==n?void 0:n.idGenerator)?n.idGenerator(e):eD(),d=new o;function f(e){c=e,d.abort()}var p=function(){var o,p;return o=this,p=function(){var o,p,m,g,y,v;return eo(this,function(b){switch(b.label){case 0:var w;if(b.trys.push([0,4,,5]),!(null!==(w=g=null==(o=null==n?void 0:n.condition)?void 0:o.call(n,e,{getState:u,extra:l}))&&"object"==typeof w&&"function"==typeof w.then))return[3,2];return[4,g];case 1:g=b.sent(),b.label=2;case 2:if(!1===g||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=new Promise(function(e,t){return d.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),a(i(h,e,null==(p=null==n?void 0:n.getPendingMeta)?void 0:p.call(n,{requestId:h,arg:e},{getState:u,extra:l}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:a,getState:u,extra:l,requestId:h,signal:d.signal,abort:f,rejectWithValue:function(e,t){return new eP(e,t)},fulfillWithValue:function(e,t){return new eL(e,t)}})).then(function(t){if(t instanceof eP)throw t;return t instanceof eL?r(t.payload,h,e,t.meta):r(t,h,e)})])];case 3:return m=b.sent(),[3,5];case 4:return m=(v=b.sent())instanceof eP?s(null,h,e,v.payload,v.meta):s(v,h,e),[3,5];case 5:return n&&!n.dispatchConditionRejection&&s.match(m)&&m.meta.condition||a(m),[2,m]}})},new Promise(function(e,t){var n=function(e){try{i(p.next(e))}catch(e){t(e)}},r=function(e){try{i(p.throw(e))}catch(e){t(e)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(n,r)};i((p=p.apply(o,null)).next())})}();return Object.assign(p,{abort:f,requestId:h,arg:e,unwrap:function(){return p.then(eF)}})}},{pending:i,rejected:s,fulfilled:r,typePrefix:e})}return e.withTypes=function(){return e},e}();function eF(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ej(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){return e.some(function(e){var n,r;return n=e,r=t,n&&"function"==typeof n.match?n.match(r):n(r)})}}function eV(e,t){if(!e||!e.meta)return!1;var n="string"==typeof e.meta.requestId,r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function e$(e){return"function"==typeof e[0]&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}var eq="listenerMiddleware";eI(eq+"/add"),eI(eq+"/removeAll"),eI(eq+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==n.g?n.g:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function e(e,t){var n=s[e];return n?n.enumerable=t:s[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[z];return W.get(t,e)},set:function(t){var n=this[z];W.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][z];if(!i.P)switch(i.i){case 5:r(i)&&N(i);break;case 4:n(i)&&N(i)}}}function n(e){for(var t=e.t,n=e.k,r=G(n),i=r.length-1;i>=0;i--){var s=r[i];if(s!==z){var o=t[s];if(void 0===o&&!u(t,s))return!0;var a=n[s],l=a&&a[z];if(l?l.t!==o:!c(a,o))return!0}}var h=!!t[z];return r.length!==G(t).length+(h?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var s={};Z.ES5||(Z.ES5={J:function(t,n){var r=Array.isArray(t),i=function(t,n){if(t){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,e(i,!0));return r}var s=H(n);delete s[z];for(var o=G(s),a=0;a<o.length;a++){var u=o[a];s[u]=e(u,t||!!s[u].enumerable)}return Object.create(Object.getPrototypeOf(n),s)}(r,t),s={i:r?5:4,A:n?n.A:U,P:!1,I:!1,R:{},l:n,t:t,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,z,{value:s,writable:!0}),i},S:function(e,n,s){s?i(n)&&n[z].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[z];if(n){var i=n.t,s=n.k,a=n.R,l=n.i;if(4===l)o(s,function(t){t!==z&&(void 0!==i[t]||u(i,t)?a[t]||e(s[t]):(a[t]=!0,N(n)))}),o(i,function(e){void 0!==s[e]||u(s,e)||(a[e]=!1,N(n))});else if(5===l){if(r(n)&&(N(n),a.length=!0),s.length<i.length)for(var c=s.length;c<i.length;c++)a[c]=!1;else for(var h=i.length;h<s.length;h++)a[h]=!0;for(var d=Math.min(s.length,i.length),f=0;f<d;f++)s.hasOwnProperty(f)||(a[f]=!0),void 0===a[f]&&e(s[f])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}()},8679:function(e,t,n){"use strict";var r=n(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function u(e){return r.isMemo(e)?o:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=o;var l=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var i=f(n);i&&i!==p&&e(t,i,r)}var o=c(n);h&&(o=o.concat(h(n)));for(var a=u(t),m=u(n),g=0;g<o.length;++g){var y=o[g];if(!s[y]&&!(r&&r[y])&&!(m&&m[y])&&!(a&&a[y])){var v=d(n,y);try{l(t,y,v)}catch(e){}}}}return t}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7943)}])},9005:function(e,t,n){"use strict";n.d(t,{H:function(){return c},a:function(){return h}});var r=n(5893),i=n(7294),s=n(9473),o=n(3029),a=n(4554),u=n(9751);let l=(0,i.createContext)();function c(e){let{children:t}=e,n=function(){let{authUser:e,authLoading:t,authStatus:n,authError:r}=(0,s.v9)(e=>e.user),l=(0,s.I0)();return(0,i.useEffect)(()=>{let e=async e=>{if(e){var t,n,r;if(!(null==e?void 0:e.emailVerified)){l((0,a.h)("Email not verified. Please verify your email first."));return}try{let{claims:t}=await e.getIdTokenResult();t.account_level?l((0,o.qm)({uid:e.uid,email:e.email,name:e.displayName,accessToken:e.accessToken,emailVerified:e.emailVerified,account_level:t.account_level})):l((0,a.h)("Missing custom claims"))}catch(e){l((0,o.xw)(null!==(r=null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.data)&&void 0!==r?r:e.message)),l((0,o.qm)(null))}}else l((0,o.qm)(null))},t=(0,u.Aj)(u.I8,e);return()=>t()},[l]),{authUser:e,authLoading:t,authStatus:n,authError:r,authSignOut:a.h}}();return(0,r.jsx)(l.Provider,{value:n,children:t})}let h=()=>(0,i.useContext)(l)},3367:function(e,t,n){"use strict";n.d(t,{e6:function(){return s},kL:function(){return o}});var r=n(7294);let i={},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",t=(0,r.useCallback)(t=>(i[e]||(i[e]=[]),i[e]=[...i[e],t],()=>{i[e]=i[e].filter(e=>e!==t)}),[e]),n=()=>localStorage[e],s=(0,r.useSyncExternalStore)(t,n,()=>!0);return s?JSON.parse(s):void 0},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",t=arguments.length>1?arguments[1]:void 0;localStorage[e]=JSON.stringify(t),(()=>{for(let t of i[e])t()})()}},4758:function(e,t,n){"use strict";n.d(t,{$_:function(){return d},G3:function(){return i.a},Wb:function(){return h}});var r=n(3377),i=n.n(r),s=n(402),o=n.n(s),a=n(4562),u=n(265);(0,a.Z)({palette:{primary:{main:"#8BC34A",light:"#DCEDC8",dark:"#689F38"},secondary:{main:"#212121",light:"#484848",dark:"#000000"},error:{main:u.Z.A400}},typography:{fontFamily:o().style.fontFamily}});let l={palette:{mode:"light",primary:{main:"#e6d5b3"},secondary:{main:"#d6a3e0"},dark:{main:"#a1957d",light:"#deb5e6",dark:"#a1957d"},error:{main:"#d32f2f"},warning:{main:"#ed6c02"},info:{main:"#0288d1"},success:{main:"#2e7d32"},typography:{fontFamily:o().style.fontFamily}}},c={palette:{mode:"dark",primary:{main:"#e0c2a3"},secondary:{main:"#d6a3e0"},error:{main:"#e0a3a3"},warning:{main:"#e0bea3"},info:{main:"#a3c9e0"},success:{main:"#a3e0aa"},typography:{fontFamily:o().style.fontFamily}}},h=(0,a.Z)(l),d=(0,a.Z)(c)},8153:function(e,t,n){"use strict";n.d(t,{G:function(){return r},m:function(){return i}});let r={IDLE:"idle",PENDING:"pending",FULLFILLED:"fullfilled"},i={SIGNED_IN:"signedIn",SIGNED_OUT:"signedOut",LOADING:"loading"}},3029:function(e,t,n){"use strict";n.d(t,{OI:function(){return c},qm:function(){return h},xw:function(){return u}});var r=n(8683),i=n(8153),s=n(4554);let o=(0,r.HF)({selectId:e=>e.id}),a=(0,r.oM)({name:"user",initialState:o.getInitialState({authStatus:i.m.LOADING,authLoading:!0,authError:"",authUser:null,profile:null,status:i.G.IDLE,message:"",error:""}),reducers:{authReceived(e,t){e.authUser=t.payload,e.authLoading=!1,e.authStatus=null!==t.payload?i.m.SIGNED_IN:i.m.SIGNED_OUT,null!==t.payload&&(e.authError="")},authStatusReceived(e,t){e.authStatus=t.payload,e.authLoading=e.authStatus===i.m.LOADING},authErrorReceived(e,t){e.authError=t.payload},authLoadingReceived(e,t){e.authLoading=t.payload,t.payload&&(e.authStatus,i.m.LOADING)},profileReceived(e,t){e.profile=t.payload}},extraReducers:e=>{e.addCase(s.h.fulfilled,(e,t)=>{let{payload:n}=t;e.authStatus=i.m.SIGNED_OUT,e.authLoading=!1,e.authError=n}),e.addCase(s.h.rejected,(e,t)=>{let{message:n}=t.error;e.authStatus=i.m.SIGNED_IN,e.authLoading=!1,e.authError="".concat(n,". ").concat(t.payload)})}}),{authErrorReceived:u,authInitReceived:l,authLoadingReceived:c,authReceived:h,authStatusReceived:d,profileReceived:f,userLoading:p}=a.actions;t.ZP=a.reducer},4554:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(8683),i=n(3029),s=n(9751);let o=(0,r.hg)("auth/signout",async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;t.dispatch((0,i.OI)(!0));try{return await (0,s.w7)(s.I8),e}catch(e){var n,r;return t.rejectWithValue(null!==(r=null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.data)&&void 0!==r?r:e.message)}})},9751:function(e,t,n){"use strict";n.d(t,{I8:function(){return O},Xb:function(){return A.Xb},H:function(){return C},Aj:function(){return A.Aj},e5:function(){return A.e5},w7:function(){return A.w7}});var r,i,s,o,a=n(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,a.KN)("firebase","9.17.1","app");var u=n(3247),l=n(4444),c=n(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="firebasestorage.googleapis.com";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends l.ZR{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function p(e){return new d(s.INVALID_ARGUMENT,e)}function m(){return new d(s.APP_DELETED,"The Firebase app was deleted.")}(r=s||(s={})).UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=g.makeFromUrl(e,t)}catch(t){return new g(e,"")}if(""===n.path)return n;throw new d(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),u=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),c=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:u,indices:{bucket:1,path:3},postModify:o},{regex:l,indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<c.length;t++){let r=c[t],i=r.regex.exec(e);if(i){let e=i[r.indices.bucket],t=i[r.indices.path];t||(t=""),n=new g(e,t),r.postModify(n);break}}if(null==n)throw new d(s.INVALID_URL,"Invalid URL '"+e+"'.");return n}}class y{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function v(e,t,n,r){if(r<t)throw p(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw p(`Invalid value for '${e}'. Expected ${n} or less.`)}(i=o||(o={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t,n,r,i,s,o,a,u,l,c,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new w(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===o.NO_ERROR,i=n.getStatus();if(!t||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=-1!==[408,429].indexOf(e),r=-1!==t.indexOf(e);return e>=500&&e<600||n||r}(i,this.additionalRetryCodes_)&&this.retry){let t=n.getErrorCode()===o.ABORT;e(!1,new w(!1,null,t));return}let s=-1!==this.successCodes_.indexOf(i);e(!0,new w(s,n))})},t=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){let e=new d(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,e):e)}else if(t.canceled){let e=this.appDelete_?m():new d(s.CANCELED,"User canceled the upload/download.");r(e)}else{let e=new d(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");r(e)}};this.canceled_?t(!1,new w(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){let r=1,i=null,s=null,o=!1,a=0,u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function c(t){i=setTimeout(()=>{i=null,e(d,2===a)},t)}function h(){s&&clearTimeout(s)}function d(e,...t){let n;if(u){h();return}if(e){h(),l.call(null,e,...t);return}let i=2===a||o;if(i){h(),l.call(null,e,...t);return}r<64&&(r*=2),1===a?(a=2,n=0):n=(r+Math.random())*1e3,c(n)}let f=!1;function p(e){!f&&(f=!0,h(),!u&&(null!==i?(e||(a=2),clearTimeout(i),c(0)):e||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,p(!0)},n),p}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class w{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this._service=e,t instanceof g?this._location=t:this._location=g.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new _(e,t)}get root(){let e=new g(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let n=e.slice(0,t);return n}(this._location.path);if(null===e)return null;let t=new g(this._location.bucket,e);return new _(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function E(e,t){let n=null==t?void 0:t.storageBucket;return null==n?null:g.makeFromBucketSpec(n,e)}class I{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=g.makeFromBucketSpec(r,this._host):this._bucket=E(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=g.makeFromBucketSpec(this._url,e):this._bucket=E(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new y(m());{let s=function(e,t,n,r,i,s,o=!0){var a,u,l;let c=function(e){let t=encodeURIComponent,n="?";for(let r in e)if(e.hasOwnProperty(r)){let i=t(r)+"="+t(e[r]);n=n+i+"&"}return n.slice(0,-1)}(e.urlParams),h=e.url+c,d=Object.assign({},e.headers);return a=d,t&&(a["X-Firebase-GMPID"]=t),u=d,null!==n&&n.length>0&&(u.Authorization="Firebase "+n),d["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),l=d,null!==r&&(l["X-Firebase-AppCheck"]=r),new b(h,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}let T="@firebase/storage",S="0.11.1",k="storage";(0,a.Xd)(new c.wA(k,function(e,{instanceIdentifier:t}){let n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new I(n,r,i,t,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(T,S,""),(0,a.KN)(T,S,"esm2017");var A=n(8578);let C=0===(0,a.C6)().length?(0,a.ZF)({apiKey:"AIzaSyD5gcCSnmkFYyxs6ZiDmUUT46dKATMcWLs",authDomain:"myphonebook-app.firebaseapp.com",projectId:"myphonebook-app",storageBucket:"myphonebook-app.appspot.com",messagingSenderId:"235351276644",appId:"1:235351276644:web:3cc1a2a58884f7fb82b371",measurementId:"G-SGHS2JFLEM"}):(0,a.C6)()[0];(0,u.ad)(C),function(e=(0,a.Mq)(),t){e=(0,l.m9)(e);let n=(0,a.qX)(e,k),r=n.getImmediate({identifier:void 0}),i=(0,l.P0)("storage");i&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,e.app.options.projectId))}(e,t,n,r)}(r,...i)}(C);let O=(0,A.v0)(C)},7488:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var r=n(2037),i=n(4924),s=n(7297),o=n(3247),a=n(9751);function u(){let e=(0,s.Z)(["(?<segment>[^/]+)"]);return u=function(){return e},e}class l{static async createDoc(e,t){switch(!0){case(0,r.Z)(this,l,d).call(l,e):{let n=(0,o.JU)(this.db,e),r=n.id,i=await (0,o.pl)(n,{...t,doc_id:r,date_created:(0,o.Bt)(),date_updated:(0,o.Bt)()});return i}case(0,r.Z)(this,l,h).call(l,e):{let n=(0,o.hJ)(this.db,e),r=(0,o.JU)(n),i=r.id,s=await (0,o.pl)(r,{...t,doc_id:i,date_created:(0,o.Bt)(),date_updated:(0,o.Bt)()});return s}}}static async readDoc(e){if(!(0,r.Z)(this,l,d).call(l,e))return;let t=(0,o.JU)(this.db,e),n=await (0,o.QT)(t),i=n.data();return i}static async readCol(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!(0,r.Z)(this,l,h).call(l,e))return;let s=(0,o.hJ)(this.db,e),a=(0,o.IO)(s,...n),u=await (0,o.PL)(a),c=u.docs.map(e=>({...e.data()}));return c}static async readColGroup(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(1!==(0,r.Z)(this,l,c).call(l,e))return;let s=(0,o.B$)(this.db,e),a=(0,o.IO)(s,...n),u=await (0,o.PL)(a),h=u.docs.map(e=>({...e.data()}));return h}static async updateDoc(e,t){if(!(0,r.Z)(this,l,d).call(l,e))return;let n=(0,o.JU)(this.db,e),i=await (0,o.r7)(n,{...t,date_updated:(0,o.Bt)()});return i}static async deleteDoc(e){if(!(0,r.Z)(this,l,d).call(l,e))return;let t=(0,o.JU)(this.db,e),n=await (0,o.oe)(t);return n}static async subscribeDoc(e,t){if(!(0,r.Z)(this,l,d).call(l,e))return;let n=(0,o.JU)(this.db,e),i=(0,o.cf)(n,t);return i}static async subscribeCol(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];if(!(0,r.Z)(this,l,h).call(l,e))return;let a=(0,o.hJ)(this.db,e),u=(0,o.IO)(a,...i),c=(0,o.cf)(u,t);return c}}(0,i.Z)(l,"db",(0,o.ad)(a.H));var c={writable:!0,value:e=>{let t=e.match(RegExp(String.raw(u()),"gi")).length;return t}},h={writable:!0,value:e=>{let t=(0,r.Z)(l,l,c).call(l,e);return 0!==t&&t%2==1}},d={writable:!0,value:e=>{let t=(0,r.Z)(l,l,c).call(l,e);return 0!==t&&t%2==0}};(0,i.Z)(l,"subscribeColGroup",async function(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];if(1!==(0,r.Z)(l,l,c).call(l,e))return;let a=(0,o.B$)(l.db,e),u=(0,o.IO)(a,...i),h=(0,o.cf)(u,t);return h})},7943:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(5697),s=n.n(i),o=n(9008),a=n.n(o),u=n(1927),l=n(6720),c=n(2443);n(9062);var h=n(9473),d=n(8356),f=n(8683),p=n(8153),m=n(3029),g=n(7488),y=n(3247);let v=async(e,t)=>{let n=await g.q.createDoc("users/".concat(e,"/contacts"),t);return n},b=async e=>{let t=await g.q.readCol("users/".concat(e,"/contacts"),(0,y.Xo)("first_name"));return t},w=async(e,t)=>{let n=await g.q.readDoc("users/".concat(e,"/contacts/").concat(t));return n},_=async(e,t,n)=>{let r=await g.q.updateDoc("users/".concat(e,"/contacts/").concat(t),n);return r},E=async e=>{let t=await g.q.deleteDoc("users/".concat(e));return t},I=(0,f.hg)("contacts/readContacts",async e=>{let t=await b(e.user_uid);return t}),T=(0,f.hg)("contacts/readContact",async e=>{let t=await w(e.user_uid,e.doc_id);return t}),S=(0,f.hg)("contacts/createContact",async e=>{let t=await v(e.user_uid,e);return t}),k=(0,f.hg)("contacts/updateContact",async e=>{let t=await _(e.user_uid,e.doc_id,e);return t}),A=(0,f.hg)("contacts/deleteContact",async e=>{let t=await E(e.user_uid,e.doc_id);return t}),C=(0,f.oM)({name:"contacts",initialState:{entities:[],loading:"idle"|"pending"|"succeeded"|"failed",error:!1,searchKeyword:"",searchResults:[],displayedContact:{}},reducers:{search:(e,t)=>{e.searchKeyword=t.payload;let n=(()=>{let t=e.entities.reduce((e,t)=>{for(let[n,r]of Object.entries(t))RegExp(String.raw`${searchText}`,"i").test(r)&&(e[n]||(e[n]=[]),e[n]=[...e[n],t]);return e},{});return t})(search),r=Object.entries(n);e.searchResults=r}},extraReducers:e=>{e.addCase(I.fulfilled,(e,t)=>{e.loading="succeeded",e.entities=t.payload,e.loading="idle"}).addCase(T.fulfilled,(e,t)=>{e.loading="succeeded";for(let n=0;n<e.entities.length;n++)t.arg.doc_id===e.entities[n].doc_id&&(e.entities[n]=t.payload);e.loading="idle"}).addCase(S.fulfilled,(e,t)=>{e.loading="succeeded",e.entities.push(t.payload),e.loading="idle"}).addCase(k.fulfilled,(e,t)=>{e.loading="succeeded";for(let n=0;n<e.entities.length;n++)t.arg.doc_id===e.entities[n].doc_id&&(e.entities[n]=t.payload);e.loading="idle"}).addCase(A.fulfilled,(e,t)=>{e.loading="succeeded";for(let n=0;n<e.entities.length;n++)t.arg.doc_id===e.entities[n].doc_id&&e.entities.splice(n,1);e.loading="idle"}).addMatcher((0,f.zR)(S,T,I,k,A),e=>{e.loading="pending"}).addMatcher((0,f.Iv)(S,T,I,k,A),(e,t)=>{e.error=!0})}}),{}=C.actions;var O=C.reducer;let N=(0,d.UY)({user:m.ZP,contacts:O}),R=(e,t)=>(e&&e.user.authState===p.m.SIGNED_OUT&&(e=void 0),N(e,t)),D=(0,f.xC)({reducer:R});var x=n(9005),P=n(8417);let L="undefined"!=typeof document;var M=n(4758),U=n(3367);(0,n(3232).lU)("ui",{activeContact:null,phase:{createContact:!1,editContact:!1,search:!1,deleteContact:!1},search:{searchKeyword:""}});let F=function(){let e;if(L){let t=document.querySelector('meta[name="emotion-insertion-point"]');e=null!=t?t:void 0}return(0,P.Z)({key:"mui-style",insertionPoint:e})}();function j(e){let t=(0,U.e6)("activeTheme"),{Component:n,emotionCache:i=F,pageProps:s}=e;return(0,r.jsxs)(c.C,{value:i,children:[(0,r.jsx)(a(),{children:(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"})}),(0,r.jsxs)(u.Z,{theme:"light"===t?M.Wb:M.$_,children:[(0,r.jsx)(l.ZP,{}),(0,r.jsx)(h.zt,{store:D,children:(0,r.jsx)(x.H,{children:(0,r.jsx)(n,{...s})})})]})]})}j.propTypes={Component:s().elementType.isRequired,emotionCache:s().object,pageProps:s().object.isRequired}},9062:function(){},402:function(e){e.exports={style:{fontFamily:"'__Roboto_b0ac50', '__Roboto_Fallback_b0ac50', Helvetica, Arial, sans-serif",fontStyle:"normal"},className:"__className_b0ac50"}},3377:function(e){e.exports={style:{fontFamily:"'__Avalon_9d4e23', '__Avalon_Fallback_9d4e23'"},className:"__className_9d4e23"}},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u=[],l=!1,c=-1;function h(){l&&r&&(l=!1,r.length?u=r.concat(u):c=-1,u.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(r=u,u=[];++c<t;)r&&r[c].run();c=-1,t=u.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},9008:function(e,t,n){e.exports=n(3121)},2703:function(e,t,n){"use strict";var r=n(414);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,s,o){if(o!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case h:case s:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case m:case u:return e;default:return t}}case i:return t}}}function E(e){return _(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=l,t.ContextProvider=u,t.Element=r,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return E(e)||_(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return _(e)===l},t.isContextProvider=function(e){return _(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return _(e)===d},t.isFragment=function(e){return _(e)===s},t.isLazy=function(e){return _(e)===g},t.isMemo=function(e){return _(e)===m},t.isPortal=function(e){return _(e)===i},t.isProfiler=function(e){return _(e)===a},t.isStrictMode=function(e){return _(e)===o},t.isSuspense=function(e){return _(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=_},9864:function(e,t,n){"use strict";e.exports=n(9921)},9473:function(e,t,n){"use strict";n.d(t,{zt:function(){return v},I0:function(){return _},v9:function(){return p}});var r=n(1688),i=n(2798),s=n(3935);let o=function(e){e()},a=()=>o;var u=n(7294);let l=(0,u.createContext)(null);function c(){let e=(0,u.useContext)(l);return e}let h=()=>{throw Error("uSES not initialized!")},d=h,f=(e,t)=>e===t,p=function(e=l){let t=e===l?c:()=>(0,u.useContext)(e);return function(e,n=f){let{store:r,subscription:i,getServerState:s}=t(),o=d(i.addNestedSub,r.getState,s||r.getState,e,n);return(0,u.useDebugValue)(o),o}}();n(8679),n(2973);let m={notify(){},get:()=>[]},g=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),y=g?u.useLayoutEffect:u.useEffect;var v=function({store:e,context:t,children:n,serverState:r}){let i=(0,u.useMemo)(()=>{let t=function(e,t){let n;let r=m;function i(){o.onStateChange&&o.onStateChange()}function s(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){let e=a(),t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}let o={addNestedSub:function(e){return s(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(n)},trySubscribe:s,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=m)},getListeners:()=>r};return o}(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0}},[e,r]),s=(0,u.useMemo)(()=>e.getState(),[e]);return y(()=>{let{subscription:t}=i;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[i,s]),u.createElement((t||l).Provider,{value:i},n)};function b(e=l){let t=e===l?c:()=>(0,u.useContext)(e);return function(){let{store:e}=t();return e}}let w=b(),_=function(e=l){let t=e===l?w:b(e);return function(){let e=t();return e.dispatch}}();d=i.useSyncExternalStoreWithSelector,r.useSyncExternalStore,o=s.unstable_batchedUpdates},8359:function(e,t){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},2973:function(e,t,n){"use strict";n(8359)},8356:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){!function(e,t,n){var i;i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===r(i)?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}n.d(t,{md:function(){return f},UY:function(){return h},qC:function(){return d},MT:function(){return c}});var a="function"==typeof Symbol&&Symbol.observable||"@@observable",u=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+u(),REPLACE:"@@redux/REPLACE"+u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+u()}};function c(e,t,n){if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(o(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error(o(1));return n(c)(e,t)}if("function"!=typeof e)throw Error(o(2));var r,i=e,s=t,u=[],h=u,d=!1;function f(){h===u&&(h=u.slice())}function p(){if(d)throw Error(o(3));return s}function m(e){if("function"!=typeof e)throw Error(o(4));if(d)throw Error(o(5));var t=!0;return f(),h.push(e),function(){if(t){if(d)throw Error(o(6));t=!1,f();var n=h.indexOf(e);h.splice(n,1),u=null}}}function g(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(o(7));if(void 0===e.type)throw Error(o(8));if(d)throw Error(o(9));try{d=!0,s=i(s,e)}finally{d=!1}for(var t=u=h,n=0;n<t.length;n++)(0,t[n])();return e}return g({type:l.INIT}),(r={dispatch:g,subscribe:m,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw Error(o(10));i=e,g({type:l.REPLACE})}})[a]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw Error(o(11));function t(){e.next&&e.next(p())}return t(),{unsubscribe:m(t)}}})[a]=function(){return this},e},r}function h(e){for(var t,n=Object.keys(e),r={},i=0;i<n.length;i++){var s=n[i];"function"==typeof e[s]&&(r[s]=e[s])}var a=Object.keys(r);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:l.INIT}))throw Error(o(12));if(void 0===n(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw Error(o(13))})}(r)}catch(e){t=e}return function(e,n){if(void 0===e&&(e={}),t)throw t;for(var i=!1,s={},u=0;u<a.length;u++){var l=a[u],c=r[l],h=e[l],d=c(h,n);if(void 0===d)throw n&&n.type,Error(o(14));s[l]=d,i=i||d!==h}return(i=i||a.length!==Object.keys(e).length)?s:e}}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error(o(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map(function(e){return e(i)});return r=d.apply(void 0,a)(n.dispatch),s(s({},n),{},{dispatch:r})}}}},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,o=r.useEffect,a=r.useLayoutEffect,u=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return a(function(){i.value=n,i.getSnapshot=t,l(i)&&c({inst:i})},[e,n,t]),o(function(){return l(i)&&c({inst:i}),e(function(){l(i)&&c({inst:i})})},[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},6742:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),i=n(1688),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,a=r.useRef,u=r.useEffect,l=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var h=a(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;h=l(function(){function e(e){if(!u){if(u=!0,o=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(o=e,a=n)}var o,a,u=!1,l=void 0===n?null:n;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,n,r,i]);var f=o(e,h[0],h[1]);return u(function(){d.hasValue=!0,d.value=f},[f]),c(f),f}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(6742)},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})},5816:function(e,t,n){"use strict";let r,i;n.d(t,{Jn:function(){return P},qX:function(){return R},Xd:function(){return N},Mq:function(){return M},C6:function(){return U},ZF:function(){return L},KN:function(){return F}});var s,o=n(8463),a=n(3333),u=n(4444);let l=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),g(c.get(this))}:function(...e){return g(t.apply(y(this),e))}:function(e,...n){let r=t.call(y(this),e,...n);return d.set(r,e.sort?e.sort():[e]),g(r)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),l(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,m):t;return n!==e&&(f.set(e,n),p.set(n,e)),n}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function _(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return w.set(t,s),s}m={...s=m,get:(e,t,n)=>_(e,t)||s.get(e,t,n),has:(e,t)=>!!_(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",T="0.9.3",S=new a.Yd("@firebase/app"),k="[DEFAULT]",A={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},C=new Map,O=new Map;function N(e){let t=e.name;if(O.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(O.set(t,e),C.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function R(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let D=new u.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P="9.17.1";function L(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw D.create("bad-app-name",{appName:String(i)});if(n||(n=(0,u.aH)()),!n)throw D.create("no-options");let s=C.get(i);if(s){if((0,u.vZ)(n,s.options)&&(0,u.vZ)(r,s.config))return s;throw D.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of O.values())a.addComponent(e);let l=new x(n,r,a);return C.set(i,l),l}function M(e=k){let t=C.get(e);if(!t&&e===k)return L();if(!t)throw D.create("no-app",{appName:e});return t}function U(){return Array.from(C.values())}function F(e,t,n){var r;let i=null!==(r=A[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(e.join(" "));return}N(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let j="firebase-heartbeat-store",V=null;function $(){return V||(V=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=g(o);return r&&o.addEventListener("upgradeneeded",e=>{r(g(o.result),e.oldVersion,e.newVersion,g(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(j)}}).catch(e=>{throw D.create("idb-open",{originalErrorMessage:e.message})})),V}async function q(e){try{let t=await $();return t.transaction(j).objectStore(j).get(z(e))}catch(e){if(e instanceof u.ZR)S.warn(e.message);else{let t=D.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}async function B(e,t){try{let n=await $(),r=n.transaction(j,"readwrite"),i=r.objectStore(j);return await i.put(t,z(e)),r.done}catch(e){if(e instanceof u.ZR)S.warn(e.message);else{let t=D.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function z(e){return`${e.name}!${e.options.appId}`}class K{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new H(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=G();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=G(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Z(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Z(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,u.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function G(){let e=new Date;return e.toISOString().substring(0,10)}class H{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,u.hl)()&&(0,u.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await q(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Z(e){return(0,u.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),N(new o.wA("heartbeat",e=>new K(e),"PRIVATE")),F(I,T,""),F(I,T,"esm2017"),F("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return a},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return c},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,u={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=u[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},2037:function(e,t,n){"use strict";function r(e,t,n){return!function(e,t){if(e!==t)throw TypeError("Private static access of wrong provenance")}(e,t),!function(e,t){if(void 0===e)throw TypeError("attempted to get private static field before its declaration")}(n,0),n.get?n.get.call(e):n.value}n.d(t,{Z:function(){return r}})},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7297:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})},8578:function(e,t,n){"use strict";n.d(t,{Xb:function(){return eX},v0:function(){return tY},Aj:function(){return eY},e5:function(){return eJ},w7:function(){return e0},TX:function(){return eQ}});var r,i=n(4444),s=n(5816),o=n(3333);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var u=n(8463);function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new i.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o.in.ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function m(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v=new Map;function b(e){e instanceof Function||y("Expected a class definition");let t=v.get(e);return t?(t instanceof e||y("Instance stored in cache mismatched with class"),t):(t=new e,v.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||y("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_()||"https:"===_()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){e.emulator||y("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},k=new E(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,n,r,s={}){return O(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),T.fetch()(R(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function O(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},S),t);try{let t=new D(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw x(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let t=s.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw x(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw x(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw x(e,"user-disabled",o);let u=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,n){let r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}(e,u,a);f(e,u)}}catch(t){if(t instanceof i.ZR)throw t;f(e,"network-request-failed")}}async function N(e,t,n,r,i={}){let s=await C(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function R(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?I(e.config,i):`${e.config.apiScheme}://${i}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function x(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function L(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function U(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=j(r);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:M(F(s.auth_time)),issuedAtTime:M(F(s.iat)),expirationTime:M(F(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function F(e){return 1e3*Number(e)}function j(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(n);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=M(this.lastLoginAt),this.creationTime=M(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){var t;let n=e.auth,r=await e.getIdToken(),i=await V(e,L(n,{idToken:r}));g(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],u=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==u?void 0:u.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new q(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&c};Object.assign(e,h)}async function z(e){let t=(0,i.m9)(e);await B(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){let n=await O(e,{},async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=R(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(void 0!==e.idToken,"internal-error"),g(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=j(e);return g(t,"internal-error"),g(void 0!==t.exp,"internal-error"),g(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await K(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new G;return n&&(g("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(g("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(g("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){g("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Z{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await V(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U(this,e)}reload(){return z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Z(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await B(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await V(this,P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,u,l;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,y=null!==(u=t.createdAt)&&void 0!==u?u:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:I}=t;g(b&&I,e,"internal-error");let T=G.fromJSON(this.name,I);g("string"==typeof b,e,"internal-error"),H(c,e.name),H(h,e.name),g("boolean"==typeof w,e,"internal-error"),g("boolean"==typeof _,e,"internal-error"),H(d,e.name),H(f,e.name),H(p,e.name),H(m,e.name),H(y,e.name),H(v,e.name);let S=new Z({uid:b,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:y,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){let r=new G;r.updateFromServerResponse(t);let i=new Z({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await B(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t,n){return`firebase:${e}:${t}:${n}`}W.type="NONE";class X{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=Q(this.userKey,r.apiKey,i),this.fullPersistenceKey=Q("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Z._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new X(b(W),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||b(W),s=Q(n,e.config.apiKey,e.name),o=null;for(let n of t)try{let t=await n._get(s);if(t){let r=Z._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}let a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new X(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(en(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(Y(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ei(t))return"Blackberry";if(es(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||et(t))&&!t.includes("edge/"))return"Chrome";if(er(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function Y(e=(0,i.z$)()){return/firefox\//i.test(e)}function ee(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function et(e=(0,i.z$)()){return/crios\//i.test(e)}function en(e=(0,i.z$)()){return/iemobile/i.test(e)}function er(e=(0,i.z$)()){return/android/i.test(e)}function ei(e=(0,i.z$)()){return/blackberry/i.test(e)}function es(e=(0,i.z$)()){return/webos/i.test(e)}function eo(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ea(e=(0,i.z$)()){return eo(e)||er(e)||es(e)||ei(e)||/windows phone/i.test(e)||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t=[]){let n;switch(e){case"Browser":n=J((0,i.z$)());break;case"Worker":n=`${J((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let r=e(t);n(r)}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new el(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=b(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await X.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!n||n===s)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await B(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(b(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&b(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[b(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(g(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function eh(e){return(0,i.m9)(e)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ef(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ep(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(e,t){return C(e,"POST","/v1/accounts:resetPassword",A(e,t))}async function ey(e,t){return C(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function ew(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends em{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new e_(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new e_(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ev(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eb(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ey(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ew(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class eI extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eI(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new eI(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eE(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eE(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eE(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function eS(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function ek(e,t){let n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw x(e,"account-exists-with-different-credential",n);return n}let eA={USER_NOT_FOUND:"user-not-found"};async function eC(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),eA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO extends em{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eO({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eO({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eS(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ek(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eC(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new eO({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eN{constructor(e){var t,n,r,s,o,a;let u=(0,i.zd)((0,i.pd)(e)),l=null!==(t=u.apiKey)&&void 0!==t?t:null,c=null!==(n=u.oobCode)&&void 0!==n?n:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=u.mode)&&void 0!==r?r:null);g(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(s=u.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=u.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=r?(0,i.zd)((0,i.pd)(r)).link:null;return s||r||n||t||e}(e);try{return new eN(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.providerId=eR.PROVIDER_ID}static credential(e,t){return e_._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eN.parseLink(t);return g(n,"argument-error"),e_._fromEmailAndCode(e,n.code,n.tenantId)}}eR.PROVIDER_ID="password",eR.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eR.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex extends eD{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP extends ex{constructor(){super("facebook.com")}static credential(e){return eI._fromParams({providerId:eP.PROVIDER_ID,signInMethod:eP.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eP.credentialFromTaggedObject(e)}static credentialFromError(e){return eP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eP.credential(e.oauthAccessToken)}catch(e){return null}}}eP.FACEBOOK_SIGN_IN_METHOD="facebook.com",eP.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL extends ex{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eI._fromParams({providerId:eL.PROVIDER_ID,signInMethod:eL.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eL.credentialFromTaggedObject(e)}static credentialFromError(e){return eL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eL.credential(t,n)}catch(e){return null}}}eL.GOOGLE_SIGN_IN_METHOD="google.com",eL.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM extends ex{constructor(){super("github.com")}static credential(e){return eI._fromParams({providerId:eM.PROVIDER_ID,signInMethod:eM.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eM.credentialFromTaggedObject(e)}static credentialFromError(e){return eM.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eM.credential(e.oauthAccessToken)}catch(e){return null}}}eM.GITHUB_SIGN_IN_METHOD="github.com",eM.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends ex{constructor(){super("twitter.com")}static credential(e,t){return eI._fromParams({providerId:eU.PROVIDER_ID,signInMethod:eU.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eU.credentialFromTaggedObject(e)}static credentialFromError(e){return eU.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eU.credential(t,n)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eF(e,t){return N(e,"POST","/v1/accounts:signUp",A(e,t))}eU.TWITTER_SIGN_IN_METHOD="twitter.com",eU.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await Z._fromIdTokenResponse(e,n,r),s=eV(n),o=new ej({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=eV(n);return new ej({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function eV(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e$ extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,e$.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new e$(e,t,n,r)}}function eq(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw e$._fromErrorAndOperation(e,n,t,r);throw n})}async function eB(e,t,n=!1){let r=await V(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ej._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ez(e,t,n=!1){let{auth:r}=e,i="reauthenticate";try{let s=await V(e,eq(r,i,t,e),n);g(s.idToken,r,"internal-error");let o=j(s.idToken);g(o,r,"internal-error");let{sub:a}=o;return g(e.uid===a,r,"user-mismatch"),ej._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(r,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eK(e,t,n=!1){let r="signIn",i=await eq(e,r,t),s=await ej._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function eG(e,t){return eK(eh(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?eZ._fromServerResponse(e,t):f(e,"internal-error")}}class eZ extends eH{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new eZ(t)}}async function eW(e,t){let n=(0,i.m9)(e),r=await eg(n,{oobCode:t}),s=r.requestType;switch(g(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":g(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":g(r.mfaInfo,n,"internal-error");default:g(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=eH._fromServerResponse(eh(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function eQ(e,t){let{data:n}=await eW((0,i.m9)(e),t);return n.email}async function eX(e,t,n){let r=eh(e),i=await eF(r,{returnSecureToken:!0,email:t,password:n}),s=await ej._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function eJ(e,t,n){return eG((0,i.m9)(e),eR.credential(t,n))}function eY(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}function e0(e){return(0,i.m9)(e).signOut()}new WeakMap;let e1="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e1,"1"),this.storage.removeItem(e1),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e4 extends e2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return ee(e)||eo(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=ea(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e4.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3 extends e2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e3.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new e5(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e6(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}e5.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let u=e6("",20);s.port1.start();let l=setTimeout(()=>{a(Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e7(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(){return void 0!==e7().WorkerGlobalScope&&"function"==typeof e7().importScripts}async function te(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt="firebaseLocalStorageDb",tn="firebaseLocalStorage",tr="fbase_key";class ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ts(e,t){return e.transaction([tn],t?"readwrite":"readonly").objectStore(tn)}function to(){let e=indexedDB.open(tt,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(tn,{keyPath:tr})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(tn)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(tt);return new ti(e).toPromise()}(),t(await to()))})})}async function ta(e,t,n){let r=ts(e,!0).put({[tr]:t,value:n});return new ti(r).toPromise()}async function tu(e,t){let n=ts(e,!1).get(t),r=await new ti(n).toPromise();return void 0===r?null:r.value}function tl(e,t){let n=ts(e,!0).delete(t);return new ti(n).toPromise()}class tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await to()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e8()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e5._getInstance(e8()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await te(),!this.activeServiceWorker)return;this.sender=new e9(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await to();return await ta(e,e1,"1"),await tl(e,e1),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ta(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tu(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=ts(e,!1).getAll();return new ti(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function th(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function td(e,t,n){var r,i,s;let o=await n.verify();try{let a;if(g("string"==typeof o,e,"argument-error"),g("recaptcha"===n.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){g("enroll"===t.type,e,"internal-error");let n=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},C(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)));return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");let n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;g(n,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}},C(e,"POST","/v2/accounts/mfaSignIn:start",A(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eT(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}tc.type="LOCAL",th("rcb"),new E(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.providerId=tf.PROVIDER_ID,this.auth=eh(e)}verifyPhoneNumber(e,t){return td(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eO._fromVerification(e,t)}static credentialFromResult(e){return tf.credentialFromTaggedObject(e)}static credentialFromError(e){return tf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?eO._fromTokenResponse(t,n):null}}tf.PROVIDER_ID="phone",tf.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eE(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eE(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eE(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tm(e){return eK(e.auth,new tp(e),e.bypassAuthState)}function tg(e){let{auth:t,user:n}=e;return g(n,t,"internal-error"),ez(n,new tp(e),e.bypassAuthState)}async function ty(e){let{auth:t,user:n}=e;return g(n,t,"internal-error"),eB(n,new tp(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tm;case"linkViaPopup":case"linkViaRedirect":return ty;case"reauthViaPopup":case"reauthViaRedirect":return tg;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tb=new E(2e3,1e4);class tw extends tv{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tw.currentPopupAction&&tw.currentPopupAction.cancel(),tw.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||y("Popup operations only handle one event");let e=e6();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tw.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tb.get())};e()}}tw.currentPopupAction=null;let t_=new Map;class tE extends tv{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=t_.get(this.auth._key());if(!e){try{let t=await tI(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}t_.set(this.auth._key(),e)}return this.bypassAuthState||t_.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tI(e,t){let n=Q("pendingRedirect",t.config.apiKey,t.name),r=b(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function tT(e,t){t_.set(e._key(),t)}async function tS(e,t,n=!1){let r=eh(e),i=t?b(t):(g(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver),s=new tE(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class tk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tC(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tC(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tA(e))}saveEventToCache(e){this.cachedEventUids.add(tA(e)),this.lastProcessedEventTime=Date.now()}}function tA(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tC({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(e,t={}){return C(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tR=/^https?/;async function tD(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tO(e);for(let e of t)try{if(function(e){let t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tR.test(n))return!1;if(tN.test(e))return r===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tx=new E(3e4,6e4);function tP(){let e=e7().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tL=null,tM=new E(5e3,15e3),tU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tj(e){let t=await (tL=tL||new Promise((t,n)=>{var r,i,s,o;function a(){tP(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tP(),n(p(e,"network-request-failed"))},timeout:tx.get()})}if(null===(i=null===(r=e7().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=e7().gapi)||void 0===s?void 0:s.load)a();else{let t=th("iframefcb");return e7()[t]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${t}`,new Promise((e,t)=>{var n,r;let i=document.createElement("script");i.setAttribute("src",o),i.onload=e,i.onerror=e=>{let n=p("internal-error");n.customData=e,t(n)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(i)})).catch(e=>n(e))}}).catch(e=>{throw tL=null,e})),n=e7().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;g(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?I(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=tF.get(e.config.apiHost);o&&(r.eid=o);let a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tU,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=e7().setTimeout(()=>{r(i)},tM.get());function o(){e7().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class t${constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tq(e,t,n,r,o,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");let u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:o};if(t instanceof eD)for(let[n,r]of(t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))u[n]=r;if(t instanceof ex){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);let l=u;for(let e of Object.keys(l))void 0===l[e]&&delete l[e];return`${function({config:e}){return e.emulator?I(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tB="webStorageSupport",tz=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e3,this._completeRedirectFn=tS,this._overrideRedirectResult=tT}async _openPopup(e,t,n,r){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||y("_initialize() not called before _openPopup()");let o=tq(e,t,n,w(),r);return function(e,t,n,r=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",l=Object.assign(Object.assign({},tV),{width:r.toString(),height:s.toString(),top:o,left:a}),c=(0,i.z$)().toLowerCase();n&&(u=et(c)?"_blank":n),Y(c)&&(t=t||"http://localhost",l.scrollbars="yes");let h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.z$)()){var t;return eo(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==u)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",u),new t$(null);let d=window.open(t||"",u,h);g(d,e,"popup-blocked");try{d.focus()}catch(e){}return new t$(d)}(e,o,e6())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=tq(e,t,n,w(),r),e7().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||y("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await tj(e),n=new tk(e);return t.register("authEvent",t=>{g(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(tB,{type:tB},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tB];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ea()||ee()||eo()}};class tK{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class tG extends tK{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tG(e)}_finalizeEnroll(e,t,n){return C(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var tH="@firebase/auth",tZ="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let tQ=(0,i.Pz)("authIdTokenMaxAge")||300,tX=null,tJ=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tQ)return;let i=null==n?void 0:n.token;tX!==i&&(tX=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tY(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!=t?t:{}))return e;f(e,"already-initialized")}let r=n.initialize({options:t});return r}(e,{popupRedirectResolver:tz,persistence:[tc,e4,e3]}),r=(0,i.Pz)("authTokenSyncURL");if(r){var o,a;let e=tJ(r);o=()=>e(n.currentUser),(0,i.m9)(n).beforeAuthStateChanged(e,o),a=t=>e(t),(0,i.m9)(n).onIdTokenChanged(a,void 0,void 0)}let u=(0,i.q4)("auth");return u&&function(e,t,n){let r=eh(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=!!(null==n?void 0:n.disableWarnings),s=ef(t),{host:o,port:a}=function(e){let t=ef(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:ep(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:ep(t)}}}(t),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${u}`),n}r="Browser",(0,s.Xd)(new u.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=n.options;return((e,n)=>{g(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});let i={apiKey:s,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(r)},a=new ec(e,n,i);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),(0,s.Xd)(new u.wA("auth-internal",e=>{let t=eh(e.getProvider("auth").getImmediate());return new tW(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(tH,tZ,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(r)),(0,s.KN)(tH,tZ,"esm2017")},3247:function(e,t,n){"use strict";n.d(t,{hJ:function(){return am},B$:function(){return ag},oe:function(){return up},JU:function(){return ay},QT:function(){return ul},PL:function(){return uh},ad:function(){return aC},cf:function(){return um},Xo:function(){return a8},IO:function(){return a5},Bt:function(){return uv},pl:function(){return ud},r7:function(){return uf}});var r,i,s,o,a,u,l,c,h=n(5816),d=n(8463),f=n(3333),p=n(4444),m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},g={},y=y||{},v=m||self;function b(){}function w(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function _(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function E(e,t,n){return e.call.apply(e.bind,arguments)}function I(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E:I).apply(null,arguments)}function S(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function k(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function A(){this.s=this.s,this.o=this.o}A.prototype.s=!1,A.prototype.na=function(){this.s||(this.s=!0,this.M())},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function O(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function N(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(w(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",b,t),v.removeEventListener("test",b,t)}catch(e){}return e}();function x(e){return/^[\s\xa0]*$/.test(e)}var P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return e<t?-1:e>t?1:0}function M(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function U(e){return -1!=M().indexOf(e)}function F(e){return F[" "](e),e}F[" "]=b;var j=U("Opera"),V=U("Trident")||U("MSIE"),$=U("Edge"),q=$||V,B=U("Gecko")&&!(-1!=M().toLowerCase().indexOf("webkit")&&!U("Edge"))&&!(U("Trident")||U("MSIE"))&&!U("Edge"),z=-1!=M().toLowerCase().indexOf("webkit")&&!U("Edge");function K(){var e=v.document;return e?e.documentMode:void 0}e:{var G,H="",Z=(G=M(),B?/rv:([^\);]+)(\)|;)/.exec(G):$?/Edge\/([\d\.]+)/.exec(G):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(G):z?/WebKit\/(\S+)/.exec(G):j?/(?:Version)[ \/]?(\S+)/.exec(G):void 0);if(Z&&(H=Z?Z[1]:""),V){var W=K();if(null!=W&&W>parseFloat(H)){i=String(W);break e}}i=H}var Q={},X=v.document&&V&&(K()||parseInt(i,10))||void 0;function J(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{F(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&J.X.h.call(this)}}k(J,R);var Y={2:"touch",3:"pen",4:"mouse"};J.prototype.h=function(){J.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),et=0;function en(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++et,this.ba=this.ea=!1}function er(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ei(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function es(e){let t={};for(let n in e)t[n]=e[n];return t}let eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ea(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<eo.length;t++)n=eo[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function eu(e){this.src=e,this.g={},this.h=0}function el(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=C(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(er(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ec(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}eu.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ec(e,t,r,i);return -1<o?(t=e[o],n||(t.ea=!1)):((t=new en(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var eh="closure_lm_"+(1e6*Math.random()|0),ed={};function ef(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=_(i)?!!i.capture:!!i,a=ey(e);if(a||(e[eh]=a=new eu(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return eg.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)D||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(em(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ep(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ee])el(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(em(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ey(t))?(el(n,e),0==n.h&&(n.src=null,t[eh]=null)):er(e)}}}function em(e){return e in ed?ed[e]:ed[e]="on"+e}function eg(e,t){if(e.ba)e=!0;else{t=new J(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&ep(e),e=n.call(r,t)}return e}function ey(e){return(e=e[eh])instanceof eu?e:null}var ev="__closure_events_fn_"+(1e9*Math.random()>>>0);function eb(e){return"function"==typeof e?e:(e[ev]||(e[ev]=function(t){return e.handleEvent(t)}),e[ev])}function ew(){A.call(this),this.i=new eu(this),this.P=this,this.I=null}function e_(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var i=t;ea(t=new R(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=eE(o,r,!0,t)&&i}if(i=eE(o=t.g=e,r,!0,t)&&i,i=eE(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=eE(o=t.g=n[s],r,!1,t)&&i}function eE(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&el(e.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}k(ew,A),ew.prototype[ee]=!0,ew.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=_(i)?!!i.capture:!!i,r=eb(r),t&&t[ee])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ec(o=t.g[n],r,i,s))&&(er(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=ey(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ec(n,r,i,s)),(r=-1<t?n[t]:null)&&ep(r))}(this,e,t,n,r)},ew.prototype.M=function(){if(ew.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)er(n[r]);delete t.g[e],t.h--}}this.I=null},ew.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ew.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var eI=v.JSON.stringify,eT=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eS,e=>e.reset());class eS{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ek(e,t){var n;o||(n=v.Promise.resolve(void 0),o=function(){n.then(eO)}),eA||(o(),eA=!0),eC.add(e,t)}var eA=!1,eC=new class{constructor(){this.h=this.g=null}add(e,t){let n=eT.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function eO(){let e;for(;e=null,(t=eC).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),n=e;){try{n.h.call(n.g)}catch(e){!function(e){v.setTimeout(()=>{throw e},0)}(e)}var t,n,r=eT;r.j(n),100>r.h&&(r.h++,n.next=r.g,r.g=n)}eA=!1}function eN(e,t){ew.call(this),this.h=e||1,this.g=t||v,this.j=T(this.lb,this),this.l=Date.now()}function eR(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function eD(e,t,n){if("function"==typeof e)n&&(e=T(e,n));else if(e&&"function"==typeof e.handleEvent)e=T(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}k(eN,ew),(c=eN.prototype).ca=!1,c.R=null,c.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),e_(this,"tick"),this.ca&&(eR(this),this.start()))}},c.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){eN.X.M.call(this),eR(this),delete this.g};class ex extends A{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eD(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eP(e){A.call(this),this.h=e,this.g={}}k(eP,A);var eL=[];function eM(e,t,n,r){Array.isArray(n)||(n&&(eL[0]=n.toString()),n=eL);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=eb(r),t&&t[ee]?t.O(n,r,_(i)?!!i.capture:!!i,s):ef(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=eb(r),t&&t[ee]?t.N(n,r,_(i)?!!i.capture:!!i,s):ef(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eU(e){ei(e.g,function(e,t){this.g.hasOwnProperty(t)&&ep(e)},e),e.g={}}function eF(){this.g=!0}function ej(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return eI(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eP.prototype.M=function(){eP.X.M.call(this),eU(this)},eP.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eF.prototype.Aa=function(){this.g=!1},eF.prototype.info=function(){};var eV={},e$=null;function eq(){return e$=e$||new ew}function eB(e){R.call(this,eV.Pa,e)}function ez(e){let t=eq();e_(t,new eB(t))}function eK(e,t){R.call(this,eV.STAT_EVENT,e),this.stat=t}function eG(e){let t=eq();e_(t,new eK(t,e))}function eH(e,t){R.call(this,eV.Qa,e),this.size=t}function eZ(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}eV.Pa="serverreachability",k(eB,R),eV.STAT_EVENT="statevent",k(eK,R),eV.Qa="timingevent",k(eH,R);var eW={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},eQ={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function eX(){}function eJ(e){return e.h||(e.h=e.i())}function eY(){}eX.prototype.h=null;var e0={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function e1(){R.call(this,"d")}function e2(){R.call(this,"c")}function e4(){}function e3(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new eP(this),this.O=e6,e=q?125:void 0,this.T=new eN(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e5}function e5(){this.i=null,this.g="",this.h=!1}k(e1,R),k(e2,R),k(e4,eX),e4.prototype.g=function(){return new XMLHttpRequest},e4.prototype.i=function(){return{}},a=new e4;var e6=45e3,e9={},e7={};function e8(e,t,n){e.K=1,e.v=ty(td(t)),e.s=n,e.P=!0,te(e,null)}function te(e,t){e.F=Date.now(),tr(e),e.A=td(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),tN(n.i,"t",r),e.C=0,n=e.l.H,e.h=new e5,e.g=nb(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ex(T(e.La,e,e.g),e.N)),eM(e.S,e.g,"readystatechange",e.ib),t=e.H?es(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ez(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function tt(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function tn(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if((i=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?e7:isNaN(n=Number(t.substring(n,r)))?e9:(r+=1)+n>t.length?e7:(t=t.substr(r,n),e.C=r+n,t)}(e,n))==e7){4==t&&(e.o=4,eG(14),r=!1),ej(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e9){e.o=4,eG(15),ej(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ej(e.j,e.m,i,null),tu(e,i);tt(e)&&i!=e7&&i!=e9&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eG(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nh(t),t.K=!0,eG(11))):(ej(e.j,e.m,n,"[Invalid Chunked Response]"),ta(e),to(e))}function tr(e){e.V=Date.now()+e.O,ti(e,e.O)}function ti(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eZ(T(e.gb,e),t)}function ts(e){e.B&&(v.clearTimeout(e.B),e.B=null)}function to(e){0==e.l.G||e.I||np(e.l,e)}function ta(e){ts(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,eR(e.T),eU(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tu(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||tU(n.h,e))){if(!e.J&&tU(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)nf(n),nr(n);else break e}nc(n),eG(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=eZ(T(n.cb,n),6e3));if(1>=tM(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else ng(n,11)}else if((e.J||n.g==e)&&nf(n),!x(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.I=a[1],n.ka=a[2];let t=a[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));let i=a[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));let u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let l=e.g;if(l){let e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tF(s,s.h),s.h=null))}if(r.D){let e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,tg(r.F,r.D,e))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(r=n).sa=nv(r,r.H?r.ka:null,r.V),e.J){tj(r.h,e);var o=r.J;o&&e.setTimeout(o),e.B&&(ts(e),tr(e)),r.g=e}else nl(r);0<n.i.length&&ns(n)}else"stop"!=a[0]&&"close"!=a[0]||ng(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?ng(n,7):nn(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}}ez(4)}catch(e){}}function tl(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(w(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(w(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(w(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(c=e3.prototype).setTimeout=function(e){this.O=e},c.ib=function(e){e=e.target;let t=this.L;t&&3==t6(e)?t.l():this.La(e)},c.La=function(e){try{if(e==this.g)e:{let c=t6(this.g);var t=this.g.Ea();let h=this.g.aa();if(!(3>c)&&(3!=c||q||this.g&&(this.h.h||this.g.fa()||t9(this.g)))){this.I||4!=c||7==t||(8==t||0>=h?ez(3):ez(2)),ts(this);var n=this.g.aa();this.Y=n;t:if(tt(this)){var r=t9(this.g);e="";var i=r.length,s=4==t6(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ta(this),to(this);var o="";break t}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var l=a;break t}}l=null}if(n=l)ej(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tu(this,n);else{this.i=!1,this.o=3,eG(12),ta(this),to(this);break e}}this.P?(tn(this,c,o),q&&this.i&&3==c&&(eM(this.S,this.T,"tick",this.hb),this.T.start())):(ej(this.j,this.m,o,null),tu(this,o)),4==c&&ta(this),this.i&&!this.I&&(4==c?np(this.l,this):(this.i=!1,tr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,eG(12)):(this.o=0,eG(13)),ta(this),to(this)}}}catch(e){}finally{}},c.hb=function(){if(this.g){var e=t6(this.g),t=this.g.fa();this.C<t.length&&(ts(this),tn(this,e,t),this.i&&4!=e&&tr(this))}},c.cancel=function(){this.I=!0,ta(this)},c.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(ez(),eG(17)),ta(this),this.o=2,to(this)):ti(this,this.V-e)};var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function th(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof th){this.h=void 0!==t?t:e.h,tf(this,e.j),this.s=e.s,this.g=e.g,tp(this,e.m),this.l=e.l,t=e.i;var n=new tk;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tm(this,n),this.o=e.o}else e&&(n=String(e).match(tc))?(this.h=!!t,tf(this,n[1]||"",!0),this.s=tv(n[2]||""),this.g=tv(n[3]||"",!0),tp(this,n[4]),this.l=tv(n[5]||"",!0),tm(this,n[6]||"",!0),this.o=tv(n[7]||"")):(this.h=!!t,this.i=new tk(null,this.h))}function td(e){return new th(e)}function tf(e,t,n){e.j=n?tv(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tp(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tm(e,t,n){var r,i;t instanceof tk?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tA(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tC(this,t),tN(this,n,e))},r)),r.j=i):(n||(t=tb(t,tT)),e.i=new tk(t,e.h))}function tg(e,t,n){e.i.set(t,n)}function ty(e){return tg(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tv(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tb(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tw),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tw(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}th.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tb(t,t_,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tb(t,t_,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tb(n,"/"==n.charAt(0)?tI:tE,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tb(n,tS)),e.join("")};var t_=/[#\/\?@]/g,tE=/[#\?:]/g,tI=/[#\?]/g,tT=/[#\?@]/g,tS=/#/g;function tk(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tA(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tC(e,t){tA(e),t=tR(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tO(e,t){return tA(e),t=tR(e,t),e.g.has(t)}function tN(e,t,n){tC(e,t),0<n.length&&(e.i=null,e.g.set(tR(e,t),O(n)),e.h+=n.length)}function tR(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(c=tk.prototype).add=function(e,t){tA(this),this.i=null,e=tR(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},c.forEach=function(e,t){tA(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},c.oa=function(){tA(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},c.W=function(e){tA(this);let t=[];if("string"==typeof e)tO(this,e)&&(t=t.concat(this.g.get(tR(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},c.set=function(e,t){return tA(this),this.i=null,tO(this,e=tR(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var tD=class{constructor(e,t){this.h=e,this.g=t}};function tx(e){this.l=e||tP,e=v.PerformanceNavigationTiming?0<(e=v.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(v.g&&v.g.Ga&&v.g.Ga()&&v.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tP=10;function tL(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tM(e){return e.h?1:e.g?e.g.size:0}function tU(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tF(e,t){e.g?e.g.add(t):e.h=t}function tj(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tV(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return O(e.i)}function t$(){}function tq(){this.g=new t$}function tB(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tz(e){this.l=e.ac||null,this.j=e.jb||!1}function tK(e,t){ew.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=tG,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tx.prototype.cancel=function(){if(this.i=tV(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},t$.prototype.stringify=function(e){return v.JSON.stringify(e,void 0)},t$.prototype.parse=function(e){return v.JSON.parse(e,void 0)},k(tz,eX),tz.prototype.g=function(){return new tK(this.l,this.j)},tz.prototype.i=(r={},function(){return r}),k(tK,ew);var tG=0;function tH(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function tZ(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tW(e)}function tW(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(c=tK.prototype).open=function(e,t){if(this.readyState!=tG)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tW(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||v).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tZ(this)),this.readyState=tG},c.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tW(this)),this.g&&(this.readyState=3,tW(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==v.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tH(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},c.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tZ(this):tW(this),3==this.readyState&&tH(this)}},c.Va=function(e){this.g&&(this.response=this.responseText=e,tZ(this))},c.Ua=function(e){this.g&&(this.response=e,tZ(this))},c.ga=function(){this.g&&tZ(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tK.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tQ=v.JSON.parse;function tX(e){ew.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tJ,this.K=this.L=!1}k(tX,ew);var tJ="",tY=/^https?$/i,t0=["POST","PUT"];function t1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t2(e),t3(e)}function t2(e){e.D||(e.D=!0,e_(e,"complete"),e_(e,"error"))}function t4(e){if(e.h&&void 0!==y&&(!e.C[1]||4!=t6(e)||2!=e.aa())){if(e.v&&4==t6(e))eD(e.Ha,0,e);else if(e_(e,"readystatechange"),4==t6(e)){e.h=!1;try{let a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break e;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.H).match(tc)[1]||null;if(!i&&v.self&&v.self.location){var s=v.self.location.protocol;i=s.substr(0,s.length-1)}n=!tY.test(i?i.toLowerCase():"")}t=n}if(t)e_(e,"complete"),e_(e,"success");else{e.m=6;try{var o=2<t6(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",t2(e)}}finally{t3(e)}}}}function t3(e,t){if(e.g){t5(e);let n=e.g,r=e.C[0]?b:null;e.g=null,e.C=null,t||e_(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function t5(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}function t6(e){return e.g?e.g.readyState:0}function t9(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case tJ:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t7(e){let t="";return ei(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function t8(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=t7(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tg(e,t,n))}function ne(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nt(e){this.Ca=0,this.i=[],this.j=new eF,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ne("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ne("baseRetryDelayMs",5e3,e),this.bb=ne("retryDelaySeedMs",1e4,e),this.$a=ne("forwardChannelMaxRetries",2,e),this.ta=ne("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tx(e&&e.concurrentRequestLimit),this.Fa=new tq,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function nn(e){if(ni(e),3==e.G){var t=e.U++,n=td(e.F);tg(n,"SID",e.I),tg(n,"RID",t),tg(n,"TYPE","terminate"),na(e,n),(t=new e3(e,e.j,t,void 0)).K=2,t.v=ty(td(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(t.v.toString(),"")),!n&&v.Image&&((new Image).src=t.v,n=!0),n||(t.g=nb(t.l,null),t.g.da(t.v)),t.F=Date.now(),tr(t)}ny(e)}function nr(e){e.g&&(nh(e),e.g.cancel(),e.g=null)}function ni(e){nr(e),e.u&&(v.clearTimeout(e.u),e.u=null),nf(e),e.h.cancel(),e.m&&("number"==typeof e.m&&v.clearTimeout(e.m),e.m=null)}function ns(e){tL(e.h)||e.m||(e.m=!0,ek(e.Ja,e),e.C=0)}function no(e,t){var n;n=t?t.m:e.U++;let r=td(e.F);tg(r,"SID",e.I),tg(r,"RID",n),tg(r,"AID",e.T),na(e,r),e.o&&e.s&&t8(r,e.o,e.s),n=new e3(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=nu(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tF(e.h,n),e8(n,r,t)}function na(e,t){e.ia&&ei(e.ia,function(e,n){tg(t,n,e)}),e.l&&tl({},function(e,n){tg(t,n,e)})}function nu(e,t,n){n=Math.min(e.i.length,n);var r=e.l?T(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h,a=i[o].g;if(0>(n-=t))t=Math.max(0,i[o].h-100),s=!1;else try{!function(e,t,n){let r=n||"";try{tl(e,function(e,n){let i=e;_(e)&&(i=eI(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nl(e){e.g||e.u||(e.Z=1,ek(e.Ia,e),e.A=0)}function nc(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=eZ(T(e.Ia,e),nm(e,e.A)),e.A++,!0)}function nh(e){null!=e.B&&(v.clearTimeout(e.B),e.B=null)}function nd(e){e.g=new e3(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=td(e.sa);tg(t,"RID","rpc"),tg(t,"SID",e.I),tg(t,"CI",e.L?"0":"1"),tg(t,"AID",e.T),tg(t,"TYPE","xmlhttp"),na(e,t),e.o&&e.s&&t8(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ty(td(t)),n.s=null,n.P=!0,te(n,e)}function nf(e){null!=e.v&&(v.clearTimeout(e.v),e.v=null)}function np(e,t){var n=null;if(e.g==t){nf(e),nh(e),e.g=null;var r=2}else{if(!tU(e.h,t))return;n=t.D,tj(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,o=e.C;e_(r=eq(),new eH(r,n)),ns(e)}else nl(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==r&&(i=e,s=t,!(tM(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Za?0:i.$a))&&(i.m=eZ(T(i.Ja,i,s),nm(i,i.C)),i.C++,!0)))||2==r&&nc(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),o){case 1:ng(e,5);break;case 4:ng(e,10);break;case 3:ng(e,6);break;default:ng(e,2)}}}function nm(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ng(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=T(e.kb,e);n||(n=new th("//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||tf(n,"https"),ty(n)),function(e,t){let n=new eF;if(v.Image){let r=new Image;r.onload=S(tB,n,r,"TestLoadImage: loaded",!0,t),r.onerror=S(tB,n,r,"TestLoadImage: error",!1,t),r.onabort=S(tB,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=S(tB,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eG(2);e.G=0,e.l&&e.l.va(t),ny(e),ni(e)}function ny(e){if(e.G=0,e.la=[],e.l){let t=tV(e.h);(0!=t.length||0!=e.i.length)&&(N(e.la,t),N(e.la,e.i),e.h.i.length=0,O(e.i),e.i.length=0),e.l.ua()}}function nv(e,t,n){var r=n instanceof th?td(n):new th(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),tp(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new th(null,void 0);r&&tf(s,r),t&&(s.g=t),i&&tp(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&tg(r,n,t),tg(r,"VER",e.ma),na(e,r),r}function nb(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tX(n&&e.Da&&!e.ra?new tz({jb:!0}):e.ra)).Ka(e.H),t}function nw(){}function n_(){if(V&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function nE(e,t){ew.call(this),this.g=new nt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!x(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!x(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nS(this)}function nI(e){e1.call(this);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nT(){e2.call(this),this.status=1}function nS(e){this.g=e}(c=tX.prototype).Ka=function(e){this.L=e},c.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eJ(this.u):eJ(a),this.g.onreadystatechange=T(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){t1(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[i,o]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=v.FormData&&e instanceof v.FormData,!(0<=C(t0,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var o,u;t5(this),0<this.B&&((this.K=(o=this.g,V&&(u=Q,Object.prototype.hasOwnProperty.call(u,9)?u[9]:u[9]=function(){let e=0,t=P(String(i)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let i=0;0==e&&i<r;i++){var s=t[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=L(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||L(0==s[2].length,0==o[2].length)||L(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof o.timeout&&void 0!==o.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=T(this.qa,this)):this.A=eD(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){t1(this,e)}},c.qa=function(){void 0!==y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,e_(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,e_(this,"complete"),e_(this,"abort"),t3(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t3(this,!0)),tX.X.M.call(this)},c.Ha=function(){this.s||(this.F||this.v||this.l?t4(this):this.fb())},c.fb=function(){t4(this)},c.aa=function(){try{return 2<t6(this)?this.g.status:-1}catch(e){return -1}},c.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tQ(t)}},c.Ea=function(){return this.m},c.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(c=nt.prototype).ma=8,c.G=1,c.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new e3(this,this.j,e,void 0),s=this.s;if(this.S&&(s?ea(s=es(s),this.S):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&"string"==typeof(r=r.g.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=nu(this,i,t),tg(n=td(this.F),"RID",e),tg(n,"CVER",22),this.D&&tg(n,"X-HTTP-Session-Id",this.D),na(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(t7(s)))+"&"+t:this.o&&t8(n,this.o,s)),tF(this.h,i),this.Ya&&tg(n,"TYPE","init"),this.O?(tg(n,"$req",t),tg(n,"SID","null"),i.Z=!0,e8(i,n,null)):e8(i,n,t),this.G=2}}else 3==this.G&&(e?no(this,e):0==this.i.length||tL(this.h)||no(this))}},c.Ia=function(){if(this.u=null,nd(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=eZ(T(this.eb,this),e)}},c.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eG(10),nr(this),nd(this))},c.cb=function(){null!=this.v&&(this.v=null,nr(this),nc(this),eG(19))},c.kb=function(e){e?(this.j.info("Successfully pinged google.com"),eG(2)):(this.j.info("Failed to ping google.com"),eG(1))},(c=nw.prototype).xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Ra=function(){},n_.prototype.g=function(e,t){return new nE(e,t)},k(nE,ew),nE.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;eG(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nv(e,null,e.V),ns(e)},nE.prototype.close=function(){nn(this.g)},nE.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=eI(e),e=n);t.i.push(new tD(t.ab++,e)),3==t.G&&ns(t)},nE.prototype.M=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,nE.X.M.call(this)},k(nI,e1),k(nT,e2),k(nS,nw),nS.prototype.xa=function(){e_(this.g,"a")},nS.prototype.wa=function(e){e_(this.g,new nI(e))},nS.prototype.va=function(e){e_(this.g,new nT)},nS.prototype.ua=function(){e_(this.g,"b")},n_.prototype.createWebChannel=n_.prototype.g,nE.prototype.send=nE.prototype.u,nE.prototype.open=nE.prototype.m,nE.prototype.close=nE.prototype.close,eW.NO_ERROR=0,eW.TIMEOUT=8,eW.HTTP_ERROR=6,eQ.COMPLETE="complete",eY.EventType=e0,e0.OPEN="a",e0.CLOSE="b",e0.ERROR="c",e0.MESSAGE="d",ew.prototype.listen=ew.prototype.N,tX.prototype.listenOnce=tX.prototype.O,tX.prototype.getLastError=tX.prototype.Oa,tX.prototype.getLastErrorCode=tX.prototype.Ea,tX.prototype.getStatus=tX.prototype.aa,tX.prototype.getResponseJson=tX.prototype.Sa,tX.prototype.getResponseText=tX.prototype.fa,tX.prototype.send=tX.prototype.da,tX.prototype.setWithCredentials=tX.prototype.Ka;var nk=g.createWebChannelTransport=function(){return new n_},nA=g.getStatEventTarget=function(){return eq()},nC=g.ErrorCode=eW,nO=g.EventType=eQ,nN=g.Event=eV,nR=g.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nD=g.FetchXmlHttpFactory=tz,nx=g.WebChannel=eY,nP=g.XhrIo=tX;n(3454);let nL="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nM.UNAUTHENTICATED=new nM(null),nM.GOOGLE_CREDENTIALS=new nM("google-credentials-uid"),nM.FIRST_PARTY=new nM("first-party-uid"),nM.MOCK_USER=new nM("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nU="9.17.1",nF=new f.Yd("@firebase/firestore");function nj(){return nF.logLevel}function nV(e,...t){if(nF.logLevel<=f.in.DEBUG){let n=t.map(nB);nF.debug(`Firestore (${nU}): ${e}`,...n)}}function n$(e,...t){if(nF.logLevel<=f.in.ERROR){let n=t.map(nB);nF.error(`Firestore (${nU}): ${e}`,...n)}}function nq(e,...t){if(nF.logLevel<=f.in.WARN){let n=t.map(nB);nF.warn(`Firestore (${nU}): ${e}`,...n)}}function nB(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nz(e="Unexpected state"){let t=`FIRESTORE (${nU}) INTERNAL ASSERTION FAILED: `+e;throw n$(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nK={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nG extends p.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nW{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nM.UNAUTHENTICATED))}shutdown(){}}class nQ{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nX{constructor(e){this.t=e,this.currentUser=nM.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nH;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nH,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{nV("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(nV("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nH)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(nV("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nz(),new nZ(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nz(),new nM(e)}}class nJ{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=nM.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||nz(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nY{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new nJ(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(nM.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&nV("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,nV("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{nV("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):nV("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||nz(),this.A=e.token,new n0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function n4(e,t){return e<t?-1:e>t?1:0}function n3(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new nG(nK.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new nG(nK.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n5.fromMillis(Date.now())}static fromDate(e){return n5.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new n5(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?n4(this.nanoseconds,e.nanoseconds):n4(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n6(e)}static min(){return new n6(new n5(0,0))}static max(){return new n6(new n5(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(e,t,n){void 0===t?t=0:t>e.length&&nz(),void 0===n?n=e.length-t:n>e.length-t&&nz(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===n9.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n9?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class n7 extends n9{construct(e,t,n){return new n7(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new nG(nK.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new n7(t)}static emptyPath(){return new n7([])}}let n8=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends n9{construct(e,t,n){return new re(e,t,n)}static isValidIdentifier(e){return n8.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new re(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new nG(nK.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new nG(nK.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new nG(nK.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new nG(nK.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.path=e}static fromPath(e){return new rt(n7.fromString(e))}static fromName(e){return new rt(n7.fromString(e).popFirst(5))}static empty(){return new rt(n7.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===n7.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return n7.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rt(new n7(e.slice()))}}class rn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rn(n6.min(),rt.empty(),-1)}static max(){return new rn(n6.max(),rt.empty(),-1)}}class rr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(e){if(e.code!==nK.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;nV("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nz(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rs((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rs?t:rs.resolve(t)}catch(e){return rs.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rs.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rs.reject(t)}static resolve(e){return new rs((t,n)=>{t(e)})}static reject(e){return new rs((t,n)=>{n(e)})}static waitFor(e){return new rs((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rs.resolve(!1);for(let n of e)t=t.next(e=>e?rs.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rs((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let u=a;t(e[u]).next(e=>{s[u]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rs((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function ro(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}ra.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class rl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rh(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rd(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function rf(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new rp(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new rp(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return n4(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rp.EMPTY_BYTE_STRING=new rp("");let rm=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rg(e){if(e||nz(),"string"==typeof e){let t=0,n=rm.exec(e);if(n||nz(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ry(e.seconds),nanos:ry(e.nanos)}}function ry(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rv(e){return"string"==typeof e?rp.fromBase64String(e):rp.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rw(e){let t=rg(e.mapValue.fields.__local_write_time__.timestampValue);return new n5(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r_={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rE(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rb(e)?4:rL(e)?9007199254740991:10:nz()}function rI(e,t){if(e===t)return!0;let n=rE(e);if(n!==rE(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rw(e).isEqual(rw(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rg(e.timestampValue),r=rg(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rv(e.bytesValue).isEqual(rv(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ry(e.geoPointValue.latitude)===ry(t.geoPointValue.latitude)&&ry(e.geoPointValue.longitude)===ry(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ry(e.integerValue)===ry(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ry(e.doubleValue),r=ry(t.doubleValue);return n===r?rf(n)===rf(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return n3(e.arrayValue.values||[],t.arrayValue.values||[],rI);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rc(n)!==rc(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!rI(n[e],r[e])))return!1;return!0}(e,t);default:return nz()}}function rT(e,t){return void 0!==(e.values||[]).find(e=>rI(e,t))}function rS(e,t){if(e===t)return 0;let n=rE(e),r=rE(t);if(n!==r)return n4(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return n4(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ry(e.integerValue||e.doubleValue),r=ry(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rk(e.timestampValue,t.timestampValue);case 4:return rk(rw(e),rw(t));case 5:return n4(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rv(e),r=rv(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=n4(n[e],r[e]);if(0!==t)return t}return n4(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=n4(ry(e.latitude),ry(t.latitude));return 0!==n?n:n4(ry(e.longitude),ry(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=rS(n[e],r[e]);if(t)return t}return n4(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===r_.mapValue&&t===r_.mapValue)return 0;if(e===r_.mapValue)return 1;if(t===r_.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=n4(r[e],s[e]);if(0!==t)return t;let o=rS(n[r[e]],i[s[e]]);if(0!==o)return o}return n4(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nz()}}function rk(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return n4(e,t);let n=rg(e),r=rg(t),i=n4(n.seconds,r.seconds);return 0!==i?i:n4(n.nanos,r.nanos)}function rA(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rg(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rv(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,rt.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rA(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rA(e.fields[i])}`;return n+"}"}(e.mapValue):nz()}function rC(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function rO(e){return!!e&&"integerValue"in e}function rN(e){return!!e&&"arrayValue"in e}function rR(e){return!!e&&"nullValue"in e}function rD(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rx(e){return!!e&&"mapValue"in e}function rP(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rh(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rP(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rP(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rL(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,t){this.position=e,this.inclusive=t}}function rU(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?rt.comparator(rt.fromName(o.referenceValue),n.key):rS(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function rF(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rI(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{}class rV extends rj{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new rz(e,t,n):"array-contains"===t?new rZ(e,n):"in"===t?new rW(e,n):"not-in"===t?new rQ(e,n):"array-contains-any"===t?new rX(e,n):new rV(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rK(e,n):new rG(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rS(t,this.value)):null!==t&&rE(this.value)===rE(t)&&this.matchesComparison(rS(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nz()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class r$ extends rj{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new r$(e,t)}matches(e){return rq(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function rq(e){return"and"===e.op}function rB(e){for(let t of e.filters)if(t instanceof r$)return!1;return!0}class rz extends rV{constructor(e,t,n){super(e,t,n),this.key=rt.fromName(n.referenceValue)}matches(e){let t=rt.comparator(e.key,this.key);return this.matchesComparison(t)}}class rK extends rV{constructor(e,t){super(e,"in",t),this.keys=rH("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rG extends rV{constructor(e,t){super(e,"not-in",t),this.keys=rH("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rH(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rt.fromName(e.referenceValue))}class rZ extends rV{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rN(t)&&rT(t.arrayValue,this.value)}}class rW extends rV{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rT(this.value.arrayValue,t)}}class rQ extends rV{constructor(e,t){super(e,"not-in",t)}matches(e){if(rT(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rT(this.value.arrayValue,t)}}class rX extends rV{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rN(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rT(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e,t){this.comparator=e,this.root=t||r1.EMPTY}insert(e,t){return new rY(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,r1.BLACK,null,null))}remove(e){return new rY(this.comparator,this.root.remove(e,this.comparator).copy(null,null,r1.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new r0(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new r0(this.root,e,this.comparator,!1)}getReverseIterator(){return new r0(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new r0(this.root,e,this.comparator,!0)}}class r0{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class r1{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:r1.RED,this.left=null!=r?r:r1.EMPTY,this.right=null!=i?i:r1.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new r1(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return r1.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return r1.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nz();let e=this.left.check();if(e!==this.right.check())throw nz();return e+(this.isRed()?0:1)}}r1.EMPTY=null,r1.RED=!0,r1.BLACK=!1,r1.EMPTY=new class{constructor(){this.size=0}get key(){throw nz()}get value(){throw nz()}get color(){throw nz()}get left(){throw nz()}get right(){throw nz()}copy(e,t,n,r,i){return this}insert(e,t,n){return new r1(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.comparator=e,this.data=new rY(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new r4(this.data.getIterator())}getIteratorFrom(e){return new r4(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof r2)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new r2(this.comparator);return t.data=e,t}}class r4{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new r3([])}unionWith(e){let t=new r2(re.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new r3(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return n3(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(e){this.value=e}static empty(){return new r5({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rx(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rP(t)}setAll(e){let t=re.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rP(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());rx(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rI(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rx(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rh(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new r5(rP(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new r6(e,0,n6.min(),n6.min(),n6.min(),r5.empty(),0)}static newFoundDocument(e,t,n,r){return new r6(e,1,t,n6.min(),n,r,0)}static newNoDocument(e,t){return new r6(e,2,t,n6.min(),n6.min(),r5.empty(),0)}static newUnknownDocument(e,t){return new r6(e,3,t,n6.min(),n6.min(),r5.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(n6.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=r5.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=r5.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=n6.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof r6&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r6(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function r7(e,t=null,n=[],r=[],i=null,s=null,o=null){return new r9(e,t,n,r,i,s,o)}function r8(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof rV)return t.field.canonicalString()+t.op.toString()+rA(t.value);if(rB(t)&&rq(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rA(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rA(e)).join(",")),t.ft=e}return t.ft}function ie(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof rV?n instanceof rV&&t.op===n.op&&t.field.isEqual(n.field)&&rI(t.value,n.value):t instanceof r$?n instanceof r$&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void nz()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rF(e.startAt,t.startAt)&&rF(e.endAt,t.endAt)}function it(e){return rt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ii(e){return new ir(e)}function is(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function io(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ia(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function iu(e){return null!==e.collectionGroup}function il(e){let t=e;if(null===t.dt){t.dt=[];let e=ia(t),n=io(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new rJ(e)),t.dt.push(new rJ(re.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new rJ(re.keyField(),e))}}}return t.dt}function ic(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=r7(t.path,t.collectionGroup,il(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of il(t)){let t="desc"===n.dir?"asc":"desc";e.push(new rJ(n.field,t))}let n=t.endAt?new rM(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new rM(t.startAt.position,t.startAt.inclusive):null;t._t=r7(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}return t._t}function ih(e,t){t.getFirstInequalityField(),ia(e);let n=e.filters.concat([t]);return new ir(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function id(e,t,n){return new ir(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ip(e,t){return ie(ic(e),ic(t))&&e.limitType===t.limitType}function im(e){return`${r8(ic(e))}|lt:${e.limitType}`}function ig(e){var t;let n;return`Query(target=${n=(t=ic(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rV?`${t.field.canonicalString()} ${t.op} ${rA(t.value)}`:t instanceof r$?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rA(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rA(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function iy(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rt.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of il(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=rU(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,il(e),t))&&(!e.endAt||!!function(e,t,n){let r=rU(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,il(e),t))}function iv(e){return(t,n)=>{let r=!1;for(let i of il(e)){let e=function(e,t,n){let r=e.field.isKeyField()?rt.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rS(r,i):nz()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nz()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rf(t)?"-0":t}}function iw(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this._=void 0}}function iE(e,t){return e instanceof iC?rO(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iI extends i_{}class iT extends i_{constructor(e){super(),this.elements=e}}function iS(e,t){let n=iN(t);for(let t of e.elements)n.some(e=>rI(e,t))||n.push(t);return{arrayValue:{values:n}}}class ik extends i_{constructor(e){super(),this.elements=e}}function iA(e,t){let n=iN(t);for(let t of e.elements)n=n.filter(e=>!rI(e,t));return{arrayValue:{values:n}}}class iC extends i_{constructor(e,t){super(),this.yt=e,this.gt=t}}function iO(e){return ry(e.integerValue||e.doubleValue)}function iN(e){return rN(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t){this.field=e,this.transform=t}}class iD{constructor(e,t){this.version=e,this.transformResults=t}}class ix{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ix}static exists(e){return new ix(void 0,e)}static updateTime(e){return new ix(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iP(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class iL{}function iM(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new iz(e.key,ix.none()):new ij(e.key,e.data,ix.none());{let n=e.data,r=r5.empty(),i=new r2(re.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new iV(e.key,r,new r3(i.toArray()),ix.none())}}function iU(e,t,n,r){return e instanceof ij?function(e,t,n,r){if(!iP(e.precondition,t))return n;let i=e.value.clone(),s=iB(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof iV?function(e,t,n,r){if(!iP(e.precondition,t))return n;let i=iB(e.fieldTransforms,r,t),s=t.data;return(s.setAll(i$(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):iP(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function iF(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&n3(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof iT&&r instanceof iT||n instanceof ik&&r instanceof ik?n3(n.elements,r.elements,rI):n instanceof iC&&r instanceof iC?rI(n.gt,r.gt):n instanceof iI&&r instanceof iI)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ij extends iL{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class iV extends iL{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function i$(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function iq(e,t,n){var r;let i=new Map;e.length===n.length||nz();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,u=t.data.field(o.field);i.set(o.field,(r=n[s],a instanceof iT?iS(a,u):a instanceof ik?iA(a,u):r))}return i}function iB(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof iI?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof iT?iS(e,s):e instanceof ik?iA(e,s):function(e,t){let n=iE(e,t),r=iO(n)+iO(e.gt);return rO(n)&&rO(e.gt)?iw(r):ib(e.yt,r)}(e,s))}return r}class iz extends iL{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iK extends iL{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e){this.count=e}}function iH(e){if(void 0===e)return n$("GRPC error has no .code"),nK.UNKNOWN;switch(e){case u.OK:return nK.OK;case u.CANCELLED:return nK.CANCELLED;case u.UNKNOWN:return nK.UNKNOWN;case u.DEADLINE_EXCEEDED:return nK.DEADLINE_EXCEEDED;case u.RESOURCE_EXHAUSTED:return nK.RESOURCE_EXHAUSTED;case u.INTERNAL:return nK.INTERNAL;case u.UNAVAILABLE:return nK.UNAVAILABLE;case u.UNAUTHENTICATED:return nK.UNAUTHENTICATED;case u.INVALID_ARGUMENT:return nK.INVALID_ARGUMENT;case u.NOT_FOUND:return nK.NOT_FOUND;case u.ALREADY_EXISTS:return nK.ALREADY_EXISTS;case u.PERMISSION_DENIED:return nK.PERMISSION_DENIED;case u.FAILED_PRECONDITION:return nK.FAILED_PRECONDITION;case u.ABORTED:return nK.ABORTED;case u.OUT_OF_RANGE:return nK.OUT_OF_RANGE;case u.UNIMPLEMENTED:return nK.UNIMPLEMENTED;case u.DATA_LOSS:return nK.DATA_LOSS;default:return nz()}}(l=u||(u={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rh(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return rd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iW=new rY(rt.comparator),iQ=new rY(rt.comparator);function iX(...e){let t=iQ;for(let n of e)t=t.insert(n.key,n);return t}function iJ(e){let t=iQ;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iY(){return new iZ(e=>e.toString(),(e,t)=>e.isEqual(t))}let i0=new rY(rt.comparator),i1=new r2(rt.comparator);function i2(...e){let t=i1;for(let n of e)t=t.add(n);return t}let i4=new r2(n4);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,i5.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new i3(n6.min(),r,i4,iW,i2())}}class i5{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new i5(n,t,i2(),i2(),i2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class i9{constructor(e,t){this.targetId=e,this.Et=t}}class i7{constructor(e,t,n=rp.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class i8{constructor(){this.At=0,this.Rt=sn(),this.bt=rp.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=i2(),t=i2(),n=i2();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nz()}}),new i5(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=sn()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class se{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=iW,this.qt=st(),this.Ut=new r2(n4)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{let n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:nz()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.zt(n)&&t(n)})}Jt(e){let t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){let e=r.target;if(it(e)){if(0===n){let n=new rt(e.path);this.Qt(t,n,r6.newNoDocument(n,n6.min()))}else 1===n||nz()}else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){let t=new Map;this.Bt.forEach((n,r)=>{let i=this.Yt(r);if(i){if(n.current&&it(i.target)){let t=new rt(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,r6.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}});let n=i2();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));let r=new i3(e,t,this.Ut,this.Lt,n);return this.Lt=iW,this.qt=st(),this.Ut=new r2(n4),r}Gt(e,t){if(!this.zt(e))return;let n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;let r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){let t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new i8,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new r2(n4),this.qt=this.qt.insert(e,t)),t}zt(e){let t=null!==this.Yt(e);return t||nV("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new i8),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function st(){return new rY(rt.comparator)}function sn(){return new rY(rt.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr={asc:"ASCENDING",desc:"DESCENDING"},si={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ss={and:"AND",or:"OR"};class so{constructor(e,t){this.databaseId=e,this.wt=t}}function sa(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function su(e,t){return e.wt?t.toBase64():t.toUint8Array()}function sl(e){return e||nz(),n6.fromTimestamp(function(e){let t=rg(e);return new n5(t.seconds,t.nanos)}(e))}function sc(e,t){return new n7(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sh(e){let t=n7.fromString(e);return sw(t)||nz(),t}function sd(e,t){return sc(e.databaseId,t.path)}function sf(e,t){let n=sh(t);if(n.get(1)!==e.databaseId.projectId)throw new nG(nK.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nG(nK.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(sg(n))}function sp(e,t){return sc(e.databaseId,t)}function sm(e){return new n7(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sg(e){return e.length>4&&"documents"===e.get(4)||nz(),e.popFirst(5)}function sy(e,t,n){return{name:sd(e,t),fields:n.value.mapValue.fields}}function sv(e){return{fieldPath:e.canonicalString()}}function sb(e){return re.fromServerFormat(e.fieldPath)}function sw(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof ij?function(e,t,n){let r=e.value.clone(),i=iq(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof iV?function(e,t,n){if(!iP(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=iq(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(i$(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=iU(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=iU(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iY();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;let a=iM(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(n6.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),i2())}isEqual(e){return this.batchId===e.batchId&&n3(this.mutations,e.mutations,(e,t)=>iF(e,t))&&n3(this.baseMutations,e.baseMutations,(e,t)=>iF(e,t))}}class sE{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||nz();let r=i0,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new sE(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,n,r,i=n6.min(),s=n6.min(),o=rp.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new sT(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new sT(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.ie=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(ry(e.integerValue));else if("doubleValue"in e){let n=ry(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),rf(n)?t.le(0):t.le(n))}else if("timestampValue"in e){let n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(rv(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?rL(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):nz()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let n=e.fields||{};for(let e of(this.he(t,55),Object.keys(n)))this.de(e,t),this.ce(n[e],t)}ye(e,t){let n=e.values||[];for(let e of(this.he(t,50),n))this.ce(e,t)}me(e,t){this.he(t,37),rt.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}sk.Ie=new sk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.Je=new sC}addToCollectionParentIndex(e,t){return this.Je.add(t),rs.resolve()}getCollectionParents(e,t){return rs.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return rs.resolve()}deleteFieldIndex(e,t){return rs.resolve()}getDocumentsMatchingTarget(e,t){return rs.resolve(null)}getIndexType(e,t){return rs.resolve(0)}getFieldIndexes(e,t){return rs.resolve([])}getNextCollectionGroupToUpdate(e){return rs.resolve(null)}getMinOffset(e,t){return rs.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,t){return rs.resolve(rn.min())}updateCollectionGroup(e,t,n){return rs.resolve()}updateIndexEntries(e,t){return rs.resolve()}}class sC{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new r2(n7.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new r2(n7.comparator)).toArray()}}new Uint8Array(0);class sO{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sO(e,sO.DEFAULT_COLLECTION_PERCENTILE,sO.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sO.DEFAULT_COLLECTION_PERCENTILE=10,sO.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sO.DEFAULT=new sO(41943040,sO.DEFAULT_COLLECTION_PERCENTILE,sO.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sO.DISABLED=new sO(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new sN(0)}static vn(){return new sN(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.changes=new iZ(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,r6.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rs.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&iU(n.mutation,e,r3.empty(),n5.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,i2()).next(()=>t))}getLocalViewOfDocuments(e,t,n=i2()){let r=iY();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=iX();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iY();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,i2()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=iW,s=iY(),o=iY();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof iV)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),iU(o.mutation,t,o.mutation.getFieldMask(),n5.now())):s.set(t.key,r3.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new sD(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=iY(),r=new rY((e,t)=>e-t),i=i2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||r3.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||i2()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),a=r.key,u=r.value,l=iY();u.forEach(e=>{if(!i.has(e)){let r=iM(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return rs.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return rt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):iu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rs.resolve(iY()),o=-1,a=i;return s.next(t=>rs.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?rs.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,i2())).next(e=>({batchId:o,changes:iJ(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rt(t)).next(e=>{let t=iX();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=iX();return this.indexManager.getCollectionParents(e,r).next(s=>rs.forEach(s,s=>{var o;let a=(o=s.child(r),new ir(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,a,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,r6.newInvalidDocument(r)))});let n=iX();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&iU(s.mutation,i,r3.empty(),n5.now()),iy(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return rs.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:sl(t.createTime)}),rs.resolve()}getNamedQuery(e,t){return rs.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,i,s,o,a,u;let l,c=function(e){let t=sh(e);return 4===t.length?n7.emptyPath():sg(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||nz();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sb(e.unaryFilter.field);return rV.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sb(e.unaryFilter.field);return rV.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=sb(e.unaryFilter.field);return rV.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sb(e.unaryFilter.field);return rV.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nz()}}(t):void 0!==t.fieldFilter?rV.create(sb(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nz()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?r$.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return nz()}}(t.compositeFilter.op)):nz()}(e);return n instanceof r$&&rB(t=n)&&rq(t)?n.getFilters():[n]}(h.where));let m=[];h.orderBy&&(m=h.orderBy.map(e=>new rJ(sb(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;h.limit&&(g=null==(l="object"==typeof(t=h.limit)?t.value:t)?null:l);let y=null;h.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new rM(n,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new rM(n,t)}(h.endAt)),n=c,r=f,i=m,s=p,o=g,a=y,u=v,new ir(n,r,i,s,o,"F",a,u)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?id(t,t.limit,"L"):t}(t.bundledQuery),readTime:sl(t.readTime)}),rs.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(){this.overlays=new rY(rt.comparator),this.es=new Map}getOverlay(e,t){return rs.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iY();return rs.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.oe(e,t,r)}),rs.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),rs.resolve()}getOverlaysForCollection(e,t,n){let r=iY(),i=t.length+1,s=new rt(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return rs.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new rY((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=iY(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=iY(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return rs.resolve(o)}oe(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new sI(t,n));let i=this.es.get(t);void 0===i&&(i=i2(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(){this.ns=new r2(sU.ss),this.rs=new r2(sU.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new sU(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new sU(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new rt(new n7([])),n=new sU(t,e),r=new sU(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new rt(new n7([])),n=new sU(t,e),r=new sU(t,e+1),i=i2();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sU(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sU{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return rt.comparator(e.key,t.key)||n4(e._s,t._s)}static os(e,t){return n4(e._s,t._s)||rt.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new r2(sU.ss)}checkEmpty(e){return rs.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new s_(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.gs=this.gs.add(new sU(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rs.resolve(s)}lookupMutationBatch(e,t){return rs.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return rs.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rs.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return rs.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new sU(t,0),r=new sU(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);i.push(t)}),rs.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new r2(n4);return t.forEach(e=>{let t=new sU(e,0),r=new sU(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),rs.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;rt.isDocumentKey(i)||(i=i.child(""));let s=new sU(new rt(i),0),o=new r2(n4);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)},s),rs.resolve(this.Is(o))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||nz(),this.mutationQueue.shift();let n=this.gs;return rs.forEach(t.mutations,r=>{let i=new sU(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let n=new sU(t,0),r=this.gs.firstAfterOrEqual(n);return rs.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rs.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e){this.Es=e,this.docs=new rY(rt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rs.resolve(n?n.document.mutableCopy():r6.newInvalidDocument(t))}getEntries(e,t){let n=iW;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():r6.newInvalidDocument(e))}),rs.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=iW,s=t.path,o=new rt(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rt.comparator(e.documentKey,t.documentKey))?n:n4(e.largestBatchId,t.largestBatchId)}(new rn(o.readTime,o.key,-1),n)||(r.has(o.key)||iy(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return rs.resolve(i)}getAllFromCollectionGroup(e,t,n,r){nz()}As(e,t){return rs.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sV(this)}getSize(e){return rs.resolve(this.size)}}class sV extends sR{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),rs.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e){this.persistence=e,this.Rs=new iZ(e=>r8(e),ie),this.lastRemoteSnapshotVersion=n6.min(),this.highestTargetId=0,this.bs=0,this.Ps=new sM,this.targetCount=0,this.vs=sN.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),rs.resolve()}getLastRemoteSnapshotVersion(e){return rs.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rs.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),rs.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),rs.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new sN(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,rs.resolve()}updateTargetData(e,t){return this.Dn(t),rs.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,rs.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),rs.waitFor(i).next(()=>r)}getTargetCount(e){return rs.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return rs.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),rs.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rs.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),rs.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return rs.resolve(n)}containsKey(e,t){return rs.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new ra(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new s$(this),this.indexManager=new sA,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new sj(n)),this.yt=new sS(t),this.Ns=new sP(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new sF(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){nV("MemoryPersistence","Starting transaction:",e);let r=new sB(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return rs.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class sB extends rr{constructor(e){super(),this.currentSequenceNumber=e}}class sz{constructor(e){this.persistence=e,this.Fs=new sM,this.$s=null}static Bs(e){return new sz(e)}get Ls(){if(this.$s)return this.$s;throw nz()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),rs.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),rs.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),rs.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rs.forEach(this.Ls,n=>{let r=rt.fromPath(n);return this.qs(e,r).next(e=>{e||t.removeEntry(r,n6.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return rs.or([()=>rs.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=i2(),r=i2();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sK(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(is(t))return rs.resolve(null);let n=ic(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=ic(t=id(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=i2(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,id(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,r){return is(t)||r.isEqual(n6.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{let s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(nj()<=f.in.DEBUG&&nV("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ig(t)),this.Bi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=n6.fromTimestamp(1e9===r?new n5(n+1,0):new n5(n,r));return new rn(i,rt.empty(),-1)}(r,0)))})}Fi(e,t){let n=new r2(iv(e));return t.forEach((t,r)=>{iy(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return nj()<=f.in.DEBUG&&nV("QueryEngine","Using full collection scan to execute query:",ig(t)),this.Ni.getDocumentsMatchingQuery(e,t,rn.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new rY(n4),this.Ui=new iZ(e=>r8(e),ie),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sx(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}async function sZ(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=i2();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function sW(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}async function sQ(e,t,n){let r=e,i=r.qi.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ro(e))throw e;nV("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function sX(e,t,n){let r=n6.min(),i=i2();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Ui.get(n);return void 0!==r?rs.resolve(e.qi.get(r)):e.Cs.getTargetData(t,n)})(e,s,ic(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Li.getDocumentsMatchingQuery(s,t,n?r:n6.min(),n?i:i2())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ki.get(r)||n6.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ki.set(r,s),{documents:n,Hi:i}}))}class sJ{constructor(){this.activeTargetIds=i4}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sY{constructor(){this.Lr=new sJ,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sJ,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(nV("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(nV("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){let s=this.ho(e,t);nV("RestConnection","Sending: ",s,n);let o={};return this.lo(o,r,i),this.fo(e,s,o,n).then(e=>(nV("RestConnection","Received: ",e),e),t=>{throw nq("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nU,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=s2[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{let o=new nP;o.setWithCredentials(!0),o.listenOnce(nO.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nC.NO_ERROR:let t=o.getResponseJson();nV("Connection","XHR received:",JSON.stringify(t)),i(t);break;case nC.TIMEOUT:nV("Connection",'RPC "'+e+'" timed out'),s(new nG(nK.DEADLINE_EXCEEDED,"Request time out"));break;case nC.HTTP_ERROR:let n=o.getStatus();if(nV("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(nK).indexOf(t)>=0?t:nK.UNKNOWN}(t.status);s(new nG(e,t.message))}else s(new nG(nK.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new nG(nK.UNAVAILABLE,"Connection failed."));break;default:nz()}}finally{nV("Connection",'RPC "'+e+'" completed.')}});let a=JSON.stringify(r);o.send(t,"POST",a,n,15)})}wo(e,t,n){let r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nk(),s=nA(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new nD({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let a=r.join("");nV("Connection","Creating WebChannel: "+a,o);let l=i.createWebChannel(a,o),c=!1,h=!1,d=new s4({Hr:e=>{h?nV("Connection","Not sending because WebChannel is closed:",e):(c||(nV("Connection","Opening WebChannel transport."),l.open(),c=!0),nV("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(l,nx.EventType.OPEN,()=>{h||nV("Connection","WebChannel transport opened.")}),f(l,nx.EventType.CLOSE,()=>{h||(h=!0,nV("Connection","WebChannel transport closed"),d.io())}),f(l,nx.EventType.ERROR,e=>{h||(h=!0,nq("Connection","WebChannel transport errored:",e),d.io(new nG(nK.UNAVAILABLE,"The operation could not be completed")))}),f(l,nx.EventType.MESSAGE,e=>{var t;if(!h){let n=e.data[0];n||nz();let r=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(r){nV("Connection","WebChannel received error:",r);let e=r.status,t=function(e){let t=u[e];if(void 0!==t)return iH(t)}(e),n=r.message;void 0===t&&(t=nK.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),h=!0,d.io(new nG(t,n)),l.close()}else nV("Connection","WebChannel received:",n),d.ro(n)}}),f(s,nN.STAT_EVENT,e=>{e.stat===nR.PROXY?nV("Connection","Detected buffering proxy"):e.stat===nR.NOPROXY&&nV("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function s5(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s6(e){return new so(e,!0)}class s9{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&nV("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new s9(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===nK.RESOURCE_EXHAUSTED?(n$(t.toString()),n$("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===nK.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new nG(nK.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return nV("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(nV("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s8 extends s7{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nz(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.wt?(void 0===i||"string"==typeof i||nz(),rp.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||nz(),rp.fromUint8Array(i||new Uint8Array))),u=t.targetChange.cause,l=u&&function(e){let t=void 0===e.code?nK.UNKNOWN:iH(e.code);return new nG(t,e.message||"")}(u);n=new i7(s,o,a,l||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=sf(e,r.document.name),s=sl(r.document.updateTime),o=r.document.createTime?sl(r.document.createTime):n6.min(),a=new r5({mapValue:{fields:r.document.fields}}),u=r6.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new i6(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=sf(e,r.document),s=r.readTime?sl(r.readTime):n6.min(),o=r6.newNoDocument(i,s),a=r.removedTargetIds||[];n=new i6([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=sf(e,r.document),s=r.removedTargetIds||[];n=new i6([],s,i,null)}else{if(!("filter"in t))return nz();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,i=new iG(r),s=e.targetId;n=new i9(s,i)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return n6.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?n6.min():t.readTime?sl(t.readTime):n6.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=sm(this.yt),t.addTarget=function(e,t){let n;let r=t.target;return(n=it(r)?{documents:{documents:[sp(e,r.path)]}}:{query:function(e,t){var n,r,i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(s.parent=sp(e,o),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=sp(e,o.popLast()),s.structuredQuery.from=[{collectionId:o.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof rV?function(e){if("=="===e.op){if(rD(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NAN"}};if(rR(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rD(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NOT_NAN"}};if(rR(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sv(e.field),op:si[e.op],value:e.value}}}(t):t instanceof r$?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:ss[t.op],filters:n}}}(t):nz()}(r$.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let u=function(e){if(0!==e.length)return e.map(e=>({field:sv(e.field),direction:sr[e.dir]}))}(t.orderBy);u&&(s.structuredQuery.orderBy=u);let l=(r=t.limit,e.wt||null==r?r:{value:r});return null!==l&&(s.structuredQuery.limit=l),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=su(e,t.resumeToken):t.snapshotVersion.compareTo(n6.min())>0&&(n.readTime=sa(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return nz()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=sm(this.yt),t.removeTarget=e,this.Bo(t)}}class oe extends s7{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||nz(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||nz(),t.map(e=>{let t;return(t=e.updateTime?sl(e.updateTime):sl(n)).isEqual(n6.min())&&(t=sl(n)),new iD(t,e.transformResults||[])})):[]),i=sl(e.commitTime);return this.listener.Zo(i,r)}return e.writeResults&&0!==e.writeResults.length&&nz(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=sm(this.yt),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof ij)r={update:sy(e,t.key,t.value)};else if(t instanceof iz)r={delete:sd(e,t.key)};else if(t instanceof iV)r={update:sy(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iK))return nz();r={verify:sd(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof iI)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iT)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ik)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iC)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw nz()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:sa(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:nz()),r})(this.yt,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new nG(nK.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nK.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nG(nK.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection._o(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nK.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nG(nK.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class on{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(n$(t),this.ou=!1):nV("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{od(this)&&(nV("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await os(e),e.gu.set("Unknown"),e._u.delete(4),await oi(e)}(this))})}),this.gu=new on(n,r)}}async function oi(e){if(od(e))for(let t of e.wu)await t(!0)}async function os(e){for(let t of e.wu)await t(!1)}function oo(e,t){e.du.has(t.targetId)||(e.du.set(t.targetId,t),oh(e)?oc(e):oA(e).ko()&&ou(e,t))}function oa(e,t){let n=oA(e);e.du.delete(t),n.ko()&&ol(e,t),0===e.du.size&&(n.ko()?n.Fo():od(e)&&e.gu.set("Unknown"))}function ou(e,t){e.yu.Ot(t.targetId),oA(e).zo(t)}function ol(e,t){e.yu.Ot(t),oA(e).Ho(t)}function oc(e){e.yu=new se({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),oA(e).start(),e.gu.uu()}function oh(e){return od(e)&&!oA(e).No()&&e.du.size>0}function od(e){return 0===e._u.size}async function of(e){e.du.forEach((t,n)=>{ou(e,t)})}async function op(e,t){e.yu=void 0,oh(e)?(e.gu.hu(t),oc(e)):e.gu.set("Unknown")}async function om(e,t,n){if(e.gu.set("Online"),t instanceof i7&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){nV("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await og(e,n)}else if(t instanceof i6?e.yu.Kt(t):t instanceof i9?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(n6.min()))try{let t=await sW(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.yu.Zt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(rp.EMPTY_BYTE_STRING,n.snapshotVersion)),ol(e,t);let r=new sT(n.target,t,1,n.sequenceNumber);ou(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){nV("RemoteStore","Failed to raise snapshot:",t),await og(e,t)}}async function og(e,t,n){if(!ro(t))throw t;e._u.add(1),await os(e),e.gu.set("Offline"),n||(n=()=>sW(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nV("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await oi(e)})}function oy(e,t){return t().catch(n=>og(e,n,t))}async function ov(e){let t=oC(e),n=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;od(e)&&e.fu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.fu.length&&t.Fo();break}n=r.batchId,function(e,t){e.fu.push(t);let n=oC(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}(e,r)}catch(t){await og(e,t)}ob(e)&&ow(e)}function ob(e){return od(e)&&!oC(e).No()&&e.fu.length>0}function ow(e){oC(e).start()}async function o_(e){oC(e).eu()}async function oE(e){let t=oC(e);for(let n of e.fu)t.Xo(n.mutations)}async function oI(e,t,n){let r=e.fu.shift(),i=sE.from(r,t,n);await oy(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ov(e)}async function oT(e,t){t&&oC(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return nz();case nK.CANCELLED:case nK.UNKNOWN:case nK.DEADLINE_EXCEEDED:case nK.RESOURCE_EXHAUSTED:case nK.INTERNAL:case nK.UNAVAILABLE:case nK.UNAUTHENTICATED:return!1;case nK.INVALID_ARGUMENT:case nK.NOT_FOUND:case nK.ALREADY_EXISTS:case nK.PERMISSION_DENIED:case nK.FAILED_PRECONDITION:case nK.ABORTED:case nK.OUT_OF_RANGE:case nK.UNIMPLEMENTED:case nK.DATA_LOSS:return!0}}(n=t.code)&&n!==nK.ABORTED){let n=e.fu.shift();oC(e).Mo(),await oy(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ov(e)}}(e,t),ob(e)&&ow(e)}async function oS(e,t){e.asyncQueue.verifyOperationInProgress(),nV("RemoteStore","RemoteStore received new credentials");let n=od(e);e._u.add(3),await os(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await oi(e)}async function ok(e,t){t?(e._u.delete(2),await oi(e)):t||(e._u.add(2),await os(e),e.gu.set("Unknown"))}function oA(e){var t,n,r;return e.pu||(e.pu=(t=e.datastore,n=e.asyncQueue,r={Yr:of.bind(null,e),Zr:op.bind(null,e),Wo:om.bind(null,e)},t.su(),new s8(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,r)),e.wu.push(async t=>{t?(e.pu.Mo(),oh(e)?oc(e):e.gu.set("Unknown")):(await e.pu.stop(),e.yu=void 0)})),e.pu}function oC(e){var t,n,r;return e.Iu||(e.Iu=(t=e.datastore,n=e.asyncQueue,r={Yr:o_.bind(null,e),Zr:oT.bind(null,e),tu:oE.bind(null,e),Zo:oI.bind(null,e)},t.su(),new oe(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,r)),e.wu.push(async t=>{t?(e.Iu.Mo(),await ov(e)):(await e.Iu.stop(),e.fu.length>0&&(nV("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nH,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,o=new oO(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nG(nK.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oN(e,t){if(n$("AsyncQueue",`${t}: ${e}`),ro(e))return new nG(nK.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.comparator=e?(t,n)=>e(t,n)||rt.comparator(t.key,n.key):(e,t)=>rt.comparator(e.key,t.key),this.keyedMap=iX(),this.sortedSet=new rY(this.comparator)}static emptySet(e){return new oR(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oR)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new oR;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.Tu=new rY(rt.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):nz():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class ox{constructor(e,t,n,r,i,s,o,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new ox(e,t,oR.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ip(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.Au=void 0,this.listeners=[]}}class oL{constructor(){this.queries=new iZ(e=>im(e),ip),this.onlineState="Unknown",this.Ru=new Set}}async function oM(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new oP),r)try{i.Au=await e.onListen(n)}catch(n){let e=oN(n,`Initialization of query '${ig(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.bu(e.onlineState),i.Au&&t.Pu(i.Au)&&oV(e)}async function oU(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function oF(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.Pu(r)&&(n=!0);i.Au=r}}n&&oV(e)}function oj(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function oV(e){e.Ru.forEach(e=>{e.next()})}class o${constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new ox(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=ox.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oq{constructor(e){this.key=e}}class oB{constructor(e){this.key=e}}class oz{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=i2(),this.mutatedKeys=i2(),this.Gu=iv(e),this.Qu=new oR(this.Gu)}get ju(){return this.qu}Wu(e,t){let n=t?t.zu:new oD,r=t?t.Qu:this.Qu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let l=r.get(e),c=iy(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;l&&c?l.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(l,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||u&&0>this.Gu(c,u))&&(o=!0)):!l&&c?(n.track({type:0,doc:c}),f=!0):l&&!c&&(n.track({type:1,doc:l}),f=!0,(a||u)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let i=e.zu.Eu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nz()}};return n(e)-n(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);let s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return(this.Uu=o,0!==i.length||a)?{snapshot:new ox(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new oD,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=i2(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new oB(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new oq(n))}),t}tc(e){this.qu=e.Hi,this.Ku=i2();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return ox.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class oK{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oG{constructor(e){this.key=e,this.nc=!1}}class oH{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new iZ(e=>im(e),ip),this.rc=new Map,this.oc=new Set,this.uc=new rY(rt.comparator),this.cc=new Map,this.ac=new sM,this.hc={},this.lc=new Map,this.fc=sN.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function oZ(e,t){let n,r;let i=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=oJ.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=at.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=o0.bind(null,t),t.sc.Wo=oF.bind(null,t.eventManager),t.sc.wc=oj.bind(null,t.eventManager),t}(e),s=i.ic.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.ec();else{let e=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(i=>i?(r=i,rs.resolve(r)):n.Cs.allocateTargetId(e).next(i=>(r=new sT(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e})}(i.localStore,ic(t));i.isPrimaryClient&&oo(i.remoteStore,e);let s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await oW(i,t,n,"current"===s,e.resumeToken)}return r}async function oW(e,t,n,r,i){e._c=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await sX(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return o9(e,t.targetId,o.Xu),o.snapshot})(e,t,n,r);let s=await sX(e.localStore,t,!0),o=new oz(t,s.Hi),a=o.Wu(s.documents),u=i5.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),l=o.applyChanges(a,e.isPrimaryClient,u);o9(e,n,l.Xu);let c=new oK(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function oQ(e,t){let n=e.ic.get(t),r=e.rc.get(n.targetId);if(r.length>1)return e.rc.set(n.targetId,r.filter(e=>!ip(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await sQ(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),oa(e.remoteStore,n.targetId),o5(e,n.targetId)}).catch(ri)):(o5(e,n.targetId),await sQ(e.localStore,n.targetId,!0))}async function oX(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=o1.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=o2.bind(null,t),t}(e);try{var i,s;let e;let o=await function(e,t){let n,r;let i=n5.now(),s=t.reduce((e,t)=>e.add(t.key),i2());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=iW,u=i2();return e.Gi.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=iE(r.transform,e||null);null!=i&&(null===n&&(n=r5.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new iV(e.key,t,function e(t){let n=[];return rh(t.fields,(t,r)=>{let i=new re([t]);if(rx(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new r3(n)}(t.value.mapValue),ix.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,u);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iJ(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,(e=i.hc[i.currentUser.toKey()])||(e=new rY(n4)),e=e.insert(s,n),i.hc[i.currentUser.toKey()]=e,await o8(r,o.changes),await ov(r.remoteStore)}catch(t){let e=oN(t,"Failed to persist write");n.reject(e)}}async function oJ(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var s;let o,a;let u=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;let l=[];t.targetChanges.forEach((s,o)=>{var a;let u=i.get(o);if(!u)return;l.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Cs.addMatchingKeys(e,s.addedDocuments,o)));let c=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?c=c.withResumeToken(rp.EMPTY_BYTE_STRING,n6.min()).withLastLimboFreeSnapshotVersion(n6.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(o,c),a=c,(0===u.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&l.push(n.Cs.updateTargetData(e,c))});let c=iW,h=i2();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),l.push((s=t.documentUpdates,o=i2(),a=i2(),s.forEach(e=>o=o.add(e)),u.getEntries(e,o).next(e=>{let t=iW;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(n)),r.isNoDocument()&&r.version.isEqual(n6.min())?(u.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(u.addEntry(r),t=t.insert(n,r)):nV("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Wi:t,zi:a}})).next(e=>{c=e.Wi,h=e.zi})),!r.isEqual(n6.min())){let t=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r));l.push(t)}return rs.waitFor(l).next(()=>u.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,c,h)).next(()=>c)}).then(e=>(n.qi=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.cc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||nz(),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?r.nc||nz():t.removedDocuments.size>0&&(r.nc||nz(),r.nc=!1))}),await o8(e,n,t)}catch(e){await ri(e)}}function oY(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.ic.forEach((n,r)=>{let i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.bu(t)&&(r=!0)}),r&&oV(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function o0(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.cc.get(t),s=i&&i.key;if(s){let e=new rY(rt.comparator);e=e.insert(s,r6.newNoDocument(s,n6.min()));let n=i2().add(s),i=new i3(n6.min(),new Map,new r2(n4),e,n);await oJ(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),o7(r)}else await sQ(r.localStore,t,!1).then(()=>o5(r,t,n)).catch(ri)}async function o1(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=rs.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nz(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=i2();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});o3(e,r,null),o4(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await o8(e,i)}catch(e){await ri(e)}}async function o2(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||nz(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});o3(e,t,n),o4(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await o8(e,i)}catch(e){await ri(e)}}function o4(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function o3(e,t,n){let r=e,i=r.hc[r.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function o5(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||o6(e,t)})}function o6(e,t){e.oc.delete(t.path.canonicalString());let n=e.uc.get(t);null!==n&&(oa(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),o7(e))}function o9(e,t,n){for(let r of n)r instanceof oq?(e.ac.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(nV("SyncEngine","New document in limbo: "+n),e.oc.add(r),o7(e))}(e,r)):r instanceof oB?(nV("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||o6(e,r.key)):nz()}function o7(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let n=new rt(n7.fromString(t)),r=e.fc.next();e.cc.set(r,new oG(n)),e.uc=e.uc.insert(n,r),oo(e.remoteStore,new sT(ic(ii(n.path)),r,2,ra.at))}}async function o8(e,t,n){let r=[],i=[],s=[];e.ic.isEmpty()||(e.ic.forEach((o,a)=>{s.push(e._c(a,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=sK.Ci(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.sc.Wo(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>rs.forEach(t,t=>rs.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>rs.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ro(e))throw e;nV("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.qi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,i)}}}(e.localStore,i))}async function ae(e,t){let n=e;if(!n.currentUser.isEqual(t)){nV("SyncEngine","User change. New user:",t.toKey());let e=await sZ(n.localStore,t);n.currentUser=t,n.lc.forEach(e=>{e.forEach(e=>{e.reject(new nG(nK.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.lc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await o8(n,e.ji)}}function at(e,t){let n=e.cc.get(t);if(n&&n.nc)return i2().add(n.key);{let n=i2(),r=e.rc.get(t);if(!r)return n;for(let t of r){let r=e.ic.get(t);n=n.unionWith(r.view.ju)}return n}}class an{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=s6(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,n,r,i;return t=this.persistence,n=new sG,r=e.initialUser,i=this.yt,new sH(t,n,r,i)}yc(e){return new sq(sz.Bs,this.yt)}gc(e){return new sY}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ar{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oY(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ae.bind(null,this.syncEngine),await ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oL}createDatastore(e){var t,n,r;let i=s6(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new s3(t));return n=e.authCredentials,r=e.appCheckCredentials,new ot(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>oY(this.syncEngine,e,0),s=s1.C()?new s1:new s0,new or(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new oH(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){nV("RemoteStore","RemoteStore shutting down."),e._u.add(5),await os(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e,t,n){if(!n)throw new nG(nK.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function as(e){if(!rt.isDocumentKey(e))throw new nG(nK.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ao(e){if(rt.isDocumentKey(e))throw new nG(nK.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function aa(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nz()}function au(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nG(nK.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=aa(e);throw new nG(nK.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al=new Map;class ac{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new nG(nK.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nG(nK.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new nG(nK.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ac({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nG(nK.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nG(nK.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ac(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nW;switch(e.type){case"gapi":let t=e.client;return new nY(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nG(nK.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=al.get(e);t&&(nV("ComponentProvider","Removing Datastore"),al.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ap(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ad(this.firestore,e,this._key)}}class af{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new af(this.firestore,e,this._query)}}class ap extends af{constructor(e,t,n){super(e,t,ii(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ad(this.firestore,null,new rt(e))}withConverter(e){return new ap(this.firestore,e,this._path)}}function am(e,t,...n){if(e=(0,p.m9)(e),ai("collection","path",t),e instanceof ah){let r=n7.fromString(t,...n);return ao(r),new ap(e,null,r)}{if(!(e instanceof ad||e instanceof ap))throw new nG(nK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(n7.fromString(t,...n));return ao(r),new ap(e.firestore,null,r)}}function ag(e,t){if(e=au(e,ah),ai("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new nG(nK.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new af(e,null,new ir(n7.emptyPath(),t))}function ay(e,t,...n){if(e=(0,p.m9)(e),1==arguments.length&&(t=n2.R()),ai("doc","path",t),e instanceof ah){let r=n7.fromString(t,...n);return as(r),new ad(e,null,new rt(r))}{if(!(e instanceof ad||e instanceof ap))throw new nG(nK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(n7.fromString(t,...n));return as(r),new ad(e.firestore,e instanceof ap?e.converter:null,new rt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):n$("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nM.UNAUTHENTICATED,this.clientId=n2.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{nV("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(nV("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nG(nK.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nH;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=oN(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function aw(e,t){e.asyncQueue.verifyOperationInProgress(),nV("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sZ(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function a_(e,t){e.asyncQueue.verifyOperationInProgress();let n=await aE(e);nV("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>oS(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>oS(t.remoteStore,n)),e.onlineComponents=t}async function aE(e){return e.offlineComponents||(nV("FirestoreClient","Using default OfflineComponentProvider"),await aw(e,new an)),e.offlineComponents}async function aI(e){return e.onlineComponents||(nV("FirestoreClient","Using default OnlineComponentProvider"),await a_(e,new ar)),e.onlineComponents}async function aT(e){let t=await aI(e),n=t.eventManager;return n.onListen=oZ.bind(null,t.syncEngine),n.onUnlisten=oQ.bind(null,t.syncEngine),n}class aS{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new s9(this,"async_queue_retry"),this.Wc=()=>{let e=s5();e&&nV("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=s5();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=s5();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new nH;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ro(e))throw e;nV("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw n$("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let r=oO.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(r),r}zc(){this.Kc&&nz()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function ak(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class aA extends ah{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new aS,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aN(this),this._firestoreClient.terminate()}}function aC(e,t){let n="object"==typeof e?e:(0,h.Mq)(),r=(0,h.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,p.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=au(e,ah))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&nq("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=nM.MOCK_USER;else{t=(0,p.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new nG(nK.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new nM(s)}e._authCredentials=new nQ(new nZ(t,n))}}(r,...e)}return r}function aO(e){return e._firestoreClient||aN(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function aN(e){var t,n,r,i;let s=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new ru(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new ab(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aR(rp.fromBase64String(e))}catch(e){throw new nG(nK.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new aR(rp.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nG(nK.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nG(nK.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nG(nK.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return n4(this._lat,e._lat)||n4(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aL=/^__.*__$/;class aM{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new iV(e,this.data,this.fieldMask,t,this.fieldTransforms):new ij(e,this.data,t,this.fieldTransforms)}}class aU{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new iV(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aF(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nz()}}class aj{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new aj(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return aX(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(aF(this.sa)&&aL.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class aV{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||s6(e)}da(e,t,n,r=!1){return new aj({sa:e,methodName:t,fa:n,path:re.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function a$(e){let t=e._freezeSettings(),n=s6(e._databaseId);return new aV(e._databaseId,!!t.ignoreUndefinedProperties,n)}class aq extends ax{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof aq}}class aB extends ax{_toFieldTransform(e){return new iR(e.path,new iI)}isEqual(e){return e instanceof aB}}function az(e,t){if(aG(e=(0,p.m9)(e)))return aH("Unsupported field value:",t,e),aK(e,t);if(e instanceof ax)return function(e,t){if(!aF(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=az(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,p.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.yt,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iw(r):ib(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=n5.fromDate(e);return{timestampValue:sa(t.yt,n)}}if(e instanceof n5){let n=new n5(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sa(t.yt,n)}}if(e instanceof aP)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof aR)return{bytesValue:su(t.yt,e._byteString)};if(e instanceof ad){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${aa(e)}`)}(e,t)}function aK(e,t){let n={};return rd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rh(e,(e,r)=>{let i=az(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function aG(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof n5||e instanceof aP||e instanceof aR||e instanceof ad||e instanceof ax)}function aH(e,t,n){if(!aG(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=aa(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function aZ(e,t,n){if((t=(0,p.m9)(t))instanceof aD)return t._internalPath;if("string"==typeof t)return aQ(e,t);throw aX("Field path arguments must be of type string or ",e,!1,void 0,n)}let aW=RegExp("[~\\*/\\[\\]]");function aQ(e,t,n){if(t.search(aW)>=0)throw aX(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aD(...t.split("."))._internalPath}catch(r){throw aX(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function aX(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new nG(nK.INVALID_ARGUMENT,a+e+u)}function aJ(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aY{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ad(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new a0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(a1("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class a0 extends aY{data(){return super.data()}}function a1(e,t){return"string"==typeof t?aQ(e,t):t instanceof aD?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new nG(nK.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class a4{}class a3 extends a4{}function a5(e,t,...n){let r=[];for(let i of(t instanceof a4&&r.push(t),function(e){let t=e.filter(e=>e instanceof a9).length,n=e.filter(e=>e instanceof a6).length;if(t>1||t>0&&n>0)throw new nG(nK.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class a6 extends a3{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new a6(e,t,n)}_apply(e){let t=this._parse(e);return un(e._query,t),new af(e.firestore,e.converter,ih(e._query,t))}_parse(e){let t=a$(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new nG(nK.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ut(o,s);let t=[];for(let n of o)t.push(ue(r,e,n));a={arrayValue:{values:t}}}else a=ue(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ut(o,s),a=function(e,t,n,r=!1){return az(n,e.da(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return rV.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class a9 extends a4{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new a9(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:r$.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)un(n,e),n=ih(n,e)}(e._query,t),new af(e.firestore,e.converter,ih(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class a7 extends a3{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new a7(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new nG(nK.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new nG(nK.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new rJ(t,n);return function(e,t){if(null===io(e)){let n=ia(e);null!==n&&ur(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new af(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new ir(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function a8(e,t="asc"){let n=a1("orderBy",e);return a7._create(n,t)}function ue(e,t,n){if("string"==typeof(n=(0,p.m9)(n))){if(""===n)throw new nG(nK.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iu(t)&&-1!==n.indexOf("/"))throw new nG(nK.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(n7.fromString(n));if(!rt.isDocumentKey(r))throw new nG(nK.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rC(e,new rt(r))}if(n instanceof ad)return rC(e,n._key);throw new nG(nK.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aa(n)}.`)}function ut(e,t){if(!Array.isArray(e)||0===e.length)throw new nG(nK.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new nG(nK.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function un(e,t){if(t.isInequality()){let n=ia(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new nG(nK.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=io(e);null!==i&&ur(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new nG(nK.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new nG(nK.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ur(e,t,n){if(!n.isEqual(t))throw new nG(nK.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ui{convertValue(e,t="none"){switch(rE(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ry(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rv(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw nz()}}convertObject(e,t){let n={};return rh(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new aP(ry(e.latitude),ry(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return rb(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rw(e));default:return null}}convertTimestamp(e){let t=rg(e);return new n5(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=n7.fromString(e);sw(n)||nz();let r=new rl(n.get(1),n.get(3)),i=new rt(n.popFirst(5));return r.isEqual(t)||n$(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uo extends aY{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(a1("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ua extends uo{data(e={}){return super.data(e)}}class uu{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new us(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ua(this._firestore,this._userDataWriter,n.key,n,new us(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new nG(nK.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new ua(e._firestore,e._userDataWriter,n.doc.key,n.doc,new us(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new ua(e._firestore,e._userDataWriter,t.doc.key,t.doc,new us(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nz()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e){e=au(e,ad);let t=au(e.firestore,aA);return(function(e,t,n={}){let r=new nH;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new av({next:s=>{t.enqueueAndForget(()=>oU(e,o));let a=s.docs.has(n);!a&&s.fromCache?i.reject(new nG(nK.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new nG(nK.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new o$(ii(n.path),s,{includeMetadataChanges:!0,Nu:!0});return oM(e,o)})(await aT(e),e.asyncQueue,t,n,r)),r.promise})(aO(t),e._key).then(n=>uy(t,e,n))}class uc extends ui{constructor(e){super(),this.firestore=e}convertBytes(e){return new aR(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ad(this.firestore,null,t)}}function uh(e){e=au(e,af);let t=au(e.firestore,aA),n=aO(t),r=new uc(t);return a2(e._query),(function(e,t,n={}){let r=new nH;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new av({next:n=>{t.enqueueAndForget(()=>oU(e,o)),n.fromCache&&"server"===r.source?i.reject(new nG(nK.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new o$(n,s,{includeMetadataChanges:!0,Nu:!0});return oM(e,o)})(await aT(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new uu(t,r,e,n))}function ud(e,t,n){var r;e=au(e,ad);let i=au(e.firestore,aA),s=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return ug(i,[(function(e,t,n,r,i,s={}){let o,a;let u=e.da(s.merge||s.mergeFields?2:0,t,n,i);aH("Data must be an object, but it was:",u,r);let l=aK(r,u);if(s.merge)o=new r3(u.fieldMask),a=u.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=aZ(t,r,n);if(!u.contains(i))throw new nG(nK.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);aJ(e,i)||e.push(i)}o=new r3(e),a=u.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=u.fieldTransforms;return new aM(new r5(l),o,a)})(a$(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,ix.none())])}function uf(e,t,n,...r){let i;e=au(e,ad);let s=au(e.firestore,aA),o=a$(s);return i="string"==typeof(t=(0,p.m9)(t))||t instanceof aD?function(e,t,n,r,i,s){let o=e.da(1,t,n),a=[aZ(t,r,n)],u=[i];if(s.length%2!=0)throw new nG(nK.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(aZ(t,s[e])),u.push(s[e+1]);let l=[],c=r5.empty();for(let e=a.length-1;e>=0;--e)if(!aJ(l,a[e])){let t=a[e],n=u[e];n=(0,p.m9)(n);let r=o.ca(t);if(n instanceof aq)l.push(t);else{let e=az(n,r);null!=e&&(l.push(t),c.set(t,e))}}let h=new r3(l);return new aU(c,h,o.fieldTransforms)}(o,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.da(1,t,n);aH("Data must be an object, but it was:",i,r);let s=[],o=r5.empty();rh(r,(e,r)=>{let a=aQ(t,e,n);r=(0,p.m9)(r);let u=i.ca(a);if(r instanceof aq)s.push(a);else{let e=az(r,u);null!=e&&(s.push(a),o.set(a,e))}});let a=new r3(s);return new aU(o,a,i.fieldTransforms)}(o,"updateDoc",e._key,t),ug(s,[i.toMutation(e._key,ix.exists(!0))])}function up(e){return ug(au(e.firestore,aA),[new iz(e._key,ix.none())])}function um(e,...t){var n,r,i;let s,o,a;e=(0,p.m9)(e);let u={includeMetadataChanges:!1},l=0;"object"!=typeof t[0]||ak(t[l])||(u=t[l],l++);let c={includeMetadataChanges:u.includeMetadataChanges};if(ak(t[l])){let e=t[l];t[l]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[l+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[l+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof ad)o=au(e.firestore,aA),a=ii(e._key.path),s={next:n=>{t[l]&&t[l](uy(o,e,n))},error:t[l+1],complete:t[l+2]};else{let n=au(e,af);o=au(n.firestore,aA),a=n._query;let r=new uc(o);s={next:e=>{t[l]&&t[l](new uu(o,r,n,e))},error:t[l+1],complete:t[l+2]},a2(e._query)}return function(e,t,n,r){let i=new av(r),s=new o$(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>oM(await aT(e),s)),()=>{i.bc(),e.asyncQueue.enqueueAndForget(async()=>oU(await aT(e),s))}}(aO(o),a,c,s)}function ug(e,t){return function(e,t){let n=new nH;return e.asyncQueue.enqueueAndForget(async()=>oX(await aI(e).then(e=>e.syncEngine),t,n)),n.promise}(aO(e),t)}function uy(e,t,n){let r=n.docs.get(t._key),i=new uc(e);return new uo(e,i,t._key,r,new us(n.hasPendingWrites,n.fromCache),t.converter)}function uv(){return new aB("serverTimestamp")}!function(e,t=!0){nU=h.Jn,(0,h.Xd)(new d.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new aA(new nX(e.getProvider("auth-internal")),new n1(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nG(nK.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rl(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(nL,"3.8.3",void 0),(0,h.KN)(nL,"3.8.3","esm2017")}()},3232:function(e,t,n){"use strict";n.d(t,{lU:function(){return eT},lC:function(){return ek},Gt:function(){return eO},cA:function(){return eS},ay:function(){return eN},C0:function(){return eC}});var r,i,s,o=Array.isArray,a="object"==typeof global&&global&&global.Object===Object&&global,u="object"==typeof self&&self&&self.Object===Object&&self,l=a||u||Function("return this")(),c=l.Symbol,h=Object.prototype,d=h.hasOwnProperty,f=h.toString,p=c?c.toStringTag:void 0,m=function(e){var t=d.call(e,p),n=e[p];try{e[p]=void 0;var r=!0}catch(e){}var i=f.call(e);return r&&(t?e[p]=n:delete e[p]),i},g=Object.prototype.toString,y=c?c.toStringTag:void 0,v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?m(e):g.call(e)},b=function(e){return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==v(e)},w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/,E=function(e,t){if(o(e))return!1;var n=typeof e;return!!("number"==n||"symbol"==n||"boolean"==n||null==e||b(e))||_.test(e)||!w.test(e)||null!=t&&e in Object(t)},I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=function(e){if(!I(e))return!1;var t=v(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},S=l["__core-js_shared__"],k=(r=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",A=Function.prototype.toString,C=function(e){if(null!=e){try{return A.call(e)}catch(e){}try{return e+""}catch(e){}}return""},O=/^\[object .+?Constructor\]$/,N=Object.prototype,R=Function.prototype.toString,D=N.hasOwnProperty,x=RegExp("^"+R.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=function(e,t){var n,r=null==e?void 0:e[t];return I(n=r)&&(!k||!(k in n))&&(T(n)?x:O).test(C(n))?r:void 0},L=P(Object,"create"),M=Object.prototype.hasOwnProperty,U=Object.prototype.hasOwnProperty;function F(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}F.prototype.clear=function(){this.__data__=L?L(null):{},this.size=0},F.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},F.prototype.get=function(e){var t=this.__data__;if(L){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return M.call(t,e)?t[e]:void 0},F.prototype.has=function(e){var t=this.__data__;return L?void 0!==t[e]:U.call(t,e)},F.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=L&&void 0===t?"__lodash_hash_undefined__":t,this};var j=function(e,t){return e===t||e!=e&&t!=t},V=function(e,t){for(var n=e.length;n--;)if(j(e[n][0],t))return n;return -1},$=Array.prototype.splice;function q(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}q.prototype.clear=function(){this.__data__=[],this.size=0},q.prototype.delete=function(e){var t=this.__data__,n=V(t,e);return!(n<0)&&(n==t.length-1?t.pop():$.call(t,n,1),--this.size,!0)},q.prototype.get=function(e){var t=this.__data__,n=V(t,e);return n<0?void 0:t[n][1]},q.prototype.has=function(e){return V(this.__data__,e)>-1},q.prototype.set=function(e,t){var n=this.__data__,r=V(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};var B=P(l,"Map"),z=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},K=function(e,t){var n=e.__data__;return z(t)?n["string"==typeof t?"string":"hash"]:n.map};function G(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function H(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(H.Cache||G),n}G.prototype.clear=function(){this.size=0,this.__data__={hash:new F,map:new(B||q),string:new F}},G.prototype.delete=function(e){var t=K(this,e).delete(e);return this.size-=t?1:0,t},G.prototype.get=function(e){return K(this,e).get(e)},G.prototype.has=function(e){return K(this,e).has(e)},G.prototype.set=function(e,t){var n=K(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},H.Cache=G;var Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,W=/\\(\\)?/g,Q=(s=(i=H(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Z,function(e,n,r,i){t.push(r?i.replace(W,"$1"):n||e)}),t},function(e){return 500===s.size&&s.clear(),e})).cache,i),X=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},J=1/0,Y=c?c.prototype:void 0,ee=Y?Y.toString:void 0,et=function e(t){if("string"==typeof t)return t;if(o(t))return X(t,e)+"";if(b(t))return ee?ee.call(t):"";var n=t+"";return"0"==n&&1/t==-J?"-0":n},en=function(e,t){return o(e)?e:E(e,t)?[e]:Q(null==e?"":et(e))},er=1/0,ei=function(e){if("string"==typeof e||b(e))return e;var t=e+"";return"0"==t&&1/e==-er?"-0":t},es=function(e,t,n){t=en(t,e);var r=-1,i=t.length;for(i||(i=1,e=void 0);++r<i;){var s=null==e?void 0:e[ei(t[r])];void 0===s&&(r=i,s=n),e=T(s)?s.call(e):s}return e},eo=function(e,t){t=en(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[ei(t[n++])];return n&&n==r?e:void 0},ea=function(){try{var e=P(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),eu=function(e,t,n){"__proto__"==t&&ea?ea(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},el=Object.prototype.hasOwnProperty,ec=function(e,t,n){var r=e[t];el.call(e,t)&&j(r,n)&&(void 0!==n||t in e)||eu(e,t,n)},eh=/^(?:0|[1-9]\d*)$/,ed=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&eh.test(e))&&e>-1&&e%1==0&&e<t},ef=function(e,t,n,r){if(!I(e))return e;t=en(t,e);for(var i=-1,s=t.length,o=s-1,a=e;null!=a&&++i<s;){var u=ei(t[i]),l=n;if("__proto__"===u||"constructor"===u||"prototype"===u)break;if(i!=o){var c=a[u];void 0===(l=r?r(c,u,a):void 0)&&(l=I(c)?c:ed(t[i+1])?[]:{})}ec(a,u,l),a=a[u]}return e},ep=function(e){return e},em=function(e,t,n){return null==e?e:ef(e,t,("function"==typeof n?n:ep)(eo(e,t)),void 0)},eg=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0},ey=function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(i);++r<i;)s[r]=e[r+t];return s},ev=function(e,t){var n,r;return t=en(t,e),n=e,null==(e=(r=t).length<2?n:eo(n,ey(r,0,-1)))||delete e[ei(eg(t))]},eb=n(7294);let ew={},e_=[],eE=()=>{for(let e of e_)e()},eI=e=>{let t=es(ew,e);return t},eT=(e,t)=>{let n=em(ew,e,e=>Array.isArray(e)?[...e,t]:[t]);return eE(),n},eS=(e,t)=>{if("function"==typeof t){let n=em(ew,e,t);return eE(),n}{let n=null==ew?ew:ef(ew,e,t);return eE(),n}},ek=e=>{let t=null==ew||ev(ew,e);return eE(),t},eA=e=>(e_=[...e_,e],()=>{e_=e_.filter(t=>t!==e)}),eC=e=>{let t=()=>JSON.stringify(es(ew,e)),n=()=>JSON.stringify(es(ew,e));return(0,eb.useSyncExternalStore)(eA,t,n),eI(e)},eO=async(e,t,n={initialState:{data:null,loading:!0,error:!1}})=>{let r=n.initialState;em(ew,e,e=>({...e,...r}));try{let n=await t();eS(e,e=>({...e,data:n,loading:!1}))}catch(t){eS(e,e=>({...e,loading:!1,error:t}))}},eN=(e,t={initialState:{data:null,loading:!0,error:!1}})=>{let n=t.initialState;em(ew,e,e=>e||{...n});let r=eC(e);return r}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);