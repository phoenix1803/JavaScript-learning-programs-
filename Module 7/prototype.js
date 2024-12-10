// The prototype is an internal property of every object that allows objects to inherit properties and methods.
// You can add methods to an object’s prototype to allow all instances of that object to access those methods.

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();  // Output: Hello, my name is John

// Adding another method to the prototype
Person.prototype.sayGoodbye = function() {
    console.log(`${this.name} says goodbye.`);
};

john.sayGoodbye();  // Output: John says goodbye.
