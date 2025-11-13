function splitSentences(text, processsentenceCallback) {
    let sentence = '';
    for (let char of text) {
        sentence += char;
        if (char === '.' || char === '!' || char === '?') {
            processsentenceCallback(sentence.trim());
            sentence = '';
        }
    }
}

// Callback function to process each sentence
function processSentence(sentence) {
    console.log(sentence);
}

// Example usage:
splitSentences("I am the first sentence. Am I the second sentence? I am the third sentence!", processSentence);

// Action:
// processSentence("I am the first sentence.")
// processSentence("Am I the second sentence?")
// processSentence("I am the third sentence!")
