/**let  ad:(
    a:number,
    b:number
    
)=>number; */


function mami(a:number,b:number){ // function with return type
    console.log(a+b)
}

mami(10,20)


function multipl(
    a:number,
    b:number,
):number{ // function with return type
    return a*b
}

console.log(multipl(10,20))


//  function type variable

let subt:(
    X:number,
    y:number
)=>number;

subt=function(X,y){
    return X-y
}

console.log(subt(20,10))


// callback function

function prints(
    callback:(
        a:number,
        b:number
    )=>void
){
    callback(10,20)
}

prints(function(a,b){
    console.log(a+b)
})


function calculate(
    z:number,
    y:number,
    opertaor:(
        x:number,
        y:number
    )=>number
){
    return opertaor(z,y)
}

let rest=calculate(
    10,
    20,
    function(x,y){
        return x-y
    }
)
    
console.log(rest)