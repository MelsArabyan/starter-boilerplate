(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[15],{527:function(e,t,s){"use strict";s.r(t),s.d(t,"Setting",(function(){return R}));var a=s(0),n=s(460),c=s(144),i=s(51),r=s(46),l=s(444),o=s(452),d=s(57),j=s(3),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},b=s(13),u=function(e,t){return a.createElement(b.a,Object(j.a)(Object(j.a)({},e),{},{ref:t,icon:m}))};u.displayName="MenuOutlined";var h=a.forwardRef(u),p=s(5);const{useBreakpoint:x}=l.a,O=e=>{const{sideContent:t,sideContentWidth:s=250,border:a}=e;return Object(p.jsx)("div",{className:"side-content ".concat(a?"with-border":""),style:{width:"".concat(s,"px")},children:t})},g=e=>{const{sideContent:t,visible:s,onSideContentClose:a}=e;return Object(p.jsx)(o.a,{width:320,placement:"left",closable:!1,onClose:a,visible:s,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(p.jsx)("div",{className:"h-100",children:t})})};var v=e=>{const{mainContent:t,pageHeader:s,sideContentGutter:n=!0}=e,c=!d.a.getBreakPoint(x()).includes("lg"),[i,r]=Object(a.useState)(!1);return Object(p.jsxs)("div",{className:"inner-app-layout",children:[c?Object(p.jsx)(g,{visible:i,onSideContentClose:e=>{r(!1)},...e}):Object(p.jsx)(O,{...e}),Object(p.jsxs)("div",{className:"main-content ".concat(s?"has-page-header":""," ").concat(n?"gutter":"no-gutter"),children:[c?Object(p.jsx)("div",{className:"font-size-lg mb-3 ".concat(n?"":"pt-3 px-3"),children:Object(p.jsx)(h,{onClick:()=>{r(!0)}})}):null,t]})]})},y=s(269),f=s(540),C=s(520),w=s(521),N=s(447),I=s(122),S=s(30),D=s(39);class k extends a.Component{getBase64(e,t){const s=new FileReader;s.addEventListener("load",(()=>t(s.result))),s.readAsDataURL(e)}render(){console.log(this.props);const{id:e,name:t,username:s,email:a,address:n,phone:c,website:i,company:r}=this.props.usersData.find((e=>e.id==this.props.userId));return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"mt-4",children:Object(p.jsx)(f.a,{name:"basicInformation",layout:"vertical",initialValues:{name:t,email:a,username:s,phoneNumber:c,website:i,city:n.city,postcode:n.zipcode},onFinish:e=>{const t="updatable";y.b.loading({content:"Updating...",key:t}),setTimeout((()=>{this.setState({name:e.name,email:e.email,userName:e.username,phoneNumber:e.phone,website:e.website,city:e.city,postcode:e.zipcode}),y.b.success({content:"Done!",key:t,duration:2}),this.props.history.push(this.props.match.path.split("/").slice(0,-2).join("/")+"/all")}),1e3)},onFinishFailed:e=>{console.log("Failed:",e)},children:Object(p.jsx)(C.a,{children:Object(p.jsxs)(w.a,{xs:24,sm:24,md:24,lg:16,children:[Object(p.jsxs)(C.a,{gutter:S.c,children:[Object(p.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(p.jsx)(f.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(p.jsx)(N.a,{})})}),Object(p.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(p.jsx)(f.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(p.jsx)(N.a,{})})}),Object(p.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(p.jsx)(f.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(p.jsx)(N.a,{})})}),Object(p.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(p.jsx)(f.a.Item,{label:"Phone Number",name:"phoneNumber",children:Object(p.jsx)(N.a,{})})}),Object(p.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(p.jsx)(f.a.Item,{label:"Website",name:"website",children:Object(p.jsx)(N.a,{})})}),Object(p.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(p.jsx)(f.a.Item,{label:"City",name:"city",children:Object(p.jsx)(N.a,{})})}),Object(p.jsx)(w.a,{xs:24,sm:24,md:12,children:Object(p.jsx)(f.a.Item,{label:"Post code",name:"postcode",children:Object(p.jsx)(N.a,{})})})]}),Object(p.jsx)(I.a,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})})}}var P=Object(D.b)((e=>{let{users:t}=e;console.log(t,"users");const{loading:s,usersData:a}=t;return{loading:s,usersData:a}}))(k);const z=e=>{let{match:t,location:s,usersData:a}=e;return console.log(a,"SettingOption"),Object(p.jsx)(c.a,{defaultSelectedKeys:"".concat(t.url,"/edit-profile"),mode:"inline",selectedKeys:[s.pathname],children:Object(p.jsxs)(c.a.Item,{children:[Object(p.jsx)(n.a,{}),Object(p.jsx)("span",{children:"Edit Profile"}),Object(p.jsx)(i.b,{to:"edit-profile"})]},"".concat(t.url,"/edit-profile"))})},F=e=>{let{match:t,usersData:s}=e;return Object(p.jsxs)(r.Switch,{children:[Object(p.jsx)(r.Redirect,{exact:!0,from:"".concat(t.url),to:"".concat(t.url,"/edit-profile")}),Object(p.jsx)(r.Route,{path:"".concat(t.url,"/edit-profile"),render:e=>Object(p.jsx)(P,{userId:t.params.id,...e})})]})};class R extends a.Component{render(){return Object(p.jsx)(v,{sideContentWidth:320,sideContent:Object(p.jsx)(z,{...this.props}),mainContent:Object(p.jsx)(F,{...this.props})})}}t.default=Object(D.b)((e=>{let{users:t}=e;console.log(t,"users");const{loading:s,usersData:a}=t;return{loading:s,usersData:a}}))(R)}}]);
//# sourceMappingURL=15.9d827591.chunk.js.map