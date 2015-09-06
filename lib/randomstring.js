"use strict";

var crypto  = require('crypto');
var charset = require('./charset.js');

exports.generate = function(options) {
  
  var length, chars, string = '';
  
  // Handle options
  if (typeof options === 'object') {
    length = options.length || 32;
    
    if (options.charset) {
      chars = charset.generate(options.charset, options.readable);
    }
    else {
      chars = charset.generate('alphanumeric', options.readable);
    }
  }
  else if (typeof options === 'number') {
    length = options;
    chars  = charset.generate('alphanumeric');
  }
  else {
    length = 32;
    chars  = charset.generate('alphanumeric');
  }
  
  // Generate the string
  while (string.length < length) {
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
