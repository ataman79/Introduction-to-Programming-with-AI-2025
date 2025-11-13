

function printFibonacciNumbers(num) {
function fibonacci(n) {
    let a = 1n, b= 1n;
    for (let i = 2; i <= n; i++) {
        sum= a + b;
        a = b;
        b = sum;
    }
    return b;
}

    let fib=fibonacci(num);
    console.log(`Fib(${num}) = ${fib}`);
}

printFibonacciNumbers(100);
printFibonacciNumbers(200);
printFibonacciNumbers(300); 
