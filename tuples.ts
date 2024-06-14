// const user: (string | number)[] = [1, "hc"];
let user: [string, number, boolean];

user = ["ak", 12, true];
// user = [12, true, "ak"]; can't do this must be in the order

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

let newUser: User = [112, "aryan"];
newUser[1] = "Aryan";
// newUser.push(true); can't do this in new version

export {};
