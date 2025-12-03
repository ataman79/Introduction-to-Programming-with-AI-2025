function printNumsSums(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
        console.log(`num = ${i}, sum = ${sum}`);
    }
}
printNumsSums(6);