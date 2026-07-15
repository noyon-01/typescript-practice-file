// const students: IStudents[] = [
//   { id: 1, name: "rohim", grade: 80 },
//   { id: 2, name: "korim", grade: 90 },
//   { id: 3, name: "josim", grade: 70 },
// ];

// interface IStudents {
//   id: number;
//   name: string;
//   grade: number;
// }

// const totalGrade: number = students.reduce(
//   (accumlator: number, student: IStudents): number => {
//     return accumlator + student.grade;
//   },
//   0,
// );
// console.log(totalGrade);

// const sumId: number = students.reduce(
//   (sum: number, student: IStudents): number => {
//     return sum + student.id;
//   },
//   0,
// );
// console.log(sumId);

// const cards: ICards[] = [
//   { product: "Laptop", price: 55000, quantity: 1 },
//   { product: "Mouse", price: 500, quantity: 4 },
//   { product: "Keyboard", price: 1500, quantity: 2 },
// ];

// interface ICards {
//   product: string;
//   price: number;
//   quantity: number;
// }

// const totalPrice: number = cards.reduce(
//   (total: number, card: ICards): number => {
//     return total + card.price * card.quantity;
//   },
//   0,
// );
// console.log(totalPrice);
