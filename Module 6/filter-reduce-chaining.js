const ages = [18, 22, 15, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 22, 30]


const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log(total); // 10

const products = [
    { name: "Phone", price: 700 },
    { name: "Laptop", price: 1000 },
    { name: "Tablet", price: 500 }
];

const affordableProducts = products
    .filter(p => p.price < 800)
    .map(p => p.name);

console.log(affordableProducts); // ["Phone", "Tablet"]
