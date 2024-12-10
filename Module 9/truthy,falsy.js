// Comparison operators compare two values and return a boolean.
// Truthy: Values considered true in a boolean context (e.g., non-zero numbers, non-empty strings).
// Falsy: Values considered false (e.g., 0, "", null, undefined, NaN).

console.log(5 > 3);        // true
console.log(5 === "5");    // false
console.log(5 == "5");     // true (type coercion)

const truthyValues = [1, "hello", [], {}];
const falsyValues = [0, "", null, undefined, NaN];

truthyValues.forEach(value => console.log(Boolean(value))); // true for all
falsyValues.forEach(value => console.log(Boolean(value))); // false for all
