function addNum(num1, num2) {
    return num1 + num2;
}

console.log(addNum(5, 10)); // Output: 15

const n = addNum;
console.log( n(3, 7)); // Output: 10

console.log(addNum.length); // Output: 2 (number of parameters)

function Programmer(name){
    this.name = name;
    this.writeCode = function(){
        console.log(this.name + "Code in JavaScript");
    }
}
console.log(Programmer.length); // Output: 1 (number of parameters)
console.log(Programmer.constructor); // Output: [Function: Programmer]
const programmer1 = new Programmer("Alice");
programmer1.writeCode(); // Output: Alice Code in JavaScript

const Programmer2 = new Function(`name`, `
    this.name = name;
    this.writeCode = function(){
        console.log(this.name + " Code in JavaScript");
    }
`);
console.log(Programmer2.length); // Output: 1 (number of parameters)
console.log(Programmer2.constructor); // Output: [Function: Programmer]
const programmer2 = new Programmer2("33mon");
programmer2.writeCode(); // Output: Bob Code in JavaScript