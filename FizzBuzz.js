function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0)
        return 'FizzBuzz';
    else if (n % 3 === 0)
        return "Fizz";
    else if (n % 5 === 0)
        return "Buzz";
    else
        return n;
}

console.log(fizzBuzz(1)); // Output: 1
console.log(fizzBuzz(3)); // Output: "Fizz"
console.log(fizzBuzz(5)); // Output: "Buzz"
console.log(fizzBuzz(15)); // Output: "FizzBuzz"
console.log(fizzBuzz(30)); // Output: "FizzBuzz"
console.log(fizzBuzz(7)); // Output: 7
console.log(fizzBuzz(9)); // Output: "Fizz"
console.log(fizzBuzz(10)); // Output: "Buzz"