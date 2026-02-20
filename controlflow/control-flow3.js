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

let numberss = [1, 2, 3, 4, 5];
for(let num of numberss){
    console.log(num);
}

//for of loop can also be used to iterate over the characters of a string.
let str = "Hello, World!";
for (let char of str) {
    console.log(char);
}

//for of loop can also be used to iterate over the entries of a map.
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (let entry of map) {
    console.log(entry);
}

//for of loop can also be used to iterate over the values of a set.
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
for (let value of set) {
    console.log(value);
}

//for of loop can also be used to iterate over the elements of a generator function.
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
for (let value of generator()) {
    console.log(value);
}

//for of loop can also be used to iterate over the elements of a custom iterable object.
let iterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};
for (let value of iterable) {
    console.log(value);
}

// break and continue statements
//break statement is used to exit a loop prematurely, while continue statement is used to skip the current iteration and move to the next iteration of the loop.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

