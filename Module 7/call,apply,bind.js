// Call, Apply, and Bind are methods that allow us to explicitly set the context of 'this' in a function.

// Using call to immediately invoke a function with a specified 'this' context
function greet() {
    console.log(`Hello, ${this.name}`);
}
const person = { name: "John" };
greet.call(person);  // Output: Hello, John

// Using apply: Same as call but with arguments passed as an array
greet.apply(person);  // Output: Hello, John

// Using bind: Returns a new function with 'this' bound to the specified context
const greetJohn = greet.bind(person);
greetJohn();  // Output: Hello, John
