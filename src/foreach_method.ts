// const students: IStudent[] = [
//   { id: 1, name: "rohim", grade: 85 },
//   { id: 2, name: "korim", grade: 72 },
//   { id: 3, name: "sakib", grade: 90 },
// ];

// interface IStudent {
//   id: number;
//   name: string;
//   grade: number;
// }

// students.forEach((student: IStudent): void => {
//   console.log(
//     `student name is ${student.name} - his grade is ${student.grade}`,
//   );
// });

// students.forEach(({ name, grade }: IStudent): void => {
//   console.log(`student name is ${name} - his grade is ${grade}`);
// });

// const carts: ICarts[] = [
//   { product: "Laptop", price: 55000, quantity: 2 },
//   { product: "Mouse", price: 500, quantity: 5 },
//   { product: "Keyboard", price: 1500, quantity: 3 },
// ];

// interface ICarts {
//   product: string;
//   price: number;
//   quantity: number;
// }

// carts.forEach((cart: ICarts): void => {
//   const totalPrice = cart.quantity * cart.price;
//   console.log(
//     `total ${cart.product} price = ${cart.quantity} x ${cart.price} = ${totalPrice}`,
//   );
// });
