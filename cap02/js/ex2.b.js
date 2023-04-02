const form = document.querySelector('form');
const resp = document.querySelector('h3');;

form.addEventListener('submit', (e) => {
  const inPrice = Number(form.inPrice.value);
  const inTime = Number(form.inTime.value);

  const ttlTime = Math.ceil(inTime / 15);
  const total = (inPrice * ttlTime);

  resp.innerText = `Valor a pagar R$: ${total.toFixed(2)}`;
  e.preventDefault();
});