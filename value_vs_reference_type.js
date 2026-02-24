let a = 10;
let b = a; // b is assigned the value of a (10)
a = 20; // Changing b does not affect a

console.log(a); // Output: 20
console.log(b); // Output: 10
//primitive types (number, string, boolean, null, undefined, symbol) are passed by value, meaning that when you assign a variable to another variable, it creates a copy of the value. Changes to one variable do not affect the other.
//primitive is passed by copy, not by reference

let e = {value : 20};
let f = e; // f is assigned the reference to the object {value: 20}
e.value = 100; // Changing e affects f

console.log(e);
console.log(f);
//objects (including arrays and functions) are passed by reference, meaning that when you assign a variable to another variable, it creates a reference to the same object in memory. Changes to one variable will affect the other variable since they both point to the same object.

let c = [1, 2, 3];
let d = c; // d is assigned the reference to the array [1, 2, 3]
c[0] = 4; // Changing d affects c

console.log(c); // Output: [4, 2, 3]
console.log(d); // Output: [4, 2, 3]
//array is passed by reference, meaning that when you assign a variable to another variable, it creates a reference to the same object in memory. Changes to one variable will affect the other variable since they both point to the same object.

let g = function() {};
let h = g; // h is assigned the reference to the function
g = function() {}; // Changing h does not affect g
console.log(g); // Output: [Function: g]
console.log(h); // Output: [Function: g]
//functions are passed by reference, meaning that when you assign a variable to another variable, it creates a reference to the same function in memory. Changes to one variable will affect the other variable since they both point to the same function.

//enumerating properties of an object
let numbers = [1, 2, 3, 4, 5];
for (const elements of numbers) {
    console.log(elements); // Output: 1, 2, 3, 4, 5
}

const dog = {
    name: 'Buddy',
    age: 3,
    breed: 'Golden Retriever'
  };
  
  for (const key in dog) {
    console.log(dog[key]);
}
// Output: "Buddy", 3, "Golden Retriever"

const keys = Object.keys(dog);
console.log(keys); // Output: ["name", "age", "breed"]

const values = Object.values(dog);
console.log(values); // Output: ["Buddy", 3, "Golden Retriever"]

const entries = Object.entries(dog);
console.log(entries); // Output: [["name", "Buddy"], ["age", 3], ["breed", "Golden Retriever"]]

for (const key of Object.keys(dog)){
    console.log(key); // Output: "name", "age", "breed"
}

for (const value of Object.values(dog)){
    console.log(value); // Output: "Buddy", 3, "Golden Retriever"
}

for (const entry of Object.entries(dog)){
    console.log(entry); // Output: ["name", "Buddy"], ["age", 3], ["breed", "Golden Retriever"]
}
//enumerating properties of an object can be done using for...in loop, Object.keys(), Object.values(), and Object.entries() methods. The for...in loop iterates over the enumerable properties of an object, while Object.keys() returns an array of the object's own property names, Object.values() returns an array of the object's own property values, and Object.entries() returns an array of the object's own key-value pairs.
//enumerating properties of an object can be useful for various purposes, such as iterating over the properties to perform operations on them, or to create new objects based on the existing properties.

//Cloning objects and arrays
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];//spread operator creates a shallow copy of the original array
console.log(clonedArray); // Output: [1, 2, 3]
let originalObject = {a: 1, b: 2, c: 3};
let clonedObject = {...originalObject};
console.log(clonedObject); // Output: {a: 1, b: 2, c: 3}

let p = { value: 10};
let q = {};

Object.assign(q, p); // q is assigned the properties of p

q.value = 20; // Changing q does not affect p [q is target object, p is source object]

console.log(p); // Output: { value: 10 }
console.log(q); // Output: { value: 20 }
//Cloning objects and arrays can be done using the spread operator (...) or the Object.assign() method. The spread operator creates a shallow copy of the original object or array, while Object.assign() copies the properties of one or more source objects to a target object. Both methods create a new object or array that is independent of the original, meaning that changes to the cloned object or array do not affect the original.

// Garbage Collection
//Garbage collection in JavaScript is the process of automatically freeing up memory that is no longer being used by the program. JavaScript uses a garbage collection algorithm called "mark-and-sweep" to identify and remove objects that are no longer reachable from the root (global) object. When an object is created, it is allocated memory on the heap. If there are no references to that object, it becomes eligible for garbage collection. The garbage collector periodically runs and frees up memory by removing objects that are no longer needed, allowing the program to use memory more efficiently.
