// Use with traceur: traceur array.js --experimental

(function () {
    console.log(Array.isArray(arguments));
    console.log(Array.isArray(Array.from(arguments)));
})();

console.log(Array.from({length:5}, (v,i) => i));

console.log(Array.from({a:1, b:2}));