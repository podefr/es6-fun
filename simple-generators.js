"use strict";

function *squareGen(init) {
    var number = init;
    while (number < 10000) {
        yield number *= number;
    }
}

var test = squareGen(2);

for (let num of test) {
    console.log(num);
}

var test = squareGen(4);

console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
