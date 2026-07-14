// const students: IStudents[] = [
//   { id: 1, name: "rohim", grade: 85 },
//   { id: 2, name: "korim", grade: 72 },
//   { id: 3, name: "josim", grade: 90 },
// ];

// interface IStudents {
//   id: number;
//   name: string;
//   grade: number;
// }

// const names: string[] = students.map((student: IStudents): string => {
//   return student.name;
// });
// console.log(names);

// const grades: number[] = students.map((student: IStudents): number => {
//   return student.grade;
// });
// console.log(grades);

// const message: string[] = students.map((student: IStudents): string => {
//   return `student name is ${student.name} and he achived ${student.grade / 10} point`;
// });
// console.log(message);

// const products: IProducts[] = [
//   { id: 1, name: "Laptop", price: 55000 },
//   { id: 2, name: "Mouse", price: 500 },
//   { id: 3, name: "Keyboard", price: 1500 },
// ];

// // console.log(...products);

// interface IProducts {
//   id: number;
//   name: string;
//   price: number;
// }

// const discountedProducts: IProducts[] = products.map(
//   (product: IProducts): IProducts => {
//     return {
//       ...product,
//       price: product.price * 0.9,
//     };
//   },
// );
// console.log(discountedProducts);

// const productName: string[] = products.map((product: IProducts): string => {
//   return product.name;
// });
// console.log(productName);

// const productPrice: number[] = products.map(({ price }: IProducts): number => {
//   return price;
// });
// console.log(productPrice);
