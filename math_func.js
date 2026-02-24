//Built in math functions
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
let min = 1;
let max = 10;

let randomNum= Math.round(Math.random() * (max- min) + min);

console.log(randomNum);

Math.floor(4.7); // Output: 4
Math.ceil(4.2); // Output: 5
Math.round(4.5); // Output: 5
Math.max(1, 5, 3); // Output: 5
Math.min(1, 5, 3); // Output: 1
Math.sqrt(16); // Output: 4
Math.pow(2, 3); // Output: 8
Math.abs(-5); // Output: 5
Math.random(); // Output: A random number between 0 (inclusive) and 1 (exclusive)

console.log(Math.E); // Output: 2.718281828459045
console.log(Math.PI); // Output: 3.141592653589793