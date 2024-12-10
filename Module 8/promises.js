// Promises represent the eventual completion (or failure) of an asynchronous operation.
// A Promise can be in one of three states: pending, resolved, or rejected.

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

// Consuming the Promise using then() and catch()
asyncTask(true)
    .then((message) => {
        console.log(message);  // Output: Task succeeded
    })
    .catch((error) => {
        console.error(error);  // Output: Task failed (if success=false)
    });


    