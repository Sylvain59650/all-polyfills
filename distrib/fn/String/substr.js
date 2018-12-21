// on n'applique le correctif que si nécessaire
if ("ab".substr(-1) !== "b") {
  /**
   *  Obtenir la sous-chaîne d'une chaîne
   *  @param  {integer}  start     où commencer l'extraction
   *  @param  {integer}  longueur  combien de caractères pour la sous-chaîne
   *  @return {string}
   */
  console.log("define substr");
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // Si on a un début négatif, on transforme la valeur
      // pour calculer l'indice positif à partir duquel
      // commencer l'extraction
      if (start < 0) {
        start = this.length + start;
      }

      // la valeur est désormais positive, on appelle
      // la fonction originale
      return substr.call(this, start, length);
    }
  }(String.prototype.substr);
}