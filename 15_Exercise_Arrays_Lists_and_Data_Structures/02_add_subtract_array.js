function addSubtractArray(arr) {
    function sum(array) {
        let total = 0;
        for (let num of array) {
            total += num;
        }
        return total;
    }

    let originSum = sum(arr);

//modify array
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }

    let modifiedSum = sum(arr);
    console.log(arr);
    console.log("Sum original:", originSum);
    console.log("Sum modified:", modifiedSum);
}



addSubtractArray([5, 15, 23, 56, 35]);
 