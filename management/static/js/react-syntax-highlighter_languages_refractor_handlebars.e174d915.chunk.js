(this["webpackJsonpenactive-management-ui"]=this["webpackJsonpenactive-management-ui"]||[]).push([[51,81],{483:function(e,n,a){"use strict";function t(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,i,o){if(a.language===t){var r=a.tokenStack=[];a.code=a.code.replace(i,(function(e){if("function"===typeof o&&!o(e))return e;for(var i,s=r.length;-1!==a.code.indexOf(i=n(t,s));)++s;return r[s]=e,i})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var i=0,o=Object.keys(a.tokenStack);!function r(s){for(var u=0;u<s.length&&!(i>=o.length);u++){var l=s[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var c=o[i],p=a.tokenStack[c],g="string"===typeof l?l:l.content,f=n(t,c),d=g.indexOf(f);if(d>-1){++i;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),m=g.substring(d+f.length),h=[];k&&h.push.apply(h,r([k])),h.push(b),m&&h.push.apply(h,r([m])),"string"===typeof l?s.splice.apply(s,[u,1].concat(h)):l.content=h}}else l.content&&r(l.content)}return s}(a.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},575:function(e,n,a){"use strict";var t=a(483);function i(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=i,i.displayName="handlebars",i.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.e174d915.chunk.js.map