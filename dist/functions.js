"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function karan(name) {
    console.log("kya re karanwa", name);
}
karan("harsh");
// function with return type//
function adds(a, b) {
    return a + b;
}
let results = adds(10, 20);
console.log(results);
// optional default parameter//
function krishna(name, age = 40) {
    console.log(name);
}
krishna("harsh");
// Arrow function//
const printd = (id, name) => {
    return id + name;
};
let datas = printd(303, "harsh");
console.log(datas);
