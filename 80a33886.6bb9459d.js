(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return o}));var n=a(3),i=a(7),c=(a(0),a(95)),r={id:"herbs2knex",title:"Herbs2knex",sidebar_label:"herbs2knex",slug:"/glues/Herbs2knex"},b={unversionedId:"glues/herbs2knex",id:"glues/herbs2knex",isDocsHomePage:!1,title:"Herbs2knex",description:"herbs2knex",source:"@site/docs/glues/herbs2knex.md",slug:"/glues/Herbs2knex",permalink:"/website/docs/glues/Herbs2knex",editUrl:"https://github.com/herbsjs/website/edit/master/website/docs/glues/herbs2knex.md",version:"current",sidebar_label:"herbs2knex",sidebar:"sidebar",previous:{title:"Herbs2gql",permalink:"/website/docs/glues/herbs2gql"},next:{title:"Herbsshelf",permalink:"/website/docs/glues/herbsshelf"}},s=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]},{value:"What is a Repository?",id:"what-is-a-repository",children:[]},{value:"Herbs2knex Repository",id:"herbs2knex-repository",children:[]},{value:"Why Knex?",id:"why-knex",children:[]},{value:"Repository setup",id:"repository-setup",children:[]},{value:"Retrieving and Persisting Data",id:"retrieving-and-persisting-data",children:[{value:"<code>findByID</code>",id:"findbyid",children:[]},{value:"<code>findBy</code>",id:"findby",children:[]},{value:"<code>insert</code>",id:"insert",children:[]},{value:"<code>update</code>",id:"update",children:[]},{value:"<code>delete</code>",id:"delete",children:[]},{value:"Conventions - Defaul implementation",id:"conventions---defaul-implementation",children:[]},{value:"Object-Oriented versus Relational models - Relationships",id:"object-oriented-versus-relational-models---relationships",children:[]}]},{value:"TODO",id:"todo",children:[]}],l={toc:s};function o(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"herbs2knex"},"herbs2knex"),Object(c.b)("p",null,"herbs2knex creates repositories to retrieve and store ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/herbsjs/gotu"}),"Entities")," using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://knexjs.org"}),"Knex"),"."),Object(c.b)("h3",{id:"installing"},"Installing"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ npm install herbs2knex\n")),Object(c.b)("h3",{id:"using"},"Using"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"connection.js")," - Knex initialization:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const knex = require('knex')\nconst config = require('./config')\nmodule.exports = knex(config)\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"itemRepository.js"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { Repository } = require('herbs2knex')\nconst connection = require('connection')\nconst { Item } = require('../domain/entities/item')\n\nclass ItemRepository extends Repository {\n    constructor() {\n        super({\n            entity: Item,\n            table: 'aTable',\n            ids: ['id'],\n            knex: connection\n        })\n    }\n\n    excludedItemFromLastWeek() {\n        ...\n    }\n}\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"someUsecase.js"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const repo = new ItemRepository()\nconst ret = await repo.findByID(1)\n")),Object(c.b)("h3",{id:"what-is-a-repository"},"What is a Repository?"),Object(c.b)("p",null,"A repository, by ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks"}),"definition"),", is part of the layer to retrieve and store entities abstracting the underlying implementation. By using repositories, details of these implementation such as relational database, document-oriented databases, etc, should not leak to the domain code. In other words, no raw SQL queries on your use case or entity files."),Object(c.b)("h3",{id:"herbs2knex-repository"},"Herbs2knex Repository"),Object(c.b)("p",null,"In order to boost productivity Herbs2knex provides way to dynamically generate a repository class based on your Entities and other metadata. "),Object(c.b)("p",null,"These metadata are necessary to close the gap between OOP concepts and paradigms and those of relational databases. For example, it is necessary to specify primary keys and foreign keys as these information do not exist in the description of your domain."),Object(c.b)("p",null,"Following Herbs architecture principals it is not the intention of this lib to create yet another ORM or query builder but to create a bridge between your domain and an existing one (Knex)."),Object(c.b)("h3",{id:"why-knex"},"Why Knex?"),Object(c.b)("p",null,"Herbs2knex is just one of many bridges possible between Herbs and other packages."),Object(c.b)("p",null,"The advantage of using Knex is that is a simple and flexible SQL query builder. It also supports Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift. So you can build your system using these databases out of the box."),Object(c.b)("h3",{id:"repository-setup"},"Repository setup"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { Repository } = require('herbs2knex')\nconst connection = require('connection')  // Knex initialize instance\nconst { ProductItem } = require('../domain/entities/productItem')\n\nclass YourRepository extends Repository {\n    constructor() {\n        super({\n            entity: ProductItem,\n            schema: 'main',\n            table: 'product_items',\n            ids: ['id'],\n            foreignKeys: [{ customerId: String }],\n            knex: connection\n        })\n    }\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"entity")," - The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/herbsjs/gotu"}),"Entity")," to be used as reference "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"entity: ProductItem\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"schema")," - The schema to be used  "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"schema: 'production'\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"table")," - The name of the table in database"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"table: 'product_items'\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"ids")," - Primary keys"),Object(c.b)("p",{parentName:"li"},"  Format: ",Object(c.b)("inlineCode",{parentName:"p"},"['fieldName', 'fieldName', ...]")),Object(c.b)("p",{parentName:"li"},"  There must be corresponding fields in the entity."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"ids: ['id']  // productItem.id\n")),Object(c.b)("p",{parentName:"li"},"  or for composite primary key: "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"ids: [`customerId`, `productId`]  // productItem.customerId , productItem.productId\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"foreignKeys")," (optional) - Foreign keys for the database table"),Object(c.b)("p",{parentName:"li"},"  Usually there is no corresponding fields declared in the entity for foreign keys. That is the reason it is necessary to inform the name and the type of the fields."),Object(c.b)("p",{parentName:"li"},"  Format: ",Object(c.b)("inlineCode",{parentName:"p"},"[{ fieldName: Type }, { fieldName: Type }, ...]")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"foreignKeys: [{ customerId: String }]\n")),Object(c.b)("p",{parentName:"li"},"  The field names will te converted to a database names using conventions. Ex: ",Object(c.b)("inlineCode",{parentName:"p"},"customer_id"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"knex")," - Knex initialize instance"),Object(c.b)("p",{parentName:"li"},"  Check Knex ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://knexjs.org/#Installation-client"}),"documentation")))),Object(c.b)("h2",{id:"retrieving-and-persisting-data"},"Retrieving and Persisting Data"),Object(c.b)("h3",{id:"findbyid"},Object(c.b)("inlineCode",{parentName:"h3"},"findByID")),Object(c.b)("p",null,"Find entities by IDs"),Object(c.b)("p",null,"Format: ",Object(c.b)("inlineCode",{parentName:"p"},".findByID(id)")," where ",Object(c.b)("inlineCode",{parentName:"p"},"id")," is a value or an array."),Object(c.b)("p",null,"Return: Entity array"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const repo = new ItemRepository(injection)\nconst ret = await repo.findByID(10)\n")),Object(c.b)("h3",{id:"findby"},Object(c.b)("inlineCode",{parentName:"h3"},"findBy")),Object(c.b)("p",null,"Find entities by any Entity field."),Object(c.b)("p",null,"Format: ",Object(c.b)("inlineCode",{parentName:"p"},".findBy(where)")," where ",Object(c.b)("inlineCode",{parentName:"p"},"where")," is a object containing ",Object(c.b)("inlineCode",{parentName:"p"},"{fieldName1: value1, fieldName2: value2, ...}")),Object(c.b)("p",null,"Return: Entity array"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const repo = new ItemRepository(injection)\nconst ret = await repo.findBy({ name: ["Anne"] })\n')),Object(c.b)("h3",{id:"insert"},Object(c.b)("inlineCode",{parentName:"h3"},"insert")),Object(c.b)("p",null,"Insert an Entity into a table."),Object(c.b)("p",null,"Format: ",Object(c.b)("inlineCode",{parentName:"p"},".insert(entity)")," where ",Object(c.b)("inlineCode",{parentName:"p"},"entity")," is a Entity instance with values to be persisted."),Object(c.b)("p",null,"Return: The inserted entity with the values from database."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const repo = new ItemRepository(injection)\nconst ret = await repo.insert(aNewEntity)\n")),Object(c.b)("h3",{id:"update"},Object(c.b)("inlineCode",{parentName:"h3"},"update")),Object(c.b)("p",null,"Update an Entity."),Object(c.b)("p",null,"Format: ",Object(c.b)("inlineCode",{parentName:"p"},".update(entity)")," where ",Object(c.b)("inlineCode",{parentName:"p"},"entity")," is a Entity instance with values to be persisted."),Object(c.b)("p",null,"Return: The updated entity with the values from database."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const repo = new ItemRepository(injection)\nconst ret = await repo.update(aModifiedEntity)\n")),Object(c.b)("h3",{id:"delete"},Object(c.b)("inlineCode",{parentName:"h3"},"delete")),Object(c.b)("p",null,"Delete an Entity."),Object(c.b)("p",null,"Format: ",Object(c.b)("inlineCode",{parentName:"p"},".delete(entity)")," where ",Object(c.b)("inlineCode",{parentName:"p"},"entity")," is a Entity instance to be deleted."),Object(c.b)("p",null,"Return: ",Object(c.b)("inlineCode",{parentName:"p"},"true")," for success or ",Object(c.b)("inlineCode",{parentName:"p"},"false")," for error"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const repo = new ItemRepository(injection)\nconst ret = await repo.delete(entity)\n")),Object(c.b)("h3",{id:"conventions---defaul-implementation"},"Conventions - Defaul implementation"),Object(c.b)("h4",{id:"fields"},"Fields"),Object(c.b)("p",null,"Code: Camel Case - ex: ",Object(c.b)("inlineCode",{parentName:"p"},"productName")),Object(c.b)("p",null,"Database: Snake Case - ex: ",Object(c.b)("inlineCode",{parentName:"p"},"product_name")),Object(c.b)("h3",{id:"object-oriented-versus-relational-models---relationships"},"Object-Oriented versus Relational models - Relationships"),Object(c.b)("p",null,"An entity can define a reference for others entities but will not (and should not) define a foreign key. For instance:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"+------------------+         +------------------+         +------------------+\n|      Orders      |         |    OrderItems    |         |     Products     |\n+------------------+         +------------------+         +------------------+\n| id: int          |----\\    | id: int          |       --| id: int          |\n| customer_id: int |     ----| order_id: int    |  ----/  | name: string     |\n+------------------+         | product_id: int  |-/       +------------------+\n                            +------------------+                             \n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const Product = entity('Product', {\n    id: field(Number),\n    name: field(String),\n    ...\n})\n\nconst OrderItem = entity('Order Items', {\n    id: field(Number),\n    product: field(Product),    // optional\n    ...\n})\n\nconst Order = entity('Order', {\n    id: field(Number),\n    item: field([OrderItem]),     // optional\n    ...\n})\n")),Object(c.b)("p",null,"More about: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch"}),"https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch")),Object(c.b)("h2",{id:"todo"},"TODO"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow only scalar types for queries (don't allow entity / object types)"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Allow to ommit schema's name")),Object(c.b)("p",null,"Features:"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Be able to change the conventions (injection)"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Exclude / ignore fields on a sql statement"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Awareness of created/updated at/by fields"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Plug-and-play knex"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Easy access knex structure")),Object(c.b)("p",null,"Retrieving and Persist:"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","insert",Object(c.b)("ul",Object(n.a)({parentName:"li"},{className:"contains-task-list"}),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","batchs"))),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","update",Object(c.b)("ul",Object(n.a)({parentName:"li"},{className:"contains-task-list"}),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","batchs"))),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","delete"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","persist (upsert)"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","find (ID)",Object(c.b)("ul",Object(n.a)({parentName:"li"},{className:"contains-task-list"}),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","deal with entities / tables with multiples IDs"))),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","find by (any field)",Object(c.b)("ul",Object(n.a)({parentName:"li"},{className:"contains-task-list"}),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","deal with entities / tables with multiples IDs"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","order by"))),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","find All",Object(c.b)("ul",Object(n.a)({parentName:"li"},{className:"contains-task-list"}),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","order by"))),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","find with pages"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","first"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","last")),Object(c.b)("p",null,"Tests:"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Pure JS"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Postgress"),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Sql Server")))}o.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),o=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=o(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||c;return a?i.a.createElement(u,b(b({ref:t},l),{},{components:a})):i.a.createElement(u,b({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=m;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var l=2;l<c;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);