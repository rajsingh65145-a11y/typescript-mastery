"use strict";
//Getters and setters  and validation
Object.defineProperty(exports, "__esModule", { value: true });
class User09 {
    _name = "";
    set name(value) {
        if (value.length < 3) {
            console.log("name is too short");
            return;
        }
        this._name = value;
    }
    get name() {
        return this._name;
    } // call kar liya
}
const user15 = new User09();
user15.name = "ha";
console.log(user15.name);
