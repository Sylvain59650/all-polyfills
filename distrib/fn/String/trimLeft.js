function isWhiteSpace(char) {
  return char === " " || char === "\n";
}

if (!String.prototype.trimLeft) {
  console.log("define trimLeft");
  String.prototype.trimLeft = function() {
    var i = 0;
    while (i < this.length && isWhiteSpace(this[i])) { i++; }
    return this.substring(i);
  }
}