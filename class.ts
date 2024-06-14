class User {
  name: string;
  email: string;
  readonly city: string;
  constructor(email: string, name: string, city: string) {
    this.name;
    this.email;
    this.city;
    return { name, email, city };
  }
}

const aryan = new User("aryan", "aryan@aryan.com", "STM");
// aryan.city=""
aryan.name = "Aryan";
console.log(aryan);

export {};
