// Réécrit le prototype 'children' natif.
// Ajoute le support de Document & DocumentFragment pour IE9 & Safari.
// Renvoie un tableau (array) au lieu d'une HTMLCollection.
;
(function(constructeur) {
  if (constructeur &&
    constructeur.prototype &&
    constructeur.prototype.children == null) {
    Object.defineProperty(constructeur.prototype, 'children', {
      get: function() {
        var i = 0,
          noeud, noeuds = this.childNodes,
          children = [];
        while (noeud = noeuds[i++]) {
          if (noeud.nodeType === 1) {
            children.push(noeud);
          }
        }
        return children;
      }
    });
  }
})(window.Node || window.Element);