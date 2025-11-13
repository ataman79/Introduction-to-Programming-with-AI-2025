function filterNumbers(...numbers) {
    // Predicate: sum of digits = 10
    let sumOfDigitsEquals10 = function(num) {
        let digitSum = 0;
        let absNum = Math.abs(num);
        while (absNum > 0) {
            digitSum += absNum % 10;
            absNum = Math.floor(absNum / 10);
        }
        return digitSum === 10;
    };

    // Predicate: contains digit 5
    let containsDigit5 = function(num) {
        return Math.abs(num).toString().includes('5');
    };

    // Predicate: have at least 3 digits
    let hasAtLeast3Digits = function(num) {
        return Math.abs(num).toString().length >= 3;
    };

    // Combined predicate: all criteria must be true
    let matchesAllCriteria = function(num) {
        return sumOfDigitsEquals10(num) && 
               containsDigit5(num) && 
               hasAtLeast3Digits(num);
    };

    // Filter and print matching numbers
    let matchingNumbers = numbers.filter(matchesAllCriteria);
    
   
    matchingNumbers.forEach(num => console.log(num));
}

// Example usage:
filterNumbers(253, 75, -415, 198, 532, 38);

// Output:
// 253
// -415
// 532
