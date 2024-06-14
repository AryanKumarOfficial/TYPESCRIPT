interface User {
  readonly _id: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail:()=> string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const aryan: User = {
  _id: 121182,
  email: "aryan@mail.com",
  userId: 1211,
  startTrail: () => {
    return "trial started";
  },
  getCoupon: (name: "aryan100", off: 10) => {
    return 10;
  },
};
aryan.email = "aryan@.com";
// aryan._id = 1211;

export {};
