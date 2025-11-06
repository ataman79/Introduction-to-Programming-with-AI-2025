function sumDigits(number) {
  const numStr = number.toString();
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
}   

console.log(sumDigits(985625));


// can be done with use while loop % 10 and //10
function sumDigitsWhileLoop(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

console.log(sumDigitsWhileLoop(985625));