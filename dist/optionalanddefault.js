"use strict";
function vijay(name // optional  ho gaya 
) {
    console.log(name);
}
vijay("harsh");
vijay();
// default parameter//
function abhi(name, age = 40 // default parameter  ye do ya na do ye print hoga
) {
    console.log(name, age);
}
abhi();
