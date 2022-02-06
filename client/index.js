import "./index.scss";

const server = "http://localhost:3042";

document.getElementById("get-balance").addEventListener('click', () => {
  const address = document.getElementById("wallet-address").value;
  console.log(address);
  const body = JSON.stringify({
    address
  });

  const request = new Request(`${server}/balance`, { method: 'POST', body });

  fetch(request, { headers: { 'Content-Type': 'application/json' }}).then(response => {
    return response.json();
  }).then(({ balance, nonce }) => {
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("nonce").innerHTML = nonce;
  });
});
document.getElementById("get-block").addEventListener('click', () => {
  const address = document.getElementById("logs-address").value;

  const body = JSON.stringify({
    address 
  });

  const request = new Request(`${server}/block`, { method: 'POST' });

  fetch(request, { headers: { 'Content-Type': 'application/json' }}).then(response => {
    return response.json();
  }).then(({ block }) => {
    document.getElementById("data").innerHTML = JSON.stringify(block, 4);
  });
});


document.getElementById("get-logs").addEventListener('click', () => {
  const address = document.getElementById("logs-address").value;

  const body = JSON.stringify({
    address 
  });

  const request = new Request(`${server}/logs`, { method: 'POST', body });

  fetch(request, { headers: { 'Content-Type': 'application/json' }}).then(response => {
    return response.json();
  }).then(({ logs }) => {
    document.getElementById("logs").innerHTML = logs;
  });
});
