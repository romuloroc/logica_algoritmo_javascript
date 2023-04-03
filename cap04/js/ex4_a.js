const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const number = Number(form.inNumber.value);
  
  if(number % 2 === 0) {
    resp.innerText = `${number} é par`;
  } else {
    resp.innerText = `${number} é ímpar`;
  }  
  
  e.preventDefault();
});