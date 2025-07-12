
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
// let n = 10;
// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum =" ,sum);
// console.log("loop has ended");

// output
// 0 + 1 = 1 , sum = 1 
// 1 + 2 = 3 , sum = 3
// 3 + 3 = 6 , sum = 6
// 6 + 4 = 10 , sum = 10
// 10 + 5 = 15 , sum = 15
// 15 + 6 = 21 , sum = 21
// 21 + 7 = 28 , sum = 28
// 28 + 8 = 36 , sum = 36
// 36 + 9 = 45 , sum = 45
// 45 + 10 = 55 , sum = 55


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
//print all the odd numbers from 0 to 100

// for (let num = 0; num <= 100; num++){
//     if (num % 2 !== 0){
//         console.log(num);
//     }
// }

//practice Qs3
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

// console.log("the cost of " + obj.item , " is " , obj.price , "rupees");

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
//  newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);


//lowercase
// let str = "HELLO WORLD";
// newStr = str.toLowerCase();
// console.log(newStr);
// console.log(str.length); 

//trim whitespace
// let str = "            Hacker's Delight              ";
// console.log(str.trim());





/*--------------------------------string Slice--------------------------------*/

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
// console.log(str); //output--->Dhiraj
// console.log(str.charAt(0)); //output---->D
 


// /*-------------------------------------------End of Strings----------------------------------------*/


//practice Qs4: 


// Promt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.


// let fullName = prompt("Enter your full name: ");
// let userName = "@" + fullName + fullName.length;
// console.log(userName); 


// output-->@NirajDev8



