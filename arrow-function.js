// Use with traceur: traceur simple-generators.js --experimental

"use strict";

function Klass() {

    this.value = 2;

    this.test = (p, q = 6) => p * q * this.value;

    this.rest = (...args) => console.log(args);
}

var klass = new Klass();

console.log(klass.test(3));

console.log(klass.rest("test", "other test"));