// Exercício 5 - Exclusão de Conta
// Descrição: Use o confirm() para perguntar ao usuário se ele deseja excluir sua conta. 
// Se confirmar, use alert() para mostrar: "Conta excluída com sucesso". Caso contrário, mostre: "Ação cancelada pelo usuário".

let excluirConta = confirm("Você tem certeza que deseja excluir sua conta?");

if (excluirConta) {
  alert("Conta excluída com sucesso");
} else {
  alert("Ação cancelada pelo usuário");
}
