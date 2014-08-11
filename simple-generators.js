// Use with traceur: traceur simple-generators.js --experimental

"use strict";

function *squareGen(init) {
    var number = init;
    while (number < 10000) {
        yield number *= number;
    }
}

for (let num of squareGen(2)) {
    console.log(num, "for of");
}

var test = squareGen(4);

console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());

console.log(squareGen(4).next());
console.log(squareGen(4).next());
