// Exercício 6 - IMC
// Descrição: Crie um programa em JavaScript que solicite ao usuário seu nome, peso (em kg) e altura (em metros). 
// Em seguida, calcule o IMC (Índice de Massa Corporal) utilizando a fórmula: IMC = peso / (altura * altura)
// Depois, utilize a função confirm() para exibir uma mensagem de confirmação com os dados inseridos.
// Se o usuário confirmar que os dados estão corretos, exiba uma mensagem no formato: 
// "Nome, seu IMC é X", onde Nome é o nome informado e X é o IMC calculado.
// Caso o usuário cancele, exiba a mensagem: "Você saiu do programa."

let nome = prompt("Qual é o seu nome?");
let peso = Number(prompt("Qual é o seu peso?"));
let altura = Number(prompt("Qual é a sua altura?"));

// Calcula o IMC
let imc = peso / (altura * altura);

// Mostra os dados para confirmação
// Usar crase (`) para incluir variáveis dentro da string com ${}, não aspas.
let confirmacao = confirm(`Seus Dados: 
Nome: ${nome}
Peso: ${peso} kg
Altura: ${altura} m
Deseja continuar?`);

// Se o usuário confirmar os dados, mostra o IMC
if (confirmacao) {
  alert(`${nome}, seu IMC é ${imc.toFixed(2)}`);
} else {
  // Se o usuário cancelar, exibe a mensagem de saída
  alert("Você saiu do programa.");
}
