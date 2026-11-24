//Getters and setters  and validation


class User09{
    private _name=""
    set name(value:string){  //hamesh name string hi hoga
       if(value.length<3){
        console.log("name is too short")
        return;
           
       }
       this._name=value
    }
    get name(){  // method bana diya name ko
        return this._name
    }  // call kar liya
}

const user15=new User09()

user15.name="ha"
console.log(user15.name)






