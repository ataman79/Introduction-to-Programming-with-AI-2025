function numberToWords(num) {
  // Validate input
  if (num < 0 || num > 100 || !Number.isInteger(num)) {
    return '>> out of range <<';
  }

  switch(true) {
    // Handle 0-9
    case num < 10:
      switch(num) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
      }
      break;

    // Handle 10-19
    case num < 20:
      switch(num) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
      }
      break;

    // Handle 20-99
    case num < 100:
      const tens = {
        2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
        6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
      };
      const onesDigit = num % 10;
      const tensDigit = Math.floor(num / 10);
      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      
      if (onesDigit === 0) {
        return tens[tensDigit];
      } else {
        return tens[tensDigit] + '-' + ones[onesDigit];
      }
      break;

    // Handle 100
    case num === 100:
      return 'one hundred';
  }
}

// Example usage:
console.log(numberToWords(0));   // "zero"
console.log(numberToWords(5));   // "five"
console.log(numberToWords(10));  // "ten"
console.log(numberToWords(12));  // "twelve"
console.log(numberToWords(25));  // "twenty five"
console.log(numberToWords(42));  // "forty two"
console.log(numberToWords(99));  // "ninety nine"
console.log(numberToWords(100)); // "one hundred"
console.log(numberToWords(101)); // "out of range"
