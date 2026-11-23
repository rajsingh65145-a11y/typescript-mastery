"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
class Dog1 extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}
const dog1 = new Dog1("tommy");
dog1.eat();
dog1.bark();
class Animal1 {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog2 extends Animal1 {
    breed;
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}
const dog2 = new Dog2("tommy", "pug");
dog2.bark();
console.log(dog2);
