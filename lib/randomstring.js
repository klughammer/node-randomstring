"use strict";

var defaultChars = '23456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';


exports.generate = function (length, chars) {

  if (!chars) {
    chars = defaultChars;
  }
  if (!length) {
    length = 32;
  }

  var string = '';

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.charAt(randomNumber);
  }

  return string;
}
