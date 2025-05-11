// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BXCToken is ERC20, Ownable {
    constructor() ERC20("BXC Token", "BXC") Ownable(msg.sender) {
        // Mint initial supply to the contract deployer
        // 1 billion tokens with 18 decimals
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    // Function to mint additional tokens (only owner)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Function to burn tokens
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
} 