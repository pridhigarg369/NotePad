function add(a, b) {
  return a + b;
}
var a = function (c, d) {
  return c * d;
};
var b = (c, d) => {
  return c - d;
};
console.log(b(2, 3));
console.log(add(2, 3));
console.log(a(2, 3));
