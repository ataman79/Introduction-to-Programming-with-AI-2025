let countries = {
 "US": "Unites States",
 "ES": "Spain",
 "DE": "Germany",
 "BG": "Bulgaria"
};


console.log(countries["BG"]);

console.log(countries["XX"]);

for (let code in countries) // Iterate through keys
console.log(code, "->", countries[code]);

console.log("Keys:", Object.keys(countries));
console.log("Values:", Object.values(countries));

for (const [key, val] of Object.entries(countries))
 console.log(`${key} -> ${val}`);

for (let code in countries) // Iterate through keys
console.log(code, "->", countries[code]);