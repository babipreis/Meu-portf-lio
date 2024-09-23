let bebida = prompt("Escolha uma bebida: café, leite ou chá:").toLowerCase ();
let valor;
switch (bebida) {
case 'café':
valor = 3.00;
console.log (`Você escolheu ${bebida}. O valor a ser pago é R$${valor.toFixed(2)}.`);
case 'leite':
valor = 2.50;
console.log(`Você escolheu ${bebida}. O valor a ser pago é R$${valor.toFixed(2)}.`);
break;
case 'chá':
valor = 2.00;
console.log(`Você escolheu ${bebida}. O valor a ser pago é R$${valor.toFixed(2)}.`);
break;
default:
console.log ("Escolha inválida! Por favor, selecione entre café, leite ou chá.");
break}