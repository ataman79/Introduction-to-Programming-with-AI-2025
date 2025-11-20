function findBalanceIndex(arr) {
    // If array is empty, return 'no'
    if (arr.length === 0) {
        return 'no';
    }

    // If array has only one element, it's always balanced (left=0, right=0)
    if (arr.length === 1) {
        return 0;
    }

    // Calculate total sum of array
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    // Left sum starts at 0
    let leftSum = 0;

    // Check each element as potential balance point
    for (let i = 0; i < arr.length; i++) {
        // Right sum is total sum minus left sum minus current element
        let rightSum = totalSum - leftSum - arr[i];
        // Check if left sum equals right sum
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += arr[i];
    }
    return 'no';
}

console.log(findBalanceIndex([1, 2, 3, 4, 6])); // Output: 3
console.log(findBalanceIndex([1, 2]));    // Output: 2
