// In non-strict mode in Node.js, 'this' inside a regular function refers to the global object.

// Example: Using 'this' in a non-strict function in Node.js
function showThis() {
    console.log(this);  // Output: global object (in Node.js)
}

showThis();  // Output: {}
// In non-strict mode, 'this' refers to the global object (empty object in Node.js environment).



// In strict mode, `this` is undefined inside regular functions. 
// To enable strict mode, use 'use strict' at the top of the file or inside a function.

// Example: Using 'this' in strict mode
"use strict"; // Enabling strict mode
function showThisStrict() {
    console.log(this);  // Output: undefined
}

showThisStrict();  // Output: undefined

// Without "use strict", this would refer to the global object, but here it's undefined.


// In the browser, 'this' refers to the global window object in regular functions.
// Example: Using 'this' inside a function in a browser environment.

function showThisBrowser() {
    console.log(this);  // In browsers, 'this' refers to the window object.
}

showThisBrowser();  // Output: window object (represents the browser's global object)

const obj = {
    name: "Bob",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);  // 'this' refers to obj
    }
};

obj.greet();  // Output: Hello, my name is Bob
