const add = function(a, b) {
 return a + b;
}
console.log(add); // [Function: add]
console.log(add(2, 3)); // 5
let sum = add, sqrt = Math.sqrt;
console.log(sqrt(sum(8, 1))); // 3

console.log(typeof add); // function
console.log(typeof sqrt); // function