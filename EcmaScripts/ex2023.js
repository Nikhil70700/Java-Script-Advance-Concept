//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)

//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element from the last to first of the array based on a condition.
// const array = [1, 2, 3 ,4,5,6,4];
// console.log(array.findLast((elem)=>elem));
// console.log(array.findLastIndex((elem)=>elem));
//* ===============================================
//*  New Array.prototype functions
//* ==============================================

const myNames = ["Nikhil", "Kumar", "Pandey","Software Engineer","Google"];

// //? Array.prototype.toReversed();
// const reversedNum = myNames.toReversed();
// console.log("original", reversedNum);
// console.log("reversed", myNames);


// //todo if it's not working run in browser

//? Array.prototype.toSorted(compareFn);
// const sortedArr = myNames.toSorted();
// console.log("original", myNames);
// console.log("sorted", sortedArr);

//? Array.prototype.toSpliced(start, deleteCount, ...items);
// const splicedArr = myNames.toSpliced(0, 2,"Nikhil","Kumar");
// // console.log("original", myNames);
// console.log("spliced", splicedArr);

//? Array.prototype.with(index, value);
//* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.

const replaceWith = myNames.with(myNames.length-1, "Amazon");
// console.log("original", myNames);
console.log("replaced", replaceWith);