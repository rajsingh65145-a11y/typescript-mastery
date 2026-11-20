let nmber:number[]=[1,2,3,4];

let db=nmber.map(num=>num*2);
console.log(db)  // original array change nho hoga


// filter//

let ndr:number[]=[12,43,55,23];

let hg=ndr.filter(num=>num>20);
console.log(hg)

let sr:string[]=['harsh','karak','jay'];

let filteruser=sr.filter(user =>user.startsWith("h"));

console.log(filteruser)

// reduce//

let prc=[100,300,500];

let total=prc.reduce(
    (sum,prc)=>sum+prc,
    0
)
console.log(total);