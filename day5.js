// // // let name = "Niraj Dev"
// // // let age = 22 
// // // let address = "Biratnagar"

// // let me = Object.freeze({
// //     name : "Niraj Dev", 
// //     age : 22, 
// //     address : "Biratnagar"
// // })


// // // console.log(me.age)
// // // console.log(me.address)
// // // console.log(me["age"])
// // // console.log(me["address"])

// // // me.college = "Purbanchal University"
// // // me.haha = "hehehehe"
// // console.log(Object.keys(me))
// // console.log(Object.values(me))

// let myInfo = {
//     name : "Niraj Dev", 
//     age : 22, 
//     address : "Biratnagar"
// }
// // let age = myInfo.age
// // let address = myInfo.address
// // let name = myInfo.name

// // destructure 
// // let {name,age} = myInfo

// // console.log(age,name)



/* ----------------------------------------conditional statements----------------------------------- */
// let isRaining = true 

// // if(isRaining){
// //     console.log("Carry Umbrella")
// // }else{
// //     console.log("Dont carry umbrella")
// // }

// // ternary operator condition ? "if true" : "if false"
// In shorthand a?: b : c


// let isRaining = true;
// isRaining ? console.log("Carry Umbrella") : console.log("Dont carry umbrella");

// let age = 17;
// age >= 18? console.log("You are adult") : console.log("You are not adult");


// // short-circuit condition && "if left ko condition true vayo vane "
// // isRaining && console.log("Carry Umbrella")
// // age > 21, You can vote, else You cannot vote
// let age = 21
// if(age == 21){
//     console.log("You can vote")
// }else{
//     console.log("You cannot vote")
// }

// let temperature = 25
// if(temperature > 30){
//     console.log("Dherae garmi xa")
// }else if(temperature > 20){
//     console.log("Normal thik thak xa")
// }else{
//     console.log("Nikai jado xa bahira!!")
// }


// let myInfo = {
//     name : "Niraj", 
//     age : "22", 
//     address : "Biratnagar"
// }

// if(myInfo.age === 22 || myInfo.address == "Biratnagar" && myInfo.name == "Niraj" ){
//     console.log("You can vote in Biratnagar")
// }else{
//     console.log("You cannot vote")
// }

// myInfo.age === 22 || myInfo.address == "Biratnagar" || myInfo.name == "Niraj" ? console.log("You can vote in Biratnagar") : console.log("You cannot vote")

// myInfo.age === 22 && myInfo.address == "Biratnagar" && console.log("You can vote in Biratnagar") 


// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color = "black";
// } else if (mode === "blue"){
//     color = "blue";
// } else if (mode === "red"){
//     color = "red";
// } else{
//     color = "white";
// }

// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
// }

// let num = 10;
// if ( num%2 === 0){
//     console.log( "Even Number");
// }else{
//     console.log("Odd Number");
// }

//practice Qs1
//Get user to input a number using the prompt("Enter a number:") and check whether the number is multiple of 5 or not.
// let num = prompt("Enter a number:");
// if (num % 5 === 0){
//     console.log( "Number is divisible by 5");
// } else {
//     console.log("Number is not divisible by 5");
// }
    

//practice Qs2
//Write a code which can give the grades to students based on the marks they scored.
// [90-100] = A;
// [70-89]= B;
// [60-69]= C;
// [50-59]= D;
// [0-49]= F;


// let marks = prompt ("Enter your marks:");

// if (marks >= 90 && marks <= 100){
//     console.log("Grade: A");
// } else if (marks >= 70 && marks <= 89){
//     console.log("Grade: B");
// } else if (marks >= 60 && marks <= 69){
//     console.log("Grade: C");
// } else if (marks >= 50 && marks <= 59){
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }