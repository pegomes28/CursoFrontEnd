// Atividade 01 - Criar uma classe "Pessoa"

class Pessoa {
    #nome;
    #idade;

// Constutor 
constructor(nome, idade){
    this.#nome = nome;
    this.#idade = idade;
    }


//  Métodos 
apresentar(){
    console.log(`\nOlá, meu nome é ${this.#nome} e tenho ${this.#idade} anos.\n`);
    }
}

let pessoa1 = new Pessoa("Rayssa", 17)

pessoa1.apresentar()

// Atividade 02 - Criar uma classe "Livro"

class Livro {
    #titulo;
    #autor;
    #paginas;

    // Construtor
    constructor(titulo, autor, paginas){
        this.#titulo = titulo;
        this.#autor = autor;
        this.#paginas = paginas;
    }

    // Métodos
    exibirInfo(){
        console.log(`Informações do livro = \nTitulo: ${this.#titulo} \nAutor: ${this.#autor} \nPáginas: ${this.#paginas}`);
    }
}

let Livro1 = new Livro ("Pare de se odiar", "Alexandra Gurgel", 187);

Livro1.exibirInfo();

// Atividade 03 - Calculadora

class Calculadora {
    // Métodos
    somar(a, b){
        return a + b;
    }
    subtrair(a, b){
        return a - b;
    }
    dividir(a, b){
        return a / b;
    }
    multiplicar(a, b){
        return a * b;
    }

    // Método para exibir resultados
    exibirResultado(operacao, a, b){
        let resultado;
        switch(operacao){
            case 'soma':
                resultado = this.somar(a, b);
                break;
            case 'subtracao':
                resultado = this.subtrair(a, b);
                break;
            case 'divisao':
                resultado = this.dividir(a, b);
                break;
            case 'multiplicacao':
                resultado = this.multiplicar(a, b);
                break;
            default:
                console.log("Operação inválida.");
                return;
        }
        console.log(`Resultado da ${operacao}: ${resultado}`);
    }
}
