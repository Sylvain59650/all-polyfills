// Remplace le prototype "lastElementChild" natif.
// Ajout de Document & DocumentFragment pris en charge pour IE9 & Safari.
// Renvoie un tableau (array) à la place de HTMLCollection.
;
(function(constructor) {
  if (constructor &&
    constructor.prototype &&
    constructor.prototype.lastElementChild == null) {
    Object.defineProperty(constructor.prototype, 'lastElementChild', {
      get: function() {
        var node, nodes = this.childNodes,
          i = nodes.length - 1;
        while (node = nodes[i--]) {
          if (node.nodeType === 1) {
            return node;
          }
        }
        return null;
      }
    });
  }
})(window.Node || window.Element);