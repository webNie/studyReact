(window.webpackJsonpwork=window.webpackJsonpwork||[]).push([[0],{147:function(e,t,a){e.exports=a(305)},153:function(e,t,a){},154:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(17),l=a.n(o),c=(a(152),a(153),a(24)),i=a(25),s=a(28),m=a(26),u=a(29),p=a(48),g=a(43),h=(a(154),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("img",{src:"http://www.lofter.com/mobile/src/images/wap2/login/lofter@2x.png",alt:"logo",className:"img"}),r.a.createElement("div",{className:"home-login download"},"\u6ce8\u518c/\u767b\u5f55"),r.a.createElement("div",{className:"home-login"},r.a.createElement(p.b,{to:"/login"},"\u767b\u5f55/\u6ce8\u518c")))}}]),t}(n.Component)),d=a(307),b=a(306),f=a(308),E=a(13),y=a(113),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var n=JSON.stringify(t);window.sessionStorage.setItem("user",n),a.props.history.replace("/login/signin",t)}}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"register"},r.a.createElement(b.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(b.a.Item,null,e("username",{rules:[{required:!0,message:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u7528\u6237\u540d\u4e0d\u6b63\u786e"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),r.a.createElement(b.a.Item,null,e("password",{rules:[{required:!0,message:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u6b63\u786e"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),r.a.createElement(b.a.Item,null,e("password2",{rules:[{required:!0,message:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u6b63\u786e"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"}))),r.a.createElement(b.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u6ce8\u518c"))))}}]),t}(n.Component),v=b.a.create({name:"normal_login"})(w),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var n=a.props.history,r=JSON.parse(window.sessionStorage.getItem("user"));t.username==r.username&&t.password==r.password?n.replace("/content",t):alert("\u5bf9\u4e0d\u8d77\u6ca1\u6709\u8be5\u7528\u6237")}}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"signin"},r.a.createElement(b.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(b.a.Item,null,e("username",{rules:[{required:!0,message:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u7528\u6237\u540d\u4e0d\u6b63\u786e"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),r.a.createElement(b.a.Item,null,e("password",{rules:[{required:!0,message:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u6b63\u786e"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),r.a.createElement(b.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55"))))}}]),t}(n.Component),j=b.a.create({name:"normal_login"})(O),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={current:"signin"},a.handleClick=function(e){a.setState({current:window.location.pathname.substring(1)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"http://www.lofter.com/mobile/src/images/wap2/login/lofter@2x.png",alt:"logo",className:"img"}),r.a.createElement("nav",{className:"nav"},r.a.createElement(d.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(d.a.Item,{key:"register"},r.a.createElement(p.b,{to:"/login/register",className:"register-a"},"\u6ce8\u518c")),r.a.createElement(d.a.Item,{key:"signin"},r.a.createElement(p.b,{to:"/login/signin",className:"signin-a"},"\u767b\u5f55")))),r.a.createElement("main",null,r.a.createElement(g.b,{path:"/login",exact:!0,component:j}),r.a.createElement(g.b,{path:"/login/register",component:v}),r.a.createElement(g.b,{path:"/login/signin",component:j})))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u6b22\u8fce\u5149\u4e34\uff01"))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(g.a,{from:"/",to:"/home"}),r.a.createElement(g.b,{path:"/home",component:h}),r.a.createElement(g.b,{path:"/login",component:k}),r.a.createElement(g.b,{path:"/content",component:N}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[147,1,2]]]);
//# sourceMappingURL=main.aac96cf8.chunk.js.map