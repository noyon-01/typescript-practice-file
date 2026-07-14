// const students: IStudents[] = [
//   { id: 1, name: "rohim", grade: 85 },
//   { id: 2, name: "korim", grade: 32 },
//   { id: 3, name: "sakib", grade: 45 },
//   { id: 4, name: "akib", grade: 38 },
// ];

// interface IStudents {
//   id: number;
//   name: string;
//   grade: number;
// }

// const passedStudents: IStudents[] = students.filter(
//   (student: IStudents): boolean => {
//     return student.grade >= 40;
//   },
// );
// console.log(`passed students list:`, passedStudents);

// const failedStudents: IStudents[] = students.filter(
//   (student: IStudents): boolean => {
//     return student.grade <= 40;
//   },
// );
// console.log(`failed students list:` ,failedStudents);

// const products: IProducts[] = [
//   { id: 1, name: "Laptop", price: 55000, category: "electronics" },
//   { id: 2, name: "Mouse", price: 500, category: "electronics" },
//   { id: 3, name: "T-Shirt", price: 1200, category: "clothing" },
//   { id: 4, name: "Jeans", price: 2500, category: "clothing" },
// ];

// interface IProducts {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }

// const cheapProducts: IProducts[] = products.filter(
//   (product: IProducts): boolean => {
//     return product.price < 1000;
//   },
// );
// console.log(cheapProducts);

// const clothingItem: IProducts[] = products.filter(
//   (product: IProducts): boolean => {
//     return product.category === "clothing";
//   },
// );
// console.log(clothingItem);

// const electronicsItem: IProducts[] = products.filter(
//   (product: IProducts): boolean => {
//     return product.category === "electronics";
//   },
// );
// console.log(electronicsItem);
