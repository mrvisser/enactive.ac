(this["webpackJsonp@enactive-ac/embdr-pdf-ui"]=this["webpackJsonp@enactive-ac/embdr-pdf-ui"]||[]).push([[0],{123:function(e,t){},124:function(e,t){},125:function(e,t){},126:function(e,t){},127:function(e,t){},157:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(37),c=n(82),o=n(208),u=n(201),s=n(44),d=n.n(s),l=n(62),b=n(13),j=n(194),g=n(203),h=n(77),v=n(101),f=n(206);var m=n(67),p=n(6),x=n(209),O=n(205),P=n(204),w=n(196),I=n(199),M=n.n(I),N=n(202),C=n.n(N),k=n(2),y=Object(p.a)(j.a)((function(e){var t=e.theme;return"\n  padding: ".concat(t.spacing(1),"\n")})),S=function(e){var t,n=e.ContainerProps,a=e.paging,i=Object(r.useState)(null!==(t=null===a||void 0===a?void 0:a.pageNumber.toString())&&void 0!==t?t:""),c=Object(b.a)(i,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){var e;u(null!==(e=null===a||void 0===a?void 0:a.pageNumber.toString())&&void 0!==e?e:"")}),[null===a||void 0===a?void 0:a.pageNumber]),Object(k.jsx)(j.a,Object(m.a)(Object(m.a)({direction:"row",spacing:2},n),{},{sx:Object(m.a)({bgcolor:"background.default",color:"text.primary"},null===n||void 0===n?void 0:n.sx),children:void 0!==a?Object(k.jsxs)(y,{alignItems:"center",direction:"row",spacing:1,children:[Object(k.jsx)(w.a,{children:"Page"}),Object(k.jsxs)(x.a,{sx:{"& .MuiButtonGroup-grouped":{minWidth:0,px:0}},children:[Object(k.jsx)(O.a,{onClick:function(){return a.onPrevPage()},children:Object(k.jsx)(M.a,{})}),Object(k.jsx)(P.a,{onBlur:function(){var e=parseInt(o);isNaN(e)||a.onSetPage(e)},onChange:function(e){return u(e.currentTarget.value)},sx:function(e){return{"& .MuiOutlinedInput-input.MuiInputBase-input":{maxWidth:"2rem",p:1,textAlign:"center"},"& .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.primary.main,borderRight:"none",opacity:.5},"& .MuiOutlinedInput-root":{borderRadius:0}}},value:o,variant:"outlined"}),Object(k.jsx)(O.a,{onClick:function(){return a.onNextPage()},children:Object(k.jsx)(C.a,{})})]}),Object(k.jsxs)(w.a,{children:["of ",a.totalPages]})]}):void 0}))},_=function(){var e=Object(r.useState)(1),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(f.a)({updateOnResize:!0}),c=Object(b.a)(i,2),o=c[0],u=c[1],s=Object(r.useState)(),m=Object(b.a)(s,2),p=m[0],x=m[1],O=function(e,t){var n=Object(r.useState)({completed:!1}),a=Object(b.a)(n,2),i=a[0],c=a[1];return Object(r.useEffect)((function(){var t=!0;return Object(l.a)(d.a.mark((function n(){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:r=n.sent,t&&c({completed:!0,value:r}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t&&c({completed:!0,error:n.t0});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))(),function(){t=!1}}),t),i}(Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===p){e.next=5;break}return e.next=3,Promise.all((n=p.numPages,Array.from({length:n},(function(e,t){return t+1}))).map((function(e){return p.getPage(e)})));case 3:return t=e.sent,e.abrupt("return",t.map((function(e){return e.view})).reduce((function(e,t){var n=e.maxPageHeight,r=e.maxPageWidth,a=Object(b.a)(t,4),i=a[2],c=a[3];return{maxPageHeight:Math.max(c,n),maxPageWidth:Math.max(i,r)}}),{maxPageHeight:Number.MIN_SAFE_INTEGER,maxPageWidth:Number.MIN_SAFE_INTEGER}));case 5:case"end":return e.stop()}var n}),e)}))),[p]),P=O.value,w=Object(r.useMemo)((function(){if(void 0!==P&&null!==u){var e=u.height-50,t=u.width-50;return Math.min(e/P.maxPageHeight,t/P.maxPageWidth)}}),[P,u]),I=Object(r.useRef)(null),M=Object(r.useCallback)((function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.scrollTo,c=Math.max(1,Math.min(null!==(t=null===p||void 0===p?void 0:p.numPages)&&void 0!==t?t:1,e));(a(c),void 0!==i)&&(null===(n=I.current)||void 0===n||n.scrollToIndex({behavior:i,index:c-1}))}),[p,I]),N=Object(r.useCallback)((function(){return M(n+1,{scrollTo:"smooth"})}),[M,n]),C=Object(r.useCallback)((function(){return M(n-1,{scrollTo:"smooth"})}),[M,n]);return Object(k.jsxs)(j.a,{sx:{height:"100%",justifyContent:"stretch",width:"100%"},children:[Object(k.jsx)(S,{paging:void 0!==(null===p||void 0===p?void 0:p.numPages)?{onNextPage:N,onPrevPage:C,onSetPage:function(e){return M(e,{scrollTo:"auto"})},pageNumber:n,totalPages:null===p||void 0===p?void 0:p.numPages}:void 0}),Object(k.jsx)(g.a,{ref:o,id:"pages-container",sx:{"& .react-pdf__Document":{height:"100%",width:"100%"},bgcolor:"grey.800",flexGrow:1},children:Object(k.jsx)(h.Document,{file:"/hirsimaa_christoffer_OCH_nycander_martin_K10036.pdf",onLoadSuccess:function(e){return x(e)},children:void 0!==p&&null!==u?Object(k.jsx)(v.a,{ref:I,increaseViewportBy:{bottom:u.height/2,top:u.height/2},itemContent:function(e){return Object(k.jsx)(g.a,{sx:{"& .react-pdf__Page":{transform:"scale(".concat(null!==w&&void 0!==w?w:1,")")},alignItems:"center",display:"flex",height:"".concat(u.height,"px"),justifyContent:"center"},children:Object(k.jsx)(h.Page,{onRenderSuccess:function(){return window.dispatchEvent(new Event("resize"))},pageNumber:e+1})})},rangeChanged:function(e){var t,n=e.endIndex,r=e.startIndex;n-r<2?a(r>0&&null!==(t=null===p||void 0===p?void 0:p.numPages)&&void 0!==t?t:1):a(r+Math.round((n-r)/2)+1)},totalCount:p.numPages}):void 0})})]})};var E=Object(c.a)({palette:{mode:"dark"}}),T=function(){return Object(k.jsxs)(o.a,{theme:E,children:[Object(k.jsx)(u.a,{styles:{"html, body, #root":{height:"100%",width:"100%"}}}),Object(k.jsx)(_,{})]})};n(155),n(156),n(157);Object(i.render)(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(T,{})}),document.getElementById("root"))},88:function(e,t){}},[[159,1,2]]]);
//# sourceMappingURL=main.416cf791.chunk.js.map