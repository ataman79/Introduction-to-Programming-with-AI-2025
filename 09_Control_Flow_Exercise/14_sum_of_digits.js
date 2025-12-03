function sumDigits(number) {
  number = Math.abs(number);  // Handle negative numbers
  const numStr = number.toString();
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
}   

console.log(sumDigits(1712));      // 11
console.log(sumDigits(985625));    // 35


// Can be done with while loop using % 10 and Math.floor(/10)
function sumDigitsWhileLoop(number) {
  number = Math.abs(number);  // Handle negative numbers
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

console.log(sumDigitsWhileLoop(1712));     // 11
console.log(sumDigitsWhileLoop(985625));   // 35