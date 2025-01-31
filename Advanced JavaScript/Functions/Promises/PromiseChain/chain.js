function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("Success1");
        }, 4000);
    });
};
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("Success2");
        }, 4000);
    });
};
function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data3");
            resolve("Success3");
        }, 4000);
    });
};


console.log("Fetching data.....1");
asyncFunc1().then((res) => {
    console.log("Fetching data.....2");
    asyncFunc2().then((res) => {
        console.log("Fetching data.....3");
        asyncFunc3().then((res)=>{
            console.log("Data Successfully Fatched");
        })
    });
});
