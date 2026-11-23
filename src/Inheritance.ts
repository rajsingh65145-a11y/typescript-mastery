class Animal{
    name:string
    constructor(name:string){
        this.name=name
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog1 extends Animal{
    bark(){
        console.log(`${this.name} is barking`)
    }
}

const dog1=new Dog1("tommy")
dog1.eat()
dog1.bark()

class Animal1{
    constructor(public name:string){}
}

class Dog2 extends Animal1{
    constructor(name:string,public breed:string){
        super(name)
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
}


const dog2=new Dog2("tommy","pug")
dog2.bark()

console.log(dog2)