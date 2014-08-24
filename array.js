// Use with traceur: traceur array.js --experimental

(function () {
    console.log(Array.isArray(arguments));
    console.log(Array.isArray(Array.from(arguments)));
})();

console.log(Array.from({length:5}, (v,i) => i));

console.log(Array.from({a:1, b:2}));

console.log(Array.of(1, 2, 3));

console.log([{ text: "I"}, { text: "&heart;"}, { text: "ES6"}].find(function (element, index, array) {
    console.log("testing index", index, "in array", array);
    return element.text == "ES6";
}));

console.log([{ text: "I"}, { text: "&heart;"}, { text: "ES6"}].findIndex(function (element, index, array) {
    console.log("testing index", index, "in array", array);
    return element.text == "ES6";
}));

console.log([0, 0, 0].fill(4, 1, 2));
console.log([0, 0, 0].fill(4, 1, 3));

var iterator = ["a", "b", "c"].keys();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

iterator = ["a", "b", "c"].values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

iterator = ["a", "b", "c"].entries();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

