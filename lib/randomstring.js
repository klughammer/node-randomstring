var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';

exports.generate = function(length) {
  length = length ? length : 32;
  
  var string = '';
  
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.charAt(randomNumber);
  }
  
  return string;
}
