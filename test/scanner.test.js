const { expect } = require("chai");
const { Scanner, Patterns } = require("../index");

describe("scanner", function () {
  it("can read until end-of-line", function () {
    const sc = new Scanner(`a\n`);
    expect(sc.isEOF()).to.equal(false);
    expect(sc.scanUntil(Patterns.EOL)).to.equal("a");
    expect(sc.isEOF()).to.equal(true);
  });
});
