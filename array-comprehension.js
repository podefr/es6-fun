// Use with traceur: traceur array-comprehension.js --experimental

"use strict";

var array = [for (a of [0, 1, 2]) a * 10];

console.log(array);
