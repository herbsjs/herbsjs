(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),s=n(7),i=(n(0),n(95)),a={id:"gettingStarted",title:"Getting started",sidebar_label:"Getting started",slug:"/usecase/getting-started"},o={unversionedId:"usecase/gettingStarted",id:"usecase/gettingStarted",isDocsHomePage:!1,title:"Getting started",description:"Installing",source:"@site/docs/usecase/getting-started.md",slug:"/usecase/getting-started",permalink:"/website/docs/usecase/getting-started",editUrl:"https://github.com/herbsjs/website/edit/master/website/docs/usecase/getting-started.md",version:"current",sidebar_label:"Getting started",sidebar:"sidebar",previous:{title:"\u2800\u2800\u2800",permalink:"/website/docs/usecase"},next:{title:"Features",permalink:"/website/docs/usecase/features"}},c=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"installing"},"Installing"),Object(i.b)("p",null,"$ npm install buchu"),Object(i.b)("h3",{id:"using"},"Using"),Object(i.b)("p",null,"Check the complete examples ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/herbsjs/buchu/tree/master/examples"}),"here")," or for a complete solution using herbsJS ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/herbsjs/todolist-on-herbs"}),"here"),"."),Object(i.b)("p",null,"usecases/addOrUpdateItem.js:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const { entity, field } = require('gotu')\nconst Item = entity('Item', {\n  id: field(Number),\n  description: field(String),\n  isDone: field(Boolean),\n  position: field(Number)\n})\n\nconst { Ok, Err, usecase, step, ifElse } = require('../../../src/buchu')\nconst dependency = {\n    ItemRepository: require('../repositories/ItemRepository').ItemRepository,\n    ...\n}\n\nconst addOrUpdateItem = (injection) =>\n\n    usecase('Add or Update an Item on a to-do List', {\n\n        // Input/Request type validation \n        request: { listId: Number, item: Item },\n\n        // Authorization Audit  \n        authorize: (user) => user.isAdmin ? Ok() : Err(),\n\n        // Dependency Injection control\n        setup: (ctx) => ctx.di = Object.assign({}, dependency, injection),\n      \n        // Step audit and description\n        'Check if the Item is valid': step((ctx) => {\n            ...\n            return item.validate() // Ok or Error\n        }),\n\n        'Check if the List exists': step(async (ctx) => {\n            ...\n            return Ok()\n        }),\n\n        // Conditional step\n        'Add or Update the Item': ifElse({\n\n            'If the Item exists': step(async (ctx) => {\n                ...\n                return Ok(newItem)\n            }),\n\n            'Then: Add a new Item to the List': step(async (ctx) => {\n                ...\n                return ctx.ret = await itemRepo.save(item) // Ok or Error\n            }),\n\n            'Else: Update Item on the List': step(async (ctx) => {\n                ...\n                return ctx.ret = await itemRepo.save(item) // Ok or Error\n            })\n        })\n    })\n")),Object(i.b)("p",null,"controler/addOrUpdateItem.js:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.put('/items/:item', function (req, res) {\n    const request = req.params\n    const user = { name: 'John', id: '923b8b9a', isAdmin: true } // from session\n\n    const uc = addOrUpdateItem()\n    uc.authorize(user)\n    const ret = await uc.run(request)\n    res.send(ret)\n})\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"uc.doc()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  type: 'use case',\n  description: 'Add or Update an Item on a to-do List',\n  request: { listId: Number, item: Item },\n  response: String,\n  steps: [\n    { type: 'step', description: 'Check if the Item is valid', steps: null },\n    { type: 'step', description: 'Check if the List exists', steps: null },\n    { \n        type: 'if else',\n        if: { type: 'step', description: 'If the Item exists', steps: null },\n        then: { type: 'step', description: 'Then: Add a new Item to the List', steps: null },\n        else: { type: 'step', description: 'Else: Update Item on the List', steps: null }\n    }\n  ]\n}\n")))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=s.a.createContext({}),u=function(e){var t=s.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return s.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||i;return n?s.a.createElement(m,o(o({ref:t},p),{},{components:n})):s.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);