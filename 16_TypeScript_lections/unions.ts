function padLeft(value: string | number,
 padChar: string, length: number): string {
 let strValue = value.toString();
 while (strValue.length < length) {
 strValue = padChar + strValue;
 }
 return strValue;
}


console.log(padLeft("X2", "0", 7)); // "00000X2"
console.log(padLeft(12.5, " ", 7)); // " 12.5"