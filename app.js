var title = "Let's Learn NodeJS";

var a = 40;

var b = 50;

// require("./sum.js");
// const calculateSum = require("./sum.js");
// const obj = require("./sum.js");

// obj.calculateSum(a,b);
// console.log("x from sum.js",obj.x);

// const {calculateSum} = require("./sum.js");
import { x, calculateSum } from "./sum.js";

calculateSum(a,b);
console.log("x from sum.js",x);


console.log(title);
// console.log(a+b);
// calculateSum(a,b);

console.log(global); 
console.log(this);  // Empty Object
console.log(globalThis);
console.log(globalThis === global);
// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer((req, res) => { 
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end('Hello World');
// }).listen(8080);