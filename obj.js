// every object in javascript has a constructor function.

const person = {
    name: '33mon'
};
console.log(person.constructor);// [Function: Object]

const arr = [1, 2, 3];
console.log(arr.constructor);// [Function: Array]

const date = new Date();
console.log(date.constructor);// [Function: Date]

const str = 'hello';
console.log(str.constructor);// [Function: String]

const num = 5;
console.log(num.constructor);// [Function: Number]

const bool = true;
console.log(bool.constructor);// [Function: Boolean]

const func = function() {};
console.log(func.constructor);// [Function: Function]

const symbol = Symbol();
console.log(symbol.constructor);// [Function: Symbol]

const obj = {};
console.log(obj.constructor);// [Function: Object]
// ||
let newObj = new Object();
console.log(newObj.constructor);// [Function: Object]


