// Use with traceur: traceur arrow-function.js --experimental

"use strict";

function Klass() {

    this.value = 2;

    this.test = (p, q = 6) => p * q * this.value;

    this.rest = (first, ...otherParams) => console.log(otherParams);
}

var klass = new Klass();

console.log(klass.test(3));

console.log(klass.rest("test", "other test", "last param"));