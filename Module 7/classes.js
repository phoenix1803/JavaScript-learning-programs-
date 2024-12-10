// Classes are a syntactic sugar over constructor functions in ES6.
// They allow us to define objects with a more readable and maintainable syntax.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
    }

    updateAge(newAge) {
        this.age = newAge;
    }
}

const alice = new Person("Alice", 30);
const bob = new Person("Bob", 25);

alice.greet();  // Output: Hi, I'm Alice and I am 30 years old.
bob.greet();    // Output: Hi, I'm Bob and I am 25 years old.

alice.updateAge(31);
alice.greet();  // Output: Hi, I'm Alice and I am 31 years old.
