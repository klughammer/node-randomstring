"use strict";

var charsNumbers = '0123456789';
var charsLower   = 'abcdefghijklmnopqrstuvwxyz';
var charsUpper   = charsLower.toUpperCase();

var crypto = require('crypto');

var chars = charsNumbers + charsLower + charsUpper;

exports.generate = function(length) {

  length = length || 32;

  var string = '';

  while(string.length < length){
    var bf = crypto.randomBytes(length);
    for(var i = 0; i < bf.length; i++){
      var index = bf.readUInt8(i) % chars.length;
      string += chars.charAt(index);
    }
  }

  return string;
}
