type User2 = {
    name: string;
    age: number;
};
type ReadOnlyUser = {
    readonly [key in keyof User2]: User2[key];
};
declare const user4: ReadOnlyUser;
type OptionalUser = {
    [key in keyof User2]?: User2[key];
};
declare const user5: OptionalUser;
type BooleanUser = {
    [key in keyof User2]: boolean;
};
declare const user7: BooleanUser;
