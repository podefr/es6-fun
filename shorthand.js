// Use with traceur: traceur shorthand.js --experimental

"use strict";

var a = 1, b = 2, c = {a, b};

console.log(c);

var one = ({ val: 0,
    plus: function () { this.val++; return this; },
    minus: function (){ this.val--; return this; },
    getVal: function() { return this.val; }
}).plus().plus().minus().getVal();

console.log(one);