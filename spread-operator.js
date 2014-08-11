// Use with traceur: traceur simple-generators.js --experimental

"use strict";

var test = (...args) => console.log(args[2]);

console.log(test(...[0, 1, 2]));

var array = [10, 20, 30];

console.log(test(...array));