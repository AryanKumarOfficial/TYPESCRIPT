function addTow(num: number): number {
  //   return "hello";
  return num + 2;
}

let add = addTow(5);

// function getVal(myVal: number) :string{
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
  //   return 1; // incvalid if type is decleared
});

function consoleError(errmsg: string): void {
  console.error(errmsg);
  //   return 1;
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

handleError("hello");

export {};
