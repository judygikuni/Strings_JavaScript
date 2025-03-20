// Question 1;

let a = "extravaganza";
let b = a.slice(-4);
console.log({b});

//Question 2;

const food = "The quick fox jumped over the lazy dog";
let c = food.slice(0,4) + "eat" + food.slice(4);
console.log({c});

//Question 3;

const story = "The quick brown fox jumps over the lazy dog";
let y = story.toLowerCase();
let the = y.split("the").length -1;
let brown = y.split("brown").length -1;
console.log({the});
console.log({brown});

//Question 4;

let string1 = "The pupils are reading in the library";
let string2 = "The child was sitting on the table before it fell";
let are =  string1.includes("are");
let sitting = string2.includes("sitting")? true:false;
console.log({are});
console.log({sitting});

//Question 5;

let upper = "wonderful";
console.log(upper.toUpperCase());

let lower1 = "amazing";
let lower2 = "UndERneath";
console.log(lower1.toLowerCase());
console.log(lower2.toLowerCase());

let title = "A wonderful world"
   .split(" ")
   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join(" ");
console.log({title});





