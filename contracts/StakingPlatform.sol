// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakingPlatform is ReentrancyGuard, Ownable {
    IERC20 public stakingToken;
    
    uint256 public constant DAILY_ROI_PERCENTAGE = 1; // 1% daily ROI
    uint256 public constant MAX_ROI_PERCENTAGE = 200; // 200% max ROI
    uint256 public constant REFERRAL_LEVELS = 8;
    
    // Referral percentages for each level
    uint256[8] public referralPercentages = [4, 2, 1, 1, 1, 1, 1, 1];
    
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lastClaimTime;
        uint256 totalClaimed;
        bool isActive;
    }
    
    struct User {
        address referrer;
        Stake[] stakes;
        uint256 totalStaked;
        uint256 totalEarned;
        uint256 totalReferralEarnings;
        mapping(uint256 => uint256) referralEarningsByLevel;
    }
    
    mapping(address => User) public users;
    mapping(address => mapping(uint256 => address[])) public referralsByLevel;
    
    event Staked(address indexed user, uint256 amount, address indexed referrer);
    event Unstaked(address indexed user, uint256 amount);
    event Claimed(address indexed user, uint256 amount);
    event ReferralEarned(address indexed referrer, address indexed user, uint256 amount, uint256 level);
    
    constructor(address _stakingToken) Ownable(msg.sender) {
        stakingToken = IERC20(_stakingToken);
    }
    
    function stake(uint256 _amount, address _referrer) external nonReentrant {
        require(_amount > 0, "Amount must be greater than 0");
        require(stakingToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        
        User storage user = users[msg.sender];
        
        // Handle referral
        if (_referrer != address(0) && _referrer != msg.sender && user.referrer == address(0)) {
            user.referrer = _referrer;
            _updateReferralTree(msg.sender, _referrer);
        }
        
        // Create new stake
        user.stakes.push(Stake({
            amount: _amount,
            startTime: block.timestamp,
            lastClaimTime: block.timestamp,
            totalClaimed: 0,
            isActive: true
        }));
        
        user.totalStaked += _amount;
        
        // Distribute referral rewards
        if (user.referrer != address(0)) {
            _distributeReferralRewards(msg.sender, _amount);
        }
        
        emit Staked(msg.sender, _amount, user.referrer);
    }
    
    function _updateReferralTree(address _user, address _referrer) internal {
        address currentReferrer = _referrer;
        
        for (uint256 i = 0; i < REFERRAL_LEVELS; i++) {
            if (currentReferrer == address(0)) break;
            
            referralsByLevel[currentReferrer][i].push(_user);
            currentReferrer = users[currentReferrer].referrer;
        }
    }
    
    function _distributeReferralRewards(address _user, uint256 _amount) internal {
        address currentReferrer = users[_user].referrer;
        
        for (uint256 i = 0; i < REFERRAL_LEVELS; i++) {
            if (currentReferrer == address(0)) break;
            
            uint256 reward = (_amount * referralPercentages[i]) / 100;
            users[currentReferrer].referralEarningsByLevel[i] += reward;
            users[currentReferrer].totalReferralEarnings += reward;
            
            emit ReferralEarned(currentReferrer, _user, reward, i + 1);
            currentReferrer = users[currentReferrer].referrer;
        }
    }
    
    function calculateROI(address _user, uint256 _stakeIndex) public view returns (uint256) {
        User storage user = users[_user];
        require(_stakeIndex < user.stakes.length, "Invalid stake index");
        
        Stake storage stake = user.stakes[_stakeIndex];
        require(stake.isActive, "Stake is not active");
        
        uint256 daysStaked = (block.timestamp - stake.lastClaimTime) / 1 days;
        return (stake.amount * DAILY_ROI_PERCENTAGE * daysStaked) / 100;
    }
    
    function claimROI(uint256 _stakeIndex) external nonReentrant {
        User storage user = users[msg.sender];
        require(_stakeIndex < user.stakes.length, "Invalid stake index");
        
        Stake storage stake = user.stakes[_stakeIndex];
        require(stake.isActive, "Stake is not active");
        
        uint256 roi = calculateROI(msg.sender, _stakeIndex);
        require(roi > 0, "No ROI to claim");
        
        uint256 totalEarnings = stake.totalClaimed + roi;
        require(totalEarnings <= (stake.amount * MAX_ROI_PERCENTAGE) / 100, "ROI cap reached");
        
        stake.lastClaimTime = block.timestamp;
        stake.totalClaimed += roi;
        user.totalEarned += roi;
        
        require(stakingToken.transfer(msg.sender, roi), "Transfer failed");
        emit Claimed(msg.sender, roi);
    }
    
    function claimReferralEarnings() external nonReentrant {
        User storage user = users[msg.sender];
        require(user.totalReferralEarnings > 0, "No referral earnings to claim");
        
        uint256 amount = user.totalReferralEarnings;
        user.totalReferralEarnings = 0;
        
        for (uint256 i = 0; i < REFERRAL_LEVELS; i++) {
            user.referralEarningsByLevel[i] = 0;
        }
        
        require(stakingToken.transfer(msg.sender, amount), "Transfer failed");
        emit Claimed(msg.sender, amount);
    }
    
    function restake(uint256 _stakeIndex) external nonReentrant {
        User storage user = users[msg.sender];
        require(_stakeIndex < user.stakes.length, "Invalid stake index");
        
        Stake storage stake = user.stakes[_stakeIndex];
        require(stake.isActive, "Stake is not active");
        
        uint256 totalEarnings = stake.totalClaimed + calculateROI(msg.sender, _stakeIndex);
        require(totalEarnings >= (stake.amount * MAX_ROI_PERCENTAGE) / 100, "ROI cap not reached");
        
        // Deactivate current stake
        stake.isActive = false;
        
        // Create new stake with the same amount
        user.stakes.push(Stake({
            amount: stake.amount,
            startTime: block.timestamp,
            lastClaimTime: block.timestamp,
            totalClaimed: 0,
            isActive: true
        }));
        
        emit Staked(msg.sender, stake.amount, user.referrer);
    }
    
    function getUserStakes(address _user) external view returns (Stake[] memory) {
        return users[_user].stakes;
    }
    
    function getReferralEarnings(address _user) external view returns (uint256[8] memory) {
        User storage user = users[_user];
        uint256[8] memory earnings;
        
        for (uint256 i = 0; i < REFERRAL_LEVELS; i++) {
            earnings[i] = user.referralEarningsByLevel[i];
        }
        
        return earnings;
    }
    
    function getReferralsByLevel(address _user, uint256 _level) external view returns (address[] memory) {
        return referralsByLevel[_user][_level];
    }
} 