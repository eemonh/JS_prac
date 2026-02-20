//if-else statement is a control flow statement that allows you to execute different blocks of code based on a condition. The condition is evaluated as a boolean (true or false), and the appropriate block of code is executed accordingly.

let priceOfChocolate = 1.99;
let hasAmountInCash =  5;
const canBuyChocolate = hasAmountInCash >= priceOfChocolate;// value of comparison is a boolean (true or false)
console.log(canBuyChocolate); // Output: true, because 5 is greater than 1.99

if (canBuyChocolate){
    console.log('Enjoy your chocolate!'); // Output: "Enjoy your chocolate!", because canBuyChocolate is true
}else{
    console.log('Sorry, you cannot buy the chocolate.'); // This line will not be executed because canBuyChocolate is true}
}


let age = 20;
const isAdult = age >= 18;
console.log(typeof isAdult); // Output: "boolean", because isAdult is a boolean value (true)

let hour = 15;
if (hour >= 6 && hour < 12) {
    console.log("Good morning!"); // Output: "Good morning!", because hour is between 6 and 12
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!"); // This line will not be executed because hour is not between 12 and 18
} else {
    console.log("Good evening!"); // This line will not be executed because hour is not greater than or equal to 18
}