# node-randomstring

[![Build Status](https://travis-ci.org/klughammer/node-randomstring.svg?branch=master)](https://travis-ci.org/klughammer/node-randomstring) [![Download Stats](https://img.shields.io/npm/dm/randomstring.svg)](https://github.com/klughammer/node-randomstring)

## Installation

To install randomstring, use [npm](http://github.com/npm/npm):

```
npm install randomstring
```

## Usage

```javascript
var randomstring = require("randomstring");

randomstring.generate();
// >> "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"

randomstring.generate(7);
// >> "xqm5wXX"
```

## Tests

```
npm install
npm test
```

## LICENSE

node-randomstring is licensed under the MIT license.
