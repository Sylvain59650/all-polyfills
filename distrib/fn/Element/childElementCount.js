;
(function(constructor) {
  if (constructor &&
    constructor.prototype &&
    constructor.prototype.childElementCount == null) {
    Object.defineProperty(constructor.prototype, 'childElementCount', {
      get: function() {
        var i = 0,
          count = 0,
          node, nodes = this.childNodes;
        while (node = nodes[i++]) {
          if (node.nodeType === 1) count++;
        }
        return count;
      }
    });
  }
})(window.Node || window.Element);