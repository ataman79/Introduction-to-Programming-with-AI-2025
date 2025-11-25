const products = ["coffee", "water", "sweets", "peanuts", "juice"];
const prices = [
    ["Sofia", 0.50, 0.80, 1.45, 1.60, 2.50],
    ["Plovdiv", 0.40, 0.70, 1.30, 1.50, 2.40],
    ["Varna", 0.45, 0.70, 1.35, 1.55, 2.35]
];
const order = [["coffee", 2], ["juice", 1], ["sweets", 3]];

function calcPrices(products, priceList, location, order) {
    let results = [];
    let total = 0;
    const locationPrices = priceList.find(loc => loc[0] === location);
    for (const [product, quantity] of order) {
        const productIndex = products.indexOf(product) + 1;
        const price = locationPrices[productIndex];
        total += price * quantity;
        results.push(`Added ${quantity} x ${product} at ${price.toFixed(2)} each. Subtotal: ${(price * quantity).toFixed(2)}`);
    }
    results.push(`Total price for order in ${location}: ${total.toFixed(2)}`);
    return results.join('\n');
}

console.log(calcPrices(products, prices, "Sofia", order));
