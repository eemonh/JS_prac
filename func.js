// Local VS Global Scope
// Local scope is the scope within a function, and global scope is the scope outside of a function. such as variables declared outside of a function are called global variables, while variables declared inside a function are called local variables.

{
    var a = 10;
    let b = 20;
    const c = 30;

}

console.log(a); // Output: 10
// console.log(b); // Output: ReferenceError: b is not defined
// console.log(c); // Output: ReferenceError: c is not defined

function greet(){
    const message = "Hello, world!";
    console.log(message);
}
greet();// Output: Hello, world!
//console.log(message); //Output: ReferenceError: message is not defined



//LET VS VAR keyword
//var keyword is function scoped
//let keyword is block scoped
//const keyword is block scoped
//const keyword is read-only
//var keyword is not read-only
//let keyword is not read-only

function display(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i);// var keyword
}
display();

function displayy(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
   // console.log(i);// let keyword only works inside the block
}
displayy();// we wanna minimize the global scope pollution. using let will help us avoid adding unnecessary variables to the global scope which can conflict with other variables, scripts or 3rd party libraries
//using let and const keyword also helps us reduce our errors. so block scoping is easier to track where variables area available. reducing the risk of accidental overwriting or misusing variables. Also helps code readability.


// the "this" keyword
//The "this" keyword refers to the current execution context. In a regular function, it refers to the global object, while in a method, it refers to the object that owns the method. and in browser it refers to the window object.
//The "this" keyword can also be used in arrow functions, where it refers to the enclosing scope.

const course = {
    name: 'JavaScript',
    duraton: '3 hours',
    start() {
        console.log(this.name + ' is starting in ' + this.duraton);
    }
}

course.start();

function startVideo(){
    console.log(this);
}

startVideo();

const video = {
    name: "ES6 syntax",
    start: () => {
        console.log(this.name)
    }
}

video.start();// undefined

function introduce(language){
    console.log(this.name + " is learning " + language);
}

const person = {name: "33mon"};// global scope
const introduction = introduce.bind(person);// bind method
introduction("Javascript");// 33mon is learning Javascript