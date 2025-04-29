// Atividade 03 - Conta Bancária
// Atributos: Titular e Saldo
// Métodos: depositar(Valor), sacar(Valor), exibirSaldo().

class ContaBancaria {
    // Atributos privados
    #titular;
    #saldo;

    // Construtor
    constructor(titular){
        this.#titular = titular;
        this.#saldo = 0;
    }
    // Métodos
    depositar(valor){
        this.#saldo += valor; // Saldo = saldo + valor
        console.log(`Transferência realizada com sucesso! Saldo atual ${this.#saldo}`)
    }
    sacar(valor){
        if (this.#saldo >= valor) {
            this.#saldo -= valor // Saldo = saldo - valor
        } else { 
            console.log(`Erro ao realizar a transferência! Saldo insuficiente: ${this.#saldo} `)
        }
    }
        exibirSaldo(){
            console.log(`Saldo atual: ${this.#saldo}`)
        }
}


console.log("=== Conta Bancária ===")
console.log(`===  Bem-vindo(a) !! ===`)
console.log(`   `)
let conta1 = new ContaBancaria("Naomy");
conta1.exibirSaldo();
conta1.depositar(500);
conta1.exibirSaldo();
conta1.sacar(2000);
conta1.exibirSaldo();
conta1.sacar(1000);
