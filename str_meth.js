const name = "John Doe";
console.log( typeof name ); // Output: "string"

const anotherName = new String("Jane Doe"); //construstor function for string
console.log( typeof anotherName ); // Output: "object"

let sentence = "a new sentence ";
const doesInclueNew = sentence.includes('new');
console.log(doesInclueNew); // Output: true
console.log(sentence[3])//output: "e"

const doesInclueOld = sentence.includes('old');
console.log(doesInclueOld); // Output: false

const startsWithA = sentence.startsWith('a');
console.log(startsWithA); // Output: true

const endsWithNew = sentence.endsWith('new');
console.log(endsWithNew); // Output: false

let updatedSentence = sentence.replace('new', 'short');
console.log(updatedSentence); // Output: "a short sentence"

let upperCaseSentence = sentence.toUpperCase();
console.log(upperCaseSentence); // Output: "A NEW SENTENCE"

let trimmedSentence = sentence.trim();
console.log(trimmedSentence); // Output: "a new sentence"

let splitSentence = sentence.split(' ');
console.log(splitSentence); // Output: ["a", "new", "sentence"]