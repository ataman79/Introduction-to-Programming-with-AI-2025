function aggregate(start, end, operation) {
 for (var result = start, i = start+1; i <= end; i++)
 result = operation(result, i);
 return result;
}
console.log(aggregate(1, 5, function(a, b) { return a + b; })); // 15
console.log(aggregate(1, 5, function(a, b) { return a * b; })); // 120
console.log(aggregate(1, 5, function(a, b) { return a > b ? a : b; })); // 5
console.log(aggregate(1, 5, function(a, b) { return a < b ? a : b; })); // 1
console.log(aggregate(1, 5, function(a, b) { return a ^ b; })); // 1
// You can also use named functions
function sum(a, b) { return a + b; } 