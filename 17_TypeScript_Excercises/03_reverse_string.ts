function reverseString(str: string): string {
    let letters: string[] = [];
    for (let i = str.length - 1; i >= 0; i--) {
        letters.push(str[i]);
    }
    let result: string = letters.join("");
    return result;
}

console.log(reverseString("TypeScript"));
