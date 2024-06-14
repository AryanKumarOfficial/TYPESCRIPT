class User {
  //   #name: string; // privating
  name: string; // privating
  public email: string;
  private readonly city: string = "STM";
  constructor(name: string, email: string) {
    this.name;
    this.email;
  }
}

const aryan = new User("aryan", "aryan@ary.com");
// aryan.city; can't access outside the class
export {};
