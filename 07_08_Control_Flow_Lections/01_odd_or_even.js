function oddOrEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}


function oddOrEven(num) {
 // Use the ?: operator
 let res = (num % 2 == 0)
 ? "even" : "odd";
 return res;
}