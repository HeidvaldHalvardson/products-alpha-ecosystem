"use strict";(self.webpackChunkproducts_alpha_ecosystem=self.webpackChunkproducts_alpha_ecosystem||[]).push([[649],{3916:(e,t,r)=>{r.d(t,{s:()=>i});var n=r(4848);var i=function(e){var t=e.className,r=void 0===t?"":t,i=e.children;return(0,n.jsx)("h2",{className:"".concat("H6YUf46Z"," ").concat(r),children:i})}},9649:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(4848),i=r(8048),s=r(9785),a=r(181),o=r(3916),c=r(2823),l=r(4185);const u={form:"KbZCjLNa",field:"Zb89EOLJ",error:"hZSuR1LC",remove:"U8vrJLsm",append:"LuvtFqhe",controls:"MmnG8LqH"};var d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)},p=function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function o(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}c((n=n.apply(e,t||[])).next())}))},f=function(e,t){var r,n,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},h=/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/,m=function(){var e=i.Ay.useMessage(),t=e[0],r=e[1],m=(0,a.Zp)(),v=(0,a.zy)(),b=(0,s.mN)({defaultValues:{images:[{url:""}]}}),y=b.register,x=b.handleSubmit,j=b.formState.errors,g=b.control,w=b.trigger,N=(0,s.jz)({control:g,name:"images"}),k=N.fields,q=N.append,C=N.remove,L=(0,l.WY)(),S=L[0],O=L[1].isLoading,I=(0,c.b)().data;return(0,n.jsxs)(n.Fragment,{children:[r,(0,n.jsx)(o.s,{children:"Create product"}),(0,n.jsxs)("form",{className:u.form,onSubmit:x((function(e){return p(void 0,void 0,void 0,(function(){var r,n,i;return f(this,(function(s){switch(s.label){case 0:r=d(d({},e),{images:e.images.map((function(e){return e.url}))}),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,S(r).unwrap()];case 2:return n=s.sent(),t.open({type:"success",content:"Update success"}),m("/products/".concat(n.id)),[3,4];case 3:return i=s.sent(),t.open({type:"error",content:i.data.message}),console.error("Error updating product",i),[3,4];case 4:return[2]}}))}))})),children:[(0,n.jsxs)("div",{className:u.field,children:[(0,n.jsx)("label",{children:"Title"}),(0,n.jsx)("input",d({type:"text"},y("title",{required:"Title is required",minLength:{value:3,message:"Title must be at least 3 characters long"}}))),j.title&&(0,n.jsx)("p",{className:u.error,children:j.title.message})]}),(0,n.jsxs)("div",{className:u.field,children:[(0,n.jsx)("label",{children:"Price"}),(0,n.jsx)("input",d({type:"number"},y("price",{required:"Price is required",validate:{notZero:function(e){return!(0==+e)||"Price must be greater than 0"}}}))),j.price&&(0,n.jsx)("p",{className:u.error,children:j.price.message})]}),(0,n.jsxs)("div",{className:u.field,children:[(0,n.jsx)("label",{children:"Description"}),(0,n.jsx)("textarea",d({},y("description")))]}),(0,n.jsxs)("div",{className:u.field,children:[(0,n.jsx)("label",{children:"Category"}),(0,n.jsxs)("select",d({},y("categoryId",{required:"Category is required"}),{children:[(0,n.jsx)("option",{value:"",children:"Select a category"}),null==I?void 0:I.map((function(e){return(0,n.jsx)("option",{value:e.id,children:e.name},e.id)}))]})),j.categoryId&&(0,n.jsx)("p",{className:u.error,children:j.categoryId.message})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{children:"Images"}),k.map((function(e,t){var r,i,s;return(0,n.jsxs)("div",{children:[(0,n.jsx)("input",d({},y("images.".concat(t,".url"),{required:"Image URL is required",validate:{url:function(e){return h.test(e)||"Enter a valid URL"}}}))),t>0&&(0,n.jsx)("button",{className:u.remove,type:"button",onClick:function(){return C(t)},children:"Remove"}),(null===(i=null===(r=j.images)||void 0===r?void 0:r[t])||void 0===i?void 0:i.url)&&(0,n.jsx)("p",{className:u.errorImages,children:null===(s=j.images[t].url)||void 0===s?void 0:s.message})]},e.id)})),(0,n.jsx)("button",{className:u.append,type:"button",onClick:function(){return p(void 0,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return[4,w("images")];case 1:return e.sent()&&q({url:""}),[2]}}))}))},children:"Append"}),j.images&&(0,n.jsx)("p",{children:j.images.message})]}),(0,n.jsxs)("div",{className:u.controls,children:[(0,n.jsx)("button",{type:"submit",disabled:O,children:O?"Creating":"Create"}),(0,n.jsx)("button",{type:"button",onClick:function(){var e;m((null===(e=v.state)||void 0===e?void 0:e.from)||"/products")},children:"Cancel"})]})]})]})},v=r(6540),b=r(4566);const y="HSiddHDL",x="XXMOgF2k";var j=function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},j.apply(this,arguments)},g=function(){var e=i.Ay.useMessage(),t=e[0],r=e[1],c=(0,a.g)().id,u=(0,a.Zp)(),d=(0,a.zy)(),p=(0,l.y9)(+c),f=p.data,h=p.isLoading,m=p.error,g=(0,l.FJ)(),w=g[0],N=g[1].isLoading,k=(0,s.mN)(),q=k.register,C=k.handleSubmit,L=k.setValue,S=k.formState.errors;return(0,v.useEffect)((function(){f&&(L("title",f.title),L("price",f.price),L("description",f.description))}),[f,L]),h?(0,n.jsx)(b.a,{}):!h&&m?(0,n.jsx)("p",{children:"Произошла ошибка, пожалуйста обновите страницу"}):(0,n.jsxs)(n.Fragment,{children:[r,(0,n.jsxs)(o.s,{children:["Update product ",f.title]}),(0,n.jsxs)("form",{className:"yNiuWBYk",onSubmit:C((function(e){return r=void 0,n=void 0,s=function(){var r,n;return function(e,t){var r,n,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,w({id:Number(c),body:e}).unwrap()];case 1:return i.sent(),t.open({type:"success",content:"Update success"}),u((null===(n=d.state)||void 0===n?void 0:n.from)||"/products"),[3,3];case 2:return r=i.sent(),t.open({type:"error",content:r.data.error}),console.error("Error updating product",r),[3,3];case 3:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,t){function a(e){try{c(s.next(e))}catch(e){t(e)}}function o(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(a,o)}c((s=s.apply(r,n||[])).next())}));var r,n,i,s})),children:[(0,n.jsxs)("div",{className:y,children:[(0,n.jsx)("label",{children:"Title"}),(0,n.jsx)("input",j({type:"text"},q("title",{required:"Title is required",minLength:{value:3,message:"Title must be at least 3 characters long"}}))),S.title&&(0,n.jsx)("p",{className:x,children:S.title.message})]}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsx)("label",{children:"Price"}),(0,n.jsx)("input",j({type:"number"},q("price",{required:"Price is required",validate:{notZero:function(e){return!(0==+e)||"Price must be greater than 0"}}}))),S.price&&(0,n.jsx)("p",{className:x,children:S.price.message})]}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsx)("label",{children:"Description"}),(0,n.jsx)("textarea",j({},q("description")))]}),(0,n.jsxs)("div",{className:"sQTfVI4u",children:[(0,n.jsx)("button",{type:"submit",disabled:N,children:N?"Updating":"Update"}),(0,n.jsx)("button",{type:"button",onClick:function(){var e;u((null===(e=d.state)||void 0===e?void 0:e.from)||"/products")},children:"Cancel"})]})]})]})},w=r(6738),N=r(1432);const k=function(e){var t=e.mode;return(0,n.jsx)(w.y,{children:t===N.q.UPDATE?(0,n.jsx)(g,{}):(0,n.jsx)(m,{})})}}}]);