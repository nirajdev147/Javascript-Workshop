
/*------------------------------------loop in javascript----------------------------------------*/

//Loops are used to execute the code again and again until the condition is false.



// // for loop, while, do while, for of, .....

/*------------------------------------Start of for loop----------------------------------------*/
// for (let i = 1; i <= 5; i++) 
  // i=1 
  // i<=5 stop iteration
  // i++ update iteration

//first it will be execute one time and then it will update iteration and then it will check the stop iteration whether it is true or false . 
// if it is true then it will execute the code inside the loop and then it will update the iteration and check the stop iteration again.
// if it is false then it will execute the code inside the loop and then it will stop the loop.


// for (let count = 1; count <= 5; count++){
//     console.log("Hello World");
// }  


// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum =" ,sum);

// output
// 0 + 1 = 1 , sum = 1 
// 1 + 2 = 3 , sum = 3
// 3 + 3 = 6 , sum = 6
// 6 + 4 = 10 , sum = 10
// 10 + 5 = 15 , sum = 15


/*-------------------------------------------End of for loop----------------------------------------*



/*-------------------------------------------Start of while loop----------------------------------------*/
// syntax:
// while(condition){
//      code to be executed
// }

// let i = 1;
//  while (i<=5){
//     console.log("hello world!");
//     i++;
//  }

/*-------------------------------------------End of while loop----------------------------------------*/


/*-------------------------------------------Start of do while loop----------------------------------------*/
// syntax:
// do{
//     code to be executed
// }while(condition);


// let i = 1 ;
// do{
//     console.log("i =", i);
//     i++;
// }while(i<=5);


/*-------------------------------------------End of do-while loop----------------------------------------*/







/*-------------------------------------------Start of for-of loop----------------------------------------*/

// for-of loop is used to iterate over iterable objects like arrays, strings, etc.

// syntax:
// for(let val of strVar){
//     code to be executed 
// }


// let days = ["Sun","Mon","Tues","Wed", "Thurs","Fri","Sat"]
// for(let day of days){
//     console.log(day);
// }

// let str = "Programming";
// let size = 0;
// for(let val of str){
//     console.log(val);
//     size++;
// }

// console.log("size =", size);

// let datas = [
//     {
//         name : "Nepal", 
//         region : "Asia"
//     },
//     {
//         name : "Australia", 
//         region : "Australia"
//     }
// ]

// for(let data of datas ){
//     console.log(data.region);
// }

// let names = ["Niraj","Anish","Ish"]
// for(let name of names){
//     console.log("My name is " + name);
//     console.log(`My name is ${name}`);
// }

// let informations = [
//     {
//         name : "Niraj", 
//         age : 22
//     }, 
//     {
//         name : "Anish", 
//         age : 20
//     }
// ]
// for(let information of informations){
//     console.log(information.name + " age is " + information.age);
// }


/*-------------------------------------------End of for-of loop----------------------------------------*/

/*-------------------------------------------Start of for-in loop----------------------------------------*/

// for-in loop is used to iterate over the properties of an object.
// syntax:
// for(let key in objvar){
//     code to be executed
// }

// let student ={
//     name : "Niraj",
//     age : 24,
//     address : "Biratnagar",
//     phone : "9812345678"
// }

// for (let key in student){
//     console.log("key=", key, "value=", student[key]);
// }


//practice Qs1
//print all the even numbers from 0 to 100

// for (let num = 0; num <= 100; num++){
//     if (num % 2 === 0){
//         console.log(num);
//     }
// }

//practice Qs2
//create a game where you start with any random given number. Ask the user to keep guessing the  game number until the user enters the correct value.

// let gameNum = 7;
// let userGuess = prompt("Enter a random number:");

// while (userGuess != gameNum){
//     userGuess = prompt("You entered the wrong random number. Please! Guess again:");
// }
// console.log("Congratulations! You guessed the correct number.");

/*-------------------------------------------End of for-in loop----------------------------------------*/





/*-------------------------------------------Start of Strings----------------------------------------*/

// Strings are sequences of characters used to represent text.

// let str = "Hello";
// console.log(str[4]);


// Template literals in JavaScript
// A way to have embedded expressions in strings
// Template literals are enclosed by backticks (``) instead of single or double quotes.
// `this is template literal`

// String Interpolation

// To create strings by doing subsitution of placeholders
// `string text ${expression} string text`

// let specialString = `this is template string`;
// console.log(typeof specialString); 

// let obj ={
//   item : "pen",
//   price : 10
// }

// console.log("the cose of " + obj.item , " is " , obj.price , "rupees");

// let output = `the cost of ${obj.item} is ${obj.price}`;
// console.log(output);

// console.log("hello \n  world")  // \n  -----> next line escape character
// console.log("oi \t  dev"); // \t -----> tab space escape character

// let str = "hello \n world";
// console.log(str.length); // length of string

// String Methods in javaScript -->These are built-in functions to manipulate a string
// Strings are immutable in javaScript(no change)

//uppercase
// let str = "hello world";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);


//lowercase
// let str = "HELLO WORLD";
// str = str.toLowerCase();
// console.log(str);

//trim whitespace
// let str = "            Hacker's Delight              ";
// console.log(str.trim());


//string slice
//syntax: 
//str.slice(start, end?)

// let str = "Niraj";
// console.log(str.slice(0, 3)); 

/*--------------------------------string concatenation--------------------------------*/
//syntax:
//str1.concat(str2) --> joins str2 with str1

// let str1 = "Niraj";
// let str2 = "Dev";

// let result1 = "Hello! I am " + str1 + str2;
// console.log(result1); // Hello! I am NirajDev

// let result2 = str1.concat(str2);
// console.log(result2); // NirajDev


/*-----------------------------------------string replace---------------------------------*/
//syntax:
//str.replace(oldValue, newValue)

// let str = "Niraj";
// console.log(str.replace("N", "Dh"));

// let str = "Nirajajaj";
// console.log(str.replaceAll("aj", "ku"))


/*-----------------------------------------string charAt---------------------------------*/
//syntax:
//str.charAt(index)

// let str = "Niraj";
// str = str.replace("N", "Dh");
// console.log(str.charAt(0)); // N
// console.log(str); // r
// /*-------------------------------------------End of Strings----------------------------------------*/


//practice Qs1: 
// Promt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.


// let fullName = prompt("Enter your full name: ");
// let userName = "@" + fullName + fullName.length;
// console.log(userName); // 






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
//   return s;
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


/*--------------------------------Start of Map method-----------------------------------------*/

// Map method is used to create a new array with the result of some operation and return it. The value its callback return are used to form a new array

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

/*---------------------------------------End of Map method-----------------------------------------*/

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



// let printInformation = (haha)=>{
//   for(let information of haha){
//     console.log(information.name + " age is " + information.age);
// }
// }

//printInformation(informations);


