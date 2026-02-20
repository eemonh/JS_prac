//a function in JS is a reusable block of code that performs a specific task. It can take input parameters, perform operations, and return a value. Functions help to organize code and make it more modular and maintainable.
//what are the two reasons to create functions in JS? either to reuse code or to break down complex problems into smaller, more manageable pieces.
//either for it to perform and actions or to calculate a value and return it. Functions that perform actions are often called "procedures" or "void functions," while functions that calculate and return a value are simply called "functions" or "value-returning functions."
function sayHi(name){
    console.log('hi! ' + name);
}
sayHi("Alice");// calls the function and executes the code inside it, which prints 'hi! Alice' to the console.

function multiply(num1, num2){
    return num1 * num2; // returns the product of num1 and num2
}
console.log(multiply(2, 2)); // Output: 4
let result = multiply(5, 3); // calls the function with arguments 5 and 3, and stores the returned value (15) in the variable result
console.log(result); // Output: 15

function add(a, b){
    const sum = a + b; // calculates the sum of a and b
}
console.log(add(2, 3)); // Output: undefined, because the function does not return a value

add(4, 5); // calls the function with arguments 4 and 5, but does not store or use the result since the function does not return anything
console.log(add); // Output: [Function: add], which is the function definition itself, not the result of the function call
console.log(add(4, 5)); // Output: undefined, because the function does not return a value
result = add(4, 5); // calls the function with arguments 4 and 5, but since the function does not return a value, result will be undefined
console.log(result); // Output: undefined

function devide(a, b){
    if (b===0)
        return "Error: Division by zero is not allowed";
    return a / b;
}
console.log(devide(10, 2)); // Output: 5
console.log(devide(10, 0)); // Output: "Error: Division by zero is not allowed"

// general form of a function
// function name(parameters) {
//     // code to be executed
//     return result;
// } 

//generator functions
//generator functions are a special type of function that can be paused and resumed, allowing them to generate a sequence of values on-the-fly. They are defined using the `function*` syntax and use the `yield` keyword to produce values.
function* countUpTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}
const counter = countUpTo(5);
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2
console.log(counter.next().value); // Output: 3
console.log(counter.next().value); // Output: 4
console.log(counter.next().value); // Output: 5
console.log(counter.next().value); // Output: undefined, since the generator has finished yielding values