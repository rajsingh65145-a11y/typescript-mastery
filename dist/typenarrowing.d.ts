declare let value1: string | number;
declare function printvalue1(value1: string | number): void;
type Admin1 = {
    name: string;
    permission: string[];
};
type User1 = {
    name: string;
    email: string;
};
declare function getInfo(person: Admin1 | User1): void;
