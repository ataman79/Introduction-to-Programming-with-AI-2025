// let personName: string = "Hello";
// console.log(personName);

// function addNymbers(a: number, b: number): number {
//     return a + b;
// }

// console.log(addNymbers(5, 10));
// console.log(addNymbers("5" , 10));


// let age = 25;
// console.log(age);


function add (X: unknown, y: unknown): unknown {
    if (typeof X === "number" && typeof y === "number") {
        return X + y;
    }
    return undefined;
}

console.log(add(5, 10));
console.log(add("5", 10));
