//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote); // Output: "Yes, you can vote!"

let number = 10;
let parity = (number % 2 === 0) ? "Even" : "Odd";
console.log(parity); // Output: "Even"

let temperature = 25;
let weather = (temperature > 30) ? "It's hot outside!" : "The weather is pleasant.";
console.log(weather); // Output: "The weather is pleasant."

let score = 85;
const grade = (score >= 90) ? 'A' :
                (score >= 80) ? 'B' :
                (score >= 70) ? 'C' :
                (score >= 60) ? 'D' : "F";
console.log('Your grade is: ' + grade)  // Output: "Your grade is: B"

//logical operators
// || (logical OR) operator returns true if at least one of the operands is true, and false if both operands are false.
// && (logical AND) operator returns true if both operands are true, and false if at least one operand is false.
// ! (logical NOT) operator negates the value of a boolean expression, returning true if the expression is false, and false if the expression is true.
// ?? (nullish coalescing) operator returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.
let isSunny = true;
let isWarm = true;
let canGoToBeach = isSunny && isWarm;
console.log(canGoToBeach); // Output: true

let hasUmbrella = false;
let canGoOutside = isSunny || hasUmbrella;
console.log(canGoOutside); // Output: true  

let isClosedOnSunday = true;
const isOpen = !isClosedOnSunday;
console.log(isOpen); // Output: false

let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: "Default Value"

// falsy values in JavaScript include: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN. All other values are considered truthy.
let usersChosenColor = '';
let defaultColor = 'blue';
let finalColor = usersChosenColor || defaultColor;
console.log(finalColor); // Output: "blue", because usersChosenColor is an empty string (falsy), so finalColor takes the value of defaultColor.

let name = 'test';
let results = name ? name : 'Anonymous';
console.log(results); // Output: "test", because name is a non-empty string (truthy), so result takes the value of name.

let isLoggedIn = false;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(welcomeMessage); // Output: "Please log in.", because isLoggedIn is false (falsy), so welcomeMessage takes the value of the second string.

let score2 = 'test';
const rslt = false || score2;
console.log(rslt); // Output: "test", because false is falsy, so rslt takes the value of score2, which is "test".

//operators precedence
//PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction)
let result2 = 3 + 4 * 2;
console.log(result2); // Output: 11, because multiplication has higher precedence than addition.

let result3 = (3 + 4) * 2;
console.log(result3); // Output: 14, because parentheses change the order of operations.