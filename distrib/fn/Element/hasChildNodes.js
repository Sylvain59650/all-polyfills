;
(function(prototype) {
  prototype.hasChildNodes = prototype.hasChildNodes || function() {
    return !!this.firstChild;
  }
})(Node.prototype);