function extractTopElements(arr) {

    function isTopElement(array, index) {
        let currentElement = array[index];
        for (let right = index + 1; right < array.length; right++) {
            if (array[right] >= currentElement) {
                return false;
            }
        }
        return true;
    }   

    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (isTopElement(arr, i)) {
            output.push(arr[i]);
        }
    }
    return output.reverse();
}


console.log(extractTopElements([14, 24, 3, 19, 15, 17]));