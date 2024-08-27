// Modules protects their variables and functions from leaking
// function calculateSum(a, b){
//     const sum =  a + b;
//     console.log(sum);
// }
export var x = "Hello World";


export function calculateSum(a, b){
    const sum =  a + b;
    console.log(sum);
}


// module.exports = calculateSum;
// module.exports =  {
//     x,
//     calculateSum
// }