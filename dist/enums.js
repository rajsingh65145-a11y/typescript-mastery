"use strict";
var Direction;
(function (Direction) {
    Direction["up"] = "East";
    Direction["down"] = "west";
    Direction["left"] = "north";
    Direction["right"] = "south";
})(Direction || (Direction = {}));
console.log(Direction.down);
var Statuscode;
(function (Statuscode) {
    Statuscode[Statuscode["success"] = 200] = "success";
    Statuscode[Statuscode["Notfound"] = 404] = "Notfound";
    Statuscode[Statuscode["severerror"] = 500] = "severerror";
})(Statuscode || (Statuscode = {}));
console.log(Statuscode.severerror);
// function //
var Paymentstatus;
(function (Paymentstatus) {
    Paymentstatus["success"] = "success";
    Paymentstatus["failed"] = "failed";
})(Paymentstatus || (Paymentstatus = {}));
function checkpayment(status) {
    console.log(status);
}
checkpayment(Paymentstatus.success);
/*constant values ka ek group banane deta hai, jise hum ek single name se access kar sakte hain.*/ 
