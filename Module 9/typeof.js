// `typeof` checks the type of a variable.
// `Array.isArray` verifies if a value is an array.

console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof {});         // "object"
console.log(typeof null);       // "object" (quirk of JavaScript)
console.log(typeof undefined);  // "undefined"

const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({}));  // false
