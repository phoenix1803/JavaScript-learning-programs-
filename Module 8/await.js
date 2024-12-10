// Async/Await is a cleaner way to handle Promises, making asynchronous code look synchronous.

const asyncTask = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Task succeeded");
            } else {
                reject("Task failed");
            }
        }, 2000);
    });
};

// Using async/await to handle the promise
async function runTasks() {
    try {
        const result = await asyncTask(true);
        console.log(result);  // Output: Task succeeded
    } catch (error) {
        console.error(error);  // Output: Task failed
    }
}

runTasks();
