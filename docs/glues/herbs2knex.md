---
id: herbs2knex
title: Knex - Herbs2Knex
sidebar_label: Knex
slug: /glues/Herbs2knex
---

Creates repositories to retrieve and store [Entities](/docs/entity/getting-started) using [Knex](http://knexjs.org), a relational database query builder for Node.js.

### Installing
```bash
$ npm install @herbsjs/herbs2knex
```
### Using

`connection.js` - Knex initialization:
```javascript
const knex = require('knex')
const config = require('./config')
module.exports = knex(config)
```

`itemRepository.js`:
```javascript
const { Repository } = require('@herbsjs/herbs2knex')
const connection = require('connection')
const { Item } = require('../domain/entities/item')

class ItemRepository extends Repository {
    constructor() {
        super({
            entity: Item,
            table: 'aTable',
            ids: ['id'],
            knex: connection
        })
    }

    excludedItemFromLastWeek() {
        ...
    }
}
```

`someUsecase.js`:
```javascript
const repo = new ItemRepository()
const ret = await repo.findByID(1)
```

### What is a Repository?

A repository, by [definition](https://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks), is part of the layer to retrieve and store entities abstracting the underlying implementation. By using repositories, details of these implementation such as relational database, document-oriented databases, etc., should not leak to the domain code. In other words, no raw SQL queries on your use case or entity files.

### Herbs2knex Repository

In order to boost productivity, Herbs2knex provides ways to dynamically generate, on the fly (no code generation), a repository class based on your Entities and other metadata. 

These metadata are necessary to close the gap between OOP concepts and paradigms and those of relational databases. For example, it is necessary to specify primary keys and foreign keys as these information do not exist in the description of your domain.

Following Herbs architecture principals, it is not the intention of this lib to create yet another ORM or query builder but to create a bridge between your domain and an existing one (Knex).

### Why Knex?

Herbs2knex is just one of many bridges possible between Herbs and other packages.

The advantage of using Knex is that is a simple and flexible SQL query builder. It also supports Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle and Amazon Redshift. Therefore, you can build your system using these databases out of the box.

### Repository setup

```javascript
const { Repository } = require('@herbsjs/herbs2knex')
const connection = require('connection')  // Knex initialize instance
const { ProductItem } = require('../domain/entities/productItem')

class YourRepository extends Repository {
    constructor() {
        super({
            entity: ProductItem,
            schema: 'main',
            table: 'product_items',
            ids: ['id'],
            foreignKeys: [{ customerId: String }],
            knex: connection
        })
    }
}
```

- `entity` - The [Entity](https://github.com/herbsjs/gotu) to be used as reference 

    ```javascript
    entity: ProductItem
    ```

- `schema` - The schema to be used  

    ```javascript
    schema: 'production'
    ```

- `table` - The name of the table in database

    ```javascript
    table: 'product_items'
    ```

- `ids` - Primary keys

    Format: `['fieldName', 'fieldName', ...]`

    There must be corresponding fields in the entity.

    ```javascript
    ids: ['id']  // productItem.id
    ```

    or for composite primary key: 

    ```javascript
    ids: [`customerId`, `productId`]  // productItem.customerId , productItem.productId
    ```

- `foreignKeys` (optional) - Foreign keys for the database table

    Usually, there is no corresponding fields declared in the entity for foreign keys. That is the reason it is necessary to inform the name and the type of the fields.

    Format: `[{ fieldName: Type }, { fieldName: Type }, ...]`

    ```javascript
    foreignKeys: [{ customerId: String }]
    ```

    The field names will te converted to a database names using conventions. Ex: `customer_id`

- `knex` - Knex initialize instance
    
    Check Knex [documentation](http://knexjs.org/#Installation-client)

## Retrieving and Persisting Data

### find
Find entities matched by the filter, or empty array `[]` if there is no matching entity.

Format: `.find(options)` where `options` is a optional object containing `{ where, limit, offset, orderBy }`

Return: Entity array

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find()
```

Options:

- `where`
Adds a filter to the query with given values.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ where: { name: ["Anne"] } })
```

- `limit`
Adds a limit clause to the query.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ limit: 10 })
```

- `offset`
Adds an offset clause to the query.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ offset: 5 })
```

- `orderBy`
Adds an order by clause to the query. Column can be string, or list mixed with string and object.

```javascript
// order by collum
const repo = new ItemRepository(injection)
const ret = await repo.find({ orderBy: 'description'})

// order by complex query
const repo = new ItemRepository(injection)
const ret = await repo.find({ orderBy: [{ column: 'nome', order: 'desc' }, 'email'] })
```

### findByID
Find entities by IDs

Format: `.findByID(id)` where `id` is a value or an array.

Return: Entity array

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.findByID(10)
```

### insert

Insert an Entity into a table.

Format: `.insert(entity)` where `entity` is a Entity instance with values to be persisted.

Return: The inserted entity with the values from database.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.insert(aNewEntity)
```

### update

Update an Entity.

Format: `.update(entity)` where `entity` is an Entity instance with values to be persisted.

Return: The updated entity with the values from database.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.update(aModifiedEntity)
```

### delete

Delete an Entity.

Format: `.delete(entity)` where `entity` is an Entity instance to be deleted.

Return: `true` for success or `false` for error

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.delete(entity)
```

## Conventions - Defaul implementation

### Fields

Code: Camel Case - ex: `productName`

Database: Snake Case - ex: `product_name`

## Object-Oriented versus Relational models - Relationships

An entity can define a reference for others entities but will not (and should not) define a foreign key. For instance:

    +------------------+         +------------------+         +------------------+
    |      Orders      |         |    OrderItems    |         |     Products     |
    +------------------+         +------------------+         +------------------+
    | id: int          |----\    | id: int          |       --| id: int          |
    | customer_id: int |     ----| order_id: int    |  ----/  | name: string     |
    +------------------+         | product_id: int  |-/       +------------------+
                                +------------------+                             

```javascript
const Product = entity('Product', {
    id: id(Number),
    name: field(String),
    ...
})

const OrderItem = entity('Order Items', {
    id: id(Number),
    product: field(Product),    // optional
    ...
})

const Order = entity('Order', {
    id: id(Number),
    item: field([OrderItem]),     // optional
    ...
})
```

More about: https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch
