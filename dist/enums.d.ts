declare enum Direction {
    up = "East",
    down = "west",
    left = "north",
    right = "south"
}
declare enum Statuscode {
    success = 200,
    Notfound = 404,
    severerror = 500
}
declare enum Paymentstatus {
    success = "success",
    failed = "failed"
}
declare function checkpayment(status: Paymentstatus): void;
