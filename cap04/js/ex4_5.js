const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const numero = Number(form.inNumero.value);
  const raiz = Math.sqrt(numero);

  if(Number.isInteger(raiz)){
    resp.innerText = `Raiz ${raiz}`;
  } else {
    resp.innerText = `Não há raiz exata para ${numero}`;
  }
  
  e.preventDefault();
})