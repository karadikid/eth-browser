import "./index.scss";

const server = "http://localhost:3042";

document.getElementById("get-balance").addEventListener('click', () => {
  const address = document.getElementById("wallet-address").value;
  console.log(address);
  const body = JSON.stringify({
    address
  });

//document.getElementById("balance").innerHTML = 0x96A83D6a7e0E88a741C64C5BE559E7293254115B;

  const request = new Request(`${server}/balance`, { method: 'POST', body });

  fetch(request, { headers: { 'Content-Type': 'application/json' }}).then(response => {
    return response.json();
  }).then(({ balance, nonce }) => {
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("nonce").innerHTML = nonce;
  });
});



document.getElementById("transfer-amount").addEventListener('click', () => {
  const senderPubkey = document.getElementById("exchange-address").value;
  const sender = document.getElementById("private-key").value;
  const amount = document.getElementById("send-amount").value;
  const recipient = document.getElementById("recipient").value;

  const body = JSON.stringify({
    senderPubkey, sender, amount, recipient
  });

  const request = new Request(`${server}/send`, { method: 'POST', body });

  fetch(request, { headers: { 'Content-Type': 'application/json' }}).then(response => {
    return response.json();
  }).then(({ balance }) => {
    document.getElementById("balance").innerHTML = balance;
  });
});
