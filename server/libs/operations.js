const { sha256 } = require("ethereum-cryptography/sha256");
const secp = require("ethereum-cryptography/secp256k1");
const { hexToBytes, concatBytes, toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { providers, eth_getBalance, utils } = require("ethers");
require('dotenv').config()


const provider = new providers.AlchemyProvider("rinkeby")


async function returnBalance(address){  
        const balance = await provider.getBalance(address);
        const balances = await utils.formatEther(balance);
        return balances;
}

async function getNonce(address){
        const nonce = await provider.getTransactionCount(address);
        return nonce;
}

module.exports = {
    returnBalance,
    getNonce,
  };



