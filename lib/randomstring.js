"use strict";

var arrayUniq = require('array-uniq');

var crypto  = require('crypto');
var charset = require('./charset.js');

exports.generate = function(options) {
  
  var length, chars, capitalisation, string = '';
  
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
  
  if (typeof options === 'object' && options.capitalisation) {
    capitalisation = options.capitalisation;
    
    if (capitalisation === 'lowercase') {
      chars = chars.toLowerCase();
    }
    else if (capitalisation === 'uppercase') {
      chars = chars.toUpperCase();
    }
  }
  
  // Clean duplicate characters from charset
  var charMap = chars.split('');
  charMap = arrayUniq(charMap);
  chars = charMap.join('');
  console.log(chars);
  
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
