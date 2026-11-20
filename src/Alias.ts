type f1=string;
type Age=number;

let f2:f1="harsh";
console.log(f2)

let ages:Age=40;
console.log(ages)


type k9={
    username:string,
    age:number
}

let k3:k9={
    username:"harsh",
    age:78
}
console.log(k3)

let k1:k9={
    username:"jay",
    age:88
}
console.log(k1)

// function

type Addfunction =
 (a: number,
     b: number)
 => number;

let addfn: Addfunction = (a, b) => {
    return a + b;
};

console.log(addfn(10, 5)); // 15



type id=string | number  // | is it union

let userid:id=101;

console.log(userid)



type person={
    username:string
}

type emp={
    salary:number
}

type staff=person&emp  // & intersection

let worker:staff={
    username:"harsh",
    salary:8000
}

console.log(worker)