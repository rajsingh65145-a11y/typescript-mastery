let value1:string|number="harsh";



if(typeof value1==="string"){
    console.log(value1.toUpperCase());
}else{
    console.log(value1);
}


function printvalue1(value1:string|number){
    if(typeof value1 === "string"){
        console.log(value1.toUpperCase());
    }else{
        console.log(value1);
    }
}

printvalue1(100)
printvalue1("harsh")    


// using in operator//

type Admin1={
    name:string;
    permission:string[]
}

type User1={
    name:string;
    email:string;
}

function getInfo(person:Admin1|User1){
    if("permission" in person){
        console.log("Admin user");
    }else{
        console.log("Normal User");
    }
}

getInfo({
    name:"harsh",
    permission:["create","delete"]
})

getInfo({
    name:"harsh",
    email:"harsh@.com"
})

// instance of class//

class Dog{
    bark(){
        console.log("dog is bark")
    }
}


class Cat{
    meow(){
        console.log("cat is meow")
    }
}

function makesound(animal:Dog|Cat){
   if(animal instanceof Dog){
    animal.bark()
   }else{
    animal.meow()
   }
}

makesound(new Cat())
makesound(new Dog())