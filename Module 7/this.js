// 'this' refers to the current object or context in which a function is executed.
// It helps access the properties and methods of that object.

// Example: Using 'this' in a method inside an object.
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();  // Output: Hello, my name is Alice

// In the context of an event listener, 'this' refers to the object triggering the event
const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = function() {
    console.log(this.innerText);  // 'this' refers to the button clicked
};
document.body.appendChild(button);  // Clicking the button will log 'Click Me'
