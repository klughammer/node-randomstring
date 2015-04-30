"use strict";

var charsNumbers = '0123456789';
var charsLower   = 'abcdefghijklmnopqrstuvwxyz';
var charsUpper   = charsLower.toUpperCase();

var chars = charsNumbers + charsLower + charsUpper,
    charsLength = chars.length;

exports.generate = function(length) {

  if (!length) length = 32;

  var string = '';

  for (var i = 0; i < length; i++) {
    string += chars[Math.floor(Math.random() * charsLength)];
  }

  return string;
}
