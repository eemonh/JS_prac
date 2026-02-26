//array is a data structure that can hold multiple values. It is an ordered collection of elements, where each element can be of any data type (e.g., numbers, strings, objects, etc.). Arrays are commonly used to store and manipulate lists of data in programming languages.
//In JavaScript, arrays are created using square brackets [] and can contain any type of data. They are zero-indexed, meaning that the first element is accessed with index 0, the second element with index 1, and so on. Arrays in JavaScript are dynamic, allowing you to add or remove elements as needed.
//Arrays can be manipulated using various methods, such as push() to add elements to the end of the array, pop() to remove the last element, shift() to remove the first element, unshift() to add elements to the beginning of the array, and many more. You can also access and modify individual elements using their index.

const numbers = [5, 4, 3, 2, 1];

numbers.push(7, 8, 9); // Adds 7 to the end of the array
console.log(numbers); // Output: [5, 4, 3, 2, 1, 7]

numbers.unshift(25, 26, 27); // Adds 25 to the beginning of the array
console.log(numbers); // Output: [25, 26, 27, 5, 4, 3, 2, 1, 7]

numbers.splice(1, 0, 10, 11, 12); // 1 is the index position, 0 is the number of elements to remove, and 10, 11, 12 are the elements to add
console.log(numbers); // Output: [25, 10, 11, 12, 26, 27, 5, 4, 3, 2, 1, 7]

numbers.pop();// Removes the last element from the array
console.log(numbers); // Output: [25, 10, 11, 12, 26, 27, 5, 4, 3, 2]

const numbers2 = [1, 2, 3, 4, 5];
//.pop()
const lastElement = numbers2.pop(); // Removes the last element and returns it
console.log(lastElement); // Output: 5
console.log(numbers2); // Output: [1, 2, 3, 4]
console.log(`lastElement: ${lastElement}\n`); // Output: lastElement: 5 //"\n is used to add a new line after the output"


//.shift()
const firstElement = numbers2.shift(); // Removes the first element and returns it
console.log(firstElement); // Output: 1
console.log(numbers2); // Output: [2, 3, 4]
console.log(`firstElement: ${firstElement}`); // Output: firstElement: 1

//splice()
const middleElement = numbers2.splice(1, 1); // Removes 1 element at index 1 and returns it as an array
console.log(`middleElement: ${middleElement}`)// Output: middleElement: 3
console.log(numbers2); // Output: [2, 4]