// Inheritance allows one class to inherit properties and methods from another class.

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

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog("Buddy");
dog.speak();  // Output: Buddy barks.

const cat = new Cat("Whiskers");
cat.speak();  // Output: Whiskers meows.
