//array utility library of functions

export function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);

}

export function avg(arr) {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
}

export function min(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

export function max(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

//export { sum, avg, min, max };


