Math.hypot = function(x, y) {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=896264#c28
  var max = 0;
  var s = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg > max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s);
};