// Encapsulation involves hiding the internal details of an object and providing access through public methods.

class Person {
    #name;  // Private field (encapsulation)
    #age;   // Private field (encapsulation)

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;  // Access private field using public method
    }

    getAge() {
        return this.#age;
    }

    updateAge(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        }
    }
}

const person = new Person("Alice", 30);
console.log(person.getName());  // Output: Alice
console.log(person.getAge());   // Output: 30

person.updateAge(31);
console.log(person.getAge());   // Output: 31
