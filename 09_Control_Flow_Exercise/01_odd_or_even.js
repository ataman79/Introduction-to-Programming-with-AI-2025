function oddOrEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Example usage:
console.log(oddOrEven(4));  // "even"
console.log(oddOrEven(7));  // "odd"
console.log(oddOrEven(0));  // "even"
console.log(oddOrEven(-3)); // "odd"
