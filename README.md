# Decentralized Staking Platform

A decentralized staking platform built on the BXC Chain that allows users to stake tokens, earn daily rewards, and participate in a multi-level referral system.

## Features

- Multi-level referral system (8 levels)
- Daily ROI (Return on Investment)
- 200% staking cap
- Restaking functionality
- Modern and responsive UI
- Secure smart contract implementation

## Prerequisites

- Node.js (v14 or higher)
- MetaMask or any Web3 wallet
- BXC Chain network configured in your wallet

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd staking-platform
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your configuration:
```
MNEMONIC=your_wallet_mnemonic
BSC_TESTNET_URL=https://data-seed-prebsc-1-s1.binance.org:8545
BSC_MAINNET_URL=https://bsc-dataseed.binance.org/
```

## Deployment

1. Compile the smart contracts:
```bash
npx hardhat compile
```

2. Deploy to BSC Testnet:
```bash
npx hardhat run scripts/deploy.js --network bscTestnet
```

3. Update the contract address and ABI in `app.js` with the deployed contract information.

## Usage

1. Start a local server to serve the frontend:
```bash
npx http-server
```

2. Open your browser and navigate to `http://localhost:8080`

3. Connect your wallet using MetaMask

4. Start staking and referring others!

## Smart Contract Features

### Staking
- Users can stake tokens with an optional referrer
- Daily ROI of 1%
- Maximum ROI cap of 200%

### Referral System
- 8 levels of referrals
- Level 1: 4% commission
- Level 2: 2% commission
- Levels 3-8: 1% commission each

### Security Features
- Reentrancy protection
- Access control
- Safe math operations
- Event logging for all important actions

## Frontend Features

- Wallet connection
- Staking interface
- Referral link generation
- Dashboard with real-time statistics
- Active stakes management
- ROI claiming
- Restaking functionality

## Testing

Run the test suite:
```bash
npx hardhat test
```

## Security Considerations

- Always verify the contract address before interacting
- Use a hardware wallet for large amounts
- Never share your private keys or mnemonic
- Test thoroughly on testnet before using mainnet

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 