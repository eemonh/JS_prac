// Emptying an array

let myArray = [1, 2, 3, 4, 5];
let clonedArray = [...myArray];// Create a shallow copy of the original array
console.log(clonedArray);// Output: [1, 2, 3, 4, 5]

// while (myArray.length > 0) {
//   myArray.pop();// Remove the last element until the array is empty
// };
// console.log(myArray);// Output: []

// myArray.length = 0;// Set the length to 0 to empty the array
// console.log(myArray);// Output: []
myArray.splice(0, myArray.length);// Remove all elements using splice
console.log(myArray);// Output: []

myArray = [];// Reassigning to a new empty array
console.log(myArray);// Output: []

console.log(clonedArray);// - clonedArray is a separate copy of the original array, so it remains unchanged when myArray is emptied

