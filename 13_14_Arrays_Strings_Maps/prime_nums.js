//write a fucion to fins all prime numbers in given raange start..end
function findPrimeNumbers(start, end) {
    let primeNumbers = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let start = 10;
let end = 50;
let primes = findPrimeNumbers(start, end);
console.log(`Prime numbers between ${start} and ${end}: ${primes.join(", ")}`);
// Example output: Prime numbers between 10 and 50: 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47