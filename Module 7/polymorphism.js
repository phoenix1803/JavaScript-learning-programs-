// Polymorphism allows methods to behave differently based on the object calling them.

class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
dog.speak();  // Output: Dog barks

const cat = new Cat();
cat.speak();  // Output: Cat meows

const animal = new Animal();
animal.speak();  // Output: Animal makes a sound
