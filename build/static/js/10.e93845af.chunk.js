(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[10],{477:function(e,t,s){"use strict";var c=s(478),a=s.n(c),n=s(19),r=s(479).a(),i=s(28),l=s(270);const o=a.a.create({baseURL:n.a,timeout:6e4}),d="/auth/login";o.interceptors.request.use((e=>{const t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(r.push(d),window.location.reload()),e}),(e=>{l.a.error({message:"Error"}),Promise.reject(e)})),o.interceptors.response.use((e=>e.data),(e=>{let t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),r.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),l.a.error(t),Promise.reject(e)}));var j=o;const h={login:function(e){return j({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return j({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=h},483:function(e,t,s){"use strict";var c=s(0),a=s.n(c),n=s(39),r=s(486),i=s(122),l=s(541),o=s(540),d=s(447),j=s(465),h=s(542),m=s(5);const b=()=>Object(m.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(m.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(m.jsx)("g",{id:"Connected_Home_1_",children:Object(m.jsx)("g",{children:Object(m.jsx)("g",{children:Object(m.jsx)("g",{children:Object(m.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(m.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(m.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(m.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(m.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})}),u=()=>Object(m.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(m.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(m.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})});var x=s(3),g=s(2),p=s(15),O=s(7),f=s.n(O),v=s(109),w=s(70),y=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],C=c.forwardRef((function(e,t){var s=e.className,a=e.component,n=e.viewBox,r=e.spin,i=e.rotate,l=e.tabIndex,o=e.onClick,d=e.children,j=Object(p.a)(e,y);Object(w.g)(Boolean(a||d),"Should have `component` prop or `children`."),Object(w.f)();var h=c.useContext(v.a),m=h.prefixCls,b=void 0===m?"anticon":m,u=h.rootClassName,O=f()(u,b,s),C=f()(Object(g.a)({},"".concat(b,"-spin"),!!r)),N=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,F=Object(x.a)(Object(x.a)({},w.e),{},{className:C,style:N,viewBox:n});n||delete F.viewBox;var k=l;return void 0===k&&o&&(k=-1),c.createElement("span",Object(x.a)(Object(x.a)({role:"img"},j),{},{ref:t,tabIndex:k,onClick:o,className:O}),a?c.createElement(a,Object(x.a)({},F),d):d?(Object(w.g)(Boolean(n)||1===c.Children.count(d)&&c.isValidElement(d)&&"use"===c.Children.only(d).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),c.createElement("svg",Object(x.a)(Object(x.a)({},F),{},{viewBox:n}),d)):null)}));C.displayName="AntdIcon";var N=C;var F=a.a.forwardRef(((e,t)=>Object(m.jsx)(N,{component:e.svg,className:e.className}))),k=s(59),M=s(477),P=s(46),I=s(482);const z=e=>{let t=Object(P.useHistory)();const{otherSignIn:s,showForgetPassword:a,hideAuthMessage:n,onForgetPasswordClick:x,showLoading:g,extra:p,loading:O,showMessage:f,message:v,authenticated:w,showAuthMessage:y,token:C,redirect:N,allowRedirect:k}=e;Object(c.useEffect)((()=>{null!==C&&k&&t.push(N),f&&setTimeout((()=>{n()}),3e3)}));const z=Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{children:Object(m.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(m.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(m.jsx)(i.a,{onClick:()=>{g()},className:"mr-2",disabled:O,icon:Object(m.jsx)(F,{svg:b}),children:"Google"}),Object(m.jsx)(i.a,{onClick:()=>{g()},icon:Object(m.jsx)(F,{svg:u}),disabled:O,children:"Facebook"})]})]});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:f?1:0,marginBottom:f?20:0},children:Object(m.jsx)(l.a,{type:"error",showIcon:!0,message:v})}),Object(m.jsxs)(o.a,{layout:"vertical",name:"login-form",onFinish:e=>{g();M.a.login(e).then((e=>{w("fakeToken")})).then((e=>{y(e)}))},children:[Object(m.jsx)(o.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(m.jsx)(d.a,{prefix:Object(m.jsx)(j.a,{className:"text-primary"})})}),Object(m.jsx)(o.a.Item,{name:"password",label:Object(m.jsxs)("div",{className:"".concat(a?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(m.jsx)("span",{children:"Password"}),a&&Object(m.jsx)("span",{onClick:()=>x,className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(m.jsx)(d.a.Password,{prefix:Object(m.jsx)(h.a,{className:"text-primary"})})}),Object(m.jsx)(o.a.Item,{children:Object(m.jsx)(i.a,{type:"primary",htmlType:"submit",block:!0,loading:O,children:"Sign In"})}),s?z:null,p]})]})};z.defaultProps={otherSignIn:!0,showForgetPassword:!1};const B={showAuthMessage:k.c,showLoading:k.d,hideAuthMessage:k.b,authenticated:k.a};t.a=Object(n.b)((e=>{let{auth:t}=e;const{loading:s,message:c,showMessage:a,token:n,redirect:r}=t;return{loading:s,message:c,showMessage:a,token:n,redirect:r}}),B)(z)},486:function(e,t,s){"use strict";var c=s(4),a=s(2),n=s(7),r=s.n(n),i=s(0),l=s(66),o=function(e,t){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(s[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(s[c[a]]=e[c[a]])}return s};t.a=function(e){var t=i.useContext(l.b),s=t.getPrefixCls,n=t.direction,d=e.prefixCls,j=e.type,h=void 0===j?"horizontal":j,m=e.orientation,b=void 0===m?"center":m,u=e.orientationMargin,x=e.className,g=e.children,p=e.dashed,O=e.plain,f=o(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),v=s("divider",d),w=b.length>0?"-".concat(b):b,y=!!g,C="left"===b&&null!=u,N="right"===b&&null!=u,F=r()(v,"".concat(v,"-").concat(h),Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},"".concat(v,"-with-text"),y),"".concat(v,"-with-text").concat(w),y),"".concat(v,"-dashed"),!!p),"".concat(v,"-plain"),!!O),"".concat(v,"-rtl"),"rtl"===n),"".concat(v,"-no-default-orientation-margin-left"),C),"".concat(v,"-no-default-orientation-margin-right"),N),x),k=Object(c.a)(Object(c.a)({},C&&{marginLeft:u}),N&&{marginRight:u});return i.createElement("div",Object(c.a)({className:F},f,{role:"separator"}),g&&"vertical"!==h&&i.createElement("span",{className:"".concat(v,"-inner-text"),style:k},g))}},532:function(e,t,s){"use strict";s.r(t);s(0);var c=s(483),a=s(520),n=s(521),r=s(39),i=s(5);const l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=e=>{const t=Object(r.c)((e=>e.theme.currentTheme));return Object(i.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(i.jsxs)(a.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(i.jsx)(n.a,{xs:20,sm:20,md:24,lg:16,children:Object(i.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(i.jsx)(a.a,{justify:"center",children:Object(i.jsxs)(n.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(i.jsx)("h1",{children:"Sign In"}),Object(i.jsxs)("p",{children:["Don't have an account yet? ",Object(i.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsx)(c.a,{...e})})]})})})}),Object(i.jsx)(n.a,{xs:0,sm:0,md:0,lg:8,children:Object(i.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(i.jsx)("div",{className:"text-right",children:Object(i.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(i.jsx)(a.a,{justify:"center",children:Object(i.jsxs)(n.a,{xs:0,sm:0,md:0,lg:20,children:[Object(i.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(i.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(i.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(i.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Term & Conditions"}),Object(i.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(i.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=10.e93845af.chunk.js.map