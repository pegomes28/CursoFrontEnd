// Atividade 1: Crirar uma classe representando um produto
// Atributos: nome, preco, estoque
// métodos Vender , repor , eibirInfo()

class Produto {
    // Encapsulamento dos atributos
    #nome;
    #preco;
    #estoque;
    // Constutor 
    constructor(nome,preco,estoque){
        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }
    // Métodos 
    vender(quantidade){
        if(this.#estoque >= quantidade){
            this.#estoque -= quantidade; // Estoque = Estoque - quantidade
            console.log(`Venda realizada com sucesso! Estoque atual: ${this.#estoque}`);
        }else{
            console.log(`Estoque insuficiente... Estoque atual: ${this.#estoque}`);
        }
    }
    repor(quantidade){
        this.#estoque += quantidade; // Estoque = estoque + quantidade
        console.log(`Estoque Reposto! Estoque atual: ${this.#estoque}`);
    }
    
    exibirInfo(){
        console.log(`Nome: ${this.#nome}, \nPreço: ${this.#preco}, \nEstoque: ${this.#estoque}`);
    }
}

// Instanciar os objetos
let produto1 = new Produto("Arroz", 30, 100);
produto1.exibirInfo();
produto1.vender(10);
produto1.exibirInfo();
produto1.vender(200);
produto1.repor(50);
produto1.exibirInfo();