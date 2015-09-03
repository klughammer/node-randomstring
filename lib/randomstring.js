"use strict";

var crypto  = require('crypto');
var charset = require('./charset.js');

exports.generate = function(length, options) {
  
  var chars;
  
  if (typeof options === 'object') {
    if (options.charset) {
      chars = charset.generate(options.charset, options.readable);
    }
    else {
      charset.generate('default', options.readable);
    }
  }
  else {
    chars = charset.generate('default');
  }

  length = length || 32;

  var string = '';

  while(string.length < length) {
    var bf;
    try {
      bf = crypto.randomBytes(length);
    }
    catch (e) {
      continue;
    }
    for (var i = 0; i < bf.length; i++) {
      var index = bf.readUInt8(i) % chars.length;
      string += chars.charAt(index);
    }
  }

  return string;
}
