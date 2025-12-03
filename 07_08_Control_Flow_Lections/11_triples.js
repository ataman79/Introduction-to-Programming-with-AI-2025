function triples(n) {
    for (let a = 1; a <= n; a++) {           // first number
        for (let b = a + 1; b <= n; b++) {   // second number
            for (let c = b + 1; c <= n; c++) { // third number
                console.log(`${a} ${b} ${c}`);
            }
        }
    }
}
triples(3);
triples(5); 