//* =====================================
//*  Interview Question
//* ======================================

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

// let a = 10;
// const modifyValue = (x) => (x = 20);

// console.log(modifyValue(a)); 
// console.log(a);

//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

// let obj = { 
// id: 5,
// name: "Nikhil" 
// };

// let obj1 = obj;

// obj1.name = "Nikhil Pandey";
// console.log(obj1);
// console.log("original", obj);

// To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):

//? Object.assign() is used to copy properties from one or more source objects to a target object.

// let obj = { id: 5, name: "kodyfier" };
// let obj1 = {};
// let newObj = Object.assign(obj1, obj); //Object.assign(TargetVal,source)

// newObj.name = "Nikhil Pandey";
// console.log(newObj);
// console.log("original", obj);

//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);

//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================
//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// const addSubjectGrade = (student, subject, marks) => {
//   if (!student.grades) {
//     student.grades = {};
//   }

//   return (student.grades[subject] = marks);
// };

// addSubjectGrade(student, "computer", 92);
// console.log(student);

//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// const areObjectsEqual = (obj1, obj2) => {
//   //   if (obj1.length != obj2.length) {
//   //     console.log("hi");
//   //     return false;
//   //   }
//   let o1 = Object.keys(obj1);
//   let o2 = Object.keys(obj2);

//   if (o1.length != o2.length) {
//     console.log("There keys are not same");
//     return false;
//   }

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// // Example usage:
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false

//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

// let inputArray = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const arrayToObj = (arr) => {
//   //   console.log(arr[2].id);
//   let obj = {};
//   for (let key of arr) {
//     console.log(key.id, key);
//     obj[key.id] = key;
//     // console.log(key);
//   }
//   return obj;
// };

// console.log(arrayToObj(inputArray));
// Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }