"use strict";
let value1 = "harsh";
if (typeof value1 === "string") {
    console.log(value1.toUpperCase());
}
else {
    console.log(value1);
}
function printvalue1(value1) {
    if (typeof value1 === "string") {
        console.log(value1.toUpperCase());
    }
    else {
        console.log(value1);
    }
}
printvalue1(100);
printvalue1("harsh");
function getInfo(person) {
    if ("permission" in person) {
        console.log("Admin user");
    }
    else {
        console.log("Normal User");
    }
}
getInfo({
    name: "harsh",
    permission: ["create", "delete"]
});
getInfo({
    name: "harsh",
    email: "harsh@.com"
});
