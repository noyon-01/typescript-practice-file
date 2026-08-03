// const waitTwoSecond = (): Promise<string> => {
//   return new Promise((resolve: (value: string) => void) => {
//     setTimeout((): void => {
//       resolve("wait 2 seconds...");
//     }, 2000);
//   });
// };

// const run = async (): Promise<void> => {
//   console.log("waiting...");

//   const result: string = await waitTwoSecond();
//   console.log(result);

//   console.log("work complete");
// };

// run();

// const waitFiveSecond = (): Promise<string> => {
//   return new Promise((resolve: (value: string) => void) => {
//     setTimeout((): void => {
//       resolve("wait 5 second");
//     }, 5000);
//   });
// };

// const run = async (): Promise<void> => {
//   console.log("waiting...");

//   const result: string = await waitFiveSecond();
//   console.log(result);

//   console.log("complete");
// };

// run();
