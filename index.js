const express = require('express');
const app = express();
const cors = require('cors');
const port = 3042;
const { getBalance } = require('./libs/functions');


app.get('/balance/:address', (req, res) => {
  const {address} = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});


app.post('/send', async (req, res) => {
  const { address } = req.body;
  let balance = await getBalance(address);
  if(balance){
  console.log(balance);

  res.send({ balance: balance }); }
  else {
    res.send({ balance: "Invalid Transaction "});
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
  console.log('Up');
  console.log('Running');
});
