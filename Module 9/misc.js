// Shallow copy only duplicates the first layer of an object.
// Deep copy duplicates all layers, creating a completely independent object.

const obj = { a: 1, b: { c: 2 } };

// Shallow copy using spread operator
const shallowCopy = { ...obj };
shallowCopy.b.c = 42;
console.log(obj.b.c); // 42 (shallow copy affects the original)

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.b.c = 99;
console.log(obj.b.c); // 42 (deep copy does not affect the original)


// A closure is a function that "remembers" its lexical scope even when executed outside of it.
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closure = outerFunction("Hello");
closure("World"); // Output: Outer: Hello, Inner: World

// Function Currying: Transforming a function into a series of functions that accept one argument each.
const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log(double(5)); // 10

// Null: Intentional absence of any value (assigned by developer).
// Undefined: Variable declared but not assigned a value.
// Not defined: Variable not declared.

let a;                // Declared but not assigned
console.log(a);        // undefined

let b = null;          // Explicitly no value
console.log(b);        // null

// console.log(c);     // ReferenceError: c is not defined

