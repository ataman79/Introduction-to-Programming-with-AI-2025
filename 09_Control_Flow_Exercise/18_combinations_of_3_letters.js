function threeLettersCombinations(startLetter, endLetter, excludedLetter) {
    let combinations = [];
    
    // Generate array of letters from startLetter to endLetter, excluding excludedLetter
    let letters = [];
    for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++) {
        let letter = String.fromCharCode(i);
        if (letter !== excludedLetter) {
            letters.push(letter);
        }
    }
    
    // Generate all 3-letter combinations
    for (let first of letters) {
        for (let second of letters) {
            for (let third of letters) {
                combinations.push(`${first}${second}${third}`);
            }
        }
    }
    
    // Print total count and combinations
    console.log(`Total count: ${combinations.length}`);
    console.log(combinations.join(' '));
}

threeLettersCombinations('a', 'c', 'b');