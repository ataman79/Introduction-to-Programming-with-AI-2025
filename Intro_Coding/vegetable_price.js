function vegetablesPrice(tomatoesKg, cucumbersKg) {
  // Fixed prices (without VAT)
  const tomatoPrice = 2.4;  // EUR per kg
  const cucumberPrice = 1.9;  // EUR per kg
  const vatRate = 0.20;  // 20% VAT
  
  // Calculate individual prices
  const tomatoesTotal = tomatoesKg * tomatoPrice;
  const cucumbersTotal = cucumbersKg * cucumberPrice;
  
  // Calculate totals
  const total = tomatoesTotal + cucumbersTotal;
  const vatAmount = total * vatRate;
  const totalWithVAT = total + vatAmount;
  
  // Round to 2 decimal places
  const tomatoesTotalRounded = Math.round(tomatoesTotal * 100) / 100;
  const cucumbersTotalRounded = Math.round(cucumbersTotal * 100) / 100;
  const totalRounded = Math.round(total * 100) / 100;
  const vatAmountRounded = Math.round(vatAmount * 100) / 100;
  const totalWithVATRounded = Math.round(totalWithVAT * 100) / 100;
  
  // Return formatted result
  return `Tomatoes: ${tomatoesTotalRounded.toFixed(2)} EUR
Cucumbers: ${cucumbersTotalRounded.toFixed(2)} EUR
Total: ${totalRounded.toFixed(2)} EUR
20% VAT: ${vatAmountRounded.toFixed(2)} EUR
Total price (with VAT): ${totalWithVATRounded.toFixed(2)} EUR`;
}

// Examples
console.log(vegetablesPrice(2, 3));
console.log('---');
console.log(vegetablesPrice(5, 4));
console.log('---');
console.log(vegetablesPrice(10, 7.5));
