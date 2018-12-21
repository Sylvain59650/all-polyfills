Math.atanh = Math.atanh || function(x) {
  return Math.log(x + Math.sqrt(x * x - 1));
}