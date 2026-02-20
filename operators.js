//Arithmetic operators 
// -, +, *, /, %(remainder), **(exponentiation)
let a = 2 + 3;
console.log(a); // Output: 5
let b = 10 - 4;
console.log(b); // Output: 6    
let c = 5 * 6;
console.log(c); // Output: 30   
let d = 20 / 4;
console.log(d); // Output: 5
let e = 10 % 3;
console.log(e); // Output: 1
let f = 2 ** 3;
console.log(f); // Output: 8

//increment and decrement operators
let x = 5;
x = x + 1; // Incrementing x by 1
console.log(x); // Output: 6
x += 1; // Shorthand for x = x + 1
console.log(x); // Output: 7
x++; // Post-increment: increments x after its current value is used
console.log(x); // Output: 8
++x; // Pre-increment: increments x before its current value is used
console.log(x); // Output: 9

const items = ['apple', 'banana', 'orange'];
let index = 0;
console.log(items[index]); // Output: 'apple', index is still 0 
console.log(items[index++]); // Output: 'apple', index is now 1
console.log(items[index]); // Output: 'banana', index is still 1
console.log(items[++index]); // Output: 'orange', index is now 2

let y = 10;
y = y - 1; // Decrementing y by 1
console.log(y); // Output: 9
y -= 1; // Shorthand for y = y - 1
console.log(y); // Output: 8
y--; // Post-decrement: decrements y after its current value is used
console.log(y); // Output: 7
--y; // Pre-decrement: decrements y before its current value is used
console.log(y); // Output: 6

const items2 = ['apple', 'banana', 'orange', 'grape', 'melon', 'mango', 'peach', 'pear', 'plum', 'kiwi'];
let index2 = 7;
console.log(items2[index2]); // Output: 'pear', index2 is still 7
console.log(items2[index2--]); // Output: 'pear', index2 is now 6
console.log(items2[index2]); // Output: 'peach', index2 is 6
console.log(items2[--index2]); // Output: 'mango', index2 is now 5

//assignment operators
let programmingLanguage = 'JavaScript'; // Assignment operator (=) assigns the value 'JavaScript' to the variable programmingLanguage
console.log(programmingLanguage);
programmingLanguage += ' is awesome!'; // Concatenation assignment operator (+=) appends the string ' is awesome!' to the existing value of programmingLanguage
console.log(programmingLanguage);
let number = 10;
number *= 2; // Multiplication assignment operator (*=) multiplies the current value of number by 2 and assigns the result back to number
console.log(number);// Output: 20
number /= 4; // Division assignment operator (/=) divides the current value of number by 4 and assigns the result back to number
console.log(number);// Output: 5
number -= 3; // Subtraction assignment operator (-=) subtracts 3 from the current value of number and assigns the result back to number
console.log(number);// Output: 2
number %= 5; // Modulus assignment operator (%=) calculates the remainder of number divided by 5 and assigns it back to number
console.log(number);// Output: 2
number **= 3; // Exponentiation assignment operator (**=) raises number to the power of 3 and assigns the result back to number
console.log(number);// Output: 8

let p = 5;
let q = '5';
console.log(p == q); // Output: true, because the loose equality operator (==) performs type coercion and considers 5 and '5' to be equal
//truthy
console.log(Boolean(1)); // Output: true
console.log(Boolean('hello')); // Output: true
console.log(Boolean([])); // Output: true
console.log(Boolean({})); // Output: true
//falsy
console.log(Boolean(0)); // Output: false
console.log(Boolean('')); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false
console.log(p === q); // Output: false, because the strict equality operator (===) does not perform type coercion and considers 5 (number) and '5' (string) to be different

//comparison operators
let num1 = 5;
let num2 = 10;
console.log(num1 == num2); // Output: false, because num1 is not equal to num2
console.log(num1 != num2); // Output: true, because num1 is not equal to num2
console.log(num1 > num2); // Output: false, because num1 is not greater than num2
console.log(num1 < num2); // Output: true, because num1 is less than num2
console.log(num1 >= num2); // Output: false, because num1 is not greater than or equal to num2
console.log(num1 <= num2); // Output: true, because num1 is less than or equal to num2

