type User11 = {
    name: string;
    age: number;
    email: string;
};
type UpdatedUser = Partial<User11>;
declare const user11: UpdatedUser;
type User10 = {
    name: string;
    age: number;
    email: string;
};
type UserBasicInfo = Pick<User10, "name" | "email">;
declare const user18: UserBasicInfo;
type UserBasicInfo1 = Omit<User10, "email">;
declare const user19: UserBasicInfo1;
