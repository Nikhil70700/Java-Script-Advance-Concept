//* ==========================================
//*    ECMAScript Features (2016):
//* =========================================

//* ==============================
//*    Exponentiation Operator
//* ===============================

//? ES7 introduces a new mathematical operator called exponentiation operator. This operator is similar to using Math.pow() method. Exponentiation operator is represented by a double asterisk **. The operator can be used only with numeric values.

//* syntax
// base_value ** exponent_value;


//? Basic usage:
// let base = 2;
// let exponent = 3;
// console.log("using Math.pow()", Math.pow(base, exponent));
// console.log("using exponentiation operator", base ** exponent);

//? In expressions:
//! calculates the area of a circle with a radius of 5 units.
let area = Math.PI * 5 ** 2;
// console.log(area);
console.log(area.toFixed(2));

//* ==============================
//*  Array.includes()
//* ===============================


let arr=[1,3,4,5,68,8]
console.log(arr.includes(2));