// Use with traceur: traceur simple-generators.js --experimental

"use strict";

function Klass() {

    this.value = 2;

    this.test = p => p * this.value;
}

var klass = new Klass();

console.log(klass.test(3));