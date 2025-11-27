function printCurrentDate(): void {
    let date = new Date();
    console.log(date);
}


printCurrentDate();

export { printCurrentDate };


function sumNumbers(nums: number[]): number {
 return nums.reduce((sum, x) => sum + x, 0);
}


console.log(sumNumbers([1, 2, 3, 4, 5]));

