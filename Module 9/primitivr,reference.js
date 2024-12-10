// Primitive types (e.g., number, string) store values directly.
// Reference types (e.g., objects, arrays) store references to memory locations.

let primitive1 = 10;
let primitive2 = primitive1;  // Copy by value
primitive2 = 20;
console.log(primitive1); // 10 (unchanged)

let reference1 = { name: "Alice" };
let reference2 = reference1;  // Copy by reference
reference2.name = "Bob";
console.log(reference1.name); // "Bob" (affected)
