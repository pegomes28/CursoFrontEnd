// Atividade 4 - Sistema de Funcionários 
//  Atributos: nome, salário, cargo
// Métodos: aumentarSalario(%), exibirInfo():

class Funcionario {
    // Atributos privados
    #nome;
    #salario;
    #cargo;

    // Construtor 
    constructor(nome, salario, cargo){
        this.#nome = nome;
        this.#salario = salario;
        this.#cargo = cargo;
    }
    // Métodos
    aumentarSalario(porcentagem){
        if(porcentagem> 0){
            this.#salario += this.#salario *(porcentagem/100); // Salario = salario + (salario * porcentagem/100)
            console.log(`Aumento de ${porcentagem}% aplicado com sucesso!!`);
        }else{
            console.log(`Porcentagem Inválida!`)
        }    
}
    //  Getter and Setters
    set setCargo(cargo){
        this.#cargo = cargo;
    }
    exibirInfo(){
        console.log(`Nome: ${this.#nome}, \nCargo: ${this.#cargo}, \nSalario: ${this.#salario}`)
    }
}

let funcionario1 = new Funcionario("Naomy", 5000, "Gerente");

funcionario1.exibirInfo();
funcionario1.setCargo = "Diretora";
funcionario1.aumetarSalario(30);
funcionario1.exibirInfo();