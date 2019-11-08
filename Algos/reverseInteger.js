// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {
  const reversed = x.toString().split('').reverse().join('')
  return Math.sign(x) * parseInt(reversed)
};
