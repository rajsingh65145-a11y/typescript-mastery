"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathUtils {
    static appName = "calculator";
}
console.log(MathUtils.appName); // yaha direct hum use kar pa rahe hai without creating object  class name se hi use kar liya
/// with properties
class company {
    static ComapanyName = "abc";
}
//const obj=new company() //ye kaam nhi karega
console.log(company.ComapanyName); // static object ke saath use nhi kar skate
//methods
class MathUtils1 {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils1.add(10, 20));
class User12 {
    static Appname = "harsh singh";
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user0u = new User12("harsh", 20);
console.log(user0u); //instance
console.log(User12.Appname); //static
