// 01. Given an array of numbers,
// return a new array that has only the numbers that are 5 or greater.

const fiveAndGreaterOnly = (arr) => arr.filter((n) => n > 5);

console.log(fiveAndGreaterOnly([2, 9, 0, 89, 2, 3])); /// [9, 89]
