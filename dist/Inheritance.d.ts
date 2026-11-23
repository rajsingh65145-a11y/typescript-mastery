declare class Animal {
    name: string;
    constructor(name: string);
    eat(): void;
}
declare class Dog1 extends Animal {
    bark(): void;
}
declare const dog1: Dog1;
declare class Animal1 {
    name: string;
    constructor(name: string);
}
declare class Dog2 extends Animal1 {
    breed: string;
    constructor(name: string, breed: string);
    bark(): void;
}
declare const dog2: Dog2;
