Number.isSafeInteger = Number.isSafeInteger || function(value) {
  return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};