function greaterOfTwo(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Example usage:
console.log(greaterOfTwo(5, 10));    // 10
console.log(greaterOfTwo(25, 15));   // 25
console.log(greaterOfTwo(7, 7));     // 7 (returns num2 when equal)
console.log(greaterOfTwo(-3, -8));   // -3
console.log(greaterOfTwo(0, -5));    // 0
