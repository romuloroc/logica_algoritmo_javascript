const bairro = prompt('Bairro de entrega: ');
let taxaEntrega

switch (bairro) {
  case 'Centro':
    taxaEntrega = 5.00;
    break;
  case 'Fragata':
    taxaEntrega = 7.00;
    break;
  case 'Laranjal':
    taxaEntrega = 10.00;
    break;
  default:
    taxaEntrega = 8.00;
    break;
}

alert(`Taxa R$: ${taxaEntrega.toFixed(2)}`);