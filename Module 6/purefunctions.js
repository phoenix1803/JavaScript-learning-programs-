// Pure Function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Side Effect Example
let count = 0;
function increment() {
    count++;
    return count;
}
console.log(increment()); // 1 (changes external state)
