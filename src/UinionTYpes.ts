let id:string |number;

id=101;
id="harsh";

console.log(id)



/// function

function printid(
    id:string|number



)




{
console.log(id);

}
printid(101);
printid("harsh")


// type narrowing//

function printleba(
    data:string|number
){
    if(typeof data === "string"){
        console.log(data.toUpperCase)
    }else{
        console.log(data);
    }
}

printleba(123)