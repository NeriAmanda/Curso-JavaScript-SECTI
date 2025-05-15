// Exercício 1 - Saudação Personalizada
// Descrição: Crie uma função chamada saudacao que receba um nome e imprima uma saudação personalizada. Caso nenhum nome seja fornecido, use "visitante".

//nome = prompt("Digite seu nome:  ")

function saudacao(nome){
    if (nome){
        console.log(`Olá, ${nome}`);
    }
    else{
        console.log("Visitante");
    }

}

saudacao("Nicollas");



