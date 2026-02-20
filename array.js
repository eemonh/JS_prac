let productColors = ['red', 'green', 'blue'];
console.log(productColors);
console.log(productColors[0]); // Output: red
console.log(productColors[1]); // Output: green
console.log(productColors[2]); // Output: blue
productColors[1] = 41;
console.log(productColors[1]); // Output: 41
console.log(productColors.length); // Output: 3
console.log(productColors);
console.log(productColors[3]); // Output: undefined
productColors[3] = 'yellow';
console.log(productColors);
console.log(productColors[3]); // Output: yellow
productColors.push('purple');// Adds 'purple' to the end of the array
console.log(productColors);
console.log(productColors.length); // Output: 5
productColors.pop();// Removes the last element ('purple') from the array
console.log(productColors);
console.log(productColors.length); // Output: 4
console.log(typeof productColors); // Output: object
