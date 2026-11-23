type User2={
    name:string,
    age:number
}


// read kar sakte hai par change nhi

type ReadOnlyUser={
    readonly [key in keyof User2]:User2[key]
}


const user4:ReadOnlyUser={
    name:"harsh",
    age:20
}
// ab hum name ya age modified nhi kar skate 


// optional banane ke liye

type OptionalUser={      // ab user2 ki type ko optional karna hai sab 
    [key in keyof User2]?:User2[key]
}


const user5:OptionalUser={
    name:"harsh",
    age:20
}

// type change karna ho to

type BooleanUser={
    [key in keyof User2]:boolean
}


const user7:BooleanUser={
    name:true,
    age:true
}

console.log(user7)