// Use with traceur: traceur destructuring.js --experimental

var obj, arr, a, b, c, d, e, f;
console.log(arr = [a, b, c] = [1, 2, 3]);
console.log(obj = {d, e, f} = [1, 2, 3]);

console.log(arr[1]);
console.log(d);


function destructureMe({a, b}, [c, d, e = '!!!!!']) {
    console.log(a, b, c, d, e);
}

destructureMe({a: "fun with", b: "destructuring"}, ["it's", "unbelivable"]);