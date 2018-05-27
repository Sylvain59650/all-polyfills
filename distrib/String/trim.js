if (!String.prototype.trim) {
  console.log("define trim");
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}