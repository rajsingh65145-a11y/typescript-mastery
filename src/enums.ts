enum Direction{
    up="East",
    down="west",
    left="north",
    right="south",
}

console.log(Direction.down)


enum Statuscode{
    success=200,
    Notfound=404,
    severerror=500
}
console.log(Statuscode.severerror)

// function //

enum Paymentstatus{
    success="success",
    failed="failed"
}

function checkpayment(status:Paymentstatus){
    console.log(status);
}

checkpayment(Paymentstatus.success)

/*constant values ka ek group banane deta hai, jise hum ek single name se access kar sakte hain.*/