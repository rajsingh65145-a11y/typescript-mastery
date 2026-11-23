declare class User05 {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare const use5: User05;
declare class User06 {
    private name;
    private age;
    constructor(name: string, age: number);
    show(): void;
}
declare const use6: User06;
declare class emp33 {
    protected salary: number;
    constructor(salary: number);
}
declare class developer extends emp33 {
    show(): void;
}
declare const dev: developer;
