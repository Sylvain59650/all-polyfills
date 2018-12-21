;
(function(prototype) {
  prototype.hasAttributes = prototype.hasAttributes || function() {
    return (this.attributes.length > 0);
  }
})(Element.prototype);