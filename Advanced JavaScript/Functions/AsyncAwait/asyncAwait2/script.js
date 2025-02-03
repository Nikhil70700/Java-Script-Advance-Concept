//! Async-Await:==>

//? async function always returns a promise

// async function myFunc(){...}
// myFunc() // returns a promise

//***  await pauses the execution of its surrounding async function until the promise is settled


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 5000)
    })
}

async function getWeatherData() {
    await api(); //1st
    // setTimeout(() => {
    //     console.log("Fetching Data");
    // }, 5000);
    await api(); //2st

}


//====================================================

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
        },5000);
    });
};
//Async-Await
// async function getAllData(){
//     await getData(1); //1st call
//     console.log("First Call Completed ")
//     console.log("Waiting for 5s for the next call.....");
    
//     await getData(2); //2nd call
//     console.log("Second Call Completed ")
//     console.log("Waiting for 5s for the next call.....");

//     await getData(3); //3rd call
//     console.log("Third Call Completed ")
//     console.log("Waiting for 5s for the next call.....");


//     console.log("getAllData Ended")

// }

// getAllData();

//!IIFE way

(async()=>{
    await getData(1); //1st call
        console.log("First Call Completed ")
        console.log("Waiting for 5s for the next call.....");
        
        await getData(2); //2nd call
        console.log("Second Call Completed ")
        console.log("Waiting for 5s for the next call.....");
    
        await getData(3); //3rd call
        console.log("Third Call Completed ")
        console.log("Waiting for 5s for the next call.....");
    
    
        console.log("getAllData Ended")
    
})();

//==============================================



//!IIFE :Immediately Invoked Function Expression
//? IIFE is a function that is called immediately as soon as it is defined:
//? It is a function that is defined and called in the same statement.

// syntx":=

// // 1
// (function(){
//     //---
// })();

// // 2
// (()=>{
//     //---
// })();
// // 3
// (async()=>{
//     //---
// })();
