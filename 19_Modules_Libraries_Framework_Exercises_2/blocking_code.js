function blockingFindSum(limit) {
    let sum = 0, result = "0";
    for (let i = 1; i <= limit; i++) {
        if (i % 1_000_000 === 0) {
            console.log(`Calculating [${Math.round((i/limit)*100)}%]`);
        }
        sum += i;
        result += " + " + i;
    }
    return result + " = " + sum;
}

console.log("Start...");
const result = blockingFindSum(30_000_000);
console.log("Done.", result.length);
