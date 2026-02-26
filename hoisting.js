//hoisting
// hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//function declaration
add(2, 3);
function add (num1, num2) {
    console.log(num1 + num2);
}


//function expression
const sub = function (num1, num2) {
    console.log(num1 - num2);
}
sub(5, 3);
