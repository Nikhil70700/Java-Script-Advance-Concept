//*========================================
//* We can add dynamic keys in an object
//* ========================================

let idType = "studentId";

let student = {
  [idType]: "A123456", // Dynamic key based on idType
  sName: "Vinod",
  sAge: 29,
  isStudent: true,
  greet: function () {
    console.log(
      `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
    );
  },
};

student.greet();

//? useCase: when we want to get the user name and value in react
