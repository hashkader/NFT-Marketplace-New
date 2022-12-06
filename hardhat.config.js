const fs = require('fs');

require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");

const privateKey = fs.readFileSync('.secret').toString().trim();

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "WykkX8hG8xZC-RMIdkEilHvdP_rj1jOL";

// // Replace this private key with your Goerli account private key
// // To export your private key from Metamask, open Metamask and
// // go to Account Details > Export Private Key
// // Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "173c1ca8030938b1de263e818a3552e2606918a341552a8a0a150297af0ab485";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  },
  solidity: '0.8.4',
};

// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     // mumbai: {
//     //   url: 'https://rpc-mumbai.maticvigil.com',
//     //   accounts: [privateKey],
//     // },
//     // // rinkeby: {
//     // url: 'https://rinkeby.infura.io/v3/bed4fdcc76bb4978a9a3103ef0946f64',
//     //   accounts: [privateKey],
//     // },
//   },
//   solidity: '0.8.4',
// };

