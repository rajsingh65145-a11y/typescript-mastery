/*type Person={
    username:string
}

type Emp={
  salary:number
}

type Staff= Person&Emp*/


type User={
    username:string
}

type Admin={
    permission:string[]  // [] permisson wants//
}

type adminuser=User & Admin


let admi:adminuser={
    username:"harsh",
    permission:['read','write']
}

console.log(admi)


// interfaces//

interface Person{
    username:string
}

interface Employee{
    salary:number
}

type Staff=Person&Employee;

let works:Staff={
    username:"raj",
    salary:30000
}

console.log(works);
