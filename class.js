// Use with traceur: traceur class.js --experimental

"use strict";

class ClassA {
    constructor() {
        this.name = "classA";
    }

    sayHi() {
        console.log(this.name);
    }
}

class ClassB extends ClassA {
    constructor() {
        this.name = "classB";
    };
}

class SubArray extends Array {
    first() {
        return this[0];
    }

    last() {
        return this[this.lastIndex];
    }

    get lastIndex() {
        return this[this.length -1];
    }
}

var classA = new ClassA();
classA.sayHi();
console.log(classA.constructor);

var classB = new ClassB();
classB.sayHi();

var subArray = new SubArray();
subArray.push(...[0, 1, 2, 3]);

console.log(subArray.first());
console.log(subArray.last());

console.log(Array.isArray(subArray));
