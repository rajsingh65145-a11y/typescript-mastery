class USER{
    name="harsh"
    age=20
}

const user1=new USER()
console.log(user1)

console.log(user1.name)

//properties add karna ho to
/*class USER1{
    name:"string"
    age:number
}

const user2=new USER1()
user2.name="harsh"
user2.age=40

console.log(user2)*/

// better way to right using constructer//


class USER3{
    name:string
    age:number

    constructor(
        name:string,
        age:number
    ){
        this.name=name;
        this.age=age
    }
}

const use44=new USER3(
    "Mohit",
    30
)


const use45=new USER3(
    "jay bhim",
    34
)

console.log(use45)

// shortcut method constructer

class User01{
    constructor(
        public name:string,
        public age:number
    ){}
}

const use00=new User01(
    "vijay",
    88
)
console.log(use00)