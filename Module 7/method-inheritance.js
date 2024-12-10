// Method inheritance allows the child class to use methods from the parent class.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak();  // Output: Buddy barks

const animal = new Animal("Generic Animal");
animal.speak();  // Output: Generic Animal makes a sound.
