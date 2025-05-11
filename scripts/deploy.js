const hre = require("hardhat");

async function main() {
  // Deploy the BXC token
  const BXCToken = await hre.ethers.getContractFactory("BXCToken");
  const bxcToken = await BXCToken.deploy();
  await bxcToken.deployed();
  console.log("BXC Token deployed to:", bxcToken.address);

  // Deploy the staking platform with BXC token
  const StakingPlatform = await hre.ethers.getContractFactory("StakingPlatform");
  const stakingPlatform = await StakingPlatform.deploy(bxcToken.address);
  await stakingPlatform.deployed();
  console.log("Staking Platform deployed to:", stakingPlatform.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 