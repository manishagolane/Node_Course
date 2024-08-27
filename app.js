var title = "Let's Learn NodeJS";

var a = 40;

var b = 50;

require("./sum.js");
// const calculateSum = require("./sum.js");
// const obj = require("./sum.js");

// obj.calculateSum(a,b);
// console.log("x from sum.js",obj.x);

const {calculateSum} = require("./sum.js");

const {calculateMultiply, calculateMinus} = require('./calculate');

const data = require('./data.json');

// console.log(JSON.stringify(data));
console.log(data);


calculateMultiply(2,5);
calculateMinus(10,2);

console.log(title);
// console.log(a+b);
calculateSum(a,b);

console.log(global); 
console.log(this);  // Empty Object
console.log(globalThis);
console.log(globalThis === global);
