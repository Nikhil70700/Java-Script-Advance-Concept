//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================

//?JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.


let student = {
      id: 1,
      sName: "Nikhil",
      sAge: 29,
      isStudent: false,
      greet: function () {
        console.log(
          `hey my id is ${student.id} & my name is ${student.sName}`
        );
      },
    };
    // console.log(student);


    let jsonData = JSON.stringify(student);
    console.log(jsonData);



    let parsedObject = JSON.parse(jsonData);
    console.log(parsedObject);
