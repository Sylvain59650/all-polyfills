"use strict";
if (typeof Object.assign !== "function") {
  Object.defineProperty(Object, "assign", {
    value: function assign() {
      var to = Object(arguments[0]);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource !== null && typeof nextSource !== "undefined") {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}