function reverseString(str: string): string {
    var letters: string[] = [];
    for (var i = str.length - 1; i >= 0; i--) {
        letters.push(str[i]);
    }
    var result: string = letters.join("");
    return result;
}

var testCases: string[] = ["hello", "TypeScript", "OpenAI", "ChatGPT"];

testCases.forEach((input: string) => {
    var reversed: string = reverseString(input);
    console.log(`The reversed string of "${input}" is: "${reversed}"`);
});
