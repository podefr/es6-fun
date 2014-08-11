// Use with traceur: traceur simple-generators.js --experimental

"use strict";

function Klass() {

    this.value = 2;

    this.test = (p, q) => p * q * this.value;
}

var klass = new Klass();

console.log(klass.test(3, 5));