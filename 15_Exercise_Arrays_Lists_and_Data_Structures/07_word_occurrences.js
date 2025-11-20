function countWordOccurrences(text) {
    // Convert to lowercase and replace sentence delimiters and non-letter characters with spaces
    let cleanText = text.toLowerCase().replace(/[.!?,;]/g, ' ');
    
    // Split by non-letter characters to get words
    let words = cleanText.split(/[^a-z]+/).filter(word => word.length > 0);
    
    // Count occurrences of each word
    let wordCount = {};
    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    // Convert to array of [word, count] pairs
    let wordArray = Object.entries(wordCount);
    
    // Sort by count (descending), then alphabetically
    wordArray.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1]; // Sort by count descending
        }
        return a[0].localeCompare(b[0]); // Sort alphabetically
    });
    
    // Format and print output
    let result = '';
    for (let [word, count] of wordArray) {
        result += `${word} -> ${count} times\n`;
        console.log(`${word} -> ${count} times`);
    }
    return result;
}

// Test cases
countWordOccurrences('The,quick,brown fox jumps over the lazy dog. The dog was very lazy!');
console.log('\n---\n');
countWordOccurrences('Hello world! Hello everyone. World peace is important.');
