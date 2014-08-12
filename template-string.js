// Use with traceur: traceur template-string.js --experimental

"use strict";

function toDe() {
    console.log(arguments);
    return "oops";
}

console.log(toDe`Hello my name is ${ "lastName" } ${ "firstname" }` + "oops");

