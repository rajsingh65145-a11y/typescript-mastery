

const messagePromise: Promise<string> =
 new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done'); // string hi allow hai
    }, 2000);
})

// promise ko call karo
messagePromise.then((message) => {
    console.log(message);
})

const agePromise: Promise<number> =
 new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20); // number hi allow hai
    }, 2000);
})


// promise ko call karo
agePromise.then((age) => {
    console.log(age);
})

// async await//

function Uber(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Uber is done'); // string hi allow hai
        }, 1000);
    })
}

async function lebu() {
    const message = await Uber();
    console.log(message);
}


//generic //
interface User1{
    id:number,
    name:string
}


function getUser(): Promise<User1>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id:1,name:'harsh'}); // object pass kar detee hai
        }, 1000);
    })
}

getUser().then((user) => {
    console.log(user);
})

// error handling

function login():Promise<string>{
    return new Promise((resolve, reject) => {
       const success=true;
       if(success){
        resolve('success')
       }else{
        reject('failed')
       }
    })
}

login().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})