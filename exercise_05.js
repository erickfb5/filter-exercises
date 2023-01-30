//05 Make a filtered list of all the people who are old enough to see a horror movie (older than 18).

const isOldEnough = (arr) => arr.filter(person => person.age>18);

console.log(
  isOldEnough([
    { name: "Bill", age: 17 },
    { name: "Clarke", age: 29 },
    { name: "James", age: 15 },
    { name: "Timothy", age: 41 },
    { name: "Peter", age: 79 },
  ]));