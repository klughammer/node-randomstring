var numbers         = '0123456789';
var charsLower      = 'abcdefghijklmnopqrstuvwxyz';
var charsUpper      = charsLower.toUpperCase();
var hexChars        = 'abcdef';
var unreadableChars = /[0OIl]/ig;

exports.generate = function(type, readable) {
  var charset;
  
  if (type === 'alphanumeric') {
    charset = numbers + charsLower + charsUpper;
  }
  else if (type === 'numeric') {
    charset = numbers;
  }
  else if (type === 'alphabetic') {
    charset = charsLower + charsUpper;
  }
  else if (type === 'hex') {
    charset = numbers + hexChars;
  }
  else {
    charset = type;
  }
  
  if (readable) {
    charset = charset.replace(unreadableChars, '');
  }
  
  return charset;
}