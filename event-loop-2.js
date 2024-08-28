const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise get executed").then(console.log);

fs.readFile("./file.txt", "utf8", () =>{
    console.log("File Reading")
});

setTimeout(() =>{
    console.log("Timer expired"), 0
});

process.nextTick(() => console.log("process.nextTick"));

function print(){
    console.log("a:",a);
}

print();
console.log("Last lineof the file");

// 