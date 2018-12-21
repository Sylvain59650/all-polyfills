IDBKeyRange.prototype.includes = IDBKeyRange.prototype.includes || function(key) {
  var r = this;
  var c = null;
  if (r.lower !== undefined) {
    c = indexedDB.cmp(key, r.lower);
    if (r.lowerOpen && c <= 0) { return false; }
    if (!r.lowerOpen && c < 0) { return false; }
  }
  if (r.upper !== undefined) {
    c = indexedDB.cmp(key, r.upper);
    if (r.upperOpen && c >= 0) { return false; }
    if (!r.upperOpen && c > 0) { return false; }
  }
  return true;
};