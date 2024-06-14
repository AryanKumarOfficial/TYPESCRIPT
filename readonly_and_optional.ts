type User = {
  readonly _id: string; // ionly once can assign the value
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: cardDetails; //optional
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardCVV = {
  cardCVV: string;
};

type cardDetails = cardNumber &
  cardDate &
  cardCVV & {
    holderName: string;
  };

let myUser: User = {
  _id: "1058",
  name: "aryan",
  email: "aryan@gmail.com",
  isActive: true,
};

// myUser._id = "5445"; can't do this due to readonly keyword

export {};
