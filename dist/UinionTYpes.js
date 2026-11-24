"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id;
id = 101;
id = "harsh";
console.log(id);
/// function
function printid(id) {
    console.log(id);
}
printid(101);
printid("harsh");
// type narrowing//
function printleba(data) {
    if (typeof data === "string") {
        console.log(data.toUpperCase);
    }
    else {
        console.log(data);
    }
}
printleba(123);
