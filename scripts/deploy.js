// const hre = require('hardhat');

// async function main() {
//   const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');
//   const nftMarketplace = await NFTMarketplace.deploy();
//   await nftMarketplace.deployed();

//   console.log('Market deployed to:', nftMarketplace.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
// });

  
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
