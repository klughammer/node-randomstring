var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
  , extrachars = ' !@#$%^&*()_+=?';

exports.generate = function(length, extra) {
  length = length ? length : 32;
  this.chars = extra ? chars + extrachars : chars;
  
  var string = '';
  
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * this.chars.length);
    string += this.chars.substring(randomNumber, randomNumber + 1);
  }
  
  return string;
}
