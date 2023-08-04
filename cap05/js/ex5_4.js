const form = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);
  let resposta = '';

  for(let i = numero; i > 1; i--){
    resposta = resposta + i + ', ';
  }

  resp.innerText = `Entre ${numero} e 1: ${resposta} 1.`;
});