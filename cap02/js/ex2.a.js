const form = document.querySelector('form');
const outDesc1 = document.querySelector('#outDesc1');
const outDesc2 = document.querySelector('#outDesc2');

form.addEventListener('submit', (e) => {
  const desc = form.inMedic.value;
  const price = Number(form.inPrice.value);
  const outPrice = Math.floor(price * 2);
  outDesc1.innerHTML = `Promoção de ${desc}`;
  outDesc2.innerHTML = `Leve 2 por apenas R$: ${outPrice},00`;
  e.preventDefault();
});