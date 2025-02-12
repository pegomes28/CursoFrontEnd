// Estrutura de Dados

// Condicionais (If - Else e SwitchCase)

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