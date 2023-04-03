const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const inVelPerm = Number(form.inVelPerm.value);
  const inVelCond = Number(form.inVelCond.value);
  const percent = (inVelPerm * 0.2);
 
  if(inVelCond <= inVelPerm) {
    resp.innerText = `Situação: Sem Multa`;
  }
  if(inVelCond > inVelPerm && inVelCond <= (inVelPerm + percent)) {
    resp.innerText = `Situação Multa Leve`;
  }  
  if(inVelCond > (inVelPerm + percent)) {
    resp.innerText = `Situação Multa Grave`;
  }  
  
  e.preventDefault();
});