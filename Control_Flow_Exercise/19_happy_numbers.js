function happyNumbers(n) {
    for (let d1 = 1; d1 <= n; d1 ++) {
        for (let d2 = 1; d2 <= n; d2 ++) {
            for (let d3 = 1; d3 <= n; d3 ++) {
                for (let d4 = 1; d4 <= n; d4 ++) {
                    const sum = d1 + d2 + d3 + d4;
                    if (sum === n) {
                        console.log(`Happy number found: ${d1}${d2}${d3}${d4}`);
                    }
                }
            }
        }
    }
}

happyNumbers(4);