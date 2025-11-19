let x = 5, y = 10;
console.log(x, y); // 5, 10

[x, y] = [y, x]; // Swap x with y

//let temp = x;
//x = y;
//y = temp;

console.log(x, y); // 10, 5


function reverseArray(arr) {
 for (let left = 0; left < arr.length/2; left++) {
 const right = arr.length-1 - left;
 [arr[left], arr[right]] = [arr[right], arr[left]];
 }
}

let array = [1, 2, 3, 4, 5];
console.log("Before reverse:", array);

reverseArray(array);
console.log("After reverse:", array);