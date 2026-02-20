function maxNum(num1, num2){
    return num1 > num2 ? num1 : num2; // The ternary operator checks if num1 is greater than num2. If true, it returns num1; otherwise, it returns num2.
}
console.log(maxNum(5, 10)); // Output: 10
console.log(maxNum(-5, -10)); // Output: -5
console.log(maxNum(3.5, 2.8)); // Output: 3.5
console.log(maxNum(0, 0)); // Output: 0
console.log(maxNum(100, 50)); // Output: 100