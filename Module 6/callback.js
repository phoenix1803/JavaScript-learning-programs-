function greet(name, callback) {
    callback(`Hello, ${name}!`);
}

greet("Prakhar", message => console.log(message));
