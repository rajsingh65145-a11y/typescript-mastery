
interface USer  {
    id: number,
    name: string,
    email: string
}

async function getuser3(): Promise<USer[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const users: USer[] = await response.json();
   console.log(users);
   users.forEach(user => {
       console.log(user.name);
   })
   return users
}

getuser3()


//error handling


async function getuser4(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: USer[] = await response.json();
        console.log(users);
        users.forEach(user => {
            console.log(user.name);
        })
    } catch (error) {
        console.log(error);
    }
}