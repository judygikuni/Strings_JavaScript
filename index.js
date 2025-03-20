// Question 1;

let a = "extravaganza";
let b = a.slice(-4);
console.log({b});

//Question 2;

let word = "The quick fox jumped over the lazy dog";
let c = word.slice(0,4) + "eat" + word.slice(4);
console.log({c});

//Question 3;

let x = "The quick brown fox jumps over the lazy dog";
let y = x.toLowerCase();
let the = y.split("the").length -1;
let brown = y.split("brown").length -1;
console.log({the});
console.log({brown});

//Question 4;

let words = "The pupils are reading in the library";
let string = "The child was sitting on the table before it fell";
let are =  words.includes("are");
let sitting = string.includes("sitting")? true:false;
console.log({are});
console.log({sitting});

//Question 5;

let upper = "wonderful";
console.log(upper.toUpperCase());

let lower1 = "amazing";
let lower2 = "UndERneath";
console.log(lower1.toLowerCase());
console.log(lower2.toLowerCase());





