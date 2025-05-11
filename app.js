// Token Contract ABI and address
const tokenABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const tokenAddress = '0xcf84cd4e59198e06ad9c385fd7511bb1cd967de6';

// Staking Platform Contract ABI and address
const stakingABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_stakingToken",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Claimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "referrer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "level",
                "type": "uint256"
            }
        ],
        "name": "ReferralEarned",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "referrer",
                "type": "address"
            }
        ],
        "name": "Staked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Unstaked",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_stakeIndex",
                "type": "uint256"
            }
        ],
        "name": "calculateROI",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_stakeIndex",
                "type": "uint256"
            }
        ],
        "name": "claimROI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimReferralEarnings",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getReferralEarnings",
        "outputs": [
            {
                "internalType": "uint256[8]",
                "name": "",
                "type": "uint256[8]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_level",
                "type": "uint256"
            }
        ],
        "name": "getReferralsByLevel",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserStakes",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastClaimTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalClaimed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    }
                ],
                "internalType": "struct StakingPlatform.Stake[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_stakeIndex",
                "type": "uint256"
            }
        ],
        "name": "restake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_referrer",
                "type": "address"
            }
        ],
        "name": "stake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stakingToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const stakingAddress = '0x647d4928a80f1edd544658c4c8476f4af83401bc';

let web3;
let tokenContract;
let stakingContract;
let userAccount;

// Initialize Web3 and contracts
async function init() {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined' || window.ethereum?.isMetaMask) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                userAccount = accounts[0];
                web3 = new Web3(window.ethereum);
                tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
                stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);
                
                // Set up event listeners
                setupEventListeners();
                updateWalletDisplay();
                loadUserData();
            }
        } catch (error) {
            console.error('Error initializing:', error);
            alert('Error connecting to MetaMask. Please make sure MetaMask is installed and unlocked.');
        }
    } else {
        // Handle mobile MetaMask
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            alert('Please install MetaMask Mobile from your app store to use this platform.');
            // Optional: Add deep link to MetaMask Mobile
            // window.location.href = 'https://metamask.app.link/dapp/your-dapp-url';
        } else {
            alert('Please install MetaMask to use this platform!');
        }
    }
}

// Set up event listeners
function setupEventListeners() {
    // Connect wallet button
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
    
    // Stake form
    document.getElementById('stake-form').addEventListener('submit', handleStake);
    
    // Copy referral link
    document.getElementById('copy-link').addEventListener('click', copyReferralLink);
}

// Connect wallet
async function connectWallet() {
    try {
        if (typeof window.ethereum !== 'undefined' || window.ethereum?.isMetaMask) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                userAccount = accounts[0];
                web3 = new Web3(window.ethereum);
                tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
                stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);
                
                updateWalletDisplay();
                loadUserData();
            }
        } else {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                alert('Please install MetaMask Mobile from your app store to use this platform.');
                // Optional: Add deep link to MetaMask Mobile
                // window.location.href = 'https://metamask.app.link/dapp/your-dapp-url';
            } else {
                alert('Please install MetaMask to use this platform!');
            }
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Error connecting wallet. Please try again.');
    }
}

// Update wallet display
function updateWalletDisplay() {
    const walletAddress = document.getElementById('wallet-address');
    const connectButton = document.getElementById('connect-wallet');
    
    if (userAccount) {
        walletAddress.textContent = `${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
        connectButton.textContent = 'Connected';
        connectButton.disabled = true;
        
        // Update referral link
        const referralLink = document.getElementById('referral-link');
        referralLink.value = `${window.location.origin}?ref=${userAccount}`;
    }
}

// Load user data
async function loadUserData() {
    if (!userAccount) return;
    
    try {
        // Get token balance
        const balance = await tokenContract.methods.balanceOf(userAccount).call();
        const balanceElement = document.getElementById('token-balance');
        if (balanceElement) {
            balanceElement.textContent = web3.utils.fromWei(balance, 'ether') + ' BXC';
        }
        
        // Get user stakes
        const stakes = await stakingContract.methods.getUserStakes(userAccount).call();
        displayStakes(stakes);
        
        // Get referral earnings
        const referralEarnings = await stakingContract.methods.getReferralEarnings(userAccount).call();
        displayReferralEarnings(referralEarnings);
        
        // Update dashboard
        updateDashboard();
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// Add loading animation
function showLoading(element) {
    const loading = document.createElement('div');
    loading.className = 'loading';
    element.appendChild(loading);
}

function hideLoading(element) {
    const loading = element.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Add success message animation
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 3000);
}

// Add error message animation
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

// Update handleStake function
async function handleStake(event) {
    event.preventDefault();
    
    if (!userAccount) {
        showErrorMessage('Please connect your wallet first!');
        return;
    }
    
    const amount = document.getElementById('stake-amount').value;
    const referrer = document.getElementById('referrer-address').value;
    const stakeButton = document.querySelector('#stake-form button[type="submit"]');
    
    try {
        showLoading(stakeButton);
        const weiAmount = web3.utils.toWei(amount, 'ether');
        
        // First approve the staking contract to spend tokens
        await tokenContract.methods.approve(stakingAddress, weiAmount)
            .send({ from: userAccount });
        
        // Then stake the tokens
        await stakingContract.methods.stake(weiAmount, referrer || '0x0000000000000000000000000000000000000000')
            .send({ from: userAccount });
        
        showSuccessMessage('Staking successful!');
        loadUserData();
    } catch (error) {
        console.error('Error staking:', error);
        showErrorMessage('Error staking. Please try again.');
    } finally {
        hideLoading(stakeButton);
    }
}

// Display stakes
function displayStakes(stakes) {
    const stakesList = document.getElementById('stakes-list');
    stakesList.innerHTML = '';
    
    stakes.forEach((stake, index) => {
        if (stake.isActive) {
            const stakeElement = document.createElement('div');
            stakeElement.className = 'stake-item card';
            
            const amount = web3.utils.fromWei(stake.amount, 'ether');
            const claimed = web3.utils.fromWei(stake.totalClaimed, 'ether');
            
            stakeElement.innerHTML = `
                <div>
                    <strong>Amount:</strong> ${amount} BXC
                    <br>
                    <strong>Claimed:</strong> ${claimed} BXC
                </div>
                <div>
                    <button onclick="claimROI(${index})" class="tooltip">Claim ROI</button>
                    <button onclick="restake(${index})" class="tooltip">Restake</button>
                </div>
            `;
            
            stakesList.appendChild(stakeElement);
        }
    });
}

// Display referral earnings
function displayReferralEarnings(earnings) {
    const earningsContainer = document.getElementById('referral-earnings-levels');
    earningsContainer.innerHTML = '';
    
    const percentages = [4, 2, 1, 1, 1, 1, 1, 1];
    
    earnings.forEach((amount, index) => {
        const levelElement = document.createElement('div');
        levelElement.className = 'referral-level card';
        
        const weiAmount = web3.utils.fromWei(amount, 'ether');
        
        levelElement.innerHTML = `
            <h4>Level ${index + 1}</h4>
            <p>${weiAmount} BXC</p>
            <small>${percentages[index]}% Commission</small>
        `;
        
        earningsContainer.appendChild(levelElement);
    });
}

// Update dashboard
async function updateDashboard() {
    try {
        const stakes = await stakingContract.methods.getUserStakes(userAccount).call();
        const referralEarnings = await stakingContract.methods.getReferralEarnings(userAccount).call();
        
        let totalStaked = 0;
        let totalEarned = 0;
        
        stakes.forEach(stake => {
            if (stake.isActive) {
                totalStaked += parseInt(stake.amount);
                totalEarned += parseInt(stake.totalClaimed);
            }
        });
        
        const totalReferralEarnings = referralEarnings.reduce((a, b) => a + parseInt(b), 0);
        
        const totalStakedElement = document.getElementById('total-staked');
        const totalEarningsElement = document.getElementById('total-earnings');
        const referralEarningsElement = document.getElementById('referral-earnings');
        const dailyRoiElement = document.getElementById('daily-roi');
        
        if (totalStakedElement) {
            totalStakedElement.textContent = web3.utils.fromWei(totalStaked.toString(), 'ether') + ' BXC';
        }
        if (totalEarningsElement) {
            totalEarningsElement.textContent = web3.utils.fromWei(totalEarned.toString(), 'ether') + ' BXC';
        }
        if (referralEarningsElement) {
            referralEarningsElement.textContent = web3.utils.fromWei(totalReferralEarnings.toString(), 'ether') + ' BXC';
        }
        if (dailyRoiElement) {
            const dailyROI = (totalStaked * 0.01) / 100; // 1% daily ROI
            dailyRoiElement.textContent = web3.utils.fromWei(dailyROI.toString(), 'ether') + ' BXC';
        }
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

// Update claimROI function
async function claimROI(stakeIndex) {
    const button = event.target;
    try {
        showLoading(button);
        await stakingContract.methods.claimROI(stakeIndex)
            .send({ from: userAccount });
        
        showSuccessMessage('ROI claimed successfully!');
        loadUserData();
    } catch (error) {
        console.error('Error claiming ROI:', error);
        showErrorMessage('Error claiming ROI. Please try again.');
    } finally {
        hideLoading(button);
    }
}

// Update restake function
async function restake(stakeIndex) {
    const button = event.target;
    try {
        showLoading(button);
        await stakingContract.methods.restake(stakeIndex)
            .send({ from: userAccount });
        
        showSuccessMessage('Restaking successful!');
        loadUserData();
    } catch (error) {
        console.error('Error restaking:', error);
        showErrorMessage('Error restaking. Please try again.');
    } finally {
        hideLoading(button);
    }
}

// Copy referral link
function copyReferralLink() {
    const referralLink = document.getElementById('referral-link');
    referralLink.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}

// Initialize the app
window.addEventListener('load', init);

// Handle account changes
if (window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts.length > 0) {
            userAccount = accounts[0];
            updateWalletDisplay();
            loadUserData();
        } else {
            // Handle disconnection
            userAccount = null;
            updateWalletDisplay();
        }
    });

    // Handle chain changes
    window.ethereum.on('chainChanged', function (chainId) {
        // Reload the page when the chain changes
        window.location.reload();
    });
} 