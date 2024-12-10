// setTimeout executes a function once after a specified delay.
setTimeout(() => {
    console.log("This runs after 3 seconds.");
}, 3000);

// setInterval executes a function repeatedly with a fixed delay between each execution.
let counter = 0;
const intervalId = setInterval(() => {
    console.log(`Interval execution: ${++counter}`);
    if (counter === 3) {
        clearInterval(intervalId);  // Stops the interval after 3 executions
    }
}, 1000);

// Output:
// Interval execution: 1
// Interval execution: 2
// Interval execution: 3
