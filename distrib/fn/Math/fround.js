Math.fround = Math.fround || function(x) {
  return new Float32Array([x])[0];
};