(this["webpackJsonpenactive-integration-ui"]=this["webpackJsonpenactive-integration-ui"]||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(21),r=n.n(i),c=n(7),l=n(187),u=n(183),s=n(66),d=n.n(s),v=n(6),p=n(184),b={contrastText:"#fff",main:"#8d4a99"},f=Object(v.a)(Object(v.a)({},{color:"rgba(0, 0, 0, 0.87)"}),{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:16}),m={"& button":Object(v.a)(Object(v.a)(Object(v.a)({},f),{alignContent:"center",alignItems:"center",borderRadius:"0.4em",cursor:"pointer",display:"inline-flex",flexDirection:"row",justifyContent:"center",lineHeight:"1.5em",margin:0,minWidth:"5em",overflow:"hidden",padding:"0.6em 0.8em",position:"relative",transition:"background 100ms linear",zIndex:1}),{},{background:"rgba(0, 0, 0, 0)",border:"none",boxShadow:"none"}),"& button::before":{background:"#000",bottom:0,content:'""',left:0,opacity:0,position:"absolute",right:0,top:0,zIndex:-1},"& button:active::before, & button:hover::before, & button:focus::before":{opacity:.07},"& button:disabled":{cursor:"default",opacity:.5,pointerEvents:"none"},"& div.enactive-buttongroup":{margin:"-0.5em"},"& div.enactive-buttongroup button":{margin:"0.5em"}},x={"& button.enactive-primary":{color:b.contrastText},"& button.enactive-primary::before":{background:b.main,opacity:1},"& button.enactive-primary:active::before, & button.enactive-primary:hover::before, & button.enactive-primary:focus::before":{opacity:.85}},j=Object(v.a)(Object(v.a)(Object(v.a)({},m),{"& button.enactive-contained":{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"},"& button.enactive-contained::before":{opacity:.07},"& button.enactive-contained:active::before, & button.enactive-contained:hover::before, & button.enactive-contained:focus::before":{opacity:0}}),x),h=Object(p.a)("div")(Object(v.a)(Object(v.a)(Object(v.a)({},f),j),{},{"& p":Object(v.a)(Object(v.a)({},f),{},{margin:"1em 0"})})),g=n(185),O=n(1),y=Object(p.a)("div")({"&, &.enter, &.exit.exit-active, &.exit-done":{opacity:0,pointerEvents:"none"},"&.enter-active, &.exit-active":{transition:"opacity 250ms linear"},"&.enter.enter-active, &.enter-done, &.exit":{opacity:1,pointerEvents:"auto"},borderColor:"rgba(0, 0, 0, 0.7)",borderStyle:"solid",bottom:0,left:0,position:"fixed",right:0,top:0,zIndex:1111}),w=function(e){var t=e.active,n=e.children,o=e.onOutEnd,i=void 0===o?function(){}:o,r=e.ref,c=e.style,l=a.a.useRef(null);return Object(O.jsx)(g.a,{in:t,onExited:i,nodeRef:l,timeout:250,children:Object(O.jsx)(y,{ref:function(e){l.current=e,null===r||void 0===r||r(e)},style:c,children:n})})},E=Object(p.a)("div")({display:"flex"}),S=Object(p.a)(E)({alignItems:"stretch",flexDirection:"column",justifyContent:"flex-start"}),C=Object(p.a)(E)({alignItems:"center",justifyContent:"center"}),k=Object(p.a)("div")({flex:1}),I=(Object(p.a)("div")({}),n(72)),R=n(182),A=function(e){var t=e.anchorEl,n=e.children,o=e.offset,i=void 0===o?0:o,r=e.open,l=e.placement,u=Object(I.a)(e,["anchorEl","children","offset","open","placement"]),s=a.a.useState(null),d=Object(c.a)(s,2),p=d[0],b=d[1],f=Object(R.a)(t,p,{modifiers:[{name:"offset",options:{offset:[0,i]}}],placement:l}),m=f.attributes,x=f.styles;return Object(O.jsx)("div",Object(v.a)(Object(v.a)(Object(v.a)({ref:b},u),{},{style:Object(v.a)(Object(v.a)(Object(v.a)({},u.style),x.popper),r?void 0:{pointerEvents:"none",visibility:"hidden"})},m.popper),{},{children:n}))},T=Object(p.a)(k)({minWidth:"20em",padding:"1em"}),L=Object(p.a)(C)({"& > button":{margin:"0.25em"},justifyContent:"flex-end",margin:"-0.25em",padding:"1em"}),W=Object(p.a)("div")({bottom:"2em",height:"auto",maxWidth:"35em",position:"fixed",right:"2em"}),D=Object(p.a)(S)({backgroundColor:"white",borderRadius:"1em",position:"relative"}),N=Object(p.a)("div")({"&, &.enter, &.exit.exit-active, &.exit-done":{opacity:0,top:"2em"},"&.enter-active, &.exit-active":{transition:"opacity 250ms ease-in, top 250ms ease-in"},"&.enter.enter-active, &.enter-done, &.exit":{opacity:1,top:0},'[data-popper-placement="bottom"] &::before':{left:"calc(50% - 0.5em)",top:"-0.5em"},'[data-popper-placement="left"] &::before':{right:"-0.5em",top:"calc(50% - 0.5em)"},'[data-popper-placement="right"] &::before':{left:"-0.5em",top:"calc(50% - 0.5em)"},'[data-popper-placement="top"] &::before':{bottom:"-0.5em",left:"calc(50% - 0.5em)"},"[data-popper-placement] &::before":{backgroundColor:"white",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",content:'""',display:"block",height:"1em",position:"absolute",transform:"rotate(45deg)",width:"1em"},borderRadius:"1em",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",position:"relative"}),z=function(e){var t=e.anchorEl,n=e.buttons,o=void 0===n?[]:n,i=e.children,r=e.onOutEnd,l=void 0===r?function(){}:r,u=e.open,s=a.a.useRef(null),d=a.a.useState(u),p=Object(c.a)(d,2),b=p[0],f=p[1],m=a.a.useState(!1),x=Object(c.a)(m,2),j=x[0],h=x[1];return a.a.useEffect((function(){!u||b||j?j&&(f(!1),h(!1)):f(!0)}),[u,b,j]),void 0!==t?Object(O.jsx)(A,{anchorEl:t,offset:12,open:b,placement:"right",style:{maxWidth:"35em",zIndex:1112},children:Object(O.jsx)(g.a,{onExited:function(){h(!0),l()},in:u,nodeRef:s,timeout:250,children:Object(O.jsx)(N,{ref:s,children:Object(O.jsxs)(D,{children:[Object(O.jsx)(T,{children:i}),o.length>0?Object(O.jsx)(L,{children:o}):void 0]})})})}):Object(O.jsx)(W,{style:Object(v.a)({zIndex:1112},u?void 0:{pointerEvents:"none"}),children:Object(O.jsx)(g.a,{onExited:function(){h(!0),l()},in:u,nodeRef:s,timeout:250,children:Object(O.jsx)(N,{ref:s,children:Object(O.jsxs)(D,{children:[Object(O.jsx)(T,{children:i}),o.length>0?Object(O.jsx)(L,{children:o}):void 0]})})})})},H=function(e){var t=e.active,n=e.buttons,o=e.html,a=e.onAction,i=e.onOut,r=void 0===i?function(){}:i,c=e.targetEl;return Object(O.jsx)(z,{anchorEl:c,buttons:n.map((function(e){return[Object(O.jsx)("button",{className:"".concat("next"===e.action?"enactive-primary":""),onClick:function(){return a(e.action)},children:e.text},e.action)]})),open:t,onOutEnd:r,children:Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})})},M=function(e){var t=e.onAction,n=e.onComplete,o=e.tour,i=a.a.useState(-1),r=Object(c.a)(i,2),l=r[0],u=r[1],s=a.a.useState(),d=Object(c.a)(s,2),v=d[0],p=d[1],b=a.a.useState(window.scrollY),f=Object(c.a)(b,2)[1],m=a.a.useMemo((function(){return o.map((function(e){var t;return{step:e,targetEl:null!==(t=function(){var t;switch(null===(t=e.selector)||void 0===t?void 0:t.type){case"css":return document.querySelector(e.selector.value);case"xpath":return document.evaluate(e.selector.value,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;case void 0:return null}}())&&void 0!==t?t:void 0}}))}),[o]);return a.a.useEffect((function(){setTimeout((function(){return u(0)}),1e3);var e=function(){return f(window.scrollY)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(O.jsx)(O.Fragment,{children:m.map((function(e,a){var i,r=e.step,c=e.targetEl;return Object(O.jsxs)("div",{children:[r.mask?Object(O.jsx)(w,{active:-1!==v&&(l===a&&void 0===v||v===a),style:function(){var e,t,n,o,a=null===c||void 0===c?void 0:c.getBoundingClientRect(),i=null!==(e=null===a||void 0===a?void 0:a.x)&&void 0!==e?e:0,r=null!==(t=null===a||void 0===a?void 0:a.y)&&void 0!==t?t:0,l=null!==(n=null===a||void 0===a?void 0:a.width)&&void 0!==n?n:0,u=null!==(o=null===a||void 0===a?void 0:a.height)&&void 0!==o?o:0;return{borderBottomWidth:"calc(100vh - ".concat(r+u,"px)"),borderLeftWidth:null===a||void 0===a?void 0:a.x,borderRightWidth:"calc(100vw - ".concat(i+l,"px)"),borderTopWidth:null===a||void 0===a?void 0:a.y}}()},"mask-".concat(a)):void 0,Object(O.jsx)(H,{active:void 0===v&&l===a,buttons:null!==(i=r.buttons)&&void 0!==i?i:[{action:"dismiss",text:"Dismiss"},a<o.length-1?{action:"next",text:"Next"}:void 0].filter((function(e){return void 0!==e})),html:r.html,onAction:function(e){switch(t(r.id,a,e),e){case"dismiss":return p(-1);case"next":return p(a+1)}},onOut:function(){-1===v?n():void 0!==v&&(u(v),p(void 0))},targetEl:c},"popup-".concat(a))]},a)}))})},P=n(25),F=n(69),U=n.n(F),_=n(34),q=n.n(_),J=n(186);function B(e){var t,n={},o=Object(P.a)(e);try{for(o.s();!(t=o.n()).done;){var a,i=Object(c.a)(t.value,2),r=i[0],l=i[1],u=Y(r),s=Object(c.a)(u,2),d=s[0],v=s[1],p=n,b=Object(P.a)(d);try{for(b.s();!(a=b.n()).done;){var f=a.value;f in p&&"object"!==typeof p[f]&&console.warn("Assigned both a value and an object on enactive script tag metadata",{key:r,value:p[f]}),p=f in p?p[f]:p[f]={}}}catch(m){b.e(m)}finally{b.f()}v in p&&console.warn("Assigned duplicate values on enactive script tag metadata",{key:r,value:l}),p[v]=l}}catch(m){o.e(m)}finally{o.f()}return n}function Y(e){var t,n,o=(n=e,n.replaceAll(/^\.+|\.+$/g,"").replaceAll(/\.+/g,".").split(".")).map($),a=null!==(t=o.pop())&&void 0!==t?t:"";return[o,a]}function $(e){return e.replaceAll(/^-+|-+$/g,"").replaceAll(/-+/g,"-").split("-").map((function(e,t){return t>0&&e.length>0?"".concat(e[0].toUpperCase()).concat(e.slice(1).toLowerCase()):e.toLowerCase()})).join("")}function V(e,t,n){void 0!==e[t]&&null!==e[t]||(e[t]=n)}function X(e,t,n){var o=a.a.useState((function(){if(void 0!==t)switch(typeof t){case"string":case"number":case"boolean":return t;default:return}})),i=Object(c.a)(o,2),r=i[0],l=i[1];return function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).interval,n=void 0===t?250:t;a.a.useEffect((function(){var t=setInterval(e,n);return function(){return clearInterval(t)}}),[n])}((function(){return l(e())}),{interval:"object"===typeof t?t.interval:"object"===typeof n?n.interval:void 0}),r}var G=window,K=new U.a({coerceTypes:!0}).compile({properties:{apiHost:{type:"string"},context:{nullable:!0,properties:{device:{nullable:!0,properties:{locale:{nullable:!0,type:"string"}},type:"object"},page:{nullable:!0,properties:{locale:{nullable:!0,type:"string"},url:{nullable:!0,type:"string"}},type:"object"},user:{nullable:!0,properties:{anonymous:{nullable:!0,type:"boolean"},id:{nullable:!0,type:"string"},locale:{nullable:!0,type:"string"}},type:"object"}},type:"object"},enabled:{type:"boolean"},siteId:{type:"string"}},required:["apiHost","enabled","siteId"],type:"object"}),Q="script[enactive\\.site-id]",Z=new URLSearchParams(window.location.search).has("enactiveDebug"),ee=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.interval,n=void 0===t?250:t,o=e.window,a=void 0===o?G:o;return X((function(){return a.location.href}),a.location.href,{interval:n})}(),t=a.a.useMemo((function(){var e;return null!==(e=document.querySelector(Q))&&void 0!==e?e:void 0}),[]),n=a.a.useState(te(t)),o=Object(c.a)(n,2),i=o[0],r=o[1],l=a.a.useState(),u=Object(c.a)(l,2),s=u[0],d=u[1],v=a.a.useState(),p=Object(c.a)(v,2),b=p[0],f=p[1],m=a.a.useState(),x=Object(c.a)(m,2),j=x[0],h=x[1];return a.a.useEffect((function(){var e=function(){try{var e,t;return null!==(e=JSON.parse(null!==(t=localStorage.getItem("enactive-context"))&&void 0!==t?t:"null"))&&void 0!==e?e:void 0}catch(n){}}();if(void 0===e){var t={user:{anonymous:!0,id:Object(J.a)()}};d(t);try{localStorage.setItem("enactive-context",JSON.stringify(t))}catch(n){console.warn("Failed to set enactive device data in local storage.",n)}}else d(e)}),[]),a.a.useEffect((function(){if(r(te(t)),void 0!==t){var e=new MutationObserver((function(){ne("metadata update triggered from script property change"),r(te(t))}));return e.observe(t,{attributes:!0}),function(){return e.disconnect()}}}),[t]),a.a.useEffect((function(){return f(function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).selector,n=void 0===t?"":t;if(void 0===e)return void console.warn("Could not locate enactive script tag with metadata",{selector:n});var o=B(new URLSearchParams(e).entries());var a,i;return ne("decoded script metadata",{data:e,result:o}),K(o)?(void 0!==(null===(a=o.context)||void 0===a||null===(i=a.user)||void 0===i?void 0:i.id)&&V(o.context.user,"anonymous",!1),o):void console.warn("Invalid enactive script tag metadata",{errors:K.errors,result:o,selector:n})}(i,{selector:Q}))}),[i]),a.a.useEffect((function(){var t=void 0!==s&&void 0!==b?q()({},{context:{page:{url:e}}},{context:s},b):void 0;h(t),ne("metadata updated",{metadata:t})}),[e,b,s]),j};function te(e){if(void 0!==e){var t,n=new URLSearchParams,o=Object(P.a)(e.attributes);try{for(o.s();!(t=o.n()).done;){var a=t.value;!0===a.name.startsWith("enactive.")&&n.append(a.name.substring(9),a.value)}}catch(r){o.e(r)}finally{o.f()}if(!1===n.has("api-host")){var i=document.createElement("a");i.href=e.src,n.append("api-host","api.".concat(i.hostname.replace("www.","")))}return!1===n.has("enabled")&&n.append("enabled","true"),n.sort(),n.toString()}return""}function ne(e,t){!0===Z&&console.debug("[enactive] ".concat(e),t)}var oe=n(22),ae=n.n(oe),ie=n(42),re=n(70),ce=n(71),le=function(){function e(t){Object(re.a)(this,e),this.axios=t}return Object(ce.a)(e,[{key:"getTour",value:function(){var e=Object(ie.a)(ae.a.mark((function e(t){var n,o;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={context:this.resolveEventContext(t)},e.next=3,this.axios.post("tours",n);case 3:return o=e.sent,e.abrupt("return",o.data.tours[0]);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"collectTourAction",value:function(){var e=Object(ie.a)(ae.a.mark((function e(t,n,o,a){var i,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.resolveEventContext(t),r={context:i},e.next=4,this.axios.post("tours/".concat(n,"/steps/").concat(o,"/actions/").concat(a),r);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,o,a){return e.apply(this,arguments)}}()},{key:"resolveEventContext",value:function(e){var t,n;return q()({device:{locale:null!==(t=null===(n=document.querySelector("html"))||void 0===n?void 0:n.getAttribute("lang"))&&void 0!==t?t:void 0},page:{url:window.location.href},user:{anonymous:!0,id:""}},e)}}]),e}(),ue=Object(l.a)({productionPrefix:"enactive"}),se=function(){var e=ee(),t=a.a.useMemo((function(){if(void 0!==e){var t=d.a.create({baseURL:"https://".concat(e.apiHost,"/api/v1/sites/").concat(e.siteId)});return new le(t)}}),[e]),n=a.a.useState(),o=Object(c.a)(n,2),i=o[0],r=o[1];return a.a.useEffect((function(){!0===(null===e||void 0===e?void 0:e.enabled)&&(null===t||void 0===t||t.getTour(null===e||void 0===e?void 0:e.context).then(r))}),[e,t]),Object(O.jsx)(u.b,{generateClassName:ue,children:Object(O.jsx)(h,{children:void 0!==i?Object(O.jsx)(M,{onAction:function(n,o,a){return null===t||void 0===t?void 0:t.collectTourAction(null===e||void 0===e?void 0:e.context,i.id,n,a)},onComplete:function(){return r(void 0)},tour:i.steps}):Object(O.jsx)(O.Fragment,{})})})};n(166);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(se,{})}),document.getElementById("enactive-app-root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.a8b13b0f.chunk.js.map