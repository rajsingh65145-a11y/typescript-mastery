type User8={
    userName:string,
    age:number,
    salary:number
}

let  user2:User8={
    userName:"harsh",
    age:20,
    salary:10000
}

type ID=string|number;   // union type
type ID1=string&number;  // intersection type


// Diffrence between type and interface//

// type can be used in multiple files//
// interface can only be used in single file