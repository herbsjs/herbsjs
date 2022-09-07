"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[7929],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},12374:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={id:"motivation",title:"Motivation",sidebar_label:"Motivation",slug:"/project/motivation",custom_edit_url:null},a=void 0,s={unversionedId:"project/motivation",id:"project/motivation",title:"Motivation",description:"The goal of software development has always been to have happy customers through amazing features, working accurately and delivered as quickly as possible. We know that impose clear challenges for developers.",source:"@site/docs/project/motivators.md",sourceDirName:"project",slug:"/project/motivation",permalink:"/docs/project/motivation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"motivation",title:"Motivation",sidebar_label:"Motivation",slug:"/project/motivation",custom_edit_url:null},sidebar:"sidebar",previous:{title:"8. GraphQL & Rest",permalink:"/docs/tutorial/graphql-rest"},next:{title:"Roadmap",permalink:"/docs/project/Roadmap"}},l={},c=[{value:"Domain-first",id:"domain-first",level:2},{value:"Code Intention",id:"code-intention",level:2},{value:"&quot;Enterprise Features&quot; Out Of The Box",id:"enterprise-features-out-of-the-box",level:2},{value:"Inspirations",id:"inspirations",level:2},{value:"History",id:"history",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The goal of software development has always been to have happy customers through amazing features, working accurately and delivered as quickly as possible. We know that impose clear challenges for developers. "),(0,r.kt)("p",null,"These are the major pain points in software development that Herbs tries to help solve:"),(0,r.kt)("h2",{id:"domain-first"},"Domain-first"),(0,r.kt)("p",null,"A great motivation for Herbs came to realize the huge amount of software that we write around the domain core of an application to make it work properly. It is commonplace to see layers of an application that basically share the same properties and knowledge of the core like entities, fields types, etc. but changes to your domain do not reflect the rest of your code."),(0,r.kt)("p",null,"A very simple and direct manifestation of this is when it is necessary to add a new field to an entity on your domain. That means also changing the entity repository, the GraphQL type or a REST endpoint, changing the documentation, etc. This is because current libraries are not prepared to create a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_source_of_truth#SOLID_&_Source_Code"},"single source of truth")," for their domain."),(0,r.kt)("p",null,"Because of that, a lot of effort is put into writing low-value codes, which are not really related to the business domain."),(0,r.kt)("p",null,"We believe that we can do much better. Developers should put a lot of their efforts into writing high-impact code, focused on their business domain. For the rest, it should be generated automatically for you."),(0,r.kt)("h2",{id:"code-intention"},"Code Intention"),(0,r.kt)("p",null,"Building software that evolves is difficult, especially for those who are tasked with changing the current version to accommodate the new requirements."),(0,r.kt)("p",null,"One of the main reasons why it is difficult is because the code is a manifestation of an initial intention, but that intention is rarely captured in the code. This makes reading code basically a decoding task."),(0,r.kt)("p",null,"As your business rules become more complex, the task of reading and understanding the code becomes exponentially more difficult, thus hampering the evolution of the application."),(0,r.kt)("p",null,"So, if you are building a project that is a team effort and should be up and running in the long run, being able to keep your code understandable to the next developer is essential."),(0,r.kt)("p",null,"With Herbs we try to bring those initial intentions closer to the code. Thus, the next developer who is reading the code will have a much better experience when changing and evolving your application."),(0,r.kt)("h2",{id:"enterprise-features-out-of-the-box"},'"Enterprise Features" Out Of The Box'),(0,r.kt)("p",null,'In business domains it is common the need for authorization and auditing. However, these features are treated as "enterprise" features, which usually requires an investment from the developer to incorporate these features into the application.'),(0,r.kt)("p",null,"This investment should not be necessary if your domain is aware of the actions taken by users."),(0,r.kt)("p",null,"Herbs brings these features out of the box because we simply believe they should be there, even for simple applications. That means having robust applications from the beginning with very low investment."),(0,r.kt)("h2",{id:"inspirations"},"Inspirations"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"herbsJS",src:o(61610).Z,width:"1090",height:"715"})),(0,r.kt)("p",null,"Well design libraries borrowed from the past. Herbs uses the understanding gained by major thinkers in software engineering in order to innovate."),(0,r.kt)("p",null,"Clean Architecture was created by Robert C. Martin and promoted in his book ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"Clean Architecture: A Craftsman\u2019s Guide to Software Structure"),". Like other software design philosophies, Clean Architecture tries to provide a methodology to be used in coding, in order to facilitate code development, allow for better maintenance, updating and less dependencies. An important goal of Clean Architecture is to provide developers with a way to organize code in a way that encapsulates business logic, but keeps it separate from the delivery mechanism."),(0,r.kt)("p",null,"Similar to Clean Architecture, the concept of Domain-driven design (DDD) was initially introduced and made popular by programmer Eric Evans in his 2004 book, ",(0,r.kt)("a",{parentName:"p",href:"https://books.google.com/books?id=hHBf4YxMnWMC&redir_esc=y"},"Domain-Driven Design: Tackling Complexity in the Heart of Software"),", domain-driven design is the expansion upon and application of the domain concept, as it applies to the development of software. It aims to ease the creation of complex applications by connecting the related pieces of the software into an ever-evolving model. "),(0,r.kt)("p",null,"Even though it is not necessary to read these books to use Herbs, reading and understanding the concepts presented there will help you to understand the principles used here and know better, in addition, they are highly recommended for the development of a software developer. "),(0,r.kt)("p",null,"Of course, libraries from different ecosystems have been a great source of inspiration. Successes and mistakes of these efforts were taken into account: ",(0,r.kt)("a",{parentName:"p",href:"https://rubyonrails.org/"},"Rails"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.djangoproject.com"},"Django"),", ",(0,r.kt)("a",{parentName:"p",href:"https://trailblazer.to/"},"Trailblazer"),", ",(0,r.kt)("a",{parentName:"p",href:"https://hanamirb.org/"},"Hanami"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cucumber.io/"},"Cucumber")," and many others. "),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("p",null,"Herbs was created in 2019 at ",(0,r.kt)("a",{parentName:"p",href:"https://vortx.com.br/"},"V\xf3rtx"),", a fintech with exponential growth, a small team and a huge list of demands."),(0,r.kt)("p",null,"Their architecture is based on microservices and required the creation of several services in a short period of time. As a financial institution, it was necessary for these services to be delivered with a high level of quality, observability and maintainability. It was in this scenario that Herbs was born."),(0,r.kt)("p",null,"Since then, Herbs has been used in production in more than 20 microservices there, became a open source project and is maintained by several people inside and outside V\xf3rtx."))}u.isMDXComponent=!0},61610:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/herbsjs_clean_architecture-0aa8c7d4e0c35537ad601223c5fa6fd8.png"}}]);