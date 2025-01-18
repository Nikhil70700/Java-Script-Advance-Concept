//?Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

const obj1={name:"Nikhil"};
const obj2={name:"Nikhil"};

const obj3=obj1;
const isEquals=obj3==obj1 ? true :false;

// const isEqual=obj1==obj2 ? true :false;
console.log(isEquals);