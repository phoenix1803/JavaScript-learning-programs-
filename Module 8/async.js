// Async code can be executed in sequence using Promises or async/await.

function asyncTask1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}

function asyncTask2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 500);
    });
}

// Using Promises to execute tasks serially
asyncTask1().then(() => asyncTask2());

// Output:
// Task 1 completed (after 1 second)
// Task 2 completed (after another 0.5 seconds)
