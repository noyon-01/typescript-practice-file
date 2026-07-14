// interface IStudent {
//   name: string;
//   age: number;
//   subject: string;
// }

// const student: IStudent = {
//   name: "noyon",
//   age: 23,
//   subject: "economics",
// };

// const { name, age, subject } = student;
// console.log(name);
// console.log(age);
// console.log(subject);

// const person: IPerson = {
//   fullName: "Shahadat Hosen Noyon",
//   age: 23,
//   city: "Chattogram",
// };

// interface IPerson {
//   fullName: string;
//   age: number;
//   city: string;
// }

// const { fullName: name, age: boyos, city: nogor } = person;
// console.log(
//   `my name is ${name}, I am ${boyos} years old and I live is ${nogor} city.`,
// );

// const employeDetails: IEmployeDetails = {
//   empName: "hablu_programmer",
//   salary: 30000,
//   // bonus : now bonus is not applicable;
// };

// interface IEmployeDetails {
//   empName: string;
//   salary: number;
//   bonus?: number;
// }

// const { empName, salary, bonus = 5000 } = employeDetails;
// console.log(empName);
// console.log(bonus);

// const user: IUser = {
//   userName: "noyon",
//   contact: {
//     email: `shahadat.dev26@gmail.com`,
//     phone: `01585735520`,
//   },
//   age: 23,
// };

// interface IUser {
//   userName: string;
//   contact: {
//     email: string;
//     phone: string;
//   };
//   age: number;
// }

// const {
//   userName: myname,
//   contact: { email, phone },
//   age: boyos,
// } = user;

// console.log(myname);
// console.log(email);
// console.log(boyos);
