// Functional programming avoids changing data directly
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]




// Imperative: Describes HOW
const nums = [1, 2, 3];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum); // 6

// Declarative: Describes WHAT
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total); // 6
