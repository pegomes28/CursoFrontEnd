// Desafio 1 - Idade
var prompt = require("prompt-sync")();

var idade = prompt("Informe sua Idade: ");

if (idade<18) {
    console.log("Você menor de Idade");
} else if(idade<60) {
    console.log("Você é maior de Idade");
} else{
    console.log("Você é idoso");
}

// Desafio 2 - Tabuada do 5

let num = 5;
for(let i = 0; i<=20; i++){
    console.log("5 x "+i+" = "+(i*num))
}


// Desafio 3 - Números Pares 

for(let i = 1 ; i<=20 ; i++){
    // Imprimir n° Pares
    let resto = (i%2);
    if (resto==0) {
        console.log(i)
    }
}