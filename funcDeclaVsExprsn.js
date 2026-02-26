//function declaration
function sayHi(){
    console.log('hi!');
}

sayHi();
//function expression
let sayHello = function(){
    console.log('hello!');
}

sayHello();

//anonymous function
let sayBye = function(){
    console.log('bye!');
}
sayBye();

//named function expression
let greeting = function hi(){
    console.log('Yo!');
}
greeting();

//arrow function
let hello = () => {
    console.log('Hello!');
}
hello();

//arrow function with parameters
let greet = (name) => {
    console.log(`Hello, ${name}!`);
}
greet('John');

// function arguments
//limited number of arguments
function multiply(a, b){
    console.log(arguments);
    return a * b;
}

console.log(multiply(2, 3, 4));// 6

// any number of arguments can be passed
function multiplyy (){ // num1 and num2 are parameters
    let product = 1; 
    for (const num of arguments) // arguments is a special object that holds all the arguments passed to the function
        product *= num;
    return product;
}
console.log(multiplyy(2, 3, 4));// 24

//rest parameters
//any number of arguments can be passed
function sum(...args){ // args is an array
    let total = 0; 
    for (let arg of args){ // iterate over the array
        total += arg; // add each element to the total
    }
    return total; 
}
console.log(sum(1, 2, 3, 4, 5));// 15

// the rest operator (...) allows you to pass any number of arguments to a function
function multyplyyy(...nums) {
    return nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(multyplyyy(1, 2, 3, 4, 5));// 120

function multiplyyyy(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}

console.log(multiplyyyy(2, 1, 2, 3, 4, 5)); // [2, 4, 6, 8, 10]

//default parameters
// ensure that a function behaves as expected even if no arguments are passed
function greet(name = 'World') {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, World!
greet('John'); // Hello, John!

function codeDetails( language = 'Javascript', tool = 'VS Code') {
    console.log(`I'm coding in ${language} with ${tool}.`);
}
codeDetails(); // I'm coding in Javascript with VS Code.
codeDetails('Python', 'PyCharm'); // I'm coding in Python with PyCharm.