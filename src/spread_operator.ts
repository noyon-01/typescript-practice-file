// const fruits_1: string[] = ["apple", "orange", "banana"];
// const fruits_2: string[] = ["mango", "malta", "guava"];

// const allFruits: string[] = [...fruits_1, ...fruits_2];
// console.log(allFruits);

// const num_1: number[] = [20, 30, 40];
// const num_2: number[] = [70, 80, 90];

// const num_3: number[] = [10, ...num_1, 50, 60, ...num_2];
// console.log(num_3);

interface IUser {
  name: string;
  age: number;
}

const user: IUser = {
  name: "kobir",
  age: 25,
};

interface IAddress {
  city: string;
  country: string;
}

const address: IAddress = {
  city: "kulna",
  country: "bangladesh",
};

interface IUserAddress {
  name: string;
  age: number;
  city: string;
  country: string;
}

const userAddress: IUserAddress = { ...user, ...address };
console.log(userAddress);
