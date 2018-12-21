Math.tanh = Math.tanh || function(x) {
  var a = Math.exp(+x),
    b = Math.exp(-x);
  return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
}