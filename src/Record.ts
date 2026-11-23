//Record<Keys,vakueType>

type UserRole=Record<


"admin"|"user"|"guest",
string
>


const userRole:UserRole={
    admin:"admin ka lawda",
    user:"user ka lawda",
    guest:"guest ki bund"
}

console.log(userRole)

// record with number

type Studentmarks=Record<
string,
number
>

const studentmarks:Studentmarks={
    harsh:90,
    jay:80
}

console.log(studentmarks)


type User22={
    name:string,
    age:number
}
type Users=Record<
string,
User22
>
// object ke form me pass kar denge

const users:Users={
    harsh:{name:"harsh",age:20},
    jay:{name:"jay",age:20}
}

console.log(users)