// Exercício 3 - Entrada no Evento
// Descrição: Peça ao usuário sua idade usando prompt. 
// Com base na idade, defina uma variável permitido que será true se a idade for maior ou igual a 18, e false caso contrário. 
// Mostre com alert uma mensagem do tipo: "Entrada permitida" ou "Entrada negada".

let idade = Number(prompt("Informe sua idade: "));

let permitido = idade >= 18;  // Se a idade for 18 ou mais, permitido será true, senão false.

if (permitido) {
  alert("Entrada permitida");
} else {
  alert("Entrada negada");
}
