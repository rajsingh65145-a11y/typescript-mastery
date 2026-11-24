"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal44 {
}
class Dog44 extends Animal44 {
    eat() {
        console.log("dog is eating");
    }
}
const dog44 = new Dog44();
dog44.eat();
//abstract class ko object nhi ban sakte
// abstract class with properties
class majdoor {
    name;
    constructor(name) {
        this.name = name;
    }
}
class dev66 extends majdoor {
    calcusalary() {
        return 10000;
    }
}
const dev1 = new dev66("vivek");
console.log(dev1.calcusalary());
