const Patterns = {
  /**
   * End-of-line
   */
  EOL: 0,
};

class Scanner {
  constructor(text) {
    // this.text is consumed part by part; until it is empty
    this.text = text;
  }

  /**
   * scanUntil moves the cursor past the next immediate occurrence of the given pattern.
   * @param pattern {string|RegExp}
   * @returns {string} the string between the current position and the pattern
   */
  scanUntil(pattern) {
    if (this.isEOF()) {
      throw new Error("EOF");
    }

    let patLen, i;

    const notFoundError = () => {
      throw new Error(`Could not find pattern '${pattern}' in '${this.text}'`);
    };

    if (pattern === Patterns.EOL) {
      i = this.text.indexOf("\n");
      patLen = 1;
      if (i === -1) {
        i = this.text.length;
        patLen = 0;
      }
    } else if (pattern instanceof RegExp) {
      i = this.text.search(pattern);
      if (i === -1) return notFoundError();
      patLen = this.text.substring(i).match(pattern)[0].length;
    } else if (typeof pattern === "string") {
      i = this.text.indexOf(pattern);
      if (i === -1) return notFoundError();
      patLen = pattern.length;
    } else {
      throw new Error("Unknown pattern type");
    }

    const extract = this.text.substring(0, i);
    this.text = this.text.substring(extract.length + patLen);
    return extract;
  }

  isEOF() {
    return !this.text;
  }
}

module.exports = {
  Scanner,
  Patterns,
};
