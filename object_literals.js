// onjects are collections of key value pairs
// they are denoted by curly braces{}
//state and behavior
//state is represented by properties
//behavior is represented by methods

const dog = {
    name: "Rover",
    breed: "Labrador",
    age: 5,
    weightInPounds: 70,
    eat : function(){
        console.log("chomp chomp");
    },
    bark(){
        console.log("woof woof");// an fuction inside an object is called a method
    }
}
console.log(dog);

// factory function is a function that creates and returns an object without duplication of code
function getDog(name, breed, age, weightInPounds){
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat(){
            console.log("chomp chomp");
        },
        bark(){
            console.log("woof woof");
        }
    }
}

const anotherDog = getDog("Fido", "Poodle", 3, 40);
console.log(anotherDog);

//constractors are functions that create and return an object using the new keyword
//constractors are used to create multiple objects with the same properties and methods without duplication of code
//use PascalCase for constructor function names
function Dog(name, breed, age, weightInPounds){
    //this = {};
    //add properties and methods to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this. weightInPounds = weightInPounds;
    this.eat = function(){
        console.log(this.name + "chomp!");
    }
    this.bark = function(){
        console.log(this.name + "woof woof");
    }
    }

    const anotherDog2 = new Dog("Max", "dachshund", 3, 40);
    console.log(anotherDog2);