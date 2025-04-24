/*--------------------------Events in JavaScript--------------------------*/

// The change in the state of an object is called an event.
// Events are fired to notify the code of "interesting" changes that may affect code execution.


// Mouse events (click, double click etc.)
// Keyboard events (keydown, keyup, keydown)
// Form events (submit etc.)
// Print event & many more.

/*----------------------------------Event Handling -----------------------------------------------*/

// Event handling is the process of responding to events triggered by the user or the browser.


//syntax for event handling in JavaScript:

// node.event = () => {
    //handle the event here
//  }


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("Button 1 clicked");
//     let a = 10;
//     a++;
//     console.log(a);
// };
// btn1.onclick = () => {
//     console.log("Button 2 clicked");
// };   //It overwrite the previous event handler.


// Always remember JS handling has the highest priority over HTML handling.


// let box = document.querySelector("div");
// box.onmouseover = () => {
//     console.log("Mouse is over the box");
// }



/*----------------------------------Event Object -----------------------------------------------*/

// The event object is a built-in object that contains information about the event that occurred. 
// It is passed as an argument to the event handler function.
// It is a special object that has details about the event.
// All event handlers have access to the event object's properties and methods.


// node.event = (event) => {
    //handle the event here
//  }


// e.target: It returns the element that triggered the event.


// e.type: It returns the type of event that occurred (e.g., "click", "keydown").


// e.clientX and e.clientY: These properties return the x and y coordinates of the mouse pointer relative to the viewport when the event occurred.


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX, e.clientY);
// };


// let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX, evt.clientY);
// }





/*----------------------------------Event listeners-----------------------------------------------*/

// Event listeners are functions that are executed when a specific event occurs on a specified element.

// syntax for event listeners:

// node.addEventListener(event, callback);

// node.removeEventListener(event, callback);

//Note*: The callback function must be the same function reference that was used when adding the event listener.




// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (e) => {
//     console.log("Button 1 clicked-handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("Button 1 clicked-handler2");
// });

// btn1.addEventListener("click", () => {
//     console.log("Button 1 clicked-handler3");
// });


// btn1.removeEventListener("click", () => {    
//     console.log("Button 1 clicked-handler3");
// });   //Both are different function, but works as same.

// const handler4 = () => {
//     console.log("Button 1 clicked-handler4");
// };

// btn1.addEventListener("click", handler4);
// btn1.removeEventListener("click", handler4); //This will remove the event listener.





//Practice QS1:-

// Create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again.

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";


// modeBtn.addEventListener("click", () =>{
//     if (currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
        
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
      
//     }
//     console.log(currMode);
// })


// modeBtn.addEventListener("click", () =>{
//     if (currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// })