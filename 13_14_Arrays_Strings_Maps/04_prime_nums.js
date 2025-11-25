function findPrimeNumbers(start, end) {
    let primes = [];
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        if (num <= 1) isPrime = false;
        else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}


let start = 10;
let end = 50;
let primes = findPrimeNumbers(start, end);
console.log(`Prime numbers between ${start} and ${end}: ${primes.join(", ")}`);
console.log(findPrimeNumbers(10, 50).join(", "));
    
// Example output: Prime numbers between 10 and 50: 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47

console.log(findPrimeNumbers(100, 150).join(", "));
// 101, 103, 107, 109, 113, 127, 131, 137, 139, 149