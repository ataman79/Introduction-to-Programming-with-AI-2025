function triangle(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += '*'.repeat(i) + '\n';
    }
    return result;
}  

console.log(triangle(30));