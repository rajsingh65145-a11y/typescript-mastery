function karan(name:string){
    console.log("kya re karanwa",name)
}

karan("harsh")
// function with return type//

function adds(a:number,b:number):number{
           return a+b;
}

let results =adds(10,20);
console.log(results)


// optional default parameter//


function krishna(name ?:string){  // ? name ab optional hai do ya na do 
    console.log(name)
}

krishna("harsh")