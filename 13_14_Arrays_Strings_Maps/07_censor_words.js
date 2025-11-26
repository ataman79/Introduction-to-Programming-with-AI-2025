function censorWords(text, bannedWords) {
    let result = text;
    
    bannedWords.forEach(word => {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp('(?:^|\\W)(' + escapedWord + ')(?=\\W|$)', 'gi');
        result = result.replace(regex, (match, p1) => {
            const prefix = match[0].match(/\W/) ? match[0] : '';
            return prefix + '*'.repeat(p1.length);
        });
    });
    
    return result;
}

console.log(censorWords("We love coding in JavaScript, Python, C# and Java.", ['C#', 'Java']));
