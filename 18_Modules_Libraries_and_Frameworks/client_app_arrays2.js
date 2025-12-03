import * as ArrayUtils from './array_functions.js';

function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0n);
}


let nums = [10, 5, 8, 3, 15];
console.log("Array:", nums);
console.log("Sum:", ArrayUtils.sum(nums));
console.log("Min:", ArrayUtils.min(nums));
console.log("Max:", ArrayUtils.max(nums));
console.log("Avg:", ArrayUtils.avg(nums)); // avg is not imported, will cause an error if uncommented


let numsBigInt = [10n, 5n, 8n, 3n, 15n];
console.log("\nArray (BigInt):", numsBigInt);
console.log("Sum (BigInt):", sum(numsBigInt));
// Avg for BigInt is not implemented in array_functions.js, so we skip it here