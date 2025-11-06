function drinkPrice(drink, extra1, extra2) {
  let price = 0;

  // Check drink name and add its price
  if (drink === 'coffee') {
    price += 1.00;
  } else if (drink === 'tea') {
    price += 0.60;
  } else if (drink === 'soda') {
    price += 1.20;
  } else {
    return 'Invalid drink!';
  }

  // Check first extra and add its price
  if (extra1 !== undefined) {
    if (extra1 === 'sugar') {
      price += 0.40;
    } else if (extra1 === 'creamer') {
      price += 0.30;
    } else {
      return 'Invalid extra!';
    }
  }

  // Check second extra and add its price
  if (extra2 !== undefined) {
    if (extra2 === 'sugar') {
      price += 0.40;
    } else if (extra2 === 'creamer') {
      price += 0.30;
    } else {
      return 'Invalid extra!';
    }
  }

  // Return the final price in required format
  return price.toFixed(2);
}

// Example usage:
console.log(drinkPrice("coffee", "sugar"));               // "1.40"
console.log(drinkPrice("coffee", "creamer", "sugar"));    // "1.70"
console.log(drinkPrice("tea"));                           // "0.60"
console.log(drinkPrice("tea", "sugar"));                  // "1.00"
console.log(drinkPrice("water"));                         // "invalid drink!"
