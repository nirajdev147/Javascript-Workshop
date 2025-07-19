/*----------------------------------------API(Application Programming Interface)----------------------------------*/

// Fetch API provides an interface for fetching (sending/receving) resources.

// It uses Request and Response Objects.

// The fetch method is used to fetch a resource (data).

//syntax

// let promise = fetch (url, [options])

// AJAX is Asynchronous JS and XML
// AJAJ is Asynchronous JS and JSON
// JSON is JavaScript Object Notation

// json() method : It resolves a second promise that resolves with the result of parsing the response body text as  JSON. (Input is JSON and Output is JS Object)

// const url = "https://catfact.ninja/fact";

// const factPara = document.querySelector("#fact");
// const lengthPara = document.querySelector("#length");
// const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     console.log("Getting data...");
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     // console.log(data);
//     // console.log(data.fact);
//     // console.log(data.length);
//     factPara.innerText = data.fact;
//     lengthPara.innerText = data.length;

// }

//By promise chaining
// function getFacts(){
//     fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data.fact;
//         lengthPara.innerText = data.length;

//     })
// };

// btn.addEventListener("click", getFacts);

/*--------------------------------------------Requests and Response-----------------------------------------------*/

// HTTP Verbs
// HTTP Verbs (also called HTTP Methods) define the type of action to perform on a resource.

// Such as:-
// GET (retrieve),
// POST (create),
// PUT (update), and
// DELETE (remove).

// Response Status Code
// Response Status Code is a number returned by the server to indicate the result of the HTTP request.

// Example:-
// 200 for success,
// 404 for not found, and
// 500 for server error).

// *HTTP Response headers also contain details about the responses, such as content type, HTTP status code etc.











/*------------------------------------------HOMEWORK TASK for Sending POST Request-------------------------------------------------------*/


// Accessing btn
const btn1 = document.querySelector("#btn1");

// Sending POST Request
const postUrl = "https://jsonplaceholder.typicode.com/posts";


// Create or select display element
const postResult =
  document.querySelector("#postResult") ||
  (() => {
    const el = document.createElement("pre");
    el.id = "postResult";
    document.body.appendChild(el);
    return el;
  })();


// Arrow function to send POST request and display result
const postData = async () => {
  const data = {
    title: "cat fact",
    body: "Cats sleep 70% of their lives.",
    userId: 1,
  };
  const response = await fetch(postUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  postResult.innerText = JSON.stringify(await response.json(), null, 2);
};

// display data onClick
btn1.addEventListener("click", postData);




