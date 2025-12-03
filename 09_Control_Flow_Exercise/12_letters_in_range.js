function lettersInRange(startLetter, endLetter) {
    let result = '';
    for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}

// Example usage:
console.log(lettersInRange('a','e'));  // Output: "a b c d e"