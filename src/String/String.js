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

if (!String.prototype.trimRight) {
  console.log("define trimRight");
  String.prototype.trimRight = function() {
    var i = this.length - 1;
    while (i >= 0 && isWhiteSpace(this[i])) { i--; }
    return this.substring(0, i + 1);
  }
}


if (!String.prototype.startsWith) {
  console.log("define startsWith");
  String.prototype.startsWith = function(search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : Number(pos), search.length) === search;
  };
}

if (!String.prototype.endsWith) {
  console.log("define endsWith");
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.lastIndexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}


/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
if (!String.fromCodePoint) {
  console.log("define fromCodePoint");
  (function() {
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    }());
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function() {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate = null;
      var lowSurrogate = null;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return "";
      }
      var result = "";
      while (++index < length) {
        var codePoint = Number(arguments[index]);
        if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
          codePoint < 0 || // not a valid Unicode code point
          codePoint > 0x10FFFF || // not a valid Unicode code point
          floor(codePoint) !== codePoint // not an integer
        ) {
          throw RangeError("Invalid code point: " + codePoint);
        }
        if (codePoint <= 0xFFFF) { // BMP code point
          codeUnits.push(codePoint);
        } else { // Astral code point; split in surrogate halves
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          highSurrogate = (codePoint >> 10) + 0xD800;
          lowSurrogate = (codePoint % 0x400) + 0xDC00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 === length || codeUnits.length > MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    if (defineProperty) {
      defineProperty(String, "fromCodePoint", {
        "value": fromCodePoint,
        "configurable": true,
        "writable": true
      });
    } else {
      String.fromCodePoint = fromCodePoint;
    }
  }());
}

if (!String.prototype.includes) {
  console.log("define includes");
  String.prototype.includes = function(search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    }
    return this.indexOf(search, start) !== -1;
  };
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
  console.log("define padEnd");
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String((typeof padString !== "undefined" ? padString : " "));
    if (this.length > targetLength) {
      return String(this);
    }
    targetLength = targetLength - this.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return String(this) + padString.slice(0, targetLength);
  };
}


// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  console.log("define padStart");
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String((typeof padString !== "undefined" ? padString : " "));
    if (this.length > targetLength) {
      return String(this);
    }
    targetLength = targetLength - this.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return padString.slice(0, targetLength) + String(this);

  };
}


if (!String.prototype.repeat) {
  console.log("define repeat");
  String.prototype.repeat = function(count) {
    "use strict";
    var str = String(this);
    count = Number(count);
    if (count < 0) {
      throw new RangeError("le nombre de répétitions doit être positif");
    }
    if (count === Infinity) {
      throw new RangeError("le nombre de répétitions doit être inférieur à l'infini");
    }
    count = Math.floor(count);
    if (str.length === 0 || count === 0) {
      return "";
    }
    // En vérifiant que la longueur résultant est un entier sur 31-bit
    // cela permet d'optimiser l'opération.
    // La plupart des navigateurs (août 2014) ne peuvent gérer des
    // chaînes de 1 << 28 caractères ou plus. Ainsi :
    if (str.length * count >= 1 << 28) {
      throw new RangeError("le nombre de répétitions ne doit pas dépasser la taille de chaîne maximale");
    }
    var rpt = "";
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}

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

if (!String.prototype.trim) {
  console.log("define trim");
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}