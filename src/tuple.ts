// type Point = [number, number];
// const dhakaLocation: Point = [10, 20];
// console.log(dhakaLocation);
// console.log(dhakaLocation[0]);

// type UserInfo = [string, string, number];
// const user: UserInfo[] = [
//   ["ronaldo", "portigal", 7],
//   ["neymar", "brazil", 10],
//   ["messi", "argentina", 10],
// ];
// console.log(user);
// console.log(user[1]);

// type Numbers = readonly [number, number, number];
// const num: Numbers = [1, 2, 3];
// // num.push(4); //if I set readonly type I can not add or push any extra item.
// console.log(num);

type Divition = [number, number];
const divider = (a: number, b: number): Divition => {
  const quotion = Math.floor(a / b);
  const remainder = a % b;
  return [quotion, remainder];
};

const result: Divition = divider(7, 2);
console.log(result);
