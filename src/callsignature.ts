/**type functioname={
    (
        parameter:type
    ):return type;
} */

/// with type use signature

    type chut={
        (
            x:number,
        y:number
        ):number;
    }

    let mug:chut=function(a,b){
        return a+b
    }


    console.log(mug(10,20))


// with interface

interface chumt{
    (
        x:number,
        y:number
    ):number;
}
let mug1:chumt=function(a,b){
    return a+b
}

console.log(mug1(10,20))


interface loginfn{
(email:string,
    password:string,
):boolean
}

let login:loginfn=function(email,password){
    return true
}

console.log(login("raj@gamil.com","harsh55"))