function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);

}

function avg(arr) {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
}

function min(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

function max(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

const mVer = "1.0.0";

const arrUtilsModule = {
    moduleVersion: mVer,
    sum, min, max, avg
};

export default arrUtilsModule;