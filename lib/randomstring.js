"use strict";

var crypto  = require('crypto');
var Charset = require('./charset.js');

exports.generate = function(options) {
  
  var charset = new Charset();
  
  var length, chars, capitalization, string = '';
  
  // Handle options
  if (typeof options === 'object') {
    length = options.length || 32;
    
    if (options.charset) {
      charset.setType(options.charset);
    }
    else {
      charset.setType('alphanumeric');
    }
    
    if (options.capitalization) {
      charset.setcapitalization(options.capitalization);
    }
    
    if (options.readable) {
      charset.removeUnreadable();
    }
    
    charset.removeDuplicates();
  }
  else if (typeof options === 'number') {
    length = options;
    charset.setType('alphanumeric');
  }
  else {
    length = 32;
    charset.setType('alphanumeric');
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
      var index = bf.readUInt8(i) % charset.chars.length;
      string += charset.chars.charAt(index);
    }
  }

  return string;
}
