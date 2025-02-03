//* ==========================================
//*  Promise in JavaScript
//* ==========================================

//? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//todo 👉 In simpler terms, a promise is like a placeholder for the result of an asynchronous operation. Or A container for the future result or value.

//* It can be in one of three states:

//? Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.

//? Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.

//* ==========================================
//* Using the Promise Constructor (Class):
//* ==========================================

//? You can create a promise using the Promise constructor. This involves creating a new instance of the Promise class, which takes a function as an argument. This function, often referred to as the "executor function," takes two parameters: resolve and reject. You call resolve when the asynchronous operation is successful and reject when it encounters an error.

//* real life example

//todo  1:  default state is pending
 
//todo 2:  Promise Made:  Your friend promises to call you after 2 days at 6 pm. This is similar to creating a promise in JavaScript.

//todo 3:  Pending Stage:  During the 2-day period, you're in a "pending" stage. You're not sure whether your friend will fulfill the promise (call you) or break the promise (not call you). Similarly, when you create a promise in JavaScript, it starts in a pending state until it either resolves (fulfills) or rejects.

//todo 4: Resolution at a Specific Time:  After 2 days and exactly at 6 pm, you'll know whether the promise is fulfilled (resolved) if your friend calls you, or if it's broken (rejected) if your friend doesn't call. This aligns with the idea that promises in JavaScript resolve or reject, often triggered by asynchronous operations, at a specific point in time.

//* ==========================================
//* 2: Using a Function (Promise Wrapper):
//* ==========================================

//? You can also create a promise by defining a function that returns a promise. This function usually encapsulates some asynchronous operation. Inside this function, you manually create a promise and resolve or reject it based on the result of the asynchronous operation.

// syntax
// function myPromiseFunction() {
//   return new Promise((resolve, reject) => {
//     // Asynchronous operations here
//     // If successful, call resolve(value)
//     // If there's an error, call reject(error)
//   });
// }

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   resolve("Hey, I miss you");
//       reject("Sorry,I can't")
//     }, 2000);
//   });
//     pr.then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => { //Either it is resolve or reject finally will execute for sure
//       console.log("Don't worry, We all miss you and keep smiling");
//     });



// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Sorry, I can't");
//   }, 2000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => { //Either it is resolve or reject finally will execute for sure
//     console.log("Don't worry, We all miss you and keep smiling");
//   });

// 1: By default promise has the pending state
// 2: the moment we use setTimeout, we need to handle promises, we can do using then and catch

//* ==========================================
//* Promise Methods
//* ==========================================

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.

// Example usage:

// The enrollStudent function returns a promise that resolves or rejects based on the success or failure of the enrollment process.
// The then method is used to handle the success case, printing a success message.
// The catch method is used to handle the failure case, printing an error message.
// The finally method is used to print a message indicating the completion of the enrollment process, whether successful or not.

// Example usage:
// const studentName = "Nikhil";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
//     // Simulating asynchronous enrollment process
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;

//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });

const promise1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("First"), 2000)
  );
  
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Second"), 5000)
  );
  
//   const promise2 = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Failed"), 100)
//   );
  
  const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Third"),8000)
  );


  //! Key Points: (Promise.all)

// Promise.all takes an array of promises
// Runs all promises at the same time (in parallel)
// Waits for ALL promises to complete
// If ANY promise fails, the whole thing fails
// Returns array of results in same order as input

//?When to use Promise.all:

// When you have multiple independent tasks
// When you want to speed up operations
// When you need all operations to succeed

//?When NOT to use:

// When tasks depend on each other
// When some tasks can fail without affecting others (use Promise.allSettled instead)
  
  // Promise.all([promise1, promise3, promise2])
  //   .then((values) => {
  //     console.log(values);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  




    //!Promise.allSettled

    // Never fails
    // Returns array of objects with status and value/reason
    // Use when you want to handle success/failure individually

   //? When to use Promise.allSettled:

// When some operations can fail without affecting others
// When you need to know which operations succeeded/failed
// When you want to process all results regardless of status
// Loading multiple pieces of data where some might be unavailable

//!Example Use Cases:

// Loading data from multiple APIs
// Sending notifications to multiple users
// Batch processing operations
// Data validation across multiple sources



  // Promise.allSettled([promise1, promise2, promise3])
  //   .then((values) => {
  //     console.log(values);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });




  //! Promise .race-----
 //? Returns First Settled Promise:.

// Returns the result of the first promise that settles (either resolves or rejects)
// Other promises continue running but their results are ignored


//***  Key Differences from other Promise methods:

// Promise.all() - Waits for all promises to complete
// Promise.allSettled() - Waits for all promises to settle
// Promise.race() - Returns as soon as any promise settles
// Promise.any() - Returns as soon as any promise fulfills (ignores rejections unless all reject)


////Remember:

//?  Promise.race() is ideal for implementing timeouts
//  It's useful when you want the fastest result from multiple sources
//  Once a winner is determined, other promises' results are ignored (but they still complete)
// The first rejection will also win the race
  
  Promise.race([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error);
    });