type UserRole = Record<"admin" | "user" | "guest", string>;
declare const userRole: UserRole;
type Studentmarks = Record<string, number>;
declare const studentmarks: Studentmarks;
type User22 = {
    name: string;
    age: number;
};
type Users = Record<string, User22>;
declare const users: Users;
