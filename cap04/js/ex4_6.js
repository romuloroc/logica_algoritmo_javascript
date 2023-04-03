const form = document.querySelector("form");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");
const outResp3 = document.querySelector("#outResp3");

form.addEventListener("submit", (e) => {
  const saque = Number(form.inSaque.value);
  
  if(saque % 10 !== 0){
    alert('Valor inválido para as notas disponíveis (R$ 10, 50, 100)');
    form.inSaque.focus();
    return;
  }
  
  const notasCem = Math.floor(saque / 100);
  let resto = saque % 100;
  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  const notasDez = Math.floor(resto / 10);
  
  if(notasCem > 0){
    outResp1.innerText = `Notas de R$ 100: ${notasCem}`;
  }
  if(notasCinquenta > 0){
    outResp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
  }
  if(notasDez > 0){
    outResp3.innerText = `Notas de R$ 10: ${notasDez}`;
  }    
  e.preventDefault();
});