const form = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');

form.addEventListener('submit', (e) => {
  const inProd = form.inProd.value;
  const inPrice = Number(form.inPrice.value);
  
  const desc = (inPrice / 2);
  const total = ((inPrice * 3) - desc);

  resp1.innerText = `${inProd} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
  resp2.innerText = `O 3º produto custa apenas R$: ${desc.toFixed(2)}`;
  e.preventDefault();
});