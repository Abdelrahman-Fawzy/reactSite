(this.webpackJsonpreact_course=this.webpackJsonpreact_course||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(2),i=s.n(n),c=s(12),r=s.n(c),l=(s(37),s(38),s(39),s(40),s(8)),o=s(9),d=s(11),h=s(10),j=(s(41),s(3)),m=s(5),b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).toggleNav=function(){a.setState({isNavOpen:!a.state.isNavOpen})},a.handleLogin=function(e){a.toggleModal(),alert("username: ".concat(a.username.value," and password: ").concat(a.password.value," and remebering: ").concat(a.remeberMe.checked)),e.preventDefault()},a.toggleModal=function(){a.setState({isModalOpen:!a.state.isModalOpen})},a.state={isNavOpen:!1,isModalOpen:!1},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.z,{dark:!0,expand:"md",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j.B,{onClick:this.toggleNav}),Object(a.jsx)(j.A,{className:"mr-auto",href:"/",children:Object(a.jsx)("img",{src:"assets/images/logo.png"})}),Object(a.jsxs)(j.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(a.jsxs)(j.x,{className:"mr-auto",navbar:!0,children:[Object(a.jsx)(j.y,{children:Object(a.jsxs)(m.c,{className:"nav-link",to:"/home",children:[Object(a.jsx)("span",{className:"fa fa-home fa-2x"}),"Home"]})}),Object(a.jsx)(j.y,{children:Object(a.jsxs)(m.c,{className:"nav-link",to:"/about-us",children:[Object(a.jsx)("span",{className:"fa fa-info fa-2x"}),"About Us"]})}),Object(a.jsx)(j.y,{children:Object(a.jsxs)(m.c,{className:"nav-link",to:"/menu",children:[Object(a.jsx)("span",{className:"fa fa-list fa-2x"}),"Menu"]})}),Object(a.jsx)(j.y,{children:Object(a.jsxs)(m.c,{className:"nav-link",to:"/contact-us",children:[Object(a.jsx)("span",{className:"fa fa-address-card fa-2x"}),"Contact Us"]})})]}),Object(a.jsx)(j.x,{className:"ml-auto",navbar:!0,children:Object(a.jsx)(j.y,{children:Object(a.jsxs)(j.c,{outline:!0,onClick:this.toggleModal,children:[Object(a.jsx)("span",{className:"fa fa-sign-in fa-lg"}),"Login"]})})})]})]})}),Object(a.jsx)(j.r,{children:Object(a.jsx)("div",{className:"conatiner",children:Object(a.jsx)("div",{className:"row row-header",children:Object(a.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(a.jsx)("h1",{children:"Ristorante con Fusion"}),Object(a.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(a.jsxs)(j.u,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(a.jsx)(j.w,{toggle:this.toggleModal,children:"Login"}),Object(a.jsx)(j.v,{children:Object(a.jsxs)(j.n,{onSubmit:this.handleLogin,children:[Object(a.jsxs)(j.p,{children:[Object(a.jsx)(j.s,{for:"userName",children:"User Name"}),Object(a.jsx)(j.q,{type:"text",id:"userName",name:"username",placeholder:"User Name",innerRef:function(t){return e.username=t}})]}),Object(a.jsxs)(j.p,{children:[Object(a.jsx)(j.s,{for:"Password",children:"Password"}),Object(a.jsx)(j.q,{type:"password",id:"Password",name:"password",placeholder:"Password",innerRef:function(t){return e.password=t}})]}),Object(a.jsx)(j.p,{check:!0,children:Object(a.jsxs)(j.s,{check:!0,children:[Object(a.jsx)(j.q,{type:"checkbox",name:"remeberMe",innerRef:function(t){return e.remeberMe=t}}),"Remeber Me"]})}),Object(a.jsx)(j.c,{type:"submit",color:"primary",className:"mt-3",children:"Log in"})]})})]})]})}}]),s}(n.Component);function u(e){var t=e.dish;return Object(a.jsx)(j.d,{children:Object(a.jsxs)(m.b,{to:"/menu/".concat(t.id),children:[Object(a.jsx)(j.g,{top:!0,width:"100%",src:t.image,alt:t.name}),Object(a.jsx)(j.h,{children:Object(a.jsx)(j.k,{children:t.name})})]})},t.id)}var O=function(e){var t=e.dishes.map((function(e){return Object(a.jsx)("div",{className:"col-12 col-md-5 mt-5",children:Object(a.jsx)(u,{dish:e})})}));return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(j.b,{children:Object(a.jsx)(m.b,{to:"/home",children:"Home"})}),Object(a.jsx)(j.b,{active:!0,children:"Menu"})]}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h3",{children:"Menu"}),Object(a.jsx)("hr",{})]})]}),Object(a.jsx)("div",{className:"row",children:t})]})};function x(e){var t=e.dish;return null!=t?Object(a.jsx)("div",{className:"col-12 col-md-5 mt-5",children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.g,{top:!0,width:"100%",src:t.image,alt:t.name}),Object(a.jsxs)(j.e,{children:[Object(a.jsx)(j.k,{tag:"h3",children:t.name}),Object(a.jsx)(j.j,{children:t.description})]})]})}):Object(a.jsx)("div",{})}function f(e){var t=e.comments;return null!=t?Object(a.jsxs)("div",{className:"col-12 col-md-5 mt-5",children:[Object(a.jsx)("h4",{children:"Comments"}),Object(a.jsx)("ul",{className:"list-unstyled",children:t.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("p",{children:e.comment}),Object(a.jsxs)("p",{children:["-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))," "]})]})}))})]}):Object(a.jsx)("div",{})}var g=function(e){return null!=e.dish?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(j.b,{children:Object(a.jsx)(m.b,{to:"/home",children:"Home"})}),Object(a.jsx)(j.b,{active:!0,children:e.dish.name})]}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h3",{children:e.dish.name}),Object(a.jsx)("hr",{})]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(x,{dish:e.dish}),Object(a.jsx)(f,{comments:e.comments})]})]}):Object(a.jsx)("div",{})},p=s(23),v=s(14),N=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).handleChangeInput=function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,n=t.name;a.setState(Object(v.a)({},n,s))},a.handleBlur=function(e){return function(t){a.setState({touched:Object(p.a)(Object(p.a)({},a.state.touched),{},Object(v.a)({},e,!0))})}},a.validate=function(e,t,s,n){var i={firstname:"",lastname:"",telnum:"",email:""};a.state.touched.firstname&&e.length<=3?i.firstname="First Name is too short":a.state.touched.firstname&&e.length>=10&&(i.firstname="First Name is too long"),a.state.touched.lastname&&t.length<=3?i.lastname="First Name is too short":a.state.touched.lastname&&t.length>=10&&(i.lastname="First Name is too long");return a.state.touched.telnum&&!/\d{10}$/.test(s)&&(i.telnum="invalid Phone Number"),a.state.touched.email&&1!==n.split("").filter((function(e){return"@"===e})).length&&(i.email="invalid Email"),i},a.handleFormSubmit=function(e){alert("Current State Is ".concat(JSON.stringify(a.state))),e.preventDefault()},a.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(j.b,{children:Object(a.jsx)(m.b,{to:"/home",children:"Home"})}),Object(a.jsx)(j.b,{active:!0,children:"Contact Us"})]}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h3",{children:"Contact Us"}),Object(a.jsx)("hr",{})]})]}),Object(a.jsxs)("div",{className:"row row-content",children:[Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("h3",{children:"Location Information"})}),Object(a.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(a.jsx)("h5",{children:"Our Address"}),Object(a.jsxs)("address",{children:["121, Clear Water Bay Road",Object(a.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(a.jsx)("br",{}),"HONG KONG",Object(a.jsx)("br",{}),Object(a.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(a.jsx)("br",{}),Object(a.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(a.jsx)("br",{}),Object(a.jsx)("i",{className:"fa fa-envelope"}),": ",Object(a.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(a.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(a.jsx)("h5",{children:"Map of our Location"})}),Object(a.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(a.jsxs)("div",{className:"btn-group",role:"group",children:[Object(a.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(a.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(a.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(a.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(a.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(a.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(a.jsxs)("div",{className:"row row-content",children:[Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h3",{children:"Send Us Your Feedback"}),Object(a.jsx)("hr",{})]}),Object(a.jsx)("div",{className:"col-12 col-md-9",children:Object(a.jsxs)(j.n,{onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(j.p,{row:!0,children:[Object(a.jsx)(j.s,{htmlFor:"firstname",md:2,children:"First Name"}),Object(a.jsxs)(j.l,{md:10,children:[Object(a.jsx)(j.q,{type:"text",name:"firstname",id:"firstname",placeholder:"First Name",value:this.state.firstname,valid:""===e.firstname,invalid:""!==e.firstname,onBlur:this.handleBlur("firstname"),onChange:this.handleChangeInput}),Object(a.jsx)(j.o,{children:e.firstname})]})]}),Object(a.jsxs)(j.p,{row:!0,children:[Object(a.jsx)(j.s,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(a.jsxs)(j.l,{md:10,children:[Object(a.jsx)(j.q,{type:"text",name:"lastname",id:"lastname",placeholder:"Last Name",value:this.state.lastname,valid:""===e.lastname,invalid:""!==e.lastname,onBlur:this.handleBlur("lastname"),onChange:this.handleChangeInput}),Object(a.jsx)(j.o,{children:e.lastname})]})]}),Object(a.jsxs)(j.p,{row:!0,children:[Object(a.jsx)(j.s,{htmlFor:"telnum",md:2,children:"Telephone Number"}),Object(a.jsxs)(j.l,{md:10,children:[Object(a.jsx)(j.q,{type:"tel",name:"telnum",id:"telnum",placeholder:"Telephone Number",value:this.state.telnum,valid:""===e.telnum,invalid:""!==e.telnum,onBlur:this.handleBlur("telnum"),onChange:this.handleChangeInput}),Object(a.jsx)(j.o,{children:e.telnum})]})]}),Object(a.jsxs)(j.p,{row:!0,children:[Object(a.jsx)(j.s,{htmlFor:"email",md:2,children:"Email"}),Object(a.jsxs)(j.l,{md:10,children:[Object(a.jsx)(j.q,{type:"email",name:"email",id:"email",placeholder:"Email",value:this.state.email,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleChangeInput}),Object(a.jsx)(j.o,{children:e.email})]})]}),Object(a.jsxs)(j.p,{row:!0,children:[Object(a.jsx)(j.l,{md:{size:6,offset:2},children:Object(a.jsx)(j.p,{check:!0,children:Object(a.jsxs)(j.s,{check:!0,children:[Object(a.jsx)(j.q,{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleChangeInput}),Object(a.jsx)("strong",{children:"May We Contact You"})]})})}),Object(a.jsx)(j.l,{md:{size:3,offset:1},children:Object(a.jsxs)(j.q,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleChangeInput,children:[Object(a.jsx)("option",{children:"Tel."}),Object(a.jsx)("option",{children:"Email"})]})})]}),Object(a.jsxs)(j.p,{row:!0,children:[Object(a.jsx)(j.s,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(a.jsx)(j.l,{md:10,children:Object(a.jsx)(j.q,{type:"textarea",id:"message",name:"message",placeholder:"Your Message",rows:"12",value:this.state.message,onChange:this.handleChangeInput})})]}),Object(a.jsx)(j.p,{row:!0,children:Object(a.jsx)(j.l,{md:{size:10,offset:2},children:Object(a.jsx)(j.c,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(n.Component);function y(e){return e.leaders.map((function(e){return Object(a.jsx)("div",{className:"mt-5",children:Object(a.jsxs)(j.t,{tag:"li",children:[Object(a.jsx)(j.t,{left:!0,middle:!0,className:"mr-5",children:Object(a.jsx)(j.t,{object:!0,src:e.image})}),Object(a.jsxs)(j.t,{body:!0,children:[Object(a.jsx)(j.t,{heading:!0,children:e.name}),Object(a.jsx)("p",{children:e.designation}),Object(a.jsx)("p",{children:e.description})]})]})},e.id)}))}var w=function(e){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(j.b,{children:Object(a.jsx)(m.b,{to:"/home",children:"Home"})}),Object(a.jsx)(j.b,{active:!0,children:"About Us"})]}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h3",{children:"About Us"}),Object(a.jsx)("hr",{})]})]}),Object(a.jsxs)("div",{className:"row row-content",children:[Object(a.jsxs)("div",{className:"col-12 col-md-6",children:[Object(a.jsx)("h2",{children:"Our History"}),Object(a.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(a.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(a.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(a.jsx)("div",{className:"col-12 col-md-5",children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(a.jsx)(j.e,{children:Object(a.jsxs)("dl",{className:"row p-1",children:[Object(a.jsx)("dt",{className:"col-6",children:"Started"}),Object(a.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(a.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(a.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(a.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(a.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(a.jsx)("dt",{className:"col-6",children:"Employees"}),Object(a.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)(j.d,{children:Object(a.jsx)(j.e,{className:"bg-faded",children:Object(a.jsxs)("blockquote",{className:"blockquote",children:[Object(a.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(a.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(a.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(a.jsxs)("div",{className:"row row-content",children:[Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("h2",{children:"Corporate Leadership"})}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)(j.t,{list:!0,children:Object(a.jsx)(y,{leaders:e.leaders})})})]})]})};function k(e){var t=e.item;return Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.g,{src:t.image}),Object(a.jsxs)(j.e,{children:[Object(a.jsx)(j.k,{children:t.name}),t.designation?Object(a.jsx)(j.i,{children:t.designation}):null,Object(a.jsx)(j.j,{children:t.description})]})]})}function I(e){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row align-items-start",children:[Object(a.jsx)("div",{className:"col-12 col-md m-5",children:Object(a.jsx)(k,{item:e.dish})}),Object(a.jsx)("div",{className:"col-12 col-md m-5",children:Object(a.jsx)(k,{item:e.promotion})}),Object(a.jsx)("div",{className:"col-12 col-md m-5",children:Object(a.jsx)(k,{item:e.leader})})]})})}function C(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row justify-content-center",children:[Object(a.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(a.jsx)("h5",{children:"Links"}),Object(a.jsxs)("ul",{className:"list-unstyled",children:[Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/about-us",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/menu",children:"Menu"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/contact-us",children:"Contact"})})]})]}),Object(a.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(a.jsx)("h5",{children:"Our Address"}),Object(a.jsxs)("address",{children:["121, Clear Water Bay Road",Object(a.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(a.jsx)("br",{}),"HONG KONG",Object(a.jsx)("br",{}),Object(a.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(a.jsx)("br",{}),Object(a.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(a.jsx)("br",{}),Object(a.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(a.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(a.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(a.jsx)("i",{className:"fa fa-google-plus"})}),Object(a.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(a.jsx)("i",{className:"fa fa-facebook"})}),Object(a.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(a.jsx)("i",{className:"fa fa-linkedin"})}),Object(a.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(a.jsx)("i",{className:"fa fa-twitter"})}),Object(a.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(a.jsx)("i",{className:"fa fa-youtube"})}),Object(a.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(a.jsx)("i",{className:"fa fa-envelope-o"})})]})})]})})})}var F=[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],T=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],M=[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],S=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],A=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={dishes:F,promotions:M,leaders:T,comments:S,selectedDish:null},a}return Object(o.a)(s,[{key:"onSelectDish",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{}),Object(a.jsxs)(m.f,{children:[Object(a.jsx)(m.e,{path:"/home",component:function(){return Object(a.jsx)(I,{dish:e.state.dishes.filter((function(e){return e.featured}))[0],promotion:e.state.promotions.filter((function(e){return e.featured}))[0],leader:e.state.leaders.filter((function(e){return e.featured}))[0]})}}),Object(a.jsx)(m.e,{path:"/about-us",component:function(){return Object(a.jsx)(w,{leaders:e.state.leaders})}}),Object(a.jsx)(m.e,{exact:!0,path:"/menu",component:function(){return Object(a.jsx)(O,{dishes:e.state.dishes})}}),Object(a.jsx)(m.e,{path:"/menu/:dishID",component:function(t){var s=t.match;return Object(a.jsx)(g,{dish:e.state.dishes.filter((function(e){return e.id===parseInt(s.params.dishID,10)}))[0],comments:e.state.comments.filter((function(e){return e.dishId===parseInt(s.params.dishID,10)}))})}}),Object(a.jsx)(m.e,{exact:!0,path:"/contact-us",component:N}),Object(a.jsx)(m.d,{to:"/home"})]}),Object(a.jsx)(C,{})]})}}]),s}(n.Component),B=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(a.jsx)(m.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(A,{})})})}}]),s}(n.Component),P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.553aa4f4.chunk.js.map