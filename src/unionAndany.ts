//! 3rd Class Example code !//

let subjects: number | string = "1M";
console.log(subjects);

let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";
console.log(apiRequestStatus);

let airliensSeat: "aisle" | "window" | "middle" = "aisle";
airliensSeat = "window";
console.log(airliensSeat);

const orders = ["23", "64", "34", "52"];
let currentOrder: any;

for (let order of orders) {
  if (order === "64") {
    currentOrder = order;
  }
}

console.log(currentOrder);
