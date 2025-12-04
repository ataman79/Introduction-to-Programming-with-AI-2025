const BinanceClient = require('binance-api-node').default;

const client = BinanceClient();

const coins = ['BTC', 'ETH', 'XRP', 'BNB', 'ADA', 'SOL', 'DOGE', 'MATIC'];

async function getPrices() {
  try {
    console.log("Fetching cryptocurrency prices from Binance...\n");
    
    for (const coin of coins) {
      try {
        const price = await client.avgPrice({ symbol: `${coin}USDT` });
        console.log(`${coin}: $${parseFloat(price.price).toFixed(2)} USD`);
      } catch (error) {
        console.log(`${coin}: Price not available`);
      }
    }
  } catch (error) {
    console.error('Error fetching prices:', error.message);
  }
}

getPrices();
