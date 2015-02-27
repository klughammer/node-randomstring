# node-randomstring

## Installation

To install randomstring, use [npm](http://github.com/npm/npm):

```
npm install randomstring-ng --save
```

## Usage

```javascript
var randomstring = require("randomstring-ng");

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

## Command Line Usage

    $ npm install -g randomstring-ng

    $ randomstring
    sKCx49VgtHZ59bJOTLcU0Gr06ogUnDJi

    $ randomstring 7
    CpMg433

## LICENSE

node-randomstring is licensed under the MIT license.
