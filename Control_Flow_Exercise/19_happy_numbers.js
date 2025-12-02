function happyNumbers(n) {
    let results = [];
    
    for (let d1 = 1; d1 <= n && d1 <= 9; d1 ++) {
        let d2 = n - d1;  // d2 = n - d1, so d1 + d2 = n
        if (d2 >= 0 && d2 <= 9) {  // Ensure d2 is a valid digit
            for (let d3 = 0; d3 <= n && d3 <= 9; d3 ++) {
                let d4 = n - d3;  // d4 = n - d3, so d3 + d4 = n
                if (d4 >= 0 && d4 <= 9) {  // Ensure d4 is a valid digit
                    results.push(`${d1}${d2}${d3}${d4}`);
                }
            }
        }
    }
    
    console.log(results.join(' '));
}

happyNumbers(4);