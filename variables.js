var firstName = 'JOHN';
let lastName;
lastName = 'DOE';
console.log(firstName , lastName);

const christmas_2025 = '25-12-2025';
console.log(christmas_2025);


let favoriteFruit = 'apple';
let favoriteIceCream = 'vanilla';
console.log('My favorite fruit is ' + favoriteFruit + ' and my favorite ice cream flavor is ' + favoriteIceCream + '.');

let favoriteProgrammingLanguage = 'JavaScript';
console.log('My favorite programming language is ' + favoriteProgrammingLanguage + '.');

let numberOfDonuts = 12;
console.log('I have' + ' ' + numberOfDonuts + ' ' + "donuts.");

let isRaining = true;
console.log('Is it raining today? ' + isRaining + '.');

favoriteFruit = null;
console.log('My favorite fruit is ' + favoriteFruit + '.');

let favoriteColor;
console.log('My favorite color is ' + favoriteColor + '.');

const uniqueKey = Symbol();
console.log('The unique key is: ' + uniqueKey.toString() + '.');

let course ={
    name: 'Introduction to Programming',
    duration: '10 weeks',
    level: 'beginner'
};
console.log(course);
console.log('Course Name: ' + course.name);
console.log("course duration: " + course.duration);
console.log('course level: ' + course.level);

let firstName2 = 'Jane';
console.log(typeof firstName2); // Output: string
firstName2 = 42;
console.log(typeof firstName2); // Output: number
firstName2 = true;
console.log(typeof firstName2); // Output: boolean

// Objects are nouns(person, place, thing, or idea) and functions are verbs(actions or processes).
let person = {
    name: 'Alice',
    age: 30,};
    console.log(person.name); // Output: Alice
    person.name = 'Bob';
    console.log(person.name); // Output: Bob
    console.log(person['name'])// Output: Bob
    person['name'] = 'Charlie';
    console.log(person.name); // Output: Charlie

    let property = 'name';
    console.log(person[property]); // Output: Charlie