function christmasTree(n) {
    let tree = '';
    // Build the tree part - pyramid of increasing odd numbers
    for (let stars = 1; stars <= n; stars += 2) {
        const spaces = Math.floor((n - stars) / 2);
        tree += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    }
    
    // Add the trunk
    const trunkSpaces = Math.floor((n - 1) / 2);
    tree += ' '.repeat(trunkSpaces) + '|';
    return tree;
}
console.log(christmasTree(7));