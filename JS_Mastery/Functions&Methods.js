
/*--------------------------------=-------function in javascript-----------------------------------------*/

// function is a block of code that performs a specific task, can be invoked or called whenever needed.


//syntax:

// function functionName(parameter1, parameter2, ...){  // function Definition
//     code to be executed
// }
// functionName(parameter1, parameter2, ...); // function call with parameter
// functionName(); // function call without parameter


// In the code we must minimize the redundancy of code.


// regular function 
// function addThreeNumber(a,b,c){
//     console.log(a+b+c);
// }
//  addThreeNumber(1,2,3); // function called with parameter



// function myFunction()
// {
//   console.log("Hello, function!");  //function defined
//   console.log("Bye, function!");
// }

// myFunction();  //function called


// function myFunction(msg, p) {   //function Definition with multiple parameters
//     console.log(msg, p); // function defined
// }

// myFunction("Hello, function!", 100); // function called with parameter


// function mySum(x, y){
//   console.log(x+y);
// }
// mySum(10, 20); // function called with parameter


// function mySum(x, y) {
//   s = x + y;
//   return s;      // return x + y; // function returns the sum of x and y
// }

// let val = mySum(100, 20);
// console.log(val); // function called with parameter



// function parameters are like local variables that can only accessible within the function, which have a block scope.



/*-----------------------------------------Arrow function-----------------------------------------*/

//=> Compact way of writing a function

//syntax:

// const functionName = (parameter1, parameter2, ...) => {
//     code to be executed
// }
// functionName(parameter1, parameter2, ...); // function call with parameter



// function sum(x, y) {
//   return x + y;
// }
// const x = 8;
// const arrowSum = (x, y) =>{
//   console.log(x + y);
// }



// function mul(x, y) {
//   return x * y;
// }
// const x = 8;
// const arrowMul = (x, y) =>{
//   console.log(x * y);
// }



// let addTwoNumber = (a,b,c=3)=>{
//     console.log(a+b+c);
// }
// addTwoNumber(1,2);
// addTwoNumber(2,2);


// const printInformation = () => {
//   console.log("My name is Niraj");
//   console.log("My age is 24");
// }
// printInformation();





//Practice QS1:-

// Create a function using the "function" Keyword that takes a string as an argument and returns the number of vowels in the string.


// function countVowels(str){
//   let count = 0;
//   for (const char of str)
//     {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//       {
//       count++;
//     }
//   }
//   return count;
// }


// const countVow = (str) => {
//   let count = 0;
//   for (const char of str)
//     {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//       {
//       count++;
//     }
//   }
//   return count;
// }



/* -----------------------------------------End of Arrow function-----------------------------------------*/






/* -----------------------------------------forEach loop in Arrays-----------------------------------------*/

//forEach => It is used in the normal calculation or to print value


// syntax:

//arr.forEach(CallBackFunction)

// CallBackFunction : Here , it is a function to exectue for each element in the array

// *A callback is a function passed as an argument to another function.
 



// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//   console.log(val);
// })


// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val);
// })

// let str = ["hello!","my","name","is","niraj kr dev"];
// str.forEach((val,idx,arr)=>{
//   console.log(val.toUpperCase(), idx, arr);
// })


/*----------------------------------- Start of Higher order function in javascript------------------------------*/ 

// Higher-order functions or Higher-order methods are the functions that either takes another functions as a parameter inside them or they return another function as their output.





// let days = ["Sun","Mon","Tues","Wed"]
// function printDays(day){
//     for(let days of day ){
//         console.log("Today is " + day);
//     }
// }
// printDays(days);


// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// const printDay = (day) => {
//     console.log(`Today is ${day}`);
// }
// for (let day of days) {
//     printDay(day);
// };


/**---------------------------------------End of Higher order function in javascript------------------------------*/


//Practice QS1:-

// For a given array of numbers, print the square of each value using the forEach loop.

// Soln1:-

//  let num = [1,2,3,4,5]

//  num.forEach(function printVal(num){
//   console.log(num*num)
//  })


// Soln2:- 

//  let num = [1,2,3,4,5];

//  num.forEach((num) => {
//   console.log(num**2)
//  })



//soln3:-

// let num = [1,2,3,4,5];

// let calcSquare = (num) => {
//   console.log(num*num); 
// }

// num.forEach(calcSquare);


/*---------------------------------------End of forEach loop in Arrays------------------------------------*/





/*---------------------------------------Some more Array Methods-----------------------------------------*/





/*---------------------------------------Start of Map method-------------------------------------------*/


// Map method is used to create a new array with the result of some operation and return it. The value its callback return are used to form a new array.

//syntax:
// arr.map(callbackFnx(value, idx, arr))


// let num = [1,2,3,4,5];
// num.map( (num) =>{
//   console.log(num*num);
// })


// let nums = [67, 68, 69, 70, 71];
// let newArr = nums.map((val) =>{
//   return val;
// })
// console.log(newArr);


// let nums = [40, 50, 60, 70, 80];
// let newArr = nums.map((val)=>{
//     return val + 10;
// })

// console.log(newArr); // [50, 60, 70, 80, 90]

/*-------------------------------------------End of Map method-----------------------------------------*/







/*---------------------------------------Start of Filter method-----------------------------------------*/

// Filter method is used to create a new array with all elements that pass the test implemented by the provided function.

//syntax:
// arr.filter(callbackFnx(value, idx, arr))
 

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// let evenArr = arr.filter((val) => {
//   return val % 2 === 0;
// })

// console.log(evenArr); // [2, 4, 6, 8, 10]


// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// let oddArr = arr.filter((val) => {
//   return val % 2 !== 0;
// })

// console.log(oddArr); // [1, 3, 5, 7, 9]

/*---------------------------------------End of Filter method-----------------------------------------*/






/*---------------------------------------Start of Reduce method-----------------------------------------*/

// Reduce method is used to perform some operations & reduces the array to a single value. It  returns that single value.

//syntax:
// arr.reduce(callbackFnx(accumulator, currentValue, index, arr), initialValue)
// initialValue is optional



// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

//  const output = arr.reduce((res, curr) => {
//    return res + curr;
//  })

//  console.log(output);


//Practice QS1:-

// From the given number of an array. Find the largest number using the reduce method.

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// let largestNum = arr.reduce((prev, curr) => {
//   return prev > curr? prev : curr;
// })

// console.log(largestNum); // 10






//Practice QS2:-
// From the given array of marks of students. Find out the marks of the student that scored 90+.

// let marks =  [67, 78, 87, 91, 92];

// let highestScore = marks.filter((result, current)=>{
//   return result > 90;
// })

// console.log(highestScore); 





//Practice QS3:-
// Take a number n as a input from user. Create an array of numbers from 1 to n. 
// Use the reduce method to calculate the sum of all  numbers in the array. 
// Use the reduce method to calculate the product of all numbers in the array.


// let n = prompt("Enter a number:");

// let arr = [];

// for (let i=1; i<=n; i++){
//   arr[i-1]= i;
// }
// console.log(arr);


// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// })
// console.log(sum);

// let product = arr.reduce((res, curr) => {
//   return res * curr;
// })
// console.log(product); 



//Practice QS3:-
// Make a function name printInformation that accepts an informations array in parameter, which prints My name is Niraj and age is 22, My name is Anish and age is 20 

// let informations = [
//         {
//             name : "Niraj", 
//             age : 24
//         }, 
//         {
//             name : "Anish", 
//             age : 20
//         }
//     ]


// function printInformation(haha){
//     for(let information of haha){
//         console.log(information.name + " age is " + information.age);
//     }
// }


//using arrow function

// let printInformation = (haha)=>{
//   for(let information of haha){
//     console.log(information.name + " age is " + information.age);
// }
// }

// printInformation(informations);


/*---------------------------------------End of Reduce method-----------------------------------------*/
