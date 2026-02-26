let now = new Date();
console.log(now); // Output: current date and time
console.log (now.getTimezoneOffset()); // Output: time zone offset in minutes

let specificDate = new Date('2022-01-01');
console.log(specificDate); // Output: Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)

let jan01_71 = new Date(0); // January 1, 1970, 00:00:00 UTC
console.log(jan01_71); // Output: Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)

let dec31_69 = new Date(0-24 * 3600 * 1000); // December 31, 1969, 23:00:00 UTC
console.log(dec31_69); // Output: Wed Dec 31 1969 23:00:00 GMT+0000 (Coordinated Universal Time)

const dateOne = new Date('December 17, 1995 03:24:00');
console.log(dateOne.getFullYear()); // Output: 1995
console.log(dateOne.getMonth()); // Output: 11 (months are zero-indexed, so December is 11)
console.log(dateOne.getDate()); // Output: 17
console.log(dateOne.getHours()); // Output: 3
console.log(dateOne.getMinutes()); // Output: 24
console.log(dateOne.getSeconds()); // Output: 0
console.log(dateOne); // Output: Sun Dec 17 1995 03:24:00 GMT+0000 (Coordinated Universal Time)