"use strict";
function printvalue2(value) {
    return value;
}
// isse hum multiple type use kar sakte hai
// koi bhi paramaeter pass krna hai to use generic use krna hai
console.log(printvalue2("harsh"));
console.log(printvalue2(100));
console.log(printvalue2(true));
// generic function
function gudata(data) {
    return data;
}
let zebra = gudata("zebra");
let age44 = gudata(44);
console.log(zebra);
console.log(age44);
// array ho tab
function getfirstelement(data) {
    return data[0];
}
console.log(getfirstelement(["harsh", "karan"]));
const respnse1 = {
    status: true,
    data: "lawda"
};
// pura object bhej dete hai
const response4 = {
    status: true,
    data: { name: "harsh", age: 20 }
};
console.log(response4);
//generic constraint//
function getLenght(value) {
    return value.length;
}
console.log(getLenght("harsh")); // kuch bhi duna nhi hai
console.log(getLenght([1, 2, 3]));
