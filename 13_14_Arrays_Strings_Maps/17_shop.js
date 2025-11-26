


let shop = {
 products: ['bread', 'butter', 'eggs', 'yogurt'],
 prices: { butter:5.30, eggs:0.40, bread:3.50, yogurt:1.65 },
 locations: [
 { name:"Sofia", lat:42.657, lng:23.316, sales: [ ['bread',2],
 ['eggs',5], ['butter',1], ['bread',2], ['yogurt',2] ]},
 { name:"Plovdiv", lat:42.145, lng:24.779, sales: [ ['eggs',3],
 ['butter',2], ['bread',1], ['yogurt',4], ['bread',3] ] }
 ]
}

// Calculate total incomes by location and product
function calculateIncomes(shop) {
  const incomeByLocation = {};
  shop.locations.forEach(location => {
    incomeByLocation[location.name] = {};
    location.sales.forEach(([product, quantity]) => {
      const price = shop.prices[product];
      const income = price * quantity;
      incomeByLocation[location.name][product] =
        (incomeByLocation[location.name][product] || 0) + income;
    });
  });
  return incomeByLocation;
}

const incomesByLocationAndProduct = calculateIncomes(shop);
console.log('Incomes by Location and Product:');
Object.entries(incomesByLocationAndProduct).forEach(([location, products]) => {
  console.log(`\n${location}:`);
  Object.entries(products).forEach(([product, income]) => {
    console.log(`  ${product}: $${income.toFixed(2)}`);
  });
});
