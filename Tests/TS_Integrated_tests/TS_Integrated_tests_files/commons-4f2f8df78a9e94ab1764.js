(self.webpackChunktaniarascia_com=self.webpackChunktaniarascia_com||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!o(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";var r,a,o,i,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),p=n.n(f),m=n(7294),A=n(6494),d=n.n(A),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",v="href",C="http-equiv",T="innerHTML",S="itemprop",O="name",k="property",B="rel",I="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",U="defer",j="encodeSpecialCharacters",P="onChangeClientState",M="titleTemplate",Z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),x=[E.NOSCRIPT,E.SCRIPT,E.STYLE],Q="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=_(e,E.TITLE),n=_(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,R);return t||r||void 0},Y=function(e){return _(e,P)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===B&&"canonical"===e[n].toLowerCase()||u===B&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==T&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=d()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(E.BODY,r),ue(E.HTML,a),ce(f,p);var m={baseTag:le(E.BASE,n),linkTags:le(E.LINK,o),metaTags:le(E.META,i),noscriptTags:le(E.NOSCRIPT,c),scriptTags:le(E.SCRIPT,l),styleTags:le(E.STYLE,s)},A={},d={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(A[e]=n),r.length&&(d[e]=m[e].oldTags)})),t&&t(),u(e,A,d)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(E.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Q),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(Q):n.getAttribute(Q)!==i.join(",")&&n.setAttribute(Q,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Q,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Q]=!0,a=fe(n,r),[m.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[Q]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===T||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===T||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===x.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(g,a,r),link:pe(E.LINK,o,r),meta:pe(E.META,i,r),noscript:pe(E.NOSCRIPT,c,r),script:pe(E.SCRIPT,u,r),style:pe(E.STYLE,l,r),title:pe(E.TITLE,{title:f,titleAttributes:p},r)}},Ae=s()((function(e){return{baseTag:z([v,N],e),bodyAttributes:X(h,e),defer:_(e,U),encode:_(e,j),htmlAttributes:X(g,e),linkTags:q(E.LINK,[B,v],e),metaTags:q(E.META,[O,y,C,k,S],e),noscriptTags:q(E.NOSCRIPT,[T],e),onChangeClientState:Y(e),scriptTags:q(E.SCRIPT,[I,T],e),styleTags:q(E.STYLE,[w],e),title:V(e),titleAttributes:X(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),de=(a=Ae,i=o=function(e){function t(){return J(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return K({},a,((t={})[r.type]=i,t.titleAttributes=K({},o),t));case E.BODY:return K({},a,{bodyAttributes:K({},o)});case E.HTML:return K({},a,{htmlAttributes:K({},o)})}return K({},a,((n={})[r.type]=K({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);de.renderStatic=de.rewind,t.Z=de},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},2990:function(e,t,n){"use strict";n.d(t,{A:function(){return S}});var r=n(7294),a=n(9499),o=n(5414),i=n(9168),c=n(5444),u=n(8415),l=function(e){var t=e.position,n=void 0===t?"down":t;return r.createElement("svg",{width:"10",height:"5",viewBox:"-2.5 -5 75 60",preserveAspectRatio:"none",style:"right"===n?{transform:"rotate(-90deg)"}:{}},r.createElement("path",{d:"M0,0 l35,50 l35,-50",fill:"none",strokeLinecap:"round",strokeWidth:"5"}))},s=function(){return r.createElement("svg",{viewBox:"0 0 20 20",width:"18",height:"20"},r.createElement("path",{fill:"var(--primary)",d:"M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"}))},f=function(e){var t=e.setCollapsed,n=(0,a.useLocation)(),o=(0,r.useState)({}),i=o[0],f=o[1],p=(0,c.useStaticQuery)("352937542").allMarkdownRemark.edges,m=(0,r.useMemo)((function(){return(0,u.Nx)(p)}),[p]),A=(0,r.useMemo)((function(){return(0,u.en)(m)}),[m]);return(0,r.useEffect)((function(){var e=m.find((function(e){return e.slug===n.pathname}));if(null!=e&&e.categories){var t=e.categories.reduce((function(e,t){var n;return Object.assign({},e,((n={})[t]=!0,n))}),{});f((function(e){return Object.assign({},e,t)}))}}),[m,n]),r.createElement("aside",{className:"sidebar"},r.createElement("div",{className:"categories"},A.map((function(e){return r.createElement(r.Fragment,{key:e},r.createElement("button",{className:"category",onClick:function(){return function(e){i[e]?f((function(t){var n;return Object.assign({},t,((n={})[e]=!1,n))})):f((function(t){var n;return Object.assign({},t,((n={})[e]=!0,n))}))}(e)}},r.createElement(l,{position:i[e]?"down":"right"}),r.createElement("span",null,e)),r.createElement("nav",{className:i[e]?"":"collapsed"},m.filter((function(t){return(t.categories||[]).includes(e)})).map((function(e){return r.createElement(c.Link,{key:e.title,to:e.slug,activeClassName:"active",onClick:function(){return t(!0)}},r.createElement(s,null),r.createElement("span",null,e.title))}))))}))))},p=function(){return r.createElement("svg",{viewBox:"0 0 100 80",width:"20",height:"12"},r.createElement("rect",{width:"100",height:"10"}),r.createElement("rect",{y:"30",width:"100",height:"10"}),r.createElement("rect",{y:"60",width:"100",height:"10"}))},m=n(8739),A=[{url:"/blog",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmT9IQkEcx7XmJ4QRBBItbZGiLc7SVtmQ0GJbRottDRaKRlMQ5BI4SdIgLQk6iAkiRJNiW7VE5WTSoNAiZfi7fuK7ON97vhPu3fJ793535/f3ud/94Wk2MYokSd2eK5VKQQu/3w+Wd73dbptZGnrvmU7DCIwcRiDA6EkUbCwSAxuOhrnUkR6LpCJB4QTi1JZLZQguuB8E6131gs1kM2Dj5/Ghfrq9Ur32UIPxaJL/CBpGYKvVgohqVRIZlumZ6WGLjulLX6VluYwNHXYH+R2tBA0n0OEkkbJKvV4f6rfb7eDPHSfBSo1vsO6zbVk/1TlIExRW4EgJN9DJarXKhggGya6w2SVEX9/fwG5dH4HVTFB4gfQqVit4L+CEps8vU2CRXKVSgbrL5SLEso9gE0+50QgKL1AtMVzFvo056HJ/d0u6fnrArO+uycjF4+QkwtLpdEYjKLxAtVOMOUeTy19OQIxLCxawizukjiV0EIJHvC1pXsXCC1SaYvcyIaJEbna+De3cgR+wF4kq2GKhqI+g8AJZU6w252hym75TiNmzQla3boLCC6SnWG/O4X2y2WjyISi8QJxivTlHB8o9B4UVaLGQE6D1cUMg/J2t9AnB2ucw52w2mwwizozuVWwcgaUvIJAvwCeb/tnK2ueUNnhuOdgnKLpAJPKUnIRHVs4pkeO+DyJBwwikCeE3HHzPWrXox5s3t5OEJiiMQPzsppRTvPyab9TCChwgQjY8qkiSxAuabBzNX1hNJpPwAsdCSuugQ/8C0DrYONr/AqWg4EdKn+XrAAAAAElFTkSuQmCC",label:"Articles"},{url:"/projects",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXlJREFUWEdjZBjkgHGQu48Bw4FcXFz/B9LR3759Q3HT0HEgesh9DQ1CCUju1evA/K9brFDFfY6B+d8OOKOIcznsBfPPnz+PIn7/9n28ERQUBrEXFpLwEBxyDhzIdEhUCA5aB5qZmWF124cPH6jq5i9fvqCY9+3bNzAfZg/ONDjqQGi4Df8Q3D/VEmuaM4zeTpW0SHEIDnoHwoKJ2rkXZi7FIThkHEgoqg+5e2JNk3Y78adVqoXgoHUgvdIeLPhJrkmGjAOTFiZRpdyDGTIpeBJW88gOwUHvQKoGHwMDA3ruHf5pEOZDq8bDVA3MXcWGsL4HirlEtwfRc/GgdyClwUco7aFXrQRb1NQuB2nuwPNLsde5sPYhrjoZFjJGa1dj7YOgxwzZaXDQO5DcNIir1YLLPLJDcNA7kNhi5li9LdgvbkuWkeSnJW4upPWLyS0HB8yBJAUHljoX1lohZA7d0iCpmYNgQQ1TMDrCSiCOCQ4BE0oj9JYf9KP8AAwOCkcMzeo6AAAAAElFTkSuQmCC",label:"Projects"},{url:"/me",icon:i.Z,label:"About me"}],d=[{url:"https://github.com/taniarascia",icon:m.Z,label:"GitHub"},{url:"https://twitter.com/taniarascia",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAgdJREFUWEftmC1PA0EQhq9NDYpABaUoEgghgEIRUASDJhDsOQwGheQ/IMDVQ9AYkPwAwocBS2kFECTJpSWZndnm5jLs7vUCcwk127vO7r7zdGZ27iqR8k9Fub7oX+Cw/5APwT5sUm+avd7aPnOG1WXn+2ymVGC9CcLimxfwprU69SsEZyarsO/zaw/gyQTLIjA6vQdy8dJYPpLoqBiUGNNE7umyB6azm1UYnQT1CSSP96+M0wuNfARZiHCCrbsPc2tvEYb+dRvG7u0IjGuHXwLBsgis7VyAB8nEaBhJgZwlxlE+dOBOZ3oZxsaBiXWqt9kYxA30CRTKihW6PpfyXcxqvg7FGs3eHjffzt/NiARr3U/zj52skCWrg2URGGH2xrvzKWJiDJEVZqM9eSRyZH/0mFrfm6B+geQX1UG8JqJOkjxLpWuMPfvz8UYqe1OBCBf8SFIrEM/ejOPcYzxhfIFZO7aOjb2zLU+C6gXmzWIXSoEcTUu8CaoVSK7wZoFlMZkFZ3Ng7GWzuOwCXSFGfaMr+ylrXbEXTPDvBPICTc+9rO3iAhPW3RRNbkCwNAKpQGNXwolIfWEoOd/YyxJUK5CXF+mo8+1K0I5nayg5uZtRK5CRpJizntPTnUDSSYzmBb4dcz7V6RM4IJR+7eas1IJBIDG+yk/vB9ULzMus0Hk+b1gL3TB0sW8ArqEwk582IgAAAABJRU5ErkJggg==",label:"Twitter"}],h=function(e){var t=e.setCollapsed,n=e.onUpdateTheme;e.theme;return r.createElement("header",{className:"navigation"},r.createElement("div",{className:"navigation-inner"},r.createElement("nav",{className:"brand-section"},r.createElement("button",{onClick:function(){return t((function(e){return!e}))},className:"desktop-only collapse-button",title:"Collapse Sidebar"},r.createElement(p,null)),r.createElement(c.Link,{to:"/",className:"brand"},r.createElement("span",null,"Tania Rascia"))),r.createElement("div",null,r.createElement("nav",null,A.map((function(e){return r.createElement(c.Link,{to:e.url,key:e.label,activeClassName:"active"},r.createElement("img",{src:e.icon,alt:e.label}),r.createElement("div",{className:"tooltip"},e.label))})))),r.createElement("div",{className:"toolbar-section"},r.createElement("nav",{className:"social-nav"},d.map((function(e){return r.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer",key:e.label},r.createElement("img",{src:e.icon,alt:e.label}))}))),r.createElement("button",{onClick:n,className:"theme-switcher"},r.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYlJREFUWEftmDFuwkAQRe0rRIECWpSWs+QE1ClzDgpKak6QU0TQ0kZROigSixMggbD9LXms4a/HcZhFoVnh3WX/vBnPzpAmHT+jh+R07Sf2hyTtckSnzZeD3QqUwnafiwLUz2s+ZB+jfJzO9jWAbYmaCboXKONKE5y9z2tLQTSUpJlgdAI1wSw2GclfIxidQAhGbFpJ9kYweoEwQOZLGZM3I+hGYFdX907wbgR+bY65Lc/L73xELLoh+C+QFaUsYd+MoCZMppn4Bcp6jlUZzKWh6QXrKMFoBKLqGE+K3sJKMjT2WhP0L3Bd2jQoujSQhKUaUdZEybeWkcN8dZNULvEucLsq+tnHp3o/myhEYWlVMeNB2R9r5MwE3QqUeUsVioUl0SofBhILJdeIwWgFajdGI0bLhegxtH24MTAv6z+5r1EP4m2Gi90JlK7Gdya4LTGWV9UYjEagJCJvireXoQat9hwxFkqMxqB2qnuBjKhmmLUaojHI/Mf+m7a61OxiJriv+T/ri60GnAG1B7A4DYusaQAAAABJRU5ErkJggg==",alt:"Theme"})))))},g=n.p+"static/netlify-33bca343cbbd80d8da58eae4d7adc926.png",b=[{url:"https://taniarascia.substack.com/subscribe",label:"Newsletter"},{url:"https://ko-fi.com/taniarascia",label:"Ko-Fi"},{url:"https://patreon.com/taniarascia",label:"Patreon"},{url:"https://www.taniarascia.com/rss.xml",label:"RSS"}],E=[{url:"https://www.gatsbyjs.org/",label:"Gatsby",icon:"data:image/png;base64,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"},{url:"https://github.com/taniarascia",label:"GitHub",icon:m.Z},{url:"https://www.netlify.com",label:"Netlify",icon:g}],y=function(){return r.createElement("footer",{className:"footer"},r.createElement("section",null,r.createElement("nav",null,r.createElement("span",{className:"desktop-only"},"Made by Tania Rascia"),b.map((function(e){return r.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",key:e.url},e.label)}))),r.createElement("nav",null,E.map((function(e){return r.createElement("a",{href:e.url,title:e.label,target:"_blank",rel:"noopener noreferrer",key:e.url},r.createElement("span",null,e.label),r.createElement("img",{src:e.icon,alt:e.label}))})))))};function w(e){localStorage.setItem("theme","dark"),e("dark"),document.body.style.backgroundColor="#282c34"}function v(e){localStorage.setItem("theme","light"),e("light"),document.body.style.backgroundColor="white"}function C(e){localStorage.setItem("theme","sepia"),e("sepia"),document.body.style.backgroundColor="#f1e2c0"}function T(e,t){var n=e;return t&&(n+=" collapsed"),n}var S=function(e){var t=e.children,n=(0,a.useLocation)(),c=(0,r.useState)("dark"),u=c[0],l=c[1],s=(0,r.useState)(!0),p=s[0],m=s[1];n.pathname;return(0,r.useEffect)((function(){var e=localStorage.getItem("theme");"dark"!==e&&e||w(l),"sepia"===e&&C(l),"light"===e&&v(l)}),[]),r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement("link",{rel:"shortcut icon",type:"image/png",href:i.Z})),r.createElement("div",{className:T(u,p)},r.createElement(f,{setCollapsed:m}),r.createElement(h,{setCollapsed:m,onUpdateTheme:function(){return function(e){"dark"===e?C(l):"light"===e?w(l):"sepia"===e&&v(l)}(u)},theme:u}),r.createElement("main",null,t),r.createElement(y,null)))}},2248:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(7294),a=n(5414),o=n(5501),i=function(e){var t,n,i,c=e.postNode,u=e.postPath,l=e.postSEO,s=e.customDescription,f=o.Z.siteLogo;if(l){var p=c.frontmatter;t=p.title,n=c.excerpt,p.thumbnail&&(f=p.thumbnail.childImageSharp.fixed.src),i=""+o.Z.siteUrl+u}else t=o.Z.siteTitle,n=s||o.Z.description;f=""+o.Z.siteUrl+f;var m=[{"@context":"http://schema.org","@type":"WebSite",url:o.Z.siteUrl,name:t,alternateName:t}];return l&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:f}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:o.Z.siteUrl,name:t,alternateName:t,headline:t,image:{"@type":"ImageObject",url:f},description:n}),r.createElement(a.Z,null,r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{name:"image",content:f}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),r.createElement("meta",{property:"og:url",content:l?i:o.Z.siteUrl}),l&&r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:image",content:f}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:n}),r.createElement("meta",{name:"twitter:image",content:f}))}},5501:function(e,t){"use strict";t.Z={siteTitle:"Tania Rascia",siteUrl:"https://www.taniarascia.com",siteLogo:"/logo.png",description:"Software engineer and open source creator. This is my digital garden."}},8415:function(e,t,n){"use strict";n.d(t,{Nx:function(){return a},en:function(){return o},lV:function(){return i},jk:function(){return c}});var r=n(5785);function a(e,t){return void 0===t&&(t={}),e.map((function(e){var n,r,a;return Object.assign({id:e.node.id,date:e.node.frontmatter.date,slug:e.node.fields.slug,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:t.shortTitle?e.node.frontmatter.shortTitle:e.node.frontmatter.title,description:e.node.frontmatter.description},t.thumbnails&&{thumbnail:null===(n=e.node.frontmatter)||void 0===n||null===(r=n.thumbnail)||void 0===r||null===(a=r.childImageSharp)||void 0===a?void 0:a.fixed})}))}function o(e){return e.reduce((function(e,t){return(0,r.Z)(new Set([].concat((0,r.Z)(e),(0,r.Z)(t.categories||[]))))}),[]).sort()}function i(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}function c(e){var t=document.createElement("script"),n=function(){var e=localStorage.getItem("theme");return"dark"===e?"dark-blue":"sepia"===e?"gruvbox-dark":"light"===e?"github-light":"github-dark"}();t.async=!0,t.src="https://utteranc.es/client.js",t.setAttribute("repo","taniarascia/comments"),t.setAttribute("issue-term","pathname"),t.setAttribute("id","utterances"),t.setAttribute("theme",n),t.setAttribute("crossorigin","anonymous"),e&&e.current?e.current.appendChild(t):console.log("Error adding utterances comments on: "+e)}},9168:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAbNJREFUWEdjZCARSEnJ/ydRC4ryZ88eMpKinyTFIIMH3IH8QmZYQ4ib4yXY45MmLSAlADDU5uUlgMW+/hAH0x/fncIbSBiSg9aBMIe1de5C8fWWnX/B/IvHjMD0hg17yArBR4+egPXBQlDf6hyYf2yfJ96QhIfgkHPgtZvsYJ/de/ANbwhKSUHS0rNnkDQKA2ZmqijJZ82a/eC0jR6CMPW4QhJnCA5bB8LSWkiII94QDIy6gRJDuEKS6iE4aByIK+2R6kBYyMHSOnpaJDsEB70DcRWGgyYEB70DYSFFarUCKwdhuZhmaXDQOBDdh7A6mdSQg6lHDzmKQ3DIOJDcECNWH9nlILEWUKqOYgcumWdPqRtQ9Fs5bQfzlRS4UOpkkmsSmKmD1oEwh509tZYqIXjt2h2wObEJ5WA6JukgZSE4aB0I64vA0gQsBJWVZcgKybt3IX0SqoXgqAMpTYOjITgagiTm5ZGTi3GV7Og1CbHlIXrIwQIeVpPA6mSi+8WD3oG4fLR4QSeJqQ6/crJDcNA6EOZfXAOYVA0+PIahj7gSPcI6aBxIL4cQaw/Jo/zEGkwtdQBrbfJHElv02wAAAABJRU5ErkJggg=="},8739:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmLtKA0EUhg1iETD2ETtJbATFlHaxtLFSMAHB0sZOsPLSCGkkCj5BougrCNamWBMrQ6JdRDshEawk4pn9zcwwl911i9k0k90zc+afb8+cuaTG9L+hb0oZ6sRhMvZj6txZgSSsXNokOrX6JShhMBAelZ7gx9AP+VcRTJbAp3abRuJ5D1RixMAHe1Ccsh/ZvwzNStAlgcKnDUsmKEFdvUH/k0ydbkeIeZ5gMgViZP8lhPaZqUmlq8gEEyOQi41YYBYKS+RHBhA6BhXo3RKIvPV1dxSLMDhJFw/or0wyNEFnBWIN7jevBXKZxXXhedC6MZLV1Z/4YCuUTBJAsKJo82DiBILE7doyjfzq+Z3Kau1ESdBWP3aCtg5llbb6EQSO+0vdBvVVq7PY6zfZfhAdbs/PClpsBHX1RwKP/dm8QKXnPfr+vyn8uBhMuEBbErw/rAaKTZAb5cOYCDogEBLMn9omVGcPSw5+FDtq9wRqjpfhhO6W9wV4F+dbSpjpIou5fI5lg073RZi1cqNfgokRqPvsNIB8Li+NOFo0jsiJZw+dN56gmwKzjSERWjkrkUDuJsGPFUYu7p+879MSdF4glEPo9E6BXmFfhthDPZzKdIepoHZ532eKQbI5L5AbAcVktsGyT6Y8589eNutwN4ObB/lQFdZuI6m9m3FZIGBK+e8vb5EdpzEFAWpns9vuBXU5j49VtwRWeiwf7s2ob4UrPRaTMdiNN7VcP+KO2lmBEIZve/oqZqS3FnuurLISdrxH7bB2tJP9yPkw5brAHy6QY3VmdklZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=commons-4f2f8df78a9e94ab1764.js.map