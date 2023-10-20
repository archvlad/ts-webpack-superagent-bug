# How to run
`npm i`

`npm run start`

You will get the following error:
```
webpack://ts-webpack-superagent-bug/./node_modules/formidable/src/Formidable.js?:15
const toHexoId = hexoid(25);
                 ^

TypeError: hexoid is not a function
```

# How I solved it

I changed the 8th line of `formidable` dependency in file `node_modules\formidable\src\Formidable.js`

```diff
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

'use strict';

const os = require('os');
const path = require('path');
- const hexoid = require('hexoid');
+ const hexoid = require('hexoid').default;
const once = require('once');
const dezalgo = require('dezalgo');
const { EventEmitter } = require('events');
const { StringDecoder } = require('string_decoder');
const qs = require('qs');
```