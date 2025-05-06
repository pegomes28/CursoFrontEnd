// Atividade 2: Criar uma classe para Veículos
// Atributos: marca, modelo, ano
// Métodos: exibirInfo().
// Criar uma subclasse Carro que herde de Veículo

class Veiculo {
    #marca;
    #modelo;
    #ano;
    // Construtor
    constructor(marca, modelo , ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }
    //  Métodos
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, \nModelo: ${this.#modelo}, \nAno: ${this.#ano}`);
    }
}
    class Carros extends Veiculo{
        // Atributos Privados
        #quantidadePortas;

        // Construtor
        constructor(marca, modelo, ano, quantidadePortas){
            super(marca, modelo, ano); // Chama o constutor da classe pai
            this.#quantidadePortas = quantidadePortas;
        }
        // Métodos
        exibirInfo(){
            super.exibirInfo();
            console.log(`Quantidade de portas: ${this.#quantidadePortas}`);
        }
    }

    let carro1 = new Carros("Fiat", "Palio", 2010, 4);
    let carro2 = new Carros("Chevrolet", "Onix", 2020, 4);

    carro1.exibirInfo();
    carro2.exibirInfo();
