---
id: suma2text
title: Error to Text - Suma2Text
sidebar_label: Error to Text
slug: /glues/suma2text
---

![CI build](https://github.com/herbsjs/suma2text/workflows/CI%20build/badge.svg) [![codecov](https://codecov.io/gh/herbsjs/suma2text/branch/master/graph/badge.svg)](https://codecov.io/gh/herbsjs/suma2text)

suma2text it's a tool to parse error codes to string and you can use it in all your solutions.

With Suma and Suma2text native, you can translate all suma error codes, one by one or all entity error array.

### Installing
```
$ npm install @herbsjs/suma2text
```

### Using

If your use is simple, you can just require suma2text and execute this configure function and by default the language will be English from the united states (ISO CODE en-US).

```javascript
const suma2text = require('@herbsjs/suma2text')()

const suma2text.toText({ notDefined: true })
/*
    Not defined
*/
```

You also can add a different language or customize the existing one, just pass the following parameters on require function.

```javascript
const suma2text = require('@herbsjs/suma2text')({
    useDefault: 'ts-ME',
    languages: [{
            name: 'ts-ME',
            definitions: {
                types: [
                    { key: 'Number',  translation: 'Numeric' },
                    { key: 'String',  translation: 'Characters'}
                ]
                codes: [
                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },
                    { key: 'wrongType', translation: 'Please the value correct is {0}' }
                ]
            }
        },
        {
            name: 'en-US',
            definitions: {
                types: [
                    { key: 'Number', translation: 'Digit' },
                    { key: 'String', translation: 'Char Array' }
                ],
                codes: [
                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },
                    { key: 'wrongType', translation: 'The value correct is {0}'}
                ]
            }
        }
    ]
})

//fully custumized language
const suma2text.toText({ wrongType: String }, 'ts-ME')
/*
   Please the value correct is Characters
*/
const suma2text.toText({ notGreaterThan: 10 }, 'ts-ME')
/*
   Will be thrown a not implemented code exception
*/

//existing language, but some custumization
const suma2text.toText({ wrongType: String }, 'en-US')
/*
   The value correct is Char Array
*/
const suma2text.toText({ notGreaterThan: 10 }, 'en-US')
/*
   Not greater than 10
*/

```
But, the perfect choice is to use it whit Herbs.js. All suma codes are integrated here, and we made for it, you can pass all your validation in a suma2text class, validate, and just show the results in your presentation layer. Let's see how:
```javascript
const User =
    entity('User', {
        name: field(String),
        plan: field(Plan)
    })

const user = new User()
user.name = 42
user.plan.monthlyCost = true
user.validate()
user.errors // { name: [ {wrongType: 'String'} ], plan: { monthlyCost: [ {wrongType: 'Number'}  } }

const suma2text = require('@herbsjs/suma2text')()

const englishUserErrors = suma2text.errorsToText(user.errors)
/*
    {
        name: ['Wrong type, the correct type is String']
        plan: {
            monthlyCost: ['Wrong type, the correct type is Plan']
        }
    }
*/
const portugueseUserErrors = suma2text.errorsToText(user.errors, 'pt-BR')
/*
    {
        name: ['Foi definido um tipo incorreto, o valor esperado era Texto']
        plan: {
            monthlyCost: ['Foi definido um tipo incorreto, o valor esperado era Plan']
        }
    }
*/
```

## Languages

- [ ] Arabic
- [ ] Bangla
- [ ] Chinese
- [ ] Dutch
- [x] English ('en-US')
- [ ] French
- [ ] German
- [ ] Italian
- [ ] Korean
- [X] Portuguese ('pt-BR')
- [X] Spanish
- [ ] Swedish   
- [ ] Tamil
