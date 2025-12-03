function seq2k1(n) {
    let seq = 1;
    let output = "";

    while (seq <= n) {
        if (output !== "") {
            output += ", ";
        }
        output += seq;

        seq = 2 * seq + 1;
    }
    return output;
}

console.log(seq2k1(5));      // 1, 3
console.log(seq2k1(15));     // 1, 3, 7, 15
console.log(seq2k1(32));     // 1, 3, 7, 15, 31
console.log(seq2k1(3000));   // 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047
