(this["webpackJsonpenactive-integration-ui"]=this["webpackJsonpenactive-integration-ui"]||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(21),r=n.n(i),c=n(6),u=n(187),l=n(183),s=n(66),d=n.n(s),v=n(7),p=n(184),b={contrastText:"#fff",main:"#8d4a99"},f=Object(v.a)(Object(v.a)({},{color:"rgba(0, 0, 0, 0.87)"}),{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:16}),m={"& button":Object(v.a)(Object(v.a)(Object(v.a)({},f),{alignContent:"center",alignItems:"center",borderRadius:"0.4em",cursor:"pointer",display:"inline-flex",flexDirection:"row",justifyContent:"center",lineHeight:"1.5em",margin:0,minWidth:"5em",overflow:"hidden",padding:"0.6em 0.8em",position:"relative",transition:"background 100ms linear",zIndex:1}),{},{background:"rgba(0, 0, 0, 0)",border:"none",boxShadow:"none"}),"& button::before":{background:"#000",bottom:0,content:'""',left:0,opacity:0,position:"absolute",right:0,top:0,zIndex:-1},"& button:active::before, & button:hover::before, & button:focus::before":{opacity:.07},"& button:disabled":{cursor:"default",opacity:.5,pointerEvents:"none"},"& div.enactive-buttongroup":{margin:"-0.5em"},"& div.enactive-buttongroup button":{margin:"0.5em"}},h={"& button.enactive-primary":{color:b.contrastText},"& button.enactive-primary::before":{background:b.main,opacity:1},"& button.enactive-primary:active::before, & button.enactive-primary:hover::before, & button.enactive-primary:focus::before":{opacity:.85}},x=Object(v.a)(Object(v.a)(Object(v.a)({},m),{"& button.enactive-contained":{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"},"& button.enactive-contained::before":{opacity:.07},"& button.enactive-contained:active::before, & button.enactive-contained:hover::before, & button.enactive-contained:focus::before":{opacity:0}}),h),j=Object(p.a)("div")(Object(v.a)(Object(v.a)(Object(v.a)({},f),x),{},{"& p":Object(v.a)(Object(v.a)({},f),{},{lineHeight:1.4,margin:0})})),g=n(185),O=n(1),y=Object(p.a)("div")({"&, &.enter, &.exit.exit-active, &.exit-done":{opacity:0,pointerEvents:"none"},"&.enter-active, &.exit-active":{transition:"opacity 250ms linear"},"&.enter.enter-active, &.enter-done, &.exit":{opacity:1,pointerEvents:"auto"},borderColor:"rgba(0, 0, 0, 0.7)",borderStyle:"solid",bottom:0,left:0,position:"fixed",right:0,top:0,zIndex:1111}),w=function(e){var t=e.active,n=e.children,o=e.onOutEnd,i=void 0===o?function(){}:o,r=e.ref,c=e.style,u=a.a.useRef(null);return Object(O.jsx)(g.a,{in:t,onExited:i,nodeRef:u,timeout:250,children:Object(O.jsx)(y,{ref:function(e){u.current=e,null===r||void 0===r||r(e)},style:c,children:n})})},E=Object(p.a)("div")({display:"flex"}),S=Object(p.a)(E)({alignItems:"stretch",flexDirection:"column",justifyContent:"flex-start"}),R=Object(p.a)(E)({alignItems:"center",justifyContent:"center"}),C=Object(p.a)("div")({flex:1}),k=(Object(p.a)("div")({}),n(72)),I=n(182),A=function(e){var t=e.anchorEl,n=e.children,o=e.offset,i=void 0===o?0:o,r=e.open,u=e.placement,l=Object(k.a)(e,["anchorEl","children","offset","open","placement"]),s=a.a.useState(null),d=Object(c.a)(s,2),p=d[0],b=d[1],f=Object(I.a)(t,p,{modifiers:[{name:"offset",options:{offset:[0,i]}}],placement:u}),m=f.attributes,h=f.styles;return Object(O.jsx)("div",Object(v.a)(Object(v.a)(Object(v.a)({ref:b},l),{},{style:Object(v.a)(Object(v.a)(Object(v.a)({},l.style),h.popper),r?void 0:{pointerEvents:"none",visibility:"hidden"})},m.popper),{},{children:n}))},L=Object(p.a)(C)({maxWidth:"25em",minWidth:"20em",padding:"1em"}),T=Object(p.a)(R)({"& > button":{margin:"0.25em"},justifyContent:"flex-end",margin:"-0.25em",padding:"1em"}),W=Object(p.a)("div")({bottom:"2em",height:"auto",maxWidth:"35em",position:"fixed",right:"2em"}),q=Object(p.a)(S)({backgroundColor:"white",borderRadius:"1em",position:"relative"}),P=Object(p.a)("div")({"&, &.enter, &.exit.exit-active, &.exit-done":{opacity:0,top:"2em"},"&.enter-active, &.exit-active":{transition:"opacity 250ms ease-in, top 250ms ease-in"},"&.enter.enter-active, &.enter-done, &.exit":{opacity:1,top:0},'[data-popper-placement="bottom"] &::before':{left:"calc(50% - 0.5em)",top:"-0.5em"},'[data-popper-placement="left"] &::before':{right:"-0.5em",top:"calc(50% - 0.5em)"},'[data-popper-placement="right"] &::before':{left:"-0.5em",top:"calc(50% - 0.5em)"},'[data-popper-placement="top"] &::before':{bottom:"-0.5em",left:"calc(50% - 0.5em)"},"[data-popper-placement] &::before":{backgroundColor:"white",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",content:'""',display:"block",height:"1em",position:"absolute",transform:"rotate(45deg)",width:"1em"},borderRadius:"1em",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",position:"relative"}),D=function(e){var t=e.anchorEl,n=e.buttons,o=void 0===n?[]:n,i=e.children,r=e.onOutEnd,u=void 0===r?function(){}:r,l=e.open,s=a.a.useRef(null),d=a.a.useState(l),p=Object(c.a)(d,2),b=p[0],f=p[1],m=a.a.useState(!1),h=Object(c.a)(m,2),x=h[0],j=h[1];return a.a.useEffect((function(){!l||b||x?x&&(f(!1),j(!1)):f(!0)}),[l,b,x]),void 0!==t?Object(O.jsx)(A,{anchorEl:t,offset:12,open:b,placement:"right",style:{zIndex:1112},children:Object(O.jsx)(g.a,{onExited:function(){j(!0),u()},in:l,nodeRef:s,timeout:250,children:Object(O.jsx)(P,{ref:s,children:Object(O.jsxs)(q,{children:[Object(O.jsx)(L,{children:i}),o.length>0?Object(O.jsx)(T,{children:o}):void 0]})})})}):Object(O.jsx)(W,{style:Object(v.a)({zIndex:1112},l?void 0:{pointerEvents:"none"}),children:Object(O.jsx)(g.a,{onExited:function(){j(!0),u()},in:l,nodeRef:s,timeout:250,children:Object(O.jsx)(P,{ref:s,children:Object(O.jsxs)(q,{children:[Object(O.jsx)(L,{children:i}),o.length>0?Object(O.jsx)(T,{children:o}):void 0]})})})})},H=function(e){var t=e.active,n=e.buttons,o=e.html,a=e.onAction,i=e.onOut,r=void 0===i?function(){}:i,c=e.targetEl;return Object(O.jsx)(D,{anchorEl:c,buttons:n.map((function(e){return[Object(O.jsx)("button",{className:"".concat("next"===e.action?"enactive-primary":""),onClick:function(){return a(e.action)},children:e.text},e.action)]})),open:t,onOutEnd:r,children:Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})})},N=function(e){var t=e.onAction,n=e.onComplete,o=e.tour,i=a.a.useState(-1),r=Object(c.a)(i,2),u=r[0],l=r[1],s=a.a.useState(),d=Object(c.a)(s,2),v=d[0],p=d[1],b=a.a.useState(window.scrollY),f=Object(c.a)(b,2)[1],m=a.a.useMemo((function(){return o.map((function(e){var t;return{step:e,targetEl:null!==(t=function(){var t;switch(null===(t=e.selector)||void 0===t?void 0:t.type){case"css":return document.querySelector(e.selector.value);case"xpath":return document.evaluate(e.selector.value,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;case void 0:return null}}())&&void 0!==t?t:void 0}}))}),[o]);return a.a.useEffect((function(){setTimeout((function(){return l(0)}),1e3);var e=function(){return f(window.scrollY)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(O.jsx)(O.Fragment,{children:m.map((function(e,a){var i,r=e.step,c=e.targetEl;return Object(O.jsxs)("div",{children:[r.mask?Object(O.jsx)(w,{active:-1!==v&&(u===a&&void 0===v||v===a),style:function(){var e,t,n,o,a=null===c||void 0===c?void 0:c.getBoundingClientRect(),i=null!==(e=null===a||void 0===a?void 0:a.x)&&void 0!==e?e:0,r=null!==(t=null===a||void 0===a?void 0:a.y)&&void 0!==t?t:0,u=null!==(n=null===a||void 0===a?void 0:a.width)&&void 0!==n?n:0,l=null!==(o=null===a||void 0===a?void 0:a.height)&&void 0!==o?o:0;return{borderBottomWidth:"calc(100vh - ".concat(r+l,"px)"),borderLeftWidth:null===a||void 0===a?void 0:a.x,borderRightWidth:"calc(100vw - ".concat(i+u,"px)"),borderTopWidth:null===a||void 0===a?void 0:a.y}}()},"mask-".concat(a)):void 0,Object(O.jsx)(H,{active:void 0===v&&u===a,buttons:null!==(i=r.buttons)&&void 0!==i?i:[{action:"dismiss",text:"Dismiss"},a<o.length-1?{action:"next",text:"Next"}:void 0].filter((function(e){return void 0!==e})),html:r.html,onAction:function(e){switch(t(r.id,a,e),e){case"dismiss":return p(-1);case"next":return p(a+1)}},onOut:function(){-1===v?n():void 0!==v&&(l(v),p(void 0))},targetEl:c},"popup-".concat(a))]},a)}))})},U=n(22),z=n(69),F=n.n(z),M=n(34),_=n.n(M),J=n(186);function B(e){var t,n={},o=Object(U.a)(e);try{for(o.s();!(t=o.n()).done;){var a,i=Object(c.a)(t.value,2),r=i[0],u=i[1],l=Y(r),s=Object(c.a)(l,2),d=s[0],v=s[1],p=n,b=Object(U.a)(d);try{for(b.s();!(a=b.n()).done;){var f=a.value;f in p&&"object"!==typeof p[f]&&console.warn("Assigned both a value and an object on enactive script tag metadata",{key:r,value:p[f]}),p=f in p?p[f]:p[f]={}}}catch(m){b.e(m)}finally{b.f()}v in p&&console.warn("Assigned duplicate values on enactive script tag metadata",{key:r,value:u}),p[v]=u}}catch(m){o.e(m)}finally{o.f()}return n}function Y(e){var t,n,o=(n=e,n.replaceAll(/^\.+|\.+$/g,"").replaceAll(/\.+/g,".").split(".")).map($),a=null!==(t=o.pop())&&void 0!==t?t:"";return[o,a]}function $(e){return e.replaceAll(/^-+|-+$/g,"").replaceAll(/-+/g,"-").split("-").map((function(e,t){return t>0&&e.length>0?"".concat(e[0].toUpperCase()).concat(e.slice(1).toLowerCase()):e.toLowerCase()})).join("")}function V(e,t,n){void 0!==e[t]&&null!==e[t]||(e[t]=n)}function X(e,t,n){var o=a.a.useState((function(){if(void 0!==t)switch(typeof t){case"string":case"number":case"boolean":return t;default:return}})),i=Object(c.a)(o,2),r=i[0],u=i[1];return function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).interval,n=void 0===t?250:t;a.a.useEffect((function(){var t=setInterval(e,n);return function(){return clearInterval(t)}}),[n])}((function(){return u(e())}),{interval:"object"===typeof t?t.interval:"object"===typeof n?n.interval:void 0}),r}var G=window,K=window;var Q=new F.a({coerceTypes:!0}).compile({properties:{apiHost:{type:"string"},context:{nullable:!0,properties:{device:{nullable:!0,properties:{locale:{nullable:!0,type:"string"}},type:"object"},page:{nullable:!0,properties:{locale:{nullable:!0,type:"string"},url:{nullable:!0,type:"string"}},type:"object"},user:{nullable:!0,properties:{anonymous:{nullable:!0,type:"boolean"},id:{nullable:!0,type:"string"},locale:{nullable:!0,type:"string"}},type:"object"}},type:"object"},enabled:{type:"boolean"},siteId:{type:"string"}},required:["apiHost","enabled","siteId"],type:"object"}),Z="script[enactive\\.site-id]",ee=new URLSearchParams(window.location.search).has("enactiveDebug"),te=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.interval,n=void 0===t?250:t,o=e.window,a=void 0===o?G:o;return X((function(){return a.location.href}),a.location.href,{interval:n})}(),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.interval,n=void 0===t?250:t,o=e.window,i=void 0===o?K:o,r=X((function(){return i.location.search}),i.location.search,{interval:n}),u=a.a.useState((function(){return new URLSearchParams(r)})),l=Object(c.a)(u,2),s=l[0],d=l[1];return a.a.useEffect((function(){return d(new URLSearchParams(r))}),[r]),s}(),n=a.a.useState(),o=Object(c.a)(n,2),i=o[0],r=o[1],u=a.a.useState(),l=Object(c.a)(u,2),s=l[0],d=l[1],v=a.a.useState(),p=Object(c.a)(v,2),b=p[0],f=p[1],m=a.a.useState(),h=Object(c.a)(m,2),x=h[0],j=h[1],g=a.a.useState(),O=Object(c.a)(g,2),y=O[0],w=O[1];return a.a.useEffect((function(){var e=document.querySelector(Z);null===e?console.warn("Could not locate enactive script on page",{selector:Z}):r(e);var t=function(){try{var e,t;return null!==(e=JSON.parse(null!==(t=localStorage.getItem("enactive-context"))&&void 0!==t?t:"null"))&&void 0!==e?e:void 0}catch(n){return}}();if(void 0===t){var n={user:{anonymous:!0,id:Object(J.a)()}};f(n);try{localStorage.setItem("enactive-context",JSON.stringify(n))}catch(o){console.warn("Failed to set enactive device data in local storage.",o)}}else f(t)}),[]),a.a.useEffect((function(){if(oe("metadata update triggered from script reference or query string change",(function(){return{qs:t,script:i}})),d(ne(i,t)),void 0!==i){var e=new MutationObserver((function(){oe("metadata update triggered from script property change"),d(ne(i,t))}));return e.observe(i,{attributes:!0}),function(){return e.disconnect()}}}),[t,i]),a.a.useEffect((function(){return j(function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).selector,n=void 0===t?"":t;if(void 0!==e){var o,a,i=B(new URLSearchParams(e).entries());return oe("decoded raw metadata from attributes",(function(){return{data:e,result:i}})),Q(i)?(void 0!==(null===(o=i.context)||void 0===o||null===(a=o.user)||void 0===a?void 0:a.id)&&V(i.context.user,"anonymous",!1),oe("decoded coerced metadata from attributes",(function(){return{data:e,result:i}})),i):void console.warn("Invalid enactive script tag metadata",{errors:Q.errors,result:i,selector:n})}return}(s,{selector:Z}))}),[s]),a.a.useEffect((function(){var t=void 0!==b&&void 0!==x?_()({},{context:{page:{url:e}}},{context:b},x):void 0;w(t),oe("metadata updated",(function(){return{metadata:t}}))}),[e,x,b]),y};function ne(e,t){if(void 0!==e){var n=new URLSearchParams;oe("encoding script attributes",(function(){return{script:e}}));var o,a=Object(U.a)(e.attributes);try{for(a.s();!(o=a.n()).done;){var i=o.value;!0===i.name.startsWith("enactive.")&&n.append(i.name.substring(9),i.value)}}catch(p){a.e(p)}finally{a.f()}oe("encoding querystring attributes",(function(){return{qs:t.toString()}}));var r,u=Object(U.a)(t.entries());try{for(u.s();!(r=u.n()).done;){var l=Object(c.a)(r.value,2),s=l[0],d=l[1];!0===s.startsWith("enactive.")&&n.append(s.substring(9),d)}}catch(p){u.e(p)}finally{u.f()}if(!1===n.has("api-host")){var v=document.createElement("a");v.href=e.src,n.append("api-host","api.".concat(v.hostname.replace("www.","")))}return!1===n.has("enabled")&&n.append("enabled","true"),n.sort(),oe("encoding final attributes",(function(){return{attributes:t.toString()}})),n.toString()}}function oe(e,t){!0===ee&&console.debug("[enactive] ".concat(e),null===t||void 0===t?void 0:t())}var ae=n(23),ie=n.n(ae),re=n(42),ce=n(70),ue=n(71),le=function(){function e(t){Object(ce.a)(this,e),this.axios=t}return Object(ue.a)(e,[{key:"getTour",value:function(){var e=Object(re.a)(ie.a.mark((function e(t){var n,o;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={context:this.resolveEventContext(t)},e.next=3,this.axios.post("tours",n);case 3:return o=e.sent,e.abrupt("return",o.data.tours[0]);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"collectTourAction",value:function(){var e=Object(re.a)(ie.a.mark((function e(t,n,o,a){var i,r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.resolveEventContext(t),r={context:i},e.next=4,this.axios.post("tours/".concat(n,"/steps/").concat(o,"/actions/").concat(a),r);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,o,a){return e.apply(this,arguments)}}()},{key:"resolveEventContext",value:function(e){var t,n;return _()({device:{locale:null!==(t=null===(n=document.querySelector("html"))||void 0===n?void 0:n.getAttribute("lang"))&&void 0!==t?t:void 0},page:{url:window.location.href},user:{anonymous:!0,id:""}},e)}}]),e}(),se=Object(u.a)({productionPrefix:"enactive"}),de=function(){var e=te(),t=a.a.useMemo((function(){if(void 0!==e){var t=d.a.create({baseURL:"https://".concat(e.apiHost,"/api/v1/sites/").concat(e.siteId)});return new le(t)}}),[e]),n=a.a.useState(),o=Object(c.a)(n,2),i=o[0],r=o[1];return a.a.useEffect((function(){!0===(null===e||void 0===e?void 0:e.enabled)&&(null===t||void 0===t||t.getTour(null===e||void 0===e?void 0:e.context).then(r))}),[e,t]),Object(O.jsx)(l.b,{generateClassName:se,children:Object(O.jsx)(j,{children:void 0!==i?Object(O.jsx)(N,{onAction:function(n,o,a){return null===t||void 0===t?void 0:t.collectTourAction(null===e||void 0===e?void 0:e.context,i.id,n,a)},onComplete:function(){return r(void 0)},tour:i.steps}):Object(O.jsx)(O.Fragment,{})})})};n(166);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(de,{})}),document.getElementById("enactive-app-root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.3293c1c9.chunk.js.map