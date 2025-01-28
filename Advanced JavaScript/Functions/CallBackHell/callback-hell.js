//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
    setTimeout(() => {
        console.log("Hi,My Name Is Nikhil");
        setTimeout(() => {
            console.log("My Middle Name Is Kumar");
            setTimeout(() => {
                console.log("My Last Name Is Pandey");
                setTimeout(() => {
                    console.log("I like to Code");
                    setTimeout(() => {
                        console.log("I lived In Hyderabad");
                        setTimeout(() => {
                            console.log("I was Bon in Bihar,Buxar");
                            setTimeout(() => {
                                console.log("My Dream company is Google");
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                setTimeout(() => {
                                    console.log("I Love to Play BGMI");
                                }, 1000);
                                
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
getStudentData();