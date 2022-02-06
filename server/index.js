const express = require('express');
const app = express();
const cors = require('cors');
const port = 3042;
const { sha256 } = require("ethereum-cryptography/sha256");
const secp = require("ethereum-cryptography/secp256k1");
const { hexToBytes, concatBytes, toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { returnBalance } = require("./libs/operations");


// localhost can have cross origin errors
// depending on the browser you use!
app.use(cors());
app.use(express.json());



app.post('/balance', (req, res) => {
  const {address} = req.body;
  let balances = returnBalance(address);
  res.send({ balance: balances }); 
});

app.post('/send', async (req, res) => {
  const { address} = req.body;

  // let balances = await returnBalance(address);

  // if(verifiedResults){
  // balances[senderPubkey] -= amount;
  // balances[recipient] = (balances[recipient] || 0) + +amount;
  // console.log({balance: balances[senderPubkey]});
  // res.send({ balance: balances[senderPubkey] }); }
  // else {
  //   res.send({ balance: "Invalid Transaction "});
  // }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});