interface UserRoles{
    [key:string]:string // key name nhi pata par uski properties string hogi ye pata hai isi ko index signature kahete hai
}




interface Language{
    [key:string]:string
}

let languages:Language={
    hi:"hindi",
    en:"english"
}

console.log(languages.hi)


interface Scores{
    [index:number]:string
}

let studentsScore:Scores={
    1:"A",
    2:"B",
    3:"C"
}


console.log(studentsScore[1])