// The Event Loop handles asynchronous operations by executing callback functions from the queue.

// Example to illustrate event loop behavior:
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("End");

// Output:
// Start
// End
// Promise callback
// Timeout callback

// Explanation:
// 1. "Start" and "End" run first (synchronous code).
// 2. Promise callbacks are executed before timeout callbacks due to the microtask queue.
