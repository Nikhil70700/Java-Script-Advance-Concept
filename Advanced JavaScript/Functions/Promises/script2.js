// let promise=new Promise((resolve,reject)=>{
//     console.log("My Name Is Nikhil Pandey");

//     // resolve("Hey Nikhil");
//     reject("Got some Error!");
// })







// const getPromise=(()=>{
// return new Promise((resolve,reject)=>{
// console.log("I am Promise");
// // resolve("I am Resolved");
// reject("I am Rejected");
// });
// });

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("Promise Rejected",err)
// });



function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("Success");
        },4000);
    });
};
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("Success");
        },4000);
    });
};
function asyncFunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data3");
            resolve("Success");
        },4000);
    });
};


// console.log("Fetching data.....1");
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// console.log("Fetching data.....2");
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });  //!Insted of writing like this we can use chaining method

console.log("Fetching data.....1");
let p1=asyncFunc1();
p1.then((res)=>{
    // console.log(res);
    console.log("Fetching data.....2");
    let p2=asyncFunc2();
    p2.then((res)=>{
        // console.log(res)
        console.log("Fetching data.....3");
        let p3=asyncFunc3();
        p3.then((res)=>{
            // console.log(res);
        })
    })
});






























// console.log("I am here");



// for( let i=0;i<10;i++){
//     console.log(i);
// }