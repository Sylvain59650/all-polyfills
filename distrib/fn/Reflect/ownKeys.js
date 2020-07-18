if (!Reflect) {
    var Reflect={};
}

if (!Reflect.ownKeys) {
    var symbolPrefix = 'symbolPrefix_';
    function isSymbol(key) {
      return key.substring(0, symbolPrefix.length) == symbolPrefix;
    }
    Reflect.ownKeys=function(target){
        var keys = [];
        var names = Object.getOwnPropertyNames(target);
        var symbols = Object.getOwnPropertySymbols(target);
        for (var i = 0; i < names.length; i++) {
        (isSymbol(names[i]) ? symbols : keys).push(names[i]);
        }
        return keys.concat(symbols);
    }
}