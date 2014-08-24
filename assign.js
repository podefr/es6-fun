// Use with traceur: traceur assign.js --experimental


var source = {a:0};
var finalObject = Object.assign(source, {b: 1}, {b: 2, c: 2});

console.log(source === finalObject);
console.log(finalObject.b);