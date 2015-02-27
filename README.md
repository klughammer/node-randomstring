# node-randomstring

## Installation

To install randomstring, use [npm](http://github.com/npm/npm):

```
npm install randomstring --save
```

## Usage

```javascript
var randomstring = require("randomstring");

randomstring.generate();
// >> "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"

randomstring.generate(7);
// >> "xqm5wXX"

randomstring.generate(9, "0123456789abcdefghiklmnopqrstuvwxyz");
// >> "hf752sd9j"
```

## Tests

```
npm install
npm test
```

## LICENSE

node-randomstring is licensed under the MIT license.
