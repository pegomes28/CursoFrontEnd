// Criar um programa que receba várias notas e Calcule a Média

//Desafio 1
console.log("                ")
console.log("    Desafio 1   ")
console.log("                ")

const prompt = require("prompt-sync")();

let vetorNotas = [];

let contador = 0;
let continuar = true;
while (continuar) {
    console.log("                        ")
    console.log("======Bem-vindo(a)======")
    console.log("| 1. Digitar nova nota.|")
    console.log("| 2. Calcular Média.   |")
    console.log("| 3. Sair.             |")
    console.log("========================")
    console.log("                        ")
    let operacao = prompt("Escolha a Opção Desejada:")

    switch (operacao) {
        case "1":
            contador++;
            let nota = Number(prompt("Digite a Nota do Aluno "+contador+": "));
            vetorNotas.push(nota);
            break;
        case "2":
            let media = vetorNotas.reduce((x,y) => x+y,0)/contador;
            console.log("A média é: "+media)
            break;
        case "3":
            continuar = false;
            console.log("Beijão fia, volte sempre!")
            console.log("                         ")
        default:
            break;
    }
}

//Desafio 2
console.log("                ")
console.log("    Desafio 2   ")
console.log("                ")



