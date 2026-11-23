type Result3<T> = T extends string ? string : number;

//string type hai to string type return krega
//number type hai to number type return krega

type checkString<T>=
T extends string ? 'Yes' : 'No'; // string hai to yes return krega nhi to no

type Result2=checkString<string>;
type Result4=checkString<number>;


const rs:Result2="Yes"
console.log(rs)



type ISAdmin<T>=
T extends "Admin"? 'true' : 'false';


type Result5=ISAdmin<"harsh">;// false
type Result6=ISAdmin<"Admin">;// true


// interface ke through
interface admin{
    permission:string[]
}

interface Emp4{
    department:string
}
type UserType4<T>=
T extends admin ? 'Admin' : 'User';

type result5=UserType4<admin>;
type result6=UserType4<Emp4>;

//infer keyword extract return type

function guh(){
    return{
        name:"harsh",
        age:20
    }
}


type guhUser<T>=
T extends (...args:any[])=> infer R ? R : never;


type uh=guhUser<typeof guh>
// hover on uh you will see return type