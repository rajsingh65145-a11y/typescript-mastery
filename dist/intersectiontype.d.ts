type User = {
    username: string;
};
type Admin = {
    permission: string[];
};
type adminuser = User & Admin;
declare let admi: adminuser;
interface Person {
    username: string;
}
interface Employee {
    salary: number;
}
type Staff = Person & Employee;
declare let works: Staff;
