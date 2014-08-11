// Use with traceur: traceur computed-properties.js --experimental

"use strict";

var i = 0;

var config = {
    [i++]: "property1",
    [i++]: "property2"
};

console.log(Object.keys(config));


