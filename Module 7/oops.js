// Object-Oriented Programming (OOP) organizes code into classes and objects. 
// An object is an instance of a class that contains data (properties) and methods (functions).

// Example: A person object with name, age, and greet method.
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    updateAge: function(newAge) {
        this.age = newAge;
    }
};

// Calling the greet method of the person object
person.greet();  // Output: Hello, my name is John and I am 30 years old.

// Updating age using method
person.updateAge(31);
person.greet();  // Output: Hello, my name is John and I am 31 years old.
