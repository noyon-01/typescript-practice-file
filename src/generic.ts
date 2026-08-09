const fruits: string[] = ["apple", "Orange", "mango"];
const numbers: number[] = [11, 2, 3, 4, 5, 6, 7, 8, 9];

function getFirstItem<T>(items: T[]): T {
  return items[0];
}

console.log(getFirstItem(numbers));
console.log(getFirstItem(fruits));


