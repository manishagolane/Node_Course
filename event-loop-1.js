const fs = require("fs");
const a = 100;

setImmediate(() => console.log("SetImmediate"));

fs.readFile("./file.txt", "utf8", () =>{
    console.log("File Reading")
});

setTimeout(() =>{
    console.log("Timer expired"), 0
});

function print(){
    console.log("a:",a);
}

print();
console.log("Last lineof the file");