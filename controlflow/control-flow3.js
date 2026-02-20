//for loops
let numbers = [1, 2, 3, 4, 5, 6, 7];

let idx = 0;//initialization index position
let lengthOfArray = numbers.length;
console.log(numbers[idx]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx++]);
console.log(numbers[idx]);


for (let idx = 0; idx < lengthOfArray; idx++) {
    console.log(numbers[idx]);}

for (let num = 0; num <= 100; num++){
    console.log(num);
}
//while loops
let idxx = 0;
while (idxx < numbers.length) {
    console.log(numbers[idxx]);
    idxx++;
}
// use while loop when you don't know how many times you need to iterate, and use for loop when you know the number of iterations in advance.
// use for loop when you need to iterate over a sequence of numbers, and use while loop when you need to iterate until a certain condition is met.

let count = 0;
while (true) {
    console.log("Looping...");
    count++;
    if (count === 10){
        break;
    }}

// do-while loops
//do-while loop is similar to while loop, but it guarantees that the code block will be executed at least once, even if the condition is false. The condition is evaluated after the code block is executed.
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//for in loops
//for in loop is used to iterate over the properties of an object. It iterates over the enumerable properties of an object, including inherited properties.
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

const course = {
    title : 'javascript',
    duration : '3 hours',
    section : 7
};

console.log(course.title);
console.log(course['duration']);
console.log(course.section);

for (const key in course){
    console.log(course[key]);
};

//for of loops
//for of loop is used to iterate over the values of an iterable object, such as an array, string, or map. It iterates over the values of the object, rather than the keys.
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);
};

/* The code snippet `let ar = ['red', 'green', 'blue', 'yellow', 'purple']; for (let color of ar) {
console.log(color); }` is using a `for of` loop to iterate over the elements of the array `ar`. */
let ar = ['red', 'green', 'blue', 'yellow', 'purple'];
for (let color of ar) {
    console.log(color);
}
