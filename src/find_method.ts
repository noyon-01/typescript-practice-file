// const students: IStudents[] = [
//   { id: 1, name: "rohim", grade: 85 },
//   { id: 2, name: "korim", grade: 72 },
//   { id: 3, name: "sakib", grade: 45 },
//   { id: 4, name: "akib", grade: 38 },
// ];

// interface IStudents {
//   id: number;
//   name: string;
//   grade: number;
// }

// const student: IStudents[] | any = students.find(
//   (student: IStudents): boolean => {
//     return student.id === 3;
//   },
// );

// if (student) {
//   console.log(student);
// } else {
//   console.log("student is not found!");
// }

// const products: IProducts[] = [
//   { id: 1, name: "Laptop", price: 55000 },
//   { id: 2, name: "Mouse", price: 500 },
//   { id: 3, name: "Keyboard", price: 1500 },
// ];

// interface IProducts {
//   id: number;
//   name: string;
//   price: number;
// }

// const keyboard: IProducts[] | unknown = products.find(
//   (product: IProducts): boolean => {
//     return product.name.toLocaleLowerCase() === "keyboard";
//   },
// );

// if (keyboard) {
//   console.log(keyboard);
// } else {
//   console.log("product is not found!");
// }

// const expensiveProduct: IProducts[] | any = products.find(
//   (product: IProducts): boolean => {
//     return product.price >= 10000;
//   },
// );

// if (expensiveProduct) {
//   console.log(expensiveProduct);
// } else {
//   console.log("here are no more expensive product");
// }
