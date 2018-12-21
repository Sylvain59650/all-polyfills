function isWhiteSpace(char) {
  return char === " " || char === "\n";
}

if (!String.prototype.trimRight) {
  console.log("define trimRight");
  String.prototype.trimRight = function() {
    var i = this.length - 1;
    while (i >= 0 && isWhiteSpace(this[i])) { i--; }
    return this.substring(0, i + 1);
  }
}