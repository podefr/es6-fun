// Use with traceur: traceur spread-operator.js --experimental

"use strict";

var test = (...args) => console.log(args[2]);

console.log(test(...[0, 1, 2]));

var array = [10, 20, 30];

console.log(test(...array));


var array1 = [0, 1, 5];
var array2 = [2, 3, 4];

array1.splice(2, 0, ...array2);

console.log(array1);