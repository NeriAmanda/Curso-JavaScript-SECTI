// Exercício 1 - Boas-vindas
// Descrição: Crie um programa que solicite ao usuário os seguintes dados: nome, idade , altura, gênero e estudante.

let nome = prompt("Seu nome: ");
let idade = Number(prompt("Sua idade: "));
let altura = Number(prompt("Sua altura: "));
let gênero = prompt("Seu gênero: ");
let estudante = prompt("Você é estudante? (sim/não): ");

console.log("Bem-vindo(a), " + nome + "!");
console.log("Seu Perfil:");
console.log(nome);
console.log(idade + " anos");
console.log(altura);
console.log(gênero);
console.log(estudante);
