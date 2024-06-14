interface User {
  readonly _id: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail:()=> string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  name: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// const aryan: User = {
//   _id: 121182,
//   email: "aryan@mail.com",
//   userId: 1211,
//   startTrail: () => {
//     return "trial started";
//   },
//   getCoupon: (name: "aryan100", off: 10) => {
//     return 10;
//   },
//   name: "aryan",
// };

const aryan: Admin = {
  _id: 121182,
  email: "aryan@mail.com",
  userId: 1211,
  startTrail: () => {
    return "trial started";
  },
  getCoupon: (name: "aryan100", off: 10) => {
    return 10;
  },
  name: "aryan",
  role: "admin",
};
aryan.email = "aryan@.com";
// aryan._id = 1211;

export {};
