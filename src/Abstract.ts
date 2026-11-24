abstract class Animal44{
   abstract eat():void// method of abstract intialize karna hai
}

class Dog44 extends Animal44{
    eat(){                              // method use kiya
        console.log("dog is eating")
    }
}


const dog44=new Dog44()

dog44.eat()


//abstract class ko object nhi ban sakte
// abstract class with properties

abstract class majdoor{
    constructor(public name:string){
    }
    abstract calcusalary():number
}


class dev66 extends majdoor{
    calcusalary():number{
        return 10000
    }
}

const dev1=new dev66("vivek")
console.log(dev1.calcusalary())
