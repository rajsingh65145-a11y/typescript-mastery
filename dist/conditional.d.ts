type Result3<T> = T extends string ? string : number;
type checkString<T> = T extends string ? 'Yes' : 'No';
type Result2 = checkString<string>;
type Result4 = checkString<number>;
declare const rs: Result2;
type ISAdmin<T> = T extends "Admin" ? 'true' : 'false';
type Result5 = ISAdmin<"harsh">;
type Result6 = ISAdmin<"Admin">;
interface admin {
    permission: string[];
}
interface Emp4 {
    department: string;
}
type UserType4<T> = T extends admin ? 'Admin' : 'User';
type result5 = UserType4<admin>;
type result6 = UserType4<Emp4>;
declare function guh(): {
    name: string;
    age: number;
};
type guhUser<T> = T extends (...args: any[]) => infer R ? R : never;
type uh = guhUser<typeof guh>;
