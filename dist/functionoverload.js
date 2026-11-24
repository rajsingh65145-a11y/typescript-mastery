"use strict";
/**function bdsm(
    a:number,
    b:number
):number;


function vue(
    a:string,
    b:string
):string;
 */
Object.defineProperty(exports, "__esModule", { value: true });
function bdsm1(a, b) {
    return a + b;
}
console.log(bdsm1(10, 20));
console.log(bdsm1("hello", "world"));
function search1(value) {
    if (typeof value === "number") {
        return `${value} is a number`;
    }
    else {
        return `${value} is a string`;
    }
}
console.log(search1(10));
console.log(search1("hello"));
