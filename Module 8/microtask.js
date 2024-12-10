// The microtask queue handles high-priority callbacks (e.g., Promises).
// Microtasks are executed before any pending tasks in the regular event queue.

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
// Promises (microtasks) are executed before setTimeout (macrotasks).
