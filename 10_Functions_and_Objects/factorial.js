function factorial(n) {
 if (n == 0) return 1; // Base case
 return n * factorial(n-1); // Recursive call
}
console.log(factorial(5)); // 120