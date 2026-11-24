"use strict";
// public modifire//
Object.defineProperty(exports, "__esModule", { value: true });
class User05 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const use5 = new User05("harsh", 20);
console.log(use5);
// private//
class User06 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name);
        console.log(this.age);
    }
}
const use6 = new User06("harsh", 80);
use6.show();
//protected//
class emp33 {
    salary;
    constructor(salary) {
        this.salary = salary;
    }
}
class developer extends emp33 {
    show() {
        console.log(this.salary);
    }
}
const dev = new developer(10000);
dev.show();
