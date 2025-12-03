import ArrayUtils from './array_utils.js';
// Import the "default export" member

const numbers = [10, 20, 30, 40, 50];

console.log("Array Utils version:", ArrayUtils.moduleVersion);
console.log("Sum:", ArrayUtils.sum(numbers));
console.log("Min:", ArrayUtils.min(numbers));
console.log("Max:", ArrayUtils.max(numbers));
console.log("Average:", ArrayUtils.avg(numbers));
