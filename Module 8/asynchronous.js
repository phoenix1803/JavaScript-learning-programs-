// Asynchronous programming allows non-blocking execution, meaning tasks can run concurrently.
// It is crucial for I/O operations (like reading files or fetching data) to avoid blocking the main thread.

console.log("Start");

// Simulating an asynchronous operation using setTimeout
setTimeout(() => {
    console.log("This runs after 2 seconds (asynchronous)");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds (asynchronous)


// Synchronous file reading blocks the execution of the program until the file is read completely.

const fs = require("fs"); // File system module in Node.js

console.log("Start reading file...");

const data = fs.readFileSync("example.txt", "utf8");
console.log(data);  // Output: Contents of the file

console.log("End reading file."); 

// Note: The program halts at `readFileSync` until the file is read completely.

// Asynchronous file reading allows the program to continue executing while the file is being read.

const fs = require("fs");

console.log("Start reading file...");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data); // Output: Contents of the file
});

console.log("End reading file."); 

// Output:
// Start reading file...
// End reading file.
// Contents of the file
