function partialReverseArray(n, arr) {
    let subarray = arr.slice(0, n);
    let reversed = subarray.reverse();
    console.log(reversed.join(' '));
}

partialReverseArray(3, [10, 20, 30, 40, 50]);
partialReverseArray(4, [-1, 20, 99, 5]);
partialReverseArray(2, ["one", "two", 3, 4, 5]);