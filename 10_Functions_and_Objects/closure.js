function createCounter(start) {
 let count = start; // Internal state: count
 return function() {
 return count++;
 }
}
let counter1 = createCounter(100);
console.log(counter1(), counter1()); // 100 101
let counter2 = createCounter(1);
console.log(counter2(), counter2()); // 1 2