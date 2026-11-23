// public modifire//

class User05{
    public name:string;
    public age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

const use5=new User05("harsh",20)
console.log(use5)


// private//

class User06{
    private name:string;
    private age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    show(){
        console.log(this.name)
        console.log(this.age)
    }
}

const use6=new User06("harsh",80)
use6.show()

//protected//

class emp33 {
    protected  salary:number;



    constructor(salary:number){
        this.salary=salary;
    }
}

class developer extends emp33{
    show(){
        console.log(this.salary)
    }
}
  

const dev=new developer(10000)
dev.show()
