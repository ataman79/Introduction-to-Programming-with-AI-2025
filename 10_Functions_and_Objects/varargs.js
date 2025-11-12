function sum(...numbers) {
let total = 0;
for (let num of numbers)
total += num;
return total;
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10, 15)); // 30
console.log(sum()); // 0
console.log(sum(7)); // 7
console.log(sum(1, -1, 2, -2, 3)); // 3
console.log(sum(100, 200, 300, 400, 500)); // 1500  