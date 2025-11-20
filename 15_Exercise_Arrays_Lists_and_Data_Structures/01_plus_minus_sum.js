function plusMinusSum(arr) {
  let sum = arr[0];
  let operation = `${arr[0]}`;

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 1) {
      operation += ` + ${arr[i]}`;
      sum += arr[i];
    } else {
      operation += ` - ${arr[i]}`;
      sum -= arr[i];
    }
  }

  operation += ` = ${sum}`;
  console.log(operation);
}

plusMinusSum([5, 10, 3]);
plusMinusSum([5, 15, 23, 56, 35, 3]);
plusMinusSum([5]);