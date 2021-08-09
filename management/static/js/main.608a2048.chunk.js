(this["webpackJsonpenactive-management-ui"]=this["webpackJsonpenactive-management-ui"]||[]).push([[0],{378:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(56),c=n.n(r),s=n(442),o=n(443),l=n(68),u=n(11),d=n(5),j=n(476),h=n(467),b=n(462),p=n(27),x=n(481),v=n(482),m=n(457),f=n(466),O=n(483),g=n(441),y=n(202),w=n.n(y),S=n(22);function C(e,t,n){var i=a.a.useState(n),r=Object(u.a)(i,2),c=r[0],s=r[1],o=a.a.useCallback(e,t);return a.a.useEffect((function(){var e=o();if(void 0!==e){var t=e.subscribe(s);return function(){return t.unsubscribe()}}}),[o]),[c]}var k=n(17),$=n.n(k),E=n(25),I=n(18),T=n(19),R=n(187),F=n.n(R),M=n(445),q=function(){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.a.create({baseURL:"".concat(null!==(t=new URLSearchParams(window.location.search.slice(1)).get("_devHost"))&&void 0!==t?t:"https://api.".concat(window.location.hostname.replace("www.","")),"/api/v1/"),withCredentials:!0});Object(I.a)(this,e),this.axios=n,this.account$$=new M.a(void 0),this.sites$$=new M.a(void 0),this.tours$$=new M.a(void 0),this.account$=this.account$$.asObservable(),this.sites$=this.sites$$.asObservable(),this.tours$=this.tours$$.asObservable()}return Object(T.a)(e,[{key:"init",value:function(){var e=Object(E.a)($.a.mark((function e(){var t,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.account$$.value,e.next=3,this.getMe().catch((function(){return null}));case 3:if(n=e.sent,(null===t||void 0===t?void 0:t.id)===(null===n||void 0===n?void 0:n.id)){e.next=11;break}if(null!==n){e.next=9;break}this.sites$$.next(void 0),e.next=11;break;case 9:return e.next=11,this.loadSites();case 11:this.account$$.next(n);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMe",value:function(){var e=Object(E.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.get("management/me");case 2:return e.abrupt("return",e.sent.data.account);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signUp",value:function(){var e=Object(E.a)($.a.mark((function e(t){var n,i;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={account:{email:t,id:""}},e.next=3,this.axios.post("management/signup",n);case 3:return i=e.sent,this.account$$.next(i.data.account),e.abrupt("return",i.data.account);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(E.a)($.a.mark((function e(t,n){var i;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.post("management/login",{code:n,id:t});case 2:return i=e.sent,this.account$$.next(i.data.account),e.next=6,this.loadSites();case 6:return e.abrupt("return",i.data.account);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(E.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.post("management/logout");case 2:this.tours$$.next(void 0),this.sites$$.next(void 0),this.account$$.next(void 0),window.location.reload();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateSite",value:function(){var e=Object(E.a)($.a.mark((function e(t,n){var i,a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.put("management/sites/".concat(t),n);case 2:return a=e.sent,this.sites$$.next(null===(i=this.sites$$.value)||void 0===i?void 0:i.map((function(e){return e.id===t?a.data.site:e}))),e.abrupt("return",a.data.site);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"loadTours",value:function(){var e=Object(E.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.get("management/sites/".concat(t,"/tours"));case 2:return n=e.sent,this.tours$$.next(n.data.tours),e.abrupt("return",n.data.tours);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createTour",value:function(){var e=Object(E.a)($.a.mark((function e(t,n){var i,a,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.post("management/sites/".concat(t,"/tours"),n);case 2:return i=e.sent,a=i.data.tour,r=this.tours$$.value,this.tours$$.next(void 0===r?[a]:r.concat([a])),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateTour",value:function(){var e=Object(E.a)($.a.mark((function e(t,n,i){var a,r,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.put("management/sites/".concat(t,"/tours/").concat(n),i);case 2:return a=e.sent,r=a.data.tour,c=this.tours$$.value,this.tours$$.next(void 0===c?[r]:c.map((function(e){return e.id===r.id?r:e}))),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,i){return e.apply(this,arguments)}}()},{key:"loadSites",value:function(){var e=Object(E.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.axios.get("management/sites");case 2:return t=e.sent,this.sites$$.next(t.data.sites),e.abrupt("return",t.data.sites);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),P=n(14),z=n(444),A=n(458),N=n(425),D=n(451),W=n(449),U=n(1),V=function(e){var t=e.account,n=e.buttonProps,i=e.onSignOut,r=a.a.useRef(null),c=a.a.useState(!1),s=Object(u.a)(c,2),o=s[0],l=s[1];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(m.a,Object(P.a)(Object(P.a)({color:"inherit"},n),{},{onClick:function(e){var t;l(!0),null===n||void 0===n||null===(t=n.onClick)||void 0===t||t.call(n,e)},ref:r,children:t.email})),Object(U.jsx)(z.a,{anchorEl:r.current,disablePortal:!0,open:o,children:Object(U.jsx)(A.a,{children:Object(U.jsx)(N.a,{onClickAway:function(){return l(!1)},children:Object(U.jsx)(D.a,{children:Object(U.jsx)(W.a,{children:Object(U.jsx)(m.a,{onClick:function(){return i()},children:"Sign Out"})})})})})})]})},L=n(36),H=n(21),G=n(50),X=n(52);X.addMethod(X.string,"validRegex",(function(){return this.test("test-valid-regex",(function(e){if(void 0===e)return!0;var t=this.path,n=this.createError;try{return new RegExp(e),!0}catch(i){return n({message:i.message,path:t})}}))})),X.addMethod(X.string,"validCssSelector",(function(){return this.test("test-valid-css-selector",(function(e){if(void 0===e||""===e)return!0;var t=this.path,n=this.createError;try{return document.querySelector(e),!0}catch(i){return n({message:"Invalid CSS selector",path:t})}}))})),X.addMethod(X.string,"validXpathSelector",(function(){return this.test("test-valid-xpath-selector",(function(e){if(void 0===e||""===e)return!0;var t=this.path,n=this.createError;try{return document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null),!0}catch(i){return n({message:"Invalid XPath selector",path:t})}}))})),X.addMethod(X.string,"validNonEmptyHtml",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.empty,n=void 0===t?"Please enter some text":t,i=e.invalid,a=void 0===i?function(e){return"Invalid HTML".concat(void 0!==e?": ".concat(e.message):"")}:i;return this.test("test-valid-non-empty-html",(function(e){var t=this.path,i=this.createError;if(void 0===e)return i({message:n,path:t});try{var r,c,s;return""!==(null!==(r=null===(c=(new DOMParser).parseFromString(e,"text/html"))||void 0===c||null===(s=c.body.textContent)||void 0===s?void 0:s.trim())&&void 0!==r?r:"")||i({message:n,path:t})}catch(o){return i({message:a(o instanceof Error?o:void 0),path:t})}}))}));var B=X,J=function(e){var t=e.disabled,n=void 0!==t&&t,r=e.key,c=Object(L.a)(e,["disabled","key"]),s=a.a.useMemo((function(){return void 0!==r||n?void 0===r?"disabled":n?"".concat(r,"-disabled"):r:void 0}),[n,r]);return Object(i.createElement)(m.a,Object(P.a)(Object(P.a)({},c),{},{disabled:n,key:s}))},_=n(454),Y=n(463),K=n(464),Q=n(465),Z=n(431),ee=Object(d.a)(_.a)((function(e){return{alignItems:"center",display:"flex",justifyContent:"space-between",marginBottom:e.theme.spacing(4)}})),te=Object(d.a)(Y.a)({padding:"3em"}),ne=Object(d.a)(K.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.grey[50],borderTop:"solid 1px",borderTopColor:t.palette.grey[200],padding:t.spacing(4)}})),ie=function(e){var t=e.actions,n=e.children,i=e.onClose,a=e.onExited,r=e.open,c=e.title,s=e.width,o=void 0===s?"35rem":s;return Object(U.jsxs)(Q.a,{anchor:"right",open:r,onClose:i,SlideProps:{onExited:a},children:[Object(U.jsxs)(ee,{children:[Object(U.jsx)(b.a,{component:"span",variant:"h5",style:{flexGrow:1},children:c}),void 0!==i?Object(U.jsx)(f.a,{onClick:i,children:Object(U.jsx)(Z.a,{})}):void 0]}),Object(U.jsx)(te,{sx:{width:o},children:n}),Object(U.jsx)(ne,{children:t})]})},ae=function(e){var t=e.alignItems,n=void 0===t?"center":t,i=e.col,a=void 0!==i&&i,r=Object(L.a)(e,["alignItems","col"]);return Object(U.jsx)(h.a,Object(P.a)(Object(P.a)({},r),{},{alignItems:n,sx:Object(P.a)(Object(P.a)({},r.sx),{},{display:"flex",flexDirection:a?"column":"row"})}))},re=function(e){var t=e.grow,n=void 0!==t&&t,i=Object(L.a)(e,["grow"]);return Object(U.jsx)(h.a,Object(P.a)(Object(P.a)({},i),{},{sx:Object(P.a)(Object(P.a)({},i.sx),{},{flexGrow:n?1:void 0})}))},ce=B.object().shape({primaryColor:B.string().required().matches(/^#([a-f0-9]{3}|[a-f0-9]{6})$/i,{message:"Please specify a valid hex colour (e.g., #4f4f4f)"}),primaryContrastText:B.string().required().matches(/^#([a-f0-9]{3}|[a-f0-9]{6})$/i,{message:"Please specify a valid hex colour (e.g., #FFF)"})}),se=function(e){var t=e.value,n=Object(L.a)(e,["value"]);return Object(U.jsxs)(ae,{children:[Object(U.jsx)(h.a,{alignSelf:"flex-start",border:"solid 1px #eee",borderRadius:"0.25rem",height:"3rem",mr:1,mt:.5,sx:{backgroundColor:t},width:"3.3rem"}),Object(U.jsx)(H.a,Object(P.a)(Object(P.a)({size:"medium",variant:"outlined"},n),{},{component:G.a}))]})},oe=function(e){var t,n=e.managementService,i=e.onClose,r=e.onExited,c=e.onSave,s=e.open,o=e.site,l=Object(p.a)(),u=a.a.useRef(null);return Object(U.jsx)(ie,{actions:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(J,{onClick:function(){return i()},size:"large",children:"Cancel"}),Object(U.jsx)(J,{onClick:function(){var e;return null===(e=u.current)||void 0===e?void 0:e.submitForm()},size:"large",variant:"contained",children:"Save"})]}),onClose:i,onExited:r,open:s,title:"Edit theme",children:Object(U.jsx)(H.d,{initialValues:null!==(t=o.theme)&&void 0!==t?t:{primaryColor:"#4f4f4f",primaryContrastText:"#fff"},innerRef:u,onSubmit:function(){var e=Object(E.a)($.a.mark((function e(t,i){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setSubmitting(!0),e.next=3,n.updateSite(o.id,{site:Object(P.a)(Object(P.a)({},o),{},{theme:t})});case 3:i.setSubmitting(!1),c(t);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:ce,children:function(e){return Object(U.jsxs)(H.c,{children:[Object(U.jsx)(h.a,{my:2,children:Object(U.jsx)(se,{fullWidth:!0,label:"Primary color",name:"primaryColor",placeholder:l.palette.primary.main,value:e.values.primaryColor})}),Object(U.jsx)(h.a,{my:2,children:Object(U.jsx)(se,{fullWidth:!0,label:"Primary contrast text",name:"primaryContrastText",placeholder:l.palette.primary.contrastText,value:e.values.primaryContrastText})})]})}})})},le=n(468),ue=n(469),de=n(470),je=n(452),he=n(450),be=n(471),pe=n(472),xe=n(448),ve=n(473),me=n(474),fe=n(475),Oe=n(432),ge=n(143),ye=Object(d.a)(h.a)((function(e){var t=e.theme;return{"& button":{right:0,top:0},border:"solid 1px #eaeafa",borderRadius:t.spacing(1),padding:t.spacing(1)}})),we=function(e){var t=e.code,n=e.language,i=Object(L.a)(e,["code","language"]);return Object(U.jsx)(ye,Object(P.a)(Object(P.a)({},i),{},{children:Object(U.jsx)(ge.a,{language:n,text:t,theme:ge.b})}))},Se=Object(d.a)(le.a)({textAlign:"center"}),Ce=function(e){var t=e.children,n=Object(L.a)(e,["children"]);return Object(U.jsx)(le.a,Object(P.a)(Object(P.a)({},n),{},{children:Object(U.jsx)("code",{children:t})}))},ke=Object(d.a)(Ce)({textAlign:"center"}),$e=function(e){var t=e.attrName,n=e.attrType,i=e.children,a=e.defaultValue,r=void 0===a?"":a,c=e.example,s=e.required,o=void 0!==s&&s;return Object(U.jsxs)(ue.a,{children:[Object(U.jsx)(Se,{children:Object(U.jsx)(de.a,{title:o?"Required attribute":"Optional attribute",children:o?Object(U.jsx)(je.a,{badgeContent:"R",color:"error"}):Object(U.jsx)(je.a,{badgeContent:"O",color:"info"})})}),Object(U.jsx)(Ce,{children:t}),Object(U.jsx)(ke,{children:n}),Object(U.jsx)(le.a,{children:r}),Object(U.jsxs)(le.a,{children:[i,void 0!==c?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(b.a,{my:1,variant:"subtitle2",children:"Example:"}),Object(U.jsx)("code",{children:c})]}):void 0]})]})},Ee=function(){var e=Object(S.g)().siteId;return Object(U.jsxs)(h.a,{maxWidth:"md",mx:"auto",my:2,width:"100%",children:[Object(U.jsx)(b.a,{component:"h2",variant:"h5",children:"Installation"}),Object(U.jsx)("p",{children:"To enable Enactive Tours you must place a script into all webpages on which you want tours to run. Usually you will put this in a site template or use Google Tag Manager so it applies to all pages, and then you can control which URL each tour runs on in the tour configuration."}),Object(U.jsx)("p",{children:"In its simplest form, the script looks like this:"}),Object(U.jsx)(we,{code:Ie('\n              |<script \n              |  defer\n              |  enactive.site-id="'.concat(e,'"\n              |><\/script>\n            ')),language:"html",mx:"auto",my:2}),Object(U.jsx)("p",{children:"Please refer to the following examples for various methods of putting Enactive Tours on your site."}),Object(U.jsxs)(he.a,{children:[Object(U.jsx)(be.a,{expandIcon:Object(U.jsx)(Oe.a,{}),children:Object(U.jsx)(b.a,{component:"h2",variant:"h6",children:"JavaScript"})}),Object(U.jsxs)(pe.a,{children:["Copy and paste the following block of HTML and JavaScript code to the end of the ",Object(U.jsx)("code",{children:"<body>"})," tag of your website.",Object(U.jsx)(we,{code:Ie("\n              |<script>\n              |  const script = document.createElement('script');\n              |  script.src = 'https://www.enactive.ac/integration/entrypoint.js';\n              |  script.setAttribute('enactive.site-id', '".concat(e,"');\n              |\n              |  // If there is a user signed in to your website, add their User ID\n              |  script.setAttribute('enactive.context.user.id', '{the user id}');\n              |  document.body.appendChild(script);\n              |<\/script>\n            ")),language:"javascript",mx:"auto",my:2})]})]}),Object(U.jsxs)(he.a,{children:[Object(U.jsx)(be.a,{expandIcon:Object(U.jsx)(Oe.a,{}),children:Object(U.jsx)(b.a,{component:"h2",variant:"h6",children:"HTML"})}),Object(U.jsxs)(pe.a,{children:[Object(U.jsx)(h.a,{mb:1,children:Object(U.jsxs)(xe.a,{severity:"info",children:["The HTML example on its own is only suitable for displaying tours to anonymous users. To improve our ability to remember user preferences, you must add a"," ",Object(U.jsxs)("code",{children:['enactive.context.user.id="',"{the user id}",'"']})," ","attribute to the script tag either in server-side rendering or with JavaScript."]})}),"Copy and paste the following block of HTML code to the end of the"," ",Object(U.jsx)("code",{children:"<body>"})," tag of your website.",Object(U.jsx)(we,{code:Ie('\n              |<script \n              |  defer\n              |  enactive.site-id="'.concat(e,'"\n              |><\/script>\n            ')),language:"html",mx:"auto",my:2})]})]}),Object(U.jsx)(b.a,{component:"h2",mt:4,variant:"h5",children:"Script API"}),Object(U.jsx)("p",{children:"You can specify various metadata attributes on your script tag to control how Enactive works. Please refer to the following list for all metadata attributes that are available."}),Object(U.jsxs)(ve.a,{children:[Object(U.jsx)(me.a,{children:Object(U.jsxs)(ue.a,{children:[Object(U.jsx)(le.a,{}),Object(U.jsx)(le.a,{children:"Attribute"}),Object(U.jsx)(Se,{children:"Type"}),Object(U.jsx)(Se,{children:"Default"}),Object(U.jsx)(le.a,{children:"Description"})]})}),Object(U.jsxs)(fe.a,{children:[Object(U.jsxs)($e,{attrName:"enactive.site-id",attrType:"string",example:'enactive.site-id="'.concat(e,'"'),required:!0,children:["Your Enactive Site ID: ",Object(U.jsx)("code",{children:e})]}),Object(U.jsxs)($e,{attrName:"enactive.enabled",attrType:"boolean",defaultValue:"true",example:'attr.enabled="false"',children:["If set to ",Object(U.jsx)("code",{children:"false"})," then all functionality will be deactivated."]}),Object(U.jsx)($e,{attrName:"enactive.context.user.id",attrType:"string",defaultValue:"{random}",example:'enactive.context.user.id="155987"',children:'Specify a User ID if a user is signed in to your website. This ensures that when a user "dismisses" a tour, they are not shown the tour again when switching devices.'}),Object(U.jsx)($e,{attrName:"enactive.context.user.locale",attrType:"string",defaultValue:"{derived}",example:'enactive.context.user.locale="fr-fr"',children:"Specify a locale if a user is signed in to your website and has their own language preference. If unspecified, a preference is derived from the page language and the user's browser."})]})]})]})};function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.end,i=void 0===n?/\s+$/:n,a=t.start,r=void 0===a?/^\s*\|/g:a;return e.trim().split("\n").map((function(e){return e.replace(r,"").replace(i,"")})).join("\n")}var Te=n(430),Re=Object(d.a)(j.a)({alignItems:"center",display:"flex",flexGrow:1,justifyContent:"center",width:"100%"}),Fe=n(477),Me=B.object().shape({code:B.string().required("A 6-digit code is required").matches(/[0-9]{6}/,{message:"A valid 6-digit code is required"})}),qe=Object(d.a)(h.a)((function(e){return{marginTop:e.theme.spacing(2),textAlign:"right"}})),Pe=function(e){var t=e.account,n=e.managementService,i=e.onCancel,a=e.onSignIn,r=void 0===a?function(){}:a;return Object(U.jsx)(H.d,{initialValues:{code:""},onSubmit:function(){var e=Object(E.a)($.a.mark((function e(i,a){var c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=7;break}return a.setSubmitting(!0),e.next=4,n.login(t.id,i.code);case 4:c=e.sent,a.setSubmitting(!1),r(c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:Me,children:function(e){return Object(U.jsxs)(H.c,{children:[Object(U.jsx)(H.a,{component:G.a,fullWidth:!0,helperText:"Check your email and copy your 6 digit sign-in code into this field.",label:"Sign-in code",name:"code"}),Object(U.jsx)(qe,{children:Object(U.jsxs)(Fe.a,{children:[Object(U.jsx)(J,{onClick:i,size:"large",children:"Cancel"}),Object(U.jsx)(J,{onClick:function(){return e.submitForm()},size:"large",variant:"contained",children:"Sign In"})]})})]})}})},ze=n(433),Ae=B.object().shape({email:B.string().required("Email address is required").email("Invalid email address")}),Ne=Object(d.a)(h.a)((function(e){return{marginTop:e.theme.spacing(2),textAlign:"right"}})),De=function(e){var t=e.managementService,n=e.onSignUp;return Object(U.jsx)(H.d,{initialValues:{email:""},onSubmit:function(){var e=Object(E.a)($.a.mark((function e(i,a){var r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setSubmitting(!0),e.next=3,t.signUp(i.email);case 3:r=e.sent,a.setSubmitting(!1),n(r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:Ae,children:function(e){return Object(U.jsxs)(H.c,{children:[Object(U.jsx)(H.a,{component:G.a,fullWidth:!0,helperText:"We'll send you a sign-in code to this email address.",label:"Email address",name:"email"}),Object(U.jsx)(Ne,{children:Object(U.jsx)(Fe.a,{children:Object(U.jsx)(J,{endIcon:Object(U.jsx)(ze.a,{}),onClick:function(){return e.submitForm()},size:"large",variant:"contained",children:"Next"})})})]})}})},We=function(e){var t=e.managementService,n=e.onSignIn,i=a.a.useState(!1),r=Object(u.a)(i,2),c=r[0],s=r[1],o=a.a.useState(),l=Object(u.a)(o,2),d=l[0],j=l[1],b=C((function(){return t.sites$}),[t]),p=Object(u.a)(b,1)[0];return Object(U.jsxs)(Re,{children:[Object(U.jsx)(Te.a,{direction:c?"right":"left",in:void 0===d,onEntered:function(){s(!0),Ue()},unmountOnExit:!0,children:Object(U.jsx)(h.a,{position:"absolute",width:1/4,children:Object(U.jsx)(De,{managementService:t,onSignUp:j})})}),Object(U.jsx)(Te.a,{direction:void 0===p?"left":"right",in:void 0!==d&&void 0===p,onEntered:function(){return Ue()},onExited:function(){void 0!==d&&void 0!==p&&n()},unmountOnExit:!0,children:Object(U.jsx)(h.a,{position:"absolute",width:1/4,children:Object(U.jsx)(Pe,{account:d,managementService:t,onCancel:function(){return j(void 0)}})})})]})};function Ue(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"input[name]";null===(e=document.querySelector(n))||void 0===e||null===(t=e.focus)||void 0===t||t.call(e)}var Ve=n(479),Le=n(480),He=n(456),Ge=n(440),Xe=n(3),Be=n(461),Je=n(460),_e=n(455),Ye=n(478),Ke=n(434),Qe=n(435),Ze=n(436),et=n(437),tt=n(438),nt=n(439),it=Object(d.a)(h.a)({alignItems:"center",display:"flex",maxWidth:"35em"}),at=Object(d.a)(h.a)((function(e){e.fontSize;var t=e.theme;return{"& svg":{height:t.typography.h1.fontSize,opacity:.3,width:t.typography.h1.fontSize},marginRight:t.spacing(2)}})),rt=Object(d.a)(h.a)({alignSelf:"stretch",display:"flex",flexDirection:"column",flexGrow:1}),ct=Object(d.a)(h.a)((function(e){var t=e.theme;return{flexGrow:1,padding:"".concat(t.spacing(2)," 0")}})),st=Object(d.a)(h.a)({alignItems:"center",display:"flex",justifyContent:"flex-end"}),ot=function(e){var t=e.actionsComponent,n=e.children,i=e.illustrationComponent,a=Object(L.a)(e,["actionsComponent","children","illustrationComponent"]);return Object(U.jsxs)(it,Object(P.a)(Object(P.a)({},a),{},{children:[Object(U.jsx)(at,{children:i}),Object(U.jsxs)(rt,{children:[Object(U.jsx)(ct,{children:n}),void 0!==t?Object(U.jsx)(st,{children:t}):void 0]})]}))},lt=n(459),ut=n(201),dt=n.n(ut),jt=Object(d.a)("div")((function(e){var t=e.theme;return{"& > .quill.error":{border:"solid 1px ".concat(t.palette.error.main)}}})),ht=function(e){var t=e.errorText,n=e.onBlur,i=e.onChange,a=e.value;return Object(U.jsxs)(jt,{children:[Object(U.jsx)(dt.a,{className:void 0!==t?"error":void 0,onBlur:n,onChange:i,value:a}),void 0!==t?Object(U.jsx)(lt.a,{error:!0,children:t}):void 0]})},bt=Object(d.a)(re)((function(e){return{margin:e.theme.spacing(.5)}})),pt=Object(d.a)(be.a)((function(e){return{"& > div.MuiAccordionSummary-content":{marginRight:e.theme.spacing(2),minWidth:0}}})),xt=B.object().shape({type:B.mixed().oneOf(["css","xpath"]).default("css"),value:B.string().when("type",{is:"xpath",otherwise:B.string().validCssSelector(),then:B.string().validXpathSelector()}).default("")}),vt=B.object().shape({html:B.string().required("Message is required").validNonEmptyHtml({empty:"Message requires some text"}),mask:B.boolean().required(),selector:xt.notRequired()}),mt=B.object().shape({match:B.object().shape({regex:B.string().required("URL match expression is required").validRegex()}),name:B.string().required("Name is required"),status:B.mixed().oneOf(["draft","published"]).default("draft"),steps:B.array().of(vt)}),ft=function(e){var t=e.managementService,n=e.onClose,i=void 0===n?function(){}:n,r=e.onExited,c=void 0===r?function(){}:r,s=e.onSave,o=void 0===s?function(){}:s,l=e.open,d=e.siteId,j=e.tour,x=Object(p.a)(),v=a.a.useRef(null),m=a.a.useState((function(){return yt(j)})),O=Object(u.a)(m,2),g=O[0],y=O[1],w=a.a.useState(),S=Object(u.a)(w,2),C=S[0],k=S[1],I=a.a.useState({}),T=Object(u.a)(I,2),R=T[0],F=T[1];function M(e,t){F(Object(Xe.a)({},e.values.steps.length,!0)),t.push(wt())}function q(e){k(e),null!==v.current&&v.current.submitForm()}return a.a.useEffect((function(){y(yt(j)),F({})}),[j]),Object(U.jsx)(ie,{actions:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(J,{onClick:function(){return i()},size:"large",children:"Cancel"}),Object(U.jsx)(J,{onClick:function(){return q("draft")},size:"large",children:""===(null===g||void 0===g?void 0:g.id)||"draft"===(null===g||void 0===g?void 0:g.status)?"Save draft":"Save and unpublish"}),Object(U.jsx)(J,{onClick:function(){return q("published")},size:"large",variant:"contained",children:""===(null===g||void 0===g?void 0:g.id)?"Publish":"draft"===(null===g||void 0===g?void 0:g.status)?"Save and publish":"Save"})]}),onClose:i,onExited:c,open:l,title:""===(null===g||void 0===g?void 0:g.id)?"Create tour":"Edit tour",children:Object(U.jsx)(H.d,{initialValues:g,innerRef:v,onSubmit:function(){var e=Object(E.a)($.a.mark((function e(n,i){var a,r,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setSubmitting(!0),r=Object(P.a)(Object(P.a)({},n),{},{status:null!==(a=null!==C&&void 0!==C?C:null===g||void 0===g?void 0:g.status)&&void 0!==a?a:n.status,steps:n.steps.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{selector:void 0!==e.selector&&""===e.selector.value.trim()?void 0:e.selector})}))}),e.next=4,""===r.id?t.createTour(d,{tour:r}):t.updateTour(d,r.id,{tour:r});case 4:c=e.sent,i.setSubmitting(!1),o(c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validateOnChange:!1,validationSchema:mt,children:function(e){return Object(U.jsxs)(H.c,{children:[Object(U.jsx)(b.a,{mb:.75,component:"h2",variant:"subtitle1",children:"Profile"}),Object(U.jsx)(H.a,{component:G.a,fullWidth:!0,label:"Name",name:"name",placeholder:"New account orientation",size:"medium",validate:!0,variant:"outlined"}),Object(U.jsx)(b.a,{mb:.75,mt:2.5,component:"h2",variant:"subtitle1",children:"Criteria"}),Object(U.jsx)(H.a,{component:G.a,fullWidth:!0,helperText:"Enter a valid regular expression",label:"URL match expression",name:"match.regex",placeholder:"/dashboard/?",size:"medium",validate:!0,variant:"outlined"}),Object(U.jsx)(H.b,{name:"steps",children:function(t){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(b.a,{mb:.75,mt:2.5,component:"h2",variant:"subtitle1",children:Object(U.jsxs)(ae,{children:[Object(U.jsx)(re,{grow:!0,children:"Steps"}),Object(U.jsx)(re,{children:Object(U.jsx)(f.a,{color:"primary",onClick:function(){return M(e,t)},children:Object(U.jsx)(Ke.a,{})})})]})}),0===e.values.steps.length?Object(U.jsx)(ae,{justifyContent:"center",width:"100%",children:Object(U.jsx)(ot,{actionsComponent:Object(U.jsx)(J,{color:"primary",onClick:function(){return M(e,t)},variant:"contained",children:"Create Step"}),illustrationComponent:Object(U.jsx)(Qe.a,{style:{height:x.typography.h2.fontSize,width:x.typography.h2.fontSize}}),mt:2,style:{maxWidth:"30rem"},children:"A tour step is one message in a sequence of interactive message dialogs that are shown to your users when the tour criteria is met."})}):Object(U.jsx)(h.a,{sx:{width:"100%"},children:e.values.steps.map((function(n,i){var a,r,c;return Object(U.jsxs)(he.a,{expanded:null!==(a=R[i])&&void 0!==a&&a,children:[Object(U.jsxs)(pt,{expandIcon:Object(U.jsx)(Oe.a,{}),onClick:function(){return F((function(e){return Object(Xe.a)({},i,!e[i])}))},children:[Object(U.jsx)(re,{width:"2rem",mr:1,children:Object(U.jsxs)(b.a,{variant:"body1",component:"h3",children:[i+1,"."]})}),Object(U.jsx)(re,{flex:"1",minWidth:"0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:Object(U.jsx)(b.a,{variant:"body2",sx:{display:"inline",opacity:.875},children:gt(n.html)})}),Ot(e.errors,i)?Object(U.jsx)(re,{color:"error.main",mr:1,sx:{alignItems:"center",display:"flex"},children:Object(U.jsx)(Ze.a,{})}):void 0]}),Object(U.jsxs)(pe.a,{children:[Object(U.jsxs)(ae,{justifyContent:"flex-end",children:[Object(U.jsx)(f.a,{disabled:0===i,onClick:function(){F((function(e){var t;return Object(P.a)(Object(P.a)({},e),{},(t={},Object(Xe.a)(t,i-1,e[i]),Object(Xe.a)(t,i,e[i-1]),t))})),t.swap(i-1,i)},title:"Move up",children:Object(U.jsx)(et.a,{})}),Object(U.jsx)(f.a,{disabled:i===e.values.steps.length-1,onClick:function(){F((function(e){var t;return Object(P.a)(Object(P.a)({},e),{},(t={},Object(Xe.a)(t,i+1,e[i]),Object(Xe.a)(t,i,e[i+1]),t))})),t.swap(i,i+1)},title:"Move down",children:Object(U.jsx)(tt.a,{})}),Object(U.jsx)(h.a,{ml:2,children:Object(U.jsx)(J,{color:"inherit",onClick:function(){t.remove(i),F((function(e){return Object(P.a)(Object(P.a)({},e),{},Object(Xe.a)({},i,!1))}))},startIcon:Object(U.jsx)(nt.a,{}),children:"Delete"})})]}),Object(U.jsx)(h.a,{my:2,children:Object(U.jsx)(ht,{errorText:e.getFieldMeta("steps[".concat(i,"].html")).error,onBlur:function(){e.setFieldTouched("steps[".concat(i,"].html"),!0)},onChange:function(t){e.setFieldValue("steps[".concat(i,"].html"),t)},value:e.values.steps[i].html})}),Object(U.jsx)(h.a,{my:2,children:Object(U.jsx)(Be.a,{control:Object(U.jsx)(Je.a,{checked:e.values.steps[i].mask,onChange:function(){e.setFieldValue("steps[".concat(i,"].mask"),!e.values.steps[i].mask)}}),label:"Highlight the message"})}),Object(U.jsxs)(ae,{alignItems:"flex-start",my:2,children:[Object(U.jsx)(re,{grow:!0,children:Object(U.jsx)(H.a,{component:G.a,fullWidth:!0,helperText:"Use the CSS/XPath toggle to choose a selector format",label:"Highlight element",name:"steps[".concat(i,"].selector.value"),size:"medium",variant:"outlined"})}),Object(U.jsx)(bt,{children:Object(U.jsxs)(_e.a,{onChange:function(){setTimeout((function(){return e.setFieldTouched("steps[".concat(i,"].selector.value"),!0,!0)}))},value:[null!==(r=null===(c=e.values.steps[i].selector)||void 0===c?void 0:c.type)&&void 0!==r?r:"css"],children:[Object(U.jsx)(Ye.a,{onClick:function(){return e.setFieldValue("steps[".concat(i,"].selector.type"),"css")},value:"css",children:"CSS"}),Object(U.jsx)(Ye.a,{onClick:function(){return e.setFieldValue("steps[".concat(i,"].selector.type"),"xpath")},value:"xpath",children:"XPath"})]})})]})]})]},i)}))})]})}})]})}})})};function Ot(e,t){if(void 0===e.steps||"string"===typeof e.steps)return!1;var n=e.steps[t];return void 0!==n&&void 0!==Object.values(n).find((function(e){return void 0!==e}))}function gt(e){try{var t,n,i,a=null!==(t=null===(n=(new DOMParser).parseFromString(e,"text/html"))||void 0===n||null===(i=n.body.textContent)||void 0===i?void 0:i.trim())&&void 0!==t?t:"";return""===a?"No content":a}catch(r){return"No content"}}function yt(e){return void 0===e?{id:"",match:{regex:""},name:"",status:"draft",steps:[]}:Object(P.a)(Object(P.a)({},e),{},{steps:e.steps.map(wt)})}function wt(e){return void 0===e?{html:"",id:"",mask:!1,selector:{type:"css",value:""}}:void 0!==e.selector?e:Object(P.a)(Object(P.a)({},e),{},{selector:{type:"css",value:""}})}var St=Object(d.a)(Ve.a)((function(e){var t=e.theme;return{"&.published:before":{backgroundColor:t.palette.success.main,boxShadow:"0px 0px 5px 1px ".concat(t.palette.success.main)},"&:before":{backgroundColor:t.palette.grey[300],borderRadius:t.spacing(1.5),content:'" "',height:t.spacing(1.5),position:"absolute",right:t.spacing(1),top:t.spacing(1),width:t.spacing(1.5)}}})),Ct=function(e){var t=e.managementService,n=Object(S.g)().siteId,i=C((function(){return t.tours$}),[t]),r=Object(u.a)(i,1)[0],c=a.a.useState(!1),s=Object(u.a)(c,2),o=s[0],l=s[1],d=a.a.useState(),j=Object(u.a)(d,2),b=j[0],p=j[1];return a.a.useEffect((function(){t.loadTours(n)}),[t,n]),Object(U.jsxs)(U.Fragment,{children:[void 0!==r&&r.length>0?Object(U.jsxs)(h.a,{width:"100%",children:[Object(U.jsx)(h.a,{my:3,children:Object(U.jsx)(J,{color:"primary",onClick:function(){p(void 0),l(!0)},variant:"contained",children:"Create tour"})}),Object(U.jsx)(ae,{flexWrap:"wrap",m:-1,children:r.map((function(e){return Object(U.jsx)(h.a,{m:1,width:"23%",children:Object(U.jsx)(St,{className:e.status,onClick:function(){p(e),l(!0)},sx:{cursor:"pointer",position:"relative"},children:Object(U.jsx)(Le.a,{avatar:Object(U.jsx)(He.a,{sx:{bgcolor:"blue"},children:e.name.split(/\s+/).map((function(e){var t;return null===(t=e[0])||void 0===t?void 0:t.toUpperCase()})).join("")}),title:e.name})})},e.id)}))})]}):void 0!==r?Object(U.jsx)(Re,{children:Object(U.jsx)(ot,{actionsComponent:Object(U.jsx)(J,{onClick:function(){p(void 0),l(!0)},size:"large",variant:"contained",children:"Create tour"}),illustrationComponent:Object(U.jsx)(Ge.a,{}),children:"Create your first contextual, interactive experience for your user that is tailored for your product or website."})}):void 0,Object(U.jsx)(ft,{managementService:t,onClose:function(){return l(!1)},onSave:function(){return l(!1)},open:o,siteId:n,tour:b})]})},kt=Object(d.a)(j.a)({alignItems:"center",display:"flex",flexDirection:"column",flexGrow:1,width:"100%"}),$t=Object(d.a)(h.a)({"& > a":{border:"solid 0.3em rgba(0, 0, 0, 0)",borderLeftWidth:0,borderRadius:0,borderRightWidth:0,height:"100%",padding:"0 2em"},"& > a.active":{borderBottomColor:"currentColor"},alignItems:"center",display:"flex",flexGrow:1,height:"100%"}),Et=Object(d.a)(w.a)((function(e){var t=e.theme;return{height:t.typography.h5.fontSize,marginRight:t.spacing(1),width:t.typography.h5.fontSize}})),It=Object(d.a)(b.a)((function(e){return{marginRight:e.theme.spacing(4)}})),Tt=Object(d.a)(h.a)({display:"flex",flexDirection:"column",height:"100vh"}),Rt=Object(d.a)(Tt)({alignItems:"center",justifyContent:"center",width:"100%"}),Ft=new q,Mt=document.createElement("script");Mt.src="https://".concat(window.location.hostname,"/integration/entrypoint.js?_=").concat(Date.now()),Mt.setAttribute("enactive.site-id","007b9009-5f1b-4e70-9c68-165c60003798"),Mt.setAttribute("enactive.enabled","false"),document.body.appendChild(Mt);var qt=function(){var e,t,n=Object(p.a)(),i=C((function(){return Ft.account$}),[]),r=Object(u.a)(i,1)[0],c=C((function(){return Ft.sites$}),[]),s=Object(u.a)(c,1)[0],o=a.a.useState(),d=Object(u.a)(o,2),j=d[0],b=d[1],y=(null!==(e=null===(t=Object(S.h)("/sites/:siteId/:viewId"))||void 0===t?void 0:t.params)&&void 0!==e?e:{}).viewId,w=a.a.useState(!1),k=Object(u.a)(w,2),$=k[0],E=k[1],I=a.a.useMemo((function(){return null!==r&&void 0!==r&&void 0!==j&&!$||void 0===r&&void 0}),[r,j,$]),T=a.a.useState(!1),R=Object(u.a)(T,2),F=R[0],M=R[1];return a.a.useEffect((function(){Ft.init()}),[]),a.a.useEffect((function(){void 0!==r?(null===r?(E(!0),Mt.removeAttribute("enactive.context.user.id")):Mt.setAttribute("enactive.context.user.id",r.id),-1!==window.location.hostname.indexOf("enactive.ac")&&Mt.setAttribute("enactive.enabled","true")):Mt.setAttribute("enactive.enabled","false")}),[r]),a.a.useEffect((function(){b(void 0!==s?s[0]:void 0)}),[s]),Object(U.jsx)(U.Fragment,{children:void 0!==I?Object(U.jsxs)(Tt,{children:[Object(U.jsx)(x.a,{position:"static",children:Object(U.jsxs)(v.a,{children:[Object(U.jsx)(Et,{}),Object(U.jsx)(It,{variant:"h6",children:"Enactive Management"}),Object(U.jsx)($t,{children:function(){if(I&&void 0!==j)return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(m.a,{className:"tours"===y?"active":void 0,color:"inherit",component:l.b,to:"/sites/".concat(j.id,"/tours"),children:"Tours"}),Object(U.jsx)(m.a,{className:"installation"===y?"active":void 0,color:"inherit",component:l.b,to:"/sites/".concat(j.id,"/installation"),children:"Installation"})]})}()}),I?null!==r&&void 0!==r?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(h.a,{mr:2,children:Object(U.jsx)(f.a,{color:"inherit",onClick:function(){return M(!0)},size:"large",title:"Edit theme",children:Object(U.jsx)(g.a,{})})}),Object(U.jsx)(V,{account:r,buttonProps:{sx:{display:"flex",height:"100%"}},onSignOut:function(){return Ft.logout()}})]}):void 0:Object(U.jsx)(m.a,{color:"inherit",component:l.b,sx:{display:"flex",height:"100%",paddingX:n.spacing(2)},to:"/signin",children:"Sign In"})]})}),Object(U.jsx)(kt,{children:Object(U.jsxs)(S.d,{children:[Object(U.jsx)(S.b,{exact:!0,path:"/signin",children:I?Object(U.jsx)(S.a,{to:"/"}):Object(U.jsx)(We,{managementService:Ft,onSignIn:function(){return E(!1)}})}),Object(U.jsx)(S.b,{path:"/",children:I&&void 0!==j?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(S.d,{children:[Object(U.jsx)(S.b,{exact:!0,path:"/",children:Object(U.jsx)(S.a,{to:"/sites/".concat(j.id,"/tours")})}),Object(U.jsx)(S.b,{exact:!0,path:"/sites/:siteId/tours",children:Object(U.jsx)(Ct,{managementService:Ft})}),Object(U.jsx)(S.b,{exact:!0,path:"/sites/:siteId/installation",children:Object(U.jsx)(Ee,{})})]}),Object(U.jsx)(oe,{managementService:Ft,onClose:function(){return M(!1)},onExited:function(){},onSave:function(){return M(!1)},open:F,site:j})]}):Object(U.jsx)(S.a,{to:"/signin"})})]})})]}):Object(U.jsx)(Rt,{children:Object(U.jsx)(O.a,{})})})},Pt=function(){return Object(U.jsx)(s.a,{injectFirst:!0,children:Object(U.jsx)(l.a,{children:Object(U.jsx)(o.a,{children:Object(U.jsx)(qt,{})})})})};n(376),n(377);c.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(Pt,{})}),document.getElementById("root"))}},[[378,152,153]]]);
//# sourceMappingURL=main.608a2048.chunk.js.map