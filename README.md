# Decentralized Staking Platform

A decentralized staking platform built on the BXC Chain that allows users to stake tokens, earn daily rewards, and participate in a multi-level referral system.

[![License](https://img.shields.io/github/license/Bannysukumar/decentralized-staking)](https://github.com/Bannysukumar/decentralized-staking/blob/main/LICENSE) [![Stars](https://img.shields.io/github/stars/Bannysukumar/decentralized-staking)](https://github.com/Bannysukumar/decentralized-staking/stargazers) [![Last commit](https://img.shields.io/github/last-commit/Bannysukumar/decentralized-staking)](https://github.com/Bannysukumar/decentralized-staking/commits/main)

## Overview

A decentralized staking platform built on the BXC Chain that allows users to stake tokens, earn daily rewards, and participate in a multi-level referral system.


What is actually in the repository: `contracts/BXCToken.sol`, `contracts/StakingPlatform.sol`, `.vscode/`, `contracts/`, `scripts/`. GitHub reports the primary language as HTML.

Published site recorded on the repository: https://decentralized-staking-bay.vercel.app

## Features


- Multi-level referral system (8 levels)
- Daily ROI (Return on Investment)
- 200% staking cap
- Restaking functionality
- Modern and responsive UI
- Secure smart contract implementation
- BXCToken contract with mint, burn
- StakingPlatform contract with stake

## Tech Stack

| Technology | Where it shows up |
|---|---|
| Solidity | Smart contracts |
| Hardhat | Solidity compile and deploy scripts |
| ethers.js or web3.js | Wallet and contract calls from the browser or app |
| OpenZeppelin | Smart-contract base contracts |

## Project Architecture

Browser page → Solidity contract. The HTML references MetaMask.

## Project Structure

```text
decentralized-staking/
├── .vscode/
├── contracts/
├── scripts/
├── about.html
├── app.js
├── faq.html
├── features.html
├── hardhat.config.js
├── home.html
├── index.html
├── package.json
├── privacy.html
├── reviews.html
├── styles.css
├── terms.html
```

## Getting Started

```bash
git clone https://github.com/Bannysukumar/decentralized-staking.git
cd decentralized-staking
npm install
npm run compile
```

Scripts defined in package.json:

- `npm run test` — `hardhat test`
- `npm run compile` — `hardhat compile`
- `npm run deploy` — `hardhat run scripts/deploy.js --network bscTestnet`

## Deployment

- The repository homepage is https://decentralized-staking-bay.vercel.app.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

Licensed under MIT. See [LICENSE](LICENSE).

## Author

[Banny Sukumar](https://github.com/Bannysukumar)

- GitHub: [@Bannysukumar](https://github.com/Bannysukumar)
- Portfolio: [adepu-sukumar.vercel.app](https://adepu-sukumar.vercel.app/)
- LinkedIn: [Adepu Sukumar](https://www.linkedin.com/in/adepu-sukumar-59b423351)
