
//************************ */
//  Synchrounous 
// ***********************/
// var a = 3487834;
// var b = 124234;

// function multiply(a,b){
//     const res = a * b;
//     return res;
// }

// var c = multiply(a,b);


//************************ */
//  Asynchrounous 
// ***********************/

https.get("https://api.something.com", (res) =>{
    console.log("data:" + res);
});

fs.readFile("./dummy.txt", "utf8", (data) =>{
    console.log("File data",data);
});


setTimeout(() =>{
    console.log("let's wait for 10 seconds");
}, 1000);