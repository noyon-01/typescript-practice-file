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

for (let order of orders) {
  if (order === "34") {
    let currentOrder: string | undefined | boolean;
    currentOrder = order;
    console.log(currentOrder);
  }
}
