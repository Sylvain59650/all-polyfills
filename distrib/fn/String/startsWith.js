if (!String.prototype.startsWith) {
  console.log("define startsWith");
  String.prototype.startsWith = function(search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : Number(pos), search.length) === search;
  };
}