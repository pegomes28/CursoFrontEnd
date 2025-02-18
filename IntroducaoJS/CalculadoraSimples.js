// Calculadora Simples em JavaScript
operacao = prompt();
//Funções de Calculo 

function soma(a, b){
    return (a+b);
}

function sub(a, b){
    return (a-b);
}

function multi(a, b){
    return (a*b);
}

function divi(a, b){
    return (a/b);
}

function menu(){
    let operacao;
    let numero1;
    let numero2;
    let resultado;
    console.log("===== Calculadora Simples =====");
    console.log("|Escolha a Operação Desejada: |");
    console.log("| 1. Soma                     |")
    console.log("| 2. Subtração                |")
    console.log("| 3. Multiuplicação           |")
    console.log("| 4. Divisão                  |")
    console.log("===============================")
    operacao = prompt();

    numero1 = Number(prompt("Informe o Primeiro Número: "));
    numero2 = Number(prompt("Informe o Segundo Número: "));

    switch (operacao) {
        case "1":
            resultado = soma(numero1, numero2);
            break;
        case "2":
            resultado = sub(numero1, numero2);
            break;
        case "3":
            resultado = multi(numero1, numero2);
            break;
        case "4":
            if (numero2==0) {
                console.log("Zero não pode negah!")
                resultado = null;
            }else{
                resultado = divi(numero1, numero2);
            }
            break;
        default:
            console.log("Operação Inválida fia");
            resultado = null;
            break;
            // Fim do SwitchCase
    }
    console.log("O Resultado é: "+resultado);
}

// Aplicar a Função Menu

var continuar = true;

while (continuar) {
    menu();
    let escolha = prompt("1. Continuar // 2. Sair  ");
    if (escolha == 2) {
        continuar = false;
        console.log("Volte Sempre Mana!!")
    }

}