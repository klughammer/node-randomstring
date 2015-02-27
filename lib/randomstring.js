var defaultChars = '23456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghikmnpqrstuvwxyz';

exports.generate = function (length, chars) {
  length = length ? length : 32;
  chars = chars ? chars : defaultChars;

  var string = '';

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }

  return string;
}
