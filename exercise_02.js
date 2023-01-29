//02. Given an array of numbers, return a new array that only includes the even numbers.

const evensOnly = (arr) => arr.filter((n) => n % 2 === 0);

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9])); /// [2, 4, 6, 8]
console.log(evensOnly([10, 20, 30, 41, 51, 62, 77, 89, 93])); /// [10, 20, 30, 62]
