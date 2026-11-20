let ure:[string,number]=["harsh",23];

// oerder important hai phele string hai to string value hi 
// extra value bhi nhi kam value bhi nhi 


console.log(ure)

let emp:[string,number,boolean]=["harsh",20,true];
console.log(emp[0])


// destructring//

let [naam,paisa,isLogin]=emp;
console.log(paisa)


function getuser():[string,number]{
    return["harsh",45]
}

console.log(getuser)