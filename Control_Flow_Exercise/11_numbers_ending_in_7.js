function numbersEndingIn7(n) {
   

    for (let i = 7; i <= n; i += 10) {
        output += i + ' ';
        sum += i;
        console.log(i);
    }

    return output.trim() + ' = ' + sum;
}

// Example usage:
console.log(numbersEndingIn7(100));  // "7 17 27 37 47 57 67 77 87 97 = 490"