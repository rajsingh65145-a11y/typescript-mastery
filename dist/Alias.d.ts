type f1 = string;
type Age = number;
declare let f2: f1;
declare let ages: Age;
type k9 = {
    username: string;
    age: number;
};
declare let k3: k9;
declare let k1: k9;
type Addfunction = (a: number, b: number) => number;
declare let addfn: Addfunction;
type id = string | number;
declare let userid: id;
type person = {
    username: string;
};
type emp = {
    salary: number;
};
type staff = person & emp;
declare let worker: staff;
