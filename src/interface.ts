interface Bra{   // interface me variable ka naam ka first latter capital hona chiye
    readonly name:string,  // sirf read kar skate hai cahnge nhi
    age:number,    // interface define 
    salary?:number  // optional 
}

let boob:Bra={
    name:"harsh",
    age:20,              // interface use kiya
    salary:10000
}


let boob1:Bra={
    name:"karan",
    age:21,              // interface use kiya
    salary:12000
}

console.log(boob.name);
console.log(boob1.name);