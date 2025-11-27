var input = "hello";
if (typeof input === "string") {
    console.log(input.toUpperCase()); // OK after check
}
console.log(input.toUpperCase()); // Error: Object type 'unknown'
