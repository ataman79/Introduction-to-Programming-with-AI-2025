function sumVowels(text) {
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        const letter = text[i].toLowerCase();
        if (letter === 'a') {
            sum += 1;
        } else if (letter === 'e') {
            sum += 2;
        } else if (letter === 'i') {
            sum += 3;
        } else if (letter === 'o') {
            sum += 4;
        } else if (letter === 'u') {
            sum += 5;
        }   
    }   
    return sum;
}


console.log(sumVowels("SoftUni"));  // 12