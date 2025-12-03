function printMultiplicationTable(n) {

    // COLUMN WIDTH RULES
    let firstColWidth = String(n).length + 1;   // row labels
    let colWidth = String(n * n).length + 1;    // other columns

    // ---- HEADER ----
    let header = "x".padStart(firstColWidth) + " |";
    for (let i = 1; i <= n; i++) {
        header += String(i).padStart(colWidth);
    }
    console.log(header);

    // ---- SEPARATOR ----
    console.log("-".repeat(firstColWidth) + "|"
                + "-".repeat(colWidth * n));

    // ---- BODY ROWS ----
    for (let r = 1; r <= n; r++) {
        let row = String(r).padStart(firstColWidth) + " |";
        for (let c = 1; c <= n; c++) {
            row += String(r * c).padStart(colWidth);
        }
        console.log(row);
    }
}

printMultiplicationTable(5);
printMultiplicationTable(12);