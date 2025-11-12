const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const average = (a, b) => (a + b) / 2;
const sign = x => (x < 0) ? -1 : (x > 0) ? 1 : 0;



console.log(sum(2, 5), mult(2, 5)); // 7 10
console.log(average(sum(2, 5), mult(2, 5))); // 8.5
console.log(sign(3), sign(0), sign(-4)); // 1 0 -1

console.log(function(x) { return x * x });
// [Function (anonymous)] (unnamed function)