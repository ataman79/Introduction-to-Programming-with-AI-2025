const numbers = new Set([10, 20, 30, 30]);
console.log(numbers); // Set { 10, 20, 30 }

numbers.add(40);
console.log(numbers); // Set { 10, 20, 30, 40 }

numbers.add(20); // Ignored (already exists)
console.log(numbers); // Set { 10, 20, 30, 40 }

numbers.delete(20);
console.log(numbers); // Set { 10, 30, 40 }

console.log(numbers.has(30)); // true