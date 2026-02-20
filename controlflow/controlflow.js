for(let i = 0; i < 10; i++){
    if(i===5){
        break; // exit the loop when i is 5
    }
    console.log(i);
}

let i = 0;
while(i < 10){
    if (i === 5){
        break; // exit the loop when i is 5
    }
    console.log(i);
    i++;
}

let j = 0;
do {
    if (j === 5){
        break; // exit the loop when j is 5
    }
    console.log(j);
    j++;
}while(j < 10);

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj){
    if (key === 'b'){
        break; // exit the loop when key is 'b'
    }
    console.log(obj[key]);
}

const arr = [1, 2, 3, 4, 5];
for (let value of arr){
    if (value === 3){
        break; // exit the loop when value is 3
    }
    console.log(value);
}

for (let k = 0; k < 10; k++){
    if (k % 2 === 0){
        continue; // skip the current iteration when k is even
    }
    console.log(k);
}

let l = 0;
while(l < 10){
    l++;
    if (l % 2 === 0){
        continue; // skip the current iteration when l is even
    }
    console.log(l);
}

let m = 0;
do {
    m++;
    if (m % 2 === 0){
        continue; // skip the current iteration when m is even
    }
    console.log(m);
}while(m < 10);

const obj1 = {a :1, b: 2, c: 3, d: 4, e: 5};
for (let keyy in obj1){
    if (obj1[keyy] % 2 === 0){
        continue; // skip the current iteration when the value of the key is even
    }
    console.log(obj1[keyy]);
}

const arrr = [1, 2, 3, 4, 5];
for (let element of arrr){
    if (element % 2 === 0){
        continue; // skip the current iteration when the element is even
    }
    console.log(element);
}