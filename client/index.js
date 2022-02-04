import "./index.scss";

const server = "http://localhost:3042";

/*
document.getElementById("wallet-address").addEventListener('input', ({ target: {value} }) => {
  if(value === "") {
    document.getElementById("balance").innerHTML = 0;
    return;
  }
 

  fetch(`${server}/balance/${value}`).then((response) => {
    return response.json();
  }).then(({ balance }) => {
    document.getElementById("balance").innerHTML = balance;
  });
});
 */

document.getElementById("wallet-address").addEventListener('click', () => {
  const address = document.getElementById("wallet-address").value;
  console.log(address);
  const body = JSON.stringify({
    address
  });

  const request = new Request(`${server}/send`, { method: 'POST', body });

  fetch(request, { mode: 'no-cors', headers: { 'Content-Type': 'application/json' }}).then(response => {
    console.log(address);
    return response.json();
  }).then(({ balance }) => {
    document.getElementById("balance").innerHTML = balance;
  });
});
