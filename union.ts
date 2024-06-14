/**
 * unions in ts
 * combinations of two types
 */

let score: number | string = 33;

score = "";

score.toUpperCase();

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let aryan: User | Admin = {
  name: "aryan",
  id: 1211,
};

aryan = { userName: "aryanji", id: 1255 }; // only this two will be stored
// aryan = { userName: "aryanji", id: 1255, name: "aryan" }; // three will be stored

console.log(aryan);

// function getDbId(id: number | string) {
//     // API call
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("2");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    return id + 2;
  }
}

// const data: number[] = [1, 2, 3, "4"];
// const data2: string[] = [1, 2, 3, "4"];
const data3: (number | string | boolean)[] = [1, 2, 3, "4", true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment="crew"

export {};
