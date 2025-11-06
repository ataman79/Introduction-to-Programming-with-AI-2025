function numbersSum(n) {
    let sum = 0;
    let output = '';
    
    // Build the string representation and calculate sum
    for (let i = 1; i <= n; i++) {
        sum += i;
        if (i === n) {
            output += i;
        } else {
            output += i + ' + ';
        }
    }
    
    // Return in the format: "1 + 2 + 3 = 6"
    return output + ' = ' + sum;
}   

// Example usage:
console.log(numbersSum(1200));  // 1 + 2 + 3 = 6

