function greaterOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Example usage:
console.log(greaterOfThree(5, 10, 3));     // 10
console.log(greaterOfThree(25, 15, 30));   // 30
console.log(greaterOfThree(7, 7, 7));      // 7 (all equal)
console.log(greaterOfThree(-3, -8, -1));   // -1
console.log(greaterOfThree(0, -5, 12));    // 12
console.log(greaterOfThree(100, 100, 50)); // 100 (first of equal values)
