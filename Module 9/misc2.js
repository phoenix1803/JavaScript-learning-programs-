// Currying is often used for configuration in functional programming.

const applyDiscount = (discount) => (price) => price - price * (discount / 100);

const tenPercentDiscount = applyDiscount(10);
const twentyPercentDiscount = applyDiscount(20);

console.log(tenPercentDiscount(100));  // 90
console.log(twentyPercentDiscount(100));  // 80
