"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done'); // string hi allow hai
    }, 2000);
});
// promise ko call karo
messagePromise.then((message) => {
    console.log(message);
});
const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20); // number hi allow hai
    }, 2000);
});
// promise ko call karo
agePromise.then((age) => {
    console.log(age);
});
// async await//
function Uber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Uber is done'); // string hi allow hai
        }, 1000);
    });
}
async function lebu() {
    const message = await Uber();
    console.log(message);
}
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'harsh' }); // object pass kar detee hai
        }, 1000);
    });
}
getUser().then((user) => {
    console.log(user);
});
// error handling
function login() {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve('success');
        }
        else {
            reject('failed');
        }
    });
}
login().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
