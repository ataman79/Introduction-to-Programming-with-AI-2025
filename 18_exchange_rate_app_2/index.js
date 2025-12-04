const { Convert } = require('easy-currencies');

const getExchangeRates = async () => {
  try {
    console.log("Exchange Rates: EUR to Other Currencies\n");
    
    // Fetch all rates with EUR as base
    const rates = await Convert().from('EUR').fetch();
    
    const currencies = ['USD', 'CHF', 'AUD', 'GBP'];
    
    currencies.forEach(currency => {
      const rate = rates.rates[currency];
      if (rate) {
        console.log(`EUR to ${currency}: ${rate.toFixed(2)}`);
      }
    });
  } catch (error) {
    console.error('Error fetching exchange rates:', error.message);
  }
};

getExchangeRates();