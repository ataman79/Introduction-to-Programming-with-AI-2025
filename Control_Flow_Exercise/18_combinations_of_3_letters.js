function threeLettersCombinations(char1, char2, char3) {
    let output = '';
    for (let first of [char1, char2, char3]) {
        for (let second of [char1, char2, char3]) {
            for (let third of [char1, char2, char3]) {       
                if (first !== second && second !== third && first !== third) {
                    output += `${first}${second}${third}, `;
                }
            }
        }
    }

    output = output.slice(0, -2); // Remove trailing comma and space
    console.log(output);
}

threeLettersCombinations('a', 'c', 'b');