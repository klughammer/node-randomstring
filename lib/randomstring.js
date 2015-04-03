"use strict";

var charsNumbers = '0123456789';
var charsLower   = 'abcdefghijklmnopqrstuvwxyz';
var charsUpper   = charsLower.toUpperCase();

var chars = charsNumbers + charsLower + charsUpper;

exports.generate = function(length) {

  if (!length) length = 32;

  var string = '';

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }

  return string;
}
