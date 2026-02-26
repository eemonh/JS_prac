//Finding Elements reference types (objects, arrays, functions)
// to check if an array has reference types, we can use find, findIndex

const employees = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'},
];

const employee = employees.find(function(e){
    return e.id === 2;
});// find takes a callback function that returns true or false
// the callback function is called for each element in the array until it returns true
// if it returns true, find returns the element, otherwise it returns undefined
console.log(employee); // {id: 2, name: 'Jane'}

//findindex()
const employeeIndex = employees.findIndex(function(e){
    return e.id === 2;
});
console.log(employeeIndex); // 1 (index of the employee with id 2)

//find() with arrow function
const employee2 = employees.find((e) => e.id === 3);// we can use arrow function to make the code shorter
console.log(employee2); // {id: 3, name: 'Bob'}

//findIndex() with arrow function
const employeeIndex2 = employees.findIndex(e => e.id === 3);
console.log(employeeIndex2); // 2 (index of the employee with id 3)

//combining and slicing arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);// combine two arrays using concat
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//slice(startindex, endindex) - returns a new array with the elements from startindex to endindex (not including endindex)
// if endindex is not provided, it will slice until the end of the array
// if startindex is negative, it will slice from the end of the array
//it will not modify the original array
const slicedArray = combinedArray.slice(2, 5); // slice from index 2 to index 4 (not including index 4)
console.log(slicedArray); // [3, 4, 5]
console.log(combinedArray); // [1, 2, 3, 4, 5, 6] (original array is unchanged)
//primitive types (numbers, strings, booleans) are compared by value, while reference types (objects, arrays, functions) are compared by reference. This means that when we compare two reference types, we are comparing their memory addresses, not their contents. Therefore, even if two arrays have the same contents, they will not be considered equal if they are different objects in memory.


//spread operator (...) - allows us to create a shallow copy of an array or combine arrays
let combied = [...array1, 9, ...array2, 10]; // combine two arrays using spread operator and add some additional elements(9 and 10)
console.log(combied); // [1, 2, 3, 4, 5, 6]

let a = [1, 2];
let b = [...a]; // create a shallow copy of array a using spread operator
console.log(b); // [1, 2]
b.push(3);
console.log(b); // [1, 2, 3]
console.log(a); // [1, 2] (original array a is unchanged)

//itterating over arrays(for of loop)
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number); // 1, 2, 3, 4, 5 (iterates over each element in the array)
};
// foreach loop - takes a callback function that is called for each element in the array
numbers.forEach( number => console.log(number)); // 1, 2, 3, 4, 5 (iterates over each element in the array) );

//the index position in the array for the current element
numbers.forEach( (number, index) => console.log(`At index, ${index}, the number is ${number}`)); // At index, 0, the number is 1, At index, 1, the number is 2, At index, 2, the number is 3, At index, 3, the number is 4, At index, 4, the number is 5

//joining arrays into strings
const words = ['Hello', 'World', 'JavaScript'];
const sentence = words.join(' '); // join the elements of the array into a string with a space as a separator
console.log(sentence); // "Hello World JavaScript"

const num = [1, 2, 3, 4, 5];
const joinedNum = num.join(', '); // join the elements of the array into a string with a comma and space as a separator
console.log(joinedNum); // "1, 2, 3, 4, 5"

// reversing a string into array
const courseName = 'JavaScript for Beginners'; // a string
const parts = courseName.split(' '); // split the string into an array of words using space as a separator
console.log(parts); // ["JavaScript", "for", "Beginners"]
const urlSlug = parts.join('-').toLowerCase(); // join the array of words into a string with a hyphen as a separator and convert to lowercase
console.log(urlSlug); // "javascript-for-beginners"

//sorting arrays
let characters = ['Z', 'A', 'B', 'C'];
characters.sort(); // sort the array in alphabetical order
console.log(characters); // ["A", "B", "C", "Z"]
let characters2 = ['Z', 'A', 'B', 'C'];
characters2.reverse(); // reverse the order of the array
console.log(characters2); // ["C", "B", "A", "Z"]

//sort by name in an array of objects or comparing two strings in an array of objects
let students = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 22},
    {id: 3, name: 'Bob', age: 28} 
];
students.sort((a,b) => {
    const A = a.name.toLowerCase(); // convert name to lowercase for case-insensitive sorting
    const B = b.name.toLowerCase();

    if (A < B) return -1; // if A comes before B, return -1
    if (A > B) return 1; // if A comes after B, return 1
    return 0; // if A and B are equal, return 0
});
console.log(students); // sorted by name in alphabetical order

// Testing Element in arrays
// .every() - returns true if all elements in the array pass the test implemented by the provided function
// .some() - returns true if at least one element in the array passes the test implemented by the provided function

const numbers2 = [1, 2, 3, 4, 5];
const even = numbers2.every((number) => number % 2 === 1); // check if all elements in the array are even
console.log(`all elements are even: ${even}`); // false

const numbers3 = [1, 4, 6, 9, 11];
const odd = numbers3.some((number) => number % 2 === 0); // check if at least one element in the array is odd
console.log(`at least one element is odd: ${odd}`); // true

//Filtering an array
// .filter() - returns a new array with all elements that pass the test implemented by the provided function

const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter((number) => number % 2 === 0); // filter out all even numbers from the array
console.log(`even numbers: ${evenNumbers}`); // [2, 4]

const employees2 = [
    {id: 1, name: 'John', role: 'developer'},
    {id: 2, name: 'Jane', role: "designer"},
    {id: 3, name: 'Bob', role: 'manager'},
    {id: 4, name: 'Alice', role: 'developer'},
    {id: 5, name: 'Charlie', role: 'designer'},
];

const developers = employees2.filter((employee) => employee.role === 'developer'); // filter out all developers from the array
console.log(developers); // [{id: 1, name: 'John', role: 'developer'}, {id: 4, name: 'Alice', role: 'developer'}]

// Mapping an array
// .map() - returns a new array with the results of calling a function for every element in the array

const numbers5 = [1, 2, 3, 4, 5];
const cubedNumbers = numbers5.map((number) => number * number * number); // calculate the cube of each number in the array
console.log(`cubed numbers: ${cubedNumbers}`); // [1, 8, 27, 64, 125]

const numbers6 = [1, 2, 3, 4, 5];
const doubleNumbers = numbers6.map((number) => number * 2); // double each number in the array
console.log(`double numbers: ${doubleNumbers}`); // [2, 4, 6, 8, 10]
const sequrednumbers = doubleNumbers.map(number => number * number); // square each number in the array
console.log(`square numbers: ${sequrednumbers}`); // [4, 16, 36, 64, 100]

const characters3 = ['a', 'b', 'c', 'd', 'e'];
const uppercaseCharacters = characters3.map((character) => character.toUpperCase()); // convert all characters in the array to uppercase
console.log(`uppercase characters: ${uppercaseCharacters}`); // "A", "B", "C", "D", "E"

employees3 = [
    {id: 1, name: 'John', email: 'JHony@example.com'},
    {id: 2, name: 'Jane', email: "JANE@jane.com"},
    {id: 3, name: 'Bob', email: 'BOB@bob.com'},
    {id: 4, name: 'Alice', email: 'ALICE@alice.com'},
    {id: 5, name: 'Charlie', email: 'CHARLIE@charlie.coM'},
];
const emails = employees3.map((employee) => employee.email.toLowerCase()); // convert all emails in the array to lowercase
console.log(emails); // ['jhony@example.com','jane@jane.com','bob@bob.com','alice@alice.com','charlie@charlie.com']
console.log(employees3);
const Updatedemployees = employees3.map(employee => ({// create a new object
    ...employee,// copy all properties from the original object
    email: employee.email.toLowerCase()// convert the email to lowercase
}));
console.log(Updatedemployees);

// Reducing an array
// .reduce() - returns a single value that is the result of accumulating results of calling a provided function for each element in the array

const number7 = [1, 10, 5, 14];
let sum = 0;

for (const num of number7) {
    sum += num;
};
console.log(`sum: ${sum}`); // 30

const summ = number7.reduce( (accumulator, currentValue) => {// accumulator is the previous result, currentValue is the current element
    return accumulator + currentValue;// return the sum of accumulator and currentValue
}, 0);// 0 is the initial value of the accumulator
console.log(`sum: ${summ}`); // 30

const summm = number7.reduce( (accumulator, currentValue) => accumulator + currentValue);
console.log(`sum: ${summm}`); // 30
