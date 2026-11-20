let userds='harsh'; // ye automatically ise string hi de dega with the power of inference
console.log(userds)



let  bd=123;
console.log(bd);


let z4="ts";
z4="js";
//course=100  // ye convert nhi hoga beacuse z4 already  string me hai to ab use hum number me convert nhi kar sakte hai

console.log(z4)


// inference with function//

function add(a:number,b:number){
    return a+b; // automatically detact kar lega ki ye bhi number hi hai
}

console.log(add(10,15))


function ff(h:string){
    return h;
}

console.log(ff("jai harsh"))


// less code hai //
//kaha use karna hai //
