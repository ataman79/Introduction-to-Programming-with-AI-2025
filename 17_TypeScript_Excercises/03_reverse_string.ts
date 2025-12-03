function reverseString(str: string): string {
    const reversedStr = str.split("").reverse().join("");
    const message = `The reversed string of "${str}" is: "${reversedStr}"`;
    console.log(message);
    return message;
}

// Example usage:
console.log(reverseString("hello"));
