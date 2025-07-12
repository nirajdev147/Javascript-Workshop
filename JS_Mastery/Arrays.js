/*-------------------------------------------Array-------------------------------------------*/
// Arrays are the collection of items

// let marks = [ 84, 87, 86, 89, 90];
// console.log("marks: " + marks);
// console.log(marks.length);
// console.log(typeof marks);


// let items = ["pen", "mobile", "cycle", "bike", "car"];

// for ( let idx = 0; idx < items.length; idx++){
//     console.log(items[idx]);
// }

// for ( let i = 0; i < items.length; i++){
//     console.log(items[i]);
// }


// for (let item of items){
//     console.log(item);
// }


//practice Qs1

//For a given array with marks of students -> [87 , 56, 67 ,65, 66, 56]. Find the average marks of the entire class.

// let marks = [87 , 56, 67 ,65, 66, 56];

// let sum = 0;

// for ( let val of marks){
//     sum += val;
//     console.log(sum);
// }

// let average = sum / marks.length;
// console.log(`Average marks of the class is = ${average}`);



//practice Qs2

// For a given array with prices of 5 itmes -> [ 54, 55, 56, 67, 66]. All the items have an offer of 10% oFF on them. Change the array to store the final price after applying offer.


// let items =  [ 54, 55, 56, 67, 66];
// let idx = 0;

// for (let val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after index = ${items[idx]}`);
// }

// for ( let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(items[i]);
// }


/*----------------------------------------Array Methods----------------------------------------*/


/*---------------------------- push(): add to end-----------------------------------*/
// let juttas = ["goldstar","addidas","nike"]
// juttas.push("calibar", "puma" ) 
// console.log(juttas);

/*--------------------------- pop(): delete from end and return----------------------*/

// let juttas = ["goldstar","addidas","nike"]
// console.log(juttas);
// let deletedShoes = juttas.pop();
// console.log(juttas);
// console.log(deletedShoes);

/*--------------------------- unshift(): add to start and return----------------------*/

// juttas.unshift("calibar");
// console.log(juttas);

/*-----------------------------shift(): remove first--------------------------------*/

// let val = juttas.shift();
// console.log("Deleted :" , val );


// juttas[0] = "goldstar;"
// juttas[1] = "Umbro"
// console.log(juttas[0]);
// console.log(juttas[1]);



/*---------------------------toString(): converts array to string-------------------*/

// let juttas = ["goldstar","addidas","nike"];
// console.log(juttas);
// console.log(juttas.toString());

// let marks = [85, 64, 52, 44, 30]
// console.log(marks);
// console.log(marks.toString());



/*---------------------concat(): joins multiple arrays & returns result----------------------*/

// let castofGot = ["emilia clarke", "jhon snow", "Arya Stark"];
// let castofDragon = ["Balerion", "Vhagar", "Caraxes", "Drogon"];
// let castofDragon2 = ["Balerion", "Vhagar", "Caraxes", "Drogon", "Syrax"];
// let allCast = castofGot.concat(castofDragon.concat(castofDragon2));
//  console.log(allCast);




let country1 = "Nepal";
let country2 = "India";
let country3 = "Pakistan";

let countrys = [{
    name : "Nepal"
}, {
    name : "India"
},{
    name : "Pakistan"
}]



let friend = "Aashish";
let friend2 = "Pranjal";
let friend3 = ["Aashish","Pranjal"];

let name = "Niraj Dev";
let address = "Biratnagar"; 
let age = 24;
let college = "Purbanchal College";

let productName = "apple";
let productPrice = 300 ;
let productQty = 2;

/*------------------------------------Start of Object-----------------------------------*/

let myInformation = {
    name : "Niraj Dev", 
    address : ["Biratnagar","Morang"], 
    age : 24, 
    college : "Purbanchal College"
}


let myProduct = {
    productName : "apple", 
    productPrice : 300, 
    productQty : 2
}

/*-----------------------------------Start of Case (Casing)------------------------------------------*/

// Case (Casing) is the way of writing the variable names in different styles.

/*----------------------------------------- Start of PascalCase (JAVA)-----------------------------------*/


// iloveprogramming --> PascalCase --> ILoveProgramming


// iamfromnepal --> PascalCase --> IAmFromNepal


/*----------------------------------------- End of PascalCase (JAVA)-----------------------------------*/






/*----------------------------------------- Start of camelCase (Javascript)-----------------------------------*/


// iloveprogramming --> camelCase --> iLoveProgramming

// iamfromnepal --> camelCase ---> iAmFromNepal



/*----------------------------------------- End of camelCase (Javascript)-----------------------------------*/






/*----------------------------------------- Start of kebab-case (VUE)-----------------------------------*/


// iloveprogramming --> kebab-case --> i-love-programming

// iamfromnepal --> kebab-case --> i-am-from-nepal



/*----------------------------------------- End of kebab-case (VUE)-----------------------------------*/






/*----------------------------------------- Start of snake_case (PYTHON)-----------------------------------*/



// iloveprogramming --> i_love_programming

// iamfromnepal -->- i_am_from_nepal



/*----------------------------------------- End of snake_case (PYTHON)-----------------------------------*/





/*-------------------------------End of Case (Casing)-----------------------------------*/