// Exercício 4 - Estoque Simples
// Descrição: Crie um programa que simule um estoque. 
// Peça ao usuário: quantidade atual no estoque (number) e a quantidade que deseja remover (number). 
// Mostre no console: se a quantidade for válida (não negativa), mostre "Estoque atualizado: X". 
// Caso contrário, mostre "Operação inválida: quantidade insuficiente no estoque".

let estoqueAtual = Number(prompt("Quantidade atual no estoque: ")); 
let quantidadeRemover = Number(prompt("Quantidade a remover: "));

// Verifica se a quantidade a ser removida é válida:
// Não pode ser um valor negativo: (quantidadeRemover >= 0).
// Não pode ser maior que o estoque disponível (quantidadeRemover <= estoqueAtual).
// Só segue para atualizar o estoque se ambos os critérios forem atendidos.
// O "&&" garante que ambas as condições sejam verdadeiras.
if (quantidadeRemover >= 0 && quantidadeRemover <= estoqueAtual) {
  // Calcula o estoque atualizado após a remoção
  let estoqueAtualizado = estoqueAtual - quantidadeRemover;

  // Exibe o estoque atualizado no console
  console.log("Estoque atualizado: " + estoqueAtualizado);
} else {
  // Exibe mensagem de erro caso a operação seja inválida
  console.log("Operação inválida: quantidade insuficiente no estoque");
}
