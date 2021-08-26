# Crypto Asset Aggregator

## Overview

This package simplifies the process of consolidating your cryptocurrency holdings across various platforms into a unified view. 

## Installation

```bash
npm install crypto-asset-aggregator
```

## Usage

### ETH & ERC-20 Tokens

```javascript
const { getPortfolio, displayPortfolio } = require('crypto-asset-aggregator');

const addresses = [
  '0x1234...',
  '0x5678...',
];

(async () => {
  const portfolio = await getPortfolio({ addresses });
  displayPortfolio(portfolio);
})();
```

### Exchange Assets

```javascript
const { getPortfolio, displayPortfolio } = require('crypto-asset-aggregator');

const keys = {
  binance: {
    apiKey: '...',
    secret: '...',
  },
  // ... other exchanges
};

(async () => {
  const portfolio = await getPortfolio({ keys });
  displayPortfolio(portfolio);
})();
```

### Other Assets

```javascript
const { getPortfolio, displayPortfolio } = require('crypto-asset-aggregator');

const customAssets = {
  BTC: [1.5],
  ETH: [10, 20],
  // ... other assets
};

(async () => {
  const portfolio = await getPortfolio({ customAssets });
  displayPortfolio(portfolio);
})();
```

### Combined Portfolio

```javascript
const { getPortfolio, displayPortfolio } = require('crypto-asset-aggregator');

// ... (keys, addresses, customAssets)

(async () => {
  const portfolio = await getPortfolio({ 
    keys, 
    addresses, 
    customAssets,
    combineExchanges: true,
    combineWallets: true 
  });
  displayPortfolio(portfolio);
})(); 
```

### Custom Display

```javascript
const { getPortfolio } = require('crypto-asset-aggregator');

const myCustomDisplay = (portfolio) => {
  // ... your custom logic for displaying portfolio data
};

(async () => {
  const portfolio = await getPortfolio({ ... });
  myCustomDisplay(portfolio);
})();
```

### Advanced Features

*   **Custom Fetchers:**  Extend functionality to support exchanges or platforms not directly integrated.
*   **Contract/Futures/Margin Accounts:**  Provide custom fetchers or manually include these assets.
*   **Combined Outputs:**  Consolidate assets from exchanges and wallets for a simplified overview.

## API

The `getPortfolio` function accepts the following options:

| Option            | Type    | Description                                  |
|-------------------|---------|----------------------------------------------|
| keys             | Object  | Exchange API keys.                         |
| addresses        | Array   | Ethereum addresses for ERC-20 token tracking. |
| customAssets     | Object  | Manually defined assets.                     |
| combineExchanges | Boolean | Combine exchange data.                      |
| combineWallets   | Boolean | Combine wallet data.                        |
| verbose          | Boolean | Enable detailed logging.                     |


## Contributing

Contributions are welcome! Please submit pull requests or open issues for bug reports and feature requests.


## Acknowledgements

This package leverages open-source libraries including:

*   CCXT
*   CoinGecko API