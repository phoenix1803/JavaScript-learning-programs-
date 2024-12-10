// Shallow copy for arrays can be done using `slice` or spread syntax.
// Deep copy requires manual copying of nested structures.

const arr = [[1, 2], [3, 4]];

// Shallow copy
const shallowCopy = arr.slice();
shallowCopy[0][0] = 99;
console.log(arr[0][0]); // 99 (shallow copy affects the original)

// Deep copy
const deepCopy = arr.map(subArray => [...subArray]);
deepCopy[0][0] = 42;
console.log(arr[0][0]); // 99 (deep copy does not affect the original)
