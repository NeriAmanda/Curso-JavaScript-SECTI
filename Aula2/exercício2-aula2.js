// Exercício 2 - Desconto Progressivo
// Descrição: Crie um programa que peça ao usuário o valor de uma compra. 
// Se o valor for maior que 100, aplique 10% de desconto. Caso contrário o desconto será de 5%.

let valorTexto = prompt("Digite o valor da compra: ");
let valorCompra = Number(valorTexto.replace(",", "."));

let desconto;
let percentualDesconto; // A variável percentualDesconto foi criada para exibir claramente ao usuário o percentual de desconto que ele recebeu.

if (valorCompra > 100) {
  percentualDesconto = 10;
  desconto = valorCompra * 0.10;
} else {
  percentualDesconto = 5;
  desconto = valorCompra * 0.05;
}

let valorFinal = valorCompra - desconto;

console.log("Valor original: R$ " + valorCompra.toFixed(2)); // O .toFixed(2) garante que o número seja exibido com duas casas decimais.
console.log("Desconto aplicado: R$ " + desconto.toFixed(2));
console.log("Valor final com desconto: R$ " + valorFinal.toFixed(2));
console.log("Você recebeu um desconto de " + percentualDesconto + "%.");
