array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayEvenNumbers(array) {
    for (let n of array){
        if (n % 2 === 0)
            console.log(n);
    }
}

function displayOddNumbers(array) {
    for (let n of array){
        if (n % 2 !== 0)
            console.log(n);
    }
}

function displayEvenNumberss(array) {
    for (const numbers of array){
        if (numbers % 2 === 0)
            console.log(numbers);
    }
}
displayEvenNumberss(array);
function displayOddNumberss(array) {
    for (const numbers of array){
        if (numbers % 2 !== 0)
            console.log(numbers);
    }
}
displayOddNumberss(array);