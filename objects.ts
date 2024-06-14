/**
 * objects in ts
 */

const user = {
  name: "aryan",
  email: "aryan@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "aryan", isPaid: false, email: "a@a.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reacthjs", price: 349 };
}

export {};
