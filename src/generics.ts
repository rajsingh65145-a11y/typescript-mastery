function printvalue2<T>(value:T):T{
    return value
}

// isse hum multiple type use kar sakte hai

// koi bhi paramaeter pass krna hai to use generic use krna hai

console.log(printvalue2("harsh"))
console.log(printvalue2(100))
console.log(printvalue2(true))


// generic function
function gudata<T>(data:T):T{
    return data
}

let zebra=gudata<string>("zebra")
let age44=gudata<number>(44)
console.log(zebra)
console.log(age44)

// array ho tab

function getfirstelement<T>(data:T[]):T{
    return data[0]
}

console.log(getfirstelement<string>(["harsh","karan"]))

//generic interface//

interface Apiresponse<T>{
    status:boolean,
    data:T
}

const respnse1:Apiresponse<string>={
    status:true,
    data:"lawda"
}

// pura object bhej dete hai

const response4:Apiresponse<{
    name:string,
    age:number
}>={
  status:true,
  data:{name:"harsh",age:20}
}

console.log(response4)

//generic constraint//

function getLenght<T extends {length:number}>(value:T):number{
    return value.length
}

console.log(getLenght("harsh")) // kuch bhi duna nhi hai
console.log(getLenght([1,2,3]))