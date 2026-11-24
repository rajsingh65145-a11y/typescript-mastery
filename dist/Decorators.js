"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(target) {
    console.log("Logging");
    console.log(target.name);
}
let Person = class Person {
    constructor() {
        console.log("Creating person object");
    }
};
Person = __decorate([
    Logger
], Person);
const user3s = new Person();
// @logger pehle chalega//
//logs method//
function Logmethod(target, propertyKey, descriptor) {
    console.log({ propertyKey }); //`Method name is ${propertyKey`);
}
class bak {
    login() {
        console.log("login");
    }
}
__decorate([
    Logmethod
], bak.prototype, "login", null);
// property//
function Logproperty(target, propertyKey) {
    console.log({ propertyKey }); //`Property name is ${propertyKey}`);
}
class bak1 {
    name = "harsh";
}
__decorate([
    Logproperty
], bak1.prototype, "name", void 0);
