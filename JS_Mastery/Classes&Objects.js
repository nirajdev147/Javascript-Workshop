/*----------------------------------Classes & Objects-----------------------------------*/


// A javascript object is an entity having state and behavior(properties and methods).
// A javascript have a special property called prototype.
// We can set prototype using __proto__ property.

//Prototypes in JS


/* If  object and prototype have same method then object's method will be used */


//Syntax to create an object

// const student = {
//     name : "Devni",
//     marks : 85,
//     printMarks : function(){
//         console.log("Hello, " + this.name);     
//     }
// };



// const employee = {
//     calTax : function(){
//         console.log("tax is 10%");
//     }       
// };

// const niraj = {
//     salary : 50000,
//     calTax : function(){
//         console.log("tax is 20%");
//     },
// }


// niraj.__proto__ = employee;





//Classes in JS

// A class program-code template for creating objects.
// Those objects will have some states(variables) and some behaviors(functions) inside it.

// class MyClass {
//     constructor(){}
//     myMethod(){}
// }

// let myObj = new MyClass();


// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("A new Toyota car is created"); 
//         this.brand = brand ;//when the object is created, it automatically calls the constructor without explicitly calling it.
//         this.mileage = mileage;
//     }
//     startEngine(){
//         console.log("Engine started");
//     }
//     stopEngine(){
//         console.log("Engine stopped");
//     }
//     drive(){
//         console.log("Car is driving");
//     }
//     // Defining a variable inside a class
//    setBrand(brand){
//         this.brand = brand;
//     }       
// }

// let yourCar = new ToyotaCar("Fortuner" , 80);
// console.log(yourCar);
// yourCar.startEngine();
// yourCar.stopEngine();
// yourCar.drive();
// yourCar.setBrand("Toyota");

// let myCar = new ToyotaCar("Corolla", 60);
// console.log(myCar);
// myCar.setBrand();


/*-----------------------------------Inheritance in JS-----------------------------------*/

// Inheritance  is passing down properties and methods from parent class to child class.

// syntax:

// class Parent{

// }

// class Child extends Parent{

// }


//If the child class has same method as parent class then child class's method will be used.


//Example1

// class Animal{
//     constructor(){
//         this.type = "Animal";
//     }
//     eat(){
//         console.log("Animal is eating");
//     }
//     sleep(){
//         console.log("Animal is sleeping");
//     }
//     bark(){
//         console.log("Animal is barking");
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log("Dog is barking");
//     }
// }

// class Cat extends Animal{
//     bark(){
//         console.log("Cat is meowing");
//     }
// }

// let bulletObj = new Dog();








//Example2
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         console.log("Eating food");
//     }

//     sleep(){
//         console.log("Sleeping");
//     }

//     work(){
//         console.log("do nothing");
//     }

// }

// class Employee extends Person{
//     work(){
//         console.log("Working in office");
//     }

//     attendMeeting(){
//         console.log("Attending meeting");
//     }
// }

// class Student extends Person{
//     constructor(branch){
//         this.branch = branch;
//     }
//     work(){
//         console.log("Studying in college");
//     }

//     attendClass(){
//         console.log("Attending class");
//     }
// }

// let empObj = new Employee("Niraj", 25);
// let stuObj = new Student("Devni", 20);




/*------------------------------------Super Keyword in JS-----------------------------------*/


// The super keyword is used to call the constructor of its parent class to access its properties and methods.

//syntax:

//super(args)   // to call parent class constructor
//super.parentMethod(args) // to call parent class method


//Example1

// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("Eating food");
//     }

//     sleep(){
//         console.log("Sleeping");
//     }

//     work(){
//         console.log("do nothing");
//     }

// }

// class Employee extends Person{
//     constructor(name){
//         super(name);                     // calling parent class constructor
//     }
//     work(){
//         super.eat();
//         console.log("Working in office");
//     }
// }


// let empObj = new Employee("Niraj");





/*-----------------------------------Practice QS1-------------------------------------------*/

//You are creating website for your college. Create a class User with 2 properties, name and email .It also has a method called viewData() that allows user to view website data.

// let DATA = "confidential";

// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data:", DATA);
//     }
// }

// class Student extends User{
//     constructor(name, email){
//         super(name, email); // calling parent class constructor
//     }

//     work(){
//         super.viewData(); // calling parent class method
//         console.log("Studying in college");
//     }
// }

// let stuObj = new Student("niraj", "nira@gmail.com")




/*-----------------------------------Practice QS2-------------------------------------------*/

// Create a class called BankAccount with properties accountNumber, accountHolderName, and balance. It should have methods to deposit and withdraw money. Create a subclass SavingsAccount that adds an interestRate property and a method to calculate interest on the balance.

// class BankAccount{
//     constructor(accountNumber, accountHolderName, balance){
//         this.accountNumber = accountNumber;
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance += amount;
//         console.log(`Deposited ${amount}. New Balance is: ${this.balance}`);
//     }

//     withdraw(amount){
//         if(amount > this.balance){
//             console.log("Balance exceeds,Please enter a valid amount to withdraw");
//         }else{
//             this.balance =- amount;
//             console.log(`Withdrawn amount ${amount}. New Bank Balance is: ${this.balance}`)
//         }
//     }
// }


// class SavingsAccount extends BankAccount{
//     constructor(accountNumber, accountHolderName, balance, interestRate = 0.05){
//         super(accountNumber, accountHolderName, balance);
//         this.interestRate = interestRate;
//     }
//     calculateInterest(){
//         const interest = this.balance * this.interestRate;
//         console.log(`Interest on balance ${this.balance} at rate ${this.interestRate} is: ${interest}`);
//         return interest;
//     }
    
// }

// let myAccount = new SavingsAccount("123456", "Niraj", 10000);


/*------------------------------------Practice QS3-------------------------------------------*/

//Create a new class called Admin which inherits from User. Add a mew method called editData() to admin that allows it to edit the website data.

// let DATA = "secret data";

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data:", DATA);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email); // calling parent class constructor
//     }
//     editData(){
//         DATA = "add some new data";
//     }
// }

// let adminObj = new Admin("admin" , "admin@mail.com");






/*---------------------------------------Error handling in JS------------------------------------*/


// Error handling is a way to handle errors in a program without crashing it.

//syntax: try-catch blocks

// try{

//     //normal code

// }catch(error){      //error is a error object that contains information about the error

//    // ..handling error
// }


//Example1


// let a = 10;
// let b = 20;

// console.log("Before try-catch block");
// console.log("a:", a);
// console.log("b:", b);
// console.log("Sum:", a + b);
// console.log("Sum:", a + b);
// try{
//     console.log("Sum:", a + c);
// }catch(error){
//     console.log(error);
// }
// console.log("After try-catch block");
// console.log("Sum:", a + b);
// console.log("Sum:", a + b);
// console.log("Sum:", a + b);
// console.log("Sum:", a + b);
