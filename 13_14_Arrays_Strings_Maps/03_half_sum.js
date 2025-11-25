function halfSum(arr) {
    let leftSum = 0;
    let leftHalfIndex = Math.floor(arr.length / 2);
    for (let i=0; i<leftHalfIndex; i++) {
        leftSum += arr[i];
    }
    let rightSum = 0;
    let rightHalfIndex = Math.ceil(arr.length / 2);
    for (let i = rightHalfIndex; i < arr.length; i++) {
        rightSum += arr[i];
    }
    if (leftSum === rightSum) {
        console.log(`left sum (${leftSum}) = right sum (${rightSum}) `);
    } else if (leftSum < rightSum) { 

        console.log(`left sum (${leftSum}) < right sum (${rightSum}) `);
    } else {
        console.log(`left sum (${leftSum}) > right sum (${rightSum}) `);
    }
}

halfSum([10, 25, 20, 15]);      // Left half sum: 20