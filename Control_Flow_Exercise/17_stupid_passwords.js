function stupidPasswords(n) {
    let passwords = [];
    
    // Outer loop: even numbers from 2 to n
    for (let i = 2; i <= n; i += 2) {
        // Inner loop: odd numbers from 1 to n
        for (let j = 1; j <= n; j += 2) {
            let product = i * j;
            let password = `${i}${j}${product}`;
            passwords.push(password);
        }
    }
    
    console.log(passwords.join(' '));
}

stupidPasswords(5);