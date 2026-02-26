//Finding elements (indexOf, lastIndexOf, includes, find, findIndex) Primitive types
// to check if an array has primitives, we can use indexOf, lastIndexOf, includes

const numbers = [5, 4, 3, 2, 1, 0, 3];
console.log(numbers)

const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree); // 2
console.log( numbers[indexOfThree] ); // 3


const indexOfTen = numbers.indexOf(10);
console.log(indexOfTen); // -1 (not found)
console.log( numbers[indexOfTen] ); // undefined (since indexOfTen is -1, which is out of bounds)
if (indexOfTen === -1){
    console.log('10 is not found in the array');
}
if (!numbers.includes(10)){
    console.log('10 is not found in the array');
}



/* `const lastIndexOfThree = numbers.lastIndexOf(3);` is finding the last index of the value `3` in the
`numbers` array. In this case, the value `3` appears at index `2` and index `6` in the array. Since
`lastIndexOf` returns the index of the last occurrence of the specified value, it will return `6` in
this case. The subsequent `console.log(lastIndexOfThree); // 6` is outputting the result of this
operation to the console. */
const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree); // 6