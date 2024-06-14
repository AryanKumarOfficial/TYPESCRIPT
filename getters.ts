class User {
  private _courseCount = 1;

  readonly city: string = "STM";
  constructor(public name: string, public email: string) {}

  private deleteToken() {
    console.log("deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course coubt should be more than one");
    } else {
      this._courseCount = courseNum;
    }
  }
}

const aryan = new User("aryan", "aryan@ar.com");

export {};
