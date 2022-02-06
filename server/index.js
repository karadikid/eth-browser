const express = require('express');
const app = express();
const cors = require('cors');
const port = 3042;
const { sha256 } = require("ethereum-cryptography/sha256");
const secp = require("ethereum-cryptography/secp256k1");
const { hexToBytes, concatBytes, toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { returnBalance, getNonce, getTransactions, returnBlock } = require("./libs/operations");


// localhost can have cross origin errors
// depending on the browser you use!
app.use(cors());
app.use(express.json());



app.post('/balance', async (req, res) => {
  const {address} = req.body;
  let balances = await returnBalance(address);
  let nonces = await getNonce(address);
  console.log(balances, nonces);
  res.send({ balance: balances, nonce: nonces }); 
});

app.post('/block', async (req, res) => {
  const { address} = req.body;
  data = await returnBlock();
  res.send({ block: data });
});


app.post('/logs', async (req, res) => {
  const { address} = req.body;
  // let logs = await getTransactions(address);
  // console.log(logs);
  // res.send({ log: logs }); - Not implemented yet, need to update API call parameters in operatons.js
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
