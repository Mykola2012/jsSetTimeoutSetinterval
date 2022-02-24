"use strict";

printNumbers(1, 10, 500);

function printNumbers(from, to, interval) {
  setInterval(() => {
    if (from < to + 1) {
      console.log(from++);
    }
  }, interval);
}
