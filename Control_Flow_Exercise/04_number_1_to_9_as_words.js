function numberToWords(num) {
  switch(num) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    default:
      return "out of range";
  }
}

// Example usage:
console.log(numberToWords(1));  // "one"
console.log(numberToWords(5));  // "five"
console.log(numberToWords(9));  // "nine"
console.log(numberToWords(0));  // "invalid input: number must be between 1 and 9"
console.log(numberToWords(10)); // "invalid input: number must be between 1 and 9"
