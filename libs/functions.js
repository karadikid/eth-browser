const ethers = require('ethers');
require('dotenv').config();
const provider = new ethers.providers.JsonRpcProvider(URL);

async function getBalance(address) {
    const response = await provider.send({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBalance", 
        params: [
            address,
            "latest"
        ],  
    });
    console.log(response);
    return response.result;
}

module.exports = {    
    getBalance

};