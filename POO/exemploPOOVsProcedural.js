//diferencça entre POO e Procedural(estrutural)

//procedural
// declaração de variavel
let produto1 = {
    nome: "Celular",
    preco: 1000,
    desconto: function () {
      return this.preco * 0.1;
    },
  }; //coleção
  
  let produto2 = {
    nome: "Camera Digital",
    preco: 5000,
    desconto: function () {
      return this.preco * 0.1;
    },
  }; //coleção
  
  // X
  
  // POO - classe de produtos
  
  class Produto {
    //atributos
    #nome; // # privado
    #preco; // # privado
  
    constructor(nome, preco) {
      this.#nome = nome;
      this.#preco = preco;
    }
    //criar métodos getter e setter
    get getNome() {
      return this.#nome;
    }
    get getPreco() {
      return this.#preco;
    }
    desconto() {
      return this.getPreco * 0.1; //erro ao chamar o this.preco, pois o atributo é privado
    }
  }
  
  //instaciar um objeto
  let p1 = new Produto("Impressora", 2000);
  let p2 = new Produto("Tablet", 1500);
  
  //exemplos de uso de POO
  class Pessoa {
    //atributos privados
    #nome;
    #idade;
    #cpf;
  
    //construtor
    constructor(nome, idade, cpf) {
      this.#nome = nome;
      this.#idade = idade;
      this.#cpf = cpf;
    }
    //metodos públicos
    get getNome() {
      return this.#nome;
    }
    get getIdade() {
      return this.#idade;
    }
    get getCpf() {
      return this.#cpf;
    }
  
    set setIdade(idade) {
      this.#idade = idade;
    }
  
    //métodos Informações
    exibirInfo() {
      console.log(
        `Nome: ${this.getNome} \nIdade: ${this.getIdade} \nCPF: ${this.getCpf}`
      );
    }
  }
  
  let pessoa1 = new Pessoa("João", 30, "123.456.789-00");
  let pessoa2 = new Pessoa("Maria", 35, "987.654.321-00");
  
  pessoa1.exibirInfo();
  pessoa2.exibirInfo();
  
  pessoa1.setIdade = 31;//atualizei a idade da pessoa1
  pessoa1.exibirInfo(); //exibir as informações atualizadas
  
  
  //herança (extends)
  
  class Funcionario extends Pessoa {
      //atributos privados
      #cargo;
      #salario;
  
      //construtor
      constructor(nome, idade, cpf, cargo, salario){
          super(nome, idade,cpf); //chama o construtor da superclasse
          this.#cargo = cargo;
          this.#salario = salario;
      }
      //métodos publicos
      get getCargo(){
          return this.#cargo;
      }
      get getSalario(){
          return this.#salario;
      }
      set setSalario(salario){
          this.#salario = salario;
      }
      set setCargo(cargo){
          this.#cargo = cargo;
      }
  
      //metodo exibirInfo
        exibirInfo(){
            super.exibirInfo(); //chama o método da superclasse
            console.log(`Cargo: ${this.getCargo} \nSalario: ${this.getSalario}`);
        }
  }
  
  let funcionario1 = new Funcionario("Pejota", 27, "123.456.789-00", "Gerente", 5000);
  let funcionario2 = new Funcionario("Naomy", 35, "987.654.321-00", "Analista", 3000);

  funcionario1.exibirInfo();
  funcionario1.setSalario = 6000; //atualiza o salario do funcionario1
  funcionario1.exibirInfo(); //exibe as informações atualizadas