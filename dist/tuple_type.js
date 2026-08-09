"use strict";
// type Point = [number, number];
// const dhakaLocation: Point = [10, 20];
// console.log(dhakaLocation);
// console.log(dhakaLocation[0]);
Object.defineProperty(exports, "__esModule", { value: true });
const divider = (a, b) => {
    const quotion = Math.floor(a / b);
    const remainder = a % b;
    return [quotion, remainder];
};
const result = divider(7, 2);
console.log(result);
//# sourceMappingURL=tuple_type.js.map