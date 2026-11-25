function Logger(target:Function){
    console.log("Logging");
    console.log(target.name);
}

@Logger
class Person{
    constructor(){
        console.log("Creating person object");
    }
}
const user3s=new Person();

// @logger pehle chalega//

//logs method//
function Logmethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    console.log({propertyKey});//`Method name is ${propertyKey`);
}

class bak{
    @Logmethod
    login(){
        console.log("login");
    }
}

// property//

function Logproperty(
    target: any,
    propertyKey: string,
){
    console.log({propertyKey});//`Property name is ${propertyKey}`);
}

class bak1{
    @Logproperty

    name="harsh"
}

// parameter decorator

function LogParameter(
    target:any,
    propertyKey:string,
    parameterIndex:number
){
    console.log(`Parameter:${parameterIndex}`);
}

class bak2{
    login(
    @LogParameter
    username:string
    ){}
}