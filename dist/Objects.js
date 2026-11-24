"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user8 = {
    name: "harsh", // key value pair
    age: 20
};
console.log(user8.name);
// how to define type to object//
let user9 = {
    name: "harsh",
    age: 20
};
user9.age = 40; // update value
console.log(user9.name);
console.log(user9.age);
//nested  objects//
let user10 = {
    name: "harsh",
    age: 20,
    address: { city: "mumbai", state: "maharashtra", country: "india" }
};
console.log(user10.address.city);
