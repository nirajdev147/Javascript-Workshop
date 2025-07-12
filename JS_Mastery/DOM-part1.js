/*-----------------------------Document Object Model (DOM)-Part 1--------------------------*/


// Window Object

// The window object represents an open window in a browser. It is a browser object (not javascript's) & is automatically created by a browser.
//It is a global object with lot of properties and methods. It is the parent of all other objects in the browser.


// console.log("Hello World"); 
// window.console.log("Hello World 2");   
// window.alert("Message aya hai !!"); 
// window.confirm("Are you sure?"); 
// window.prompt("Enter your name");



//  What is DOM?

// When the webpage is loaded, the browser creates a Document Object Model (DOM) of the page. 
// The DOM is a tree-like structure that represents the HTML elements of the page as objects. Each element, attribute, and text in the HTML document is represented as a node in the DOM tree.
// The DOM allows JavaScript to access and manipulate the content, structure, and style of the webpage. 
// It provides a way to interact with the HTML elements and change their properties, add or remove elements, and respond to user events.

// console.dir(window.document);
// console.log(document.body); // body tag
// console.log(document.body.children[0]); // first child of body tag

// document.body.style.backgroundColor = "lightblue"; // change background color of body tag
// document.body.children[2].innerText = "Hello World"; 



/*-----------------------------DOM Manipulation--------------------------*/

// DOM manipulation is the process of changing the structure, content, or style of a webpage using JavaScript.
// It allows you to add, remove, or modify HTML elements and their attributes, change CSS styles, and respond to user events.


// 1. Selecting Elements
// There are several methods to select elements in the DOM. The most common ones are:

/*------------------------------Selecting Elements by Id--------------------------*/

// document.getElementById("myId") -Selects an element by its ID.


// let heading = document.getElementById("heading");
// console.dir(heading);

// let button = document.getElementById("myId");
// console.dir(button);




/*------------------------------Selecting Elements by className--------------------------*/

// document.getElementsByClassName("myClass") - Selects elements by their class name.


// let heading = document.getElementsByClassName("myClass");
// console.dir(heading); 
// console.log(heading);




/*------------------------------Selecting Elements by tagName--------------------------*/

// document.getElementsByTagName("p") - Selects elements by their tag name. 

// let para = document.getElementsByTagName("p");
// console.dir(para);




/*------------------------------Selecting Elements by querySelector--------------------------*/

// document.querySelector("myId/myClass/tag") - returns the first element

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let firstEl = document.querySelector(".myClass");
// console.dir(firstEl);




// document.querySelectorAll("myId/myClass/tag") - returns a NodeList

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);



/*------------------------------DOM Manipulation Properties--------------------------*/


// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");


// tagName - returns the name of the tag.
// innerText - returns the text content of the element and all its children.
// innerHTML - returns the plain text or HTML contents in the element.
// textContent - returns the text inside the element (including hidden elements).


/*-------------------------------------------Practice QS1:-----------------------------------*/

// Create h1 element with text "Hello ! Niraj".append from Biratnagar" to the text using JS.

// let h1 = document.querySelector("h1");
// console.dir(h1.innerText);

// h1.innerText = h1.innerText +" From Biratnagar"; // concatenate
// console.log(h1.innerText);


/*-------------------------------------------Practice QS2:-------------------------------------*/

// Create a 3 div with a common class name = "box". Access them and add some unique text to each of them using JS.


// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "This is a box 1"; // add text to first div
// divs[1].innerText = "This is a box 2"; // add text  to second div
// divs[2].innerText = "This is a box 3"; // add text to third div
// console.log(divs);


/*-----------------------------Alternative way to add text to each div using a loop-----------------------*/

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = `This is a box ${idx}`; // add text to each div
//     idx++;
// }




/*-------------------------------Read about text , comment , element in MDN docs also about childNodes, firstChild, lastChild--------------------------*/