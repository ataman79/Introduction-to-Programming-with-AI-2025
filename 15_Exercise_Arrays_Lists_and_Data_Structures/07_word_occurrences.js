function countWords(input) {
    // Join lines into one text block (input is array of strings)
    const text = input.join(" ");

    // Convert to lowercase and split by any non-letter characters
    const words = text
        .toLowerCase()
        .split(/[^a-z]+/)
        .filter(w => w.length > 0);

    // Count occurrences
    const counts = {};

    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }

    // Convert to array and sort
    const sorted = Object.entries(counts)
        .sort((a, b) => {
            const [wordA, countA] = a;
            const [wordB, countB] = b;

            // First: by count descending
            if (countB !== countA) return countB - countA;

            // Second: alphabetically
            return wordA.localeCompare(wordB);
        });

    // Print output
    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

// Example usage:
countWords([
    "This is a test. This test is only a test.",
    "In the event of an actual emergency,",
    "the attention signal you just heard would have been followed by official information."
]);

