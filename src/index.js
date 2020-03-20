module.exports = function reverse (n) {
  let toString = String(Math.abs(n));
  return toString.split('').reverse().join('');
}
