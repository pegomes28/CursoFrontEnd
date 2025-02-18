// Estrutura de Dados

// Condicionais (If / Else e SwitchCase)

// If 
var precoProduto = 150;
if (precoProduto >=100){
    console.log("Valor a Pagar: " +(precoProduto*0.9));
} else{
    console.log("Valor a Pagar: " +(precoProduto));
}

// SwitchCase
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    default:
        console.log("Outro Mês...");
        break;
}

// Estrutura de Repetição - For

// For - Laços Contáveis

for(let i = 0; i<=100; i++){
    console.log(i);
}

// While - Laços Incontáveis

var continuar = true; //Condição de Parada
var numeroEscolhido = 3; 
var contador = 0;
while(continuar){ // Parada Acontece Quando Continuar For False
    contador++;
    let numeroSorteado = Math.round(Math.random()*10);
    if(numeroEscolhido==numeroSorteado){
        continuar = false;
        console.log("Acertou!")
    }
    console.log("Número Sorteado: "+numeroSorteado);
}

// Funções - Ações Específicas (Podendo ser Chamada Qualquer Momento Dentro do Cógdigo)

function ola (nome){ // Function Return 
    return "Olá, "+nome;
}

function hello (nome){ // Function Void
    console.log("Hello, "+nome);
}

console.log(ola("Diogo"));
hello("Diogo");
