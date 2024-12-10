// Constructor functions are used to create objects with common properties and methods.
// The `new` keyword creates an instance of the object from the constructor function.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
    };
}

const alice = new Person("Alice", 30);
const bob = new Person("Bob", 25);

alice.greet();  // Output: Hi, I'm Alice and I am 30 years old.
bob.greet();    // Output: Hi, I'm Bob and I am 25 years old.
