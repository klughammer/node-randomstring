var chars = '23456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghikmnpqrstuvwxyz';

exports.generate = function(length) {
  length = length ? length : 32;

  var string = '';

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }

  return string;
}
