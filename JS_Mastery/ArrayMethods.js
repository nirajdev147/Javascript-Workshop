// // property(length), array methods (slice,splice,split)

// let nums = [0,1,2,3,4,5,6,7,8];
// console.log(nums.length);

// methods -- nums.pop(), nums.length, nums.push


/*-------------------------------------- start of slice() --------------------------------------*/

//slice: returns a piece of the array
//slice(startidx, endidx)



// let slicedNumbers = nums.slice(2,7);
// console.log(slicedNumbers);

// let days = ["Sun","Mon","Tue","Wed","Thur"];
// console.log(days);
// let slicedDays = days.slice(1,4);
// console.log(slicedDays);


// let evenNums = [2,4,6,8,10,12];
// console.log(evenNums);
// let slicedEvenNums = evenNums.slice(2,5);
// console.log(slicedEvenNums);



/*------------------------------------End of slice()---------------------------------*/








/*-------------------------------------- start of splice() --------------------------------------*/

//splice: change original array(add, remove, replace)
//splice(startidx, delCount, newEl1..)



// let data = [1,2,3,4,5,6];
// data.splice(1,3,"hello","bye","world");
// console.log(data);

// let data = [1,2,3,4,5,6];
// data.splice(2,0,102);
// console.log(data);
// console.log(data.splice(4));
// console.log(data);

// data.splice(1,1,"Niraj");
// console.log(data);

// let characters = ['m','a','n','i','s','h'];
// characters.splice(0,characters.length,13,1,14,9,19,8);
// console.log(characters);

/*------------------------------------End of splice()---------------------------------*/



//practice Qs1

// create an array to store companies --> ["Bloomberg","Microsoft","Google","Uber","IBM", "Netflix"]

// Remove the first company from the array 
// Remove Uber and add Ola in its place
// Add Amazon at the end of the array

// let companies = ["Bloomberg","Microsoft","Google","Uber","IBM", "Netflix"];
// console.log(companies.shift());
// console.log(companies);

// console.log(companies.splice(3,1,"Ola"));
// console.log(companies);

// console.log(companies.push("Amazon"));
// console.log(companies);



/*-------------------------------------- start of split() --------------------------------------*/ 

// split: convert string to array

// let message = "i am from biratnagar";
// let splittedMessage = message.split(" ");
// console.log(splittedMessage);
// output --> [ 'i', 'am', 'from', 'biratnagar' ]



// let text = "i,am,from,nepal";
// let splittedText = text.split(",");
// console.log(splittedText);
// output --> ["i","am","from","nepal"]

/*------------------------------------End of split()---------------------------------*/
