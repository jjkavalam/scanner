# scanner

An easy-to-use tokenizer

## Usage

```js
const { Scanner, Patterns } = require("@jjkavalam/scanner");

const sc = new Scanner(`... contents ...`);

// scan until end-of-line
const firstLine = sc.scanUntil(Patterns.EOL);

// or any arbitrary string or Regexp pattern
const nextColumn = sc.scanUntil(",");

// ...
```
