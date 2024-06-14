/**
 * functions in ts
 */

function addTow(num: number) {
  // return num + 2;
  return "hello"; // no warining
}

function toUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: String, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let add = addTow(5);

console.log(addTow(5));
console.log(toUpper("aryan"));
console.log(signUpUser("aryan", "aryan@gmail.com  ", true));
console.log(loginUser("aryan", "aryan@gmail.com"));

export {};
