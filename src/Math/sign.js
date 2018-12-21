if (!Math.sign) {
  Math.sign = function(x) {
    x = +x; // on convertit la valeur en un nombre
    if (x === 0 || isNaN(x)) {
      return Number(x);
    }
    return x > 0 ? 1 : -1;
  };
}