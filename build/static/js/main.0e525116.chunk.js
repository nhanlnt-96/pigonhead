(this.webpackJsonppigeonhead=this.webpackJsonppigeonhead||[]).push([[0],{316:function(e,t,n){},335:function(e,t){},358:function(e,t){},360:function(e,t){},437:function(e,t){},439:function(e,t){},472:function(e,t){},477:function(e,t){},479:function(e,t){},486:function(e,t){},499:function(e,t){},522:function(e,t){},531:function(e,t){},533:function(e,t){},609:function(e,t,n){},610:function(e,t,n){},611:function(e,t,n){},618:function(e,t,n){},636:function(e,t,n){},637:function(e,t,n){},638:function(e,t,n){},639:function(e,t,n){},643:function(e,t,n){},644:function(e,t,n){},646:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(51),i=n.n(c),r=n(27),s=n(713),l=n(714),d=n(680),h=n(681),u=n(703),j=n(2),b=function(e){var t=e.children,n=Object(d.a)({disableHysteresis:!0,threshold:100});return Object(j.jsx)(h.a,{in:n,children:Object(j.jsx)(u.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#home");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})},m=n(693),p=n(88),x=n.n(p),f=n(31),g=n.n(f),O=n(74),w=n(19),y=n(706),v=n(699),N=n(695),k=n(702),C=function(e){var t=e.children,n=Object(d.a)({disableHysteresis:!0,threshold:0});return o.a.cloneElement(t,{elevation:n?4:0})},T=n(704),S=n(707),A=n(708),E=n(694),M=n(698),I=n(709),P=n(701),_=[{label:"About",path:"#about"},{label:"Collection",path:"#collection"},{label:"Roadmap",path:"#roadmap"},{label:"Home",path:"#home"},{label:"Rarity",path:"#rarity"},{label:"FAQ",path:"#faq"},{label:"Team",path:"#team"}];n(316);C.propTypes={children:x.a.element.isRequired};var F,D,L,R,W,z,Y,q,K,H,U,B,G,V,Q,J=function(e){var t=o.a.useState(null),n=Object(w.a)(t,2),a=n[0],c=n[1],i=function(){c(null)};return Object(j.jsx)(C,Object(r.a)(Object(r.a)({},e),{},{children:Object(j.jsx)(T.a,{sx:{backgroundColor:"transparent"},className:"header-comp",children:Object(j.jsx)(y.a,{maxWidth:"xl",children:Object(j.jsxs)(S.a,{disableGutters:!0,children:[Object(j.jsxs)(u.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(j.jsxs)(A.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",className:"header-comp-toggle ".concat(a&&"active"),component:"div",children:[Object(j.jsx)("span",{className:"toggle-line"}),Object(j.jsx)("span",{className:"toggle-line"}),Object(j.jsx)("span",{className:"toggle-line"})]}),Object(j.jsx)(E.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(a),onClose:i,sx:{display:{xs:"block",md:"none",xl:"none"},width:"100%"},children:_.map((function(e,t){return Object(j.jsx)(M.a,{onClick:i,children:Object(j.jsx)(I.a,{sx:{textDecoration:"none",color:"#000"},href:e.path,children:e.label})},t)}))})]}),Object(j.jsx)(u.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},className:"header-comp-menu",children:_.map((function(e,t){return Object(j.jsx)(P.a,{onClick:i,sx:{my:2,display:"block"},href:e.path,className:"header-comp-menu-item",children:e.label},t)}))})]})})})}))},X=function(){var e=new Date("Jan 21, 2022 18:00:00").getTime(),t=Object(a.useState)(0),n=Object(w.a)(t,2),o=(n[0],n[1]),c=Object(a.useState)(0),i=Object(w.a)(c,2),r=(i[0],i[1]),s=Object(a.useState)(0),l=Object(w.a)(s,2),d=(l[0],l[1]),h=Object(a.useState)(0),u=Object(w.a)(h,2),b=(u[0],u[1]);return Object(a.useEffect)((function(){setInterval((function(){var t=(new Date).getTime(),n=e-t,a=Math.floor(n/864e5),c=Math.floor(n%864e5/36e5),i=Math.floor(n%36e5/6e4),s=Math.floor(n%6e4/1e3);o(a),r(c),d(i),b(s),n<0&&(o(0),r(0),d(0),b(0))}),1e3)})),Object(j.jsxs)("div",{className:"countdown-container",children:[Object(j.jsx)("h2",{className:"countdown-title",children:"Countdown to Presale day"}),Object(j.jsx)("div",{className:"coming-soon",children:Object(j.jsx)("h6",{className:"text",children:"COMMING SOON"})})]})},$=n.p+"static/media/bannerImg.29fd572f.png",Z=n(92),ee=n(112),te=n(287),ne={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(r.a)(Object(r.a)({},ne),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(r.a)(Object(r.a)({},ne),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(r.a)(Object(r.a)({},e),{},{account:t.payload.account});default:return e}},oe={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(r.a)(Object(r.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(r.a)(Object(r.a)({},oe),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},ie=Object(ee.b)({blockchain:ae,data:ce}),re=[te.a],se=Object(ee.c)(ee.a.apply(void 0,re)),le=Object(ee.d)(ie,se),de=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},he=function(){return function(){var e=Object(O.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,le.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(de("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},ue=n(28),je=n(33),be=(je.a.div(F||(F=Object(ue.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),je.a.div(D||(D=Object(ue.a)(["\n  height: 8px;\n  width: 8px;\n"])))),me=je.a.div(L||(L=Object(ue.a)(["\n  height: 16px;\n  width: 16px;\n"]))),pe=je.a.div(R||(R=Object(ue.a)(["\n  height: 24px;\n  width: 24px;\n"]))),xe=(je.a.div(W||(W=Object(ue.a)(["\n  height: 32px;\n  width: 32px;\n"]))),je.a.div(z||(z=Object(ue.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),fe=je.a.p(Y||(Y=Object(ue.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ge=(je.a.p(q||(q=Object(ue.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),je.a.p(K||(K=Object(ue.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),Oe=(je.a.div(H||(H=Object(ue.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(108)),we=n.n(Oe),ye=n(291),ve=n.n(ye),Ne=function(e){return{type:"CONNECTION_FAILED",payload:e}},ke=function(e){return function(){var t=Object(O.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(he());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ce=je.a.button(U||(U=Object(ue.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #3867d6;\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n\n  :hover {\n    background-color: #45aaf2;\n  }\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Te=je.a.button(B||(B=Object(ue.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: #45aaf2;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n\n  :hover {\n    background-color: #3867d6;\n  }\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Se=je.a.div(G||(G=Object(ue.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Ae=(je.a.img(V||(V=Object(ue.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),je.a.a(Q||(Q=Object(ue.a)(["\n  color: #ffffff;\n  text-decoration: none;\n"])))),Ee=(n(609),function(){var e,t,n=Object(a.useState)(!1),o=Object(w.a)(n,2),c=(o[0],o[1],Object(a.useState)(!1)),i=Object(w.a)(c,2),r=i[0],s=i[1],l=Object(Z.b)(),d=Object(Z.c)((function(e){return e.blockchain})),h=Object(Z.c)((function(e){return e.data})),b=Object(a.useState)(!1),m=Object(w.a)(b,2),p=m[0],x=m[1],f=Object(a.useState)("Click buy to mint your NFT."),C=Object(w.a)(f,2),T=C[0],S=C[1],A=Object(a.useState)(1),E=Object(w.a)(A,2),M=E[0],I=E[1],P=Object(a.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),_=Object(w.a)(P,2),F=_[0],D=_[1],L=function(){""!==d.account&&null!==d.smartContract&&l(he(d.account))},R=function(){var e=Object(O.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,D(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){R()}),[]),Object(a.useEffect)((function(){L()}),[d.account]),Object(a.useEffect)((function(){d.errorMsg&&(s(!0),setTimeout((function(){s(!1)}),2e3))}),[d.errorMsg]),Object(j.jsxs)(y.a,{className:"banner-comp comp-height",maxWidth:!0,children:[Object(j.jsx)(J,{}),Object(j.jsxs)(y.a,{className:"banner-comp-container",children:[Object(j.jsx)(v.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:r,onClose:!r,autoHideDuration:2e3,children:Object(j.jsx)(N.a,{severity:"error",children:d.errorMsg})}),Object(j.jsx)(k.a,{container:!0,spacing:5,className:"banner-comp-content",children:Object(j.jsxs)(k.a,{item:!0,className:"banner-comp-content-right",children:[Object(j.jsx)(u.a,{className:"img-header",children:Object(j.jsx)("img",{src:$,alt:"pigeonheader"})}),Object(j.jsx)(u.a,{"data-aos":"zoom-in",className:"countdown-section",children:Object(j.jsx)(X,{})}),Object(j.jsx)(u.a,{className:"content-right-bottom",children:d.account?Object(j.jsx)(Se,{"data-aos":"zoom-in",flex:1,test:!0,children:Object(j.jsxs)(xe,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"rgba(36, 44, 49, .5)",padding:24,borderRadius:15},children:[Object(j.jsxs)(fe,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[h.totalSupply," / ",F.MAX_SUPPLY]}),Object(j.jsx)(ge,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(j.jsx)(Ae,{target:"_blank",href:F.SCAN_LINK,children:(e=F.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(j.jsx)(me,{}),Number(h.totalSupply)>=F.MAX_SUPPLY?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(fe,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(j.jsxs)(ge,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",F.NFT_NAME," on"]}),Object(j.jsx)(me,{}),Object(j.jsx)(Ae,{target:"_blank",href:F.MARKETPLACE_LINK,children:F.MARKETPLACE})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(fe,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",F.SYMBOL," costs ",F.DISPLAY_COST," ",F.NETWORK.SYMBOL,"."]}),Object(j.jsx)(be,{}),Object(j.jsx)(ge,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(j.jsx)(me,{}),""===d.account||null===d.smartContract?Object(j.jsxs)(xe,{ai:"center",jc:"center",children:[Object(j.jsxs)(ge,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",F.NETWORK.NAME," network"]}),""!==d.errorMsg?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(me,{}),Object(j.jsx)(ge,{style:{textAlign:"center",color:"var(--accent-text)"},children:d.errorMsg})]}):null]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ge,{style:{textAlign:"center",color:"var(--accent-text)"},children:T}),Object(j.jsx)(pe,{}),Object(j.jsxs)(xe,{ai:"center",jc:"center",fd:"row",children:[Object(j.jsx)(Te,{style:{lineHeight:.4},disabled:p?1:0,onClick:function(e){e.preventDefault(),function(){var e=M-1;e<1&&(e=1),I(e)}()},children:"-"}),Object(j.jsx)(pe,{}),Object(j.jsx)(ge,{style:{textAlign:"center",color:"var(--accent-text)"},children:M}),Object(j.jsx)(pe,{}),Object(j.jsx)(Te,{disabled:p?1:0,onClick:function(e){e.preventDefault(),function(){var e=M+1;e>10&&(e=10),I(e)}()},children:"+"})]}),Object(j.jsx)(me,{}),Object(j.jsx)(xe,{ai:"center",jc:"center",fd:"row",children:Object(j.jsx)(Ce,{disabled:p?1:0,onClick:function(e){e.preventDefault(),function(){var e=F.WEI_COST,t=F.GAS_LIMIT,n=String(e*M),a=String(t*M);console.log("Cost: ",n),console.log("Gas limit: ",a),S("Minting your ".concat(F.NFT_NAME,"...")),x(!0),d.smartContract.methods.mint(M).send({gasLimit:String(a),to:F.CONTRACT_ADDRESS,from:d.account,value:n}).once("error",(function(e){console.log(e),S("Sorry, something went wrong please try again later."),x(!1)})).then((function(e){console.log(e),S("WOW, the ".concat(F.NFT_NAME," is yours! go visit Opensea.io to view it.")),x(!1),l(he(d.account))}))}(),L()},children:p?"BUSY":"BUY"})})]})]})]})}):Object(j.jsx)("div",{className:"button-footer",children:Object(j.jsx)("a",{"data-aos":"zoom-in",className:"button-item",onClick:function(e){e.preventDefault(),l(function(){var e=Object(O.a)(g.a.mark((function e(t){var n,a,o,c,i,r,s,l,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=e.sent,e.next=12,o.json();case 12:if(c=e.sent,i=window,!(r=i.ethereum)||!r.isMetaMask){e.next=33;break}return we.a.setProvider(r),s=new ve.a(r),e.prev=18,e.next=21,r.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,r.request({method:"net_version"});case 24:e.sent==c.NETWORK.ID?(d=new we.a(a,c.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),r.on("accountsChanged",(function(e){t(ke(e[0]))})),r.on("chainChanged",(function(){window.location.reload()}))):t(Ne("Change network to ".concat(c.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(Ne("Something went wrong."));case 31:e.next=34;break;case 33:t(Ne("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),L()},children:Object(j.jsx)("span",{className:"btn-name",children:"Mint Now"})})})})]})})]})]})}),Me=n.p+"static/media/pigeonheadeSkateboard.287682d4.png",Ie=(n(610),function(){return Object(j.jsx)(y.a,{className:"about-comp comp-height",maxWidth:!0,children:Object(j.jsx)(y.a,{className:"about-comp-container",children:Object(j.jsxs)(k.a,{container:!0,className:"about-comp-content",spacing:5,children:[Object(j.jsx)(k.a,{lg:4,md:4,sm:12,className:"about-comp-left",item:!0,children:Object(j.jsx)("img",{"data-aos":"zoom-in",src:Me,alt:"pigeonhead"})}),Object(j.jsxs)(k.a,{lg:8,md:8,sm:12,className:"about-comp-right",item:!0,children:[Object(j.jsx)("div",{"data-aos":"fade-down",className:"title-container",children:Object(j.jsx)("h2",{className:"title",children:"Welcome to the Pigeonhead Flock"})}),Object(j.jsxs)("div",{className:"content-container",children:[Object(j.jsx)("p",{"data-aos":"fade-left",className:"content",children:"The flock consists of 9,900 unique Pigeonheads cooing their way into the Ethereum blockchain. Emerging from the streets of New York City, Pigeonheads will grant you exclusive access to our online community and make you eligible for some exciting rewards along the way. Our goal is to create the most stylish NFT collection possible that will make you stand out in the Metaverse."}),Object(j.jsx)("p",{"data-aos":"fade-right",className:"content",children:"Once the flock has sold out, new items will be given away weekly to select token holders, which can be used to create a new look for your NFT or resell on Opensea. Fashion events will be held in New York, LA and Miami with more cities to come. All airdrops will be limited and there will be no re-releases."})]})]})]})})})}),Pe=(n(611),function(e){var t=e.title;return Object(j.jsx)(y.a,{className:"title-comp",maxWidth:!0,children:Object(j.jsx)(y.a,{className:"title-comp-container",children:Object(j.jsx)(u.a,{"data-aos":"zoom-in",className:"title-box-container",children:Object(j.jsx)("h6",{className:"title",children:t})})})})}),_e=n(62),Fe=(n(617),n(690)),De=(n(618),function(){return Object(j.jsx)(y.a,{className:"roadmap-comp comp-height",maxWidth:!0,children:Object(j.jsxs)(y.a,{className:"roadmap-comp-container",children:[Object(j.jsx)(Pe,{title:"ROADMAP"}),Object(j.jsxs)(_e.VerticalTimeline,{className:"roadmap-comp-content",children:[Object(j.jsxs)(_e.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#45aaf2",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #45aaf2"},iconStyle:{backgroundColor:"#45aaf2",color:"#fff"},children:[Object(j.jsx)("h3",{className:"vertical-timeline-element-title",children:"10% Website Launch and Ready to Hatch"}),Object(j.jsx)("p",{children:"- One lucky winner will receive 1 Ethereum, along with a new accessory to create a unique look to their existing Pigeonhead."}),Object(j.jsx)("p",{children:"- An additional 5 token holders will also receive a new or different accessory airdropped to them to add to their collection."})]}),Object(j.jsxs)(_e.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#45aaf2",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #45aaf2"},iconStyle:{backgroundColor:"#45aaf2",color:"#fff"},children:[Object(j.jsx)("h3",{className:"vertical-timeline-element-title",children:"25% Pre-Launch Giveaways"}),Object(j.jsx)("p",{children:"- Keep up with the flock in the Discord channel and the Pigeonheads with the most engagement will be eligible to receive 2 Ethereum rewards."}),Object(j.jsx)("p",{children:"- 5 new item will also drop to 5 lucky token holders to accessorize their look."}),Object(j.jsx)("p",{children:"- We will announce at least 20 giveaways, with winners selected from participants in our Discord and Twitter channels. The winners will be rewarded with their own Pigeonhead NFT on the Launch day."})]}),Object(j.jsxs)(_e.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#45aaf2",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #45aaf2"},iconStyle:{backgroundColor:"#45aaf2",color:"#fff"},children:[Object(j.jsx)("h3",{className:"vertical-timeline-element-title",children:"50% Lets show some appreciation"}),Object(j.jsxs)("p",{children:["To celebrate our halfway mark, and show our appreciation, we will be making a $20,000 charity donation to ",Object(j.jsx)("i",{style:{fontStyle:"italic"},children:"Its from the Sole"}),", a non-for-profit organization focused on collecting, refurbishing and giving away shoes to the homeless in New York City and other metropolitan areas, as well as a $20,000 donation to ",Object(j.jsx)("i",{style:{fontStyle:"italic"},children:"InspiraBag"}),", a community driven organization focused on the vitality of educational preparedness for all children."]})]}),Object(j.jsxs)(_e.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#45aaf2",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #45aaf2"},iconStyle:{backgroundColor:"#45aaf2",color:"#fff"},children:[Object(j.jsx)("h3",{className:"vertical-timeline-element-title",children:"75% One-of-one Merchandise"}),Object(j.jsx)("p",{children:"- Our merchandise store will be opened to the Pigeonhead community, where you\u2019ll be able to purchase your own NFT design on hoodies, hats and other items. A portion of the sales will go to the community wallet."}),Object(j.jsx)("p",{children:"- Community wallet launch."}),Object(j.jsx)("p",{children:"- Round trip for two to New York City and sneaker shopping spree at Stadium Goods for holders that own 5 pigeons or more."})]}),Object(j.jsxs)(_e.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#45aaf2",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #45aaf2"},iconStyle:{backgroundColor:"#45aaf2",color:"#fff"},children:[Object(j.jsx)("h3",{className:"vertical-timeline-element-title",children:"100% We\u2019ve arrived!"}),Object(j.jsx)("p",{children:"Pigeonhead Collection launches with limited drops each week."}),Object(j.jsx)("p",{children:"- We will be releasing new items weekly to add to your Pigeonhead closet for you to flex or resell it on Opensea."}),Object(j.jsx)("p",{children:"- Our giveaways intensify with the first cold wallet drop in New York City, including one-of-a-kind items, up to 5 Ethereum and much more."}),Object(j.jsx)("p",{children:"- Geodrops are unlocked. Murals with embedded AR will be unveiled in New York, LA and Miami, which will be auctioned as NFTs."}),Object(j.jsx)("p",{children:"- Join us on Discord, Twitter and Instagram!"})]}),Object(j.jsx)(_e.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:Object(j.jsx)(Fe.a,{})})]})]})})}),Le=[n.p+"static/media/sliderImg1.57fb3b5a.jpeg",n.p+"static/media/sliderImg2.5e811ea4.jpeg",n.p+"static/media/sliderImg3.f283783c.jpeg",n.p+"static/media/sliderImg4.dd38956e.jpeg",n.p+"static/media/sliderImg5.bedf0209.jpeg",n.p+"static/media/sliderImg6.dd38956e.jpeg",n.p+"static/media/sliderImg7.f283783c.jpeg",n.p+"static/media/sliderImg8.b6bf64d9.jpeg",n.p+"static/media/sliderImg9.2c0f3dd8.jpeg",n.p+"static/media/sliderImg10.76f83b28.jpeg",n.p+"static/media/sliderImg11.d37c554b.jpeg",n.p+"static/media/sliderImg12.45458fa1.jpeg",n.p+"static/media/sliderImg13.bedf0209.jpeg"],Re=n(292),We=n.n(Re),ze=(n(634),n(635),n(636),function(e){var t=e.slideImages,n={infinite:!0,slidesToShow:function(){var e=Object(a.useState)(0),t=Object(w.a)(e,2),n=t[0],o=t[1];return Object(a.useLayoutEffect)((function(){var e=function(){o(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}()<768?3:6,autoplay:!0,speed:2e3,autoplaySpeed:200,cssEase:"linear",pauseOnHover:!1};return Object(j.jsx)(y.a,{className:"slideshow-comp",maxWidth:!0,children:Object(j.jsx)(We.a,Object(r.a)(Object(r.a)({},n),{},{children:t.map((function(e,t){return Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:e,alt:"pigeonheade",style:{width:"100%"}})},t)}))}))})}),Ye=(n(637),function(){return Object(j.jsx)(y.a,{className:"collection-comp comp-height",maxWidth:!0,children:Object(j.jsxs)(y.a,{className:"collection-comp-container",children:[Object(j.jsx)(Pe,{title:"COLLECTION"}),Object(j.jsx)("div",{children:Object(j.jsx)(ze,{slideImages:Le})}),Object(j.jsx)("div",{style:{margin:"10px 0"},className:"custom-slide",children:Object(j.jsx)(ze,{slideImages:Le})}),Object(j.jsx)("div",{children:Object(j.jsx)(ze,{slideImages:Le})})]})})}),qe=n(697),Ke=n(711),He=n(712),Ue=n(710),Be=(n(638),[{question:"Why buy a Pigeonhead?",answer:["Pigeonhead is the first NFT collection that will let you collect, earn or trade outfits for your NFT. By purchasing a Pigeonhead, you will be a part of our NFT community granting you access to events in cities around the world starting with NYC, LA, & Miami. You will be able to flex your new items on your original NFT or re-selling it on Opensea. These new tokens are part of your flock. All airdrops will be limited with no re-releases."]},{question:"Why does a Pigeonhead have value?",answer:["We believe Pigeonheads have a long life ahead of them with a closet full of unique streetstyle looks. You can be one of 10,000 token holders with access to a Metaverse NFT game, where you will be able to add new outfits to your NFT. Why should your NFT have one look when have a closet full of outfit that represents you? Different rarity will be assigned to item drops thus increasing the value of your NFT."]},{question:"Where can I view my Pigeonhead and wardrobe?",answer:["Once you have minted a Pigeonhead NFT, you will be able to see it by connecting your crypto wallet to OpenSea. Our merchandise store will also be available to showcase your NFT on a hoodie or beanie of your choice."]},{question:"When can I mint a Pigeonhead?",answer:["The public launch will be held on February 21st, 2022, with a pre-sale launching on February 18th at 9AM EST. The pre-sale will be exclusive to our Whitelist members. Please join our Discord to learn how you can join the Whitelist! The Whitelist spots will be very limited. Price Starts at 0.03 ETH + gas fees."]},{question:"What can I do with my NFT?",answer:["You can use your Pigeonhead as a profile picture online, have exclusive merchandise made with your NFT or gain access to exclusive events and rewards. You are free to do anything you want with your NFT under a non-exclusive license. Pigeonheads adhere to the ERC-721 standards, so you can trade them on platforms like Opensea."]},{question:"What is MetaMask?",answer:["MetaMask is a crypto-wallet that can store your Ethereum and is needed to purchase and mint a Pigeonhead. Having a wallet gives you an Ethereum address (e.g. 0xzPOP...663), where your NFT will reside. Learn more about MetaMask and how easy it is to use over here! (https://metamask.io)."]},{question:"How to mint with MetaMask?",answer:['If you are using a mobile phone to mint your Pigeonhead, you need to use the MetaMask application built-in browser to mint our NFTs. Therefore, please launch the MetaMask application, click the 3 lines on the top left menu in the application and select "Browser". It will open a web browser and you will be able to navigate back to Pigeonheads.com to do the minting.',"If you are using a computer to mint your Pigeonhead, you just need to connect the MetaMask plugin with our website, verify you have enough ETH to do the transaction. Then you will be able to click on the Mint button to buy as many Pigeonheads as you want."]}]),Ge=function(){return Object(j.jsx)(y.a,{className:"faq-comp comp-height",maxWidth:!0,children:Object(j.jsxs)(y.a,{className:"faq-comp-container",children:[Object(j.jsx)(Pe,{title:"FAQ"}),Be.map((function(e,t){return Object(j.jsxs)(qe.a,{children:[Object(j.jsx)(Ke.a,{expandIcon:Object(j.jsxs)("div",{className:"accordion-toggle",children:[Object(j.jsx)("span",{className:"accordion-toggle-line"}),Object(j.jsx)("span",{className:"accordion-toggle-line"})]}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(j.jsx)(Ue.a,{sx:{fontWeight:"bold"},children:e.question})}),Object(j.jsx)(He.a,{children:e.answer.map((function(e,t){return Object(j.jsx)(Ue.a,{children:e},t)}))})]},t)}))]})})},Ve=[{name:"Berto",position:"Artist/Creative Director",ava:n.p+"static/media/Img1.52ab9221.jpeg"},{name:"Andie",position:"Marketing Director",ava:n.p+"static/media/Img2.239cbc66.jpg"},{name:"Natalia",position:"Developer",ava:n.p+"static/media/Img3.218244b5.jpg"}],Qe=(n(639),n(691)),Je=function(){return Object(j.jsx)(y.a,{className:"team-comp comp-height",maxWidth:!0,children:Object(j.jsxs)(y.a,{className:"team-comp-container",children:[Object(j.jsx)(Pe,{title:"TEAM"}),Object(j.jsx)("div",{className:"team-comp-content",children:Ve.map((function(e,t){return Object(j.jsxs)("div",{"data-aos":"zoom-in",className:"team-item",children:[Object(j.jsx)("div",{className:"team-ava",children:Object(j.jsx)("img",{src:e.ava,alt:"pigeonhead-team"})}),Object(j.jsxs)("div",{className:"team-info",children:[Object(j.jsx)("div",{className:"team-name",children:Object(j.jsx)("p",{children:e.name})}),Object(j.jsx)("div",{className:"team-position",children:Object(j.jsx)("p",{children:e.position})})]})]},t)}))}),Object(j.jsxs)("div",{className:"social-container",children:[Object(j.jsx)("a",{href:"https://instagram.com/pigeonheadsnft",className:"social-item",target:"_blank",children:Object(j.jsx)(Qe.b,{})}),Object(j.jsx)("a",{href:"https://twitter.com/pigeonheadsnft",className:"social-item",target:"_blank",children:Object(j.jsx)(Qe.c,{})}),Object(j.jsx)("a",{href:"https://discord.gg/RvPaQ7Fs",className:"social-item",target:"_blank",children:Object(j.jsx)(Qe.a,{})})]})]})})};b.propTypes={children:x.a.element.isRequired};var Xe=function(e){return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)(s.a,{}),Object(j.jsx)("div",{id:"home",children:Object(j.jsx)(Ee,{})}),Object(j.jsx)("div",{id:"about",children:Object(j.jsx)(Ie,{})}),Object(j.jsx)("div",{id:"collection",children:Object(j.jsx)(Ye,{})}),Object(j.jsx)("div",{id:"roadmap",children:Object(j.jsx)(De,{})}),Object(j.jsx)("div",{id:"team",children:Object(j.jsx)(Je,{})}),Object(j.jsx)("div",{id:"faq",children:Object(j.jsx)(Ge,{})}),Object(j.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{children:Object(j.jsx)(l.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(j.jsx)(m.a,{})})}))]})};n(643);var $e=function(){return Object(j.jsx)(Xe,{})},Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,715)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))},et=(n(644),n(293)),tt=n.n(et);n(645);tt.a.init(),i.a.render(Object(j.jsx)(Z.a,{store:le,children:Object(j.jsx)($e,{})}),document.getElementById("root")),Ze()}},[[646,1,2]]]);
//# sourceMappingURL=main.0e525116.chunk.js.map