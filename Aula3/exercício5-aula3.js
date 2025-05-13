for (let contador = 0; contador <= 100; contador++) {
    console.log(contador);
}

let qtdNumeros = parseInt(prompt("Quantos números: "));
let qtdPares = 0, qtdImpares = 0, soma = 0;

for (let contador = 0; contador < qtdNumeros; contador++){
    let numero = parseInt(prompt("Digite um número: "))

    if (numero % 2 == 0){
        qtdPares++;
    }
    else {
        qtdImpares++
    }

    soma = soma + numero;
}

console.log(`Pares: ${qtdPares}`)
console.log(`Impares: ${qtdImpares}`)
console.log(`Soma: ${soma}`)

// Exercício 5 - Imprimindo Intervalo
// Descrição: Crie um programa que leia dois números inteiros: um valor inicial e um valor final. 
// O programa deve então imprimir todos os números do valor inicial até o valor final, inclusive.

let valorInicial = parseInt(prompt("Digite o valor inicial: "))
let valorFinal = parseInt(prompt("Digite o valor final: "))



