declare function printvalue2<T>(value: T): T;
declare function gudata<T>(data: T): T;
declare let zebra: string;
declare let age44: number;
declare function getfirstelement<T>(data: T[]): T;
interface Apiresponse<T> {
    status: boolean;
    data: T;
}
declare const respnse1: Apiresponse<string>;
declare const response4: Apiresponse<{
    name: string;
    age: number;
}>;
declare function getLenght<T extends {
    length: number;
}>(value: T): number;
