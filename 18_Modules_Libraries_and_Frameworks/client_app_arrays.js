import {sum, min, max} from './array_functions.js';


let nums = [10, 5, 8, 3, 15];
console.log("Array:", nums);
console.log("Sum:", sum(nums));
console.log("Min:", min(nums));
console.log("Max:", max(nums));
//console.log("Avg:", avg(nums)); // avg is not imported, will cause an error if uncommented