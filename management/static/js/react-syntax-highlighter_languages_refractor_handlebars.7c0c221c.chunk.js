"use strict";(self.webpackChunk_enactive_ac_management_ui=self.webpackChunk_enactive_ac_management_ui||[]).push([[3846,3047],{2710:function(e,n,a){var t=a(9791);function i(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=i,i.displayName="handlebars",i.aliases=[]},9791:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,i,r){if(a.language===t){var o=a.tokenStack=[];a.code=a.code.replace(i,(function(e){if("function"===typeof r&&!r(e))return e;for(var i,s=o.length;-1!==a.code.indexOf(i=n(t,s));)++s;return o[s]=e,i})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var i=0,r=Object.keys(a.tokenStack);!function o(s){for(var u=0;u<s.length&&!(i>=r.length);u++){var l=s[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var c=r[i],p=a.tokenStack[c],g="string"===typeof l?l:l.content,f=n(t,c),d=g.indexOf(f);if(d>-1){++i;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),m=g.substring(d+f.length),h=[];k&&h.push.apply(h,o([k])),h.push(b),m&&h.push.apply(h,o([m])),"string"===typeof l?s.splice.apply(s,[u,1].concat(h)):l.content=h}}else l.content&&o(l.content)}return s}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.7c0c221c.chunk.js.map