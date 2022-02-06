const { sha256 } = require("ethereum-cryptography/sha256");
const secp = require("ethereum-cryptography/secp256k1");
const { hexToBytes, concatBytes, toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { providers, eth_getBalance, utils, getBlock } = require("ethers");
const { action } = require("commander");
const { blockSize } = require("tar");
require('dotenv').config()


const provider = new providers.AlchemyProvider("rinkeby")
const apiProvider = new providers.EtherscanProvider("rinkeby");

async function returnBalance(address){  
        const balance = await provider.getBalance(address);
        const balances = await utils.formatEther(balance);
        return balances;
}       

async function getNonce(address){
        const nonce = await provider.getTransactionCount(address);
        return nonce;
}

async function getTransactions(address){
        const transactions = await apiProvider.getLogs(address);
        console.log(transactions);
}

async function returnBlock(){
        const data = await provider.getBlock();
        return data;
}

module.exports = {
    returnBalance,
    getNonce,
    getTransactions,
    returnBlock,
  };



//   https://api.etherscan.io/api?module=account&action=txlist&address=0x00Ca89aacFcF2C52136935b852aF1668169f5035&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken