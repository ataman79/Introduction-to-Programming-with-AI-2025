function bigFactorial(n) {

    function factorial(n) {
        if (n == 0) return 1n;
        return BigInt(n) * factorial(n - 1);
    }

    return String(factorial(n));
 
}

console.log(bigFactorial(500)); // "120"