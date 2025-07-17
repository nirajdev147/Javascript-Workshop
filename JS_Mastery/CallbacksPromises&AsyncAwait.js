/*----------------------------Callbacks, Promises & Async Await.js-----------------------------*/

// async await >> promise chain >> callback hell

/*--------------------------------------------sync in JS------------------------------------------*/

/*---------------------------------------------Start of synchronous in JS-------------------------------------*/

// Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instructions wait for the previous instruction to complete its execution.

//Example of synchronous code execution

// function sayHello(){
//     console.log("Hello World");
// }
// setTimeout(sayHello, 3000); // This will execute after 3 seconds

/*--------------------------------------------End of synchronous in JS-------------------------------------*/

/*----------------------------------------------Start of Asynchronous in JS-------------------------------------*/

// Due to synchronous programming, important instruction get blocked due to some previous instruction, which causes delay in the UI.
// Asynchronous code instructions allowed to execute next instructions immediately and doesnot block the flow.

//Example of asynchronous code execution

// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("Hello World 1");
// }, 5000);

// console.log("three");
// console.log("four");

/*----------------------------------------------End of Asynchronous in JS-------------------------------------*/





/*----------------------------------------------Start of Callbacks in JS-------------------------------------*/



// A callback is a function that is passed as an argument to another function and is executed after the completion of that function.

// Example of synchronous programming callback function

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(5, 10, sum); // Output: 15






//Another example of callback function

// function  mul(a,b){
//     console.log(a * b);
// }

// function calculator(a, b, callback){
//     console.log("Calculating...");
//     setTimeout(() => {
//         callback(a, b);
//     }, 5000); // Simulating a delay of 2 seconds
// }

// calculator(5, 10, mul); // Output: 50 after 5 seconds



//Another Simple Example

// const hello = () => {
//   console.log("Hello World");
// };

// setTimeout(hello, 3000); // This will execute after 3 seconds

// const greet = () => {
//   console.log("Greetings!");
// };

// setTimeout(greet, 6000); // This will execute after 2 seconds




/*----------------------------------Start of Callback Hell in JS-------------------------------------*/

// Callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain.
// It occurs when you have to perform multiple asynchronous operations in sequence, and each operation depends on the result of the previous one.
// It also known as "Pyramid of Doom" because of the nested structure it creates.

// Nesting

// let age = 19;
// if(age >= 18){
//     if(age >=60){
//         console.log("You are a senior citizen");
//     }else{
//         console.log("You are an adult");
//     }
// }else{
//     console.log("You are a child");
// }

// for (let i = 0; i < 5; i++) {
//     str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }








// Example of callback hell

// function getData(dataID, getNextData)
// {
//     setTimeout(() => {
//         console.log("data", dataID);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () =>{
//     console.log("Getting data 2...");
//     getData(2, () => {
//         console.log("Getting data 3...");
//         getData(3, () => {
//             console.log("Getting data 4...");
//             getData(4, () => {
//                 console.log("Getting data 5...");
//                 getData(5, () => {
//                     console.log("All data fetched successfully");
//                 });

//             });
//         });
//     });
// })

/*----------------------------------End of Callback Hell in JS-------------------------------------*/

//Callback hell can be a problem in Javascript, to resolve this issue, we can use Promises and Async/Await.

/*----------------------------------------------End of Callbacks in JS-------------------------------------*/











/*----------------------------------------------Start of Promises in JS-------------------------------------*/

//Promises is for "eventful" completion of task. It is an object in JS. It is a solution to the callback hell.

//syntax of Promise

// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is success");
//     // resolve("Promise resolved successfully");
//     // reject("Promise rejected");
// });

// A javascript promise can be in one of the following states:

// 1. Pending: The result is undefined.

// 2. Resolved: The result is a value(fulfilled).  resolve(result)

// 3. Rejected: The result is an error object.   reject(error)

//Notes**

//resolve & reject are callbacks provided by JS



//Example1

// function getData(dataID, getNextData)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         // console.log("data", dataID);
//         // resolve("Success");
//         reject("Error");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//     });
// }


// function getData(dataID)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data", dataID);
//         resolve("Success");
//     }, 2000);
//     });
// }




//promise chaining

// console.log("Getting data 1...")
// getData(1)
// .then((res) => {
//     console.log("Getting data 2...");
//     return getData(2);
// })
// .then((res) => {
//     console.log("Getting data 3...");
//     return getData(3);
// })
// .then((res) => {
//     console.log("Getting data 4...");
//     return getData(4);
// })
// .then((res) => {
//     console.log(res);
// })



//Example2

// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("Promise is success");
//         resolve("Promise resolved successfully");
//         reject("network error");
//     });
// };

//try and catch block can be used with promises to handle errors
// let promise = getPromise();
// promise.then((result) => {
//     console.log("Promise fulfilled " ,result);
// });

// promise.catch((error) => {
//     console.log("Promise rejected", error);
// });




//Example3

// const asyncFunction1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 1");
//       resolve("Success");
//     }, 4000);
//   });
// };

// const asyncFunction2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//       resolve("Success");
//     }, 4000);
//   });
// };

// console.log("fetching data 1...");

// asyncFunction1().then((result) => {
//   console.log("fetching data 2...");
//   asyncFunction2().then((result) => {});
// });




/*-----------------------------------------------------End of Promises in JS-------------------------------------*/






/*------------------------------------------Start of Async-Await in JS-----------------------------------*/

// async funtion always returns a promise.

//syntax:

// async function myFun(){...}

// await pauses the execution of its surrounding async function until the promise is settled.

//Example1

// function api(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//         console.log("weather data");
//         resolve(200);
//         }, 2000);
//     });
// };

// async function getWeatherData(){
//     await api();
//     await api();
// }






//Example2

// function getData(dataID)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data", dataID);
//         resolve("Success");
//     }, 2000);
//     });
// };

// async function getAllData() {
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
//     console.log("Getting data 4...");
//     await getData(4);
//     console.log("Getting data 5...");
//     await getData(5);
// }








/*------------------------------------------End of Async-Await in JS-----------------------------------*/




// Advanced Javascript


// An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function.

//syntax


// standard IIFE
(function (){
    // statements
})();


// arrow function variant
(() =>{
    //statements
})();


// async IIFE
(async () =>{
    //statements
})();



//Example1
function getData(dataID)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data", dataID);
        resolve("Success");
    }, 2000);
    });
};


(async function() {
    console.log("Getting data 1...");
    await getData(1);
    console.log("Getting data 2...");
    await getData(2);
    console.log("Getting data 3...");
    await getData(3);
    console.log("Getting data 4...");
    await getData(4);
    console.log("Getting data 5...");
    await getData(5);
})();
