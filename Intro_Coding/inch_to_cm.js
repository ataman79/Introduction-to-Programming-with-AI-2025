function inchToCm(inches) {
  // Conversion factor: 1 inch = 2.54 cm
  const cm = inches * 2.54;
  
  // Round to 2 decimal places
  return Math.round(cm * 100) / 100;
}

// Examples
console.log(inchToCm(1));      // 2.54
console.log(inchToCm(10));     // 25.4
console.log(inchToCm(5.5));    // 13.97
console.log(inchToCm(12.75));  // 32.39
