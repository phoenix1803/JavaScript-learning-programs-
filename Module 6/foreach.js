const nums = [1, 2, 3];

// map: returns a new array
const squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9]

// forEach: performs an action for each element
nums.forEach(n => console.log(n * 2)); // 2, 4, 6


const people = [{ name: "A", age: 20 }, { name: "B", age: 30 }];
console.log(people.find(p => p.age > 25)); // { name: "B", age: 30 }
console.log(people.findIndex(p => p.age > 25)); // 1

const numbers = [1, 2, 3, 4];
console.log(numbers.some(n => n > 3)); // true
console.log(numbers.every(n => n < 5)); // true
