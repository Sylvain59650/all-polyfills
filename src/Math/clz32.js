if (!Math.clz32) Math.clz32 = (function(log, LN2) {
  return function(x) {
    if (x == null || x === 0) {
      return 32;
    }
    return 31 - log(x >>> 0) / LN2 | 0; // the "| 0" acts like math.floor
  };
})(Math.log, Math.LN2);