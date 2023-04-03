const form = document.querySelector("form");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inLadoA = Number(form.inLadoA.value);
  const inLadoB = Number(form.inLadoB.value);
  const inLadoC = Number(form.inLadoC.value);
  let tipoTriangulo = '';
  let validacao = '';  

  if(inLadoA + inLadoB > inLadoC && inLadoA + inLadoC > inLadoB && inLadoB + inLadoC > inLadoA){
    validacao = '';
  } else {
    validacao = 'não';
  }

  if(inLadoA === inLadoB && inLadoA === inLadoC){
    tipoTriangulo = 'Equilátero';
  } else if(inLadoA === inLadoB || inLadoA === inLadoC || inLadoB === inLadoC) {
    tipoTriangulo = 'Isósceles';
  } else {
    tipoTriangulo = 'Escaleno';
  }

  outResp1.innerText = `Lados ${validacao} podem formar um triângulo`;

  if(validacao === ''){
    outResp2.innerText = `Tipo: ${tipoTriangulo}`;
  }    
});