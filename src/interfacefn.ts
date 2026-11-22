interface Multiply{
    (
        a:number,
        b:number
    ):number
}


let mul1:Multiply=function(a,b){
    return a*b
}

console.log(mul1(10,20))


interface Greeting{
    (name:string):string
}

let greet:Greeting=function(name){
    return "hello "+name
}

console.log(greet("harsh"))


// reusable function in interface//

interface Calculoter{
    (a:number,b:number):number
}


let add9:Calculoter=function(a,b){
    return a+b
}


let sub9:Calculoter=function(a,b){
    return a-b
}

console.log(add9(10,20))
console.log(sub9(10,20))