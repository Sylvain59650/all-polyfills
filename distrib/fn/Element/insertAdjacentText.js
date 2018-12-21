if (!Element.prototype.insertAdjacentText)
  Element.prototype.insertAdjacentText = function(type, txt) {
    this.insertAdjacentHTML(
      type,
      (txt + '') // convert to string
      .replace(/&/g, '&amp;') // embed ampersand symbols
      .replace(/</g, '&lt;') // embed less-than symbols
    )
  }