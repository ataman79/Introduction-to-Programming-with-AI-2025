function calcStats(...numbers) {
let [min, max, sum] =
 [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, 0];
    for (num of numbers) {
    if (num < min) min = num;
    if (num > max) max = num;
        sum += num;
}
return { minnumber: min, max, average: sum / numbers.length, sum };
}
console.log(calcStats(5, 10, 15, 20, 25));
// { min: 5, max: 25, average: 15, sum: 75 }
console.log(calcStats(-3, 0, 3, 6, 9, 12));
// { min: -3, max: 12, average: 4.5, sum: 27 }      