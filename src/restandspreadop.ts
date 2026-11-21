// ...   is syntax of spread operator//


function subnam(...num:number[]){   // ye array me chala jayega
    console.log(num)
}

subnam(10,20,30,40)



function totals(
    ...prices:number[]
){
    return   prices.reduce((sum,price)=>sum+price,0)
}console.log(totals(10,20,30,40))


//  spread operator//
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2]
console.log(arr3)



// object me spread //
let obj1={username:"harsh",age:20}
let obj2={...obj1,username:"jay"}
console.log(obj2)