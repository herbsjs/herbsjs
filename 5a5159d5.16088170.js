(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/herbsjs_diagram-43b77a3c7276d5f4ae37b5fa141befe3.png"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(95)),a={id:"architecture",title:"Architecture guides",sidebar_label:"Architecture guidelines",slug:"/introduction/architecture-guidelines"},c={unversionedId:"introduction/architecture",id:"introduction/architecture",isDocsHomePage:!1,title:"Architecture guides",description:"HerbsJS is an evolutionary and open source library, so we would love to see you contribute to it, making the library our best working tool. So we created some architectural guides that define HerbsJS to help you when it comes to consuming and contributing to the project:",source:"@site/docs/introduction/architecture-guidelines.md",slug:"/introduction/architecture-guidelines",permalink:"/website/docs/introduction/architecture-guidelines",editUrl:"https://github.com/herbsjs/website/edit/master/website/docs/introduction/architecture-guidelines.md",version:"current",sidebar_label:"Architecture guidelines",sidebar:"sidebar",previous:{title:"Motivators",permalink:"/website/docs/introduction/motivators"},next:{title:"The HerbsJS Ecosystem",permalink:"/website/docs/introduction/ecosystem"}},s=[],l={toc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"HerbsJS is an evolutionary and open source library, so we would love to see you contribute to it, making the library our best working tool. So we created some architectural guides that define HerbsJS to help you when it comes to consuming and contributing to the project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Modular")," (Write programs that do one thing and do it well) - Libs need to be lean, with a single big goal and do this well.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},'Primary libs and "glue" libs')," - The herbsJS ecosystem is divided into two parts, the primitive libs, which work directly at the core of the application and the glue libs, which adapt/communicate the primary libs with the external layers of the software.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"(Your) Configuration Convention")," - The libs are flexible and have the possibility to receive many different configurations, this makes it much easier to build good tests.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Emit meta-data (Write programs to work together)")," - Especially the primary libs need to send metadata about everything that is happening there, so you can more easily create the secondary libs or connect third party libraries. In addition, this makes the code much easier to understand, audit and log.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Tests")," - all, yes, all software here needs to be testable, we strongly believe in the benefit that well-tested software brings, that is why herbsJS tries its best to embrace this cause, receive on your calls the possibility of dependency injections and thus bring insulation with external layers, thus facilitating the software's ability to test exactly what it needs to test."))),Object(o.b)("p",null,Object(o.b)("img",{alt:"Libs herbsJS",src:r(152).default})))}u.isMDXComponent=!0},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,h=b["".concat(a,".").concat(p)]||b[p]||d[p]||o;return r?i.a.createElement(h,c(c({ref:t},l),{},{components:r})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);