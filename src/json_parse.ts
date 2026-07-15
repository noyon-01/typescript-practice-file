// const jsonString: string = '{"name": "rohim", "age": 25, "city": "dhaka"}'; //json data type - string
// console.log(typeof jsonString);
// console.log(jsonString);

//! jahato string ta parse korar por object hoya jaba tai akana IString - interface use kora hoi ca - ata sob sommoy mona rakta hoba.
// const userString: IString = JSON.parse(jsonString); //convert json data type string - object
// console.log(typeof userString);
// console.log(userString);

// interface IString {
//   name: string;
//   age: number;
//   city: string;
// }

// const message: string = `name is ${userString.name} and age ${userString.age}`;
// console.log(`message:`, message);

// const jsonString: string =
//   '{"name":"noyon","age":23,"city":"dhaka","isActive":true,"hobbies":["football","coding"]}';
// console.log(typeof jsonString);

// const parseObject: IParseObject = JSON.parse(jsonString);
// console.log(typeof parseObject);
// console.log(parseObject);

// interface IParseObject {
//   name: string;
//   age: number;
//   city: string;
//   isActive: boolean;
//   hobbies?: string[];
// }

// const { name, age, city, isActive, hobbies } = parseObject;
// const message: string = `The boy name is ${name} and he is ${age} years old. He live in ${city} and he is a ${isActive} person. He play ${hobbies?.[0]} and enjoy writing ${hobbies?.[1]}.`;
// console.log(message);

const employeeJson: string = `
  {
    "id": 1,
    "name": "korim",
    "age": 30,
    "address": {
      "street": "132, golsan",
      "city": "dhaka",
      "zipCode": "1212"
    },
    "skills": ["TypeScript", "React", "Node.js"]
  }
`;

// console.log(typeof employeeJson);

interface IAddress {
  street: string;
  city: string;
  zipCode: string;
}

interface IEmployee {
  id: number;
  name: string;
  age: number;
  address: IAddress;
  skills: string[];
}

const jsonParse: IEmployee = JSON.parse(employeeJson);
// console.log(typeof jsonParse);
// console.log(jsonParse);

const {
  name,
  age,
  address: { city, street },
  skills,
} = jsonParse;

console.log(name);
console.log(age);
console.log(city);
console.log(street);
console.log(skills.join(", "));
console.log(skills[1]);
