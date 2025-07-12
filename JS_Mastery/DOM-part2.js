/*-----------------------------Document Object Model (DOM)-Part 2--------------------------*/

/*------------------------------DOM Manipulation Properties--------------------------*/

/*------------------------------ Attributes--------------------------*/


// getAttribute(attr) - to get the attribute value

// setAttribute(attr, value) - to set the attribute value th


// Style
// node.style


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// div.style.backgroundColor = "purple";
// div.style.fontSize = "30px";
// div.style.color = "grey";
// div.style.visibility = "hidden"; 
// div.innerText = "Keep Quiet!";




/*----------------------------------------Insert Elements-----------------------------------------*/

// let el = document.createElement("div");

/*---------------------------------- node.append(el);  // to add the element at the end of the node(inside)-------===--*/




// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!"
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hello ! Niraj</i>";

// document.querySelector("body").append(newHeading); 

// let para = document.querySelector("p");
// para.remove(); // removes the paragraph element

//for multiple para 
// let para = document.querySelectorAll("p");
// para.forEach(para => {
//     para.remove();
// })

/*------------------------------- node.prepend(el); // to add the element at the beginning of the node(inside)-----------------*/


// let div = document.querySelector("div");
// div.prepend(newBtn);



/*---------------------------------- node.before(el); // to add the element before the node(outside)------------------*/

// let div = document.querySelector("div");
// div.before(newBtn);



/*----------------------------------- node.after(el); // to add the element after the node(outside)-------------------*/

// let div = document.querySelector("div");
// div.after(newBtn);


/*---------------------------------- node.paragraph(el); // add after the paragraph------------------*/

// let p = document.querySelector("p");
// p.after(newBtn);




/*-----------------------------------------Delete Element------------------------------------------*/

//  node.remove(); // removes the node





// let newHeading = document.createElement("h1"); 
// newHeading.innerText = "k xa" // creates a new heading element
// document.querySelector("body").prepend(newHeading); // adds the new heading at the beginning of the body

// let para = document.querySelector("p");
// para.remove(); // removes the paragraph element

// newHeading.remove(); // removes the heading element



/*---------------------------------------------Pratice QS1--------------------------------------------------*/

// Create a new button with a text click Me! and set the background color to red and text color to white using JS


// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend(newBtn); // adds the new heading at the beginning of the body





/*---------------------------------------------Pratice QS2--------------------------------------------------*/

// Create a <p> tag in a html and give it a class name and some style . And now Create a new class in a css and try to append this class to the <p> element. Did you see any changes? Solve this problem using classList property.


// let para = document.querySelector("p");
// para.classList.add("newContent"); // adds the new class to the paragraph element
// para.classList.remove("newContent"); // removes the old class from the paragraph element