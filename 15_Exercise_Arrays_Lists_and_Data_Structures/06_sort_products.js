function sortProducts(products, formatAsHTML = false) {
    let sorted = products.sort((a, b) => a.localeCompare(b));
    
    if (formatAsHTML) {
        let result = '<ol>\n';
        for (let i = 0; i < sorted.length; i++) {
            result += `  <li>${sorted[i]}</li>\n`;
        }
        result += '</ol>';
        return result;
    } else {
        let result = '';
        for (let i = 0; i < sorted.length; i++) {
            result += `${i + 1}.${sorted[i]}\n`;
        }
        return result;
    }
}

console.log(sortProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));
console.log(sortProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'], true));