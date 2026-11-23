// partial utility


type User11={
    name:string,
    age:number,
    email:string
}


type UpdatedUser=Partial<User11>  
// Sabko update krna hai to Partial use krna hai
// ye sabko optional krta hai

const user11:UpdatedUser={
    name:"harsh"
}

console.log(user11)

 // jab sirf name aur email hi chahiye ho to pick use krna hai
type User10={
    name:string,
    age:number,
    email:string
}

type UserBasicInfo=Pick<User10,"name"|"email">

const user18:UserBasicInfo={
    name:"harsh",
    email:"harsh@.com"
}

console.log(user18)

// Omit selected property
type UserBasicInfo1=Omit<User10,"email">

const user19:UserBasicInfo1={
    name:"harsh",
    age:20
}

console.log(user19)