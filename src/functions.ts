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


function krishna(name ?:string,age:number=40){  // ? name ab optional hai do ya na do   age:number=40  ye default parameter hai
    console.log(name)
}

krishna("harsh")


// Arrow function//

const printd=(
    id:number,

    name: string)=>{
        return id+name
    }
    let datas=printd(303,"harsh")
    console.log(datas)