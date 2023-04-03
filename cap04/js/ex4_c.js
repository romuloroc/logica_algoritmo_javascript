const form = document.querySelector("form");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
  const inCash = Number(form.inCash.value);
  let time = 0;
  let troco = 0;

  if(inCash >= 1.00 && inCash < 1.75){
    time = 30;
    troco = inCash - 1.00;
  }
  if(inCash >= 1.75 && inCash < 3.00){
    time = 60;
    troco = inCash - 1.75;
  }
  if(inCash >= 3.00){
    time = 120;
    troco = inCash - 3.00;
  }

  outResp1.innerText = `Tempo: ${time} min`;

  if(troco > 0){
    outResp2.innerText = `Troco: ${troco.toFixed(2)}`;
  } else {
    outResp2.innerText = ``;
  }
  
  e.preventDefault();
});