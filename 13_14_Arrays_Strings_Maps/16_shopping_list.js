    function processShoppingList(needed, available, prices) {
        let total = 0;
        for (const item in needed) {
            const availableQty = available[item] || 0;
            const missingQty = needed[item] - availableQty;
            if (missingQty > 0) {
                let cost = missingQty * prices[item];
                console.log(`${missingQty} x ${item} -> ${cost.toFixed(2)}`);
                total += cost;
            }
        }
        console.log(`Total: ${total.toFixed(2)}`);
    } 
// Test with the provided example
let needed = { "apple": 4, "banana": 2, "orange": 3 };
let available = { "apple": 1, "banana": 2 };
let prices = { "apple": 0.5, "banana": 0.3, "orange": 0.8 };
processShoppingList(needed, available, prices); 