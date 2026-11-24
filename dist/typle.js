"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ure = ["harsh", 23];
// oerder important hai phele string hai to string value hi 
// extra value bhi nhi kam value bhi nhi 
console.log(ure);
let emp = ["harsh", 20, true];
console.log(emp[0]);
// destructring//
let [naam, paisa, isLogin] = emp;
console.log(paisa);
function getuser() {
    return ["harsh", 45];
}
console.log(getuser);
