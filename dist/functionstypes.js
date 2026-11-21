"use strict";
/**let  ad:(
    a:number,
    b:number
    
)=>number; */
function mami(a, b) {
    console.log(a + b);
}
mami(10, 20);
function multipl(a, b) {
    return a * b;
}
console.log(multipl(10, 20));
//  function type variable
let subt;
subt = function (X, y) {
    return X - y;
};
console.log(subt(20, 10));
// callback function
function prints(callback) {
    callback(10, 20);
}
prints(function (a, b) {
    console.log(a + b);
});
function calculate(z, y, opertaor) {
    return opertaor(z, y);
}
let rest = calculate(10, 20, function (x, y) {
    return x - y;
});
console.log(rest);
