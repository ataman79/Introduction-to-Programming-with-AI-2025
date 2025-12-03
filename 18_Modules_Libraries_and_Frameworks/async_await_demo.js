async function hello() {
    return "hello"; // Returns Promise.resolve("hello")
}

let result = await hello(); // result is a promise
console.log(result); // "hello"