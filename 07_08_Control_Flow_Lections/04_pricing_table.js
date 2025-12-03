function getPrice(location, product) {
    if (location === "Sofia") {
        if (product === "coffee") return 0.50;
        else if (product === "water") return 0.80;
        else if (product === "sweets") return 1.45;
        else if (product === "peanuts") return 1.60;
    } 
    else if (location === "Plovdiv") {
        if (product === "coffee") return 0.40;
        else if (product === "water") return 0.70;
        else if (product === "sweets") return 1.30;
        else if (product === "peanuts") return 1.50;
    } 
    else if (location === "Varna") {
        if (product === "coffee") return 0.45;
        else if (product === "water") return 0.70;
        else if (product === "sweets") return 1.35;
        else if (product === "peanuts") return 1.55;
    }

    // Invalid city or product
    return undefined;
}

console.log(getPrice("Sofia", "coffee")); // 0.50
console.log(getPrice("Plovdiv", "sweets")); // 1.30
console.log(getPrice("Varna", "peanuts")); // 1.55
console.log(getPrice("Burgas", "water")); // undefined
console.log(getPrice("Sofia", "bread")); // undefined   
